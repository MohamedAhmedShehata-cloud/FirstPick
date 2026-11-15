"use client";

import React, { useState } from "react";
import Link from "next/link";
import BrandLogo from "../ui/brand-logo";
import { getWhatsAppGeneralUrl } from "@/config/site";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-cream/90 backdrop-blur-md border-b border-cream-dark transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center">
          <BrandLogo variant="navy" width={175} height={38} priority />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-navy">
          <Link
            href="/#catalog"
            className="hover:text-navy-light transition-colors py-1 relative group"
          >
            المعرض الكامل
            <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-navy transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link
            href="/#features"
            className="hover:text-navy-light transition-colors py-1 relative group"
          >
            لماذا First Pick؟
            <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-navy transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link
            href="/#guarantee"
            className="hover:text-navy-light transition-colors py-1 relative group"
          >
            سياسة المعاينة والضمان
            <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-navy transition-all duration-300 group-hover:w-full" />
          </Link>
        </nav>

        {/* Action Button: WhatsApp (Without displaying phone number) */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={getWhatsAppGeneralUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-navy text-cream hover:bg-navy-dark active:scale-[0.98] transition-all px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold shadow-sm hover:shadow"
          >
            {/* WhatsApp Icon */}
            <svg
              className="w-4 h-4 fill-emerald-400"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.599 2.668-.699a5.755 5.755 0 002.792.719c3.18 0 5.767-2.587 5.768-5.766 0-3.181-2.588-5.766-5.768-5.766zm3.364 8.167c-.144.405-.838.775-1.168.825-.329.05-.694.062-2.128-.501-1.833-.72-2.997-2.583-3.088-2.705-.091-.122-.736-.979-.736-1.868 0-.889.467-1.326.633-1.506.166-.18.362-.225.483-.225.12 0 .241.002.347.006.111.005.26-.042.406.31.15.362.513 1.25.558 1.341.045.091.076.197.015.318-.061.121-.091.197-.181.303-.091.106-.191.237-.272.318-.091.091-.186.19-.08.372.106.182.47 1.246 1.009 1.725.694.618 1.28.81 1.461.901.181.091.287.076.393-.046.106-.121.453-.529.574-.71.121-.181.242-.151.408-.091.166.06 1.056.498 1.237.589.181.091.302.136.347.212.045.076.045.438-.099.843z" />
            </svg>
            <span>طلب واستفسار عبر واتساب</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={getWhatsAppGeneralUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-navy text-cream text-xs"
            aria-label="تواصل واتساب"
          >
            <svg
              className="w-5 h-5 fill-emerald-400"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.599 2.668-.699a5.755 5.755 0 002.792.719c3.18 0 5.767-2.587 5.768-5.766 0-3.181-2.588-5.766-5.768-5.766zm3.364 8.167c-.144.405-.838.775-1.168.825-.329.05-.694.062-2.128-.501-1.833-.72-2.997-2.583-3.088-2.705-.091-.122-.736-.979-.736-1.868 0-.889.467-1.326.633-1.506.166-.18.362-.225.483-.225.12 0 .241.002.347.006.111.005.26-.042.406.31.15.362.513 1.25.558 1.341.045.091.076.197.015.318-.061.121-.091.197-.181.303-.091.106-.191.237-.272.318-.091.091-.186.19-.08.372.106.182.47 1.246 1.009 1.725.694.618 1.28.81 1.461.901.181.091.287.076.393-.046.106-.121.453-.529.574-.71.121-.181.242-.151.408-.091.166.06 1.056.498 1.237.589.181.091.302.136.347.212.045.076.045.438-.099.843z" />
            </svg>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-navy hover:text-navy-dark focus:outline-none"
            aria-label="القائمة الرئيسية"
          >
            <svg
              className="w-6 h-6 stroke-current stroke-2 fill-none"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-cream border-t border-cream-dark px-4 pt-3 pb-6 flex flex-col gap-4 text-center">
          <Link
            href="/#catalog"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-navy font-semibold hover:text-navy-light"
          >
            معرض الساعات المتاحة
          </Link>
          <Link
            href="/#features"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-navy font-semibold hover:text-navy-light"
          >
            لماذا First Pick؟
          </Link>
          <Link
            href="/#guarantee"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-navy font-semibold hover:text-navy-light"
          >
            سياسة المعاينة قبل الدفع
          </Link>
          <a
            href={getWhatsAppGeneralUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-navy text-cream py-3 rounded-xl font-bold flex items-center justify-center gap-2"
          >
            <span>طلب أو استفسار عبر واتساب</span>
          </a>
        </div>
      )}
    </header>
  );
}

export default Navbar;
