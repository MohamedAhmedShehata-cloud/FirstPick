import { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { WATCHES_DATA } from "@/data/watches";
import { WatchDetailsView } from "@/components";

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

async function WatchContent({ params }: PageProps) {
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

function WatchDetailsSkeleton() {
  return (
    <div className="min-h-screen bg-cream/20 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-pulse">
        {/* Breadcrumb skeleton */}
        <div className="h-4 w-32 bg-cream-dark/60 rounded mb-8" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Gallery skeleton */}
          <div className="space-y-4">
            <div className="aspect-[4/5] w-full bg-cream-dark/50 rounded-3xl" />
            <div className="flex gap-3">
              <div className="w-20 h-24 bg-cream-dark/40 rounded-xl" />
              <div className="w-20 h-24 bg-cream-dark/40 rounded-xl" />
            </div>
          </div>

          {/* Details skeleton */}
          <div className="space-y-6">
            <div className="h-6 w-24 bg-cream-dark/50 rounded-full" />
            <div className="h-10 w-3/4 bg-cream-dark/50 rounded-lg" />
            <div className="h-4 w-40 bg-cream-dark/40 rounded" />
            <div className="h-24 w-full bg-cream-dark/40 rounded-2xl" />
            <div className="h-14 w-full bg-cream-dark/50 rounded-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WatchPage({ params }: PageProps) {
  return (
    <Suspense fallback={<WatchDetailsSkeleton />}>
      <WatchContent params={params} />
    </Suspense>
  );
}
