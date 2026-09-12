"use client";

import React from "react";

export default function StatsDark() {
  const metrics = [
    {
      value: "12H",
      label: "Same-Day Express",
      description: "Pick up before 10 AM, returned before evening dinner.",
    },
    {
      value: "15,000+",
      label: "Garments Treated",
      description: "From delicate couture silks to everyday laundry.",
    },
    {
      value: "25+",
      label: "Partner Hotels",
      description: "Trusted by boutique villas & luxury suites.",
    },
    {
      value: "99.8%",
      label: "On-Time Dispatch",
      description: "Reliable coordination right to your concierge.",
    },
  ];

  return (
    <section className="py-20 bg-[#0D161E] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header without badges (Replicating BMN reference) */}
        <div className="max-w-3xl mb-14">
          <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white">
            Our numbers speak for themselves
          </h2>
          <p className="mt-3 text-base text-gray-400">
            Built on punctuality, fabric integrity, and seamless hotel coordination.
          </p>
        </div>

        {/* Metrics row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 divide-y sm:divide-y-0 sm:divide-x divide-gray-800">
          {metrics.map((item, idx) => (
            <div key={idx} className={`pt-6 sm:pt-0 ${idx !== 0 ? "sm:pl-8 lg:pl-10" : ""}`}>
              <div className="font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white mb-2">
                {item.value}
              </div>
              <p className="text-sm sm:text-base font-bold text-gray-200 tracking-wide mb-1">
                {item.label}
              </p>
              <p className="text-xs text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
