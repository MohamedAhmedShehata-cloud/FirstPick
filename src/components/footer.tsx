import React from "react";
import Link from "next/link";
import BrandLogo from "@/components/brand-logo";
import { siteConfig } from "@/config/site";

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
              وجهتك الأولى للساعات الفاخرة في السوق المصري، وأسعار استيراد مباشرة بدون وسيط مع ميزة المعاينة والفحص الشامل قبل الدفع، والتوصيل يتم خلال أسبوع لكافة المحافظات.
            </p>

            {/* Social Media Icons (Consistent clean SVG library) */}
            <div className="flex items-center gap-3">
              {/* Instagram */}
              <a
                href={siteConfig.socialUrls.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-navy-light/80 hover:bg-navy flex items-center justify-center text-cream hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* TikTok */}
              <a
                href={siteConfig.socialUrls.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-navy-light/80 hover:bg-navy flex items-center justify-center text-cream hover:text-white transition-colors"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.27 1.76-.23 1.03.11 2.16.85 2.87.79.79 1.99 1.05 3.08.77 1.1-.25 2-.98 2.37-2.02.19-.53.28-1.09.28-1.65.03-4.52.02-9.04.02-13.56z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href={siteConfig.socialUrls.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-navy-light/80 hover:bg-navy flex items-center justify-center text-cream hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5 fill-emerald-400" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.599 2.668-.699a5.755 5.755 0 002.792.719c3.18 0 5.767-2.587 5.768-5.766 0-3.181-2.588-5.766-5.768-5.766zm3.364 8.167c-.144.405-.838.775-1.168.825-.329.05-.694.062-2.128-.501-1.833-.72-2.997-2.583-3.088-2.705-.091-.122-.736-.979-.736-1.868 0-.889.467-1.326.633-1.506.166-.18.362-.225.483-.225.12 0 .241.002.347.006.111.005.26-.042.406.31.15.362.513 1.25.558 1.341.045.091.076.197.015.318-.061.121-.091.197-.181.303-.091.106-.191.237-.272.318-.091.091-.186.19-.08.372.106.182.47 1.246 1.009 1.725.694.618 1.28.81 1.461.901.181.091.287.076.393-.046.106-.121.453-.529.574-.71.121-.181.242-.151.408-.091.166.06 1.056.498 1.237.589.181.091.302.136.347.212.045.076.045.438-.099.843z" />
                </svg>
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
                <Link href="/#catalog" className="hover:text-white transition-colors">
                  معرض الساعات (١٥ موديل)
                </Link>
              </li>
              <li>
                <Link href="/#features" className="hover:text-white transition-colors">
                  لماذا First Pick؟
                </Link>
              </li>
              <li>
                <Link href="/#guarantee" className="hover:text-white transition-colors">
                  سياسة الفحص والمعاينة
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Support & Contact - ONLY PLACE PHONE NUMBER IS DISPLAYED */}
          <div className="text-right">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              خدمة العملاء والطلبات
            </h4>
            <p className="text-xs text-cream/70 mb-3 leading-relaxed">
              متاحون للرد على استفساراتكم وتأكيد طلبات الشحن يومياً.
            </p>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex flex-col items-start text-right">
                {/* Proper LTR digits with bdi inside RTL link aligned right */}
                <a
                  href={siteConfig.socialUrls.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white hover:text-emerald-400 transition-colors py-1 group"
                >
                  <svg className="w-4 h-4 fill-emerald-400 shrink-0" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.599 2.668-.699a5.755 5.755 0 002.792.719c3.18 0 5.767-2.587 5.768-5.766 0-3.181-2.588-5.766-5.768-5.766zm3.364 8.167c-.144.405-.838.775-1.168.825-.329.05-.694.062-2.128-.501-1.833-.72-2.997-2.583-3.088-2.705-.091-.122-.736-.979-.736-1.868 0-.889.467-1.326.633-1.506.166-.18.362-.225.483-.225.12 0 .241.002.347.006.111.005.26-.042.406.31.15.362.513 1.25.558 1.341.045.091.076.197.015.318-.061.121-.091.197-.181.303-.091.106-.191.237-.272.318-.091.091-.186.19-.08.372.106.182.47 1.246 1.009 1.725.694.618 1.28.81 1.461.901.181.091.287.076.393-.046.106-.121.453-.529.574-.71.121-.181.242-.151.408-.091.166.06 1.056.498 1.237.589.181.091.302.136.347.212.045.076.045.438-.099.843z" />
                  </svg>
                  <bdi dir="ltr" className="font-mono text-sm tracking-wider font-bold">
                    {siteConfig.phoneDisplay}
                  </bdi>
                </a>
              </div>
              <div className="text-cream/70 text-xs space-y-1">
                <span className="block">الدفع نقداً عند الاستلام بعد المعاينة (COD)</span>
                <span className="block text-emerald-400 font-medium">التوصيل يتم خلال أسبوع لكافة محافظات مصر</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Rights */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-cream/50 gap-4">
          <p>© 2026 First Pick. جميع الحقوق محفوظة.</p>
          <p className="text-cream/40">ساعات فاخرة بتصوير طبيعي وموثوق في مصر • التوصيل خلال أسبوع</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
