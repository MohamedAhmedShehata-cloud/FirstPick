import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { WATCHES_DATA } from "@/data/watches";
import WatchDetailsView from "@/components/watch-details-view";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return WATCHES_DATA.map((watch) => ({
    id: watch.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const watch = WATCHES_DATA.find((w) => w.id === id);

  if (!watch) {
    return {
      title: "ساعة غير متوفرة",
      description: "الموديل المطلوب غير متوفر حالياً في كتالوج First Pick.",
    };
  }

  const primaryImage = watch.colors[0]?.images[0] || "/logo-navy.png";
  const title = `ساعة ${watch.name} من ${watch.brand} (${watch.code})`;
  const description = `${watch.description} - السعر: ${watch.price.toLocaleString("ar-EG")} ج.م (قبل الخصم: ${watch.originalPrice.toLocaleString("ar-EG")} ج.م). معاينة وفحص مجاني قبل الدفع والشحن خلال أسبوع لكافة محافظات مصر.`;

  return {
    title,
    description,
    keywords: [
      watch.name,
      watch.brand,
      `ساعة ${watch.brand}`,
      `ساعة ${watch.name}`,
      watch.code,
      "ساعات فاخرة مصر",
      "معاينة قبل الدفع",
      "First Pick",
    ],
    alternates: {
      canonical: `/watches/${watch.id}`,
    },
    openGraph: {
      type: "article",
      locale: "ar_EG",
      url: `/watches/${watch.id}`,
      siteName: "First Pick",
      title,
      description,
      images: [
        {
          url: primaryImage,
          width: 800,
          height: 1000,
          alt: `${watch.name} - ${watch.brand}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [primaryImage],
    },
  };
}

export default async function WatchPage({ params }: PageProps) {
  const { id } = await params;
  const watch = WATCHES_DATA.find((w) => w.id === id);

  if (!watch) {
    notFound();
  }

  // Get up to 4 related watches in the same category or strap type
  const relatedWatches = WATCHES_DATA.filter(
    (w) => w.id !== watch.id && (w.category === watch.category || w.strapType === watch.strapType)
  ).slice(0, 4);

  return <WatchDetailsView watch={watch} relatedWatches={relatedWatches} />;
}
