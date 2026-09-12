"use client";

import React from "react";
import { MessageCircle, ArrowRight, Clock, MapPin } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 bg-white text-gray-900 relative overflow-hidden border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Main Headline without badges (Styled after BMN bottom CTA) */}
        <h2 className="font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-gray-900 mb-6 leading-tight">
          Ready to give your <br />
          clothes some care?
        </h2>

        <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Let Laverie handle the laundry so you can focus on what matters. Book before <strong className="text-gray-900">10:00 AM</strong> for evening delivery straight to your hotel lobby or doorstep.
        </p>

        {/* Primary Action Button - Cyan Pill matching BMN reference */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/?text=Hello%20Laverie%20Laundry!%20I%20am%20ready%20to%20book%20a%20pickup."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#00C4D4] hover:bg-[#00B0BF] text-white font-bold text-sm sm:text-base tracking-wide transition-all duration-200 shadow-sm hover:shadow"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Book via WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#packages"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50 text-gray-700 font-semibold text-sm sm:text-base transition-all duration-200 shadow-xs"
          >
            <span>Review Package Rates</span>
          </a>
        </div>

        {/* Trust Points */}
        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-gray-500">
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#00C4D4]" /> 12-Hour Express Turnaround
          </span>
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#00C4D4]" /> Selected Hotels & Doorstep Areas
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00C4D4]"></span> Instant WhatsApp Confirmation
          </span>
        </div>
      </div>
    </section>
  );
}
