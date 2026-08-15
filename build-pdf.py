#!/usr/bin/env python3
"""
Generate the wholesale catalogue PDF, in the site's own typefaces.

    python build-pdf.py

Reads  : assets/data.js            (products — single source of truth)
         assets/sdx-*.jpg          (master photographs)
         assets/fonts/*.ttf        (brand fonts, same as the website)
Writes : assets/saidharanx-catalogue.pdf

Cover plus six products per page: style number, name, fabric, work,
rate and minimum order. Run this whenever data.js changes.

Requires Pillow:  pip install pillow
"""
from PIL import Image, ImageDraw, ImageFont
import re, pathlib, sys

ROOT  = pathlib.Path(__file__).parent
SRC   = ROOT / 'assets'
FONTS = SRC / 'fonts'
OUT   = SRC / 'saidharanx-catalogue.pdf'

W, H = 1240, 1754                       # A4 at 150 dpi

AUBERGINE = (90, 31, 42)
GOLD      = (154, 124, 62)              # --gold-soft, readable on cream
GOLD_DARK = (201, 162, 39)              # --gold, on dark
CHAMPAGNE = (224, 205, 163)
IVORY     = (246, 241, 233)
INK       = (36, 31, 28)
MUTED     = (110, 100, 92)
CREAM     = (250, 248, 244)
LINE      = (232, 225, 214)

PHONE   = '+91 75676 17393'
ADDRESS = 'Surat, Gujarat 395002'
PER_PAGE, COLS = 6, 3
CARD_W, IMG_H  = 340, 340
MARGIN_X, TOP  = 70, 250
GAP_X, GAP_Y   = 25, 60


def font(file, size, variation=None):
    path = FONTS / file
    if not path.exists():
        sys.exit(f'Missing font: {path}\nDownload the four TTFs into assets/fonts/ — see README.')
    f = ImageFont.truetype(str(path), size)
    if variation:
        try:
            f.set_variation_by_name(variation)
        except Exception:
            pass
    return f


# brand type scale
DISP     = lambda s: font('PlayfairDisplay.ttf', s, 'Regular')
DISP_MED = lambda s: font('PlayfairDisplay.ttf', s, 'Medium')
ITAL     = lambda s: font('PlayfairDisplay-Italic.ttf', s, 'Medium Italic')
SERIF    = lambda s: font('EBGaramond.ttf', s, 'Regular')
SANS     = lambda s: font('Jost.ttf', s, 'Regular')


def inr(n):
    s = str(n)
    if len(s) > 3:
        head, tail = s[:-3], s[-3:]
        head = re.sub(r'(\d)(?=(\d\d)+$)', r'\1,', head)
        s = head + ',' + tail
    return '₹' + s


def load_products():
    src = (SRC / 'data.js').read_text(encoding='utf-8')
    pattern = (r"sku:'(SDX-\d+)', img:'([^']+)', price:(\d+), moq:(\d+), moqUnit:'([^']+)',"
               r"\s*\n\s*name:'([^']+)',\s*\n\s*desc:'[^']*',"
               r"\s*\n\s*type:'([^']+)', fabric:'([^']+)', work:'([^']+)'")
    out = []
    for m in re.finditer(pattern, src):
        out.append(dict(sku=m.group(1), img=m.group(2), price=int(m.group(3)),
                        moq=int(m.group(4)), unit=m.group(5),
                        name=m.group(6).replace("\\'", "'"),
                        type=m.group(7), fabric=m.group(8), work=m.group(9)))
    if not out:
        sys.exit('Could not parse any products from assets/data.js')
    return out


def centre(d, y, text, f, fill):
    d.text(((W - d.textlength(text, font=f)) / 2, y), text, font=f, fill=fill)


def ellipsis(d, text, f, max_w):
    if d.textlength(text, font=f) <= max_w:
        return text
    while len(text) > 8 and d.textlength(text + '…', font=f) > max_w:
        text = text[:-1]
    return text + '…'


def cover():
    pg = Image.new('RGB', (W, H), AUBERGINE)
    d = ImageDraw.Draw(pg)

    hero = Image.open(SRC / 'sdx-1412.jpg').convert('RGB')
    band = 760
    hs = hero.resize((W, round(hero.height * W / hero.width)), Image.LANCZOS)
    pg.paste(hs.crop((0, int(hs.height * .06), W, int(hs.height * .06) + band)), (0, H - band))

    lg = Image.open(SRC / 'logo-alt.png').convert('RGBA').resize((150, 150), Image.LANCZOS)
    pg.paste(lg, (W // 2 - 75, 120), lg)

    centre(d, 322, 'S A I D H A R A N X',  SANS(25),     CHAMPAGNE)
    centre(d, 374, 'Woven in Surat.',      DISP_MED(62), IVORY)
    centre(d, 452, 'Worn everywhere.',     ITAL(62),     CHAMPAGNE)
    d.line([(W / 2 - 50, 572), (W / 2 + 50, 572)], fill=GOLD_DARK, width=2)
    centre(d, 606, 'WHOLESALE CATALOGUE  ·  2026', SANS(22), CHAMPAGNE)
    centre(d, 656, 'Manufacturer · Wholesaler · Exporter', SERIF(28), (222, 210, 200))
    centre(d, 758, f'Trade enquiries  ·  {PHONE}', SANS(22), CHAMPAGNE)
    centre(d, 802, ADDRESS, SANS(19), (192, 178, 170))
    return pg


def product_page(chunk, index, total):
    pg = Image.new('RGB', (W, H), CREAM)
    d = ImageDraw.Draw(pg)

    d.rectangle([0, 0, W, 150], fill=AUBERGINE)
    lg = Image.open(SRC / 'logo-alt.png').convert('RGBA').resize((70, 70), Image.LANCZOS)
    pg.paste(lg, (MARGIN_X, 40), lg)
    d.text((MARGIN_X + 88, 50), 'SaiDharaNx', font=DISP_MED(34), fill=IVORY)
    d.text((MARGIN_X + 88, 98), 'WHOLESALE CATALOGUE', font=SANS(15), fill=CHAMPAGNE)
    d.text((W - MARGIN_X - 230, 60), PHONE,   font=SANS(20), fill=CHAMPAGNE)
    d.text((W - MARGIN_X - 230, 92), ADDRESS, font=SANS(16), fill=(200, 184, 176))

    d.text((MARGIN_X, 186), 'RATES PER PIECE · EX-SURAT · MINIMUM ORDER SHOWN',
           font=SANS(15), fill=MUTED)
    d.line([(MARGIN_X, 214), (W - MARGIN_X, 214)], fill=LINE, width=1)

    for j, p in enumerate(chunk):
        col, row = j % COLS, j // COLS
        x = MARGIN_X + col * (CARD_W + GAP_X)
        y = TOP + row * (IMG_H + 130 + GAP_Y)

        im = Image.open(SRC / p['img']).convert('RGB')
        s = max(CARD_W / im.width, IMG_H / im.height)
        rs = im.resize((round(im.width * s), round(im.height * s)), Image.LANCZOS)
        ox = (rs.width - CARD_W) // 2
        oy = int(rs.height * .05)
        pg.paste(rs.crop((ox, oy, ox + CARD_W, oy + IMG_H)), (x, y))

        ty = y + IMG_H + 14
        d.text((x, ty), p['sku'], font=SANS(15), fill=GOLD)
        d.text((x, ty + 22), ellipsis(d, p['name'], SERIF(21), CARD_W), font=SERIF(21), fill=INK)
        d.text((x, ty + 54), f"{p['fabric']} · {p['work']}", font=SANS(15), fill=MUTED)
        d.line([(x, ty + 82), (x + CARD_W, ty + 82)], fill=LINE, width=1)
        d.text((x, ty + 92), inr(p['price']), font=DISP_MED(25), fill=AUBERGINE)
        moq = f"MIN {p['moq']} {p['unit'].upper()}"
        d.text((x + CARD_W - d.textlength(moq, font=SANS(15)), ty + 100), moq,
               font=SANS(15), fill=MUTED)

    label = f'{index} of {total}'
    d.line([(MARGIN_X, H - 80), (W - MARGIN_X, H - 80)], fill=LINE, width=1)
    d.text((MARGIN_X, H - 62), 'Wholesale only. Not a retail store.', font=SANS(15), fill=MUTED)
    d.text((W - MARGIN_X - d.textlength(label, font=SANS(15)), H - 62), label,
           font=SANS(15), fill=MUTED)
    return pg


if __name__ == '__main__':
    products = load_products()
    chunks = [products[i:i + PER_PAGE] for i in range(0, len(products), PER_PAGE)]
    pages = [cover()] + [product_page(c, i + 1, len(chunks)) for i, c in enumerate(chunks)]
    pages[0].save(OUT, 'PDF', resolution=150, save_all=True, append_images=pages[1:])
    print(f'{OUT.name}: {len(products)} products, {len(pages)} pages, '
          f'{OUT.stat().st_size // 1024} KB')
