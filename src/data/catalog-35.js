'use strict';

/**
 * Weekly Delight — recipe catalog, volume thirty-five.
 * One hundred budget dishes that take little effort: mince and sausage dinners,
 * cheap cuts and tinned fish, chicken thighs and whole birds, pies and bakes,
 * noodle and rice suppers, and vegetable curries, soups and stews. They are
 * familiar dishes that people in the USA, Canada, Australia, the UK and New
 * Zealand look for by name; no search-volume data was used to pick or rank them.
 *
 * "Budget" here means what the ingredient list is made of: potatoes, rice,
 * pasta, pulses, eggs, tinned fish and tomatoes, mince, sausages, chicken
 * thighs and the cheaper cuts of pork and beef. No price is printed anywhere,
 * because prices differ by shop, season and country and the site cannot check
 * them.
 *
 * Every name was tried against the recipes already published, with
 * tools/dedupe-candidates.js, and then read by hand.
 *
 * Spread: American 46, British 24, Italian 8, Indian 6, Australian 5, Chinese 4, Mexican 2, Polish 2, Canadian 1, New Zealand 1, Scottish 1.
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
  c('mince-and-tatties', 'Mince and Tatties', 'Scottish', 'Dinner', 'Easy', 10, 35, 4, 0, 0, [], ['new'], 'mince and tatties'),
  c('beef-and-potato-pie', 'Beef and Potato Pie', 'British', 'Dinner', 'Medium', 25, 60, 6, 0, 0, [], ['new'], 'beef and potato pie'),
  c('cornish-pasties', 'Cornish Pasties', 'British', 'Dinner', 'Medium', 40, 50, 4, 0, 0, [], ['new'], 'cornish pasties'),
  c('bedfordshire-clanger', 'Bedfordshire Clanger', 'British', 'Dinner', 'Medium', 40, 45, 4, 0, 0, ['Dairy-Free'], ['new'], 'bedfordshire clanger'),
  c('cumberland-sausage-hotpot', 'Cumberland Sausage Hotpot', 'British', 'Dinner', 'Easy', 20, 60, 4, 0, 0, [], ['new'], 'cumberland sausage hotpot'),
  c('panackelty', 'Panackelty', 'British', 'Dinner', 'Easy', 15, 60, 4, 0, 0, [], ['new'], 'panackelty'),
  c('johnny-marzetti', 'Johnny Marzetti', 'American', 'Dinner', 'Easy', 15, 35, 6, 0, 0, [], ['new'], 'johnny marzetti'),
  c('cowboy-casserole', 'Cowboy Casserole', 'American', 'Dinner', 'Easy', 15, 40, 6, 0, 0, [], ['new'], 'cowboy casserole'),
  c('ground-beef-and-potato-skillet', 'Ground Beef and Potato Skillet', 'American', 'Dinner', 'Easy', 10, 25, 4, 0, 0, ['Gluten-Free'], ['new'], 'ground beef and potato skillet'),
  c('ground-beef-and-cabbage-skillet', 'Ground Beef and Cabbage Skillet', 'American', 'Quick Meals', 'Easy', 10, 20, 4, 0, 0, ['Dairy-Free'], ['new'], 'ground beef and cabbage skillet'),
  c('ground-beef-and-rice-casserole', 'Ground Beef and Rice Casserole', 'American', 'Dinner', 'Easy', 10, 45, 6, 0, 0, [], ['new'], 'ground beef and rice casserole'),
  c('ground-beef-stuffed-potatoes', 'Ground Beef Stuffed Potatoes', 'American', 'Dinner', 'Easy', 15, 60, 4, 0, 0, ['Gluten-Free'], ['new'], 'ground beef stuffed potatoes'),
  c('american-chop-suey', 'American Chop Suey', 'American', 'Dinner', 'Easy', 10, 25, 6, 0, 0, [], ['new'], 'american chop suey'),
  c('beef-and-bean-chili', 'Beef and Bean Chili', 'American', 'Dinner', 'Easy', 15, 45, 6, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'beef and bean chili'),
  c('beef-mince-curry', 'Beef Mince Curry', 'British', 'Dinner', 'Easy', 10, 30, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'beef mince curry'),
  c('beef-keema', 'Beef Keema', 'Indian', 'Dinner', 'Easy', 10, 30, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'beef keema'),
  c('braised-chuck-roast', 'Braised Chuck Roast', 'American', 'Dinner', 'Easy', 15, 150, 6, 0, 0, [], ['new'], 'braised chuck roast'),
  c('beans-and-franks', 'Beans and Franks', 'American', 'Quick Meals', 'Easy', 5, 20, 4, 0, 0, [], ['new'], 'beans and franks'),
  c('chili-dogs', 'Chili Dogs', 'American', 'Quick Meals', 'Easy', 5, 20, 4, 0, 0, [], ['new'], 'chili dogs'),
  c('slow-cooker-pot-roast', 'Slow Cooker Pot Roast', 'American', 'Dinner', 'Easy', 20, 480, 6, 0, 0, ['Dairy-Free'], ['new'], 'slow cooker pot roast'),
  c('braised-pork-shoulder', 'Braised Pork Shoulder', 'American', 'Dinner', 'Easy', 15, 180, 8, 0, 0, ['Dairy-Free'], ['new'], 'braised pork shoulder'),
  c('pork-chop-casserole', 'Pork Chop Casserole', 'American', 'Dinner', 'Easy', 15, 50, 4, 0, 0, [], ['new'], 'pork chop casserole'),
  c('pork-steaks', 'Pork Steaks', 'American', 'Dinner', 'Easy', 10, 25, 4, 0, 0, ['Gluten-Free'], ['new'], 'pork steaks'),
  c('honey-garlic-pork-chops', 'Honey Garlic Pork Chops', 'American', 'Quick Meals', 'Easy', 10, 15, 4, 0, 0, ['Dairy-Free'], ['new'], 'honey garlic pork chops'),
  c('breaded-pork-chops', 'Breaded Pork Chops', 'American', 'Dinner', 'Easy', 15, 20, 4, 0, 0, [], ['new'], 'breaded pork chops'),
  c('pork-fried-noodles', 'Pork Fried Noodles', 'Chinese', 'Quick Meals', 'Easy', 10, 15, 4, 0, 0, ['Dairy-Free'], ['new'], 'pork fried noodles'),
  c('pork-and-cabbage-dumplings', 'Pork and Cabbage Dumplings', 'Chinese', 'Dinner', 'Medium', 40, 15, 4, 0, 0, ['Dairy-Free'], ['new'], 'pork and cabbage dumplings'),
  c('ham-steaks-with-pineapple', 'Ham Steaks with Pineapple', 'American', 'Quick Meals', 'Easy', 5, 15, 4, 0, 0, [], ['new'], 'ham steaks with pineapple'),
  c('ham-and-pea-pasta', 'Ham and Pea Pasta', 'British', 'Quick Meals', 'Easy', 10, 15, 4, 0, 0, [], ['new'], 'ham and pea pasta'),
  c('sausage-and-potato-traybake', 'Sausage and Potato Traybake', 'British', 'Dinner', 'Easy', 10, 45, 4, 0, 0, [], ['new'], 'sausage and potato traybake'),
  c('sausage-pasta-bake', 'Sausage Pasta Bake', 'British', 'Dinner', 'Easy', 15, 35, 6, 0, 0, [], ['new'], 'sausage pasta bake'),
  c('sausage-and-lentil-stew', 'Sausage and Lentil Stew', 'British', 'Dinner', 'Easy', 10, 40, 4, 0, 0, [], ['new'], 'sausage and lentil stew'),
  c('sausage-hash', 'Sausage Hash', 'American', 'Quick Meals', 'Easy', 10, 20, 4, 0, 0, [], ['new'], 'sausage hash'),
  c('kielbasa-and-cabbage', 'Kielbasa and Cabbage', 'Polish', 'Quick Meals', 'Easy', 10, 20, 4, 0, 0, [], ['new'], 'kielbasa and cabbage'),
  c('kielbasa-potato-skillet', 'Kielbasa Potato Skillet', 'American', 'Quick Meals', 'Easy', 10, 20, 4, 0, 0, [], ['new'], 'kielbasa potato skillet'),
  c('haluski', 'Haluski', 'Polish', 'Quick Meals', 'Easy', 10, 20, 4, 0, 0, ['Vegetarian'], ['new'], 'haluski'),
  c('pierogi-casserole', 'Pierogi Casserole', 'American', 'Dinner', 'Easy', 15, 40, 6, 0, 0, ['Vegetarian'], ['new'], 'pierogi casserole'),
  c('wild-rice-hotdish', 'Wild Rice Hotdish', 'American', 'Dinner', 'Easy', 15, 60, 6, 0, 0, [], ['new'], 'wild rice hotdish'),
  c('corned-beef-and-white-sauce', 'Corned Beef and White Sauce', 'New Zealand', 'Dinner', 'Easy', 15, 25, 4, 0, 0, [], ['new'], 'corned beef and white sauce'),
  c('chicken-mornay', 'Chicken Mornay', 'Australian', 'Dinner', 'Easy', 15, 30, 4, 0, 0, [], ['new'], 'chicken mornay'),
  c('chicken-thigh-traybake', 'Chicken Thigh Traybake', 'British', 'Dinner', 'Easy', 10, 45, 4, 0, 0, ['Gluten-Free'], ['new'], 'chicken thigh traybake'),
  c('chicken-and-potato-bake', 'Chicken and Potato Bake', 'British', 'Dinner', 'Easy', 15, 55, 4, 0, 0, [], ['new'], 'chicken and potato bake'),
  c('crispy-chicken-thighs-and-rice', 'Crispy Chicken Thighs and Rice', 'American', 'Dinner', 'Easy', 10, 45, 4, 0, 0, ['Dairy-Free'], ['new'], 'crispy chicken thighs and rice'),
  c('lemon-herb-chicken-thighs', 'Lemon Herb Chicken Thighs', 'American', 'Dinner', 'Easy', 10, 40, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'lemon herb chicken thighs'),
  c('chicken-and-mushroom-pie', 'Chicken and Mushroom Pie', 'British', 'Dinner', 'Medium', 25, 50, 6, 0, 0, [], ['new'], 'chicken and mushroom pie'),
  c('leftover-roast-chicken-pie', 'Leftover Roast Chicken Pie', 'British', 'Dinner', 'Medium', 25, 35, 4, 0, 0, [], ['new'], 'leftover roast chicken pie'),
  c('baked-bbq-chicken', 'Baked BBQ Chicken', 'American', 'Dinner', 'Easy', 10, 60, 4, 0, 0, ['Dairy-Free'], ['new'], 'baked bbq chicken'),
  c('whole-roast-chicken-with-vegetables', 'Whole Roast Chicken with Vegetables', 'British', 'Dinner', 'Easy', 20, 90, 4, 0, 0, ['Gluten-Free'], ['new'], 'whole roast chicken with vegetables'),
  c('chicken-schnitzel', 'Chicken Schnitzel', 'Australian', 'Quick Meals', 'Easy', 15, 15, 4, 0, 0, [], ['new'], 'chicken schnitzel'),
  c('chicken-nuggets', 'Chicken Nuggets', 'American', 'Dinner', 'Easy', 15, 20, 4, 0, 0, [], ['new'], 'chicken nuggets'),
  c('chicken-carcass-soup', 'Chicken Carcass Soup', 'British', 'Lunch', 'Easy', 10, 90, 6, 0, 0, ['Dairy-Free'], ['new'], 'chicken carcass soup'),
  c('tuna-fish-cakes', 'Tuna Fish Cakes', 'British', 'Quick Meals', 'Easy', 15, 15, 4, 0, 0, [], ['new'], 'tuna fish cakes'),
  c('tuna-rice-bowl', 'Tuna Rice Bowl', 'American', 'Quick Meals', 'Easy', 10, 10, 2, 0, 0, ['Dairy-Free'], ['new'], 'tuna rice bowl'),
  c('tuna-and-sweetcorn-pasta', 'Tuna and Sweetcorn Pasta', 'British', 'Quick Meals', 'Easy', 5, 15, 4, 0, 0, ['Dairy-Free'], ['new'], 'tuna and sweetcorn pasta'),
  c('tuna-and-sweetcorn-jacket-potato', 'Tuna and Sweetcorn Jacket Potato', 'British', 'Dinner', 'Easy', 10, 60, 2, 0, 0, [], ['new'], 'tuna and sweetcorn jacket potato'),
  c('salmon-patties', 'Salmon Patties', 'American', 'Quick Meals', 'Easy', 10, 12, 4, 0, 0, [], ['new'], 'salmon patties'),
  c('salmon-loaf', 'Salmon Loaf', 'American', 'Dinner', 'Easy', 15, 40, 4, 0, 0, [], ['new'], 'salmon loaf'),
  c('salmon-pasta', 'Salmon Pasta', 'British', 'Quick Meals', 'Easy', 5, 15, 4, 0, 0, [], ['new'], 'salmon pasta'),
  c('sardine-pasta', 'Sardine Pasta', 'Italian', 'Quick Meals', 'Easy', 5, 12, 2, 0, 0, [], ['new'], 'sardine pasta'),
  c('mackerel-fishcakes', 'Mackerel Fishcakes', 'British', 'Quick Meals', 'Easy', 15, 15, 4, 0, 0, ['Dairy-Free'], ['new'], 'mackerel fishcakes'),
  c('fish-stew', 'Fish Stew', 'American', 'Dinner', 'Easy', 15, 25, 4, 0, 0, ['Dairy-Free'], ['new'], 'fish stew'),
  c('fish-chowder', 'Fish Chowder', 'American', 'Dinner', 'Easy', 15, 25, 4, 0, 0, [], ['new'], 'fish chowder'),
  c('cod-and-potato-bake', 'Cod and Potato Bake', 'British', 'Dinner', 'Easy', 15, 40, 4, 0, 0, [], ['new'], 'cod and potato bake'),
  c('baked-fish-with-crumb-topping', 'Baked Fish with Crumb Topping', 'American', 'Dinner', 'Easy', 10, 15, 4, 0, 0, [], ['new'], 'baked fish with crumb topping'),
  c('fried-fish-sandwich', 'Fried Fish Sandwich', 'American', 'Quick Meals', 'Easy', 15, 10, 2, 0, 0, [], ['new'], 'fried fish sandwich'),
  c('peanut-butter-noodles', 'Peanut Butter Noodles', 'American', 'Quick Meals', 'Easy', 5, 10, 2, 0, 0, ['Vegetarian'], ['new'], 'peanut butter noodles'),
  c('egg-noodle-stir-fry', 'Egg Noodle Stir Fry', 'Chinese', 'Quick Meals', 'Easy', 10, 10, 2, 0, 0, ['Dairy-Free'], ['new'], 'egg noodle stir fry'),
  c('instant-noodle-upgrade', 'Instant Noodle Upgrade', 'American', 'Quick Meals', 'Easy', 5, 8, 2, 0, 0, [], ['new'], 'instant noodle upgrade'),
  c('potato-curry', 'Potato Curry', 'Indian', 'Dinner', 'Easy', 10, 30, 4, 0, 0, ['Vegetarian', 'Vegan', 'Gluten-Free'], ['new'], 'potato curry'),
  c('cauliflower-curry', 'Cauliflower Curry', 'Indian', 'Dinner', 'Easy', 10, 25, 4, 0, 0, ['Vegetarian', 'Vegan', 'Gluten-Free'], ['new'], 'cauliflower curry'),
  c('tarka-dal', 'Tarka Dal', 'Indian', 'Dinner', 'Easy', 10, 30, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'tarka dal'),
  c('vegetable-pulao', 'Vegetable Pulao', 'Indian', 'Dinner', 'Easy', 10, 30, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'vegetable pulao'),
  c('vegetable-fried-rice', 'Vegetable Fried Rice', 'Chinese', 'Quick Meals', 'Easy', 10, 10, 4, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'vegetable fried rice'),
  c('egg-biryani', 'Egg Biryani', 'Indian', 'Dinner', 'Medium', 15, 40, 4, 0, 0, ['Vegetarian'], ['new'], 'egg biryani'),
  c('pumpkin-curry', 'Pumpkin Curry', 'Australian', 'Dinner', 'Easy', 10, 30, 4, 0, 0, ['Vegetarian'], ['new'], 'pumpkin curry'),
  c('sweet-potato-soup', 'Sweet Potato Soup', 'American', 'Lunch', 'Easy', 10, 30, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'sweet potato soup'),
  c('sweet-potato-chili', 'Sweet Potato Chili', 'American', 'Dinner', 'Easy', 10, 40, 6, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'sweet potato chili'),
  c('roast-pumpkin-soup', 'Roast Pumpkin Soup', 'Australian', 'Lunch', 'Easy', 15, 40, 4, 0, 0, ['Vegetarian', 'Vegan'], ['new'], 'roast pumpkin soup'),
  c('butternut-squash-pasta', 'Butternut Squash Pasta', 'American', 'Dinner', 'Easy', 10, 30, 4, 0, 0, [], ['new'], 'butternut squash pasta'),
  c('zucchini-pasta', 'Zucchini Pasta', 'Italian', 'Quick Meals', 'Easy', 5, 15, 4, 0, 0, [], ['new'], 'zucchini pasta'),
  c('zucchini-bake', 'Zucchini Bake', 'Australian', 'Dinner', 'Easy', 15, 40, 4, 0, 0, [], ['new'], 'zucchini bake'),
  c('marrow-bake', 'Marrow Bake', 'British', 'Dinner', 'Easy', 15, 40, 4, 0, 0, ['Vegetarian'], ['new'], 'marrow bake'),
  c('vegetable-stew', 'Vegetable Stew', 'British', 'Dinner', 'Easy', 15, 40, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'vegetable stew'),
  c('vegetable-pot-pie', 'Vegetable Pot Pie', 'American', 'Dinner', 'Medium', 25, 40, 6, 0, 0, ['Vegetarian'], ['new'], 'vegetable pot pie'),
  c('vegetable-lasagna', 'Vegetable Lasagna', 'Italian', 'Dinner', 'Medium', 30, 45, 6, 0, 0, ['Vegetarian'], ['new'], 'vegetable lasagna'),
  c('vegetable-noodle-soup', 'Vegetable Noodle Soup', 'American', 'Lunch', 'Easy', 10, 25, 4, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'vegetable noodle soup'),
  c('vegetable-rice-soup', 'Vegetable Rice Soup', 'American', 'Lunch', 'Easy', 10, 30, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'vegetable rice soup'),
  c('vegetable-chili', 'Vegetable Chili', 'American', 'Dinner', 'Easy', 10, 40, 6, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'vegetable chili'),
  c('roasted-vegetable-pasta', 'Roasted Vegetable Pasta', 'Italian', 'Dinner', 'Easy', 10, 30, 4, 0, 0, [], ['new'], 'roasted vegetable pasta'),
  c('lentil-bolognese', 'Lentil Bolognese', 'Italian', 'Dinner', 'Easy', 10, 35, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'lentil bolognese'),
  c('bean-and-rice-burrito', 'Bean and Rice Burrito', 'Mexican', 'Quick Meals', 'Easy', 10, 15, 4, 0, 0, [], ['new'], 'bean and rice burrito'),
  c('black-bean-and-rice-skillet', 'Black Bean and Rice Skillet', 'Mexican', 'Dinner', 'Easy', 10, 25, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'black bean and rice skillet'),
  c('eggs-in-purgatory', 'Eggs in Purgatory', 'Italian', 'Quick Meals', 'Easy', 5, 20, 2, 0, 0, ['Vegetarian'], ['new'], 'eggs in purgatory'),
  c('potato-frittata', 'Potato Frittata', 'Italian', 'Dinner', 'Easy', 10, 20, 4, 0, 0, ['Vegetarian', 'Dairy-Free', 'Gluten-Free'], ['new'], 'potato frittata'),
  c('spaghetti-frittata', 'Spaghetti Frittata', 'Italian', 'Dinner', 'Easy', 10, 20, 4, 0, 0, [], ['new'], 'spaghetti frittata'),
  c('cheese-and-broccoli-pasta', 'Cheese and Broccoli Pasta', 'American', 'Quick Meals', 'Easy', 5, 15, 4, 0, 0, ['Vegetarian'], ['new'], 'cheese and broccoli pasta'),
  c('broccoli-cheese-rice', 'Broccoli Cheese Rice', 'American', 'Dinner', 'Easy', 10, 25, 4, 0, 0, ['Vegetarian'], ['new'], 'broccoli cheese rice'),
  c('cheesy-rice-casserole', 'Cheesy Rice Casserole', 'American', 'Dinner', 'Easy', 10, 40, 6, 0, 0, ['Vegetarian'], ['new'], 'cheesy rice casserole'),
  c('navy-bean-soup', 'Navy Bean Soup', 'American', 'Lunch', 'Easy', 10, 90, 6, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'navy bean soup'),
  c('quebec-pea-soup', 'Quebec Pea Soup', 'Canadian', 'Lunch', 'Easy', 10, 90, 6, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'quebec pea soup')
];
