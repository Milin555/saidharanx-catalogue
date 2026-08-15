#!/usr/bin/env python3
"""
Generate every derived image the site needs.

    python build-images.py

Reads  : assets/sdx-*.jpg          (master photographs — keep these)
         assets/logo-alt.png       (client logo)
         assets/fonts/*.ttf        (brand fonts)
Writes : assets/img/sdx-XXXX-600.webp    catalogue cards
         assets/img/sdx-XXXX-1200.webp   product page + lightbox
         assets/img/sdx-XXXX-800.jpg     fallback for browsers without WebP
         assets/img/logo-96.png          header / footer logo
         assets/img/og.jpg               social preview card (WhatsApp, etc.)

Requires Pillow:  pip install pillow
"""
try:
    from PIL import Image, ImageDraw, ImageFont
except ImportError:
    raise SystemExit('Pillow is not installed.  Run:  pip install pillow')
import glob, os, pathlib, sys

ROOT   = pathlib.Path(__file__).parent
SRC    = ROOT / 'assets'
OUT    = SRC / 'img'
FONTS  = SRC / 'fonts'

CARD_W, DETAIL_W, FALLBACK_W = 600, 1200, 800
WEBP_QUALITY, JPEG_QUALITY   = 82, 80

# brand palette — keep in step with assets/site.css
AUBERGINE = (90, 31, 42)
CHAMPAGNE = (224, 205, 163)
IVORY     = (246, 241, 233)
GOLD      = (201, 162, 39)

# the hero style shown on the social card
OG_HERO = 'sdx-1412.jpg'


def brand_font(file, size, variation=None):
    """Load a brand font, optionally at a named weight."""
    path = FONTS / file
    if not path.exists():
        sys.exit(f'Missing font: {path}\n'
                 f'Download the four TTFs into assets/fonts/ — see README.')
    f = ImageFont.truetype(str(path), size)
    if variation:
        try:
            f.set_variation_by_name(variation)
        except Exception:
            pass
    return f


def build_products():
    masters = sorted(glob.glob(str(SRC / 'sdx-*.jpg')))
    if not masters:
        sys.exit('No master photographs found in assets/ (expected sdx-*.jpg)')

    before = after = 0
    for path in masters:
        sku = os.path.basename(path).replace('.jpg', '')
        before += os.path.getsize(path)
        im = Image.open(path).convert('RGB')

        for w in (CARD_W, DETAIL_W):
            h = round(im.height * w / im.width)
            dst = OUT / f'{sku}-{w}.webp'
            im.resize((w, h), Image.LANCZOS).save(dst, 'WEBP', quality=WEBP_QUALITY, method=6)
            after += dst.stat().st_size

        h = round(im.height * FALLBACK_W / im.width)
        dst = OUT / f'{sku}-{FALLBACK_W}.jpg'
        im.resize((FALLBACK_W, h), Image.LANCZOS).save(
            dst, 'JPEG', quality=JPEG_QUALITY, optimize=True, progressive=True)
        after += dst.stat().st_size

    card_set = sum((OUT / f'{os.path.basename(p).replace(".jpg","")}-{CARD_W}.webp').stat().st_size
                   for p in masters)
    print(f'  {len(masters)} products  ->  {len(masters)*3} derived files')
    print(f'  catalogue page downloads {card_set/1048576:.2f} MB '
          f'(masters were {before/1048576:.2f} MB)')


def build_logo():
    lg = Image.open(SRC / 'logo-alt.png').convert('RGBA')
    lg.resize((96, 96), Image.LANCZOS).save(OUT / 'logo-96.png', optimize=True)
    print('  logo-96.png')


def build_og_card():
    """1200x630 preview card — what WhatsApp shows when the link is pasted."""
    W, H, PANEL = 1200, 630, 480
    og = Image.new('RGB', (W, H), AUBERGINE)

    hero = Image.open(SRC / OG_HERO).convert('RGB')
    scale = max(PANEL / hero.width, H / hero.height)
    hs = hero.resize((round(hero.width * scale), round(hero.height * scale)), Image.LANCZOS)
    left, top = (hs.width - PANEL) // 2, int(hs.height * 0.10)
    og.paste(hs.crop((left, top, left + PANEL, top + H)), (W - PANEL, 0))

    d = ImageDraw.Draw(og)
    f_label = brand_font('Jost.ttf', 21, 'Regular')
    f_disp  = brand_font('PlayfairDisplay.ttf', 60, 'Medium')
    f_ital  = brand_font('PlayfairDisplay-Italic.ttf', 60, 'Medium Italic')
    f_body  = brand_font('EBGaramond.ttf', 27, 'Regular')

    d.text((80, 118), 'S A I D H A R A N X', font=f_label, fill=CHAMPAGNE)
    d.text((80, 176), 'Woven in Surat.',   font=f_disp, fill=IVORY)
    d.text((80, 252), 'Worn everywhere.',  font=f_ital, fill=CHAMPAGNE)
    d.line([(80, 356), (140, 356)], fill=GOLD, width=2)
    d.text((80, 392), 'Wholesale ethnic wear manufacturer', font=f_body, fill=(228, 216, 206))
    d.text((80, 430), 'Suit sets · Kurtis · Co-ord sets',   font=f_body, fill=(228, 216, 206))
    d.text((80, 512), 'TRADE ENQUIRIES  ·  +91 75676 17393', font=f_label, fill=CHAMPAGNE)

    lg = Image.open(SRC / 'logo-alt.png').convert('RGBA').resize((84, 84), Image.LANCZOS)
    og.paste(lg, (W - 84 - 40, H - 84 - 40), lg)

    og.save(OUT / 'og.jpg', 'JPEG', quality=88, optimize=True)
    print(f'  og.jpg ({(OUT / "og.jpg").stat().st_size // 1024} KB)')


if __name__ == '__main__':
    OUT.mkdir(parents=True, exist_ok=True)
    print('Building images...')
    build_products()
    build_logo()
    build_og_card()
    print('Done.')
