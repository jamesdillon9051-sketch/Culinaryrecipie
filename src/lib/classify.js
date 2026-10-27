'use strict';
/**
 * What a recipe is for: its dish role, the meals it belongs to, how it is
 * cooked and with what.
 *
 * The catalogue's single `category` mixed two questions. "Dinner" held lamb
 * shanks and also barbecue rub, buttered peas and four gravies, so the dinner
 * page's quickest options were a spice mix and a side of peas. This module
 * keeps the category as it is (URLs, breadcrumbs and the build's Quick Meals
 * rule all read it) and adds separate fields beside it:
 *
 *   role       one of ROLES: main, light, side, sauce, condiment, starter,
 *              bread, breakfast, dessert, drink, basic
 *   occasions  any of breakfast, lunch, dinner (none for a sauce, a rub or a
 *              drink: they are served with a meal, not as one)
 *   methods    how it is cooked, read from the method: oven, hob, grill,
 *              slow-cooker, pressure-cooker, air-fryer, deep-fry, steam,
 *              microwave, no-cook
 *   equipment  the named kit the method uses, and any tin or dish size it gives
 *   vessels    the cooking vessels the method names, for the one-pan question
 *
 * Every decision says how it was reached (`basis`):
 *   'override'   a reviewed decision in src/data/dish-roles.json, with its reason
 *   'title'      the dish's own name says what it is ("... Gravy", "... Rub")
 *   'category'   the category settles it (Drinks, Desserts)
 *   'nutrition'  the calculated figures per serving decide between main and
 *                lighter (only on tier 1 or 2 nutrition, see tools/nutrition-calc.js)
 * and a decision the rules cannot settle is marked `review: true` with the
 * reason, keeps a provisional role (the category's default), and is listed by
 * tools/classify-audit.js in the review queue. Nothing is presented to a reader
 * as a complete main dish while it is under review.
 *
 * Deterministic: the same recipe text always gives the same answer, and
 * nothing here is stored in the catalogue, so an improved rule reclassifies the
 * whole catalogue on the next build.
 */

const { parse } = require('./ingredients');

const ROLES = {
  main:      { label: 'Main dish', plural: 'Main dishes' },
  light:     { label: 'Light meal', plural: 'Light meals: soups, salads and sandwiches' },
  side:      { label: 'Side dish', plural: 'Side dishes' },
  sauce:     { label: 'Sauce or gravy', plural: 'Sauces and gravies' },
  condiment: { label: 'Condiment, dressing or rub', plural: 'Condiments, dressings, rubs and preserves' },
  starter:   { label: 'Starter or snack', plural: 'Starters and snacks' },
  bread:     { label: 'Bread', plural: 'Breads' },
  breakfast: { label: 'Breakfast dish', plural: 'Breakfast dishes' },
  dessert:   { label: 'Dessert or sweet bake', plural: 'Desserts and sweet bakes' },
  drink:     { label: 'Drink', plural: 'Drinks' },
  basic:     { label: 'Kitchen basic', plural: 'Kitchen basics: stocks, doughs, marinades and pastes' }
};

/* The category's default, used only when nothing else decides, and then always
   with review: true. */
const CATEGORY_DEFAULT = {
  'Dinner': 'main', 'Quick Meals': 'main', 'Healthy': 'main', 'Holiday Specials': 'main',
  'Lunch': 'light', 'Appetizers': 'starter', 'Breakfast': 'breakfast',
  'Baking': 'dessert', 'Desserts': 'dessert', 'Drinks': 'drink'
};

/* ----------------------------------------------------------- title words */

/* The head of a dish name is what comes before "with", "in", "on", "and",
   "for"…: "Lamb Cutlets with Mint Sauce" is lamb cutlets, "Cheese Sauce for
   Lasagne" is a cheese sauce. Parenthesised glosses are dropped first. */
function headPhrase(title) {
  const phrase = String(title).toLowerCase()
    .replace(/\([^)]*\)/g, ' ')
    .split(/,\s|\s(?:with|in|on|over|for|plus|mit|con)\s/)[0]
    .replace(/\s+/g, ' ').trim();
  /* "Fish and Chips" is fish; "Rice and Peas" is a side; "Spinach and White Bean Soup" is a soup.
     The part before "and" leads only when it names a protein or a dish by itself. */
  const m = /^(.+?)\s(?:and|&|n')\s(.+)$/.exec(phrase);
  if (m && (PROTEIN_WORD.test(m[1]) || MAIN_WORD.test(m[1])) && !/\b(?:soup|salad|stew|curry|pie|sandwich|wrap|tacos|bowl)$/.test(phrase)) return m[1];
  return phrase;
}

/* Filled in below; headPhrase only runs after the module has loaded. */
let PROTEIN_WORD = /$^/;
let MAIN_WORD = /$^/;

const W = list => new RegExp(`(?:^|[\\s-])(?:${list})$`, 'i');           // ends the head phrase
const ANY = list => new RegExp(`(?:^|[\\s-])(?:${list})(?=$|[\\s,-])`, 'i'); // anywhere in the title

const HEAD = {
  condiment: W([
    'rub', 'seasoning', 'spice mix', 'spice blend', 'dressing', 'vinaigrette', 'mayo', 'mayonnaise',
    'aioli', 'aïoli', 'ketchup', 'relish', 'chutney', 'pickles?', 'jam', 'jelly', 'marmalade', 'pesto',
    'salsa(?: verde| roja| verde cruda)?', 'chimichurri', 'harissa', 'zhoug', 'toum', 'tapenade',
    '[a-z]+ butter', 'chilli oil', 'chili oil', 'chilli crisp', 'sambal', 'pikliz', 'giardiniera',
    'piccalilli', 'sauerkraut', 'kimchi', 'gremolata', 'persillade', 'dukkah', "za'atar", 'zaatar',
    'glaze', 'mustard', 'curtido', 'achar', 'torshi', 'lyutenitsa', 'ajvar', 'shito', 'mojo',
    'remoulade', 'rémoulade', 'raita', 'tzatziki', 'compound butter', 'chutni', 'sambol',
    'syrup', 'frosting', 'icing', 'buttercream(?: frosting)?', 'curd', 'apple butter', 'pepper jelly',
    'salt', 'gomasio', 'furikake', 'seasoned salt', 'pico de gallo', 'mint sauce'
  ].join('|')),
  sauce: W([
    'sauce', 'gravy', 'b[eé]chamel', 'mornay', 'hollandaise', 'b[eé]arnaise', 'velout[eé]', 'jus',
    'coulis', 'passata', 'sugo', 'salsa di pomodoro', 'gastrique', 'beurre blanc', 'demi-glace',
    'au poivre sauce', 'enchilada sauce', 'teriyaki sauce'
  ].join('|')),
  /* Sauces named for the pasta they dress: a main if the recipe includes the pasta, a sauce if not. */
  pastaSauce: W(['rag[uù]', 'bolognese', 'marinara', 'pomodoro', 'arrabbiata', "all'arrabbiata",
    'amatriciana', "all'amatriciana", 'puttanesca', 'alfredo', 'carbonara', 'genovese', 'norma',
    'aglio e olio', 'cacio e pepe', 'vodka', 'primavera'].join('|')),
  basic: W([
    'stock', 'bone broth', 'dashi', 'dough', 'pizza dough', 'pastry', 'shortcrust',
    'puff pastry', 'marinade', 'brine', 'roux', 'curry paste', 'spice paste', 'paste', 'ghee',
    'clarified butter', 'breadcrumbs', 'croutons', 'starter', 'sourdough starter', 'pie crust',
    'crust', 'masa', 'tortillas'
  ].join('|')),
  bread: W([
    'bread', 'loaf', 'dinner rolls', 'bread rolls?', 'parker house rolls', 'garlic butter rolls', 'garlic rolls',
    'cheese rolls', 'soft rolls', 'crusty rolls', 'hamburger buns', 'hot dog buns', 'burger buns', 'bao buns', 'baps?', 'naan', 'roti', 'chapati', 'paratha', 'puri', 'bhature',
    'focaccia', 'ciabatta', 'baguette', 'bagels?', 'pretzels?', 'flatbreads?', 'pitas?', 'pita bread',
    'tortilla', 'cornbread', 'soda bread', 'brioche', 'challah', 'bannock', 'farls', 'tigelle',
    'piadina', 'msemen', 'lavash', 'injera', 'arepas?',
    'crumpets', 'english muffins', 'pikelets', 'scones', 'yorkshire puddings?', 'popovers', 'garlic bread',
    'johnnycakes', 'fry bread', 'dinner rolls', 'pull-apart bread', 'vollkornbrot', 'shokupan',
    'milk bread', 'pain de campagne', 'fougasse', 'grissini', 'breadsticks', 'crackers', 'oatcakes',
    'spoonbread', 'appam', 'idiyappam', 'dosa', 'hoppers', 'pol roti', 'tandoori roti', 'kulcha',
    'thepla', 'pesarattu', 'uttapam', 'socca', 'farinata', 'malawach', 'jachnun', 'lángos', 'langos'
  ].join('|')),
  soup: W(['soup', 'chowder', 'bisque', 'broth', 'consomm[eé]', 'gazpacho', 'salmorejo', 'vichyssoise',
    'minestrone', 'ribollita', 'borscht', 'barszcz', 'rasam', 'pho', 'ramen', 'laksa', 'congee',
    'jjigae', 'zuppa', 'potage', 'velouté soup', 'caldo', 'sopa', 'avgolemono', 'cawl', 'erwtensoep',
    'żurek', 'zurek', 'krupnik', 'kapuśniak', 'rosół', 'lohikeitto', 'ajiaco', 'tarator',
    'chłodnik', 'chlodnik', 'šaltibarščiai', 'harira', 'shorba', 'fasolada', 'magiritsa',
    'kulajda', 'acquacotta', 'gulaschsuppe', 'kjötsúpa', 'tom yum', 'tom kha', 'mohinga',
    'samgyetang', 'yukgaejang', 'naengmyeon', 'thukpa', 'bakso', 'tinola', 'sinigang',
    'soto', 'menudo', 'pozole', 'posole', 'caldo verde', 'cullen skink', 'skink', 'stracciatella',
    'egg drop', 'wonton soup', 'hot and sour', 'mulligatawny', 'lentil soup', 'dal shorba'].join('|')),
  salad: W(['salad', 'slaw', 'coleslaw', 'tabbouleh', 'fattoush', 'panzanella', 'kachumbari',
    'salatasi', 'kısır', 'kisir', 'larb', 'som tam', 'gado-gado', 'yam', 'poke', 'poke bowl',
    'niçoise', 'nicoise', 'caprese', 'waldorf', 'salade', 'insalata', 'ensalada', 'sunomono',
    'muchim', 'namul', 'gomae', 'thoke', 'chaat', 'carottes râpées', 'vinegret', 'cobb'].join('|')),
  side: W([
    'rice', 'pilaf', 'pilau', 'pulao', 'pilav', 'biryani rice', 'jeera rice', 'sinangag',
    'potatoes', 'potato', 'mash', 'mashed potatoes', 'fries', 'chips', 'wedges', 'hash browns',
    'r[öo]sti', 'gratin', 'dauphinois', 'dauphinoise', 'boulangère', 'roasties', 'tots', 'croquettes',
    'peas', 'carrots', 'beans', 'green beans', 'corn', 'cob', 'cabbage', 'greens', 'collard greens',
    'spinach', 'kale', 'broccoli', 'broccolini', 'cauliflower', 'asparagus', 'sprouts', 'parsnips',
    'mushrooms', 'courgettes', 'zucchini', 'squash', 'vegetables', 'veg', 'root vegetables', 'stuffing',
    'dressing', 'polenta', 'grits', 'couscous', 'quinoa', 'bulgur', 'farro', 'orzo', 'buttered noodles',
    'nokedli', 'spätzle', 'spaetzle', 'kopytka', 'dumplings', 'knödel', 'knodel', 'klöße', 'klosse',
    'poriyal', 'thoran', 'kootu', 'avial', 'olan', 'erissery', 'sabzi', 'bhaji', 'aloo', 'gobi',
    'bharta', 'baingan', 'okra', 'bamies', 'aubergine', 'eggplant', 'beetroot', 'beets', 'leeks',
    'onions', 'tomatoes', 'peppers', 'plantain', 'tostones', 'maduros', 'yams', 'yam', 'cassava',
    'attieke', 'ugali', 'pap', 'banku', 'fufu', 'pounded yam', 'mămăligă', 'mamaliga', 'mangu',
    'gaardebounen', 'rotkohl', 'red cabbage', 'colcannon', 'champ', 'clapshot', 'neeps',
    'rumbledethumps', 'stoemp', 'hutspot', 'stamppot', 'succotash', 'esquites', 'elote',
    'bratkartoffeln', 'kartoffelpuffer', 'kartoffelklosse', 'semmelknodel', 'serviettenknödel',
    'aligot', 'truffade', 'pommes', 'frites', 'patatas', 'dressing', 'papas', 'batata', 'kumara', 'sweet potatoes',
    'sweet potato', 'mushy peas', 'refried beans', 'baked beans', 'charro beans', 'black beans',
    'lentils', 'dal', 'dhal', 'daal', 'chakalaka', 'escalivada', 'pisto', 'peperonata', 'caponata',
    'ratatouille', 'briam', 'friarielli', 'cicoria', 'escarole', 'chard', 'blettes', 'fiddleheads',
    'calçots', 'padron', 'padrón peppers', 'edamame', 'tahdig', 'sticky rice', 'coconut rice',
    'cilantro lime rice', 'lemon rice', 'spanish rice', 'mexican rice', 'dirty rice', 'yellow rice'
  ].join('|'))
};

/* Words in the title that name the protein of a main course. */
const PROTEIN = ANY([
  'chicken', 'beef', 'steak', 'pork', 'lamb', 'mutton', 'goat', 'veal', 'venison', 'duck', 'goose',
  'turkey', 'ham', 'gammon', 'bacon', 'sausages?', 'chorizo', 'meatballs?', 'mince', 'burgers?',
  'fish', 'salmon', 'cod', 'haddock', 'tuna', 'trout', 'sea bass', 'bass', 'bream', 'tilapia', 'sole',
  'halibut', 'mackerel', 'sardines', 'snapper', 'grouper', 'catfish', 'barramundi', 'flounder',
  'walleye', 'monkfish', 'hake', 'swordfish', 'char', 'prawns?', 'shrimps?', 'scampi', 'crab', 'lobster',
  'mussels', 'clams', 'scallops', 'squid', 'calamari', 'octopus', 'oysters', 'seafood', 'tofu',
  'tempeh', 'paneer', 'halloumi', 'chickpeas?', 'lentils?', 'beans', 'eggs?', 'brisket', 'ribs',
  'chops', 'cutlets', 'tenderloin', 'loin', 'shanks?', 'thighs', 'drumsticks', 'wings', 'breast',
  'rabbit', 'quail', 'liver', 'kidneys', 'oxtail', 'pulled', 'carnitas', 'barbacoa', 'keema', 'kofta',
  'crayfish', 'yabbies', 'haggis', 'pork chops', 'duck breast', 'entenbrust'
].join('|'));

/* A head noun that names a main course by itself. */
const MAIN_HEAD = W([
  'curry', 'stew', 'casserole', 'hotpot', 'hot pot', 'pie', 'pies', 'pasty', 'pasties', 'lasagne',
  'lasagna', 'risotto', 'paella', 'jambalaya', 'gumbo', 'tacos?', 'burritos?', 'enchiladas',
  'fajitas', 'quesadillas?', 'pizzas?', 'calzone', 'stromboli', 'burgers?', 'cheeseburger', 'sliders',
  'sandwich', 'sandwiches', 'wraps?', 'pitas', 'gyros', 'shawarma', 'kebabs?', 'kabobs?', 'souvlaki',
  'skewers', 'steaks?', 'chops', 'cutlets', 'schnitzel', 'milanese', 'parmigiana', 'parmesan',
  'parmo', 'katsu', 'tonkatsu', 'karaage', 'meatballs', 'meatloaf', 'roast', 'traybake', 'bake',
  'skillet', 'stir-fry', 'stir fry', 'fry', 'bowls?', 'noodle bowl', 'biryani', 'tagine', 'chili',
  'chilli', 'chilli con carne', 'goulash', 'stroganoff', 'bourguignon', 'cacciatore', 'cassoulet',
  'moussaka', 'pastitsio', 'shepherd', "shepherd's pie", 'cottage pie', 'wellington', 'kiev',
  'pot roast', 'pot pie', 'mac', 'mac and cheese', 'macaroni cheese', 'spaghetti', 'linguine',
  'fettuccine', 'penne', 'rigatoni', 'tagliatelle', 'pappardelle', 'orecchiette', 'ravioli',
  'tortellini', 'gnocchi', 'cannelloni', 'manicotti', 'ziti', 'pasta', 'pasta bake', 'lo mein',
  'chow mein', 'pad thai', 'ramen bowl', 'udon', 'soba', 'yakisoba', 'japchae', 'bibimbap', 'donburi',
  'katsudon', 'oyakodon', 'gyudon', 'omurice', 'congee bowl', 'fried chicken', 'nuggets', 'tenders',
  'goujons', 'fishcakes', 'fish cakes', 'fish fingers', 'fish and chips', 'quiche', 'frittata',
  'tortilla española', 'omelette', 'omelet', 'shakshuka', 'dumplings', 'pierogi', 'pierogies',
  'pelmeni', 'momos', 'gyoza', 'enchilada', 'tamales', 'pupusas', 'empanadas', 'arepas rellenas',
  'korma', 'masala', 'tikka masala', 'vindaloo', 'madras', 'jalfrezi', 'bhuna', 'balti', 'dhansak',
  'rogan josh', 'saag', 'karahi', 'handi', 'nihari', 'haleem', 'rendang', 'adobo', 'sisig',
  'kare-kare', 'kaldereta', 'afritada', 'tinga', 'mole', 'pibil', 'birria', 'carne asada', 'asado',
  'picanha', 'feijoada', 'moqueca', 'bobotie', 'thieboudienne', 'jollof', 'maqluba', 'mansaf',
  'mandi', 'kabsa', 'machboos', 'plov', 'pilaf with lamb', 'stifado', 'kleftiko', 'souvla',
  'brisket', 'ribs', 'pulled pork', 'carnitas', 'barbacoa', 'hash', 'loco moco', 'poutine',
  'tourtière', 'cipaille', 'boil', 'clambake', 'étouffée', 'etouffee', 'scampi', 'thermidor',
  'newburg', 'piccata', 'marsala', 'francese', 'scaloppine', 'saltimbocca', 'involtini', 'rouladen',
  'sauerbraten', 'schweinebraten', 'eisbein', 'schweinshaxe', 'currywurst', 'bratwurst',
  'rostbratwurst', 'brats', 'bangers', 'toad in the hole', 'faggots', 'scouse', 'stovies',
  'tartiflette', 'raclette', 'fondue', 'pot-au-feu', 'blanquette', 'navarin', 'confit', 'coq au vin',
  'bouillabaisse', 'cioppino', 'cacciucco', 'brudet', 'zarzuela', 'moules', 'moules-frites',
  'bigos', 'golonka', 'gulas', 'pörkölt', 'porkolt', 'paprikash', 'sarmale', 'cevapi', 'pljeskavica',
  'cabbage rolls', 'gołąbki', 'golabki', 'kohlrouladen', 'stuffed peppers', 'mahshi', 'dolma',
  'burek', 'börek', 'gözleme', 'lahmacun', 'pide', 'manti', 'khinkali', 'kebab', 'kofte', 'kofta',
  'shish', 'tikka', 'tandoori chicken', 'butter chicken', 'jerk chicken', 'curry goat', 'oxtail',
  'hotdish', 'tetrazzini', 'divan', 'casserole bake', 'enchilada casserole', 'pot', 'one-pot',
  'sheet pan dinner', 'dinner', 'supper', 'ragout', 'fricassee', 'fricassé', 'chasseur', 'au vin',
  'parmentier', 'gratin dauphinois with ham', 'crêpes complètes', 'galette complète', 'sushi',
  'poke', 'ceviche', 'aguachile', 'tartare', 'carpaccio', 'gravlax', 'kedgeree', 'congee',
  'khichdi', 'khichuri', 'koshari', 'mujadara', 'mujaddara', 'fesenjan', 'ghormeh sabzi',
  'gheimeh', 'tahchin', 'polo', 'zereshk polo', 'chelo kebab', 'koobideh', 'kalakukko',
  'makaronilaatikko', 'kroppkakor', 'cepelinai', 'kugelis', 'pelau', 'pepperpot', 'mofongo',
  'pernil', 'ropa vieja', 'picadillo', 'lomo saltado', 'ají de gallina', 'aji de gallina',
  'chivito', 'francesinha', 'bifana', 'choripán', 'choripan', 'tlayudas', 'gorditas', 'sopes',
  'tostadas', 'chimichangas', 'flautas', 'taquitos', 'crunchwrap', 'muffuletta', 'po boy',
  "po' boy", 'hoagie', 'sub', 'panini', 'cheesesteak', 'reuben', 'club sandwich', 'blt', 'melt',
  'toastie', 'croque monsieur', 'croque madame', 'monte cristo', 'sloppy joes', 'hot dogs?',
  'banh mi', 'bánh mì', 'cubano', 'torta', 'bao', 'rou jia mo', 'roujiamo', 'sabich', 'falafel',
  'arayes', 'hawawshi', 'kapsalon', 'donair', 'runza', 'bierock', 'beef on weck'
].join('|'));

PROTEIN_WORD = PROTEIN;
MAIN_WORD = /^(?:bangers|fish|steak|chicken|beef|pork|lamb|sausages?|ham|liver|bacon|eggs?|haggis|toad|bubble|surf)$/;

const SANDWICH = ANY(['sandwich(?:es)?', 'wraps?', 'toastie', 'panini', 'sub', 'hoagie', 'butty',
  'sliders?', 'melt', 'blt', 'pitas?', 'bagel', 'croque', 'tramezzini', 'po.? ?boy', 'banh mi',
  'bánh mì', 'cubano', 'torta', 'muffuletta', 'reuben', 'roll-ups?', 'pinwheels?', 'sando',
  'smørrebrød', 'fischbrotchen', 'fischbrötchen', 'quesadillas?'].join('|'));

const PASTA_INGREDIENT = /\b(spaghetti|linguine|fettuccine|tagliatelle|pappardelle|penne|rigatoni|bucatini|macaroni|pasta|orecchiette|paccheri|fusilli|farfalle|gnocchi|tortellini|ravioli|lasagne|lasagna|ziti|conchiglie|trofie|bigoli|pici|tonnarelli|mafaldine|orzo|noodles?)\b/i;

/* Sweet things filed under a savoury or seasonal category ("Christmas Cake" under Holiday Specials). */
const DESSERT_TITLE = ANY(['cakes?', 'cupcakes', 'cookies', 'biscotti', 'brownies', 'blondies', 'fudge',
  'toffee', 'candy', 'candies', 'bark', 'truffles', 'turtles', 'divinity', 'patties', 'macaroons?',
  'makronen', 'meringues?', 'pavlova', 'trifle', 'cheesecake', 'ice cream', 'gelato', 'sorbet',
  'mousse', 'panna cotta', 'tiramisu', 'custard', 'crumble', 'cobbler', 'brittle', 'stollen',
  'christstollen', 'panettone', 'panforte', 'torrone', 'lebkuchen', 'spekulatius', 'pfeffernusse',
  'vanillekipferl', 'zimtsterne', 'mandelhörnchen', 'pepparkakor', 'lussekatter', 'kransekage',
  'risalamande', 'melomakarona', 'kourabiedes', 'mazurek', 'piernik', 'paska', 'kutia', 'bolo rei',
  'roscón de reyes', 'galette des rois', 'bûche de noël', 'simnel', 'julekake', 'vánočka', 'cozonac',
  'joulutorttu', 'sufganiyot', 'oliebollen', 'chiacchiere', 'castagnole', 'bugnes', 'rosquillas',
  'buñuelos', 'bunuelos', 'bunuelos de viento', 'doughnuts', 'donuts', 'churros', 'white christmas',
  'chocolate-covered cherries', 'bibingka', 'christmas pudding', 'bread pudding', 'sticky toffee',
  'knedle ze sliwkami', 'fried apples', 'flag cake', 'pie bars', 'cinnamon rolls', 'pumpkin pie',
  'apple pie', 'pecan pie', 'mince pies', 'pudding', 'hot chocolate bombs', 'eggnog', 'blossoms',
  'haselnussmakronen', 'kokosmakronen', 'snowballs', 'gingerbread', 'shortbread', 'mincemeat',
  'fruit salad', 'swiss roll', 'sponge roll'].join('|'));

/* Things eaten between meals or before one. */
const SNACK_TITLE = ANY(['trail mix', 'energy balls', 'protein balls', 'date balls', 'popcorn',
  'popcorn balls', 'chex mix', 'granola bars', 'protein bars', 'bars', 'bites', 'nuts', 'crisps',
  'pretzels', 'snack mix', 'brie bites'].join('|'));

/* Meat, fish and the firmer vegetarian proteins, by name in the ingredient list. */
const MAIN_PROTEIN_FOOD = /\b(chicken|beef|steak|pork|lamb|mutton|goat|veal|venison|duck|goose|turkey|ham|gammon|bacon|pancetta|guanciale|sausages?|chorizo|mince|brisket|ribs|oxtail|rabbit|liver|salmon|cod|haddock|tuna|trout|sea bass|bream|tilapia|sole|halibut|mackerel|sardines|snapper|grouper|catfish|barramundi|flounder|walleye|monkfish|hake|swordfish|fish|prawns?|shrimps?|crab|lobster|mussels|clams|scallops|squid|calamari|octopus|tofu|tempeh|paneer|halloumi|seitan|salt cod|bacalhau|bacalao|baccal[aà]|tripe|kielbasa|frankfurters?|hot dogs?|meatballs)\b/i;

/** Grams per serving of meat, fish or firm vegetarian protein in the ingredient list (weights only). */
function proteinGramsPerServing(recipe) {
  let grams = 0;
  for (const item of parse(recipe.ingredients)) {
    if (item.group || !item.qty) continue;
    const unit = String(item.unit || '').toLowerCase();
    const g = unit === 'g' ? item.qty : unit === 'kg' ? item.qty * 1000 : 0;
    if (!g) continue;
    const name = String(item.name || '').toLowerCase().split(/[,(]/)[0];
    if (/\b(stock|broth|sauce|paste|powder|fat|lard|dripping|bones?|gelatine|cube|granules|seasoning)\b/.test(name)) continue;
    if (MAIN_PROTEIN_FOOD.test(name)) grams += g;
  }
  return recipe.servings ? Math.round(grams / recipe.servings) : 0;
}

/* A bread by name that is a sweet bake ("Lemon Drizzle Loaf", "Bath Buns") or a cake ("Swiss Roll"). */
const SWEET_BAKE = ANY(['lemon', 'blueberry', 'chocolate', 'chocolate chip', 'date', 'malt', 'tea', 'cake',
  'apple', 'strawberry', 'cranberry', 'orange', 'raspberry', 'banana', 'saffron', 'friendship', 'easter',
  'cream', 'jam', 'sponge', 'swiss', 'pineapple', 'courgette', 'zucchini', 'carrot', 'cinnamon',
  'chelsea', 'hot cross', 'sticky', 'iced', 'currant', 'fruit', 'pumpkin', 'monkey', 'treacle',
  'bun and cheese', 'black bun', 'sweet', 'honey', 'maple', 'molasses'].join('|'));
/* British biscuits are sweet; American biscuits are a quick bread. */
const US_BISCUIT = /\b(buttermilk|drop|angel|cathead|cheddar bay|cheese|honey butter|3 ingredient|freezer|gluten-free|southern|sausage|biscuits and gravy)\b/i;
/* A bread with a filling or a stew named before it is a meal, not a bread. */
const FILLED_BREAD = /\b(masala|aloo|paneer|gobi|methi|keema|chole|halwa|kottu|egg|lox|gravy|sausage|cabbage|lasagne|pepperoni|boerewors|chiko|kathi|california|tortilla soup|sopa|bun and cheese|reina pepiada)\b/i;

const SWEETENER = /\b(sugar|honey|syrup|treacle|molasses|chocolate|cocoa|jam|marmalade|condensed milk|dates|sultanas|raisins|caramel|dulce|nutella|maple|icing|frosting|custard|marzipan|candied|glacé|mincemeat|sweetened)\b/i;
const BREAD_FIRST = /^(?:focaccia|pane|pain|brot|pan de|pão|pao|khachapuri|naan|roti|pita|pitta|bagels?|pretzels?|ciabatta|baguette|brioche|bread|flatbread)\b/i;

const DISH_FIRST = /^(?:trofie|testaroli|trenette|pasta|spaghetti|linguine|fettuccine|tagliatelle|tagliolini|pappardelle|penne|rigatoni|bucatini|orecchiette|cavatelli|malloreddus|pici|trofie|paccheri|gnocchi|tortelli|tortellini|ravioli|agnolotti|culurgiones|anelletti|lasagne|lasagna|cannelloni|risotto|pizza|pinsa|paella|arroz con|tacos?|curry|biryani|ramen|pho|bún|bun bo|pad)\b/i;
const LEGUME = /\b(lentils?|chickpeas?|beans|black-eyed peas|split peas|gungo peas|pigeon peas|red kidney|cannellini|borlotti|butter beans|fava|dal|daal|dhal|toor|chana|urad|moong|mung)\b/i;

const BREAKFAST_TITLE = ANY(['pancakes?', 'waffles?', 'porridge', 'oatmeal', 'oats', 'overnight oats',
  'granola', 'muesli', 'french toast', 'eggs benedict', 'eggs? royale', 'eggs? florentine',
  'breakfast', 'brunch', 'omelette', 'omelet', 'scrambled eggs', 'fried eggs', 'poached eggs',
  'boiled eggs', 'hash browns', 'crumpets', 'shakshuka', 'menemen', 'huevos rancheros',
  'chilaquiles', 'congee', 'idli', 'dosa', 'upma', 'poha', 'paratha', 'smoothie bowl', 'chia pudding',
  'yogurt bowl', 'yoghurt bowl', 'bircher', 'kedgeree', 'full english', 'full irish', 'fry-up',
  'fry up', 'bacon butty', 'breakfast burrito', 'breakfast tacos', 'jianbing', 'youtiao',
  'syrniki', 'crêpes', 'crepes', 'blini', 'pikelets', 'dutch baby'].join('|'));

/* ------------------------------------------------------- method and kit */

const EQUIPMENT = [
  ['oven', 'Oven', /\b(oven|preheat|bake|baked|baking|roast(?:ing)? (?:in|for|at|until)|grill(?:ed)? under|broil)\b/i],
  ['frying-pan', 'Frying pan or skillet', /\b(frying pan|fry pan|skillet|saut[eé] pan|non-?stick pan|heavy pan|large pan|wide pan|ovenproof pan)\b/i],
  ['wok', 'Wok', /\bwok\b/i],
  ['saucepan', 'Saucepan', /\bsaucepan\b/i],
  ['pot', 'Large pot or casserole', /\b(stockpot|stock pot|large pot|heavy pot|soup pot|dutch oven|casserole(?: dish| pot)?(?! of)|cocotte|braiser|heavy-based pot|lidded pot|\bpot\b)\b/i],
  ['roasting-tin', 'Roasting tin', /\b(roasting tin|roasting pan|roasting tray)\b/i],
  ['baking-tray', 'Baking tray or sheet pan', /\b(baking tray|baking sheet|sheet pan|oven tray|rimmed sheet|traybake tin)\b/i],
  ['baking-dish', 'Baking dish', /\b(baking dish|ovenproof dish|gratin dish|pie dish|lasagne dish|casserole dish)\b/i],
  ['cake-tin', 'Cake or loaf tin', /\b(cake tin|cake pan|springform|loaf tin|loaf pan|bundt|tart tin|tart pan|flan tin|square tin|brownie tin|muffin tin|muffin pan|cupcake tray|bun tin)\b/i],
  ['slow-cooker', 'Slow cooker', /\b(slow cooker|crock-?pot)\b/i],
  ['pressure-cooker', 'Pressure cooker', /\b(pressure cooker|instant pot|pressure cook)\b/i],
  ['air-fryer', 'Air fryer', /\bair[- ]fryer\b/i],
  ['grill', 'Grill or barbecue', /\b(barbecue|bbq|chargrill|char-grill|coals|grill grate|grill pan|griddle pan|griddle|grill)\b/i],
  ['steamer', 'Steamer', /\b(steamer|steaming basket|bamboo basket)\b/i],
  ['deep-fry', 'Deep pan or fryer for deep-frying', /\b(deep[- ]fr\w*|deep pan of oil|oil to 1[6-9]0|heat the oil to)\b/i],
  ['food-processor', 'Food processor', /\bfood processor\b/i],
  ['blender', 'Blender', /\b(blender|liquidiser|stick blender|hand blender|immersion blender|blitz)\b/i],
  ['mixer', 'Stand mixer or electric whisk', /\b(stand mixer|electric whisk|hand mixer|electric mixer|electric beaters)\b/i],
  ['thermometer', 'Thermometer', /\bthermometer\b/i],
  ['rolling-pin', 'Rolling pin', /\b(rolling pin|roll (?:it |the dough |out))/i],
  ['microwave', 'Microwave', /\bmicrowave\b/i],
  ['skewers', 'Skewers', /\bskewers?\b/i],
  ['ramekins', 'Ramekins', /\bramekins?\b/i]
];

/* The equipment that holds the food while it cooks, for counting pans. */
const COOKING_VESSELS = new Set(['frying-pan', 'wok', 'saucepan', 'pot', 'roasting-tin', 'baking-tray',
  'baking-dish', 'cake-tin', 'slow-cooker', 'pressure-cooker', 'air-fryer', 'steamer', 'deep-fry']);

/* "a second pan", "a separate saucepan", "a pan of boiling water" for the pasta: more than one vessel. */
const SECOND_VESSEL = /\b(second|separate|another|other|clean|small) (?:frying )?(?:pan|saucepan|pot|skillet|tray|dish|bowl of boiling)|\b(?:pan|pot|saucepan) of (?:salted |boiling |simmering )+water\b|\bboiling salted water\b|\bcook the (?:pasta|rice|noodles|spaghetti|potatoes)\b/i;

const SIZE = /\b(\d{1,2}(?:\.\d)?\s?(?:cm|in(?:ch)?|-inch)(?:\s?(?:x|by)\s?\d{1,2}(?:\.\d)?\s?(?:cm|in(?:ch)?))?(?:\s?\/\s?\d{1,2}(?:\.\d)?\s?(?:in|inch))?\s(?:\(\s?[^)]{1,20}\)\s)?(?:round |square |deep |shallow |loose-bottomed |springform |rectangular |ovenproof |heavy |non-stick |cast-iron |large |medium |small )*(?:cake |loaf |tart |pie |baking |roasting |frying |sheet |brownie |flan |bundt |muffin |gratin |springform )?(?:tin|pan|dish|tray|skillet|mould|mold|ring|casserole|pot))\b/gi;

function equipmentFor(title, steps) {
  const text = `${title}. ${steps.join(' ')}`;
  const found = EQUIPMENT.filter(([, , re]) => re.test(text)).map(([id, label]) => ({ id, label }));
  const sizes = [...new Set((text.match(SIZE) || []).map(s => s.replace(/\s+/g, ' ').trim()))].slice(0, 4);
  return { equipment: found, sizes };
}

function methodsFor(recipe, equipment) {
  const ids = new Set(equipment.map(e => e.id));
  const text = recipe.steps.join(' ');
  const methods = [];
  if (ids.has('slow-cooker')) methods.push('slow-cooker');
  if (ids.has('pressure-cooker')) methods.push('pressure-cooker');
  if (ids.has('air-fryer')) methods.push('air-fryer');
  if (ids.has('oven') || ids.has('roasting-tin') || ids.has('baking-dish') || ids.has('cake-tin')) methods.push('oven');
  if (ids.has('grill')) methods.push('grill');
  if (ids.has('deep-fry')) methods.push('deep-fry');
  if (ids.has('steamer') || /\bsteam (?:the|for|over|until)\b/i.test(text)) methods.push('steam');
  if (ids.has('microwave')) methods.push('microwave');
  if (/\b(simmer|boil|fry|fried|frying|saut[eé]|sear|brown the|stir-fry|toast the|melt the|reduce|poach|blanch|wilt|heat (?:the|a|some|\d))/i.test(text)
      && ['frying-pan', 'wok', 'saucepan', 'pot'].some(id => ids.has(id) || /\bpan\b/i.test(text))) methods.push('hob');
  if (!methods.length && recipe.cook === 0) methods.push('no-cook');
  return methods;
}

const METHOD_LABELS = {
  'oven': 'Oven', 'hob': 'Hob', 'grill': 'Grill or barbecue', 'slow-cooker': 'Slow cooker',
  'pressure-cooker': 'Pressure cooker', 'air-fryer': 'Air fryer', 'deep-fry': 'Deep-fried',
  'steam': 'Steamed', 'microwave': 'Microwave', 'no-cook': 'No cooking'
};

/** The cooking vessels the method names, and whether it reads as one pan. `onePan`
    is a candidate flag only: the one-pan collection is chosen by reading each method. */
function vesselsFor(recipe, equipment) {
  const vessels = equipment.map(e => e.id).filter(id => COOKING_VESSELS.has(id));
  const text = recipe.steps.join(' ');
  const second = SECOND_VESSEL.test(text);
  const separateStarch = PASTA_INGREDIENT.test(recipe.ingredients.join(' ')) && !/\bone[- ]pot|one[- ]pan|add the (?:dry |uncooked )?(?:pasta|orzo|rice|noodles)/i.test(text)
    && /\b(?:cook|boil) the (?:pasta|spaghetti|noodles|rice)/i.test(text);
  return { vessels, onePan: vessels.length === 1 && !second && !separateStarch };
}

/* ----------------------------------------------------------- the role */

function nutritionOf(recipe) {
  if (!recipe.nutrition || recipe.nutritionTier > 2) return null;
  return { kcal: Number(recipe.nutrition[0]), protein: Number(recipe.nutrition[1]) };
}

function decideRole(recipe, overrides) {
  const o = overrides[recipe.slug];
  if (o) return { role: o.role, basis: 'override', reason: o.reason, review: false };

  const title = recipe.title;
  const head = headPhrase(title);
  const cat = recipe.category;
  const n = nutritionOf(recipe);
  const hasPasta = PASTA_INGREDIENT.test(recipe.ingredients.join(' '));
  const proteinTitle = PROTEIN.test(head) || PROTEIN.test(title);
  const meat = proteinGramsPerServing(recipe);
  const sure = (role, reason) => ({ role, basis: 'title', reason, review: false });
  const byNutrition = (role, reason) => ({ role, basis: 'nutrition', reason, review: false });
  const unsure = (reason, provisional) => ({ role: provisional || CATEGORY_DEFAULT[cat] || 'main', basis: 'category', reason, review: true });

  /* The categories that settle it outright. A "Christmas Punch" filed under Holiday Specials is still a drink. */
  if (cat === 'Drinks') return { role: 'drink', basis: 'category', reason: 'filed under Drinks', review: false };
  if (cat === 'Desserts') {
    if (/\b(sauce|coulis|frosting|icing|curd|syrup|glaze)$/.test(head)) return sure('condiment', `"${head}" is a topping or sauce for a dessert`);
    return { role: 'dessert', basis: 'category', reason: 'filed under Desserts', review: false };
  }

  /* A pasta dish named first ("Trofie al Pesto") is the pasta, not the pesto. */
  if (DISH_FIRST.test(head) && hasPasta && /^(?:trofie|testaroli|trenette|pasta|spaghetti|linguine|fettuccine|tagliatelle|penne|rigatoni|bucatini)\b/.test(head)) {
    return sure('main', `"${head.split(' ')[0]}" names a pasta dish`);
  }
  /* "Tuna Mornay", "Polpette al Sugo", "Focaccia Genovese", "Mussels Marinara": a food named before
     the sauce word is the dish. Only "... Sauce" and "... Gravy" are always sauces. */
  const foodFirst = PROTEIN.test(head) || /\b(focaccia|pizza|bruschetta|pappa|polpette|macarona|asparagus|spargel|manakish|cornbread|fried|squid|ribs|wings|chips|telur|yuca|pommes|shrimp|œufs|oeufs|eggs?|poireaux|céleri|celeri|peanut butter and|sandwich|salt and pepper)\b/.test(head);
  if (HEAD.pastaSauce.test(head)) {
    if (hasPasta) return sure('main', 'a pasta dish: the pasta is in the ingredient list');
    if (!foodFirst) return sure('sauce', 'a pasta sauce: no pasta in the ingredient list');
  } else if (/\b(sauce|gravy)$/.test(head) || (HEAD.sauce.test(head) && !foodFirst)) {
    return sure(cat === 'Desserts' ? 'condiment' : 'sauce', `the name ends "${head.split(' ').pop()}"`);
  }
  if (HEAD.condiment.test(head) && !foodFirst && !(cat === 'Baking' && /butter$/.test(head))) {
    return sure('condiment', `"${head}" is a condiment, dressing, rub or preserve`);
  }
  if (HEAD.basic.test(head) && !/\bpie crust\b/.test(head) || /^(?:homemade |easy |basic |simple )?(?:chicken|beef|vegetable|fish|turkey|bone) (?:stock|broth)$/.test(head)) {
    return sure('basic', `"${head}" is made to go into another dish`);
  }
  if (/\b(?:drink|smoothie|shake|lassi|juice|lemonade|tea|coffee|cocoa|hot chocolate|punch|cocktail|mocktail)$/.test(head)) {
    return { role: 'drink', basis: 'title', reason: 'a drink by name', review: false };
  }

  if (cat !== 'Baking' && DESSERT_TITLE.test(title) && !PROTEIN.test(title)
      && !/\b(yorkshire|black|blood|corn|steak|suet|savoury|savory|fish|crab|potato|salmon|rice cakes?|fishcakes?)\b/i.test(title)) {
    return sure('dessert', 'a sweet dish by name');
  }
  if (cat !== 'Baking' && cat !== 'Breakfast' && SNACK_TITLE.test(title) && !MAIN_HEAD.test(head)) {
    return sure('starter', 'a snack by name');
  }

  const isBread = (HEAD.bread.test(head) || (/\bbiscuits$/.test(head) && US_BISCUIT.test(title)))
    && !FILLED_BREAD.test(title) && !SWEET_BAKE.test(head);
  const sweetBread = (HEAD.bread.test(head) || /\b(rolls?|buns?|scones|biscuits)$/.test(head)) && !FILLED_BREAD.test(title)
    && (SWEET_BAKE.test(head) || (/\bbiscuits$/.test(head) && !US_BISCUIT.test(title)) || /\b(swiss|sponge|cream|bath|cornish saffron|pineapple|orange|cinnamon|chelsea|sticky)\s(rolls?|buns?)$/.test(head));
  if (sweetBread && cat !== 'Breakfast') return sure('dessert', 'a sweet bake by name');

  if (cat === 'Baking') {
    if (isBread) return sure('bread', 'a bread by name');
    if (/\b(sausage rolls?|pepperoni rolls|chiko roll|cheese straws|pinwheels)\b/.test(head)) return sure('starter', 'a savoury snack bake');
    if (proteinTitle && (MAIN_HEAD.test(head) || /\b(pie|pasty|pasties|quiche|sausage rolls?|pithivier|wellington|tourtière|burek|börek|empanadas?)$/.test(head))) {
      return n && n.kcal >= 350 ? byNutrition('main', 'a savoury bake with a protein filling, over 350 kcal a serving')
        : unsure('a savoury bake: main course or snack?', 'starter');
    }
    if (/\b(cheese|onion|savoury|savory|herb|olive|garlic|pizza)\b/.test(head) && !DESSERT_TITLE.test(head)
        && !/\b(cake|cookies?|biscotti|danish|brownies|pumpkin|blueberry|chocolate|cinnamon|cream cheese)\b/.test(head)) {
      return unsure('a savoury bake: bread, snack or main?', 'bread');
    }
    /* A bake with nothing sweet in it is not a dessert, whatever shelf it is filed on. */
    if (!SWEETENER.test(recipe.ingredients.join(' '))) {
      if (BREAD_FIRST.test(head)) return sure('bread', `"${head.split(' ')[0]}" is a bread`);
      return unsure('a bake with no sugar in it: a bread or a savoury bake?', 'bread');
    }
    if (BREAD_FIRST.test(head) && !SWEET_BAKE.test(head)) return sure('bread', `"${head.split(' ')[0]}" is a bread`);
    return { role: 'dessert', basis: 'category', reason: 'a sweet bake filed under Baking', review: false };
  }

  if (cat === 'Breakfast') {
    if (isBread && !sweetBread) return sure('bread', 'a bread by name');
    return { role: 'breakfast', basis: 'category', reason: 'filed under Breakfast', review: false };
  }

  if (cat === 'Appetizers') {
    return { role: 'starter', basis: 'category', reason: 'filed under Appetizers', review: false };
  }

  /* Dinner, Lunch, Quick Meals, Healthy, Holiday Specials. */
  if (isBread && !proteinTitle) return sure('bread', 'a bread by name');
  if (/\b(cabbage rolls|lasagne rolls|lasagna rolls|kottu roti|chole bhature|kathi roll|california roll)\b/.test(head)) return sure('main', `"${head}" is a main course`);

  /* "Pasta e Fagioli", "Risotto ai Funghi", "Spaghetti alla Nerano": the dish type comes first in Italian. */
  if (DISH_FIRST.test(head) && !/\bwith butter$|\bbuttered\b/.test(head) && !HEAD.soup.test(head) && !HEAD.salad.test(head)) {
    return sure('main', `"${head.split(' ')[0]}" names a main course`);
  }

  if (HEAD.soup.test(head)) {
    if (meat >= 80) return { role: 'main', basis: 'ingredients', reason: `a soup with ${meat} g of meat or fish a serving`, review: false };
    if (!n) return cat === 'Lunch' ? { role: 'light', basis: 'category', reason: 'a soup filed under Lunch', review: false }
      : unsure('a soup with no nutrition figures to say whether it is a meal', 'light');
    if (n.protein >= 20 || n.kcal >= 450) return byNutrition('main', `a soup with ${n.protein} g protein and ${n.kcal} kcal a serving: a meal in a bowl`);
    if (n.protein < 15 && n.kcal < 350) return byNutrition('light', `a soup with ${n.protein} g protein and ${n.kcal} kcal a serving`);
    if (cat === 'Lunch') return { role: 'light', basis: 'category', reason: `a soup filed under Lunch (${n.protein} g protein, ${n.kcal} kcal)`, review: false };
    return unsure(`a soup between a light meal and a main (${n.protein} g protein, ${n.kcal} kcal)`, 'light');
  }

  if (HEAD.salad.test(head)) {
    if (meat >= 80) return { role: 'main', basis: 'ingredients', reason: `a salad with ${meat} g of meat or fish a serving`, review: false };
    if (!n) return cat === 'Lunch' ? { role: 'light', basis: 'category', reason: 'a salad filed under Lunch', review: false }
      : unsure('a salad with no nutrition figures', 'side');
    if (n.protein >= 25 && n.kcal >= 350) return byNutrition('main', `a salad with ${n.protein} g protein and ${n.kcal} kcal a serving`);
    if (n.protein < 10 && n.kcal < 250) return byNutrition('side', `a salad with ${n.protein} g protein and ${n.kcal} kcal a serving`);
    if (proteinTitle && n.protein >= 15) return byNutrition('light', `a salad named for its protein, ${n.protein} g a serving`);
    if (cat === 'Lunch') return { role: 'light', basis: 'category', reason: `a salad filed under Lunch (${n.protein} g protein, ${n.kcal} kcal)`, review: false };
    return unsure(`a salad between a side and a light meal (${n.protein} g protein, ${n.kcal} kcal)`, 'side');
  }

  if (/^(?:[a-z-]+ )*stuffed\b/.test(head)) {
    if (/\bstuffed (?:pork|chicken|lamb|beef|turkey|fish|salmon|trout|squid)\b/.test(head) || meat >= 60 || (n && n.protein >= 20)) return { role: 'main', basis: 'ingredients', reason: 'a stuffed vegetable with a meat or protein filling', review: false };
    return unsure('a stuffed vegetable: a vegetarian main or a side?', 'side');
  }
  if (HEAD.side.test(head)) {
    if (proteinTitle && n && n.protein >= 20) return byNutrition('main', `named for its protein, ${n.protein} g a serving`);
    if (meat >= 80) return { role: 'main', basis: 'ingredients', reason: `${meat} g of meat, fish or tofu a serving`, review: false };
    if (!proteinTitle && (!n || n.protein < 15)) return sure('side', `"${head}" is a side dish`);
    if (proteinTitle && n && n.protein < 12) return sure('side', `"${head}" is a side dish with ${n.protein} g protein a serving`);
    return unsure(`a side-dish name with a protein in it ("${title}")`, cat === 'Lunch' ? 'light' : 'side');
  }

  if (SANDWICH.test(title)) {
    return { role: cat === 'Lunch' || cat === 'Quick Meals' ? 'light' : 'main', basis: 'title', reason: 'a sandwich, wrap or filled bread', review: false };
  }

  if (MAIN_HEAD.test(head) || proteinTitle) {
    if (!n) return sure('main', MAIN_HEAD.test(head) ? `"${head}" is a main course` : 'named for its protein');
    if (n.kcal < 200 && n.protein < 12 && meat < 80) return unsure(`a main-course name but ${n.kcal} kcal and ${n.protein} g protein a serving`, 'side');
    return sure('main', MAIN_HEAD.test(head) ? `"${head}" is a main course` : 'named for its protein');
  }

  /* A name the rules do not know (most are in another language). The figures can say "a meal"
     with some confidence, never "a side". */
  if (meat >= 80) return { role: 'main', basis: 'ingredients', reason: `${meat} g of meat, fish or tofu a serving`, review: false };
  if (n && n.protein >= 20 && n.kcal >= 300) return byNutrition('main', `${n.protein} g protein and ${n.kcal} kcal a serving`);
  if (n && LEGUME.test(recipe.ingredients.join(' ')) && n.protein >= 15 && n.kcal >= 300) {
    return byNutrition('main', `a bean or lentil dish with ${n.protein} g protein and ${n.kcal} kcal a serving`);
  }
  if (cat === 'Lunch') return { role: 'light', basis: 'category', reason: 'filed under Lunch, and nothing in the name or the figures makes it a full main', review: false };
  if (n && n.kcal < 250 && n.protein < 10) return unsure(`an unfamiliar name with ${n.kcal} kcal and ${n.protein} g protein a serving: side, starter or condiment?`, 'side');
  return unsure(`an unfamiliar name${n ? ` (${n.protein} g protein, ${n.kcal} kcal a serving)` : ' and no nutrition figures'}`);
}

function occasionsFor(recipe, role) {
  const cat = recipe.category;
  const out = new Set();
  if (role === 'breakfast' || cat === 'Breakfast' || (BREAKFAST_TITLE.test(recipe.title) && ['main', 'light'].includes(role))) out.add('breakfast');
  if (role === 'light' || (cat === 'Lunch' && ['main', 'light'].includes(role))) out.add('lunch');
  if (role === 'main' && cat !== 'Breakfast') out.add('dinner');
  if (role === 'main' && cat === 'Lunch') out.add('lunch');
  return [...out];
}

/**
 * Classify one built recipe (the object loadRecipes() makes). `overrides` is
 * src/data/dish-roles.json: { slug: { role, reason, reviewedBy, date } }.
 */
function classify(recipe, overrides = {}) {
  const decision = decideRole(recipe, overrides);
  if (!ROLES[decision.role]) throw new Error(`"${recipe.slug}": unknown dish role "${decision.role}"`);
  const { equipment, sizes } = equipmentFor(recipe.title, recipe.steps);
  const methods = methodsFor(recipe, equipment);
  const { vessels, onePan } = vesselsFor(recipe, equipment);
  return {
    role: decision.role,
    roleBasis: decision.basis,
    roleReason: decision.reason,
    roleReview: decision.review,
    occasions: decision.review ? [] : occasionsFor(recipe, decision.role),
    methods,
    equipment,
    equipmentSizes: sizes,
    vessels,
    onePanCandidate: onePan,
    ingredientCount: parse(recipe.ingredients).filter(i => !i.group).length
  };
}

module.exports = { classify, ROLES, METHOD_LABELS, headPhrase, CATEGORY_DEFAULT };
