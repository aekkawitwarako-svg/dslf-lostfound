import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";

import BottomNav from "../components/BottomNav";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: any) {

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >

      <body className="bg-black text-white">

        <div className="pb-32">
          {children}
        </div>

        <BottomNav />

        <Toaster />

      </body>

    </html>
  );

}