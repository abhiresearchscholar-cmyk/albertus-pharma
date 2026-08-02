async function renderProductsPage() {
  const grid = document.querySelector("[data-products-grid]");
  const search = document.querySelector("[data-product-search]");
  const filters = document.querySelector("[data-category-filters]");
  const resultCount = document.querySelector("[data-result-count]");
  if (!grid || !search || !filters) return;

  showState(grid, "Loading products...");
  const products = await getProducts();
  const params = new URLSearchParams(window.location.search);
  let activeCategory = params.get("category") || "All";

  function renderFilters() {
    const categories = ["All", ...allCategories(products)];
    filters.innerHTML = "";
    categories.forEach((category) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "filter-chip";
      button.textContent = category;
      button.setAttribute("aria-pressed", String(category === activeCategory));
      button.addEventListener("click", () => {
        activeCategory = category;
        const url = new URL(window.location.href);
        if (category === "All") url.searchParams.delete("category");
        else url.searchParams.set("category", category);
        window.history.replaceState({}, "", url);
        render();
      });
      filters.appendChild(button);
    });
  }

  function render() {
    const query = search.value.trim().toLowerCase();
    const filtered = products.filter((product) => {
      const matchesCategory = activeCategory === "All" || product.category === activeCategory;
      const matchesSearch = [product.name, product.category, product.description].join(" ").toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });

    filters.querySelectorAll(".filter-chip").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.textContent === activeCategory));
    });
    if (resultCount) resultCount.textContent = `${filtered.length} product${filtered.length === 1 ? "" : "s"} found`;

    grid.innerHTML = "";
    if (!filtered.length) {
      showState(grid, "No products matched this search.");
      return;
    }
    filtered.forEach((product) => grid.appendChild(createProductCard(product)));
  }

  search.addEventListener("input", render);
  renderFilters();
  render();
}

async function renderProductDetailsPage() {
  const detail = document.querySelector("[data-product-detail]");
  const relatedGrid = document.querySelector("[data-related-products]");
  if (!detail) return;

  showState(detail, "Loading product details...");
  const products = await getProducts();
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id") || products[0]?.id;
  const product = products.find((item) => item.id === id) || products[0];

  if (!product) {
    showState(detail, "Product details are unavailable.");
    return;
  }

  document.title = `${product.name} | Albertus Pharma`;
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute("content", product.description);

  detail.innerHTML = `
    <div class="detail-media">
      <img src="${escapeAttribute(product.imageUrl)}" alt="${escapeAttribute(product.name)}">
      <button class="image-zoom-button image-zoom-button-detail" type="button" data-image-zoom data-image-src="${escapeAttribute(product.imageUrl)}" data-image-alt="${escapeAttribute(product.name)}" aria-label="View ${escapeAttribute(product.name)} image">
        <span class="lens-icon" aria-hidden="true"></span>
      </button>
    </div>
    <div class="detail-content">
      <div class="eyebrow">${escapeHtml(product.category)}</div>
      <h1>${escapeHtml(product.name)}</h1>
      <p class="lead">${escapeHtml(product.description)}</p>
      <span class="availability">${escapeHtml(product.availability)}</span>
      <div class="button-row">
        <a class="button button-primary" href="${productQuoteUrl(product)}" data-product-quote="${escapeAttribute(product.name)}">Email Enquiry</a>
        <a class="button button-secondary" href="/products/?category=${encodeURIComponent(product.category)}">View Category</a>
      </div>
      <div class="info-block">
        <h2>Specifications</h2>
        <ul>${productSpecs(product).map((spec) => `<li>${escapeHtml(spec)}</li>`).join("") || "<li>Specifications available on request.</li>"}</ul>
      </div>
      <div class="info-block">
        <h2>Applications</h2>
        <ul>${productApplications(product).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      </div>
    </div>
  `;

  detail.querySelector("img").addEventListener("error", (event) => {
    event.target.src = "/assets/img/hero-pharma-products.png";
    const zoom = detail.querySelector("[data-image-zoom]");
    if (zoom) zoom.dataset.imageSrc = event.target.src;
  });
  detail.querySelectorAll("[data-product-quote]").forEach((link) => {
    link.addEventListener("click", () => trackInquiry("product_email", product.name));
  });
  injectProductSchema(product);

  if (relatedGrid) {
    const related = products.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 3);
    relatedGrid.innerHTML = "";
    (related.length ? related : products.filter((item) => item.id !== product.id).slice(0, 3))
      .forEach((item) => relatedGrid.appendChild(createProductCard(item)));
  }
}

const CATEGORY_CATALOG = [
  {
    name: "Analgesics and Antipyretics",
    products: ["BROTYP-R", "D Patch 200"],
    summary: "Pain, inflammation, fever, and recovery support products for pharmacy and clinical channels."
  },
  {
    name: "Antibiotics",
    products: ["ALMOXICTUS-625", "LINZZOL-600 Tablets"],
    summary: "Antibacterial therapy products for prescription-led healthcare requirements."
  },
  {
    name: "Bone and Joint Care",
    products: ["CALBER-C2M Tablets", "Calber-D3 Nano Shot", "D Patch 200", "NERVTUS-NP"],
    summary: "Bone strength, vitamin D support, neuropathy support, and musculoskeletal care."
  },
  {
    name: "Gastrointestinal Care",
    products: ["Prozntus", "Prozntus Sachets", "VONOTUS-20 Tablets"],
    summary: "Digestive health and gut support products for gastrointestinal wellness."
  },
  {
    name: "Gynae Care",
    products: ["CALBER-C2M", "CALBER-C2M Tablets", "FERRTUS", "Mpatch", "OMEGATUS-E Capsules", "QNZYM-300"],
    summary: "Women's health, pregnancy support, fertility, nutrition, and wellness products."
  },
  {
    name: "NeuroCare",
    products: ["NERVTUS-M Capsules", "NERVTUS-NP"],
    summary: "Neuro-support products for neuropathy, nerve health, and related clinical needs."
  },
  {
    name: "Nutraceuticals",
    products: ["CALBER-C2M", "CURPITUS-P Capsules", "Calber-D3 Nano Shot", "Ferrtus Capsules", "NERVTUS-M Capsules", "NERVTUS-NP", "OMEGATUS-E Capsules", "Prozntus", "Prozntus Sachets", "QNZYM-300", "Urytus Sachets"],
    summary: "Nutritional, antioxidant, probiotic, vitamin, mineral, and wellness formulations."
  },
  {
    name: "Onco",
    products: ["CURPITUS-P Capsules"],
    summary: "Specialty wellness support products for focused healthcare needs."
  },
  {
    name: "Pediatric Care",
    products: ["Albertus-CZ Jnr", "Albertus-DB Syrup", "Albertus-LS Junior", "Ferrtus-Fe Drops"],
    summary: "Child-focused cough, cold, respiratory, and nutritional support products."
  },
  {
    name: "Respiratory Care",
    products: ["Albertus-CZ Syrup", "Albertus-DB", "Albertus-LS Syrup", "LORTUS-AM"],
    summary: "Cough, cold, allergy, expectorant, and respiratory care products."
  },
  {
    name: "Urology",
    products: ["Urytus Sachets", "Urytus Suspension"],
    summary: "Urinary tract and urology support products in convenient dosage formats."
  }
];

async function renderCategoriesPage() {
  const grid = document.querySelector("[data-categories-grid]");
  if (!grid) return;

  grid.innerHTML = "";
  CATEGORY_CATALOG.forEach((category) => {
    const article = document.createElement("article");
    article.className = "category-panel";
    const enquiryMessage = `${window.APP_CONFIG?.emailGreeting || "Hello Albertus Pharma,"}\n\nI would like to know more about the ${category.name} range.\n\nProducts of interest:\n${category.products.map((product) => `- ${product}`).join("\n")}\n\nPlease share catalogue, availability, and supply details.`;
    article.innerHTML = `
      <div class="category-panel-top">
        <span>${category.products.length} product${category.products.length === 1 ? "" : "s"}</span>
        <h2>${escapeHtml(category.name)}</h2>
      </div>
      <p>${escapeHtml(category.summary)}</p>
      <div class="category-product-list">
        ${category.products.map((product) => `<span>${escapeHtml(product)}</span>`).join("")}
      </div>
      <div class="category-actions">
        <a class="text-link" href="/products/?category=${encodeURIComponent(category.name)}">Browse products</a>
        <a class="text-link" href="${generalEmailUrl(enquiryMessage)}" data-category-enquiry="${escapeAttribute(category.name)}">Email enquiry</a>
      </div>
    `;
    grid.appendChild(article);
  });

  grid.querySelectorAll("[data-category-enquiry]").forEach((link) => {
    link.addEventListener("click", () => trackInquiry("category_email", link.dataset.categoryEnquiry));
  });
}

function injectProductSchema(product) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    category: product.category,
    description: product.description,
    image: product.imageUrl,
    brand: {
      "@type": "Brand",
    name: "Albertus Pharma"
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      seller: {
        "@type": "Organization",
        name: "Albertus Pharma"
      }
    }
  };
  const node = document.createElement("script");
  node.type = "application/ld+json";
  node.textContent = JSON.stringify(schema);
  document.head.appendChild(node);
}

renderProductsPage();
renderProductDetailsPage();
renderCategoriesPage();
