'use strict';

/**
 * Weekly Delight — recipe catalog, volume sixty.
 * One hundred more of the dishes people in the countries of the European Union look for by name.
 * They are dishes that cooks in the countries of the European Union look for by
 * name; no search-volume data was used to pick or rank them.
 *
 * Every name was tried against the recipes already published, with
 * tools/dedupe-candidates.js, then compared by hand with the closest existing
 * recipes, and the dishes that were the same under another name were dropped.
 *
 * Spread: German 49.
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
  c('eisbein', 'Eisbein', 'German', 'Dinner', 'Medium', 20, 150, 4, 0, 0, ['Dairy-Free'], ['new'], 'eisbein'),
  c('schweinshaxe', 'Schweinshaxe', 'German', 'Dinner', 'Medium', 20, 150, 4, 0, 0, ['Dairy-Free'], ['new'], 'schweinshaxe'),
  c('kassler', 'Kassler', 'German', 'Dinner', 'Easy', 15, 90, 4, 0, 0, ['Dairy-Free'], ['new'], 'kassler'),
  c('kartoffelpuffer', 'Kartoffelpuffer', 'German', 'Dinner', 'Easy', 20, 20, 4, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'kartoffelpuffer'),
  c('kartoffelklosse', 'Kartoffelklosse', 'German', 'Dinner', 'Medium', 40, 25, 6, 0, 0, ['Vegetarian'], ['new'], 'kartoffelklosse'),
  c('semmelknodel', 'Semmelknodel', 'German', 'Dinner', 'Medium', 25, 25, 4, 0, 0, ['Vegetarian'], ['new'], 'semmelknodel'),
  c('labskaus', 'Labskaus', 'German', 'Dinner', 'Medium', 20, 45, 4, 0, 0, [], ['new'], 'labskaus'),
  c('himmel-und-erde', 'Himmel und Erde', 'German', 'Dinner', 'Easy', 20, 30, 4, 0, 0, [], ['new'], 'himmel und erde'),
  c('maultaschen', 'Maultaschen', 'German', 'Dinner', 'Hard', 60, 20, 6, 0, 0, [], ['new'], 'maultaschen'),
  c('leberkase', 'Leberkase', 'German', 'Dinner', 'Easy', 20, 60, 6, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'leberkase'),
  c('weisswurst', 'Weisswurst', 'German', 'Quick Meals', 'Easy', 5, 15, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'weisswurst'),
  c('bienenstich', 'Bienenstich', 'German', 'Baking', 'Medium', 40, 35, 12, 0, 0, ['Vegetarian'], ['new'], 'bienenstich'),
  c('berliner-pfannkuchen', 'Berliner Pfannkuchen', 'German', 'Baking', 'Medium', 40, 20, 12, 0, 0, ['Vegetarian'], ['new'], 'berliner pfannkuchen'),
  c('spekulatius', 'Spekulatius', 'German', 'Holiday Specials', 'Easy', 30, 15, 40, 0, 0, ['Vegetarian'], ['new'], 'spekulatius'),
  c('pfeffernusse', 'Pfeffernusse', 'German', 'Holiday Specials', 'Easy', 30, 15, 40, 0, 0, ['Vegetarian'], ['new'], 'pfeffernusse'),
  c('vanillekipferl', 'Vanillekipferl', 'German', 'Holiday Specials', 'Medium', 30, 12, 40, 0, 0, ['Vegetarian'], ['new'], 'vanillekipferl'),
  c('zimtsterne', 'Zimtsterne', 'German', 'Holiday Specials', 'Medium', 30, 15, 30, 0, 0, ['Vegetarian'], ['new'], 'zimtsterne'),
  c('erbsensuppe', 'Erbsensuppe', 'German', 'Dinner', 'Easy', 15, 90, 6, 0, 0, [], ['new'], 'erbsensuppe'),
  c('linsensuppe', 'Linsensuppe', 'German', 'Lunch', 'Easy', 15, 40, 6, 0, 0, [], ['new'], 'linsensuppe'),
  c('eintopf', 'Eintopf', 'German', 'Dinner', 'Easy', 20, 50, 6, 0, 0, ['Dairy-Free'], ['new'], 'eintopf'),
  c('dampfnudeln', 'Dampfnudeln', 'German', 'Desserts', 'Medium', 25, 25, 6, 0, 0, ['Vegetarian'], ['new'], 'dampfnudeln'),
  c('rhabarberkuchen', 'Rhabarberkuchen', 'German', 'Baking', 'Easy', 20, 45, 12, 0, 0, ['Vegetarian'], ['new'], 'rhabarberkuchen'),
  c('streuselkuchen', 'Streuselkuchen', 'German', 'Baking', 'Easy', 30, 30, 12, 0, 0, ['Vegetarian'], ['new'], 'streuselkuchen'),
  c('rote-grutze', 'Rote Grutze', 'German', 'Desserts', 'Easy', 10, 15, 6, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'rote grutze'),
  c('kasekuchen', 'Kasekuchen', 'German', 'Desserts', 'Medium', 30, 70, 12, 0, 0, ['Vegetarian'], ['new'], 'kasekuchen'),
  c('frankfurter-green-sauce', 'Frankfurter Green Sauce', 'German', 'Appetizers', 'Easy', 15, 10, 6, 0, 0, ['Vegetarian'], ['new'], 'frankfurter green sauce'),
  c('wildgulasch', 'Wildgulasch', 'German', 'Dinner', 'Medium', 30, 120, 6, 0, 0, ['Dairy-Free'], ['new'], 'wildgulasch'),
  c('matjes', 'Matjes', 'German', 'Lunch', 'Easy', 10, 0, 4, 0, 0, [], ['new'], 'matjes'),
  c('fischbrotchen', 'Fischbrotchen', 'German', 'Quick Meals', 'Easy', 10, 5, 2, 0, 0, [], ['new'], 'fischbrotchen'),
  c('gurkensalat', 'Gurkensalat', 'German', 'Healthy', 'Easy', 10, 0, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'gurkensalat'),
  c('kohlrouladen', 'Kohlrouladen', 'German', 'Dinner', 'Medium', 30, 70, 4, 0, 0, [], ['new'], 'kohlrouladen'),
  c('spargel-mit-hollandaise', 'Spargel mit Hollandaise', 'German', 'Dinner', 'Easy', 10, 20, 4, 0, 0, ['Gluten-Free'], ['new'], 'spargel mit hollandaise'),
  c('bohnensuppe', 'Bohnensuppe', 'German', 'Dinner', 'Easy', 15, 60, 6, 0, 0, ['Dairy-Free'], ['new'], 'bohnensuppe'),
  c('vollkornbrot', 'Vollkornbrot', 'German', 'Baking', 'Medium', 20, 60, 12, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'vollkornbrot'),
  c('pumpernickel', 'Pumpernickel', 'German', 'Baking', 'Medium', 20, 90, 12, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'pumpernickel'),
  c('nussecken', 'Nussecken', 'German', 'Baking', 'Medium', 40, 25, 24, 0, 0, ['Vegetarian'], ['new'], 'nussecken'),
  c('spritzgeback', 'Spritzgebäck', 'German', 'Baking', 'Easy', 25, 12, 40, 0, 0, ['Vegetarian'], ['new'], 'spritzgebäck'),
  c('butterkuchen', 'Butterkuchen', 'German', 'Baking', 'Easy', 25, 25, 12, 0, 0, ['Vegetarian'], ['new'], 'butterkuchen'),
  c('zwiebelkuchen', 'Zwiebelkuchen', 'German', 'Lunch', 'Easy', 25, 40, 8, 0, 0, [], ['new'], 'zwiebelkuchen'),
  c('apfelkuchen-blech', 'Apfelkuchen Blech', 'German', 'Baking', 'Easy', 25, 45, 16, 0, 0, ['Vegetarian'], ['new'], 'apfelkuchen blech'),
  c('mohnkuchen', 'Mohnkuchen', 'German', 'Baking', 'Medium', 30, 50, 12, 0, 0, ['Vegetarian'], ['new'], 'mohnkuchen'),
  c('hefezopf', 'Hefezopf', 'German', 'Baking', 'Medium', 40, 30, 10, 0, 0, ['Vegetarian'], ['new'], 'hefezopf'),
  c('prinzregententorte', 'Prinzregententorte', 'German', 'Baking', 'Hard', 60, 45, 12, 0, 0, ['Vegetarian'], ['new'], 'prinzregententorte'),
  c('frankfurter-kranz', 'Frankfurter Kranz', 'German', 'Baking', 'Hard', 60, 45, 12, 0, 0, ['Vegetarian'], ['new'], 'frankfurter kranz'),
  c('donauwelle', 'Donauwelle', 'German', 'Baking', 'Medium', 40, 45, 16, 0, 0, ['Vegetarian'], ['new'], 'donauwelle'),
  c('baumkuchen', 'Baumkuchen', 'German', 'Baking', 'Hard', 40, 60, 16, 0, 0, ['Vegetarian'], ['new'], 'baumkuchen'),
  c('haselnussmakronen', 'Haselnussmakronen', 'German', 'Holiday Specials', 'Easy', 15, 25, 30, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'haselnussmakronen'),
  c('kokosmakronen', 'Kokosmakronen', 'German', 'Holiday Specials', 'Easy', 15, 20, 30, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'kokosmakronen'),
  c('mandelhornchen', 'Mandelhörnchen', 'German', 'Holiday Specials', 'Medium', 30, 20, 24, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'mandelhörnchen')
];
