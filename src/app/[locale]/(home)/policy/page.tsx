import HomeNavBar from "@/src/app/[locale]/(home)/HomeNavBar";
import HomeFooter from "@/src/app/[locale]/(home)/HomeFooter";

export default function PrivacyPolicy() {
  return (
    <div className="flex h-screen flex-col justify-between">
      <HomeNavBar />

      <header className="py-6 text-center">
        <h1 className="text-2xl font-bold">Privacy Policy</h1>
      </header>

      <main className="mx-auto mb-6 max-w-4xl rounded-md bg-white px-10 pb-10 pt-2 shadow-md">
        <section>
          <p className="mt-4">
            Welcome to <strong>Finance Platform</strong>! Your privacy is
            important to us. This Privacy Policy explains how we collect, use,
            share, and protect your personal information. By using our service,
            you agree to the practices outlined in this policy.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold">1. Information We Collect</h2>
          <p className="mt-4">
            We collect different types of information to provide and improve our
            services. This includes:
          </p>
          <div className="mt-4">
            <h3 className="text-lg font-bold">
              1.1. Information You Provide Directly
            </h3>
            <ul className="list-disc pl-5">
              <li>Account Information: Name, email address, password, etc.</li>
              <li>
                Transaction Data: Amounts, categories, accounts, descriptions,
                etc.
              </li>
              <li>CSV Data: Uploaded files containing transaction data.</li>
              <li>
                Contact Information: Email and other details provided through
                support inquiries.
              </li>
            </ul>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-bold">
              1.2. Information We Collect Automatically
            </h3>
            <ul className="list-disc pl-5">
              <li>
                Usage Data: Information about interactions with the platform.
              </li>
              <li>
                Device Information: IP address, browser type, operating system,
                etc.
              </li>
              <li>
                Cookies and Tracking Technologies: Tools to enhance the user
                experience.
              </li>
            </ul>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-bold">
              1.3. Information from Third Parties
            </h3>
            <ul className="list-disc pl-5">
              <li>
                Banking Integration (Future Feature): Transaction data from
                linked accounts.
              </li>
              <li>
                Analytics Tools: Aggregated usage data from platforms like
                Google Analytics.
              </li>
            </ul>
          </div>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold">
            2. How We Use Your Information
          </h2>
          <ul className="mt-4 list-disc pl-5">
            <li>
              To provide services such as tracking and visualizing financial
              data.
            </li>
            <li>
              To personalize your experience with tailored content and
              suggestions.
            </li>
            <li>
              To improve our platform based on usage patterns and feedback.
            </li>
            <li>
              To communicate with you about updates, notifications, and support.
            </li>
            <li>To ensure security and prevent fraudulent activities.</li>
            <li>To comply with legal obligations and regulations.</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold">
            3. How We Share Your Information
          </h2>
          <p className="mt-4">
            We do not sell your personal information. However, we may share your
            data under specific circumstances:
          </p>
          <ul className="mt-2 list-disc pl-5">
            <li>
              <strong>With Service Providers:</strong> For essential services
              like hosting and payment processing.
            </li>
            <li>
              <strong>For Legal Reasons:</strong> To comply with laws,
              regulations, or legal processes.
            </li>
            <li>
              <strong>During Business Transactions:</strong> In the event of a
              merger, acquisition, or sale of assets.
            </li>
            <li>
              <strong>With Your Consent:</strong> For any other purpose not
              covered by this policy.
            </li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold">4. Data Security</h2>
          <p className="mt-4">
            We implement industry-standard security measures, including
            encryption, access controls, and regular monitoring. However, no
            system is completely secure, and we cannot guarantee the absolute
            security of your data.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold">5. Your Rights and Choices</h2>
          <p className="mt-4">
            You have the following rights regarding your personal information:
          </p>
          <p className="mb-2 mt-4 font-bold">5.1. Access and Update</p>
          <p>
            You can access and update your personal information through your
            account settings.
          </p>
          <p className="mb-2 mt-4 font-bold"> 5.2. Data Portability</p>
          <p>You can request a copy of your data in a portable format.</p>
          <p className="mb-2 mt-4 font-bold">5.3. Deletion</p>
          <p>
            You can request the deletion of your account and associated data.
            Note that some information may be retained for legal or operational
            purposes.
          </p>
          <p className="mb-2 mt-4 font-bold">5.4. Opt-Out</p>
          <p>
            You can opt-out of marketing communications by clicking the
            &quot;unsubscribe&quot; link in our emails.
          </p>
          <p className="mb-2 mt-4 font-bold"> 5.5. Cookies</p>
          <p>
            Manage your cookie preferences through your browser settings or our
            cookie management tool.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold">6. Data Retention</h2>
          <p className="mt-4">
            We retain your data for as long as necessary to provide our
            services, comply with legal obligations, resolve disputes, and
            enforce our agreements. When data is no longer needed, we securely
            delete it.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold">
            7. Cookies and Tracking Technologies
          </h2>
          <p className="mt-4">
            We use cookies to:
            <ul className="mt-2 list-disc pl-5">
              <li>Maintain user sessions.</li>
              <li>Analyze platform performance.</li>
              <li>Deliver targeted advertisements.</li>
            </ul>
            <p className="mt-4">
              You can manage cookies through your browser settings. Note that
              disabling cookies may limit the functionality of the platform.
            </p>
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold">8. International Users</h2>
          <p className="mt-4">
            Our service operates globally. By using our platform, you consent to
            the transfer and processing of your information in countries that
            may not have the same data protection laws as your country of
            residence.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold">9. Children&apos;s Privacy</h2>
          <p className="mt-4">
            Our platform is not intended for individuals under the age of 18. We
            do not knowingly collect personal information from children. If we
            discover that we have collected information from a minor, we will
            delete it promptly.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold">
            10. Changes to This Privacy Policy
          </h2>
          <p className="mt-4">
            We may update this Privacy Policy to reflect changes in our
            practices or legal requirements. When we make changes, we will
            notify you by updating the &quot;Last Updated&quot; date and
            providing a notice on the platform.
          </p>
        </section>
      </main>

      <HomeFooter />
    </div>
  );
}
