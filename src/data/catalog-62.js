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
 * Spread: Polish 18, Swedish 14, Romanian 9, Czech 8, Hungarian 8, Croatian 7, Slovenian 5, Bulgarian 4, Slovak 2.
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
  c('kolace', 'Koláče', 'Czech', 'Baking', 'Medium', 45, 20, 20, 0, 0, ['Vegetarian'], ['new'], 'koláče'),
  c('medovnik', 'Medovnik', 'Czech', 'Baking', 'Hard', 40, 45, 12, 0, 0, ['Vegetarian'], ['new'], 'medovnik'),
  c('kapustnica', 'Kapustnica', 'Slovak', 'Dinner', 'Easy', 20, 60, 6, 0, 0, [], ['new'], 'kapustnica'),
  c('slovak-bryndzove-pirohy', 'Slovak Bryndzove Pirohy', 'Slovak', 'Dinner', 'Medium', 45, 25, 6, 0, 0, [], ['new'], 'slovak bryndzove pirohy'),
  c('halaszle', 'Halaszle', 'Hungarian', 'Dinner', 'Medium', 20, 50, 6, 0, 0, [], ['new'], 'halaszle'),
  c('porkolt', 'Porkolt', 'Hungarian', 'Dinner', 'Easy', 15, 60, 4, 0, 0, ['Dairy-Free'], ['new'], 'porkolt'),
  c('toltott-kaposzta', 'Toltott Kaposzta', 'Hungarian', 'Dinner', 'Medium', 40, 90, 6, 0, 0, [], ['new'], 'toltott kaposzta'),
  c('kurtoskalacs', 'Kurtoskalacs', 'Hungarian', 'Baking', 'Medium', 40, 25, 8, 0, 0, ['Vegetarian'], ['new'], 'kurtoskalacs'),
  c('somloi-galuska', 'Somloi Galuska', 'Hungarian', 'Desserts', 'Medium', 30, 20, 8, 0, 0, ['Vegetarian'], ['new'], 'somloi galuska'),
  c('hortobagyi-palacsinta', 'Hortobagyi Palacsinta', 'Hungarian', 'Dinner', 'Medium', 30, 20, 6, 0, 0, [], ['new'], 'hortobagyi palacsinta'),
  c('turos-csusza', 'Turos Csusza', 'Hungarian', 'Dinner', 'Easy', 10, 20, 4, 0, 0, [], ['new'], 'turos csusza'),
  c('segedinsky-gulas', 'Segedinsky Gulas', 'Hungarian', 'Dinner', 'Easy', 20, 60, 4, 0, 0, ['Gluten-Free'], ['new'], 'segedinsky gulas'),
  c('ciorba-de-burta', 'Ciorba de Burta', 'Romanian', 'Dinner', 'Medium', 30, 150, 6, 0, 0, ['Gluten-Free'], ['new'], 'ciorba de burta'),
  c('ciorba-de-perisoare', 'Ciorba de Perisoare', 'Romanian', 'Dinner', 'Medium', 25, 40, 6, 0, 0, ['Gluten-Free'], ['new'], 'ciorba de perisoare'),
  c('zacusca', 'Zacusca', 'Romanian', 'Appetizers', 'Easy', 20, 90, 12, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'zacusca'),
  c('salata-de-vinete', 'Salata de Vinete', 'Romanian', 'Appetizers', 'Easy', 20, 40, 6, 0, 0, ['Vegetarian'], ['new'], 'salata de vinete'),
  c('placinta', 'Placinta', 'Romanian', 'Baking', 'Medium', 40, 40, 8, 0, 0, ['Vegetarian'], ['new'], 'placinta'),
  c('ciorba-de-legume', 'Ciorba de Legume', 'Romanian', 'Lunch', 'Easy', 15, 40, 6, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'ciorba de legume'),
  c('ciorba-radauteana', 'Ciorba Radauteana', 'Romanian', 'Lunch', 'Easy', 20, 40, 6, 0, 0, ['Gluten-Free'], ['new'], 'ciorba radauteana'),
  c('fasole-cu-carnati', 'Fasole cu Carnati', 'Romanian', 'Dinner', 'Easy', 15, 60, 6, 0, 0, [], ['new'], 'fasole cu carnati'),
  c('placinta-cu-branza', 'Placinta cu Branza', 'Romanian', 'Baking', 'Medium', 35, 40, 8, 0, 0, ['Vegetarian'], ['new'], 'placinta cu branza'),
  c('kavarma', 'Kavarma', 'Bulgarian', 'Dinner', 'Easy', 20, 40, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'kavarma'),
  c('kebapche', 'Kebapche', 'Bulgarian', 'Dinner', 'Easy', 15, 15, 4, 0, 0, [], ['new'], 'kebapche'),
  c('lyutenitsa', 'Lyutenitsa', 'Bulgarian', 'Appetizers', 'Easy', 15, 60, 12, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'lyutenitsa'),
  c('bulgarian-bean-soup', 'Bulgarian Bean Soup', 'Bulgarian', 'Lunch', 'Easy', 15, 60, 6, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'bulgarian bean soup'),
  c('burek', 'Burek', 'Croatian', 'Baking', 'Medium', 40, 40, 8, 0, 0, [], ['new'], 'burek'),
  c('pasticada', 'Pasticada', 'Croatian', 'Dinner', 'Medium', 30, 150, 6, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'pasticada'),
  c('crni-rizot', 'Crni Rizot', 'Croatian', 'Dinner', 'Easy', 15, 35, 4, 0, 0, [], ['new'], 'crni rizot'),
  c('brudet', 'Brudet', 'Croatian', 'Dinner', 'Easy', 15, 40, 4, 0, 0, ['Gluten-Free'], ['new'], 'brudet'),
  c('fritule', 'Fritule', 'Croatian', 'Desserts', 'Easy', 15, 10, 12, 0, 0, ['Vegetarian'], ['new'], 'fritule'),
  c('kremsnita', 'Kremsnita', 'Croatian', 'Desserts', 'Medium', 40, 25, 12, 0, 0, ['Vegetarian'], ['new'], 'kremsnita'),
  c('punjene-paprike', 'Punjene Paprike', 'Croatian', 'Dinner', 'Medium', 30, 60, 6, 0, 0, ['Dairy-Free'], ['new'], 'punjene paprike'),
  c('potica', 'Potica', 'Slovenian', 'Baking', 'Medium', 40, 60, 12, 0, 0, ['Vegetarian'], ['new'], 'potica'),
  c('jota-soup', 'Jota Soup', 'Slovenian', 'Dinner', 'Easy', 15, 60, 6, 0, 0, ['Dairy-Free'], ['new'], 'jota soup'),
  c('kranjska-klobasa', 'Kranjska Klobasa', 'Slovenian', 'Dinner', 'Easy', 5, 20, 4, 0, 0, [], ['new'], 'kranjska klobasa'),
  c('prekmurska-gibanica', 'Prekmurska Gibanica', 'Slovenian', 'Desserts', 'Hard', 60, 50, 12, 0, 0, ['Vegetarian'], ['new'], 'prekmurska gibanica'),
  c('zlikrofi', 'Zlikrofi', 'Slovenian', 'Dinner', 'Hard', 60, 20, 6, 0, 0, [], ['new'], 'zlikrofi'),
  c('janssons-frestelse', 'Janssons Frestelse', 'Swedish', 'Dinner', 'Easy', 20, 50, 4, 0, 0, [], ['new'], 'janssons frestelse'),
  c('kroppkakor', 'Kroppkakor', 'Swedish', 'Dinner', 'Medium', 45, 25, 6, 0, 0, [], ['new'], 'kroppkakor'),
  c('pytt-i-panna', 'Pytt i Panna', 'Swedish', 'Quick Meals', 'Easy', 15, 15, 4, 0, 0, [], ['new'], 'pytt i panna'),
  c('artsoppa', 'Ärtsoppa', 'Swedish', 'Dinner', 'Easy', 10, 90, 6, 0, 0, ['Dairy-Free'], ['new'], 'ärtsoppa'),
  c('biff-a-la-lindstrom', 'Biff a la Lindstrom', 'Swedish', 'Dinner', 'Medium', 20, 20, 4, 0, 0, [], ['new'], 'biff a la lindstrom'),
  c('kardemummabullar', 'Kardemummabullar', 'Swedish', 'Baking', 'Medium', 40, 20, 12, 0, 0, ['Vegetarian'], ['new'], 'kardemummabullar'),
  c('semla', 'Semla', 'Swedish', 'Baking', 'Medium', 45, 20, 10, 0, 0, ['Vegetarian'], ['new'], 'semla'),
  c('kladdkaka', 'Kladdkaka', 'Swedish', 'Baking', 'Easy', 10, 20, 8, 0, 0, ['Vegetarian'], ['new'], 'kladdkaka'),
  c('lussekatter', 'Lussekatter', 'Swedish', 'Holiday Specials', 'Medium', 40, 15, 14, 0, 0, ['Vegetarian'], ['new'], 'lussekatter'),
  c('pepparkakor', 'Pepparkakor', 'Swedish', 'Holiday Specials', 'Easy', 30, 10, 40, 0, 0, ['Vegetarian'], ['new'], 'pepparkakor'),
  c('chokladbollar', 'Chokladbollar', 'Swedish', 'Desserts', 'Easy', 15, 0, 20, 0, 0, ['Vegetarian'], ['new'], 'chokladbollar'),
  c('rabarberpaj', 'Rabarberpaj', 'Swedish', 'Desserts', 'Easy', 20, 40, 6, 0, 0, ['Vegetarian'], ['new'], 'rabarberpaj'),
  c('princess-cake', 'Princess Cake', 'Swedish', 'Baking', 'Hard', 60, 35, 12, 0, 0, ['Vegetarian'], ['new'], 'princess cake'),
  c('swedish-crayfish-boil', 'Swedish Crayfish Boil', 'Swedish', 'Quick Meals', 'Easy', 10, 10, 6, 0, 0, [], ['new'], 'swedish crayfish boil')
];
