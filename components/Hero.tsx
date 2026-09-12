"use client";

import React from "react";
import Image from "next/image";
import { MessageCircle, ArrowRight, Clock, Hotel, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-gray-100">
      {/* Ambient background gradient with soft pulse animation */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-gradient-to-br from-[#E0F7FA]/70 to-transparent rounded-full blur-3xl pointer-events-none -z-0 animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 animate-slide-up">
            
            {/* Main Headline */}
            <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl text-gray-900 tracking-tight leading-[1.12]">
              Don’t waste your luggage on yesterday.
            </h1>

            {/* Sub-headline & Description */}
            <div className="space-y-3 max-w-xl">
              <p className="text-lg sm:text-xl font-medium text-gray-800">
                Fresh clothes. Same day.
              </p>
              <p className="text-base text-gray-500 leading-relaxed">
                Professional laundry service for your everyday life and travels. Pick up from your hotel lobby or doorstep before 10 AM and enjoy our 12-hour express laundry service delivered back the same evening.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
              <a
                href="https://wa.me/?text=Hello%20Laverie%20Laundry!%20I%20would%20like%20to%20book%20a%20laundry%20pickup%20today."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#00C4D4] hover:bg-[#00B0BF] text-white font-semibold text-sm tracking-wide transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Book via WhatsApp</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#packages"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50 text-gray-700 font-semibold text-sm tracking-wide transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-xs"
              >
                <span>View Packages</span>
              </a>
            </div>

            {/* Key trust indicators */}
            <div className="pt-6 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full text-xs text-gray-500">
              <div className="flex items-center gap-3 group transition-transform hover:-translate-y-0.5 duration-200">
                <div className="w-10 h-10 rounded-xl bg-gray-50 text-[#00C4D4] flex items-center justify-center shrink-0 border border-gray-100 group-hover:bg-[#E0F7FA] transition-colors">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-bold text-gray-900 text-sm">12H Express</span>
                  <span>Same-day evening return</span>
                </div>
              </div>

              <div className="flex items-center gap-3 group transition-transform hover:-translate-y-0.5 duration-200">
                <div className="w-10 h-10 rounded-xl bg-gray-50 text-[#00C4D4] flex items-center justify-center shrink-0 border border-gray-100 group-hover:bg-[#E0F7FA] transition-colors">
                  <Hotel className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-bold text-gray-900 text-sm">Hotel Concierge</span>
                  <span>Lobby pickup & drop-off</span>
                </div>
              </div>

              <div className="flex items-center gap-3 group transition-transform hover:-translate-y-0.5 duration-200">
                <div className="w-10 h-10 rounded-xl bg-gray-50 text-[#00C4D4] flex items-center justify-center shrink-0 border border-gray-100 group-hover:bg-[#E0F7FA] transition-colors">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-bold text-gray-900 text-sm">Ozone Clean</span>
                  <span>Fiber-safe gentle care</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Hero Visual without any texts, with gentle floating animation */}
          <div className="lg:col-span-5 relative animate-float">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-200/80 bg-white transition-transform hover:scale-[1.01] duration-500">
                <div className="relative aspect-square w-full">
                  <Image
                    src="/images/hero/laverie-hero-clean.jpg"
                    alt="Laverie Premium Laundry - Clean travel clothes and same-day express service"
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
