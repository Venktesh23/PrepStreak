import type { Metadata } from "next";
import { Paytone_One, Lexend, Kalam, Krona_One, Bungee, Inter, Fredoka, Lilita_One, Gaegu } from "next/font/google";
import "./globals.css";

const paytoneOne = Paytone_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const kalam = Kalam({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-handwriting",
  display: "swap",
});

const kronaOne = Krona_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const bungee = Bungee({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-arcade",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
  display: "swap",
});

const lilitaOne = Lilita_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-lilita",
  display: "swap",
});

const gaegu = Gaegu({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-gaegu",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PrepStreak - Master DSA One Streak at a Time",
  description: "Build your coding streak with daily DSA quizzes. Gamified learning to help you ace technical interviews.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${paytoneOne.variable} ${lexend.variable} ${kalam.variable} ${kronaOne.variable} ${bungee.variable} ${inter.variable} ${fredoka.variable} ${lilitaOne.variable} ${gaegu.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
