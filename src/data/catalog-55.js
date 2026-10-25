'use strict';

/**
 * Weekly Delight — recipe catalog, volume fifty-five.
 * One hundred more of the dishes people in the USA, Canada, Australia, the UK and New Zealand look for by name.
 * They are the variations that cooks in the USA, Canada, Australia, the UK and New
 * Zealand look for by name; no search-volume data was used to pick or rank them.
 *
 * Every name was tried against the recipes already published, with
 * tools/dedupe-candidates.js, then compared by hand with the closest existing
 * recipes, and the dishes that were the same under another name were dropped.
 *
 * Spread: American 81, British 8, French 3, Italian 3, Scottish 2, Chinese 1, Dutch 1, Mexican 1.
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
  c('almond-cookies', 'Almond Cookies', 'Chinese', 'Baking', 'Easy', 15, 15, 24, 0, 0, ['Vegetarian'], ['new'], 'almond cookies'),
  c('almond-crescent-cookies', 'Almond Crescent Cookies', 'American', 'Baking', 'Medium', 30, 15, 30, 0, 0, ['Vegetarian'], ['new'], 'almond crescent cookies'),
  c('almond-flour-cake', 'Almond Flour Cake', 'American', 'Baking', 'Easy', 15, 35, 10, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'almond flour cake'),
  c('angel-biscuits', 'Angel Biscuits', 'American', 'Baking', 'Medium', 20, 15, 12, 0, 0, ['Vegetarian'], ['new'], 'angel biscuits'),
  c('apple-bread', 'Apple Bread', 'American', 'Baking', 'Easy', 20, 60, 10, 0, 0, ['Vegetarian'], ['new'], 'apple bread'),
  c('apple-bundt-cake', 'Apple Bundt Cake', 'American', 'Baking', 'Medium', 25, 60, 12, 0, 0, ['Vegetarian'], ['new'], 'apple bundt cake'),
  c('apple-pie-bites', 'Apple Pie Bites', 'American', 'Desserts', 'Easy', 25, 15, 12, 0, 0, ['Vegetarian'], ['new'], 'apple pie bites'),
  c('banana-chocolate-chip-bread', 'Banana Chocolate Chip Bread', 'American', 'Baking', 'Easy', 15, 60, 10, 0, 0, ['Vegetarian'], ['new'], 'banana chocolate chip bread'),
  c('banana-cookies', 'Banana Cookies', 'American', 'Baking', 'Easy', 15, 15, 18, 0, 0, ['Vegetarian'], ['new'], 'banana cookies'),
  c('banana-cupcakes', 'Banana Cupcakes', 'American', 'Baking', 'Easy', 20, 22, 12, 0, 0, ['Vegetarian'], ['new'], 'banana cupcakes'),
  c('biscoff-cookies', 'Biscoff Cookies', 'American', 'Baking', 'Easy', 15, 12, 20, 0, 0, ['Vegetarian'], ['new'], 'biscoff cookies'),
  c('blueberry-coffee-cake', 'Blueberry Coffee Cake', 'American', 'Baking', 'Easy', 20, 45, 9, 0, 0, ['Vegetarian'], ['new'], 'blueberry coffee cake'),
  c('boston-cream-donuts', 'Boston Cream Donuts', 'American', 'Baking', 'Hard', 45, 12, 12, 0, 0, ['Vegetarian'], ['new'], 'boston cream donuts'),
  c('brown-sugar-shortbread', 'Brown Sugar Shortbread', 'Scottish', 'Baking', 'Easy', 15, 25, 16, 0, 0, ['Vegetarian'], ['new'], 'brown sugar shortbread'),
  c('brownie-bites', 'Brownie Bites', 'American', 'Desserts', 'Easy', 15, 14, 24, 0, 0, ['Vegetarian'], ['new'], 'brownie bites'),
  c('brownie-cookies', 'Brownie Cookies', 'American', 'Baking', 'Easy', 15, 12, 18, 0, 0, ['Vegetarian'], ['new'], 'brownie cookies'),
  c('buttermilk-pie', 'Buttermilk Pie', 'American', 'Desserts', 'Medium', 20, 50, 8, 0, 0, ['Vegetarian'], ['new'], 'buttermilk pie'),
  c('buttermilk-waffles', 'Buttermilk Waffles', 'American', 'Breakfast', 'Easy', 10, 20, 4, 0, 0, ['Vegetarian'], ['new'], 'buttermilk waffles'),
  c('cakey-brownies', 'Cakey Brownies', 'American', 'Baking', 'Easy', 15, 30, 12, 0, 0, ['Vegetarian'], ['new'], 'cakey brownies'),
  c('caramel-blondies', 'Caramel Blondies', 'American', 'Baking', 'Easy', 15, 30, 12, 0, 0, ['Vegetarian'], ['new'], 'caramel blondies'),
  c('carrot-cake-loaf', 'Carrot Cake Loaf', 'American', 'Baking', 'Easy', 20, 55, 10, 0, 0, ['Vegetarian'], ['new'], 'carrot cake loaf'),
  c('cathead-biscuits', 'Cathead Biscuits', 'American', 'Baking', 'Easy', 15, 18, 8, 0, 0, ['Vegetarian'], ['new'], 'cathead biscuits'),
  c('cheesecake-bars', 'Cheesecake Bars', 'American', 'Desserts', 'Medium', 25, 40, 16, 0, 0, ['Vegetarian'], ['new'], 'cheesecake bars'),
  c('cheesecake-cupcakes', 'Cheesecake Cupcakes', 'American', 'Desserts', 'Medium', 25, 25, 12, 0, 0, ['Vegetarian'], ['new'], 'cheesecake cupcakes'),
  c('cherry-almond-cookies', 'Cherry Almond Cookies', 'American', 'Baking', 'Easy', 15, 14, 24, 0, 0, ['Vegetarian'], ['new'], 'cherry almond cookies'),
  c('cherry-turnovers', 'Cherry Turnovers', 'American', 'Baking', 'Medium', 25, 22, 8, 0, 0, ['Vegetarian'], ['new'], 'cherry turnovers'),
  c('chewy-ginger-cookies', 'Chewy Ginger Cookies', 'American', 'Baking', 'Easy', 15, 12, 24, 0, 0, ['Vegetarian'], ['new'], 'chewy ginger cookies'),
  c('chocolate-biscotti', 'Chocolate Biscotti', 'Italian', 'Baking', 'Medium', 25, 45, 24, 0, 0, ['Vegetarian'], ['new'], 'chocolate biscotti'),
  c('chocolate-bundt-cake', 'Chocolate Bundt Cake', 'American', 'Baking', 'Medium', 25, 55, 12, 0, 0, ['Vegetarian'], ['new'], 'chocolate bundt cake'),
  c('chocolate-chip-pancakes', 'Chocolate Chip Pancakes', 'American', 'Breakfast', 'Easy', 10, 20, 4, 0, 0, ['Vegetarian'], ['new'], 'chocolate chip pancakes'),
  c('chocolate-chip-scones', 'Chocolate Chip Scones', 'British', 'Baking', 'Easy', 15, 20, 8, 0, 0, ['Vegetarian'], ['new'], 'chocolate chip scones'),
  c('chocolate-macarons', 'Chocolate Macarons', 'French', 'Baking', 'Hard', 50, 18, 24, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'chocolate macarons'),
  c('chocolate-peppermint-cookies', 'Chocolate Peppermint Cookies', 'American', 'Holiday Specials', 'Easy', 15, 11, 24, 0, 0, ['Vegetarian'], ['new'], 'chocolate peppermint cookies'),
  c('chocolate-tart', 'Chocolate Tart', 'French', 'Desserts', 'Medium', 30, 35, 10, 0, 0, ['Vegetarian'], ['new'], 'chocolate tart'),
  c('cinnamon-buns', 'Cinnamon Buns', 'American', 'Baking', 'Medium', 35, 25, 12, 0, 0, ['Vegetarian'], ['new'], 'cinnamon buns'),
  c('coconut-cupcakes', 'Coconut Cupcakes', 'American', 'Baking', 'Easy', 20, 22, 12, 0, 0, ['Vegetarian'], ['new'], 'coconut cupcakes'),
  c('cookie-dough-bars', 'Cookie Dough Bars', 'American', 'Desserts', 'Easy', 15, 25, 16, 0, 0, ['Vegetarian'], ['new'], 'cookie dough bars'),
  c('cranberry-orange-cookies', 'Cranberry Orange Cookies', 'American', 'Holiday Specials', 'Easy', 15, 12, 24, 0, 0, ['Vegetarian'], ['new'], 'cranberry orange cookies'),
  c('cranberry-pistachio-biscotti', 'Cranberry Pistachio Biscotti', 'Italian', 'Holiday Specials', 'Medium', 25, 45, 24, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'cranberry pistachio biscotti'),
  c('cream-cheese-brownies', 'Cream Cheese Brownies', 'American', 'Baking', 'Easy', 20, 35, 16, 0, 0, ['Vegetarian'], ['new'], 'cream cheese brownies'),
  c('cream-cheese-pound-cake', 'Cream Cheese Pound Cake', 'American', 'Baking', 'Medium', 20, 75, 14, 0, 0, ['Vegetarian'], ['new'], 'cream cheese pound cake'),
  c('drop-biscuits', 'Drop Biscuits', 'American', 'Baking', 'Easy', 10, 15, 10, 0, 0, ['Vegetarian'], ['new'], 'drop biscuits'),
  c('dutch-apple-cake', 'Dutch Apple Cake', 'Dutch', 'Baking', 'Easy', 20, 50, 10, 0, 0, ['Vegetarian'], ['new'], 'dutch apple cake'),
  c('dutch-apple-pie', 'Dutch Apple Pie', 'American', 'Desserts', 'Medium', 30, 60, 8, 0, 0, ['Vegetarian'], ['new'], 'dutch apple pie'),
  c('french-silk-pie', 'French Silk Pie', 'American', 'Desserts', 'Medium', 40, 20, 8, 0, 0, ['Vegetarian'], ['new'], 'french silk pie'),
  c('funfetti-cookies', 'Funfetti Cookies', 'American', 'Baking', 'Easy', 15, 11, 24, 0, 0, ['Vegetarian'], ['new'], 'funfetti cookies'),
  c('funfetti-cupcakes', 'Funfetti Cupcakes', 'American', 'Baking', 'Easy', 20, 22, 12, 0, 0, ['Vegetarian'], ['new'], 'funfetti cupcakes'),
  c('gluten-free-brownies', 'Gluten Free Brownies', 'American', 'Baking', 'Easy', 15, 25, 16, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'gluten free brownies'),
  c('kitchen-sink-cookies', 'Kitchen Sink Cookies', 'American', 'Baking', 'Easy', 15, 12, 24, 0, 0, ['Vegetarian'], ['new'], 'kitchen sink cookies'),
  c('lemon-blueberry-bread', 'Lemon Blueberry Bread', 'American', 'Baking', 'Easy', 15, 55, 10, 0, 0, ['Vegetarian'], ['new'], 'lemon blueberry bread'),
  c('lemon-blueberry-cake', 'Lemon Blueberry Cake', 'American', 'Baking', 'Medium', 25, 35, 12, 0, 0, ['Vegetarian'], ['new'], 'lemon blueberry cake'),
  c('lemon-bundt-cake', 'Lemon Bundt Cake', 'American', 'Baking', 'Medium', 25, 50, 12, 0, 0, ['Vegetarian'], ['new'], 'lemon bundt cake'),
  c('lemon-drizzle-loaf', 'Lemon Drizzle Loaf', 'British', 'Baking', 'Easy', 15, 50, 10, 0, 0, ['Vegetarian'], ['new'], 'lemon drizzle loaf'),
  c('lemon-layer-cake', 'Lemon Layer Cake', 'American', 'Baking', 'Hard', 45, 30, 12, 0, 0, ['Vegetarian'], ['new'], 'lemon layer cake'),
  c('lemon-scones', 'Lemon Scones', 'British', 'Baking', 'Easy', 15, 18, 8, 0, 0, ['Vegetarian'], ['new'], 'lemon scones'),
  c('lemon-shortbread', 'Lemon Shortbread', 'British', 'Baking', 'Easy', 15, 20, 16, 0, 0, ['Vegetarian'], ['new'], 'lemon shortbread'),
  c('mexican-wedding-cookies', 'Mexican Wedding Cookies', 'Mexican', 'Holiday Specials', 'Easy', 20, 14, 30, 0, 0, ['Vegetarian'], ['new'], 'mexican wedding cookies'),
  c('mint-brownies', 'Mint Brownies', 'American', 'Desserts', 'Medium', 25, 30, 16, 0, 0, ['Vegetarian'], ['new'], 'mint brownies'),
  c('mixed-berry-pie', 'Mixed Berry Pie', 'American', 'Desserts', 'Medium', 40, 55, 8, 0, 0, ['Vegetarian'], ['new'], 'mixed berry pie'),
  c('white-chocolate-raspberry-blondies', 'White Chocolate Raspberry Blondies', 'American', 'Baking', 'Easy', 15, 28, 16, 0, 0, ['Vegetarian'], ['new'], 'white chocolate raspberry blondies'),
  c('nutella-brownies', 'Nutella Brownies', 'American', 'Baking', 'Easy', 10, 25, 16, 0, 0, ['Vegetarian'], ['new'], 'nutella brownies'),
  c('nutella-cookies', 'Nutella Cookies', 'American', 'Baking', 'Easy', 10, 10, 16, 0, 0, ['Vegetarian'], ['new'], 'nutella cookies'),
  c('oat-scones', 'Oat Scones', 'British', 'Baking', 'Easy', 15, 20, 8, 0, 0, ['Vegetarian'], ['new'], 'oat scones'),
  c('oatmeal-cranberry-cookies', 'Oatmeal Cranberry Cookies', 'American', 'Baking', 'Easy', 15, 12, 24, 0, 0, ['Vegetarian'], ['new'], 'oatmeal cranberry cookies'),
  c('oatmeal-muffins', 'Oatmeal Muffins', 'American', 'Breakfast', 'Easy', 15, 20, 12, 0, 0, ['Vegetarian'], ['new'], 'oatmeal muffins'),
  c('olive-oil-cake', 'Olive Oil Cake', 'Italian', 'Baking', 'Easy', 15, 40, 10, 0, 0, ['Vegetarian'], ['new'], 'olive oil cake'),
  c('orange-cookies', 'Orange Cookies', 'American', 'Baking', 'Easy', 20, 12, 24, 0, 0, ['Vegetarian'], ['new'], 'orange cookies'),
  c('orange-drizzle-cake', 'Orange Drizzle Cake', 'British', 'Baking', 'Easy', 20, 45, 10, 0, 0, ['Vegetarian'], ['new'], 'orange drizzle cake'),
  c('peach-crisp', 'Peach Crisp', 'American', 'Desserts', 'Easy', 20, 45, 8, 0, 0, ['Vegetarian'], ['new'], 'peach crisp'),
  c('peanut-butter-blossoms', 'Peanut Butter Blossoms', 'American', 'Holiday Specials', 'Easy', 20, 10, 30, 0, 0, ['Vegetarian'], ['new'], 'peanut butter blossoms'),
  c('peanut-butter-chocolate-chip-cookies', 'Peanut Butter Chocolate Chip Cookies', 'American', 'Baking', 'Easy', 15, 11, 24, 0, 0, ['Vegetarian'], ['new'], 'peanut butter chocolate chip cookies'),
  c('peanut-butter-cupcakes', 'Peanut Butter Cupcakes', 'American', 'Baking', 'Medium', 25, 22, 12, 0, 0, ['Vegetarian'], ['new'], 'peanut butter cupcakes'),
  c('peanut-butter-muffins', 'Peanut Butter Muffins', 'American', 'Breakfast', 'Easy', 10, 20, 12, 0, 0, ['Vegetarian'], ['new'], 'peanut butter muffins'),
  c('pear-cake', 'Pear Cake', 'French', 'Baking', 'Easy', 20, 50, 10, 0, 0, ['Vegetarian'], ['new'], 'pear cake'),
  c('pinwheel-cookies', 'Pinwheel Cookies', 'American', 'Baking', 'Medium', 40, 12, 36, 0, 0, ['Vegetarian'], ['new'], 'pinwheel cookies'),
  c('pumpkin-bars', 'Pumpkin Bars', 'American', 'Baking', 'Easy', 20, 30, 16, 0, 0, ['Vegetarian'], ['new'], 'pumpkin bars'),
  c('pumpkin-bundt-cake', 'Pumpkin Bundt Cake', 'American', 'Baking', 'Medium', 20, 55, 12, 0, 0, ['Vegetarian'], ['new'], 'pumpkin bundt cake'),
  c('pumpkin-chocolate-chip-bread', 'Pumpkin Chocolate Chip Bread', 'American', 'Baking', 'Easy', 15, 60, 10, 0, 0, ['Vegetarian'], ['new'], 'pumpkin chocolate chip bread'),
  c('pumpkin-chocolate-chip-cookies', 'Pumpkin Chocolate Chip Cookies', 'American', 'Baking', 'Easy', 15, 14, 24, 0, 0, ['Vegetarian'], ['new'], 'pumpkin chocolate chip cookies'),
  c('pumpkin-cookies', 'Pumpkin Cookies', 'American', 'Baking', 'Easy', 15, 14, 24, 0, 0, ['Vegetarian'], ['new'], 'pumpkin cookies'),
  c('pumpkin-cupcakes', 'Pumpkin Cupcakes', 'American', 'Baking', 'Easy', 20, 22, 12, 0, 0, ['Vegetarian'], ['new'], 'pumpkin cupcakes'),
  c('raspberry-brownies', 'Raspberry Brownies', 'American', 'Desserts', 'Easy', 15, 28, 16, 0, 0, ['Vegetarian'], ['new'], 'raspberry brownies'),
  c('raspberry-scones', 'Raspberry Scones', 'British', 'Baking', 'Easy', 15, 20, 8, 0, 0, ['Vegetarian'], ['new'], 'raspberry scones'),
  c('red-velvet-cookies', 'Red Velvet Cookies', 'American', 'Baking', 'Easy', 15, 11, 24, 0, 0, ['Vegetarian'], ['new'], 'red velvet cookies'),
  c('maple-walnut-cookies', 'Maple Walnut Cookies', 'American', 'Baking', 'Easy', 15, 12, 24, 0, 0, ['Vegetarian'], ['new'], 'maple walnut cookies'),
  c('salted-caramel-cookies', 'Salted Caramel Cookies', 'American', 'Baking', 'Medium', 25, 12, 24, 0, 0, ['Vegetarian'], ['new'], 'salted caramel cookies'),
  c('salted-caramel-cupcakes', 'Salted Caramel Cupcakes', 'American', 'Baking', 'Medium', 35, 22, 12, 0, 0, ['Vegetarian'], ['new'], 'salted caramel cupcakes'),
  c('smores-cookies', 'Smores Cookies', 'American', 'Baking', 'Easy', 15, 11, 18, 0, 0, [], ['new'], 'smores cookies'),
  c('sour-cream-pound-cake', 'Sour Cream Pound Cake', 'American', 'Baking', 'Medium', 20, 70, 14, 0, 0, ['Vegetarian'], ['new'], 'sour cream pound cake'),
  c('strawberry-bread', 'Strawberry Bread', 'American', 'Baking', 'Easy', 15, 55, 10, 0, 0, ['Vegetarian'], ['new'], 'strawberry bread'),
  c('strawberry-cupcakes', 'Strawberry Cupcakes', 'American', 'Baking', 'Easy', 25, 22, 12, 0, 0, ['Vegetarian'], ['new'], 'strawberry cupcakes'),
  c('strawberry-rhubarb-crisp', 'Strawberry Rhubarb Crisp', 'American', 'Desserts', 'Easy', 20, 45, 8, 0, 0, ['Vegetarian'], ['new'], 'strawberry rhubarb crisp'),
  c('vinegar-pie', 'Vinegar Pie', 'American', 'Desserts', 'Easy', 15, 45, 8, 0, 0, ['Vegetarian'], ['new'], 'vinegar pie'),
  c('white-cake', 'White Cake', 'American', 'Baking', 'Medium', 30, 30, 12, 0, 0, ['Vegetarian'], ['new'], 'white cake'),
  c('yellow-cake', 'Yellow Cake', 'American', 'Baking', 'Medium', 30, 30, 12, 0, 0, ['Vegetarian'], ['new'], 'yellow cake'),
  c('zucchini-brownies', 'Zucchini Brownies', 'American', 'Baking', 'Easy', 15, 28, 16, 0, 0, ['Vegetarian'], ['new'], 'zucchini brownies'),
  c('zucchini-cookies', 'Zucchini Cookies', 'American', 'Baking', 'Easy', 15, 12, 24, 0, 0, ['Vegetarian'], ['new'], 'zucchini cookies'),
  c('zucchini-muffins', 'Zucchini Muffins', 'American', 'Breakfast', 'Easy', 15, 22, 12, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'zucchini muffins')
];
