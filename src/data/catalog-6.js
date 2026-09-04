/**
 * Weekly Delight — recipe catalog, volume six.
 *
 * Eighteen recipes chosen to fill the two thinnest parts of the site rather
 * than to follow a theme. Holiday Specials held 12 recipes against 215 dinners,
 * and Drinks held 23; both are now meaningfully covered.
 *
 * They are also drawn from the cuisines with the fewest recipes — Venezuelan,
 * Czech, Finnish, Norwegian, Romanian, Ukrainian, Ghanaian and Trinidadian each
 * had one or two — so filling a category gap fills a map gap at the same time.
 *
 * Unrated, as volumes four and five are, for the reason given in catalog-4.js.
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
  /* --- Holiday Specials: 12 recipes for the whole site until now --------- */
  c('kutia', 'Kutia', 'Ukrainian', 'Holiday Specials', 'Medium', 20, 90, 8, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'Kutia wheat berry pudding'),
  c('vanocka', 'Vánočka', 'Czech', 'Holiday Specials', 'Hard', 40, 40, 12, 0, 0, ['Vegetarian'], ['new'], 'Vanocka braided christmas bread'),
  c('julekake', 'Julekake', 'Norwegian', 'Holiday Specials', 'Medium', 30, 40, 10, 0, 0, ['Vegetarian'], ['new'], 'Julekake norwegian christmas bread'),
  c('joulutorttu', 'Joulutorttu', 'Finnish', 'Holiday Specials', 'Medium', 30, 15, 12, 0, 0, ['Vegetarian'], ['new'], 'Joulutorttu finnish christmas star pastry'),
  c('cozonac', 'Cozonac', 'Romanian', 'Holiday Specials', 'Hard', 45, 45, 12, 0, 0, ['Vegetarian'], ['new'], 'Cozonac romanian sweet bread walnut'),
  c('pan-de-jamon', 'Pan de Jamón', 'Venezuelan', 'Holiday Specials', 'Medium', 35, 35, 10, 0, 0, [], ['new'], 'Pan de jamon venezuelan bread'),
  c('bibingka', 'Bibingka', 'Filipino', 'Holiday Specials', 'Medium', 20, 30, 8, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Bibingka rice cake banana leaf'),
  c('stollen', 'Christstollen', 'German', 'Holiday Specials', 'Hard', 40, 55, 12, 0, 0, ['Vegetarian'], ['new'], 'Christstollen dresden marzipan'),

  /* --- Drinks ----------------------------------------------------------- */
  c('salep', 'Salep', 'Turkish', 'Drinks', 'Easy', 5, 12, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Salep turkish winter drink cinnamon'),
  c('ayran', 'Ayran', 'Turkish', 'Drinks', 'Easy', 5, 0, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Ayran yogurt drink glass'),
  c('sujeonggwa', 'Sujeonggwa', 'Korean', 'Drinks', 'Easy', 10, 45, 6, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free'], ['new'], 'Sujeonggwa korean cinnamon punch'),
  c('agua-de-jamaica', 'Agua de Jamaica', 'Mexican', 'Drinks', 'Easy', 10, 15, 6, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free'], ['new'], 'Agua de jamaica hibiscus drink'),
  c('cafe-de-olla', 'Café de Olla', 'Mexican', 'Drinks', 'Easy', 5, 15, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free'], ['new'], 'Cafe de olla clay pot coffee'),
  c('tepache', 'Tepache', 'Mexican', 'Drinks', 'Easy', 15, 0, 8, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free'], ['new'], 'Tepache fermented pineapple drink'),
  c('sorrel-drink', 'Sorrel Drink', 'Trinidadian', 'Drinks', 'Easy', 15, 15, 8, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free'], ['new'], 'Sorrel drink hibiscus caribbean'),
  c('sobolo', 'Sobolo', 'Ghanaian', 'Drinks', 'Easy', 15, 20, 8, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free'], ['new'], 'Sobolo hibiscus drink ghana'),
  c('kvass', 'Bread Kvass', 'Ukrainian', 'Drinks', 'Medium', 20, 20, 8, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'Kvass bread drink glass'),
  c('bandrek', 'Bandrek', 'Indonesian', 'Drinks', 'Easy', 10, 20, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free'], ['new'], 'Bandrek indonesian ginger drink')
];
