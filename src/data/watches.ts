export interface Watch {
  id: string;
  code: string;
  name: string;
  price: number;
  originalPrice: number;
  category: "classic" | "sport" | "luxury";
  strapType: "steel" | "leather" | "rubber";
  dialColor: string;
  image: string;
  badge?: string;
  description: string;
  specs: {
    movement: string;
    caseSize: string;
    caseMaterial: string;
    glass: string;
    waterResistance: string;
    strap: string;
  };
}

export const WHATSAPP_NUMBER = "201062081956";
export const BRAND_PHONE_DISPLAY = "+20 10 6208 1956";
export const BRAND_INSTAGRAM = "firstpick.eg";
export const BRAND_TIKTOK = "first.pick13";

/**
 * Generate a direct WhatsApp link with a pre-filled luxury order inquiry
 */
export function getWhatsAppOrderUrl(watch: Watch): string {
  const message = `مرحباً First Pick،
أود طلب واستفسار عن ساعة:
- الموديل: ${watch.name}
- الكود: ${watch.code}
- السعر: ${watch.price.toLocaleString("ar-EG")} ج.م

برجاء تأكيد التوافر وتفاصيل شحن الطلب مع إمكانية المعاينة قبل الاستلام. شكراً!`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * General customer care WhatsApp link
 */
export function getWhatsAppGeneralUrl(customMessage?: string): string {
  const message =
    customMessage ||
    `مرحباً First Pick، أود الاستفسار عن كولكشن الساعات المتاحة وعروض المعاينة قبل الاستلام.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WATCHES_DATA: Watch[] = [
  {
    id: "fp-01",
    code: "FP-01",
    name: "رويال برستيج بلاك",
    price: 1450,
    originalPrice: 2150,
    category: "luxury",
    strapType: "steel",
    dialColor: "أسود ملكي",
    image: "/watches/watch-1.jpg",
    badge: "الأكثر طلباً",
    description:
      "تصميم فخم مستوحى من أعرق دور الساعات السويسرية، إطار مسدس الأضلاع مع مينا هندسية بارزة وسوار ستيل مصمت ثقيل.",
    specs: {
      movement: "ماكينة كوارتز يابانية دقيقة",
      caseSize: "٤١ مم",
      caseMaterial: "ستانلس ستيل 316L مقاوم للصدأ والبهتان",
      glass: "زجاج هاردليكس مقوى ومقاوم للخدش",
      waterResistance: "مقاومة للماء حتى 30 متر (3 ATM)",
      strap: "سوار ستانلس ستيل مع قفل أوتوماتيكي مزدوج",
    },
  },
  {
    id: "fp-02",
    code: "FP-02",
    name: "كورونوغراف ليجند جولد",
    price: 1650,
    originalPrice: 2450,
    category: "luxury",
    strapType: "steel",
    dialColor: "أخضر زمردي مع ذهبي",
    image: "/watches/watch-2.jpg",
    badge: "إصدار حصري",
    description:
      "مزيج ملكي بين الذهب الفاخر والمينا الزمردية العميقة مع عدادات كرونوغراف تفصيلية لمظهر واثق في المناسبات.",
    specs: {
      movement: "كوارتز كرونوغراف نشط",
      caseSize: "٤٢ مم",
      caseMaterial: "ستانلس ستيل مطلي PVD ذهبي ثابت",
      glass: "كريستال مقوى بطبقة مضادة للانعكاس",
      waterResistance: "مقاومة للماء 3 ATM",
      strap: "سوار معدني مدمج عالي الراحة",
    },
  },
  {
    id: "fp-03",
    code: "FP-03",
    name: "دايفماستر مارينا بلو",
    price: 1390,
    originalPrice: 1990,
    category: "sport",
    strapType: "steel",
    dialColor: "أزرق محيطي",
    image: "/watches/watch-3.jpg",
    badge: "الأعلى تقييماً",
    description:
      "طابع بحري رياضي أنيق مع إطار سيراميك دوار ومؤشرات مضيئة في الظلام، مثالية للارتداء اليومي والعمل.",
    specs: {
      movement: "كوارتز ياباني عالي الاعتمادية",
      caseSize: "٤٠ مم",
      caseMaterial: "فولاذ مقاوم للصدأ مصقول ومفرش",
      glass: "زجاج معدني معالج ضد الصدمات",
      waterResistance: "مقاومة للماء حتى 50 متر (5 ATM)",
      strap: "سوار أويستر ثلاثي الحلقات",
    },
  },
  {
    id: "fp-04",
    code: "FP-04",
    name: "أويستر سيلفر كلاسيك",
    price: 1290,
    originalPrice: 1850,
    category: "classic",
    strapType: "steel",
    dialColor: "فضي مصقول أشعة الشمس",
    image: "/watches/watch-4.jpg",
    badge: "كلاسيك راقي",
    description:
      "البساطة المطلقة والذوق الرفيع. مينا فضية ناصعة مع إطار محزز أنيق وتاريخ مكبر عند مؤشر الثالثة.",
    specs: {
      movement: "كوارتز دقيق مع نافذة تاريخ",
      caseSize: "٣٩ مم",
      caseMaterial: "ستانلس ستيل درجة جراحية 316L",
      glass: "زجاج مع عدسة تكبير للتاريخ",
      waterResistance: "مقاومة لرذاذ الماء اليومي",
      strap: "سوار جوبيلي فاخر مرن ومريح",
    },
  },
  {
    id: "fp-05",
    code: "FP-05",
    name: "سوبرين شادو بلاك إديشن",
    price: 1550,
    originalPrice: 2200,
    category: "sport",
    strapType: "rubber",
    dialColor: "أسود كربوني مطفي",
    image: "/watches/watch-5.jpg",
    badge: "إطلالة رياضية",
    description:
      "إطلالة رياضية داكنة وجريئة بسوار سيليكون مرن عالي الجودة يقاوم العرق ومناسب للتمارين والطلعات الكاجوال.",
    specs: {
      movement: "ماكينة كرونوغراف دقيقة متعددة الوظائف",
      caseSize: "٤٣ مم",
      caseMaterial: "فولاذ أسود مطفي مطلي كربونياً",
      glass: "زجاج مضاد للخدش",
      waterResistance: "مقاومة للماء 5 ATM",
      strap: "حزام سيليكون طبي مرن مع فتحات تهوية",
    },
  },
  {
    id: "fp-06",
    code: "FP-06",
    name: "إيليجانس ليذر بروان",
    price: 1190,
    originalPrice: 1750,
    category: "classic",
    strapType: "leather",
    dialColor: "أبيض عاجي دافئ",
    image: "/watches/watch-6.jpg",
    badge: "كلاسيك رسمي",
    description:
      "خيار البدلات والملابس الرسمية الأول. سمك نحيف للغاية مع جلد طبيعي بني منقوش بنمط جلد التمساح الراقي.",
    specs: {
      movement: "كوارتز فائق النحافة",
      caseSize: "٤٠ مم (سمك ٨ مم)",
      caseMaterial: "ستانلس ستيل مصقول ببريق المرآة",
      glass: "زجاج مقوى مقاوم للخدوش",
      waterResistance: "مقاومة للماء 3 ATM",
      strap: "جلد طبيعي بني مبطن بقفل كلاسيكي",
    },
  },
  {
    id: "fp-07",
    code: "FP-07",
    name: "نوتيلوس ستيل كحلي",
    price: 1580,
    originalPrice: 2350,
    category: "luxury",
    strapType: "steel",
    dialColor: "كحلي متدرج رائع",
    image: "/watches/watch-7.jpg",
    badge: "تصميم أيقوني",
    description:
      "تصميم أيقوني حائز على إعجاب عشاق الساعات الفخمة حول العالم، إطار بيضاوي متناسق ومينا مضلعة أفقياً بتدرج لوني ساحر.",
    specs: {
      movement: "حركة كوارتز دقيقة وموثوقة",
      caseSize: "٤٠.٥ مم",
      caseMaterial: "ستانلس ستيل 316L ثقيل الفخامة",
      glass: "كريستال هاردليكس عالي الوضوح",
      waterResistance: "مقاومة للماء 3 ATM",
      strap: "سوار ستانلس ستيل مدمج متناسق",
    },
  },
  {
    id: "fp-08",
    code: "FP-08",
    name: "كاريرا سبييدستر فضي",
    price: 1480,
    originalPrice: 2100,
    category: "sport",
    strapType: "steel",
    dialColor: "فضي مع عقارب زرقاء",
    image: "/watches/watch-8.jpg",
    badge: "سباق ورياضة",
    description:
      "روح السباقات الأوروبية بتفاصيل رياضية دقيقة مع عقارب زرقاء ميتاليك تضفي لمسة حيوية وفريدة على معصمك.",
    specs: {
      movement: "كوارتز سبورت متعدد العدادات",
      caseSize: "٤٢ مم",
      caseMaterial: "فولاذ صلب مقاوم للتآكل",
      glass: "زجاج مقوى ضد الصدمات",
      waterResistance: "مقاومة للماء 3 ATM",
      strap: "سوار معدني بروابط صلبة",
    },
  },
  {
    id: "fp-09",
    code: "FP-09",
    name: "أولدموني روز جولد آند بلاك",
    price: 1690,
    originalPrice: 2500,
    category: "luxury",
    strapType: "leather",
    dialColor: "أسود عميق مع إطار روز جولد",
    image: "/watches/watch-9.jpg",
    badge: "ستايل أولد موني",
    description:
      "تجسيد لمعنى الفخامة الهادئة (Old Money). حزام جلد طبيعي أسود فاخر مع هيكل بلون الذهب الوردي اللامع.",
    specs: {
      movement: "كوارتز ياباني عالي الجودة",
      caseSize: "٤١ مم",
      caseMaterial: "ستانلس ستيل مطلي روز جولد بتقنية PVD",
      glass: "زجاج زفيري مقاوم للخدش",
      waterResistance: "مقاومة للماء 3 ATM",
      strap: "جلد طبيعي ناعم مع مشبك محفور",
    },
  },
  {
    id: "fp-10",
    code: "FP-10",
    name: "سيراميك بيبسي سبورت",
    price: 1520,
    originalPrice: 2250,
    category: "sport",
    strapType: "steel",
    dialColor: "أسود مع إطار أزرق وأحمر",
    image: "/watches/watch-10.jpg",
    badge: "المفضلة لدى الشباب",
    description:
      "الإطار الخزفي الشهير بلوني الأزرق والأحمر الكلاسيكي، مع عقرب إضافي وعلامات مضيئة فائقة السطوع.",
    specs: {
      movement: "كوارتز مع ميزة قراءة التوقيت",
      caseSize: "٤٠ مم",
      caseMaterial: "ستانلس ستيل مصقول",
      glass: "زجاج معالج ومكبر لتاريخ اليوم",
      waterResistance: "مقاومة للماء 5 ATM",
      strap: "سوار جوبيلي ستانلس ستيل مصمت",
    },
  },
  {
    id: "fp-11",
    code: "FP-11",
    name: "مون فيز كلاسيك وايت",
    price: 1350,
    originalPrice: 1950,
    category: "classic",
    strapType: "leather",
    dialColor: "أبيض مع نافذة أطوار القمر",
    image: "/watches/watch-11.jpg",
    badge: "لمسة فنية",
    description:
      "لمسة رومانسية فنية مع نافذة تجسد أطوار القمر وأرقام رومانية كلاسيكية محفورة بدقة بالغة.",
    specs: {
      movement: "كوارتز مع مؤشر أطوار القمر وتاريخ",
      caseSize: "٤٠ مم",
      caseMaterial: "فولاذ فضي براق",
      glass: "كريستال هاردليكس مضاد للخدش",
      waterResistance: "مقاومة للماء 3 ATM",
      strap: "جلد طبيعي أسود مبطن",
    },
  },
  {
    id: "fp-12",
    code: "FP-12",
    name: "ماستربيس كحلي في ذهبي",
    price: 1620,
    originalPrice: 2380,
    category: "luxury",
    strapType: "steel",
    dialColor: "أزرق ملكي مع لمسات ذهبية",
    image: "/watches/watch-12.jpg",
    badge: "فخامة استثنائية",
    description:
      "تدرج لوني بديع يجمع درجات الباليت الكحلية مع الفولاذ والذهب ليعكس حضوراً قوياً ولا ينسى في أي مناسبة.",
    specs: {
      movement: "ماكينة يابانية معتمدة",
      caseSize: "٤١ مم",
      caseMaterial: "فولاذ مقاوم للصدأ ثنائي اللون (Two-Tone)",
      glass: "زجاج مضاد للانعكاس والخدش",
      waterResistance: "مقاومة للماء 3 ATM",
      strap: "سوار معدني مدمج بلونين",
    },
  },
  {
    id: "fp-13",
    code: "FP-13",
    name: "أفياتور بيلوت ستيل",
    price: 1380,
    originalPrice: 1980,
    category: "sport",
    strapType: "steel",
    dialColor: "رمادي معدني (Warm Gray)",
    image: "/watches/watch-13.jpg",
    badge: "تصميم طيارين",
    description:
      "مستوحاة من ساعات قمرة قيادة الطائرات الكلاسيكية، أرقام واضحة سهلة القراءة مع عقارب عريضة مكسوة بمادة مضيئة.",
    specs: {
      movement: "كوارتز دقيق عالي التحمل",
      caseSize: "٤٢ مم",
      caseMaterial: "ستانلس ستيل غير لامع (Matte Finish)",
      glass: "زجاج معدني مقوى",
      waterResistance: "مقاومة للماء 5 ATM",
      strap: "سوار صلب مقوى",
    },
  },
  {
    id: "fp-14",
    code: "FP-14",
    name: "دايتونا ريسينغ وايت أند بلاك",
    price: 1720,
    originalPrice: 2550,
    category: "sport",
    strapType: "steel",
    dialColor: "باندا (أبيض مع دوائر سوداء)",
    image: "/watches/watch-14.jpg",
    badge: "ساعة الباندا الأيقونية",
    description:
      "التصميم الأسطوري الملقب بـ (Panda)، مينا بيضاء مع دوائر سوداء ثلاثية وتاكيميتر لقياس السرعة على الإطار.",
    specs: {
      movement: "كوارتز كرونوغراف نشط بالكامل",
      caseSize: "٤٠ مم",
      caseMaterial: "ستانلس ستيل مصقول 316L",
      glass: "زجاج معالج ومقاوم للصدمات",
      waterResistance: "مقاومة للماء 5 ATM",
      strap: "سوار أويستر ثلاثي الحلقات بقفل آمن",
    },
  },
  {
    id: "fp-15",
    code: "FP-15",
    name: "فينتاج كلاسيك سليم",
    price: 1250,
    originalPrice: 1800,
    category: "classic",
    strapType: "leather",
    dialColor: "كريمي عتيق (Cream Vintage)",
    image: "/watches/watch-15.jpg",
    badge: "إصدار عتيق",
    description:
      "تصميم يستحضر أناقة الخمسينيات الكلاسيكية، مينا بلون كريمي هادئ وعقارب رفيعة مع حزام جلد طبيعي ناعم.",
    specs: {
      movement: "كوارتز فائق الدقة والنحافة",
      caseSize: "٣٨.٥ مم",
      caseMaterial: "فولاذ فضي عالي النقاوة",
      glass: "زجاج مقبب كلاسيكي (Domed Crystal)",
      waterResistance: "مقاومة للماء للاستخدام اليومي",
      strap: "جلد طبيعي كلاسيكي خفيف الوزن",
    },
  },
];

