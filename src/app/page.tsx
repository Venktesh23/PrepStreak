"use client";

import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

export default function LandingPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light grid-bg-orange">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-10 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-full max-w-5xl flex-1">
            {/* Header */}
            <header className="flex items-center justify-between whitespace-nowrap px-6 sm:px-10 py-3">
              <div className="flex items-center gap-4">
                <div className="size-8 text-primary">
                  <Logo />
                </div>
                <h2 className="text-brand-dark text-2xl font-[family-name:var(--font-display)] leading-tight tracking-[-0.015em] uppercase">
                  PrepStreak
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <Link
                  href="/dashboard"
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-10 px-4 border-2 border-brand-dark bg-transparent text-brand-dark text-sm font-bold leading-normal tracking-[0.015em] hover:bg-brand-dark hover:text-white transition-colors"
                >
                  <span className="truncate">Login</span>
                </Link>
                <Link
                  href="/onboarding"
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors border-2 border-brand-dark shadow-[var(--shadow-chunky)] hover:shadow-[var(--shadow-chunky-hover)]"
                >
                  <span className="truncate">Sign Up</span>
                </Link>
              </div>
            </header>

            {/* Hero Section */}
            <main className="flex-1 flex flex-col items-center justify-center py-16 sm:py-24 text-center">
              <div className="flex flex-col gap-8 items-center">
                <h1
                  className="font-[family-name:var(--font-display)] text-primary uppercase text-5xl sm:text-6xl md:text-7xl font-black leading-tight tracking-[-0.033em] max-w-4xl"
                  style={{
                    textShadow: "2px 2px 0px #FFF7E8, 4px 4px 0px #1F2937",
                  }}
                >
                  Master DSA One Streak at a Time
                </h1>

                {/* Score Card */}
                <div className="relative flex flex-col gap-2 rounded-lg p-6 bg-background-light items-center border-2 border-brand-dark min-w-[200px]">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-dark text-white text-sm font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                    Score
                  </div>
                  <p className="text-brand-dark/80 text-base font-bold leading-normal uppercase tracking-widest">
                    Current Streak
                  </p>
                  <p className="text-primary font-[family-name:var(--font-display)] tracking-tight text-6xl sm:text-7xl font-bold leading-tight">
                    365
                  </p>
                  <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden border border-brand-dark">
                    <div
                      className="h-full bg-green-500"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href="/onboarding"
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 sm:h-14 sm:px-8 bg-primary text-white text-base sm:text-xl font-bold leading-normal tracking-[0.015em] hover:scale-105 transition-transform border-2 border-brand-dark shadow-[var(--shadow-chunky)] hover:shadow-[var(--shadow-chunky-hover)] font-[family-name:var(--font-display)] uppercase"
                >
                  <span className="truncate">Start Your Journey</span>
                </Link>

                {/* Social Proof */}
                <div className="relative">
                  <p className="font-[family-name:var(--font-handwriting)] text-brand-green text-xl sm:text-2xl font-bold leading-normal -rotate-3">
                    Join 10,000+ coders on their journey to mastery.
                  </p>
                  <span className="material-symbols-outlined text-brand-red absolute -top-4 -right-8 text-5xl rotate-12">
                    recommend
                  </span>
                </div>
              </div>
            </main>

            {/* Footer */}
            <footer className="flex flex-col gap-8 px-5 py-10 text-center border-t-2 border-solid border-brand-dark mt-10">
              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
                <a
                  className="text-brand-dark/80 hover:text-primary transition-colors text-base font-bold leading-normal"
                  href="#"
                >
                  Features
                </a>
                <a
                  className="text-brand-dark/80 hover:text-primary transition-colors text-base font-bold leading-normal"
                  href="#"
                >
                  Pricing
                </a>
                <a
                  className="text-brand-dark/80 hover:text-primary transition-colors text-base font-bold leading-normal"
                  href="#"
                >
                  Contact
                </a>
                <a
                  className="text-brand-dark/80 hover:text-primary transition-colors text-base font-bold leading-normal"
                  href="#"
                >
                  Privacy Policy
                </a>
              </div>
              <p className="text-brand-dark/60 text-sm font-normal leading-normal">
                © 2024 PrepStreak. All rights reserved.
              </p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
