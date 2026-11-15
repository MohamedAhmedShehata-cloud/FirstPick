"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Watch, getWhatsAppOrderUrl } from "@/data/watches";
import WatchCard from "./watch-card";
import WatchImage from "./watch-image";

interface WatchDetailsViewProps {
  watch: Watch;
  relatedWatches: Watch[];
}

export function WatchDetailsView({ watch, relatedWatches }: WatchDetailsViewProps) {
  // State for selected color variant
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const activeColor = watch.colors[selectedColorIndex] || watch.colors[0];

  // State for active image within the selected color's images
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const images = activeColor?.images || [];
  const currentImage = images[activeImageIndex] || images[0] || "/watches/rolex-oyster-black.png";

  // Handle color change: update color and reset image index
  const handleColorChange = (index: number) => {
    setSelectedColorIndex(index);
    setActiveImageIndex(0);
  };

  const handleNextImage = () => {
    if (images.length <= 1) return;
    setActiveImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevImage = () => {
    if (images.length <= 1) return;
    setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const savings = watch.originalPrice - watch.price;
  const discountPercent = Math.round(((watch.originalPrice - watch.price) / watch.originalPrice) * 100);
  const whatsappUrl = getWhatsAppOrderUrl(watch, activeColor?.name);

  return (
    <div className="bg-white">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="bg-cream/50 border-b border-cream-dark py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-warm-gray font-medium">
          <Link href="/" className="hover:text-navy transition-colors">
            الرئيسية
          </Link>
          <span>/</span>
          <Link href="/#catalog" className="hover:text-navy transition-colors">
            معرض الساعات
          </Link>
          <span>/</span>
          <span className="text-navy font-bold truncate max-w-[200px] sm:max-w-none">
            {watch.name}
          </span>
        </div>
      </nav>

      {/* Main Product Showcase */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Column 1: Interactive Image Gallery with Carousel */}
          <div className="flex flex-col gap-4">
            {/* Main Stage Image (4:5 Aspect Ratio - No borders) */}
            <div className="relative aspect-[4/5] w-full bg-neutral-950 rounded-3xl overflow-hidden shadow-lg group">
              <WatchImage
                src={currentImage}
                alt={`${watch.name} - ${activeColor?.name || ""}`}
                priority
              />

              {/* Prev / Next Carousel Controls (if multiple images exist for this color) */}
              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={handlePrevImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-navy flex items-center justify-center shadow-md transition-all active:scale-95 focus:outline-none"
                    aria-label="الصورة السابقة"
                  >
                    <svg
                      className="w-5 h-5 rotate-180"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                  </button>

                  <button
                    type="button"
                    onClick={handleNextImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-navy flex items-center justify-center shadow-md transition-all active:scale-95 focus:outline-none"
                    aria-label="الصورة التالية"
                  >
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                  </button>

                  {/* Image Counter Badge */}
                  <div className="absolute bottom-4 left-4 z-10 bg-navy-dark/80 backdrop-blur-sm text-cream font-mono text-xs px-3 py-1 rounded-full">
                    {activeImageIndex + 1} / {images.length}
                  </div>
                </>
              )}

              {/* Model Code Tag */}
              <div className="absolute top-4 right-4 z-10 bg-navy text-cream font-mono text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                {watch.code}
              </div>
            </div>

            {/* Thumbnail Strip (No dark/black borders) */}
            {images.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 h-24 rounded-xl overflow-hidden shadow-sm transition-all flex-shrink-0 bg-neutral-950 ${
                      activeImageIndex === idx
                        ? "ring-2 ring-navy/30 scale-105"
                        : "opacity-70 hover:opacity-100"
                    }`}
                    aria-label={`عرض زاوية ${idx + 1}`}
                  >
                    <Image
                      src={img}
                      alt={`زاوية ${idx + 1}`}
                      fill
                      sizes="80px"
                      className="object-cover object-center"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Column 2: Product Information, Color Selection & Purchase CTA */}
          <div className="flex flex-col">
            {/* Availability Header (Without style/vintage badge) */}
            <div className="flex items-center gap-3 mb-3">
              {watch.isAvailable ? (
                <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold px-3 py-1 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  متوفر للشحن الفوري • التوصيل خلال أسبوع
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 bg-navy-dark text-cream text-xs font-bold px-3 py-1 rounded-full">
                  نفدت الكمية مؤقتاً
                </span>
              )}
            </div>

            {/* Brand Name */}
            <div className="mb-1">
              <span className="text-sm font-extrabold text-navy/70 uppercase tracking-wider">
                {watch.brand}
              </span>
            </div>

            {/* Watch Title */}
            <h1 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight mb-2">
              {watch.name}
            </h1>

            {/* Subtitle / Code */}
            <p className="text-xs font-mono text-warm-gray mb-6">
              كود الموديل المعتمد: <strong className="text-navy">{watch.code}</strong>
            </p>

            {/* Price Row */}
            <div className="bg-cream/50 rounded-2xl p-5 border border-cream-dark mb-8">
              <div className="flex items-baseline gap-4 mb-2">
                <span className="text-3xl sm:text-4xl font-black text-navy">
                  {watch.price.toLocaleString("ar-EG")} ج.م
                </span>
                <span className="text-lg text-warm-gray/70 line-through">
                  {watch.originalPrice.toLocaleString("ar-EG")} ج.م
                </span>
                <span className="text-xs font-bold text-danger bg-danger/10 px-2.5 py-1 rounded-md mr-auto">
                  وفر {savings.toLocaleString("ar-EG")} ج.م (خصم {discountPercent}%)
                </span>
              </div>
              <p className="text-xs text-warm-gray font-medium">
                السعر شامل الشحن مع إمكانية المعاينة والفحص الكامل قبل الدفع
              </p>
            </div>

            {/* Color Variant Selector (Requirement 6) */}
            <div className="mb-8 pb-8 border-b border-cream-dark">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-bold text-navy">
                  اختيار اللون:{" "}
                  <span className="text-navy-light font-extrabold mr-1">
                    {activeColor?.name}
                  </span>
                </span>
                <span className="text-xs text-warm-gray">
                  ({watch.colors.length} ألوان متاحة)
                </span>
              </div>

              {/* Color Swatch Buttons */}
              <div className="flex items-center gap-3 flex-wrap">
                {watch.colors.map((color, idx) => {
                  const isSelected = selectedColorIndex === idx;
                  return (
                    <button
                      key={color.id}
                      type="button"
                      onClick={() => handleColorChange(idx)}
                      className={`group flex items-center gap-2.5 px-3.5 py-2 rounded-xl border transition-all ${
                        isSelected
                          ? "border-navy bg-navy/5 shadow-sm ring-1 ring-navy"
                          : "border-cream-dark bg-white hover:border-warm-gray/60"
                      }`}
                      aria-label={`اختيار لون ${color.name}`}
                    >
                      {/* Swatch circle */}
                      <span
                        className={`w-5 h-5 rounded-full border border-black/20 flex items-center justify-center transition-transform ${
                          isSelected ? "scale-110" : ""
                        }`}
                        style={{ backgroundColor: color.colorHex }}
                      >
                        {isSelected && (
                          <svg
                            className="w-3 h-3 text-white drop-shadow-sm"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3.5"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        )}
                      </span>
                      <span
                        className={`text-xs font-bold ${
                          isSelected ? "text-navy" : "text-navy/70 group-hover:text-navy"
                        }`}
                      >
                        {color.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="text-sm font-bold text-navy mb-2">عن الموديل:</h3>
              <p className="text-sm text-warm-gray leading-relaxed">
                {watch.description}
              </p>
            </div>

            {/* WhatsApp Purchase CTA */}
            <div className="space-y-3 mb-8">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full inline-flex items-center justify-center gap-2 sm:gap-3 py-3.5 sm:py-4 px-3 sm:px-6 rounded-2xl font-bold text-xs sm:text-sm md:text-base transition-all shadow-md hover:shadow-lg active:scale-[0.99] whitespace-nowrap overflow-hidden ${
                  watch.isAvailable
                    ? "bg-navy hover:bg-navy-dark text-cream"
                    : "bg-navy-light text-cream/90 hover:bg-navy-dark"
                }`}
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 fill-emerald-400" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.599 2.668-.699a5.755 5.755 0 002.792.719c3.18 0 5.767-2.587 5.768-5.766 0-3.181-2.588-5.766-5.768-5.766zm3.364 8.167c-.144.405-.838.775-1.168.825-.329.05-.694.062-2.128-.501-1.833-.72-2.997-2.583-3.088-2.705-.091-.122-.736-.979-.736-1.868 0-.889.467-1.326.633-1.506.166-.18.362-.225.483-.225.12 0 .241.002.347.006.111.005.26-.042.406.31.15.362.513 1.25.558 1.341.045.091.076.197.015.318-.061.121-.091.197-.181.303-.091.106-.191.237-.272.318-.091.091-.186.19-.08.372.106.182.47 1.246 1.009 1.725.694.618 1.28.81 1.461.901.181.091.287.076.393-.046.106-.121.453-.529.574-.71.121-.181.242-.151.408-.091.166.06 1.056.498 1.237.589.181.091.302.136.347.212.045.076.045.438-.099.843z" />
                </svg>
                <span className="truncate">
                  {watch.isAvailable
                    ? `طلب الموديل باللون (${activeColor?.name}) عبر واتساب`
                    : "حجز مسبق / استفسار عن الموديل عبر واتساب"}
                </span>
              </a>

              <p className="text-center text-xs text-warm-gray font-medium">
                بالضغط على الزر، سيتم توجيهك لشات الواتساب مع رسالة تفصيلية بكود الساعة ولونها المختار.
              </p>
            </div>

            {/* Trust Points */}
            <div className="bg-cream/30 rounded-2xl p-4 border border-cream-dark space-y-2.5 text-xs text-navy/90 mb-8">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">
                  ✓
                </span>
                <span className="font-semibold">
                  معاينة كاملة وفحص مجاني قبل الدفع مع مندوب الشحن.
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">
                  ✓
                </span>
                <span className="font-semibold">
                  التوصيل يتم خلال أسبوع واحد لكافة محافظات ومدن مصر.
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">
                  ✓
                </span>
                <span className="font-semibold">
                  الدفع نقداً عند الاستلام بعد التأكد من مطابقة الساعة للمواصفات.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Watches Section */}
        {relatedWatches.length > 0 && (
          <div className="mt-20 pt-12 border-t border-cream-dark">
            <div className="text-center mb-10">
              <span className="text-xs font-bold text-navy bg-cream px-3 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">
                تشكيلة مقترحة
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy">
                ساعات أخرى قد تناسب ذوقك
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {relatedWatches.map((rw) => (
                <WatchCard key={rw.id} watch={rw} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default WatchDetailsView;

