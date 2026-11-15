"use client";

import React, { useEffect, useState } from "react";
import BrandLogo from "../ui/brand-logo";

export function SplashScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let hasSeen = false;
    try {
      hasSeen = !!sessionStorage.getItem("fp_splash_seen");
    } catch {
      hasSeen = false;
    }

    if (hasSeen) {
      const timer = setTimeout(() => {
        setLoading(false);
        setIsVisible(false);
      }, 0);
      return () => clearTimeout(timer);
    }

    // Smooth luxury progress animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
            try {
              sessionStorage.setItem("fp_splash_seen", "true");
            } catch {
              // ignore storage errors
            }
            // Allow fade transition before removing from DOM
            setTimeout(() => setIsVisible(false), 600);
          }, 250);
          return 100;
        }
        // Organic progress increments
        const jump = Math.floor(Math.random() * 12) + 8;
        return Math.min(prev + jump, 100);
      });
    }, 90);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-navy-dark transition-opacity duration-600 ease-in-out select-none ${
        loading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Subtle radial ambient background glow */}
      <div className="absolute w-[450px] h-[450px] bg-gradient-to-tr from-navy to-navy-light/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center max-w-xs sm:max-w-sm px-6 text-center">
        {/* First Pick Brand Logo */}
        <div className="mb-6 animate-fade-in scale-105 sm:scale-115">
          <BrandLogo variant="cream" width={220} height={48} priority />
        </div>

        {/* Brand Tagline */}
        <p className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-cream/70 uppercase mb-8">
          Luxury Watches • Egypt
        </p>

        {/* Loading Bar Container */}
        <div className="w-56 sm:w-64 h-1 bg-navy-light/80 rounded-full overflow-hidden p-[1px] relative shadow-inner">
          {/* Animated Progress Fill */}
          <div
            className="h-full bg-gradient-to-r from-cream/60 via-amber-200 to-cream rounded-full transition-all duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Percentage Indicator */}
        <div className="flex items-center justify-between w-56 sm:w-64 mt-2 text-[10px] font-mono text-cream/50">
          <span>تحميل التشكيلة</span>
          <span>{progress}%</span>
        </div>
      </div>
    </div>
  );
}

export default SplashScreen;
