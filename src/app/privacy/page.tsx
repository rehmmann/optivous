import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Privacy() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0a0a0a] text-white pt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="mb-12">
            <p className="text-xs font-mono tracking-widest text-blue-400 uppercase mb-5">LEGAL</p>
            <h1 className="text-4xl font-bold">Privacy Policy</h1>
            <p className="mt-4 text-gray-500 font-mono text-sm">Last updated: March 2026</p>
          </div>

          <div className="space-y-10 font-mono text-sm text-gray-400 leading-relaxed">
            <section>
              <h2 className="text-white font-semibold text-base mb-3">Information We Collect</h2>
              <p>When you submit a contact form or request access, we collect your name, email address, company name, and any information you provide about your business. We do not collect payment information directly.</p>
            </section>

            <section>
              <h2 className="text-white font-semibold text-base mb-3">How We Use Your Information</h2>
              <p>Information you submit is used solely to respond to your inquiry, assess fit for the Optivous network, and communicate about our services. We do not sell, rent, or share your information with third parties for marketing purposes.</p>
            </section>

            <section>
              <h2 className="text-white font-semibold text-base mb-3">Data Storage</h2>
              <p>Form submissions are processed via EmailJS and stored securely. Booking information is handled by Cal.com, subject to their privacy policy. We retain contact data only as long as necessary to maintain our business relationship.</p>
            </section>

            <section>
              <h2 className="text-white font-semibold text-base mb-3">Cookies</h2>
              <p>This website does not use tracking cookies or advertising pixels. Standard session data may be stored by your browser during your visit.</p>
            </section>

            <section>
              <h2 className="text-white font-semibold text-base mb-3">Your Rights</h2>
              <p>You may request access to, correction of, or deletion of any personal data we hold about you at any time by contacting us directly.</p>
            </section>

            <section>
              <h2 className="text-white font-semibold text-base mb-3">Contact</h2>
              <p>For any privacy-related questions, contact us via the form on our website or through our LinkedIn page.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
