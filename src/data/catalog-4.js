/**
 * CulinaryVault — recipe catalog, volume four.
 *
 * Twelve recipes written to two briefs: enough protein in a serving to be worth
 * cooking for it, and nothing sweetened by the cook. Both briefs are checked
 * rather than claimed — src/lib/diet-derived.js reads the protein figure and the
 * ingredient list and applies the High-Protein and No Added Sugar tags itself,
 * so a recipe here carries them because it earns them.
 *
 * These are the first recipes on the site with no rating. The other 600 carry
 * figures that were seeded with the catalogue, and adding twelve more invented
 * ones would have been a poor answer to having just written that down. They show
 * "Not yet rated" and publish no aggregateRating until somebody rates them.
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
  /* --- protein enough to build on ------------------------------------- */
  c('chicken-rice-protein-bowl', 'Chicken and Rice Protein Bowl', 'American', 'Dinner', 'Easy', 15, 25, 2, 0, 0, ['Dairy-Free'], ['new'], 'Sliced grilled chicken breast rice plate'),
  c('salmon-quinoa-bowl', 'Baked Salmon and Quinoa Bowl', 'American', 'Healthy', 'Easy', 15, 20, 4, 0, 0, ['Gluten-Free'], ['new'], 'Baked salmon quinoa bowl greens'),
  c('cottage-cheese-pancakes', 'Cottage Cheese Protein Pancakes', 'American', 'Breakfast', 'Easy', 10, 15, 2, 0, 0, ['Vegetarian'], ['new'], 'Cottage cheese pancakes stack'),
  c('tuna-white-bean-salad', 'Tuna and White Bean Salad', 'Italian', 'Lunch', 'Easy', 15, 0, 2, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'Tuna cannellini bean salad'),
  c('tofu-edamame-stir-fry', 'Tofu and Edamame Stir-Fry', 'Chinese', 'Dinner', 'Easy', 15, 12, 2, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Tofu edamame stir fry wok'),
  c('yogurt-marinated-chicken-skewers', 'Yoghurt-Marinated Chicken Skewers', 'Greek', 'Dinner', 'Easy', 20, 15, 4, 0, 0, ['Gluten-Free'], ['new'], 'Yogurt marinated chicken skewers grilled'),

  /* --- nothing sweetened by the cook ----------------------------------- */
  c('banana-oat-pancakes', 'Banana Oat Pancakes', 'American', 'Breakfast', 'Easy', 10, 12, 2, 0, 0, ['Vegetarian'], ['new'], 'Banana oat pancakes stack'),
  c('roasted-tomato-basil-soup', 'Roasted Tomato and Basil Soup', 'Italian', 'Lunch', 'Easy', 15, 45, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free'], ['new'], 'Cream of tomato soup bowl basil'),
  c('baked-cinnamon-apples', 'Baked Cinnamon Apples', 'British', 'Desserts', 'Easy', 10, 35, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free'], ['new'], 'Baked cinnamon apples dish'),
  c('chickpea-socca', 'Chickpea Socca', 'French', 'Appetizers', 'Easy', 10, 15, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free'], ['new'], 'Socca chickpea pancake nicoise'),
  c('lentil-walnut-ragu', 'Lentil and Walnut Ragù', 'Italian', 'Dinner', 'Medium', 15, 45, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Lentil walnut ragu pasta'),
  c('savoury-cottage-cheese-bowl', 'Savoury Cottage Cheese Bowl', 'American', 'Breakfast', 'Easy', 8, 0, 2, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Cottage cheese bowl tomato cucumber')
];
