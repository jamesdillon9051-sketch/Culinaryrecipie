/**
 * Weekly Delight — recipe catalog, volume twenty-two.
 * A hundred dishes from the British Isles that the site did not have.
 *
 * Every dish was tried against the 1,509 recipes already published, with
 * tools/dedupe-candidates.js, before any of it was written. 331 dishes were
 * tried — the Sunday roast and the pub menu, the curry house, the tea table,
 * the biscuit tin, Scotland and Ireland, and the drinks — and 78 turned out to
 * be published already: Beef Wellington, treacle tart, spotted dick, Cullen
 * skink, Cornish pasty, mulligatawny, mushy peas, piccalilli and a good many
 * more. Of the 253 that were not, these hundred are the ones searched for most
 * and clearest about what they are.
 *
 * The word rules cannot see everything a person sees at once, so a fair number
 * were left out on reading: potato farls are the tattie scones already here,
 * wassail is mulled cider, a Bakewell slice is the tart, Empire biscuits are
 * Jammie Dodgers with icing, Scottish tiffin is the chocolate biscuit cake in
 * this volume, and a roast chicken dinner is a roast chicken.
 *
 * This file is generated from the verified list rather than typed out from it,
 * and `npm run check` fails if two recipes are the same dish.
 *
 * Spread: British 75, Indian 11, Scottish 10, Irish 3, American 1.
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
  c('chicken-jalfrezi', 'Chicken Jalfrezi', 'Indian', 'Dinner', 'Medium', 20, 40, 4, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Chicken jalfrezi thick tomato masala peppers onions green chillies pan'),
  c('chicken-madras', 'Chicken Madras', 'Indian', 'Dinner', 'Easy', 20, 45, 4, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Chicken madras hot red tamarind tomato curry sauce coriander bowl'),
  c('chicken-balti', 'Chicken Balti', 'Indian', 'Dinner', 'Easy', 15, 30, 4, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Chicken balti karahi fenugreek coriander ginger thick spiced sauce'),
  c('chicken-dhansak', 'Chicken Dhansak', 'Indian', 'Dinner', 'Medium', 20, 50, 4, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Chicken dhansak red lentil curry pineapple sweet sour hot bowl'),
  c('chicken-bhuna', 'Chicken Bhuna', 'Indian', 'Dinner', 'Medium', 20, 55, 4, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Chicken bhuna thick dry masala reduced onion tomato coriander pan'),
  c('chicken-pathia', 'Chicken Pathia', 'Indian', 'Dinner', 'Easy', 15, 40, 4, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Chicken pathia hot sweet sour tomato curry red sauce coriander'),
  c('saag-aloo', 'Saag Aloo', 'Indian', 'Dinner', 'Easy', 15, 25, 4, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Saag aloo spinach potatoes spiced dry curry cumin lemon pan'),
  c('bombay-potatoes', 'Bombay Potatoes', 'Indian', 'Dinner', 'Easy', 15, 30, 4, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Bombay potatoes turmeric mustard seeds tomato coriander dry spiced pan'),
  c('onion-bhajis', 'Onion Bhajis', 'Indian', 'Appetizers', 'Medium', 20, 20, 6, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Onion bhajis golden gram flour fritters crisp lacy nigella seeds'),
  c('peshwari-naan', 'Peshwari Naan', 'Indian', 'Baking', 'Medium', 30, 15, 6, 0, 0, ['Vegetarian'], ['new'], 'Peshwari naan sweet coconut almond sultana stuffed flatbread pan blistered'),
  c('chip-shop-curry-sauce', 'Chip Shop Curry Sauce', 'British', 'Dinner', 'Easy', 10, 30, 6, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Chip shop curry sauce golden mild sweet pour over chips'),
  c('roast-lamb-shoulder', 'Roast Lamb Shoulder', 'British', 'Dinner', 'Easy', 15, 225, 6, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Roast lamb shoulder slow roasted garlic rosemary falling apart roasting tin'),
  c('roast-duck', 'Roast Duck', 'British', 'Dinner', 'Medium', 20, 150, 4, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Roast duck whole bird crisp golden skin carved orange thyme'),
  c('roast-turkey-crown', 'Roast Turkey Crown', 'British', 'Holiday Specials', 'Medium', 20, 105, 8, 0, 0, [], ['new'], 'Roast turkey crown bacon herb butter golden carved breast slices'),
  c('gammon-egg-and-chips', 'Gammon, Egg and Chips', 'British', 'Dinner', 'Easy', 15, 40, 4, 0, 0, [], ['new'], 'Gammon steak fried egg pineapple ring golden oven chips peas plate'),
  c('scampi-and-chips', 'Scampi and Chips', 'British', 'Dinner', 'Medium', 25, 30, 4, 0, 0, [], ['new'], 'Scampi and chips breaded golden crisp tartare sauce lemon wedge'),
  c('cheese-and-onion-pie', 'Cheese and Onion Pie', 'British', 'Dinner', 'Medium', 30, 50, 6, 0, 0, ['Vegetarian'], ['new'], 'Cheese and onion pie golden shortcrust slice melted Lancashire cheese'),
  c('pie-and-mash', 'Pie and Mash', 'British', 'Dinner', 'Medium', 40, 75, 4, 0, 0, [], ['new'], 'Pie and mash minced beef pie mashed potato green parsley liquor plate'),
  c('liver-and-onions', 'Liver and Onions', 'British', 'Dinner', 'Easy', 10, 30, 4, 0, 0, [], ['new'], 'Liver and onions lambs liver caramelised onions bacon gravy mashed potato'),
  c('sausage-casserole', 'Sausage Casserole', 'British', 'Dinner', 'Easy', 15, 60, 4, 0, 0, [], ['new'], 'Sausage casserole pork sausages butter beans tomato carrots rich gravy dish'),
  c('hunters-chicken', 'Hunter\'s Chicken', 'British', 'Dinner', 'Easy', 10, 35, 4, 0, 0, [], ['new'], 'Hunters chicken bacon wrapped breast barbecue sauce melted cheddar baked'),
  c('corned-beef-pie', 'Corned Beef Pie', 'British', 'Dinner', 'Easy', 25, 45, 6, 0, 0, [], ['new'], 'Corned beef pie golden shortcrust chunks onion potato slice'),
  c('sausage-plait', 'Sausage Plait', 'British', 'Appetizers', 'Medium', 25, 35, 8, 0, 0, [], ['new'], 'Sausage plait puff pastry plaited golden glazed sliced sage onion filling'),
  c('carrot-and-coriander-soup', 'Carrot and Coriander Soup', 'British', 'Lunch', 'Easy', 15, 35, 6, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Carrot and coriander soup bright orange velvety bowl fresh coriander leaves'),
  c('parsnip-soup', 'Parsnip Soup', 'British', 'Lunch', 'Easy', 15, 45, 6, 0, 0, ['Vegetarian'], ['new'], 'Parsnip soup creamy roasted parsnips curry spice bowl swirl parsley'),
  c('stilton-and-broccoli-soup', 'Stilton and Broccoli Soup', 'British', 'Lunch', 'Easy', 10, 25, 4, 0, 0, ['Vegetarian'], ['new'], 'Stilton and broccoli soup green creamy blue cheese crumbs bowl'),
  c('pea-and-mint-soup', 'Pea and Mint Soup', 'British', 'Quick Meals', 'Easy', 10, 15, 4, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Pea and mint soup bright green velvety bowl mint leaves'),
  c('lentil-and-bacon-soup', 'Lentil and Bacon Soup', 'British', 'Dinner', 'Easy', 15, 45, 6, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Lentil and bacon soup thick smoky carrots celery hearty bowl'),
  c('cock-a-leekie-soup', 'Cock-a-Leekie Soup', 'Scottish', 'Dinner', 'Medium', 20, 90, 6, 0, 0, ['Dairy-Free'], ['new'], 'Cock-a-leekie soup chicken leeks prunes barley golden broth bowl'),
  c('chip-butty', 'Chip Butty', 'British', 'Lunch', 'Easy', 5, 35, 2, 0, 0, ['Vegetarian'], ['new'], 'Chip butty thick chips buttered white bread ketchup brown sauce'),
  c('bacon-sandwich', 'Bacon Sandwich', 'British', 'Breakfast', 'Easy', 2, 10, 2, 0, 0, [], ['new'], 'Bacon sandwich butty crisp back bacon white bread brown sauce butter'),
  c('fish-finger-sandwich', 'Fish Finger Sandwich', 'British', 'Lunch', 'Easy', 10, 15, 2, 0, 0, [], ['new'], 'Fish finger sandwich crisp golden cod fingers tartare sauce lettuce soft bread'),
  c('baked-beans-on-toast', 'Baked Beans on Toast', 'British', 'Breakfast', 'Easy', 5, 10, 2, 0, 0, ['Vegetarian'], ['new'], 'Baked beans on toast tomato sauce buttered toast plate cheese'),
  c('egg-and-soldiers', 'Egg and Soldiers', 'British', 'Breakfast', 'Easy', 2, 6, 2, 0, 0, ['Vegetarian'], ['new'], 'Egg and soldiers soft boiled egg egg cup buttered toast fingers'),
  c('porridge', 'Porridge', 'British', 'Breakfast', 'Easy', 2, 10, 2, 0, 0, ['Vegetarian'], ['new'], 'Porridge creamy oats bowl honey berries warm spoon'),
  c('drop-scones', 'Drop Scones', 'Scottish', 'Breakfast', 'Easy', 10, 15, 4, 0, 0, ['Vegetarian'], ['new'], 'Drop scones Scotch pancakes griddle golden butter jam stack'),
  c('rhubarb-crumble', 'Rhubarb Crumble', 'British', 'Desserts', 'Easy', 20, 45, 6, 0, 0, ['Vegetarian'], ['new'], 'Rhubarb crumble golden oat topping pink rhubarb baking dish custard'),
  c('gooseberry-fool', 'Gooseberry Fool', 'British', 'Desserts', 'Easy', 15, 15, 6, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Gooseberry fool pale green whipped cream glass spoon'),
  c('blackberry-and-apple-pie', 'Blackberry and Apple Pie', 'British', 'Desserts', 'Medium', 40, 55, 8, 0, 0, ['Vegetarian'], ['new'], 'Blackberry and apple pie sweet shortcrust purple juices bubbling slice'),
  c('apple-charlotte', 'Apple Charlotte', 'British', 'Desserts', 'Medium', 30, 60, 6, 0, 0, ['Vegetarian'], ['new'], 'Apple charlotte golden buttered bread case turned out apple puree centre'),
  c('apple-turnovers', 'Apple Turnovers', 'British', 'Baking', 'Easy', 20, 25, 8, 0, 0, ['Vegetarian'], ['new'], 'Apple turnovers puff pastry golden flaky crimped cinnamon apple filling'),
  c('eves-pudding', 'Eve\'s Pudding', 'British', 'Desserts', 'Easy', 20, 40, 6, 0, 0, ['Vegetarian'], ['new'], 'Eves pudding golden sponge baked apples spoonful dish steaming custard'),
  c('steamed-syrup-sponge', 'Steamed Syrup Sponge', 'British', 'Desserts', 'Medium', 20, 105, 6, 0, 0, ['Vegetarian'], ['new'], 'Steamed syrup sponge pudding golden syrup dripping turned out basin'),
  c('semolina-pudding', 'Semolina Pudding', 'British', 'Desserts', 'Easy', 5, 15, 4, 0, 0, ['Vegetarian'], ['new'], 'Semolina pudding creamy milk pudding jam swirl nutmeg bowl'),
  c('manchester-tart', 'Manchester Tart', 'British', 'Desserts', 'Medium', 40, 35, 8, 0, 0, ['Vegetarian'], ['new'], 'Manchester tart raspberry jam custard sliced banana coconut cherry pastry case'),
  c('yorkshire-curd-tart', 'Yorkshire Curd Tart', 'British', 'Desserts', 'Medium', 40, 40, 8, 0, 0, ['Vegetarian'], ['new'], 'Yorkshire curd tart currants nutmeg golden set filling pastry case'),
  c('knickerbocker-glory', 'Knickerbocker Glory', 'British', 'Desserts', 'Easy', 20, 5, 4, 0, 0, [], ['new'], 'Knickerbocker glory tall glass layers raspberry jelly ice cream peaches cream cherry'),
  c('homemade-custard', 'Homemade Custard', 'British', 'Desserts', 'Medium', 5, 15, 6, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Homemade custard pouring jug thick yellow vanilla custard over pudding'),
  c('dorset-apple-cake', 'Dorset Apple Cake', 'British', 'Baking', 'Easy', 20, 60, 10, 0, 0, ['Vegetarian'], ['new'], 'Dorset apple cake rustic golden crumb apple chunks demerara top wedge'),
  c('madeira-cake', 'Madeira Cake', 'British', 'Baking', 'Easy', 20, 60, 10, 0, 0, ['Vegetarian'], ['new'], 'Madeira cake golden loaf close crumb lemon sliced tin'),
  c('coffee-and-walnut-cake', 'Coffee and Walnut Cake', 'British', 'Baking', 'Medium', 35, 25, 10, 0, 0, ['Vegetarian'], ['new'], 'Coffee and walnut cake two layer coffee buttercream walnut halves slice'),
  c('christmas-cake', 'Christmas Cake', 'British', 'Holiday Specials', 'Medium', 40, 210, 24, 0, 0, [], ['new'], 'Christmas cake rich dark fruit cake sliced almonds marzipan brandy'),
  c('battenberg-cake', 'Battenberg Cake', 'British', 'Baking', 'Hard', 60, 30, 12, 0, 0, ['Vegetarian'], ['new'], 'Battenberg cake pink and yellow checkerboard sponge marzipan wrapped slice'),
  c('malt-loaf', 'Malt Loaf', 'British', 'Baking', 'Easy', 15, 60, 10, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Malt loaf dark sticky sultana sliced buttered tin'),
  c('lardy-cake', 'Lardy Cake', 'British', 'Baking', 'Hard', 45, 40, 12, 0, 0, [], ['new'], 'Lardy cake Wiltshire sticky glazed spiced fruit yeast slice tin'),
  c('sally-lunn', 'Sally Lunn', 'British', 'Baking', 'Medium', 30, 35, 8, 0, 0, ['Vegetarian'], ['new'], 'Sally Lunn bun golden glazed light brioche style loaf sliced butter'),
  c('cornish-saffron-buns', 'Cornish Saffron Buns', 'British', 'Baking', 'Medium', 30, 20, 12, 0, 0, ['Vegetarian'], ['new'], 'Cornish saffron buns golden yellow currants glazed tray'),
  c('fat-rascals', 'Fat Rascals', 'British', 'Baking', 'Easy', 25, 20, 8, 0, 0, ['Vegetarian'], ['new'], 'Fat rascals Yorkshire rock scone cakes cherry eyes almond teeth golden'),
  c('custard-slice', 'Custard Slice', 'British', 'Baking', 'Medium', 40, 40, 9, 0, 0, ['Vegetarian'], ['new'], 'Custard slice puff pastry thick vanilla custard white icing chocolate feathering'),
  c('jam-tarts', 'Jam Tarts', 'British', 'Baking', 'Easy', 30, 15, 12, 0, 0, ['Vegetarian'], ['new'], 'Jam tarts small shortcrust cases raspberry jam golden bun tin'),
  c('chocolate-biscuit-cake', 'Chocolate Biscuit Cake', 'British', 'Desserts', 'Easy', 20, 5, 16, 0, 0, ['Vegetarian'], ['new'], 'Chocolate biscuit cake fridge cake broken biscuits glossy chocolate slice tin'),
  c('cheese-scones', 'Cheese Scones', 'British', 'Baking', 'Easy', 15, 15, 8, 0, 0, ['Vegetarian'], ['new'], 'Cheese scones golden risen mature cheddar split butter tray'),
  c('digestive-biscuits', 'Digestive Biscuits', 'British', 'Baking', 'Medium', 25, 15, 20, 0, 0, ['Vegetarian'], ['new'], 'Digestive biscuits wholemeal round golden crumbly stack cup of tea'),
  c('custard-creams', 'Custard Creams', 'British', 'Baking', 'Medium', 40, 15, 16, 0, 0, ['Vegetarian'], ['new'], 'Custard creams embossed vanilla sandwich biscuits buttercream filling plate'),
  c('bourbon-biscuits', 'Bourbon Biscuits', 'British', 'Baking', 'Medium', 40, 12, 16, 0, 0, ['Vegetarian'], ['new'], 'Bourbon biscuits chocolate rectangles chocolate buttercream sandwich sugar edge'),
  c('jammie-dodgers', 'Jammie Dodgers', 'British', 'Baking', 'Medium', 40, 12, 12, 0, 0, ['Vegetarian'], ['new'], 'Jammie Dodgers heart cut-out jam sandwich shortbread biscuits icing sugar dusting'),
  c('ginger-nut-biscuits', 'Ginger Nut Biscuits', 'British', 'Baking', 'Easy', 20, 15, 24, 0, 0, ['Vegetarian'], ['new'], 'Ginger nut biscuits crackled golden brown crisp cracked tops tray'),
  c('viennese-whirls', 'Viennese Whirls', 'British', 'Baking', 'Medium', 30, 15, 12, 0, 0, ['Vegetarian'], ['new'], 'Viennese whirls piped rosettes melt in the mouth biscuits jam buttercream sandwich'),
  c('garibaldi-biscuits', 'Garibaldi Biscuits', 'British', 'Baking', 'Medium', 30, 15, 16, 0, 0, ['Vegetarian'], ['new'], 'Garibaldi biscuits rectangular currant filling squashed fly golden scored top'),
  c('oatcakes', 'Oatcakes', 'Scottish', 'Baking', 'Easy', 10, 20, 12, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Oatcakes Scottish round crisp oat biscuits stacked cheese spread'),
  c('cheese-straws', 'Cheese Straws', 'British', 'Appetizers', 'Easy', 20, 12, 24, 0, 0, ['Vegetarian'], ['new'], 'Cheese straws twisted golden cheddar pastry strips cayenne bunch'),
  c('rocky-road', 'Rocky Road', 'British', 'Desserts', 'Easy', 15, 5, 16, 0, 0, ['Vegetarian'], ['new'], 'Rocky road chocolate squares marshmallows biscuit chunks cherries cut slab'),
  c('coconut-ice', 'Coconut Ice', 'British', 'Desserts', 'Easy', 20, 0, 20, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Coconut ice pink and white squares fudgy coconut sweets cut pieces'),
  c('toffee-apples', 'Toffee Apples', 'British', 'Desserts', 'Medium', 15, 20, 6, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Toffee apples glossy red brittle toffee coating sticks tray bonfire night'),
  c('scottish-tablet', 'Scottish Tablet', 'Scottish', 'Desserts', 'Medium', 10, 30, 40, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Scottish tablet grainy crumbly fudge squares tin sugar sweet'),
  c('treacle-toffee', 'Treacle Toffee', 'British', 'Desserts', 'Medium', 10, 25, 30, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Treacle toffee dark hard brittle shards black treacle bonfire night tin'),
  c('irish-soda-farls', 'Irish Soda Farls', 'Irish', 'Breakfast', 'Easy', 10, 15, 4, 0, 0, ['Vegetarian'], ['new'], 'Irish soda farls griddled triangles golden flour dusted buttered'),
  c('guinness-cake', 'Guinness Cake', 'Irish', 'Baking', 'Medium', 25, 60, 12, 0, 0, [], ['new'], 'Guinness cake chocolate stout cake cream cheese topping pint glass head'),
  c('selkirk-bannock', 'Selkirk Bannock', 'Scottish', 'Baking', 'Medium', 30, 35, 10, 0, 0, ['Vegetarian'], ['new'], 'Selkirk bannock round sultana yeast loaf glazed golden sliced butter'),
  c('black-bun', 'Black Bun', 'Scottish', 'Holiday Specials', 'Hard', 60, 150, 16, 0, 0, [], ['new'], 'Black bun Hogmanay fruit cake pastry case sliced dark rich raisins'),
  c('forfar-bridie', 'Forfar Bridie', 'Scottish', 'Lunch', 'Medium', 30, 40, 4, 0, 0, [], ['new'], 'Forfar bridie folded semicircle pastry crimped edge steak onion golden'),
  c('scotch-pie', 'Scotch Pie', 'Scottish', 'Lunch', 'Hard', 50, 40, 6, 0, 0, [], ['new'], 'Scotch pie double-crust hot water crust lamb mutton pepper raised top hollow'),
  c('clootie-dumpling', 'Clootie Dumpling', 'Scottish', 'Desserts', 'Hard', 30, 180, 10, 0, 0, [], ['new'], 'Clootie dumpling boiled fruit pudding dark skin sliced custard Scottish'),
  c('lorne-sausage', 'Lorne Sausage', 'Scottish', 'Breakfast', 'Easy', 20, 15, 6, 0, 0, [], ['new'], 'Lorne sausage square slices fried brown roll breakfast egg'),
  c('ulster-fry', 'Ulster Fry', 'Irish', 'Breakfast', 'Easy', 15, 30, 2, 0, 0, [], ['new'], 'Ulster fry soda farl potato bread fried eggs sausages bacon black pudding plate'),
  c('mint-sauce', 'Mint Sauce', 'British', 'Dinner', 'Easy', 10, 0, 8, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Mint sauce green flecked vinegar jug roast lamb spoon'),
  c('apple-sauce', 'Apple Sauce', 'British', 'Dinner', 'Easy', 10, 20, 8, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Apple sauce bramley smooth pale golden bowl spoon roast pork'),
  c('horseradish-sauce', 'Horseradish Sauce', 'British', 'Dinner', 'Easy', 10, 0, 8, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Horseradish sauce creamy white grated root bowl roast beef'),
  c('brandy-butter', 'Brandy Butter', 'British', 'Holiday Specials', 'Easy', 15, 0, 12, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Brandy butter pale fluffy pat scoop mince pie Christmas pudding'),
  c('marmalade', 'Marmalade', 'British', 'Breakfast', 'Medium', 40, 140, 30, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Marmalade Seville orange jar amber shreds toast spread'),
  c('lemon-curd', 'Lemon Curd', 'British', 'Desserts', 'Easy', 10, 15, 20, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Lemon curd glossy yellow jar spoon toast scones spread'),
  c('pilau-rice', 'Pilau Rice', 'Indian', 'Dinner', 'Easy', 10, 25, 4, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Pilau rice fluffy basmati golden onions whole spices bowl cardamom'),
  c('pickled-eggs', 'Pickled Eggs', 'British', 'Appetizers', 'Easy', 20, 10, 12, 0, 0, ['Vegetarian'], ['new'], 'Pickled eggs jar malt vinegar amber peppercorns chip shop pub'),
  c('cup-of-tea', 'Cup of Tea', 'British', 'Drinks', 'Easy', 1, 5, 1, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Cup of tea mug builders tea milk steaming teabag brown'),
  c('elderflower-cordial', 'Elderflower Cordial', 'British', 'Drinks', 'Easy', 20, 10, 40, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Elderflower cordial pale bottle lemon slices creamy heads glass diluted'),
  c('lemon-barley-water', 'Lemon Barley Water', 'British', 'Drinks', 'Easy', 10, 30, 6, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Lemon barley water cloudy pale glasses jug lemon slices pitcher'),
  c('shandy', 'Shandy', 'British', 'Drinks', 'Easy', 2, 0, 1, 0, 0, [], ['new'], 'Shandy pint glass lager lemonade lemon slice golden fizzy pub garden'),
  c('hot-buttered-rum', 'Hot Buttered Rum', 'American', 'Drinks', 'Easy', 5, 3, 1, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Hot buttered rum mug cinnamon stick butter floating steaming winter'),
  c('pimms-cup', 'Pimm\'s Cup', 'British', 'Drinks', 'Easy', 10, 0, 6, 0, 0, [], ['new'], 'Pimms jug ice cucumber strawberries mint orange slices lemonade summer'),
  c('gin-and-tonic', 'Gin and Tonic', 'British', 'Drinks', 'Easy', 2, 0, 1, 0, 0, [], ['new'], 'Gin and tonic tall glass ice cubes lime wedge bubbles')
];
