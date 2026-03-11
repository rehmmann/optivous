import ServicesOverview from "@/components/ServicesOverview";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactExperts from "@/components/ContactExperts";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20 bg-[#0a0a0a] text-white">

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-52">
          <div className="max-w-4xl">
            <div className="mb-10">
              <span className="text-xs font-mono tracking-widest text-blue-400 uppercase border border-blue-400/30 px-3 py-1.5">
                INTRODUCTION INFRASTRUCTURE • NOT AN AGENCY
              </span>
            </div>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-10">
              <span className="block text-white">Banks route capital.</span>
              <span className="block text-blue-400 mt-3">We route relationships.</span>
            </h1>
            <p className="text-base text-gray-500 mb-12 max-w-xl font-mono leading-relaxed">
              Pre-qualified introductions for firms that have moved past prospecting. 100+ routed.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="https://cal.com/rehman.sajid/30min?overlayCalendar=true"
                className="bg-blue-500 px-8 py-4 text-sm font-semibold text-white hover:bg-blue-400 transition-colors tracking-wider uppercase font-mono"
              >
                Access the Connection Layer
              </a>
              <a
                href="#network"
                className="border border-gray-700 px-8 py-4 text-sm font-semibold text-gray-500 hover:text-white hover:border-gray-500 transition-colors tracking-wider uppercase font-mono"
              >
                How It Works
              </a>
            </div>
            <p className="mt-6 text-xs text-gray-700 font-mono tracking-widest uppercase">
              No commitment required · 30-minute conversation
            </p>
          </div>
        </div>

        {/* Metrics Bar */}
        <div id="metrics" className="border-t border-b border-gray-800 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-3 gap-8 text-center font-mono">
              <div>
                <div className="text-4xl lg:text-5xl font-bold text-blue-400">100+</div>
                <div className="text-xs text-gray-600 mt-3 uppercase tracking-widest">Introductions Routed</div>
              </div>
              <div className="border-l border-r border-gray-800">
                <div className="text-4xl lg:text-5xl font-bold text-blue-400">87%</div>
                <div className="text-xs text-gray-600 mt-3 uppercase tracking-widest">Qualification Rate</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-bold text-blue-400">$5M+</div>
                <div className="text-xs text-gray-600 mt-3 uppercase tracking-widest">Client Revenue Enabled</div>
              </div>
            </div>
          </div>
        </div>

        {/* The Connection Layer */}
        <div id="network" className="py-32 border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <p className="text-xs font-mono tracking-widest text-blue-400 uppercase mb-5">THE CONNECTION LAYER</p>
              <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
                The Right Clients.<br />Routed to You.
              </h2>
              <p className="mt-6 text-base text-gray-500 max-w-2xl font-mono leading-relaxed">
                Recruitment firms, wealth managers, and biotech companies access a curated network of qualified opportunities—without prospecting teams, ad spend, or cold outreach.
              </p>
            </div>

            <div className="border border-gray-800 overflow-hidden mb-14 divide-y divide-gray-800">
              <div className="flex items-center gap-8 px-8 py-8 bg-gray-900/20 hover:bg-gray-900/40 transition-colors">
                <div className="w-7 h-7 rounded-full border border-gray-700 flex items-center justify-center flex-shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-mono text-gray-600 uppercase tracking-widest mb-1.5">Signal Layer</div>
                  <p className="text-gray-400 text-sm leading-relaxed font-mono">
                    Incoming buyer signals, intent data, and qualification triggers enter the system.
                  </p>
                </div>
                <div className="text-5xl font-mono text-gray-800/60 font-bold flex-shrink-0 tabular-nums">01</div>
              </div>
              <div className="flex items-center gap-8 px-8 py-8 bg-blue-950/20 border-l-2 border-l-blue-500 relative">
                <div className="absolute top-4 right-4">
                  <span className="text-xs font-mono bg-blue-500/10 text-blue-400 px-2 py-1 border border-blue-400/20 tracking-widest">
                    YOU ARE HERE
                  </span>
                </div>
                <div className="w-7 h-7 rounded-full border border-blue-500/50 flex items-center justify-center flex-shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-mono text-blue-400 uppercase tracking-widest mb-1.5">Routing Layer</div>
                  <p className="text-gray-300 text-sm leading-relaxed font-mono">
                    Real-time matching, qualification filtering, and pathway control—this is where we operate.
                  </p>
                </div>
                <div className="text-5xl font-mono text-blue-900/80 font-bold flex-shrink-0 tabular-nums">02</div>
              </div>
              <div className="flex items-center gap-8 px-8 py-8 bg-gray-900/20 hover:bg-gray-900/40 transition-colors">
                <div className="w-7 h-7 rounded-full border border-gray-700 flex items-center justify-center flex-shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-mono text-gray-600 uppercase tracking-widest mb-1.5">Connection Layer</div>
                  <p className="text-gray-400 text-sm leading-relaxed font-mono">
                    Executed introductions, completed handoffs, and closed deals flow to you.
                  </p>
                </div>
                <div className="text-5xl font-mono text-gray-800/60 font-bold flex-shrink-0 tabular-nums">03</div>
              </div>
            </div>

            <p className="text-gray-700 text-xs max-w-3xl font-mono leading-relaxed uppercase tracking-widest">
              Every qualified signal. Every matched connection. Every introduction—routed directly to you.
            </p>
          </div>
        </div>

        {/* Protocol Section */}
        <div id="protocol">
          <ServicesOverview />
        </div>

        {/* Old Way vs New Way */}
        <div className="py-32 border-b border-gray-800 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <p className="text-xs font-mono tracking-widest text-blue-400 uppercase mb-5">PROSPECTING VS. INFRASTRUCTURE</p>
              <h2 className="text-4xl lg:text-5xl font-bold">Searching vs. Being Found</h2>
              <p className="mt-4 text-gray-500 font-mono text-sm">The best firms don&apos;t prospect. Their ideal clients route through them.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-gray-800 overflow-hidden">
              <div className="p-10 border-b md:border-b-0 md:border-r border-gray-800 bg-gray-900/20">
                <div className="flex items-center gap-3 mb-8 flex-wrap">
                  <span className="text-xs font-mono text-gray-600 uppercase tracking-widest">Cold Prospecting</span>
                  <span className="h-px flex-1 bg-gray-800 hidden sm:block"></span>
                  <span className="text-xs font-mono text-gray-700 border border-gray-800 px-2 py-0.5 tracking-widest">INDIVIDUAL LEVEL</span>
                </div>
                <ul className="space-y-5 font-mono text-sm text-gray-600">
                  {[
                    "Build prospecting teams",
                    "Buy contact databases",
                    "Run cold outreach campaigns",
                    "Pay per contact, no vetting",
                    "Chase unqualified conversations",
                    "Wait to be discovered",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-gray-800 mt-0.5">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-10 bg-black border-l-2 border-l-blue-500/60">
                <div className="flex items-center gap-3 mb-8 flex-wrap">
                  <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">Optivous</span>
                  <span className="h-px flex-1 bg-gray-800 hidden sm:block"></span>
                  <span className="text-xs font-mono text-blue-400/50 border border-blue-400/20 px-2 py-0.5 tracking-widest">SYSTEMS LEVEL</span>
                </div>
                <ul className="space-y-5 font-mono text-sm text-white">
                  {[
                    "Qualified firms route to you",
                    "Warm introductions, not cold contacts",
                    "Pre-vetted against your exact ICP",
                    "Access-based, not transaction-based",
                    "Conversations that are ready to close",
                    "You become the destination",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-blue-400 mt-0.5">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-px border border-t-0 border-gray-800 p-8 bg-gray-900/10">
              <p className="text-center text-gray-600 font-mono text-xs leading-relaxed uppercase tracking-widest">
                The fundamental shift — Banks don&apos;t search for capital, they attract and route it. World-class firms don&apos;t search for clients. Their clients route through them.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div id="faq">
          <FAQ />
        </div>

        {/* Contact */}
        <div id="contact">
          <ContactExperts />
        </div>

      </main>
      <Footer />
    </>
  );
}
