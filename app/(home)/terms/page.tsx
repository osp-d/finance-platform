import HomeNavBar from "@/app/(home)/HomeNavBar";
import HomeFooter from "@/app/(home)/HomeFooter";

export default function TermsOfService() {
  return (
    <div className="flex h-screen flex-col justify-between">
      <HomeNavBar />

      <header className="py-6 text-center">
        <h1 className="text-2xl font-bold">Terms of Service</h1>
      </header>

      <main className="mx-auto mb-6 max-w-4xl rounded-md bg-white px-10 pb-10 pt-2 shadow-md">
        <section>
          <p className="mt-4">
            Welcome to <strong>Finance Platform</strong>! By using our service,
            you agree to the terms and conditions outlined below. Please read
            these terms carefully before accessing or using our platform.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold">1. Acceptance of Terms</h2>
          <p className="mt-4">
            By creating an account or using our services, you confirm that you
            agree to be bound by these Terms of Service and our Privacy Policy.
            If you do not agree, please discontinue use of the service
            immediately.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold">2. Changes to Terms</h2>
          <p className="mt-4">
            We reserve the right to update or modify these terms at any time.
            Significant changes will be notified to users, and your continued
            use of the platform after modifications implies acceptance of the
            updated terms.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold">3. User Responsibilities</h2>
          <ul className="mt-4 list-disc pl-5">
            <li>
              You are responsible for maintaining the confidentiality of your
              account credentials.
            </li>
            <li>You agree to use the service only for lawful purposes.</li>
            <li>
              You must not attempt to disrupt or damage the service or its
              infrastructure.
            </li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold">4. Prohibited Activities</h2>
          <p className="mt-4">
            The following activities are strictly prohibited:
          </p>
          <ul className="mt-4 list-disc pl-5">
            <li>Using the platform for fraudulent or illegal purposes.</li>
            <li>
              Reverse engineering or attempting to access the service&apos;s
              source code.
            </li>
            <li>Uploading harmful or malicious content to the platform.</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold">5. Intellectual Property</h2>
          <p className="mt-4">
            All intellectual property rights, including trademarks, logos, and
            service content, are owned by [Service Name]. You may not use,
            reproduce, or distribute these materials without prior written
            consent.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold">6. Termination</h2>
          <p className="mt-4">
            We reserve the right to terminate your access to the service if you
            violate these terms or engage in prohibited activities. Upon
            termination, you must cease using the platform and delete any
            materials obtained through it.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold">7. Disclaimer of Warranties</h2>
          <p className="mt-4">
            The service is provided &quot;as is&quot; and &quot;as
            available.&quot; We disclaim all warranties, including implied
            warranties of merchantability and fitness for a particular purpose.
            We do not guarantee uninterrupted or error-free service.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold">8. Limitation of Liability</h2>
          <p className="mt-4">
            Finance Platform is not liable for any direct, indirect, incidental,
            or consequential damages resulting from the use or inability to use
            the platform, even if we were advised of such possibilities.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold">9. Governing Law</h2>
          <p className="mt-4">
            These terms are governed by the laws of the U.S. Any disputes
            arising from this agreement will be resolved exclusively in the
            courts of the U.S.
          </p>
        </section>
      </main>

      <HomeFooter />
    </div>
  );
}
