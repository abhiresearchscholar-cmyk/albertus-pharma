(function initGlobalUi() {
  if (window.location.pathname === "/index.html") {
    window.history.replaceState({}, "", `/${window.location.search}${window.location.hash}`);
  }

  const config = window.APP_CONFIG || {};
  document.querySelectorAll("[data-business-name]").forEach((node) => {
    node.textContent = config.businessName || "Albertus Pharma";
  });

  document.querySelectorAll("[data-current-year]").forEach((node) => {
    node.textContent = new Date().getFullYear();
  });

  const navToggle = document.querySelector("[data-nav-toggle]");
  const navMenu = document.querySelector("[data-nav-menu]");
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const expanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!expanded));
      navMenu.classList.toggle("is-open");
    });
  }

  const page = document.body.dataset.page;
  document.querySelectorAll(".nav-link").forEach((link) => {
    if (link.dataset.page === page) link.classList.add("is-active");
  });

  document.querySelectorAll("[data-email-general]").forEach((link) => {
    const message = `${config.emailGreeting || "Hello Albertus Pharma,"}\n\nI would like to know more about Albertus Pharma products and quotation support.`;
    link.href = generalEmailUrl(message);
    link.addEventListener("click", () => trackInquiry("general_email", "General enquiry"));
  });

  document.querySelectorAll("[data-catalogue-link]").forEach((link) => {
    link.href = config.catalogueUrl || "/assets/catalogue/albertus-pharma-catalogue.pdf";
  });

  const successMessage = document.querySelector("[data-form-success]");
  if (successMessage && new URLSearchParams(window.location.search).get("submitted") === "true") {
    successMessage.hidden = false;
  }

  const contactForm = document.querySelector("[data-contact-form]");
  if (contactForm) {
    contactForm.addEventListener("submit", () => {
      const form = new FormData(contactForm);
      trackInquiry("contact_form_submit", form.get("organization") || form.get("name") || "Contact form");
    });
  }

  if (config.googleAnalyticsId) injectAnalytics(config.googleAnalyticsId);
})();

function injectAnalytics(id) {
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(script);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  gtag("js", new Date());
  gtag("config", id);
}

function createProductCard(product) {
  const article = document.createElement("article");
  article.className = "product-card";
  article.dataset.category = product.category;
  article.innerHTML = `
    <a class="product-media" href="/product/?id=${encodeURIComponent(product.id)}" aria-label="View ${escapeHtml(product.name)}">
      <img src="${escapeAttribute(product.imageUrl)}" alt="${escapeAttribute(product.name)}" loading="lazy">
    </a>
    <div class="product-card-body">
      <div class="eyebrow">${escapeHtml(product.category)}</div>
      <h3><a href="/product/?id=${encodeURIComponent(product.id)}">${escapeHtml(product.name)}</a></h3>
      <p>${escapeHtml(product.description)}</p>
      <span class="availability">${escapeHtml(product.availability)}</span>
      <div class="button-row">
        <a class="button button-primary" href="${productQuoteUrl(product)}" data-product-quote="${escapeAttribute(product.name)}">Request Quote</a>
        <a class="button button-ghost" href="${productQuoteUrl(product)}" data-product-quote="${escapeAttribute(product.name)}">Email Enquiry</a>
      </div>
    </div>
  `;

  const img = article.querySelector("img");
  img.addEventListener("error", () => {
    img.src = "/assets/img/hero-pharma-products.png";
  });
  article.querySelectorAll("[data-product-quote]").forEach((link) => {
    link.addEventListener("click", () => trackInquiry("product_email", product.name));
  });
  return article;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

function escapeAttribute(value) {
  return escapeHtml(value).replace(/`/g, "&#096;");
}

function showState(target, message) {
  if (!target) return;
  target.innerHTML = `<div class="empty-state">${escapeHtml(message)}</div>`;
}

async function renderFeaturedProducts() {
  const grid = document.querySelector("[data-featured-products]");
  if (!grid) return;
  showState(grid, "Loading featured products...");
  const products = await getProducts();
  const featured = products.filter((product) => product.featured).slice(0, 4);
  const displayProducts = featured.length ? featured : products.slice(0, 4);
  grid.innerHTML = "";
  displayProducts.forEach((product) => grid.appendChild(createProductCard(product)));
}

async function renderCategoryHighlights() {
  const grid = document.querySelector("[data-category-highlights]");
  if (!grid) return;
  const products = await getProducts();
  const categories = allCategories(products);
  grid.innerHTML = "";
  categories.slice(0, 9).forEach((category) => {
    const count = products.filter((product) => product.category === category).length;
    const link = document.createElement("a");
    link.className = "category-tile";
    link.href = `/products/?category=${encodeURIComponent(category)}`;
    link.innerHTML = `<span>${escapeHtml(category)}</span><strong>${count} product${count === 1 ? "" : "s"}</strong>`;
    grid.appendChild(link);
  });
}

renderFeaturedProducts();
renderCategoryHighlights();
