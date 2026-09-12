"use client";

import React from "react";
import { Clock, Shirt, Sparkles, BedDouble, ArrowUpRight } from "lucide-react";

export default function CoreServices() {
  const services = [
    {
      icon: Clock,
      title: "12-Hour Hotel Express",
      description:
        "Specifically designed for travelers and business itineraries. Picked up before 10 AM, returned fresh before 10 PM.",
      features: ["Lobby pickup & delivery", "Ozone antibacterial wash", "Evening return guarantee"],
    },
    {
      icon: Shirt,
      title: "Wash, Dry & Fold",
      description:
        "The ultimate everyday convenience. Temperature-controlled wash, delicate tumble dry, and hotel-crisp folding.",
      features: ["Color sorting", "Dermatological detergent", "Sealed hygienic bundles"],
    },
    {
      icon: Sparkles,
      title: "Delicate & Dry Cleaning",
      description:
        "Artisan hand-pressing and gentle solvent-free dry care for suits, silk dresses, cashmere, and designer garments.",
      features: ["Individual stain treatment", "Hand steam finishing", "Delivered on hangers"],
    },
    {
      icon: BedDouble,
      title: "Linen & Duvet Care",
      description:
        "Deep thermal sanitization for bed linens, fluffy towels, duvets, and blankets restoring fresh loft and softness.",
      features: ["High-capacity equipment", "Aroma-free hypoallergenic", "Vacuum packaging available"],
    },
  ];

  return (
    <section id="services" className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header without badges (Styled like BMN 'Core Service') */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div className="max-w-xl">
            <h2 className="font-extrabold text-3xl sm:text-4xl text-gray-900 tracking-tight">
              Core Service
            </h2>
            <p className="mt-3 text-base text-gray-500">
              Expert garment treatment and laundry solutions for every textile requirement.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <a
              href="https://wa.me/?text=Hello%20Laverie%20Laundry!%20I%20have%20a%20question%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-800 hover:text-[#00C4D4] transition-colors"
            >
              <span>Consult with our garment specialist</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <div
                key={idx}
                className="group relative bg-[#F8F9FA] hover:bg-white rounded-2xl p-6 border border-gray-200/80 hover:border-[#00C4D4] transition-all duration-200 hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-gray-200/80 group-hover:bg-[#00C4D4] group-hover:text-white group-hover:border-[#00C4D4] text-gray-800 flex items-center justify-center mb-5 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-[#00C4D4] transition-colors">
                    {svc.title}
                  </h3>

                  <p className="text-sm text-gray-500 leading-relaxed mb-6">
                    {svc.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-200/60 space-y-2">
                  {svc.features.map((item, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00C4D4]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
