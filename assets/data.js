/* ══════════════════════════════════════════════════════════════════
   SaiDharaNx — catalogue data
   Single source of truth. index.html and product.html both read this.
   To update the catalogue, edit only this file.
   ══════════════════════════════════════════════════════════════════ */

const WHATSAPP = '917567617393';
const PHONE    = '+91 75676 17393';

const PRODUCTS = [
{
  sku:'SDX-1401', img:'sdx-1401.jpg', price:820, moq:12, moqUnit:'pcs',
  name:'Gaji Silk Ombre Embroidered 2-Piece Suit Set',
  desc:'Ombre-dyed gaji silk with tonal thread work. Kurti and pant.',
  type:'Suit Set', fabric:'Gaji Silk', work:'Embroidery',
  colour:'Ombre Rose', colours:['Ombre Rose','Ombre Blue','Ombre Green'],
  sizes:['M','L','XL','XXL'],
  spec:{
    'Top Design':'Straight-cut kurti, ombre-dyed gaji silk',
    'Neckline':'Round neck with tonal thread detail',
    'Sleeves':'Three-quarter, plain finish',
    'Bottom':'Matching gaji silk pant',
    'Dupatta':'Not included',
    'Wash Care':'Dry clean recommended'
  }
},
{
  sku:'SDX-1402', img:'sdx-1402.jpg', price:25230, moq:1, moqUnit:'lot of 30 pcs',
  name:'Maroon & Cream Ethnic Printed Suit with Dupatta',
  desc:'Full lot rate. Ethnic print on gaji silk, dupatta included.',
  type:'Suit Set', fabric:'Gaji Silk', work:'Digital Print',
  colour:'Maroon & Cream', colours:['Maroon & Cream'],
  sizes:['M','L','XL','XXL','3XL'],
  spec:{
    'Rate Type':'Full lot — 30 pieces assorted',
    'Top Design':'Ethnic digital print, straight cut',
    'Neckline':'V-neck with piping',
    'Sleeves':'Full sleeves',
    'Bottom':'Matching cream pant',
    'Dupatta':'Printed gaji silk dupatta included'
  }
},
{
  sku:'SDX-1403', img:'sdx-1403.jpg', price:2520, moq:6, moqUnit:'pcs',
  name:'Rose Pink Gaji Silk Designer Kurti Palazzo Set',
  desc:'Straight kurti with flared palazzo. Designer cut.',
  type:'Kurti', fabric:'Gaji Silk', work:'Designer',
  colour:'Rose Pink', colours:['Rose Pink','Dusty Lilac','Ivory'],
  sizes:['M','L','XL','XXL'],
  spec:{
    'Top Design':'Designer straight kurti, side slits',
    'Neckline':'Boat neck',
    'Sleeves':'Three-quarter with cuff',
    'Bottom':'Flared palazzo, matching fabric',
    'Dupatta':'Not included',
    'Wash Care':'Dry clean only'
  }
},
{
  sku:'SDX-1404', img:'sdx-1404.jpg', price:2100, moq:8, moqUnit:'pcs',
  name:'Dusty Rose Suit with Floral Embroidery',
  desc:'Raised floral work at yoke and hem. Three-piece with dupatta.',
  type:'Suit Set', fabric:'Gaji Silk', work:'Embroidery',
  colour:'Dusty Rose', colours:['Dusty Rose','Sage','Powder Blue'],
  sizes:['M','L','XL','XXL'],
  spec:{
    'Top Design':'Straight cut with raised floral appliqué',
    'Neckline':'V-neck, embroidered placket',
    'Sleeves':'Full sleeves',
    'Bottom':'Matching gaji silk pant',
    'Dupatta':'Plain matching dupatta with tassels',
    'Work Placement':'Yoke, hem and side panel'
  }
},
{
  sku:'SDX-1405', img:'sdx-1405.jpg', price:2100, moq:8, moqUnit:'pcs',
  name:'Black Gaji Silk Suit with Embroidered Dupatta',
  desc:'Black base, contrast embroidered dupatta. Festive weight.',
  type:'Suit Set', fabric:'Gaji Silk', work:'Embroidery',
  colour:'Black', colours:['Black','Wine','Bottle Green'],
  sizes:['M','L','XL','XXL','3XL'],
  spec:{
    'Top Design':'Straight cut, festive weight gaji silk',
    'Neckline':'Round neck with embroidered band',
    'Sleeves':'Full sleeves with embroidered cuffs',
    'Bottom':'Matching black pant',
    'Dupatta':'Contrast embroidered dupatta',
    'Work Placement':'Neckline, cuffs and dupatta border'
  }
},
{
  sku:'SDX-1406', img:'sdx-1406.jpg', price:1290, moq:12, moqUnit:'pcs',
  name:'Ivory White Gaji Silk Suit with Dupatta',
  desc:'Clean ivory finish. Moves fast through wedding season.',
  type:'Suit Set', fabric:'Gaji Silk', work:'Designer',
  colour:'Ivory', colours:['Ivory','Champagne','Blush'],
  sizes:['M','L','XL','XXL'],
  spec:{
    'Top Design':'Clean straight cut, no print',
    'Neckline':'Round neck with narrow piping',
    'Sleeves':'Three-quarter',
    'Bottom':'Matching ivory pant',
    'Dupatta':'Plain ivory dupatta',
    'Season':'Wedding and engagement wear'
  }
},
{
  sku:'SDX-1407', img:'sdx-1407.jpg', price:1290, moq:12, moqUnit:'pcs',
  name:'Embroidered 3-Piece Suit Set — Mint Green',
  desc:'Kurti, pant and dupatta. Sizes M to XXL.',
  type:'Suit Set', fabric:'Gaji Silk', work:'Embroidery',
  colour:'Mint Green', colours:['Mint Green','Mauve Purple','Mustard Yellow'],
  sizes:['M','L','XL','XXL'],
  spec:{
    'Top Design':'Straight cut with all-over thread embroidery',
    'Neckline':'Round neck',
    'Sleeves':'Three-quarter',
    'Bottom':'Matching pant',
    'Dupatta':'Embroidered edge dupatta',
    'Set Contents':'Kurti, pant, dupatta'
  }
},
{
  sku:'SDX-1408', img:'sdx-1408.jpg', price:1250, moq:12, moqUnit:'pcs',
  name:'Embroidered 2-Piece Suit Set — Sage Blue',
  desc:'All-over embroidery on a soft sage base.',
  type:'Suit Set', fabric:'Gaji Silk', work:'Embroidery',
  colour:'Sage Blue', colours:['Sage Blue','Mauve Purple'],
  sizes:['M','L','XL','XXL'],
  spec:{
    'Top Design':'Straight cut, all-over embroidery',
    'Neckline':'Round neck',
    'Sleeves':'Three-quarter',
    'Bottom':'Matching pant',
    'Dupatta':'Not included',
    'Set Contents':'Kurti, pant'
  }
},
{
  sku:'SDX-1409', img:'sdx-1409.jpg', price:1250, moq:12, moqUnit:'pcs',
  name:'Embroidered 2-Piece Suit Set — Mauve Purple',
  desc:'Same cut as SDX-1408 in mauve. Strong repeat seller.',
  type:'Suit Set', fabric:'Gaji Silk', work:'Embroidery',
  colour:'Mauve Purple', colours:['Mauve Purple','Sage Blue'],
  sizes:['M','L','XL','XXL'],
  spec:{
    'Top Design':'Straight cut, all-over embroidery',
    'Neckline':'Round neck',
    'Sleeves':'Three-quarter',
    'Bottom':'Matching pant',
    'Dupatta':'Not included',
    'Note':'Repeat order favourite — usually in stock'
  }
},
{
  sku:'SDX-1410', img:'sdx-1410.jpg', price:1350, moq:12, moqUnit:'pcs',
  name:'Embroidered 3-Piece Suit Set — Mauve Purple',
  desc:'Three-piece version with matching dupatta.',
  type:'Suit Set', fabric:'Gaji Silk', work:'Embroidery',
  colour:'Mauve Purple', colours:['Mauve Purple','Mustard Yellow','Mint Green'],
  sizes:['M','L','XL','XXL'],
  spec:{
    'Top Design':'Straight cut, all-over embroidery',
    'Neckline':'Round neck',
    'Sleeves':'Three-quarter',
    'Bottom':'Matching pant',
    'Dupatta':'Matching embroidered dupatta',
    'Set Contents':'Kurti, pant, dupatta'
  }
},
{
  sku:'SDX-1411', img:'sdx-1411.jpg', price:1350, moq:12, moqUnit:'pcs',
  name:'Embroidered 3-Piece Suit Set — Mustard Yellow',
  desc:'Festive colourway. Dupatta included.',
  type:'Suit Set', fabric:'Gaji Silk', work:'Embroidery',
  colour:'Mustard Yellow', colours:['Mustard Yellow','Mauve Purple','Mint Green'],
  sizes:['M','L','XL','XXL'],
  spec:{
    'Top Design':'Straight cut, all-over embroidery',
    'Neckline':'Round neck',
    'Sleeves':'Three-quarter',
    'Bottom':'Matching pant',
    'Dupatta':'Matching embroidered dupatta',
    'Season':'Haldi and festive wear'
  }
},
{
  sku:'SDX-1412', img:'sdx-1412.jpg', price:2280, moq:8, moqUnit:'pcs',
  name:'3-Piece Suit with Dupatta — White & Turquoise',
  desc:'White base with turquoise embroidery. Heavier work.',
  type:'Suit Set', fabric:'Gaji Silk', work:'Embroidery',
  colour:'White & Turquoise', colours:['White & Turquoise','White & Coral'],
  sizes:['M','L','XL','XXL','3XL'],
  spec:{
    'Top Design':'White gaji silk with turquoise thread work',
    'Neckline':'Round neck with embroidered placket',
    'Sleeves':'Full sleeves with embroidered cuffs',
    'Bottom':'Matching white pant',
    'Dupatta':'Turquoise embroidered border dupatta',
    'Work Weight':'Heavy — occasion wear'
  }
},
{
  sku:'SDX-1413', img:'sdx-1413.jpg', price:1950, moq:8, moqUnit:'pcs',
  name:'Black & Beige Chevron Printed Kurta Set',
  desc:'Digital chevron print. Kurta with matching pant.',
  type:'Kurti', fabric:'Gaji Silk', work:'Digital Print',
  colour:'Black & Beige', colours:['Black & Beige','Navy & Ivory'],
  sizes:['M','L','XL','XXL'],
  spec:{
    'Top Design':'Digital chevron print, straight kurta',
    'Neckline':'Mandarin collar',
    'Sleeves':'Full sleeves',
    'Bottom':'Matching printed pant',
    'Dupatta':'Not included',
    'Print':'Digital — colour-fast'
  }
},
{
  sku:'SDX-1414', img:'sdx-1414.jpg', price:670, moq:24, moqUnit:'pcs',
  name:'Heavy Rayon Embroidered Kurti with Pant',
  desc:'Daily-wear weight. Fastest mover in the range.',
  type:'Kurti', fabric:'Rayon', work:'Embroidery',
  colour:'Assorted', colours:['Assorted per lot'],
  sizes:['M','L','XL','XXL','3XL'],
  spec:{
    'Top Design':'Straight kurti, chest embroidery',
    'Neckline':'Round neck with keyhole',
    'Sleeves':'Three-quarter',
    'Bottom':'Matching rayon pant',
    'Dupatta':'Not included',
    'Note':'Highest volume line — assorted colours per lot'
  }
},
{
  sku:'SDX-1415', img:'sdx-1415.jpg', price:1499, moq:12, moqUnit:'pcs',
  name:'Boutique Special Blue Anarkali — Hand Work',
  desc:'Hand-worked anarkali. Limited pieces per lot.',
  type:'Anarkali', fabric:'Rayon', work:'Handwork',
  colour:'Royal Blue', colours:['Royal Blue','Deep Maroon','Emerald'],
  sizes:['M','L','XL','XXL'],
  spec:{
    'Top Design':'Full-flare anarkali, floor length',
    'Neckline':'Round neck with hand-worked yoke',
    'Sleeves':'Full sleeves with worked cuffs',
    'Bottom':'Churidar',
    'Dupatta':'Matching dupatta included',
    'Work Placement':'Yoke, hem and sleeves — hand done',
    'Availability':'Limited pieces per lot'
  }
},
{
  sku:'SDX-1416', img:'sdx-1416.jpg', price:1499, moq:12, moqUnit:'pcs',
  name:'Premium Pure Cotton Floral Suit Set',
  desc:'Pure cotton, floral print. Summer and daily wear.',
  type:'Suit Set', fabric:'Cotton', work:'Digital Print',
  colour:'Floral Multi', colours:['Floral Multi','Indigo Floral'],
  sizes:['M','L','XL','XXL'],
  spec:{
    'Top Design':'Straight cut, floral digital print',
    'Neckline':'Round neck',
    'Sleeves':'Three-quarter',
    'Bottom':'Matching cotton pant',
    'Dupatta':'Cotton mul dupatta included',
    'Season':'Summer and daily wear'
  }
},
{
  sku:'SDX-1417', img:'sdx-1417.jpg', price:499, moq:24, moqUnit:'pcs',
  name:'Luxury Heavy Rayon Three Piece Set',
  desc:'Entry rate three-piece. Good margin at retail.',
  type:'Suit Set', fabric:'Rayon', work:'Designer',
  colour:'Assorted', colours:['Assorted per lot'],
  sizes:['M','L','XL','XXL'],
  spec:{
    'Top Design':'Straight kurti, printed rayon',
    'Neckline':'Round neck',
    'Sleeves':'Three-quarter',
    'Bottom':'Matching pant',
    'Dupatta':'Included',
    'Note':'Entry price point — strong retail margin'
  }
},
{
  sku:'SDX-1418', img:'sdx-1418.jpg', price:490, moq:24, moqUnit:'pcs',
  name:'Premium Heavy Rayon Designer Collection',
  desc:'Lowest rate in the range. Assorted colours per lot.',
  type:'Kurti', fabric:'Rayon', work:'Designer',
  colour:'Assorted', colours:['Assorted per lot'],
  sizes:['M','L','XL','XXL','3XL'],
  spec:{
    'Top Design':'Printed rayon kurti',
    'Neckline':'Round neck',
    'Sleeves':'Three-quarter',
    'Bottom':'Not included',
    'Dupatta':'Not included',
    'Note':'Lowest rate in the catalogue'
  }
},
{
  sku:'SDX-1419', img:'sdx-1419.jpg', price:1050, moq:12, moqUnit:'pcs',
  name:'Chinon Farshi Salwar Suit Collection',
  desc:'Chinon farshi salwar. Flowing drape, occasion wear.',
  type:'Suit Set', fabric:'Chinon', work:'Designer',
  colour:'Pastel Peach', colours:['Pastel Peach','Powder Blue','Mint'],
  sizes:['M','L','XL','XXL'],
  spec:{
    'Top Design':'Chinon kurti, Pakistani-style cut',
    'Neckline':'Round neck with front placket',
    'Sleeves':'Full sleeves',
    'Bottom':'Farshi salwar — wide flowing drape',
    'Dupatta':'Chinon dupatta included',
    'Season':'Occasion and party wear'
  }
},
{
  sku:'SDX-1420', img:'sdx-1420.jpg', price:670, moq:24, moqUnit:'pcs',
  name:'Rayon 22 KG Sleeveless Printed Dress',
  desc:'22 kg rayon, sleeveless printed dress. Co-ord friendly.',
  type:'Co-Ord Set', fabric:'Rayon', work:'Digital Print',
  colour:'Printed Multi', colours:['Printed Multi'],
  sizes:['M','L','XL','XXL'],
  spec:{
    'Top Design':'Sleeveless A-line dress, 22 kg rayon',
    'Neckline':'Square neck',
    'Sleeves':'Sleeveless',
    'Bottom':'Not applicable',
    'Dupatta':'Not included',
    'Note':'Pairs with matching shrug — ask for co-ord option'
  }
}
];

/* ── shared helpers ─────────────────────────────────────────── */
const inr      = n => '₹' + n.toLocaleString('en-IN');
const bySku    = s => PRODUCTS.find(p => p.sku === s);
const waLink   = (sku, name) =>
  `https://wa.me/${WHATSAPP}?text=` +
  encodeURIComponent(`Hello, please share the lot rate and stock for ${sku} — ${name}`);

/* colour chip approximations, for the swatch row on product pages */
const SWATCH = {
  'Ombre Rose':'#C98B96','Ombre Blue':'#8DA2BC','Ombre Green':'#8FA893',
  'Maroon & Cream':'#7A2733','Rose Pink':'#D08D9C','Dusty Lilac':'#B49AB5',
  'Ivory':'#EFE7DA','Dusty Rose':'#B98890','Sage':'#9CAE9C','Powder Blue':'#A8BDD1',
  'Black':'#26221F','Wine':'#5A1F2A','Bottle Green':'#28453A','Champagne':'#E2D2B6',
  'Blush':'#E4BFBD','Mint Green':'#A9C6B2','Mauve Purple':'#9B7E96','Mustard Yellow':'#C9A227',
  'Sage Blue':'#9AAFB8','White & Turquoise':'#7EC0C4','White & Coral':'#E4948A',
  'Black & Beige':'#3A342F','Navy & Ivory':'#2C3A54','Assorted':'#B0A69C',
  'Assorted per lot':'#B0A69C','Royal Blue':'#2F4E96','Deep Maroon':'#6B1F2E',
  'Emerald':'#1F6B4E','Floral Multi':'#C09A7E','Indigo Floral':'#4A5B8C',
  'Pastel Peach':'#E8BFA8','Mint':'#A9C6B2','Printed Multi':'#BFA48E'
};
const swatch = c => SWATCH[c] || '#B0A69C';
