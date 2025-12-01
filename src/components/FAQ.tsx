"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FAQItemProps {
  question: string
  answer: string
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-zinc-200 dark:border-zinc-800">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-6 text-left transition-colors hover:text-blue-600 dark:hover:text-blue-400"
      >
        <span className="text-lg font-semibold text-zinc-900 dark:text-white pr-8">
          {question}
        </span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-zinc-500 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="pb-6 text-zinc-600 dark:text-zinc-400">{answer}</div>
      )}
    </div>
  )
}

export function FAQ() {
  const faqs = [
    {
      question: "Which platforms are supported?",
      answer:
        "ClipVault supports downloading from YouTube, Instagram, TikTok, Facebook, Twitter, and many other popular video platforms. We're constantly adding support for new platforms.",
    },
    {
      question: "Can I download videos in different qualities?",
      answer:
        "Absolutely! ClipVault allows you to choose from all available quality options for each video, from 360p up to 1080p and even 4K when available.",
    },
    {
      question: "Does ClipVault work on both Android and iOS?",
      answer:
        "Yes, ClipVault is available for both Android (Google Play Store) and iOS (App Store), ensuring you can use it on any device.",
    },
    {
      question: "Is it legal to download videos?",
      answer:
        "You should only download content that you have the right to download. This includes content you've created yourself, content in the public domain, or content where the creator has given permission. Always respect copyright laws.",
    },
    {
      question: "Does ClipVault collect my data?",
      answer:
        "No. ClipVault is designed with privacy in mind. All downloads are processed locally on your device, and we don't collect, store, or share any of your personal data.",
    },
    {
      question: "Can I extract audio from videos?",
      answer:
        "Yes! ClipVault includes a built-in audio extraction feature that converts videos to MP3 format, perfect for music and podcasts.",
    },
    {
      question: "Do I need an internet connection?",
      answer:
        "You need an internet connection to download videos. However, once downloaded, you can watch your content offline anytime, anywhere.",
    },
  ]

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Have questions? We've got answers. If you don't see your question
            here, feel free to contact us.
          </p>
        </div>

        <div className="mt-16">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}
