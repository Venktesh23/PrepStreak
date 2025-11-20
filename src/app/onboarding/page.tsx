"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type SkillLevel = "beginner" | "intermediate" | "advanced";
type DailyPortion = "5" | "10" | "15";

interface TopicOption {
  id: string;
  label: string;
  rotation: string;
}

const topics: TopicOption[] = [
  { id: "arrays", label: "Arrays", rotation: "-rotate-2" },
  { id: "strings", label: "Strings", rotation: "rotate-1" },
  { id: "trees", label: "Trees", rotation: "rotate-2" },
  { id: "graphs", label: "Graphs", rotation: "-rotate-1" },
  { id: "linked-lists", label: "Linked Lists", rotation: "rotate-1" },
  { id: "dp", label: "DP", rotation: "-rotate-2" },
];

export default function OnboardingPage() {
  const router = useRouter();
  const [skillLevel, setSkillLevel] = useState<SkillLevel>("beginner");
  const [dailyPortion, setDailyPortion] = useState<DailyPortion>("10");
  const [selectedTopics, setSelectedTopics] = useState<string[]>(["arrays", "trees"]);

  const handleTopicToggle = (topicId: string) => {
    setSelectedTopics((prev) =>
      prev.includes(topicId)
        ? prev.filter((id) => id !== topicId)
        : [...prev, topicId]
    );
  };

  const handleSubmit = () => {
    // TODO: Save preferences to Supabase
    console.log({ skillLevel, dailyPortion, selectedTopics });
    router.push("/dashboard");
  };

  const handleSkip = () => {
    router.push("/dashboard");
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8 bg-brand-cream grid-bg-onboarding font-[family-name:var(--font-fredoka)] text-brand-brown">
      <div className="w-full max-w-2xl rounded-lg bg-brand-cream border-4 border-brand-brown p-6 sm:p-8 lg:p-10 shadow-[4px_4px_0px_#4a2c2a] -rotate-1">
        {/* Progress Bar */}
        <div className="flex flex-col gap-2 mb-8">
          <div className="flex justify-between items-center">
            <p className="text-sm font-bold uppercase tracking-wider text-brand-brown/80">
              Power Up!
            </p>
          </div>
          <div className="h-6 w-full rounded-full bg-brand-cream border-2 border-brand-brown p-1">
            <div
              className="h-full rounded-full bg-gradient-to-r from-yellow-400 to-brand-orange"
              style={{ width: "100%" }}
            ></div>
          </div>
        </div>

        {/* Welcome Header */}
        <div className="text-center mb-10">
          <h1
            className="text-5xl sm:text-6xl font-[family-name:var(--font-lilita)] uppercase text-brand-orange"
            style={{
              textShadow: "4px 4px 0 rgb(254 247 234)",
              WebkitTextStroke: "2px #4a2c2a",
            }}
          >
            Welcome, Future Coder!
          </h1>
          <p className="text-lg text-brand-brown/90 mt-2 font-[family-name:var(--font-gaegu)] font-bold">
            Let&apos;s cook up your learning path.
          </p>
        </div>

        {/* Selection Sections */}
        <div className="space-y-8">
          {/* Skill Level */}
          <div>
            <h2 className="text-2xl font-[family-name:var(--font-lilita)] leading-tight text-brand-green-onboarding mb-4">
              What&apos;s your skill level?
            </h2>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setSkillLevel("beginner")}
                className={`flex h-12 cursor-pointer shrink-0 items-center justify-center gap-x-2 rounded-lg border-2 border-brand-brown px-6 text-base font-bold shadow-[4px_4px_0px_#4a2c2a] transition-transform hover:-translate-y-1 hover:shadow-[6px_6px_0px_#4a2c2a] ${
                  skillLevel === "beginner"
                    ? "bg-brand-orange text-white"
                    : "bg-brand-cream text-brand-brown"
                }`}
              >
                Beginner
              </button>
              <button
                onClick={() => setSkillLevel("intermediate")}
                className={`flex h-12 cursor-pointer shrink-0 items-center justify-center gap-x-2 rounded-lg border-2 border-brand-brown px-6 text-base font-bold shadow-[4px_4px_0px_#4a2c2a] transition-transform hover:-translate-y-1 hover:shadow-[6px_6px_0px_#4a2c2a] ${
                  skillLevel === "intermediate"
                    ? "bg-brand-orange text-white"
                    : "bg-brand-cream text-brand-brown"
                }`}
              >
                Intermediate
              </button>
              <button
                onClick={() => setSkillLevel("advanced")}
                className={`flex h-12 cursor-pointer shrink-0 items-center justify-center gap-x-2 rounded-lg border-2 border-brand-brown px-6 text-base font-bold shadow-[4px_4px_0px_#4a2c2a] transition-transform hover:-translate-y-1 hover:shadow-[6px_6px_0px_#4a2c2a] -rotate-2 ${
                  skillLevel === "advanced"
                    ? "bg-brand-orange text-white"
                    : "bg-brand-cream text-brand-brown"
                }`}
              >
                Advanced
              </button>
            </div>
          </div>

          {/* Daily Portion */}
          <div>
            <h2 className="text-2xl font-[family-name:var(--font-lilita)] leading-tight text-brand-green-onboarding mb-4">
              Pick your daily portion.
            </h2>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setDailyPortion("5")}
                className={`flex h-12 cursor-pointer shrink-0 items-center justify-center gap-x-2 rounded-lg border-2 border-brand-brown px-6 text-base font-bold shadow-[4px_4px_0px_#4a2c2a] transition-transform hover:-translate-y-1 hover:shadow-[6px_6px_0px_#4a2c2a] rotate-1 ${
                  dailyPortion === "5"
                    ? "bg-brand-orange text-white"
                    : "bg-brand-cream text-brand-brown"
                }`}
              >
                5 min
              </button>
              <button
                onClick={() => setDailyPortion("10")}
                className={`flex h-12 cursor-pointer shrink-0 items-center justify-center gap-x-2 rounded-lg border-2 border-brand-brown px-6 text-base font-bold shadow-[4px_4px_0px_#4a2c2a] transition-transform hover:-translate-y-1 hover:shadow-[6px_6px_0px_#4a2c2a] ${
                  dailyPortion === "10"
                    ? "bg-brand-orange text-white"
                    : "bg-brand-cream text-brand-brown"
                }`}
              >
                10 min
              </button>
              <button
                onClick={() => setDailyPortion("15")}
                className={`flex h-12 cursor-pointer shrink-0 items-center justify-center gap-x-2 rounded-lg border-2 border-brand-brown px-6 text-base font-bold shadow-[4px_4px_0px_#4a2c2a] transition-transform hover:-translate-y-1 hover:shadow-[6px_6px_0px_#4a2c2a] ${
                  dailyPortion === "15"
                    ? "bg-brand-orange text-white"
                    : "bg-brand-cream text-brand-brown"
                }`}
              >
                15 min
              </button>
            </div>
          </div>

          {/* Topic Selection */}
          <div>
            <h2 className="text-2xl font-[family-name:var(--font-lilita)] leading-tight text-brand-green-onboarding mb-4">
              Choose your ingredients.
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {topics.map((topic) => {
                const isChecked = selectedTopics.includes(topic.id);
                return (
                  <label
                    key={topic.id}
                    className={`flex items-center gap-3 p-4 rounded-lg cursor-pointer border-2 transition-transform duration-150 ease-in-out ${
                      isChecked
                        ? `bg-brand-orange/20 border-brand-orange-dark ${topic.rotation}`
                        : "bg-brand-cream border-brand-brown"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => handleTopicToggle(topic.id)}
                      className="h-6 w-6 rounded-md border-2 border-brand-brown bg-white text-brand-orange focus:ring-brand-orange/50 focus:ring-offset-brand-cream"
                    />
                    <span className="font-bold text-base text-brand-brown">
                      {topic.label}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-12 text-center">
          <button
            onClick={handleSubmit}
            className="flex w-full items-center justify-center gap-2 rounded-lg border-2 border-brand-brown bg-brand-green-onboarding px-8 py-4 text-xl font-bold uppercase text-white shadow-[4px_4px_0px_#4a2c2a] transition-all hover:shadow-[6px_6px_0px_#4a2c2a] hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-brand-green-onboarding/50 focus:ring-offset-2 focus:ring-offset-brand-cream"
          >
            <span>Let&apos;s Go!</span>
            <span className="material-symbols-outlined text-2xl -rotate-45">
              arrow_forward
            </span>
          </button>
          <button
            onClick={handleSkip}
            className="mt-6 inline-block text-2xl text-brand-brown/70 hover:text-brand-orange font-[family-name:var(--font-gaegu)] font-bold transition"
          >
            Skip for now
          </button>
        </div>
      </div>
    </div>
  );
}
