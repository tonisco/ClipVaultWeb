import Link from "next/link"
import { Navbar } from "@/components/Navbar"
import { AlertCircle, Shield, FileText } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "DMCA & Copyright Compliance - ClipVault",
  description:
    "DMCA compliance and copyright infringement policies for ClipVault",
}

export default function DMCAPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Background Gradient */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20" />
      </div>

      <Navbar />

      <main className="flex-1 py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8">
            <Link
              href="/"
              className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
            >
              ← Back to Home
            </Link>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-lg dark:border-zinc-800 dark:bg-zinc-900/50 backdrop-blur-sm">
            <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-2">
              DMCA & Copyright Compliance
            </h1>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-8">
              Last updated: December 4, 2024
            </p>

            <div className="space-y-8">
              {/* Important Notice */}
              <section>
                <div className="flex items-start gap-3 mb-4 p-4 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg">
                  <AlertCircle className="h-6 w-6 text-amber-600 dark:text-amber-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-amber-900 dark:text-amber-300 mb-2">
                      Important Notice
                    </h3>
                    <p className="text-sm text-amber-800 dark:text-amber-400">
                      ClipVault respects the intellectual property rights of
                      others and expects users to do the same. We do not host,
                      store, or distribute content. ClipVault is solely a
                      download management tool that interfaces with third-party
                      platforms.
                    </p>
                  </div>
                </div>
              </section>

              {/* Copyright Policy */}
              <section>
                <div className="flex items-start gap-3 mb-4">
                  <Shield className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-3">
                      Our Copyright Policy
                    </h2>
                    <div className="prose prose-zinc dark:prose-invert max-w-none">
                      <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        ClipVault complies with the Digital Millennium Copyright
                        Act (DMCA) and other applicable copyright laws. We take
                        copyright infringement seriously and will respond to
                        valid DMCA notices in accordance with the law.
                      </p>
                      <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mt-4">
                        However, please note:
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-400 ml-4">
                        <li>
                          ClipVault does not host, store, or control access to
                          any third-party content
                        </li>
                        <li>
                          We are a technology tool that facilitates downloads
                          from public URLs
                        </li>
                        <li>
                          Content is sourced directly from third-party platforms
                          (YouTube, TikTok, Instagram, Facebook, etc.)
                        </li>
                        <li>
                          Users are solely responsible for ensuring they have
                          rights to download content
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* User Responsibilities */}
              <section>
                <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-3">
                  User Responsibilities
                </h2>
                <div className="prose prose-zinc dark:prose-invert max-w-none">
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    As a ClipVault user, you agree to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-400 ml-4">
                    <li>
                      Only download content you have the legal right to download
                    </li>
                    <li>
                      Respect copyright laws and intellectual property rights
                    </li>
                    <li>
                      Comply with the terms of service of all third-party
                      platforms
                    </li>
                    <li>
                      Not use ClipVault to infringe on the rights of content
                      creators
                    </li>
                    <li>
                      Not distribute, sell, or commercially exploit downloaded
                      content without authorization
                    </li>
                  </ul>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mt-4">
                    <strong className="text-zinc-900 dark:text-white">
                      Users who violate copyright laws do so at their own risk
                      and are solely liable for any legal consequences.
                    </strong>
                  </p>
                </div>
              </section>

              {/* DMCA Takedown Notices */}
              <section>
                <div className="flex items-start gap-3 mb-4">
                  <FileText className="h-6 w-6 text-purple-500 mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-3">
                      Filing a DMCA Takedown Notice
                    </h2>
                    <div className="prose prose-zinc dark:prose-invert max-w-none">
                      <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        If you believe that content accessible through ClipVault
                        infringes your copyright, please note that:
                      </p>
                      <ol className="list-decimal list-inside space-y-2 text-zinc-600 dark:text-zinc-400 ml-4 mt-4">
                        <li>
                          <strong>Contact the source platform first:</strong>{" "}
                          Since ClipVault does not host content, copyright
                          issues should be directed to the platform hosting the
                          content (YouTube, TikTok, Instagram, etc.)
                        </li>
                        <li>
                          <strong>Understand our role:</strong> We are a
                          download tool, not a content platform. Removing
                          content from ClipVault will not remove it from the
                          internet.
                        </li>
                        <li>
                          <strong>For app-specific concerns:</strong> If you
                          believe ClipVault itself infringes your rights,
                          contact us at the address below.
                        </li>
                      </ol>

                      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-2">
                          DMCA Notice Requirements
                        </h3>
                        <p className="text-sm text-blue-800 dark:text-blue-400 mb-3">
                          If you wish to file a DMCA notice with us, it must
                          include:
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-sm text-blue-800 dark:text-blue-400 ml-4">
                          <li>Your physical or electronic signature</li>
                          <li>
                            Identification of the copyrighted work claimed to be
                            infringed
                          </li>
                          <li>
                            Identification of the material claimed to be
                            infringing
                          </li>
                          <li>
                            Your contact information (address, phone, email)
                          </li>
                          <li>
                            A statement of good faith belief that use is
                            unauthorized
                          </li>
                          <li>
                            A statement of accuracy under penalty of perjury
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Counter-Notification */}
              <section>
                <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-3">
                  Counter-Notification
                </h2>
                <div className="prose prose-zinc dark:prose-invert max-w-none">
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    If you believe your content was wrongly removed or access
                    was disabled due to a mistake or misidentification, you may
                    file a counter-notification with us. The
                    counter-notification must include:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-400 ml-4">
                    <li>Your physical or electronic signature</li>
                    <li>
                      Identification of the material that was removed or
                      disabled
                    </li>
                    <li>Your contact information</li>
                    <li>
                      A statement under penalty of perjury that you have a good
                      faith belief the material was removed by mistake
                    </li>
                    <li>
                      Consent to jurisdiction of federal court in your district
                    </li>
                  </ul>
                </div>
              </section>

              {/* Repeat Infringer Policy */}
              <section>
                <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-3">
                  Repeat Infringer Policy
                </h2>
                <div className="prose prose-zinc dark:prose-invert max-w-none">
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    We will terminate user accounts that are determined to be
                    repeat infringers of copyright. Note: ClipVault currently
                    does not require user accounts, but we reserve the right to
                    block app access for users who repeatedly violate copyright
                    laws.
                  </p>
                </div>
              </section>

              {/* Designated Agent - Note: Update with actual info when available */}
              <section className="p-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg">
                <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-3">
                  Designated DMCA Agent
                </h2>
                <div className="prose prose-zinc dark:prose-invert max-w-none">
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                    Send DMCA notices and counter-notifications to our
                    designated agent:
                  </p>
                  <div className="text-sm text-zinc-700 dark:text-zinc-300 space-y-1">
                    <p>
                      <strong>Email:</strong> dmca@clipvault.app
                    </p>
                    <p>
                      <strong>Subject Line:</strong> &quot;DMCA Takedown
                      Notice&quot; or &quot;DMCA Counter-Notification&quot;
                    </p>
                  </div>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-4 italic">
                    Note: For US compliance, you may need to register an
                    official DMCA agent with the US Copyright Office. This is a
                    placeholder email address for demonstration purposes.
                  </p>
                </div>
              </section>

              {/* App Store Compliance */}
              <section>
                <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-3">
                  App Store Compliance
                </h2>
                <div className="prose prose-zinc dark:prose-invert max-w-none">
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    ClipVault complies with Google Play Store and Apple App
                    Store policies regarding copyright and intellectual
                    property:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-400 ml-4">
                    <li>
                      We do not encourage or facilitate copyright infringement
                    </li>
                    <li>
                      We provide clear warnings about user responsibilities
                    </li>
                    <li>We respond promptly to valid DMCA notices</li>
                    <li>We enforce our Terms of Service against violators</li>
                    <li>We maintain this public DMCA policy</li>
                  </ul>
                </div>
              </section>

              {/* Contact */}
              <section className="pt-6 border-t border-zinc-200 dark:border-zinc-800">
                <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-3">
                  Questions?
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  For general questions about our copyright policies, please
                  contact:{" "}
                  <a
                    href="mailto:legal@clipvault.app"
                    className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline"
                  >
                    legal@clipvault.app
                  </a>
                </p>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mt-4">
                  For DMCA-specific notices, use:{" "}
                  <a
                    href="mailto:dmca@clipvault.app"
                    className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline"
                  >
                    dmca@clipvault.app
                  </a>
                </p>
              </section>

              {/* Related Policies */}
              <section className="pt-6 border-t border-zinc-200 dark:border-zinc-800">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">
                  Related Policies
                </h3>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/terms"
                    className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline"
                  >
                    Terms of Service
                  </Link>
                  <Link
                    href="/disclaimer"
                    className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline"
                  >
                    Disclaimer
                  </Link>
                  <Link
                    href="/privacy"
                    className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline"
                  >
                    Privacy Policy
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-white py-8 dark:border-zinc-800 dark:bg-black">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">
            © {new Date().getFullYear()} ClipVault. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
