import type { Metadata } from "next";
import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Upanayana Ceremony | Rithanyaa & Rithvik",
  description: "Upanayana and Brahmopadesha ceremony celebrations at Srirangam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} antialiased bg-[#faf7f2] text-stone-900 min-h-screen flex flex-col selection:bg-[#b38e5d]/30 selection:text-stone-950`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
