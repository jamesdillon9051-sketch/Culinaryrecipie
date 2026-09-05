/**
 * Weekly Delight — recipe catalog, volume ten.
 *
 * Aimed at the thin parts of the site rather than at more of what it already
 * has. Holiday Specials held 26 recipes against 233 dinners; Drinks 37;
 * Breakfast 48. Six cuisines had exactly two recipes each and read as
 * placeholders on the cuisine map.
 *
 * The low-carb group is here because the Keto filter showed seven recipes, and
 * one of those was ceviche at 20 g of net carbohydrate. That tag is now derived
 * from the nutrition figures rather than typed — see src/lib/diet-derived.js —
 * so these are simply dishes that happen to be built that way, not claims.
 *
 * Checked against the other 729 first: huevos rancheros, chilaquiles, ful
 * medames, arepas, loco moco, doro wat, bubble tea, Turkish coffee, chicken
 * paprikash, ropa vieja, the breakfast burrito and biscuits and gravy were all
 * already published.
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
  /* Holiday Specials — the thinnest category on the site */
  c('honey-glazed-ham', 'Honey Glazed Ham', 'American', 'Holiday Specials', 'Medium', 20, 160, 12, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Honey glazed ham scored'),
  c('roast-goose', 'Roast Goose', 'German', 'Holiday Specials', 'Hard', 30, 180, 8, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Roast goose christmas'),
  c('mince-pies', 'Mince Pies', 'British', 'Holiday Specials', 'Medium', 40, 22, 12, 0, 0, ['Vegetarian'], ['new'], 'Mince pies christmas'),
  c('christmas-pudding', 'Christmas Pudding', 'British', 'Holiday Specials', 'Medium', 40, 360, 12, 0, 0, ['Vegetarian'], ['new'], 'Christmas pudding holly'),
  c('bread-sauce', 'Bread Sauce', 'British', 'Holiday Specials', 'Easy', 10, 25, 8, 0, 0, ['Vegetarian'], ['new'], 'Bread sauce bowl'),
  c('latkes', 'Potato Latkes', 'Israeli', 'Holiday Specials', 'Easy', 25, 25, 6, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'Potato latkes hanukkah'),
  c('sufganiyot', 'Sufganiyot', 'Israeli', 'Holiday Specials', 'Medium', 35, 20, 16, 0, 0, ['Vegetarian'], ['new'], 'Sufganiyot jelly doughnuts'),
  c('galette-des-rois', 'Galette des Rois', 'French', 'Holiday Specials', 'Medium', 40, 40, 8, 0, 0, ['Vegetarian'], ['new'], 'Galette des rois almond'),
  c('buche-de-noel', 'Bûche de Noël', 'French', 'Holiday Specials', 'Hard', 60, 15, 10, 0, 0, ['Vegetarian'], ['new'], 'Buche de noel yule log'),
  c('panforte', 'Panforte di Siena', 'Italian', 'Holiday Specials', 'Easy', 25, 35, 16, 0, 0, ['Vegetarian'], ['new'], 'Panforte siena slice'),
  c('hot-cross-buns', 'Hot Cross Buns', 'British', 'Baking', 'Medium', 35, 22, 12, 0, 0, ['Vegetarian'], ['new'], 'Hot cross buns easter'),
  c('simnel-cake', 'Simnel Cake', 'British', 'Holiday Specials', 'Medium', 40, 105, 12, 0, 0, ['Vegetarian'], ['new'], 'Simnel cake marzipan'),

  /* Drinks */
  c('eggnog', 'Eggnog', 'American', 'Drinks', 'Medium', 20, 12, 8, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Eggnog glass nutmeg'),
  c('glogg', 'Glögg', 'Swedish', 'Drinks', 'Easy', 15, 25, 8, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Glogg mulled wine almonds'),
  c('hot-toddy', 'Hot Toddy', 'Scottish', 'Drinks', 'Easy', 5, 5, 1, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Hot toddy lemon glass'),
  c('irish-coffee', 'Irish Coffee', 'Irish', 'Drinks', 'Easy', 5, 5, 1, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Irish coffee cream glass'),
  c('mulled-cider', 'Mulled Cider', 'British', 'Drinks', 'Easy', 10, 30, 8, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Mulled cider spices pot'),
  c('vietnamese-egg-coffee', 'Vietnamese Egg Coffee', 'Vietnamese', 'Drinks', 'Medium', 10, 5, 2, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Vietnamese egg coffee ca phe trung'),
  c('nimbu-pani', 'Nimbu Pani', 'Indian', 'Drinks', 'Easy', 8, 2, 4, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Nimbu pani indian lemonade'),
  c('kombucha', 'Kombucha', 'International', 'Drinks', 'Medium', 20, 15, 8, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Kombucha jar scoby'),

  /* Breakfast */
  c('dutch-baby', 'Dutch Baby Pancake', 'American', 'Breakfast', 'Easy', 10, 22, 4, 0, 0, ['Vegetarian'], ['new'], 'Dutch baby pancake skillet'),
  c('kedgeree', 'Kedgeree', 'British', 'Breakfast', 'Medium', 20, 30, 4, 0, 0, ['Gluten-Free'], ['new'], 'Kedgeree smoked haddock rice'),
  c('migas', 'Migas Extremeñas', 'Spanish', 'Breakfast', 'Easy', 15, 30, 4, 0, 0, ['Dairy-Free'], ['new'], 'Migas spanish breadcrumbs chorizo'),
  c('eggs-florentine', 'Eggs Florentine', 'French', 'Breakfast', 'Medium', 20, 15, 4, 0, 0, ['Vegetarian'], ['new'], 'Eggs florentine hollandaise spinach'),
  c('bircher-muesli', 'Bircher Muesli', 'Swiss', 'Breakfast', 'Easy', 15, 0, 4, 0, 0, ['Vegetarian'], ['new'], 'Bircher muesli bowl apple'),
  c('shakshuka-verde', 'Green Shakshuka', 'Israeli', 'Breakfast', 'Easy', 15, 20, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Green shakshuka spinach eggs'),

  /* Dishes that happen to be very low in carbohydrate */
  c('cauliflower-mash', 'Cauliflower Mash', 'American', 'Dinner', 'Easy', 10, 20, 6, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Cauliflower mash bowl'),
  c('zucchini-lasagna', 'Courgette Lasagne', 'Italian', 'Dinner', 'Medium', 35, 55, 6, 0, 0, ['Gluten-Free'], ['new'], 'Zucchini lasagna slice'),
  c('egg-bites', 'Bacon and Cheddar Egg Bites', 'American', 'Breakfast', 'Easy', 15, 25, 12, 0, 0, ['Gluten-Free'], ['new'], 'Egg bites muffin tin bacon'),
  c('cloud-bread', 'Cloud Bread', 'American', 'Baking', 'Easy', 15, 25, 8, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Cloud bread oopsie rolls'),
  c('bacon-wrapped-asparagus', 'Bacon-Wrapped Asparagus', 'American', 'Appetizers', 'Easy', 15, 20, 6, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Bacon wrapped asparagus roasted'),
  c('garlic-butter-steak-bites', 'Garlic Butter Steak Bites', 'American', 'Quick Meals', 'Easy', 10, 10, 4, 0, 0, ['Gluten-Free'], ['new'], 'Garlic butter steak bites skillet'),
  c('baked-avocado-eggs', 'Baked Avocado Eggs', 'American', 'Breakfast', 'Easy', 8, 16, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Baked eggs in avocado halves'),
  c('cauliflower-cheese', 'Cauliflower Cheese', 'British', 'Dinner', 'Easy', 15, 35, 6, 0, 0, ['Vegetarian'], ['new'], 'Cauliflower cheese baked dish'),

  /* Cuisines the site had only two recipes from */
  c('chilli-crab', 'Singapore Chilli Crab', 'Singaporean', 'Dinner', 'Hard', 30, 25, 4, 0, 0, ['Dairy-Free'], ['new'], 'Singapore chilli crab'),
  c('pabellon-criollo', 'Pabellón Criollo', 'Venezuelan', 'Dinner', 'Medium', 30, 150, 6, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Pabellon criollo venezuela plate'),
  c('injera', 'Injera', 'Ethiopian', 'Baking', 'Medium', 20, 25, 8, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Injera teff flatbread'),
  c('glamorgan-sausages', 'Glamorgan Sausages', 'Welsh', 'Lunch', 'Easy', 25, 15, 4, 0, 0, ['Vegetarian'], ['new'], 'Glamorgan sausages welsh'),
  c('haupia', 'Haupia', 'Hawaiian', 'Desserts', 'Easy', 10, 12, 9, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Haupia coconut squares hawaiian'),
  c('pan-con-pollo', 'Pan con Pollo', 'Salvadoran', 'Lunch', 'Medium', 30, 90, 6, 0, 0, ['Dairy-Free'], ['new'], 'Pan con pollo salvadoran sandwich')
];
