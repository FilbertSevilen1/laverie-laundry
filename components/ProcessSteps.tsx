"use client";

import React from "react";
import { MessageSquarePlus, Sparkles, Wind, PackageCheck } from "lucide-react";

export default function ProcessSteps() {
  const steps = [
    {
      number: "01",
      icon: MessageSquarePlus,
      title: "Schedule via WhatsApp",
      description:
        "Message us in under 30 seconds with your hotel room number or doorstep location before 10:00 AM.",
    },
    {
      number: "02",
      icon: Sparkles,
      title: "Gentle Eco & Ozone Care",
      description:
        "Fabric inspection, dermatological eco-detergents, and low-temperature ozone sanitization for complete freshness.",
    },
    {
      number: "03",
      icon: Wind,
      title: "Artisan Steam & Crisp Fold",
      description:
        "Wrinkle-release finishing, crisp hotel-grade folding, or hanger preparation with breathable dust covers.",
    },
    {
      number: "04",
      icon: PackageCheck,
      title: "Evening Delivery (12H)",
      description:
        "Delivered back directly to your hotel concierge or residence the very same evening, ready to wear or pack.",
    },
  ];

  return (
    <section id="process" className="py-16 sm:py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header without badges */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-extrabold text-3xl sm:text-4xl text-gray-900 tracking-tight">
            Fresh Clothes In 4 Simple Steps
          </h2>
          <p className="mt-3 text-base text-gray-500">
            Designed for busy professionals and travelers who value their time and wardrobe.
          </p>
        </div>

        {/* 4 Cards Grid styled directly after BMN 01-04 row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="group relative bg-[#F8F9FA] hover:bg-white rounded-2xl p-6 border border-gray-200/80 hover:border-[#00C4D4] transition-all duration-200 hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-bold text-xs text-gray-400 group-hover:text-[#00C4D4] transition-colors">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white border border-gray-200/80 group-hover:bg-[#00C4D4] group-hover:text-white group-hover:border-[#00C4D4] text-gray-700 flex items-center justify-center transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-[#00C4D4] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200/60 flex items-center text-xs font-semibold text-gray-400 group-hover:text-[#00C4D4]">
                  <span>Step {step.number} of 04</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
