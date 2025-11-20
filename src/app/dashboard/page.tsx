"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { Logo } from "@/components/ui/Logo";

export default function DashboardPage() {
  const flameRef = useRef<HTMLSpanElement>(null);
  const streakCardRef = useRef<HTMLDivElement>(null);
  const quizCardRef = useRef<HTMLDivElement>(null);
  const punchCardRef = useRef<HTMLDivElement>(null);
  const leaderboardRef = useRef<HTMLDivElement>(null);
  const goalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Staggered card entrance animations
    const cards = [streakCardRef.current, quizCardRef.current, punchCardRef.current, leaderboardRef.current].filter(Boolean);
    gsap.fromTo(
      cards,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power2.out" }
    );

    // Goal indicator animation
    if (goalRef.current) {
      gsap.fromTo(goalRef.current, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.5, delay: 0.2 });
    }

    // Continuous flame pulse animation
    if (flameRef.current) {
      gsap.to(flameRef.current, {
        scale: 1.15,
        duration: 0.6,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }
  }, []);

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light overflow-x-hidden grid-bg-orange">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-8 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {/* Header */}
            <header className="flex items-center justify-between whitespace-nowrap bg-background-light border-b-4 border-solid border-theme-dark-text px-4 sm:px-10 py-3">
              <div className="flex items-center gap-4 text-theme-dark-text">
                <div className="size-6 text-theme-orange">
                  <Logo className="size-6" />
                </div>
                <h2 className="text-theme-green text-xl font-[family-name:var(--font-heading)] font-bold leading-tight tracking-[-0.015em]">
                  PrepStreak
                </h2>
              </div>
              <div className="flex gap-2">
                <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-10 w-10 bg-theme-green/10 text-theme-green hover:bg-theme-green/20 transition-all duration-200 hover:scale-105">
                  <span className="material-symbols-outlined text-xl">person</span>
                </button>
                <Link
                  href="/leaderboard"
                  className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-10 w-10 bg-theme-green/10 text-theme-green hover:bg-theme-green/20 transition-all duration-200 hover:scale-105"
                >
                  <span className="material-symbols-outlined text-xl">bar_chart</span>
                </Link>
                <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-10 w-10 bg-theme-green/10 text-theme-green hover:bg-theme-green/20 transition-all duration-200 hover:scale-105">
                  <span className="material-symbols-outlined text-xl">settings</span>
                </button>
              </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 p-4 font-[family-name:var(--font-body)]">
              {/* Greeting + Daily Goal */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 pt-6 pb-3 gap-4">
                <h1 className="text-theme-dark-text tracking-tight text-4xl sm:text-[48px] font-[family-name:var(--font-heading)] leading-tight font-bold">
                  Good morning, Arjun!
                </h1>
                <div
                  ref={goalRef}
                  className="flex items-center gap-2 bg-theme-orange/20 px-4 py-2 rounded-lg border-2 border-dashed border-theme-orange"
                >
                  <span className="text-lg">🎯</span>
                  <span className="text-theme-dark-text font-bold text-sm">
                    Today&apos;s Goal: <span className="text-theme-orange">0/1</span> quiz
                  </span>
                </div>
              </div>

              {/* Streak Card */}
              <div className="p-4" ref={streakCardRef}>
                <div className="flex flex-col md:flex-row items-stretch justify-between gap-6 rounded-xl bg-gradient-to-br from-theme-bg to-theme-orange/10 p-6 border-4 border-theme-dark-text shadow-[6px_6px_0px_#342D26] hover:shadow-[8px_8px_0px_#342D26] transition-all duration-300 hover:-translate-y-1">
                  <div className="flex flex-col gap-2 flex-[2_2_0px]">
                    <div className="flex items-center gap-3">
                      <span ref={flameRef} className="text-4xl">🔥</span>
                      <p className="text-3xl font-bold leading-tight text-theme-red font-[family-name:var(--font-heading)]">
                        7 Day Streak!
                      </p>
                    </div>
                    <p className="text-theme-dark-text/80 text-sm font-normal leading-normal">
                      Keep it sizzling! Complete today&apos;s special to extend your streak.
                    </p>
                    <div className="flex flex-col gap-3 pt-4">
                      <div className="flex gap-6 justify-between items-center">
                        <p className="text-theme-dark-text text-base font-bold leading-normal">
                          XP Thermometer
                        </p>
                        <p className="text-theme-dark-text/80 text-sm font-normal leading-normal">
                          450/500 XP
                        </p>
                      </div>
                      <div className="rounded-full bg-theme-dark-text/20 h-4 w-full border-2 border-theme-dark-text p-0.5 overflow-hidden">
                        <div className="h-full rounded-full bg-gradient-to-r from-theme-orange to-theme-red animate-pulse" style={{ width: "90%" }}></div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1 md:max-w-xs border-2 border-theme-dark-text shadow-[3px_3px_0px_#342D26]"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCsCVKilvIx86NE-MLtlyUmji_0UnzVBDng8MhYMneEws-xTG_qgnkTcZyFoAJGLmuXqlo24fPlgG2IeviSQ0NnnvEafOOnMfKRKkTLCJBbGmU7yaifNfkPLkJtzcaZyKRmLC0dnB_oJm7pL6JIq82rIFWeV-_yVj9at3U-8jHOH6QwrMW8vT2KUYYiWJcSDYixO31VcNZAseYJHr_gGaqKOGRPFFbQMjYsXGoDieVqerPslWdl9iqmxnOikCPgneR5P4dejWghrMw")',
                    }}
                  ></div>
                </div>
              </div>

              {/* TODAY'S SPECIAL - Main CTA */}
              <div className="px-4 pt-2" ref={quizCardRef}>
                {/* Urgency Banner */}
                <div className="flex items-center justify-center gap-2 mb-4 py-2 px-4 bg-theme-red/10 rounded-lg border-2 border-dashed border-theme-red/50">
                  <span className="text-xl">⏰</span>
                  <p className="text-theme-red font-bold text-sm sm:text-base animate-pulse">
                    Complete before midnight to keep your streak!
                  </p>
                </div>

                <div className="relative flex flex-col gap-5 rounded-xl bg-gradient-to-br from-theme-bg to-theme-green/5 p-8 border-4 border-theme-dark-text shadow-[6px_6px_0px_#342D26] hover:shadow-[8px_8px_0px_#342D26] transition-all duration-300 hover:-translate-y-1">
                  {/* Decorative circles */}
                  <div className="absolute -top-4 -left-4 rotate-[-12deg]">
                    <svg className="text-theme-orange" fill="none" height="34" viewBox="0 0 34 26" width="44" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.77701 10.999C2.08386 5.37257 6.47648 1.40194 12.1029 1.70879C17.7293 2.01564 21.6999 6.40826 21.4005 12.0347C21.101 17.6611 16.7084 21.6317 11.082 21.3249C5.45553 21.018 1.47016 16.6254 1.77701 10.999Z" fill="currentColor" stroke="#342D26" strokeWidth="2" />
                      <path d="M12.3995 12.0347C12.6989 6.40826 17.0915 2.43763 22.718 2.74448C28.3444 3.05133 32.315 7.44395 32.0156 13.0704C31.7161 18.6968 27.3235 22.6674 21.6971 22.3606C16.0706 22.0537 12.1001 17.6611 12.3995 12.0347Z" fill="currentColor" stroke="#342D26" strokeWidth="2" />
                    </svg>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex flex-col gap-3">
                      {/* Topic Badge */}
                      <p className="text-sm font-bold text-white py-1.5 px-4 bg-theme-green rounded-lg self-start relative z-10 shadow-[3px_3px_0px_#342D26] border-2 border-theme-dark-text">
                        🎯 Arrays &amp; Hashing
                      </p>
                      {/* Problem Info */}
                      <h3 className="text-theme-dark-text text-2xl sm:text-3xl font-bold leading-tight font-[family-name:var(--font-heading)]">
                        Two Sum Problem
                      </h3>
                      <p className="text-theme-dark-text/80 text-base font-normal leading-normal max-w-md">
                        Given an array of integers, return indices of the two numbers such that they add up to a specific target.
                      </p>
                    </div>

                    {/* Timer and XP - Desktop */}
                    <div className="hidden sm:flex flex-col gap-3">
                      <div className="flex items-center gap-2 text-base py-2 px-4 bg-theme-orange/20 rounded-lg border-2 border-theme-orange/50">
                        <span className="material-symbols-outlined">timer</span>
                        <span className="font-bold">5 min</span>
                      </div>
                      <div className="flex items-center gap-2 text-base py-2 px-4 bg-yellow-400/30 rounded-lg border-2 border-yellow-500/50">
                        <span>⚡</span>
                        <span className="font-bold">50 XP</span>
                      </div>
                    </div>
                  </div>

                  {/* Timer and XP - Mobile */}
                  <div className="flex sm:hidden items-center gap-4 text-theme-dark-text">
                    <div className="flex items-center gap-1.5 text-sm py-1 px-2.5 bg-theme-orange/20 rounded-md border-2 border-dashed border-theme-orange/50">
                      <span className="material-symbols-outlined text-base">timer</span>
                      <span>5 min</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm py-1 px-2.5 bg-yellow-400/30 rounded-md border-2 border-dashed border-yellow-500/50">
                      <span>⚡</span>
                      <span>50 XP</span>
                    </div>
                  </div>

                  {/* BIG Start Quiz Button */}
                  <Link
                    href="/quiz"
                    className="flex items-center justify-center gap-3 rounded-xl h-16 sm:h-20 px-8 bg-theme-green text-white text-xl sm:text-2xl font-bold leading-normal w-full mt-2 hover:bg-theme-green/90 transition-all duration-200 border-4 border-theme-dark-text shadow-[4px_4px_0px_#342D26] hover:shadow-[6px_6px_0px_#342D26] hover:-translate-y-1 font-[family-name:var(--font-heading)] uppercase tracking-wide"
                  >
                    <span>🚀 Start Quiz</span>
                    <span className="material-symbols-outlined text-3xl">arrow_forward</span>
                  </Link>
                </div>
              </div>

              {/* Bottom Grid - Punch Card + Leaderboard */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-4 pt-6">
                {/* Punch Card */}
                <div ref={punchCardRef}>
                  <h2 className="text-theme-dark-text text-xl font-bold leading-tight tracking-[-0.015em] pb-3 font-[family-name:var(--font-heading)]">
                    📅 Punch Card
                  </h2>
                  <div className="flex flex-col gap-4 rounded-xl bg-theme-bg p-6 border-4 border-theme-dark-text shadow-[4px_4px_0px_#342D26] hover:shadow-[6px_6px_0px_#342D26] transition-all duration-300 hover:-translate-y-1">
                    <p className="text-theme-dark-text font-bold">This Week</p>
                    <div className="flex justify-between items-center text-center">
                      {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => {
                        const isCompleted = i < 4;
                        const isCurrent = i === 4;
                        const isFuture = i > 4;
                        return (
                          <div key={i} className="flex flex-col items-center gap-2">
                            <p className={`text-sm ${isCurrent ? "font-bold text-theme-dark-text" : "text-theme-dark-text/60"}`}>
                              {day}
                            </p>
                            <div
                              className={`flex items-center justify-center size-9 rounded-full border-2 ${
                                isCompleted
                                  ? "bg-theme-green text-white border-theme-dark-text"
                                  : isCurrent
                                  ? "bg-theme-orange/50 text-theme-dark-text font-bold border-theme-dark-text animate-pulse"
                                  : "bg-black/5 text-black/40 border-black/20"
                              }`}
                            >
                              {isCompleted ? "✓" : isCurrent ? "?" : ""}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Leaderboard Preview */}
                <div ref={leaderboardRef}>
                  <h2 className="text-theme-dark-text text-xl font-bold leading-tight tracking-[-0.015em] pb-3 font-[family-name:var(--font-heading)]">
                    🏆 Leaderboard
                  </h2>
                  <Link href="/leaderboard" className="block">
                    <div className="flex flex-col gap-4 rounded-xl bg-gradient-to-br from-theme-bg to-yellow-100/50 p-6 border-4 border-theme-dark-text shadow-[4px_4px_0px_#342D26] hover:shadow-[6px_6px_0px_#342D26] transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                      {/* Your Rank */}
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-theme-dark-text/60 text-sm font-bold">Your Rank</p>
                          <p className="text-3xl font-bold text-theme-dark-text font-[family-name:var(--font-heading)]">
                            #4 <span className="text-lg text-green-600">↑2</span>
                          </p>
                        </div>
                        <div className="text-4xl">🏅</div>
                      </div>

                      {/* Mini Leaderboard */}
                      <div className="space-y-2 border-t-2 border-dashed border-theme-dark-text/30 pt-3">
                        <div className="flex items-center justify-between text-sm">
                          <span className="font-bold">🥇 Sarah C.</span>
                          <span className="text-theme-dark-text/80">2,450 XP</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="font-bold">🥈 Mike R.</span>
                          <span className="text-theme-dark-text/80">2,120 XP</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="font-bold">🥉 Lisa P.</span>
                          <span className="text-theme-dark-text/80">1,890 XP</span>
                        </div>
                      </div>

                      {/* View Full */}
                      <div className="flex items-center justify-center gap-2 text-theme-green font-bold text-sm pt-2 border-t-2 border-dashed border-theme-dark-text/30">
                        View Full Leaderboard
                        <span className="material-symbols-outlined text-base">arrow_forward</span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
