import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "First Pick | ساعات فاخرة بقيمة استثنائية في مصر",
  description:
    "ساعات رجالية ونسائية مختارة بعناية بتصوير واقعي على الطبيعة ١٠٠٪، وأسعار منافسة في السوق المصري مع إمكانية المعاينة والفحص الكامل قبل الاستلام والدفع.",
  icons: {
    icon: "/logo-navy.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col bg-white text-navy selection:bg-navy selection:text-cream">
        {children}
      </body>
    </html>
  );
}
