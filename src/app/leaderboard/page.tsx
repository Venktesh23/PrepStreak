"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { Logo } from "@/components/ui/Logo";

interface Friend {
  rank: number;
  name: string;
  xp: number;
  streak: number;
  change: "up" | "down" | "same" | "new";
  changeAmount?: number;
  isYou?: boolean;
}

const friendsData: Friend[] = [
  { rank: 1, name: "Sarah Chen", xp: 2450, streak: 28, change: "same" },
  { rank: 2, name: "Mike Rodriguez", xp: 2120, streak: 21, change: "up", changeAmount: 1 },
  { rank: 3, name: "Lisa Park", xp: 1890, streak: 15, change: "down", changeAmount: 1 },
  { rank: 4, name: "Arjun (YOU)", xp: 1450, streak: 7, change: "up", changeAmount: 2, isYou: true },
  { rank: 5, name: "James Wilson", xp: 1380, streak: 12, change: "down", changeAmount: 2 },
  { rank: 6, name: "Emily Davis", xp: 1290, streak: 9, change: "up", changeAmount: 1 },
  { rank: 7, name: "Kevin Nguyen", xp: 1150, streak: 5, change: "same" },
  { rank: 8, name: "Rachel Kim", xp: 980, streak: 4, change: "new" },
  { rank: 9, name: "David Brown", xp: 920, streak: 6, change: "down", changeAmount: 3 },
  { rank: 10, name: "Sophie Martinez", xp: 850, streak: 3, change: "up", changeAmount: 2 },
  { rank: 11, name: "Chris Taylor", xp: 720, streak: 2, change: "same" },
  { rank: 12, name: "Amanda Lee", xp: 680, streak: 1, change: "new" },
];

export default function LeaderboardPage() {
  const [activeTab, setActiveTab] = useState<"week" | "allTime">("week");
  const containerRef = useRef<HTMLDivElement>(null);
  const yourRankRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate stats card
    if (yourRankRef.current) {
      gsap.fromTo(
        yourRankRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
    }

    // Animate list items with stagger
    if (listRef.current) {
      const items = listRef.current.querySelectorAll(".leaderboard-row");
      gsap.fromTo(
        items,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.4, stagger: 0.05, ease: "power2.out", delay: 0.3 }
      );
    }
  }, [activeTab]);

  const getRankIcon = (rank: number) => {
    if (rank === 1) return "🥇";
    if (rank === 2) return "🥈";
    if (rank === 3) return "🥉";
    return `#${rank}`;
  };

  const getChangeIndicator = (friend: Friend) => {
    if (friend.change === "up") return <span className="text-green-600 font-bold">↑{friend.changeAmount}</span>;
    if (friend.change === "down") return <span className="text-red-500 font-bold">↓{friend.changeAmount}</span>;
    if (friend.change === "new") return <span className="text-blue-500 font-bold text-xs">NEW</span>;
    return <span className="text-theme-dark-text/40">—</span>;
  };

  const yourData = friendsData.find((f) => f.isYou);

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light overflow-x-hidden grid-bg-orange">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-8 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {/* Header */}
            <header className="flex items-center justify-between whitespace-nowrap bg-background-light border-b-4 border-solid border-theme-dark-text px-4 sm:px-10 py-3">
              <Link href="/dashboard" className="flex items-center gap-4 text-theme-dark-text hover:opacity-80 transition-opacity">
                <div className="size-6 text-theme-orange">
                  <Logo className="size-6" />
                </div>
                <h2 className="text-theme-green text-xl font-[family-name:var(--font-heading)] font-bold leading-tight tracking-[-0.015em]">
                  PrepStreak
                </h2>
              </Link>
              <Link
                href="/dashboard"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-theme-green/10 text-theme-green font-bold hover:bg-theme-green/20 transition-colors"
              >
                <span className="material-symbols-outlined text-xl">arrow_back</span>
                Back
              </Link>
            </header>

            {/* Main Content */}
            <main className="flex-1 p-4 font-[family-name:var(--font-body)]" ref={containerRef}>
              {/* Title */}
              <div className="text-center pt-6 pb-4">
                <h1 className="text-4xl sm:text-5xl font-[family-name:var(--font-arcade)] text-theme-dark-text uppercase tracking-wide">
                  🏆 Leaderboard
                </h1>
              </div>

              {/* Your Stats Card */}
              <div ref={yourRankRef} className="px-4 pb-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl bg-gradient-to-r from-yellow-100 to-orange-100 p-6 border-4 border-theme-dark-text shadow-[6px_6px_0px_#342D26]">
                  <div className="flex items-center gap-4">
                    <div className="text-5xl">🏅</div>
                    <div>
                      <p className="text-theme-dark-text/60 text-sm font-bold">Your Rank</p>
                      <p className="text-4xl font-bold text-theme-dark-text font-[family-name:var(--font-heading)]">
                        #{yourData?.rank} <span className="text-xl text-green-600">↑{yourData?.changeAmount}</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6 text-center">
                    <div>
                      <p className="text-2xl font-bold text-theme-dark-text font-[family-name:var(--font-heading)]">
                        {yourData?.xp.toLocaleString()} 💎
                      </p>
                      <p className="text-sm text-theme-dark-text/60 font-bold">Total XP</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-theme-dark-text font-[family-name:var(--font-heading)]">
                        🔥 {yourData?.streak}
                      </p>
                      <p className="text-sm text-theme-dark-text/60 font-bold">Day Streak</p>
                    </div>
                  </div>
                </div>
                <p className="text-center text-theme-dark-text/70 font-bold mt-3 text-sm">
                  Keep grinding to beat Lisa! Just 440 XP to go! 💪
                </p>
              </div>

              {/* Tabs */}
              <div className="flex gap-2 px-4 pb-4">
                <button
                  onClick={() => setActiveTab("week")}
                  className={`flex-1 py-3 px-4 rounded-lg font-bold text-base border-2 border-theme-dark-text transition-all ${
                    activeTab === "week"
                      ? "bg-theme-green text-white shadow-[3px_3px_0px_#342D26]"
                      : "bg-theme-bg text-theme-dark-text hover:bg-theme-green/10"
                  }`}
                >
                  This Week
                </button>
                <button
                  onClick={() => setActiveTab("allTime")}
                  className={`flex-1 py-3 px-4 rounded-lg font-bold text-base border-2 border-theme-dark-text transition-all ${
                    activeTab === "allTime"
                      ? "bg-theme-green text-white shadow-[3px_3px_0px_#342D26]"
                      : "bg-theme-bg text-theme-dark-text hover:bg-theme-green/10"
                  }`}
                >
                  All Time
                </button>
              </div>

              {/* Leaderboard List */}
              <div ref={listRef} className="px-4 space-y-3 pb-8">
                {friendsData.map((friend) => (
                  <div
                    key={friend.rank}
                    className={`leaderboard-row flex items-center justify-between p-4 rounded-xl border-3 transition-all duration-200 hover:-translate-y-1 ${
                      friend.isYou
                        ? "bg-gradient-to-r from-theme-orange/20 to-yellow-100 border-4 border-theme-orange shadow-[4px_4px_0px_#342D26] animate-pulse"
                        : friend.rank <= 3
                        ? "bg-gradient-to-r from-yellow-50 to-theme-bg border-2 border-theme-dark-text shadow-[3px_3px_0px_#342D26] hover:shadow-[5px_5px_0px_#342D26]"
                        : "bg-theme-bg border-2 border-theme-dark-text shadow-[2px_2px_0px_#342D26] hover:shadow-[4px_4px_0px_#342D26]"
                    }`}
                  >
                    {/* Rank & Name */}
                    <div className="flex items-center gap-3">
                      <span className={`text-2xl font-bold ${friend.rank <= 3 ? "" : "text-theme-dark-text/60 text-lg"}`}>
                        {getRankIcon(friend.rank)}
                      </span>
                      <div>
                        <p className={`font-bold ${friend.isYou ? "text-theme-orange" : "text-theme-dark-text"} ${friend.rank <= 3 ? "text-lg" : ""}`}>
                          {friend.name}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-theme-dark-text/60">
                          <span>🔥 {friend.streak} days</span>
                        </div>
                      </div>
                    </div>

                    {/* XP & Change */}
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className={`font-bold ${friend.rank <= 3 ? "text-xl" : "text-lg"} text-theme-dark-text`}>
                          {friend.xp.toLocaleString()}
                        </p>
                        <p className="text-xs text-theme-dark-text/60">XP</p>
                      </div>
                      <div className="w-10 text-center">{getChangeIndicator(friend)}</div>
                    </div>
                  </div>
                ))}
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
