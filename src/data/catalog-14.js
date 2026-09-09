/**
 * Weekly Delight — recipe catalog, volume fourteen. Tunisian.
 *
 * Three Tunisian recipes existed before this: brik, salade mechouia and the
 * Tunisian shakshuka. All three are here already and none is repeated.
 *
 * Tunisian food is the most distinctive in North Africa and the least
 * represented in English-language recipe collections, which is largely a
 * problem of one ingredient. Almost everything below contains harissa, and
 * harissa made properly — dried chillies rehydrated and pounded with caraway
 * and coriander seed, not the smooth red paste sold in tubes — changes what
 * these dishes taste like completely. So it is the first recipe in the volume
 * and the others refer back to it.
 *
 * The other recurring thing is tabil, the coriander-and-caraway spice mix that
 * does for Tunisia roughly what garam masala does for northern India. It is
 * built into the recipes rather than assumed.
 *
 * Eleven everyday dishes and salads, thirteen mains, four breads, seven sweets
 * and drinks.
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
  /* The foundations and the everyday table */
  c('harissa', 'Harissa', 'Tunisian', 'Appetizers', 'Easy', 25, 10, 12, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Harissa tunisian chilli paste bowl'),
  c('lablabi', 'Lablabi', 'Tunisian', 'Breakfast', 'Easy', 15, 30, 4, 0, 0, ['Vegetarian'], ['new'], 'Lablabi tunisian chickpea bread soup'),
  c('slata-tounsia', 'Slata Tounsia', 'Tunisian', 'Appetizers', 'Easy', 20, 0, 6, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Slata tounsia tunisian chopped salad'),
  c('salade-omek-houria', 'Omek Houria', 'Tunisian', 'Appetizers', 'Easy', 15, 30, 6, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Omek houria tunisian carrot harissa salad'),
  c('kafteji', 'Kafteji', 'Tunisian', 'Lunch', 'Easy', 20, 25, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Kafteji tunisian fried chopped vegetables egg'),
  c('salata-blankit', 'Salata Blankit', 'Tunisian', 'Appetizers', 'Easy', 20, 20, 6, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Tunisian potato salad harissa capers'),
  c('doigts-de-fatma', 'Doigts de Fatma', 'Tunisian', 'Appetizers', 'Medium', 30, 20, 6, 0, 0, [], ['new'], 'Doigts de fatma tunisian fried cigars'),
  c('chorba-frik', 'Chorba Frik', 'Tunisian', 'Lunch', 'Easy', 20, 55, 6, 0, 0, ['Dairy-Free'], ['new'], 'Chorba frik tunisian freekeh soup lamb'),
  c('hlelem', 'Hlelem', 'Tunisian', 'Lunch', 'Medium', 25, 60, 6, 0, 0, ['Dairy-Free'], ['new'], 'Hlelem tunisian noodle bean soup'),
  c('bsissa', 'Bsissa', 'Tunisian', 'Breakfast', 'Easy', 15, 15, 8, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Bsissa tunisian roasted barley flour drink'),
  c('mhalbiya', 'Mhalbiya', 'Tunisian', 'Desserts', 'Easy', 10, 15, 6, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Mhalbiya tunisian rice pudding geranium'),

  /* Mains */
  c('couscous-tunisien', 'Couscous Tunisien', 'Tunisian', 'Dinner', 'Medium', 35, 90, 8, 0, 0, ['Dairy-Free'], ['new'], 'Couscous tunisien lamb vegetables harissa'),
  c('ojja', 'Ojja', 'Tunisian', 'Quick Meals', 'Easy', 10, 20, 4, 0, 0, ['Gluten-Free'], ['new'], 'Ojja tunisian eggs merguez tomato pan'),
  c('marqa-hlouwa', 'Marqa Hlouwa', 'Tunisian', 'Dinner', 'Easy', 25, 85, 6, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'Marqa hlouwa tunisian sweet lamb stew'),
  c('kamounia', 'Kamounia', 'Tunisian', 'Dinner', 'Easy', 15, 90, 6, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'Kamounia tunisian cumin liver stew'),
  c('mermez', 'Mermez', 'Tunisian', 'Dinner', 'Easy', 20, 80, 6, 0, 0, ['Dairy-Free'], ['new'], 'Mermez tunisian lamb chickpea stew'),
  c('tajine-tunisien', 'Tajine Tunisien', 'Tunisian', 'Dinner', 'Medium', 30, 45, 8, 0, 0, [], ['new'], 'Tajine tunisien baked egg cheese frittata'),
  c('felfel-mahchi', 'Felfel Mahchi', 'Tunisian', 'Dinner', 'Medium', 35, 50, 6, 0, 0, ['Dairy-Free'], ['new'], 'Felfel mahchi tunisian stuffed peppers'),
  c('kabkabou', 'Kabkabou', 'Tunisian', 'Dinner', 'Easy', 20, 35, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'Kabkabou tunisian fish olives preserved lemon'),
  c('complet-poisson', 'Complet Poisson', 'Tunisian', 'Dinner', 'Medium', 30, 40, 4, 0, 0, ['Dairy-Free'], ['new'], 'Complet poisson tunisian grilled fish plate'),
  c('hout-mechoui', 'Hout Mechoui', 'Tunisian', 'Dinner', 'Easy', 20, 25, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'Hout mechoui tunisian grilled whole fish'),
  c('rouz-jerbi', 'Rouz Jerbi', 'Tunisian', 'Dinner', 'Medium', 30, 60, 6, 0, 0, ['Dairy-Free'], ['new'], 'Rouz jerbi djerba steamed rice herbs'),
  c('osbane', 'Osbane', 'Tunisian', 'Dinner', 'Hard', 60, 75, 6, 0, 0, ['Dairy-Free'], ['new'], 'Osbane tunisian stuffed sausage rice herbs'),
  c('berkoukes', 'Berkoukes', 'Tunisian', 'Dinner', 'Medium', 25, 55, 6, 0, 0, ['Dairy-Free'], ['new'], 'Berkoukes hand rolled pasta pearls stew'),
  c('fricasse', 'Fricassé', 'Tunisian', 'Lunch', 'Medium', 35, 20, 8, 0, 0, ['Dairy-Free'], ['new'], 'Fricasse tunisian fried sandwich tuna olives'),

  /* Bread */
  c('mlawi', 'Mlawi', 'Tunisian', 'Baking', 'Medium', 30, 20, 6, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Mlawi tunisian layered flatbread pan'),
  c('khobz-tabouna', 'Khobz Tabouna', 'Tunisian', 'Baking', 'Medium', 25, 15, 6, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Khobz tabouna tunisian semolina bread'),
  c('ftair', 'Ftair', 'Tunisian', 'Breakfast', 'Medium', 25, 20, 6, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Ftair tunisian fried bread rings sugar'),
  c('madfouna', 'Madfouna', 'Tunisian', 'Dinner', 'Medium', 35, 60, 6, 0, 0, ['Dairy-Free'], ['new'], 'Madfouna tunisian buried chard meat stew'),

  /* Sweets and drinks */
  c('makroudh', 'Makroudh', 'Tunisian', 'Desserts', 'Medium', 40, 25, 12, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'Makroudh tunisian semolina date diamonds'),
  c('bambalouni', 'Bambalouni', 'Tunisian', 'Desserts', 'Medium', 20, 20, 8, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Bambalouni tunisian ring doughnut sugar'),
  c('samsa-tunisienne', 'Samsa', 'Tunisian', 'Desserts', 'Medium', 35, 25, 10, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Samsa tunisian almond triangles syrup'),
  c('zlabia', 'Zlabia', 'Tunisian', 'Desserts', 'Medium', 20, 25, 8, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Zlabia tunisian saffron spiral fritter'),
  c('assidat-zgougou', 'Assidat Zgougou', 'Tunisian', 'Desserts', 'Hard', 40, 40, 8, 0, 0, ['Vegetarian'], ['new'], 'Assidat zgougou aleppo pine cream dessert'),
  c('masfouf', 'Masfouf', 'Tunisian', 'Desserts', 'Easy', 20, 20, 6, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Masfouf sweet couscous raisins nuts'),
  c('the-aux-pignons', 'Thé aux Pignons', 'Tunisian', 'Drinks', 'Easy', 10, 15, 4, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Tunisian mint tea pine nuts glass')
];
