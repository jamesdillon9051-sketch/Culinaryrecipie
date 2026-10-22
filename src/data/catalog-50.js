'use strict';

/**
 * Weekly Delight — recipe catalog, volume fifty.
 * One hundred more of the dishes people in the USA, Canada, Australia, the UK and New Zealand look for by name.
 * They are the variations that cooks in the USA, Canada, Australia, the UK and New
 * Zealand look for by name; no search-volume data was used to pick or rank them.
 *
 * Every name was tried against the recipes already published, with
 * tools/dedupe-candidates.js, then compared by hand with the closest existing
 * recipes, and the dishes that were the same under another name were dropped.
 *
 * Spread: Spanish 26, British 14, Italian 10, French 8, Jewish 7, African 6, Portuguese 5, Balkan 4, Greek 4, Ethiopian 3, Ghanaian 3, Nigerian 3, South African 2, Dutch 1, Norwegian 1, Polish 1, Romanian 1, Tunisian 1.
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
  c('lemon-poppy-seed-cake', 'Lemon Poppy Seed Cake', 'British', 'Baking', 'Easy', 20, 40, 10, 0, 0, ['Vegetarian'], ['new'], 'lemon poppy seed cake'),
  c('jam-doughnuts', 'Jam Doughnuts', 'British', 'Baking', 'Hard', 40, 20, 12, 0, 0, ['Vegetarian'], ['new'], 'jam doughnuts'),
  c('chicken-parmo', 'Chicken Parmo', 'British', 'Dinner', 'Medium', 25, 25, 4, 0, 0, [], ['new'], 'chicken parmo'),
  c('mashed-swede', 'Mashed Swede', 'British', 'Dinner', 'Easy', 10, 25, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'mashed swede'),
  c('cheese-sauce-for-lasagne', 'Cheese Sauce for Lasagne', 'Italian', 'Dinner', 'Easy', 5, 15, 6, 0, 0, [], ['new'], 'cheese sauce for lasagne'),
  c('peri-peri-chicken-thighs', 'Peri Peri Chicken Thighs', 'Portuguese', 'Dinner', 'Easy', 15, 40, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'peri peri chicken thighs'),
  c('spanish-chicken-and-rice', 'Spanish Chicken and Rice', 'Spanish', 'Dinner', 'Easy', 15, 35, 4, 0, 0, ['Dairy-Free'], ['new'], 'spanish chicken and rice'),
  c('taramasalata', 'Taramasalata', 'Greek', 'Appetizers', 'Easy', 15, 0, 6, 0, 0, [], ['new'], 'taramasalata'),
  c('skordalia', 'Skordalia', 'Greek', 'Appetizers', 'Easy', 10, 20, 6, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'skordalia'),
  c('melitzanosalata', 'Melitzanosalata', 'Greek', 'Appetizers', 'Easy', 15, 45, 6, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'melitzanosalata'),
  c('tsoureki', 'Tsoureki', 'Greek', 'Baking', 'Hard', 40, 30, 10, 0, 0, ['Vegetarian'], ['new'], 'tsoureki'),
  c('bistecca-fiorentina', 'Bistecca Fiorentina', 'Italian', 'Dinner', 'Medium', 10, 15, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'bistecca fiorentina'),
  c('grissini', 'Grissini', 'Italian', 'Baking', 'Medium', 30, 20, 12, 0, 0, ['Vegetarian'], ['new'], 'grissini'),
  c('lemon-granita', 'Lemon Granita', 'Italian', 'Desserts', 'Easy', 10, 0, 6, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'lemon granita'),
  c('torta-della-nonna', 'Torta della Nonna', 'Italian', 'Desserts', 'Hard', 50, 60, 10, 0, 0, ['Vegetarian'], ['new'], 'torta della nonna'),
  c('pimientos-de-padron', 'Pimientos de Padron', 'Spanish', 'Appetizers', 'Easy', 5, 8, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'pimientos de padron'),
  c('cocido-madrileno', 'Cocido Madrileno', 'Spanish', 'Dinner', 'Medium', 20, 150, 6, 0, 0, [], ['new'], 'cocido madrileno'),
  c('cataplana-de-marisco', 'Cataplana de Marisco', 'Portuguese', 'Dinner', 'Medium', 25, 25, 4, 0, 0, ['Gluten-Free'], ['new'], 'cataplana de marisco'),
  c('erwtensoep', 'Erwtensoep', 'Dutch', 'Dinner', 'Easy', 20, 120, 6, 0, 0, [], ['new'], 'erwtensoep'),
  c('norwegian-waffles', 'Norwegian Waffles', 'Norwegian', 'Breakfast', 'Easy', 10, 20, 6, 0, 0, ['Vegetarian'], ['new'], 'norwegian waffles'),
  c('paczki', 'Paczki', 'Polish', 'Baking', 'Hard', 45, 20, 12, 0, 0, ['Vegetarian'], ['new'], 'paczki'),
  c('papanasi', 'Papanasi', 'Romanian', 'Desserts', 'Medium', 25, 15, 6, 0, 0, ['Vegetarian'], ['new'], 'papanasi'),
  c('banitsa', 'Banitsa', 'Balkan', 'Baking', 'Medium', 30, 40, 8, 0, 0, ['Vegetarian'], ['new'], 'banitsa'),
  c('cevapi', 'Cevapi', 'Balkan', 'Dinner', 'Medium', 20, 12, 4, 0, 0, [], ['new'], 'cevapi'),
  c('pljeskavica', 'Pljeskavica', 'Balkan', 'Dinner', 'Medium', 20, 12, 4, 0, 0, [], ['new'], 'pljeskavica'),
  c('croatian-peka', 'Croatian Peka', 'Balkan', 'Dinner', 'Medium', 25, 150, 6, 0, 0, ['Gluten-Free'], ['new'], 'croatian peka'),
  c('pounded-yam', 'Pounded Yam', 'Nigerian', 'Dinner', 'Medium', 10, 25, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'pounded yam'),
  c('moi-moi', 'Moi Moi', 'Nigerian', 'Dinner', 'Medium', 30, 60, 6, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'moi moi'),
  c('ofada-rice', 'Ofada Rice', 'Nigerian', 'Dinner', 'Medium', 25, 60, 6, 0, 0, ['Gluten-Free'], ['new'], 'ofada rice'),
  c('banku-with-okra-stew', 'Banku with Okra Stew', 'Ghanaian', 'Dinner', 'Medium', 25, 40, 4, 0, 0, [], ['new'], 'banku with okra stew'),
  c('groundnut-soup', 'Groundnut Soup', 'Ghanaian', 'Dinner', 'Medium', 20, 60, 6, 0, 0, ['Gluten-Free'], ['new'], 'groundnut soup'),
  c('ghanaian-light-soup', 'Ghanaian Light Soup', 'Ghanaian', 'Dinner', 'Easy', 20, 45, 4, 0, 0, ['Gluten-Free'], ['new'], 'ghanaian light soup'),
  c('attieke', 'Attieke', 'African', 'Dinner', 'Easy', 10, 10, 4, 0, 0, ['Dairy-Free'], ['new'], 'attieke'),
  c('ndole', 'Ndole', 'African', 'Dinner', 'Hard', 40, 60, 6, 0, 0, ['Gluten-Free'], ['new'], 'ndole'),
  c('kitfo', 'Kitfo', 'Ethiopian', 'Dinner', 'Medium', 15, 10, 4, 0, 0, [], ['new'], 'kitfo'),
  c('gomen', 'Gomen', 'Ethiopian', 'Healthy', 'Easy', 15, 35, 4, 0, 0, ['Gluten-Free'], ['new'], 'gomen'),
  c('zigni', 'Zigni', 'Ethiopian', 'Dinner', 'Medium', 20, 60, 4, 0, 0, ['Gluten-Free'], ['new'], 'zigni'),
  c('bariis-iskukaris', 'Bariis Iskukaris', 'African', 'Dinner', 'Medium', 20, 75, 6, 0, 0, ['Gluten-Free'], ['new'], 'bariis iskukaris'),
  c('somali-sambusa', 'Somali Sambusa', 'African', 'Appetizers', 'Medium', 45, 20, 20, 0, 0, [], ['new'], 'somali sambusa'),
  c('zanzibar-pizza', 'Zanzibar Pizza', 'African', 'Lunch', 'Medium', 40, 15, 4, 0, 0, [], ['new'], 'zanzibar pizza'),
  c('ugandan-rolex', 'Ugandan Rolex', 'African', 'Breakfast', 'Easy', 10, 10, 2, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'ugandan rolex'),
  c('potjiekos', 'Potjiekos', 'South African', 'Dinner', 'Medium', 30, 150, 6, 0, 0, [], ['new'], 'potjiekos'),
  c('south-african-pap', 'South African Pap', 'South African', 'Dinner', 'Easy', 5, 30, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'south african pap'),
  c('blintzes', 'Blintzes', 'Jewish', 'Breakfast', 'Medium', 25, 20, 6, 0, 0, ['Vegetarian'], ['new'], 'blintzes'),
  c('gefilte-fish', 'Gefilte Fish', 'Jewish', 'Appetizers', 'Hard', 45, 100, 10, 0, 0, ['Dairy-Free'], ['new'], 'gefilte fish'),
  c('cholent', 'Cholent', 'Jewish', 'Dinner', 'Easy', 20, 480, 8, 0, 0, [], ['new'], 'cholent'),
  c('knish', 'Knish', 'Jewish', 'Appetizers', 'Medium', 45, 35, 12, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'knish'),
  c('chopped-liver', 'Chopped Liver', 'Jewish', 'Appetizers', 'Medium', 15, 20, 8, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'chopped liver'),
  c('charoset', 'Charoset', 'Jewish', 'Appetizers', 'Easy', 15, 0, 10, 0, 0, ['Vegetarian', 'Dairy-Free', 'Gluten-Free'], ['new'], 'charoset'),
  c('tzimmes', 'Tzimmes', 'Jewish', 'Dinner', 'Easy', 20, 60, 8, 0, 0, ['Vegetarian', 'Dairy-Free', 'Gluten-Free'], ['new'], 'tzimmes'),
  c('panettone-bread-pudding', 'Panettone Bread Pudding', 'Italian', 'Holiday Specials', 'Easy', 15, 45, 8, 0, 0, ['Vegetarian'], ['new'], 'panettone bread pudding'),
  c('chocolate-nest-cakes', 'Chocolate Nest Cakes', 'British', 'Holiday Specials', 'Easy', 20, 15, 12, 0, 0, ['Vegetarian'], ['new'], 'chocolate nest cakes'),
  c('italian-easter-bread', 'Italian Easter Bread', 'Italian', 'Holiday Specials', 'Medium', 40, 30, 8, 0, 0, ['Vegetarian'], ['new'], 'italian easter bread'),
  c('harissa-chicken', 'Harissa Chicken', 'Tunisian', 'Dinner', 'Easy', 15, 40, 4, 0, 0, ['Gluten-Free'], ['new'], 'harissa chicken'),
  c('cabinet-pudding', 'Cabinet Pudding', 'British', 'Desserts', 'Medium', 20, 40, 6, 0, 0, ['Vegetarian'], ['new'], 'cabinet pudding'),
  c('cumberland-rum-nicky', 'Cumberland Rum Nicky', 'British', 'Desserts', 'Medium', 20, 45, 8, 0, 0, ['Vegetarian'], ['new'], 'cumberland rum nicky'),
  c('chorley-cakes', 'Chorley Cakes', 'British', 'Baking', 'Medium', 30, 20, 10, 0, 0, ['Vegetarian'], ['new'], 'chorley cakes'),
  c('banbury-cakes', 'Banbury Cakes', 'British', 'Baking', 'Medium', 30, 20, 10, 0, 0, ['Vegetarian'], ['new'], 'banbury cakes'),
  c('cornish-fairings', 'Cornish Fairings', 'British', 'Baking', 'Easy', 15, 12, 24, 0, 0, ['Vegetarian'], ['new'], 'cornish fairings'),
  c('brown-windsor-soup', 'Brown Windsor Soup', 'British', 'Dinner', 'Easy', 20, 115, 6, 0, 0, [], ['new'], 'brown windsor soup'),
  c('bolo-rei', 'Bolo Rei', 'Portuguese', 'Holiday Specials', 'Hard', 45, 40, 10, 0, 0, ['Vegetarian'], ['new'], 'bolo rei'),
  c('torta-de-santa-clara', 'Torta de Santa Clara', 'Portuguese', 'Desserts', 'Medium', 40, 40, 8, 0, 0, ['Vegetarian'], ['new'], 'torta de santa clara'),
  c('torrijas', 'Torrijas', 'Spanish', 'Desserts', 'Easy', 10, 15, 6, 0, 0, ['Vegetarian'], ['new'], 'torrijas'),
  c('leche-frita', 'Leche Frita', 'Spanish', 'Desserts', 'Medium', 25, 15, 6, 0, 0, ['Vegetarian'], ['new'], 'leche frita'),
  c('ensaimada', 'Ensaimada', 'Spanish', 'Baking', 'Hard', 60, 25, 8, 0, 0, [], ['new'], 'ensaimada'),
  c('magdalenas', 'Magdalenas', 'Spanish', 'Baking', 'Easy', 15, 20, 12, 0, 0, ['Vegetarian'], ['new'], 'magdalenas'),
  c('ajo-blanco', 'Ajo Blanco', 'Spanish', 'Appetizers', 'Easy', 15, 0, 4, 0, 0, ['Vegetarian'], ['new'], 'ajo blanco'),
  c('gambas-pil-pil', 'Gambas Pil Pil', 'Spanish', 'Appetizers', 'Easy', 10, 8, 4, 0, 0, [], ['new'], 'gambas pil pil'),
  c('escalivada', 'Escalivada', 'Spanish', 'Healthy', 'Easy', 10, 50, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'escalivada'),
  c('calcots-with-romesco', 'Calçots with Romesco', 'Spanish', 'Appetizers', 'Medium', 20, 20, 4, 0, 0, ['Vegetarian'], ['new'], 'calçots with romesco'),
  c('fideua', 'Fideuà', 'Spanish', 'Dinner', 'Medium', 20, 35, 4, 0, 0, ['Dairy-Free'], ['new'], 'fideuà'),
  c('arroz-negro', 'Arroz Negro', 'Spanish', 'Dinner', 'Medium', 20, 40, 4, 0, 0, [], ['new'], 'arroz negro'),
  c('marmitako', 'Marmitako', 'Spanish', 'Dinner', 'Easy', 20, 35, 4, 0, 0, [], ['new'], 'marmitako'),
  c('caldo-gallego', 'Caldo Gallego', 'Spanish', 'Dinner', 'Easy', 15, 90, 6, 0, 0, ['Gluten-Free'], ['new'], 'caldo gallego'),
  c('empanada-gallega', 'Empanada Gallega', 'Spanish', 'Baking', 'Hard', 50, 60, 8, 0, 0, [], ['new'], 'empanada gallega'),
  c('cachopo', 'Cachopo', 'Spanish', 'Dinner', 'Medium', 25, 20, 3, 0, 0, [], ['new'], 'cachopo'),
  c('huevos-rotos', 'Huevos Rotos', 'Spanish', 'Dinner', 'Easy', 10, 25, 2, 0, 0, ['Dairy-Free'], ['new'], 'huevos rotos'),
  c('berenjenas-con-miel', 'Berenjenas con Miel', 'Spanish', 'Appetizers', 'Easy', 10, 15, 4, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'berenjenas con miel'),
  c('rabo-de-toro', 'Rabo de Toro', 'Spanish', 'Dinner', 'Medium', 25, 180, 6, 0, 0, [], ['new'], 'rabo de toro'),
  c('paella-mixta', 'Paella Mixta', 'Spanish', 'Dinner', 'Medium', 25, 45, 6, 0, 0, [], ['new'], 'paella mixta'),
  c('almejas-a-la-marinera', 'Almejas a la Marinera', 'Spanish', 'Appetizers', 'Easy', 10, 12, 4, 0, 0, [], ['new'], 'almejas a la marinera'),
  c('chipirones-en-su-tinta', 'Chipirones en su Tinta', 'Spanish', 'Dinner', 'Medium', 25, 35, 4, 0, 0, [], ['new'], 'chipirones en su tinta'),
  c('croquetas-de-bacalao', 'Croquetas de Bacalao', 'Spanish', 'Appetizers', 'Medium', 40, 10, 20, 0, 0, [], ['new'], 'croquetas de bacalao'),
  c('patatas-a-lo-pobre', 'Patatas a lo Pobre', 'Spanish', 'Dinner', 'Easy', 10, 35, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'patatas a lo pobre'),
  c('bacalao-al-pil-pil', 'Bacalao al Pil Pil', 'Spanish', 'Dinner', 'Medium', 15, 20, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'bacalao al pil pil'),
  c('slow-cooker-beef-ragu', 'Slow Cooker Beef Ragu', 'Italian', 'Dinner', 'Easy', 15, 420, 6, 0, 0, [], ['new'], 'slow cooker beef ragu'),
  c('slow-cooker-rice-pudding', 'Slow Cooker Rice Pudding', 'British', 'Desserts', 'Easy', 5, 180, 6, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'slow cooker rice pudding'),
  c('skillet-gnocchi-with-spinach', 'Skillet Gnocchi with Spinach', 'Italian', 'Quick Meals', 'Easy', 5, 15, 4, 0, 0, [], ['new'], 'skillet gnocchi with spinach'),
  c('sourdough-focaccia', 'Sourdough Focaccia', 'Italian', 'Baking', 'Medium', 20, 30, 8, 0, 0, ['Vegetarian'], ['new'], 'sourdough focaccia'),
  c('honey-glazed-gammon', 'Honey Glazed Gammon', 'British', 'Holiday Specials', 'Easy', 15, 120, 8, 0, 0, ['Dairy-Free'], ['new'], 'honey glazed gammon'),
  c('cherries-jubilee', 'Cherries Jubilee', 'French', 'Desserts', 'Easy', 10, 10, 4, 0, 0, ['Vegetarian'], ['new'], 'cherries jubilee'),
  c('moules-a-la-creme', 'Moules à la Crème', 'French', 'Dinner', 'Easy', 10, 15, 2, 0, 0, [], ['new'], 'moules à la crème'),
  c('truite-aux-amandes', 'Truite aux Amandes', 'French', 'Dinner', 'Easy', 10, 15, 2, 0, 0, [], ['new'], 'truite aux amandes'),
  c('pain-depices', 'Pain d\'Épices', 'French', 'Baking', 'Medium', 15, 55, 10, 0, 0, ['Vegetarian'], ['new'], 'pain d\'épices'),
  c('souffle-au-fromage', 'Soufflé au Fromage', 'French', 'Dinner', 'Hard', 25, 30, 4, 0, 0, [], ['new'], 'soufflé au fromage'),
  c('ratatouille-tart', 'Ratatouille Tart', 'French', 'Lunch', 'Medium', 40, 60, 6, 0, 0, ['Vegetarian'], ['new'], 'ratatouille tart'),
  c('peri-peri-sauce', 'Peri Peri Sauce', 'Portuguese', 'Appetizers', 'Easy', 10, 15, 8, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'peri peri sauce'),
  c('beurre-blanc-sauce', 'Beurre Blanc Sauce', 'French', 'Dinner', 'Medium', 10, 15, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'beurre blanc sauce'),
  c('vegetarian-gravy', 'Vegetarian Gravy', 'British', 'Dinner', 'Easy', 10, 20, 6, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'vegetarian gravy'),
  c('lemon-butter-sauce', 'Lemon Butter Sauce', 'French', 'Dinner', 'Easy', 5, 10, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'lemon butter sauce')
];
