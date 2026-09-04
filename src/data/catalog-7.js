/**
 * CulinaryVault — recipe catalog, volume seven.
 *
 * Eighteen recipes for the two categories volume six left thinnest: Quick Meals
 * held 39 and Healthy 42, against 215 dinners.
 *
 * Quick means quick. Everything in the first group is on the table in thirty
 * minutes or less end to end, which is the same threshold src/lib/keywords.js
 * uses when it decides whether a recipe may call itself quick — a category that
 * contained a ninety-minute recipe was part of why the number needed checking.
 *
 * As in volume six they come from the cuisines with the fewest recipes, so
 * Singaporean, Salvadoran and Ethiopian stop being one-recipe entries on the
 * cuisine map.
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
  /* --- Quick Meals: thirty minutes or less, start to finish -------------- */
  c('kaya-toast', 'Kaya Toast', 'Singaporean', 'Quick Meals', 'Easy', 10, 8, 2, 0, 0, ['Vegetarian'], ['new'], 'Kaya toast singapore soft eggs'),
  c('uitsmijter', 'Uitsmijter', 'Dutch', 'Quick Meals', 'Easy', 5, 8, 2, 0, 0, [], ['new'], 'Uitsmijter dutch fried egg ham'),
  c('aeggekage', 'Æggekage', 'Danish', 'Quick Meals', 'Easy', 8, 15, 2, 0, 0, [], ['new'], 'Aeggekage danish egg cake bacon'),
  c('ful-medames', 'Ful Medames', 'Egyptian', 'Quick Meals', 'Easy', 10, 12, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free'], ['new'], 'Ful medames fava beans egypt'),
  c('chakalaka', 'Chakalaka', 'South African', 'Quick Meals', 'Easy', 10, 18, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free'], ['new'], 'Chakalaka south african relish'),
  c('malawach', 'Malawach', 'Israeli', 'Quick Meals', 'Medium', 15, 12, 4, 0, 0, ['Vegetarian'], ['new'], 'Malawach yemenite flatbread'),
  c('croque-madame', 'Croque Madame', 'French', 'Quick Meals', 'Medium', 12, 15, 2, 0, 0, [], ['new'], 'Croque madame gratineed sandwich egg'),
  c('flammkuchen', 'Flammkuchen', 'German', 'Quick Meals', 'Medium', 15, 12, 4, 0, 0, [], ['new'], 'Flammkuchen tarte flambee alsace'),
  c('zapiekanka', 'Zapiekanka', 'Polish', 'Quick Meals', 'Easy', 10, 15, 4, 0, 0, ['Vegetarian'], ['new'], 'Zapiekanka polish baguette mushroom'),

  /* --- Healthy ---------------------------------------------------------- */
  c('atakilt-wat', 'Atakilt Wat', 'Ethiopian', 'Healthy', 'Easy', 15, 30, 6, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free'], ['new'], 'Atakilt wat ethiopian cabbage carrot'),
  c('kachumbari', 'Kachumbari', 'Kenyan', 'Healthy', 'Easy', 15, 0, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free'], ['new'], 'Kachumbari kenyan tomato onion salad'),
  c('curtido', 'Curtido', 'Salvadoran', 'Healthy', 'Easy', 20, 0, 8, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free'], ['new'], 'Curtido salvadoran cabbage slaw'),
  c('mechouia-salad', 'Salade Méchouia', 'Tunisian', 'Healthy', 'Medium', 20, 25, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free'], ['new'], 'Salade mechouia tunisienne grilled peppers'),
  c('porotos-granados', 'Porotos Granados', 'Chilean', 'Healthy', 'Medium', 20, 45, 6, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free'], ['new'], 'Porotos granados chilean bean stew'),
  c('zaalouk', 'Zaalouk', 'Moroccan', 'Healthy', 'Easy', 15, 30, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free'], ['new'], 'Zaalouk moroccan aubergine salad'),
  c('kisir', 'Kısır', 'Turkish', 'Healthy', 'Easy', 25, 0, 6, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Kisir turkish bulgur salad'),
  c('gomae', 'Gomae', 'Japanese', 'Healthy', 'Easy', 10, 5, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Gomae spinach sesame japanese'),
  c('oi-muchim', 'Oi Muchim', 'Korean', 'Healthy', 'Easy', 15, 0, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Oi muchim korean cucumber salad')
];
