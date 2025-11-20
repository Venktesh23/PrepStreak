"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface QuizResults {
  score: number;
  total: number;
  timeSpent: number;
  answers: (number | null)[];
  questions: { question: string; correctIndex: number }[];
}

export default function ResultsPage() {
  const [results, setResults] = useState<QuizResults | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("quizResults");
    if (stored) {
      setResults(JSON.parse(stored));
    }
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const getStars = (score: number, total: number) => {
    const percentage = score / total;
    if (percentage >= 1) return 5;
    if (percentage >= 0.8) return 4;
    if (percentage >= 0.6) return 3;
    if (percentage >= 0.4) return 2;
    return 1;
  };

  const getXP = (score: number) => {
    return score * 10;
  };

  if (!results) {
    return (
      <div className="grid-bg-results min-h-screen flex items-center justify-center">
        <p className="text-brand-dark-green font-[family-name:var(--font-fredoka)] text-xl">
          Loading results...
        </p>
      </div>
    );
  }

  const stars = getStars(results.score, results.total);
  const xp = getXP(results.score);

  // Get topics based on question index
  const topics = ["Arrays", "Strings", "Trees", "Graphs", "Linked Lists"];
  const correctTopics = results.answers
    .map((answer, index) =>
      answer === results.questions[index]?.correctIndex ? topics[index] : null
    )
    .filter(Boolean);
  const reviewTopics = results.answers
    .map((answer, index) =>
      answer !== results.questions[index]?.correctIndex ? topics[index] : null
    )
    .filter(Boolean);

  return (
    <div className="grid-bg-results min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 font-[family-name:var(--font-inter)] text-brand-dark-green">
      <div className="w-full max-w-2xl">
        <div className="flex flex-col gap-6 rounded-lg border-4 border-brand-red bg-brand-cream p-6 shadow-[4px_4px_0px_#000] sm:p-8">
          {/* Header */}
          <div className="relative text-center">
            <h1 className="font-[family-name:var(--font-fredoka)] text-4xl font-normal uppercase italic tracking-wide text-brand-dark-green sm:text-5xl md:text-6xl">
              Quiz Complete!
            </h1>
            <p className="mt-4 font-[family-name:var(--font-fredoka)] text-2xl font-normal text-brand-dark-green">
              Score: {results.score}/{results.total}
            </p>
            {/* Stars */}
            <div className="mt-2 flex justify-center text-5xl text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className="material-symbols-outlined"
                  style={{
                    fontVariationSettings:
                      i < stars ? "'FILL' 1, 'wght' 700" : "'FILL' 0, 'wght' 400",
                    color: i < stars ? undefined : "#d1d5db",
                  }}
                >
                  star
                </span>
              ))}
            </div>
            {/* Decorative emojis */}
            <div className="absolute -left-8 -top-8 -rotate-[25deg] text-5xl sm:-left-12 sm:-top-12">
              👾
            </div>
            <div className="absolute -right-8 -top-8 rotate-[25deg] text-5xl sm:-right-12 sm:-top-12">
              🕹️
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-4">
            <div className="flex flex-1 basis-full flex-col items-center justify-center gap-1 rounded-lg border-2 border-brand-dark-green bg-blue-300 p-4 shadow-[4px_4px_0px_#000] sm:basis-0">
              <p className="font-[family-name:var(--font-fredoka)] text-5xl font-normal tracking-tight text-brand-dark-green">
                +{xp}
              </p>
              <p className="text-sm font-bold uppercase text-brand-dark-green">XP Earned</p>
            </div>
            <div className="flex flex-1 basis-full flex-col items-center justify-center gap-1 rounded-lg border-2 border-brand-dark-green bg-pink-300 p-4 shadow-[4px_4px_0px_#000] sm:basis-0">
              <p className="font-[family-name:var(--font-fredoka)] text-5xl font-normal tracking-tight text-brand-dark-green">
                {formatTime(results.timeSpent)}
              </p>
              <p className="text-sm font-bold uppercase text-brand-dark-green">Time Taken</p>
            </div>
          </div>

          {/* Topics */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {/* Correct Topics */}
            <div className="relative">
              <div className="absolute -left-2 -top-4 flex items-center justify-center rounded-full bg-green-500 p-2 text-white -rotate-[5deg]">
                <span
                  className="material-symbols-outlined text-3xl"
                  style={{ fontVariationSettings: "'FILL' 1, 'wght' 700" }}
                >
                  check
                </span>
              </div>
              <h3 className="mb-3 text-xl font-bold tracking-tight text-brand-dark-green">
                Correct Topics
              </h3>
              <ul className="space-y-3">
                {correctTopics.length > 0 ? (
                  correctTopics.map((topic, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="text-lg text-green-600">✅</span>
                      <span className="text-base font-medium text-brand-dark-green/90">
                        {topic}
                      </span>
                    </li>
                  ))
                ) : (
                  <li className="text-brand-dark-green/60 text-sm">None this time</li>
                )}
              </ul>
            </div>

            {/* Review Topics */}
            <div className="relative">
              <div className="absolute -left-2 -top-4 flex items-center justify-center rounded-full bg-yellow-500 p-2 text-white -rotate-[5deg]">
                <span
                  className="material-symbols-outlined text-3xl"
                  style={{ fontVariationSettings: "'FILL' 1, 'wght' 700" }}
                >
                  school
                </span>
              </div>
              <h3 className="mb-3 text-xl font-bold tracking-tight text-brand-dark-green">
                Review This:
              </h3>
              <ul className="space-y-3">
                {reviewTopics.length > 0 ? (
                  reviewTopics.map((topic, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="text-lg">📚</span>
                      <span className="text-base font-medium text-brand-dark-green/90">
                        {topic}
                      </span>
                    </li>
                  ))
                ) : (
                  <li className="text-brand-dark-green/60 text-sm">Perfect score!</li>
                )}
              </ul>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-4 flex flex-col-reverse items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
            <Link
              href="/quiz"
              className="w-full rounded-lg border-2 border-brand-dark-green bg-gray-300 px-8 py-3 text-center font-[family-name:var(--font-fredoka)] text-lg font-normal uppercase text-brand-dark-green shadow-[4px_4px_0px_#000] transition-all hover:shadow-[6px_6px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-none sm:w-auto"
            >
              Try Again
            </Link>
            <Link
              href="/dashboard"
              className="flex w-full items-center justify-center gap-2 rounded-lg border-2 border-brand-dark-green bg-brand-dark-green px-8 py-3 text-center font-[family-name:var(--font-fredoka)] text-lg font-normal uppercase text-white shadow-[4px_4px_0px_#000] transition-all hover:shadow-[6px_6px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-none sm:w-auto"
            >
              Continue
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1, 'wght' 700" }}
              >
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
