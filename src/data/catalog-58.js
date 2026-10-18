'use strict';

/**
 * Weekly Delight — recipe catalog, volume fifty-eight.
 * One hundred more of the dishes people in the countries of the European Union look for by name.
 * They are dishes that cooks in the countries of the European Union look for by
 * name; no search-volume data was used to pick or rank them.
 *
 * Every name was tried against the recipes already published, with
 * tools/dedupe-candidates.js, then compared by hand with the closest existing
 * recipes, and the dishes that were the same under another name were dropped.
 *
 * Spread: French 69, Italian 20, Belgian 6, Luxembourgish 5.
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
  c('canneles', 'Canneles', 'French', 'Baking', 'Medium', 15, 60, 12, 0, 0, ['Vegetarian'], ['new'], 'canneles'),
  c('lapin-a-la-moutarde', 'Lapin a la Moutarde', 'French', 'Dinner', 'Medium', 20, 80, 4, 0, 0, [], ['new'], 'lapin a la moutarde'),
  c('bourride', 'Bourride', 'French', 'Dinner', 'Medium', 30, 30, 4, 0, 0, [], ['new'], 'bourride'),
  c('tian-provencal', 'Tian Provencal', 'French', 'Dinner', 'Easy', 20, 45, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'tian provencal'),
  c('pommes-anna', 'Pommes Anna', 'French', 'Dinner', 'Medium', 20, 50, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'pommes anna'),
  c('pommes-dauphine', 'Pommes Dauphine', 'French', 'Appetizers', 'Medium', 40, 65, 6, 0, 0, ['Vegetarian'], ['new'], 'pommes dauphine'),
  c('petits-pois-a-la-francaise', 'Petits Pois a la Francaise', 'French', 'Dinner', 'Easy', 10, 20, 4, 0, 0, [], ['new'], 'petits pois a la francaise'),
  c('haricots-verts-amandine', 'Haricots Verts Amandine', 'French', 'Quick Meals', 'Easy', 5, 10, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'haricots verts amandine'),
  c('tarte-aux-fraises', 'Tarte aux Fraises', 'French', 'Desserts', 'Medium', 40, 20, 8, 0, 0, ['Vegetarian'], ['new'], 'tarte aux fraises'),
  c('tarte-aux-poireaux', 'Tarte aux Poireaux', 'French', 'Lunch', 'Easy', 20, 55, 6, 0, 0, ['Vegetarian'], ['new'], 'tarte aux poireaux'),
  c('tarte-a-loignon', 'Tarte a l\'Oignon', 'French', 'Lunch', 'Easy', 25, 75, 6, 0, 0, ['Vegetarian'], ['new'], 'tarte a l\'oignon'),
  c('gateau-de-savoie', 'Gateau de Savoie', 'French', 'Baking', 'Medium', 25, 40, 10, 0, 0, ['Vegetarian'], ['new'], 'gateau de savoie'),
  c('fondant-au-chocolat', 'Fondant au Chocolat', 'French', 'Desserts', 'Easy', 15, 12, 4, 0, 0, ['Vegetarian'], ['new'], 'fondant au chocolat'),
  c('savarin', 'Savarin', 'French', 'Desserts', 'Medium', 30, 25, 8, 0, 0, ['Vegetarian'], ['new'], 'savarin'),
  c('veloute-de-champignons', 'Veloute de Champignons', 'French', 'Lunch', 'Easy', 10, 25, 4, 0, 0, [], ['new'], 'veloute de champignons'),
  c('joue-de-boeuf', 'Joue de Boeuf', 'French', 'Dinner', 'Medium', 20, 180, 4, 0, 0, ['Dairy-Free'], ['new'], 'joue de boeuf'),
  c('paupiettes-de-veau', 'Paupiettes de Veau', 'French', 'Dinner', 'Medium', 30, 60, 4, 0, 0, [], ['new'], 'paupiettes de veau'),
  c('tournedos-rossini', 'Tournedos Rossini', 'French', 'Dinner', 'Hard', 20, 15, 2, 0, 0, [], ['new'], 'tournedos rossini'),
  c('foie-gras', 'Foie Gras', 'French', 'Appetizers', 'Medium', 10, 5, 2, 0, 0, [], ['new'], 'foie gras'),
  c('tuiles-aux-amandes', 'Tuiles aux Amandes', 'French', 'Baking', 'Easy', 15, 10, 20, 0, 0, ['Vegetarian'], ['new'], 'tuiles aux amandes'),
  c('nougat-de-montelimar', 'Nougat de Montelimar', 'French', 'Desserts', 'Hard', 20, 25, 24, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'nougat de montelimar'),
  c('tarte-bourdaloue', 'Tarte Bourdaloue', 'French', 'Desserts', 'Medium', 30, 40, 8, 0, 0, ['Vegetarian'], ['new'], 'tarte bourdaloue'),
  c('poire-belle-helene', 'Poire Belle Helene', 'French', 'Desserts', 'Easy', 10, 25, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'poire belle helene'),
  c('soupe-aux-choux', 'Soupe Aux Choux', 'French', 'Dinner', 'Easy', 15, 60, 6, 0, 0, ['Dairy-Free'], ['new'], 'soupe aux choux'),
  c('salade-de-gesiers', 'Salade de Gesiers', 'French', 'Lunch', 'Medium', 20, 20, 4, 0, 0, ['Dairy-Free'], ['new'], 'salade de gesiers'),
  c('cake-sale', 'Cake Sale', 'French', 'Appetizers', 'Easy', 15, 45, 10, 0, 0, [], ['new'], 'cake sale'),
  c('tarte-tropezienne', 'Tarte Tropezienne', 'French', 'Baking', 'Hard', 60, 25, 10, 0, 0, ['Vegetarian'], ['new'], 'tarte tropezienne'),
  c('bugnes', 'Bugnes', 'French', 'Holiday Specials', 'Medium', 25, 10, 20, 0, 0, ['Vegetarian'], ['new'], 'bugnes'),
  c('baeckeoffe', 'Baeckeoffe', 'French', 'Dinner', 'Medium', 30, 180, 6, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'baeckeoffe'),
  c('bretzel-alsacien', 'Bretzel Alsacien', 'French', 'Baking', 'Medium', 40, 15, 8, 0, 0, ['Vegetarian'], ['new'], 'bretzel alsacien'),
  c('pounti', 'Pounti', 'French', 'Dinner', 'Easy', 20, 60, 6, 0, 0, [], ['new'], 'pounti'),
  c('potee-auvergnate', 'Potee Auvergnate', 'French', 'Dinner', 'Easy', 20, 120, 6, 0, 0, [], ['new'], 'potee auvergnate'),
  c('lapin-chasseur', 'Lapin Chasseur', 'French', 'Dinner', 'Medium', 20, 75, 4, 0, 0, [], ['new'], 'lapin chasseur'),
  c('poulet-vallee-dauge', 'Poulet Vallee d\'Auge', 'French', 'Dinner', 'Medium', 15, 50, 4, 0, 0, ['Gluten-Free'], ['new'], 'poulet vallee d\'auge'),
  c('poulet-au-vinaigre', 'Poulet au Vinaigre', 'French', 'Dinner', 'Medium', 15, 45, 4, 0, 0, [], ['new'], 'poulet au vinaigre'),
  c('poulet-a-lestragon', 'Poulet a l\'Estragon', 'French', 'Dinner', 'Easy', 15, 40, 4, 0, 0, [], ['new'], 'poulet a l\'estragon'),
  c('poulet-marengo', 'Poulet Marengo', 'French', 'Dinner', 'Medium', 20, 50, 4, 0, 0, [], ['new'], 'poulet marengo'),
  c('gigot-de-sept-heures', 'Gigot de Sept Heures', 'French', 'Dinner', 'Medium', 20, 420, 8, 0, 0, ['Dairy-Free'], ['new'], 'gigot de sept heures'),
  c('ris-de-veau', 'Ris de Veau', 'French', 'Dinner', 'Hard', 30, 25, 4, 0, 0, [], ['new'], 'ris de veau'),
  c('roti-de-porc-au-lait', 'Rôti de Porc au Lait', 'French', 'Dinner', 'Easy', 15, 90, 6, 0, 0, ['Gluten-Free'], ['new'], 'rôti de porc au lait'),
  c('filet-de-porc-moutarde', 'Filet de Porc Moutarde', 'French', 'Dinner', 'Easy', 15, 40, 4, 0, 0, [], ['new'], 'filet de porc moutarde'),
  c('jambon-braise-madere', 'Jambon Braise Madere', 'French', 'Dinner', 'Easy', 15, 145, 8, 0, 0, [], ['new'], 'jambon braise madere'),
  c('dorade-royale', 'Dorade Royale', 'French', 'Dinner', 'Easy', 10, 25, 2, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'dorade royale'),
  c('soupe-de-moules', 'Soupe de Moules', 'French', 'Lunch', 'Easy', 15, 25, 4, 0, 0, ['Gluten-Free'], ['new'], 'soupe de moules'),
  c('tarte-fine-aux-tomates', 'Tarte Fine aux Tomates', 'French', 'Lunch', 'Easy', 15, 25, 4, 0, 0, ['Vegetarian'], ['new'], 'tarte fine aux tomates'),
  c('gratin-de-blettes', 'Gratin de Blettes', 'French', 'Dinner', 'Easy', 20, 40, 4, 0, 0, ['Vegetarian'], ['new'], 'gratin de blettes'),
  c('epinards-a-la-creme', 'Epinards a la Creme', 'French', 'Dinner', 'Easy', 10, 15, 4, 0, 0, ['Vegetarian'], ['new'], 'epinards a la creme'),
  c('carottes-vichy', 'Carottes Vichy', 'French', 'Dinner', 'Easy', 10, 25, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'carottes vichy'),
  c('salade-de-betteraves', 'Salade de Betteraves', 'French', 'Healthy', 'Easy', 15, 0, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'salade de betteraves'),
  c('pommes-sarladaises', 'Pommes Sarladaises', 'French', 'Dinner', 'Easy', 15, 30, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'pommes sarladaises'),
  c('pommes-lyonnaises', 'Pommes Lyonnaises', 'French', 'Dinner', 'Easy', 15, 30, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'pommes lyonnaises'),
  c('tarte-a-la-rhubarbe', 'Tarte a la Rhubarbe', 'French', 'Desserts', 'Easy', 25, 55, 8, 0, 0, ['Vegetarian'], ['new'], 'tarte a la rhubarbe'),
  c('tarte-aux-abricots', 'Tarte aux Abricots', 'French', 'Desserts', 'Easy', 25, 40, 8, 0, 0, ['Vegetarian'], ['new'], 'tarte aux abricots'),
  c('tarte-au-chocolat', 'Tarte au Chocolat', 'French', 'Desserts', 'Medium', 30, 30, 10, 0, 0, ['Vegetarian'], ['new'], 'tarte au chocolat'),
  c('gateau-nantais', 'Gateau Nantais', 'French', 'Baking', 'Easy', 20, 45, 10, 0, 0, ['Vegetarian'], ['new'], 'gateau nantais'),
  c('gateau-breton', 'Gateau Breton', 'French', 'Baking', 'Easy', 20, 40, 10, 0, 0, ['Vegetarian'], ['new'], 'gateau breton'),
  c('cake-au-citron', 'Cake au Citron', 'French', 'Baking', 'Easy', 15, 50, 10, 0, 0, ['Vegetarian'], ['new'], 'cake au citron'),
  c('moelleux-aux-pommes', 'Moelleux aux Pommes', 'French', 'Baking', 'Easy', 20, 40, 8, 0, 0, ['Vegetarian'], ['new'], 'moelleux aux pommes'),
  c('charlotte-aux-fraises', 'Charlotte aux Fraises', 'French', 'Desserts', 'Hard', 45, 10, 10, 0, 0, [], ['new'], 'charlotte aux fraises'),
  c('bavarois', 'Bavarois', 'French', 'Desserts', 'Medium', 25, 5, 8, 0, 0, ['Gluten-Free'], ['new'], 'bavarois'),
  c('genoise', 'Genoise', 'French', 'Baking', 'Medium', 25, 30, 8, 0, 0, ['Vegetarian'], ['new'], 'genoise'),
  c('vacherin-aux-fraises', 'Vacherin aux Fraises', 'French', 'Desserts', 'Medium', 30, 90, 8, 0, 0, ['Vegetarian'], ['new'], 'vacherin aux fraises'),
  c('pate-a-choux', 'Pate a Choux', 'French', 'Baking', 'Medium', 20, 30, 20, 0, 0, ['Vegetarian'], ['new'], 'pate a choux'),
  c('chantilly', 'Chantilly', 'French', 'Desserts', 'Easy', 5, 0, 8, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'chantilly'),
  c('sabayon', 'Sabayon', 'French', 'Desserts', 'Medium', 10, 10, 4, 0, 0, ['Vegetarian', 'Dairy-Free', 'Gluten-Free'], ['new'], 'sabayon'),
  c('langues-de-chat', 'Langues de Chat', 'French', 'Baking', 'Easy', 15, 10, 40, 0, 0, ['Vegetarian'], ['new'], 'langues de chat'),
  c('marrons-glaces', 'Marrons Glaces', 'French', 'Desserts', 'Hard', 30, 60, 20, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'marrons glaces'),
  c('confiture-de-fraises', 'Confiture de Fraises', 'French', 'Breakfast', 'Easy', 15, 30, 20, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'confiture de fraises'),
  c('sauce-veloute', 'Sauce Veloute', 'French', 'Dinner', 'Easy', 5, 20, 6, 0, 0, [], ['new'], 'sauce veloute'),
  c('gaufres-liegeoises', 'Gaufres Liegeoises', 'Belgian', 'Baking', 'Medium', 30, 20, 8, 0, 0, ['Vegetarian'], ['new'], 'gaufres liegeoises'),
  c('waterzooi', 'Waterzooi', 'Belgian', 'Dinner', 'Medium', 25, 40, 4, 0, 0, [], ['new'], 'waterzooi'),
  c('cuberdons', 'Cuberdons', 'Belgian', 'Desserts', 'Hard', 20, 60, 40, 0, 0, ['Vegetarian', 'Vegan'], ['new'], 'cuberdons'),
  c('chicons-au-gratin', 'Chicons au Gratin', 'Belgian', 'Dinner', 'Easy', 15, 40, 4, 0, 0, [], ['new'], 'chicons au gratin'),
  c('boulets-liegeois', 'Boulets Liegeois', 'Belgian', 'Dinner', 'Medium', 30, 40, 4, 0, 0, [], ['new'], 'boulets liegeois'),
  c('tarte-au-sucre-belge', 'Tarte au Sucre Belge', 'Belgian', 'Baking', 'Medium', 40, 20, 8, 0, 0, ['Vegetarian'], ['new'], 'tarte au sucre belge'),
  c('luxembourg-judd-mat-gaardebounen', 'Luxembourg Judd mat Gaardebounen', 'Luxembourgish', 'Dinner', 'Easy', 15, 90, 4, 0, 0, [], ['new'], 'luxembourg judd mat gaardebounen'),
  c('bouneschlupp', 'Bouneschlupp', 'Luxembourgish', 'Lunch', 'Easy', 15, 45, 4, 0, 0, ['Gluten-Free'], ['new'], 'bouneschlupp'),
  c('kniddelen', 'Kniddelen', 'Luxembourgish', 'Dinner', 'Easy', 20, 15, 4, 0, 0, [], ['new'], 'kniddelen'),
  c('gromperekichelcher', 'Gromperekichelcher', 'Luxembourgish', 'Appetizers', 'Easy', 20, 20, 6, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'gromperekichelcher'),
  c('quetschentaart', 'Quetschentaart', 'Luxembourgish', 'Baking', 'Easy', 20, 40, 8, 0, 0, ['Vegetarian'], ['new'], 'quetschentaart'),
  c('ravioli-di-ricotta-e-spinaci', 'Ravioli di Ricotta e Spinaci', 'Italian', 'Dinner', 'Medium', 50, 5, 4, 0, 0, [], ['new'], 'ravioli di ricotta e spinaci'),
  c('pizza-napoletana', 'Pizza Napoletana', 'Italian', 'Dinner', 'Medium', 20, 5, 2, 0, 0, ['Vegetarian'], ['new'], 'pizza napoletana'),
  c('pizza-al-taglio', 'Pizza al Taglio', 'Italian', 'Dinner', 'Medium', 20, 25, 8, 0, 0, ['Vegetarian'], ['new'], 'pizza al taglio'),
  c('focaccia-barese', 'Focaccia Barese', 'Italian', 'Baking', 'Medium', 25, 50, 8, 0, 0, ['Vegetarian'], ['new'], 'focaccia barese'),
  c('semifreddo', 'Semifreddo', 'Italian', 'Desserts', 'Medium', 25, 0, 8, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'semifreddo'),
  c('bombolone', 'Bombolone', 'Italian', 'Baking', 'Medium', 30, 15, 12, 0, 0, ['Vegetarian'], ['new'], 'bombolone'),
  c('polenta-taragna', 'Polenta Taragna', 'Italian', 'Dinner', 'Easy', 10, 50, 4, 0, 0, [], ['new'], 'polenta taragna'),
  c('tajarin-al-tartufo', 'Tajarin al Tartufo', 'Italian', 'Dinner', 'Medium', 40, 3, 4, 0, 0, [], ['new'], 'tajarin al tartufo'),
  c('pollo-alla-diavola', 'Pollo alla Diavola', 'Italian', 'Dinner', 'Easy', 15, 40, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'pollo alla diavola'),
  c('coniglio-alla-cacciatora', 'Coniglio alla Cacciatora', 'Italian', 'Dinner', 'Medium', 20, 70, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'coniglio alla cacciatora'),
  c('trippa-alla-fiorentina', 'Trippa alla Fiorentina', 'Italian', 'Dinner', 'Medium', 20, 120, 6, 0, 0, ['Gluten-Free'], ['new'], 'trippa alla fiorentina'),
  c('pomodori-ripieni', 'Pomodori Ripieni', 'Italian', 'Dinner', 'Easy', 20, 40, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'pomodori ripieni'),
  c('fagioli-alluccelletto', 'Fagioli all\'Uccelletto', 'Italian', 'Dinner', 'Easy', 10, 40, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'fagioli all\'uccelletto'),
  c('tortelli-di-zucca', 'Tortelli di Zucca', 'Italian', 'Dinner', 'Hard', 60, 5, 6, 0, 0, [], ['new'], 'tortelli di zucca'),
  c('seadas', 'Seadas', 'Italian', 'Desserts', 'Medium', 40, 10, 8, 0, 0, [], ['new'], 'seadas'),
  c('torta-di-mele', 'Torta di Mele', 'Italian', 'Baking', 'Easy', 20, 50, 8, 0, 0, ['Vegetarian'], ['new'], 'torta di mele'),
  c('torta-al-limone', 'Torta al Limone', 'Italian', 'Baking', 'Easy', 20, 45, 8, 0, 0, ['Vegetarian'], ['new'], 'torta al limone'),
  c('torta-di-ricotta', 'Torta di Ricotta', 'Italian', 'Baking', 'Easy', 20, 50, 8, 0, 0, ['Vegetarian'], ['new'], 'torta di ricotta'),
  c('biscotti-savoiardi', 'Biscotti Savoiardi', 'Italian', 'Baking', 'Medium', 30, 12, 24, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'biscotti savoiardi'),
  c('tortino-al-cioccolato', 'Tortino al Cioccolato', 'Italian', 'Desserts', 'Easy', 15, 12, 4, 0, 0, ['Vegetarian'], ['new'], 'tortino al cioccolato')
];
