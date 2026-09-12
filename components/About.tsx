"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, ShieldCheck, Zap, CheckCircle2, MapPin, ExternalLink, Clock, Phone } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: Sparkles,
      title: "Quality Care",
      description: "Individual fabric assessment, pH-balanced formulas, and meticulous steam pressing.",
    },
    {
      icon: ShieldCheck,
      title: "Hygienic Process",
      description: "Hospitality-grade sterilization that removes 99.9% of bacteria without damaging colors.",
    },
    {
      icon: Zap,
      title: "Easy Service",
      description: "Seamless door-to-door handoff with 12-hour turnaround before your evening dinner.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-[#F8F9FA] relative overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Story Section: Image & Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left: Luxury Atelier Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-md border border-gray-200 bg-white group">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/images/about/laverie-atelier.jpg"
                  alt="Laverie Luxury Laundry Atelier"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>

          {/* Right: Content Structure */}
          <div className="lg:col-span-6 flex flex-col space-y-5">
            <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl text-gray-900 leading-tight tracking-tight">
              Laundry care, made simple.
            </h2>

            <div className="space-y-4 text-base text-gray-600 leading-relaxed">
              <p>
                Born from the demanding pace of modern travel and boutique hospitality, <strong className="text-gray-900">Laverie</strong> redefines garment care. We believe you should spend your valuable hours exploring, conducting business, or relaxing—never burdened with laundry chores or compromised hotel wardrobe delays.
              </p>
              <p>
                From everyday linens to bespoke evening wear, our precision care combines eco-certified detergents, gentle low-heat ozone drying, and hand-finished steam pressing to protect fibers and restore crispness.
              </p>
            </div>

            {/* Checklist items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "12-Hour Express Turnaround",
                "Hotel Concierge Coordination",
                "Sealed & Anti-Crease Packaging",
                "Hypoallergenic Eco Formulations",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-sm font-medium text-gray-800">
                  <CheckCircle2 className="w-4 h-4 text-[#00C4D4] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 border border-gray-200/80 hover:border-[#00C4D4] shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gray-50 text-gray-800 group-hover:bg-[#00C4D4] group-hover:text-white flex items-center justify-center mb-5 transition-colors border border-gray-100">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">
                  {feat.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Google Maps Location Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Location Details Column */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <h3 className="font-extrabold text-2xl sm:text-3xl text-gray-900 tracking-tight">
                  Our Outlet & Service Hub
                </h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                  Conveniently situated in Pantai Indah Kapuk (PIK). Drop off your items or coordinate express hotel lobby pickup.
                </p>
              </div>

              <div className="space-y-3.5 text-sm text-gray-600">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#E0F7FA] text-[#00C4D4] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-gray-900 font-bold">Laverie Premium Laundry PIK</strong>
                    <span>Pantai Indah Kapuk, Jakarta Utara, DKI Jakarta</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#E0F7FA] text-[#00C4D4] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-gray-900 font-bold">Opening Hours</strong>
                    <span>07:30 AM – 21:00 PM Daily (Express cutoff 10:00 AM)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#E0F7FA] text-[#00C4D4] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-gray-900 font-bold">Concierge Dispatch</strong>
                    <span>Available for hotels, villas, and residences around our outlet</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href="https://maps.app.goo.gl/aAEsvnwHZAUsbqmq9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#00C4D4] hover:bg-[#00B0BF] text-white font-semibold text-sm transition-all duration-200 shadow-sm hover:shadow hover:-translate-y-0.5"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href="https://wa.me/?text=Hello%20Laverie%20Laundry%20PIK!%20I%20would%20like%20to%20request%20a%20pickup%20at%20my%20location."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50 text-gray-700 font-semibold text-sm transition-all duration-200"
                >
                  <span>Request Pickup</span>
                </a>
              </div>
            </div>

            {/* Interactive Google Map Embed */}
            <div className="lg:col-span-7">
              <div className="relative w-full h-[320px] sm:h-[380px] rounded-2xl overflow-hidden border border-gray-200 shadow-inner bg-gray-100">
                <iframe
                  title="Laverie Premium Laundry PIK Google Maps"
                  src="https://maps.google.com/maps?q=Laverie%20Premium%20Laundry%20PIK&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
