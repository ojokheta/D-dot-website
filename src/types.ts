export type PageId = "home" | "about" | "catering" | "menu" | "eatery" | "contact";

export type NavItem = {
  id: PageId;
  href: string;
  label: string;
  cta?: boolean | undefined;
};

export type FooterLink = {
  href: string;
  label: string;
};

export type Review = {
  quote: string;
  name: string;
  context: string;
};

export type MenuCategory = {
  title: string;
  items: readonly string[];
};

export type ServiceCard = {
  title: string;
  description: string;
  items: readonly string[];
};

export type PackageCard = {
  title: string;
  items: readonly string[];
  note: string;
};

export type EventType = "wedding" | "corporate" | "private" | "other";

export type BookingRequest = {
  name: string;
  email: string;
  phone: string;
  eventType: EventType;
  guests: number | null;
  date: string;
  message: string;
};

export type SiteContact = {
  phoneDisplay: string;
  phoneHref: string;
  email: string;
  city: string;
  tagline: string;
  eateryHours: readonly string[];
};
