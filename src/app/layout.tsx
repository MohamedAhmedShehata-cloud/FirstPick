import type { Metadata } from "next";
import { Alexandria, Playfair_Display } from "next/font/google";
import "./globals.css";
import {
  AnnouncementBar,
  Navbar,
  Footer,
  FloatingWhatsApp,
  SplashScreen,
} from "@/components";

const alexandria = Alexandria({
  subsets: ["arabic", "latin"],
  variable: "--font-alexandria",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://firstpick.eg"),
  title: {
    default: "First Pick | ساعات فاخرة بقيمة استثنائية في مصر",
    template: "%s | First Pick",
  },
  description:
    "وجهتك الأولى لأفخم موديلات الساعات العالمية في السوق المصري بأسعار مباشرة ومنافسة بدون وسيط. ميزة المعاينة والفحص الكامل قبل الدفع مع مندوب الشحن، وتوصيل سريع خلال أسبوع لكافة محافظات مصر.",
  applicationName: "First Pick",
  authors: [{ name: "First Pick Luxury Watches", url: "https://firstpick.eg" }],
  generator: "Next.js",
  keywords: [
    "ساعات فاخرة مصر",
    "ساعات رجالي مصر",
    "ساعات رولكس مصر",
    "ساعات كارتييه مصر",
    "ساعات أوديمار بيغيه مصر",
    "ساعات باتيك فيليب مصر",
    "ساعات أوميغا مصر",
    "ساعات تيسو مصر",
    "شراء ساعات اون لاين مصر",
    "ساعات فحص قبل الاستلام",
    "ساعات دفع عند الاستلام",
    "ساعات مستوردة مصر",
    "First Pick",
    "First Pick Egypt",
    "First Pick Watches",
  ],
  creator: "First Pick",
  publisher: "First Pick",
  category: "luxury watches ecommerce",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ar_EG",
    url: "https://firstpick.eg",
    siteName: "First Pick Watches",
    title: "First Pick | ساعات فاخرة بقيمة استثنائية في مصر",
    description:
      "تشكيلة منتقاة بعناية من أرقى الساعات الفاخرة بأسعار منافسة في مصر مع ميزة المعاينة والفحص الكامل قبل الدفع والتوصيل خلال أسبوع.",
    images: [
      {
        url: "/logo-navy.png",
        width: 884,
        height: 192,
        alt: "First Pick Luxury Watches",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "First Pick | ساعات فاخرة بقيمة استثنائية في مصر",
    description:
      "ساعات فاخرة بتصوير طبيعي وموثوق، أسعار منافسة، وفحص مجاني قبل الدفع والتوصيل خلال أسبوع في مصر.",
    images: ["/logo-navy.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", sizes: "64x64", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`h-full scroll-smooth antialiased ${alexandria.variable} ${playfair.variable}`}
    >
      <body className="min-h-full flex flex-col bg-white text-navy selection:bg-navy selection:text-cream font-sans">
        <SplashScreen />
        <AnnouncementBar />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
