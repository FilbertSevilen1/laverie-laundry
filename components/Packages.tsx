"use client";

import React from "react";
import Image from "next/image";
import { packages } from "@/data/packages";
import PackageCard from "./PackageCard";
import { CheckCircle2 } from "lucide-react";

export default function Packages() {
  return (
    <section id="packages" className="py-20 bg-[#F8F9FA] relative overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header without badges */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl text-gray-900 tracking-tight">
            Our Packages
          </h2>
          <p className="mt-3 text-base text-gray-500">
            Choose the service that fits your itinerary. Seamless hotel concierge pickup or doorstep service.
          </p>
        </div>

        {/* Package Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-16">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>

        {/* Packaging Showcase Banner without badges */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xs">
            <Image
              src="/images/packages/laverie-packaging.jpg"
              alt="Laverie signature presentation packaging"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>

          <div className="lg:col-span-8 space-y-4">
            <h3 className="font-extrabold text-2xl sm:text-3xl text-gray-900 tracking-tight">
              Every garment returned crisp, fragrant, and sealed.
            </h3>
            <p className="text-base text-gray-500 leading-relaxed">
              We never return your clothing in flimsy generic plastic bags. Laverie wraps every clean order in anti-dust, breathable sealed packaging, complete with custom garment tags and collar supports, so your wardrobe travels effortlessly.
            </p>
            <div className="flex flex-wrap gap-4 pt-2 text-sm text-gray-700">
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#00C4D4]" /> Anti-dust dust bag
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#00C4D4]" /> Wooden & velvet hangers upon request
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#00C4D4]" /> Eco-certified biodegradable liners
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
