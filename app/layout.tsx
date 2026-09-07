import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Md. Rohan Jabed — Junior Full Stack Developer",
  description: "Portfolio of Md. Rohan Jabed — Junior Full Stack Developer, Computer Science & Engineering student.",
  icons: { icon: "/favicon.svg" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}