'use strict';

/**
 * Weekly Delight — recipe catalog, volume fifty-six.
 * One hundred more of the dishes people in the USA, Canada, Australia, the UK and New Zealand look for by name.
 * They are the variations that cooks in the USA, Canada, Australia, the UK and New
 * Zealand look for by name; no search-volume data was used to pick or rank them.
 *
 * Every name was tried against the recipes already published, with
 * tools/dedupe-candidates.js, then compared by hand with the closest existing
 * recipes, and the dishes that were the same under another name were dropped.
 *
 * Spread: American 83, British 8, French 4, Italian 2, Canadian 1, Japanese 1, Scottish 1.
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
  c('chocolate-pots', 'Chocolate Pots', 'French', 'Desserts', 'Easy', 15, 5, 6, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'chocolate pots'),
  c('chocolate-smoothie', 'Chocolate Smoothie', 'American', 'Drinks', 'Easy', 5, 0, 2, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'chocolate smoothie'),
  c('coffee-ice-cream', 'Coffee Ice Cream', 'American', 'Desserts', 'Medium', 30, 15, 8, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'coffee ice cream'),
  c('blackberry-sorbet', 'Blackberry Sorbet', 'American', 'Desserts', 'Easy', 10, 5, 6, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'blackberry sorbet'),
  c('fantasy-fudge', 'Fantasy Fudge', 'American', 'Holiday Specials', 'Easy', 10, 10, 36, 0, 0, ['Gluten-Free'], ['new'], 'fantasy fudge'),
  c('italian-ice', 'Italian Ice', 'American', 'Desserts', 'Easy', 10, 5, 6, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'italian ice'),
  c('microwave-rice-pudding', 'Microwave Rice Pudding', 'British', 'Desserts', 'Easy', 5, 15, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'microwave rice pudding'),
  c('mint-chocolate-chip-ice-cream', 'Mint Chocolate Chip Ice Cream', 'American', 'Desserts', 'Medium', 30, 15, 8, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'mint chocolate chip ice cream'),
  c('mug-cheesecake', 'Mug Cheesecake', 'American', 'Desserts', 'Easy', 5, 2, 1, 0, 0, ['Vegetarian'], ['new'], 'mug cheesecake'),
  c('mug-cornbread', 'Mug Cornbread', 'American', 'Quick Meals', 'Easy', 5, 2, 1, 0, 0, ['Vegetarian'], ['new'], 'mug cornbread'),
  c('mug-mac-and-cheese', 'Mug Mac and Cheese', 'American', 'Quick Meals', 'Easy', 5, 4, 1, 0, 0, ['Vegetarian'], ['new'], 'mug mac and cheese'),
  c('mug-omelette', 'Mug Omelette', 'American', 'Breakfast', 'Easy', 5, 2, 1, 0, 0, ['Gluten-Free'], ['new'], 'mug omelette'),
  c('no-bake-banana-pudding', 'No Bake Banana Pudding', 'American', 'Desserts', 'Easy', 20, 0, 8, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'no bake banana pudding'),
  c('no-bake-cheesecake', 'No Bake Cheesecake', 'American', 'Desserts', 'Easy', 30, 0, 10, 0, 0, ['Vegetarian'], ['new'], 'no bake cheesecake'),
  c('no-bake-cherry-cheesecake', 'No Bake Cherry Cheesecake', 'American', 'Desserts', 'Easy', 30, 0, 10, 0, 0, ['Vegetarian'], ['new'], 'no bake cherry cheesecake'),
  c('no-bake-energy-bites', 'No Bake Energy Bites', 'American', 'Healthy', 'Easy', 15, 0, 20, 0, 0, ['Vegetarian'], ['new'], 'no bake energy bites'),
  c('no-bake-oreo-dessert', 'No Bake Oreo Dessert', 'American', 'Desserts', 'Easy', 20, 0, 12, 0, 0, ['Vegetarian'], ['new'], 'no bake oreo dessert'),
  c('no-bake-trifle', 'No Bake Trifle', 'British', 'Desserts', 'Easy', 25, 0, 10, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'no bake trifle'),
  c('no-churn-ice-cream', 'No Churn Ice Cream', 'American', 'Desserts', 'Easy', 15, 0, 8, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'no churn ice cream'),
  c('oreo-cheesecake', 'Oreo Cheesecake', 'American', 'Desserts', 'Medium', 30, 50, 12, 0, 0, ['Vegetarian'], ['new'], 'oreo cheesecake'),
  c('penuche', 'Penuche', 'American', 'Desserts', 'Medium', 10, 20, 36, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'penuche'),
  c('popsicles', 'Popsicles', 'American', 'Desserts', 'Easy', 10, 0, 8, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'popsicles'),
  c('raspberry-sorbet', 'Raspberry Sorbet', 'French', 'Desserts', 'Easy', 10, 5, 6, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'raspberry sorbet'),
  c('salted-caramel-ice-cream', 'Salted Caramel Ice Cream', 'American', 'Desserts', 'Medium', 40, 15, 8, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'salted caramel ice cream'),
  c('saltine-toffee', 'Saltine Toffee', 'American', 'Holiday Specials', 'Easy', 10, 15, 24, 0, 0, ['Vegetarian'], ['new'], 'saltine toffee'),
  c('toffee-popcorn', 'Toffee Popcorn', 'American', 'Desserts', 'Easy', 15, 45, 10, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'toffee popcorn'),
  c('bear-claws', 'Bear Claws', 'American', 'Baking', 'Medium', 40, 25, 8, 0, 0, ['Vegetarian'], ['new'], 'bear claws'),
  c('brown-butter-rice-krispie-treats', 'Brown Butter Rice Krispie Treats', 'American', 'Desserts', 'Easy', 10, 10, 16, 0, 0, ['Gluten-Free'], ['new'], 'brown butter rice krispie treats'),
  c('chocolate-covered-pretzels', 'Chocolate Covered Pretzels', 'American', 'Desserts', 'Easy', 15, 5, 24, 0, 0, ['Vegetarian'], ['new'], 'chocolate covered pretzels'),
  c('chocolate-dipped-bananas', 'Chocolate Dipped Bananas', 'American', 'Desserts', 'Easy', 15, 5, 6, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'chocolate dipped bananas'),
  c('cinnamon-twists', 'Cinnamon Twists', 'American', 'Baking', 'Easy', 15, 15, 12, 0, 0, ['Vegetarian'], ['new'], 'cinnamon twists'),
  c('fruit-pizza', 'Fruit Pizza', 'American', 'Desserts', 'Medium', 30, 12, 12, 0, 0, ['Vegetarian'], ['new'], 'fruit pizza'),
  c('nutella-french-toast', 'Nutella French Toast', 'American', 'Breakfast', 'Easy', 10, 10, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'nutella french toast'),
  c('overnight-french-toast', 'Overnight French Toast', 'American', 'Breakfast', 'Easy', 20, 45, 8, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'overnight french toast'),
  c('peanut-butter-overnight-oats', 'Peanut Butter Overnight Oats', 'American', 'Breakfast', 'Easy', 5, 0, 2, 0, 0, ['Vegetarian'], ['new'], 'peanut butter overnight oats'),
  c('sheet-pan-apple-crisp', 'Sheet Pan Apple Crisp', 'American', 'Desserts', 'Easy', 20, 35, 12, 0, 0, ['Vegetarian'], ['new'], 'sheet pan apple crisp'),
  c('slow-cooker-bread-pudding', 'Slow Cooker Bread Pudding', 'British', 'Desserts', 'Easy', 20, 180, 8, 0, 0, ['Vegetarian'], ['new'], 'slow cooker bread pudding'),
  c('slow-cooker-cheesecake', 'Slow Cooker Cheesecake', 'American', 'Desserts', 'Medium', 25, 90, 10, 0, 0, ['Vegetarian'], ['new'], 'slow cooker cheesecake'),
  c('slow-cooker-peach-cobbler', 'Slow Cooker Peach Cobbler', 'American', 'Desserts', 'Easy', 15, 180, 8, 0, 0, ['Vegetarian'], ['new'], 'slow cooker peach cobbler'),
  c('slow-cooker-sticky-toffee-pudding', 'Slow Cooker Sticky Toffee Pudding', 'British', 'Desserts', 'Easy', 25, 150, 8, 0, 0, ['Vegetarian'], ['new'], 'slow cooker sticky toffee pudding'),
  c('apple-pie-filling', 'Apple Pie Filling', 'American', 'Desserts', 'Easy', 20, 15, 8, 0, 0, ['Vegetarian'], ['new'], 'apple pie filling'),
  c('cake-balls', 'Cake Balls', 'American', 'Desserts', 'Medium', 45, 5, 24, 0, 0, ['Vegetarian'], ['new'], 'cake balls'),
  c('carrot-cake-overnight-oats', 'Carrot Cake Overnight Oats', 'American', 'Breakfast', 'Easy', 10, 0, 2, 0, 0, ['Vegetarian'], ['new'], 'carrot cake overnight oats'),
  c('cookies-and-cream-ice-cream', 'Cookies and Cream Ice Cream', 'American', 'Desserts', 'Medium', 40, 15, 8, 0, 0, ['Vegetarian'], ['new'], 'cookies and cream ice cream'),
  c('ice-cream-pie', 'Ice Cream Pie', 'American', 'Desserts', 'Easy', 20, 0, 8, 0, 0, ['Vegetarian'], ['new'], 'ice cream pie'),
  c('frozen-hot-chocolate', 'Frozen Hot Chocolate', 'American', 'Drinks', 'Easy', 5, 0, 2, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'frozen hot chocolate'),
  c('rocky-road-ice-cream', 'Rocky Road Ice Cream', 'American', 'Desserts', 'Medium', 30, 15, 8, 0, 0, [], ['new'], 'rocky road ice cream'),
  c('microwave-mug-cake', 'Microwave Mug Cake', 'American', 'Desserts', 'Easy', 5, 2, 1, 0, 0, ['Vegetarian'], ['new'], 'microwave mug cake'),
  c('mug-brownie', 'Mug Brownie', 'American', 'Desserts', 'Easy', 5, 1, 1, 0, 0, ['Vegetarian'], ['new'], 'mug brownie'),
  c('mug-carrot-cake', 'Mug Carrot Cake', 'American', 'Desserts', 'Easy', 5, 2, 1, 0, 0, ['Vegetarian'], ['new'], 'mug carrot cake'),
  c('mug-chocolate-chip-cookie', 'Mug Chocolate Chip Cookie', 'American', 'Desserts', 'Easy', 5, 1, 1, 0, 0, ['Vegetarian'], ['new'], 'mug chocolate chip cookie'),
  c('no-bake-brownies', 'No Bake Brownies', 'American', 'Desserts', 'Easy', 15, 0, 12, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'no bake brownies'),
  c('no-bake-chocolate-cake', 'No Bake Chocolate Cake', 'British', 'Desserts', 'Easy', 20, 5, 12, 0, 0, ['Vegetarian'], ['new'], 'no bake chocolate cake'),
  c('no-bake-chocolate-pie', 'No Bake Chocolate Pie', 'American', 'Desserts', 'Easy', 20, 5, 8, 0, 0, ['Vegetarian'], ['new'], 'no bake chocolate pie'),
  c('neapolitan-ice-cream', 'Neapolitan Ice Cream', 'American', 'Desserts', 'Medium', 45, 15, 10, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'neapolitan ice cream'),
  c('no-bake-granola-bars', 'No Bake Granola Bars', 'American', 'Healthy', 'Easy', 10, 5, 12, 0, 0, ['Vegetarian'], ['new'], 'no bake granola bars'),
  c('no-bake-key-lime-pie', 'No Bake Key Lime Pie', 'American', 'Desserts', 'Easy', 20, 0, 8, 0, 0, ['Vegetarian'], ['new'], 'no bake key lime pie'),
  c('peach-ice-cream', 'Peach Ice Cream', 'American', 'Desserts', 'Medium', 30, 15, 8, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'peach ice cream'),
  c('no-bake-peanut-butter-bars', 'No Bake Peanut Butter Bars', 'American', 'Desserts', 'Easy', 15, 5, 16, 0, 0, [], ['new'], 'no bake peanut butter bars'),
  c('no-bake-pumpkin-pie', 'No Bake Pumpkin Pie', 'American', 'Holiday Specials', 'Easy', 20, 0, 8, 0, 0, ['Vegetarian'], ['new'], 'no bake pumpkin pie'),
  c('no-bake-strawberry-pie', 'No Bake Strawberry Pie', 'American', 'Desserts', 'Easy', 20, 5, 8, 0, 0, ['Vegetarian'], ['new'], 'no bake strawberry pie'),
  c('orange-curd', 'Orange Curd', 'British', 'Desserts', 'Easy', 10, 12, 12, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'orange curd'),
  c('protein-bars', 'Protein Bars', 'American', 'Healthy', 'Easy', 15, 0, 10, 0, 0, ['Vegetarian'], ['new'], 'protein bars'),
  c('3-ingredient-banana-pancakes', '3 Ingredient Banana Pancakes', 'American', 'Breakfast', 'Easy', 5, 10, 2, 0, 0, ['Vegetarian'], ['new'], '3 ingredient banana pancakes'),
  c('3-ingredient-cookies', '3 Ingredient Cookies', 'American', 'Baking', 'Easy', 5, 10, 12, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], '3 ingredient cookies'),
  c('3-ingredient-fudge', '3 Ingredient Fudge', 'American', 'Desserts', 'Easy', 5, 10, 24, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], '3 ingredient fudge'),
  c('dairy-free-brownies', 'Dairy-Free Brownies', 'American', 'Baking', 'Easy', 15, 25, 16, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'dairy-free brownies'),
  c('dairy-free-cheesecake', 'Dairy-Free Cheesecake', 'American', 'Desserts', 'Medium', 30, 0, 10, 0, 0, ['Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'dairy-free cheesecake'),
  c('dairy-free-chocolate-chip-cookies', 'Dairy-Free Chocolate Chip Cookies', 'American', 'Baking', 'Easy', 15, 12, 24, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'dairy-free chocolate chip cookies'),
  c('dairy-free-chocolate-mousse', 'Dairy-Free Chocolate Mousse', 'French', 'Desserts', 'Easy', 15, 5, 4, 0, 0, ['Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'dairy-free chocolate mousse'),
  c('dairy-free-cupcakes', 'Dairy-Free Cupcakes', 'American', 'Baking', 'Easy', 20, 22, 12, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'dairy-free cupcakes'),
  c('dairy-free-custard', 'Dairy-Free Custard', 'British', 'Desserts', 'Easy', 5, 10, 4, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'dairy-free custard'),
  c('dairy-free-hot-chocolate', 'Dairy-Free Hot Chocolate', 'American', 'Drinks', 'Easy', 5, 8, 2, 0, 0, ['Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'dairy-free hot chocolate'),
  c('dairy-free-milkshake', 'Dairy-Free Milkshake', 'American', 'Drinks', 'Easy', 5, 0, 2, 0, 0, ['Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'dairy-free milkshake'),
  c('dairy-free-pumpkin-pie', 'Dairy-Free Pumpkin Pie', 'American', 'Holiday Specials', 'Medium', 30, 60, 8, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'dairy-free pumpkin pie'),
  c('freezer-cookie-dough', 'Freezer Cookie Dough', 'American', 'Baking', 'Easy', 15, 12, 24, 0, 0, ['Vegetarian'], ['new'], 'freezer cookie dough'),
  c('gluten-free-brownie-cookies', 'Gluten-Free Brownie Cookies', 'American', 'Baking', 'Easy', 15, 12, 16, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'gluten-free brownie cookies'),
  c('gluten-free-cookies', 'Gluten-Free Cookies', 'American', 'Baking', 'Easy', 15, 12, 24, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'gluten-free cookies'),
  c('gluten-free-cupcakes', 'Gluten-Free Cupcakes', 'American', 'Baking', 'Easy', 20, 22, 12, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'gluten-free cupcakes'),
  c('gluten-free-shortbread', 'Gluten-Free Shortbread', 'Scottish', 'Baking', 'Easy', 15, 20, 16, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'gluten-free shortbread'),
  c('high-protein-cheesecake', 'High-Protein Cheesecake', 'American', 'Healthy', 'Medium', 20, 35, 8, 0, 0, ['Vegetarian'], ['new'], 'high-protein cheesecake'),
  c('high-protein-cookies', 'High-Protein Cookies', 'American', 'Healthy', 'Easy', 15, 12, 12, 0, 0, ['Vegetarian'], ['new'], 'high-protein cookies'),
  c('low-carb-brownies', 'Low-Carb Brownies', 'American', 'Baking', 'Easy', 15, 22, 12, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'low-carb brownies'),
  c('low-carb-cookies', 'Low-Carb Cookies', 'American', 'Baking', 'Easy', 15, 12, 16, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'low-carb cookies'),
  c('low-carb-mug-cake', 'Low-Carb Mug Cake', 'American', 'Desserts', 'Easy', 5, 2, 1, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'low-carb mug cake'),
  c('vegan-cupcakes', 'Vegan Cupcakes', 'American', 'Baking', 'Easy', 20, 22, 12, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'vegan cupcakes'),
  c('vegan-fudge', 'Vegan Fudge', 'American', 'Desserts', 'Easy', 10, 5, 24, 0, 0, ['Vegetarian', 'Gluten-Free', 'Vegan', 'Dairy-Free'], ['new'], 'vegan fudge'),
  c('vegan-ice-cream', 'Vegan Ice Cream', 'American', 'Desserts', 'Medium', 20, 10, 6, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'vegan ice cream'),
  c('vegan-mousse', 'Vegan Mousse', 'French', 'Desserts', 'Easy', 15, 5, 4, 0, 0, ['Vegetarian', 'Gluten-Free', 'Vegan', 'Dairy-Free'], ['new'], 'vegan mousse'),
  c('maple-walnut-ice-cream', 'Maple Walnut Ice Cream', 'Canadian', 'Desserts', 'Medium', 30, 15, 8, 0, 0, ['Vegetarian'], ['new'], 'maple walnut ice cream'),
  c('pistachio-ice-cream', 'Pistachio Ice Cream', 'Italian', 'Desserts', 'Medium', 30, 15, 8, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'pistachio ice cream'),
  c('mango-ice-cream', 'Mango Ice Cream', 'American', 'Desserts', 'Easy', 15, 0, 8, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'mango ice cream'),
  c('raspberry-ripple-ice-cream', 'Raspberry Ripple Ice Cream', 'British', 'Desserts', 'Easy', 20, 5, 8, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'raspberry ripple ice cream'),
  c('pumpkin-ice-cream', 'Pumpkin Ice Cream', 'American', 'Holiday Specials', 'Easy', 15, 0, 8, 0, 0, ['Vegetarian'], ['new'], 'pumpkin ice cream'),
  c('eggnog-ice-cream', 'Eggnog Ice Cream', 'American', 'Holiday Specials', 'Medium', 30, 15, 8, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'eggnog ice cream'),
  c('watermelon-sorbet', 'Watermelon Sorbet', 'American', 'Desserts', 'Easy', 10, 0, 6, 0, 0, ['Vegetarian', 'Dairy-Free', 'Gluten-Free'], ['new'], 'watermelon sorbet'),
  c('lemon-gelato', 'Lemon Gelato', 'Italian', 'Desserts', 'Medium', 30, 15, 8, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'lemon gelato'),
  c('matcha-ice-cream', 'Matcha Ice Cream', 'Japanese', 'Desserts', 'Medium', 30, 15, 8, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'matcha ice cream'),
  c('butter-pecan-ice-cream', 'Butter Pecan Ice Cream', 'American', 'Desserts', 'Medium', 30, 15, 8, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'butter pecan ice cream'),
  c('cookie-butter-ice-cream', 'Cookie Butter Ice Cream', 'American', 'Desserts', 'Medium', 30, 15, 8, 0, 0, ['Vegetarian'], ['new'], 'cookie butter ice cream')
];
