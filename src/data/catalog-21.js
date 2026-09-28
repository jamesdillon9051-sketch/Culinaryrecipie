/**
 * Weekly Delight — recipe catalog, volume twenty-one.
 * A hundred dishes the site did not have: from the top-searched index, and from
 * the gaps it left.
 *
 * Nothing here is a second page for a dish already published. The index that
 * prompted this volume names 156 titles, 140 of them distinct — not the eight
 * thousand its heading promises — and tools/dedupe-candidates.js graded each
 * against the 1,409 recipes then on the site. 52 were already published under
 * the same or a near-identical name, 12 repeated another title in the list, 9
 * were a word away from a published dish, and 67 passed the word rules. Reading
 * those 67 removed 33 more: 28 were a dish the site already had under another
 * name (potato bake is the gratin dauphinois, scones with clotted cream are the
 * English scones, chicken and chorizo jambalaya is the jambalaya) or a flavour
 * or appliance variant of one, and 5 were second listings of a dish counted
 * once. The 34 that remain are here.
 *
 * The other 66 come from the same test run over 803 more dishes the index did
 * not name, of which 246 turned out to be published already. What was left was
 * where the catalogue was thinnest against real demand: the American weeknight
 * dinner, the air fryer, and the Canadian, Australian and New Zealand kitchens,
 * which had five recipes between them.
 *
 * This file is generated from the verified list rather than typed out from it,
 * and `npm run check` now fails if two recipes are the same dish
 * (tools/duplicates-audit.js).
 *
 * Spread: American 71, New Zealand 10, Canadian 6, Australian 4, Chinese 4, British 1, French 1, International 1, Italian 1, Mexican 1.
 *
 * Unrated, for the reason given in catalog-4.js.
 *
 * c(slug, title, cuisine, category, difficulty, prepMin, cookMin, servings,
 *   rating, reviews, dietTags, badges, imageQuery?)
 */

function c(slug, title, cuisine, category, difficulty, prep, cook, servings, rating, reviews, tags, badges, imageQuery) {
  return {
    slug, title, cuisine, category, difficulty, prep, cook, servings, rating, reviews,
    tags: tags || [],
    badges: badges || [],
    imageQuery: imageQuery || title
  };
}

module.exports = [
  c('marry-me-chicken', 'Marry Me Chicken', 'American', 'Dinner', 'Easy', 10, 25, 4, 0, 0, [], ['new'], 'Marry me chicken sun-dried tomato cream sauce skillet'),
  c('white-chicken-chili', 'White Chicken Chili', 'American', 'Dinner', 'Easy', 15, 35, 6, 0, 0, ['Gluten-Free'], ['new'], 'White chicken chili white beans green chiles cilantro bowl'),
  c('lasagna-soup', 'Lasagna Soup', 'American', 'Dinner', 'Easy', 15, 40, 6, 0, 0, [], ['new'], 'Lasagna soup tomato broth broken noodles ricotta mozzarella bowl'),
  c('air-fryer-chicken-breast', 'Air Fryer Chicken Breast', 'American', 'Dinner', 'Easy', 10, 15, 4, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Air fryer chicken breast sliced juicy golden paprika'),
  c('air-fryer-pork-chops', 'Air Fryer Pork Chops', 'American', 'Dinner', 'Easy', 10, 12, 4, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Air fryer pork chops bone-in browned rub resting board'),
  c('crockpot-potato-soup', 'Crockpot Potato Soup', 'American', 'Dinner', 'Easy', 20, 420, 6, 0, 0, [], ['new'], 'Crockpot potato soup loaded bacon cheddar chives bowl'),
  c('breakfast-casserole', 'Breakfast Casserole', 'American', 'Breakfast', 'Easy', 20, 60, 8, 0, 0, [], ['new'], 'Breakfast casserole sausage egg cheese bread baked dish slice'),
  c('garlic-knots', 'Garlic Knots', 'American', 'Baking', 'Medium', 25, 18, 8, 0, 0, ['Vegetarian'], ['new'], 'Garlic knots pizzeria dough tied parsley garlic butter Parmesan'),
  c('protein-muffins', 'Protein Muffins', 'American', 'Healthy', 'Easy', 10, 22, 12, 0, 0, ['Vegetarian'], ['new'], 'Protein muffins blueberry banana oat golden tray'),
  c('sausage-stuffed-peppers', 'Sausage-Stuffed Bell Peppers', 'American', 'Dinner', 'Easy', 20, 45, 4, 0, 0, [], ['new'], 'Sausage stuffed bell peppers rice tomato melted mozzarella baking dish'),
  c('chicken-and-dumplings', 'Chicken and Dumplings', 'American', 'Dinner', 'Medium', 25, 50, 6, 0, 0, [], ['new'], 'Chicken and dumplings stew fluffy drop dumplings parsley bowl'),
  c('stuffed-shells', 'Stuffed Shells', 'American', 'Dinner', 'Easy', 30, 50, 6, 0, 0, ['Vegetarian'], ['new'], 'Stuffed shells ricotta marinara baked dish melted mozzarella'),
  c('beef-enchiladas', 'Beef Enchiladas', 'Mexican', 'Dinner', 'Medium', 25, 45, 6, 0, 0, [], ['new'], 'Beef enchiladas red chili sauce melted cheese baking dish'),
  c('taco-casserole', 'Taco Casserole', 'American', 'Dinner', 'Easy', 15, 40, 6, 0, 0, [], ['new'], 'Taco casserole layered beef black beans tortilla chips melted cheese'),
  c('tater-tot-casserole', 'Tater Tot Casserole', 'American', 'Dinner', 'Easy', 15, 55, 6, 0, 0, [], ['new'], 'Tater tot casserole ground beef green beans cheese crisp golden tots'),
  c('chicken-spaghetti', 'Chicken Spaghetti', 'American', 'Dinner', 'Easy', 20, 45, 8, 0, 0, [], ['new'], 'Chicken spaghetti baked cheddar sauce peppers shredded chicken casserole'),
  c('beer-can-chicken', 'Beer Can Chicken', 'American', 'Dinner', 'Medium', 20, 90, 6, 0, 0, ['Dairy-Free'], ['new'], 'Beer can chicken whole bird upright grill brown sugar rub crisp skin'),
  c('nashville-hot-chicken', 'Nashville Hot Chicken', 'American', 'Dinner', 'Hard', 30, 40, 6, 0, 0, [], ['new'], 'Nashville hot chicken cayenne paste fried crisp white bread pickles'),
  c('one-pot-chicken-and-rice', 'One-Pot Chicken and Rice', 'American', 'Dinner', 'Easy', 10, 45, 4, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'One pot chicken and rice thighs paprika peas lemon parsley'),
  c('sweet-and-sour-chicken', 'Sweet and Sour Chicken', 'Chinese', 'Dinner', 'Medium', 25, 20, 4, 0, 0, ['Dairy-Free'], ['new'], 'Sweet and sour chicken glossy red sauce pineapple peppers wok'),
  c('mongolian-beef', 'Mongolian Beef', 'Chinese', 'Dinner', 'Easy', 15, 15, 4, 0, 0, ['Dairy-Free'], ['new'], 'Mongolian beef sliced flank steak dark glaze spring onions wok'),
  c('egg-rolls', 'Egg Rolls', 'Chinese', 'Appetizers', 'Medium', 40, 20, 8, 0, 0, ['Dairy-Free'], ['new'], 'Egg rolls fried blistered golden pork cabbage cut open dipping sauce'),
  c('crab-rangoon', 'Crab Rangoon', 'Chinese', 'Appetizers', 'Medium', 25, 12, 6, 0, 0, [], ['new'], 'Crab rangoon fried wonton pouches cream cheese crab dipping sauce'),
  c('cajun-shrimp', 'Cajun Shrimp', 'American', 'Quick Meals', 'Easy', 10, 8, 4, 0, 0, ['Gluten-Free'], ['new'], 'Cajun shrimp seared garlic butter lemon parsley skillet'),
  c('coconut-shrimp', 'Coconut Shrimp', 'American', 'Appetizers', 'Medium', 25, 12, 4, 0, 0, ['Dairy-Free'], ['new'], 'Coconut shrimp golden panko coconut crust sweet chili dipping sauce'),
  c('one-pot-chili-mac', 'One-Pot Chili Mac', 'American', 'Dinner', 'Easy', 10, 30, 6, 0, 0, [], ['new'], 'One pot chili mac beef beans macaroni melted cheddar spring onions'),
  c('sheet-pan-chicken-and-vegetables', 'Sheet Pan Chicken and Vegetables', 'American', 'Dinner', 'Easy', 15, 40, 4, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Sheet pan chicken thighs potatoes carrots broccoli lemon roasted tray'),
  c('air-fryer-chicken-thighs', 'Air Fryer Chicken Thighs', 'American', 'Dinner', 'Easy', 10, 25, 4, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Air fryer chicken thighs bone-in crisp skin golden paprika'),
  c('air-fryer-salmon', 'Air Fryer Salmon', 'American', 'Quick Meals', 'Easy', 5, 10, 4, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Air fryer salmon fillets skin-on lemon garlic crisp flaky'),
  c('air-fryer-bacon', 'Air Fryer Bacon', 'American', 'Breakfast', 'Easy', 2, 10, 4, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Air fryer bacon rashers crisp evenly browned basket'),
  c('air-fryer-brussels-sprouts', 'Air Fryer Brussels Sprouts', 'American', 'Healthy', 'Easy', 10, 15, 4, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Air fryer brussels sprouts halved charred crisp leaves balsamic glaze'),
  c('air-fryer-sweet-potato-fries', 'Air Fryer Sweet Potato Fries', 'American', 'Healthy', 'Easy', 10, 20, 4, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Air fryer sweet potato fries crisp orange sticks paprika basket'),
  c('air-fryer-chicken-tenders', 'Air Fryer Chicken Tenders', 'American', 'Quick Meals', 'Easy', 15, 12, 4, 0, 0, [], ['new'], 'Air fryer chicken tenders panko golden crunchy strips honey mustard'),
  c('air-fryer-shrimp', 'Air Fryer Shrimp', 'American', 'Quick Meals', 'Easy', 10, 8, 4, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Air fryer shrimp pink curled paprika garlic lemon wedge'),
  c('air-fryer-french-fries', 'Air Fryer French Fries', 'American', 'Appetizers', 'Easy', 15, 25, 4, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Air fryer french fries golden russet sticks crisp fluffy basket'),
  c('air-fryer-broccoli', 'Air Fryer Broccoli', 'American', 'Healthy', 'Easy', 5, 8, 4, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Air fryer broccoli charred crisp florets garlic lemon chilli'),
  c('air-fryer-hard-boiled-eggs', 'Air Fryer Hard Boiled Eggs', 'American', 'Breakfast', 'Easy', 2, 15, 6, 0, 0, ['Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Air fryer hard boiled eggs halved yolk ice bath peeled'),
  c('breakfast-sandwich', 'Breakfast Sandwich', 'American', 'Breakfast', 'Easy', 5, 10, 2, 0, 0, [], ['new'], 'Breakfast sandwich english muffin egg melted cheese bacon'),
  c('sausage-egg-and-cheese-biscuit', 'Sausage, Egg and Cheese Biscuit', 'American', 'Breakfast', 'Medium', 20, 25, 6, 0, 0, [], ['new'], 'Sausage egg and cheese biscuit split buttermilk biscuit fried egg patty'),
  c('crustless-quiche', 'Crustless Quiche', 'American', 'Breakfast', 'Easy', 15, 40, 6, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Crustless quiche spinach mushroom gruyere slice golden custard'),
  c('baked-oatmeal', 'Baked Oatmeal', 'American', 'Breakfast', 'Easy', 10, 35, 6, 0, 0, ['Vegetarian'], ['new'], 'Baked oatmeal banana blueberry walnut slice baking dish'),
  c('french-toast-casserole', 'French Toast Casserole', 'American', 'Breakfast', 'Easy', 20, 50, 8, 0, 0, ['Vegetarian'], ['new'], 'French toast casserole brioche cubes cinnamon pecan streusel maple syrup'),
  c('home-fries', 'Home Fries', 'American', 'Breakfast', 'Easy', 10, 30, 4, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Home fries diced potatoes onion peppers crisp browned skillet'),
  c('crepes', 'Crêpes', 'French', 'Breakfast', 'Easy', 10, 20, 4, 0, 0, ['Vegetarian'], ['new'], 'Crepes thin golden folded lemon sugar plate'),
  c('chicken-and-rice-soup', 'Chicken and Rice Soup', 'American', 'Dinner', 'Easy', 15, 45, 6, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Chicken and rice soup carrots celery dill lemon bowl'),
  c('cream-of-mushroom-soup', 'Cream of Mushroom Soup', 'American', 'Lunch', 'Easy', 10, 30, 4, 0, 0, ['Vegetarian'], ['new'], 'Cream of mushroom soup velvety brown thyme bowl cream swirl'),
  c('taco-soup', 'Taco Soup', 'American', 'Dinner', 'Easy', 10, 30, 6, 0, 0, ['Gluten-Free'], ['new'], 'Taco soup ground beef beans corn tomatoes cheese tortilla chips avocado'),
  c('ham-and-bean-soup', 'Ham and Bean Soup', 'American', 'Dinner', 'Easy', 20, 110, 6, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Ham and bean soup navy beans smoked ham hock carrots bowl'),
  c('cabbage-soup', 'Cabbage Soup', 'American', 'Healthy', 'Easy', 15, 35, 6, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Cabbage soup carrots tomatoes peppers green broth bowl'),
  c('macaroni-salad', 'Macaroni Salad', 'American', 'Lunch', 'Easy', 20, 10, 8, 0, 0, ['Vegetarian'], ['new'], 'Macaroni salad creamy elbow pasta celery pepper paprika picnic bowl'),
  c('pasta-salad', 'Pasta Salad', 'American', 'Lunch', 'Easy', 20, 10, 8, 0, 0, ['Vegetarian'], ['new'], 'Pasta salad rotini cherry tomatoes cucumber olives mozzarella Italian dressing'),
  c('broccoli-salad', 'Broccoli Salad', 'American', 'Lunch', 'Easy', 15, 8, 6, 0, 0, [], ['new'], 'Broccoli salad bacon cheddar cranberries sunflower seeds creamy dressing'),
  c('twice-baked-potatoes', 'Twice-Baked Potatoes', 'American', 'Dinner', 'Medium', 20, 85, 4, 0, 0, [], ['new'], 'Twice baked potatoes cheddar bacon chives melted stuffed skins'),
  c('fried-okra', 'Fried Okra', 'American', 'Appetizers', 'Easy', 15, 15, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Fried okra cornmeal crust golden bites hot sauce dipping'),
  c('hush-puppies', 'Hush Puppies', 'American', 'Appetizers', 'Easy', 15, 15, 6, 0, 0, ['Vegetarian'], ['new'], 'Hush puppies golden cornmeal fritters onion balls fried basket'),
  c('collard-greens', 'Collard Greens', 'American', 'Dinner', 'Easy', 20, 75, 6, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Collard greens smoked ham hock pot liquor cider vinegar bowl'),
  c('cherry-pie', 'Cherry Pie', 'American', 'Desserts', 'Medium', 40, 65, 8, 0, 0, ['Vegetarian'], ['new'], 'Cherry pie double crust glossy filling vented golden slice'),
  c('blueberry-pie', 'Blueberry Pie', 'American', 'Desserts', 'Medium', 45, 60, 8, 0, 0, ['Vegetarian'], ['new'], 'Blueberry pie lattice top deep purple filling slice golden crust'),
  c('whoopie-pies', 'Whoopie Pies', 'American', 'Desserts', 'Medium', 30, 24, 12, 0, 0, ['Vegetarian'], ['new'], 'Whoopie pies chocolate cake rounds marshmallow cream filling stacked'),
  c('chocolate-crinkle-cookies', 'Chocolate Crinkle Cookies', 'American', 'Baking', 'Easy', 20, 24, 24, 0, 0, ['Vegetarian'], ['new'], 'Chocolate crinkle cookies powdered sugar cracked tops fudgy tray'),
  c('banana-muffins', 'Banana Muffins', 'American', 'Breakfast', 'Easy', 15, 22, 12, 0, 0, ['Vegetarian'], ['new'], 'Banana muffins domed tops golden cinnamon sugar tin tray'),
  c('apple-cider-donuts', 'Apple Cider Donuts', 'American', 'Baking', 'Medium', 20, 30, 12, 0, 0, ['Vegetarian'], ['new'], 'Apple cider donuts baked cinnamon sugar coating ring tray'),
  c('peanut-brittle', 'Peanut Brittle', 'American', 'Desserts', 'Medium', 10, 25, 16, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Peanut brittle amber sugar shards roasted peanuts broken pieces'),
  c('dinner-rolls', 'Dinner Rolls', 'American', 'Baking', 'Medium', 30, 20, 12, 0, 0, ['Vegetarian'], ['new'], 'Dinner rolls soft buttery pull-apart golden tray brushed butter'),
  c('poutine', 'Poutine', 'Canadian', 'Lunch', 'Medium', 25, 40, 4, 0, 0, [], ['new'], 'Poutine crisp chips squeaky cheese curds brown gravy bowl'),
  c('butter-tarts', 'Butter Tarts', 'Canadian', 'Desserts', 'Medium', 40, 18, 12, 0, 0, ['Vegetarian'], ['new'], 'Butter tarts flaky pastry gooey brown sugar filling raisins muffin tin'),
  c('nanaimo-bars', 'Nanaimo Bars', 'Canadian', 'Desserts', 'Medium', 35, 10, 16, 0, 0, ['Vegetarian'], ['new'], 'Nanaimo bars three layers coconut base custard icing chocolate top squares'),
  c('tourtiere', 'Tourtière', 'Canadian', 'Dinner', 'Medium', 45, 100, 8, 0, 0, [], ['new'], 'Tourtiere french canadian meat pie golden crust sliced spiced pork'),
  c('maple-glazed-salmon', 'Maple Glazed Salmon', 'Canadian', 'Quick Meals', 'Easy', 10, 12, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'Maple glazed salmon fillets baked lacquered mustard chives'),
  c('roasted-root-vegetables', 'Roasted Root Vegetables', 'Canadian', 'Healthy', 'Easy', 20, 45, 6, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Roasted root vegetables carrots parsnips swede sweet potato maple thyme tray'),
  c('prawn-cocktail', 'Prawn Cocktail', 'British', 'Appetizers', 'Easy', 20, 0, 4, 0, 0, [], ['new'], 'Prawn cocktail glass Marie Rose sauce shredded lettuce cucumber lemon wedge'),
  c('beef-and-barley-soup', 'Beef and Barley Soup', 'American', 'Dinner', 'Easy', 20, 115, 6, 0, 0, ['Dairy-Free'], ['new'], 'Beef and barley soup chuck pearl barley carrots mushrooms broth bowl'),
  c('damper', 'Damper', 'Australian', 'Baking', 'Easy', 10, 30, 8, 0, 0, ['Vegetarian'], ['new'], 'Damper round loaf cross cut golden torn open butter golden syrup'),
  c('crispy-skin-barramundi', 'Crispy Skin Barramundi', 'Australian', 'Quick Meals', 'Medium', 10, 12, 4, 0, 0, ['Gluten-Free'], ['new'], 'Crispy skin barramundi fillet golden skin lemon caper brown butter'),
  c('lamb-cutlets', 'Lamb Cutlets', 'Australian', 'Dinner', 'Easy', 10, 8, 4, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Lamb cutlets barbecue rosemary garlic lemon seared bones'),
  c('grilled-prawn-salad', 'Grilled Prawn Salad', 'Australian', 'Lunch', 'Easy', 20, 6, 4, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Grilled prawn salad mango avocado cos lettuce lime chilli dressing platter'),
  c('creamy-tuscan-pasta', 'Creamy Tuscan Pasta', 'Italian', 'Quick Meals', 'Easy', 10, 20, 4, 0, 0, ['Vegetarian'], ['new'], 'Creamy tuscan pasta penne sun-dried tomatoes spinach parmesan cream sauce'),
  c('southland-cheese-rolls', 'Southland Cheese Rolls', 'New Zealand', 'Lunch', 'Easy', 15, 10, 6, 0, 0, ['Vegetarian'], ['new'], 'Southland cheese rolls golden toasted bread rolled cheese onion filling'),
  c('cheese-and-bacon-rolls', 'Cheese and Bacon Rolls', 'New Zealand', 'Baking', 'Medium', 30, 30, 12, 0, 0, [], ['new'], 'Cheese and bacon rolls spiral scrolls golden melted cheese bakery tray'),
  c('afghan-biscuits', 'Afghan Biscuits', 'New Zealand', 'Baking', 'Medium', 25, 18, 18, 0, 0, ['Vegetarian'], ['new'], 'Afghan biscuits chocolate cornflake cookies chocolate icing walnut half'),
  c('hokey-pokey-ice-cream', 'Hokey Pokey Ice Cream', 'New Zealand', 'Desserts', 'Medium', 25, 10, 8, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Hokey pokey ice cream honeycomb toffee pieces vanilla scoops'),
  c('kumara-soup', 'Kumara Soup', 'New Zealand', 'Lunch', 'Easy', 15, 30, 6, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Kumara soup orange velvety coconut milk swirl coriander pumpkin seeds'),
  c('roasted-kumara-salad', 'Roasted Kumara Salad', 'New Zealand', 'Lunch', 'Easy', 15, 30, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Roasted kumara salad rocket feta pumpkin seeds red onion platter'),
  c('whitebait-fritters', 'Whitebait Fritters', 'New Zealand', 'Lunch', 'Medium', 10, 12, 4, 0, 0, ['Gluten-Free'], ['new'], 'Whitebait fritters golden egg patties lemon wedge white bread'),
  c('seafood-chowder', 'Seafood Chowder', 'New Zealand', 'Dinner', 'Medium', 25, 35, 6, 0, 0, [], ['new'], 'Seafood chowder creamy white fish mussels prawns potato bacon bowl parsley'),
  c('kumara-coconut-curry', 'Kumara and Coconut Curry', 'New Zealand', 'Dinner', 'Easy', 15, 30, 4, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Kumara and coconut curry chickpeas spinach red curry rice bowl'),
  c('kiwi-bacon-and-egg-pie', 'Bacon and Egg Pie', 'New Zealand', 'Lunch', 'Medium', 30, 50, 6, 0, 0, [], ['new'], 'Bacon and egg pie whole eggs puff pastry lid golden slice cut'),
  c('pan-seared-salmon', 'Pan-Seared Salmon', 'International', 'Quick Meals', 'Easy', 5, 10, 4, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Pan seared salmon fillet crisp skin lemon dill cast iron'),
  c('smothered-pork-chops', 'Smothered Pork Chops', 'American', 'Dinner', 'Medium', 15, 40, 4, 0, 0, [], ['new'], 'Smothered pork chops onion gravy skillet golden browned parsley'),
  c('pork-tenderloin', 'Pork Tenderloin', 'American', 'Dinner', 'Easy', 15, 25, 4, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Pork tenderloin roasted Dijon herb crust sliced rosy juicy'),
  c('seared-scallops', 'Seared Scallops', 'American', 'Quick Meals', 'Medium', 10, 6, 4, 0, 0, ['Gluten-Free'], ['new'], 'Seared scallops golden crust garlic butter lemon parsley plate'),
  c('turkey-burgers', 'Turkey Burgers', 'American', 'Dinner', 'Easy', 15, 12, 4, 0, 0, [], ['new'], 'Turkey burgers juicy patty cheddar toasted bun lettuce tomato'),
  c('baked-cod', 'Baked Cod', 'American', 'Dinner', 'Easy', 10, 15, 4, 0, 0, [], ['new'], 'Baked cod fillets golden lemon herb breadcrumb crust flaking'),
  c('honey-mustard-chicken', 'Honey Mustard Chicken', 'American', 'Dinner', 'Easy', 10, 30, 4, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Honey mustard chicken thighs baked sticky glaze wholegrain mustard tray'),
  c('cajun-chicken-pasta', 'Cajun Chicken Pasta', 'American', 'Dinner', 'Easy', 15, 25, 4, 0, 0, [], ['new'], 'Cajun chicken pasta penne blackened chicken peppers cream sauce spring onions'),
  c('sheet-pan-sausage-and-peppers', 'Sheet Pan Sausage and Peppers', 'American', 'Dinner', 'Easy', 10, 35, 4, 0, 0, [], ['new'], 'Sheet pan sausage and peppers roasted onions garlic balsamic browned tray'),
  c('garlic-butter-chicken-bites', 'Garlic Butter Chicken Bites', 'American', 'Quick Meals', 'Easy', 10, 10, 4, 0, 0, ['Gluten-Free'], ['new'], 'Garlic butter chicken bites golden seared cubes lemon parsley skillet'),
  c('flank-steak', 'Flank Steak', 'American', 'Dinner', 'Easy', 10, 10, 4, 0, 0, ['Dairy-Free'], ['new'], 'Flank steak marinated grilled sliced thin against the grain medium rare'),
  c('slow-cooker-pulled-chicken', 'Slow Cooker Pulled Chicken', 'American', 'Dinner', 'Easy', 10, 240, 8, 0, 0, [], ['new'], 'Slow cooker pulled chicken shredded barbecue sauce bun coleslaw'),
  c('hard-boiled-eggs', 'Hard Boiled Eggs', 'American', 'Breakfast', 'Easy', 2, 12, 6, 0, 0, ['Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Hard boiled eggs halved yolk ice bath peeled bowl')
];
