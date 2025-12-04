import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - ClipVault",
  description: "Privacy Policy for ClipVault video downloader app",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="mx-auto max-w-4xl px-6 py-24 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="mt-12 space-y-8 text-zinc-600 dark:text-zinc-400">
          <section>
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
              Introduction
            </h2>
            <p className="mt-4">
              ClipVault ("we", "our", or "us") respects your privacy and is
              committed to protecting your personal data. This privacy policy
              explains how we handle your information when you use our mobile
              application.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
              Data Collection
            </h2>
            <p className="mt-4">
              ClipVault is designed with privacy in mind. We do not collect,
              store, or transmit any personal information to our servers. All
              data processing happens locally on your device.
            </p>
            <ul className="mt-4 list-disc list-inside space-y-2">
              <li>No user accounts or registration required</li>
              <li>No analytics or tracking</li>
              <li>No data sent to external servers</li>
              <li>All downloads and media stay on your device</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
              Permissions
            </h2>
            <p className="mt-4">
              ClipVault requires certain permissions to function properly:
            </p>
            <ul className="mt-4 list-disc list-inside space-y-2">
              <li>
                <strong>Internet Access:</strong> To download videos from online
                platforms
              </li>
              <li>
                <strong>Storage:</strong> To save downloaded content to your
                device
              </li>
              <li>
                <strong>Notifications:</strong> To inform you about download
                progress and completion
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
              Third-Party Services
            </h2>
            <p className="mt-4">
              When you use ClipVault to download content, you are subject to the
              terms and privacy policies of the platforms from which you
              download (YouTube, TikTok, Instagram, etc.). We recommend
              reviewing their policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
              Children's Privacy
            </h2>
            <p className="mt-4">
              ClipVault does not knowingly collect any information from children
              under 13. If you are a parent or guardian and believe your child
              has provided us with personal information, please contact us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
              Changes to This Policy
            </h2>
            <p className="mt-4">
              We may update this privacy policy from time to time. We will
              notify you of any changes by updating the "Last updated" date at
              the top of this policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
              Contact Us
            </h2>
            <p className="mt-4">
              If you have any questions about this privacy policy, please
              contact us at privacy@clipvault.app
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
              Your Data Rights
            </h2>
            <p className="mt-4">
              Since we do not collect or store any personal data, there is no
              data to access, modify, or delete. All your downloads and settings
              remain on your device and are under your complete control.
            </p>
            <p className="mt-4">You can delete all app data at any time by:</p>
            <ul className="mt-4 list-disc list-inside space-y-2">
              <li>Uninstalling the app (removes all app data)</li>
              <li>
                Using your device&apos;s settings to clear app data and cache
              </li>
              <li>
                Manually deleting downloaded files from your device storage
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
              App Store Compliance
            </h2>
            <p className="mt-4">
              ClipVault complies with Google Play Store and Apple App Store
              privacy requirements:
            </p>
            <ul className="mt-4 list-disc list-inside space-y-2">
              <li>
                We do not collect personally identifiable information (PII)
              </li>
              <li>We do not share data with third parties</li>
              <li>We do not use analytics or advertising SDKs</li>
              <li>All processing happens locally on your device</li>
              <li>We maintain transparency about permissions and data usage</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
              International Users
            </h2>
            <p className="mt-4">
              ClipVault can be used globally. Since we do not collect or
              transfer any personal data, GDPR, CCPA, and other privacy
              regulations regarding data processing do not apply to our service.
            </p>
          </section>

          <section className="pt-6 border-t border-zinc-200 dark:border-zinc-800">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">
              Related Policies
            </h3>
            <div className="flex flex-wrap gap-4">
              <a
                href="/terms"
                className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline"
              >
                Terms of Service
              </a>
              <a
                href="/disclaimer"
                className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline"
              >
                Disclaimer
              </a>
              <a
                href="/dmca"
                className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline"
              >
                DMCA & Copyright
              </a>
            </div>
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
