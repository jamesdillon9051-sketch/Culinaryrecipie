/**
 * Weekly Delight — recipe catalog, volume thirteen. Egyptian.
 *
 * Three Egyptian recipes were published before this: koshari, ful medames and
 * molokhia. Those are the three the world already knows, which left the rest of
 * a very large cuisine unrepresented.
 *
 * Egypt divides its cooking along a line most Western lists miss. There is the
 * food of the fellahin — pulses, greens, bread, almost no meat, and the best of
 * it built on nothing but cumin, garlic and lemon — and there is the Ottoman
 * and Levantine inheritance of the cities, which is where the stuffed pigeon,
 * the layered pastry and the milk puddings come from. Both are here.
 *
 * Checked against the other 854 first: falafel is published as the Levantine
 * chickpea version, so ta'ameya is included as the distinct Egyptian dish it
 * is — made with split broad beans, not chickpeas, and a different recipe by
 * every measure. Basbousa was already published under Middle Eastern and is
 * not repeated.
 *
 * Fourteen everyday dishes, twelve mains, six breads and pastries, eight
 * sweets and drinks.
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
  /* The everyday table — pulses, greens and bread */
  c('taameya', "Ta'ameya", 'Egyptian', 'Appetizers', 'Medium', 25, 20, 6, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Taameya egyptian falafel broad bean'),
  c('besara', 'Besara', 'Egyptian', 'Appetizers', 'Easy', 15, 40, 6, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Besara egyptian broad bean puree herbs'),
  c('shorbet-ads', 'Shorbet Ads', 'Egyptian', 'Lunch', 'Easy', 15, 45, 6, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Shorbet ads egyptian lentil soup'),
  c('salata-baladi', 'Salata Baladi', 'Egyptian', 'Appetizers', 'Easy', 15, 0, 6, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Salata baladi egyptian chopped salad'),
  c('tahina-salad', 'Egyptian Tahina', 'Egyptian', 'Appetizers', 'Easy', 10, 0, 8, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Egyptian tahina sauce bowl parsley'),
  c('baba-ghanoug-masri', 'Baba Ghanoug Masri', 'Egyptian', 'Appetizers', 'Easy', 20, 30, 6, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Egyptian baba ghanoug aubergine tomato'),
  c('torshi', 'Torshi', 'Egyptian', 'Appetizers', 'Easy', 25, 5, 12, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Torshi egyptian pink pickled turnips'),
  c('betengan-mekhalel', 'Betengan Mekhalel', 'Egyptian', 'Appetizers', 'Medium', 30, 25, 10, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Betengan mekhalel pickled stuffed aubergine'),
  c('batates-mohammara', 'Batates Mohammara', 'Egyptian', 'Appetizers', 'Easy', 15, 35, 6, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Egyptian spiced roast potatoes cumin'),
  c('dukkah', 'Dukkah', 'Egyptian', 'Appetizers', 'Easy', 10, 12, 12, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Dukkah egyptian nut seed spice blend'),
  c('bamia-masreya', 'Bamia Masreya', 'Egyptian', 'Dinner', 'Easy', 20, 75, 6, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'Bamia masreya okra tomato stew'),
  c('torly', 'Torly', 'Egyptian', 'Dinner', 'Easy', 25, 70, 6, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Torly egyptian roasted vegetable casserole'),
  c('roz-mermah', 'Roz Mermah', 'Egyptian', 'Dinner', 'Easy', 10, 25, 6, 0, 0, ['Vegetarian'], ['new'], 'Egyptian rice vermicelli pilaf'),
  c('kishk-masri', 'Kishk Masri', 'Egyptian', 'Lunch', 'Easy', 15, 30, 4, 0, 0, ['Vegetarian'], ['new'], 'Kishk masri yogurt flour soup'),

  /* Mains */
  c('hawawshi', 'Hawawshi', 'Egyptian', 'Dinner', 'Easy', 25, 25, 4, 0, 0, ['Dairy-Free'], ['new'], 'Hawawshi egyptian stuffed baked bread meat'),
  c('macarona-bechamel', 'Macarona Bechamel', 'Egyptian', 'Dinner', 'Medium', 35, 50, 8, 0, 0, [], ['new'], 'Macarona bechamel egyptian pasta bake'),
  c('fattah', 'Fattah', 'Egyptian', 'Dinner', 'Medium', 30, 120, 8, 0, 0, ['Dairy-Free'], ['new'], 'Egyptian fattah rice bread lamb garlic'),
  c('mahshi-cromb', 'Mahshi Cromb', 'Egyptian', 'Dinner', 'Medium', 55, 65, 6, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Mahshi cromb egyptian stuffed cabbage'),
  c('kofta-masreya', 'Kofta Masreya', 'Egyptian', 'Dinner', 'Easy', 20, 25, 6, 0, 0, ['Dairy-Free'], ['new'], 'Egyptian kofta skewers grilled'),
  c('kebda-eskandarani', 'Kebda Eskandarani', 'Egyptian', 'Quick Meals', 'Easy', 15, 12, 4, 0, 0, ['Dairy-Free'], ['new'], 'Kebda eskandarani alexandrian liver'),
  c('sayadeya-masreya', 'Sayadeya Masreya', 'Egyptian', 'Dinner', 'Medium', 30, 55, 6, 0, 0, ['Dairy-Free'], ['new'], 'Egyptian sayadeya fish rice cumin'),
  c('hamam-mahshi', 'Hamam Mahshi', 'Egyptian', 'Dinner', 'Hard', 45, 70, 4, 0, 0, ['Dairy-Free'], ['new'], 'Hamam mahshi stuffed pigeon freekeh'),
  c('ferakh-mashwi', 'Ferakh Mashwi', 'Egyptian', 'Dinner', 'Easy', 20, 45, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'Egyptian grilled chicken cumin garlic'),
  c('mombar', 'Mombar', 'Egyptian', 'Dinner', 'Hard', 60, 60, 6, 0, 0, ['Dairy-Free'], ['new'], 'Mombar egyptian stuffed sausage rice'),
  c('renga', 'Renga', 'Egyptian', 'Appetizers', 'Easy', 20, 0, 6, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'Renga egyptian smoked herring salad'),
  c('goulash-masri', 'Goulash Masri', 'Egyptian', 'Dinner', 'Medium', 30, 45, 8, 0, 0, [], ['new'], 'Egyptian goulash filo minced meat pie'),

  /* Bread and pastry */
  c('aish-baladi', 'Aish Baladi', 'Egyptian', 'Baking', 'Medium', 30, 10, 8, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Aish baladi egyptian wholemeal bread'),
  c('eish-merahrah', 'Eish Merahrah', 'Egyptian', 'Baking', 'Medium', 30, 20, 6, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Eish merahrah fenugreek flatbread'),
  c('feteer-meshaltet', 'Feteer Meshaltet', 'Egyptian', 'Baking', 'Hard', 45, 25, 8, 0, 0, ['Vegetarian'], ['new'], 'Feteer meshaltet layered egyptian pastry'),
  c('gebna-domiati', 'Gebna Domiati Salad', 'Egyptian', 'Appetizers', 'Easy', 15, 0, 6, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Gebna domiati white cheese tomato salad'),
  c('batarekh', 'Batarekh', 'Egyptian', 'Appetizers', 'Easy', 15, 0, 8, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'Batarekh egyptian cured grey mullet roe'),
  c('balah-el-sham', 'Balah el Sham', 'Egyptian', 'Desserts', 'Medium', 25, 25, 8, 0, 0, ['Vegetarian'], ['new'], 'Balah el sham fried choux syrup'),

  /* Sweets and drinks */
  c('om-ali', 'Om Ali', 'Egyptian', 'Desserts', 'Easy', 15, 30, 8, 0, 0, ['Vegetarian'], ['new'], 'Om ali egyptian bread pudding nuts'),
  c('roz-bel-laban', 'Roz bel Laban', 'Egyptian', 'Desserts', 'Easy', 10, 45, 6, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Roz bel laban egyptian rice pudding'),
  c('qatayef', 'Qatayef Mahshi', 'Egyptian', 'Desserts', 'Medium', 35, 25, 8, 0, 0, ['Vegetarian'], ['new'], 'Qatayef stuffed pancakes nuts syrup'),
  c('zalabya', 'Zalabya', 'Egyptian', 'Desserts', 'Medium', 20, 25, 8, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Zalabya egyptian fried dough syrup'),
  c('kunafa-bil-manga', 'Kunafa bil Manga', 'Egyptian', 'Desserts', 'Medium', 25, 30, 8, 0, 0, ['Vegetarian'], ['new'], 'Kunafa mango cream egyptian dessert'),
  c('karkade', 'Karkade', 'Egyptian', 'Drinks', 'Easy', 10, 15, 6, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Karkade hibiscus iced drink egypt'),
  c('sobia', 'Sobia', 'Egyptian', 'Drinks', 'Easy', 15, 0, 6, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Sobia egyptian coconut rice drink'),
  c('asab', 'Asab', 'Egyptian', 'Drinks', 'Easy', 10, 0, 4, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Asab sugarcane juice egypt street')
];
