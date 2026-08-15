# Deploying

## Upload only these

```
index.html
product.html
assets/data.js
assets/site.css
assets/saidharanx-catalogue.pdf
assets/img/            (all of it — 60 derived images + og.jpg + logo-96.png)
```

That's roughly **6.5 MB**.

## Do NOT upload

| Path | Why |
|---|---|
| `assets/sdx-*.jpg` | 2.2 MB of master photographs. Build inputs only — the site serves `assets/img/` instead. |
| `assets/fonts/` | 1.5 MB of TTFs. Used only by `build-pdf.py`; the site loads fonts from Google's CDN. |
| `assets/logo.png` | Unused. `assets/img/logo-96.png` is what the pages reference. |
| `build-*.py`, `README.md`, `DEPLOY.md` | Source and docs. |

Uploading them costs about **3.9 MB** of dead weight and exposes the
client's full-resolution originals.

## Before the first upload

1. **Replace `REPLACE-WITH-LIVE-DOMAIN.com`** in `index.html` and
   `product.html` — it appears in `og:image`, `canonical`, and the
   Organization schema.

   The WhatsApp preview card **will not render** until `og:image` is an
   absolute URL. Verify at
   <https://developers.facebook.com/tools/debug/>.

2. **Confirm the client's email address**, then add an Email button
   beside Call on the product page and in the enquiry band. The
   previously-assumed `info@saidharanx.com` was removed because it was
   never verified.

3. **Add the GA4 measurement ID** to the commented block at the bottom
   of `index.html` and uncomment it.

4. **Confirm the trust-bar figures.** `271K` followers is accurate today
   but will drift; `150+ trade partners` was inferred from the client's
   own site and is **unverified**. Check both before they go live on the
   client's domain.

## Suggested hosts

Any static host works — there is no server, no database, no build step
at runtime.

- **Netlify / Vercel / Cloudflare Pages** — drag the folder in, free tier
  is ample, HTTPS and a domain included.
- **GitHub Pages** — free, but this repo is private; Pages on a private
  repo needs a paid plan.
- **The client's existing hosting** — if they want it on a subdomain
  such as `catalogue.saidharanx.com`, plain FTP upload is fine.

## After deploying

Test on a real phone, not a desktop browser at narrow width:

- [ ] Hamburger opens the drawer; Escape and the × close it
- [ ] Tapping a product opens WhatsApp with the style number filled in
- [ ] Paste the link into a WhatsApp chat — the preview card appears
- [ ] The PDF downloads
- [ ] Tapping a product photo opens the zoom
