import Link from "next/link"
import { Navbar } from "@/components/Navbar"
import { AlertTriangle, Info } from "lucide-react"

export default function DisclaimerPage() {
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
              Disclaimer
            </h1>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-8">
              Last updated: December 4, 2024
            </p>

            <div className="space-y-8">
              {/* Responsible Usage */}
              <section>
                <div className="flex items-start gap-3 mb-4">
                  <AlertTriangle className="h-6 w-6 text-amber-500 mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-3">
                      Responsible Usage
                    </h2>
                    <div className="prose prose-zinc dark:prose-invert max-w-none">
                      <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        ClipVault is provided as a tool for personal use only.
                        Users are solely responsible for ensuring their usage
                        complies with:
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-400 ml-4">
                        <li>
                          <strong>Platform Terms of Service:</strong> Each
                          social media platform (YouTube, Instagram, TikTok,
                          Facebook, etc.) has its own terms of service. Users
                          must respect and comply with these terms.
                        </li>
                        <li>
                          <strong>Copyright Laws:</strong> Only download content
                          you have the legal right to download. This includes
                          content you own, content licensed under Creative
                          Commons, or content for which you have explicit
                          permission from the copyright holder.
                        </li>
                        <li>
                          <strong>Personal Use Only:</strong> Downloaded content
                          should be used for personal, non-commercial purposes
                          only. Do not redistribute, sell, or commercially
                          exploit downloaded content without proper
                          authorization.
                        </li>
                        <li>
                          <strong>Creator Rights:</strong> Respect content
                          creators' rights and intellectual property. Consider
                          supporting creators through official channels.
                        </li>
                      </ul>
                      <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mt-4">
                        <strong className="text-zinc-900 dark:text-white">
                          We do not encourage, condone, or support the
                          unauthorized downloading of copyrighted material.
                        </strong>{" "}
                        Users who violate copyright laws or platform terms of
                        service do so at their own risk and are solely liable
                        for any legal consequences.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Similarity Disclaimer */}
              <section>
                <div className="flex items-start gap-3 mb-4">
                  <Info className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-3">
                      Independent Development
                    </h2>
                    <div className="prose prose-zinc dark:prose-invert max-w-none">
                      <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        ClipVault is an independently developed application. Any
                        resemblance, similarity, or perceived imitation to other
                        existing applications, services, or products is purely
                        coincidental and unintentional.
                      </p>
                      <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        Our application has been developed independently, and
                        any features or functionality that may appear similar to
                        other products are the result of common industry
                        practices, publicly available information, or
                        independent parallel development.
                      </p>
                      <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        We respect the intellectual property rights of others
                        and do not claim any affiliation with or endorsement by
                        any other application, service, or brand unless
                        explicitly stated.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* No Warranty */}
              <section>
                <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-3">
                  No Warranty
                </h2>
                <div className="prose prose-zinc dark:prose-invert max-w-none">
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    ClipVault is provided "as is" without warranty of any kind,
                    either express or implied, including but not limited to
                    warranties of merchantability, fitness for a particular
                    purpose, or non-infringement.
                  </p>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    We make no guarantees regarding:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-400 ml-4">
                    <li>
                      The availability, reliability, or functionality of the
                      application
                    </li>
                    <li>The accuracy or completeness of downloaded content</li>
                    <li>Compatibility with all platforms or devices</li>
                    <li>
                      Continuous access to third-party platforms or services
                    </li>
                  </ul>
                </div>
              </section>

              {/* Limitation of Liability */}
              <section>
                <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-3">
                  Limitation of Liability
                </h2>
                <div className="prose prose-zinc dark:prose-invert max-w-none">
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    To the maximum extent permitted by law, ClipVault and its
                    developers shall not be liable for any direct, indirect,
                    incidental, special, consequential, or punitive damages
                    arising from or related to your use of the application,
                    including but not limited to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-400 ml-4">
                    <li>
                      Legal consequences from copyright infringement or terms of
                      service violations
                    </li>
                    <li>Loss of data or content</li>
                    <li>Service interruptions or unavailability</li>
                    <li>Device damage or malfunction</li>
                  </ul>
                </div>
              </section>

              {/* Third-Party Services */}
              <section>
                <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-3">
                  Third-Party Services & Platforms
                </h2>
                <div className="prose prose-zinc dark:prose-invert max-w-none">
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    ClipVault interacts with third-party platforms and services.
                    We are not affiliated with, endorsed by, or sponsored by
                    YouTube, Instagram, TikTok, Facebook, Twitter, or any other
                    platform mentioned in our application.
                  </p>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    These platforms may change their APIs, terms of service, or
                    access policies at any time, which may affect the
                    functionality of ClipVault. We are not responsible for such
                    changes or their impact on your use of the application.
                  </p>
                </div>
              </section>

              {/* Educational Purpose */}
              <section>
                <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-3">
                  Educational Purpose
                </h2>
                <div className="prose prose-zinc dark:prose-invert max-w-none">
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    This application is provided for educational and personal
                    convenience purposes. It is designed to help users:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-400 ml-4">
                    <li>Access their own content offline</li>
                    <li>Back up content they have created</li>
                    <li>
                      Download content that is explicitly licensed for such use
                    </li>
                    <li>
                      Learn about media extraction and management technologies
                    </li>
                  </ul>
                </div>
              </section>

              {/* User Responsibility */}
              <section>
                <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-3">
                  User Responsibility
                </h2>
                <div className="prose prose-zinc dark:prose-invert max-w-none">
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    By using ClipVault, you acknowledge and agree that:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-400 ml-4">
                    <li>
                      You are solely responsible for your use of the application
                    </li>
                    <li>
                      You will comply with all applicable laws and platform
                      terms of service
                    </li>
                    <li>
                      You understand the legal and ethical implications of
                      downloading copyrighted content
                    </li>
                    <li>
                      You will not hold ClipVault or its developers liable for
                      any consequences of your actions
                    </li>
                  </ul>
                </div>
              </section>

              {/* Contact */}
              <section className="pt-6 border-t border-zinc-200 dark:border-zinc-800">
                <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-3">
                  Questions or Concerns?
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  If you have any questions about this disclaimer or concerns
                  about the application, please review our{" "}
                  <Link
                    href="/terms"
                    className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
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
