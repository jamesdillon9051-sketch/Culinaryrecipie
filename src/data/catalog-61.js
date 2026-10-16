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
 * Spread: Spanish 25.
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
  c('alcachofas-con-jamon', 'Alcachofas con Jamon', 'Spanish', 'Appetizers', 'Easy', 10, 15, 4, 0, 0, [], ['new'], 'alcachofas con jamon')
];
