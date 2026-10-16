'use strict';

/**
 * Weekly Delight — recipe catalog, volume sixty-one.
 * One hundred more of the dishes people in the countries of the European Union look for by name.
 * They are dishes that cooks in the countries of the European Union look for by
 * name; no search-volume data was used to pick or rank them.
 *
 * Every name was tried against the recipes already published, with
 * tools/dedupe-candidates.js, then compared by hand with the closest existing
 * recipes, and the dishes that were the same under another name were dropped.
 *
 * Spread: Spanish 41, Portuguese 9.
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
  c('arroz-a-banda', 'Arroz a Banda', 'Spanish', 'Dinner', 'Medium', 25, 40, 4, 0, 0, ['Dairy-Free'], ['new'], 'arroz a banda'),
  c('ajoblanco', 'Ajoblanco', 'Spanish', 'Lunch', 'Easy', 15, 0, 6, 0, 0, ['Vegetarian'], ['new'], 'ajoblanco'),
  c('garbanzos-con-chorizo', 'Garbanzos con Chorizo', 'Spanish', 'Dinner', 'Easy', 15, 40, 4, 0, 0, ['Dairy-Free'], ['new'], 'garbanzos con chorizo'),
  c('carrillada-iberica', 'Carrillada Iberica', 'Spanish', 'Dinner', 'Medium', 20, 150, 4, 0, 0, ['Dairy-Free'], ['new'], 'carrillada iberica'),
  c('cochinillo-asado', 'Cochinillo Asado', 'Spanish', 'Dinner', 'Medium', 20, 180, 6, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'cochinillo asado'),
  c('cordero-asado-castellano', 'Cordero Asado Castellano', 'Spanish', 'Dinner', 'Medium', 20, 120, 6, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'cordero asado castellano'),
  c('chuletillas-de-cordero', 'Chuletillas de Cordero', 'Spanish', 'Dinner', 'Easy', 10, 15, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'chuletillas de cordero'),
  c('solomillo-al-whisky', 'Solomillo al Whisky', 'Spanish', 'Dinner', 'Easy', 10, 15, 4, 0, 0, [], ['new'], 'solomillo al whisky'),
  c('pinchos-morunos', 'Pinchos Morunos', 'Spanish', 'Appetizers', 'Easy', 20, 15, 6, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'pinchos morunos'),
  c('empanadillas', 'Empanadillas', 'Spanish', 'Appetizers', 'Medium', 40, 20, 20, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'empanadillas'),
  c('montaditos', 'Montaditos', 'Spanish', 'Appetizers', 'Easy', 20, 10, 8, 0, 0, ['Dairy-Free'], ['new'], 'montaditos'),
  c('gildas', 'Gildas', 'Spanish', 'Appetizers', 'Easy', 10, 0, 8, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'gildas'),
  c('ensaladilla-rusa', 'Ensaladilla Rusa', 'Spanish', 'Appetizers', 'Easy', 25, 30, 6, 0, 0, ['Dairy-Free'], ['new'], 'ensaladilla rusa'),
  c('canelones-de-carne', 'Canelones de Carne', 'Spanish', 'Dinner', 'Medium', 40, 40, 6, 0, 0, [], ['new'], 'canelones de carne'),
  c('natillas', 'Natillas', 'Spanish', 'Desserts', 'Easy', 10, 25, 6, 0, 0, ['Vegetarian'], ['new'], 'natillas'),
  c('mojo-picon', 'Mojo Picon', 'Spanish', 'Appetizers', 'Easy', 10, 0, 8, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'mojo picon'),
  c('papas-arrugadas', 'Papas Arrugadas', 'Spanish', 'Appetizers', 'Easy', 5, 30, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'papas arrugadas'),
  c('huevos-a-la-flamenca', 'Huevos a la Flamenca', 'Spanish', 'Breakfast', 'Easy', 10, 25, 2, 0, 0, [], ['new'], 'huevos a la flamenca'),
  c('rosquillas', 'Rosquillas', 'Spanish', 'Holiday Specials', 'Medium', 25, 20, 20, 0, 0, ['Vegetarian'], ['new'], 'rosquillas'),
  c('bunuelos-de-viento', 'Bunuelos de Viento', 'Spanish', 'Holiday Specials', 'Medium', 20, 15, 12, 0, 0, ['Vegetarian'], ['new'], 'bunuelos de viento'),
  c('cocido-montanes', 'Cocido Montanes', 'Spanish', 'Dinner', 'Medium', 20, 150, 6, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'cocido montanes'),
  c('pote-gallego', 'Pote Gallego', 'Spanish', 'Dinner', 'Medium', 20, 120, 6, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'pote gallego'),
  c('bacalao-a-la-vizcaina', 'Bacalao a la Vizcaina', 'Spanish', 'Dinner', 'Medium', 20, 35, 4, 0, 0, [], ['new'], 'bacalao a la vizcaina'),
  c('sopa-castellana', 'Sopa Castellana', 'Spanish', 'Lunch', 'Easy', 15, 40, 4, 0, 0, [], ['new'], 'sopa castellana'),
  c('alcachofas-con-jamon', 'Alcachofas con Jamon', 'Spanish', 'Appetizers', 'Easy', 10, 15, 4, 0, 0, [], ['new'], 'alcachofas con jamon'),
  c('judias-verdes-con-jamon', 'Judias Verdes con Jamon', 'Spanish', 'Dinner', 'Easy', 10, 20, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'judias verdes con jamon'),
  c('menestra-de-verduras', 'Menestra de Verduras', 'Spanish', 'Dinner', 'Easy', 25, 30, 4, 0, 0, ['Dairy-Free'], ['new'], 'menestra de verduras'),
  c('revuelto-de-setas', 'Revuelto de Setas', 'Spanish', 'Appetizers', 'Easy', 10, 10, 4, 0, 0, ['Vegetarian'], ['new'], 'revuelto de setas'),
  c('pollo-en-pepitoria', 'Pollo en Pepitoria', 'Spanish', 'Dinner', 'Medium', 20, 45, 4, 0, 0, ['Dairy-Free'], ['new'], 'pollo en pepitoria'),
  c('pollo-al-chilindron', 'Pollo al Chilindron', 'Spanish', 'Dinner', 'Medium', 20, 60, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'pollo al chilindron'),
  c('conejo-al-ajillo', 'Conejo al Ajillo', 'Spanish', 'Dinner', 'Medium', 15, 60, 4, 0, 0, ['Vegetarian'], ['new'], 'conejo al ajillo'),
  c('lomo-adobado', 'Lomo Adobado', 'Spanish', 'Dinner', 'Easy', 10, 25, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'lomo adobado'),
  c('arroz-caldoso', 'Arroz Caldoso', 'Spanish', 'Dinner', 'Medium', 25, 40, 4, 0, 0, ['Dairy-Free'], ['new'], 'arroz caldoso'),
  c('mejillones-a-la-marinera', 'Mejillones a la Marinera', 'Spanish', 'Appetizers', 'Easy', 10, 10, 4, 0, 0, [], ['new'], 'mejillones a la marinera'),
  c('pulpo-a-feira', 'Pulpo a Feira', 'Spanish', 'Appetizers', 'Medium', 10, 60, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'pulpo a feira'),
  c('dorada-a-la-sal', 'Dorada a la Sal', 'Spanish', 'Dinner', 'Medium', 15, 35, 2, 0, 0, ['Vegetarian', 'Dairy-Free', 'Gluten-Free'], ['new'], 'dorada a la sal'),
  c('porra-antequerana', 'Porra Antequerana', 'Spanish', 'Lunch', 'Easy', 20, 0, 6, 0, 0, [], ['new'], 'porra antequerana'),
  c('pa-amb-oli', 'Pa amb Oli', 'Spanish', 'Appetizers', 'Easy', 10, 0, 4, 0, 0, [], ['new'], 'pa amb oli'),
  c('espinacas-a-la-catalana', 'Espinacas a la Catalana', 'Spanish', 'Dinner', 'Easy', 10, 15, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'espinacas a la catalana'),
  c('chuleton-de-buey', 'Chuletón de Buey', 'Spanish', 'Dinner', 'Easy', 10, 20, 2, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'chuletón de buey'),
  c('arroz-con-conejo-y-caracoles', 'Arroz con Conejo y Caracoles', 'Spanish', 'Dinner', 'Medium', 20, 60, 6, 0, 0, ['Gluten-Free'], ['new'], 'arroz con conejo y caracoles'),
  c('bacalhau-a-gomes-de-sa', 'Bacalhau a Gomes de Sa', 'Portuguese', 'Dinner', 'Medium', 20, 40, 4, 0, 0, ['Gluten-Free'], ['new'], 'bacalhau a gomes de sa'),
  c('arroz-de-pato', 'Arroz de Pato', 'Portuguese', 'Dinner', 'Medium', 30, 50, 6, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'arroz de pato'),
  c('sardinhas-assadas', 'Sardinhas Assadas', 'Portuguese', 'Dinner', 'Easy', 10, 12, 4, 0, 0, [], ['new'], 'sardinhas assadas'),
  c('polvo-a-lagareiro', 'Polvo a Lagareiro', 'Portuguese', 'Dinner', 'Medium', 15, 60, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'polvo a lagareiro'),
  c('cozido-a-portuguesa', 'Cozido a Portuguesa', 'Portuguese', 'Dinner', 'Medium', 30, 150, 8, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'cozido a portuguesa'),
  c('prego-no-pao', 'Prego no Pao', 'Portuguese', 'Quick Meals', 'Easy', 10, 15, 4, 0, 0, [], ['new'], 'prego no pao'),
  c('bolo-de-bolacha', 'Bolo de Bolacha', 'Portuguese', 'Desserts', 'Easy', 25, 0, 8, 0, 0, ['Vegetarian'], ['new'], 'bolo de bolacha'),
  c('queijadas-de-sintra', 'Queijadas de Sintra', 'Portuguese', 'Desserts', 'Medium', 25, 25, 12, 0, 0, ['Vegetarian'], ['new'], 'queijadas de sintra'),
  c('sopa-de-pedra', 'Sopa de Pedra', 'Portuguese', 'Dinner', 'Medium', 20, 120, 6, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'sopa de pedra')
];
