import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-12">
        <h1 className="text-3xl sm:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
          Privacy Policy
        </h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-8">
          Last updated: January 12, 2026
        </p>
        
        <div className="prose dark:prose-invert prose-neutral max-w-none">
          <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
            At Orin Labs, we take your privacy seriously. This Privacy Policy applies to all applications, services, and websites provided by Orin Labs. We are committed to protecting the personal information you share with us.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
              1. Information We Collect
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">
              We collect information that is necessary to provide you with the best possible experience. This may include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-600 dark:text-neutral-400">
              <li>
                <strong>Account Information:</strong> If you create an account, we collect your email address and basic profile information.
              </li>
              <li>
                <strong>Usage Data:</strong> We may collect anonymous data about how you interact with our applications to improve our services.
              </li>
              <li>
                <strong>Device Information:</strong> We may collect information about the device you use to access our services, such as device type and operating system.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-600 dark:text-neutral-400">
              <li>Provide, maintain, and improve our services.</li>
              <li>Communicate with you about updates, security alerts, and support messages.</li>
              <li>Analyze usage trends to enhance user experience.</li>
              <li>Protect against fraudulent or unauthorized activity.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
              3. Data Sharing and Disclosure
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">
              We do not sell your personal information. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-600 dark:text-neutral-400">
              <li>With your consent.</li>
              <li>With service providers who assist us in operating our services (subject to confidentiality agreements).</li>
              <li>To comply with legal obligations or protect our rights.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
              4. Data Security
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">
              We implement reasonable security measures to protect your information from unauthorized access, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
              5. Children's Privacy
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">
              Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, please contact us.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
              6. Changes to This Policy
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
              7. Contact Us
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400">
              If you have any questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:contact@orinlabs.com" className="text-primary hover:underline">
                contact@orinlabs.com
              </a>
              .
            </p>
          </section>

          <div className="pt-8 border-t border-neutral-200 dark:border-neutral-800">
             <Link to="/" className="text-primary hover:underline flex items-center gap-2">
                &larr; Back to Home
             </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
