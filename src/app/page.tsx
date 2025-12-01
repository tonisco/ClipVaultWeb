"use client"

import Image from "next/image"
import Link from "next/link"
import { FeatureCard } from "@/components/FeatureCard"
import { FAQ } from "@/components/FAQ"
import {
  Smartphone,
  Zap,
  Shield,
  Music,
  Layers,
  Share2,
  Bell,
  Video,
  Clock,
  Sparkles,
  Play,
  Download,
  CheckCircle,
} from "lucide-react"
import { Navbar } from "@/components/Navbar"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Extended Background Gradient Behind Navbar */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20" />
        <div className="absolute top-0 left-1/4 h-96 w-96 animate-pulse rounded-full bg-blue-400/30 blur-3xl dark:bg-blue-600/20" />
        <div className="absolute top-20 right-1/4 h-96 w-96 animate-pulse rounded-full bg-purple-400/30 blur-3xl dark:bg-purple-600/20 animation-delay-2000" />
        <div className="absolute top-40 left-1/2 h-96 w-96 -translate-x-1/2 animate-pulse rounded-full bg-pink-400/20 blur-3xl dark:bg-pink-600/10 animation-delay-4000" />
      </div>

      <Navbar />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center overflow-hidden px-4 pt-32 pb-24 text-center sm:px-6 lg:px-8">
        <div className="relative z-10 flex flex-col items-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 backdrop-blur-sm px-4 py-2 text-sm font-medium text-blue-700 dark:border-blue-800 dark:bg-blue-950/50 dark:text-blue-300">
            <Sparkles className="h-4 w-4" />
            <span>The Ultimate Video Downloader</span>
          </div>

          <h1 className="max-w-5xl text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-8xl">
            Save Videos from{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
                Everywhere
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="12"
                viewBox="0 0 200 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 10C50 5 150 5 198 10"
                  stroke="url(#gradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="rgb(59, 130, 246)" />
                    <stop offset="50%" stopColor="rgb(147, 51, 234)" />
                    <stop offset="100%" stopColor="rgb(236, 72, 153)" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-8 text-zinc-600 dark:text-zinc-400">
            ClipVault empowers you to download videos from YouTube, Instagram,
            TikTok, Facebook, and more. Extract audio, manage your library, and
            enjoy content offline — all from one powerful app.
          </p>

          {/* Store Badges */}
          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
            <a
              href="#"
              className="group relative transition-transform hover:scale-105"
            >
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 opacity-75 blur transition duration-200 group-hover:opacity-100" />
              <div className="relative">
                <Image
                  src="/play-store.png"
                  alt="Get it on Google Play"
                  width={200}
                  height={60}
                  className="h-14 w-auto"
                />
              </div>
            </a>
            <a
              href="#"
              className="group relative transition-transform hover:scale-105"
            >
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 opacity-75 blur transition duration-200 group-hover:opacity-100" />
              <div className="relative">
                <Image
                  src="/app-store.png"
                  alt="Download on the App Store"
                  width={200}
                  height={60}
                  className="h-14 w-auto"
                />
              </div>
            </a>
          </div>

          {/* App Mockup */}
          <div className="mt-20 relative w-full max-w-6xl">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-zinc-200/50 bg-zinc-100 shadow-2xl dark:border-zinc-800/50 dark:bg-zinc-900/50 backdrop-blur-sm">
              <div className="absolute -inset-10 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl" />
              <Image
                src="/app-mockup.png"
                alt="ClipVault App Interface"
                fill
                className="relative object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative py-24 sm:py-32">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
              How It Works
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Download your favorite videos in just three simple steps
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex flex-col items-center text-center p-8 rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900/50 backdrop-blur-sm">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white text-2xl font-bold">
                  1
                </div>
                <h3 className="mt-6 text-xl font-semibold text-zinc-900 dark:text-white">
                  Copy Link
                </h3>
                <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                  Copy the video URL from any supported platform like YouTube,
                  TikTok, or Instagram
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex flex-col items-center text-center p-8 rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900/50 backdrop-blur-sm">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-purple-600 text-white text-2xl font-bold">
                  2
                </div>
                <h3 className="mt-6 text-xl font-semibold text-zinc-900 dark:text-white">
                  Paste & Download
                </h3>
                <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                  Paste the link into ClipVault and select your preferred
                  quality and format
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex flex-col items-center text-center p-8 rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900/50 backdrop-blur-sm">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-pink-600 text-white text-2xl font-bold">
                  3
                </div>
                <h3 className="mt-6 text-xl font-semibold text-zinc-900 dark:text-white">
                  Enjoy Offline
                </h3>
                <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                  Watch your downloaded content anytime, anywhere, even without
                  internet
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section
        id="how-it-works"
        className="relative py-24 sm:py-32 bg-zinc-50 dark:bg-zinc-900/30"
      >
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
              See It In Action
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Experience the ClipVault interface - intuitive, powerful, and
              beautiful
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3">
            {/* Downloads Screen */}
            <div className="group relative overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-gradient-to-br from-blue-500 to-blue-600 aspect-[9/16] shadow-2xl transition-transform hover:scale-105">
              <div className="absolute inset-0 bg-black/20" />
              <div className="relative flex h-full flex-col justify-between p-6 text-white">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold">Downloads</h3>
                    <Download className="h-6 w-6" />
                  </div>
                  <div className="space-y-3">
                    {[85, 62, 100].map((progress, i) => (
                      <div
                        key={i}
                        className="rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 p-3"
                      >
                        <div className="flex justify-between text-sm mb-2">
                          <span className="font-medium">Video {i + 1}</span>
                          <span>{progress}%</span>
                        </div>
                        <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-white rounded-full"
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-sm opacity-90 text-center">
                  Track multiple downloads with real-time progress
                </p>
              </div>
            </div>

            {/* Library Screen */}
            <div className="group relative overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-gradient-to-br from-purple-500 to-purple-600 aspect-[9/16] shadow-2xl transition-transform hover:scale-105">
              <div className="absolute inset-0 bg-black/20" />
              <div className="relative flex h-full flex-col justify-between p-6 text-white">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold">Library</h3>
                    <Video className="h-6 w-6" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="aspect-video rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center"
                      >
                        <Play className="h-8 w-8 opacity-70" />
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {["All", "Videos", "Audio"].map((tab) => (
                      <button
                        key={tab}
                        className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm"
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>
                <p className="text-sm opacity-90 text-center">
                  Organize and browse your media collection
                </p>
              </div>
            </div>

            {/* Player Screen */}
            <div className="group relative overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-gradient-to-br from-pink-500 to-pink-600 aspect-[9/16] shadow-2xl transition-transform hover:scale-105">
              <div className="absolute inset-0 bg-black/20" />
              <div className="relative flex h-full flex-col justify-between p-6 text-white">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold">Player</h3>
                    <Play className="h-6 w-6" />
                  </div>
                  <div className="aspect-video rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                    <Play className="h-16 w-16" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full w-1/3 bg-white rounded-full" />
                    </div>
                    <div className="flex justify-center gap-4">
                      {["skip-back", "play", "skip-forward"].map((btn) => (
                        <div
                          key={btn}
                          className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm opacity-90 text-center">
                  Powerful playback with advanced controls
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-24 sm:py-32">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
              Powerful Features
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Everything you need to download, manage, and enjoy your favorite
              content
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:max-w-none lg:grid-cols-3">
            <FeatureCard
              title="Multi-Platform Support"
              description="Download from YouTube, Instagram, TikTok, Facebook, Twitter, and many more platforms."
              icon={Share2}
            />
            <FeatureCard
              title="Audio Extraction"
              description="Convert video to MP3 instantly. Perfect for music, podcasts, and audio content."
              icon={Music}
            />
            <FeatureCard
              title="Background Downloads"
              description="Queue multiple downloads and let them run in the background while you multitask."
              icon={Layers}
            />
            <FeatureCard
              title="Built-in Player"
              description="Watch videos with our powerful player featuring PiP, speed control, and more."
              icon={Video}
            />
            <FeatureCard
              title="Privacy First"
              description="Your data stays on your device. No tracking, no analytics, no data collection."
              icon={Shield}
            />
            <FeatureCard
              title="Smart Notifications"
              description="Get notified when downloads complete or when clipboard contains downloadable links."
              icon={Bell}
            />
            <FeatureCard
              title="Lightning Fast"
              description="Optimized download engine with resume support and multi-threaded downloading."
              icon={Zap}
            />
            <FeatureCard
              title="Download Scheduler"
              description="Schedule downloads for later or set them to start automatically at specific times."
              icon={Clock}
            />
            <FeatureCard
              title="Works Everywhere"
              description="Available for both Android and iOS. Download once, use on all your devices."
              icon={Smartphone}
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-24 sm:py-32 bg-zinc-50 dark:bg-zinc-900/30">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
              Trusted by Thousands
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Join our growing community of satisfied users
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col items-center text-center p-8 rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900/50 backdrop-blur-sm">
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
                10K+
              </div>
              <div className="mt-4 text-lg font-semibold text-zinc-900 dark:text-white">
                Active Users
              </div>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                And growing every day
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-8 rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900/50 backdrop-blur-sm">
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent dark:from-purple-400 dark:to-pink-400">
                1M+
              </div>
              <div className="mt-4 text-lg font-semibold text-zinc-900 dark:text-white">
                Videos Downloaded
              </div>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Millions of videos saved
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-8 rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900/50 backdrop-blur-sm">
              <div className="text-5xl font-bold bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent dark:from-pink-400 dark:to-blue-400">
                4.8★
              </div>
              <div className="mt-4 text-lg font-semibold text-zinc-900 dark:text-white">
                Average Rating
              </div>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Rated by thousands of users
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <section
        id="download"
        className="relative overflow-hidden py-24 sm:py-32"
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 dark:from-blue-700 dark:via-purple-700 dark:to-pink-700" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Ready to get started?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            Join thousands of users who are already enjoying ClipVault. Download
            now and start saving your favorite videos.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
            <a
              href="#"
              className="group relative transition-transform hover:scale-105"
            >
              <div className="relative">
                <Image
                  src="/play-store.png"
                  alt="Get it on Google Play"
                  width={200}
                  height={60}
                  className="h-14 w-auto brightness-0 invert"
                />
              </div>
            </a>
            <a
              href="#"
              className="group relative transition-transform hover:scale-105"
            >
              <div className="relative">
                <Image
                  src="/app-store.png"
                  alt="Download on the App Store"
                  width={200}
                  height={60}
                  className="h-14 w-auto brightness-0 invert"
                />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-white py-12 dark:border-zinc-800 dark:bg-black">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex items-center gap-2">
              <Image src="/logo.png" alt="ClipVault" width={24} height={24} />
              <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                ClipVault
              </span>
            </div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              © {new Date().getFullYear()} ClipVault. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
              >
                Terms
              </Link>
              <a
                href="#"
                className="text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  )
}
