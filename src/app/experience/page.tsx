"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { CommandMenu } from "@/components/command-menu";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { RightNavbar } from "@/components/RightNavbar";
import { FooterBackground } from "@/components/FooterBackground";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, ExternalLink, Award } from "lucide-react";
import Image from "next/image";
import { experiences } from "@/data/experienceData";

export default function AllExperiencePage() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const selectExperience = (experienceIndex: number) => {
    setOpenIdx(experienceIndex);
    window.requestAnimationFrame(() => {
      document.getElementById(`experience-${experienceIndex}`)?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    });
  };

  return (
    <div className="min-h-screen w-full bg-white dark:bg-black relative overflow-x-hidden transition-colors duration-300 [--experience-hero:clamp(320px,38vh,370px)]">
      {/* Right Side Blueprint Navigation */}
      <RightNavbar />

      {/* Vertical Lines - Ultra-fine Micro Dots */}
      <div className="absolute top-0 bottom-0 left-[30%] w-0 border-r border-black/30 dark:border-white/[0.15] pointer-events-none hidden md:block" style={{ maskImage: 'repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)', WebkitMaskImage: 'repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)' }} />
      <div className="absolute top-0 bottom-0 right-[30%] w-0 border-r border-black/30 dark:border-white/[0.15] pointer-events-none hidden md:block" style={{ maskImage: 'repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)', WebkitMaskImage: 'repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)' }} />

      {/* Horizontal Lines - Ultra-fine Micro Dots */}
      <div className="absolute left-0 right-0 top-[var(--experience-hero)] h-0 border-b border-black/30 dark:border-white/[0.15] pointer-events-none" style={{ maskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)', WebkitMaskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)' }} />
      <div className="absolute left-0 right-0 top-[calc(var(--experience-hero)+112px)] h-0 border-b border-black/30 dark:border-white/[0.15] pointer-events-none" style={{ maskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)', WebkitMaskImage: 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)' }} />

      {/* Ultra-Tiny Solid Nodes */}
      {[
        { top: 'var(--experience-hero)', left: '30%' },
        { top: 'var(--experience-hero)', right: '30%' },
        { top: 'calc(var(--experience-hero) + 112px)', left: '30%' },
        { top: 'calc(var(--experience-hero) + 112px)', right: '30%' },
      ].map((pos, i) => (
        <div key={i} className="absolute w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] pointer-events-none z-10 hidden md:block"
          style={{
            top: pos.top,
            left: pos.left,
            right: pos.right,
            transform: `translate(${pos.right ? '50%' : '-50%'}, -50%)`
          }} />
      ))}

      {/* Cell 1: Career Timeline Canvas */}
      <div className="absolute left-0 right-0 md:left-[30%] md:right-[30%] top-0 h-[var(--experience-hero)] -z-0 pointer-events-auto overflow-hidden bg-white dark:bg-black shadow-[0_4px_12px_rgba(2,6,23,0.04)] dark:shadow-[0_4px_12px_rgba(2,6,23,0.10)]">
        <ExperienceTimeline onSelect={selectExperience} />
        <div className="absolute inset-x-0 bottom-0 h-10 pointer-events-none z-[5] bg-gradient-to-t from-white/90 to-transparent dark:from-black/50 dark:to-transparent" />
        <div className="absolute left-0 top-0 bottom-0 w-8 pointer-events-none z-20 bg-gradient-to-r from-white/90 to-transparent dark:from-black/40 dark:to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-8 pointer-events-none z-20 bg-gradient-to-l from-white/90 to-transparent dark:from-black/40 dark:to-transparent" />
      </div>

      {/* Cell 2: Header Section */}
      <div className="absolute left-0 right-0 md:left-[30%] md:right-[30%] top-[var(--experience-hero)] h-[112px] flex items-center px-4 z-50">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-4 sm:gap-5">
            <Link
              href="/"
              className="p-2 -ml-2 rounded-lg text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div className="flex flex-col justify-center">
              <h1 className="text-[20px] sm:text-[24px] font-bold text-zinc-800 dark:text-zinc-100 tracking-tight leading-none mb-0.5 [text-shadow:-1.5px_0_0_rgba(0,200,255,0.3),1.5px_0_0_rgba(255,80,0,0.3)] dark:[text-shadow:-1.5px_0_0_rgba(0,200,255,0.6),1.5px_0_0_rgba(255,80,0,0.6)]">
                All Experiences
              </h1>
              <p className="text-[13px] sm:text-[14px] text-zinc-500 dark:text-zinc-400">
                Detailed timeline & engineering journey
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <CommandMenu />
            <ThemeToggle className="dark:text-zinc-400 hover:dark:text-zinc-300" />
          </div>
        </div>
      </div>

      {/* Flowing Content Section */}
      <div className="ml-0 mr-0 md:ml-[30%] md:mr-[30%] pt-[calc(var(--experience-hero)+112px)] pb-12 px-4 flex flex-col z-10 relative min-h-screen">
        <div className="mt-4 flex flex-col relative z-10">
          <div className="block">
            {experiences.map((item, idx) => {
              const isOpen = openIdx === idx;
              const isLast = idx === experiences.length - 1;

              return (
                <div key={idx} id={`experience-${idx}`} className="group relative scroll-mt-28">
                  {/* Dashed bottom border for all items except the last one */}
                  {!isLast && (
                    <div
                      className="absolute bottom-0 left-[-16px] right-[-16px] h-0 border-b border-black/30 dark:border-white/[0.15] pointer-events-none z-10"
                      style={{
                        maskImage:
                          "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                        WebkitMaskImage:
                          "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                      }}
                    />
                  )}

                  {/* Special full-width dashed line and intersection dots for the last item */}
                  {isLast && (
                    <>
                      <div
                        className="absolute bottom-0 left-[-100vw] right-[-100vw] h-0 border-b border-black/30 dark:border-white/[0.15] pointer-events-none z-10"
                        style={{
                          maskImage:
                            "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                          WebkitMaskImage:
                            "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                        }}
                      />
                      <div className="absolute bottom-0 -left-4 w-[2px] h-[2px] bg-black/40 dark:bg-white/[0.25] -translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
                      <div className="absolute bottom-0 -right-4 w-[2px] h-[2px] bg-black/40 dark:bg-white/[0.25] translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
                    </>
                  )}

                  <div
                    className="flex flex-col items-start gap-2.5 py-3.5 px-4 -mx-4 hover:bg-zinc-50 dark:hover:bg-zinc-900/20 transition-colors cursor-pointer relative z-20 rounded-lg sm:gap-3 sm:py-4 2xl:flex-row 2xl:items-center 2xl:justify-between"
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                  >
                    <div className="flex min-w-0 flex-1 items-start gap-3 sm:gap-4">
                      <div className="size-10 shrink-0 rounded-[10px] border border-black/10 bg-zinc-50 p-[2px] shadow-sm shadow-black/15 dark:border-zinc-800 dark:bg-[#111111] dark:shadow-md dark:shadow-black/50">
                        <div className="w-full h-full rounded-[7px] border border-black/5 dark:border-black/20 bg-white flex items-center justify-center overflow-hidden relative">
                          <Image
                            src={item.src}
                            alt={item.title}
                            width={40}
                            height={40}
                            sizes="40px"
                            quality={60}
                            style={item.imageZoom ? { transform: `scale(${item.imageZoom})` } : undefined}
                            className={`${item.imageFit === "contain" ? "object-contain" : "object-cover"} w-full h-full p-0.5`}
                          />
                        </div>
                      </div>
                      <div className="flex min-w-0 flex-col gap-0.5 pr-2 sm:pr-4">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-[14px] font-bold leading-tight text-zinc-900 dark:text-zinc-100 sm:text-[17px]">
                            {item.title}
                          </span>
                          {item.type && (
                            <span className="self-center whitespace-nowrap px-1.5 py-[1px] rounded-[4px] text-[11px] font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/60">
                              {item.type}
                            </span>
                          )}
                          {item.certificateUrl && (
                            <a
                              href={item.certificateUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center gap-1 px-1.5 py-[1px] rounded-[4px] text-[11px] font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800/60 hover:underline"
                              title="View Official Certificate"
                            >
                              <Award className="w-3 h-3" />
                              <span>Verified Proof</span>
                              <ExternalLink className="w-2.5 h-2.5 opacity-70" />
                            </a>
                          )}
                        </div>
                        <span className="truncate text-[14px] text-zinc-600 dark:text-zinc-400 sm:text-[15px]">
                          {item.role}
                        </span>
                      </div>
                    </div>
                    <div className="flex shrink-0 flex-col items-start gap-0.5 pr-5 pl-[52px] text-left sm:pl-[56px] 2xl:items-end 2xl:pl-0 2xl:text-right">
                      <div className="relative flex items-center text-[13px] font-medium text-zinc-900 dark:text-zinc-100 sm:text-[14px]">
                        <span>{item.dates}</span>
                        <svg
                          viewBox="0 0 24 24"
                          className={`w-3.5 h-3.5 text-zinc-500 absolute -right-5 top-1/2 -translate-y-1/2 transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                      <span className="text-[13px] text-zinc-500 dark:text-zinc-400 sm:text-[14px]">
                        {item.location}
                      </span>
                    </div>
                  </div>

                  {/* Expandable Details Section */}
                  <div
                    className={`-mx-4 grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div
                        className={`${
                          isOpen ? "pb-4 pt-0 opacity-100 translate-y-0" : "pb-0 pt-0 opacity-0 -translate-y-2"
                        } transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] pl-6 pr-8 text-[14px] text-zinc-600 dark:text-zinc-400`}
                      >
                        {/* Embedded Certificate Banner */}
                        {item.certificateUrl && (
                          <div className="mb-4 p-3 rounded-lg bg-zinc-50 dark:bg-[#121214] border border-black/10 dark:border-white/10 flex flex-wrap items-center justify-between gap-3 shadow-xs">
                            <div className="flex items-center gap-2">
                              <Award className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                              <div>
                                <p className="text-[13px] font-semibold text-zinc-900 dark:text-zinc-100">
                                  Research Internship Credential
                                </p>
                                <p className="text-[11px] text-zinc-500">
                                  Issued by Centre for Cyber-Physical Systems, VIT Chennai
                                </p>
                              </div>
                            </div>
                            <a
                              href={item.certificateUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[6px] text-[12px] font-medium text-white bg-blue-600 hover:bg-blue-500 dark:bg-blue-700 dark:hover:bg-blue-600 transition-colors shadow-xs"
                            >
                              <span>View Proof on Google Drive</span>
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          </div>
                        )}
                        {item.metrics && (
                          <div className="relative -ml-6 -mr-8 mb-4">
                            <div className="grid max-w-full grid-cols-2 pl-6 pr-8 2xl:grid-cols-4">
                              {item.metrics.map((metric) => (
                                <div
                                  key={metric.label}
                                  className="relative min-w-0 px-3 py-2 after:absolute after:bottom-0 after:right-0 after:top-0 after:w-0 after:border-r after:border-black/30 after:[mask-image:repeating-linear-gradient(to_bottom,black_0,black_1px,transparent_1px,transparent_6px)] dark:after:border-white/[0.15] [&:nth-child(2n)]:after:hidden 2xl:[&:not(:last-child)]:after:block 2xl:[&:last-child]:after:hidden"
                                >
                                  <p
                                    className={`${
                                      metric.value.includes(" - ") ? "text-[13px]" : "text-[16px]"
                                    } whitespace-nowrap font-bold leading-none text-zinc-900 dark:text-zinc-100`}
                                  >
                                    {metric.value}
                                  </p>
                                  <p className="mt-1 text-[10px] font-medium uppercase text-zinc-400 dark:text-zinc-600">
                                    {metric.label}
                                  </p>
                                </div>
                              ))}
                            </div>
                            <span
                              className="pointer-events-none absolute inset-x-0 top-0 h-0 border-t border-black/30 dark:border-white/[0.15]"
                              style={{
                                maskImage:
                                  "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                                WebkitMaskImage:
                                  "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                              }}
                            />
                            <span
                              className="pointer-events-none absolute inset-x-0 top-1/2 h-0 border-t border-black/30 dark:border-white/[0.15] 2xl:hidden"
                              style={{
                                maskImage:
                                  "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                                WebkitMaskImage:
                                  "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                              }}
                            />
                            <span
                              className="pointer-events-none absolute inset-x-0 bottom-0 h-0 border-b border-black/30 dark:border-white/[0.15]"
                              style={{
                                maskImage:
                                  "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                                WebkitMaskImage:
                                  "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                              }}
                            />
                            <span className="pointer-events-none absolute left-0 top-0 h-[2px] w-[2px] -translate-x-1/2 -translate-y-1/2 bg-black/50 dark:bg-white/[0.25]" />
                            <span className="pointer-events-none absolute right-0 top-0 h-[2px] w-[2px] translate-x-1/2 -translate-y-1/2 bg-black/50 dark:bg-white/[0.25]" />
                            <span className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-[2px] -translate-x-1/2 translate-y-1/2 bg-black/50 dark:bg-white/[0.25]" />
                            <span className="pointer-events-none absolute bottom-0 right-0 h-[2px] w-[2px] translate-x-1/2 translate-y-1/2 bg-black/50 dark:bg-white/[0.25]" />
                          </div>
                        )}

                        {isOpen && item.screenshot && (
                          <div className="relative mb-4 overflow-hidden bg-black">
                            <Image
                              src={item.screenshot}
                              alt={`${item.title} screenshot`}
                              width={1400}
                              height={1050}
                              sizes="(min-width: 768px) 40vw, calc(100vw - 3rem)"
                              quality={70}
                              className="h-auto w-full object-cover"
                            />
                          </div>
                        )}

                        <ul className="mb-4 space-y-2 text-[13px] leading-relaxed">
                          {item.description
                            .split("\n")
                            .filter((line) => line.trim() !== "")
                            .map((point, i) => {
                              const trimmed = point.trim();
                              return (
                                <li key={i} className="flex items-start gap-1.5">
                                  <span className="text-zinc-400 dark:text-zinc-500 mt-[2px] text-[14px] leading-none">•</span>
                                  <span>{trimmed}</span>
                                </li>
                              );
                            })}
                        </ul>

                        {item.tech && (
                          <div className="flex flex-wrap gap-2 mt-4">
                            {item.tech.map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-0.5 rounded-[4px] border border-zinc-200/50 dark:border-zinc-800/50 bg-zinc-50 dark:bg-[#111111] text-[11px] font-medium text-zinc-500 dark:text-zinc-400"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <FooterBackground />
    </div>
  );
}
