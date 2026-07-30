const FALLBACK_PRODUCTS = [
  {
    id: "ALB-001",
    name: "BROTYP-R",
    category: "Analgesics and Antipyretics",
    description: "BROTYP-R is part of Albertus Pharma's Analgesics and Antipyretics portfolio. Pain, fever, inflammation, and recovery support for pharmacy, clinical, and institutional supply.",
    imageUrl: "/assets/img/products/analgesics-and-antipyretics-brotyp-r.jpg",
    specifications: "Product: BROTYP-R | Segment: Analgesics and antipyretics | Use: Pain, fever and inflammation support | Supply: Pharmacy and institutional enquiry",
    availability: "Available on request",
    featured: true
  },
  {
    id: "ALB-002",
    name: "D Patch 200",
    category: "Analgesics and Antipyretics",
    description: "D Patch 200 is part of Albertus Pharma's Analgesics and Antipyretics portfolio. Pain, fever, inflammation, and recovery support for pharmacy, clinical, and institutional supply.",
    imageUrl: "/assets/img/products/analgesics-and-antipyretics-d-patch-200.jpg",
    specifications: "Product: D Patch 200 | Segment: Analgesics and antipyretics | Use: Pain, fever and inflammation support | Supply: Pharmacy and institutional enquiry",
    availability: "Available on request",
    featured: false
  },
  {
    id: "ALB-003",
    name: "ALMOXICTUS-625",
    category: "Antibiotics",
    description: "ALMOXICTUS-625 is part of Albertus Pharma's Antibiotics portfolio. Prescription-led antibacterial therapy support for healthcare professionals, distributors, and institutional supply channels.",
    imageUrl: "/assets/img/products/antibiotics-almoxictus-625.jpg",
    specifications: "Product: ALMOXICTUS-625 | Segment: Antibiotics | Use: Prescription-led antibacterial therapy | Supply: Distributor and institutional enquiry",
    availability: "Available on request",
    featured: true
  },
  {
    id: "ALB-004",
    name: "LINZZOL-600 Tablets",
    category: "Antibiotics",
    description: "LINZZOL-600 Tablets is part of Albertus Pharma's Antibiotics portfolio. Prescription-led antibacterial therapy support for healthcare professionals, distributors, and institutional supply channels.",
    imageUrl: "/assets/img/products/antibiotics-linzzol-600-tablets.jpg",
    specifications: "Product: LINZZOL-600 Tablets | Segment: Antibiotics | Use: Prescription-led antibacterial therapy | Supply: Distributor and institutional enquiry",
    availability: "Available on request",
    featured: false
  },
  {
    id: "ALB-005",
    name: "CALBER-C2M Tablets",
    category: "Bone and Joint Care",
    description: "CALBER-C2M Tablets is part of Albertus Pharma's Bone and Joint Care portfolio. Bone strength, vitamin D, musculoskeletal, and nerve-health support for healthcare and wellness requirements.",
    imageUrl: "/assets/img/products/bone-and-joint-care-calber-c2m-tablets.jpg",
    specifications: "Product: CALBER-C2M Tablets | Segment: Bone and joint care | Use: Bone, joint and nerve health support | Supply: Pharmacy and clinical enquiry",
    availability: "Available on request",
    featured: true
  },
  {
    id: "ALB-006",
    name: "Calber-D3 Nano Shot",
    category: "Bone and Joint Care",
    description: "Calber-D3 Nano Shot is part of Albertus Pharma's Bone and Joint Care portfolio. Bone strength, vitamin D, musculoskeletal, and nerve-health support for healthcare and wellness requirements.",
    imageUrl: "/assets/img/products/bone-and-joint-care-calber-d3-nano-shot.jpg",
    specifications: "Product: Calber-D3 Nano Shot | Segment: Bone and joint care | Use: Bone, joint and nerve health support | Supply: Pharmacy and clinical enquiry",
    availability: "Available on request",
    featured: false
  },
  {
    id: "ALB-007",
    name: "D Patch 200",
    category: "Bone and Joint Care",
    description: "D Patch 200 is part of Albertus Pharma's Bone and Joint Care portfolio. Bone strength, vitamin D, musculoskeletal, and nerve-health support for healthcare and wellness requirements.",
    imageUrl: "/assets/img/products/bone-and-joint-care-d-patch-200.jpg",
    specifications: "Product: D Patch 200 | Segment: Bone and joint care | Use: Bone, joint and nerve health support | Supply: Pharmacy and clinical enquiry",
    availability: "Available on request",
    featured: false
  },
  {
    id: "ALB-008",
    name: "NERVTUS-NP",
    category: "Bone and Joint Care",
    description: "NERVTUS-NP is part of Albertus Pharma's Bone and Joint Care portfolio. Bone strength, vitamin D, musculoskeletal, and nerve-health support for healthcare and wellness requirements.",
    imageUrl: "/assets/img/products/bone-and-joint-care-nervtus-np.jpg",
    specifications: "Product: NERVTUS-NP | Segment: Bone and joint care | Use: Bone, joint and nerve health support | Supply: Pharmacy and clinical enquiry",
    availability: "Available on request",
    featured: false
  },
  {
    id: "ALB-009",
    name: "Prozntus Sachets",
    category: "Gastrointestinal Care",
    description: "Prozntus Sachets is part of Albertus Pharma's Gastrointestinal Care portfolio. Digestive health and gut-support care for pharmacy, clinic, and patient-care requirements.",
    imageUrl: "/assets/img/products/gastrointestinal-care-prozntus-sachets.jpg",
    specifications: "Product: Prozntus Sachets | Segment: Gastrointestinal care | Use: Digestive and gut health support | Supply: Pharmacy and clinical enquiry",
    availability: "Available on request",
    featured: false
  },
  {
    id: "ALB-010",
    name: "Prozntus",
    category: "Gastrointestinal Care",
    description: "Prozntus is part of Albertus Pharma's Gastrointestinal Care portfolio. Digestive health and gut-support care for pharmacy, clinic, and patient-care requirements.",
    imageUrl: "/assets/img/products/gastrointestinal-care-prozntus.jpg",
    specifications: "Product: Prozntus | Segment: Gastrointestinal care | Use: Digestive and gut health support | Supply: Pharmacy and clinical enquiry",
    availability: "Available on request",
    featured: true
  },
  {
    id: "ALB-011",
    name: "VONOTUS-20 Tablets",
    category: "Gastrointestinal Care",
    description: "VONOTUS-20 Tablets is part of Albertus Pharma's Gastrointestinal Care portfolio. Digestive health and gut-support care for pharmacy, clinic, and patient-care requirements.",
    imageUrl: "/assets/img/products/gastrointestinal-care-vonotus-20-tablets.jpg",
    specifications: "Product: VONOTUS-20 Tablets | Segment: Gastrointestinal care | Use: Digestive and gut health support | Supply: Pharmacy and clinical enquiry",
    availability: "Available on request",
    featured: false
  },
  {
    id: "ALB-012",
    name: "CALBER-C2M",
    category: "Gynae Care",
    description: "CALBER-C2M is part of Albertus Pharma's Gynae Care portfolio. Women's health, pregnancy support, fertility, nutrition, and wellness care for gynecology requirements.",
    imageUrl: "/assets/img/products/gynae-care-calber-c2m.jpg",
    specifications: "Product: CALBER-C2M | Segment: Gynae care | Use: Women's health and reproductive wellness support | Supply: Pharmacy and clinical enquiry",
    availability: "Available on request",
    featured: false
  },
  {
    id: "ALB-013",
    name: "CALBER-C2M Tablets",
    category: "Gynae Care",
    description: "CALBER-C2M Tablets is part of Albertus Pharma's Gynae Care portfolio. Women's health, pregnancy support, fertility, nutrition, and wellness care for gynecology requirements.",
    imageUrl: "/assets/img/products/gynae-care-calber-c2m-tablets.jpg",
    specifications: "Product: CALBER-C2M Tablets | Segment: Gynae care | Use: Women's health and reproductive wellness support | Supply: Pharmacy and clinical enquiry",
    availability: "Available on request",
    featured: true
  },
  {
    id: "ALB-014",
    name: "FERRTUS",
    category: "Gynae Care",
    description: "FERRTUS is part of Albertus Pharma's Gynae Care portfolio. Women's health, pregnancy support, fertility, nutrition, and wellness care for gynecology requirements.",
    imageUrl: "/assets/img/products/gynae-care-ferrtus.jpg",
    specifications: "Product: FERRTUS | Segment: Gynae care | Use: Women's health and reproductive wellness support | Supply: Pharmacy and clinical enquiry",
    availability: "Available on request",
    featured: true
  },
  {
    id: "ALB-015",
    name: "Mpatch",
    category: "Gynae Care",
    description: "Mpatch is part of Albertus Pharma's Gynae Care portfolio. Women's health, pregnancy support, fertility, nutrition, and wellness care for gynecology requirements.",
    imageUrl: "/assets/img/products/gynae-care-mpatch.jpg",
    specifications: "Product: Mpatch | Segment: Gynae care | Use: Women's health and reproductive wellness support | Supply: Pharmacy and clinical enquiry",
    availability: "Available on request",
    featured: false
  },
  {
    id: "ALB-016",
    name: "OMEGATUS-E Capsules",
    category: "Gynae Care",
    description: "OMEGATUS-E Capsules is part of Albertus Pharma's Gynae Care portfolio. Women's health, pregnancy support, fertility, nutrition, and wellness care for gynecology requirements.",
    imageUrl: "/assets/img/products/gynae-care-omegatus-e-capsules.jpg",
    specifications: "Product: OMEGATUS-E Capsules | Segment: Gynae care | Use: Women's health and reproductive wellness support | Supply: Pharmacy and clinical enquiry",
    availability: "Available on request",
    featured: false
  },
  {
    id: "ALB-017",
    name: "QNZYM-300",
    category: "Gynae Care",
    description: "QNZYM-300 is part of Albertus Pharma's Gynae Care portfolio. Women's health, pregnancy support, fertility, nutrition, and wellness care for gynecology requirements.",
    imageUrl: "/assets/img/products/gynae-care-qnzym-300.jpg",
    specifications: "Product: QNZYM-300 | Segment: Gynae care | Use: Women's health and reproductive wellness support | Supply: Pharmacy and clinical enquiry",
    availability: "Available on request",
    featured: false
  },
  {
    id: "ALB-018",
    name: "NERVTUS-M Capsules",
    category: "NeuroCare",
    description: "NERVTUS-M Capsules is part of Albertus Pharma's NeuroCare portfolio. Neuro-support care for nerve health, neuropathy care, and related clinical requirements.",
    imageUrl: "/assets/img/products/neurocare-nervtus-m-capsules.jpg",
    specifications: "Product: NERVTUS-M Capsules | Segment: Neuro care | Use: Nerve health and neuropathy support | Supply: Pharmacy and clinical enquiry",
    availability: "Available on request",
    featured: true
  },
  {
    id: "ALB-019",
    name: "NERVTUS-NP",
    category: "NeuroCare",
    description: "NERVTUS-NP is part of Albertus Pharma's NeuroCare portfolio. Neuro-support care for nerve health, neuropathy care, and related clinical requirements.",
    imageUrl: "/assets/img/products/neurocare-nervtus-np.jpg",
    specifications: "Product: NERVTUS-NP | Segment: Neuro care | Use: Nerve health and neuropathy support | Supply: Pharmacy and clinical enquiry",
    availability: "Available on request",
    featured: false
  },
  {
    id: "ALB-020",
    name: "CALBER-C2M",
    category: "Nutraceuticals",
    description: "CALBER-C2M is part of Albertus Pharma's Nutraceuticals portfolio. Nutritional, probiotic, antioxidant, vitamin, mineral, and wellness support for daily healthcare needs.",
    imageUrl: "/assets/img/products/nutraceuticals-calber-c2m.jpg",
    specifications: "Product: CALBER-C2M | Segment: Nutraceuticals | Use: Nutrition, wellness and immunity support | Supply: Pharmacy and institutional enquiry",
    availability: "Available on request",
    featured: false
  },
  {
    id: "ALB-021",
    name: "CURPITUS-P Capsules",
    category: "Nutraceuticals",
    description: "CURPITUS-P Capsules is part of Albertus Pharma's Nutraceuticals portfolio. Nutritional, probiotic, antioxidant, vitamin, mineral, and wellness support for daily healthcare needs.",
    imageUrl: "/assets/img/products/nutraceuticals-curpitus-p-capsules.jpg",
    specifications: "Product: CURPITUS-P Capsules | Segment: Nutraceuticals | Use: Nutrition, wellness and immunity support | Supply: Pharmacy and institutional enquiry",
    availability: "Available on request",
    featured: false
  },
  {
    id: "ALB-022",
    name: "Calber-D3 Nano Shot",
    category: "Nutraceuticals",
    description: "Calber-D3 Nano Shot is part of Albertus Pharma's Nutraceuticals portfolio. Nutritional, probiotic, antioxidant, vitamin, mineral, and wellness support for daily healthcare needs.",
    imageUrl: "/assets/img/products/nutraceuticals-calber-d3-nano-shot.jpg",
    specifications: "Product: Calber-D3 Nano Shot | Segment: Nutraceuticals | Use: Nutrition, wellness and immunity support | Supply: Pharmacy and institutional enquiry",
    availability: "Available on request",
    featured: false
  },
  {
    id: "ALB-023",
    name: "Ferrtus Capsules",
    category: "Nutraceuticals",
    description: "Ferrtus Capsules is part of Albertus Pharma's Nutraceuticals portfolio. Nutritional, probiotic, antioxidant, vitamin, mineral, and wellness support for daily healthcare needs.",
    imageUrl: "/assets/img/products/nutraceuticals-ferrtus-capsules.jpg",
    specifications: "Product: Ferrtus Capsules | Segment: Nutraceuticals | Use: Nutrition, wellness and immunity support | Supply: Pharmacy and institutional enquiry",
    availability: "Available on request",
    featured: false
  },
  {
    id: "ALB-024",
    name: "NERVTUS-M Capsules",
    category: "Nutraceuticals",
    description: "NERVTUS-M Capsules is part of Albertus Pharma's Nutraceuticals portfolio. Nutritional, probiotic, antioxidant, vitamin, mineral, and wellness support for daily healthcare needs.",
    imageUrl: "/assets/img/products/nutraceuticals-nervtus-m-capsules.jpg",
    specifications: "Product: NERVTUS-M Capsules | Segment: Nutraceuticals | Use: Nutrition, wellness and immunity support | Supply: Pharmacy and institutional enquiry",
    availability: "Available on request",
    featured: true
  },
  {
    id: "ALB-025",
    name: "NERVTUS-NP",
    category: "Nutraceuticals",
    description: "NERVTUS-NP is part of Albertus Pharma's Nutraceuticals portfolio. Nutritional, probiotic, antioxidant, vitamin, mineral, and wellness support for daily healthcare needs.",
    imageUrl: "/assets/img/products/nutraceuticals-nervtus-np.jpg",
    specifications: "Product: NERVTUS-NP | Segment: Nutraceuticals | Use: Nutrition, wellness and immunity support | Supply: Pharmacy and institutional enquiry",
    availability: "Available on request",
    featured: false
  },
  {
    id: "ALB-026",
    name: "OMEGATUS-E Capsules",
    category: "Nutraceuticals",
    description: "OMEGATUS-E Capsules is part of Albertus Pharma's Nutraceuticals portfolio. Nutritional, probiotic, antioxidant, vitamin, mineral, and wellness support for daily healthcare needs.",
    imageUrl: "/assets/img/products/nutraceuticals-omegatus-e-capsules.jpg",
    specifications: "Product: OMEGATUS-E Capsules | Segment: Nutraceuticals | Use: Nutrition, wellness and immunity support | Supply: Pharmacy and institutional enquiry",
    availability: "Available on request",
    featured: false
  },
  {
    id: "ALB-027",
    name: "Prozntus Sachets",
    category: "Nutraceuticals",
    description: "Prozntus Sachets is part of Albertus Pharma's Nutraceuticals portfolio. Nutritional, probiotic, antioxidant, vitamin, mineral, and wellness support for daily healthcare needs.",
    imageUrl: "/assets/img/products/nutraceuticals-prozntus-sachets.jpg",
    specifications: "Product: Prozntus Sachets | Segment: Nutraceuticals | Use: Nutrition, wellness and immunity support | Supply: Pharmacy and institutional enquiry",
    availability: "Available on request",
    featured: false
  },
  {
    id: "ALB-028",
    name: "Prozntus",
    category: "Nutraceuticals",
    description: "Prozntus is part of Albertus Pharma's Nutraceuticals portfolio. Nutritional, probiotic, antioxidant, vitamin, mineral, and wellness support for daily healthcare needs.",
    imageUrl: "/assets/img/products/nutraceuticals-prozntus.jpg",
    specifications: "Product: Prozntus | Segment: Nutraceuticals | Use: Nutrition, wellness and immunity support | Supply: Pharmacy and institutional enquiry",
    availability: "Available on request",
    featured: true
  },
  {
    id: "ALB-029",
    name: "QNZYM-300",
    category: "Nutraceuticals",
    description: "QNZYM-300 is part of Albertus Pharma's Nutraceuticals portfolio. Nutritional, probiotic, antioxidant, vitamin, mineral, and wellness support for daily healthcare needs.",
    imageUrl: "/assets/img/products/nutraceuticals-qnzym-300.jpg",
    specifications: "Product: QNZYM-300 | Segment: Nutraceuticals | Use: Nutrition, wellness and immunity support | Supply: Pharmacy and institutional enquiry",
    availability: "Available on request",
    featured: false
  },
  {
    id: "ALB-030",
    name: "Urytus Sachets",
    category: "Nutraceuticals",
    description: "Urytus Sachets is part of Albertus Pharma's Nutraceuticals portfolio. Nutritional, probiotic, antioxidant, vitamin, mineral, and wellness support for daily healthcare needs.",
    imageUrl: "/assets/img/products/nutraceuticals-urytus-sachets.jpg",
    specifications: "Product: Urytus Sachets | Segment: Nutraceuticals | Use: Nutrition, wellness and immunity support | Supply: Pharmacy and institutional enquiry",
    availability: "Available on request",
    featured: false
  },
  {
    id: "ALB-031",
    name: "CURPITUS-P Capsules",
    category: "Onco",
    description: "CURPITUS-P Capsules is part of Albertus Pharma's Onco portfolio. Specialty wellness support for focused healthcare needs and professional consultation-led supply.",
    imageUrl: "/assets/img/products/onco-curpitus-p-capsules.jpg",
    specifications: "Product: CURPITUS-P Capsules | Segment: Onco support | Use: Specialty wellness support | Supply: Professional enquiry",
    availability: "Available on request",
    featured: false
  },
  {
    id: "ALB-032",
    name: "Albertus-CZ Jnr",
    category: "Pediatric Care",
    description: "Albertus-CZ Jnr is part of Albertus Pharma's Pediatric Care portfolio. Child-focused cough, cold, respiratory, and nutritional support for pediatric care channels.",
    imageUrl: "/assets/img/products/pediatric-care-albertus-cz-jnr.jpg",
    specifications: "Product: Albertus-CZ Jnr | Segment: Pediatric care | Use: Child-focused cough, cold and nutrition support | Supply: Pharmacy and clinical enquiry",
    availability: "Available on request",
    featured: false
  },
  {
    id: "ALB-033",
    name: "Albertus-DB Syrup",
    category: "Pediatric Care",
    description: "Albertus-DB Syrup is part of Albertus Pharma's Pediatric Care portfolio. Child-focused cough, cold, respiratory, and nutritional support for pediatric care channels.",
    imageUrl: "/assets/img/products/pediatric-care-albertus-db-syrup.jpg",
    specifications: "Product: Albertus-DB Syrup | Segment: Pediatric care | Use: Child-focused cough, cold and nutrition support | Supply: Pharmacy and clinical enquiry",
    availability: "Available on request",
    featured: false
  },
  {
    id: "ALB-034",
    name: "Albertus-LS Junior",
    category: "Pediatric Care",
    description: "Albertus-LS Junior is part of Albertus Pharma's Pediatric Care portfolio. Child-focused cough, cold, respiratory, and nutritional support for pediatric care channels.",
    imageUrl: "/assets/img/products/pediatric-care-albertus-ls-junior.jpg",
    specifications: "Product: Albertus-LS Junior | Segment: Pediatric care | Use: Child-focused cough, cold and nutrition support | Supply: Pharmacy and clinical enquiry",
    availability: "Available on request",
    featured: false
  },
  {
    id: "ALB-035",
    name: "Ferrtus-Fe Drops",
    category: "Pediatric Care",
    description: "Ferrtus-Fe Drops is part of Albertus Pharma's Pediatric Care portfolio. Child-focused cough, cold, respiratory, and nutritional support for pediatric care channels.",
    imageUrl: "/assets/img/products/pediatric-care-ferrtus-fe-drops.jpg",
    specifications: "Product: Ferrtus-Fe Drops | Segment: Pediatric care | Use: Child-focused cough, cold and nutrition support | Supply: Pharmacy and clinical enquiry",
    availability: "Available on request",
    featured: false
  },
  {
    id: "ALB-036",
    name: "Albertus-CZ Syrup",
    category: "Respiratory Care",
    description: "Albertus-CZ Syrup is part of Albertus Pharma's Respiratory Care portfolio. Cough, cold, allergy, expectorant, and respiratory care support for pharmacy and clinical requirements.",
    imageUrl: "/assets/img/products/respiratory-care-albertus-cz-syrup.jpg",
    specifications: "Product: Albertus-CZ Syrup | Segment: Respiratory care | Use: Cough, cold, allergy and expectorant support | Supply: Pharmacy and seasonal planning enquiry",
    availability: "Available on request",
    featured: true
  },
  {
    id: "ALB-037",
    name: "Albertus-DB",
    category: "Respiratory Care",
    description: "Albertus-DB is part of Albertus Pharma's Respiratory Care portfolio. Cough, cold, allergy, expectorant, and respiratory care support for pharmacy and clinical requirements.",
    imageUrl: "/assets/img/products/respiratory-care-albertus-db.jpg",
    specifications: "Product: Albertus-DB | Segment: Respiratory care | Use: Cough, cold, allergy and expectorant support | Supply: Pharmacy and seasonal planning enquiry",
    availability: "Available on request",
    featured: false
  },
  {
    id: "ALB-038",
    name: "Albertus-LS Syrup",
    category: "Respiratory Care",
    description: "Albertus-LS Syrup is part of Albertus Pharma's Respiratory Care portfolio. Cough, cold, allergy, expectorant, and respiratory care support for pharmacy and clinical requirements.",
    imageUrl: "/assets/img/products/respiratory-care-albertus-ls-syrup.jpg",
    specifications: "Product: Albertus-LS Syrup | Segment: Respiratory care | Use: Cough, cold, allergy and expectorant support | Supply: Pharmacy and seasonal planning enquiry",
    availability: "Available on request",
    featured: false
  },
  {
    id: "ALB-039",
    name: "LORTUS-AM",
    category: "Respiratory Care",
    description: "LORTUS-AM is part of Albertus Pharma's Respiratory Care portfolio. Cough, cold, allergy, expectorant, and respiratory care support for pharmacy and clinical requirements.",
    imageUrl: "/assets/img/products/respiratory-care-lortus-am.jpg",
    specifications: "Product: LORTUS-AM | Segment: Respiratory care | Use: Cough, cold, allergy and expectorant support | Supply: Pharmacy and seasonal planning enquiry",
    availability: "Available on request",
    featured: false
  },
  {
    id: "ALB-040",
    name: "Urytus Sachets",
    category: "Urology",
    description: "Urytus Sachets is part of Albertus Pharma's Urology portfolio. Urinary tract and urology support in convenient dosage formats for patient-care requirements.",
    imageUrl: "/assets/img/products/urology-urytus-sachets.jpg",
    specifications: "Product: Urytus Sachets | Segment: Urology | Use: Urinary tract health support | Supply: Pharmacy and clinical enquiry",
    availability: "Available on request",
    featured: false
  },
  {
    id: "ALB-041",
    name: "Urytus Suspension",
    category: "Urology",
    description: "Urytus Suspension is part of Albertus Pharma's Urology portfolio. Urinary tract and urology support in convenient dosage formats for patient-care requirements.",
    imageUrl: "/assets/img/products/urology-urytus-suspension.jpg",
    specifications: "Product: Urytus Suspension | Segment: Urology | Use: Urinary tract health support | Supply: Pharmacy and clinical enquiry",
    availability: "Available on request",
    featured: true
  }
];

const CATEGORY_APPLICATIONS = {
  "Analgesics and Antipyretics": [
    "Pain and fever management",
    "Clinic medicine supply",
    "Retail pharmacy distribution"
  ],
  "Antibiotics": [
    "Prescription-led therapy",
    "Hospital and clinic supply",
    "Distributor stock planning"
  ],
  "Bone and Joint Care": [
    "Bone strength support",
    "Orthopaedic clinic supply",
    "Wellness and pharmacy channels"
  ],
  "Gastrointestinal Care": [
    "Digestive health support",
    "Pharmacy supply",
    "Clinic requirements"
  ],
  "Gynae Care": [
    "Gynecology practice support",
    "Pregnancy and fertility wellness",
    "Women's health channels"
  ],
  "NeuroCare": [
    "Nerve health support",
    "Neuropathy care",
    "Clinical and pharmacy supply"
  ],
  "Nutraceuticals": [
    "Wellness channels",
    "Nutrition support",
    "Pharmacy distribution"
  ],
  "Onco": [
    "Specialty healthcare support",
    "Professional consultation supply",
    "Focused wellness requirements"
  ],
  "Pediatric Care": [
    "Pediatric care supply",
    "Child cough and cold support",
    "Clinic and pharmacy channels"
  ],
  "Respiratory Care": [
    "Cough and cold care",
    "Allergy and expectorant support",
    "Seasonal pharmacy planning"
  ],
  "Urology": [
    "Urinary tract support",
    "Urology clinic supply",
    "Pharmacy channel distribution"
  ]
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
  if (!url) return "/assets/img/hero-pharma-products.png";
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
