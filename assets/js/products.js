const FALLBACK_PRODUCTS = [
  {
    id: "ALB-001",
    name: "Paracetamol Tablets",
    category: "Analgesics & Antipyretics",
    description: "Quality oral analgesic and antipyretic tablets for retail, clinic, and institutional supply.",
    imageUrl: "./assets/img/hero-pharma-products.png",
    specifications: "Dosage form: Tablet | Segment: General medicine | Supply: Blister and bulk carton options | Use: Fever and mild pain support",
    availability: "Available on request",
    featured: true
  },
  {
    id: "ALB-002",
    name: "Multivitamin Capsules",
    category: "Nutraceuticals",
    description: "Daily wellness capsules for pharmacies, clinics, and healthcare distribution partners.",
    imageUrl: "./assets/img/hero-pharma-products.png",
    specifications: "Dosage form: Capsule | Segment: Wellness | Packaging: Bottle and carton options | Use: Nutritional support",
    availability: "In stock",
    featured: true
  },
  {
    id: "ALB-003",
    name: "Antacid Oral Suspension",
    category: "Gastrointestinal Care",
    description: "Oral suspension product for digestive health requirements and pharmacy supply.",
    imageUrl: "./assets/img/hero-pharma-products.png",
    specifications: "Dosage form: Oral suspension | Segment: Gastro care | Packaging: Bottle | Supply: Retail and institutional packs",
    availability: "Available on request",
    featured: true
  },
  {
    id: "ALB-004",
    name: "Protein & Wellness Powder",
    category: "Nutraceuticals",
    description: "Wellness nutrition powder suitable for retail pharmacy and healthcare channel distribution.",
    imageUrl: "./assets/img/hero-pharma-products.png",
    specifications: "Dosage form: Powder | Segment: Wellness nutrition | Packaging: Jar or pouch options | Use: Protein and nutrition support",
    availability: "Bulk supply available",
    featured: true
  },
  {
    id: "ALB-005",
    name: "Cough Relief Syrup",
    category: "Respiratory Care",
    description: "Respiratory care syrup for pharmacy channels and clinic requirements.",
    imageUrl: "./assets/img/hero-pharma-products.png",
    specifications: "Dosage form: Syrup | Segment: Respiratory care | Packaging: Bottle | Supply: Carton and distributor packs",
    availability: "Available on request",
    featured: false
  },
  {
    id: "ALB-006",
    name: "Hand Sanitizer",
    category: "Personal Care & Hygiene",
    description: "Hygiene product for pharmacies, clinics, offices, hospitals, and institutional distribution.",
    imageUrl: "./assets/img/hero-pharma-products.png",
    specifications: "Form: Liquid or gel | Segment: Hygiene | Packaging: Multiple bottle sizes | Use: Hand hygiene support",
    availability: "In stock",
    featured: false
  },
  {
    id: "ALB-007",
    name: "Hospital Disinfectant Solution",
    category: "Hospital Supply",
    description: "Disinfectant product for healthcare facilities, institutional housekeeping, and infection-control workflows.",
    imageUrl: "./assets/img/hero-pharma-products.png",
    specifications: "Form: Liquid solution | Segment: Hospital hygiene | Packaging: Bulk cans and bottles | Use: Surface disinfection support",
    availability: "Available on request",
    featured: false
  },
  {
    id: "ALB-008",
    name: "Calcium & Vitamin D3 Tablets",
    category: "Bone & Joint Care",
    description: "Bone health formulation for pharmacy, clinic, and wellness channel requirements.",
    imageUrl: "./assets/img/hero-pharma-products.png",
    specifications: "Dosage form: Tablet | Segment: Bone health | Packaging: Blister options | Use: Calcium and vitamin D support",
    availability: "Bulk supply available",
    featured: false
  },
  {
    id: "ALB-009",
    name: "First Aid & Wound Care Kit",
    category: "Hospital Supply",
    description: "Basic wound-care and first-aid supply kit for clinics, workplaces, pharmacies, and institutions.",
    imageUrl: "./assets/img/hero-pharma-products.png",
    specifications: "Type: Kit | Segment: First aid | Packaging: Box kit | Use: Wound-care and emergency support",
    availability: "In stock",
    featured: true
  }
];

const CATEGORY_APPLICATIONS = {
  "Analgesics & Antipyretics": ["Retail pharmacies", "Clinic medicine supply", "Institutional healthcare procurement"],
  "Nutraceuticals": ["Wellness channels", "Pharmacy distribution", "Clinic recommendations"],
  "Gastrointestinal Care": ["Pharmacy supply", "Clinic requirements", "Distributor stock planning"],
  "Respiratory Care": ["Retail pharmacies", "Seasonal product planning", "Clinic supply"],
  "Personal Care & Hygiene": ["Pharmacy retail", "Institutional hygiene", "Healthcare facilities"],
  "Hospital Supply": ["Hospitals and clinics", "Healthcare institutions", "Bulk procurement"],
  "Bone & Joint Care": ["Retail pharmacies", "Orthopaedic clinics", "Wellness product distribution"]
};

function parseCsv(text) {
  const rows = [];
  let row = [];
  let cell = "";
  let quoted = false;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];

    if (char === '"' && quoted && next === '"') {
      cell += '"';
      i += 1;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (char === "," && !quoted) {
      row.push(cell);
      cell = "";
    } else if ((char === "\n" || char === "\r") && !quoted) {
      if (char === "\r" && next === "\n") i += 1;
      row.push(cell);
      if (row.some((value) => value.trim() !== "")) rows.push(row);
      row = [];
      cell = "";
    } else {
      cell += char;
    }
  }

  row.push(cell);
  if (row.some((value) => value.trim() !== "")) rows.push(row);
  return rows;
}

function normaliseHeader(value) {
  return value.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function convertDriveImageUrl(url) {
  if (!url) return "./assets/img/hero-pharma-products.png";
  const match = url.match(/drive\.google\.com\/(?:file\/d\/|open\?id=)([^/&?]+)/);
  if (match && match[1]) return `https://drive.google.com/uc?export=view&id=${match[1]}`;
  return url;
}

function booleanValue(value) {
  return ["true", "yes", "y", "1", "featured"].includes(String(value).trim().toLowerCase());
}

function productFromRow(row, headers) {
  const value = (label) => row[headers[label]]?.trim() || "";
  return {
    id: value("productid") || value("id") || cryptoRandomId(),
    name: value("productname") || value("name") || "Unnamed Product",
    category: value("category") || "Medical Products",
    description: value("description") || "Pharmaceutical product supplied by Albertus Pharma.",
    imageUrl: convertDriveImageUrl(value("imageurl") || value("image")),
    specifications: value("specifications") || "",
    availability: value("availability") || "Available on request",
    featured: booleanValue(value("featuredproduct") || value("featured"))
  };
}

function cryptoRandomId() {
  return `ALB-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
}

async function fetchSheetProducts() {
  const config = window.APP_CONFIG || {};
  if (!config.sheetCsvUrl) return [];

  const separator = config.sheetCsvUrl.includes("?") ? "&" : "?";
  const url = `${config.sheetCsvUrl}${separator}_=${Date.now()}`;
  const response = await fetch(url, { cache: "no-store" });
  if (!response.ok) throw new Error(`Google Sheet request failed: ${response.status}`);

  const rows = parseCsv(await response.text());
  if (rows.length < 2) return [];

  const headers = rows[0].reduce((map, header, index) => {
    map[normaliseHeader(header)] = index;
    return map;
  }, {});

  return rows.slice(1).map((row) => productFromRow(row, headers)).filter((product) => product.name);
}

async function getProducts() {
  try {
    const sheetProducts = await fetchSheetProducts();
    if (sheetProducts.length > 0) return sheetProducts;
  } catch (error) {
    console.warn("Using fallback products because Google Sheets could not be loaded.", error);
  }
  return FALLBACK_PRODUCTS;
}

function productQuoteUrl(product) {
  const config = window.APP_CONFIG || {};
  const subject = `Quotation Request: ${product.name}`;
  const body = `${config.emailGreeting || "Hello Albertus Pharma,"}\n\nI would like a quotation for:\n\nProduct Name: ${product.name}\n\nPlease share pricing, availability, and delivery details.`;
  return `mailto:${config.email || "info@albertuspharma.com"}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function generalEmailUrl(message) {
  const config = window.APP_CONFIG || {};
  return `mailto:${config.email || "info@albertuspharma.com"}?subject=${encodeURIComponent("Product Enquiry for Albertus Pharma")}&body=${encodeURIComponent(message)}`;
}

function productSpecs(product) {
  return String(product.specifications || "")
    .split(/\s+\|\s+|;|\n/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function productApplications(product) {
  return CATEGORY_APPLICATIONS[product.category] || ["Pharmaceutical distribution", "Healthcare procurement", "Pharmacy channel supply"];
}

function allCategories(products) {
  return [...new Set(products.map((product) => product.category).filter(Boolean))].sort();
}

function trackInquiry(type, label) {
  if (typeof gtag === "function") {
    gtag("event", "generate_lead", {
      enquiry_type: type,
      item_name: label
    });
  }
}
