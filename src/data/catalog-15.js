/**
 * Weekly Delight — recipe catalog, volume fifteen. French.
 *
 * Forty-seven French recipes were already published, and they cover the
 * headline dishes — bourguignon, coq au vin, cassoulet, the classic pâtisserie.
 * What was missing is almost everything a French household actually eats, and
 * the entrées that open a proper meal.
 *
 * So this volume is deliberately weighted away from the famous. The largest
 * single group is the cold first courses — céleri rémoulade, poireaux
 * vinaigrette, œufs mayonnaise, carottes râpées — which are the backbone of
 * every bistro's entrée list and are almost entirely absent from
 * English-language collections. After that: the regional cooking of the
 * south-west and Savoie, the bourgeois classics, and the pâtisserie that was
 * not already here.
 *
 * Checked against the other 930 first. Raclette was already published; the
 * rest of the Savoyard group is not. Ratatouille, socca, tartiflette, cannelé,
 * madeleines, crêpes Suzette, clafoutis, confit de canard and coquilles
 * Saint-Jacques were all found and are not repeated.
 *
 * Fifteen entrées, twenty-five mains, eight breads and savoury bakes,
 * twenty-two desserts.
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
  /* Entrées — the bistro first course */
  c('celeri-remoulade', 'Céleri Rémoulade', 'French', 'Appetizers', 'Easy', 20, 0, 6, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Celeri remoulade celeriac mustard mayonnaise'),
  c('poireaux-vinaigrette', 'Poireaux Vinaigrette', 'French', 'Appetizers', 'Easy', 15, 20, 4, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Poireaux vinaigrette leeks mustard dressing'),
  c('oeufs-mayonnaise', 'Œufs Mayonnaise', 'French', 'Appetizers', 'Easy', 15, 10, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Oeufs mayonnaise french egg starter'),
  c('carottes-rapees', 'Carottes Râpées', 'French', 'Appetizers', 'Easy', 15, 0, 6, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Carottes rapees grated carrot salad'),
  c('salade-de-lentilles', 'Salade de Lentilles', 'French', 'Appetizers', 'Easy', 15, 30, 6, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'French green lentil salad shallot vinaigrette'),
  c('gougeres', 'Gougères', 'French', 'Appetizers', 'Medium', 20, 30, 8, 0, 0, ['Vegetarian'], ['new'], 'Gougeres cheese choux puffs burgundy'),
  c('rillettes', 'Rillettes de Porc', 'French', 'Appetizers', 'Medium', 25, 240, 10, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'Rillettes de porc terrine pot bread'),
  c('terrine-de-campagne', 'Terrine de Campagne', 'French', 'Appetizers', 'Hard', 40, 90, 12, 0, 0, ['Dairy-Free'], ['new'], 'Terrine de campagne country pate slice'),
  c('jambon-persille', 'Jambon Persillé', 'French', 'Appetizers', 'Medium', 35, 150, 10, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'Jambon persille burgundy ham parsley jelly'),
  c('escargots', 'Escargots à la Bourguignonne', 'French', 'Appetizers', 'Medium', 25, 15, 4, 0, 0, ['Gluten-Free'], ['new'], 'Escargots bourguignonne garlic parsley butter'),
  c('tapenade', 'Tapenade', 'French', 'Appetizers', 'Easy', 15, 0, 8, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'Tapenade black olive anchovy paste provence'),
  c('anchoiade', 'Anchoïade', 'French', 'Appetizers', 'Easy', 15, 0, 6, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'Anchoiade anchovy garlic dip crudites'),
  c('aioli', 'Aïoli', 'French', 'Appetizers', 'Medium', 20, 0, 8, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Aioli provencal garlic mayonnaise mortar'),
  c('brandade-de-morue', 'Brandade de Morue', 'French', 'Appetizers', 'Medium', 30, 40, 6, 0, 0, ['Gluten-Free'], ['new'], 'Brandade de morue salt cod potato puree'),
  c('oeufs-en-meurette', 'Œufs en Meurette', 'French', 'Appetizers', 'Hard', 30, 45, 4, 0, 0, [], ['new'], 'Oeufs en meurette poached eggs red wine'),

  /* Soups */
  c('vichyssoise', 'Vichyssoise', 'French', 'Lunch', 'Easy', 20, 35, 6, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Vichyssoise chilled leek potato soup'),
  c('potage-parmentier', 'Potage Parmentier', 'French', 'Lunch', 'Easy', 15, 35, 6, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Potage parmentier leek potato soup'),
  c('garbure', 'Garbure', 'French', 'Lunch', 'Easy', 25, 120, 8, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'Garbure gascon cabbage bean duck soup'),
  c('soupe-de-poisson', 'Soupe de Poisson', 'French', 'Lunch', 'Medium', 30, 55, 6, 0, 0, ['Dairy-Free'], ['new'], 'Soupe de poisson provencale rouille croutons'),

  /* Mains */
  c('hachis-parmentier', 'Hachis Parmentier', 'French', 'Dinner', 'Easy', 30, 45, 6, 0, 0, [], ['new'], 'Hachis parmentier french shepherds pie'),
  c('poulet-basquaise', 'Poulet Basquaise', 'French', 'Dinner', 'Easy', 25, 55, 6, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'Poulet basquaise chicken peppers tomato'),
  c('poule-au-pot', 'Poule au Pot', 'French', 'Dinner', 'Medium', 40, 150, 8, 0, 0, [], ['new'], 'Poule au pot stuffed boiled chicken vegetables'),
  c('navarin-printanier', "Navarin d'Agneau", 'French', 'Dinner', 'Medium', 30, 105, 6, 0, 0, ['Dairy-Free'], ['new'], 'Navarin printanier lamb spring vegetables'),
  c('daube-provencale', 'Daube Provençale', 'French', 'Dinner', 'Easy', 30, 210, 6, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'Daube provencale beef red wine olives'),
  c('carbonade-flamande', 'Carbonade Flamande', 'French', 'Dinner', 'Easy', 25, 150, 6, 0, 0, ['Dairy-Free'], ['new'], 'Carbonade flamande beef beer stew bread'),
  c('choucroute', 'Choucroute Garnie', 'French', 'Dinner', 'Medium', 30, 120, 8, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'Choucroute garnie alsace sauerkraut sausages'),
  c('magret-de-canard', 'Magret de Canard', 'French', 'Dinner', 'Medium', 15, 20, 4, 0, 0, ['Gluten-Free'], ['new'], 'Magret de canard duck breast scored skin'),
  c('poulet-roti', 'Poulet Rôti', 'French', 'Dinner', 'Easy', 20, 75, 4, 0, 0, ['Gluten-Free'], ['new'], 'Poulet roti french roast chicken butter'),
  c('gigot-d-agneau', "Gigot d'Agneau", 'French', 'Dinner', 'Medium', 25, 90, 8, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'Gigot agneau roast leg lamb garlic anchovy'),
  c('epaule-d-agneau-confite', "Épaule d'Agneau de 7 Heures", 'French', 'Dinner', 'Easy', 25, 420, 6, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'Seven hour lamb shoulder spoon tender'),
  c('steak-tartare', 'Steak Tartare', 'French', 'Dinner', 'Medium', 25, 5, 4, 0, 0, ['Dairy-Free'], ['new'], 'Steak tartare capers egg yolk french'),
  c('entrecote-marchand-de-vin', 'Entrecôte Marchand de Vin', 'French', 'Dinner', 'Medium', 15, 25, 4, 0, 0, ['Gluten-Free'], ['new'], 'Entrecote marchand de vin steak red wine'),
  c('cordon-bleu', 'Cordon Bleu', 'French', 'Dinner', 'Medium', 30, 20, 4, 0, 0, [], ['new'], 'Cordon bleu chicken ham cheese breaded'),
  c('rognons-a-la-moutarde', 'Rognons à la Moutarde', 'French', 'Quick Meals', 'Medium', 15, 15, 4, 0, 0, ['Gluten-Free'], ['new'], 'Rognons moutarde kidneys mustard cream'),
  c('foie-de-veau', 'Foie de Veau Lyonnaise', 'French', 'Quick Meals', 'Easy', 10, 15, 4, 0, 0, ['Gluten-Free'], ['new'], 'Foie de veau lyonnaise calf liver onions'),
  c('boudin-noir-pommes', 'Boudin Noir aux Pommes', 'French', 'Quick Meals', 'Easy', 10, 20, 4, 0, 0, ['Gluten-Free'], ['new'], 'Boudin noir apples black pudding french'),
  c('endives-au-jambon', 'Endives au Jambon', 'French', 'Dinner', 'Easy', 20, 45, 4, 0, 0, [], ['new'], 'Endives au jambon chicory ham bechamel gratin'),
  c('quenelles-de-brochet', 'Quenelles de Brochet', 'French', 'Dinner', 'Hard', 50, 35, 6, 0, 0, [], ['new'], 'Quenelles de brochet pike dumplings nantua'),
  c('bouchee-a-la-reine', 'Bouchée à la Reine', 'French', 'Dinner', 'Medium', 35, 40, 6, 0, 0, [], ['new'], 'Bouchee a la reine vol au vent chicken'),
  c('moules-frites', 'Moules Frites', 'French', 'Dinner', 'Medium', 25, 30, 4, 0, 0, ['Gluten-Free'], ['new'], 'Moules frites mussels chips belgian french'),
  c('sole-normande', 'Sole Normande', 'French', 'Dinner', 'Hard', 35, 30, 4, 0, 0, [], ['new'], 'Sole normande cider cream mussels'),
  c('lotte-a-l-armoricaine', "Lotte à l'Armoricaine", 'French', 'Dinner', 'Medium', 30, 40, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'Lotte armoricaine monkfish tomato brandy'),
  c('bar-en-croute-de-sel', 'Bar en Croûte de Sel', 'French', 'Dinner', 'Medium', 20, 35, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'Sea bass baked salt crust french'),
  c('fondue-savoyarde', 'Fondue Savoyarde', 'French', 'Dinner', 'Easy', 15, 20, 4, 0, 0, ['Vegetarian'], ['new'], 'Fondue savoyarde cheese pot bread cubes'),

  /* Regional and vegetable */
  c('aligot', 'Aligot', 'French', 'Dinner', 'Medium', 20, 35, 6, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Aligot stretchy cheese mashed potato aubrac'),
  c('truffade', 'Truffade', 'French', 'Dinner', 'Easy', 20, 35, 4, 0, 0, ['Gluten-Free'], ['new'], 'Truffade auvergne potato cheese cake'),
  c('piperade', 'Pipérade', 'French', 'Lunch', 'Easy', 20, 30, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Piperade basque peppers tomato eggs'),
  c('gratin-de-courgettes', 'Gratin de Courgettes', 'French', 'Dinner', 'Easy', 20, 50, 6, 0, 0, ['Vegetarian'], ['new'], 'Gratin de courgettes rice cheese bake'),
  c('gratin-de-macaronis', 'Gratin de Macaronis', 'French', 'Dinner', 'Easy', 20, 40, 6, 0, 0, ['Vegetarian'], ['new'], 'Gratin de macaronis french macaroni cheese'),
  c('salade-frisee', 'Frisée aux Lardons', 'French', 'Lunch', 'Easy', 15, 15, 4, 0, 0, [], ['new'], 'Frisee aux lardons poached egg bacon salad'),
  c('omelette-aux-fines-herbes', 'Omelette aux Fines Herbes', 'French', 'Quick Meals', 'Medium', 10, 5, 2, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'French rolled omelette fines herbes'),

  /* Bread and savoury baking */
  c('pain-de-campagne', 'Pain de Campagne', 'French', 'Baking', 'Hard', 40, 45, 10, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Pain de campagne country sourdough loaf'),
  c('fougasse', 'Fougasse', 'French', 'Baking', 'Medium', 30, 25, 8, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Fougasse provencal leaf bread olives'),
  c('pain-aux-noix', 'Pain aux Noix', 'French', 'Baking', 'Medium', 30, 40, 10, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'Pain aux noix walnut bread loaf'),
  c('tarte-flambee', 'Tarte Flambée', 'French', 'Dinner', 'Medium', 30, 12, 4, 0, 0, [], ['new'], 'Tarte flambee flammekueche alsace bacon'),
  c('pan-bagnat', 'Pan Bagnat', 'French', 'Lunch', 'Easy', 25, 0, 4, 0, 0, ['Dairy-Free'], ['new'], 'Pan bagnat nicoise sandwich tuna'),
  c('galettes-bretonnes', 'Galettes Bretonnes', 'French', 'Lunch', 'Medium', 20, 25, 4, 0, 0, [], ['new'], 'Galette bretonne buckwheat crepe egg ham'),
  c('saucisson-brioche', 'Saucisson en Brioche', 'French', 'Appetizers', 'Hard', 40, 45, 8, 0, 0, [], ['new'], 'Saucisson brioche lyonnais sausage baked'),
  c('pain-au-chocolat', 'Pain au Chocolat', 'French', 'Baking', 'Hard', 60, 20, 8, 0, 0, ['Vegetarian'], ['new'], 'Pain au chocolat viennoiserie laminated'),

  /* Desserts and pâtisserie */
  c('tarte-au-citron', 'Tarte au Citron', 'French', 'Desserts', 'Medium', 40, 45, 8, 0, 0, ['Vegetarian'], ['new'], 'Tarte au citron lemon tart french'),
  c('tarte-aux-pommes', 'Tarte aux Pommes', 'French', 'Desserts', 'Medium', 35, 50, 8, 0, 0, ['Vegetarian'], ['new'], 'Tarte aux pommes apple tart fanned'),
  c('tarte-normande', 'Tarte Normande', 'French', 'Desserts', 'Medium', 30, 45, 8, 0, 0, ['Vegetarian'], ['new'], 'Tarte normande apple calvados custard tart'),
  c('flan-parisien', 'Flan Parisien', 'French', 'Desserts', 'Medium', 30, 50, 8, 0, 0, ['Vegetarian'], ['new'], 'Flan parisien custard tart thick slice'),
  c('far-breton', 'Far Breton', 'French', 'Desserts', 'Easy', 15, 45, 8, 0, 0, ['Vegetarian'], ['new'], 'Far breton prune custard cake brittany'),
  c('kouign-amann', 'Kouign-Amann', 'French', 'Baking', 'Hard', 60, 40, 8, 0, 0, ['Vegetarian'], ['new'], 'Kouign amann caramelised butter pastry breton'),
  c('paris-brest', 'Paris-Brest', 'French', 'Desserts', 'Hard', 50, 40, 8, 0, 0, ['Vegetarian'], ['new'], 'Paris brest choux praline cream ring'),
  c('saint-honore', 'Saint-Honoré', 'French', 'Desserts', 'Hard', 70, 45, 8, 0, 0, ['Vegetarian'], ['new'], 'Saint honore gateau choux caramel cream'),
  c('religieuse', 'Religieuse', 'French', 'Desserts', 'Hard', 55, 35, 8, 0, 0, ['Vegetarian'], ['new'], 'Religieuse chocolate choux stacked pastry'),
  c('opera', 'Opéra', 'French', 'Desserts', 'Hard', 75, 25, 12, 0, 0, ['Vegetarian'], ['new'], 'Opera cake coffee chocolate layers'),
  c('fraisier', 'Fraisier', 'French', 'Desserts', 'Hard', 65, 25, 10, 0, 0, ['Vegetarian'], ['new'], 'Fraisier strawberry mousseline cake'),
  c('dacquoise', 'Dacquoise', 'French', 'Desserts', 'Hard', 40, 60, 8, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Dacquoise hazelnut meringue layers cream'),
  c('mont-blanc', 'Mont-Blanc', 'French', 'Desserts', 'Medium', 35, 60, 6, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Mont blanc chestnut cream meringue vermicelli'),
  c('pithiviers', 'Pithiviers', 'French', 'Desserts', 'Medium', 35, 45, 8, 0, 0, ['Vegetarian'], ['new'], 'Pithiviers almond puff pastry scored'),
  c('baba-au-rhum', 'Baba au Rhum', 'French', 'Desserts', 'Hard', 35, 30, 8, 0, 0, ['Vegetarian'], ['new'], 'Baba au rhum syrup soaked cream'),
  c('creme-caramel', 'Crème Caramel', 'French', 'Desserts', 'Medium', 20, 50, 6, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Creme caramel turned out custard'),
  c('ile-flottante', 'Île Flottante', 'French', 'Desserts', 'Medium', 25, 25, 6, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Ile flottante floating island meringue creme anglaise'),
  c('riz-au-lait', 'Riz au Lait', 'French', 'Desserts', 'Easy', 10, 45, 6, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Riz au lait french rice pudding vanilla'),
  c('financiers', 'Financiers', 'French', 'Baking', 'Easy', 20, 15, 12, 0, 0, ['Vegetarian'], ['new'], 'Financiers brown butter almond cakes'),
  c('palmiers', 'Palmiers', 'French', 'Baking', 'Easy', 20, 20, 12, 0, 0, ['Vegetarian'], ['new'], 'Palmiers caramelised puff pastry hearts'),
  c('chouquettes', 'Chouquettes', 'French', 'Baking', 'Medium', 20, 30, 10, 0, 0, ['Vegetarian'], ['new'], 'Chouquettes pearl sugar choux buns'),
  c('gateau-au-yaourt', 'Gâteau au Yaourt', 'French', 'Baking', 'Easy', 15, 40, 8, 0, 0, ['Vegetarian'], ['new'], 'Gateau au yaourt yogurt pot cake')
];
