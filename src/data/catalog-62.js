'use strict';

/**
 * Weekly Delight — recipe catalog, volume sixty-two.
 * One hundred more of the dishes people in the countries of the European Union look for by name.
 * They are dishes that cooks in the countries of the European Union look for by
 * name; no search-volume data was used to pick or rank them.
 *
 * Every name was tried against the recipes already published, with
 * tools/dedupe-candidates.js, then compared by hand with the closest existing
 * recipes, and the dishes that were the same under another name were dropped.
 *
 * Spread: Polish 18, Czech 7.
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
  c('golonka', 'Golonka', 'Polish', 'Dinner', 'Medium', 15, 120, 4, 0, 0, ['Dairy-Free'], ['new'], 'golonka'),
  c('szarlotka', 'Szarlotka', 'Polish', 'Baking', 'Easy', 25, 45, 10, 0, 0, ['Vegetarian'], ['new'], 'szarlotka'),
  c('mazurek', 'Mazurek', 'Polish', 'Holiday Specials', 'Easy', 25, 30, 16, 0, 0, ['Vegetarian'], ['new'], 'mazurek'),
  c('piernik', 'Piernik', 'Polish', 'Holiday Specials', 'Medium', 25, 40, 12, 0, 0, ['Vegetarian'], ['new'], 'piernik'),
  c('nalesniki', 'Nalesniki', 'Polish', 'Breakfast', 'Easy', 15, 20, 4, 0, 0, ['Vegetarian'], ['new'], 'nalesniki'),
  c('pierogi-z-kapusta', 'Pierogi z Kapusta', 'Polish', 'Dinner', 'Medium', 60, 10, 6, 0, 0, ['Vegetarian'], ['new'], 'pierogi z kapusta'),
  c('pierogi-z-miesem', 'Pierogi z Miesem', 'Polish', 'Dinner', 'Medium', 60, 10, 6, 0, 0, [], ['new'], 'pierogi z miesem'),
  c('placki-po-wegiersku', 'Placki po Wegiersku', 'Polish', 'Dinner', 'Easy', 20, 20, 4, 0, 0, [], ['new'], 'placki po wegiersku'),
  c('sernik-na-zimno', 'Sernik na Zimno', 'Polish', 'Desserts', 'Medium', 25, 0, 10, 0, 0, ['Vegetarian'], ['new'], 'sernik na zimno'),
  c('chlodnik', 'Chlodnik', 'Polish', 'Lunch', 'Easy', 15, 0, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'chlodnik'),
  c('kotlet-mielony', 'Kotlet Mielony', 'Polish', 'Dinner', 'Easy', 15, 15, 4, 0, 0, [], ['new'], 'kotlet mielony'),
  c('pyry-z-gzikiem', 'Pyry z Gzikiem', 'Polish', 'Dinner', 'Easy', 10, 25, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'pyry z gzikiem'),
  c('kluski-slaskie', 'Kluski Slaskie', 'Polish', 'Dinner', 'Easy', 30, 10, 4, 0, 0, [], ['new'], 'kluski slaskie'),
  c('rolada-slaska', 'Rolada Slaska', 'Polish', 'Dinner', 'Medium', 50, 40, 8, 0, 0, [], ['new'], 'rolada slaska'),
  c('modra-kapusta', 'Modra Kapusta', 'Polish', 'Dinner', 'Easy', 10, 25, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'modra kapusta'),
  c('zrazy', 'Zrazy', 'Polish', 'Dinner', 'Medium', 30, 60, 4, 0, 0, [], ['new'], 'zrazy'),
  c('kaszanka', 'Kaszanka', 'Polish', 'Dinner', 'Easy', 15, 30, 4, 0, 0, [], ['new'], 'kaszanka'),
  c('knedle-ze-sliwkami', 'Knedle ze Sliwkami', 'Polish', 'Dinner', 'Medium', 40, 20, 6, 0, 0, ['Vegetarian'], ['new'], 'knedle ze sliwkami'),
  c('vepro-knedlo-zelo', 'Vepro Knedlo Zelo', 'Czech', 'Dinner', 'Medium', 25, 90, 6, 0, 0, [], ['new'], 'vepro knedlo zelo'),
  c('gulas-cesky', 'Gulas Cesky', 'Czech', 'Dinner', 'Medium', 20, 120, 6, 0, 0, [], ['new'], 'gulas cesky'),
  c('smazeny-syr', 'Smazeny Syr', 'Czech', 'Dinner', 'Easy', 15, 10, 4, 0, 0, ['Vegetarian'], ['new'], 'smazeny syr'),
  c('rizek-cesky', 'Rizek Cesky', 'Czech', 'Dinner', 'Easy', 20, 20, 4, 0, 0, [], ['new'], 'rizek cesky'),
  c('rajska-omacka', 'Rajska Omacka', 'Czech', 'Dinner', 'Easy', 20, 60, 4, 0, 0, [], ['new'], 'rajska omacka'),
  c('cesnecka-polevka', 'Cesnecka Polevka', 'Czech', 'Lunch', 'Easy', 10, 35, 4, 0, 0, [], ['new'], 'cesnecka polevka'),
  c('kolace', 'Koláče', 'Czech', 'Baking', 'Medium', 45, 20, 20, 0, 0, ['Vegetarian'], ['new'], 'koláče')
];
