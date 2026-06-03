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

async function renderCategoriesPage() {
  const grid = document.querySelector("[data-categories-grid]");
  if (!grid) return;

  const products = await getProducts();
  grid.innerHTML = "";
  allCategories(products).forEach((category) => {
    const categoryProducts = products.filter((product) => product.category === category);
    const article = document.createElement("article");
    article.className = "category-panel";
    article.innerHTML = `
      <h2>${escapeHtml(category)}</h2>
      <p>${categoryProducts.length} product${categoryProducts.length === 1 ? "" : "s"} currently listed. Suitable for ${escapeHtml(productApplications(categoryProducts[0] || { category }).join(", ").toLowerCase())}.</p>
      <a class="text-link" href="/products/?category=${encodeURIComponent(category)}">Browse products</a>
    `;
    grid.appendChild(article);
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
