/**
 * Weekly Delight — recipe catalog, volume nine.
 *
 * Forty-nine of the dishes people actually type into a search box. The list
 * was checked against the other 680 first: Fettuccine Alfredo, Chicken Noodle
 * Soup, Buffalo Wings, Lasagna Bolognese, the BLT and the Reuben were already
 * here, so they are not here twice — and an "Alfredo Sauce" page would have
 * been the fettuccine recipe with the pasta removed.
 *
 * The overlaps that survived that check are real dishes in their own right.
 * Spaghetti Bolognese joins Lasagna Bolognese because a ragù served on pasta
 * and a ragù layered into a bake are different recipes with different timings.
 * Chicken Alfredo joins Fettuccine Alfredo because the chicken changes the
 * method: it is seared and rested before the sauce is built in its pan.
 *
 * Weighted towards the unglamorous end on purpose. Mashed potatoes, gravy,
 * stuffing and a tuna sandwich are searched far more often than anything with
 * a French name, and the site had none of them.
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
  /* Chicken */
  c('chicken-alfredo', 'Chicken Alfredo', 'Italian', 'Dinner', 'Easy', 15, 25, 4, 0, 0, [], ['new'], 'Chicken alfredo pasta'),
  c('baked-chicken-breast', 'Juicy Baked Chicken Breast', 'American', 'Dinner', 'Easy', 10, 22, 4, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Baked chicken breast sliced'),
  c('air-fryer-chicken-wings', 'Air Fryer Chicken Wings', 'American', 'Appetizers', 'Easy', 15, 25, 4, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Crispy chicken wings'),
  c('honey-garlic-chicken', 'Honey Garlic Chicken', 'American', 'Quick Meals', 'Easy', 10, 18, 4, 0, 0, ['Dairy-Free'], ['new'], 'Honey garlic chicken thighs'),
  c('chicken-marsala', 'Chicken Marsala', 'Italian', 'Dinner', 'Medium', 15, 25, 4, 0, 0, [], ['new'], 'Chicken marsala mushrooms'),
  c('chicken-piccata', 'Chicken Piccata', 'Italian', 'Dinner', 'Easy', 15, 20, 4, 0, 0, [], ['new'], 'Chicken piccata lemon capers'),
  c('chicken-quesadilla', 'Chicken Quesadilla', 'Mexican', 'Quick Meals', 'Easy', 15, 12, 4, 0, 0, [], ['new'], 'Chicken quesadilla cut wedges'),
  c('lemon-pepper-chicken', 'Lemon Pepper Chicken', 'American', 'Dinner', 'Easy', 15, 35, 4, 0, 0, ['Gluten-Free'], ['new'], 'Lemon pepper roast chicken'),

  /* Beef and pork */
  c('prime-rib', 'Prime Rib Roast', 'American', 'Holiday Specials', 'Medium', 25, 150, 8, 0, 0, ['Gluten-Free'], ['new'], 'Prime rib roast carved'),
  c('salisbury-steak', 'Salisbury Steak', 'American', 'Dinner', 'Easy', 20, 25, 4, 0, 0, [], ['new'], 'Salisbury steak onion gravy'),
  c('corned-beef-and-cabbage', 'Corned Beef and Cabbage', 'Irish', 'Dinner', 'Easy', 20, 195, 6, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Corned beef and cabbage plate'),
  c('spaghetti-bolognese', 'Spaghetti Bolognese', 'Italian', 'Dinner', 'Easy', 25, 180, 6, 0, 0, [], ['new'], 'Spaghetti bolognese plate'),

  /* Pasta */
  c('baked-ziti', 'Baked Ziti', 'American', 'Dinner', 'Easy', 30, 45, 8, 0, 0, ['Vegetarian'], ['new'], 'Baked ziti dish cheese'),
  c('penne-alla-vodka', 'Penne alla Vodka', 'Italian', 'Dinner', 'Easy', 10, 25, 4, 0, 0, ['Vegetarian'], ['new'], 'Penne alla vodka pink sauce'),

  /* Soups */
  c('broccoli-cheddar-soup', 'Broccoli Cheddar Soup', 'American', 'Lunch', 'Easy', 15, 30, 6, 0, 0, ['Vegetarian'], ['new'], 'Broccoli cheddar soup bowl'),
  c('split-pea-soup', 'Split Pea and Ham Soup', 'American', 'Lunch', 'Easy', 15, 90, 6, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Split pea soup bowl'),
  c('chicken-tortilla-soup', 'Chicken Tortilla Soup', 'Mexican', 'Dinner', 'Easy', 20, 35, 6, 0, 0, ['Gluten-Free'], ['new'], 'Chicken tortilla soup'),
  c('lobster-bisque', 'Lobster Bisque', 'French', 'Dinner', 'Hard', 30, 60, 4, 0, 0, ['Gluten-Free'], ['new'], 'Lobster bisque bowl'),

  /* Breakfast */
  c('frittata', 'Vegetable Frittata', 'Italian', 'Breakfast', 'Easy', 15, 25, 6, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Frittata slice vegetables'),

  /* Sides */
  c('mashed-potatoes', 'Creamy Mashed Potatoes', 'American', 'Dinner', 'Easy', 15, 25, 6, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Creamy mashed potatoes bowl'),
  c('roast-potatoes', 'Crispy Roast Potatoes', 'British', 'Dinner', 'Easy', 15, 65, 6, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Crispy roast potatoes'),
  c('baked-potato', 'Baked Potato', 'American', 'Dinner', 'Easy', 5, 70, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Baked jacket potato butter'),
  c('green-bean-casserole', 'Green Bean Casserole', 'American', 'Holiday Specials', 'Easy', 20, 35, 8, 0, 0, ['Vegetarian'], ['new'], 'Green bean casserole dish'),
  c('sweet-potato-casserole', 'Sweet Potato Casserole', 'American', 'Holiday Specials', 'Easy', 25, 55, 10, 0, 0, ['Vegetarian'], ['new'], 'Sweet potato casserole pecan'),
  c('stuffing', 'Sage and Onion Stuffing', 'British', 'Holiday Specials', 'Easy', 25, 45, 10, 0, 0, ['Vegetarian'], ['new'], 'Sage and onion stuffing dish'),
  c('cranberry-sauce', 'Cranberry Sauce', 'American', 'Holiday Specials', 'Easy', 5, 15, 10, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Cranberry sauce bowl'),
  c('spinach-artichoke-dip', 'Spinach and Artichoke Dip', 'American', 'Appetizers', 'Easy', 15, 25, 8, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Spinach artichoke dip'),
  c('ranch-dressing', 'Buttermilk Ranch Dressing', 'American', 'Appetizers', 'Easy', 10, 0, 12, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Ranch dressing jar'),
  c('quick-pickles', 'Quick Refrigerator Pickles', 'American', 'Appetizers', 'Easy', 15, 5, 8, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Refrigerator dill pickles jar'),
  c('corn-on-the-cob', 'Corn on the Cob', 'American', 'Dinner', 'Easy', 5, 8, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Corn on the cob butter'),
  c('creamed-spinach', 'Creamed Spinach', 'American', 'Dinner', 'Easy', 10, 20, 6, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Creamed spinach bowl'),

  /* Sandwiches */
  c('club-sandwich', 'Club Sandwich', 'American', 'Lunch', 'Easy', 15, 8, 2, 0, 0, [], ['new'], 'Club sandwich triangles'),
  c('tuna-salad-sandwich', 'Tuna Salad Sandwich', 'American', 'Lunch', 'Easy', 10, 0, 4, 0, 0, ['Dairy-Free'], ['new'], 'Tuna salad sandwich'),
  c('egg-salad-sandwich', 'Egg Salad Sandwich', 'American', 'Lunch', 'Easy', 15, 10, 4, 0, 0, ['Vegetarian'], ['new'], 'Egg salad sandwich'),
  c('meatball-sub', 'Meatball Sub', 'American', 'Lunch', 'Easy', 25, 35, 4, 0, 0, [], ['new'], 'Meatball sub sandwich cheese'),
  c('pigs-in-blankets', 'Pigs in Blankets', 'British', 'Holiday Specials', 'Easy', 15, 25, 8, 0, 0, ['Dairy-Free'], ['new'], 'Pigs in blankets bacon sausages'),

  /* Seafood */
  c('shrimp-scampi', 'Shrimp Scampi', 'Italian', 'Quick Meals', 'Easy', 10, 12, 4, 0, 0, [], ['new'], 'Shrimp scampi pasta garlic'),
  c('tuna-casserole', 'Tuna Noodle Casserole', 'American', 'Dinner', 'Easy', 20, 30, 6, 0, 0, [], ['new'], 'Tuna noodle casserole dish'),
  c('garlic-butter-shrimp', 'Garlic Butter Shrimp', 'American', 'Quick Meals', 'Easy', 10, 8, 4, 0, 0, ['Gluten-Free'], ['new'], 'Garlic butter shrimp skillet'),

  /* Sweets */
  c('chocolate-mousse', 'Chocolate Mousse', 'French', 'Desserts', 'Medium', 25, 5, 6, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Chocolate mousse glass'),
  c('fudge', 'Chocolate Fudge', 'American', 'Desserts', 'Easy', 15, 10, 36, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Chocolate fudge squares'),
  c('rice-krispie-treats', 'Marshmallow Crispy Treats', 'American', 'Desserts', 'Easy', 10, 6, 16, 0, 0, ['Vegetarian'], ['new'], 'Rice krispie treats squares'),
  c('banana-pudding', 'Banana Pudding', 'American', 'Desserts', 'Medium', 30, 12, 8, 0, 0, ['Vegetarian'], ['new'], 'Banana pudding trifle dish'),
  c('strawberry-shortcake', 'Strawberry Shortcake', 'American', 'Desserts', 'Easy', 25, 18, 8, 0, 0, ['Vegetarian'], ['new'], 'Strawberry shortcake cream'),
  c('millionaire-shortbread', "Millionaire's Shortbread", 'Scottish', 'Baking', 'Medium', 30, 40, 16, 0, 0, ['Vegetarian'], ['new'], 'Millionaire shortbread caramel'),

  /* Drinks */
  c('lemonade', 'Fresh Lemonade', 'American', 'Drinks', 'Easy', 10, 5, 6, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Fresh lemonade pitcher'),
  c('old-fashioned', 'Old Fashioned', 'American', 'Drinks', 'Easy', 5, 0, 1, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Old fashioned cocktail glass'),
  c('aperol-spritz', 'Aperol Spritz', 'Italian', 'Drinks', 'Easy', 4, 0, 1, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Aperol spritz glass orange'),
  c('chai-latte', 'Masala Chai Latte', 'Indian', 'Drinks', 'Easy', 5, 12, 2, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Masala chai latte cup')
];
