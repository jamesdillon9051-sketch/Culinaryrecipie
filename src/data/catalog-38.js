'use strict';

/**
 * Weekly Delight — recipe catalog, volume thirty-eight.
 * One hundred more b2 dishes that take little effort: breakfasts and
 * sandwiches, cheap sides, potato dishes, dips and snacks, breads, buns and
 * quick bakes, simple puddings and two drinks. They are familiar dishes that
 * people in the USA, Canada, Australia, the UK and New Zealand look for by
 * name; no search-volume data was used to pick or rank them.
 *
 * "Budget" here means what the ingredient list is made of, and no price is
 * printed anywhere, because the site cannot check what anything costs.
 *
 * Every name was tried against the recipes already published, with
 * tools/dedupe-candidates.js, and then read by hand.
 *
 * Spread: American 32, British 31, Australian 10, Italian 8, Middle Eastern 4, French 3, Mexican 3, Indian 2, Scottish 2, Canadian 1, Chinese 1, Greek 1, New Zealand 1, Polish 1.
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
  c('cranberry-chutney', 'Cranberry Chutney', 'American', 'Appetizers', 'Easy', 10, 25, 16, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'cranberry chutney'),
  c('tomato-chutney', 'Tomato Chutney', 'British', 'Appetizers', 'Easy', 20, 90, 24, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'tomato chutney'),
  c('plum-chutney', 'Plum Chutney', 'British', 'Appetizers', 'Easy', 20, 75, 24, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'plum chutney'),
  c('green-tomato-chutney', 'Green Tomato Chutney', 'British', 'Appetizers', 'Easy', 20, 90, 24, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'green tomato chutney'),
  c('beetroot-relish', 'Beetroot Relish', 'Australian', 'Appetizers', 'Easy', 20, 45, 16, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'beetroot relish'),
  c('corn-relish', 'Corn Relish', 'Australian', 'Appetizers', 'Easy', 20, 40, 16, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'corn relish'),
  c('pickled-beetroot', 'Pickled Beetroot', 'British', 'Appetizers', 'Easy', 15, 20, 16, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'pickled beetroot'),
  c('raspberry-jam', 'Raspberry Jam', 'British', 'Breakfast', 'Easy', 10, 20, 24, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'raspberry jam'),
  c('blackberry-jam', 'Blackberry Jam', 'British', 'Breakfast', 'Easy', 10, 20, 24, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'blackberry jam'),
  c('plum-jam', 'Plum Jam', 'British', 'Breakfast', 'Easy', 15, 35, 24, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'plum jam'),
  c('apricot-jam', 'Apricot Jam', 'American', 'Breakfast', 'Easy', 15, 30, 24, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'apricot jam'),
  c('rhubarb-jam', 'Rhubarb Jam', 'British', 'Breakfast', 'Easy', 15, 25, 24, 0, 0, ['Vegetarian', 'Vegan', 'Gluten-Free'], ['new'], 'rhubarb jam'),
  c('fig-jam', 'Fig Jam', 'American', 'Breakfast', 'Easy', 10, 40, 24, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'fig jam'),
  c('almond-butter', 'Almond Butter', 'American', 'Breakfast', 'Easy', 5, 15, 16, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'almond butter'),
  c('chocolate-spread', 'Chocolate Spread', 'American', 'Desserts', 'Easy', 10, 5, 16, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'chocolate spread'),
  c('butterscotch-sauce', 'Butterscotch Sauce', 'American', 'Desserts', 'Easy', 5, 8, 8, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'butterscotch sauce'),
  c('thousand-island-dressing', 'Thousand Island Dressing', 'American', 'Appetizers', 'Easy', 5, 0, 8, 0, 0, ['Dairy-Free'], ['new'], 'thousand island dressing'),
  c('red-wine-sauce', 'Red Wine Sauce', 'British', 'Dinner', 'Easy', 5, 20, 4, 0, 0, [], ['new'], 'red wine sauce'),
  c('barbecue-sauce', 'Barbecue Sauce', 'American', 'Appetizers', 'Easy', 5, 25, 12, 0, 0, ['Dairy-Free'], ['new'], 'barbecue sauce'),
  c('teriyaki-sauce', 'Teriyaki Sauce', 'American', 'Appetizers', 'Easy', 5, 10, 8, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'teriyaki sauce'),
  c('sweet-and-sour-sauce', 'Sweet and Sour Sauce', 'Chinese', 'Appetizers', 'Easy', 5, 10, 8, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'sweet and sour sauce'),
  c('peanut-sauce', 'Peanut Sauce', 'American', 'Appetizers', 'Easy', 5, 8, 8, 0, 0, ['Vegetarian'], ['new'], 'peanut sauce'),
  c('satay-sauce', 'Satay Sauce', 'Australian', 'Appetizers', 'Easy', 5, 10, 8, 0, 0, ['Vegetarian'], ['new'], 'satay sauce'),
  c('tomato-passata', 'Tomato Passata', 'Italian', 'Appetizers', 'Easy', 10, 40, 8, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'tomato passata'),
  c('arrabbiata-sauce', 'Arrabbiata Sauce', 'Italian', 'Dinner', 'Easy', 5, 20, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'arrabbiata sauce'),
  c('pizza-sauce', 'Pizza Sauce', 'American', 'Appetizers', 'Easy', 5, 15, 8, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'pizza sauce'),
  c('mushroom-gravy', 'Mushroom Gravy', 'British', 'Dinner', 'Easy', 5, 15, 4, 0, 0, ['Vegetarian'], ['new'], 'mushroom gravy'),
  c('chicken-stock', 'Chicken Stock', 'British', 'Lunch', 'Easy', 10, 180, 8, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'chicken stock'),
  c('beef-stock', 'Beef Stock', 'British', 'Lunch', 'Easy', 15, 240, 8, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'beef stock'),
  c('vegetable-stock', 'Vegetable Stock', 'British', 'Lunch', 'Easy', 10, 60, 8, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'vegetable stock'),
  c('fish-stock', 'Fish Stock', 'British', 'Lunch', 'Easy', 10, 30, 6, 0, 0, ['Gluten-Free'], ['new'], 'fish stock'),
  c('steak-marinade', 'Steak Marinade', 'American', 'Appetizers', 'Easy', 5, 0, 4, 0, 0, ['Dairy-Free'], ['new'], 'steak marinade'),
  c('chicken-marinade', 'Chicken Marinade', 'American', 'Appetizers', 'Easy', 5, 0, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'chicken marinade'),
  c('lamb-marinade', 'Lamb Marinade', 'Middle Eastern', 'Appetizers', 'Easy', 5, 0, 6, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'lamb marinade'),
  c('seeded-loaf', 'Seeded Loaf', 'British', 'Baking', 'Medium', 20, 40, 10, 0, 0, ['Vegetarian'], ['new'], 'seeded loaf'),
  c('pita-bread', 'Pita Bread', 'Middle Eastern', 'Baking', 'Medium', 25, 15, 8, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'pita bread'),
  c('cornbread-waffles', 'Cornbread Waffles', 'American', 'Breakfast', 'Easy', 10, 20, 4, 0, 0, ['Vegetarian'], ['new'], 'cornbread waffles'),
  c('waffle-cones', 'Waffle Cones', 'American', 'Desserts', 'Medium', 20, 20, 8, 0, 0, ['Vegetarian'], ['new'], 'waffle cones'),
  c('tortilla-chips', 'Tortilla Chips', 'Mexican', 'Appetizers', 'Easy', 5, 12, 4, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'tortilla chips'),
  c('pita-chips', 'Pita Chips', 'Middle Eastern', 'Appetizers', 'Easy', 5, 10, 4, 0, 0, ['Vegetarian'], ['new'], 'pita chips'),
  c('caramel-popcorn', 'Caramel Popcorn', 'American', 'Desserts', 'Easy', 5, 25, 8, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'caramel popcorn'),
  c('seeded-crackers', 'Seeded Crackers', 'British', 'Baking', 'Easy', 10, 25, 10, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'seeded crackers'),
  c('oat-cakes', 'Oat Cakes', 'Scottish', 'Baking', 'Easy', 10, 20, 12, 0, 0, ['Vegetarian'], ['new'], 'oat cakes'),
  c('meal-prep-chicken-and-rice', 'Meal Prep Chicken and Rice', 'American', 'Dinner', 'Easy', 15, 30, 4, 0, 0, ['Dairy-Free'], ['new'], 'meal prep chicken and rice'),
  c('meal-prep-burrito-bowls', 'Meal Prep Burrito Bowls', 'Mexican', 'Dinner', 'Easy', 15, 25, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'meal prep burrito bowls'),
  c('freezer-burritos', 'Freezer Burritos', 'Mexican', 'Dinner', 'Easy', 20, 10, 8, 0, 0, ['Vegetarian'], ['new'], 'freezer burritos'),
  c('freezer-meatballs', 'Freezer Meatballs', 'American', 'Dinner', 'Easy', 20, 20, 8, 0, 0, [], ['new'], 'freezer meatballs'),
  c('freezer-soup', 'Freezer Soup', 'American', 'Lunch', 'Easy', 15, 35, 8, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'freezer soup'),
  c('mason-jar-salad', 'Mason Jar Salad', 'American', 'Lunch', 'Easy', 15, 0, 4, 0, 0, ['Vegetarian'], ['new'], 'mason jar salad'),
  c('sweet-potato-brownies', 'Sweet Potato Brownies', 'American', 'Desserts', 'Easy', 15, 30, 12, 0, 0, ['Vegetarian'], ['new'], 'sweet potato brownies'),
  c('lentil-burgers', 'Lentil Burgers', 'British', 'Dinner', 'Easy', 15, 20, 4, 0, 0, ['Vegetarian'], ['new'], 'lentil burgers'),
  c('chickpea-patties', 'Chickpea Patties', 'Middle Eastern', 'Dinner', 'Easy', 15, 12, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'chickpea patties'),
  c('lentil-dal', 'Lentil Dal', 'Indian', 'Dinner', 'Easy', 10, 35, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'lentil dal'),
  c('spinach-and-ricotta-pasta', 'Spinach and Ricotta Pasta', 'Italian', 'Quick Meals', 'Easy', 5, 15, 4, 0, 0, [], ['new'], 'spinach and ricotta pasta'),
  c('spinach-pie', 'Spinach Pie', 'Greek', 'Dinner', 'Medium', 25, 45, 6, 0, 0, ['Vegetarian'], ['new'], 'spinach pie'),
  c('spinach-quiche', 'Spinach Quiche', 'French', 'Dinner', 'Medium', 25, 40, 6, 0, 0, ['Vegetarian'], ['new'], 'spinach quiche'),
  c('beetroot-soup', 'Beetroot Soup', 'Polish', 'Lunch', 'Easy', 10, 40, 4, 0, 0, ['Vegetarian'], ['new'], 'beetroot soup'),
  c('pumpkin-pasta-bake', 'Pumpkin Pasta Bake', 'Italian', 'Dinner', 'Easy', 15, 35, 6, 0, 0, [], ['new'], 'pumpkin pasta bake'),
  c('roast-pumpkin-salad', 'Roast Pumpkin Salad', 'Australian', 'Lunch', 'Easy', 15, 30, 4, 0, 0, ['Vegetarian'], ['new'], 'roast pumpkin salad'),
  c('roasted-red-pepper-pasta', 'Roasted Red Pepper Pasta', 'Italian', 'Dinner', 'Easy', 10, 25, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'roasted red pepper pasta'),
  c('roasted-garlic', 'Roasted Garlic', 'Italian', 'Appetizers', 'Easy', 5, 40, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'roasted garlic'),
  c('roasted-brussels-sprouts', 'Roasted Brussels Sprouts', 'American', 'Dinner', 'Easy', 10, 25, 4, 0, 0, ['Gluten-Free'], ['new'], 'roasted brussels sprouts'),
  c('roasted-beets', 'Roasted Beets', 'American', 'Dinner', 'Easy', 10, 50, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'roasted beets'),
  c('roasted-corn', 'Roasted Corn', 'American', 'Dinner', 'Easy', 5, 25, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'roasted corn'),
  c('roast-beef-sandwich', 'Roast Beef Sandwich', 'British', 'Lunch', 'Easy', 10, 0, 2, 0, 0, [], ['new'], 'roast beef sandwich'),
  c('roast-chicken-sandwich', 'Roast Chicken Sandwich', 'British', 'Lunch', 'Easy', 10, 0, 2, 0, 0, [], ['new'], 'roast chicken sandwich'),
  c('turkey-sandwich', 'Turkey Sandwich', 'American', 'Lunch', 'Easy', 8, 0, 2, 0, 0, [], ['new'], 'turkey sandwich'),
  c('banana-sandwich', 'Banana Sandwich', 'American', 'Lunch', 'Easy', 5, 0, 1, 0, 0, ['Vegetarian'], ['new'], 'banana sandwich'),
  c('cucumber-sandwich', 'Cucumber Sandwich', 'British', 'Lunch', 'Easy', 10, 0, 4, 0, 0, ['Vegetarian'], ['new'], 'cucumber sandwich'),
  c('avocado-sandwich', 'Avocado Sandwich', 'Australian', 'Lunch', 'Easy', 8, 0, 2, 0, 0, ['Vegetarian'], ['new'], 'avocado sandwich'),
  c('chicken-mayo-sandwich', 'Chicken Mayo Sandwich', 'British', 'Lunch', 'Easy', 10, 0, 2, 0, 0, [], ['new'], 'chicken mayo sandwich'),
  c('pastrami-sandwich', 'Pastrami Sandwich', 'American', 'Lunch', 'Easy', 8, 5, 2, 0, 0, ['Vegetarian'], ['new'], 'pastrami sandwich'),
  c('hot-roast-pork-roll', 'Hot Roast Pork Roll', 'Australian', 'Lunch', 'Easy', 10, 10, 2, 0, 0, [], ['new'], 'hot roast pork roll'),
  c('hoagie', 'Hoagie', 'American', 'Lunch', 'Easy', 10, 0, 2, 0, 0, [], ['new'], 'hoagie'),
  c('panini', 'Panini', 'Italian', 'Lunch', 'Easy', 8, 6, 2, 0, 0, [], ['new'], 'panini'),
  c('pulled-chicken-sandwich', 'Pulled Chicken Sandwich', 'American', 'Lunch', 'Easy', 10, 10, 4, 0, 0, [], ['new'], 'pulled chicken sandwich'),
  c('egg-and-cress-sandwich', 'Egg and Cress Sandwich', 'British', 'Lunch', 'Easy', 10, 10, 4, 0, 0, ['Vegetarian'], ['new'], 'egg and cress sandwich'),
  c('marmite-on-toast', 'Marmite on Toast', 'British', 'Breakfast', 'Easy', 2, 3, 1, 0, 0, ['Vegetarian'], ['new'], 'marmite on toast'),
  c('bounty-slice', 'Bounty Slice', 'Australian', 'Desserts', 'Easy', 15, 0, 16, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'bounty slice'),
  c('cornflake-cookies', 'Cornflake Cookies', 'Australian', 'Baking', 'Easy', 15, 15, 20, 0, 0, ['Vegetarian'], ['new'], 'cornflake cookies'),
  c('sticky-date-cake', 'Sticky Date Cake', 'Australian', 'Baking', 'Easy', 20, 40, 12, 0, 0, ['Vegetarian'], ['new'], 'sticky date cake'),
  c('passionfruit-slice', 'Passionfruit Slice', 'Australian', 'Desserts', 'Easy', 20, 0, 16, 0, 0, ['Vegetarian'], ['new'], 'passionfruit slice'),
  c('shortbread-fingers', 'Shortbread Fingers', 'Scottish', 'Baking', 'Easy', 15, 25, 16, 0, 0, ['Vegetarian'], ['new'], 'shortbread fingers'),
  c('apple-pie-with-custard', 'Apple Pie with Custard', 'British', 'Desserts', 'Medium', 40, 50, 8, 0, 0, ['Vegetarian'], ['new'], 'apple pie with custard'),
  c('maple-pecan-tart', 'Maple Pecan Tart', 'Canadian', 'Desserts', 'Medium', 30, 40, 10, 0, 0, ['Vegetarian'], ['new'], 'maple pecan tart'),
  c('gingerbread-men', 'Gingerbread Men', 'British', 'Baking', 'Easy', 25, 12, 16, 0, 0, ['Vegetarian'], ['new'], 'gingerbread men'),
  c('scones-with-jam-and-cream', 'Scones with Jam and Cream', 'British', 'Baking', 'Easy', 15, 15, 8, 0, 0, ['Vegetarian'], ['new'], 'scones with jam and cream'),
  c('peach-crumble', 'Peach Crumble', 'British', 'Desserts', 'Easy', 15, 35, 6, 0, 0, ['Vegetarian'], ['new'], 'peach crumble'),
  c('plum-crumble', 'Plum Crumble', 'British', 'Desserts', 'Easy', 15, 35, 6, 0, 0, ['Vegetarian'], ['new'], 'plum crumble'),
  c('sweetcorn-chowder', 'Sweetcorn Chowder', 'American', 'Lunch', 'Easy', 10, 30, 4, 0, 0, ['Vegetarian'], ['new'], 'sweetcorn chowder'),
  c('vegetable-barley-soup', 'Vegetable Barley Soup', 'American', 'Lunch', 'Easy', 10, 50, 6, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'vegetable barley soup'),
  c('pizza-quesadilla', 'Pizza Quesadilla', 'American', 'Quick Meals', 'Easy', 5, 8, 2, 0, 0, [], ['new'], 'pizza quesadilla'),
  c('pappa-al-pomodoro', 'Pappa al Pomodoro', 'Italian', 'Lunch', 'Easy', 10, 30, 4, 0, 0, ['Vegetarian'], ['new'], 'pappa al pomodoro'),
  c('dripping-toast', 'Dripping Toast', 'British', 'Breakfast', 'Easy', 2, 4, 2, 0, 0, [], ['new'], 'dripping toast'),
  c('cheese-souffle', 'Cheese Souffle', 'French', 'Dinner', 'Hard', 25, 30, 4, 0, 0, [], ['new'], 'cheese souffle'),
  c('kiwi-fruit-pavlova', 'Kiwi Fruit Pavlova', 'New Zealand', 'Desserts', 'Medium', 30, 90, 8, 0, 0, ['Vegetarian'], ['new'], 'kiwi fruit pavlova'),
  c('masala-omelette', 'Masala Omelette', 'Indian', 'Breakfast', 'Easy', 5, 6, 2, 0, 0, ['Vegetarian', 'Dairy-Free', 'Gluten-Free'], ['new'], 'masala omelette'),
  c('marmite-pasta', 'Marmite Pasta', 'British', 'Quick Meals', 'Easy', 3, 12, 2, 0, 0, [], ['new'], 'marmite pasta'),
  c('roasted-garlic-soup', 'Roasted Garlic Soup', 'French', 'Lunch', 'Easy', 10, 40, 4, 0, 0, ['Vegetarian'], ['new'], 'roasted garlic soup'),
  c('fried-bread', 'Fried Bread', 'British', 'Breakfast', 'Easy', 2, 6, 2, 0, 0, [], ['new'], 'fried bread')
];
