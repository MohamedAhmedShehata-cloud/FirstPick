"use client";

import React, { useState } from "react";
import { getWhatsAppGeneralUrl } from "@/data/watches";

export function FloatingWhatsApp() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-40 flex items-center gap-3">
      {/* Label Tooltip */}
      {hovered && (
        <div className="bg-navy-dark text-cream text-xs font-bold py-1.5 px-3 rounded-xl shadow-lg border border-navy-light hidden sm:block animate-fade-in whitespace-nowrap">
          تواصل معنا عبر الواتساب للطلب الفوري
        </div>
      )}

      {/* Button */}
      <a
        href={getWhatsAppGeneralUrl()}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-400/40"
        aria-label="تواصل عبر الواتساب"
      >
        {/* Radar Pulse */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping -z-10" />

        {/* WhatsApp Icon */}
        <svg className="w-8 h-8 fill-white" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.599 2.668-.699a5.755 5.755 0 002.792.719c3.18 0 5.767-2.587 5.768-5.766 0-3.181-2.588-5.766-5.768-5.766zm3.364 8.167c-.144.405-.838.775-1.168.825-.329.05-.694.062-2.128-.501-1.833-.72-2.997-2.583-3.088-2.705-.091-.122-.736-.979-.736-1.868 0-.889.467-1.326.633-1.506.166-.18.362-.225.483-.225.12 0 .241.002.347.006.111.005.26-.042.406.31.15.362.513 1.25.558 1.341.045.091.076.197.015.318-.061.121-.091.197-.181.303-.091.106-.191.237-.272.318-.091.091-.186.19-.08.372.106.182.47 1.246 1.009 1.725.694.618 1.28.81 1.461.901.181.091.287.076.393-.046.106-.121.453-.529.574-.71.121-.181.242-.151.408-.091.166.06 1.056.498 1.237.589.181.091.302.136.347.212.045.076.045.438-.099.843z" />
        </svg>
      </a>
    </div>
  );
}

export default FloatingWhatsApp;

