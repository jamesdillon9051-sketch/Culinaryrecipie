'use strict';
/** Shared helpers for the Weekly Delight static site generator. */

const HTML_ESCAPES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };

/** Escape a value for interpolation into HTML text or a double-quoted attribute. */
function esc(value) {
  return String(value == null ? '' : value).replace(/[&<>"']/g, c => HTML_ESCAPES[c]);
}

/** Escape for embedding inside a <script type="application/ld+json"> block. */
function jsonLd(obj) {
  return JSON.stringify(obj)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026');
}

/** 90 -> "1 hr 30 min" */
function humanTime(minutes) {
  if (!minutes) return '0 min';
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (!h) return `${m} min`;
  if (!m) return `${h} hr`;
  return `${h} hr ${m} min`;
}

/** 95 -> "PT1H35M" (ISO 8601 duration for Recipe schema) */
function isoDuration(minutes) {
  if (!minutes) return 'PT0M';
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return 'PT' + (h ? `${h}H` : '') + (m ? `${m}M` : '');
}

function slugify(value) {
  return String(value)
    .toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** Truncate cleanly at a word boundary, for meta descriptions. */
function clamp(text, max) {
  const s = String(text).replace(/\s+/g, ' ').trim();
  if (s.length <= max) return s;
  const cut = s.slice(0, max - 1);
  return cut.slice(0, cut.lastIndexOf(' ')).replace(/[,;:.]$/, '') + '…';
}

/** Star rating markup used on cards and recipe headers. */
function starsHtml(rating, reviews) {
  /* A recipe nobody has rated is not a recipe rated zero. Printing "0.0" beside
     five empty stars says the readers hated it; this says what is true, which is
     that no one has said anything yet. */
  if (!rating) {
    return '<span class="stars stars--unrated"><b>Not yet rated</b>'
      + '<span class="sr-only">This recipe has no ratings yet</span></span>';
  }
  const pct = (rating / 5) * 100;
  return `<span class="stars">` +
    `<span class="stars-glyphs" aria-hidden="true">★★★★★<span style="width:${pct.toFixed(1)}%">★★★★★</span></span>` +
    `<b>${rating.toFixed(1)}</b>${reviews ? `<small>(${reviews.toLocaleString('en-GB')})</small>` : ''}` +
    `<span class="sr-only">Rated ${rating} out of 5${reviews ? ` from ${reviews} reviews` : ''}</span>` +
    `</span>`;
}

/** Flag emoji + a short blurb for each cuisine represented in the catalog. */
const CUISINES = {
  'Italian':        { flag: '\u{1F1EE}\u{1F1F9}', blurb: 'Regional simplicity: few ingredients, treated properly.' },
  'French':         { flag: '\u{1F1EB}\u{1F1F7}', blurb: 'Technique-led cooking, from braises to laminated pastry.' },
  'Japanese':       { flag: '\u{1F1EF}\u{1F1F5}', blurb: 'Precision, umami and restraint in equal measure.' },
  'Mexican':        { flag: '\u{1F1F2}\u{1F1FD}', blurb: 'Chillies, corn and slow-built layers of smoke and acid.' },
  'Indian':         { flag: '\u{1F1EE}\u{1F1F3}', blurb: 'Spice blooming, slow onions and endless regional variety.' },
  'Chinese':        { flag: '\u{1F1E8}\u{1F1F3}', blurb: 'Wok heat, velveting and the balance of salt and sweet.' },
  'American':       { flag: '\u{1F1FA}\u{1F1F8}', blurb: 'Barbecue, diner classics and a great tradition of baking.' },
  'Greek':          { flag: '\u{1F1EC}\u{1F1F7}', blurb: 'Olive oil, lemon and oregano over everything.' },
  'Thai':           { flag: '\u{1F1F9}\u{1F1ED}', blurb: 'Sour, salty, sweet and hot, balanced in every bowl.' },
  'Middle Eastern': { flag: '\u{1F30D}', blurb: 'Tahini, sumac and charred vegetables across the Levant.' },
  'Spanish':        { flag: '\u{1F1EA}\u{1F1F8}', blurb: 'Tapas, rice and the deep smoke of pimentón.' },
  'Korean':         { flag: '\u{1F1F0}\u{1F1F7}', blurb: 'Fermentation, gochujang and the art of banchan.' },
  'Vietnamese':     { flag: '\u{1F1FB}\u{1F1F3}', blurb: 'Clear broths, fresh herbs and bright dipping sauces.' },
  'British':        { flag: '\u{1F1EC}\u{1F1E7}', blurb: 'Roasts, puddings and the finest fried fish anywhere.' },
  'German':         { flag: '\u{1F1E9}\u{1F1EA}', blurb: 'Breads, schnitzel and serious cake.' },
  'Ukrainian':      { flag: '\u{1F1FA}\u{1F1E6}', blurb: 'Beetroot, dill and soups built to last the winter.' },
  'Russian':        { flag: '\u{1F1F7}\u{1F1FA}', blurb: 'Soured cream, mushrooms and quick pan sauces.' },
  'Polish':         { flag: '\u{1F1F5}\u{1F1F1}', blurb: 'Dumplings, pickles and generous comfort food.' },
  'Hungarian':      { flag: '\u{1F1ED}\u{1F1FA}', blurb: 'Paprika in everything, and rightly so.' },
  'Swedish':        { flag: '\u{1F1F8}\u{1F1EA}', blurb: 'Cream sauces, cardamom buns and lingonberry.' },
  'Brazilian':      { flag: '\u{1F1E7}\u{1F1F7}', blurb: 'Beans, smoked pork and a whole table of accompaniments.' },
  'Peruvian':       { flag: '\u{1F1F5}\u{1F1EA}', blurb: 'Lime cures, ají chillies and Pacific seafood.' },
  'Argentinian':    { flag: '\u{1F1E6}\u{1F1F7}', blurb: 'Beef, chimichurri and the empanada in all its forms.' },
  'Jamaican':       { flag: '\u{1F1EF}\u{1F1F2}', blurb: 'Allspice, scotch bonnet and slow smoke.' },
  'Cuban':          { flag: '\u{1F1E8}\u{1F1FA}', blurb: 'Mojo marinades, pressed sandwiches and rum.' },
  'Moroccan':       { flag: '\u{1F1F2}\u{1F1E6}', blurb: 'Tagines, preserved lemon and warm spice.' },
  'Egyptian':       { flag: '\u{1F1EA}\u{1F1EC}', blurb: 'Street food built on lentils, rice and crisp onions.' },
  'Turkish':        { flag: '\u{1F1F9}\u{1F1F7}', blurb: 'Breakfast spreads, flatbreads and coffee ritual.' },
  'International':  { flag: '\u{1F310}', blurb: 'Modern classics that belong to no single kitchen.' },
  'Portuguese':     { flag: '\u{1F1F5}\u{1F1F9}', blurb: 'Salt cod, custard tarts and the sting of piri piri.' },
  'Indonesian':     { flag: '\u{1F1EE}\u{1F1E9}', blurb: 'Spice pastes fried until the oil runs, then coconut milk.' },
  'Malaysian':      { flag: '\u{1F1F2}\u{1F1FE}', blurb: 'Chinese, Malay and Indian cooking in one wok.' },
  'Singaporean':    { flag: '\u{1F1F8}\u{1F1EC}', blurb: 'Hawker centre cooking, refined to a single perfect plate.' },
  'Filipino':       { flag: '\u{1F1F5}\u{1F1ED}', blurb: 'Vinegar, soy and garlic, with sourness worn proudly.' },
  'Venezuelan':     { flag: '\u{1F1FB}\u{1F1EA}', blurb: 'Corn cakes split and stuffed, morning and night.' },
  'Salvadoran':     { flag: '\u{1F1F8}\u{1F1FB}', blurb: 'Masa griddled thick, and curtido on everything.' },
  'Nigerian':       { flag: '\u{1F1F3}\u{1F1EC}', blurb: 'Pepper bases cooked down hard, and rice worth arguing over.' },
  'Ethiopian':      { flag: '\u{1F1EA}\u{1F1F9}', blurb: 'Berbere, spiced butter and injera as plate and cutlery.' },
  'South African':  { flag: '\u{1F1FF}\u{1F1E6}', blurb: 'Cape Malay spicing over a braai-shaped foundation.' },
  'Irish':          { flag: '\u{1F1EE}\u{1F1EA}', blurb: 'Potatoes, butter and stews built for wet afternoons.' },
  'Scottish':       { flag: '\u{1F3F4}\u{E0067}\u{E0062}\u{E0073}\u{E0063}\u{E0074}\u{E007F}', blurb: 'Smoked fish, oats and whisky in the pudding.' },
  'Welsh':          { flag: '\u{1F3F4}\u{E0067}\u{E0062}\u{E0077}\u{E006C}\u{E0073}\u{E007F}', blurb: 'Leeks, lamb and a griddle in constant use.' },
  'Austrian':       { flag: '\u{1F1E6}\u{1F1F9}', blurb: 'Coffee-house cakes and the schnitzel done properly.' },
  'Swiss':          { flag: '\u{1F1E8}\u{1F1ED}', blurb: 'Melted cheese as a food group, and rightly so.' },
  'Belgian':        { flag: '\u{1F1E7}\u{1F1EA}', blurb: 'Beer in the braise, and the world\'s best chips.' },
  'Dutch':          { flag: '\u{1F1F3}\u{1F1F1}', blurb: 'Deep-fried snacks and syrup-filled waffles.' },
  'Danish':         { flag: '\u{1F1E9}\u{1F1F0}', blurb: 'Open sandwiches and laminated pastry, taken seriously.' },
  'Norwegian':      { flag: '\u{1F1F3}\u{1F1F4}', blurb: 'Cold-water fish and cardamom-scented baking.' },
  'Finnish':        { flag: '\u{1F1EB}\u{1F1EE}', blurb: 'Rye, salmon and berries from the forest floor.' },
  'Czech':          { flag: '\u{1F1E8}\u{1F1FF}', blurb: 'Bread dumplings, braised beef and very good beer.' },
  'Romanian':       { flag: '\u{1F1F7}\u{1F1F4}', blurb: 'Cabbage rolls, polenta and grilled minced meat.' },
  'Georgian':       { flag: '\u{1F1EC}\u{1F1EA}', blurb: 'Walnuts, herbs and cheese-filled bread worth the trip.' },
  'Lebanese':       { flag: '\u{1F1F1}\u{1F1E7}', blurb: 'Lemon, parsley and a table covered in small plates.' },
  'Persian':        { flag: '\u{1F1EE}\u{1F1F7}', blurb: 'Saffron, dried limes and rice with a crust worth fighting over.' },
  'Israeli':        { flag: '\u{1F1EE}\u{1F1F1}', blurb: 'Tahini on everything, and the aubergine done six ways.' },
  'Tunisian':       { flag: '\u{1F1F9}\u{1F1F3}', blurb: 'Harissa, eggs and pastry folded around both.' },
  'Taiwanese':      { flag: '\u{1F1F9}\u{1F1FC}', blurb: 'Braised pork, night-market snacks and serious noodle soup.' },
  'Pakistani':      { flag: '\u{1F1F5}\u{1F1F0}', blurb: 'Slow-cooked meat, charcoal smoke and heavy spicing.' },
  'Sri Lankan':     { flag: '\u{1F1F1}\u{1F1F0}', blurb: 'Coconut, curry leaf and roasted spice blends.' },
  'Colombian':      { flag: '\u{1F1E8}\u{1F1F4}', blurb: 'Corn, beans and a plate that arrives fully loaded.' },
  'Chilean':        { flag: '\u{1F1E8}\u{1F1F1}', blurb: 'Sweetcorn bakes and sandwiches piled improbably high.' },
  'Trinidadian':    { flag: '\u{1F1F9}\u{1F1F9}', blurb: 'Curried chickpeas in fried bread, eaten standing up.' },
  'Ghanaian':       { flag: '\u{1F1EC}\u{1F1ED}', blurb: 'Rice cooked in bean leaves, and plantain fried in spice.' },
  'Kenyan':         { flag: '\u{1F1F0}\u{1F1EA}', blurb: 'Grilled meat over charcoal with greens and ugali.' },
  'Australian':     { flag: '\u{1F1E6}\u{1F1FA}', blurb: 'Meringue, coconut sponge and biscuits built to post.' },
  'Hawaiian':       { flag: '\u{1F1FA}\u{1F1F8}', blurb: 'Slow-roast pork, rice and the plate lunch.' }
};

/** Short editorial descriptions for the ten top-level categories. */
const CATEGORIES = {
  'Breakfast':        'Weekday speed and weekend projects, from shakshuka to laminated pastry.',
  'Lunch':            'Sandwiches, salads and bowls that travel and reheat well.',
  'Dinner':           'The main event: braises, curries, roasts and pasta worth clearing an evening for.',
  'Desserts':         'Custards, cakes and the sort of pudding people ask for by name.',
  'Appetizers':       'Small plates, dips and things to hand round with a drink.',
  'Drinks':           'Cocktails, coffee rituals and the cooling drinks that rescue a spicy meal.',
  'Baking':           'Breads, pastry and the doughs that reward a weekend.',
  'Healthy':          'Vegetable-forward cooking that earns its place on flavour, not virtue.',
  'Quick Meals':      'Thirty minutes or less, start to plate, with nothing skipped.',
  'Holiday Specials': 'Centrepieces and celebration dishes for the days that matter.'
};

const DIET_TAGS = ['Vegetarian', 'Vegan', 'Gluten-Free', 'Keto', 'Dairy-Free', 'Low-Carb',
  /* Derived at build time from the nutrition and ingredients — see
     ./diet-derived.js. "No Added Sugar" rather than "Sugar-Free", because a
     recipe with milk or fruit in it is not sugar-free and saying so would be
     the kind of claim this site has spent a while removing. */
  'High-Protein', 'No Added Sugar'];

/** "1 recipe" but "4 recipes" — the count is often 1 on a small cuisine. */
function plural(n, singular, pluralForm) {
  return `${n} ${n === 1 ? singular : (pluralForm || singular + 's')}`;
}

/* Licences whose only condition is credit. CC0 and public-domain images carry
   no condition at all, but we credit those too — it costs a line and the
   photographer did the work either way. */
const NEEDS_CREDIT = /^(cc[-\s]?by|attribution)/i;
/* ShareAlike binds what we publish, not just what we took: these images are
   resized and re-encoded, and that adaptation carries the same licence. Saying
   so beside the picture is part of meeting the terms. */
const SHARE_ALIKE = /(\bsa\b|share[-\s]?alike)/i;

/**
 * The photographer credit shown under an image.
 *
 * For a CC BY photograph this is not decoration, it is the licence condition,
 * so it renders next to the picture rather than only in a file in the repo.
 * Creative Commons asks for title, author, source and licence; all four are in
 * the manifest, and all four go out here.
 */
function photoCredit(img, { compact = false } = {}) {
  if (!img || !img.author) return '';
  const author = esc(img.author);
  const name = img.page
    ? `<a href="${esc(img.page)}" rel="nofollow noopener">${esc(img.title || 'Photograph')}</a>`
    : esc(img.title || 'Photograph');
  const licence = img.licence_url
    ? `<a href="${esc(img.licence_url)}" rel="license nofollow noopener">${esc(img.licence)}</a>`
    : esc(img.licence || '');
  const shared = SHARE_ALIKE.test(img.licence || '')
    ? ' &middot; <span class="photo-credit__sa">this resized copy is shared under the same licence</span>'
    : '';
  return `<p class="photo-credit${compact ? ' photo-credit--compact' : ''}">`
    + `<span class="visually-hidden">Photograph credit: </span>`
    + `${name} by ${author}`
    + (licence ? ` &middot; ${licence}` : '')
    + (img.source ? ` &middot; ${esc(img.source)}` : '')
    + shared
    + `</p>`;
}

module.exports = { esc, jsonLd, humanTime, isoDuration, slugify, clamp, starsHtml, plural,
  photoCredit, NEEDS_CREDIT, CUISINES, CATEGORIES, DIET_TAGS };
