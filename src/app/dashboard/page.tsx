"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { Logo } from "@/components/ui/Logo";

// Types
interface Topic {
  id: string;
  name: string;
  shortName: string;
  progress: number;
}

// Mock Data - Simplified topics
const dsaTopics: Topic[] = [
  { id: "arrays", name: "Arrays & Hashing", shortName: "Arrays", progress: 75 },
  { id: "strings", name: "Strings", shortName: "Strings", progress: 44 },
  { id: "trees", name: "Trees", shortName: "Trees", progress: 48 },
  { id: "graphs", name: "Graphs", shortName: "Graphs", progress: 23 },
  { id: "dp", name: "Dynamic Programming", shortName: "DP", progress: 10 },
  { id: "linked-lists", name: "Linked Lists", shortName: "Lists", progress: 55 },
];

const quickStartOptions = [
  { id: "random", label: "Random Quiz", route: "/quiz" },
  { id: "weak", label: "Weak Topics", route: "/quiz?type=weak" },
  { id: "interview", label: "Interview Prep", route: "/quiz?type=interview" },
];

export default function DashboardPage() {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const [expandedViaClick, setExpandedViaClick] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const flameRef = useRef<HTMLSpanElement>(null);
  const sidebarRef = useRef<HTMLElement>(null);
  const sidebarContentRef = useRef<HTMLDivElement>(null);
  const middleColumnRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Flame pulse animation
    if (flameRef.current) {
      gsap.to(flameRef.current, {
        scale: 1.2,
        duration: 0.6,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }

    // Initial card animations
    gsap.fromTo(
      ".animate-card",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" }
    );
  }, []);

  // Sidebar expand/collapse animations
  useEffect(() => {
    if (window.innerWidth < 1024) return;

    if (sidebarRef.current && sidebarContentRef.current && middleColumnRef.current) {
      if (sidebarExpanded) {
        // Expand animation
        gsap.to(sidebarRef.current, {
          width: 280,
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(sidebarContentRef.current, {
          opacity: 1,
          duration: 0.2,
          delay: 0.1,
          ease: "power2.out",
        });
        gsap.to(middleColumnRef.current, {
          marginLeft: 220,
          duration: 0.3,
          ease: "power2.out",
        });
      } else {
        // Collapse animation
        gsap.to(sidebarContentRef.current, {
          opacity: 0,
          duration: 0.1,
          ease: "power2.in",
        });
        gsap.to(sidebarRef.current, {
          width: 60,
          duration: 0.25,
          delay: 0.1,
          ease: "power2.in",
        });
        gsap.to(middleColumnRef.current, {
          marginLeft: 0,
          duration: 0.25,
          delay: 0.1,
          ease: "power2.in",
        });
      }
    }
  }, [sidebarExpanded]);

  // Mobile sidebar overlay animation
  useEffect(() => {
    if (window.innerWidth >= 1024) return;

    const sidebar = document.getElementById("mobile-sidebar-overlay");
    if (sidebar) {
      if (mobileSidebarOpen) {
        gsap.to(sidebar, {
          x: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      } else {
        gsap.to(sidebar, {
          x: "-100%",
          duration: 0.25,
          ease: "power2.in",
        });
      }
    }
  }, [mobileSidebarOpen]);

  const handleSidebarToggle = () => {
    if (sidebarExpanded) {
      setSidebarExpanded(false);
      setExpandedViaClick(false);
    } else {
      setSidebarExpanded(true);
      setExpandedViaClick(true);
    }
  };

  const handleSidebarMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    if (!expandedViaClick) {
      setSidebarExpanded(true);
    }
  };

  const handleSidebarMouseLeave = () => {
    if (!expandedViaClick) {
      hoverTimeoutRef.current = setTimeout(() => {
        setSidebarExpanded(false);
      }, 300);
    }
  };

  return (
    <div className="relative flex h-screen w-full flex-col bg-background-light overflow-hidden">
      {/* Header */}
      <header className="flex items-center justify-between whitespace-nowrap bg-background-light border-b-4 border-solid border-theme-dark-text px-4 sm:px-6 py-3 z-10">
        <div className="flex items-center gap-3 text-theme-dark-text">
          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileSidebarOpen(true)}
            className="lg:hidden flex items-center justify-center rounded-md h-10 w-10 bg-theme-green/10 text-theme-green hover:bg-theme-green/20 transition-all duration-200"
            aria-label="Toggle sidebar"
          >
            <span className="material-symbols-outlined text-xl">menu</span>
          </button>
          <div className="size-6 text-theme-orange">
            <Logo className="size-6" />
          </div>
          <h2 className="text-theme-green text-lg font-[family-name:var(--font-heading)] font-bold leading-tight tracking-[-0.015em]">
            PrepStreak
          </h2>
        </div>
        <div className="flex gap-2">
          {/* Desktop buttons */}
          <button className="hidden lg:flex items-center justify-center rounded-md h-10 w-10 bg-theme-green/10 text-theme-green hover:bg-theme-green/20 transition-all duration-200 hover:scale-105">
            <span className="material-symbols-outlined text-xl">person</span>
          </button>
          <Link
            href="/leaderboard"
            className="flex items-center justify-center rounded-md h-10 w-10 bg-theme-green/10 text-theme-green hover:bg-theme-green/20 transition-all duration-200 hover:scale-105"
          >
            <span className="material-symbols-outlined text-xl">leaderboard</span>
          </Link>
          <button className="hidden lg:flex items-center justify-center rounded-md h-10 w-10 bg-theme-green/10 text-theme-green hover:bg-theme-green/20 transition-all duration-200 hover:scale-105">
            <span className="material-symbols-outlined text-xl">settings</span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 overflow-hidden">
        {/* Desktop Layout with Collapsible Sidebar */}
        <div className="hidden lg:flex h-full">
          {/* COLLAPSIBLE LEFT SIDEBAR */}
          <nav
            ref={sidebarRef}
            onMouseEnter={handleSidebarMouseEnter}
            onMouseLeave={handleSidebarMouseLeave}
            className="h-full overflow-hidden border-r-4 border-theme-dark-text bg-background-light grid-bg-orange flex-shrink-0"
            style={{ width: 60 }}
            aria-label="Main navigation"
          >
            {/* Collapsed State - Icons Only */}
            <div className={`flex flex-col items-center py-4 gap-4 ${sidebarExpanded ? "hidden" : "block"}`}>
              <button
                onClick={handleSidebarToggle}
                className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-theme-orange/20 transition-all hover:scale-110"
                aria-label="Expand sidebar"
              >
                <span className="material-symbols-outlined text-2xl text-theme-dark-text">menu</span>
              </button>
              <div className="w-8 h-0.5 bg-theme-dark-text/20" />
              <button
                onClick={() => setSidebarExpanded(true)}
                className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-theme-orange/20 transition-all hover:scale-110"
                title="Quick Start"
              >
                <span className="text-2xl">🎯</span>
              </button>
              <button
                onClick={() => setSidebarExpanded(true)}
                className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-theme-orange/20 transition-all hover:scale-110"
                title="Topics"
              >
                <span className="text-2xl">📚</span>
              </button>
            </div>

            {/* Expanded State - Full Content */}
            <div
              ref={sidebarContentRef}
              className={`h-full overflow-y-auto p-4 ${sidebarExpanded ? "block" : "hidden"}`}
              style={{ opacity: 0 }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <button
                  onClick={handleSidebarToggle}
                  className="flex items-center justify-center w-8 h-8 rounded-lg hover:bg-theme-orange/20 transition-all"
                  aria-label="Collapse sidebar"
                >
                  <span className="material-symbols-outlined text-xl text-theme-dark-text">
                    {expandedViaClick ? "close" : "menu"}
                  </span>
                </button>
                <span className="text-base font-bold text-theme-dark-text font-[family-name:var(--font-heading)]">
                  PrepStreak
                </span>
              </div>

              {/* Quick Start */}
              <div className="mb-6">
                <h3 className="text-sm font-bold text-theme-dark-text mb-3 font-[family-name:var(--font-heading)] flex items-center gap-2">
                  <span>🎯</span> Quick Start
                </h3>
                <div className="space-y-1">
                  {quickStartOptions.map((option) => (
                    <Link
                      key={option.id}
                      href={option.route}
                      className="flex items-center w-full py-2 px-3 rounded-lg text-sm font-medium text-theme-dark-text hover:bg-theme-orange/20 hover:translate-x-1 transition-all duration-200"
                    >
                      {option.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* DSA Topics */}
              <div>
                <h3 className="text-sm font-bold text-theme-dark-text mb-3 font-[family-name:var(--font-heading)] flex items-center gap-2">
                  <span>📚</span> Topics
                </h3>
                <div className="space-y-1">
                  {dsaTopics.map((topic) => (
                    <Link
                      key={topic.id}
                      href={`/quiz?topic=${topic.id}`}
                      className="flex items-center justify-between w-full py-2 px-3 rounded-lg text-sm font-medium text-theme-dark-text hover:bg-theme-orange/20 hover:translate-x-1 transition-all duration-200"
                    >
                      <span>{topic.shortName}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-theme-dark-text/60">{topic.progress}%</span>
                        <span className="material-symbols-outlined text-sm text-theme-dark-text/40">arrow_forward</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* MAIN CONTENT COLUMN */}
          <div ref={middleColumnRef} className="flex-1 h-full overflow-y-auto bg-background-light grid-bg-orange">
            <div className="max-w-[700px] mx-auto px-6 lg:px-10 py-10">
              {/* Section 1: Greeting & Stats Banner */}
              <div className="text-center animate-card">
                <h1 className="text-3xl lg:text-4xl font-bold text-theme-dark-text font-[family-name:var(--font-heading)]">
                  Good morning, Arjun! 🌅
                </h1>
                <p className="text-lg text-theme-dark-text/60 mt-2 font-bold">Level 3 - Rising Coder</p>

                {/* Streak Stats */}
                <div className="mt-6 text-xl font-bold text-theme-dark-text">
                  <span ref={flameRef} className="inline-block">🔥</span> 7 Day Streak | 450/500 XP to Level 4
                </div>

                {/* Progress Bar */}
                <div className="mt-3 max-w-[400px] mx-auto">
                  <div className="h-6 bg-theme-dark-text/10 rounded-xl overflow-hidden border-2 border-theme-dark-text">
                    <div className="h-full bg-gradient-to-r from-theme-orange to-theme-red rounded-xl" style={{ width: "90%" }} />
                  </div>
                </div>

                {/* This Week Calendar */}
                <div className="mt-5">
                  <div className="inline-flex items-center gap-3">
                    <span className="text-sm font-bold text-theme-dark-text/60">This Week:</span>
                    <div className="flex gap-2">
                      {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => {
                        const isCompleted = i < 4;
                        const isCurrent = i === 4;
                        return (
                          <div key={i} className="flex flex-col items-center gap-1">
                            <span className={`text-xs ${isCurrent ? "font-bold text-theme-dark-text" : "text-theme-dark-text/60"}`}>
                              {day}
                            </span>
                            <div
                              className={`flex items-center justify-center size-7 rounded-full border-2 text-xs font-bold ${
                                isCompleted
                                  ? "bg-theme-green text-white border-theme-dark-text"
                                  : isCurrent
                                  ? "bg-theme-orange/50 text-theme-dark-text border-theme-dark-text current-day"
                                  : "bg-black/5 border-black/20"
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

                {/* Urgency Banner */}
                <div className="mt-5 max-w-[600px] mx-auto">
                  <div className="flex items-center justify-center gap-2 py-3 px-6 bg-theme-orange/10 rounded-lg border-2 border-dashed border-theme-orange/50">
                    <span>⏰</span>
                    <p className="text-theme-orange font-bold text-sm">
                      Complete before midnight to extend your streak!
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 2: Daily Challenge Card (HERO) */}
              <div className="mt-10 animate-card">
                <div className="rounded-2xl bg-theme-bg p-8 lg:p-12 border-4 border-theme-dark-text shadow-[8px_8px_0px_#342D26]">
                  <p className="text-sm font-bold text-theme-orange uppercase tracking-wider">
                    🎯 TODAY&apos;S DAILY CHALLENGE
                  </p>

                  <div className="inline-block bg-theme-green text-white text-xs font-bold py-1.5 px-4 rounded-lg mt-4">
                    Arrays & Hashing
                  </div>

                  <h2 className="text-2xl lg:text-3xl font-bold text-theme-dark-text font-[family-name:var(--font-heading)] mt-4">
                    Two Sum Problem
                  </h2>

                  <p className="text-theme-dark-text/80 mt-3 leading-relaxed">
                    Given an array of integers, return indices of the two numbers such that they add up to a specific target. This classic problem tests your understanding of hash maps and array manipulation.
                  </p>

                  <div className="flex items-center gap-4 mt-5 text-sm">
                    <span className="bg-theme-orange/20 px-4 py-2 rounded-lg font-medium">
                      ⏱ 5 min
                    </span>
                    <span className="bg-yellow-400/30 px-4 py-2 rounded-lg font-medium">
                      💎 50 XP
                    </span>
                  </div>

                  <Link
                    href="/quiz"
                    className="flex items-center justify-center gap-3 w-full h-[60px] rounded-xl bg-theme-green text-white text-xl font-bold border-3 border-theme-dark-text shadow-[4px_4px_0px_#342D26] hover:shadow-[6px_6px_0px_#342D26] hover:scale-[1.02] transition-all duration-200 font-[family-name:var(--font-heading)] uppercase mt-8"
                  >
                    Start Quiz
                    <span className="material-symbols-outlined text-2xl">arrow_forward</span>
                  </Link>
                </div>
              </div>

              {/* Section 4: Bottom Stats */}
              <div className="mt-12 text-center space-y-2 animate-card">
                <p className="text-sm text-theme-dark-text/60">
                  Your Rank: <span className="font-bold text-theme-dark-text">#4</span>{" "}
                  <span className="text-green-600 font-bold">↑2</span>
                  <span className="mx-2">|</span>
                  <Link href="/leaderboard" className="text-theme-orange font-bold hover:underline">
                    View Leaderboard →
                  </Link>
                </p>
                <p className="text-sm text-theme-dark-text/50">
                  Yesterday: Strings Quiz - 4/5 ⭐ (+40 XP)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Single Column */}
        <div className="lg:hidden h-full overflow-y-auto bg-background-light grid-bg-orange p-4">
          <div className="space-y-4">
            {/* Greeting & Stats */}
            <div className="text-center">
              <h1 className="text-2xl font-bold text-theme-dark-text font-[family-name:var(--font-heading)]">
                Good morning, Arjun! 🌅
              </h1>
              <p className="text-sm text-theme-dark-text/60 mt-1">Level 3 - Rising Coder</p>

              {/* Streak Stats */}
              <div className="mt-3 text-base font-bold text-theme-dark-text">
                🔥 7 Day Streak | 450/500 XP
              </div>

              {/* Progress Bar */}
              <div className="mt-2 max-w-[280px] mx-auto">
                <div className="h-4 bg-theme-dark-text/10 rounded-lg overflow-hidden border-2 border-theme-dark-text">
                  <div className="h-full bg-gradient-to-r from-theme-orange to-theme-red rounded-lg" style={{ width: "90%" }} />
                </div>
              </div>

              {/* This Week */}
              <div className="mt-3 flex justify-center gap-1.5">
                {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
                  <div key={i} className="flex flex-col items-center gap-0.5">
                    <span className="text-[10px] text-theme-dark-text/60">{day}</span>
                    <div
                      className={`size-5 rounded-full flex items-center justify-center text-[10px] border ${
                        i < 4
                          ? "bg-theme-green text-white border-theme-dark-text"
                          : i === 4
                          ? "bg-theme-orange/50 border-theme-dark-text"
                          : "bg-black/5 border-black/20"
                      }`}
                    >
                      {i < 4 ? "✓" : i === 4 ? "?" : ""}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Urgency */}
            <div className="flex items-center justify-center gap-2 py-2 px-3 bg-theme-orange/10 rounded-lg border border-dashed border-theme-orange/50">
              <span>⏰</span>
              <p className="text-theme-orange font-bold text-xs">Complete before midnight!</p>
            </div>

            {/* Challenge Card */}
            <div className="rounded-xl bg-theme-bg p-5 border-4 border-theme-dark-text shadow-[4px_4px_0px_#342D26]">
              <p className="text-xs font-bold text-theme-orange uppercase mb-2">
                🎯 TODAY&apos;S CHALLENGE
              </p>
              <div className="inline-block bg-theme-green text-white text-xs font-bold py-1 px-2 rounded mb-2">
                Arrays & Hashing
              </div>
              <h2 className="text-lg font-bold text-theme-dark-text font-[family-name:var(--font-heading)] mb-2">
                Two Sum Problem
              </h2>
              <p className="text-sm text-theme-dark-text/80 mb-3">
                Return indices of numbers that add up to target.
              </p>
              <div className="flex gap-2 mb-4 text-xs">
                <span className="bg-theme-orange/20 px-2 py-1 rounded">⏱ 5 min</span>
                <span className="bg-yellow-400/30 px-2 py-1 rounded">💎 50 XP</span>
              </div>
              <Link
                href="/quiz"
                className="flex items-center justify-center gap-2 w-full h-12 rounded-lg bg-theme-green text-white font-bold border-2 border-theme-dark-text shadow-[2px_2px_0px_#342D26]"
              >
                Start Quiz
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>

            {/* Bottom Stats */}
            <div className="text-center space-y-1 pt-2">
              <p className="text-xs text-theme-dark-text/60">
                Rank: <span className="font-bold text-theme-dark-text">#4</span>{" "}
                <span className="text-green-600 font-bold">↑2</span>
                <span className="mx-1">|</span>
                <Link href="/leaderboard" className="text-theme-orange font-bold">
                  Leaderboard →
                </Link>
              </p>
              <p className="text-xs text-theme-dark-text/50">
                Yesterday: 4/5 ⭐ (+40 XP)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      <div
        id="mobile-sidebar-overlay"
        className="lg:hidden fixed inset-y-0 left-0 w-[280px] bg-background-light grid-bg-orange border-r-4 border-theme-dark-text z-50 overflow-y-auto p-4"
        style={{ transform: "translateX(-100%)" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="size-6 text-theme-orange">
              <Logo className="size-6" />
            </div>
            <span className="text-base font-bold text-theme-dark-text font-[family-name:var(--font-heading)]">
              PrepStreak
            </span>
          </div>
          <button
            onClick={() => setMobileSidebarOpen(false)}
            className="flex items-center justify-center w-8 h-8 rounded-lg hover:bg-theme-orange/20 transition-all"
            aria-label="Close sidebar"
          >
            <span className="material-symbols-outlined text-xl text-theme-dark-text">close</span>
          </button>
        </div>

        {/* Quick Start */}
        <div className="mb-6">
          <h3 className="text-sm font-bold text-theme-dark-text mb-3 font-[family-name:var(--font-heading)] flex items-center gap-2">
            <span>🎯</span> Quick Start
          </h3>
          <div className="space-y-1">
            {quickStartOptions.map((option) => (
              <Link
                key={option.id}
                href={option.route}
                onClick={() => setMobileSidebarOpen(false)}
                className="flex items-center w-full py-2 px-3 rounded-lg text-sm font-medium text-theme-dark-text hover:bg-theme-orange/20 transition-all duration-200"
              >
                {option.label}
              </Link>
            ))}
          </div>
        </div>

        {/* DSA Topics */}
        <div>
          <h3 className="text-sm font-bold text-theme-dark-text mb-3 font-[family-name:var(--font-heading)] flex items-center gap-2">
            <span>📚</span> Topics
          </h3>
          <div className="space-y-1">
            {dsaTopics.map((topic) => (
              <Link
                key={topic.id}
                href={`/quiz?topic=${topic.id}`}
                onClick={() => setMobileSidebarOpen(false)}
                className="flex items-center justify-between w-full py-2 px-3 rounded-lg text-sm font-medium text-theme-dark-text hover:bg-theme-orange/20 transition-all duration-200"
              >
                <span>{topic.shortName}</span>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-theme-dark-text/60">{topic.progress}%</span>
                  <span className="material-symbols-outlined text-sm text-theme-dark-text/40">arrow_forward</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Backdrop */}
      {mobileSidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setMobileSidebarOpen(false)}
        />
      )}
    </div>
  );
}
