"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What makes Optivous different from a traditional outreach agency?",
    answer:
      "Traditional agencies send you contact lists. We route qualified introductions. Our infrastructure-first model means every introduction has been pre-qualified against your ICP before it reaches you—no cold lists, no spray-and-pray campaigns.",
  },
  {
    question: "How do you qualify connections before routing them?",
    answer:
      "Every signal passes through our multi-layer qualification filter: intent verification, ICP match scoring, budget validation, and authority confirmation. Only signals that clear all filters get routed to you as a warm introduction.",
  },
  {
    question: "What does 'connection infrastructure' mean in practice?",
    answer:
      "It means we've built systematic processes for detecting buyer intent, matching signals to the right provider, and executing introductions—at scale. You don't get a list; you get warm, pre-qualified conversations already primed for your offering.",
  },
  {
    question: "What industries and client profiles do you work with?",
    answer:
      "We work with recruitment firms, biotech companies, investment advisors, and RIAs. We define your exact ICP—firm type, AUM range, headcount, decision-maker titles—and only route introductions that match your criteria.",
  },
  {
    question: "How is pricing structured?",
    answer:
      "We operate on an infrastructure access model—not pay-per-contact. This aligns our incentives: our success is measured by the quality and volume of introductions routed, not the number of raw contacts delivered.",
  },
  {
    question: "How long before I start receiving qualified introductions?",
    answer:
      "Most clients receive their first qualified introductions within 2–4 weeks of onboarding. The routing layer is calibrated to your ICP before we open the flow, ensuring quality from day one.",
  },
  {
    question: "What does onboarding look like?",
    answer:
      "We run a signal calibration session to map your ICP, define qualification criteria, and configure your routing pathway. This ensures every introduction that reaches you is pre-matched—not just pre-filtered.",
  },
  {
    question: "Can I control the volume and pace of introductions?",
    answer:
      "Yes. You set the throughput capacity. Whether you want 5 or 50 introductions per month, the routing layer is configured to match your team's capacity to engage and close.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const midPoint = Math.ceil(faqData.length / 2);
  const leftColumnFAQs = faqData.slice(0, midPoint);
  const rightColumnFAQs = faqData.slice(midPoint);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#0a0a0a] py-28 border-b border-gray-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-xs font-mono tracking-widest text-blue-400 uppercase mb-5">FAQ</p>
          <h2 className="text-4xl font-bold text-white">Common Questions</h2>
          <p className="mt-4 text-gray-400 font-mono text-sm">
            Everything you need to know about the connection infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <div className="space-y-3">
            {leftColumnFAQs.map((item, index) => (
              <div key={index} className="border border-gray-800">
                <button
                  onClick={() => handleClick(index)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left bg-gray-900/20 hover:bg-gray-900/50 transition-colors"
                >
                  <span className="font-medium text-white text-sm">{item.question}</span>
                  <span className="ml-6 flex-shrink-0 text-gray-500 font-mono text-lg">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-5 py-4 border-t border-gray-800">
                    <p className="text-gray-400 text-sm leading-relaxed font-mono">{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            {rightColumnFAQs.map((item, index) => (
              <div key={index + midPoint} className="border border-gray-800">
                <button
                  onClick={() => handleClick(index + midPoint)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left bg-gray-900/20 hover:bg-gray-900/50 transition-colors"
                >
                  <span className="font-medium text-white text-sm">{item.question}</span>
                  <span className="ml-6 flex-shrink-0 text-gray-500 font-mono text-lg">
                    {openIndex === index + midPoint ? "−" : "+"}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index + midPoint ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-5 py-4 border-t border-gray-800">
                    <p className="text-gray-400 text-sm leading-relaxed font-mono">{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
