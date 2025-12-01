import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/ThemeProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ClipVault - Ultimate Video Downloader for Android & iOS",
  description:
    "Download videos from YouTube, Instagram, TikTok, and more with ClipVault. Fast, secure, and feature-rich. Available now on Android and iOS.",
  keywords: [
    "Android Video Downloader",
    "ClipVault",
    "Download Videos",
    "Social Media Downloader",
    "YouTube Downloader",
    "Instagram Downloader",
    "TikTok Downloader",
  ],
  openGraph: {
    title: "ClipVault - Ultimate Video Downloader",
    description:
      "Download videos from YouTube, Instagram, TikTok, and more with ClipVault.",
    url: "https://clipvault.app",
    siteName: "ClipVault",
    images: [
      {
        url: "/og-image.png", // We will need to create this
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ClipVault - Ultimate Video Downloader",
    description:
      "Download videos from YouTube, Instagram, TikTok, and more with ClipVault.",
    images: ["/og-image.png"], // We will need to create this
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased bg-white dark:bg-black text-zinc-900 dark:text-zinc-100`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
