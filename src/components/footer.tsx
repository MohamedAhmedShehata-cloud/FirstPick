import React from "react";
import BrandLogo from "@/components/brand-logo";
import {
  BRAND_PHONE_DISPLAY,
  BRAND_INSTAGRAM,
  BRAND_TIKTOK,
  getWhatsAppGeneralUrl,
} from "@/data/watches";

export function Footer() {
  return (
    <footer className="bg-navy-dark text-cream border-t border-navy-light/40 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-navy-light/40">
          {/* Brand Info */}
          <div className="md:col-span-2 flex flex-col items-start">
            <div className="mb-4">
              <BrandLogo variant="cream" width={180} height={40} />
            </div>
            <p className="text-sm text-cream/70 leading-relaxed max-w-sm mb-6">
              وجهتك الأولى للساعات الفاخرة في السوق المصري بتصوير حقيقي على الطبيعة ١٠٠٪، وأسعار استيراد مباشرة بدون وسيط مع ميزة المعاينة والفحص الشامل قبل الدفع.
            </p>

            {/* Social Handles from Brand PDF */}
            <div className="flex items-center gap-3">
              <a
                href={`https://instagram.com/${BRAND_INSTAGRAM}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-navy-light flex items-center justify-center text-cream hover:text-white hover:bg-navy transition-colors text-xs font-bold"
                aria-label="Instagram"
              >
                إنستجرام
              </a>
              <a
                href={`https://tiktok.com/@${BRAND_TIKTOK}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-navy-light flex items-center justify-center text-cream hover:text-white hover:bg-navy transition-colors text-xs font-bold"
                aria-label="TikTok"
              >
                تيك توك
              </a>
              <a
                href={getWhatsAppGeneralUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-navy-light flex items-center justify-center text-cream hover:text-white hover:bg-navy transition-colors text-xs font-bold"
                aria-label="WhatsApp"
              >
                واتساب
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              روابط سريعة
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-cream/70">
              <li>
                <a href="#catalog" className="hover:text-white transition-colors">
                  معرض الساعات (١٥ موديل)
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  لماذا First Pick؟
                </a>
              </li>
              <li>
                <a href="#guarantee" className="hover:text-white transition-colors">
                  سياسة الفحص والمعاينة
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Support & Contact */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              خدمة العملاء والطلبات
            </h4>
            <p className="text-xs text-cream/70 mb-3">
              متاحون للرد على استفساراتكم وتأكيد طلبات الشحن يومياً.
            </p>
            <div className="space-y-2 text-xs sm:text-sm">
              <a
                href={getWhatsAppGeneralUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white font-mono font-bold hover:text-emerald-400 transition-colors"
                dir="ltr"
              >
                <span>{BRAND_PHONE_DISPLAY}</span>
              </a>
              <span className="block text-cream/60 text-xs">
                الدفع نقداً عند الاستلام بعد المعاينة (COD)
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Rights */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-cream/50 gap-4">
          <p>© 2026 First Pick. جميع الحقوق محفوظة.</p>
          <p className="text-cream/40">ساعات فاخرة بتصوير طبيعي وموثوق في مصر.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

