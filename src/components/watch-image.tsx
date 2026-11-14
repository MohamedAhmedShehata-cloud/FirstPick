"use client";

import React, { useState } from "react";
import Image from "next/image";

interface WatchImageProps {
  src: string;
  alt: string;
  code: string;
  dialColor?: string;
  className?: string;
  priority?: boolean;
}

export function WatchImage({
  src,
  alt,
  code,
  dialColor,
  className = "",
  priority = false,
}: WatchImageProps) {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div className="w-full h-full bg-gradient-to-b from-cream via-cream-dark/50 to-cream flex flex-col items-center justify-center p-6 text-center select-none relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
        {/* Decorative watch outline graphic */}
        <div className="w-24 h-24 rounded-full border-2 border-dashed border-warm-gray/40 flex items-center justify-center relative mb-3">
          <div className="w-16 h-16 rounded-full border border-navy/30 flex items-center justify-center">
            {/* Clock hands */}
            <div className="w-0.5 h-6 bg-navy/60 absolute top-7 origin-bottom rotate-[45deg]" />
            <div className="w-0.5 h-4 bg-navy/60 absolute top-9 origin-bottom -rotate-[60deg]" />
            <div className="w-2 h-2 rounded-full bg-navy/80 z-10" />
          </div>
        </div>

        <span className="text-xs font-mono font-bold tracking-wider text-navy/70 bg-cream/90 px-2.5 py-0.5 rounded border border-navy/10 mb-1">
          {code}
        </span>
        <span className="text-xs font-semibold text-warm-gray">
          {dialColor || "تصوير طبيعي على الإيد"}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      priority={priority}
      onError={() => setError(true)}
      className={`object-cover object-center group-hover:scale-105 transition-transform duration-500 ${className}`}
    />
  );
}

export default WatchImage;

