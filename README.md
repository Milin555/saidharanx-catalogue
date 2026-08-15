# SaiDharaNx — Wholesale Catalogue

Static site. No build step, no framework. Open `index.html` in a browser.

**Client:** SaiDharaNx (@saidharannx_official, 271K followers), Surat
**Pitch:** 271K Instagram followers with no bio link — this is the page that goes there.
**Reference:** structure and palette follow tryambakam.workssetu.com.

---

## Files

```
build-images.py                regenerates all derived images
build-pdf.py                   regenerates the catalogue PDF
index.html                     home + catalogue
product.html?sku=SDX-1404      one template, all 20 products
assets/
  data.js                      ← ALL product data lives here
  site.css                     ← shared styles + brand tokens
  saidharanx-catalogue.pdf     5-page PDF (regenerate — see below)
  logo.png, logo-alt.png       client logo (masters)
  sdx-14XX.jpg                 20 original photos (masters — keep these)
  fonts/                       Playfair Display, EB Garamond, Jost (used by
                               the site AND the PDF, so both match)
  img/
    sdx-XXXX-600.webp          catalogue cards
    sdx-XXXX-1200.webp         product page + lightbox
    sdx-XXXX-800.jpg           fallback for old browsers
    logo-96.png, og.jpg        header logo, social preview card
```

---

## ⚠️ Before it goes live — 3 required edits

**1. Set the real domain.** Search both HTML files for
`REPLACE-WITH-LIVE-DOMAIN.com` and replace with the actual host.
This appears in `og:image`, `canonical`, and the Organization schema.

**`og:image` will not work until this is done.** Social crawlers cannot
resolve a relative path — the WhatsApp preview card stays blank.
Test with <https://developers.facebook.com/tools/debug/>.

**2. Confirm the email address.** All email links were removed because
`info@saidharanx.com` was assumed, not verified. Once the client
confirms an address, add an Email button beside Call on the product
page and in the enquiry band.

**3. Analytics.** A commented-out GA4 block sits at the bottom of
`index.html`. Add the client's measurement ID and uncomment it — they
should be able to see whether the site produced enquiries.

---

## What is real vs. placeholder

| Field | Source |
|---|---|
| Prices | **Real** — from saidharanx.com |
| Product names | **Real** |
| Photographs | **Real** — downloaded from their server |
| Main colour | **Real** — taken from the product name |
| Address, phone, categories, logo | **Real** |
| Style numbers (SDX-14XX) | Placeholder |
| Sizes, MOQ | Placeholder — plausible for the category |
| Specs (neckline, sleeves, bottom…) | Placeholder |
| Alternate colourways | Placeholder |

**SDX-1402 at ₹25,230** is genuinely on their site but is far outside the
₹490–₹2,520 range of everything else. It's labelled "full lot of 30 pcs"
— that's an assumption. Worth asking the client about; noticing it makes
you look sharp.

---

## Updating the catalogue

Edit **`assets/data.js` only.** Category pills, counts, product pages,
related styles and the PDF all build themselves from that array.

Adding a product:

1. Add the object to `PRODUCTS` (copy an existing one).
2. Drop the photo in `assets/` as `sdx-XXXX.jpg`.
3. Run the image script (below) to generate the responsive set.
4. Regenerate the PDF (below).

---

## Regenerating images and the PDF

```bash
pip install pillow      # once
python build-images.py  # responsive WebP/JPEG set, og.jpg, logo-96.png
python build-pdf.py     # assets/saidharanx-catalogue.pdf
```

Both read from the **masters** in `assets/sdx-*.jpg` and the fonts in
`assets/fonts/` — don't delete either thinking `img/` replaced them.
`build-pdf.py` parses `assets/data.js`, so the PDF always matches the
site. Run both after adding or repricing a product.

---

## Rebranding for the next client

**Two edits.**

**1. Colours** — the token block at the top of `assets/site.css`:

```css
--aubergine: #5A1F2A;   /* primary   */
--gold:      #C9A227;   /* accent    */
--champagne: #E0CDA3;   /* gold on dark  */
--gold-soft: #9A7C3E;   /* gold on light — keep AA contrast */
--cream / --ivory / --ink / --muted / --line
```

Alternates:

```css
/* Charcoal & Blush */ --aubergine:#1C1C1C; --gold:#B08585; --champagne:#E4C9C9; --gold-soft:#8A5F5F;
/* Emerald & Ivory  */ --aubergine:#14532D; --gold:#C9A227; --champagne:#E0CDA3; --gold-soft:#9A7C3E;
```

**2. Products** — replace the `PRODUCTS` array in `assets/data.js`.

Then find-and-replace: brand name, `917567617393`, address, Instagram
handle, hero headline, and the trust-bar numbers.

---

## Accessibility & performance notes

- Skip link, focus-trapped mobile drawer, `aria-expanded`, Escape to close
- Text contrast passes WCAG AA (muted 5.4:1 on cream, footer 4.9:1 on ink)
- `lang="gu"` / `lang="hi"` on the Gujarati and Hindi order line
- Every image has `width`/`height` — no layout shift
- Hero is `fetchpriority="high"`; everything below is lazy
- Catalogue page weighs **0.97 MB** (was 2.21 MB before the WebP set)
- No `backdrop-filter` — it's expensive on low-end Android, which is
  what this audience browses on
- Print stylesheet included — buyers print product pages for partners
- Works without JavaScript to the extent of showing contact details

---

## Known limitations

- **One image per product.** Fashion buyers want multiple angles; their
  brother's site has thumbnails. Needs the client's photography.
- **Colourways are informational, not a selector.** Deliberate — a
  colour picker that doesn't change the photograph misleads buyers.
  Make it interactive once per-colour images exist.
- **Product pages share one URL** (`product.html?sku=`). Google renders
  JS so they will index, but separate static URLs are stronger. Needs a
  build step.
- **Header, footer and icon sprite are duplicated** across the two HTML
  files. A build step is the proper fix — deliberately not added yet, so
  that editing the HTML directly can't be silently overwritten.
- **The rate-list form hands off to WhatsApp; it stores nothing.** The
  buyer still has to press send inside WhatsApp. To collect leads
  properly, POST to a form endpoint (Formspree, Google Forms) alongside
  the handoff — see the comment in `index.html`.
- **`271K` and `150+` in the trust bar are hard-coded.** The follower
  count goes stale; `150+ trade partners` was inferred from the client's
  own site and is **unverified**. Confirm both with the client or cut them.

---

## Quoting

Don't quote until they've seen it.

| Package | Price |
|---|---|
| This catalogue site | ₹15,000 |
| Catalogue + full store redesign | ₹45,000 |
| Above + monthly product updates | ₹45,000 + ₹8,000/month |

50% advance, 50% on delivery.
