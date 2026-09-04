/**
 * CulinaryVault — recipe catalog, volume five.
 *
 * Ten recipes that are high in protein, low in carbohydrate and contain no
 * sugar the cook added. All three of those are computed from the recipe by
 * src/lib/diet-derived.js rather than claimed here, so a row carries the tag
 * only while the ingredients and the nutrition figures still support it.
 *
 * What these are NOT is a set of recipes for diabetes. Whether a meal suits
 * someone managing diabetes depends on their medication, their carbohydrate
 * ratios, the portion they eat and the rest of their day — it is not a property
 * a recipe has. What the site can honestly give is the carbohydrate figure per
 * serving, printed on every page and now filterable, because that is the number
 * carbohydrate counting actually uses.
 *
 * Unrated, like volume four, for the reason given there.
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
  c('egg-cottage-cheese-muffins', 'Egg and Cottage Cheese Muffins', 'American', 'Breakfast', 'Easy', 10, 22, 2, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Baked egg muffins spinach'),
  c('grilled-halloumi-salad', 'Grilled Halloumi and Herb Salad', 'Greek', 'Lunch', 'Easy', 12, 8, 2, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Grilled halloumi salad herbs'),
  c('smoked-mackerel-pate', 'Smoked Mackerel Pâté', 'British', 'Appetizers', 'Easy', 12, 0, 2, 0, 0, ['Gluten-Free'], ['new'], 'Smoked mackerel pate lemon'),
  c('spiced-lamb-lettuce-cups', 'Spiced Lamb Lettuce Cups', 'Lebanese', 'Dinner', 'Easy', 15, 15, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'Spiced lamb mince lettuce cups'),
  c('chicken-caesar-lettuce-cups', 'Chicken Caesar Lettuce Cups', 'American', 'Lunch', 'Easy', 15, 15, 2, 0, 0, ['Gluten-Free'], ['new'], 'Chicken caesar lettuce cups'),
  c('garlic-prawn-courgette-noodles', 'Garlic Prawns with Courgette Noodles', 'Italian', 'Dinner', 'Easy', 15, 10, 2, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'Garlic prawns courgette noodles'),
  c('smoked-salmon-scrambled-eggs', 'Smoked Salmon Scrambled Eggs', 'British', 'Breakfast', 'Easy', 5, 8, 2, 0, 0, ['Gluten-Free'], ['new'], 'Smoked salmon scrambled eggs'),
  c('seared-tuna-nicoise', 'Seared Tuna Niçoise', 'French', 'Lunch', 'Medium', 20, 10, 2, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'Seared tuna nicoise salad'),
  c('cauliflower-chicken-fried-rice', 'Chicken Cauliflower Fried Rice', 'Chinese', 'Dinner', 'Easy', 15, 12, 2, 0, 0, ['Dairy-Free'], ['new'], 'Cauliflower rice low carb'),
  c('baked-eggs-spinach-feta', 'Baked Eggs with Spinach and Feta', 'Turkish', 'Breakfast', 'Easy', 10, 18, 2, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Baked eggs spinach feta skillet')
];
