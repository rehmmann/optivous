const steps = [
  {
    code: "DETECT",
    title: "Signal Detection",
    description: "Inbound buyer signals enter the system through our B2B network of touchpoints and intent sources.",
    metrics: [
      { label: "Signal Volume", value: "High" },
      { label: "Intent Strength", value: "Verified" },
      { label: "Source Quality", value: "Curated" },
    ],
  },
  {
    code: "QUALIFY",
    title: "Route Qualification",
    description: "Real-time filtering and pathway validation against your exact ideal client profile.",
    metrics: [
      { label: "Match Score", value: "ICP-fit" },
      { label: "Qualification Rate", value: "87%" },
      { label: "Filter Efficiency", value: "Multi-layer" },
    ],
  },
  {
    code: "CONNECT",
    title: "Pathway Execution",
    description: "Controlled warm introduction to the optimal destination—your sales pipeline.",
    metrics: [
      { label: "Intro Speed", value: "<48h" },
      { label: "Path Accuracy", value: "94%" },
      { label: "Throughput", value: "Continuous" },
    ],
  },
  {
    code: "CLOSE",
    title: "Transaction Flow",
    description: "Successful handoff and outcome tracking with full visibility into deal progress.",
    metrics: [
      { label: "Completion Rate", value: "Tracked" },
      { label: "Revenue Enabled", value: "$5M+" },
      { label: "Network Effect", value: "Compounding" },
    ],
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-24 border-b border-stone-200 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-xs font-mono tracking-widest text-navy-600 uppercase mb-5">THE PROTOCOL</p>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-ink">System-Level Processing</h2>
          <p className="mt-4 text-stone-600 max-w-xl font-mono text-sm leading-relaxed">
            Not steps. Not tasks. A continuous flow of signal processing at infrastructure scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-stone-200 overflow-hidden">
          {steps.map((step, i) => (
            <div
              key={step.code}
              className={`p-8 bg-stone-100/20 ${i < steps.length - 1 ? "border-b lg:border-b-0 lg:border-r border-stone-200" : ""}`}
            >
              <div className="text-xs font-mono text-navy-600 tracking-widest uppercase mb-3">{step.code}</div>
              <h3 className="text-base font-semibold text-ink mb-3">{step.title}</h3>
              <p className="text-sm text-stone-700 mb-8 leading-relaxed font-mono">{step.description}</p>
              <div className="border-t border-stone-200 pt-4 space-y-2.5">
                <div className="text-xs font-mono text-stone-600 uppercase tracking-widest mb-3">METRICS</div>
                {step.metrics.map((m) => (
                  <div key={m.label} className="flex justify-between text-xs font-mono">
                    <span className="text-stone-600">{m.label}</span>
                    <span className="text-ink">{m.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Throughput stats */}
        <div className="mt-0 grid grid-cols-3 gap-0 border border-t-0 border-stone-200 overflow-hidden">
          <div className="p-8 text-center border-r border-stone-200">
            <div className="text-xs font-mono text-stone-600 uppercase tracking-widest mb-3">THROUGHPUT</div>
            <div className="font-serif text-4xl font-bold text-navy-600">100+</div>
            <div className="text-xs text-stone-600 mt-2 font-mono">Introductions / Year</div>
          </div>
          <div className="p-8 text-center border-r border-stone-200">
            <div className="text-xs font-mono text-stone-600 uppercase tracking-widest mb-3">QUALIFICATION</div>
            <div className="font-serif text-4xl font-bold text-navy-600">87%</div>
            <div className="text-xs text-stone-600 mt-2 font-mono">Signals Converted</div>
          </div>
          <div className="p-8 text-center">
            <div className="text-xs font-mono text-stone-600 uppercase tracking-widest mb-3">AVG INTRO TIME</div>
            <div className="font-serif text-4xl font-bold text-navy-600">&lt;48h</div>
            <div className="text-xs text-stone-600 mt-2 font-mono">Signal to Connection</div>
          </div>
        </div>
      </div>
    </section>
  );
}
