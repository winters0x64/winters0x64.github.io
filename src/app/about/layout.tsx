import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import NavBar from "../../components/navbar";
const jetbrains_mid = JetBrains_Mono({subsets:['latin'],weight:'500'})

export const metadata: Metadata = {
  title: "About|Winters",
  description: "About page of my personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* Main container */}
      <div className="flex flex-col h-screen">
        <div className="flex flex-row items-center h-1/10 w-screen">
          <NavBar />
        </div>
         {/* About me container */}
         <div className={`${jetbrains_mid.className} h-90 bg-black`}>{children}</div>
      </div>
    </>
  );
}
