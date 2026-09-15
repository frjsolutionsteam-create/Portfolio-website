/*
  HOW TO ADD A NEW PORTFOLIO PIECE
  --------------------------------
  1. Put your image file in:  images/portfolio/
     (jpg, png or webp all work — keep filenames simple, no spaces: e.g. brand-nova-01.jpg)

  2. Copy one of the objects below, paste it into the WORKS array,
     and fill in your own details. That's it — no code changes needed
     anywhere else, the site reads this list automatically.

  FIELD GUIDE
  - id:          any unique short id, e.g. "nova-branding"
  - title:       name of the project
  - category:    one of "Branding", "Social Media", "UI/UX", "Print"
                 (or add a new category name — it will appear as a new filter automatically)
  - image:       path to the image, e.g. "images/portfolio/nova-branding.jpg"
  - description: 1–2 sentences about the piece, shown in the lightbox
  - year:        optional, e.g. "2025"
  - link:        optional — a live URL for the project, or leave as ""
*/

const WORKS = [
  {
    id: "brand-01",
    title: "Sample Brand Identity",
    category: "Branding",
    image: "images/portfolio/b1.png",
    description: "Replace this with your own project. Logo suite, colour system and brand guidelines for a fictional client — swap in your real case study.",
    year: "2025",
    link: ""
  },
  {
    id: "social-01",
    title: "Sample Social Campaign",
    category: "Social Media",
    image: "images/portfolio/b2.png",
    description: "A set of social creatives for a product launch — replace with your own carousel or post design.",
    year: "2025",
    link: ""
  },
  {
    id: "uiux-01",
    title: "Sample App Screens",
    category: "UI/UX",
    image: "images/portfolio/b3.png",
    description: "Onboarding and dashboard screens for a mobile app concept — replace with your own UI work.",
    year: "2024",
    link: ""
  },
  {
    id: "print-01",
    title: "Sample Brochure",
    category: "Print",
    image: "images/portfolio/s1.png",
    description: "A tri-fold brochure layout — replace with your own print or packaging piece.",
    year: "2024",
    link: ""
  },
  {
    id: "brand-02",
    title: "Sample Logo Mark",
    category: "Branding",
    image: "images/portfolio/s2.png",
    description: "An icon-led logo mark and stationery mockup — replace with your own branding project.",
    year: "2024",
    link: ""
  },
  {
    id: "social-02",
    title: "Sample Reel Cover Set",
    category: "Social Media",
    image: "images/portfolio/social-02.svg",
    description: "Cover art and thumbnail set for a video series — replace with your own content design.",
    year: "2023",
    link: ""
  }
];
