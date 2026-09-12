"use client";

import React, { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
import { faqs } from "@/data/faq";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header without badges (Exact style as BMN reference) */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <h2 className="font-extrabold text-3xl sm:text-4xl text-gray-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-gray-500">
            Everything you need to know about our express hotel turnaround, garment care, and pickup process.
          </p>
        </div>

        {/* Accordion List */}
        <div className="divide-y divide-gray-200 border-y border-gray-200">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="transition-colors">
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full py-5 text-left flex items-center justify-between gap-4 font-semibold text-base sm:text-lg text-gray-900 hover:text-[#00C4D4] transition-colors"
                >
                  <span>{faq.question}</span>
                  <span
                    className={`w-6 h-6 flex items-center justify-center shrink-0 transition-transform duration-200 text-gray-400 ${
                      isOpen ? "rotate-180 text-[#00C4D4]" : ""
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </span>
                </button>

                {isOpen && (
                  <div className="pb-5 pt-1 text-sm sm:text-base text-gray-500 leading-relaxed animate-in fade-in duration-150">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Banner without badges */}
        <div className="mt-12 p-6 rounded-2xl bg-[#F8F9FA] border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-bold text-base text-gray-900">
              Have a special garment or custom hotel request?
            </h4>
            <p className="text-sm text-gray-500 mt-0.5">
              Our concierge team is available on WhatsApp daily from 07:30 to 21:00.
            </p>
          </div>
          <a
            href="https://wa.me/?text=Hello%20Laverie%20Concierge!%20I%20have%20a%20question%20about%20pickup."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#00C4D4] hover:bg-[#00B0BF] text-white text-xs font-bold uppercase tracking-wider transition-all shrink-0 shadow-sm"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Chat With Concierge</span>
          </a>
        </div>

      </div>
    </section>
  );
}
