'use strict';

/**
 * Ingredient landing pages.
 *
 * "Chicken recipes" and "what can I make with aubergine" are how a great deal
 * of recipe searching actually happens, and the site had no page that answered
 * either. These are the hubs, defined by hand rather than clustered out of the
 * ingredient lists, because the raw strings do not cluster: the corpus holds
 * "garlic cloves", "garlic cloves, minced" and "garlic cloves, sliced" as three
 * unrelated entries among 3,268 distinct lines.
 *
 *   name   what the page is called
 *   match  what counts as this ingredient, tested against the ingredient text
 *   not    what looks like it but is not — the reason a page can be trusted
 *   blurb  one sentence, used on the card and in the page description
 *
 * `not` carries most of the correctness. Chicken stock is in a hundred recipes
 * that are not chicken dishes, "pineapple" contains "apple", and butter beans,
 * buttermilk, butternut squash and peanut butter all contain "butter". A hub
 * that quietly includes those is worse than no hub, because a reader who
 * clicks "chicken" and finds a vegetable soup stops trusting the section.
 */
const HUBS = [
  /* --- meat and fish ------------------------------------------------- */
  { name: 'Chicken', match: /\bchicken\b/, not: /\bchicken(?: or \w+)? (?:stock|broth|bouillon|powder|seasoning|salt)\b/,
    blurb: 'Roasts, curries, braises and fried chicken from every kitchen on the site.' },
  { name: 'Beef', match: /\b(?:beef|steak|brisket|oxtail|short ribs?|chuck)\b/, not: /\bbeef(?: or \w+)? (?:stock|broth|bouillon|dripping|fat|tallow)\b/,
    blurb: 'Slow braises, quick sears and the mince dishes that feed a household.' },
  { name: 'Pork', match: /\b(?:pork|pancetta|guanciale|prosciutto|ham hock)\b/, not: /\bpork(?: or \w+)? (?:stock|broth|lard|fat)\b/,
    blurb: 'Belly, shoulder and chop, from Sunday roasts to street food.' },
  { name: 'Bacon', match: /\b(?:bacon|lardons|rashers?)\b/,
    blurb: 'Where a little smoked pork does most of the work.' },
  { name: 'Lamb', match: /\b(?:lamb|mutton)\b/, not: /\blamb(?: or \w+)? (?:stock|broth)\b/,
    blurb: 'Shanks, shoulders and skewers across the Mediterranean and beyond.' },
  { name: 'Fish', match: /\b(?:fish|cod|haddock|sea bass|snapper|mackerel|sardines?|pollock|tilapia|halibut)\b/,
    not: /\bfish(?: or \w+)? (?:stock|sauce|balls?)\b/,
    blurb: 'Whole, filleted, fried and steamed — white fish and oily alike.' },
  { name: 'Salmon', match: /\bsalmon\b/,
    blurb: 'Cured, roasted, poached and raw.' },
  { name: 'Prawns', match: /\b(?:prawns?|shrimps?)\b/, not: /\b(?:prawn|shrimp) paste\b/,
    blurb: 'Fast cooking, big flavour — curries, stir-fries and grills.' },
  { name: 'Eggs', match: /\beggs?\b/, not: /\begg (?:noodles?|wash|white paper)\b|\beggplants?\b/,
    blurb: 'Breakfasts, custards, batters and the dishes built entirely on them.' },

  /* --- vegetables ---------------------------------------------------- */
  { name: 'Potatoes', match: /\bpotatoes?\b/, not: /\bsweet potatoes?\b/,
    blurb: 'Roasted, mashed, fried and folded into everything.' },
  { name: 'Tomatoes', match: /\b(?:tomatoes?|passata|tomato purée|tomato paste|plum tomatoes)\b/,
    blurb: 'Fresh, tinned and cooked down to a sauce.' },
  { name: 'Onions', match: /\b(?:onions?|shallots?)\b/,
    blurb: 'The base of more dishes here than any other vegetable.' },
  { name: 'Garlic', match: /\bgarlic\b/, not: /\bgarlic (?:powder|salt)\b/,
    blurb: 'Sliced, crushed, whole and roasted soft.' },
  { name: 'Mushrooms', match: /\b(?:mushrooms?|shiitake|porcini|chestnut mushrooms)\b/,
    blurb: 'Earthy, meaty and the backbone of a good vegetarian plate.' },
  { name: 'Spinach', match: /\bspinach\b/,
    blurb: 'Wilted into curries, folded into pastry, served as it is.' },
  { name: 'Aubergine', match: /\b(?:aubergines?|eggplants?)\b/,
    blurb: 'Grilled, fried, smoked and stewed.' },
  { name: 'Courgette', match: /\b(?:courgettes?|zucchini)\b/,
    blurb: 'Summer vegetables at their least demanding.' },
  { name: 'Cabbage', match: /\b(?:cabbage|sauerkraut|pak choi|bok choy)\b/,
    blurb: 'Raw and crunchy, or cooked long and soft.' },
  { name: 'Carrots', match: /\bcarrots?\b/,
    blurb: 'Sweetness in a stock, a slaw or a cake.' },
  { name: 'Peppers', match: /\b(?:bell peppers?|red peppers?|green peppers?|yellow peppers?|capsicum)\b/,
    blurb: 'Roasted until the skins blister, or raw and sweet.' },
  { name: 'Chillies', match: /\b(?:chilli(?:es)?|chili(?:es)?|jalapeños?|serranos?|scotch bonnets?|birds? eye)\b/,
    blurb: 'Fresh, dried, flaked and fermented — heat with a shape to it.' },
  { name: 'Avocado', match: /\bavocados?\b/,
    blurb: 'Mashed, sliced and blended.' },
  { name: 'Cauliflower', match: /\bcauliflower\b/,
    blurb: 'Roasted whole, riced, curried and battered.' },
  { name: 'Peas', match: /\b(?:peas|petits pois)\b/, not: /\b(?:chickpeas?|black[- ]eyed peas|split peas|gungo peas|pigeon peas|snap peas|snow peas)\b/,
    blurb: 'Frozen and fresh, in rice dishes, curries and soups.' },

  /* --- dairy --------------------------------------------------------- */
  { name: 'Cheese', match: /\b(?:cheese|parmesan|mozzarella|feta|cheddar|gruyère|pecorino|ricotta|halloumi|mascarpone)\b/,
    blurb: 'Melted, crumbled, grated and baked.' },
  { name: 'Butter', match: /\bbutter\b/, not: /\b(?:butter beans?|buttermilk|butternut|peanut butter|almond butter|nut butter|butter lettuce|butterhead)\b/,
    blurb: 'Where it is the point, not just the pan.' },
  { name: 'Cream', match: /\b(?:double cream|single cream|heavy cream|sour cream|crème fraîche|whipping cream)\b/,
    blurb: 'Enriching a sauce, or the whole dessert.' },
  { name: 'Yoghurt', match: /\byogh?urt\b/,
    blurb: 'Marinades, raitas, dressings and breakfasts.' },
  { name: 'Paneer', match: /\bpaneer\b/,
    blurb: 'The cheese that holds its shape in a curry.' },

  /* --- staples ------------------------------------------------------- */
  { name: 'Rice', match: /\brice\b/, not: /\brice (?:vinegar|wine|flour|noodles?|paper|cakes?)\b/,
    blurb: 'Basmati, short-grain, glutinous and everything cooked in it.' },
  { name: 'Pasta', match: /\b(?:pasta|spaghetti|tagliatelle|penne|rigatoni|fettuccine|linguine|macaroni|ziti|paccheri|orzo|lasagne|bucatini|farfalle)\b/,
    blurb: 'Long, short, filled and baked.' },
  { name: 'Noodles', match: /\bnoodles?\b/,
    blurb: 'Wheat, rice and egg — in soup, in a wok, and cold.' },
  { name: 'Lentils', match: /\b(?:lentils?|toor dal|chana dal|masoor|urad)\b/,
    blurb: 'Cheap, fast and the base of a great many meals.' },
  { name: 'Chickpeas', match: /\b(?:chickpeas?|gram flour|besan)\b/,
    blurb: 'Whole, blended and ground into flour.' },
  { name: 'Beans', match: /\b(?:kidney beans?|black beans?|cannellini|borlotti|butter beans?|pinto beans?|haricot|fava|broad beans?|adzuki)\b/,
    blurb: 'Soaked, stewed and mashed.' },
  { name: 'Coconut Milk', match: /\bcoconut (?:milk|cream)\b/,
    blurb: 'The body behind a curry and the sweetness in a pudding.' },
  { name: 'Oats', match: /\b(?:oats|oatmeal|rolled oats)\b/,
    blurb: 'Breakfasts, biscuits and toppings.' },

  /* --- sweet and aromatic -------------------------------------------- */
  { name: 'Chocolate', match: /\b(?:chocolate|cocoa|cacao)\b/,
    blurb: 'Dark, milk and white — melted, folded and grated.' },
  { name: 'Vanilla', match: /\bvanilla\b/,
    blurb: 'Pods, paste and extract.' },
  { name: 'Lemon', match: /\blemons?\b/, not: /\blemongrass\b/,
    blurb: 'Juice, zest and preserved.' },
  { name: 'Lime', match: /\blimes?\b/,
    blurb: 'The sharpness that finishes a dish.' },
  { name: 'Apples', match: /\bapples?\b/, not: /\bpineapples?\b/,
    blurb: 'Baked, stewed and raw.' },
  { name: 'Bananas', match: /\bbananas?\b/,
    blurb: 'Ripe, fried and frozen.' },
  { name: 'Mango', match: /\bmangoe?s?\b/,
    blurb: 'Fresh, pulped and pickled.' },
  { name: 'Strawberries', match: /\bstrawberr(?:y|ies)\b/,
    blurb: 'The fruit that carries a summer dessert.' },
  { name: 'Honey', match: /\bhoney\b/,
    blurb: 'Sweetening, glazing and drizzling.' },
  { name: 'Almonds', match: /\balmonds?\b/, not: /\balmond (?:milk|extract)\b/,
    blurb: 'Flaked, ground and whole.' },
  { name: 'Ginger', match: /\bginger\b/, not: /\bgingerbread\b/,
    blurb: 'Fresh root and dried powder.' },
  { name: 'Coffee', match: /\b(?:coffee|espresso)\b/,
    blurb: 'Drunk, and cooked with.' },
  { name: 'Soy Sauce', match: /\bsoy sauce\b/,
    blurb: 'Light, dark and the dishes built on it.' },
  { name: 'Tofu', match: /\b(?:tofu|tempeh)\b/,
    blurb: 'Silken, firm and fried.' }
];

module.exports = HUBS;
