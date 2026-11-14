import React from "react";
import Link from "next/link";
import { getWhatsAppGeneralUrl } from "@/config/site";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cream via-cream/60 to-white pt-12 pb-20 sm:pt-20 sm:pb-28 border-b border-cream-dark/60">
      {/* Subtle decorative radial background blur */}
      <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-warm-gray/10 to-navy-light/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
      

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold text-navy tracking-tight leading-[1.25] sm:leading-[1.2] mb-6 animate-fade-up">
            الفخامة التي تليق بمعصمك،
            <span className="block text-navy-light mt-1 font-semibold">
              بقيمة وسعر استثنائي.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-warm-gray max-w-2xl font-normal leading-relaxed mb-10 animate-fade-up animate-delay-100">
            مجموعة منتقاة بعناية من أرقى الساعات الكلاسيكية والرياضية تجمع بين الحرفية العالية والتصميم الفاخر، مع ميزة{" "}
            <span className="text-navy font-bold underline decoration-warm-gray/40 underline-offset-4">
              المعاينة والفحص الكامل قبل الدفع، والتوصيل خلال أسبوع.
            </span>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto animate-fade-up animate-delay-200">
            <Link
              href="#catalog"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-navy text-cream font-bold text-base hover:bg-navy-dark active:scale-[0.98] transition-all shadow-md hover:shadow-lg"
            >
              <span>تصفح الكولكشن (١٥ موديل)</span>
              <svg
                className="w-4 h-4 rotate-180"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>

            <a
              href={getWhatsAppGeneralUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white text-navy font-bold text-base border-2 border-navy hover:bg-cream active:scale-[0.98] transition-all"
            >
              {/* WhatsApp Icon */}
              <svg className="w-5 h-5 fill-emerald-600" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.599 2.668-.699a5.755 5.755 0 002.792.719c3.18 0 5.767-2.587 5.768-5.766 0-3.181-2.588-5.766-5.768-5.766zm3.364 8.167c-.144.405-.838.775-1.168.825-.329.05-.694.062-2.128-.501-1.833-.72-2.997-2.583-3.088-2.705-.091-.122-.736-.979-.736-1.868 0-.889.467-1.326.633-1.506.166-.18.362-.225.483-.225.12 0 .241.002.347.006.111.005.26-.042.406.31.15.362.513 1.25.558 1.341.045.091.076.197.015.318-.061.121-.091.197-.181.303-.091.106-.191.237-.272.318-.091.091-.186.19-.08.372.106.182.47 1.246 1.009 1.725.694.618 1.28.81 1.461.901.181.091.287.076.393-.046.106-.121.453-.529.574-.71.121-.181.242-.151.408-.091.166.06 1.056.498 1.237.589.181.091.302.136.347.212.045.076.045.438-.099.843z" />
              </svg>
              <span>طلب مباشر عبر الواتساب</span>
            </a>
          </div>

          {/* Luxury Highlights Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-14 w-full pt-10 border-t border-cream-dark">
            <div className="flex flex-col items-center text-center p-3">
              <span className="text-xl sm:text-2xl font-black text-navy mb-1">
                فحص مجاني
              </span>
              <span className="text-xs sm:text-sm font-semibold text-warm-gray">
                معاينة كاملة قبل الدفع
              </span>
            </div>

            <div className="flex flex-col items-center text-center p-3">
              <span className="text-xl sm:text-2xl font-black text-navy mb-1">
                خامات فاخرة
              </span>
              <span className="text-xs sm:text-sm font-semibold text-warm-gray">
                ستانلس ستيل وزجاج مقوى
              </span>
            </div>

            <div className="flex flex-col items-center text-center p-3">
              <span className="text-xl sm:text-2xl font-black text-navy mb-1">
                خلال أسبوع
              </span>
              <span className="text-xs sm:text-sm font-semibold text-warm-gray">
                توصيل لكافة المحافظات
              </span>
            </div>

            <div className="flex flex-col items-center text-center p-3">
              <span className="text-xl sm:text-2xl font-black text-navy mb-1">
                أسعار مباشرة
              </span>
              <span className="text-xs sm:text-sm font-semibold text-warm-gray">
                قيمة استثنائية بدون وسيط
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
