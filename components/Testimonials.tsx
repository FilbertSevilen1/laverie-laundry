"use client";

import React from "react";
import { Star } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Marcus Vance",
      role: "Business Traveler & Hotel Guest",
      hotel: "The Seminyak Suite Hotel",
      rating: 5,
      content:
        "Handed my suit and shirts to the front desk at 9:30 AM before my meetings. By 7 PM when I returned to the hotel, everything was neatly hung in dust bags, steamed to perfection, and smelled wonderful. Exceptional service!",
    },
    {
      name: "Sophia Chen",
      role: "Digital Nomad & Villa Resident",
      hotel: "Canggu Eco Villas",
      rating: 5,
      content:
        "Finding a laundry service that genuinely respects delicate fabrics and silks is rare. Laverie’s packaging and detergent quality blew me away. Best laundry experience in Bali by far.",
    },
    {
      name: "David & Claire Miller",
      role: "Holiday Getaway Travelers",
      hotel: "Alila Resort & Villas",
      rating: 5,
      content:
        "We didn't want to fly back with a suitcase full of dirty holiday clothes. Laverie picked up our luggage bags directly from our resort reception and delivered everything fresh and compact. Worth every Rupiah!",
    },
  ];

  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header without badges (Exact wording & style from BMN image) */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-extrabold text-3xl sm:text-4xl text-gray-900 tracking-tight">
            Here’s what people are saying
          </h2>
          <p className="mt-3 text-base text-gray-500">
            Trusted by travelers, hotel guests, and local residents who demand immaculate fabric care.
          </p>
        </div>

        {/* 3 Review Cards matching BMN layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-[#F8F9FA] rounded-2xl p-7 border border-gray-200/80 hover:border-gray-300 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-[#F59E0B] mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Quote Content */}
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  "{rev.content}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-gray-200/60 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm text-gray-900">
                    {rev.name}
                  </h4>
                  <p className="text-xs text-gray-500">{rev.role}</p>
                  <p className="text-xs text-[#00C4D4] font-medium mt-0.5">{rev.hotel}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
