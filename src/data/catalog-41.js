'use strict';

/**
 * Weekly Delight — recipe catalog, volume forty-one.
 * One hundred breakfasts, drinks, holiday dishes, cakes, slices and bakes: pancakes and eggs, milkshakes, cordials and punches, a roast turkey, and the loaves, brownies and cupcakes of the tea table.
 * They are the variations that cooks in the USA, Canada, Australia, the UK and New
 * Zealand look for by name; no search-volume data was used to pick or rank them.
 *
 * Every name was tried against the recipes already published, with
 * tools/dedupe-candidates.js, then compared by hand with the closest existing
 * recipes, and the dishes that were the same under another name were dropped.
 *
 * Spread: American 65, British 16, Australian 4, Indian 2, Italian 2, Canadian 1, French 1, German 1, Greek 1, Irish 1, Mexican 1, Middle Eastern 1, New Zealand 1, Scottish 1, Spanish 1, Swiss 1.
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
  c('cinnamon-roll-pancakes', 'Cinnamon Roll Pancakes', 'American', 'Breakfast', 'Easy', 15, 15, 4, 0, 0, ['Vegetarian'], ['new'], 'cinnamon roll pancakes'),
  c('savoury-waffles', 'Savoury Waffles', 'American', 'Breakfast', 'Easy', 10, 15, 4, 0, 0, ['Vegetarian'], ['new'], 'savoury waffles'),
  c('churro-waffles', 'Churro Waffles', 'American', 'Breakfast', 'Easy', 10, 15, 4, 0, 0, ['Vegetarian'], ['new'], 'churro waffles'),
  c('stuffed-french-toast', 'Stuffed French Toast', 'American', 'Breakfast', 'Medium', 15, 12, 4, 0, 0, ['Vegetarian'], ['new'], 'stuffed french toast'),
  c('challah-french-toast', 'Challah French Toast', 'American', 'Breakfast', 'Easy', 10, 12, 4, 0, 0, ['Vegetarian'], ['new'], 'challah french toast'),
  c('breakfast-tacos', 'Breakfast Tacos', 'Mexican', 'Breakfast', 'Easy', 10, 10, 4, 0, 0, [], ['new'], 'breakfast tacos'),
  c('bacon-egg-and-cheese-muffin', 'Bacon Egg and Cheese Muffin', 'American', 'Breakfast', 'Easy', 5, 10, 2, 0, 0, [], ['new'], 'bacon egg and cheese muffin'),
  c('greek-omelette', 'Greek Omelette', 'Greek', 'Breakfast', 'Easy', 5, 8, 1, 0, 0, ['Vegetarian'], ['new'], 'greek omelette'),
  c('smashed-avocado-on-sourdough', 'Smashed Avocado on Sourdough', 'Australian', 'Breakfast', 'Easy', 5, 5, 2, 0, 0, ['Vegetarian'], ['new'], 'smashed avocado on sourdough'),
  c('ricotta-toast-with-honey', 'Ricotta Toast with Honey', 'Italian', 'Breakfast', 'Easy', 5, 3, 2, 0, 0, ['Vegetarian'], ['new'], 'ricotta toast with honey'),
  c('full-irish-breakfast', 'Full Irish Breakfast', 'Irish', 'Breakfast', 'Medium', 15, 25, 4, 0, 0, [], ['new'], 'full irish breakfast'),
  c('full-scottish-breakfast', 'Full Scottish Breakfast', 'Scottish', 'Breakfast', 'Medium', 15, 25, 4, 0, 0, [], ['new'], 'full scottish breakfast'),
  c('apple-pie-overnight-oats', 'Apple Pie Overnight Oats', 'American', 'Breakfast', 'Easy', 10, 0, 2, 0, 0, ['Vegetarian'], ['new'], 'apple pie overnight oats'),
  c('marmite-cheese-scrolls', 'Marmite Cheese Scrolls', 'New Zealand', 'Baking', 'Medium', 25, 20, 12, 0, 0, ['Vegetarian'], ['new'], 'marmite cheese scrolls'),
  c('anzac-slice', 'Anzac Slice', 'Australian', 'Baking', 'Easy', 15, 25, 16, 0, 0, ['Vegetarian'], ['new'], 'anzac slice'),
  c('apricot-slice', 'Apricot Slice', 'Australian', 'Baking', 'Easy', 20, 30, 16, 0, 0, ['Vegetarian'], ['new'], 'apricot slice'),
  c('arnold-palmer', 'Arnold Palmer', 'American', 'Drinks', 'Easy', 5, 0, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'arnold palmer'),
  c('apple-pie-smoothie', 'Apple Pie Smoothie', 'American', 'Drinks', 'Easy', 5, 0, 2, 0, 0, ['Vegetarian'], ['new'], 'apple pie smoothie'),
  c('blackcurrant-cordial', 'Blackcurrant Cordial', 'British', 'Drinks', 'Easy', 10, 15, 10, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'blackcurrant cordial'),
  c('caramel-macchiato', 'Caramel Macchiato', 'American', 'Drinks', 'Easy', 5, 3, 1, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'caramel macchiato'),
  c('christmas-punch', 'Christmas Punch', 'American', 'Holiday Specials', 'Easy', 10, 0, 12, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'christmas punch'),
  c('cinderella-mocktail', 'Cinderella Mocktail', 'American', 'Drinks', 'Easy', 5, 0, 2, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'cinderella mocktail'),
  c('cranberry-spritzer', 'Cranberry Spritzer', 'American', 'Drinks', 'Easy', 5, 0, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'cranberry spritzer'),
  c('cucumber-mint-cooler', 'Cucumber Mint Cooler', 'British', 'Drinks', 'Easy', 10, 0, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'cucumber mint cooler'),
  c('fruit-punch', 'Fruit Punch', 'American', 'Drinks', 'Easy', 10, 0, 12, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'fruit punch'),
  c('ginger-ale', 'Ginger Ale', 'American', 'Drinks', 'Easy', 15, 10, 6, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'ginger ale'),
  c('ginger-cordial', 'Ginger Cordial', 'British', 'Drinks', 'Easy', 15, 20, 10, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'ginger cordial'),
  c('ginger-shot', 'Ginger Shot', 'American', 'Drinks', 'Easy', 10, 0, 6, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'ginger shot'),
  c('gingerbread-latte', 'Gingerbread Latte', 'American', 'Drinks', 'Easy', 5, 5, 2, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'gingerbread latte'),
  c('green-juice', 'Green Juice', 'American', 'Drinks', 'Easy', 10, 0, 2, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'green juice'),
  c('homemade-cola', 'Homemade Cola', 'American', 'Drinks', 'Medium', 10, 20, 8, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'homemade cola'),
  c('hot-apple-cider', 'Hot Apple Cider', 'American', 'Drinks', 'Easy', 5, 25, 6, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'hot apple cider'),
  c('lemon-ginger-tea', 'Lemon Ginger Tea', 'British', 'Drinks', 'Easy', 5, 10, 2, 0, 0, ['Vegetarian', 'Dairy-Free', 'Gluten-Free'], ['new'], 'lemon ginger tea'),
  c('lime-cordial', 'Lime Cordial', 'British', 'Drinks', 'Easy', 10, 10, 10, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'lime cordial'),
  c('limeade', 'Limeade', 'American', 'Drinks', 'Easy', 10, 0, 6, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'limeade'),
  c('oreo-milkshake', 'Oreo Milkshake', 'American', 'Drinks', 'Easy', 5, 0, 2, 0, 0, ['Vegetarian'], ['new'], 'oreo milkshake'),
  c('peanut-butter-banana-shake', 'Peanut Butter Banana Shake', 'American', 'Drinks', 'Easy', 5, 0, 2, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'peanut butter banana shake'),
  c('peanut-butter-milkshake', 'Peanut Butter Milkshake', 'American', 'Drinks', 'Easy', 5, 0, 2, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'peanut butter milkshake'),
  c('peppermint-hot-chocolate', 'Peppermint Hot Chocolate', 'American', 'Drinks', 'Easy', 5, 8, 2, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'peppermint hot chocolate'),
  c('pineapple-mocktail', 'Pineapple Mocktail', 'American', 'Drinks', 'Easy', 5, 0, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'pineapple mocktail'),
  c('pink-lemonade', 'Pink Lemonade', 'American', 'Drinks', 'Easy', 10, 5, 6, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'pink lemonade'),
  c('pumpkin-spice-smoothie', 'Pumpkin Spice Smoothie', 'American', 'Drinks', 'Easy', 5, 0, 2, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'pumpkin spice smoothie'),
  c('rhubarb-cordial', 'Rhubarb Cordial', 'British', 'Drinks', 'Easy', 10, 20, 10, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'rhubarb cordial'),
  c('salted-caramel-hot-chocolate', 'Salted Caramel Hot Chocolate', 'American', 'Drinks', 'Easy', 5, 10, 2, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'salted caramel hot chocolate'),
  c('salted-lassi', 'Salted Lassi', 'Indian', 'Drinks', 'Easy', 5, 2, 2, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'salted lassi'),
  c('spinach-pineapple-smoothie', 'Spinach Pineapple Smoothie', 'American', 'Drinks', 'Easy', 5, 0, 2, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'spinach pineapple smoothie'),
  c('strawberry-lassi', 'Strawberry Lassi', 'Indian', 'Drinks', 'Easy', 5, 0, 2, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'strawberry lassi'),
  c('strawberry-milkshake', 'Strawberry Milkshake', 'American', 'Drinks', 'Easy', 5, 0, 2, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'strawberry milkshake'),
  c('sun-tea', 'Sun Tea', 'American', 'Drinks', 'Easy', 5, 0, 6, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'sun tea'),
  c('sweet-tea', 'Sweet Tea', 'American', 'Drinks', 'Easy', 5, 10, 8, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'sweet tea'),
  c('vanilla-milkshake', 'Vanilla Milkshake', 'American', 'Drinks', 'Easy', 5, 0, 2, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'vanilla milkshake'),
  c('white-hot-chocolate', 'White Hot Chocolate', 'American', 'Drinks', 'Easy', 5, 8, 2, 0, 0, ['Gluten-Free'], ['new'], 'white hot chocolate'),
  c('white-sangria', 'White Sangria', 'Spanish', 'Drinks', 'Easy', 10, 0, 8, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'white sangria'),
  c('chocolate-milk', 'Chocolate Milk', 'American', 'Drinks', 'Easy', 5, 3, 2, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'chocolate milk'),
  c('strawberry-syrup', 'Strawberry Syrup', 'American', 'Drinks', 'Easy', 5, 15, 10, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'strawberry syrup'),
  c('herb-roasted-turkey', 'Herb Roasted Turkey', 'American', 'Holiday Specials', 'Medium', 30, 180, 10, 0, 0, [], ['new'], 'herb roasted turkey'),
  c('honey-glazed-carrots', 'Honey Glazed Carrots', 'American', 'Holiday Specials', 'Easy', 10, 20, 6, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'honey glazed carrots'),
  c('candy-cane-cookies', 'Candy Cane Cookies', 'American', 'Holiday Specials', 'Medium', 30, 12, 24, 0, 0, ['Vegetarian'], ['new'], 'candy cane cookies'),
  c('halloween-cupcakes', 'Halloween Cupcakes', 'American', 'Holiday Specials', 'Medium', 30, 20, 12, 0, 0, ['Vegetarian'], ['new'], 'halloween cupcakes'),
  c('heart-shaped-cookies', 'Heart Shaped Cookies', 'American', 'Holiday Specials', 'Easy', 30, 12, 20, 0, 0, ['Vegetarian'], ['new'], 'heart shaped cookies'),
  c('red-velvet-cupcakes', 'Red Velvet Cupcakes', 'American', 'Holiday Specials', 'Medium', 25, 20, 12, 0, 0, ['Vegetarian'], ['new'], 'red velvet cupcakes'),
  c('fourth-of-july-berry-trifle', 'Fourth of July Berry Trifle', 'American', 'Holiday Specials', 'Easy', 30, 0, 10, 0, 0, ['Vegetarian'], ['new'], 'fourth of july berry trifle'),
  c('mummy-hot-dogs', 'Mummy Hot Dogs', 'American', 'Holiday Specials', 'Easy', 10, 15, 8, 0, 0, [], ['new'], 'mummy hot dogs'),
  c('spiderweb-dip', 'Spiderweb Dip', 'American', 'Holiday Specials', 'Easy', 15, 0, 8, 0, 0, ['Vegetarian'], ['new'], 'spiderweb dip'),
  c('leftover-ham-pie', 'Leftover Ham Pie', 'British', 'Holiday Specials', 'Medium', 25, 35, 6, 0, 0, [], ['new'], 'leftover ham pie'),
  c('cranberry-relish', 'Cranberry Relish', 'American', 'Holiday Specials', 'Easy', 10, 0, 10, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'cranberry relish'),
  c('cranberry-meatballs', 'Cranberry Meatballs', 'American', 'Holiday Specials', 'Easy', 10, 25, 12, 0, 0, [], ['new'], 'cranberry meatballs'),
  c('maple-syrup-pie', 'Maple Syrup Pie', 'Canadian', 'Desserts', 'Medium', 20, 40, 8, 0, 0, ['Vegetarian'], ['new'], 'maple syrup pie'),
  c('bread-pudding-with-whiskey-sauce', 'Bread Pudding with Whiskey Sauce', 'American', 'Desserts', 'Easy', 15, 45, 8, 0, 0, ['Vegetarian'], ['new'], 'bread pudding with whiskey sauce'),
  c('apple-cinnamon-rolls', 'Apple Cinnamon Rolls', 'American', 'Baking', 'Medium', 40, 25, 12, 0, 0, ['Vegetarian'], ['new'], 'apple cinnamon rolls'),
  c('baked-doughnuts', 'Baked Doughnuts', 'American', 'Baking', 'Easy', 15, 12, 12, 0, 0, ['Vegetarian'], ['new'], 'baked doughnuts'),
  c('banana-cake-with-cream-cheese-icing', 'Banana Cake with Cream Cheese Icing', 'American', 'Baking', 'Easy', 20, 35, 12, 0, 0, ['Vegetarian'], ['new'], 'banana cake with cream cheese icing'),
  c('banana-walnut-loaf', 'Banana Walnut Loaf', 'American', 'Baking', 'Easy', 15, 55, 10, 0, 0, ['Vegetarian'], ['new'], 'banana walnut loaf'),
  c('banoffee-cheesecake', 'Banoffee Cheesecake', 'British', 'Desserts', 'Medium', 30, 5, 10, 0, 0, ['Vegetarian'], ['new'], 'banoffee cheesecake'),
  c('cheddar-bay-biscuits', 'Cheddar Bay Biscuits', 'American', 'Baking', 'Easy', 10, 15, 10, 0, 0, ['Vegetarian'], ['new'], 'cheddar bay biscuits'),
  c('cheesecake-brownies', 'Cheesecake Brownies', 'American', 'Baking', 'Medium', 25, 40, 16, 0, 0, ['Vegetarian'], ['new'], 'cheesecake brownies'),
  c('cherry-bakewell', 'Cherry Bakewell', 'British', 'Baking', 'Medium', 40, 25, 12, 0, 0, ['Vegetarian'], ['new'], 'cherry bakewell'),
  c('chiffon-cake', 'Chiffon Cake', 'American', 'Baking', 'Hard', 25, 50, 12, 0, 0, ['Vegetarian'], ['new'], 'chiffon cake'),
  c('chocolate-bark', 'Chocolate Bark', 'American', 'Desserts', 'Easy', 10, 5, 12, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'chocolate bark'),
  c('chocolate-beetroot-cake', 'Chocolate Beetroot Cake', 'British', 'Baking', 'Medium', 20, 45, 12, 0, 0, ['Vegetarian'], ['new'], 'chocolate beetroot cake'),
  c('chocolate-cream-pie', 'Chocolate Cream Pie', 'American', 'Desserts', 'Medium', 30, 25, 8, 0, 0, ['Vegetarian'], ['new'], 'chocolate cream pie'),
  c('chocolate-fondue', 'Chocolate Fondue', 'Swiss', 'Desserts', 'Easy', 5, 5, 6, 0, 0, [], ['new'], 'chocolate fondue'),
  c('cookie-dough-bites', 'Cookie Dough Bites', 'American', 'Desserts', 'Easy', 15, 8, 20, 0, 0, ['Vegetarian'], ['new'], 'cookie dough bites'),
  c('courgette-and-lemon-cake', 'Courgette and Lemon Cake', 'British', 'Baking', 'Easy', 20, 45, 10, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'courgette and lemon cake'),
  c('evaporated-milk-fudge', 'Evaporated Milk Fudge', 'American', 'Desserts', 'Easy', 10, 15, 36, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'evaporated milk fudge'),
  c('gingersnaps', 'Gingersnaps', 'American', 'Baking', 'Easy', 15, 12, 24, 0, 0, ['Vegetarian'], ['new'], 'gingersnaps'),
  c('hazelnut-chocolate-cake', 'Hazelnut Chocolate Cake', 'Italian', 'Baking', 'Medium', 25, 40, 10, 0, 0, ['Vegetarian'], ['new'], 'hazelnut chocolate cake'),
  c('lemon-butter-cake', 'Lemon Butter Cake', 'Australian', 'Baking', 'Easy', 15, 40, 10, 0, 0, ['Vegetarian'], ['new'], 'lemon butter cake'),
  c('maids-of-honour', 'Maids of Honour', 'British', 'Baking', 'Medium', 30, 25, 12, 0, 0, ['Vegetarian'], ['new'], 'maids of honour'),
  c('orange-poppy-seed-cake', 'Orange Poppy Seed Cake', 'American', 'Baking', 'Easy', 15, 45, 10, 0, 0, ['Vegetarian'], ['new'], 'orange poppy seed cake'),
  c('pear-tart', 'Pear Tart', 'French', 'Baking', 'Medium', 30, 40, 8, 0, 0, ['Vegetarian'], ['new'], 'pear tart'),
  c('pistachio-cake', 'Pistachio Cake', 'Middle Eastern', 'Baking', 'Medium', 20, 40, 10, 0, 0, ['Vegetarian'], ['new'], 'pistachio cake'),
  c('plum-cake', 'Plum Cake', 'German', 'Baking', 'Easy', 20, 45, 10, 0, 0, ['Vegetarian'], ['new'], 'plum cake'),
  c('pumpkin-brownies', 'Pumpkin Brownies', 'American', 'Baking', 'Easy', 15, 30, 16, 0, 0, ['Vegetarian'], ['new'], 'pumpkin brownies'),
  c('rhubarb-custard-cake', 'Rhubarb Custard Cake', 'British', 'Baking', 'Medium', 25, 50, 10, 0, 0, ['Vegetarian'], ['new'], 'rhubarb custard cake'),
  c('rhubarb-muffins', 'Rhubarb Muffins', 'American', 'Baking', 'Easy', 15, 22, 12, 0, 0, ['Vegetarian'], ['new'], 'rhubarb muffins'),
  c('seed-cake', 'Seed Cake', 'British', 'Baking', 'Easy', 15, 50, 10, 0, 0, ['Vegetarian'], ['new'], 'seed cake'),
  c('sponge-roll', 'Sponge Roll', 'British', 'Baking', 'Medium', 25, 12, 10, 0, 0, ['Vegetarian'], ['new'], 'sponge roll'),
  c('treacle-scones', 'Treacle Scones', 'British', 'Baking', 'Easy', 15, 15, 8, 0, 0, ['Vegetarian'], ['new'], 'treacle scones'),
  c('salted-caramel-brownies', 'Salted Caramel Brownies', 'American', 'Baking', 'Medium', 25, 35, 16, 0, 0, ['Vegetarian'], ['new'], 'salted caramel brownies')
];
