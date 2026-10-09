'use strict';

/**
 * Weekly Delight — recipe catalog, volume forty-two.
 * One hundred sweets and sweet extras, preserves, snacks and dips, salads, soups and vegetable mains: ice creams and sorbets, vegan bakes, jams, hummus and salsa, grain bowls and vegetarian dinners.
 * They are the variations that cooks in the USA, Canada, Australia, the UK and New
 * Zealand look for by name; no search-volume data was used to pick or rank them.
 *
 * Every name was tried against the recipes already published, with
 * tools/dedupe-candidates.js, then compared by hand with the closest existing
 * recipes, and the dishes that were the same under another name were dropped.
 *
 * Spread: American 45, Italian 13, British 10, Middle Eastern 5, French 4, Mexican 4, Indian 3, Australian 2, Chinese 2, Spanish 2, Thai 2, Vietnamese 2, German 1, Greek 1, Japanese 1, Korean 1, Malaysian 1, Russian 1.
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
  c('strawberry-cream-roll', 'Strawberry Cream Roll', 'American', 'Desserts', 'Medium', 25, 12, 10, 0, 0, ['Vegetarian'], ['new'], 'strawberry cream roll'),
  c('strawberry-ice-cream', 'Strawberry Ice Cream', 'American', 'Desserts', 'Easy', 20, 0, 8, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'strawberry ice cream'),
  c('chocolate-ice-cream', 'Chocolate Ice Cream', 'American', 'Desserts', 'Medium', 20, 5, 8, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'chocolate ice cream'),
  c('mango-sorbet', 'Mango Sorbet', 'Australian', 'Desserts', 'Easy', 10, 0, 6, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'mango sorbet'),
  c('lemon-sorbet', 'Lemon Sorbet', 'Italian', 'Desserts', 'Easy', 10, 5, 6, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'lemon sorbet'),
  c('sweet-potato-biscuits', 'Sweet Potato Biscuits', 'American', 'Baking', 'Easy', 20, 18, 12, 0, 0, ['Vegetarian'], ['new'], 'sweet potato biscuits'),
  c('traybake-brownies', 'Traybake Brownies', 'British', 'Baking', 'Easy', 15, 30, 20, 0, 0, ['Vegetarian'], ['new'], 'traybake brownies'),
  c('vegan-brownies', 'Vegan Brownies', 'American', 'Baking', 'Easy', 15, 30, 16, 0, 0, ['Vegetarian'], ['new'], 'vegan brownies'),
  c('vegan-cheesecake', 'Vegan Cheesecake', 'American', 'Desserts', 'Medium', 30, 5, 10, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'vegan cheesecake'),
  c('vegan-chocolate-cake', 'Vegan Chocolate Cake', 'American', 'Baking', 'Easy', 15, 35, 12, 0, 0, ['Vegetarian'], ['new'], 'vegan chocolate cake'),
  c('vegan-cookies', 'Vegan Cookies', 'American', 'Baking', 'Easy', 15, 12, 18, 0, 0, ['Vegetarian'], ['new'], 'vegan cookies'),
  c('zucchini-chocolate-cake', 'Zucchini Chocolate Cake', 'American', 'Baking', 'Easy', 20, 45, 12, 0, 0, ['Vegetarian'], ['new'], 'zucchini chocolate cake'),
  c('avocado-brownies', 'Avocado Brownies', 'American', 'Baking', 'Easy', 15, 28, 16, 0, 0, ['Vegetarian'], ['new'], 'avocado brownies'),
  c('black-bean-brownies', 'Black Bean Brownies', 'American', 'Baking', 'Easy', 15, 28, 16, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'black bean brownies'),
  c('chickpea-brownies', 'Chickpea Brownies', 'American', 'Baking', 'Easy', 15, 28, 16, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'chickpea brownies'),
  c('creme-anglaise', 'Creme Anglaise', 'French', 'Desserts', 'Medium', 10, 10, 8, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'creme anglaise'),
  c('sticky-toffee-sauce', 'Sticky Toffee Sauce', 'British', 'Desserts', 'Easy', 5, 10, 8, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'sticky toffee sauce'),
  c('passionfruit-curd', 'Passionfruit Curd', 'Australian', 'Desserts', 'Medium', 10, 12, 16, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'passionfruit curd'),
  c('choux-buns', 'Choux Buns', 'French', 'Baking', 'Hard', 30, 30, 12, 0, 0, ['Vegetarian'], ['new'], 'choux buns'),
  c('rye-bread', 'Rye Bread', 'German', 'Baking', 'Medium', 30, 40, 12, 0, 0, ['Vegetarian'], ['new'], 'rye bread'),
  c('no-knead-bread', 'No Knead Bread', 'American', 'Baking', 'Easy', 10, 45, 10, 0, 0, ['Vegetarian'], ['new'], 'no knead bread'),
  c('roasted-strawberries', 'Roasted Strawberries', 'American', 'Desserts', 'Easy', 5, 20, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'roasted strawberries'),
  c('stewed-rhubarb', 'Stewed Rhubarb', 'British', 'Desserts', 'Easy', 5, 10, 4, 0, 0, ['Vegetarian', 'Vegan', 'Gluten-Free'], ['new'], 'stewed rhubarb'),
  c('berry-compote', 'Berry Compote', 'American', 'Desserts', 'Easy', 5, 10, 6, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'berry compote'),
  c('blueberry-jam', 'Blueberry Jam', 'American', 'Baking', 'Easy', 10, 25, 24, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'blueberry jam'),
  c('chilli-jam', 'Chilli Jam', 'British', 'Appetizers', 'Easy', 10, 40, 24, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'chilli jam'),
  c('mint-jelly', 'Mint Jelly', 'British', 'Appetizers', 'Easy', 10, 15, 24, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'mint jelly'),
  c('pumpkin-butter', 'Pumpkin Butter', 'American', 'Baking', 'Easy', 10, 45, 24, 0, 0, ['Vegetarian', 'Vegan', 'Gluten-Free'], ['new'], 'pumpkin butter'),
  c('baked-bananas', 'Baked Bananas', 'American', 'Desserts', 'Easy', 5, 15, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'baked bananas'),
  c('slow-cooker-apple-sauce', 'Slow Cooker Apple Sauce', 'American', 'Healthy', 'Easy', 15, 240, 10, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'slow cooker apple sauce'),
  c('bacon-jam', 'Bacon Jam', 'American', 'Appetizers', 'Easy', 10, 60, 16, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'bacon jam'),
  c('date-balls', 'Date Balls', 'Middle Eastern', 'Healthy', 'Easy', 15, 0, 16, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'date balls'),
  c('protein-balls', 'Protein Balls', 'American', 'Healthy', 'Easy', 15, 0, 16, 0, 0, ['Vegetarian'], ['new'], 'protein balls'),
  c('peanut-butter-energy-bites', 'Peanut Butter Energy Bites', 'American', 'Healthy', 'Easy', 15, 0, 16, 0, 0, ['Vegetarian'], ['new'], 'peanut butter energy bites'),
  c('spiced-nuts', 'Spiced Nuts', 'American', 'Appetizers', 'Easy', 5, 20, 10, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'spiced nuts'),
  c('trail-mix', 'Trail Mix', 'American', 'Healthy', 'Easy', 5, 0, 8, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'trail mix'),
  c('cheese-popcorn', 'Cheese Popcorn', 'American', 'Appetizers', 'Easy', 5, 5, 4, 0, 0, ['Gluten-Free'], ['new'], 'cheese popcorn'),
  c('sweet-potato-chips', 'Sweet Potato Chips', 'American', 'Appetizers', 'Easy', 10, 25, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'sweet potato chips'),
  c('beetroot-dip', 'Beetroot Dip', 'British', 'Appetizers', 'Easy', 10, 0, 6, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'beetroot dip'),
  c('beetroot-hummus', 'Beetroot Hummus', 'Middle Eastern', 'Appetizers', 'Easy', 10, 0, 8, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'beetroot hummus'),
  c('edamame-hummus', 'Edamame Hummus', 'American', 'Appetizers', 'Easy', 10, 0, 6, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'edamame hummus'),
  c('pea-and-mint-dip', 'Pea and Mint Dip', 'British', 'Appetizers', 'Easy', 10, 3, 6, 0, 0, ['Vegetarian'], ['new'], 'pea and mint dip'),
  c('pumpkin-hummus', 'Pumpkin Hummus', 'American', 'Appetizers', 'Easy', 10, 0, 8, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'pumpkin hummus'),
  c('roasted-red-pepper-hummus', 'Roasted Red Pepper Hummus', 'Middle Eastern', 'Appetizers', 'Easy', 10, 0, 8, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'roasted red pepper hummus'),
  c('whipped-feta', 'Whipped Feta', 'Greek', 'Appetizers', 'Easy', 10, 0, 6, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'whipped feta'),
  c('black-bean-salsa', 'Black Bean Salsa', 'Mexican', 'Appetizers', 'Easy', 10, 0, 8, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'black bean salsa'),
  c('mango-salsa', 'Mango Salsa', 'Mexican', 'Appetizers', 'Easy', 15, 0, 8, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'mango salsa'),
  c('roasted-tomato-salsa', 'Roasted Tomato Salsa', 'Mexican', 'Appetizers', 'Easy', 10, 25, 8, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'roasted tomato salsa'),
  c('antipasto-skewers', 'Antipasto Skewers', 'Italian', 'Appetizers', 'Easy', 15, 0, 8, 0, 0, ['Gluten-Free'], ['new'], 'antipasto skewers'),
  c('caprese-skewers', 'Caprese Skewers', 'Italian', 'Appetizers', 'Easy', 10, 0, 8, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'caprese skewers'),
  c('prosciutto-wrapped-asparagus', 'Prosciutto Wrapped Asparagus', 'Italian', 'Appetizers', 'Easy', 10, 12, 6, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'prosciutto wrapped asparagus'),
  c('prosciutto-and-melon', 'Prosciutto and Melon', 'Italian', 'Appetizers', 'Easy', 10, 0, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'prosciutto and melon'),
  c('puff-pastry-pinwheels', 'Puff Pastry Pinwheels', 'American', 'Appetizers', 'Easy', 15, 20, 16, 0, 0, ['Vegetarian'], ['new'], 'puff pastry pinwheels'),
  c('stuffed-dates', 'Stuffed Dates', 'Spanish', 'Appetizers', 'Easy', 10, 10, 8, 0, 0, ['Vegetarian'], ['new'], 'stuffed dates'),
  c('spring-onion-pancakes', 'Spring Onion Pancakes', 'Chinese', 'Appetizers', 'Medium', 30, 15, 6, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'spring onion pancakes'),
  c('smoked-salmon-blinis', 'Smoked Salmon Blinis', 'Russian', 'Appetizers', 'Medium', 20, 15, 12, 0, 0, [], ['new'], 'smoked salmon blinis'),
  c('fried-wontons', 'Fried Wontons', 'Chinese', 'Appetizers', 'Medium', 25, 8, 6, 0, 0, ['Dairy-Free'], ['new'], 'fried wontons'),
  c('taquitos', 'Taquitos', 'Mexican', 'Appetizers', 'Easy', 15, 20, 8, 0, 0, [], ['new'], 'taquitos'),
  c('mini-pizzas', 'Mini Pizzas', 'Italian', 'Appetizers', 'Easy', 15, 12, 8, 0, 0, [], ['new'], 'mini pizzas'),
  c('mac-and-cheese-cups', 'Mac and Cheese Cups', 'American', 'Appetizers', 'Easy', 15, 20, 12, 0, 0, ['Vegetarian'], ['new'], 'mac and cheese cups'),
  c('asian-slaw', 'Asian Slaw', 'American', 'Healthy', 'Easy', 15, 0, 6, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'asian slaw'),
  c('beet-salad-with-orange', 'Beet Salad with Orange', 'American', 'Healthy', 'Easy', 15, 0, 4, 0, 0, ['Vegetarian'], ['new'], 'beet salad with orange'),
  c('cabbage-salad-with-peanut-dressing', 'Cabbage Salad with Peanut Dressing', 'Thai', 'Healthy', 'Easy', 15, 0, 6, 0, 0, ['Vegetarian'], ['new'], 'cabbage salad with peanut dressing'),
  c('kale-and-quinoa-salad', 'Kale and Quinoa Salad', 'American', 'Healthy', 'Easy', 10, 15, 4, 0, 0, ['Vegetarian'], ['new'], 'kale and quinoa salad'),
  c('massaged-kale-salad', 'Massaged Kale Salad', 'American', 'Healthy', 'Easy', 15, 0, 4, 0, 0, ['Gluten-Free'], ['new'], 'massaged kale salad'),
  c('mango-salad', 'Mango Salad', 'Thai', 'Healthy', 'Easy', 15, 0, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'mango salad'),
  c('pear-and-parmesan-salad', 'Pear and Parmesan Salad', 'Italian', 'Healthy', 'Easy', 10, 0, 4, 0, 0, ['Gluten-Free'], ['new'], 'pear and parmesan salad'),
  c('pasta-salad-with-italian-dressing', 'Pasta Salad with Italian Dressing', 'American', 'Lunch', 'Easy', 15, 12, 8, 0, 0, [], ['new'], 'pasta salad with italian dressing'),
  c('tortellini-salad', 'Tortellini Salad', 'Italian', 'Lunch', 'Easy', 15, 5, 6, 0, 0, [], ['new'], 'tortellini salad'),
  c('warm-lentil-salad', 'Warm Lentil Salad', 'French', 'Healthy', 'Easy', 10, 25, 4, 0, 0, ['Vegetarian'], ['new'], 'warm lentil salad'),
  c('soba-noodle-salad', 'Soba Noodle Salad', 'Japanese', 'Healthy', 'Easy', 15, 6, 4, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'soba noodle salad'),
  c('vietnamese-noodle-salad', 'Vietnamese Noodle Salad', 'Vietnamese', 'Healthy', 'Easy', 20, 5, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'vietnamese noodle salad'),
  c('summer-rolls-with-prawns', 'Summer Rolls with Prawns', 'Vietnamese', 'Appetizers', 'Medium', 30, 3, 8, 0, 0, [], ['new'], 'summer rolls with prawns'),
  c('crab-salad', 'Crab Salad', 'American', 'Healthy', 'Easy', 15, 0, 4, 0, 0, ['Dairy-Free'], ['new'], 'crab salad'),
  c('quinoa-salad-with-roasted-vegetables', 'Quinoa Salad with Roasted Vegetables', 'American', 'Healthy', 'Easy', 15, 35, 4, 0, 0, ['Vegetarian'], ['new'], 'quinoa salad with roasted vegetables'),
  c('sweet-potato-buddha-bowl', 'Sweet Potato Buddha Bowl', 'American', 'Healthy', 'Easy', 15, 35, 2, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'sweet potato buddha bowl'),
  c('grain-bowl-with-tahini', 'Grain Bowl with Tahini', 'Middle Eastern', 'Healthy', 'Easy', 15, 25, 2, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'grain bowl with tahini'),
  c('korean-beef-bowl', 'Korean Beef Bowl', 'Korean', 'Dinner', 'Easy', 10, 15, 4, 0, 0, ['Dairy-Free'], ['new'], 'korean beef bowl'),
  c('celery-soup', 'Celery Soup', 'British', 'Lunch', 'Easy', 15, 30, 4, 0, 0, ['Vegetarian'], ['new'], 'celery soup'),
  c('slow-cooker-vegetable-soup', 'Slow Cooker Vegetable Soup', 'American', 'Lunch', 'Easy', 15, 360, 6, 0, 0, ['Vegetarian', 'Vegan'], ['new'], 'slow cooker vegetable soup'),
  c('curry-noodle-soup', 'Curry Noodle Soup', 'Malaysian', 'Dinner', 'Easy', 10, 20, 4, 0, 0, [], ['new'], 'curry noodle soup'),
  c('black-eyed-pea-stew', 'Black Eyed Pea Stew', 'American', 'Dinner', 'Easy', 10, 40, 6, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'black eyed pea stew'),
  c('chickpea-and-spinach-stew', 'Chickpea and Spinach Stew', 'Spanish', 'Dinner', 'Easy', 10, 25, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'chickpea and spinach stew'),
  c('slow-cooker-chickpea-curry', 'Slow Cooker Chickpea Curry', 'Indian', 'Dinner', 'Easy', 10, 240, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'slow cooker chickpea curry'),
  c('vegetable-korma', 'Vegetable Korma', 'Indian', 'Dinner', 'Easy', 15, 30, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'vegetable korma'),
  c('vegetable-pilau', 'Vegetable Pilau', 'Indian', 'Dinner', 'Easy', 10, 25, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'vegetable pilau'),
  c('mujaddara', 'Mujaddara', 'Middle Eastern', 'Dinner', 'Easy', 10, 40, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'mujaddara'),
  c('pea-risotto', 'Pea Risotto', 'Italian', 'Dinner', 'Medium', 10, 30, 4, 0, 0, [], ['new'], 'pea risotto'),
  c('lemon-risotto', 'Lemon Risotto', 'Italian', 'Dinner', 'Medium', 10, 30, 4, 0, 0, [], ['new'], 'lemon risotto'),
  c('stuffed-butternut-squash', 'Stuffed Butternut Squash', 'American', 'Dinner', 'Medium', 20, 60, 4, 0, 0, ['Vegetarian'], ['new'], 'stuffed butternut squash'),
  c('vegetable-lasagne', 'Vegetable Lasagne', 'Italian', 'Dinner', 'Medium', 30, 50, 8, 0, 0, [], ['new'], 'vegetable lasagne'),
  c('spinach-and-ricotta-cannelloni', 'Spinach and Ricotta Cannelloni', 'Italian', 'Dinner', 'Medium', 30, 40, 6, 0, 0, [], ['new'], 'spinach and ricotta cannelloni'),
  c('roasted-vegetable-tart', 'Roasted Vegetable Tart', 'French', 'Lunch', 'Easy', 20, 40, 6, 0, 0, ['Vegetarian'], ['new'], 'roasted vegetable tart'),
  c('vegetable-wellington', 'Vegetable Wellington', 'British', 'Dinner', 'Hard', 40, 40, 6, 0, 0, ['Vegetarian'], ['new'], 'vegetable wellington'),
  c('mushroom-wellington', 'Mushroom Wellington', 'British', 'Dinner', 'Hard', 40, 40, 6, 0, 0, ['Vegetarian'], ['new'], 'mushroom wellington'),
  c('buffalo-cauliflower', 'Buffalo Cauliflower', 'American', 'Appetizers', 'Easy', 10, 25, 4, 0, 0, ['Vegetarian'], ['new'], 'buffalo cauliflower'),
  c('beet-burgers', 'Beet Burgers', 'American', 'Dinner', 'Medium', 20, 20, 6, 0, 0, ['Vegetarian'], ['new'], 'beet burgers'),
  c('vegan-burgers', 'Vegan Burgers', 'American', 'Dinner', 'Medium', 20, 15, 6, 0, 0, [], ['new'], 'vegan burgers'),
  c('sweet-potato-gnocchi', 'Sweet Potato Gnocchi', 'Italian', 'Dinner', 'Hard', 30, 20, 4, 0, 0, [], ['new'], 'sweet potato gnocchi'),
  c('air-fryer-vegetables', 'Air Fryer Vegetables', 'American', 'Healthy', 'Easy', 10, 15, 4, 0, 0, ['Vegetarian', 'Vegan', 'Gluten-Free'], ['new'], 'air fryer vegetables')
];
