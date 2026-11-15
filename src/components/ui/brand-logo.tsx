import Image from "next/image";
import Link from "next/link";
import React from "react";

export type LogoVariant = "navy" | "cream";

interface BrandLogoProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: LogoVariant;
  width?: number;
  height?: number;
  href?: string;
  className?: string;
  priority?: boolean;
}

const logoSources: Record<LogoVariant, string> = {
  navy: "/logo-navy.png",
  cream: "/logo-cream.png",
};

/**
 * First Pick Brand Logo Component
 * Aspect ratio: 884 x 192 (~4.6:1)
 */
export function BrandLogo({
  variant = "navy",
  width = 160,
  height = 35,
  href = "/",
  className = "",
  priority = false,
  ...props
}: BrandLogoProps) {
  const src = logoSources[variant] || logoSources.navy;

  const content = (
    <Image
      src={src}
      alt="First Pick Logo"
      width={width}
      height={height}
      priority={priority}
      className={`h-auto w-auto object-contain transition-opacity duration-200 hover:opacity-90 ${className}`}
    />
  );

  if (href) {
    return (
      <Link
        href={href}
        className="inline-flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
        aria-label="First Pick Home"
        {...props}
      >
        {content}
      </Link>
    );
  }

  return content;
}

export default BrandLogo;

