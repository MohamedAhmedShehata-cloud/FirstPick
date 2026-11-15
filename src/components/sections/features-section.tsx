import React from "react";
import { getWhatsAppGeneralUrl } from "@/config/site";

export function FeaturesSection() {
  const features = [
    {
      title: "معاينة وفحص كامل قبل الدفع",
      description:
        "ثقتك أولويتنا المطلقة. افتح الطرد بنفسك مع مندوب الشحن، وافحص ساعتك وتفاصيلها وتأكد منها قبل سداد أي مبلغ.",
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
      title: "خامات وحرفية عالية الجودة",
      description:
        "هيكل مصنع من ستانلس ستيل 316L المصمت المقاوم للتآكل، زجاج هاردليكس مقوى مضاد للخدش، وماكينات حركة يابانية دقيقة تعتمد عليها.",
      badge: "جودة معتمدة",
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
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
    {
      title: "التوصيل يتم خلال أسبوع",
      description:
        "خدمة شحن سريعة وآمنة تصل لباب بيتك خلال أسبوع واحد فقط لجميع مدن وقرى ومحافظات جمهورية مصر العربية.",
      badge: "خلال أسبوع",
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
    {
      title: "قيمة استثنائية بدون وسيط",
      description:
        "نستورد موديلاتنا مباشرة من أفضل مصانع الساعات العالمية لنقدم لك مظهر وأناقة الساعات الفاخرة بأسعار تنافسية غير مسبوقة.",
      badge: "سعر منافس",
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
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ),
    },
  ];

  return (
    <section id="features" className="py-16 sm:py-24 bg-cream/50 border-t border-cream-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-bold text-navy bg-cream-dark px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">
            معايير First Pick
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight mb-4">
            لماذا يختار عملاؤنا الشراء من First Pick؟
          </h2>
          <p className="text-sm sm:text-base text-warm-gray leading-relaxed">
            جمعنا بين أناقة ومظهر الساعات العالمية الفاخرة، والأسعار
            التنافسية الذكية في مصر مع تجربة شراء آمنة ومضمونة تماماً.
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
                  <span className="text-[11px] font-bold text-navy bg-cream/70 px-2.5 py-0.5 rounded-full border border-gray-light">
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
              تواصل معنا مباشرة عبر الواتساب لتأكيد طلبك وتفاصيل الشحن (المقرر خلال أسبوع)، وسدد فقط بعد ما تعاين ساعتك وتتأكد من كل تفصيلة فيها مع مندوب التوصيل.
            </p>
            <a
              href={getWhatsAppGeneralUrl("مرحباً First Pick، أود حجز ساعة مع خدمة المعاينة قبل الاستلام والشحن خلال أسبوع.")}
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
