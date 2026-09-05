/**
 * Weekly Delight — recipe catalog, volume eleven.
 *
 * Volume ten fixed Holiday Specials and Drinks. That left Healthy at 51 and
 * Quick Meals at 53 as the thinnest real categories, and Vegan at 117 as the
 * thinnest tag anyone actually filters on — Keto and Low-Carb are derived from
 * the nutrition figures and look after themselves.
 *
 * So: twelve vegetable-forward mains and salads, ten meals that are genuinely
 * on the table inside thirty minutes, and ten dishes that each take a cuisine
 * from three recipes to four. Fifteen of the forty are vegan, which is where
 * most of that gap closes.
 *
 * "Quick" means quick. Everything in that group totals thirty minutes or less
 * including the chopping, which is the same threshold src/lib/keywords.js uses
 * before it will let a recipe call itself quick.
 *
 * Checked against the other 769 first: koshari, waakye, ugali sukuma, brik,
 * moules marinières, kottu roti, svíčková, pastel de choclo, fattoush, imam
 * bayıldı, gado-gado, kaiserschmarrn, mapo tofu and shepherd's pie were all
 * already published.
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
  /* Healthy — vegetable-forward cooking that earns its place on flavour */
  c('cauliflower-steaks', 'Roasted Cauliflower Steaks', 'American', 'Healthy', 'Easy', 15, 35, 4, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Roasted cauliflower steaks tray'),
  c('kale-caesar', 'Kale Caesar Salad', 'American', 'Healthy', 'Easy', 20, 10, 4, 0, 0, [], ['new'], 'Kale caesar salad bowl'),
  c('farro-salad', 'Farro and Roasted Vegetable Salad', 'Italian', 'Healthy', 'Easy', 20, 40, 6, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Farro salad roasted vegetables'),
  c('nasu-dengaku', 'Nasu Dengaku', 'Japanese', 'Healthy', 'Easy', 10, 25, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Nasu dengaku miso aubergine'),
  c('black-bean-soup', 'Cuban Black Bean Soup', 'Cuban', 'Healthy', 'Easy', 20, 60, 6, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Cuban black bean soup bowl'),
  c('stuffed-peppers', 'Greek Stuffed Peppers', 'Greek', 'Healthy', 'Easy', 25, 50, 6, 0, 0, ['Vegetarian'], ['new'], 'Stuffed peppers rice baked'),
  c('beetroot-feta-salad', 'Beetroot, Orange and Feta Salad', 'Australian', 'Healthy', 'Easy', 20, 45, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Beetroot orange feta salad'),
  c('sweet-potato-black-bean-tacos', 'Sweet Potato and Black Bean Tacos', 'Mexican', 'Healthy', 'Easy', 20, 30, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Sweet potato black bean tacos'),
  c('moroccan-carrot-salad', 'Moroccan Carrot Salad', 'Moroccan', 'Healthy', 'Easy', 15, 12, 6, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Moroccan carrot salad cumin'),
  c('green-goddess-salad', 'Green Goddess Salad', 'American', 'Healthy', 'Easy', 20, 0, 6, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Green goddess salad chopped'),
  c('squash-soup', 'Roasted Butternut Squash Soup', 'American', 'Healthy', 'Easy', 15, 50, 6, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Butternut squash soup bowl'),
  c('italian-chopped-salad', 'Italian Chopped Salad', 'Italian', 'Healthy', 'Easy', 25, 0, 6, 0, 0, [], ['new'], 'Italian chopped salad bowl'),

  /* Quick Meals — thirty minutes or less, chopping included */
  c('tuna-caper-pasta', 'Tuna and Caper Pasta', 'Italian', 'Quick Meals', 'Easy', 8, 15, 4, 0, 0, ['Dairy-Free'], ['new'], 'Tuna pasta capers'),
  c('sesame-peanut-noodles', 'Sesame Peanut Noodles', 'Chinese', 'Quick Meals', 'Easy', 12, 10, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Sesame peanut noodles bowl'),
  c('quick-chickpea-curry', 'Quick Chickpea Curry', 'Indian', 'Quick Meals', 'Easy', 10, 20, 4, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Chickpea curry chana bowl'),
  c('halloumi-wrap', 'Grilled Halloumi Wrap', 'Greek', 'Quick Meals', 'Easy', 12, 8, 4, 0, 0, ['Vegetarian'], ['new'], 'Halloumi wrap grilled'),
  c('sardines-on-toast', 'Sardines on Toast', 'British', 'Quick Meals', 'Easy', 8, 7, 2, 0, 0, ['Dairy-Free'], ['new'], 'Sardines on toast lemon'),
  c('black-pepper-beef', 'Black Pepper Beef', 'Chinese', 'Quick Meals', 'Easy', 12, 10, 4, 0, 0, ['Dairy-Free'], ['new'], 'Black pepper beef stir fry'),
  c('smashed-chickpea-sandwich', 'Smashed Chickpea Sandwich', 'American', 'Quick Meals', 'Easy', 12, 0, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Smashed chickpea sandwich'),
  c('garlic-mushroom-toast', 'Garlic Mushroom Toast', 'British', 'Quick Meals', 'Easy', 8, 12, 2, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Garlic mushrooms on toast'),
  c('prawn-tacos', 'Chilli Prawn Tacos', 'Mexican', 'Quick Meals', 'Easy', 15, 8, 4, 0, 0, [], ['new'], 'Shrimp tacos lime cabbage'),
  c('scallion-oil-noodles', 'Scallion Oil Noodles', 'Chinese', 'Quick Meals', 'Easy', 10, 20, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Scallion oil noodles cong you ban mian'),

  /* One more from each cuisine that had only three */
  c('lecso', 'Lecsó', 'Hungarian', 'Dinner', 'Easy', 15, 40, 4, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Lecso hungarian pepper stew'),
  c('karjalanpaisti', 'Karelian Hot Pot', 'Finnish', 'Dinner', 'Easy', 25, 210, 6, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Karjalanpaisti finnish stew'),
  c('mamaliga', 'Mămăligă', 'Romanian', 'Dinner', 'Easy', 10, 35, 6, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Mamaliga polenta cheese'),
  c('kjottkaker', 'Kjøttkaker', 'Norwegian', 'Dinner', 'Medium', 25, 35, 4, 0, 0, [], ['new'], 'Kjottkaker norwegian meat cakes'),
  c('aussie-meat-pie', 'Australian Meat Pie', 'Australian', 'Lunch', 'Medium', 35, 75, 6, 0, 0, [], ['new'], 'Australian meat pie sauce'),
  c('cachapas', 'Cachapas', 'Venezuelan', 'Breakfast', 'Easy', 15, 20, 6, 0, 0, ['Vegetarian'], ['new'], 'Cachapas venezolanas queso'),
  c('spam-musubi', 'Spam Musubi', 'Hawaiian', 'Lunch', 'Easy', 20, 15, 6, 0, 0, ['Dairy-Free'], ['new'], 'Spam musubi nori rice'),
  c('chakhokhbili', 'Chakhokhbili', 'Georgian', 'Dinner', 'Easy', 20, 50, 4, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Chakhokhbili georgian chicken stew'),
  c('stoemp', 'Stoemp', 'Belgian', 'Dinner', 'Easy', 20, 30, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Stoemp belgian mashed potato'),
  c('chana-chaat', 'Chana Chaat', 'Indian', 'Appetizers', 'Easy', 20, 0, 6, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Chana chaat chickpea salad'),

  /* Vegan mains, where the tag was thinnest */
  c('vegan-shepherds-pie', "Lentil Shepherd's Pie", 'British', 'Dinner', 'Medium', 30, 60, 6, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Lentil shepherds pie dish'),
  c('mushroom-stroganoff', 'Mushroom Stroganoff', 'Russian', 'Dinner', 'Easy', 15, 25, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Mushroom stroganoff pasta'),
  c('aubergine-parmigiana', 'Griddled Aubergine Parmigiana', 'Italian', 'Dinner', 'Medium', 35, 60, 6, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Melanzane parmigiana baked'),
  c('coconut-dal', 'Coconut Dal', 'Sri Lankan', 'Dinner', 'Easy', 15, 35, 4, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Coconut dal parippu'),
  c('jackfruit-tacos', 'Pulled Jackfruit Tacos', 'Mexican', 'Dinner', 'Easy', 20, 30, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Jackfruit tacos pulled'),
  c('vegan-mac', 'Butternut Mac and Cheese', 'American', 'Dinner', 'Easy', 20, 35, 6, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Vegan mac and cheese butternut'),
  c('tofu-katsu-curry', 'Tofu Katsu Curry', 'Japanese', 'Dinner', 'Medium', 25, 35, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Katsu curry tofu rice'),
  c('white-bean-stew', 'Tuscan White Bean Stew', 'Italian', 'Dinner', 'Easy', 15, 40, 6, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Tuscan white bean stew kale')
];
