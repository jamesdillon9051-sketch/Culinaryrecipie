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
 * Spread: French 50.
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
  c('lapin-a-la-moutarde', 'Lapin a la Moutarde', 'French', 'Dinner', 'Medium', 20, 60, 4, 0, 0, [], ['new'], 'lapin a la moutarde'),
  c('bourride', 'Bourride', 'French', 'Dinner', 'Medium', 30, 30, 4, 0, 0, [], ['new'], 'bourride'),
  c('tian-provencal', 'Tian Provencal', 'French', 'Dinner', 'Easy', 20, 45, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'tian provencal'),
  c('pommes-anna', 'Pommes Anna', 'French', 'Dinner', 'Medium', 20, 50, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'pommes anna'),
  c('pommes-dauphine', 'Pommes Dauphine', 'French', 'Appetizers', 'Medium', 40, 20, 6, 0, 0, ['Vegetarian'], ['new'], 'pommes dauphine'),
  c('petits-pois-a-la-francaise', 'Petits Pois a la Francaise', 'French', 'Dinner', 'Easy', 10, 20, 4, 0, 0, [], ['new'], 'petits pois a la francaise'),
  c('haricots-verts-amandine', 'Haricots Verts Amandine', 'French', 'Quick Meals', 'Easy', 5, 10, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'haricots verts amandine'),
  c('tarte-aux-fraises', 'Tarte aux Fraises', 'French', 'Desserts', 'Medium', 40, 20, 8, 0, 0, ['Vegetarian'], ['new'], 'tarte aux fraises'),
  c('tarte-aux-poireaux', 'Tarte aux Poireaux', 'French', 'Lunch', 'Easy', 20, 40, 6, 0, 0, ['Vegetarian'], ['new'], 'tarte aux poireaux'),
  c('tarte-a-loignon', 'Tarte a l\'Oignon', 'French', 'Lunch', 'Easy', 25, 40, 6, 0, 0, ['Vegetarian'], ['new'], 'tarte a l\'oignon'),
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
  c('lapin-chasseur', 'Lapin Chasseur', 'French', 'Dinner', 'Medium', 20, 60, 4, 0, 0, [], ['new'], 'lapin chasseur'),
  c('poulet-vallee-dauge', 'Poulet Vallee d\'Auge', 'French', 'Dinner', 'Medium', 15, 50, 4, 0, 0, ['Gluten-Free'], ['new'], 'poulet vallee d\'auge'),
  c('poulet-au-vinaigre', 'Poulet au Vinaigre', 'French', 'Dinner', 'Medium', 15, 45, 4, 0, 0, [], ['new'], 'poulet au vinaigre'),
  c('poulet-a-lestragon', 'Poulet a l\'Estragon', 'French', 'Dinner', 'Easy', 15, 40, 4, 0, 0, [], ['new'], 'poulet a l\'estragon'),
  c('poulet-marengo', 'Poulet Marengo', 'French', 'Dinner', 'Medium', 20, 50, 4, 0, 0, [], ['new'], 'poulet marengo'),
  c('gigot-de-sept-heures', 'Gigot de Sept Heures', 'French', 'Dinner', 'Medium', 20, 420, 8, 0, 0, ['Dairy-Free'], ['new'], 'gigot de sept heures'),
  c('ris-de-veau', 'Ris de Veau', 'French', 'Dinner', 'Hard', 30, 25, 4, 0, 0, [], ['new'], 'ris de veau'),
  c('roti-de-porc-au-lait', 'Rôti de Porc au Lait', 'French', 'Dinner', 'Easy', 15, 90, 6, 0, 0, ['Gluten-Free'], ['new'], 'rôti de porc au lait'),
  c('filet-de-porc-moutarde', 'Filet de Porc Moutarde', 'French', 'Dinner', 'Easy', 15, 40, 4, 0, 0, [], ['new'], 'filet de porc moutarde'),
  c('jambon-braise-madere', 'Jambon Braise Madere', 'French', 'Dinner', 'Easy', 15, 120, 8, 0, 0, [], ['new'], 'jambon braise madere'),
  c('dorade-royale', 'Dorade Royale', 'French', 'Dinner', 'Easy', 10, 25, 2, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'dorade royale'),
  c('soupe-de-moules', 'Soupe de Moules', 'French', 'Lunch', 'Easy', 15, 25, 4, 0, 0, ['Gluten-Free'], ['new'], 'soupe de moules'),
  c('tarte-fine-aux-tomates', 'Tarte Fine aux Tomates', 'French', 'Lunch', 'Easy', 15, 25, 4, 0, 0, ['Vegetarian'], ['new'], 'tarte fine aux tomates'),
  c('gratin-de-blettes', 'Gratin de Blettes', 'French', 'Dinner', 'Easy', 20, 40, 4, 0, 0, ['Vegetarian'], ['new'], 'gratin de blettes'),
  c('epinards-a-la-creme', 'Epinards a la Creme', 'French', 'Dinner', 'Easy', 10, 15, 4, 0, 0, ['Vegetarian'], ['new'], 'epinards a la creme'),
  c('carottes-vichy', 'Carottes Vichy', 'French', 'Dinner', 'Easy', 10, 25, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'carottes vichy'),
  c('salade-de-betteraves', 'Salade de Betteraves', 'French', 'Healthy', 'Easy', 15, 0, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'salade de betteraves'),
  c('pommes-sarladaises', 'Pommes Sarladaises', 'French', 'Dinner', 'Easy', 15, 30, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'pommes sarladaises')
];
