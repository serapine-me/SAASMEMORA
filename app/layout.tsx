import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creator OS AI",
  description: "AI growth operating system for creators and sellers"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
