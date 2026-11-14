"use client";

import React, { useState } from "react";
import Image from "next/image";

interface WatchImageProps {
  src: string;
  alt: string;
  code?: string;
  className?: string;
  priority?: boolean;
}

export function WatchImage({
  src,
  alt,
  code,
  className = "",
  priority = false,
}: WatchImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div className="w-full h-full bg-gradient-to-b from-cream via-cream-dark/50 to-cream flex flex-col items-center justify-center p-6 text-center select-none relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
        <div className="w-20 h-20 rounded-full border-2 border-dashed border-warm-gray/40 flex items-center justify-center relative mb-2">
          <div className="w-14 h-14 rounded-full border border-navy/30 flex items-center justify-center relative">
            <div className="w-0.5 h-5 bg-navy/60 absolute top-5 origin-bottom rotate-[45deg]" />
            <div className="w-0.5 h-3.5 bg-navy/60 absolute top-7 origin-bottom -rotate-[60deg]" />
            <div className="w-1.5 h-1.5 rounded-full bg-navy/80 z-10" />
          </div>
        </div>

        {code && (
          <span className="text-xs font-mono font-bold tracking-wider text-navy/70 bg-cream/90 px-2.5 py-0.5 rounded border border-navy/10 mb-1">
            {code}
          </span>
        )}
        <span className="text-[11px] font-semibold text-warm-gray">
          ساعة First Pick
        </span>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full overflow-hidden bg-cream">
      {/* Luxury Skeleton Loading Shimmer */}
      {isLoading && (
        <div
          aria-hidden="true"
          className="absolute inset-0 z-10 bg-gradient-to-r from-cream via-cream-dark/60 to-cream animate-pulse flex flex-col items-center justify-center gap-2 pointer-events-none"
        >
          {/* Subtle animated watch silhouette placeholder */}
          <div className="w-16 h-16 rounded-full border border-warm-gray/20 bg-white/40 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-navy/30 animate-ping" />
          </div>
          <span className="text-[10px] font-mono text-warm-gray/60 tracking-wider">
            FIRST PICK
          </span>
        </div>
      )}

      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
        priority={priority}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setError(true);
        }}
        className={`object-cover object-center group-hover:scale-105 transition-all duration-500 ${
          isLoading ? "opacity-0 scale-95" : "opacity-100 scale-100"
        } ${className}`}
      />
    </div>
  );
}

export default WatchImage;
