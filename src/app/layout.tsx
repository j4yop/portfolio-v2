import type { Metadata } from "next";
import { Doto, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const doto = Doto({
  variable: "--font-doto",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://jaygopal-portfolio.vercel.app"
  ),
  title: "Jay Gopal Tripathy | AI & Robotics Engineer",
  description:
    "Computer Science & Engineering (AI & Robotics) student at VIT Chennai. Building scalable AI systems, computer vision models, and intelligent products.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "256x256" },
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
  },
  openGraph: {
    title: "Jay Gopal Tripathy | AI & Robotics Engineer",
    description:
      "Computer Science & Engineering (AI & Robotics) student at VIT Chennai.",
    url: "https://jaygopal-portfolio.vercel.app",
    siteName: "Jay Gopal Tripathy",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        secureUrl: "/og-image.jpg",
        width: 1024,
        height: 576,
        type: "image/jpeg",
        alt: "Jay Gopal Tripathy - AI & Robotics Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jay Gopal Tripathy | AI & Robotics Engineer",
    description:
      "Computer Science & Engineering (AI & Robotics) student at VIT Chennai.",
    site: "@j4yop",
    creator: "@j4yop",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${doto.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col dark:bg-black dark:text-zinc-50 transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
