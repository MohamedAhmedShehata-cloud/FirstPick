import { Watch } from "@/types/watch";
import {
  siteConfig,
  getWhatsAppOrderUrl,
  getWhatsAppGeneralUrl,
} from "@/config/site";

// Re-export for backward compatibility
export type { Watch, WatchColorVariant, WatchCategory, WatchStrapType } from "@/types/watch";
export {
  siteConfig,
  getWhatsAppOrderUrl,
  getWhatsAppGeneralUrl,
};

export const WHATSAPP_NUMBER = siteConfig.whatsappNumber;
export const BRAND_PHONE_DISPLAY = siteConfig.phoneDisplay;
export const BRAND_INSTAGRAM = siteConfig.instagram;
export const BRAND_TIKTOK = siteConfig.tiktok;

export const WATCHES_DATA: Watch[] = [
  {
    id: "tissot-chronograph",
    code: "FP-TS01",
    name: "تيسوت كرونوغراف كلاسيك",
    brand: "تيسوت",
    price: 300,
    originalPrice: 450,
    isAvailable: true,
    category: "classic",
    strapType: "steel",
    description:
      "ساعة تيسوت كلاسيكية فاخرة بعدادات ثلاثية بتصميم كرونوغراف وسوار ستانلس ستيل مصمت مقاوم للصدأ، تجمع بين الدقة والأناقة وتناسب كافة الإطلالات الرسمية واليومية.",
    colors: [
      {
        id: "black",
        name: "أسود ملكي",
        colorHex: "#18191E",
        images: ["/watches/tissot-black.png"],
      },
      {
        id: "white",
        name: "أبيض لؤلؤي",
        colorHex: "#F4F5F7",
        images: ["/watches/tissot-white.png"],
      },
    ],
    specs: {
      movement: "كوارتز ياباني عالي الاعتمادية",
      caseSize: "٤١ مم",
      caseMaterial: "ستانلس ستيل 316L مقاوم للصدأ والبهتان",
      glass: "زجاج معدني مقوى ضد الخدوش والصدمات",
      waterResistance: "مقاومة لرذاذ الماء (3 ATM)",
      strap: "سوار ستانلس ستيل مع قفل أمان مزدوج",
    },
  },
  {
    id: "rolex-daytona-automatic",
    code: "FP-RLX01",
    name: "رولكس دايتونا سحاب أوتوماتيك",
    brand: "رولكس",
    price: 500,
    originalPrice: 750,
    isAvailable: true,
    category: "luxury",
    strapType: "steel",
    description:
      "ساعة رولكس ماكينة سحاب أوتوماتيكية بنظام حركة انسيابي وإطار سيراميك رياضي أسود فاخر وسوار أويستر ستيل ثقيل ببريق استثنائي.",
    colors: [
      {
        id: "black",
        name: "أسود فاحم",
        colorHex: "#15161A",
        images: ["/watches/rolex-sahab-black.png"],
      },
    ],
    specs: {
      movement: "حركة أوتوماتيكية سحاب انسيابية",
      caseSize: "٤٠ مم",
      caseMaterial: "ستانلس ستيل 316L مصقول ومفرش مع إطار تاكيميتر",
      glass: "زجاج كريستال مقوى مقاوم للخدش",
      waterResistance: "مقاومة للماء حتى 30 متر (3 ATM)",
      strap: "سوار أويستر ستانلس ستيل مع قفل أويسترلوك",
    },
  },
  {
    id: "rolex-oyster-perpetual",
    code: "FP-RLX02",
    name: "رولكس أويستر بيربتشوال",
    brand: "رولكس",
    price: 350,
    originalPrice: 500,
    isAvailable: true,
    category: "luxury",
    strapType: "steel",
    description:
      "التصميم الأيقوني الخالد من رولكس أويستر بيربتشوال بمينا سوداء نقية فائقة الوضوح، عقارب ومؤشرات واضحة، وهيكل ستيل متين يلائم جميع المناسبات.",
    colors: [
      {
        id: "black",
        name: "أسود كلاسيكي",
        colorHex: "#18191E",
        images: ["/watches/rolex-oyster-black.png"],
      },
    ],
    specs: {
      movement: "ماكينة حركة يابانية دقيقة",
      caseSize: "٤١ مم",
      caseMaterial: "ستانلس ستيل 316L مقاوم للتآكل والصدأ",
      glass: "زجاج مقوى مضاد للانعكاس والخدش",
      waterResistance: "مقاومة للماء 3 ATM",
      strap: "سوار أويستر ستانلس ستيل مع قفل محكم",
    },
  },
];
