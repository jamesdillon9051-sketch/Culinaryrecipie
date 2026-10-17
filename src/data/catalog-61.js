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
 * Spread: Spanish 41, Portuguese 26, Greek 24, Maltese 5, Cypriot 2, Polish 2.
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
  c('montaditos', 'Montaditos', 'Spanish', 'Appetizers', 'Easy', 20, 10, 8, 0, 0, [], ['new'], 'montaditos'),
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
  c('conejo-al-ajillo', 'Conejo al Ajillo', 'Spanish', 'Dinner', 'Medium', 15, 60, 4, 0, 0, [], ['new'], 'conejo al ajillo'),
  c('lomo-adobado', 'Lomo Adobado', 'Spanish', 'Dinner', 'Easy', 10, 25, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'lomo adobado'),
  c('arroz-caldoso', 'Arroz Caldoso', 'Spanish', 'Dinner', 'Medium', 25, 40, 4, 0, 0, ['Dairy-Free'], ['new'], 'arroz caldoso'),
  c('mejillones-a-la-marinera', 'Mejillones a la Marinera', 'Spanish', 'Appetizers', 'Easy', 10, 10, 4, 0, 0, [], ['new'], 'mejillones a la marinera'),
  c('pulpo-a-feira', 'Pulpo a Feira', 'Spanish', 'Appetizers', 'Medium', 10, 60, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'pulpo a feira'),
  c('dorada-a-la-sal', 'Dorada a la Sal', 'Spanish', 'Dinner', 'Medium', 15, 35, 2, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'dorada a la sal'),
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
  c('sopa-de-pedra', 'Sopa de Pedra', 'Portuguese', 'Dinner', 'Medium', 20, 120, 6, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'sopa de pedra'),
  c('acorda-alentejana', 'Acorda Alentejana', 'Portuguese', 'Dinner', 'Easy', 15, 15, 4, 0, 0, ['Vegetarian'], ['new'], 'acorda alentejana'),
  c('ameijoas-a-bulhao-pato', 'Amêijoas à Bulhão Pato', 'Portuguese', 'Dinner', 'Easy', 10, 10, 4, 0, 0, [], ['new'], 'amêijoas à bulhão pato'),
  c('caldeirada-de-peixe', 'Caldeirada de Peixe', 'Portuguese', 'Dinner', 'Medium', 20, 40, 6, 0, 0, ['Gluten-Free'], ['new'], 'caldeirada de peixe'),
  c('pao-de-lo', 'Pao de Lo', 'Portuguese', 'Baking', 'Medium', 30, 40, 10, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'pao de lo'),
  c('pao-de-deus', 'Pao de Deus', 'Portuguese', 'Baking', 'Medium', 40, 25, 10, 0, 0, ['Vegetarian'], ['new'], 'pao de deus'),
  c('broa-de-milho', 'Broa de Milho', 'Portuguese', 'Baking', 'Easy', 20, 35, 8, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'broa de milho'),
  c('ovos-moles', 'Ovos Moles', 'Portuguese', 'Desserts', 'Medium', 25, 20, 12, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'ovos moles'),
  c('toucinho-do-ceu', 'Toucinho do Ceu', 'Portuguese', 'Desserts', 'Medium', 20, 40, 10, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'toucinho do ceu'),
  c('arroz-de-tomate', 'Arroz de Tomate', 'Portuguese', 'Dinner', 'Easy', 15, 35, 4, 0, 0, ['Dairy-Free'], ['new'], 'arroz de tomate'),
  c('bolinhos-de-bacalhau', 'Bolinhos de Bacalhau', 'Portuguese', 'Appetizers', 'Easy', 25, 10, 8, 0, 0, [], ['new'], 'bolinhos de bacalhau'),
  c('chourico-assado', 'Chourico Assado', 'Portuguese', 'Appetizers', 'Easy', 10, 15, 6, 0, 0, ['Vegetarian'], ['new'], 'chourico assado'),
  c('migas-portuguesas', 'Migas Portuguesas', 'Portuguese', 'Dinner', 'Easy', 15, 20, 4, 0, 0, [], ['new'], 'migas portuguesas'),
  c('carne-de-porco-a-alentejana', 'Carne de Porco a Alentejana', 'Portuguese', 'Dinner', 'Medium', 20, 40, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'carne de porco a alentejana'),
  c('bacalhau-com-grao', 'Bacalhau com Grao', 'Portuguese', 'Dinner', 'Easy', 15, 25, 4, 0, 0, ['Gluten-Free'], ['new'], 'bacalhau com grao'),
  c('arroz-de-cabidela', 'Arroz de Cabidela', 'Portuguese', 'Dinner', 'Medium', 25, 60, 6, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'arroz de cabidela'),
  c('leitao-da-bairrada', 'Leitao da Bairrada', 'Portuguese', 'Dinner', 'Medium', 20, 240, 6, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'leitao da bairrada'),
  c('sopa-de-feijao-verde', 'Sopa de Feijao Verde', 'Portuguese', 'Lunch', 'Easy', 15, 40, 6, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'sopa de feijao verde'),
  c('giouvetsi', 'Giouvetsi', 'Greek', 'Dinner', 'Medium', 20, 90, 6, 0, 0, [], ['new'], 'giouvetsi'),
  c('halva', 'Halva', 'Greek', 'Desserts', 'Easy', 10, 25, 12, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'halva'),
  c('melomakarona', 'Melomakarona', 'Greek', 'Holiday Specials', 'Easy', 25, 30, 30, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'melomakarona'),
  c('kourabiedes', 'Kourabiedes', 'Greek', 'Holiday Specials', 'Easy', 25, 20, 30, 0, 0, ['Vegetarian'], ['new'], 'kourabiedes'),
  c('kolokithokeftedes', 'Kolokithokeftedes', 'Greek', 'Appetizers', 'Easy', 20, 20, 6, 0, 0, ['Vegetarian'], ['new'], 'kolokithokeftedes'),
  c('bougatsa', 'Bougatsa', 'Greek', 'Breakfast', 'Medium', 40, 35, 8, 0, 0, ['Vegetarian'], ['new'], 'bougatsa'),
  c('koulouri', 'Koulouri', 'Greek', 'Baking', 'Medium', 25, 25, 6, 0, 0, ['Vegetarian'], ['new'], 'koulouri'),
  c('psari-plaki', 'Psari Plaki', 'Greek', 'Dinner', 'Easy', 20, 40, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'psari plaki'),
  c('htapodi-krasato', 'Htapodi Krasato', 'Greek', 'Dinner', 'Medium', 20, 70, 4, 0, 0, [], ['new'], 'htapodi krasato'),
  c('kolokithopita', 'Kolokithopita', 'Greek', 'Dinner', 'Easy', 25, 50, 6, 0, 0, ['Vegetarian'], ['new'], 'kolokithopita'),
  c('hortopita', 'Hortopita', 'Greek', 'Dinner', 'Medium', 40, 50, 8, 0, 0, ['Vegetarian'], ['new'], 'hortopita'),
  c('lahanodolmades', 'Lahanodolmades', 'Greek', 'Dinner', 'Medium', 40, 60, 6, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'lahanodolmades'),
  c('spetsofai', 'Spetsofai', 'Greek', 'Dinner', 'Easy', 15, 40, 4, 0, 0, [], ['new'], 'spetsofai'),
  c('bifteki', 'Bifteki', 'Greek', 'Dinner', 'Easy', 15, 15, 4, 0, 0, [], ['new'], 'bifteki'),
  c('soutzoukakia', 'Soutzoukakia', 'Greek', 'Dinner', 'Medium', 25, 40, 4, 0, 0, [], ['new'], 'soutzoukakia'),
  c('tirokafteri', 'Tirokafteri', 'Greek', 'Appetizers', 'Easy', 10, 0, 6, 0, 0, ['Vegetarian'], ['new'], 'tirokafteri'),
  c('bamies', 'Bamies', 'Greek', 'Dinner', 'Easy', 10, 35, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'bamies'),
  c('revithia', 'Revithia', 'Greek', 'Dinner', 'Easy', 10, 35, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'revithia'),
  c('domatokeftedes', 'Domatokeftedes', 'Greek', 'Appetizers', 'Easy', 15, 15, 6, 0, 0, ['Vegetarian'], ['new'], 'domatokeftedes'),
  c('karidopita', 'Karidopita', 'Greek', 'Baking', 'Easy', 20, 50, 12, 0, 0, ['Vegetarian'], ['new'], 'karidopita'),
  c('portokalopita', 'Portokalopita', 'Greek', 'Baking', 'Easy', 15, 45, 12, 0, 0, ['Vegetarian'], ['new'], 'portokalopita'),
  c('rizogalo', 'Rizogalo', 'Greek', 'Desserts', 'Easy', 10, 45, 6, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'rizogalo'),
  c('freddo-cappuccino', 'Freddo Cappuccino', 'Greek', 'Drinks', 'Easy', 5, 0, 2, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'freddo cappuccino'),
  c('greek-easter-soup-magiritsa', 'Greek Easter Soup Magiritsa', 'Greek', 'Holiday Specials', 'Medium', 20, 60, 6, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'greek easter soup magiritsa'),
  c('maltese-pastizzi', 'Maltese Pastizzi', 'Maltese', 'Appetizers', 'Medium', 40, 25, 12, 0, 0, ['Vegetarian'], ['new'], 'maltese pastizzi'),
  c('maltese-rabbit-stew', 'Maltese Rabbit Stew', 'Maltese', 'Dinner', 'Medium', 20, 90, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'maltese rabbit stew'),
  c('timpana', 'Timpana', 'Maltese', 'Dinner', 'Medium', 40, 45, 8, 0, 0, [], ['new'], 'timpana'),
  c('lampuki-pie', 'Lampuki Pie', 'Maltese', 'Dinner', 'Medium', 30, 50, 6, 0, 0, [], ['new'], 'lampuki pie'),
  c('imqaret', 'Imqaret', 'Maltese', 'Desserts', 'Medium', 40, 20, 20, 0, 0, ['Vegetarian'], ['new'], 'imqaret'),
  c('cypriot-souvla', 'Cypriot Souvla', 'Cypriot', 'Dinner', 'Easy', 20, 30, 4, 0, 0, [], ['new'], 'cypriot souvla'),
  c('cypriot-tahini-pies', 'Cypriot Tahini Pies', 'Cypriot', 'Baking', 'Medium', 40, 25, 8, 0, 0, ['Vegetarian'], ['new'], 'cypriot tahini pies'),
  c('kotlet-schabowy', 'Kotlet Schabowy', 'Polish', 'Dinner', 'Easy', 20, 20, 4, 0, 0, [], ['new'], 'kotlet schabowy'),
  c('krupnik', 'Krupnik', 'Polish', 'Dinner', 'Easy', 15, 60, 6, 0, 0, [], ['new'], 'krupnik')
];
