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
 * Spread: Italian 99, German 1.
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
  c('spaghetti-alla-bottarga', 'Spaghetti alla Bottarga', 'Italian', 'Quick Meals', 'Easy', 5, 12, 4, 0, 0, ['Dairy-Free'], ['new'], 'spaghetti alla bottarga'),
  c('spaghetti-con-le-cozze', 'Spaghetti con le Cozze', 'Italian', 'Dinner', 'Easy', 15, 20, 4, 0, 0, ['Dairy-Free'], ['new'], 'spaghetti con le cozze'),
  c('linguine-allo-scoglio', 'Linguine allo Scoglio', 'Italian', 'Dinner', 'Medium', 20, 25, 4, 0, 0, ['Dairy-Free'], ['new'], 'linguine allo scoglio'),
  c('cavatelli-con-broccoli', 'Cavatelli con Broccoli', 'Italian', 'Dinner', 'Easy', 10, 20, 4, 0, 0, [], ['new'], 'cavatelli con broccoli'),
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
  c('trenette-al-pesto', 'Trenette al Pesto', 'Italian', 'Quick Meals', 'Easy', 10, 15, 4, 0, 0, [], ['new'], 'trenette al pesto'),
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
  c('cotechino-con-lenticchie', 'Cotechino con Lenticchie', 'Italian', 'Holiday Specials', 'Medium', 15, 150, 6, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'cotechino con lenticchie'),
  c('crostini-toscani', 'Crostini Toscani', 'Italian', 'Appetizers', 'Easy', 15, 10, 8, 0, 0, [], ['new'], 'crostini toscani'),
  c('tramezzini', 'Tramezzini', 'Italian', 'Lunch', 'Easy', 15, 0, 6, 0, 0, [], ['new'], 'tramezzini'),
  c('tortellini-panna-e-prosciutto', 'Tortellini Panna e Prosciutto', 'Italian', 'Quick Meals', 'Easy', 5, 15, 4, 0, 0, [], ['new'], 'tortellini panna e prosciutto'),
  c('mozzarella-in-carrozza', 'Mozzarella in Carrozza', 'Italian', 'Appetizers', 'Easy', 15, 10, 4, 0, 0, ['Vegetarian'], ['new'], 'mozzarella in carrozza'),
  c('gelato-al-pistacchio', 'Gelato al Pistacchio', 'Italian', 'Desserts', 'Medium', 20, 20, 8, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'gelato al pistacchio'),
  c('gelato-al-cioccolato', 'Gelato al Cioccolato', 'Italian', 'Desserts', 'Medium', 20, 20, 8, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'gelato al cioccolato'),
  c('spumoni', 'Spumoni', 'Italian', 'Desserts', 'Medium', 40, 0, 10, 0, 0, ['Vegetarian'], ['new'], 'spumoni'),
  c('pesche-ripiene', 'Pesche Ripiene', 'Italian', 'Desserts', 'Easy', 20, 35, 6, 0, 0, ['Vegetarian'], ['new'], 'pesche ripiene'),
  c('pere-al-vino-rosso', 'Pere al Vino Rosso', 'Italian', 'Desserts', 'Easy', 10, 40, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'pere al vino rosso'),
  c('zuccotto', 'Zuccotto', 'Italian', 'Desserts', 'Medium', 40, 0, 10, 0, 0, ['Vegetarian'], ['new'], 'zuccotto'),
  c('budino-al-cioccolato', 'Budino al Cioccolato', 'Italian', 'Desserts', 'Easy', 10, 10, 4, 0, 0, ['Vegetarian'], ['new'], 'budino al cioccolato'),
  c('budino-di-riso', 'Budino di Riso', 'Italian', 'Desserts', 'Easy', 10, 40, 6, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'budino di riso'),
  c('cornetti', 'Cornetti', 'Italian', 'Baking', 'Medium', 60, 20, 12, 0, 0, ['Vegetarian'], ['new'], 'cornetti'),
  c('pasticciotto', 'Pasticciotto', 'Italian', 'Baking', 'Medium', 40, 30, 12, 0, 0, ['Vegetarian'], ['new'], 'pasticciotto'),
  c('baci-di-dama', 'Baci di Dama', 'Italian', 'Baking', 'Medium', 30, 15, 30, 0, 0, ['Vegetarian'], ['new'], 'baci di dama'),
  c('torta-margherita', 'Torta Margherita', 'Italian', 'Baking', 'Easy', 20, 40, 10, 0, 0, ['Vegetarian'], ['new'], 'torta margherita'),
  c('torta-di-noci', 'Torta di Noci', 'Italian', 'Baking', 'Easy', 20, 40, 10, 0, 0, ['Vegetarian'], ['new'], 'torta di noci'),
  c('tigelle', 'Tigelle', 'Italian', 'Baking', 'Easy', 20, 15, 12, 0, 0, [], ['new'], 'tigelle'),
  c('crostata-alla-nutella', 'Crostata alla Nutella', 'Italian', 'Baking', 'Easy', 20, 35, 8, 0, 0, ['Vegetarian'], ['new'], 'crostata alla nutella'),
  c('crostata-di-ricotta', 'Crostata di Ricotta', 'Italian', 'Baking', 'Easy', 25, 45, 8, 0, 0, ['Vegetarian'], ['new'], 'crostata di ricotta'),
  c('crostata-alle-fragole', 'Crostata alle Fragole', 'Italian', 'Baking', 'Easy', 30, 30, 8, 0, 0, ['Vegetarian'], ['new'], 'crostata alle fragole'),
  c('sbrisolona-mantovana', 'Sbrisolona Mantovana', 'Italian', 'Baking', 'Easy', 20, 35, 10, 0, 0, [], ['new'], 'sbrisolona mantovana'),
  c('pizza-quattro-stagioni', 'Pizza Quattro Stagioni', 'Italian', 'Dinner', 'Medium', 20, 8, 2, 0, 0, [], ['new'], 'pizza quattro stagioni'),
  c('pizza-capricciosa', 'Pizza Capricciosa', 'Italian', 'Dinner', 'Medium', 20, 8, 2, 0, 0, [], ['new'], 'pizza capricciosa'),
  c('pizza-marinara', 'Pizza Marinara', 'Italian', 'Dinner', 'Medium', 20, 8, 2, 0, 0, ['Vegetarian'], ['new'], 'pizza marinara'),
  c('pizza-quattro-formaggi', 'Pizza Quattro Formaggi', 'Italian', 'Dinner', 'Medium', 20, 8, 2, 0, 0, [], ['new'], 'pizza quattro formaggi'),
  c('focaccia-di-recco', 'Focaccia di Recco', 'Italian', 'Baking', 'Medium', 40, 20, 6, 0, 0, ['Vegetarian'], ['new'], 'focaccia di recco'),
  c('focaccia-pugliese', 'Focaccia Pugliese', 'Italian', 'Baking', 'Medium', 25, 30, 8, 0, 0, ['Vegetarian'], ['new'], 'focaccia pugliese'),
  c('bruschetta-al-pomodoro', 'Bruschetta al Pomodoro', 'Italian', 'Appetizers', 'Easy', 10, 5, 4, 0, 0, ['Vegetarian'], ['new'], 'bruschetta al pomodoro'),
  c('carciofi-ripieni', 'Carciofi Ripieni', 'Italian', 'Dinner', 'Easy', 25, 45, 4, 0, 0, [], ['new'], 'carciofi ripieni'),
  c('lasagne-bianche', 'Lasagne Bianche', 'Italian', 'Dinner', 'Medium', 30, 55, 6, 0, 0, [], ['new'], 'lasagne bianche'),
  c('cannelloni-ricotta-e-spinaci', 'Cannelloni Ricotta e Spinaci', 'Italian', 'Dinner', 'Medium', 30, 40, 6, 0, 0, [], ['new'], 'cannelloni ricotta e spinaci'),
  c('conchiglioni-ripieni', 'Conchiglioni Ripieni', 'Italian', 'Dinner', 'Easy', 25, 40, 6, 0, 0, [], ['new'], 'conchiglioni ripieni'),
  c('tagliolini-al-tartufo', 'Tagliolini al Tartufo', 'Italian', 'Dinner', 'Medium', 30, 3, 4, 0, 0, [], ['new'], 'tagliolini al tartufo'),
  c('penne-al-gorgonzola', 'Penne al Gorgonzola', 'Italian', 'Quick Meals', 'Easy', 5, 15, 4, 0, 0, ['Vegetarian'], ['new'], 'penne al gorgonzola'),
  c('rigatoni-allamatriciana', 'Rigatoni all\'Amatriciana', 'Italian', 'Dinner', 'Easy', 10, 25, 4, 0, 0, [], ['new'], 'rigatoni all\'amatriciana'),
  c('risotto-allo-zafferano', 'Risotto allo Zafferano', 'Italian', 'Dinner', 'Easy', 10, 30, 4, 0, 0, [], ['new'], 'risotto allo zafferano'),
  c('uova-in-purgatorio', 'Uova in Purgatorio', 'Italian', 'Dinner', 'Easy', 10, 15, 4, 0, 0, [], ['new'], 'uova in purgatorio'),
  c('torta-di-carote', 'Torta di Carote', 'Italian', 'Baking', 'Easy', 20, 45, 10, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'torta di carote'),
  c('torta-al-mascarpone', 'Torta al Mascarpone', 'Italian', 'Baking', 'Medium', 25, 45, 10, 0, 0, ['Vegetarian'], ['new'], 'torta al mascarpone'),
  c('torta-di-castagne', 'Torta di Castagne', 'Italian', 'Baking', 'Medium', 20, 40, 10, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'torta di castagne'),
  c('tiramisu-alle-fragole', 'Tiramisu alle Fragole', 'Italian', 'Desserts', 'Easy', 30, 0, 8, 0, 0, ['Vegetarian'], ['new'], 'tiramisu alle fragole'),
  c('panna-cotta-ai-frutti-di-bosco', 'Panna Cotta ai Frutti di Bosco', 'Italian', 'Desserts', 'Easy', 15, 5, 6, 0, 0, ['Gluten-Free'], ['new'], 'panna cotta ai frutti di bosco'),
  c('crespelle', 'Crespelle', 'Italian', 'Desserts', 'Easy', 15, 15, 6, 0, 0, ['Vegetarian'], ['new'], 'crespelle'),
  c('bomboloni-al-forno', 'Bomboloni al Forno', 'Italian', 'Baking', 'Medium', 40, 20, 12, 0, 0, ['Vegetarian'], ['new'], 'bomboloni al forno'),
  c('limoncello', 'Limoncello', 'Italian', 'Drinks', 'Medium', 15, 5, 10, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'limoncello'),
  c('spritz-veneziano', 'Spritz Veneziano', 'Italian', 'Drinks', 'Easy', 5, 0, 2, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'spritz veneziano'),
  c('bicerin', 'Bicerin', 'Italian', 'Drinks', 'Easy', 5, 5, 2, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'bicerin'),
  c('schweinebraten', 'Schweinebraten', 'German', 'Dinner', 'Medium', 20, 120, 6, 0, 0, ['Dairy-Free'], ['new'], 'schweinebraten')
];
