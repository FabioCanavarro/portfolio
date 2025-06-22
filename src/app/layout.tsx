import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Background from "@/components/Background";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Your Name | Portfolio", // Replace with your name
  description: "A portfolio showcasing projects in OS development, AI, and web technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={inter.className}>
        <Background />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}