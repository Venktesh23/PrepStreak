"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";
import { Logo } from "@/components/ui/Logo";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  hint: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "What is the time complexity of accessing an array element by index?",
    options: ["A. O(1)", "B. O(n)", "C. O(log n)", "D. O(n²)"],
    correctIndex: 0,
    hint: "Consider how a computer stores an array in memory. Does it need to search through the array to find an element if it knows the starting address and the element's position?",
  },
  {
    id: 2,
    question: "What is the time complexity of concatenating two strings of length n and m?",
    options: ["A. O(1)", "B. O(n)", "C. O(n + m)", "D. O(n * m)"],
    correctIndex: 2,
    hint: "When you concatenate strings, you need to copy each character from both strings into a new string. How many characters need to be copied?",
  },
  {
    id: 3,
    question: "Which traversal visits the root node before its children?",
    options: ["A. Inorder", "B. Preorder", "C. Postorder", "D. Level-order"],
    correctIndex: 1,
    hint: "The prefix 'pre' means before. Think about when the root is processed relative to its subtrees.",
  },
  {
    id: 4,
    question: "What data structure is typically used for BFS (Breadth-First Search)?",
    options: ["A. Stack", "B. Queue", "C. Heap", "D. Tree"],
    correctIndex: 1,
    hint: "BFS explores nodes level by level. Which data structure follows FIFO (First-In-First-Out) ordering?",
  },
  {
    id: 5,
    question: "What is the time complexity of inserting at the head of a singly linked list?",
    options: ["A. O(1)", "B. O(n)", "C. O(log n)", "D. O(n²)"],
    correctIndex: 0,
    hint: "To insert at the head, you only need to update the head pointer and the new node's next pointer. How many operations is that?",
  },
];

export default function QuizPage() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(5).fill(null));
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds
  const [showHint, setShowHint] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const questionCardRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const hintCardRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<HTMLSpanElement>(null);

  // Timer countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          handleQuizEnd();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Timer pulse animation when under 1 minute
  useEffect(() => {
    if (timeLeft <= 60 && timeLeft > 0 && timerRef.current) {
      gsap.to(timerRef.current, {
        scale: 1.1,
        duration: 0.3,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut",
      });
    }
  }, [timeLeft]);

  // Animate progress bar
  useEffect(() => {
    if (progressBarRef.current) {
      gsap.to(progressBarRef.current, {
        width: `${((currentQuestion + 1) / 5) * 100}%`,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  }, [currentQuestion]);

  // Animate question card on change
  useEffect(() => {
    if (questionCardRef.current) {
      gsap.fromTo(
        questionCardRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
      );
    }
  }, [currentQuestion]);

  // Animate hint card
  useEffect(() => {
    if (hintCardRef.current) {
      if (showHint) {
        gsap.fromTo(
          hintCardRef.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" }
        );
      } else {
        gsap.to(hintCardRef.current, {
          y: 100,
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
        });
      }
    }
  }, [showHint]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleAnswerSelect = (index: number) => {
    if (isSubmitting) return;
    setSelectedAnswer(index);

    // Animate the selected answer
    const buttons = document.querySelectorAll(".answer-button");
    if (buttons[index]) {
      gsap.fromTo(
        buttons[index],
        { scale: 0.98 },
        { scale: 1, duration: 0.2, ease: "back.out(1.7)" }
      );
    }
  };

  const handleSubmit = () => {
    if (selectedAnswer === null || isSubmitting) return;

    setIsSubmitting(true);
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = selectedAnswer;
    setAnswers(newAnswers);

    // Check if correct
    if (selectedAnswer === questions[currentQuestion].correctIndex) {
      setScore((prev) => prev + 1);
    }

    // Move to next question or end quiz
    setTimeout(() => {
      if (currentQuestion < 4) {
        setCurrentQuestion((prev) => prev + 1);
        setSelectedAnswer(null);
        setShowHint(false);
      } else {
        handleQuizEnd();
      }
      setIsSubmitting(false);
    }, 500);
  };

  const handleSkip = () => {
    if (isSubmitting) return;

    const newAnswers = [...answers];
    newAnswers[currentQuestion] = null;
    setAnswers(newAnswers);

    if (currentQuestion < 4) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowHint(false);
    } else {
      handleQuizEnd();
    }
  };

  const handleQuizEnd = () => {
    // Calculate final score
    const baseScore = selectedAnswer === questions[currentQuestion].correctIndex ? 1 : 0;
    const finalScore = answers.reduce((acc: number, answer, index) => {
      if (answer === questions[index].correctIndex) {
        return acc + 1;
      }
      return acc;
    }, baseScore);

    // Store results in sessionStorage for results page
    const results = {
      score: finalScore,
      total: 5,
      timeSpent: 300 - timeLeft,
      answers: [...answers, selectedAnswer],
      questions: questions.map((q) => ({
        question: q.question,
        correctIndex: q.correctIndex,
      })),
    };
    sessionStorage.setItem("quizResults", JSON.stringify(results));
    router.push("/results");
  };

  const question = questions[currentQuestion];

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center bg-retro-bg font-[family-name:var(--font-inter)] text-retro-green grid-bg">
      {/* Header */}
      <header className="flex w-full max-w-5xl items-center justify-between whitespace-nowrap border-b-2 border-retro-green px-6 sm:px-10 py-4">
        <div className="flex items-center gap-3 text-retro-green">
          <div className="size-8 text-retro-orange">
            <Logo />
          </div>
          <h2 className="text-retro-green text-xl font-[family-name:var(--font-arcade)] tracking-wide uppercase">
            PrepStreak
          </h2>
        </div>
        <div className="flex items-center gap-4 text-sm font-bold text-retro-green">
          <p className="font-[family-name:var(--font-arcade)] text-base">ALGORITHM ARCADE</p>
          <div className="h-5 w-0.5 bg-retro-green"></div>
          <div className="flex items-center gap-2 bg-[#86EFAC] border-2 border-retro-green px-3 py-1 text-retro-green font-[family-name:var(--font-arcade)] text-xl tracking-wider">
            <span>⏱️</span>
            <span ref={timerRef} className={timeLeft <= 60 ? "text-retro-red" : ""}>
              {formatTime(timeLeft)}
            </span>
          </div>
        </div>
      </header>

      {/* Main Quiz Content */}
      <main className="w-full max-w-3xl flex-1 px-4 py-8 sm:py-12 flex flex-col">
        {/* Progress Bar */}
        <div className="mb-10 w-full">
          <p className="font-[family-name:var(--font-arcade)] text-retro-green text-base font-normal text-center mb-1">
            Question {currentQuestion + 1} of 5
          </p>
          <div className="progress-bar-retro">
            <div
              ref={progressBarRef}
              className="progress-bar-retro-inner"
              style={{ width: `${((currentQuestion + 1) / 5) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="flex-grow flex flex-col items-center w-full">
          <div
            ref={questionCardRef}
            className="w-full paper-card p-8 sm:p-10 mb-8 sm:mb-12 -rotate-1 transition-transform hover:rotate-0"
          >
            <h1 className="text-retro-green text-2xl md:text-3xl font-[family-name:var(--font-arcade)] leading-tight text-center">
              {question.question}
            </h1>
          </div>

          {/* Answer Options */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`answer-button group w-full flex items-center justify-between p-4 border-2 border-retro-green transition-all duration-200 ${
                  selectedAnswer === index
                    ? "bg-retro-orange/20 ring-4 ring-retro-orange/50"
                    : "bg-paper hover:bg-retro-orange/20"
                } focus:outline-none`}
              >
                <span className="text-retro-green font-bold text-lg">{option}</span>
                <div className="w-full border-b-2 border-dotted border-retro-green/50 mx-4"></div>
                <span className="text-retro-green text-xl">▶</span>
              </button>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-12 w-full">
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={() => setShowHint(!showHint)}
              className="flex items-center gap-2 rounded px-5 py-2.5 text-base font-bold text-retro-green bg-paper border-2 border-retro-green shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-100 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
            >
              <span className="text-yellow-500 text-2xl">💡</span>
              Hint
            </button>
            <button
              onClick={handleSkip}
              className="flex items-center gap-2 rounded px-5 py-2.5 text-base font-bold text-retro-green bg-paper border-2 border-retro-green shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-100 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
            >
              Skip
              <span className="font-bold text-xl">→</span>
            </button>
          </div>
          <button
            onClick={handleSubmit}
            disabled={selectedAnswer === null || isSubmitting}
            className={`w-full rounded bg-retro-green py-3.5 text-lg font-bold font-[family-name:var(--font-arcade)] tracking-wider text-paper border-2 border-retro-green shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-x-1 active:translate-y-1 active:shadow-none ${
              selectedAnswer === null || isSubmitting
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-retro-green/90 focus:outline-none focus:ring-4 focus:ring-retro-green/50"
            }`}
          >
            {isSubmitting ? "Submitting..." : "Submit Answer"}
          </button>
        </div>
      </main>

      {/* Hint Card */}
      {showHint && (
        <div
          ref={hintCardRef}
          className="fixed bottom-0 left-0 right-0 p-4 sm:p-6"
          style={{ pointerEvents: "none" }}
        >
          <div
            className="mx-auto max-w-3xl rounded border-2 border-retro-green bg-paper p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-1 transition-transform"
            style={{ pointerEvents: "auto" }}
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-xl font-bold font-[family-name:var(--font-arcade)] text-retro-green flex items-center gap-2">
                  Chef&apos;s Note
                </h3>
                <div className="w-24 h-0.5 bg-retro-red mt-1"></div>
              </div>
              <button
                onClick={() => setShowHint(false)}
                className="p-1 rounded-full text-retro-green/70 hover:bg-retro-orange/20 hover:text-retro-green"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <p className="text-retro-green/90 text-base">{question.hint}</p>
          </div>
        </div>
      )}
    </div>
  );
}
