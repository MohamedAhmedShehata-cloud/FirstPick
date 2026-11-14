"use client";

import React, { useState, useMemo } from "react";
import { Watch, WATCHES_DATA } from "@/data/watches";
import WatchCard from "@/components/watch-card";
import WatchModal from "@/components/watch-modal";

type FilterType = "all" | "classic" | "sport" | "luxury" | "steel" | "leather";
type SortType = "featured" | "price-asc" | "price-desc";

export function WatchCatalog() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [sortBy, setSortBy] = useState<SortType>("featured");
  const [selectedWatch, setSelectedWatch] = useState<Watch | null>(null);

  const filteredWatches = useMemo(() => {
    let list = [...WATCHES_DATA];

    // Apply Filter
    if (activeFilter === "classic" || activeFilter === "sport" || activeFilter === "luxury") {
      list = list.filter((w) => w.category === activeFilter);
    } else if (activeFilter === "steel") {
      list = list.filter((w) => w.strapType === "steel");
    } else if (activeFilter === "leather") {
      list = list.filter((w) => w.strapType === "leather");
    }

    // Apply Sort
    if (sortBy === "price-asc") {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      list.sort((a, b) => b.price - a.price);
    }

    return list;
  }, [activeFilter, sortBy]);

  const filterTabs: { id: FilterType; label: string; count: number }[] = [
    { id: "all", label: "جميع الموديلات", count: WATCHES_DATA.length },
    {
      id: "luxury",
      label: "فخمة ومميزة",
      count: WATCHES_DATA.filter((w) => w.category === "luxury").length,
    },
    {
      id: "classic",
      label: "كلاسيك ورسمي",
      count: WATCHES_DATA.filter((w) => w.category === "classic").length,
    },
    {
      id: "sport",
      label: "رياضية وكرونوغراف",
      count: WATCHES_DATA.filter((w) => w.category === "sport").length,
    },
    {
      id: "steel",
      label: "سوار ستانلس ستيل",
      count: WATCHES_DATA.filter((w) => w.strapType === "steel").length,
    },
    {
      id: "leather",
      label: "سوار جلد طبيعي",
      count: WATCHES_DATA.filter((w) => w.strapType === "leather").length,
    },
  ];

  return (
    <section id="catalog" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream border border-cream-dark text-xs font-bold text-navy mb-3">
            <span>كتالوج الساعات المتاحة فوراً</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight mb-4">
            معرض موديلات First Pick
          </h2>
          <p className="text-sm sm:text-base text-warm-gray leading-relaxed">
            جميع الصور المعروضة تم تصويرها على الطبيعة بدون تعديل ومتاحة
            للمعاينة الحرة عند استلامك من مندوب الشحن.
          </p>
        </div>

        {/* Filter Pills & Sort Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-cream-dark">
          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  type="button"
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-navy text-cream shadow-sm"
                      : "bg-cream/60 hover:bg-cream text-navy/80 hover:text-navy border border-cream-dark"
                  }`}
                >
                  {tab.label}{" "}
                  <span
                    className={`text-[11px] mr-1 ${
                      isActive ? "text-cream/80" : "text-warm-gray"
                    }`}
                  >
                    ({tab.count})
                  </span>
                </button>
              );
            })}
          </div>

          {/* Sort Dropdown & Count */}
          <div className="flex items-center justify-between w-full md:w-auto gap-4 text-xs font-semibold text-warm-gray">
            <span>
              عرض <strong className="text-navy">{filteredWatches.length}</strong> ساعة
            </span>

            <div className="flex items-center gap-2">
              <label htmlFor="sort-select" className="text-warm-gray">
                ترتيب:
              </label>
              <select
                id="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortType)}
                className="bg-cream/50 border border-cream-dark text-navy font-semibold text-xs rounded-lg px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-navy cursor-pointer"
              >
                <option value="featured">المميزة والأكثر طلباً</option>
                <option value="price-asc">السعر: من الأقل للأعلى</option>
                <option value="price-desc">السعر: من الأعلى للأقل</option>
              </select>
            </div>
          </div>
        </div>

        {/* Watches Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {filteredWatches.map((watch) => (
            <WatchCard
              key={watch.id}
              watch={watch}
              onSelect={(w) => setSelectedWatch(w)}
            />
          ))}
        </div>

        {/* Empty state safeguard */}
        {filteredWatches.length === 0 && (
          <div className="text-center py-16">
            <p className="text-warm-gray text-base font-medium mb-4">
              لا توجد ساعات مطابقة لهذا التصنيف حالياً.
            </p>
            <button
              onClick={() => setActiveFilter("all")}
              className="text-navy font-bold underline"
            >
              عرض جميع الموديلات الـ ١٥
            </button>
          </div>
        )}
      </div>

      {/* Quick View Modal */}
      <WatchModal
        watch={selectedWatch}
        onClose={() => setSelectedWatch(null)}
      />
    </section>
  );
}

export default WatchCatalog;

