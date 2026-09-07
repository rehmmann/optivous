import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function VentionCase() {
  return (
    <>
      <Navbar />
      <article className="pt-16 bg-ivory">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 border-b border-stone-200">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-ink mb-4 leading-tight">
            Scaling Success with Precision: +$85K in a Single Quarter
          </h1>
          <p className="text-xl text-stone-600 font-light">
            Client: Vention
          </p>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <section>
              <h2 className="font-serif text-3xl font-bold text-ink mb-6">
                Client Background
              </h2>
              <p className="text-lg text-stone-700 leading-relaxed">
                Vention is an innovative manufacturing automation platform that gives companies a faster,
                more efficient way to design, order, and assemble custom industrial equipment. Despite their
                cutting-edge technology, Vention struggled to scale their customer base and turn their
                pipeline into predictable revenue.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-bold text-ink mb-6">
                Challenges
              </h2>
              <ul className="space-y-4">
                {[
                  "Decision-Maker Access: Vention struggled to reach the right decision-makers in the manufacturing and automation sectors, leaving outreach campaigns underperforming.",
                  "Sales Team Burnout: The team was overwhelmed managing a high volume of leads manually, with inconsistent results and no way to prioritize the ones worth chasing.",
                  "Costly Paid Acquisition: Vention was heavily reliant on expensive PPC campaigns with high CPAs that never addressed the real problem — ineffective prospecting.",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start text-lg text-stone-700"
                  >
                    <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-navy-100 text-navy-700 mr-4 mt-1 text-sm">
                      {index + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-bold text-ink mb-6">
                Objective
              </h2>
              <p className="text-lg text-stone-700 leading-relaxed">
                To streamline Vention&apos;s lead generation, reach the right decision-makers with
                targeted messaging, and convert more of their pipeline into paying customers — without
                leaning further on costly paid advertising.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-bold text-ink mb-6">
                Solution
              </h2>
              <div className="space-y-6 text-lg text-stone-700 leading-relaxed">
                <p>
                  <span className="text-ink font-semibold">Pain-Point-Driven Messaging.</span> We worked
                  closely with Vention to identify the core challenges facing their prospects — high
                  production costs, long lead times, and inconsistent quality in custom industrial
                  equipment — and crafted messaging that positioned Vention&apos;s platform as the direct
                  solution.
                </p>
                <p>
                  <span className="text-ink font-semibold">Scalable, Automated Outreach.</span> We built a
                  fully automated, personalized email outreach system that sent tailored, pain-point-focused
                  messages at scale, asked calibrated questions to start meaningful conversations, and
                  automated follow-ups so no opportunity was missed.
                </p>
                <p>
                  <span className="text-ink font-semibold">Lead Prioritization &amp; Segmentation.</span> As
                  outreach volume grew, we segmented and prioritized leads by urgency and fit, so the sales
                  team spent their time on the most promising opportunities instead of managing overflow
                  manually.
                </p>
                <p>
                  <span className="text-ink font-semibold">Reducing Reliance on Paid Ads.</span> By replacing
                  expensive PPC campaigns with targeted outreach, we helped Vention cut acquisition costs
                  while improving lead quality — breaking the cycle of paying more for worse leads.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-bold text-ink mb-6">Results</h2>
              <ul className="space-y-4">
                {[
                  "Revenue Growth: +$85K in additional revenue in a single quarter, directly from improved lead generation and conversion.",
                  "Scalable Outreach: A more efficient, automated outreach process that let the sales team focus on high-value leads instead of manual prospecting.",
                  "Reduced Burnout: Automation and better lead segmentation meant the team spent less time on busywork and more time on strategic conversations.",
                  "Lower Acquisition Costs: Reduced reliance on costly PPC campaigns, lowering cost per acquisition while improving lead quality.",
                ].map((result, index) => (
                  <li
                    key={index}
                    className="flex items-start text-lg text-stone-700"
                  >
                    <span className="text-navy-700 mr-4 flex-shrink-0 mt-1">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    {result}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-bold text-ink mb-6">
                Conclusion
              </h2>
              <p className="text-lg text-stone-700 leading-relaxed">
                By replacing scattered, high-cost prospecting with a targeted, pain-point-driven outreach
                system, Vention converted more of its pipeline into paying customers — generating $85K in
                additional revenue in a single quarter while reducing both ad spend and sales team burnout.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-bold text-ink mb-6">
                Key Takeaways
              </h2>
              <ul className="space-y-4">
                {[
                  "Pain-point-driven messaging outperforms generic outreach — understanding a prospect's specific operational challenges is what makes messaging land.",
                  "Automated, segmented outreach lets a sales team scale without burning out, by ensuring reps only spend time on high-fit, high-intent leads.",
                  "Targeted outreach can outperform paid ads on both cost and quality, reducing dependence on expensive PPC campaigns.",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start text-lg text-stone-700"
                  >
                    <span className="text-navy-700 mt-0.5 mr-4 flex-shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Back Link */}
          <div className="mt-16 border-t border-stone-200 pt-8">
            <Link
              href="/#work"
              className="inline-flex items-center text-navy-700 hover:text-ink font-semibold transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Case Studies
            </Link>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}
