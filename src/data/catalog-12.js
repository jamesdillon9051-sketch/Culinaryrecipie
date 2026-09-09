/**
 * Weekly Delight — recipe catalog, volume twelve. Lebanese.
 *
 * The site had four Lebanese recipes against forty-seven French and sixty-three
 * Italian, which is not a judgement about the cuisine so much as an accident of
 * what got written first.
 *
 * What complicated the list: most of the dishes a search engine thinks of as
 * Lebanese are already here under Middle Eastern — hummus, falafel, tabbouleh,
 * fattoush, labneh, manakish za'atar, chicken shawarma, mujadara, kibbeh,
 * baba ganoush, maqluba, musakhan and knafeh were all checked and all
 * published. Filing second copies under a different cuisine would split the
 * query between two pages of ours and win neither, which is exactly what
 * tools/seo-audit.js exists to stop.
 *
 * So this volume is the layer under the famous one: the dishes a Lebanese
 * kitchen actually cooks on a weekday and puts out on a Sunday. Sixteen mezze,
 * eighteen mains, three breads and eight sweets and drinks. Several are
 * regional rather than national — sfiha from Baalbek, samke harra from
 * Tripoli — and say so.
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
  /* Mezze — the table before the table */
  c('muhammara', 'Muhammara', 'Lebanese', 'Appetizers', 'Easy', 20, 25, 6, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Muhammara red pepper walnut dip'),
  c('batata-harra', 'Batata Harra', 'Lebanese', 'Appetizers', 'Easy', 15, 30, 4, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Batata harra spicy potatoes coriander'),
  c('warak-enab', 'Warak Enab', 'Lebanese', 'Appetizers', 'Hard', 60, 75, 8, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Warak enab stuffed vine leaves'),
  c('makdous', 'Makdous', 'Lebanese', 'Appetizers', 'Medium', 40, 20, 12, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Makdous stuffed baby aubergines oil'),
  c('shanklish-salad', 'Shanklish Salad', 'Lebanese', 'Appetizers', 'Easy', 15, 0, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Shanklish cheese tomato onion salad'),
  c('toum', 'Toum', 'Lebanese', 'Appetizers', 'Medium', 15, 0, 12, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Toum lebanese garlic sauce bowl'),
  c('sambousek', 'Sambousek', 'Lebanese', 'Appetizers', 'Medium', 45, 25, 8, 0, 0, [], ['new'], 'Sambousek lebanese meat pastries'),
  c('fatayer-sabanekh', 'Spinach Fatayer', 'Lebanese', 'Appetizers', 'Medium', 40, 20, 8, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Fatayer sabanekh spinach triangles'),
  c('rakakat-jibneh', 'Cheese Rakakat', 'Lebanese', 'Appetizers', 'Easy', 30, 15, 6, 0, 0, ['Vegetarian'], ['new'], 'Rakakat cheese rolls fried'),
  c('balila', 'Balila', 'Lebanese', 'Appetizers', 'Easy', 10, 15, 4, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Balila warm chickpeas cumin garlic'),
  c('maghmour', 'Maghmour', 'Lebanese', 'Appetizers', 'Easy', 20, 45, 6, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Maghmour aubergine chickpea stew'),
  c('loubieh-bzeit', 'Loubieh bi Zeit', 'Lebanese', 'Appetizers', 'Easy', 15, 40, 6, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Loubieh bzeit green beans tomato oil'),
  c('hummus-beiruti', 'Hummus Beiruti', 'Lebanese', 'Appetizers', 'Easy', 20, 0, 6, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Hummus beiruti parsley chilli'),
  c('kibbeh-mekliyeh', 'Fried Kibbeh', 'Lebanese', 'Appetizers', 'Hard', 60, 20, 8, 0, 0, [], ['new'], 'Fried kibbeh torpedo shells'),
  c('salatet-raheb', 'Salatet Raheb', 'Lebanese', 'Appetizers', 'Easy', 20, 30, 4, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Salatet raheb smoked aubergine salad'),
  c('jazar-bi-tahini', 'Carrot and Tahini Salad', 'Lebanese', 'Appetizers', 'Easy', 15, 0, 4, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Carrot tahini salad lebanese'),

  /* Mains — the weekday pot and the Sunday tray */
  c('kafta-bil-sanieh', 'Kafta bil Sanieh', 'Lebanese', 'Dinner', 'Easy', 25, 45, 6, 0, 0, ['Dairy-Free'], ['new'], 'Kafta bil sanieh tray potatoes tomato'),
  c('kibbeh-bil-sanieh', 'Kibbeh bil Sanieh', 'Lebanese', 'Dinner', 'Hard', 50, 45, 8, 0, 0, ['Dairy-Free'], ['new'], 'Kibbeh bil sanieh baked tray'),
  c('kibbeh-labaniyeh', 'Kibbeh Labaniyeh', 'Lebanese', 'Dinner', 'Hard', 55, 40, 6, 0, 0, [], ['new'], 'Kibbeh labaniyeh yogurt sauce'),
  c('shish-barak', 'Shish Barak', 'Lebanese', 'Dinner', 'Hard', 70, 35, 6, 0, 0, [], ['new'], 'Shish barak dumplings yogurt'),
  c('sayadieh', 'Sayadieh', 'Lebanese', 'Dinner', 'Medium', 30, 55, 6, 0, 0, ['Dairy-Free'], ['new'], 'Sayadieh fish rice caramelised onion'),
  c('samke-harra', 'Samke Harra', 'Lebanese', 'Dinner', 'Medium', 30, 40, 6, 0, 0, ['Dairy-Free'], ['new'], 'Samke harra tripoli fish tahini'),
  c('sfiha-baalbakieh', 'Sfiha Baalbakieh', 'Lebanese', 'Dinner', 'Medium', 45, 20, 8, 0, 0, ['Dairy-Free'], ['new'], 'Sfiha baalbakieh open meat pies'),
  c('arayes', 'Arayes', 'Lebanese', 'Quick Meals', 'Easy', 15, 15, 4, 0, 0, ['Dairy-Free'], ['new'], 'Arayes grilled stuffed pita meat'),
  c('riz-a-djaj', 'Riz a Djaj', 'Lebanese', 'Dinner', 'Medium', 25, 70, 8, 0, 0, ['Dairy-Free'], ['new'], 'Riz a djaj chicken rice nuts'),
  c('djaj-mhammar', 'Djaj Mhammar', 'Lebanese', 'Dinner', 'Easy', 20, 65, 6, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'Djaj mhammar roast chicken potatoes'),
  c('bamia-bi-lahme', 'Bamia bi Lahme', 'Lebanese', 'Dinner', 'Easy', 20, 90, 6, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'Bamia okra lamb stew tomato'),
  c('fasolia-bi-lahme', 'Fasolia bi Lahme', 'Lebanese', 'Dinner', 'Easy', 20, 95, 6, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'Fasolia white bean lamb stew'),
  c('sheikh-el-mahshi', 'Sheikh el Mahshi', 'Lebanese', 'Dinner', 'Medium', 35, 50, 6, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'Sheikh el mahshi stuffed aubergine'),
  c('koussa-mahshi', 'Koussa Mahshi', 'Lebanese', 'Dinner', 'Medium', 50, 55, 6, 0, 0, ['Dairy-Free'], ['new'], 'Koussa mahshi stuffed courgettes'),
  c('malfouf-mahshi', 'Malfouf Mahshi', 'Lebanese', 'Dinner', 'Medium', 55, 60, 6, 0, 0, ['Dairy-Free'], ['new'], 'Malfouf mahshi stuffed cabbage rolls'),
  c('yakhnet-batata', 'Yakhnet Batata', 'Lebanese', 'Dinner', 'Easy', 20, 65, 6, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'Yakhnet batata potato lamb stew'),
  c('freekeh-djaj', 'Freekeh with Chicken', 'Lebanese', 'Dinner', 'Medium', 25, 60, 6, 0, 0, ['Dairy-Free'], ['new'], 'Freekeh chicken green wheat pilaf'),
  c('kousa-bil-laban', 'Kousa bil Laban', 'Lebanese', 'Dinner', 'Medium', 45, 50, 6, 0, 0, [], ['new'], 'Kousa bil laban courgette yogurt'),

  /* Bread */
  c('khubz-arabi', 'Khubz Arabi', 'Lebanese', 'Baking', 'Medium', 25, 12, 8, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Khubz arabi lebanese flatbread puffed'),
  c('kaak-bil-simsim', "Ka'ak bil Simsim", 'Lebanese', 'Baking', 'Medium', 30, 20, 6, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Kaak sesame bread purse beirut'),
  c('talami', 'Talami', 'Lebanese', 'Baking', 'Medium', 25, 15, 6, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Talami lebanese village bread'),

  /* Sweets and drinks */
  c('mouhalabieh', 'Mouhalabieh', 'Lebanese', 'Desserts', 'Easy', 10, 15, 6, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Mouhalabieh milk pudding pistachio'),
  c('layali-lubnan', 'Layali Lubnan', 'Lebanese', 'Desserts', 'Easy', 20, 20, 8, 0, 0, ['Vegetarian'], ['new'], 'Layali lubnan semolina cream dessert'),
  c('atayef-asafiri', 'Atayef Asafiri', 'Lebanese', 'Desserts', 'Medium', 35, 20, 8, 0, 0, ['Vegetarian'], ['new'], 'Atayef asafiri open pancakes cream'),
  c('halawet-el-jibn', 'Halawet el Jibn', 'Lebanese', 'Desserts', 'Hard', 35, 20, 8, 0, 0, ['Vegetarian'], ['new'], 'Halawet el jibn cheese rolls cream'),
  c('znoud-el-sit', 'Znoud el Sit', 'Lebanese', 'Desserts', 'Medium', 30, 20, 8, 0, 0, ['Vegetarian'], ['new'], 'Znoud el sit filo cream fingers'),
  c('sfouf', 'Sfouf', 'Lebanese', 'Baking', 'Easy', 15, 35, 12, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Sfouf turmeric semolina cake'),
  c('meghli', 'Meghli', 'Lebanese', 'Desserts', 'Easy', 15, 45, 8, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Meghli rice pudding spices nuts'),
  c('jallab', 'Jallab', 'Lebanese', 'Drinks', 'Easy', 10, 0, 4, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Jallab date syrup drink pine nuts')
];
