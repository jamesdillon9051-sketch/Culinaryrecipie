'use strict';

/**
 * Weekly Delight — recipe catalog, volume fifty-nine.
 * One hundred more of the dishes people in the countries of the European Union look for by name.
 * They are dishes that cooks in the countries of the European Union look for by
 * name; no search-volume data was used to pick or rank them.
 *
 * Every name was tried against the recipes already published, with
 * tools/dedupe-candidates.js, then compared by hand with the closest existing
 * recipes, and the dishes that were the same under another name were dropped.
 *
 * Spread: Italian 50.
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
  c('bonet', 'Bonet', 'Italian', 'Desserts', 'Medium', 20, 45, 8, 0, 0, ['Vegetarian'], ['new'], 'bonet'),
  c('frittelle-di-carnevale', 'Frittelle di Carnevale', 'Italian', 'Desserts', 'Medium', 20, 15, 6, 0, 0, ['Vegetarian'], ['new'], 'frittelle di carnevale'),
  c('chiacchiere', 'Chiacchiere', 'Italian', 'Holiday Specials', 'Easy', 40, 10, 8, 0, 0, ['Vegetarian'], ['new'], 'chiacchiere'),
  c('castagnole', 'Castagnole', 'Italian', 'Holiday Specials', 'Easy', 25, 15, 8, 0, 0, ['Vegetarian'], ['new'], 'castagnole'),
  c('torrone', 'Torrone', 'Italian', 'Holiday Specials', 'Hard', 30, 25, 16, 0, 0, ['Vegetarian', 'Dairy-Free', 'Gluten-Free'], ['new'], 'torrone'),
  c('brutti-ma-buoni', 'Brutti ma Buoni', 'Italian', 'Baking', 'Easy', 10, 30, 20, 0, 0, ['Vegetarian', 'Dairy-Free', 'Gluten-Free'], ['new'], 'brutti ma buoni'),
  c('fave-e-cicoria', 'Fave e Cicoria', 'Italian', 'Dinner', 'Easy', 10, 45, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'fave e cicoria'),
  c('burrata-with-tomatoes', 'Burrata with Tomatoes', 'Italian', 'Quick Meals', 'Easy', 10, 0, 4, 0, 0, ['Vegetarian'], ['new'], 'burrata with tomatoes'),
  c('pizza-fritta', 'Pizza Fritta', 'Italian', 'Dinner', 'Medium', 40, 10, 4, 0, 0, [], ['new'], 'pizza fritta'),
  c('pinsa-romana', 'Pinsa Romana', 'Italian', 'Dinner', 'Medium', 20, 15, 4, 0, 0, ['Vegetarian'], ['new'], 'pinsa romana'),
  c('gnocco-fritto', 'Gnocco Fritto', 'Italian', 'Appetizers', 'Medium', 20, 15, 6, 0, 0, [], ['new'], 'gnocco fritto'),
  c('spaghetti-alla-nerano', 'Spaghetti alla Nerano', 'Italian', 'Dinner', 'Easy', 15, 20, 4, 0, 0, [], ['new'], 'spaghetti alla nerano'),
  c('pasta-con-le-zucchine', 'Pasta con le Zucchine', 'Italian', 'Dinner', 'Easy', 10, 20, 4, 0, 0, [], ['new'], 'pasta con le zucchine'),
  c('pasta-ai-quattro-formaggi', 'Pasta ai Quattro Formaggi', 'Italian', 'Quick Meals', 'Easy', 5, 15, 4, 0, 0, [], ['new'], 'pasta ai quattro formaggi'),
  c('pasta-al-forno', 'Pasta al Forno', 'Italian', 'Dinner', 'Easy', 20, 40, 6, 0, 0, [], ['new'], 'pasta al forno'),
  c('pasta-alla-carrettiera', 'Pasta alla Carrettiera', 'Italian', 'Dinner', 'Easy', 10, 15, 4, 0, 0, ['Vegetarian'], ['new'], 'pasta alla carrettiera'),
  c('spaghetti-al-tonno', 'Spaghetti al Tonno', 'Italian', 'Quick Meals', 'Easy', 5, 15, 4, 0, 0, ['Dairy-Free'], ['new'], 'spaghetti al tonno'),
  c('spaghetti-alla-bottarga', 'Spaghetti alla Bottarga', 'Italian', 'Quick Meals', 'Easy', 5, 12, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'spaghetti alla bottarga'),
  c('spaghetti-con-le-cozze', 'Spaghetti con le Cozze', 'Italian', 'Dinner', 'Easy', 15, 20, 4, 0, 0, ['Dairy-Free'], ['new'], 'spaghetti con le cozze'),
  c('linguine-allo-scoglio', 'Linguine allo Scoglio', 'Italian', 'Dinner', 'Medium', 20, 25, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'linguine allo scoglio'),
  c('cavatelli-con-broccoli', 'Cavatelli con Broccoli', 'Italian', 'Dinner', 'Easy', 10, 20, 4, 0, 0, ['Dairy-Free'], ['new'], 'cavatelli con broccoli'),
  c('gnocchi-alla-romana', 'Gnocchi alla Romana', 'Italian', 'Dinner', 'Medium', 15, 40, 4, 0, 0, [], ['new'], 'gnocchi alla romana'),
  c('malfatti', 'Malfatti', 'Italian', 'Dinner', 'Medium', 30, 10, 4, 0, 0, [], ['new'], 'malfatti'),
  c('risotto-alla-pescatora', 'Risotto alla Pescatora', 'Italian', 'Dinner', 'Medium', 20, 30, 4, 0, 0, ['Dairy-Free'], ['new'], 'risotto alla pescatora'),
  c('risotto-al-radicchio', 'Risotto al Radicchio', 'Italian', 'Dinner', 'Easy', 10, 30, 4, 0, 0, [], ['new'], 'risotto al radicchio'),
  c('risotto-agli-asparagi', 'Risotto agli Asparagi', 'Italian', 'Dinner', 'Easy', 10, 30, 4, 0, 0, ['Gluten-Free'], ['new'], 'risotto agli asparagi'),
  c('zuppa-di-farro', 'Zuppa di Farro', 'Italian', 'Lunch', 'Easy', 15, 40, 4, 0, 0, [], ['new'], 'zuppa di farro'),
  c('zuppa-di-lenticchie', 'Zuppa di Lenticchie', 'Italian', 'Lunch', 'Easy', 10, 40, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'zuppa di lenticchie'),
  c('zuppa-di-ceci', 'Zuppa di Ceci', 'Italian', 'Lunch', 'Easy', 10, 40, 4, 0, 0, ['Vegetarian'], ['new'], 'zuppa di ceci'),
  c('costoletta-alla-valdostana', 'Costoletta alla Valdostana', 'Italian', 'Dinner', 'Medium', 15, 15, 4, 0, 0, [], ['new'], 'costoletta alla valdostana'),
  c('polenta-concia', 'Polenta Concia', 'Italian', 'Dinner', 'Easy', 5, 40, 4, 0, 0, ['Gluten-Free'], ['new'], 'polenta concia'),
  c('pasta-alla-norcina', 'Pasta alla Norcina', 'Italian', 'Dinner', 'Easy', 10, 20, 4, 0, 0, [], ['new'], 'pasta alla norcina'),
  c('abbacchio-alla-scottadito', 'Abbacchio alla Scottadito', 'Italian', 'Dinner', 'Easy', 10, 15, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'abbacchio alla scottadito'),
  c('castagnaccio', 'Castagnaccio', 'Italian', 'Baking', 'Easy', 10, 40, 8, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'castagnaccio'),
  c('trenette-al-pesto', 'Trenette al Pesto', 'Italian', 'Quick Meals', 'Easy', 10, 15, 4, 0, 0, ['Gluten-Free'], ['new'], 'trenette al pesto'),
  c('torta-di-verdure', 'Torta di Verdure', 'Italian', 'Lunch', 'Easy', 25, 45, 8, 0, 0, [], ['new'], 'torta di verdure'),
  c('peperoni-ripieni', 'Peperoni Ripieni', 'Italian', 'Dinner', 'Easy', 20, 45, 4, 0, 0, [], ['new'], 'peperoni ripieni'),
  c('involtini-di-melanzane', 'Involtini di Melanzane', 'Italian', 'Appetizers', 'Medium', 25, 25, 6, 0, 0, ['Gluten-Free'], ['new'], 'involtini di melanzane'),
  c('pollo-alla-romana', 'Pollo alla Romana', 'Italian', 'Dinner', 'Easy', 15, 45, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'pollo alla romana'),
  c('pollo-al-limone', 'Pollo al Limone', 'Italian', 'Dinner', 'Easy', 10, 35, 4, 0, 0, [], ['new'], 'pollo al limone'),
  c('pollo-con-i-peperoni', 'Pollo con i Peperoni', 'Italian', 'Dinner', 'Easy', 15, 40, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'pollo con i peperoni'),
  c('cinghiale-in-umido', 'Cinghiale in Umido', 'Italian', 'Dinner', 'Medium', 20, 120, 6, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'cinghiale in umido'),
  c('stinco-di-maiale', 'Stinco di Maiale', 'Italian', 'Dinner', 'Medium', 15, 150, 4, 0, 0, ['Dairy-Free'], ['new'], 'stinco di maiale'),
  c('arrosticini', 'Arrosticini', 'Italian', 'Dinner', 'Easy', 20, 10, 4, 0, 0, [], ['new'], 'arrosticini'),
  c('costine-di-maiale', 'Costine di Maiale', 'Italian', 'Dinner', 'Easy', 10, 90, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'costine di maiale'),
  c('salsiccia-e-friarielli', 'Salsiccia e Friarielli', 'Italian', 'Dinner', 'Easy', 10, 20, 4, 0, 0, [], ['new'], 'salsiccia e friarielli'),
  c('salsicce-e-fagioli', 'Salsicce e Fagioli', 'Italian', 'Dinner', 'Easy', 10, 30, 4, 0, 0, [], ['new'], 'salsicce e fagioli'),
  c('spezzatino-di-manzo', 'Spezzatino di Manzo', 'Italian', 'Dinner', 'Easy', 20, 100, 6, 0, 0, ['Dairy-Free'], ['new'], 'spezzatino di manzo'),
  c('polpettone', 'Polpettone', 'Italian', 'Dinner', 'Easy', 20, 60, 6, 0, 0, [], ['new'], 'polpettone'),
  c('cotechino-con-lenticchie', 'Cotechino con Lenticchie', 'Italian', 'Holiday Specials', 'Medium', 15, 150, 6, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'cotechino con lenticchie')
];
