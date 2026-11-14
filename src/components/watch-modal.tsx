"use client";

import React, { useEffect } from "react";
import { Watch, getWhatsAppOrderUrl } from "@/data/watches";
import WatchImage from "@/components/watch-image";

interface WatchModalProps {
  watch: Watch | null;
  onClose: () => void;
}

export function WatchModal({ watch, onClose }: WatchModalProps) {
  // Prevent background scroll when modal is open
  useEffect(() => {
    if (watch) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [watch]);

  if (!watch) return null;

  const savings = watch.originalPrice - watch.price;
  const whatsappUrl = getWhatsAppOrderUrl(watch);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-navy-dark/75 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-cream-dark my-8 animate-fade-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-4 left-4 z-20 w-10 h-10 rounded-full bg-cream/90 hover:bg-cream-dark text-navy flex items-center justify-center transition-colors shadow-sm"
          aria-label="إغلاق النافذة"
        >
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Watch Image Aspect Ratio */}
          <div className="relative aspect-[4/5] bg-cream group overflow-hidden">
            <WatchImage
              src={watch.image}
              alt={watch.name}
              code={watch.code}
              dialColor={watch.dialColor}
              priority
            />

            {/* Badges */}
            <div className="absolute top-4 right-4 flex flex-col gap-2 z-10 pointer-events-none">
              {watch.badge && (
                <span className="bg-navy text-cream text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                  {watch.badge}
                </span>
              )}
              <span className="bg-white/95 text-navy text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm border border-gray-light">
                تصوير واقعي على الإيد
              </span>
            </div>
          </div>

          {/* Details & Specs */}
          <div className="p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-mono font-bold text-warm-gray tracking-wider">
                  كود الموديل: {watch.code}
                </span>
                <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  متوفر جاهز للشحن
                </span>
              </div>

              <h2 className="text-2xl font-extrabold text-navy mb-3">
                {watch.name}
              </h2>

              <p className="text-sm text-warm-gray leading-relaxed mb-6">
                {watch.description}
              </p>

              {/* Price Row */}
              <div className="bg-cream/60 rounded-xl p-4 border border-cream-dark mb-6">
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-3xl font-extrabold text-navy">
                    {watch.price.toLocaleString("ar-EG")} ج.م
                  </span>
                  <span className="text-base text-warm-gray/70 line-through">
                    {watch.originalPrice.toLocaleString("ar-EG")} ج.م
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-danger">
                  <span>وفر {savings.toLocaleString("ar-EG")} ج.م لفترة محدودة</span>
                  <span>•</span>
                  <span className="text-navy font-bold">الدفع عند الاستلام</span>
                </div>
              </div>

              {/* Specs List */}
              <div className="space-y-2 mb-6 text-xs text-navy/90">
                <div className="flex justify-between py-1.5 border-b border-gray-light">
                  <span className="text-warm-gray font-medium">لون المينا:</span>
                  <span className="font-semibold">{watch.dialColor}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-gray-light">
                  <span className="text-warm-gray font-medium">حجم الهيكل (المينا):</span>
                  <span className="font-semibold">{watch.specs.caseSize}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-gray-light">
                  <span className="text-warm-gray font-medium">مادة الهيكل:</span>
                  <span className="font-semibold">{watch.specs.caseMaterial}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-gray-light">
                  <span className="text-warm-gray font-medium">نوع الزجاج:</span>
                  <span className="font-semibold">{watch.specs.glass}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-gray-light">
                  <span className="text-warm-gray font-medium">السوار والقفل:</span>
                  <span className="font-semibold">{watch.specs.strap}</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-warm-gray font-medium">مقاومة الماء:</span>
                  <span className="font-semibold">{watch.specs.waterResistance}</span>
                </div>
              </div>

              {/* Inspection Guarantee Callout */}
              <div className="flex items-center gap-2 p-3 rounded-lg bg-emerald-50/70 border border-emerald-200/80 text-xs text-emerald-900 mb-6">
                <span className="text-base">✓</span>
                <span className="font-medium">
                  <strong>حق الفحص والمعاينة:</strong> تفتح الشحنة مع المندوب وتفحص ساعتك وتجربها قبل دفع أي مليم.
                </span>
              </div>
            </div>

            {/* Direct WhatsApp Action Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-3 py-4 rounded-xl bg-navy text-cream font-bold text-base hover:bg-navy-dark active:scale-[0.99] transition-all shadow-md hover:shadow-lg"
            >
              {/* WhatsApp Icon */}
              <svg className="w-5 h-5 fill-emerald-400" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.599 2.668-.699a5.755 5.755 0 002.792.719c3.18 0 5.767-2.587 5.768-5.766 0-3.181-2.588-5.766-5.768-5.766zm3.364 8.167c-.144.405-.838.775-1.168.825-.329.05-.694.062-2.128-.501-1.833-.72-2.997-2.583-3.088-2.705-.091-.122-.736-.979-.736-1.868 0-.889.467-1.326.633-1.506.166-.18.362-.225.483-.225.12 0 .241.002.347.006.111.005.26-.042.406.31.15.362.513 1.25.558 1.341.045.091.076.197.015.318-.061.121-.091.197-.181.303-.091.106-.191.237-.272.318-.091.091-.186.19-.08.372.106.182.47 1.246 1.009 1.725.694.618 1.28.81 1.461.901.181.091.287.076.393-.046.106-.121.453-.529.574-.71.121-.181.242-.151.408-.091.166.06 1.056.498 1.237.589.181.091.302.136.347.212.045.076.045.438-.099.843z" />
              </svg>
              <span>طلب هذه الساعة عبر واتساب فوراً</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WatchModal;

