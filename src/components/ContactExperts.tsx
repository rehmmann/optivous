"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactExperts() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        "service_j353o43",
        "template_wg5tz7p",
        formRef.current!,
        "user_wiUeBluxgHfn8y23Vihwj"
      );
      setSubmitStatus("success");
      formRef.current?.reset();
    } catch (error) {
      setSubmitStatus("error");
      console.error("Email send failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-28 px-4 bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <p className="text-xs font-mono tracking-widest text-blue-400 uppercase mb-5">JOIN THE NETWORK</p>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Access the<br />Connection Layer
          </h2>
          <p className="text-gray-400 max-w-xl font-mono text-sm leading-relaxed">
            Network capacity is controlled to maintain signal quality and routing velocity. If your business is a strong fit, request access below.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-0 border border-gray-800 overflow-hidden mb-6">
          <div className="p-6 text-center border-r border-gray-800">
            <div className="text-xs font-mono text-gray-700 uppercase tracking-widest mb-3">ACTIVE ROUTES</div>
            <div className="text-3xl font-bold text-blue-400 font-mono">100+</div>
            <div className="text-xs text-gray-700 mt-1.5 font-mono">Per Year</div>
          </div>
          <div className="p-6 text-center border-r border-gray-800">
            <div className="text-xs font-mono text-gray-700 uppercase tracking-widest mb-3">QUALIFICATION</div>
            <div className="text-3xl font-bold text-blue-400 font-mono">87%</div>
            <div className="text-xs text-gray-700 mt-1.5 font-mono">Match Rate</div>
          </div>
          <div className="p-6 text-center">
            <div className="text-xs font-mono text-gray-700 uppercase tracking-widest mb-3">EXPERIENCE</div>
            <div className="text-3xl font-bold text-blue-400 font-mono">7+</div>
            <div className="text-xs text-gray-700 mt-1.5 font-mono">Years</div>
          </div>
        </div>

        <div className="border border-gray-800 p-4 mb-8 bg-gray-900/20">
          <p className="text-xs font-mono text-gray-600 text-center">
            Network access is controlled. We maintain strict qualification standards to protect routing integrity.
          </p>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-5 border border-gray-800 p-8 bg-gray-900/10"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="from_name"
                className="block text-xs font-mono text-gray-500 uppercase tracking-widest mb-2"
              >
                Name
              </label>
              <input
                type="text"
                name="from_name"
                id="from_name"
                required
                className="w-full px-4 py-3 bg-black border border-gray-800 text-white text-sm focus:outline-none focus:border-blue-500 font-mono placeholder:text-gray-700"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="reply_to"
                className="block text-xs font-mono text-gray-500 uppercase tracking-widest mb-2"
              >
                Email
              </label>
              <input
                type="email"
                name="reply_to"
                id="reply_to"
                required
                className="w-full px-4 py-3 bg-black border border-gray-800 text-white text-sm focus:outline-none focus:border-blue-500 font-mono placeholder:text-gray-700"
                placeholder="your@company.com"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="company_name"
              className="block text-xs font-mono text-gray-500 uppercase tracking-widest mb-2"
            >
              Company
            </label>
            <input
              type="text"
              name="company_name"
              id="company_name"
              className="w-full px-4 py-3 bg-black border border-gray-800 text-white text-sm focus:outline-none focus:border-blue-500 font-mono placeholder:text-gray-700"
              placeholder="Your company"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-xs font-mono text-gray-500 uppercase tracking-widest mb-2"
            >
              Describe your ideal client profile
            </label>
            <textarea
              name="message"
              id="message"
              required
              rows={4}
              className="w-full px-4 py-3 bg-black border border-gray-800 text-white text-sm focus:outline-none focus:border-blue-500 font-mono resize-none placeholder:text-gray-700"
              placeholder="Industry, company size, decision-maker titles, deal size..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white py-4 px-6 hover:bg-blue-500 transition-colors disabled:opacity-50 text-sm font-mono uppercase tracking-widest"
          >
            {isSubmitting ? "Routing Request..." : "Request Network Access"}
          </button>

          {submitStatus === "success" && (
            <p className="text-green-400 text-center text-sm font-mono">
              Request received. We&apos;ll be in touch within 24 hours.
            </p>
          )}
          {submitStatus === "error" && (
            <p className="text-red-400 text-center text-sm font-mono">
              Transmission failed. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
