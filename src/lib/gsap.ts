import { gsap } from "gsap";

// Register any GSAP plugins here as needed
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

export { gsap };

// Common animation presets for PrepStreak
export const animations = {
  // Fade in from bottom
  fadeInUp: {
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
  },

  // Scale bounce effect for buttons
  buttonPress: {
    scale: 0.95,
    duration: 0.1,
    ease: "power2.out",
  },

  // Card hover lift effect
  cardHover: {
    y: -4,
    duration: 0.3,
    ease: "power2.out",
  },

  // Chunky shadow shift on hover
  shadowShift: {
    boxShadow: "6px 6px 0px #1F2937",
    duration: 0.2,
    ease: "power2.out",
  },

  // Streak counter animation
  counterUp: {
    duration: 1.5,
    ease: "power2.out",
  },

  // Progress bar fill
  progressFill: {
    duration: 1,
    ease: "power2.inOut",
  },
};
