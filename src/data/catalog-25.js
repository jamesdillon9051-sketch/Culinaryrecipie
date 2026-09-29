/**
 * Weekly Delight — recipe catalog, volume twenty-five.
 * Seventy-four dishes from a list of 394 names, added only where the site had
 * no recipe for them: sauces and American dinners, the Canadian table, Britain
 * and Australia, and New Zealand's pies, slices and baking.
 *
 * Every name was tried against the 1,809 recipes already published, with
 * tools/dedupe-candidates.js. 208 were already recipes on the site, under the
 * same name or another, and 7 appear twice in the list. The other 179, 142 that
 * passed the word rules and 37 that shared a word with a published recipe, were
 * read by hand, and 74 were new. The remaining 105 were the same dish under
 * another name (damper bread is the damper, boil up is the boil-up, louise cake
 * is the louise cake, beef and broccoli stir-fry is the beef and broccoli,
 * sticky date pudding is the sticky toffee pudding) or a variant of a dish
 * already here, such as a protein swap, a slow-cooker version or a garnish, and
 * they were left out.
 *
 * This file is generated from the verified list rather than typed out from it,
 * and `npm run check` fails if two recipes are the same dish.
 *
 * Spread: American 22, New Zealand 20, Canadian 15, Australian 9, Italian 3,
 * British 2, Argentinian 1, Chinese 1, Mexican 1.
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
  c('alfredo-sauce', 'Alfredo Sauce', 'Italian', 'Quick Meals', 'Easy', 8, 12, 4, 0, 0, ['Vegetarian'], ['new'], 'Creamy Alfredo sauce in a saucepan with grated Parmesan being whisked in, next to a nest of fettuccine'),
  c('marinara-sauce', 'Marinara Sauce', 'Italian', 'Dinner', 'Easy', 10, 30, 6, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Marinara sauce simmering in a wide pan with whole basil leaves and a wooden spoon, tinned tomatoes beside it'),
  c('buffalo-wing-sauce', 'Buffalo Wing Sauce', 'American', 'Appetizers', 'Easy', 3, 5, 8, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Buffalo wing sauce in a glass jar, bright orange-red and glossy, with a whisk and a bowl of wings behind'),
  c('chimichurri', 'Chimichurri', 'Argentinian', 'Quick Meals', 'Easy', 15, 0, 6, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Bright green chimichurri sauce in a small bowl with a spoon, flecked with chilli flakes, next to sliced steak'),
  c('turkey-gravy', 'Turkey Gravy', 'American', 'Holiday Specials', 'Easy', 5, 25, 8, 0, 0, [], ['new'], 'Turkey gravy in a white gravy boat being poured over sliced turkey and mashed potatoes on a dinner plate'),
  c('ribeye-steak', 'Pan-Seared Ribeye Steak', 'American', 'Dinner', 'Medium', 10, 12, 2, 0, 0, ['Gluten-Free'], ['new'], 'Pan-seared ribeye steak with a dark crust in a cast iron pan with garlic, thyme and melted butter'),
  c('chicken-casserole', 'Chicken Casserole', 'American', 'Dinner', 'Easy', 20, 65, 6, 0, 0, [], ['new'], 'Chicken casserole in a baking dish with a golden cheddar and breadcrumb topping, rice and broccoli showing'),
  c('crispy-chicken-tenders', 'Crispy Chicken Tenders', 'American', 'Dinner', 'Medium', 15, 15, 4, 0, 0, [], ['new'], 'Crispy golden chicken tenders on a wire rack with a bowl of honey mustard dipping sauce'),
  c('pan-seared-pork-chops', 'Pan-Seared Pork Chops', 'American', 'Dinner', 'Easy', 10, 15, 4, 0, 0, ['Gluten-Free'], ['new'], 'Golden brown pan-seared pork chops in a cast iron skillet with garlic, thyme and butter'),
  c('bacon-wrapped-pork-tenderloin', 'Bacon-Wrapped Pork Tenderloin', 'American', 'Dinner', 'Medium', 15, 35, 6, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Sliced bacon-wrapped pork tenderloin with a sticky brown sugar glaze on a wooden board, pink and juicy inside'),
  c('seared-ahi-tuna', 'Seared Ahi Tuna', 'American', 'Quick Meals', 'Medium', 15, 6, 2, 0, 0, ['Dairy-Free'], ['new'], 'Sliced sesame-crusted seared ahi tuna steak, raw and ruby-red in the centre, with soy dipping sauce and cucumber'),
  c('grilled-shrimp-skewers', 'Grilled Shrimp Skewers', 'American', 'Dinner', 'Easy', 20, 6, 4, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Grilled shrimp skewers with charred edges, lemon wedges and parsley on a platter'),
  c('apple-fritters', 'Apple Fritters', 'American', 'Desserts', 'Medium', 25, 20, 12, 0, 0, ['Vegetarian'], ['new'], 'Golden apple fritters with a glossy vanilla glaze on a wire rack, showing chunks of apple in the craggy batter'),
  c('bagel-and-lox', 'Bagel and Lox', 'American', 'Breakfast', 'Easy', 10, 3, 2, 0, 0, [], ['new'], 'Toasted bagel halves with cream cheese, slices of smoked salmon, red onion, capers, tomato and dill on a plate'),
  c('chicken-tetrazzini', 'Chicken Tetrazzini', 'American', 'Dinner', 'Medium', 20, 50, 6, 0, 0, [], ['new'], 'Baked chicken tetrazzini in a casserole dish with a golden Parmesan and breadcrumb crust, spaghetti and mushrooms showing'),
  c('manicotti', 'Manicotti', 'American', 'Dinner', 'Medium', 30, 55, 6, 0, 0, ['Vegetarian'], ['new'], 'Baked manicotti tubes filled with ricotta and spinach in a dish of marinara sauce, topped with melted mozzarella'),
  c('queso-dip', 'Queso Dip', 'American', 'Appetizers', 'Easy', 10, 12, 8, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Smooth, creamy queso dip in a bowl with green chiles and jalapeño, with tortilla chips for dipping'),
  c('chicken-enchilada-soup', 'Chicken Enchilada Soup', 'Mexican', 'Dinner', 'Easy', 15, 35, 6, 0, 0, [], ['new'], 'Bowl of chicken enchilada soup topped with shredded cheese, avocado, coriander and crisp tortilla strips'),
  c('beef-and-rice-stuffed-peppers', 'Stuffed Peppers with Beef and Rice', 'American', 'Dinner', 'Easy', 25, 65, 4, 0, 0, ['Gluten-Free'], ['new'], 'Baked bell peppers stuffed with beef, rice and tomato, topped with melted cheese in a baking dish with tomato sauce'),
  c('sourdough-pancakes', 'Sourdough Pancakes', 'American', 'Breakfast', 'Easy', 10, 15, 4, 0, 0, ['Vegetarian'], ['new'], 'Stack of golden sourdough pancakes with melting butter and maple syrup on a plate, with a jar of sourdough starter beside it'),
  c('ricotta-pancakes', 'Ricotta Pancakes', 'American', 'Breakfast', 'Easy', 10, 15, 4, 0, 0, ['Vegetarian'], ['new'], 'Thick, fluffy ricotta pancakes stacked with fresh berries, honey and a dusting of icing sugar'),
  c('hash-brown-bake', 'Hash Brown Bake', 'American', 'Breakfast', 'Easy', 15, 60, 8, 0, 0, ['Gluten-Free'], ['new'], 'Golden hash brown bake in a baking dish cut into squares, with bacon, melted cheddar and a crisp potato base'),
  c('brussels-sprouts-with-bacon', 'Brussels Sprouts with Bacon', 'American', 'Dinner', 'Easy', 10, 30, 4, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Roasted Brussels sprouts with crisp bacon pieces on a roasting tray, browned at the edges with a squeeze of lemon'),
  c('cornbread-dressing', 'Cornbread Dressing', 'American', 'Holiday Specials', 'Medium', 30, 60, 10, 0, 0, [], ['new'], 'Golden baked cornbread dressing in a casserole dish, crisp on top and moist inside, with sage and celery'),
  c('parker-house-rolls', 'Parker House Rolls', 'American', 'Baking', 'Medium', 40, 18, 18, 0, 0, ['Vegetarian'], ['new'], 'Golden Parker House rolls folded in half and packed together in a baking tin, brushed with butter and flaky salt'),
  c('saskatoon-berry-pie', 'Saskatoon Berry Pie', 'Canadian', 'Desserts', 'Medium', 40, 60, 8, 0, 0, ['Vegetarian'], ['new'], 'Saskatoon berry pie with a lattice-free double crust cut open to show dark purple berry filling on a wooden table'),
  c('bullet-soup', 'Bullet Soup', 'Canadian', 'Dinner', 'Easy', 30, 45, 6, 0, 0, ['Dairy-Free'], ['new'], 'Bullet soup, a Métis meatball and vegetable soup with small macaroni and floured meatballs in a thick broth, served with bannock'),
  c('three-sisters-stew', 'Three Sisters Stew', 'Canadian', 'Dinner', 'Easy', 20, 45, 6, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Three sisters stew of butternut squash, corn and beans in a rich tomato broth in a bowl with fresh herbs'),
  c('blueberry-grunt', 'Maritime Blueberry Grunt', 'Canadian', 'Desserts', 'Easy', 15, 30, 6, 0, 0, ['Vegetarian'], ['new'], 'Blueberry grunt in a wide pan with soft biscuit dumplings on top of bubbling purple blueberries, served with cream'),
  c('garlic-fingers', 'Garlic Fingers', 'Canadian', 'Appetizers', 'Medium', 30, 15, 6, 0, 0, ['Vegetarian'], ['new'], 'Garlic fingers, a pizza-crust bread cut in strips, with melted mozzarella and garlic butter, with a bowl of dipping sauce'),
  c('newfoundland-snowballs', 'Newfoundland Snowballs', 'Canadian', 'Desserts', 'Easy', 15, 8, 30, 0, 0, ['Vegetarian'], ['new'], 'Chocolate oat and coconut Newfoundland snowballs rolled in white shredded coconut on a plate'),
  c('cod-cakes', 'Cod Cakes', 'Canadian', 'Dinner', 'Medium', 30, 40, 4, 0, 0, ['Dairy-Free'], ['new'], 'Golden pan-fried Newfoundland cod cakes on a plate with a lemon wedge and pickled beets'),
  c('puffed-wheat-squares', 'Puffed Wheat Squares', 'Canadian', 'Desserts', 'Easy', 5, 5, 16, 0, 0, ['Vegetarian'], ['new'], 'Squares of chocolate puffed wheat cake, sticky and chewy with brown sugar and syrup, cut on a board'),
  c('schmoo-torte', 'Schmoo Torte', 'Canadian', 'Desserts', 'Hard', 45, 30, 10, 0, 0, ['Vegetarian'], ['new'], 'Slice of schmoo torte with layers of pecan sponge, whipped cream and butterscotch sauce, topped with toasted pecans'),
  c('maple-walnut-cake', 'Maple Walnut Cake', 'Canadian', 'Baking', 'Medium', 35, 25, 12, 0, 0, ['Vegetarian'], ['new'], 'Two-layer maple walnut cake with maple buttercream and walnut halves on a cake stand, with a slice cut out'),
  c('maple-fudge', 'Maple Fudge', 'Canadian', 'Desserts', 'Medium', 10, 20, 36, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Squares of pale maple fudge stacked on a plate, creamy and smooth, with a maple leaf pattern'),
  c('maple-glazed-donuts', 'Maple Glazed Donuts', 'Canadian', 'Desserts', 'Medium', 40, 20, 12, 0, 0, ['Vegetarian'], ['new'], 'Golden yeast donuts with a shiny maple glaze on a wire rack, with a donut split open to show its soft crumb'),
  c('pate-chinois', 'Pâté Chinois', 'Canadian', 'Dinner', 'Easy', 25, 60, 6, 0, 0, [], ['new'], 'Pâté chinois in a baking dish, with layers of beef, corn and golden mashed potato with paprika, a slice served on a plate'),
  c('salmon-chowder', 'Salmon Chowder', 'Canadian', 'Dinner', 'Easy', 15, 35, 6, 0, 0, [], ['new'], 'Bowl of creamy salmon chowder with chunks of pink salmon, potato, sweetcorn and dill'),
  c('butter-tart-bars', 'Butter Tart Bars', 'Canadian', 'Baking', 'Medium', 20, 45, 16, 0, 0, ['Vegetarian'], ['new'], 'Squares of butter tart bars with a shortbread base and a gooey golden brown sugar filling, cut and stacked on a plate'),
  c('chicken-and-chorizo-pasta', 'Chicken and Chorizo Pasta', 'British', 'Dinner', 'Easy', 10, 25, 4, 0, 0, [], ['new'], 'Chicken and chorizo pasta with penne in a smoky red tomato cream sauce with spinach and parsley in a large bowl'),
  c('cheese-and-onion-quiche', 'Cheese and Onion Quiche', 'British', 'Lunch', 'Medium', 30, 60, 6, 0, 0, ['Vegetarian'], ['new'], 'Cheese and onion quiche with a golden shortcrust pastry and set egg custard, one slice cut out on a plate with salad'),
  c('tim-tam-cake', 'Tim Tam Cake', 'Australian', 'Baking', 'Medium', 30, 30, 12, 0, 0, ['Vegetarian'], ['new'], 'Chocolate Tim Tam layer cake with glossy ganache, whole Tim Tam biscuits on top and a slice cut to show biscuit pieces'),
  c('honeycomb', 'Honeycomb', 'Australian', 'Desserts', 'Medium', 5, 10, 12, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Golden honeycomb candy broken into shards, full of air bubbles, on a piece of parchment paper'),
  c('blueberry-bread-loaf', 'Blueberry Bread Loaf', 'Australian', 'Baking', 'Easy', 15, 55, 10, 0, 0, ['Vegetarian'], ['new'], 'Sliced blueberry bread loaf with a golden sugar-crusted top and purple blueberries in a soft crumb'),
  c('raspberry-white-chocolate-muffins', 'Raspberry and White Chocolate Muffins', 'Australian', 'Baking', 'Easy', 15, 22, 12, 0, 0, ['Vegetarian'], ['new'], 'Domed raspberry and white chocolate muffins in paper cases, one broken open to show red raspberries and white chocolate chunks'),
  c('honey-soy-baked-chicken', 'Honey Soy Baked Chicken', 'Australian', 'Dinner', 'Easy', 10, 45, 4, 0, 0, ['Dairy-Free'], ['new'], 'Honey soy baked chicken thighs and drumsticks with a sticky dark glaze, sesame seeds and spring onions on a tray'),
  c('honey-soy-chicken-stir-fry', 'Honey Soy Chicken Stir-Fry', 'Australian', 'Quick Meals', 'Easy', 15, 12, 4, 0, 0, ['Dairy-Free'], ['new'], 'Honey soy chicken stir-fry with red pepper, broccoli, snow peas and carrot in a glossy sauce in a wok'),
  c('san-choy-bow', 'San Choy Bow', 'Chinese', 'Appetizers', 'Easy', 15, 12, 4, 0, 0, ['Dairy-Free'], ['new'], 'San choy bow lettuce cups filled with savoury pork mince and water chestnuts, topped with crispy noodles and spring onion'),
  c('one-pot-lasagna', 'One-Pot Lasagna', 'Italian', 'Dinner', 'Easy', 10, 35, 6, 0, 0, [], ['new'], 'One-pot skillet lasagna with broken pasta sheets in meat sauce, topped with dollops of ricotta and melted mozzarella and basil'),
  c('honey-soy-chicken-wings', 'Honey Soy Chicken Wings', 'Australian', 'Appetizers', 'Medium', 15, 50, 4, 0, 0, ['Dairy-Free'], ['new'], 'Crispy baked chicken wings glazed in sticky honey soy sauce, with sesame seeds and spring onions on a plate'),
  c('grilled-moreton-bay-bugs', 'Grilled Moreton Bay Bugs', 'Australian', 'Dinner', 'Medium', 20, 10, 4, 0, 0, ['Gluten-Free'], ['new'], 'Grilled Moreton Bay bugs split in half with garlic butter and lemon wedges on a platter'),
  c('banana-cake-with-chocolate-icing', 'Banana Cake with Chocolate Icing', 'Australian', 'Baking', 'Easy', 20, 40, 12, 0, 0, ['Vegetarian'], ['new'], 'Iced banana cake with a swirl of glossy chocolate icing, a slice cut out to show a moist crumb'),
  c('hangi', 'Hāngī', 'New Zealand', 'Dinner', 'Medium', 40, 190, 6, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Oven hangi meal of tender pulled pork, orange kumara, potatoes, pumpkin and steamed cabbage served on a large plate'),
  c('paua-fritters', 'Pāua Fritters', 'New Zealand', 'Lunch', 'Medium', 25, 15, 4, 0, 0, [], ['new'], 'Golden pāua fritters with flecks of minced abalone in a thick batter, stacked on a plate with lemon wedges and buttered white bread'),
  c('smoked-eel-pate', 'Smoked Eel Pâté', 'New Zealand', 'Appetizers', 'Easy', 15, 0, 8, 0, 0, [], ['new'], 'Smoked eel pate in a white bowl with crackers, dark rye bread, cucumber slices and lemon wedges on a wooden board'),
  c('garlic-butter-crayfish', 'Garlic Butter Crayfish', 'New Zealand', 'Dinner', 'Medium', 10, 20, 4, 0, 0, ['Gluten-Free'], ['new'], 'Split bright red crayfish tails on a platter with melted garlic butter, chopped parsley and lemon wedges'),
  c('slow-cooked-lamb-shanks-in-red-wine', 'Slow-Cooked Lamb Shanks in Red Wine', 'New Zealand', 'Dinner', 'Medium', 20, 185, 4, 0, 0, [], ['new'], 'Braised lamb shanks on creamy mash with a glossy red wine sauce, rosemary sprigs and parsley in a wide bowl'),
  c('crispy-pork-belly-with-kumara-mash', 'Crispy Pork Belly with Kūmara Mash', 'New Zealand', 'Dinner', 'Medium', 30, 150, 4, 0, 0, [], ['new'], 'Thick slices of crispy pork belly with blistered crackling on orange kumara mash with a green apple and cabbage slaw'),
  c('venison-stew', 'Venison Stew', 'New Zealand', 'Dinner', 'Medium', 25, 180, 6, 0, 0, [], ['new'], 'Rich venison stew with tender chunks of meat, carrots, parsnips and mushrooms in a dark red wine gravy in a cast iron pot'),
  c('creamed-mushrooms-on-toast', 'Creamed Mushrooms on Toast', 'New Zealand', 'Breakfast', 'Easy', 10, 18, 4, 0, 0, ['Vegetarian'], ['new'], 'Golden creamed mushrooms with thyme and parsley piled on thick slices of toast on a white plate'),
  c('potato-top-pie', 'Potato Top Pie', 'New Zealand', 'Dinner', 'Medium', 30, 75, 6, 0, 0, [], ['new'], 'Family potato top pie in a round dish with a golden cheesy mashed potato top, one slice cut out to show the beef mince filling'),
  c('mince-and-cheese-pie', 'Mince and Cheese Pie', 'New Zealand', 'Lunch', 'Medium', 40, 55, 6, 0, 0, [], ['new'], 'Six golden individual mince and cheese pies with flaky puff pastry lids on a tray, one broken open to show cheesy beef mince'),
  c('lamb-and-rosemary-pie', 'Lamb and Rosemary Pie', 'New Zealand', 'Dinner', 'Medium', 30, 135, 6, 0, 0, [], ['new'], 'Large lamb and rosemary pie with a golden puff pastry top in a round dish, a slice lifted out to show tender lamb in gravy'),
  c('cheese-and-marmite-pinwheels', 'Cheese and Marmite Pinwheels', 'New Zealand', 'Appetizers', 'Easy', 20, 18, 12, 0, 0, ['Vegetarian'], ['new'], 'Golden puff pastry pinwheels swirled with Marmite and melted cheddar cheese on a baking tray, cooling on a wire rack'),
  c('savoury-corn-muffins', 'Savoury Corn Muffins', 'New Zealand', 'Baking', 'Easy', 15, 22, 12, 0, 0, ['Vegetarian'], ['new'], 'Twelve golden savoury corn and cheese muffins in a muffin tin, one split to show corn kernels and melted cheddar'),
  c('rewena-paraoa', 'Rēwena Parāoa', 'New Zealand', 'Baking', 'Hard', 40, 65, 12, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Round loaf of rewena paraoa Maori potato bread with a golden crust and three slashes on top, one slice cut to show the soft crumb'),
  c('tan-square', 'Tan Square', 'New Zealand', 'Baking', 'Easy', 25, 33, 16, 0, 0, ['Vegetarian'], ['new'], 'Squares of tan slice with a buttery shortbread base, soft chewy caramel and a golden crumble topping on a wooden board'),
  c('peppermint-slice', 'Peppermint Slice', 'New Zealand', 'Desserts', 'Easy', 25, 5, 16, 0, 0, ['Vegetarian'], ['new'], 'Squares of chocolate peppermint slice with a dark chocolate topping, pale green peppermint layer and cocoa coconut biscuit base'),
  c('squiggle-slice', 'Squiggle Slice', 'New Zealand', 'Desserts', 'Easy', 30, 10, 20, 0, 0, ['Vegetarian'], ['new'], 'Bars of squiggle slice with a biscuit base, pale yellow custard icing, crushed honeycomb, chocolate and yellow chocolate squiggles'),
  c('peanut-brownies', 'Peanut Brownies', 'American', 'Baking', 'Easy', 20, 35, 16, 0, 0, ['Vegetarian'], ['new'], 'Squares of fudgy peanut brownies with a crackled top, swirls of peanut butter and chopped roasted peanuts on a wire rack'),
  c('condensed-milk-biscuits', 'Condensed Milk Biscuits', 'New Zealand', 'Baking', 'Easy', 20, 14, 30, 0, 0, ['Vegetarian'], ['new'], 'Golden condensed milk biscuits with fork marks on a wire rack, some with chocolate chips, beside a glass of milk'),
  c('boston-bun', 'Boston Bun', 'New Zealand', 'Baking', 'Medium', 40, 20, 10, 0, 0, ['Vegetarian'], ['new'], 'Iced Boston buns with thick pink icing and desiccated coconut on a wire rack, one torn open to show a soft spiced crumb with sultanas'),
  c('date-scones', 'Date Scones', 'New Zealand', 'Baking', 'Easy', 15, 14, 12, 0, 0, ['Vegetarian'], ['new'], 'Freshly baked date scones on a wire rack, one split and buttered, with chopped dates visible in the crumb')
];
