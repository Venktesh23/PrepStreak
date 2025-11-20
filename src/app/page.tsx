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

            {/* Features Section */}
            <div className="flex flex-col gap-10 px-4 py-10">
              <div className="flex flex-col gap-4 text-center items-center">
                <h2 className="font-[family-name:var(--font-display)] uppercase text-primary tracking-light text-4xl sm:text-5xl font-bold leading-tight max-w-2xl">
                  Why PrepStreak?
                </h2>
                <p className="text-brand-dark/80 text-base font-normal leading-normal max-w-2xl font-[family-name:var(--font-body)]">
                  Everything you need to succeed in your DSA preparation,
                  gamified for motivation and consistency.
                </p>
              </div>

              {/* Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-0 mt-6">
                {/* Card 1 - Gamified Learning */}
                <div className="flex flex-1 gap-4 rounded-lg border-2 border-brand-dark bg-background-light p-6 flex-col items-start text-left shadow-[var(--shadow-chunky)] transition-transform hover:-translate-y-1 hover:rotate-[-2deg] transform-gpu">
                  <img
                    alt="Gamified learning illustration"
                    className="w-20 h-20 object-contain"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZdsPtSZlR2VGbes0SUgMKvgW6QkGRCR0_jlmvIYpq0BZNTjMN0stkf1R4UQV450TIRAvYxKdjI_Psr48QsJPdEXIHV5SsZ-YsxwXJq-FSAdalptsY47jfFznAn3ojXeiIR_ttLL61SQBvP5tCEwqrx5P4o_Jhs02-hdhhgQe4j3q0xmxfq8_kmwkhLsFvuO3sdbK09elxD8QRWCV46acEg6Tbt7nJXQQm3Ms2d69YSbeEz3m87zPb60P2z41sxM9H363Rn67Y1_0"
                  />
                  <div className="flex flex-col gap-1">
                    <h3 className="font-[family-name:var(--font-display)] text-brand-dark text-xl font-bold leading-tight">
                      Gamified Learning
                    </h3>
                    <p className="font-[family-name:var(--font-handwriting)] text-brand-dark/80 text-lg font-normal leading-normal">
                      Tackle complex topics through engaging challenges and
                      levels.
                    </p>
                  </div>
                </div>

                {/* Card 2 - Daily Quizzes */}
                <div className="flex flex-1 gap-4 rounded-lg border-2 border-brand-dark bg-background-light p-6 flex-col items-start text-left shadow-[var(--shadow-chunky)] transition-transform hover:-translate-y-1 hover:rotate-[1deg] transform-gpu">
                  <img
                    alt="Daily quiz illustration"
                    className="w-20 h-20 object-contain"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMLB7kubm4pottSeTzVWqCAiCs-6lzQ5Ci-2-hkP1HwvdHhdEy64-35Ra2UVWsX9eEe_6dq_4DfpyO-g2jH0gyhRlMTQh1VqMbvzCsHu6jCoyQkrZJaT7GILfktpD4zyzc4mCbjjk6uy97IQf04KCox8cp9PEolJJvVJSfu2qNLDJkmNYqPaUVDz0JJjC8jcR6ZWDyEbrZOOxLpgFOx0lSPDyc4qgZnh_drOHtpZagyop44iBYahBcTE1kJSeOXckNM-3vMTofchs"
                  />
                  <div className="flex flex-col gap-1">
                    <h3 className="font-[family-name:var(--font-display)] text-brand-dark text-xl font-bold leading-tight">
                      5-min Daily Quizzes
                    </h3>
                    <p className="font-[family-name:var(--font-handwriting)] text-brand-dark/80 text-lg font-normal leading-normal">
                      Build a consistent practice habit with quick, bite-sized
                      daily tests.
                    </p>
                  </div>
                </div>

                {/* Card 3 - AI Hints */}
                <div className="flex flex-1 gap-4 rounded-lg border-2 border-brand-dark bg-background-light p-6 flex-col items-start text-left shadow-[var(--shadow-chunky)] transition-transform hover:-translate-y-1 hover:rotate-[-1.5deg] transform-gpu">
                  <img
                    alt="AI hint illustration"
                    className="w-20 h-20 object-contain"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpUVH5OwJDT59EsWrfoxOtM8j9FgW_LRVvnIKcqP7IlgRaMDd1ZTRT4OHcAW4H_C8iWOHd-xCHHw_7Xq_W0rHCE6ZEKQI5Jt2Q0a0ZTHhqMjVYTQbPmfm7JU0dpe0ICCAkM8KnV7ijyyAEwPkJcnIcprVc_rr9lUiu9PNpqd-cWorys5Zlbjuj4dqtc2wP-YeU1gdJEuEq_g2-4vXbXwol3MEdOgOLbFg8XoCU5U6JjIrRy1e6gHQfy2sL_10kdqlcuwM0QgiWvlA"
                  />
                  <div className="flex flex-col gap-1">
                    <h3 className="font-[family-name:var(--font-display)] text-brand-dark text-xl font-bold leading-tight">
                      AI-Powered Hints
                    </h3>
                    <p className="font-[family-name:var(--font-handwriting)] text-brand-dark/80 text-lg font-normal leading-normal">
                      Get intelligent support and explanations whenever
                      you&apos;re stuck.
                    </p>
                  </div>
                </div>
              </div>
            </div>

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
