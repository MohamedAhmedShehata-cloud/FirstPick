import React from "react";
import { getWhatsAppGeneralUrl } from "@/data/watches";

export function FeaturesSection() {
  const features = [
    {
      title: "معاينة وفحص حر قبل الدفع",
      description:
        "ثقتك أولويتنا. افتح الطرد بنفسك مع مندوب الشحن وافحص الساعة وتفاصيلها على الطبيعة قبل سداد أي مبلغ.",
      badge: "أمان ١٠٠٪",
      icon: (
        <svg
          className="w-6 h-6 text-navy"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      ),
    },
    {
      title: "تصوير واقعي على الإيد",
      description:
        "بدون ريندرات ثلاثية الأبعاد أو تعديلات مضللة. كل ساعة مصورة في بيئة إضاءة حقيقية وعلى الإيد مباشرة لترى الخامة واللمعان الفعلي.",
      badge: "شفافية مطلقة",
      icon: (
        <svg
          className="w-6 h-6 text-navy"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
          <circle cx="12" cy="13" r="4" />
        </svg>
      ),
    },
    {
      title: "علبة تقديم فاخرة (هدية جاهزة)",
      description:
        "تصلك كل ساعة في علبة هارد بوكس أنيقة ومبطنة، مناسبة كهدية تليق بالمناسبات أو لاقتنائك الشخصي الفاخر.",
      badge: "تغليف مميز",
      icon: (
        <svg
          className="w-6 h-6 text-navy"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 12v10H4V12" />
          <path d="M2 7h20v5H2z" />
          <path d="M12 22V7" />
          <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
          <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
        </svg>
      ),
    },
    {
      title: "شحن سريع لكافة محافظات مصر",
      description:
        "توصيل آمن وباب البيت خلال ٢ إلى ٤ أيام عمل لجميع مدن وقرى ومحافظات جمهورية مصر العربية.",
      badge: "توصيل من الباب للباب",
      icon: (
        <svg
          className="w-6 h-6 text-navy"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="1" y="3" width="15" height="13" />
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      ),
    },
  ];

  return (
    <section id="features" className="py-16 sm:py-24 bg-cream/50 border-t border-cream-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-bold text-navy bg-cream-dark px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">
            وعد First Pick للعميل
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight mb-4">
            لماذا يختار عملاؤنا الشراء من First Pick؟
          </h2>
          <p className="text-sm sm:text-base text-warm-gray leading-relaxed">
            جمعنا بين أناقة ومظهر الساعات العالمية الفاخرة، والأسعار
            التنافسية الذكية في مصر مع تجربة شراء آمنة تماماً.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-cream-dark shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-cream flex items-center justify-center border border-cream-dark">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-bold text-navy bg-cream/70 px-2 py-0.5 rounded-full border border-gray-light">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-navy mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-warm-gray leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Banner with WhatsApp Callout */}
        <div id="guarantee" className="mt-14 bg-navy text-cream rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-xl">
          <div className="max-w-2xl mx-auto relative z-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
              جاهز لاختيار ساعتك القادمة؟
            </h3>
            <p className="text-sm sm:text-base text-cream/80 mb-8 leading-relaxed">
              تواصل معنا مباشرة عبر الواتساب لاختيار ساعتك وتأكيد العنوان وموعد الاستلام، وادفع فقط بعد ما تعاين قطعتك وتتأكد من كل تفصيلة فيها.
            </p>
            <a
              href={getWhatsAppGeneralUrl("مرحباً First Pick، أود حجز ساعة مع خدمة المعاينة قبل الاستلام.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-cream text-navy font-extrabold hover:bg-white active:scale-[0.98] transition-all shadow-lg"
            >
              <svg className="w-5 h-5 fill-emerald-600" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.599 2.668-.699a5.755 5.755 0 002.792.719c3.18 0 5.767-2.587 5.768-5.766 0-3.181-2.588-5.766-5.768-5.766zm3.364 8.167c-.144.405-.838.775-1.168.825-.329.05-.694.062-2.128-.501-1.833-.72-2.997-2.583-3.088-2.705-.091-.122-.736-.979-.736-1.868 0-.889.467-1.326.633-1.506.166-.18.362-.225.483-.225.12 0 .241.002.347.006.111.005.26-.042.406.31.15.362.513 1.25.558 1.341.045.091.076.197.015.318-.061.121-.091.197-.181.303-.091.106-.191.237-.272.318-.091.091-.186.19-.08.372.106.182.47 1.246 1.009 1.725.694.618 1.28.81 1.461.901.181.091.287.076.393-.046.106-.121.453-.529.574-.71.121-.181.242-.151.408-.091.166.06 1.056.498 1.237.589.181.091.302.136.347.212.045.076.045.438-.099.843z" />
              </svg>
              <span>طلب سريع عبر الواتساب الآن</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;

