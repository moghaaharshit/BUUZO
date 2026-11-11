/* ==========================================================================
   BUUZO — Shop the vibe. Love the style.
   Vanilla JS storefront: catalog, cart, wishlist, search, filters,
   product detail, checkout and order confirmation.
   ========================================================================== */
(function () {
  'use strict';

  /* ---------------------------------------------------------------------
     1. Catalog
  --------------------------------------------------------------------- */
  const U = (id, w) => 'https://images.unsplash.com/photo-' + id + '?auto=format&fit=crop&w=' + (w || 760) + '&q=78';

  const PRODUCTS = [
    {
      id: 'bz-01', name: 'Cloud Nine Oversized Tee', category: 'Apparel',
      price: 1299, mrp: 1999, rating: 4.8, reviews: 324, sold: 2310,
      badge: 'Bestseller', badgeType: 'best', createdAt: 14,
      desc: 'Heavyweight 240 GSM cotton with a dropped shoulder and a boxy, lived-in fit.',
      story: 'Our signature Cloud Nine tee is cut from 240 GSM combed cotton that gets softer with every wash. Dropped shoulders, a boxy body and a ribbed neckline that keeps its shape — the one you will reach for on repeat.',
      img: ['1521572163474-6864f9cf17ab', '1583743814966-8936f5b7be1a', '1618354691373-d851c5c3a990'],
      colors: [{ n: 'Cream', h: '#F0E7D8' }, { n: 'Onyx', h: '#171717' }, { n: 'Lilac', h: '#C9BCF7' }],
      sizes: ['S', 'M', 'L', 'XL', 'XXL']
    },
    {
      id: 'bz-02', name: 'Cloud Street Sweatshirt', category: 'Apparel',
      price: 2499, mrp: 3999, rating: 4.9, reviews: 512, sold: 3180,
      badge: 'Trending', badgeType: 'trending', createdAt: 9,
      desc: 'Heavyweight brushed fleece crewneck with a relaxed, boxy cut and tonal embroidery.',
      story: 'Built from 420 GSM brushed cotton fleece with a ribbed crewneck and tonal BUUZO embroidery at the chest. Dropped shoulders and a slightly boxy body keep the silhouette modern without losing the comfort.',
      img: ['1620799140408-edc6dcb6d633', '1556821840-3a63f95609a7', '1523381210434-271e8be1f52b'],
      colors: [{ n: 'Cream', h: '#F0E7D8' }, { n: 'Onyx', h: '#171717' }, { n: 'Lilac', h: '#C9BCF7' }],
      sizes: ['S', 'M', 'L', 'XL', 'XXL']
    },
    {
      id: 'bz-03', name: 'Vibe Check Graphic Tee', category: 'Apparel',
      price: 999, mrp: 1499, rating: 4.7, reviews: 208, sold: 1420,
      badge: 'New', badgeType: 'new', createdAt: 2,
      desc: 'Puff-print graphic tee in a relaxed fit with a water-based ink finish.',
      story: 'A relaxed everyday tee with a raised puff-print graphic and a soft-hand water-based ink finish. Pre-shrunk cotton means the fit you buy is the fit you keep.',
      img: ['1576566588028-4147f3842f27', '1503341504253-dff4815485f1', '1618354691373-d851c5c3a990'],
      colors: [{ n: 'White', h: '#FFFFFF' }, { n: 'Onyx', h: '#171717' }, { n: 'Sunset', h: '#FF7849' }],
      sizes: ['S', 'M', 'L', 'XL']
    },
    {
      id: 'bz-04', name: 'Midnight Moto Jacket', category: 'Apparel',
      price: 3199, mrp: 4999, rating: 4.8, reviews: 146, sold: 860,
      badge: 'Limited', badgeType: 'new', createdAt: 18,
      desc: 'Buttery faux-leather moto jacket with an asymmetric zip and matte hardware.',
      story: 'A cropped moto jacket in butter-soft faux leather. Asymmetric zip, notched lapels and matte gunmetal hardware. Cut to hit just above the waist so it layers over everything.',
      img: ['1551028719-00167b16eac5', '1591047139829-d91aecb6caea', '1523381210434-271e8be1f52b'],
      colors: [{ n: 'Espresso', h: '#4B3628' }, { n: 'Sand', h: '#DCC9B0' }],
      sizes: ['XS', 'S', 'M', 'L', 'XL']
    },
    {
      id: 'bz-05', name: 'Terracotta Bomber Jacket', category: 'Apparel',
      price: 4499, mrp: 6999, rating: 4.6, reviews: 98, sold: 510,
      badge: 'New', badgeType: 'new', createdAt: 4,
      desc: 'Lightweight bomber in a warm terracotta with ribbed trims and a satin lining.',
      story: 'A clean, collarless bomber in a water-resistant matte shell. Ribbed cuffs and hem, satin lining and a warm terracotta tone that lifts every neutral outfit.',
      img: ['1591047139829-d91aecb6caea', '1551028719-00167b16eac5', '1475178626620-a4d074967452'],
      colors: [{ n: 'Onyx', h: '#171717' }, { n: 'Cream', h: '#F0E7D8' }],
      sizes: ['S', 'M', 'L', 'XL', 'XXL']
    },
    {
      id: 'bz-06', name: 'Retro Wash Straight Denim', category: 'Apparel',
      price: 2899, mrp: 4299, rating: 4.7, reviews: 174, sold: 990,
      badge: '', badgeType: '', createdAt: 30,
      desc: 'Mid-wash straight-leg denim with a vintage fade and a clean hem.',
      story: 'A straight-leg jean in rigid mid-wash denim with an authentic vintage fade. Sits at the natural waist, falls clean over sneakers and holds its shape all day.',
      img: ['1475178626620-a4d074967452', '1544022613-e87ca75a784a', '1541099649105-f69ad21f3246'],
      colors: [{ n: 'Denim', h: '#5E7EA8' }, { n: 'Washed Black', h: '#3A3A3A' }],
      sizes: ['28', '30', '32', '34', '36']
    },
    {
      id: 'bz-07', name: 'Off-Duty Distressed Denim', category: 'Apparel',
      price: 2199, mrp: 3299, rating: 4.5, reviews: 231, sold: 1180,
      badge: 'Bestseller', badgeType: 'best', createdAt: 21,
      desc: 'Relaxed denim with hand-finished distressing and a faded vintage wash.',
      story: 'Relaxed through the leg with hand-finished distressing at the knee. A faded vintage wash and a hint of stretch mean it feels broken-in from the first wear.',
      img: ['1541099649105-f69ad21f3246', '1544022613-e87ca75a784a', '1475178626620-a4d074967452'],
      colors: [{ n: 'Indigo', h: '#3E5C86' }, { n: 'Washed Black', h: '#3A3A3A' }],
      sizes: ['26', '28', '30', '32', '34', '36']
    },
    {
      id: 'bz-08', name: 'Hype Runner Sneakers', category: 'Footwear',
      price: 3999, mrp: 5999, rating: 4.8, reviews: 689, sold: 4210,
      badge: 'Bestseller', badgeType: 'best', createdAt: 11,
      desc: 'Chunky performance runners with a sculpted midsole and breathable mesh.',
      story: 'A statement runner with a sculpted foam midsole, breathable engineered mesh upper and reflective heel detailing. Light enough for all-day wear, loud enough to finish the fit.',
      img: ['1542291026-7eec264c27ff', '1549298916-b41d501d3772', '1560343090-f0409e92791a'],
      colors: [{ n: 'Solar Red', h: '#E5443C' }, { n: 'Triple White', h: '#F4F1EC' }, { n: 'Onyx', h: '#171717' }],
      sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11']
    },
    {
      id: 'bz-09', name: 'Court Classic Sneakers', category: 'Footwear',
      price: 2799, mrp: 3999, rating: 4.7, reviews: 421, sold: 2640,
      badge: '', badgeType: '', createdAt: 26,
      desc: 'Low-top leather sneakers with a cupsole and tonal stitching.',
      story: 'The clean court sneaker, done properly. Smooth leather upper, cushioned cupsole and tonal stitching that works with denim, tailoring, everything.',
      img: ['1600185365483-26d7a4cc7519', '1491553895911-0055eca6402d', '1549298916-b41d501d3772'],
      colors: [{ n: 'Triple White', h: '#F4F1EC' }, { n: 'Cream', h: '#E8DDC9' }],
      sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10']
    },
    {
      id: 'bz-10', name: 'Daybreak Chunky Trainers', category: 'Footwear',
      price: 3499, mrp: 4899, rating: 4.6, reviews: 287, sold: 1310,
      badge: 'New', badgeType: 'new', createdAt: 3,
      desc: 'Retro-futuristic trainers on an exaggerated EVA platform.',
      story: 'Layered suede and mesh panels on an exaggerated EVA platform. Cushioned insole and a padded collar keep the chunk feeling light.',
      img: ['1595950653106-6c9ebd614d3a', '1560343090-f0409e92791a', '1549298916-b41d501d3772'],
      colors: [{ n: 'Sand', h: '#DCC9B0' }, { n: 'Grey', h: '#9A9A9A' }, { n: 'Lilac', h: '#C9BCF7' }],
      sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11']
    },
    {
      id: 'bz-11', name: 'Everyday Low-Top Sneakers', category: 'Footwear',
      price: 1899, mrp: 2699, rating: 4.5, reviews: 356, sold: 1980,
      badge: '', badgeType: '', createdAt: 34,
      desc: 'Clean leather low-tops with a cushioned insole and vulcanised sole.',
      story: 'A clean leather low-top with a cushioned insole and vulcanised rubber sole. The kind of sneaker that goes with everything and only looks better with wear.',
      img: ['1549298916-b41d501d3772', '1491553895911-0055eca6402d', '1560343090-f0409e92791a'],
      colors: [{ n: 'Cream', h: '#EFE6D6' }, { n: 'Onyx', h: '#171717' }, { n: 'Sage', h: '#A9B49B' }],
      sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10']
    },
    {
      id: 'bz-12', name: 'City Pack Backpack', category: 'Bags',
      price: 2299, mrp: 3499, rating: 4.7, reviews: 312, sold: 1760,
      badge: '', badgeType: '', createdAt: 17,
      desc: 'Water-resistant 22L daypack with a padded laptop sleeve.',
      story: 'A 22 litre daypack in water-resistant recycled nylon. Padded 15-inch laptop sleeve, quick-access front pocket and a back panel that breathes on long commutes.',
      img: ['1553062407-98eeb64c6a62', '1584917865442-de89df76afd3', '1548036328-c9fa89d128fa'],
      colors: [{ n: 'Onyx', h: '#171717' }, { n: 'Sage', h: '#A9B49B' }],
      sizes: null
    },
    {
      id: 'bz-13', name: 'Bougie Mini Shoulder Bag', category: 'Bags',
      price: 2699, mrp: 3999, rating: 4.8, reviews: 188, sold: 1120,
      badge: 'Trending', badgeType: 'trending', createdAt: 7,
      desc: 'Quilted mini shoulder bag with a chain strap and gold hardware.',
      story: 'Small bag, main character energy. Quilted vegan leather, a chain-and-leather shoulder strap and brushed gold hardware. Fits your phone, cardholder and lipstick — nothing more.',
      img: ['1548036328-c9fa89d128fa', '1590874103328-eac38a683ce7', '1584917865442-de89df76afd3'],
      colors: [{ n: 'Onyx', h: '#171717' }, { n: 'Rose', h: '#E9B8C4' }, { n: 'Espresso', h: '#4B3628' }],
      sizes: null
    },
    {
      id: 'bz-14', name: 'Studio Top-Handle Bag', category: 'Bags',
      price: 1799, mrp: 2599, rating: 4.6, reviews: 142, sold: 760,
      badge: '', badgeType: '', createdAt: 29,
      desc: 'Structured top-handle bag in glossy vegan leather with a detachable strap.',
      story: 'A structured top-handle bag with a glossy finish and room for the daily essentials. Comes with a detachable crossbody strap so you can switch the mood in seconds.',
      img: ['1584917865442-de89df76afd3', '1590874103328-eac38a683ce7', '1548036328-c9fa89d128fa'],
      colors: [{ n: 'Cream', h: '#EFE6D6' }, { n: 'Onyx', h: '#171717' }],
      sizes: null
    },
    {
      id: 'bz-15', name: 'Aurora Chrono Watch', category: 'Accessories',
      price: 4299, mrp: 6499, rating: 4.9, reviews: 207, sold: 980,
      badge: 'Bestseller', badgeType: 'best', createdAt: 23,
      desc: 'Sapphire-glass chronograph on a brushed stainless steel bracelet.',
      story: 'A 40mm chronograph with a brushed stainless case, sapphire crystal glass and 50m water resistance. Japanese quartz movement and a bracelet you can size at home.',
      img: ['1523170335258-f5ed11844a49', '1524805444758-089113d48a6d', '1434056886845-dac89ffe9b56'],
      colors: [{ n: 'Silver', h: '#C9CCD1' }, { n: 'Gold', h: '#D8B26A' }, { n: 'Onyx', h: '#171717' }],
      sizes: null
    },
    {
      id: 'bz-16', name: 'Noir Minimal Watch', category: 'Accessories',
      price: 3199, mrp: 4799, rating: 4.7, reviews: 163, sold: 720,
      badge: '', badgeType: '', createdAt: 40,
      desc: 'Ultra-slim 36mm watch with a matte black dial and leather strap.',
      story: 'A 36mm ultra-slim case with a matte black dial, minimalist indices and a soft Italian leather strap. Quiet, precise and easy to wear every day.',
      img: ['1524805444758-089113d48a6d', '1434056886845-dac89ffe9b56', '1523170335258-f5ed11844a49'],
      colors: [{ n: 'Onyx', h: '#171717' }, { n: 'Espresso', h: '#4B3628' }],
      sizes: null
    },
    {
      id: 'bz-17', name: 'Sunburst Shades', category: 'Accessories',
      price: 1299, mrp: 1999, rating: 4.6, reviews: 274, sold: 1640,
      badge: 'Bestseller', badgeType: 'best', createdAt: 13,
      desc: 'Acetate sunglasses with UV400 gradient lenses.',
      story: 'Hand-finished acetate frames with UV400 gradient lenses and stainless spring hinges. Comes with a soft microfibre pouch that lives in your bag.',
      img: ['1511499767150-a48a237f0083', '1572635196237-14b3f281503f', '1577803645773-f96470509666'],
      colors: [{ n: 'Tortoise', h: '#8A5A32' }, { n: 'Onyx', h: '#171717' }],
      sizes: null
    },
    {
      id: 'bz-18', name: 'Retro Round Sunglasses', category: 'Accessories',
      price: 1499, mrp: 2299, rating: 4.5, reviews: 119, sold: 540,
      badge: 'New', badgeType: 'new', createdAt: 1,
      desc: 'Slim round frames with a metal bridge and tinted lenses.',
      story: 'Seventies-inspired round frames with a slim metal bridge and tinted nylon lenses. Light on the face, heavy on personality.',
      img: ['1572635196237-14b3f281503f', '1577803645773-f96470509666', '1511499767150-a48a237f0083'],
      colors: [{ n: 'Gold', h: '#D8B26A' }, { n: 'Silver', h: '#C9CCD1' }],
      sizes: null
    },
    {
      id: 'bz-19', name: 'Studio Cap', category: 'Accessories',
      price: 899, mrp: 1299, rating: 4.6, reviews: 198, sold: 1230,
      badge: '', badgeType: '', createdAt: 32,
      desc: 'Washed cotton six-panel cap with tonal BUUZO embroidery.',
      story: 'A six-panel washed cotton cap with an adjustable metal buckle and tonal BUUZO embroidery. Low profile, broken-in from day one.',
      img: ['1588850561407-ed78c282e89b', '1521369909029-2afed882baee'],
      colors: [{ n: 'Cream', h: '#EFE6D6' }, { n: 'Onyx', h: '#171717' }, { n: 'Sunset', h: '#FF7849' }],
      sizes: null
    },
    {
      id: 'bz-20', name: 'Gold Layer Necklace', category: 'Accessories',
      price: 1699, mrp: 2499, rating: 4.8, reviews: 233, sold: 1410,
      badge: '', badgeType: '', createdAt: 19,
      desc: '18k gold-plated double chain with a freshwater pearl detail.',
      story: 'A double-layer chain in 18k gold plating with a single freshwater pearl. Tarnish-resistant, hypoallergenic and made to be layered.',
      img: ['1611652022419-a9419f74343d', '1515562141207-7a88fb7ce338', '1599643478518-a784e5dc4c8f'],
      colors: [{ n: 'Gold', h: '#D8B26A' }, { n: 'Silver', h: '#C9CCD1' }],
      sizes: null
    },
    {
      id: 'bz-21', name: 'Solstice Eau de Parfum', category: 'Beauty',
      price: 2499, mrp: 3499, rating: 4.8, reviews: 301, sold: 1590,
      badge: 'Trending', badgeType: 'trending', createdAt: 6,
      desc: 'Amber, neroli and warm cedar. A 50ml parfum that lasts all day.',
      story: 'Sun-warmed amber and neroli over a base of cedar and musk. A 50ml eau de parfum with 20% concentration, blended in India and made to linger.',
      img: ['1592945403244-b3fbafd7f539', '1541643600914-78b084683601', '1585386959984-a4155224a1ad'],
      colors: [{ n: '50ml', h: '#E3CDA4' }],
      sizes: null
    },
    {
      id: 'bz-22', name: 'Bloom Body Mist', category: 'Beauty',
      price: 899, mrp: 1299, rating: 4.5, reviews: 176, sold: 870,
      badge: 'New', badgeType: 'new', createdAt: 5,
      desc: 'Peony and white musk body mist in a 150ml glass bottle.',
      story: 'Fresh peony, pear and white musk in a lightweight body mist. Layer it under Solstice for a longer-wearing signature.',
      img: ['1541643600914-78b084683601', '1585386959984-a4155224a1ad', '1592945403244-b3fbafd7f539'],
      colors: [{ n: '150ml', h: '#F3D9E4' }],
      sizes: null
    }
  ];

  const CATEGORIES = ['Apparel', 'Footwear', 'Bags', 'Accessories', 'Beauty'];
  const TRENDING_IDS = ['bz-02', 'bz-08', 'bz-01', 'bz-13', 'bz-17', 'bz-09', 'bz-15', 'bz-21'];
  const BEST_IDS = ['bz-01', 'bz-08', 'bz-15', 'bz-21'];
  const NEW_IDS = ['bz-03', 'bz-05', 'bz-10', 'bz-18'];
  const FLASH_IDS = ['bz-04', 'bz-08', 'bz-13', 'bz-17'];

  /* ---------------------------------------------------------------------
     1b. Backend config — Firebase (auth + Firestore) and Cloudinary
  --------------------------------------------------------------------- */
  const FIREBASE_CONFIG = {
    apiKey: 'AIzaSyCrmOl6trpvGD_vRl1eJhyo1ApMPthOXAw',
    authDomain: 'buuzo-2d6a5.firebaseapp.com',
    projectId: 'buuzo-2d6a5',
    storageBucket: 'buuzo-2d6a5.firebasestorage.app',
    messagingSenderId: '816845371028',
    appId: '1:816845371028:web:afba34a44fd1bc1ef0a681'
  };
  /* Unsigned uploads: the Cloudinary API secret never reaches the browser. */
  const CLOUDINARY = { cloudName: 'dm2qaizh9', uploadPreset: 'BUUZO SHOP' };
  const ADMIN_PASSWORD = 'buuzo@#123';
  const FREE_SHIPPING = 1499;
  const PROMO_CODE = 'BUUZO10';
  const MAX_QTY = 10;

  const INFO = {
    shipping: {
      title: 'Shipping & delivery',
      body: [
        'Orders are dispatched from our Bengaluru studio within 48 hours, Monday to Saturday.',
        'Standard delivery takes 2–4 business days across metros and 4–7 days for the rest of India.',
        'Shipping is free on all orders over ₹1,499. Below that, a flat ₹49 delivery fee applies.',
        'Every order ships with tracking, sent to your email and phone as soon as it leaves us.'
      ]
    },
    returns: {
      title: 'Returns & exchanges',
      body: [
        'Changed your mind? You have 30 days from delivery to return unused items in original condition.',
        'Start a return from your confirmation email or write to hello@buuzo.in with your order ID.',
        'Exchanges for a different size are free, once per order. Refunds land within 5–7 business days.',
        'Sale items are eligible for exchange or store credit within 14 days.'
      ]
    },
    'size-guide': {
      title: 'Size guide',
      body: [
        'Tops: S 36–38in chest, M 38–40in, L 40–42in, XL 42–44in, XXL 44–46in. Boxy fits run slightly large — size down for a closer fit.',
        'Bottoms: 26–36 waist in inches, high-rise wide leg. Inside leg 30in across all sizes.',
        'Footwear: true to size. If you are between sizes or have a wider foot, take the next size up.',
        'Bags and accessories are one size. Still unsure? Message our team and we will measure the exact piece for you.'
      ]
    },
    faq: {
      title: 'Frequently asked questions',
      body: [
        'How long does delivery take? 2–4 days in metros, 4–7 days elsewhere, dispatched within 48 hours.',
        'Do you ship internationally? Not yet — India only for now.',
        'Is cash on delivery available? Yes, on every order up to ₹10,000 with no extra fee.',
        'How do I use my 10% code? Add BUUZO10 at cart or checkout. One use per order.',
        'Can I change my order? Email us within 2 hours of placing it and we will do our best.'
      ]
    },
    track: {
      title: 'Track your order',
      body: [
        'Once your order is dispatched, the tracking link is emailed to you automatically.',
        'You can also reply to your order confirmation email with your order ID and we will send the latest status.',
        'Demo note: this storefront does not connect to a courier, so no live tracking is available here.'
      ]
    },
    story: {
      title: 'Our story',
      body: [
        'BUUZO started in 2023 with 40 oversized tees and one rule: never make anything boring.',
        'We design in Bengaluru, produce in small runs with partner units in Tiruppur and Noida, and restock only what people actually love.',
        'No seasonal treadmill. No endless colourways. Just well-made pieces with a point of view — and a wink.',
        'Shop the vibe. Love the style.'
      ]
    },
    sustainability: {
      title: 'Sustainability',
      body: [
        'Small runs mean less waste. We produce to demand and only restock proven pieces.',
        'Our tees and hoodies use organic or Better Cotton Initiative cotton; trims are recycled where possible.',
        'Packaging is plastic-free: recycled kraft mailers, paper tape and a compostable inner bag.',
        'We are not perfect. Every year we publish what changed and what still needs work.'
      ]
    },
    careers: {
      title: 'Careers',
      body: [
        'We are a small team of 14 designers, marketers and operators in Bengaluru.',
        'We hire for taste, speed and ownership — not job titles.',
        'Open roles this quarter: content creator, customer experience associate, production intern.',
        'Send work you are proud of to careers@buuzo.in. No cover letter needed.'
      ]
    },
    press: {
      title: 'Press',
      body: [
        'For interviews, samples and campaign assets, write to press@buuzo.in.',
        'Recent coverage: Vogue India (Emerging Labels), Grazia (Street Style Report), Elle (Drop 04 review).',
        'Brand assets and founder imagery are available on request.'
      ]
    },
    contact: {
      title: 'Talk to us',
      body: [
        'Email: hello@buuzo.in — we reply within one business day.',
        'Call or WhatsApp: +91 90000 12345, Monday to Saturday, 9am–9pm IST.',
        'Studio: 4th Floor, Randhir House, Indiranagar, Bengaluru 560038. Visits by appointment.',
        'Order issues? Include your BUZ order ID so we can move fast.'
      ]
    },
    privacy: {
      title: 'Privacy policy',
      body: [
        'We collect only what we need to fulfil your order: name, contact details and delivery address.',
        'Your data is never sold. Payment details are handled by our payment partner and never stored on our servers.',
        'Cart and wishlist preferences live in your own browser storage and can be cleared at any time.',
        'This demo storefront keeps all data on your device — nothing is transmitted to a server.'
      ]
    },
    terms: {
      title: 'Terms of service',
      body: [
        'By shopping with BUUZO you agree to provide accurate delivery information.',
        'Prices are in Indian Rupees and include applicable GST.',
        'This storefront is a demonstration: orders are simulated locally and no payment is captured.',
        'For the full commercial terms, contact hello@buuzo.in.'
      ]
    },
    cookies: {
      title: 'Cookie notice',
      body: [
        'We use a small amount of local storage to remember your bag, wishlist and applied promo code.',
        'No advertising or third-party tracking cookies are set by this storefront.',
        'Clearing your browser data removes your saved bag and wishlist.'
      ]
    }
  };

  /* ---------------------------------------------------------------------
     2. Helpers
  --------------------------------------------------------------------- */
  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));
  const money = (value) => '₹' + Math.round(value).toLocaleString('en-IN');
  const pct = (p) => Math.round(((p.mrp - p.price) / p.mrp) * 100);
  const clamp = (n, min, max) => Math.min(Math.max(n, min), max);
  const pad2 = (n) => String(n).padStart(2, '0');
  const debounce = (fn, wait) => {
    let t;
    return function () {
      const args = arguments;
      clearTimeout(t);
      t = setTimeout(() => fn.apply(null, args), wait);
    };
  };
  const escapeHtml = (str) => String(str).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  const store = {
    get(key, fallback) {
      try {
        const raw = localStorage.getItem('buuzo_' + key);
        return raw === null ? fallback : JSON.parse(raw);
      } catch (err) {
        return fallback;
      }
    },
    set(key, value) {
      try {
        localStorage.setItem('buuzo_' + key, JSON.stringify(value));
      } catch (err) {
        /* storage may be unavailable — the app keeps working in memory */
      }
    }
  };

  const productById = (id) => PRODUCTS.find((p) => p.id === id);
  const imgSrc = (src, width) => (/^https?:\/\//i.test(String(src || '')) ? String(src) : U(src, width || 760));
  const imgUrl = (product, index, width) => imgSrc(product.img[index] || product.img[0], width || 760);
  const starMarkup = (rating, cls) => {
    let html = '';
    for (let i = 1; i <= 5; i++) {
      const icon = rating >= i - 0.25 ? 'fa-solid fa-star' : rating >= i - 0.75 ? 'fa-solid fa-star-half-stroke' : 'fa-regular fa-star';
      html += '<i class="' + icon + '" aria-hidden="true"></i>';
    }
    return '<span class="stars ' + (cls || '') + '" aria-hidden="true">' + html + '</span>';
  };

  /* ---------------------------------------------------------------------
     3. State
  --------------------------------------------------------------------- */
  const state = {
    cart: Array.isArray(store.get('cart', [])) ? store.get('cart', []) : [],
    wishlist: Array.isArray(store.get('wishlist', [])) ? store.get('wishlist', []) : [],
    promo: store.get('promo', '') || '',
    filters: { cats: [], maxPrice: 5000, rating: false, sale: false, q: '' },
    sort: 'featured',
    lastOrder: store.get('lastOrder', null)
  };

  const views = ['home', 'shop', 'product', 'checkout', 'order'];
  const cartKey = (id, size, color) => id + '|' + (size || '-') + '|' + (color || '-');
  const getProduct = (id) => productById(id);
  const defaultSize = (p) => (p.sizes ? p.sizes[Math.min(1, p.sizes.length - 1)] : '');
  const defaultColor = (p) => (p.colors && p.colors.length ? p.colors[0].n : '');

  /* ---------------------------------------------------------------------
     4. Cart & wishlist engine
  --------------------------------------------------------------------- */
  function saveCart() {
    store.set('cart', state.cart);
    updateBadges();
    renderCart();
    renderCheckoutSummary();
  }

  function addToCart(id, qty, size, color) {
    const p = getProduct(id);
    if (!p) return false;
    if (!requireAuth('Sign in with Google to add pieces to your bag and check out.', () => addToCart(id, qty, size, color))) return false;
    qty = clamp(Number(qty) || 1, 1, MAX_QTY);
    const s = size === undefined || size === null ? defaultSize(p) : size;
    const c = color === undefined || color === null ? defaultColor(p) : color;
    const key = cartKey(id, s, c);
    const existing = state.cart.find((item) => item.key === key);
    if (existing) {
      existing.qty = clamp(existing.qty + qty, 1, MAX_QTY);
    } else {
      state.cart.push({ key, id, qty, size: s, color: c });
    }
    saveCart();
    pulseCartIcon();
    const variant = [s, c].filter(Boolean).join(' · ');
    toast('Added to bag — ' + escapeHtml(p.name) + (variant ? ' (' + escapeHtml(variant) + ')' : ''), {
      actionLabel: 'View bag',
      onAction: () => openDrawer('cart')
    });
    return true;
  }

  function changeQty(key, delta) {
    const item = state.cart.find((i) => i.key === key);
    if (!item) return;
    item.qty = clamp(item.qty + delta, 0, MAX_QTY);
    if (item.qty === 0) {
      state.cart = state.cart.filter((i) => i.key !== key);
    }
    saveCart();
  }

  function removeFromCart(key) {
    state.cart = state.cart.filter((i) => i.key !== key);
    saveCart();
    toast('Removed from your bag', { warn: true });
  }

  function cartTotals() {
    let subtotal = 0;
    let mrpTotal = 0;
    let count = 0;
    state.cart.forEach((item) => {
      const p = getProduct(item.id);
      if (!p) return;
      subtotal += p.price * item.qty;
      mrpTotal += p.mrp * item.qty;
      count += item.qty;
    });
    const delivery = subtotal === 0 || subtotal >= FREE_SHIPPING ? 0 : 49;
    const promoDiscount = state.promo === PROMO_CODE && subtotal > 0 ? Math.min(Math.round(subtotal * 0.1), 500) : 0;
    return {
      subtotal,
      savings: mrpTotal - subtotal,
      delivery,
      promoDiscount,
      total: Math.max(0, subtotal - promoDiscount + delivery),
      count
    };
  }

  function toggleWishlist(id) {
    const p = getProduct(id);
    if (!p) return;
    if (!requireAuth('Sign in with Google to save favourites to your wishlist.', () => toggleWishlist(id))) return;
    const index = state.wishlist.indexOf(id);
    const added = index === -1;
    if (added) state.wishlist.push(id);
    else state.wishlist.splice(index, 1);
    store.set('wishlist', state.wishlist);
    updateBadges();
    renderWishlist();
    syncWishlistButtons();
    toast(added ? 'Saved to wishlist — ' + escapeHtml(p.name) : 'Removed from wishlist', { warn: !added });
  }

  function syncWishlistButtons() {
    $$('[data-wish]').forEach((btn) => {
      const active = state.wishlist.includes(btn.dataset.wish);
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', String(active));
      btn.setAttribute('aria-label', (active ? 'Remove ' : 'Save ') + (btn.dataset.wishname || 'product') + (active ? ' from' : ' to') + ' wishlist');
      const icon = btn.querySelector('i');
      if (icon) icon.className = (active ? 'fa-solid' : 'fa-regular') + ' fa-heart';
    });
  }

  function updateBadges() {
    const totals = cartTotals();
    const wishCount = state.wishlist.length;
    const cartBadge = $('#cartCount');
    const wishBadge = $('#wishlistCount');
    if (cartBadge) {
      cartBadge.textContent = totals.count;
      cartBadge.dataset.count = totals.count;
    }
    if (wishBadge) {
      wishBadge.textContent = wishCount;
      wishBadge.dataset.count = wishCount;
    }
    const cartDrawerCount = $('#cartDrawerCount');
    if (cartDrawerCount) cartDrawerCount.textContent = totals.count;
    const wishDrawerCount = $('#wishlistDrawerCount');
    if (wishDrawerCount) wishDrawerCount.textContent = wishCount;

    const meter = $('#shipMeter');
    const meterText = $('#shipMeterText');
    const meterFill = $('#shipMeterFill');
    if (meter && meterText && meterFill) {
      const remaining = FREE_SHIPPING - totals.subtotal;
      if (totals.subtotal === 0) {
        meterText.textContent = 'Free shipping on orders over ' + money(FREE_SHIPPING);
        meterFill.style.width = '0%';
        meter.classList.remove('is-free');
      } else if (remaining > 0) {
        meterText.textContent = 'Add ' + money(remaining) + ' for free express shipping';
        meterFill.style.width = clamp((totals.subtotal / FREE_SHIPPING) * 100, 4, 100) + '%';
        meter.classList.remove('is-free');
      } else {
        meterText.innerHTML = '<i class="fa-solid fa-truck-fast" aria-hidden="true"></i> Free express shipping unlocked';
        meterFill.style.width = '100%';
        meter.classList.add('is-free');
      }
    }
  }

  function pulseCartIcon() {
    const badge = $('#cartCount');
    if (!badge) return;
    badge.classList.remove('is-pop');
    void badge.offsetWidth;
    badge.classList.add('is-pop');
  }

  /* ---------------------------------------------------------------------
     5. Product card rendering
  --------------------------------------------------------------------- */
  function badgeMarkup(p) {
    if (!p.badge) return '';
    const typeClass = p.badgeType ? ' pcard__badge--' + p.badgeType : '';
    return '<span class="pcard__badge' + typeClass + '">' + escapeHtml(p.badge) + '</span>';
  }

  function productCard(p, opts) {
    const options = opts || {};
    const wished = state.wishlist.includes(p.id);
    const alt = imgUrl(p, 1, 600);
    const claimed = options.stock ? clamp(34 + (p.sold % 55), 34, 92) : 0;
    return (
      '<article class="pcard" data-pid="' + p.id + '">' +
        '<div class="pcard__media">' +
          '<a class="pcard__link" href="#/product/' + p.id + '" aria-label="View ' + escapeHtml(p.name) + '">' +
            '<img src="' + imgUrl(p, 0, 640) + '" alt="' + escapeHtml(p.name) + '" loading="lazy" width="640" height="784">' +
            '<img class="pcard__img--alt" src="' + alt + '" alt="" loading="lazy" aria-hidden="true" width="640" height="784">' +
          '</a>' +
          '<div class="pcard__badges">' + badgeMarkup(p) + '</div>' +
          '<button type="button" class="pcard__wish' + (wished ? ' is-active' : '') + '" data-wish="' + p.id + '" data-wishname="' + escapeHtml(p.name) + '" aria-label="' + (wished ? 'Remove ' : 'Save ') + escapeHtml(p.name) + (wished ? ' from' : ' to') + ' wishlist" aria-pressed="' + wished + '">' +
            '<i class="' + (wished ? 'fa-solid' : 'fa-regular') + ' fa-heart" aria-hidden="true"></i>' +
          '</button>' +
          '<button type="button" class="pcard__quick" data-quick="' + p.id + '">' +
            '<i class="fa-solid fa-eye" aria-hidden="true"></i> Quick view' +
          '</button>' +
        '</div>' +
        '<div class="pcard__body">' +
          '<p class="pcard__cat">' + p.category + '</p>' +
          '<h3 class="pcard__name"><a href="#/product/' + p.id + '">' + escapeHtml(p.name) + '</a></h3>' +
          '<p class="pcard__rating">' + starMarkup(p.rating) + '<b>' + p.rating.toFixed(1) + '</b><span>(' + p.reviews + ')</span></p>' +
        '</div>' +
        '<div class="pcard__foot">' +
          '<div class="pcard__prices">' +
            '<span class="pcard__price">' + money(p.price) + '</span>' +
            '<span class="pcard__mrp"><s>' + money(p.mrp) + '</s><span class="pcard__off">' + pct(p) + '% off</span></span>' +
          '</div>' +
          '<button type="button" class="pcard__add" data-add="' + p.id + '" aria-label="Add ' + escapeHtml(p.name) + ' to bag">' +
            '<i class="fa-solid fa-plus" aria-hidden="true"></i>' +
          '</button>' +
        '</div>' +
        (options.stock
          ? '<div class="pcard__stock"><div class="pcard__stock-bar"><i style="width:' + claimed + '%"></i></div>' +
            '<div class="pcard__stock-label"><span><b>' + claimed + '%</b> claimed</span><span>' + (options.stockLabel || 'Ends soon') + '</span></div></div>'
          : '') +
      '</article>'
    );
  }

  function skeletonGrid(count) {
    let html = '';
    for (let i = 0; i < count; i++) {
      html += '<div class="skel-card" aria-hidden="true"><div class="skel skel--media"></div>' +
        '<div class="skel skel--line sk-40"></div><div class="skel skel--line sk-80"></div>' +
        '<div class="skel skel--line sk-60"></div></div>';
    }
    return html;
  }

  function renderProducts(container, products, opts) {
    if (!container) return;
    const options = opts || {};
    const token = String(Date.now() + Math.random());
    container.dataset.token = token;
    if (!container.dataset.ready) {
      container.innerHTML = skeletonGrid(Math.min(Math.max(products.length, 2), 8));
    }
    setTimeout(() => {
      if (container.dataset.token !== token) return;
      if (!products.length) {
        container.innerHTML = '';
        container.dataset.ready = '1';
        return;
      }
      container.innerHTML = products.map((p) => productCard(p, options)).join('');
      container.dataset.ready = '1';
      syncWishlistButtons();
    }, container.dataset.ready ? 40 : 360);
  }

  function initHomeGrids() {
    renderProducts($('#trendingGrid'), TRENDING_IDS.map(getProduct), {});
    renderProducts($('#bestGrid'), BEST_IDS.map(getProduct), { onDark: true });
    renderProducts($('#newGrid'), NEW_IDS.map(getProduct), {});
    renderProducts($('#flashGrid'), FLASH_IDS.map(getProduct), { stock: true, stockLabel: 'Flash price' });
  }

  /* ---------------------------------------------------------------------
     6. Drawers, modal, scrim
  --------------------------------------------------------------------- */
  const scrim = $('#scrim');
  let lastFocused = null;

  function overlayElements() {
    return $$('.drawer.is-open, .mobile-menu.is-open, .modal.is-open, .filters.is-open');
  }

  function refreshScrim() {
    if (!scrim) return;
    const open = overlayElements().length > 0;
    if (open) {
      scrim.hidden = false;
      document.body.classList.add('is-locked');
      requestAnimationFrame(() => scrim.classList.add('is-on'));
    } else {
      scrim.classList.remove('is-on');
      document.body.classList.remove('is-locked');
      window.setTimeout(() => {
        if (!overlayElements().length) scrim.hidden = true;
      }, 320);
    }
  }

  function lockDrawerState(el, isOpen) {
    if (!el) return;
    el.classList.toggle('is-open', isOpen);
    el.setAttribute('aria-hidden', String(!isOpen));
  }

  function openDrawer(which) {
    lastFocused = document.activeElement;
    lockDrawerState($('#cartDrawer'), which === 'cart');
    lockDrawerState($('#wishlistDrawer'), which === 'wishlist');
    closeMobileMenu(true);
    closeFilters(true);
    refreshScrim();
    const panel = which === 'cart' ? $('#cartDrawer') : $('#wishlistDrawer');
    if (panel) {
      const target = panel.querySelector('.drawer__close');
      if (target) setTimeout(() => target.focus({ preventScroll: true }), 220);
    }
  }

  function closeDrawers() {
    lockDrawerState($('#cartDrawer'), false);
    lockDrawerState($('#wishlistDrawer'), false);
  }

  function openModal(html) {
    const modal = $('#quickView');
    const body = $('#quickViewBody');
    if (!modal || !body) return;
    lastFocused = document.activeElement;
    body.innerHTML = html;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    closeDrawers();
    closeMobileMenu(true);
    closeFilters(true);
    refreshScrim();
    setTimeout(() => {
      const close = $('#quickViewBody .modal__close');
      if (close) close.focus({ preventScroll: true });
    }, 240);
  }

  function closeModal() {
    const modal = $('#quickView');
    if (!modal) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    refreshScrim();
    if (lastFocused && typeof lastFocused.focus === 'function') {
      lastFocused.focus({ preventScroll: true });
    }
  }

  function closeMobileMenu(silent) {
    const menu = $('#mobileMenu');
    if (!menu) return;
    menu.classList.remove('is-open');
    menu.setAttribute('aria-hidden', 'true');
    const toggle = $('#menuToggle');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
    if (!silent) refreshScrim();
  }

  function closeFilters(silent) {
    const panel = $('#filterPanel');
    if (!panel) return;
    panel.classList.remove('is-open');
    const toggle = $('#filterToggle');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
    if (!silent) refreshScrim();
  }

  function closeSearchPanels() {
    const sheet = $('#searchSheet');
    if (sheet) sheet.hidden = true;
    const st = $('#searchToggle');
    if (st) st.setAttribute('aria-expanded', 'false');
    $$('.search__panel').forEach((panel) => { panel.hidden = true; });
    $$('.search__input').forEach((input) => input.setAttribute('aria-expanded', 'false'));
  }

  function closeAllOverlays(silent) {
    closeDrawers();
    closeMobileMenu(true);
    closeFilters(true);
    const modal = $('#quickView');
    if (modal) {
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden', 'true');
    }
    const auth = $('#authModal');
    if (auth) {
      auth.classList.remove('is-open');
      auth.setAttribute('aria-hidden', 'true');
    }
    closeSearchPanels();
    refreshScrim();
    if (!silent && lastFocused && typeof lastFocused.focus === 'function') {
      lastFocused.focus({ preventScroll: true });
    }
  }

  /* ---------------------------------------------------------------------
     7. Toast
  --------------------------------------------------------------------- */
  function toast(message, opts) {
    const options = opts || {};
    const wrap = $('#toasts');
    if (!wrap) return;
    const el = document.createElement('div');
    el.className = 'toast' + (options.warn ? ' toast--warn' : '');
    el.innerHTML = '<i class="fa-solid ' + (options.warn ? 'fa-circle-exclamation' : 'fa-circle-check') + '" aria-hidden="true"></i>' +
      '<span>' + message + '</span>';
    if (options.actionLabel) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'toast__action';
      btn.textContent = options.actionLabel;
      btn.addEventListener('click', () => {
        if (typeof options.onAction === 'function') options.onAction();
        el.remove();
      });
      el.appendChild(btn);
    }
    wrap.appendChild(el);
    const life = options.duration || 3600;
    setTimeout(() => {
      el.classList.add('is-out');
      setTimeout(() => el.remove(), 320);
    }, life);
  }

  /* ---------------------------------------------------------------------
     8. Rendering: cart & wishlist
  --------------------------------------------------------------------- */
  function emptyState(icon, title, text, ctaLabel, ctaHref) {
    return (
      '<div class="empty">' +
        '<span class="empty__icon"><i class="fa-solid ' + icon + '" aria-hidden="true"></i></span>' +
        '<h3>' + title + '</h3>' +
        '<p>' + text + '</p>' +
        (ctaLabel ? '<a class="btn btn--primary" href="' + ctaHref + '" data-close-drawer>' + ctaLabel + '</a>' : '') +
      '</div>'
    );
  }

  function renderCart() {
    const body = $('#cartItems');
    const foot = $('#cartFoot');
    const meter = $('#shipMeter');
    if (!body) return;
    const totals = cartTotals();
    if (!state.cart.length) {
      body.innerHTML = emptyState('fa-bag-shopping', 'Your bag is feeling light', 'Add something you love — your future favourite is waiting.', 'Shop new arrivals', '#/shop?sort=new');
      if (foot) foot.hidden = true;
      if (meter) meter.hidden = true;
      return;
    }
    if (foot) foot.hidden = false;
    if (meter) meter.hidden = false;
    body.innerHTML = state.cart.map((item) => {
      const p = getProduct(item.id);
      if (!p) return '';
      const variant = [item.size, item.color].filter(Boolean).join(' · ');
      return (
        '<div class="citem" data-key="' + item.key + '">' +
          '<a class="citem__media" href="#/product/' + p.id + '" aria-label="View ' + escapeHtml(p.name) + '">' +
            '<img src="' + imgUrl(p, 0, 200) + '" alt="' + escapeHtml(p.name) + '" loading="lazy" width="200" height="250">' +
          '</a>' +
          '<div class="citem__body">' +
            '<a class="citem__name" href="#/product/' + p.id + '">' + escapeHtml(p.name) + '</a>' +
            (variant ? '<p class="citem__meta">' + escapeHtml(variant) + '</p>' : '<p class="citem__meta">' + p.category + '</p>') +
            '<div class="citem__row">' +
              '<div class="qty qty--sm">' +
                '<button type="button" data-qty="-1" data-key="' + item.key + '" aria-label="Decrease quantity of ' + escapeHtml(p.name) + '"><i class="fa-solid fa-minus" aria-hidden="true"></i></button>' +
                '<span aria-live="polite">' + item.qty + '</span>' +
                '<button type="button" data-qty="1" data-key="' + item.key + '" aria-label="Increase quantity of ' + escapeHtml(p.name) + '"' + (item.qty >= MAX_QTY ? ' disabled' : '') + '><i class="fa-solid fa-plus" aria-hidden="true"></i></button>' +
              '</div>' +
              '<span class="citem__price">' + money(p.price * item.qty) + '</span>' +
            '</div>' +
            '<button type="button" class="citem__remove" data-remove="' + item.key + '">Remove</button>' +
          '</div>' +
        '</div>'
      );
    }).join('');

    setMoney('#cartSubtotal', totals.subtotal);
    setMoney('#cartSavings', totals.savings);
    setMoney('#cartDelivery', totals.delivery === 0 ? 'Free' : money(totals.delivery));
    setMoney('#cartDiscount', '−' + money(totals.promoDiscount));
    setMoney('#cartTotal', totals.total);
    const discountRow = $('#cartDiscountRow');
    if (discountRow) discountRow.hidden = totals.promoDiscount === 0;
    syncPromoUI();
  }

  function setMoney(selector, value) {
    const el = $(selector);
    if (el) el.textContent = typeof value === 'number' ? money(value) : value;
  }

  function syncPromoUI() {
    const applied = state.promo === PROMO_CODE;
    const hint = $('#cartPromoHint');
    const coHint = $('#promoHint');
    const text = applied ? 'BUUZO10 applied — 10% off your order.' : '';
    [hint, coHint].forEach((el) => {
      if (!el) return;
      el.textContent = el === hint ? text : (applied ? 'BUUZO10 applied to your order.' : '');
      el.classList.toggle('is-error', false);
    });
    const cartPromo = $('#cartPromo');
    if (cartPromo) cartPromo.value = applied ? PROMO_CODE : '';
    const coPromo = $('#checkoutPromo');
    if (coPromo) coPromo.value = applied ? PROMO_CODE : '';
  }

  function promoError(message) {
    const hint = $('#cartPromoHint');
    if (hint) {
      hint.textContent = message;
      hint.classList.add('is-error');
    }
    const coHint = $('#promoHint');
    if (coHint) {
      coHint.textContent = message;
      coHint.classList.add('is-error');
    }
    toast(message, { warn: true });
  }

  function applyPromo(code) {
    const clean = String(code || '').trim().toUpperCase();
    if (!clean) {
      promoError('Enter a promo code first.');
      return;
    }
    if (clean !== PROMO_CODE) {
      promoError('That code is not valid. Try BUUZO10.');
      return;
    }
    state.promo = clean;
    store.set('promo', clean);
    saveCart();
    toast('Promo applied — 10% off (up to ₹500).');
  }

  function renderWishlist() {
    const body = $('#wishlistItems');
    if (!body) return;
    const items = state.wishlist.map(getProduct).filter(Boolean);
    if (!items.length) {
      body.innerHTML = emptyState('fa-heart', 'No favourites yet', 'Tap the heart on anything you love and it will live here.', 'Find your favourites', '#/shop');
      return;
    }
    body.innerHTML = items.map((p) => {
      const inCart = state.cart.some((item) => item.id === p.id);
      return (
        '<div class="citem">' +
          '<a class="citem__media" href="#/product/' + p.id + '" aria-label="View ' + escapeHtml(p.name) + '">' +
            '<img src="' + imgUrl(p, 0, 200) + '" alt="' + escapeHtml(p.name) + '" loading="lazy" width="200" height="250">' +
          '</a>' +
          '<div class="citem__body">' +
            '<a class="citem__name" href="#/product/' + p.id + '">' + escapeHtml(p.name) + '</a>' +
            '<p class="citem__meta">' + p.category + ' · ' + money(p.price) + '</p>' +
            '<div class="wish-item__actions">' +
              '<button type="button" class="btn btn--soft" data-move="' + p.id + '">' +
                '<i class="fa-solid fa-bag-shopping" aria-hidden="true"></i> ' + (inCart ? 'In bag' : 'Move to bag') +
              '</button>' +
              '<button type="button" class="citem__remove" data-wish="' + p.id + '" data-wishname="' + escapeHtml(p.name) + '">Remove</button>' +
            '</div>' +
          '</div>' +
        '</div>'
      );
    }).join('');
  }

  /* ---------------------------------------------------------------------
     9. Quick view
  --------------------------------------------------------------------- */
  const qv = { id: null, size: '', color: '', qty: 1 };

  function openQuickView(id) {
    const p = getProduct(id);
    if (!p) return;
    qv.id = id;
    qv.size = defaultSize(p);
    qv.color = defaultColor(p);
    qv.qty = 1;
    const wished = state.wishlist.includes(id);
    const html =
      '<button type="button" class="modal__close" data-close-modal aria-label="Close quick view"><i class="fa-solid fa-xmark" aria-hidden="true"></i></button>' +
      '<div class="qv">' +
        '<div class="qv__media"><img src="' + imgUrl(p, 0, 800) + '" alt="' + escapeHtml(p.name) + '" width="800" height="800"></div>' +
        '<div class="qv__body">' +
          '<p class="eyebrow"><span class="eyebrow__dot" aria-hidden="true"></span> ' + p.category + ' · ' + escapeHtml(p.badge || 'Just in') + '</p>' +
          '<h2 id="quickViewTitle">' + escapeHtml(p.name) + '</h2>' +
          '<div class="pdp__rating">' + starMarkup(p.rating) + '<b>' + p.rating.toFixed(1) + '</b><span>(' + p.reviews + ' reviews)</span></div>' +
          '<div class="qv__price-row"><span class="qv__price">' + money(p.price) + '</span><s class="qv__mrp">' + money(p.mrp) + '</s><span class="pdp__off">' + pct(p) + '% off</span></div>' +
          '<p class="qv__desc">' + escapeHtml(p.desc) + '</p>' +
          (p.colors && p.colors.length
            ? '<div><p class="qv__label">Colour: <span id="qvColorName">' + escapeHtml(qv.color) + '</span></p><div class="swatches">' +
              p.colors.map((c) => '<button type="button" class="swatch' + (c.n === qv.color ? ' is-active' : '') + '" style="background:' + c.h + '" data-qv-color="' + escapeHtml(c.n) + '" aria-label="' + escapeHtml(c.n) + '" aria-pressed="' + (c.n === qv.color) + '"></button>').join('') +
              '</div></div>'
            : '') +
          (p.sizes
            ? '<div><p class="qv__label">Size: <span id="qvSizeName">' + escapeHtml(qv.size) + '</span></p><div class="sizes">' +
              p.sizes.map((s) => '<button type="button" class="size' + (s === qv.size ? ' is-active' : '') + '" data-qv-size="' + escapeHtml(s) + '" aria-pressed="' + (s === qv.size) + '">' + escapeHtml(s) + '</button>').join('') +
              '</div></div>'
            : '') +
          '<div class="qv__row"><p class="qv__label">Quantity</p>' +
            '<div class="qty"><button type="button" data-qv-qty="-1" aria-label="Decrease quantity"><i class="fa-solid fa-minus" aria-hidden="true"></i></button>' +
            '<span id="qvQty">1</span>' +
            '<button type="button" data-qv-qty="1" aria-label="Increase quantity"><i class="fa-solid fa-plus" aria-hidden="true"></i></button></div>' +
          '</div>' +
          '<div class="qv__actions">' +
            '<button type="button" class="btn btn--primary" data-qv-add>Add to bag <i class="fa-solid fa-bag-shopping" aria-hidden="true"></i></button>' +
            '<button type="button" class="btn btn--ghost" data-wish="' + p.id + '" data-wishname="' + escapeHtml(p.name) + '" aria-pressed="' + wished + '">' +
              '<i class="' + (wished ? 'fa-solid' : 'fa-regular') + ' fa-heart" aria-hidden="true"></i>' + (wished ? 'Saved' : 'Save') +
            '</button>' +
          '</div>' +
          '<a class="qv__link" href="#/product/' + p.id + '">View full details <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a>' +
          '<p class="qv__perks"><span><i class="fa-solid fa-truck-fast" aria-hidden="true"></i> Free shipping over ₹1,499</span><span><i class="fa-solid fa-rotate-left" aria-hidden="true"></i> 30-day returns</span></p>' +
        '</div>' +
      '</div>';
    openModal(html);
  }

  /* ---------------------------------------------------------------------
     10. Product detail page
  --------------------------------------------------------------------- */
  const pdp = { id: null, size: '', color: '', qty: 1, imgIndex: 0 };

  function renderPDP(id) {
    const p = getProduct(id);
    const root = $('#productView');
    if (!p || !root) return;
    pdp.id = id;
    pdp.size = defaultSize(p);
    pdp.color = defaultColor(p);
    pdp.qty = 1;
    pdp.imgIndex = 0;

    $('#productCrumbCat').textContent = p.category;
    $('#productCrumbCat').setAttribute('href', '#/shop?cat=' + encodeURIComponent(p.category));
    $('#productCrumbName').textContent = p.name;

    const wished = state.wishlist.includes(id);
    const badgeRow = p.badge
      ? '<div class="pdp__badges"><span class="pcard__badge' + (p.badgeType ? ' pcard__badge--' + p.badgeType : '') + '">' + escapeHtml(p.badge) + '</span>' +
        (pct(p) >= 30 ? '<span class="pcard__badge pcard__badge--save">' + pct(p) + '% off</span>' : '') + '</div>'
      : (pct(p) >= 30 ? '<div class="pdp__badges"><span class="pcard__badge pcard__badge--save">' + pct(p) + '% off</span></div>' : '');

    root.innerHTML =
      '<div class="gallery">' +
        '<div class="gallery__main" id="galleryMain">' +
          '<img id="galleryImg" src="' + imgUrl(p, 0, 900) + '" alt="' + escapeHtml(p.name) + '" width="900" height="1024">' +
          '<div class="gallery__badges">' + badgeRow + '</div>' +
          '<button type="button" class="gallery__wish' + (wished ? ' is-active' : '') + '" data-wish="' + p.id + '" data-wishname="' + escapeHtml(p.name) + '" aria-pressed="' + wished + '">' +
            '<i class="' + (wished ? 'fa-solid' : 'fa-regular') + ' fa-heart" aria-hidden="true"></i>' +
          '</button>' +
          '<span class="gallery__zoom-hint"><i class="fa-solid fa-magnifying-glass-plus" aria-hidden="true"></i> Hover to zoom</span>' +
        '</div>' +
        '<div class="gallery__thumbs">' +
          p.img.map((img, i) =>
            '<button type="button" class="gallery__thumb' + (i === 0 ? ' is-active' : '') + '" data-thumb="' + i + '" aria-label="View image ' + (i + 1) + ' of ' + p.img.length + '">' +
              '<img src="' + imgSrc(img, 240) + '" alt="" aria-hidden="true" loading="lazy" width="240" height="240">' +
            '</button>'
          ).join('') +
        '</div>' +
      '</div>' +
      '<div class="pdp__info">' +
        '<p class="eyebrow" style="margin-bottom:0"><span class="eyebrow__dot" aria-hidden="true"></span> ' + p.category + ' · BUUZO ' + (p.badge ? escapeHtml(p.badge) : 'Original') + '</p>' +
        '<h1 class="pdp__title" id="productTitle">' + escapeHtml(p.name) + '</h1>' +
        '<div class="pdp__rating">' + starMarkup(p.rating) + '<b>' + p.rating.toFixed(1) + '</b><span>(' + p.reviews + ' reviews)</span><span class="dot" aria-hidden="true"></span>' +
          '<a href="#reviews">' + (p.sold > 999 ? (Math.round(p.sold / 100) / 10) + 'k' : p.sold) + ' sold</a></div>' +
        '<div class="pdp__price-row"><span class="pdp__price">' + money(p.price) + '</span>' +
          '<s class="pdp__mrp">' + money(p.mrp) + '</s><span class="pdp__off">Save ' + money(p.mrp - p.price) + ' (' + pct(p) + '%)</span></div>' +
        '<p class="pdp__tax">Inclusive of all taxes · Free shipping over ' + money(FREE_SHIPPING) + '</p>' +
        '<p class="pdp__desc">' + escapeHtml(p.story) + '</p>' +
        (p.colors && p.colors.length
          ? '<div class="pdp__block"><p class="pdp__label">Colour <span id="pdpColorName">' + escapeHtml(pdp.color) + '</span></p>' +
            '<div class="swatches">' + p.colors.map((c) =>
              '<button type="button" class="swatch' + (c.n === pdp.color ? ' is-active' : '') + '" style="background:' + c.h + '" data-color="' + escapeHtml(c.n) + '" aria-label="Colour ' + escapeHtml(c.n) + '" aria-pressed="' + (c.n === pdp.color) + '"></button>'
            ).join('') + '</div></div>'
          : '') +
        (p.sizes
          ? '<div class="pdp__block"><p class="pdp__label">Size <span id="pdpSizeName">' + escapeHtml(pdp.size) + '</span>' +
            '<button type="button" data-info="size-guide">Size guide</button></p>' +
            '<div class="sizes">' + p.sizes.map((s) =>
              '<button type="button" class="size' + (s === pdp.size ? ' is-active' : '') + '" data-size="' + escapeHtml(s) + '" aria-pressed="' + (s === pdp.size) + '">' + escapeHtml(s) + '</button>'
            ).join('') + '</div></div>'
          : '') +
        '<div class="pdp__block"><p class="pdp__label">Quantity</p>' +
          '<div class="qty"><button type="button" data-pdp-qty="-1" aria-label="Decrease quantity"><i class="fa-solid fa-minus" aria-hidden="true"></i></button>' +
          '<span id="pdpQty" aria-live="polite">1</span>' +
          '<button type="button" data-pdp-qty="1" aria-label="Increase quantity"><i class="fa-solid fa-plus" aria-hidden="true"></i></button></div></div>' +
        '<div class="pdp__actions">' +
          '<button type="button" class="btn btn--primary btn--lg" data-pdp-add>Add to bag <i class="fa-solid fa-bag-shopping" aria-hidden="true"></i></button>' +
          '<button type="button" class="btn btn--dark btn--lg" data-pdp-buy>Buy it now</button>' +
        '</div>' +
        '<div class="pdp__delivery">' +
          '<p class="pdp__delivery-title"><i class="fa-solid fa-location-dot" aria-hidden="true"></i> Check delivery</p>' +
          '<div class="pin-row"><label class="sr-only" for="pinInput">PIN code</label>' +
            '<input id="pinInput" type="text" inputmode="numeric" maxlength="6" placeholder="Enter 6-digit PIN code" autocomplete="postal-code">' +
            '<button type="button" class="btn btn--soft" data-pin-check>Check</button></div>' +
          '<p class="pdp__delivery-msg" id="pinResult" role="status" aria-live="polite">Free express delivery in 2–4 days.</p>' +
        '</div>' +
        '<div class="pdp__meta">' +
          '<span><i class="fa-solid fa-truck-fast" aria-hidden="true"></i> Free shipping over ₹1,499</span>' +
          '<span><i class="fa-solid fa-rotate-left" aria-hidden="true"></i> 30-day easy returns</span>' +
          '<span><i class="fa-solid fa-money-bill-wave" aria-hidden="true"></i> Cash on delivery</span>' +
        '</div>' +
        '<div class="pdp__accordion">' +
          '<details open><summary>Product details <i class="fa-solid fa-plus" aria-hidden="true"></i></summary>' +
            '<p>' + escapeHtml(p.story) + ' Category: ' + p.category + '. SKU: ' + p.id.toUpperCase() + '.</p></details>' +
          '<details><summary>Shipping &amp; returns <i class="fa-solid fa-plus" aria-hidden="true"></i></summary>' +
            '<p>Dispatched within 48 hours. Delivery in 2–4 business days for metros, 4–7 days elsewhere. Free returns within 30 days of delivery — items must be unworn with tags attached.</p></details>' +
          '<details><summary>Care instructions <i class="fa-solid fa-plus" aria-hidden="true"></i></summary>' +
            '<p>Machine wash cold inside out, do not bleach, tumble dry low. For fragrance and accessories, store away from direct sunlight.</p></details>' +
        '</div>' +
      '</div>';

    /* Gallery interactions */
    const main = $('#galleryMain');
    const mainImg = $('#galleryImg');
    $$('[data-thumb]', root).forEach((btn) => {
      btn.addEventListener('click', () => {
        const i = Number(btn.dataset.thumb);
        pdp.imgIndex = i;
        mainImg.src = imgUrl(p, i, 900);
        $$('[data-thumb]', root).forEach((b) => b.classList.toggle('is-active', b === btn));
      });
    });
    if (main && mainImg && window.matchMedia('(hover: hover)').matches) {
      main.addEventListener('mouseenter', () => main.classList.add('is-zooming'));
      main.addEventListener('mouseleave', () => {
        main.classList.remove('is-zooming');
        mainImg.style.transformOrigin = 'center';
      });
      main.addEventListener('mousemove', (e) => {
        const rect = main.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        mainImg.style.transformOrigin = x + '% ' + y + '%';
      });
    }

    /* Colours */
    $$('[data-color]', root).forEach((btn) => {
      btn.addEventListener('click', () => {
        pdp.color = btn.dataset.color;
        $$('[data-color]', root).forEach((b) => {
          const on = b === btn;
          b.classList.toggle('is-active', on);
          b.setAttribute('aria-pressed', String(on));
        });
        const label = $('#pdpColorName');
        if (label) label.textContent = pdp.color;
      });
    });

    /* Sizes */
    $$('[data-size]', root).forEach((btn) => {
      btn.addEventListener('click', () => {
        pdp.size = btn.dataset.size;
        $$('[data-size]', root).forEach((b) => {
          const on = b === btn;
          b.classList.toggle('is-active', on);
          b.setAttribute('aria-pressed', String(on));
        });
        const label = $('#pdpSizeName');
        if (label) label.textContent = pdp.size;
      });
    });

    /* Quantity */
    const qtyEl = $('#pdpQty');
    $$('[data-pdp-qty]', root).forEach((btn) => {
      btn.addEventListener('click', () => {
        pdp.qty = clamp(pdp.qty + Number(btn.dataset.pdpQty), 1, MAX_QTY);
        qtyEl.textContent = pdp.qty;
      });
    });

    /* Add / buy */
    const addBtn = $('[data-pdp-add]', root);
    if (addBtn) {
      addBtn.addEventListener('click', () => {
        addToCart(p.id, pdp.qty, pdp.size, pdp.color);
      });
    }
    const buyBtn = $('[data-pdp-buy]', root);
    if (buyBtn) {
      buyBtn.addEventListener('click', () => {
        addToCart(p.id, pdp.qty, pdp.size, pdp.color);
        navigate('#/checkout');
      });
    }

    /* PIN check */
    const pinCheck = $('[data-pin-check]', root);
    if (pinCheck) {
      pinCheck.addEventListener('click', () => {
        const input = $('#pinInput');
        const out = $('#pinResult');
        const value = (input.value || '').replace(/\D/g, '');
        if (value.length !== 6) {
          out.textContent = 'Please enter a valid 6-digit PIN code.';
          out.className = 'pdp__delivery-msg is-error';
          input.focus();
          return;
        }
        const eta = new Date();
        eta.setDate(eta.getDate() + 4);
        out.textContent = 'Delivering to ' + value + ' by ' + eta.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' }) + ' · Free express shipping';
        out.className = 'pdp__delivery-msg is-ok';
      });
      const pinInput = $('#pinInput');
      pinInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          pinCheck.click();
        }
      });
    }

    syncWishlistButtons();
    renderRelated(p);
  }

  function renderRelated(p) {
    const grid = $('#relatedGrid');
    if (!grid) return;
    const same = PRODUCTS.filter((item) => item.category === p.category && item.id !== p.id);
    const others = PRODUCTS.filter((item) => item.category !== p.category && item.id !== p.id);
    const list = same.concat(others).slice(0, 4);
    renderProducts(grid, list, {});
  }

  /* ---------------------------------------------------------------------
     11. Shop view: filters, sorting, search results
  --------------------------------------------------------------------- */
  function readShopParams(params) {
    state.filters = {
      cats: [],
      maxPrice: 5000,
      rating: false,
      sale: false,
      q: (params.get('q') || '').trim()
    };
    const cat = params.get('cat');
    if (cat) {
      cat.split(',').forEach((c) => {
        const match = CATEGORIES.find((x) => x.toLowerCase() === c.trim().toLowerCase());
        if (match && !state.filters.cats.includes(match)) state.filters.cats.push(match);
      });
    }
    state.sort = params.get('sort') || 'featured';
    const sortSelect = $('#sortSelect');
    if (sortSelect) {
      const allowed = Array.from(sortSelect.options).map((o) => o.value);
      if (!allowed.includes(state.sort)) state.sort = 'featured';
      sortSelect.value = state.sort;
    }
    const range = $('#priceRange');
    if (range) range.value = state.filters.maxPrice;
    syncFilterInputs();
  }

  function syncFilterInputs() {
    $$('#categoryFilters input').forEach((input) => {
      input.checked = state.filters.cats.includes(input.value);
    });
    const rating = $('#ratingFilter');
    if (rating) rating.checked = state.filters.rating;
    const sale = $('#dealFilter');
    if (sale) sale.checked = state.filters.sale;
    const range = $('#priceRange');
    if (range) range.value = state.filters.maxPrice;
    const output = $('#priceOutput');
    if (output) output.textContent = money(state.filters.maxPrice);
    CATEGORIES.forEach((c) => {
      const count = $(`[data-filter-count="${c}"]`);
      if (count) count.textContent = PRODUCTS.filter((p) => p.category === c).length;
    });
  }

  function filteredProducts() {
    let list = PRODUCTS.slice();
    const f = state.filters;
    if (f.cats.length) list = list.filter((p) => f.cats.includes(p.category));
    if (f.maxPrice < 5000) list = list.filter((p) => p.price <= f.maxPrice);
    if (f.rating) list = list.filter((p) => p.rating >= 4.5);
    if (f.sale) list = list.filter((p) => p.mrp > p.price);
    if (f.q) {
      const q = f.q.toLowerCase();
      list = list.filter((p) =>
        (p.name + ' ' + p.category + ' ' + p.desc + ' ' + p.colors.map((c) => c.n).join(' ')).toLowerCase().includes(q)
      );
    }
    switch (state.sort) {
      case 'new': list.sort((a, b) => a.createdAt - b.createdAt); break;
      case 'popular': list.sort((a, b) => b.sold - a.sold); break;
      case 'rating': list.sort((a, b) => b.rating - a.rating); break;
      case 'price-asc': list.sort((a, b) => a.price - b.price); break;
      case 'price-desc': list.sort((a, b) => b.price - a.price); break;
      case 'discount': list.sort((a, b) => pct(b) - pct(a)); break;
      default: break;
    }
    return list;
  }

  function renderShop() {
    const grid = $('#shopGrid');
    if (!grid) return;
    const list = filteredProducts();
    const f = state.filters;

    const title = $('#shopTitle');
    const crumb = $('#shopCrumb');
    if (title) {
      if (f.q) title.textContent = 'Results for “' + f.q + '”';
      else if (f.cats.length === 1) title.textContent = f.cats[0];
      else if (f.cats.length > 1) title.textContent = 'Filtered edit';
      else title.textContent = 'Shop all';
    }
    if (crumb) crumb.textContent = title ? title.textContent : 'Shop';
    const countEl = $('#shopCount');
    if (countEl) countEl.textContent = list.length + (list.length === 1 ? ' product' : ' products');

    syncFilterInputs();
    renderActiveFilters();

    if (!list.length) {
      grid.innerHTML =
        '<div class="empty" style="grid-column:1/-1">' +
          '<span class="empty__icon"><i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i></span>' +
          '<h3>Nothing matches that yet</h3>' +
          '<p>Try a different category, widen your price range or clear the filters.</p>' +
          '<button type="button" class="btn btn--primary" data-clear-all>Clear all filters</button>' +
        '</div>';
      grid.dataset.ready = '1';
      return;
    }

    renderProducts(grid, list, {});
  }

  function renderActiveFilters() {
    const wrap = $('#activeFilters');
    if (!wrap) return;
    const f = state.filters;
    const chips = [];
    f.cats.forEach((c) => chips.push('<span class="filter-chip">' + c + ' <button type="button" data-clear="cat:' + c + '" aria-label="Remove ' + c + ' filter"><i class="fa-solid fa-xmark" aria-hidden="true"></i></button></span>'));
    if (f.maxPrice < 5000) chips.push('<span class="filter-chip">Under ' + money(f.maxPrice) + ' <button type="button" data-clear="price" aria-label="Remove price filter"><i class="fa-solid fa-xmark" aria-hidden="true"></i></button></span>');
    if (f.rating) chips.push('<span class="filter-chip">4.5+ rated <button type="button" data-clear="rating" aria-label="Remove rating filter"><i class="fa-solid fa-xmark" aria-hidden="true"></i></button></span>');
    if (f.sale) chips.push('<span class="filter-chip">On sale <button type="button" data-clear="sale" aria-label="Remove sale filter"><i class="fa-solid fa-xmark" aria-hidden="true"></i></button></span>');
    if (f.q) chips.push('<span class="filter-chip">“' + escapeHtml(f.q) + '” <button type="button" data-clear="q" aria-label="Clear search"><i class="fa-solid fa-xmark" aria-hidden="true"></i></button></span>');
    wrap.innerHTML = chips.join('');
  }

  function clearAllFilters() {
    state.filters = { cats: [], maxPrice: 5000, rating: false, sale: false, q: '' };
    state.sort = 'featured';
    const sortSelect = $('#sortSelect');
    if (sortSelect) sortSelect.value = 'featured';
    syncFilterInputs();
    renderShop();
  }

  /* ---------------------------------------------------------------------
     12. Search
  --------------------------------------------------------------------- */
  function searchMatches(query) {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return PRODUCTS.filter((p) =>
      (p.name + ' ' + p.category + ' ' + p.desc + ' ' + p.badge).toLowerCase().includes(q)
    ).sort((a, b) => {
      const aName = a.name.toLowerCase().indexOf(q);
      const bName = b.name.toLowerCase().indexOf(q);
      return (aName === -1 ? 99 : aName) - (bName === -1 ? 99 : bName);
    });
  }

  function suggestionMarkup(query, panel) {
    const matches = searchMatches(query).slice(0, 5);
    if (!matches.length) {
      return '<p class="search__empty">No matches for “' + escapeHtml(query) + '”. Try “hoodie”, “sneakers” or “perfume”.</p>';
    }
    return '<p class="search__label">Products</p>' +
      matches.map((p) =>
        '<button type="button" class="search-result" role="option" data-search-id="' + p.id + '">' +
          '<img src="' + imgUrl(p, 0, 120) + '" alt="" aria-hidden="true" loading="lazy" width="60" height="60">' +
          '<span class="search-result__body"><span class="search-result__name">' + escapeHtml(p.name) + '</span>' +
          '<span class="search-result__meta">' + p.category + ' · ' + money(p.price) + '</span></span>' +
          '<span class="search-result__price">' + p.rating.toFixed(1) + ' ★</span>' +
        '</button>'
      ).join('') +
      '<button type="button" class="search-result search-result--all" data-search-all="' + escapeHtml(query) + '">' +
        '<span>See all results for “' + escapeHtml(query) + '”</span><i class="fa-solid fa-arrow-right" aria-hidden="true"></i>' +
      '</button>';
  }

  function setupSearch(inputSelector, panelSelector) {
    const input = $(inputSelector);
    const panel = $(panelSelector);
    if (!input || !panel) return;

    const update = debounce(() => {
      const value = input.value.trim();
      if (!value) {
        panel.hidden = true;
        input.setAttribute('aria-expanded', 'false');
        return;
      }
      panel.innerHTML = suggestionMarkup(value, panel);
      panel.hidden = false;
      input.setAttribute('aria-expanded', 'true');
    }, 140);

    input.addEventListener('input', update);
    input.addEventListener('focus', () => {
      if (input.value.trim()) update();
    });
    input.addEventListener('keydown', (e) => {
      const items = $$('.search-result', panel);
      const active = panel.querySelector('.search-result.is-active');
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        if (!items.length) return;
        e.preventDefault();
        let index = items.indexOf(active);
        index = e.key === 'ArrowDown' ? index + 1 : index - 1;
        if (index < 0) index = items.length - 1;
        if (index >= items.length) index = 0;
        items.forEach((el) => el.classList.remove('is-active'));
        items[index].classList.add('is-active');
        items[index].scrollIntoView({ block: 'nearest' });
      } else if (e.key === 'Enter') {
        if (active) {
          e.preventDefault();
          if (active.dataset.searchId) navigate('#/product/' + active.dataset.searchId);
          else submitSearch(active.dataset.searchAll);
        }
      } else if (e.key === 'Escape') {
        panel.hidden = true;
        input.setAttribute('aria-expanded', 'false');
      }
    });

    const form = input.closest('form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        submitSearch(input.value);
      });
    }
  }

  function submitSearch(query) {
    const q = String(query || '').trim();
    if (!q) {
      const input = $('#searchInput') || $('#searchInputMobile');
      if (input) input.focus();
      return;
    }
    closeSearchPanels();
    navigate('#/shop?q=' + encodeURIComponent(q));
  }

  /* ---------------------------------------------------------------------
     13. Checkout & order
  --------------------------------------------------------------------- */
  function renderCheckoutSummary() {
    const wrap = $('#checkoutItems');
    if (!wrap) return;
    const totals = cartTotals();
    if (!state.cart.length) {
      wrap.innerHTML = '<p style="font-family:var(--font-alt);font-size:.84rem;color:var(--muted)">Your bag is empty.</p>';
    } else {
      wrap.innerHTML = state.cart.map((item) => {
        const p = getProduct(item.id);
        if (!p) return '';
        const variant = [item.size, item.color].filter(Boolean).join(' · ');
        return '<div class="summary-item">' +
          '<div class="summary-item__media"><img src="' + imgUrl(p, 0, 140) + '" alt="" aria-hidden="true" loading="lazy" width="70" height="84"><span>' + item.qty + '</span></div>' +
          '<div class="summary-item__body"><span class="summary-item__name">' + escapeHtml(p.name) + '</span>' +
          (variant ? '<span class="summary-item__meta">' + escapeHtml(variant) + '</span>' : '') + '</div>' +
          '<span class="summary-item__price">' + money(p.price * item.qty) + '</span>' +
        '</div>';
      }).join('');
    }
    setMoney('#coSubtotal', totals.subtotal);
    setMoney('#coSavings', totals.savings);
    setMoney('#coDelivery', totals.delivery === 0 ? 'Free' : money(totals.delivery));
    setMoney('#coDiscount', '−' + money(totals.promoDiscount));
    setMoney('#coTotal', totals.total);
    const row = $('#coDiscountRow');
    if (row) row.hidden = totals.promoDiscount === 0;
    const place = $('#placeOrder');
    if (place) {
      place.disabled = state.cart.length === 0;
      place.innerHTML = 'Place order · ' + money(totals.total) + ' <i class="fa-solid fa-lock" aria-hidden="true"></i>';
    }
  }

  const checkoutRules = {
    fullName: (v) => (v.trim().length >= 3 ? '' : 'Please enter your full name'),
    email: (v) => (/^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(v.trim()) ? '' : 'Enter a valid email address'),
    phone: (v) => (/^[6-9]\d{9}$/.test(v.replace(/\s|-/g, '')) ? '' : 'Enter a valid 10-digit mobile number'),
    address: (v) => (v.trim().length >= 10 ? '' : 'Add your building, street and area'),
    city: (v) => (v.trim().length >= 2 ? '' : 'Enter your city'),
    state: (v) => (v ? '' : 'Select your state'),
    pincode: (v) => (/^\d{6}$/.test(v.trim()) ? '' : 'Enter a valid 6-digit PIN code')
  };

  function setFieldError(name, message) {
    const input = $('#checkoutForm [name="' + name + '"]');
    const error = $('#err-' + name);
    if (input) input.setAttribute('aria-invalid', message ? 'true' : 'false');
    if (error) error.textContent = message;
  }

  function validateCheckout() {
    let firstInvalid = null;
    Object.keys(checkoutRules).forEach((name) => {
      const input = $('#checkoutForm [name="' + name + '"]');
      if (!input) return;
      const message = checkoutRules[name](input.value || '');
      setFieldError(name, message);
      if (message && !firstInvalid) firstInvalid = input;
    });
    return firstInvalid;
  }

  function makeOrderId() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let id = '';
    for (let i = 0; i < 6; i++) id += chars.charAt(Math.floor(Math.random() * chars.length));
    return 'BUZ-' + id;
  }

  function placeOrder(event) {
    event.preventDefault();
    if (!state.cart.length) {
      toast('Your bag is empty — add something first.', { warn: true });
      navigate('#/shop');
      return;
    }
    const invalid = validateCheckout();
    if (invalid) {
      toast('Please check the highlighted details.', { warn: true });
      invalid.focus();
      invalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    const data = new FormData($('#checkoutForm'));
    const totals = cartTotals();
    const eta = new Date();
    eta.setDate(eta.getDate() + 4);
    const order = {
      id: makeOrderId(),
      name: String(data.get('fullName') || '').trim(),
      email: String(data.get('email') || '').trim(),
      phone: String(data.get('phone') || '').trim(),
      address: String(data.get('address') || '').trim(),
      landmark: String(data.get('landmark') || '').trim(),
      city: String(data.get('city') || '').trim(),
      state: String(data.get('state') || '').trim(),
      pincode: String(data.get('pincode') || '').trim(),
      payment: data.get('payment') === 'online' ? 'Online payment (demo)' : 'Cash on delivery',
      items: state.cart.map((item) => {
        const p = getProduct(item.id);
        return { id: item.id, name: p ? p.name : 'Item', qty: item.qty, size: item.size, color: item.color, price: p ? p.price : 0 };
      }),
      totals,
      eta: eta.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' }),
      placedAt: new Date().toLocaleString('en-IN')
    };
    state.lastOrder = order;
    store.set('lastOrder', order);
    state.cart = [];
    state.promo = '';
    store.set('cart', []);
    store.set('promo', '');
    saveCart();
    updateBadges();
    renderOrder(order);
    navigate('#/order');
    toast('Order placed — thank you, ' + order.name.split(' ')[0] + '!');
  }

  function renderOrder(order) {
    if (!order) return;
    const set = (sel, value) => { const el = $(sel); if (el) el.textContent = value; };
    set('#orderName', order.name.split(' ')[0] || 'friend');
    set('#orderEmail', order.email);
    set('#orderId', order.id);
    set('#orderPayment', order.payment);
    set('#orderTotal', money(order.totals.total));
    set('#orderAddress', [order.address, order.landmark, order.city + ', ' + order.state + ' - ' + order.pincode].filter(Boolean).join(', '));
    set('#orderEta', order.eta);
    const items = $('#orderItems');
    if (items) {
      items.innerHTML = order.items.map((item) => {
        const p = getProduct(item.id);
        const variant = [item.size, item.color].filter(Boolean).join(' · ');
        return '<div class="summary-item">' +
          '<div class="summary-item__media">' + (p ? '<img src="' + imgUrl(p, 0, 140) + '" alt="" aria-hidden="true" loading="lazy" width="70" height="84">' : '') + '<span>' + item.qty + '</span></div>' +
          '<div class="summary-item__body"><span class="summary-item__name">' + escapeHtml(item.name) + '</span>' +
          (variant ? '<span class="summary-item__meta">' + escapeHtml(variant) + '</span>' : '') + '</div>' +
          '<span class="summary-item__price">' + money(item.price * item.qty) + '</span>' +
        '</div>';
      }).join('');
    }
  }

  function downloadReceipt() {
    const order = state.lastOrder;
    if (!order) {
      toast('No order to save yet.', { warn: true });
      return;
    }
    const lines = [
      'BUUZO — ORDER SUMMARY',
      'Shop the vibe. Love the style.',
      '',
      'Order ID: ' + order.id,
      'Placed: ' + order.placedAt,
      'Customer: ' + order.name,
      'Email: ' + order.email,
      'Phone: +91 ' + order.phone,
      'Payment: ' + order.payment,
      '',
      'DELIVERY ADDRESS',
      order.address,
      order.landmark,
      order.city + ', ' + order.state + ' - ' + order.pincode,
      'Estimated delivery: ' + order.eta,
      '',
      'ITEMS',
      order.items.map((i) => i.qty + ' x ' + i.name + (i.size ? ' (' + i.size + ')' : '') + (i.color ? ' / ' + i.color : '') + ' — ' + money(i.price * i.qty)).join('\n'),
      '',
      'Subtotal: ' + money(order.totals.subtotal),
      'You save: ' + money(order.totals.savings),
      'Delivery: ' + (order.totals.delivery === 0 ? 'Free' : money(order.totals.delivery)),
      'Promo discount: ' + money(order.totals.promoDiscount),
      'TOTAL: ' + money(order.totals.total),
      '',
      'Demo order — no payment was captured and nothing will be shipped.'
    ];
    const blob = new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'buuzo-order-' + order.id + '.txt';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
    toast('Order details downloaded.');
  }

  /* ---------------------------------------------------------------------
     14. Info modal for footer pages
  --------------------------------------------------------------------- */
  function openInfoModal(key) {
    const info = INFO[key];
    if (!info) {
      toast('This page is not available in the demo store.', { warn: true });
      return;
    }
    const html =
      '<button type="button" class="modal__close" data-close-modal aria-label="Close"><i class="fa-solid fa-xmark" aria-hidden="true"></i></button>' +
      '<div style="padding:clamp(22px,4vw,40px);max-width:620px" id="quickViewTitle">' +
        '<p class="eyebrow" style="margin-bottom:10px"><span class="eyebrow__dot" aria-hidden="true"></span> BUUZO help</p>' +
        '<h2 style="font-size:clamp(1.6rem,1.2rem+1.4vw,2.1rem);margin-bottom:14px">' + escapeHtml(info.title) + '</h2>' +
        '<div style="display:grid;gap:11px">' + info.body.map((p) => '<p style="font-family:var(--font-alt);font-size:.9rem;color:var(--ink-2);line-height:1.65">' + escapeHtml(p) + '</p>').join('') + '</div>' +
        '<div style="margin-top:22px;display:flex;flex-wrap:wrap;gap:10px">' +
          '<a class="btn btn--primary" href="#/shop">Shop the collection <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a>' +
          '<a class="btn btn--ghost" href="mailto:hello@buuzo.in">Email us</a>' +
        '</div>' +
      '</div>';
    openModal(html);
  }

  /* ---------------------------------------------------------------------
     15. Router
  --------------------------------------------------------------------- */
  function parseRoute() {
    const raw = location.hash.replace(/^#\/?/, '');
    const parts = raw.split('?');
    return {
      path: parts[0].replace(/\/+$/, ''),
      params: new URLSearchParams(parts[1] || '')
    };
  }

  function showView(name) {
    views.forEach((v) => {
      const el = $('#view-' + v);
      if (el) el.hidden = v !== name;
    });
    $$('.tabbar__item').forEach((tab) => {
      tab.classList.toggle('is-active', tab.dataset.tab === name);
    });
  }

  function navigate(hash) {
    if (location.hash === hash) route();
    else location.hash = hash;
  }

  function route() {
    const { path, params } = parseRoute();
    closeAllOverlays(true);
    const seg = path.split('/').filter(Boolean);
    const section = seg[0] || '';

    if (!section) {
      document.title = 'BUUZO — Shop the Vibe. Love the Style.';
      showView('home');
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      return;
    }

    if (section === 'shop') {
      closeDrawers();
      readShopParams(params);
      showView('shop');
      document.title = 'Shop all — BUUZO';
      renderShop();
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      return;
    }

    if (section === 'product') {
      const id = seg[1];
      const product = getProduct(id);
      if (!product) {
        toast('That product no longer exists.', { warn: true });
        navigate('#/shop');
        return;
      }
      showView('product');
      document.title = product.name + ' — BUUZO';
      renderPDP(id);
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      return;
    }

    if (section === 'checkout') {
      if (!state.cart.length) {
        toast('Your bag is empty — let’s find something you love.', { warn: true });
        showView('shop');
        readShopParams(new URLSearchParams());
        renderShop();
        return;
      }
      showView('checkout');
      document.title = 'Checkout — BUUZO';
      renderCheckoutSummary();
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      return;
    }

    if (section === 'order') {
      if (!state.lastOrder) {
        showView('home');
        return;
      }
      renderOrder(state.lastOrder);
      showView('order');
      document.title = 'Order ' + state.lastOrder.id + ' — BUUZO';
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      return;
    }

    if (section === 'help') {
      openInfoModal(seg[1] || 'faq');
      return;
    }

    /* In-page anchor on the home view */
    const target = document.getElementById(section);
    if (target) {
      showView('home');
      window.setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }), 40);
      return;
    }

    showView('home');
  }

  /* ---------------------------------------------------------------------
     16. Countdown, newsletter, misc UI
  --------------------------------------------------------------------- */
  function initCountdown() {
    const nodes = {
      days: $('#cd-days'), hours: $('#cd-hours'), mins: $('#cd-mins'), secs: $('#cd-secs')
    };
    if (!nodes.secs) return;
    let deadline = Number(store.get('flashDeadline', 0));
    if (!deadline || deadline < Date.now()) {
      deadline = Date.now() + 26 * 60 * 60 * 1000;
      store.set('flashDeadline', deadline);
    }
    let previous = '';
    const render = () => {
      const diff = Math.max(0, deadline - Date.now());
      const days = Math.floor(diff / 86400000);
      const hours = Math.floor((diff % 86400000) / 3600000);
      const mins = Math.floor((diff % 3600000) / 60000);
      const secs = Math.floor((diff % 60000) / 1000);
      nodes.days.textContent = pad2(days);
      nodes.hours.textContent = pad2(hours);
      nodes.mins.textContent = pad2(mins);
      nodes.secs.textContent = pad2(secs);
      if (secs !== previous) {
        nodes.secs.classList.remove('is-tick');
        void nodes.secs.offsetWidth;
        nodes.secs.classList.add('is-tick');
        previous = secs;
      }
    };
    render();
    window.setInterval(render, 1000);
  }

  function bindAuth() {
    const toggle = $('#accountToggle');
    if (toggle) toggle.addEventListener('click', openAccountModal);
    const tabAccount = $('#tabAccount');
    if (tabAccount) tabAccount.addEventListener('click', openAccountModal);
    const tabOrders = $('#tabOrders');
    if (tabOrders) tabOrders.addEventListener('click', openOrders);

    const modal = $('#authModal');
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target.closest('#authGoogleBtn')) { shopperGoogleSignIn(); return; }
        if (e.target === modal || e.target.closest('#authClose')) { closeAuthModal(); return; }
        const action = e.target.closest('[data-auth-action]');
        if (action) handleAuthAction(action.dataset.authAction);
      });
    }

    const newsBtn = $('#newsletterGoogle');
    if (newsBtn) {
      newsBtn.addEventListener('click', () => {
        const status = $('#newsletterStatus');
        if (authUser) {
          if (status) status.textContent = 'You’re in! Use code BUUZO10 for 10% off your first order.';
          return;
        }
        requireAuth('Join the BUUZO club with Google and get 10% off your first order.', () => {
          store.set('newsletter', authUser && authUser.email ? authUser.email : 'member');
          const statusEl = $('#newsletterStatus');
          if (statusEl) statusEl.textContent = 'You’re in! Use code BUUZO10 for 10% off your first order.';
          toast('You’re in the BUUZO club — code BUUZO10 is yours.');
        });
      });
    }
  }

  function openOrders() {
    if (state.lastOrder) {
      navigate('#/order');
      return;
    }
    toast('No orders yet — your first order will appear here.', { warn: true });
    navigate('#/shop');
  }

  function initReveals() {
    const items = $$('.reveal');
    if (!items.length) return;
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      items.forEach((el) => el.classList.add('is-in'));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    items.forEach((el) => observer.observe(el));
  }

  function initStickyHeader() {
    const header = $('#siteHeader');
    if (!header) return;
    const onScroll = () => header.classList.toggle('is-stuck', window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  function initTabs() {
    const tabs = $('#trendTabs');
    if (!tabs) return;
    tabs.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-trend]');
      if (!btn) return;
      $$('[data-trend]', tabs).forEach((b) => {
        const on = b === btn;
        b.classList.toggle('is-active', on);
        b.setAttribute('aria-selected', String(on));
      });
      const filter = btn.dataset.trend;
      const list = TRENDING_IDS.map(getProduct).filter((p) => filter === 'all' || p.category === filter);
      renderProducts($('#trendingGrid'), list, {});
    });
  }

  /* ---------------------------------------------------------------------
     17. Global events
  --------------------------------------------------------------------- */
  function bindEvents() {
    /* Header + menus */
    $('#menuToggle').addEventListener('click', () => {
      const menu = $('#mobileMenu');
      lastFocused = document.activeElement;
      lockDrawerState(null, false);
      closeDrawers();
      menu.classList.add('is-open');
      menu.setAttribute('aria-hidden', 'false');
      $('#menuToggle').setAttribute('aria-expanded', 'true');
      refreshScrim();
      setTimeout(() => $('#menuClose').focus({ preventScroll: true }), 220);
    });
    $('#menuClose').addEventListener('click', () => {
      closeMobileMenu();
      if (lastFocused) lastFocused.focus({ preventScroll: true });
    });

    $('#searchToggle').addEventListener('click', () => {
      const sheet = $('#searchSheet');
      const open = sheet.hidden;
      sheet.hidden = !open;
      $('#searchToggle').setAttribute('aria-expanded', String(open));
      if (open) {
        $('#searchInputMobile').focus();
      }
    });
    $('#searchSheetClose').addEventListener('click', () => {
      closeSearchPanels();
      $('#searchToggle').focus();
    });

    $('#cartToggle').addEventListener('click', () => openDrawer('cart'));
    $('#wishlistToggle').addEventListener('click', () => {
      requireAuth('Sign in with Google to view your wishlist.', () => openDrawer('wishlist'));
    });

    $$('[data-close-drawer]').forEach((btn) => btn.addEventListener('click', () => closeDrawers()));
    $('#quickView').addEventListener('click', (e) => {
      if (e.target === $('#quickView') || e.target.closest('[data-close-modal]')) closeModal();
    });

    scrim.addEventListener('click', () => {
      closeDrawers();
      closeMobileMenu(true);
      closeFilters(true);
      if ($('#quickView').classList.contains('is-open')) closeModal();
      closeAuthModal();
      closeSearchPanels();
      refreshScrim();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (overlayElements().length) {
          closeDrawers();
          closeMobileMenu(true);
          closeFilters(true);
          if ($('#quickView').classList.contains('is-open')) closeModal();
          closeAuthModal();
          refreshScrim();
        }
        closeSearchPanels();
      }
      if (e.key === 'Tab') {
        const panel = $('.drawer.is-open, .modal.is-open, .mobile-menu.is-open, .filters.is-open');
        if (!panel) return;
        const focusables = $$('a[href], button:not([disabled]), input, select, textarea, summary, [tabindex]:not([tabindex="-1"])', panel)
          .filter((el) => el.offsetWidth > 0 || el.offsetHeight > 0);
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
      /* "/" focuses search */
      if (e.key === '/' && !/input|textarea|select/i.test(document.activeElement.tagName)) {
        e.preventDefault();
        if (window.matchMedia('(min-width: 900px)').matches) {
          $('#searchInput').focus();
        } else {
          const sheet = $('#searchSheet');
          sheet.hidden = false;
          $('#searchToggle').setAttribute('aria-expanded', 'true');
          $('#searchInputMobile').focus();
        }
      }
    });

    /* Cart drawer promo */
    $('#cartPromoForm').addEventListener('submit', (e) => {
      e.preventDefault();
      applyPromo($('#cartPromo').value);
    });
    $('#applyPromoCheckout').addEventListener('click', () => applyPromo($('#checkoutPromo').value));
    $('#checkoutPromo').addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        applyPromo(e.target.value);
      }
    });

    /* Checkout form */
    const checkoutForm = $('#checkoutForm');
    checkoutForm.addEventListener('submit', placeOrder);
    checkoutForm.addEventListener('input', (e) => {
      const name = e.target.name;
      if (checkoutRules[name]) {
        const input = e.target;
        if (input.getAttribute('aria-invalid') === 'true') {
          setFieldError(name, checkoutRules[name](input.value || ''));
        }
      }
    });
    checkoutForm.addEventListener('change', (e) => {
      if (e.target.name === 'state') setFieldError('state', checkoutRules.state(e.target.value));
      if (e.target.name === 'phone') setFieldError('phone', checkoutRules.phone(e.target.value));
    });
    $('#downloadReceipt').addEventListener('click', downloadReceipt);

    /* Newsletter + shopper account */
    bindAuth();

    /* Shop filters */
    $('#sortSelect').addEventListener('change', (e) => {
      state.sort = e.target.value;
      renderShop();
    });
    $('#categoryFilters').addEventListener('change', () => {
      state.filters.cats = $$('#categoryFilters input:checked').map((i) => i.value);
      renderShop();
    });
    $('#ratingFilter').addEventListener('change', (e) => {
      state.filters.rating = e.target.checked;
      renderShop();
    });
    $('#dealFilter').addEventListener('change', (e) => {
      state.filters.sale = e.target.checked;
      renderShop();
    });
    const applyPrice = debounce(() => renderShop(), 160);
    $('#priceRange').addEventListener('input', (e) => {
      state.filters.maxPrice = Number(e.target.value);
      $('#priceOutput').textContent = money(state.filters.maxPrice);
      applyPrice();
    });
    $('#clearFilters').addEventListener('click', clearAllFilters);
    $('#filterToggle').addEventListener('click', () => {
      const panel = $('#filterPanel');
      lastFocused = document.activeElement;
      panel.classList.add('is-open');
      $('#filterToggle').setAttribute('aria-expanded', 'true');
      refreshScrim();
      setTimeout(() => $('#filterClose').focus({ preventScroll: true }), 240);
    });
    $('#filterClose').addEventListener('click', () => {
      closeFilters();
      if (lastFocused) lastFocused.focus({ preventScroll: true });
    });
    $('#filterApply').addEventListener('click', () => {
      closeFilters();
      renderShop();
    });
    $('#activeFilters').addEventListener('click', (e) => {
      const btn = e.target.closest('[data-clear]');
      if (!btn) return;
      const value = btn.dataset.clear;
      if (value.startsWith('cat:')) {
        const cat = value.slice(4);
        state.filters.cats = state.filters.cats.filter((c) => c !== cat);
      } else if (value === 'price') {
        state.filters.maxPrice = 5000;
      } else if (value === 'rating') {
        state.filters.rating = false;
      } else if (value === 'sale') {
        state.filters.sale = false;
      } else if (value === 'q') {
        state.filters.q = '';
      }
      renderShop();
    });

    /* Delegated product actions */
    document.addEventListener('click', (e) => {
      const add = e.target.closest('[data-add]');
      if (add) {
        const p = getProduct(add.dataset.add);
        if (p) {
          if (!addToCart(p.id, 1, defaultSize(p), defaultColor(p))) return;
          add.classList.add('is-added');
          add.innerHTML = '<i class="fa-solid fa-check" aria-hidden="true"></i>';
          setTimeout(() => {
            add.classList.remove('is-added');
            add.innerHTML = '<i class="fa-solid fa-plus" aria-hidden="true"></i>';
          }, 1200);
        }
        return;
      }
      const wish = e.target.closest('[data-wish]');
      if (wish) {
        e.preventDefault();
        toggleWishlist(wish.dataset.wish);
        return;
      }
      const quick = e.target.closest('[data-quick]');
      if (quick) {
        openQuickView(quick.dataset.quick);
        return;
      }
      const qtyBtn = e.target.closest('[data-qty]');
      if (qtyBtn) {
        changeQty(qtyBtn.dataset.key, Number(qtyBtn.dataset.qty));
        return;
      }
      const remove = e.target.closest('[data-remove]');
      if (remove) {
        removeFromCart(remove.dataset.remove);
        return;
      }
      const move = e.target.closest('[data-move]');
      if (move) {
        const p = getProduct(move.dataset.move);
        if (p) addToCart(p.id, 1, defaultSize(p), defaultColor(p));
        return;
      }
      const closeDrawerBtn = e.target.closest('[data-close-drawer]');
      if (closeDrawerBtn) {
        closeDrawers();
        refreshScrim();
        return;
      }
      const searchId = e.target.closest('[data-search-id]');
      if (searchId) {
        navigate('#/product/' + searchId.dataset.searchId);
        closeSearchPanels();
        return;
      }
      const searchAll = e.target.closest('[data-search-all]');
      if (searchAll) {
        submitSearch(searchAll.dataset.searchAll);
        return;
      }
      const clearAll = e.target.closest('[data-clear-all]');
      if (clearAll) {
        clearAllFilters();
        return;
      }
      const info = e.target.closest('[data-info]');
      if (info) {
        e.preventDefault();
        openInfoModal(info.dataset.info);
        return;
      }
      const infoLink = e.target.closest('a[href^="#/help/"]');
      if (infoLink) {
        e.preventDefault();
        openInfoModal(infoLink.getAttribute('href').replace('#/help/', ''));
        return;
      }
      /* Close mobile menu after choosing a link */
      if (e.target.closest('#mobileMenu a') && !e.target.closest('[data-info]')) {
        closeMobileMenu(true);
        refreshScrim();
      }
      /* Close the mobile search sheet after submitting a link */
      if (e.target.closest('#searchSheet a')) closeSearchPanels();
    });

    /* Quick view interactions */
    $('#quickViewBody').addEventListener('click', (e) => {
      const color = e.target.closest('[data-qv-color]');
      if (color) {
        qv.color = color.dataset.qvColor;
        $$('#quickViewBody [data-qv-color]').forEach((b) => {
          b.classList.toggle('is-active', b === color);
          b.setAttribute('aria-pressed', String(b === color));
        });
        $('#qvColorName').textContent = qv.color;
        return;
      }
      const size = e.target.closest('[data-qv-size]');
      if (size) {
        qv.size = size.dataset.qvSize;
        $$('#quickViewBody [data-qv-size]').forEach((b) => {
          b.classList.toggle('is-active', b === size);
          b.setAttribute('aria-pressed', String(b === size));
        });
        $('#qvSizeName').textContent = qv.size;
        return;
      }
      const qtyBtn = e.target.closest('[data-qv-qty]');
      if (qtyBtn) {
        qv.qty = clamp(qv.qty + Number(qtyBtn.dataset.qvQty), 1, MAX_QTY);
        $('#qvQty').textContent = qv.qty;
        return;
      }
      const addBtn = e.target.closest('[data-qv-add]');
      if (addBtn) {
        if (!addToCart(qv.id, qv.qty, qv.size, qv.color)) return;
        closeModal();
        openDrawer('cart');
        return;
      }
    });

    /* Close search panel on outside click */
    document.addEventListener('click', (e) => {
      $$('.search').forEach((search) => {
        if (!search.contains(e.target)) {
          const panel = search.querySelector('.search__panel');
          if (panel) panel.hidden = true;
          const input = search.querySelector('.search__input');
          if (input) input.setAttribute('aria-expanded', 'false');
        }
      });
    });

    window.addEventListener('hashchange', route);
  }

  /* ---------------------------------------------------------------------
     4b. Shopper accounts — Continue with Google
  --------------------------------------------------------------------- */
  let authUser = null;
  let pendingAuth = null;

  function authError(message) {
    const el = $('#authError');
    if (!el) return;
    el.hidden = false;
    el.textContent = message;
  }

  function renderAuthBody(message) {
    const body = $('#authBody');
    if (!body) return;
    if (authUser) {
      const name = authUser.displayName || (authUser.email || '').split('@')[0] || 'BUUZO shopper';
      const initial = escapeHtml(name.charAt(0).toUpperCase());
      const email = authUser.email ? escapeHtml(authUser.email) : '';
      body.innerHTML =
        '<div class="auth-profile">' +
          '<span class="auth-avatar" aria-hidden="true">' + initial + '</span>' +
          '<div><h2 id="authTitle">' + escapeHtml(name) + '</h2>' +
            (email ? '<p class="auth-profile__email">' + email + '</p>' : '') + '</div>' +
        '</div>' +
        '<div class="auth-links">' +
          '<button type="button" class="auth-link" data-auth-action="orders"><i class="fa-solid fa-box" aria-hidden="true"></i><span>My orders</span><i class="fa-solid fa-chevron-right" aria-hidden="true"></i></button>' +
          '<button type="button" class="auth-link" data-auth-action="wishlist"><i class="fa-regular fa-heart" aria-hidden="true"></i><span>Wishlist</span><em>' + state.wishlist.length + '</em><i class="fa-solid fa-chevron-right" aria-hidden="true"></i></button>' +
          '<button type="button" class="auth-link" data-auth-action="bag"><i class="fa-solid fa-bag-shopping" aria-hidden="true"></i><span>Your bag</span><em>' + cartTotals().count + '</em><i class="fa-solid fa-chevron-right" aria-hidden="true"></i></button>' +
        '</div>' +
        '<button type="button" class="btn btn--ghost btn--block auth-signout" data-auth-action="signout">Sign out</button>' +
        '<p class="auth-fine">Signed in securely with Google.</p>';
      return;
    }
    body.innerHTML =
      '<p class="eyebrow"><span class="eyebrow__dot" aria-hidden="true"></span> BUUZO account</p>' +
      '<h2 id="authTitle">Continue with Google</h2>' +
      '<p class="auth-sub">' + escapeHtml(message || 'Sign in to save favourites, build your bag and track your orders.') + '</p>' +
      '<button type="button" class="btn btn--google btn--block" id="authGoogleBtn"><i class="fa-brands fa-google" aria-hidden="true"></i> Continue with Google</button>' +
      '<p class="auth-error" id="authError" role="alert" hidden></p>' +
      '<p class="auth-fine">We only receive your name and email from Google.</p>';
  }

  function openAuthModal(options) {
    const opts = options || {};
    if (typeof opts.then === 'function') pendingAuth = opts.then;
    const modal = $('#authModal');
    if (!modal) return;
    renderAuthBody(opts.message);
    lastFocused = document.activeElement;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    refreshScrim();
    const target = modal.querySelector('#authGoogleBtn, .auth-link');
    if (target) setTimeout(() => target.focus({ preventScroll: true }), 200);
  }

  function closeAuthModal() {
    const modal = $('#authModal');
    if (!modal || !modal.classList.contains('is-open')) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    pendingAuth = null;
    refreshScrim();
  }

  function requireAuth(message, then) {
    if (authUser) {
      if (typeof then === 'function') then();
      return true;
    }
    openAuthModal({ message: message, then: then });
    return false;
  }

  function openAccountModal() {
    if (!authUser) {
      openAuthModal({ message: 'Sign in with Google to see your orders, wishlist and bag.' });
      return;
    }
    pendingAuth = null;
    openAuthModal({});
  }

  async function shopperGoogleSignIn() {
    const btn = $('#authGoogleBtn');
    if (!fbAuth) {
      authError('Google sign-in is unavailable. Check your connection and reload.');
      return;
    }
    if (btn) {
      btn.disabled = true;
      btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin" aria-hidden="true"></i> Connecting…';
    }
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters({ prompt: 'select_account' });
      const result = await fbAuth.signInWithPopup(provider);
      authUser = (result && result.user) || authUser;
      const done = pendingAuth;
      pendingAuth = null;
      closeAuthModal();
      if (typeof done === 'function') done();
      const firstName = (authUser && authUser.displayName ? authUser.displayName : 'shopper').split(' ')[0];
      toast('Welcome, ' + escapeHtml(firstName) + '!');
    } catch (err) {
      const code = err && err.code ? err.code : '';
      if (code === 'auth/popup-blocked' || code === 'auth/popup-closed-by-user' || code === 'auth/cancelled-popup-request') {
        authError('Google sign-in did not finish. Allow popups for this site and try again.');
      } else if (code === 'auth/unauthorized-domain') {
        authError('This domain is not authorised in Firebase Auth. Add it under Authentication → Settings → Authorised domains.');
      } else {
        authError('Sign-in failed. ' + (err && err.message ? err.message : 'Please try again.'));
      }
    } finally {
      const googleBtn = $('#authGoogleBtn');
      if (googleBtn) {
        googleBtn.disabled = false;
        googleBtn.innerHTML = '<i class="fa-brands fa-google" aria-hidden="true"></i> Continue with Google';
      }
    }
  }

  function handleAuthAction(action) {
    if (action === 'orders') {
      closeAuthModal();
      if (state.lastOrder) navigate('#/order');
      else toast('No orders yet — your first order will appear here.', { warn: true });
      return;
    }
    if (action === 'wishlist') {
      closeAuthModal();
      openDrawer('wishlist');
      return;
    }
    if (action === 'bag') {
      closeAuthModal();
      openDrawer('cart');
      return;
    }
    if (action === 'signout') {
      if (!fbAuth) return;
      fbAuth.signOut().then(() => {
        authUser = null;
        closeAuthModal();
        toast('Signed out of your BUUZO account.');
      }).catch(() => authError('Could not sign out. Please try again.'));
    }
  }

  /* ---------------------------------------------------------------------
     17b. Admin studio — logo gate, product CRUD, Cloudinary
  --------------------------------------------------------------------- */
  let fbAuth = null;
  let fbDb = null;
  let editorImages = [];
  let logoClicks = 0;
  let logoTimer = 0;

  function initBackend() {
    if (!window.firebase || typeof firebase.initializeApp !== 'function') return;
    try {
      const app = firebase.apps && firebase.apps.length ? firebase.app() : firebase.initializeApp(FIREBASE_CONFIG);
      fbAuth = firebase.auth(app);
      fbDb = firebase.firestore(app);
      if (typeof fbAuth.onAuthStateChanged === 'function') {
        fbAuth.onAuthStateChanged((user) => {
          authUser = user || null;
          const modal = $('#authModal');
          if (modal && modal.classList.contains('is-open') && !user) {
            renderAuthBody('Sign in with Google to continue.');
          }
        });
      }
    } catch (err) {
      console.warn('BUUZO studio: Firebase could not start.', err);
    }
  }

  function normalizeProduct(id, data) {
    const price = Math.max(1, Math.round(Number(data.price) || 0));
    const mrp = Math.max(price, Math.round(Number(data.mrp) || price));
    const images = Array.isArray(data.img) ? data.img.filter(Boolean) : (data.img ? [data.img] : []);
    const stamp = data.createdAt && typeof data.createdAt.toMillis === 'function'
      ? data.createdAt.toMillis()
      : (Number(data.createdAt) || Date.now());
    return {
      id: id,
      name: String(data.name || 'Untitled product'),
      category: String(data.category || 'Apparel'),
      price: price,
      mrp: mrp,
      rating: clamp(Number(data.rating) || 4.6, 0, 5),
      reviews: Math.max(0, Math.round(Number(data.reviews) || 0)),
      sold: Math.max(0, Math.round(Number(data.sold) || 0)),
      badge: data.badge ? String(data.badge) : '',
      badgeType: data.badgeType ? String(data.badgeType) : '',
      desc: String(data.desc || ''),
      story: String(data.story || data.desc || ''),
      img: images.length ? images.map(String) : ['1441986300917-64674bd600d8'],
      colors: Array.isArray(data.colors)
        ? data.colors.map((c) => ({ n: String(c.n || 'Default'), h: String(c.h || '#EEEEEE') }))
        : [],
      sizes: Array.isArray(data.sizes) ? data.sizes.map(String) : [],
      stamp: stamp,
      /* Storefront sorts 'new' ascending: smaller number = newer product. */
      createdAt: -stamp / 1000
    };
  }

  function rebuildFeaturedLists() {
    const bySold = PRODUCTS.slice().sort((a, b) => b.sold - a.sold).map((p) => p.id);
    const byDate = PRODUCTS.slice().sort((a, b) => a.createdAt - b.createdAt).map((p) => p.id);
    const byDiscount = PRODUCTS.slice().sort((a, b) => pct(b) - pct(a)).map((p) => p.id);
    const take = (arr, n) => arr.slice(0, Math.max(0, Math.min(n, arr.length)));
    TRENDING_IDS.length = 0;
    TRENDING_IDS.push(...take(bySold, 8));
    BEST_IDS.length = 0;
    BEST_IDS.push(...take(bySold, 4));
    NEW_IDS.length = 0;
    NEW_IDS.push(...take(byDate, 4));
    FLASH_IDS.length = 0;
    FLASH_IDS.push(...take(byDiscount, 4));
  }

  function refreshStorefront() {
    rebuildFeaturedLists();
    initHomeGrids();
    renderShop();
    const parsed = parseRoute();
    if (parsed.path.indexOf('product/') === 0) {
      const id = parsed.path.split('/')[1];
      if (getProduct(id)) renderPDP(id);
      else navigate('#/shop');
    }
    syncWishlistButtons();
  }

  async function loadCatalogFromCloud() {
    if (!fbDb) return;
    try {
      const snap = await fbDb.collection('products').get();
      if (!snap || snap.empty) return;
      const items = [];
      snap.forEach((doc) => items.push(normalizeProduct(doc.id, doc.data())));
      items.sort((a, b) => a.createdAt - b.createdAt);
      PRODUCTS.length = 0;
      items.forEach((p) => PRODUCTS.push(p));
      refreshStorefront();
    } catch (err) {
      console.warn('BUUZO studio: catalog could not be loaded from Firestore.', err);
    }
  }

  /* ---- Gate ---- */
  function openAdminGate() {
    const gate = $('#adminGate');
    if (!gate) return;
    gate.classList.add('is-open');
    gate.setAttribute('aria-hidden', 'false');
    document.body.classList.add('is-locked');
    const form = $('#adminLoginForm');
    const error = $('#adminError');
    if (form) form.hidden = false;
    if (error) { error.hidden = true; error.textContent = ''; }
    const pass = $('#adminPassword');
    if (pass) pass.value = '';
    setTimeout(() => { if (pass) pass.focus({ preventScroll: true }); }, 220);
  }

  function closeAdminGate() {
    const gate = $('#adminGate');
    if (!gate) return;
    gate.classList.remove('is-open');
    gate.setAttribute('aria-hidden', 'true');
    if ($('#adminPanel') && !$('#adminPanel').hidden) return;
    document.body.classList.remove('is-locked');
  }

  function handleAdminLogin(e) {
    e.preventDefault();
    const pass = $('#adminPassword');
    const error = $('#adminError');
    if (!pass || !error) return;
    if (pass.value !== ADMIN_PASSWORD) {
      error.hidden = false;
      error.textContent = 'That password is not right. Try again.';
      pass.select();
      pass.focus({ preventScroll: true });
      return;
    }
    error.hidden = true;
    closeAdminGate();
    openAdminPanel();
  }

  /* ---- Panel ---- */
  function openAdminPanel() {
    const panel = $('#adminPanel');
    if (!panel) return;
    panel.hidden = false;
    document.body.classList.add('is-locked');
    const status = $('#adminStatus');
    if (status) status.textContent = fbDb ? '' : 'Cloud sync unavailable — changes will not be saved.';
    renderAdminList();
    const closeBtn = $('#adminClose');
    if (closeBtn) setTimeout(() => closeBtn.focus({ preventScroll: true }), 120);
  }

  function closeAdminPanel() {
    const panel = $('#adminPanel');
    if (panel) panel.hidden = true;
    closeAdminEditor();
    document.body.classList.remove('is-locked');
  }

  function renderAdminList() {
    const list = $('#adminList');
    if (!list) return;
    const count = $('#adminCount');
    if (count) {
      count.textContent = PRODUCTS.length + (PRODUCTS.length === 1 ? ' product' : ' products') +
        (fbDb ? ' · synced with Firestore' : ' · local catalog');
    }
    if (!PRODUCTS.length) {
      list.innerHTML =
        '<div class="admin-empty">' +
          '<i class="fa-solid fa-box-open" aria-hidden="true"></i>' +
          '<h2>No products yet</h2>' +
          '<p>Add your first product, or import the starter catalog and start editing.</p>' +
          '<button class="btn btn--primary btn--sm" type="button" data-admin-action="new"><i class="fa-solid fa-plus" aria-hidden="true"></i> Add product</button>' +
        '</div>';
      return;
    }
    list.innerHTML = PRODUCTS.map((p) =>
      '<article class="admin-row">' +
        '<img class="admin-row__img" src="' + imgSrc((p.img && p.img[0]) || '', 180) + '" alt="" width="64" height="80" loading="lazy">' +
        '<div class="admin-row__main">' +
          '<h3>' + escapeHtml(p.name) + '</h3>' +
          '<p>' + escapeHtml(p.category) + ' · ' + money(p.price) +
            (p.badge ? ' · ' + escapeHtml(p.badge) : '') + '</p>' +
        '</div>' +
        '<span class="admin-row__imgs">' + (p.img ? p.img.length : 0) + ' img</span>' +
        '<div class="admin-row__actions">' +
          '<button class="admin-icon-btn" type="button" data-admin-action="edit" data-id="' + escapeHtml(p.id) + '" aria-label="Edit ' + escapeHtml(p.name) + '"><i class="fa-solid fa-pen" aria-hidden="true"></i></button>' +
          '<button class="admin-icon-btn admin-icon-btn--danger" type="button" data-admin-action="delete" data-id="' + escapeHtml(p.id) + '" aria-label="Delete ' + escapeHtml(p.name) + '"><i class="fa-solid fa-trash" aria-hidden="true"></i></button>' +
        '</div>' +
      '</article>'
    ).join('');
  }

  /* ---- Product editor ---- */
  function clearEditorMessages() {
    const error = $('#apFormError');
    const status = $('#apUploadStatus');
    if (error) { error.hidden = true; error.textContent = ''; }
    if (status) { status.textContent = ''; status.classList.remove('is-error'); }
  }

  function openProductEditor(id) {
    const p = id ? getProduct(id) : null;
    const title = $('#adminEditorTitle');
    if (!title) return;
    editorImages = p && p.img ? p.img.slice() : [];
    title.textContent = p ? 'Edit product' : 'Add product';
    $('#apId').value = p ? p.id : '';
    $('#apName').value = p ? p.name : '';
    const catSelect = $('#apCategory');
    if (p && p.category && !Array.from(catSelect.options).some((o) => o.value === p.category)) {
      const opt = document.createElement('option');
      opt.value = p.category;
      opt.textContent = p.category;
      catSelect.appendChild(opt);
    }
    catSelect.value = p ? p.category : 'Apparel';
    $('#apPrice').value = p ? p.price : '';
    $('#apMrp').value = p ? p.mrp : '';
    $('#apBadge').value = p && p.badge ? p.badge : '';
    $('#apBadgeType').value = p && p.badgeType ? p.badgeType : '';
    $('#apDesc').value = p ? p.desc : '';
    $('#apStory').value = p ? p.story : '';
    $('#apSizes').value = p && p.sizes ? p.sizes.join(', ') : '';
    $('#apColors').value = p && p.colors ? p.colors.map((c) => c.n + ':' + c.h).join(', ') : '';
    $('#apRating').value = p ? p.rating : '';
    $('#apReviews').value = p ? p.reviews : '';
    $('#apImageUrl').value = '';
    clearEditorMessages();
    renderEditorThumbs();
    const editor = $('#adminEditor');
    editor.hidden = false;
    setTimeout(() => { $('#apName').focus({ preventScroll: true }); }, 160);
  }

  function closeAdminEditor() {
    const editor = $('#adminEditor');
    if (editor) editor.hidden = true;
    editorImages = [];
    const file = $('#apImages');
    if (file) file.value = '';
  }

  function renderEditorThumbs() {
    const wrap = $('#apThumbs');
    if (!wrap) return;
    if (!editorImages.length) {
      wrap.innerHTML = '<p class="admin-hint">No images yet — upload one or paste a URL.</p>';
      return;
    }
    wrap.innerHTML = editorImages.map((src, i) =>
      '<figure class="admin-thumb">' +
        '<img src="' + imgSrc(src, 200) + '" alt="Product image ' + (i + 1) + '">' +
        (i === 0 ? '<figcaption>Main</figcaption>' : '') +
        '<button type="button" data-thumb-remove="' + i + '" aria-label="Remove image ' + (i + 1) + '"><i class="fa-solid fa-xmark" aria-hidden="true"></i></button>' +
      '</figure>'
    ).join('');
  }

  async function uploadToCloudinary(file) {
    const body = new FormData();
    body.append('file', file);
    body.append('upload_preset', CLOUDINARY.uploadPreset);
    const res = await fetch('https://api.cloudinary.com/v1_1/' + CLOUDINARY.cloudName + '/image/upload', {
      method: 'POST',
      body: body
    });
    let data = null;
    try { data = await res.json(); } catch (err) { data = null; }
    if (!res.ok || !data || !data.secure_url) {
      const reason = data && data.error && data.error.message ? data.error.message : 'Upload failed (' + res.status + ')';
      throw new Error(reason);
    }
    return data.secure_url;
  }

  async function handleImageUpload(files) {
    const status = $('#apUploadStatus');
    const list = Array.from(files || []).filter((f) => /^image\//.test(f.type));
    if (!list.length) return;
    if (status) {
      status.classList.remove('is-error');
      status.textContent = 'Uploading ' + list.length + ' image' + (list.length > 1 ? 's' : '') + ' to Cloudinary…';
    }
    let uploaded = 0;
    for (let i = 0; i < list.length; i++) {
      try {
        const url = await uploadToCloudinary(list[i]);
        editorImages.push(url);
        uploaded += 1;
        renderEditorThumbs();
        if (status) status.textContent = 'Uploaded ' + uploaded + ' of ' + list.length + '…';
      } catch (err) {
        if (status) {
          status.classList.add('is-error');
          status.textContent = 'Upload failed: ' + (err.message || 'unknown error') +
            (uploaded ? ' (' + uploaded + ' uploaded)' : '') + '. Check the Cloudinary upload preset. It must be an unsigned preset.';
        }
        return;
      }
    }
    if (status) status.textContent = uploaded + ' image' + (uploaded > 1 ? 's' : '') + ' uploaded.';
    const file = $('#apImages');
    if (file) file.value = '';
  }

  function parseColors(value) {
    return String(value || '').split(',').map((pair) => {
      const bits = pair.split(':');
      const name = (bits[0] || '').trim();
      if (!name) return null;
      let hex = (bits[1] || '').trim();
      if (!/^#?[0-9a-f]{6}$/i.test(hex)) hex = '#EEEEEE';
      else if (hex.charAt(0) !== '#') hex = '#' + hex;
      return { n: name, h: hex };
    }).filter(Boolean);
  }

  async function saveProduct(e) {
    e.preventDefault();
    const error = $('#apFormError');
    const status = $('#adminStatus');
    const fail = (msg) => { if (error) { error.hidden = false; error.textContent = msg; } };
    const name = $('#apName').value.trim();
    const category = $('#apCategory').value;
    const price = Math.round(Number($('#apPrice').value));
    let mrp = Math.round(Number($('#apMrp').value));
    if (!name) return fail('Product name is required.');
    if (!price || price < 1) return fail('Enter a valid price.');
    if (!mrp || mrp < price) mrp = price;
    if (!editorImages.length) return fail('Add at least one product image.');
    if (error) error.hidden = true;

    const editingId = $('#apId').value;
    const existing = editingId ? getProduct(editingId) : null;
    const id = editingId || 'p-' + Date.now().toString(36);
    const stamp = existing && existing.stamp ? existing.stamp : Date.now();
    const doc = {
      name: name,
      category: category,
      price: price,
      mrp: mrp,
      rating: clamp(Number($('#apRating').value) || 4.6, 0, 5),
      reviews: Math.max(0, Math.round(Number($('#apReviews').value) || 0)),
      sold: existing ? existing.sold : 0,
      badge: $('#apBadge').value.trim(),
      badgeType: $('#apBadgeType').value,
      desc: $('#apDesc').value.trim(),
      story: $('#apStory').value.trim() || $('#apDesc').value.trim(),
      img: editorImages.slice(),
      sizes: $('#apSizes').value.split(',').map((s) => s.trim()).filter(Boolean),
      colors: parseColors($('#apColors').value),
      createdAt: stamp
    };

    const saveBtn = $('#apSave');
    if (saveBtn) {
      saveBtn.disabled = true;
      saveBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin" aria-hidden="true"></i> Saving…';
    }
    try {
      if (fbDb) await fbDb.collection('products').doc(id).set(doc, { merge: true });
      const normalized = normalizeProduct(id, doc);
      const index = PRODUCTS.findIndex((p) => p.id === id);
      if (index === -1) PRODUCTS.unshift(normalized);
      else PRODUCTS[index] = normalized;
      closeAdminEditor();
      renderAdminList();
      refreshStorefront();
      if (status) status.textContent = (existing ? 'Updated ' : 'Added ') + name + '.';
      toast(existing ? 'Product updated — ' + escapeHtml(name) : 'Product added — ' + escapeHtml(name));
    } catch (err) {
      fail('Could not save to Firestore: ' + (err.message || 'unknown error'));
    } finally {
      if (saveBtn) {
        saveBtn.disabled = false;
        saveBtn.innerHTML = 'Save product';
      }
    }
  }

  async function deleteProduct(id) {
    const p = getProduct(id);
    if (!p) return;
    if (!window.confirm('Delete “' + p.name + '”? It will disappear from the storefront for everyone.')) return;
    try {
      if (fbDb) await fbDb.collection('products').doc(id).delete();
      const index = PRODUCTS.findIndex((x) => x.id === id);
      if (index > -1) PRODUCTS.splice(index, 1);
      state.wishlist = state.wishlist.filter((w) => w !== id);
      store.set('wishlist', state.wishlist);
      state.cart = state.cart.filter((item) => item.id !== id);
      saveCart();
      renderAdminList();
      refreshStorefront();
      const status = $('#adminStatus');
      if (status) status.textContent = 'Deleted ' + p.name + '.';
      toast('Product deleted.', { warn: true });
    } catch (err) {
      toast('Delete failed: ' + (err.message || 'unknown error'), { warn: true });
    }
  }

  async function seedCatalog() {
    const status = $('#adminStatus');
    if (!fbDb) {
      if (status) status.textContent = 'Firestore is not available in this session.';
      return;
    }
    if (!window.confirm('Copy ' + PRODUCTS.length + ' products into Firestore so you can edit them? Products with the same ID are overwritten.')) return;
    if (status) status.textContent = 'Importing starter catalog…';
    try {
      const batch = fbDb.batch();
      PRODUCTS.forEach((p) => {
        batch.set(fbDb.collection('products').doc(p.id), {
          name: p.name,
          category: p.category,
          price: p.price,
          mrp: p.mrp,
          rating: p.rating,
          reviews: p.reviews,
          sold: p.sold,
          badge: p.badge || '',
          badgeType: p.badgeType || '',
          desc: p.desc,
          story: p.story,
          img: p.img,
          sizes: p.sizes || [],
          colors: p.colors || [],
          createdAt: p.stamp || Date.now()
        });
      });
      await batch.commit();
      if (status) status.textContent = 'Starter catalog imported. Happy editing.';
      toast('Starter catalog imported.');
      loadCatalogFromCloud();
    } catch (err) {
      if (status) status.textContent = 'Import failed: ' + (err.message || 'unknown error');
      toast('Import failed.', { warn: true });
    }
  }

  function bindAdmin() {
    const logo = $('.site-header .logo');
    if (logo) {
      logo.addEventListener('click', () => {
        logoClicks += 1;
        window.clearTimeout(logoTimer);
        logoTimer = window.setTimeout(() => { logoClicks = 0; }, 1600);
        if (logoClicks >= 12) {
          logoClicks = 0;
          openAdminGate();
        }
      });
    }

    const loginForm = $('#adminLoginForm');
    if (loginForm) loginForm.addEventListener('submit', handleAdminLogin);
    const gateClose = $('#adminGateClose');
    if (gateClose) gateClose.addEventListener('click', closeAdminGate);
    const gate = $('#adminGate');
    if (gate) gate.addEventListener('click', (e) => { if (e.target === gate) closeAdminGate(); });

    const closeBtn = $('#adminClose');
    if (closeBtn) closeBtn.addEventListener('click', closeAdminPanel);
    const newBtn = $('#adminNewProduct');
    if (newBtn) newBtn.addEventListener('click', () => openProductEditor(null));
    const seedBtn = $('#adminSeed');
    if (seedBtn) seedBtn.addEventListener('click', seedCatalog);

    const list = $('#adminList');
    if (list) {
      list.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-admin-action]');
        if (!btn) return;
        const action = btn.dataset.adminAction;
        if (action === 'new') openProductEditor(null);
        else if (action === 'edit') openProductEditor(btn.dataset.id);
        else if (action === 'delete') deleteProduct(btn.dataset.id);
      });
    }

    const productForm = $('#adminProductForm');
    if (productForm) productForm.addEventListener('submit', saveProduct);
    const editorClose = $('#adminEditorClose');
    if (editorClose) editorClose.addEventListener('click', closeAdminEditor);
    const editorCancel = $('#adminEditorCancel');
    if (editorCancel) editorCancel.addEventListener('click', closeAdminEditor);
    const editor = $('#adminEditor');
    if (editor) editor.addEventListener('click', (e) => { if (e.target === editor) closeAdminEditor(); });
    const fileInput = $('#apImages');
    if (fileInput) fileInput.addEventListener('change', (e) => handleImageUpload(e.target.files));
    const addUrl = $('#apAddUrl');
    if (addUrl) {
      addUrl.addEventListener('click', () => {
        const input = $('#apImageUrl');
        const value = input ? input.value.trim() : '';
        if (!value) return;
        editorImages.push(value);
        input.value = '';
        renderEditorThumbs();
      });
    }
    const thumbs = $('#apThumbs');
    if (thumbs) {
      thumbs.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-thumb-remove]');
        if (!btn) return;
        editorImages.splice(Number(btn.dataset.thumbRemove), 1);
        renderEditorThumbs();
      });
    }

    document.addEventListener('keydown', (e) => {
      if (e.key !== 'Escape') return;
      const editorEl = $('#adminEditor');
      if (editorEl && !editorEl.hidden) { closeAdminEditor(); return; }
      const panel = $('#adminPanel');
      if (panel && !panel.hidden) { closeAdminPanel(); return; }
      const gateEl = $('#adminGate');
      if (gateEl && gateEl.classList.contains('is-open')) closeAdminGate();
    });
  }

  /* ---------------------------------------------------------------------
     18. Boot
  --------------------------------------------------------------------- */
  function init() {
    const year = $('#footerYear');
    if (year) year.textContent = new Date().getFullYear();

    initHomeGrids();
    renderCart();
    renderWishlist();
    updateBadges();
    syncPromoUI();
    initCountdown();
    initTabs();
    initStickyHeader();
    initReveals();
    initBackend();
    bindAdmin();
    setupSearch('#searchInput', '#searchSuggest');
    setupSearch('#searchInputMobile', '#searchSuggestMobile');
    bindEvents();
    route();

    if (state.lastOrder) renderOrder(state.lastOrder);
    renderCheckoutSummary();
    syncWishlistButtons();
    loadCatalogFromCloud();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
