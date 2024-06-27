import type { Metadata } from "next";
import { Audiowide } from "next/font/google";
import ParticlesBg from '@/components/particles';
import "./globals.css";

const audiowide = Audiowide({subsets: ["latin"], weight:["400"]});

export const metadata: Metadata = {
  title: "Home|Winters",
  description: "Home page of my personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${audiowide.className} bg-black h-screen`}>
        <ParticlesBg />
        {children}
      </body>
    </html>
  );
}
