import Image from "next/image";
import ServicesOverview from "@/components/ServicesOverview";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactExperts from "@/components/ContactExperts";
import FAQ from "@/components/FAQ";

import {
  ClockIcon,
  WrenchScrewdriverIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-5xl sm:text-6xl lg:text-5xl font-bold tracking-tight">
                <span className="block text-gray-900">Your Growth Partner</span>
                <span className="block text-blue-600 mt-4">
                  for B2B Leaders
                </span>
              </h1>
              <p className="mt-8 text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
                We don’t just build systems—we embed with your team as a
                strategic partner, helping you scale, automate, and win. Our
                mission is to drive sustainable growth for your B2B business,
                together.
              </p>
              <div className="mt-14 flex gap-6 justify-center lg:justify-start">
                <a
                  href="/book"
                  className="rounded-full bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-blue-500 transition-colors"
                >
                  Partner With Us
                </a>
                <a
                  href="#services"
                  className="rounded-full border-2 border-gray-300 px-8 py-4 text-base font-semibold text-gray-700 shadow-lg hover:bg-gray-50 transition-colors"
                >
                  Our Approach
                </a>
              </div>
            </div>
            <div className="flex-1 w-full max-w-xl mx-auto lg:mx-0">
              <div className="relative h-80 lg:h-96">
                <Image
                  src="/jason-goodman-bzqU01v-G54-unsplash.jpg"
                  alt="Digital agency team collaborating"
                  fill
                  priority
                  className="rounded-2xl shadow-xl object-cover"
                  style={{ objectPosition: "center" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Metrics Section */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-black">
                Proven Results. Real Impact.
              </h2>
              <p className="text-lg text-gray-600">
                Trusted by B2B leaders to deliver growth at scale.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-12 text-center">
              <div className="flex flex-col items-center">
                <div className="flex justify-center mb-4">
                  <ClockIcon className="h-12 w-12 text-black" />
                </div>
                <p className="text-black font-bold text-3xl mb-2">7+</p>
                <p className="text-gray-700">Years Experience</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex justify-center mb-4">
                  <WrenchScrewdriverIcon className="h-12 w-12 text-black" />
                </div>
                <p className="text-black font-bold text-3xl mb-2">100+</p>
                <p className="text-gray-700">Systems Built</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex justify-center mb-4">
                  <CurrencyDollarIcon className="h-12 w-12 text-blue-00" />
                </div>
                <p className="text-black font-bold text-3xl mb-2">$5M+</p>
                <p className="text-gray-700">Client Revenue Generated</p>
              </div>
              {/* Satisfaction guarantee commented out intentionally */}
            </div>
          </div>
        </div>

        <div id="services">
          <ServicesOverview />
        </div>

        {/* How It Works Section */}
        <div id="how-it-works" className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-4xl font-bold mb-5">How Partnership Works</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our collaborative process to accelerate your B2B growth
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
              <div className="bg-white p-8 pb-12 rounded-xl border border-gray-200 w-96 mx-auto overflow-hidden">
                <div className="flex flex-col items-start mb-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold text-xl px-4 mb-6">
                    1
                  </div>
                  <h3 className="text-xl font-semibold mt-6">
                    Growth Discovery
                  </h3>
                </div>
                <p className="text-gray-600 break-words">
                  We dive deep into your goals, challenges, and vision.
                  Together, we identify the biggest growth opportunities and
                  align on a shared roadmap.
                </p>
              </div>

              <div className="bg-white p-8 pb-12 rounded-xl border border-gray-200 w-96 mx-auto overflow-hidden">
                <div className="flex flex-col items-start mb-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold text-xl px-4 mb-6">
                    2
                  </div>
                  <h3 className="text-xl font-semibold mt-6">
                    Co-Design & Strategy
                  </h3>
                </div>
                <p className="text-gray-600 break-words">
                  We co-create a tailored growth plan, mapping out systems,
                  automation, and strategies. You’re involved at every step as a
                  true partner.
                </p>
              </div>

              <div className="bg-white p-8 pb-12 rounded-xl border border-gray-200 w-96 mx-auto overflow-hidden">
                <div className="flex flex-col items-start mb-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold text-xl px-4 mb-6">
                    3
                  </div>
                  <h3 className="text-xl font-semibold mt-6">
                    Growth Execution & Support
                  </h3>
                </div>
                <p className="text-gray-600 break-words">
                  We implement, optimize, and support your systems—staying by
                  your side as your growth partner, not just a vendor. Our
                  success is measured by your results.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <a
                href="#contact"
                className="rounded-full bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-blue-500 transition-colors inline-block"
              >
                Start Your Growth Journey
              </a>
            </div>
          </div>
        </div>

        {/* <CaseStudies /> */}

        <div id="faq">
          <FAQ />
        </div>

        {/* Add the contact section with an id that matches the href in your "Get Started" button */}
        <div id="contact">
          <ContactExperts />
        </div>
      </main>
      <Footer />
    </>
  );
}
