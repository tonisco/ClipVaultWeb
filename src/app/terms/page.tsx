import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service - ClipVault",
  description: "Terms of Service for ClipVault video downloader app",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="mx-auto max-w-4xl px-6 py-24 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
          Terms of Service
        </h1>
        <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="mt-12 space-y-8 text-zinc-600 dark:text-zinc-400">
          <section>
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
              Acceptance of Terms
            </h2>
            <p className="mt-4">
              By downloading, installing, or using ClipVault, you agree to be
              bound by these Terms of Service. If you do not agree to these
              terms, please do not use our application.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
              Use of Service
            </h2>
            <p className="mt-4">
              ClipVault is provided as a tool to download and manage video
              content. You agree to use the service only for lawful purposes and
              in accordance with these terms.
            </p>
            <ul className="mt-4 list-disc list-inside space-y-2">
              <li>
                You must respect copyright laws and intellectual property rights
              </li>
              <li>Download content only when you have the right to do so</li>
              <li>
                Do not use the app to download copyrighted content without
                permission
              </li>
              <li>
                Do not use the app for any illegal or unauthorized purpose
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
              Content Responsibility
            </h2>
            <p className="mt-4">
              You are solely responsible for the content you download using
              ClipVault. We do not host, store, or distribute any content.
              ClipVault acts only as a tool to facilitate downloads from
              third-party platforms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
              Copyright and Intellectual Property
            </h2>
            <p className="mt-4">
              We respect intellectual property rights. Users must ensure they
              have the necessary rights and permissions before downloading any
              content. We strongly encourage downloading content that is:
            </p>
            <ul className="mt-4 list-disc list-inside space-y-2">
              <li>In the public domain</li>
              <li>Licensed under Creative Commons or similar licenses</li>
              <li>Your own original content</li>
              <li>
                Content for which you have explicit permission to download
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
              Disclaimer of Warranties
            </h2>
            <p className="mt-4">
              ClipVault is provided "as is" without any warranties, express or
              implied. We do not guarantee that the service will be
              uninterrupted, error-free, or secure. Use at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
              Limitation of Liability
            </h2>
            <p className="mt-4">
              To the maximum extent permitted by law, ClipVault shall not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages resulting from your use of the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
              Third-Party Platforms
            </h2>
            <p className="mt-4">
              ClipVault integrates with third-party platforms (YouTube, TikTok,
              Instagram, etc.). Your use of these platforms is subject to their
              respective terms of service. We are not responsible for any
              changes to these platforms that may affect ClipVault's
              functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
              Termination
            </h2>
            <p className="mt-4">
              We reserve the right to terminate or suspend access to our service
              immediately, without prior notice, for conduct that we believe
              violates these Terms of Service or is harmful to other users, us,
              or third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
              Changes to Terms
            </h2>
            <p className="mt-4">
              We reserve the right to modify or replace these Terms of Service
              at any time. Continued use of ClipVault after changes constitutes
              acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
              Contact Information
            </h2>
            <p className="mt-4">
              For questions about these Terms of Service, please contact us at
              legal@clipvault.app
            </p>
          </section>
        </div>

        <div className="mt-12">
          <a
            href="/"
            className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  )
}
