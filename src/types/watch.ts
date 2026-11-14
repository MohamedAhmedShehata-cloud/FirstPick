export type WatchCategory = "classic" | "sport" | "luxury";
export type WatchStrapType = "steel" | "leather" | "rubber";

export interface WatchSpecs {
  movement: string;
  caseSize: string;
  caseMaterial: string;
  glass: string;
  waterResistance: string;
  strap: string;
}

export interface WatchColorVariant {
  id: string;
  name: string; // e.g. "أسود ملكي", "فضي كلاسيكي", "أزرق محيطي"
  colorHex: string; // e.g. "#0B1F3A", "#1A1A1A", "#C5A059", "#D8D8D8"
  images: string[]; // List of images corresponding to this color
}

export interface Watch {
  id: string;
  code: string;
  name: string;
  brand: string; // e.g. "رولكس", "باتيك فيليب", "أوديمار بيغيه", "كارتييه", "أوميغا", "تيسو"
  price: number;
  originalPrice: number;
  isAvailable: boolean; // Availability Status (Sold Out / Available)
  category: WatchCategory;
  strapType: WatchStrapType;
  badge?: string;
  description: string;
  colors: WatchColorVariant[]; // Multiple color variants, each with dedicated image list
  specs: WatchSpecs;
}
