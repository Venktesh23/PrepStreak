"use client";

import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

export default function DashboardPage() {
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
                <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-10 w-10 bg-theme-green/10 text-theme-green hover:bg-theme-green/20 transition-colors duration-200">
                  <span className="material-symbols-outlined text-xl">person</span>
                </button>
                <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-10 w-10 bg-theme-green/10 text-theme-green hover:bg-theme-green/20 transition-colors duration-200">
                  <span className="material-symbols-outlined text-xl">bar_chart</span>
                </button>
                <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-10 w-10 bg-theme-green/10 text-theme-green hover:bg-theme-green/20 transition-colors duration-200">
                  <span className="material-symbols-outlined text-xl">settings</span>
                </button>
              </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 p-4 font-[family-name:var(--font-body)]">
              {/* Greeting */}
              <h1 className="text-theme-dark-text tracking-tight text-[48px] font-[family-name:var(--font-heading)] leading-tight px-4 text-left pb-3 pt-6 font-bold">
                Good morning, Arjun!
              </h1>

              {/* Streak Card */}
              <div className="p-4">
                <div className="flex flex-col md:flex-row items-stretch justify-between gap-6 rounded-md bg-theme-bg p-6 border-4 border-theme-dark-text shadow-[4px_4px_0px_#342D26]">
                  <div className="flex flex-col gap-2 flex-[2_2_0px]">
                    <div className="flex items-center gap-3">
                      <img
                        alt="Illustrated flame character"
                        className="h-10 w-10"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEvlcK8jQyfryuuzkgwrdrdBMM6yuNNpu0ZTbBx-z2351AX6H3-tP3sCz19lPmO7ENb7qGx0SzPSIwbWwYSrok9k5DoXa3h1f941cZYiDE22IKGJ-yHwzRaS4AIF2j4uAEb0yBk_GVIneEqW9w-1YdCH4ljMW5tXuwlhu8sAIjPIITEnyecScFvvP1UjGZW9JGbf0KEE4ZLsrjpogKwqVTX0HZC0OkqcmssM6QF-50WDzhyGluJQ3nTLmMmVW6omUMZXIjwr5k-rQ"
                      />
                      <p className="text-2xl font-bold leading-tight text-theme-red font-[family-name:var(--font-heading)]">
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
                      <div className="rounded-full bg-theme-dark-text/20 h-4 w-full border-2 border-theme-dark-text p-0.5">
                        <div
                          className="h-full rounded-full bg-theme-red"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1 md:max-w-xs border-2 border-theme-dark-text"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCsCVKilvIx86NE-MLtlyUmji_0UnzVBDng8MhYMneEws-xTG_qgnkTcZyFoAJGLmuXqlo24fPlgG2IeviSQ0NnnvEafOOnMfKRKkTLCJBbGmU7yaifNfkPLkJtzcaZyKRmLC0dnB_oJm7pL6JIq82rIFWeV-_yVj9at3U-8jHOH6QwrMW8vT2KUYYiWJcSDYixO31VcNZAseYJHr_gGaqKOGRPFFbQMjYsXGoDieVqerPslWdl9iqmxnOikCPgneR5P4dejWghrMw")',
                    }}
                  ></div>
                </div>
              </div>

              {/* Grid for Today's Special and Punch Card */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 pt-4">
                {/* Today's Special */}
                <div className="lg:col-span-2">
                  <h2 className="text-theme-dark-text text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 font-[family-name:var(--font-heading)]">
                    Today&apos;s Special
                  </h2>
                  <div className="p-4">
                    <div className="relative flex flex-col gap-4 rounded-md bg-theme-bg p-6 border-4 border-theme-dark-text shadow-[4px_4px_0px_#342D26]">
                      {/* Decorative circles */}
                      <div className="absolute -top-3 -left-3 rotate-[-12deg]">
                        <svg
                          className="text-theme-orange"
                          fill="none"
                          height="26"
                          viewBox="0 0 34 26"
                          width="34"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.77701 10.999C2.08386 5.37257 6.47648 1.40194 12.1029 1.70879C17.7293 2.01564 21.6999 6.40826 21.4005 12.0347C21.101 17.6611 16.7084 21.6317 11.082 21.3249C5.45553 21.018 1.47016 16.6254 1.77701 10.999Z"
                            fill="currentColor"
                            stroke="#342D26"
                            strokeWidth="2"
                          />
                          <path
                            d="M12.3995 12.0347C12.6989 6.40826 17.0915 2.43763 22.718 2.74448C28.3444 3.05133 32.315 7.44395 32.0156 13.0704C31.7161 18.6968 27.3235 22.6674 21.6971 22.3606C16.0706 22.0537 12.1001 17.6611 12.3995 12.0347Z"
                            fill="currentColor"
                            stroke="#342D26"
                            strokeWidth="2"
                          />
                        </svg>
                      </div>
                      {/* Topic Badge */}
                      <p className="text-sm font-bold text-white py-1 px-3 bg-theme-green rounded-md self-start relative z-10 shadow-[2px_2px_0px_#342D26] border-2 border-theme-dark-text">
                        Arrays &amp; Hashing
                      </p>
                      {/* Problem Info */}
                      <div>
                        <h3 className="text-theme-dark-text text-xl font-bold leading-tight mt-1">
                          Two Sum Problem
                        </h3>
                        <p className="text-theme-dark-text/80 text-sm font-normal leading-normal mt-2">
                          Given an array of integers, return indices of the two numbers such that they add up to a specific target.
                        </p>
                      </div>
                      {/* Timer and XP */}
                      <div className="flex items-center gap-4 text-theme-dark-text mt-2">
                        <div className="flex items-center gap-1.5 text-sm py-1 px-2.5 bg-theme-orange/20 rounded-md border-2 border-dashed border-theme-orange/50">
                          <span className="material-symbols-outlined text-base">timer</span>
                          <span>5 min</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-sm py-1 px-2.5 bg-theme-orange/20 rounded-md border-2 border-dashed border-theme-orange/50">
                          <span className="material-symbols-outlined text-base">local_fire_department</span>
                          <span>50 XP</span>
                        </div>
                      </div>
                      {/* Start Quiz Button */}
                      <Link
                        href="/quiz"
                        className="flex items-center justify-center gap-2 rounded-md h-12 px-6 bg-theme-green text-white text-base font-bold leading-normal w-full sm:w-auto self-start mt-4 hover:bg-theme-green/90 transition-colors duration-200 border-2 border-theme-dark-text shadow-[2px_2px_0px_#342D26]"
                      >
                        <span>Start Quiz</span>
                        <span className="material-symbols-outlined">arrow_forward</span>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Punch Card */}
                <div className="lg:col-span-1">
                  <h2 className="text-theme-dark-text text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 font-[family-name:var(--font-heading)]">
                    Punch Card
                  </h2>
                  <div className="p-4">
                    <div className="flex flex-col gap-4 rounded-md bg-theme-bg p-6 border-4 border-theme-dark-text shadow-[4px_4px_0px_#342D26]">
                      <p className="text-theme-dark-text font-bold">This Week</p>
                      <div className="flex justify-between items-center text-center">
                        {/* Monday - Completed */}
                        <div className="flex flex-col items-center gap-2">
                          <p className="text-sm text-theme-dark-text/60">M</p>
                          <div className="flex items-center justify-center size-9 rounded-full bg-theme-green text-white border-2 border-theme-dark-text">
                            ✓
                          </div>
                        </div>
                        {/* Tuesday - Completed */}
                        <div className="flex flex-col items-center gap-2">
                          <p className="text-sm text-theme-dark-text/60">T</p>
                          <div className="flex items-center justify-center size-9 rounded-full bg-theme-green text-white border-2 border-theme-dark-text">
                            ✓
                          </div>
                        </div>
                        {/* Wednesday - Completed */}
                        <div className="flex flex-col items-center gap-2">
                          <p className="text-sm text-theme-dark-text/60">W</p>
                          <div className="flex items-center justify-center size-9 rounded-full bg-theme-green text-white border-2 border-theme-dark-text">
                            ✓
                          </div>
                        </div>
                        {/* Thursday - Completed */}
                        <div className="flex flex-col items-center gap-2">
                          <p className="text-sm text-theme-dark-text/60">T</p>
                          <div className="flex items-center justify-center size-9 rounded-full bg-theme-green text-white border-2 border-theme-dark-text">
                            ✓
                          </div>
                        </div>
                        {/* Friday - Current Day */}
                        <div className="flex flex-col items-center gap-2">
                          <p className="text-sm font-bold text-theme-dark-text">F</p>
                          <div className="flex items-center justify-center size-9 rounded-full border-2 border-theme-dark-text bg-theme-orange/50 text-theme-dark-text font-bold">
                            ?
                          </div>
                        </div>
                        {/* Saturday - Future */}
                        <div className="flex flex-col items-center gap-2">
                          <p className="text-sm text-theme-dark-text/60">S</p>
                          <div className="flex items-center justify-center size-9 rounded-full bg-black/5 text-black/40 border-2 border-black/20"></div>
                        </div>
                        {/* Sunday - Future */}
                        <div className="flex flex-col items-center gap-2">
                          <p className="text-sm text-theme-dark-text/60">S</p>
                          <div className="flex items-center justify-center size-9 rounded-full bg-black/5 text-black/40 border-2 border-black/20"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
