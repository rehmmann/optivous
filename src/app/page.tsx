import Link from "next/link";
import ServicesOverview from "@/components/ServicesOverview";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const recentWork = [
  {
    issue: "Issue 01",
    title: "Securing 4 Key Healthcare Dream Clients",
    client: "HelpCare AI",
    result: "4 enterprise healthcare deals secured",
    href: "/casestudies?case=helpcare-ai",
  },
  {
    issue: "Issue 02",
    title: "Elevating Recruitment Efficiency through Sales Systems",
    client: "Elate Staffing Solutions Ltd.",
    result: "22 placements in 55 days",
    href: "/casestudies?case=elate-staffing",
  },
  {
    issue: "Issue 03",
    title: "Scaling Success with Precision",
    client: "Vention",
    result: "+$85K in additional revenue in one quarter",
    href: "/casestudies?case=vention",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16 bg-ivory text-ink">

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-4xl">
            <div className="mb-10">
              <span className="text-xs font-mono tracking-widest text-navy-600 uppercase border border-navy-600/30 px-3 py-1.5">
                RESEARCH & INTRODUCTIONS
              </span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] mb-10 max-w-3xl">
              Rehman routes qualified introductions between operators who need to find each other.
            </h1>
            <p className="text-base text-stone-600 mb-12 max-w-xl font-mono leading-relaxed">
              Selective mandates across capital, growth, and strategic introductions.
            </p>
            <p className="flex flex-wrap items-center gap-4 font-mono text-sm">
              <a
                href="https://cal.com/rehman.sajid/30min?overlayCalendar=true"
                className="inline-flex items-center gap-2 bg-navy-700 text-ivory px-5 py-2.5 hover:bg-navy-800 transition-colors"
              >
                Book private consultation →
              </a>
              <a
                href="#network"
                className="text-stone-600 border-b border-stone-300 hover:text-ink hover:border-stone-600 transition-colors pb-0.5"
              >
                How It Works →
              </a>
            </p>
          </div>
        </div>

        {/* Metrics Bar */}
        <div id="metrics" className="border-t border-b border-stone-200 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-3 gap-8 text-center font-mono">
              <div>
                <div className="font-serif text-4xl lg:text-5xl font-bold text-navy-600">100+</div>
                <div className="text-xs text-stone-600 mt-3 uppercase tracking-widest">Introductions Routed</div>
              </div>
              <div className="border-l border-r border-stone-200">
                <div className="font-serif text-4xl lg:text-5xl font-bold text-navy-600">87%</div>
                <div className="text-xs text-stone-600 mt-3 uppercase tracking-widest">Qualification Rate</div>
              </div>
              <div>
                <div className="font-serif text-4xl lg:text-5xl font-bold text-navy-600">$5M+</div>
                <div className="text-xs text-stone-600 mt-3 uppercase tracking-widest">Client Revenue Enabled</div>
              </div>
            </div>
          </div>
        </div>

        {/* The Connection Layer */}
        <div id="network" className="py-24 border-b border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <p className="text-xs font-mono tracking-widest text-navy-600 uppercase mb-5">THE CONNECTION LAYER</p>
              <h2 className="font-serif text-5xl lg:text-6xl font-bold leading-tight">
                The Right Clients.<br />Routed to You.
              </h2>
              <p className="mt-6 text-base text-stone-600 max-w-2xl font-mono leading-relaxed">
                Private Equity · Wealth · IT Services · Healthcare · Recruitment
              </p>
            </div>

            <div className="border border-stone-200 overflow-hidden mb-14 divide-y divide-stone-200">
              <div className="flex items-center gap-8 px-8 py-8 bg-stone-100/20 hover:bg-stone-100/40 transition-colors">
                <div className="w-7 h-7 rounded-full border border-stone-300 flex items-center justify-center flex-shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-stone-400"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-mono text-stone-600 uppercase tracking-widest mb-1.5">Signal Layer</div>
                  <p className="text-stone-700 text-sm leading-relaxed font-mono">
                    Incoming buyer signals, intent data, and qualification triggers enter the system.
                  </p>
                </div>
                <div className="text-5xl font-mono text-stone-200/60 font-bold flex-shrink-0 tabular-nums">01</div>
              </div>
              <div className="flex items-center gap-8 px-8 py-8 bg-navy-50/20 border-l-2 border-l-navy-500 relative">
                <div className="absolute top-4 right-4">
                  <span className="text-xs font-mono bg-navy-500/10 text-navy-600 px-2 py-1 border border-navy-600/20 tracking-widest">
                    YOU ARE HERE
                  </span>
                </div>
                <div className="w-7 h-7 rounded-full border border-navy-500/50 flex items-center justify-center flex-shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-navy-600"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-mono text-navy-600 uppercase tracking-widest mb-1.5">Routing Layer</div>
                  <p className="text-stone-700 text-sm leading-relaxed font-mono">
                    Real-time matching, qualification filtering, and pathway control—this is where we operate.
                  </p>
                </div>
                <div className="text-5xl font-mono text-navy-100/80 font-bold flex-shrink-0 tabular-nums">02</div>
              </div>
              <div className="flex items-center gap-8 px-8 py-8 bg-stone-100/20 hover:bg-stone-100/40 transition-colors">
                <div className="w-7 h-7 rounded-full border border-stone-300 flex items-center justify-center flex-shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-stone-400"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-mono text-stone-600 uppercase tracking-widest mb-1.5">Connection Layer</div>
                  <p className="text-stone-700 text-sm leading-relaxed font-mono">
                    Executed introductions, completed handoffs, and closed deals flow to you.
                  </p>
                </div>
                <div className="text-5xl font-mono text-stone-200/60 font-bold flex-shrink-0 tabular-nums">03</div>
              </div>
            </div>

            <p className="text-stone-600 text-xs max-w-3xl font-mono leading-relaxed uppercase tracking-widest">
              Every qualified signal. Every matched connection. Every introduction—routed directly to you.
            </p>
          </div>
        </div>

        {/* Protocol Section */}
        <div id="protocol">
          <ServicesOverview />
        </div>

        {/* Old Way vs New Way */}
        <div className="py-24 border-b border-stone-200 bg-ivory">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <p className="text-xs font-mono tracking-widest text-navy-600 uppercase mb-5">PROSPECTING VS. INFRASTRUCTURE</p>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold">Searching vs. Being Found</h2>
              <p className="mt-4 text-stone-600 font-mono text-sm">The best firms don&apos;t prospect. Their ideal clients route through them.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-stone-200 overflow-hidden">
              <div className="p-10 border-b md:border-b-0 md:border-r border-stone-200 bg-stone-100/20">
                <div className="flex items-center gap-3 mb-8 flex-wrap">
                  <span className="text-xs font-mono text-stone-600 uppercase tracking-widest">Cold Prospecting</span>
                  <span className="h-px flex-1 bg-stone-200 hidden sm:block"></span>
                  <span className="text-xs font-mono text-stone-600 border border-stone-200 px-2 py-0.5 tracking-widest">INDIVIDUAL LEVEL</span>
                </div>
                <ul className="space-y-5 font-mono text-sm text-stone-600">
                  {[
                    "Build prospecting teams",
                    "Buy contact databases",
                    "Run cold outreach campaigns",
                    "Pay per contact, no vetting",
                    "Chase unqualified conversations",
                    "Wait to be discovered",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-stone-200 mt-0.5">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-10 bg-ivory border-l-2 border-l-navy-500/60">
                <div className="flex items-center gap-3 mb-8 flex-wrap">
                  <span className="text-xs font-mono text-navy-600 uppercase tracking-widest">Optivous</span>
                  <span className="h-px flex-1 bg-stone-200 hidden sm:block"></span>
                  <span className="text-xs font-mono text-navy-600/50 border border-navy-600/20 px-2 py-0.5 tracking-widest">SYSTEMS LEVEL</span>
                </div>
                <ul className="space-y-5 font-mono text-sm text-ink">
                  {[
                    "Qualified firms route to you",
                    "Warm introductions, not cold contacts",
                    "Pre-vetted against your exact ICP",
                    "Access-based, not transaction-based",
                    "Conversations that are ready to close",
                    "You become the destination",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-navy-600 mt-0.5">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-px border border-t-0 border-stone-200 p-8 bg-stone-100/10">
              <p className="text-center text-stone-600 font-mono text-xs leading-relaxed uppercase tracking-widest">
                The fundamental shift — Banks don&apos;t search for capital, they attract and route it. World-class firms don&apos;t search for clients. Their clients route through them.
              </p>
            </div>
          </div>
        </div>

        {/* Recent Work */}
        <div id="work" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-xs font-mono tracking-widest text-navy-700 uppercase mb-10">Recent Work</p>

              <div>
                {recentWork.map((item) => (
                  <Link
                    key={item.issue}
                    href={item.href}
                    className="block py-5 border-b border-stone-100 group"
                  >
                    <div className="text-[17px] text-stone-800 group-hover:text-ink transition-colors font-serif">
                      {item.title}
                    </div>
                    <div className="text-sm text-stone-600 font-mono mt-1">
                      {item.client} — {item.result}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Founder Note */}
        <div className="py-16 border-t border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-xs font-mono tracking-widest text-navy-700 uppercase mb-6">A note from Rehman</p>
              <p className="text-[19px] text-stone-700 leading-[1.6] font-serif italic mb-8">
                Currently accepting 2 new counterparties this quarter.
              </p>
              <a
                href="https://cal.com/rehman.sajid/30min?overlayCalendar=true"
                className="inline-flex items-center gap-2 bg-navy-700 px-6 py-3 text-xs font-mono tracking-widest text-ivory uppercase hover:bg-navy-800 transition-colors"
              >
                Book private consultation →
              </a>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div id="contact" className="py-20 border-t border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-xs font-mono tracking-widest text-navy-700 uppercase mb-8">Contact</p>
              <div className="flex flex-col gap-3 font-mono text-lg">
                <a
                  href="mailto:rehman@getoptivous.com"
                  className="text-ink hover:text-navy-700 transition-colors w-fit"
                >
                  rehman@getoptivous.com
                </a>
                <a
                  href="https://www.linkedin.com/company/optivous"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-600 hover:text-navy-700 transition-colors w-fit"
                >
                  linkedin.com/company/optivous
                </a>
              </div>
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
