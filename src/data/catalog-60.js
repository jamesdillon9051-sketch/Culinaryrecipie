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
 * Spread: German 69, Austrian 13, Dutch 13, Spanish 5.
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
  c('weisswurst', 'Weisswurst', 'German', 'Quick Meals', 'Easy', 5, 15, 4, 0, 0, ['Dairy-Free'], ['new'], 'weisswurst'),
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
  c('mandelhornchen', 'Mandelhörnchen', 'German', 'Holiday Specials', 'Medium', 30, 20, 24, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'mandelhörnchen'),
  c('gulaschsuppe', 'Gulaschsuppe', 'German', 'Lunch', 'Easy', 20, 90, 6, 0, 0, [], ['new'], 'gulaschsuppe'),
  c('huhnersuppe-mit-nudeln', 'Hühnersuppe mit Nudeln', 'German', 'Lunch', 'Easy', 15, 40, 6, 0, 0, ['Dairy-Free'], ['new'], 'hühnersuppe mit nudeln'),
  c('spargelcremesuppe', 'Spargelcremesuppe', 'German', 'Lunch', 'Easy', 15, 25, 4, 0, 0, ['Vegetarian'], ['new'], 'spargelcremesuppe'),
  c('selleriesuppe', 'Selleriesuppe', 'German', 'Lunch', 'Easy', 15, 30, 4, 0, 0, [], ['new'], 'selleriesuppe'),
  c('pellkartoffeln-mit-quark', 'Pellkartoffeln mit Quark', 'German', 'Dinner', 'Easy', 10, 25, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'pellkartoffeln mit quark'),
  c('strammer-max', 'Strammer Max', 'German', 'Quick Meals', 'Easy', 5, 10, 2, 0, 0, [], ['new'], 'strammer max'),
  c('bauernfruhstuck', 'Bauernfrühstück', 'German', 'Breakfast', 'Easy', 15, 20, 4, 0, 0, ['Gluten-Free'], ['new'], 'bauernfrühstück'),
  c('jagerschnitzel', 'Jägerschnitzel', 'German', 'Dinner', 'Easy', 20, 25, 4, 0, 0, [], ['new'], 'jägerschnitzel'),
  c('rahmschnitzel', 'Rahmschnitzel', 'German', 'Dinner', 'Easy', 20, 25, 4, 0, 0, [], ['new'], 'rahmschnitzel'),
  c('thuringer-rostbratwurst', 'Thüringer Rostbratwurst', 'German', 'Dinner', 'Easy', 5, 10, 4, 0, 0, [], ['new'], 'thüringer rostbratwurst'),
  c('nurnberger-rostbratwurst', 'Nürnberger Rostbratwurst', 'German', 'Dinner', 'Easy', 5, 10, 4, 0, 0, [], ['new'], 'nürnberger rostbratwurst'),
  c('bockwurst', 'Bockwurst', 'German', 'Quick Meals', 'Easy', 5, 10, 4, 0, 0, [], ['new'], 'bockwurst'),
  c('gansebraten', 'Gänsebraten', 'German', 'Holiday Specials', 'Medium', 30, 180, 8, 0, 0, ['Dairy-Free'], ['new'], 'gänsebraten'),
  c('entenbrust-mit-rotkohl', 'Entenbrust mit Rotkohl', 'German', 'Dinner', 'Medium', 20, 60, 4, 0, 0, ['Gluten-Free'], ['new'], 'entenbrust mit rotkohl'),
  c('wildschweinbraten', 'Wildschweinbraten', 'German', 'Dinner', 'Medium', 30, 150, 6, 0, 0, ['Dairy-Free'], ['new'], 'wildschweinbraten'),
  c('forelle-mullerin', 'Forelle Müllerin', 'German', 'Dinner', 'Easy', 10, 15, 2, 0, 0, [], ['new'], 'forelle müllerin'),
  c('backfisch', 'Backfisch', 'German', 'Dinner', 'Easy', 20, 15, 4, 0, 0, [], ['new'], 'backfisch'),
  c('heringssalat', 'Heringssalat', 'German', 'Lunch', 'Easy', 20, 0, 6, 0, 0, [], ['new'], 'heringssalat'),
  c('nudelsalat-deutsch', 'Nudelsalat Deutsch', 'German', 'Lunch', 'Easy', 15, 10, 6, 0, 0, [], ['new'], 'nudelsalat deutsch'),
  c('frankfurter-wurstchen', 'Frankfurter Würstchen', 'German', 'Quick Meals', 'Easy', 5, 10, 4, 0, 0, [], ['new'], 'frankfurter würstchen'),
  c('germknodel', 'Germknodel', 'Austrian', 'Desserts', 'Medium', 40, 20, 6, 0, 0, ['Vegetarian'], ['new'], 'germknodel'),
  c('marillenknodel', 'Marillenknodel', 'Austrian', 'Desserts', 'Medium', 40, 15, 6, 0, 0, ['Vegetarian'], ['new'], 'marillenknodel'),
  c('palatschinken', 'Palatschinken', 'Austrian', 'Breakfast', 'Easy', 10, 20, 4, 0, 0, ['Vegetarian'], ['new'], 'palatschinken'),
  c('topfenstrudel', 'Topfenstrudel', 'Austrian', 'Desserts', 'Medium', 40, 40, 8, 0, 0, ['Vegetarian'], ['new'], 'topfenstrudel'),
  c('backhendl', 'Backhendl', 'Austrian', 'Dinner', 'Medium', 25, 25, 4, 0, 0, [], ['new'], 'backhendl'),
  c('rindsuppe', 'Rindsuppe', 'Austrian', 'Dinner', 'Easy', 20, 150, 6, 0, 0, ['Dairy-Free'], ['new'], 'rindsuppe'),
  c('frittatensuppe', 'Frittatensuppe', 'Austrian', 'Lunch', 'Easy', 15, 10, 4, 0, 0, [], ['new'], 'frittatensuppe'),
  c('serviettenknodel', 'Serviettenknödel', 'Austrian', 'Dinner', 'Medium', 30, 25, 6, 0, 0, ['Vegetarian'], ['new'], 'serviettenknödel'),
  c('griessknodel', 'Griessknödel', 'Austrian', 'Dinner', 'Easy', 20, 15, 6, 0, 0, [], ['new'], 'griessknödel'),
  c('salzburger-nockerl', 'Salzburger Nockerl', 'Austrian', 'Desserts', 'Medium', 25, 15, 4, 0, 0, ['Vegetarian'], ['new'], 'salzburger nockerl'),
  c('esterhazy-torte', 'Esterhazy Torte', 'Austrian', 'Baking', 'Hard', 60, 40, 12, 0, 0, ['Vegetarian'], ['new'], 'esterhazy torte'),
  c('kaspressknodel', 'Kaspressknödel', 'Austrian', 'Dinner', 'Easy', 25, 10, 4, 0, 0, ['Vegetarian'], ['new'], 'kaspressknödel'),
  c('tiroler-grostl', 'Tiroler Gröstl', 'Austrian', 'Dinner', 'Easy', 15, 30, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'tiroler gröstl'),
  c('hutspot', 'Hutspot', 'Dutch', 'Dinner', 'Easy', 20, 30, 4, 0, 0, ['Vegetarian'], ['new'], 'hutspot'),
  c('kroketten', 'Kroketten', 'Dutch', 'Appetizers', 'Hard', 40, 15, 12, 0, 0, [], ['new'], 'kroketten'),
  c('oliebollen', 'Oliebollen', 'Dutch', 'Holiday Specials', 'Medium', 15, 15, 12, 0, 0, ['Vegetarian'], ['new'], 'oliebollen'),
  c('appeltaart', 'Appeltaart', 'Dutch', 'Baking', 'Medium', 30, 60, 12, 0, 0, ['Vegetarian'], ['new'], 'appeltaart'),
  c('pannenkoeken', 'Pannenkoeken', 'Dutch', 'Breakfast', 'Easy', 10, 20, 4, 0, 0, [], ['new'], 'pannenkoeken'),
  c('kibbeling', 'Kibbeling', 'Dutch', 'Appetizers', 'Easy', 15, 10, 4, 0, 0, [], ['new'], 'kibbeling'),
  c('gehaktbal', 'Gehaktbal', 'Dutch', 'Dinner', 'Easy', 20, 30, 4, 0, 0, [], ['new'], 'gehaktbal'),
  c('rookworst', 'Rookworst', 'Dutch', 'Dinner', 'Easy', 10, 20, 4, 0, 0, [], ['new'], 'rookworst'),
  c('kapsalon', 'Kapsalon', 'Dutch', 'Dinner', 'Easy', 20, 25, 4, 0, 0, ['Gluten-Free'], ['new'], 'kapsalon'),
  c('boterkoek', 'Boterkoek', 'Dutch', 'Baking', 'Easy', 15, 30, 12, 0, 0, ['Vegetarian'], ['new'], 'boterkoek'),
  c('gevulde-koeken', 'Gevulde Koeken', 'Dutch', 'Baking', 'Medium', 40, 20, 12, 0, 0, ['Vegetarian'], ['new'], 'gevulde koeken'),
  c('tompouce', 'Tompouce', 'Dutch', 'Desserts', 'Hard', 40, 15, 8, 0, 0, ['Vegetarian'], ['new'], 'tompouce'),
  c('vlaai', 'Vlaai', 'Dutch', 'Baking', 'Medium', 30, 40, 10, 0, 0, ['Vegetarian'], ['new'], 'vlaai'),
  c('callos-a-la-madrilena', 'Callos a la Madrilena', 'Spanish', 'Dinner', 'Medium', 20, 150, 6, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'callos a la madrilena'),
  c('boquerones-en-vinagre', 'Boquerones en Vinagre', 'Spanish', 'Appetizers', 'Easy', 15, 0, 4, 0, 0, [], ['new'], 'boquerones en vinagre'),
  c('boquerones-fritos', 'Boquerones Fritos', 'Spanish', 'Appetizers', 'Easy', 15, 10, 4, 0, 0, ['Dairy-Free'], ['new'], 'boquerones fritos'),
  c('merluza-a-la-vasca', 'Merluza a la Vasca', 'Spanish', 'Dinner', 'Medium', 20, 25, 4, 0, 0, ['Dairy-Free'], ['new'], 'merluza a la vasca'),
  c('zarzuela-de-pescado', 'Zarzuela de Pescado', 'Spanish', 'Dinner', 'Medium', 30, 40, 6, 0, 0, ['Dairy-Free'], ['new'], 'zarzuela de pescado')
];
