"use client";

import React from "react";
import Link from "next/link";
import { Watch, getWhatsAppOrderUrl } from "@/data/watches";
import WatchImage from "./watch-image";

interface WatchCardProps {
  watch: Watch;
}

export function WatchCard({ watch }: WatchCardProps) {
  const primaryColor = watch.colors[0];
  const primaryImage = primaryColor?.images[0] || "/watches/rolex-oyster-black.png";
  const savings = watch.originalPrice - watch.price;
  const whatsappUrl = getWhatsAppOrderUrl(watch, primaryColor?.name);

  return (
    <article className="group relative flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
      {/* 4:5 Image Container (Optimized via Next.js Image in WatchImage) */}
      <Link
        href={`/watches/${watch.id}`}
        className="relative aspect-[4/5] bg-neutral-950 cursor-pointer overflow-hidden block"
        aria-label={`عرض تفاصيل ${watch.name} من ${watch.brand}`}
      >
        <WatchImage
          src={primaryImage}
          alt={`${watch.name} - ${watch.brand}`}
          code={watch.code}
        />

        {/* Top Badges */}
        <div className="absolute top-3 right-3 flex flex-col items-end gap-1.5 z-10 pointer-events-none">
          {/* Availability Badge Only */}
          {watch.isAvailable ? (
            <span className="bg-emerald-600/95 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-sm">
              متوفر
            </span>
          ) : (
            <span className="bg-navy-dark/95 backdrop-blur-sm text-cream text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-sm">
              نفدت الكمية
            </span>
          )}
        </div>

        {/* Code Tag Bottom Left */}
        <div className="absolute bottom-3 left-3 z-10 pointer-events-none">
          <span className="bg-navy-dark/80 backdrop-blur-sm text-cream font-mono text-[10px] font-semibold px-2 py-0.5 rounded">
            {watch.code}
          </span>
        </div>

        {/* Hover Overlay: "عرض التفاصيل الكاملة" */}
        <div className="absolute inset-0 bg-navy/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
          <span className="bg-white/95 text-navy font-bold text-xs px-4 py-2 rounded-full shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            عرض صفحة ومواصفات الساعة
          </span>
        </div>
      </Link>

      {/* Content: Brand, Name, Price, and Original Price */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between bg-white text-right">
        <div>
          {/* Brand Name */}
          <div className="mb-1">
            <span className="text-xs font-extrabold text-navy/70 tracking-wide uppercase">
              {watch.brand}
            </span>
          </div>

          {/* Watch Name */}
          <Link
            href={`/watches/${watch.id}`}
            className="block text-base sm:text-lg font-bold text-navy hover:text-navy-light transition-colors mb-3 line-clamp-1"
          >
            {watch.name}
          </Link>

          {/* Pricing: Current Price & Original Price Before Discount */}
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-xl font-extrabold text-navy">
              {watch.price.toLocaleString("ar-EG")} ج.م
            </span>
            <span className="text-xs text-warm-gray line-through">
              {watch.originalPrice.toLocaleString("ar-EG")} ج.م
            </span>
            <span className="text-[10px] font-bold text-danger bg-danger/10 px-1.5 py-0.5 rounded mr-auto">
              وفر {savings.toLocaleString("ar-EG")} ج.م
            </span>
          </div>
        </div>

        {/* Action Buttons: Minimal and Elegant */}
        <div className="flex flex-col gap-2 pt-3">
          {/* Details Page Link */}
          <Link
            href={`/watches/${watch.id}`}
            className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-navy text-cream hover:bg-navy-dark font-bold text-xs sm:text-sm active:scale-[0.98] transition-all shadow-sm"
          >
            <span>تفاصيل ومواصفات الساعة</span>
            <svg
              className="w-3.5 h-3.5 rotate-180"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>

          {/* Quick WhatsApp Order Button */}
          {watch.isAvailable ? (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 px-3 rounded-lg text-emerald-700 bg-emerald-50 hover:bg-emerald-100/80 text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5 fill-emerald-600" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.599 2.668-.699a5.755 5.755 0 002.792.719c3.18 0 5.767-2.587 5.768-5.766 0-3.181-2.588-5.766-5.768-5.766zm3.364 8.167c-.144.405-.838.775-1.168.825-.329.05-.694.062-2.128-.501-1.833-.72-2.997-2.583-3.088-2.705-.091-.122-.736-.979-.736-1.868 0-.889.467-1.326.633-1.506.166-.18.362-.225.483-.225.12 0 .241.002.347.006.111.005.26-.042.406.31.15.362.513 1.25.558 1.341.045.091.076.197.015.318-.061.121-.091.197-.181.303-.091.106-.191.237-.272.318-.091.091-.186.19-.08.372.106.182.47 1.246 1.009 1.725.694.618 1.28.81 1.461.901.181.091.287.076.393-.046.106-.121.453-.529.574-.71.121-.181.242-.151.408-.091.166.06 1.056.498 1.237.589.181.091.302.136.347.212.045.076.045.438-.099.843z" />
              </svg>
              <span>طلب واتساب فوري</span>
            </a>
          ) : (
            <span className="w-full py-2 px-3 rounded-lg text-warm-gray bg-cream/70 text-xs font-semibold text-center">
              نفدت الكمية حالياً
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export default WatchCard;
