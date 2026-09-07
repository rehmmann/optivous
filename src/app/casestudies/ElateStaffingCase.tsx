import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ElateStaffingCase() {
  return (
    <>
      <Navbar />
      <article className="pt-16 bg-ivory">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 border-b border-stone-200">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-ink mb-4 leading-tight">
            Elevating Recruitment Efficiency through Sales Systems
          </h1>
          <p className="text-xl text-stone-600 font-light">
            Client: Elate Staffing Solutions Ltd.
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
                Elate Staffing Solutions Ltd. is a UK-based recruitment agency specializing in Industrial,
                Technical &amp; Engineering, and Commercial sectors. Their target audience includes HR Managers
                and Hiring Managers, with a focus on delivering top talent to meet the unique demands of their
                clients.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-bold text-ink mb-6">
                Challenges
              </h2>
              <ul className="space-y-4">
                {[
                  "Manual Processes: Elate Staffing faced significant inefficiencies in their lead generation and outreach processes, which were largely manual. This slowed down their ability to respond to potential clients and candidates quickly.",
                  "Lead Qualification: The traditional method of lead qualification was inconsistent, leading to missed opportunities and underperforming outreach campaigns.",
                  "Client Outreach: The company needed a more efficient and scalable way to reach HR Managers and Hiring Managers in their target sectors.",
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
                To streamline Elate Staffing&apos;s lead generation process, improve client outreach, and
                enhance their lead qualification system to increase business opportunities and conversions.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-bold text-ink mb-6">
                Solution
              </h2>
              <div className="space-y-6 text-lg text-stone-700 leading-relaxed">
                <p>
                  <span className="text-ink font-semibold">Lead Scraping &amp; Automation Integration.</span>{" "}
                  Leveraging advanced lead scraping tools, I implemented an automated process to collect leads
                  of HR Managers, Hiring Managers, and decision-makers in the Industrial, Technical,
                  Engineering, and Commercial sectors. These leads were gathered from reliable sources such as
                  LinkedIn and Apollo, ensuring data accuracy and relevance.
                </p>
                <p>
                  <span className="text-ink font-semibold">Outreach Campaigns.</span> Using Instantly and a
                  high ticket sales system that scrapes job postings, we designed automated cold outreach
                  campaigns that allowed Elate Staffing to send highly personalized messages at scale. These
                  campaigns were set to run on weekdays (7:00 am – 7:00 pm), maximizing reach and engagement
                  during optimal hours. Each outreach message was customized to target the specific pain
                  points and needs of HR Managers and Hiring Managers, driving interest in Elate Staffing&apos;s
                  recruitment services.
                </p>
                <p>
                  <span className="text-ink font-semibold">Email Deliverability Optimization.</span> To
                  ensure high open and click-through rates, we implemented a comprehensive email
                  authentication strategy, including SPF, DKIM, and DMARC. This significantly boosted email
                  deliverability, reducing the risk of messages being marked as spam and improving engagement
                  with prospects.
                </p>
                <p>
                  <span className="text-ink font-semibold">Lead Management in ClickUp.</span> A streamlined
                  process was set up within ClickUp to manage leads and track the progression of each lead
                  through various stages. Custom fields such as &lsquo;Interested,&rsquo; &lsquo;Not
                  Interested,&rsquo; and &lsquo;Intake&rsquo; were used to categorize and prioritize leads.
                  Automated notifications were set up to alert the team of new responses, enabling a faster
                  follow-up process.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-bold text-ink mb-6">Results</h2>
              <ul className="space-y-4">
                {[
                  "Increased Lead Conversion: Through automation, Elate Staffing was able to engage more leads in less time. The targeted outreach resulted in a 50% increase in lead conversions compared to the previous manual process.",
                  "Reduced Response Time: The automated lead qualification and follow-up process reduced response times from days to mere hours, allowing Elate Staffing to build stronger relationships with clients and candidates.",
                  "Scalability & Efficiency: By automating lead scraping, outreach, and lead management, Elate Staffing was able to scale their recruitment efforts without significantly increasing manpower.",
                  "Revenue Growth: With a higher volume of qualified leads and faster engagement, Elate Staffing saw a notable increase in revenue and expanded their client base.",
                  "Placement Success: Over the course of 55 days, Elate Staffing successfully made 22 placements, surpassing initial targets and demonstrating the effectiveness of the automated system.",
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
                By implementing a fully automated lead generation and outreach system, Elate Staffing
                Solutions Ltd. was able to overcome operational bottlenecks, improve lead qualification, and
                achieve higher engagement with their target audience. The integration of automation not only
                streamlined their internal processes but also drove significant growth in client acquisition
                and revenue.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-bold text-ink mb-6">
                Key Takeaways
              </h2>
              <ul className="space-y-4">
                {[
                  "Automation can significantly enhance lead generation, qualification, and client outreach, particularly for industries with high-touch recruitment needs.",
                  "Personalized, automated outreach helps to engage prospects more effectively while reducing the manual effort involved.",
                  "Email deliverability is a critical factor in the success of outreach campaigns, and proper email authentication strategies are essential for maintaining a high engagement rate.",
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
