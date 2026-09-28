import type {
  EventType,
  FooterLink,
  MenuCategory,
  NavItem,
  PackageCard,
  Review,
  ServiceCard,
  SiteContact,
} from "./types";

export const siteContact: SiteContact = {
  phoneDisplay: "+234 800 000 0000",
  phoneHref: "tel:+2348000000000",
  email: "hello@ddot.ng",
  city: "Lagos, Nigeria",
  tagline: "Premium Catering & Eatery • Lagos, Nigeria",
  eateryHours: ["Mon–Sat: 10:00am – 9:00pm", "Sun: 12:00pm – 7:00pm"],
};

export const navItems: readonly NavItem[] = [
  { id: "home", href: "index.html", label: "HomePage" },
  { id: "about", href: "about.html", label: "About" },
  { id: "catering", href: "catering.html", label: "Catering" },
  { id: "menu", href: "menu.html", label: "Menu Highlights" },
  { id: "eatery", href: "eatery.html", label: "Eatery" },
  { id: "contact", href: "contact.html", label: "Contact" },
  { id: "contact", href: "contact.html#book", label: "Book Catering", cta: true },
];

export const footerLinks: readonly FooterLink[] = [
  { href: "catering.html", label: "Catering Services" },
  { href: "menu.html", label: "Menu Highlights" },
  { href: "eatery.html", label: "Eatery" },
  { href: "contact.html#book", label: "Book Catering" },
];

export const eventTypeOptions: readonly { value: EventType; label: string }[] = [
  { value: "wedding", label: "Wedding / Traditional" },
  { value: "corporate", label: "Corporate" },
  { value: "private", label: "Private Party" },
  { value: "other", label: "Other" },
];

export const cateringServices: readonly ServiceCard[] = [
  {
    title: "Weddings & Traditional Ceremonies",
    description:
      "Elegant buffet and plated service for engagement ceremonies, weddings, introductions, and traditional events.",
    items: [
      "Custom menu planning",
      "Live stations (small chops, grills, asun)",
      "Professional serving team",
    ],
  },
  {
    title: "Corporate & Brand Events",
    description:
      "Sleek, professional catering for conferences, product launches, office parties, and retreats.",
    items: ["Canapés & small chops", "Buffet or plated service", "On-time setup & breakdown"],
  },
  {
    title: "Private Parties & Home Service",
    description:
      "Intimate celebrations, birthdays, and family gatherings with zero stress – we handle the food, you enjoy your guests.",
    items: [
      "Party trays & custom platters",
      "On-site service or drop-off",
      "Flexible portions for any group size",
    ],
  },
];

export const homeMenuHighlights: readonly MenuCategory[] = [
  {
    title: "Signature Pots",
    items: [
      "Smoky Party Jollof with grilled chicken",
      "Ofada rice & designer stew",
      "Fried rice with jumbo prawns",
      "Native jollof (concoction rice)",
    ],
  },
  {
    title: "Grills & Street Classics",
    items: [
      "Suya platters (beef, chicken, gizzard)",
      "Asun (spicy goat meat)",
      "Shawarma wraps & sliders",
      "Fish pepper soup & catfish grills",
    ],
  },
  {
    title: "Small Chops & Sides",
    items: [
      "Spring rolls, samosas & puff-puff",
      "Yam fries & plantain boats",
      "Mosa, gizdodo & peppered snail",
      "Signature cocktails & mocktails",
    ],
  },
];

export const homeReviews: readonly Review[] = [
  {
    quote:
      "D.dot handled our traditional wedding catering flawlessly. The jollof, asun and small chops were the talk of the day. Service was timely and very professional.",
    name: "Chidera Okafor",
    context: "Traditional wedding, Lagos",
  },
  {
    quote:
      "We use D.dot for our quarterly corporate events and they never miss. Neat setup, tasty food, zero stress for our team. Guests always ask for their contact.",
    name: "Tolu Adebayo",
    context: "HR Manager, Corporate luncheon",
  },
  {
    quote:
      "Their eatery has become my go-to lunch spot. Portions are generous, food is always hot and fresh, and the staff are welcoming. Highly recommended.",
    name: "Grace Nwankwo",
    context: "Eatery regular",
  },
  {
    quote:
      "D.dot delivered party trays for my birthday and everything was on point — from the suya platters to the gizdodo. My guests kept going back for more.",
    name: "Emeka Balogun",
    context: "Private birthday party",
  },
  {
    quote:
      "Professional from enquiry to cleanup. They listened to our brief and created a menu that suited both older and younger guests. We'll definitely book again.",
    name: "Zainab Musa",
    context: "Family introduction ceremony",
  },
];

export const menuHighlights: readonly MenuCategory[] = [
  {
    title: "Signature Rice Pots",
    items: [
      "Smoky party jollof with grilled chicken or turkey",
      "Ofada rice with designer stew and assorted meat",
      "Fried rice with prawns and seasonal vegetables",
      "Native jollof (concoction rice) with smoked fish",
    ],
  },
  {
    title: "Soups & Swallows",
    items: [
      "Egusi soup with pounded yam, semo or eba",
      "Oha / Bitterleaf soup with assorted meats",
      "Seafood okra with fresh fish and prawns",
      "Banga soup with starch or eba",
    ],
  },
  {
    title: "Grills & Street Favourites",
    items: [
      "Beef, chicken and gizzard suya platters",
      "Asun (spicy goat meat)",
      "Catfish / croaker grills with pepper sauce",
      "Shawarma wraps and mini sliders",
    ],
  },
];

export const extraMenuSections: readonly MenuCategory[] = [
  {
    title: "Small Chops & Starters",
    items: [
      "Spring rolls, samosas & puff-puff",
      "Mosa, gizdodo & peppered snail",
      "Spicy chicken wings & gizzard skewers",
      "Mini burgers & canapés for corporate events",
    ],
  },
  {
    title: "Breakfast & Brunch",
    items: [
      "Yam and egg sauce / yam porridge",
      "Akara & pap, agege bread & omelette",
      "Pancakes with Nigerian-style toppings",
    ],
  },
  {
    title: "Drinks & Mocktails",
    items: [
      "Zobo and chapman",
      "Fresh juices (pineapple, orange, ginger blends)",
      "Signature mocktails for events",
    ],
  },
];

export const eateryFavourites: readonly MenuCategory[] = [
  {
    title: "Lunch Favourites",
    items: [
      "Party jollof or fried rice with chicken or turkey",
      "Ofada rice & designer stew",
      "Yam porridge and plantain sides",
    ],
  },
  {
    title: "Evening Cravings",
    items: [
      "Asun, suya platters and wings",
      "Shawarma, sliders and small chops",
      "Pepper soup with catfish or goat meat",
    ],
  },
  {
    title: "Drinks & Treats",
    items: [
      "Zobo, chapman and mocktails",
      "Soft drinks and fresh juices",
      "Light desserts and pastries",
    ],
  },
];

export const eateryReviews: readonly Review[] = [
  {
    quote:
      "The food tastes just like home and the space is always clean. Perfect spot for quick lunch between meetings.",
    name: "Iniobong Udo",
    context: "Regular weekday customer",
  },
  {
    quote: "Their evening grills are my favourite. I stop by for suya and asun almost every Friday.",
    name: "Kelechi Okon",
    context: "After-work hangout",
  },
  {
    quote:
      "Friendly staff, fast service, and consistent taste. D.dot is our family's go-to for weekend treats.",
    name: "Sade Ajayi",
    context: "Family dine-in",
  },
];

export const cateringPackages: readonly PackageCard[] = [
  {
    title: "Classic Wedding Package",
    items: [
      "Welcome small chops & cocktails",
      "Two rice options (party jollof, fried rice, etc.)",
      "Protein selection (chicken, beef, fish)",
      "Dessert platters",
    ],
    note: "Perfect for 150+ guests; fully customisable.",
  },
  {
    title: "Corporate Buffet",
    items: [
      "Finger foods & canapés for networking",
      "Main buffet with Nigerian and fusion options",
      "Tea/coffee station and light desserts",
    ],
    note: "Ideal for conferences, trainings and launches.",
  },
  {
    title: "Party Trays & Home Service",
    items: [
      "Full-size trays of rice, soups, grills and sides",
      "Optional onsite serving team",
      "Available for small and large gatherings",
    ],
    note: "Delivered hot, on time, and ready to serve.",
  },
];

export const cateringReviews: readonly Review[] = [
  {
    quote:
      "D.dot coordinated our entire wedding menu flawlessly. Guests were still talking about the food weeks later.",
    name: "Amaka Eze",
    context: "White wedding, Lagos",
  },
  {
    quote:
      "Very professional team. They arrived early, set up neatly, and served with a smile throughout our corporate retreat.",
    name: "Femi Ogunleye",
    context: "Company retreat",
  },
  {
    quote:
      "From enquiry to execution, everything was smooth. They understood our brief and exceeded expectations.",
    name: "Halima Danjuma",
    context: "50th birthday celebration",
  },
];
