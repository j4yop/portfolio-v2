import { NextResponse } from 'next/server';

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const cache = new Map<string, { expiresAt: number; data: unknown }>();
const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes

async function fetchFallbackCalendar() {
  try {
    const res = await fetch("https://github-contributions-api.jogruber.de/v4/j4yop?y=last", {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    const json = await res.json();
    const days = (json.contributions || []) as Array<{ date: string; count: number; level: number }>;

    const weeks: Array<{ contributionDays: Array<{ contributionCount: number; date: string }> }> = [];
    for (let i = 0; i < days.length; i += 7) {
      const chunk = days.slice(i, i + 7);
      weeks.push({
        contributionDays: chunk.map((d) => ({
          contributionCount: d.count,
          date: d.date,
        })),
      });
    }

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const seenMonths = new Set<string>();
    const months: Array<{ name: string }> = [];
    for (const d of days) {
      const monthIdx = parseInt(d.date.slice(5, 7), 10) - 1;
      const mName = monthNames[monthIdx];
      if (mName && !seenMonths.has(mName)) {
        seenMonths.add(mName);
        months.push({ name: mName });
      }
    }

    return {
      data: {
        user: {
          contributionsCollection: {
            contributionCalendar: {
              totalContributions: json.total?.lastYear ?? days.reduce((sum, d) => sum + d.count, 0),
              months,
              weeks,
            },
          },
        },
      },
    };
  } catch (err) {
    console.error("Fallback contribution fetch failed:", err);
    return null;
  }
}

export async function POST(request: Request) {
  try {
    const { query } = await request.json();
    const token = process.env.GITHUB_TOKEN || "";

    const cached = cache.get(query);
    if (cached && Date.now() < cached.expiresAt) {
      return NextResponse.json(cached.data, { headers: { "X-Cache": "HIT" } });
    }

    if (token) {
      try {
        const response = await fetch("https://api.github.com/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ query }),
        });

        if (response.ok) {
          const data = await response.json();
          if (data && !data.errors && data.data) {
            cache.set(query, { expiresAt: Date.now() + CACHE_TTL_MS, data });
            return NextResponse.json(data, { headers: { "X-Cache": "MISS" } });
          }
        }
      } catch (err) {
        console.error("GraphQL request failed, trying fallback:", err);
      }
    }

    // Fallback for contribution calendar query if token is missing or upstream fails
    if (typeof query === "string" && query.includes("contributionsCollection")) {
      const fallbackData = await fetchFallbackCalendar();
      if (fallbackData) {
        cache.set(query, { expiresAt: Date.now() + CACHE_TTL_MS, data: fallbackData });
        return NextResponse.json(fallbackData, { headers: { "X-Cache": "FALLBACK" } });
      }
    }

    return NextResponse.json(
      { error: "Failed to fetch from GitHub", message: "Token missing or request failed" },
      { status: 500 }
    );
  } catch (error) {
    console.error("GitHub API Proxy Error:", error);
    return NextResponse.json({ error: "Failed to fetch from GitHub" }, { status: 500 });
  }
}
