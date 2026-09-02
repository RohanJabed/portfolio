import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rohan Jabed — Full Stack Developer",
  description: "Portfolio of Rohan Jabed — Full Stack Web Developer, Problem Solver and AI/ML Enthusiast.",
  icons: { icon: "/favicon.svg" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}