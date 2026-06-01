import type { Metadata } from "next";

import { Geist, Geist_Mono } from "next/font/google";

import { Toaster } from "react-hot-toast";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {

  title: "DSLF",

  description: "Debsirin Lost & Found",

  manifest: "/manifest.webmanifest",

  themeColor: "#000000",

  appleWebApp: {

    capable: true,

    statusBarStyle: "black-translucent",

    title: "DSLF",

  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >

      <body className="min-h-full flex flex-col bg-black text-white">

        {children}

        {/* TOAST SYSTEM */}
        <Toaster
          position="top-center"
          toastOptions={{

            style: {

              background: "rgba(255,255,255,0.08)",

              color: "#fff",

              backdropFilter: "blur(20px)",

              border: "1px solid rgba(255,255,255,0.1)",

              borderRadius: "24px",

              padding: "18px 22px",

              fontWeight: "600",

              boxShadow: "0 8px 32px rgba(0,0,0,0.37)",

            },

          }}
        />

      </body>

    </html>

  );

}