"use client";

import React from "react";
import { Watch, getWhatsAppOrderUrl } from "@/data/watches";
import WatchImage from "@/components/watch-image";

interface WatchCardProps {
  watch: Watch;
  onSelect: (watch: Watch) => void;
}

export function WatchCard({ watch, onSelect }: WatchCardProps) {
  const whatsappUrl = getWhatsAppOrderUrl(watch);
  const savings = watch.originalPrice - watch.price;

  return (
    <article className="group relative flex flex-col bg-white rounded-2xl overflow-hidden border border-cream-dark/80 hover:border-warm-gray/40 transition-all duration-300 hover:shadow-xl">
      {/* 4:5 Image Container (Perfect for hand/wrist shots) */}
      <div
        className="relative aspect-[4/5] bg-cream cursor-pointer overflow-hidden"
        onClick={() => onSelect(watch)}
      >
        <WatchImage
          src={watch.image}
          alt={watch.name}
          code={watch.code}
          dialColor={watch.dialColor}
        />

        {/* Top Badges */}
        <div className="absolute top-3 right-3 flex flex-col items-end gap-1.5 z-10 pointer-events-none">
          {watch.badge && (
            <span className="bg-navy text-cream text-[11px] font-bold px-3 py-1 rounded-full shadow-sm tracking-wide">
              {watch.badge}
            </span>
          )}
          <span className="bg-white/95 text-navy text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-sm border border-gray-light">
            تصوير واقعي على الإيد
          </span>
        </div>

        {/* Hover Overlay: "نظرة سريعة" */}
        <div className="absolute inset-0 bg-navy/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
          <span className="bg-white/95 text-navy font-bold text-xs px-4 py-2 rounded-full shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            اضغط لتفاصيل الساعة والفحص
          </span>
        </div>

        {/* Code Tag Bottom Left */}
        <div className="absolute bottom-3 left-3 z-10 pointer-events-none">
          <span className="bg-navy-dark/80 backdrop-blur-sm text-cream font-mono text-[10px] font-semibold px-2 py-0.5 rounded">
            {watch.code}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between bg-white">
        <div>
          {/* Dial color & category */}
          <div className="flex items-center justify-between text-[11px] text-warm-gray mb-1.5 font-medium">
            <span>{watch.dialColor}</span>
            <span>
              {watch.strapType === "steel"
                ? "سوار ستيل"
                : watch.strapType === "leather"
                ? "سوار جلد طبيعي"
                : "سوار رابر رياضي"}
            </span>
          </div>

          {/* Model Name */}
          <h3
            onClick={() => onSelect(watch)}
            className="text-base sm:text-lg font-bold text-navy hover:text-navy-light cursor-pointer transition-colors mb-2 line-clamp-1"
          >
            {watch.name}
          </h3>

          {/* Pricing */}
          <div className="flex items-baseline gap-2 mb-3">
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

        {/* Action Buttons */}
        <div className="flex flex-col gap-2 pt-2 border-t border-cream-dark">
          {/* WhatsApp Direct Order Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-navy text-cream hover:bg-navy-dark font-bold text-xs sm:text-sm active:scale-[0.98] transition-all shadow-sm"
          >
            {/* WhatsApp Icon */}
            <svg className="w-4 h-4 fill-emerald-400" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.599 2.668-.699a5.755 5.755 0 002.792.719c3.18 0 5.767-2.587 5.768-5.766 0-3.181-2.588-5.766-5.768-5.766zm3.364 8.167c-.144.405-.838.775-1.168.825-.329.05-.694.062-2.128-.501-1.833-.72-2.997-2.583-3.088-2.705-.091-.122-.736-.979-.736-1.868 0-.889.467-1.326.633-1.506.166-.18.362-.225.483-.225.12 0 .241.002.347.006.111.005.26-.042.406.31.15.362.513 1.25.558 1.341.045.091.076.197.015.318-.061.121-.091.197-.181.303-.091.106-.191.237-.272.318-.091.091-.186.19-.08.372.106.182.47 1.246 1.009 1.725.694.618 1.28.81 1.461.901.181.091.287.076.393-.046.106-.121.453-.529.574-.71.121-.181.242-.151.408-.091.166.06 1.056.498 1.237.589.181.091.302.136.347.212.045.076.045.438-.099.843z" />
            </svg>
            <span>طلب واتساب فوراً</span>
          </a>

          {/* Quick Details Trigger */}
          <button
            type="button"
            onClick={() => onSelect(watch)}
            className="w-full py-2 px-3 rounded-lg text-warm-gray hover:text-navy hover:bg-cream/60 text-xs font-semibold transition-colors flex items-center justify-center gap-1"
          >
            <span>المواصفات والفحص</span>
            <svg
              className="w-3.5 h-3.5 rotate-180"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}

export default WatchCard;

