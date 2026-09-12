import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProcessSteps from "@/components/ProcessSteps";
import About from "@/components/About";
import CoreServices from "@/components/CoreServices";
import StatsDark from "@/components/StatsDark";
import Packages from "@/components/Packages";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#03070C] text-gray-900 dark:text-[#F8FAFC] transition-colors duration-300">
      {/* Top Sticky Navigation */}
      <Navbar />

      {/* Main One-Page Content Sections */}
      <main className="flex-1">
        <Hero />
        <ProcessSteps />
        <About />
        <CoreServices />
        <StatsDark />
        <Packages />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
