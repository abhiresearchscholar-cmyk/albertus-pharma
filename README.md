# Albertus Pharma Static Website

Professional static pharmaceutical products website for GitHub Pages.

## Structure

- `index.html` - home page
- `products.html` - dynamic product catalogue with search and filters
- `product.html` - product details page using `?id=Product ID`
- `categories.html` - category listing
- `about.html`, `clients.html`, `contact.html`
- `assets/css/styles.css` - responsive mobile-first styling
- `assets/js/config.js` - business settings, email, Google Sheet, Analytics
- `assets/js/products.js` - Google Sheets CSV loader and product utilities
- `assets/js/catalog.js` - products, categories, and details rendering
- `data/sample-products.csv` - sample Google Sheet columns
- `sitemap.xml`, `robots.txt` - SEO files

## Google Sheets Setup

Create a Google Sheet with these exact columns:

```text
Product ID, Product Name, Category, Description, Image URL, Specifications, Availability, Featured Product
```

Publish the sheet as CSV:

1. Open the Google Sheet.
2. Choose `File > Share > Publish to web`.
3. Select the product sheet tab.
4. Choose `Comma-separated values (.csv)`.
5. Copy the published CSV URL.
6. Paste it into `assets/js/config.js`:

```js
sheetCsvUrl: "https://docs.google.com/spreadsheets/d/e/YOUR_PUBLISHED_ID/pub?output=csv"
```

New rows appear automatically on the website when the public CSV updates. Product images can be direct Cloudinary URLs or public Google Drive share links.

## Email Enquiries

Product quote and contact form actions open an email draft addressed to:

```text
info@albertuspharma.com
```

Every product quote button opens an email with:

```text
Hello Albertus Pharma,

I would like a quotation for:

Product Name: [Product Name]

Please share pricing, availability, and delivery details.
```

## Google Analytics

Set `googleAnalyticsId` in `assets/js/config.js` to a GA4 measurement ID such as `G-XXXXXXXXXX`. Quote and contact form clicks send lead-generation events.

## GitHub Pages Deployment

1. Push the `albertus-pharma` folder to a GitHub repository.
2. In repository settings, enable GitHub Pages.
3. Select the branch and root folder that contains these files.
4. Set the custom domain to `albertuspharma.com`.
5. Configure DNS at GoDaddy using the records in `DOMAIN_AND_EMAIL_SETUP.md`.

## Local Preview

Run from this folder:

```bash
python3 -m http.server 5174
```

Then open `http://localhost:5174`.
