"use client";

import React from "react";
import { Check, MessageCircle, Clock } from "lucide-react";
import type { PackageItem } from "@/data/packages";

interface PackageCardProps {
  pkg: PackageItem;
}

export default function PackageCard({ pkg }: PackageCardProps) {
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(pkg.whatsappMessage)}`;

  return (
    <div
      className={`relative rounded-2xl p-8 flex flex-col justify-between transition-all duration-200 ${
        pkg.popular
          ? "bg-white text-gray-900 border-2 border-[#00C4D4] shadow-xl lg:-translate-y-1"
          : "bg-white text-gray-900 border border-gray-200/90 hover:border-gray-300 shadow-xs hover:shadow-md"
      }`}
    >
      <div>
        {/* Package Header */}
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-extrabold text-2xl text-gray-900 tracking-tight">
            {pkg.name}
          </h3>
          <div className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md bg-gray-100 text-gray-700">
            <Clock className="w-3.5 h-3.5 text-[#00C4D4]" />
            <span>{pkg.turnaround}</span>
          </div>
        </div>

        {/* Short Description */}
        <p className="text-sm text-gray-500 mb-6">
          {pkg.description}
        </p>

        {/* Pricing Block */}
        <div className="pb-6 mb-6 border-b border-gray-100">
          <div className="flex items-baseline gap-1.5">
            <span className="font-extrabold text-3xl sm:text-4xl text-gray-900 tracking-tight">
              {pkg.price}
            </span>
            <span className="text-sm font-semibold uppercase tracking-wider text-gray-500">
              {pkg.unit}
            </span>
          </div>
          <p className="text-xs text-gray-400 mt-1">
            *Includes eco wash, delicate dry & seal packaging
          </p>
        </div>

        {/* Feature List */}
        <div className="space-y-3.5 mb-8">
          <p className="text-xs font-bold uppercase tracking-wider text-gray-900">
            What’s included:
          </p>
          {pkg.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div className="mt-0.5 w-4 h-4 rounded-full bg-[#E0F7FA] text-[#00C4D4] flex items-center justify-center shrink-0">
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </div>
              <span className="text-sm text-gray-600 leading-relaxed">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Order CTA Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-full py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 font-semibold text-sm transition-all duration-200 ${
          pkg.popular
            ? "bg-[#00C4D4] hover:bg-[#00B0BF] text-white shadow-sm hover:shadow"
            : "bg-gray-900 hover:bg-black text-white hover:shadow-sm"
        }`}
      >
        <MessageCircle className="w-4 h-4 fill-current" />
        <span>Order Now via WhatsApp</span>
      </a>
    </div>
  );
}
