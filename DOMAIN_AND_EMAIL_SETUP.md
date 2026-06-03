# Domain And Email Setup

## Website Domain

The site is prepared for:

```text
albertuspharma.com
```

The `CNAME` file already contains this domain, which GitHub Pages uses for the custom domain setting.

## GitHub Pages

1. Create a GitHub repository for this website.
2. Upload the contents of this `albertus-pharma` folder to the repository root.
3. Go to `Settings > Pages`.
4. Set source to `Deploy from a branch`.
5. Select `main` and `/root`.
6. Under `Custom domain`, enter:

```text
albertuspharma.com
```

7. Save.
8. After DNS is detected, enable `Enforce HTTPS`.

## GoDaddy DNS For GitHub Pages

In GoDaddy DNS, add or update these website records.

Root domain:

```text
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

WWW subdomain:

```text
Type: CNAME
Name: www
Value: YOUR_GITHUB_USERNAME.github.io
```

Replace `YOUR_GITHUB_USERNAME` with the GitHub account that owns the Pages site.

## Business Email

To create:

```text
info@albertuspharma.com
```

choose one email provider:

- GoDaddy Email / Microsoft 365: simplest if you want to buy email directly inside GoDaddy.
- Google Workspace: familiar Gmail inbox with your domain.
- Zoho Mail: often cost-effective for small business email.

After choosing a provider, create the mailbox `info`, then add the provider's MX, SPF, DKIM, and DMARC records in GoDaddy DNS. Do not invent these values: copy them from the provider dashboard because they can be account-specific.
