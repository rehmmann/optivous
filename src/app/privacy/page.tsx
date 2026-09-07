import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Privacy() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-ivory text-ink pt-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="mb-12">
            <p className="text-xs font-mono tracking-widest text-navy-600 uppercase mb-5">LEGAL</p>
            <h1 className="text-4xl font-bold">Privacy Policy</h1>
            <p className="mt-4 text-stone-600 font-mono text-sm">Last updated: March 2026</p>
          </div>

          <div className="space-y-10 font-mono text-sm text-stone-700 leading-relaxed">
            <section>
              <h2 className="text-ink font-semibold text-base mb-3">Information We Collect</h2>
              <p>When you email us or book a consultation, we collect whatever information you choose to share directly — typically your name, email address, and details about your business. We do not collect payment information directly.</p>
            </section>

            <section>
              <h2 className="text-ink font-semibold text-base mb-3">How We Use Your Information</h2>
              <p>Information you share is used solely to respond to your inquiry, assess fit for the Optivous network, and communicate about our services. We do not sell, rent, or share your information with third parties for marketing purposes.</p>
            </section>

            <section>
              <h2 className="text-ink font-semibold text-base mb-3">Data Storage</h2>
              <p>Email correspondence is handled through standard email infrastructure. Booking information is handled by Cal.com, subject to their privacy policy. We retain contact data only as long as necessary to maintain our business relationship.</p>
            </section>

            <section>
              <h2 className="text-ink font-semibold text-base mb-3">Cookies</h2>
              <p>This website does not use tracking cookies or advertising pixels. Standard session data may be stored by your browser during your visit.</p>
            </section>

            <section>
              <h2 className="text-ink font-semibold text-base mb-3">Your Rights</h2>
              <p>You may request access to, correction of, or deletion of any personal data we hold about you at any time by contacting us directly.</p>
            </section>

            <section>
              <h2 className="text-ink font-semibold text-base mb-3">Contact</h2>
              <p>For any privacy-related questions, email us or reach out through our LinkedIn page.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
