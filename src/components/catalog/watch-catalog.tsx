"use client";

import React, { useState, useMemo } from "react";
import { WATCHES_DATA } from "@/data/watches";
import WatchCard from "./watch-card";

type PriceSortOption = "default" | "price-asc" | "price-desc";

export function WatchCatalog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [priceSort, setPriceSort] = useState<PriceSortOption>("default");

  // Extract all unique brands from data
  const availableBrands = useMemo(() => {
    const brandsSet = new Set<string>();
    WATCHES_DATA.forEach((w) => {
      if (w.brand) brandsSet.add(w.brand);
    });
    return Array.from(brandsSet);
  }, []);

  const filteredWatches = useMemo(() => {
    let list = [...WATCHES_DATA];

    // 1. Search by Watch Name or Brand
    if (searchTerm.trim()) {
      const query = searchTerm.trim().toLowerCase();
      list = list.filter(
        (w) =>
          w.name.toLowerCase().includes(query) ||
          w.brand.toLowerCase().includes(query) ||
          w.code.toLowerCase().includes(query)
      );
    }

    // 2. Filter by Brand Pills
    if (selectedBrand !== "all") {
      list = list.filter((w) => w.brand === selectedBrand);
    }

    // 3. Filter/Sort by Price
    if (priceSort === "price-asc") {
      list.sort((a, b) => a.price - b.price);
    } else if (priceSort === "price-desc") {
      list.sort((a, b) => b.price - a.price);
    }

    return list;
  }, [searchTerm, selectedBrand, priceSort]);

  const handleReset = () => {
    setSearchTerm("");
    setSelectedBrand("all");
    setPriceSort("default");
  };

  const isFiltered = searchTerm !== "" || selectedBrand !== "all" || priceSort !== "default";

  return (
    <section id="catalog" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight mb-4">
            معرض الساعات المتاحة
          </h2>
          <p className="text-sm sm:text-base text-warm-gray leading-relaxed">
            ابحث عن ساعتك المفضلة بالاسم أو الماركة السويسرية والعالمية، مع ميزة الفحص والمعاينة قبل الاستلام والدفع، والتوصيل يتم خلال أسبوع.
          </p>
        </div>

        {/* Streamlined Filter & Search Bar */}
        <div className="bg-cream/40 rounded-2xl p-4 sm:p-6 border border-cream-dark mb-10 space-y-4">
          {/* Row 1: Search Input & Price Sort */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* Search Input (By Name or Brand) */}
            <div className="md:col-span-2 relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="ابحث باسم الساعة أو الماركة (مثال: رولكس، رويال، كارتييه...)"
                className="w-full bg-white border border-cream-dark text-navy font-semibold text-xs sm:text-sm rounded-xl py-3 pr-10 pl-4 focus:outline-none focus:ring-2 focus:ring-navy transition-all"
              />
              <svg
                className="w-4 h-4 text-warm-gray absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm("")}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-warm-gray hover:text-navy text-xs font-bold bg-cream-dark rounded-full w-5 h-5 flex items-center justify-center"
                  aria-label="مسح البحث"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Price Filter / Sort */}
            <div className="relative">
              <select
                id="price-sort"
                value={priceSort}
                onChange={(e) => setPriceSort(e.target.value as PriceSortOption)}
                className="w-full bg-white border border-cream-dark text-navy font-semibold text-xs sm:text-sm rounded-xl py-3 px-3 focus:outline-none focus:ring-2 focus:ring-navy cursor-pointer appearance-none"
                aria-label="فلترة وترتيب السعر"
              >
                <option value="default">ترتيب السعر: التلقائي</option>
                <option value="price-asc">السعر: من الأقل للأعلى</option>
                <option value="price-desc">السعر: من الأعلى للأقل</option>
              </select>
              <svg
                className="w-4 h-4 text-warm-gray absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </div>
          </div>

          {/* Row 2: Brand Pills */}
          <div className="pt-2 border-t border-cream-dark/70">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              <span className="text-xs font-bold text-navy shrink-0 ml-1">الماركة:</span>
              
              {/* All Brands Pill */}
              <button
                type="button"
                onClick={() => setSelectedBrand("all")}
                className={`whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs font-bold transition-all shrink-0 ${
                  selectedBrand === "all"
                    ? "bg-navy text-cream shadow-sm"
                    : "bg-white hover:bg-cream text-navy/80 hover:text-navy border border-cream-dark"
                }`}
              >
                كل الماركات ({WATCHES_DATA.length})
              </button>

              {/* Dynamic Brand Pills */}
              {availableBrands.map((brand) => {
                const isSelected = selectedBrand === brand;
                const count = WATCHES_DATA.filter((w) => w.brand === brand).length;
                return (
                  <button
                    key={brand}
                    type="button"
                    onClick={() => setSelectedBrand(brand)}
                    className={`whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs font-bold transition-all shrink-0 ${
                      isSelected
                        ? "bg-navy text-cream shadow-sm"
                        : "bg-white hover:bg-cream text-navy/80 hover:text-navy border border-cream-dark"
                    }`}
                  >
                    {brand} ({count})
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Count & Reset */}
          <div className="flex items-center justify-between text-xs text-warm-gray pt-1">
            <span>
              عرض <strong className="text-navy">{filteredWatches.length}</strong> من أصل {WATCHES_DATA.length} ساعة
            </span>
            {isFiltered && (
              <button
                type="button"
                onClick={handleReset}
                className="text-navy font-bold hover:underline"
              >
                إعادة ضبط الفلاتر
              </button>
            )}
          </div>
        </div>

        {/* Watches Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {filteredWatches.map((watch) => (
            <WatchCard key={watch.id} watch={watch} />
          ))}
        </div>

        {/* Empty state */}
        {filteredWatches.length === 0 && (
          <div className="text-center py-16 bg-cream/30 rounded-2xl border border-cream-dark p-8">
            <p className="text-warm-gray text-base font-medium mb-4">
              لا توجد ساعات مطابقة لخيارات البحث أو الفلترة المحددة.
            </p>
            <button
              onClick={handleReset}
              className="text-navy font-bold underline text-sm"
            >
              عرض جميع موديلات الساعات
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default WatchCatalog;
