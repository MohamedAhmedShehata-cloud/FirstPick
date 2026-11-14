import { Watch } from "@/types/watch";

export const siteConfig = {
  name: "First Pick",
  description:
    "ساعات رجالية ونسائية مختارة بعناية، وأسعار منافسة في السوق المصري مع إمكانية المعاينة والفحص الكامل قبل الاستلام والدفع، والتوصيل خلال أسبوع.",
  contactPerson: "Abdelrahman",
  phoneDisplay: "+20 12 8599 1964",
  whatsappNumber: "201285991964",
  deliveryTime: "خلال أسبوع",
  instagram: "firstpick.eg",
  tiktok: "first.pick13",
  socialUrls: {
    instagram: "https://instagram.com/firstpick.eg",
    tiktok: "https://tiktok.com/@first.pick13",
    whatsapp: "https://wa.me/201285991964",
  },
};

/**
 * Generate a direct WhatsApp link with a pre-filled luxury order inquiry
 */
export function getWhatsAppOrderUrl(watch: Watch, selectedColor?: string): string {
  const colorText = selectedColor ? `\n- اللون المختار: ${selectedColor}` : "";
  const availabilityNote = !watch.isAvailable ? "\n(ملاحظة: أرغب في حجز مسبق/استفسار عن موعد توفر هذا الموديل)" : "";

  const message = `مرحباً First Pick،
أود طلب واستفسار عن ساعة:
- الموديل: ${watch.name} (${watch.brand})
- الكود: ${watch.code}${colorText}
- السعر: ${watch.price.toLocaleString("ar-EG")} ج.م${availabilityNote}

برجاء تأكيد التوافر وموعد الشحن (المقرر خلال أسبوع) مع إمكانية المعاينة والفحص قبل الاستلام. شكراً!`;

  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * General customer care WhatsApp link
 */
export function getWhatsAppGeneralUrl(customMessage?: string): string {
  const message =
    customMessage ||
    `مرحباً First Pick، أود الاستفسار عن كولكشن الساعات المتاحة وعروض التوصيل خلال أسبوع مع المعاينة قبل الاستلام.`;
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
