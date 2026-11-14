import React from "react";

export function AnnouncementBar() {
  return (
    <aside
      aria-label="إعلان وتنبيهات المتجر"
      className="bg-navy-dark text-cream border-b border-navy-light/60 text-xs sm:text-sm py-2.5 px-4 font-medium transition-colors"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-semibold text-white">معاينة وفحص مجاني قبل الدفع:</span>
          <span className="text-cream/90">
            افتح الشحنة وعاين ساعتك وتأكد منها مع المندوب قبل دفع أي مليم.
          </span>
        </div>

        <div className="hidden md:flex items-center gap-4 text-cream-dark text-xs">
          <span>شحن سريع لكافة محافظات مصر</span>
          <span className="opacity-40">•</span>
          <span>تصوير واقعي على الإيد ١٠٠٪</span>
        </div>
      </div>
    </aside>
  );
}

export default AnnouncementBar;

