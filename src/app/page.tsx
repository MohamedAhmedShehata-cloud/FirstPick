import React from "react";
import AnnouncementBar from "@/components/announcement-bar";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import WatchCatalog from "@/components/watch-catalog";
import FeaturesSection from "@/components/features-section";
import Footer from "@/components/footer";
import FloatingWhatsApp from "@/components/floating-whatsapp";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-navy">
      {/* Top Free Inspection Notice */}
      <AnnouncementBar />

      {/* Main Luxury Header */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* Catalog Showcase (15 Models) */}
        <WatchCatalog />

        {/* Trust & Guarantee Section */}
        <FeaturesSection />
      </main>

      {/* Luxury Footer */}
      <Footer />

      {/* Floating Instant WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
