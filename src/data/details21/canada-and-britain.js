'use strict';

/**
 * Volume twenty-one — Canada, and two from Britain.
 *
 * The catalogue had no Canadian recipes at all. The five here are the ones
 * every list of Canadian food starts with: poutine, butter tarts, Nanaimo
 * bars, tourtière and maple salmon, with a pan of maple-roasted roots beside
 * them. The British pair, prawn cocktail and beef and barley soup, were the
 * two dishes from the top-searched index that no British volume had reached.
 */

module.exports = {
  'poutine': {
    d: 'Crisp double-fried chips under fresh cheese curds and a hot peppery gravy that softens them. Quebec in a bowl, in about an hour.',
    meta: 'Authentic Quebec poutine: double-fried chips topped with squeaky cheese curds and hot peppery brown gravy poured over so the curds soften but do not melt.',
    kw: ['poutine', 'poutine recipe', 'authentic quebec poutine', 'poutine gravy', 'cheese curds and chips with gravy'],
    why: 'There are three components and each has one rule. The chips must stay crisp under gravy, which means frying twice: once at a low temperature to cook them through and again hot to crisp them. The gravy must be hot and thin enough to run, since a thick gravy sits on top instead of soaking down. And the curds must be fresh, at room temperature and squeaky, so the heat of the gravy softens them without melting them into a pool; cold curds stay hard and melted ones lose their squeak.',
    ing: [
      '# For the chips',
      '1 kg russet potatoes, cut into 1 cm sticks',
      '1.5 litres vegetable oil, for frying',
      '1 tsp fine sea salt',
      '# For the gravy',
      '40 g unsalted butter',
      '40 g plain flour',
      '300 ml beef stock',
      '200 ml chicken stock',
      '1 tsp cider vinegar',
      '1 tsp Worcestershire sauce',
      '0.5 tsp black pepper',
      '0.25 tsp garlic powder',
      'Fine sea salt, to taste',
      '# To assemble',
      '250 g fresh cheese curds, at room temperature'
    ],
    st: [
      'Soak the cut potatoes in cold water for 30 minutes, then drain and dry them completely.',
      'Heat the frying oil to 150°C / 300°F in a deep heavy pot. Fry the potatoes in two batches for 6 minutes, until soft and pale. Lift out and drain on a rack.',
      'Meanwhile melt the butter in a saucepan over medium heat, whisk in the flour and cook 3 minutes, stirring, until it turns the colour of peanut butter.',
      'Whisk in the two stocks a little at a time, then the vinegar, Worcestershire sauce, pepper and garlic powder. Simmer 10 minutes until it coats a spoon but still pours. Season with salt.',
      'Raise the oil to 190°C / 375°F and fry the chips again in two batches for 3 to 4 minutes, until deep golden and crisp. Drain and season with the salt.',
      'Pile the hot chips into four bowls and scatter the curds over.',
      'Bring the gravy back to a boil and pour it over at once so the curds soften. Serve immediately.'
    ],
    tips: [
      'Fry twice. A single fry gives limp chips that collapse under gravy.',
      'Keep the curds at room temperature so the gravy softens them without melting them.',
      'The gravy should be piping hot and thin enough to pour, not thick enough to sit on top.'
    ],
    pair: ['A cold lager', 'A dill pickle', 'A smoked meat sandwich'],
    store: 'Best eaten immediately. Refrigerate leftover gravy up to 4 days and reheat until boiling. Assembled poutine does not keep.',
    nut: [732, 22, 62, 44, 6, 3, 1350]
  },

  'butter-tarts': {
    d: 'Flaky pastry shells filled with a gooey butter, brown sugar and maple filling. The pastry Canadians argue about: runny or set, raisins or none.',
    meta: 'Canadian butter tarts: flaky all-butter pastry filled with a gooey, sticky butter, brown sugar and maple filling, baked until bubbling.',
    kw: ['butter tarts', 'butter tarts recipe', 'canadian butter tarts', 'butter tarts with raisins', 'gooey butter tarts'],
    why: 'The filling is the whole argument: runny or set, raisins or none. What makes it gooey is a high ratio of sugar and butter to egg, baked only until the egg sets at the edge while the middle is still wobbly, so it firms as it cools but stays sticky. A little vinegar cuts the sweetness and helps it set. The pastry has to be cold and thin so it crisps under a wet filling, and the filling is stirred, not whisked, because air makes it puff and crack.',
    ing: [
      '# For the pastry',
      '250 g plain flour',
      '1 tbsp sugar',
      '0.5 tsp fine sea salt',
      '150 g cold unsalted butter, cubed',
      '60 ml ice water',
      '# For the filling',
      '115 g unsalted butter, melted',
      '200 g light brown sugar',
      '60 ml maple syrup',
      '1 large egg',
      '1 tsp vanilla extract',
      '1 tsp white vinegar',
      '0.25 tsp fine sea salt',
      '80 g raisins or chopped pecans'
    ],
    st: [
      'Whisk the flour, sugar and salt, rub in the butter until it looks like coarse crumbs, then stir in the water until the dough holds together. Flatten into a disc, wrap and chill 30 minutes.',
      'Heat the oven to 200°C / 400°F and grease a 12-hole muffin tin.',
      'Roll the dough 3 mm thick, cut twelve 10 cm rounds and press them into the tin.',
      'Stir the melted butter, brown sugar, maple syrup, egg, vanilla, vinegar and salt together gently until smooth. Do not whisk in air.',
      'Divide the raisins between the shells and spoon over the filling to two thirds full.',
      'Bake 15 to 18 minutes, until the pastry is golden and the filling bubbles but still wobbles in the middle.',
      'Cool in the tin 10 minutes, run a knife around each tart, lift out and cool on a rack so the filling sets.'
    ],
    tips: [
      'Stir the filling. Whisking in air makes it puff up and crack.',
      'Take them out while the middle still wobbles. It sets as it cools.',
      'Run a knife around each tart while it is warm, or the sugar glues it to the tin.'
    ],
    pair: ['A cup of tea', 'Black coffee', 'Vanilla ice cream'],
    store: 'Keep in an airtight container 3 days, or refrigerate up to 1 week. Freeze baked tarts for 2 months.',
    nut: [327, 3, 36, 19, 1, 26, 190]
  },

  'nanaimo-bars': {
    d: 'Three layers: a chocolate-coconut crumb base, a pale custard buttercream and a snap of dark chocolate. Two hours of chilling between them.',
    meta: 'Classic no-bake Nanaimo bars: a chocolate, coconut and walnut crumb base, a vanilla custard buttercream layer and a glossy dark chocolate top.',
    kw: ['nanaimo bars', 'nanaimo bars recipe', 'classic nanaimo bars', 'no bake nanaimo bars', 'canadian nanaimo bars with custard layer'],
    why: 'Each layer does a different job. The base is crumbs, coconut and nuts bound with egg that has been cooked gently to a thick custard, so it is chewy and holds together. The middle is a soft butter icing coloured and flavoured with custard powder, which sets to a creamy, fudgy layer. The top is a thin coat of dark chocolate that snaps. The method is really just patience: each layer has to be firm before the next goes on, and the chocolate cooled so it does not melt through the middle.',
    ing: [
      '# For the base',
      '115 g unsalted butter',
      '50 g granulated sugar',
      '30 g unsweetened cocoa powder',
      '1 large egg, beaten',
      '180 g graham cracker or digestive biscuit crumbs',
      '85 g unsweetened desiccated coconut',
      '60 g chopped walnuts',
      '# For the custard layer',
      '115 g unsalted butter, softened',
      '3 tbsp double cream',
      '2 tbsp custard powder',
      '240 g icing sugar, sifted',
      '1 tsp vanilla extract',
      '# For the topping',
      '170 g dark chocolate, chopped',
      '1 tbsp unsalted butter'
    ],
    st: [
      'Line a 20 cm square tin with parchment paper, leaving an overhang on two sides.',
      'Melt the butter, sugar and cocoa in a heatproof bowl set over a pan of barely simmering water, stirring, until smooth.',
      'Whisk in the egg and cook 3 minutes, stirring, until it thickens like custard, then take off the heat.',
      'Stir in the crumbs, coconut and walnuts until combined and press firmly and evenly into the tin. Chill 30 minutes.',
      'Beat the softened butter with the cream, custard powder, icing sugar and vanilla for 3 minutes until fluffy. Spread over the base and chill 30 minutes.',
      'Melt the chocolate and butter together until smooth and leave to cool for 5 minutes so it is fluid but not hot.',
      'Pour over the custard layer, tilt to spread evenly and chill 1 hour until set.',
      'Lift out with the paper and cut into 16 bars with a hot, dry knife, wiping the blade between cuts.'
    ],
    tips: [
      'Chill each layer until firm before adding the next, or they smear.',
      'Let the chocolate cool for a few minutes so it does not melt the custard layer.',
      'Cut with a knife dipped in hot water and wiped dry so the chocolate does not crack.'
    ],
    pair: ['A cup of tea', 'Black coffee', 'A glass of cold milk'],
    store: 'Keep in the refrigerator up to 1 week in an airtight container, or freeze for 3 months. Serve slightly cool.',
    nut: [356, 2, 33, 24, 2, 26, 110],
    rest: [120, 'chilling between the layers']
  },

  'tourtiere': {
    d: 'A double-crust Quebec meat pie of spiced pork and beef, thickened with grated potato. The Christmas Eve pie, in a long afternoon.',
    meta: 'Tourtière, the Quebec meat pie: spiced pork and beef with cinnamon and clove, bound with potato and baked in all-butter pastry until deep golden.',
    kw: ['tourtiere', 'tourtiere recipe', 'french canadian tourtiere', 'quebec meat pie', 'christmas eve meat pie'],
    why: 'The spice is what makes it tourtière rather than an ordinary meat pie: cinnamon, clove and allspice in a pork filling, which smells like Christmas to anyone from Québec. The grated potato is not a filler but a binder, since it dissolves as the filling simmers and thickens the stock so the pie holds together when sliced. The filling has to be cooked almost dry and cooled completely before it goes in the pastry, because hot, wet filling melts the butter and steams the base crust to paste.',
    ing: [
      '# For the pastry',
      '450 g plain flour',
      '1.5 tsp fine sea salt',
      '250 g cold unsalted butter, cubed',
      '120 ml ice water, plus more if needed',
      '1 egg, beaten with 1 tbsp milk',
      '# For the filling',
      '1 tbsp vegetable oil',
      '1 large onion, finely diced',
      '3 garlic cloves, minced',
      '700 g minced pork',
      '300 g minced beef',
      '1 large potato, about 200 g, peeled and grated',
      '250 ml beef stock',
      '1 tsp dried savory or thyme',
      '0.5 tsp ground cinnamon',
      '0.5 tsp ground cloves',
      '0.25 tsp ground allspice',
      '1.5 tsp fine sea salt',
      '0.5 tsp black pepper'
    ],
    st: [
      'Whisk the flour and salt, rub in the butter until pea-sized pieces remain and stir in the water until the dough holds. Divide into one larger and one smaller disc, wrap and chill 1 hour.',
      'Heat the oil in a large pot over medium heat and cook the onion 6 minutes, then the garlic for 1 minute.',
      'Add the pork and beef and cook 10 minutes, breaking up the meat, until no pink remains.',
      'Stir in the potato, stock, savory, cinnamon, cloves, allspice, salt and pepper and simmer uncovered 25 minutes, until thick and almost dry.',
      'Spread the filling on a tray and cool completely, about 1 hour.',
      'Heat the oven to 200°C / 400°F with a baking tray on the lowest shelf.',
      'Roll the larger disc and line a 23 cm deep pie dish. Fill with the cold filling.',
      'Roll the smaller disc, cover the pie, trim, crimp the edge, cut a steam vent in the top and brush with the egg wash.',
      'Bake on the hot tray 15 minutes, then lower to 180°C / 350°F and bake 35 to 40 minutes more, until deep golden.',
      'Rest 15 minutes before slicing.'
    ],
    tips: [
      'Cook the filling almost dry. Wet filling steams the bottom crust.',
      'Cool the filling completely before it goes into the pastry.',
      'Grated potato is the binder. Do not leave it out.'
    ],
    pair: ['Ketchup or chutney', 'Green beans', 'A dark beer or red wine'],
    store: 'Refrigerate up to 4 days and reheat at 170°C for 20 minutes. Freeze baked or unbaked for 3 months and bake from frozen, adding 25 minutes.',
    nut: [529, 24, 34, 33, 3, 3, 700],
    rest: [120, 'chilling the dough and cooling the filling']
  },

  'maple-glazed-salmon': {
    d: 'Salmon fillets brushed twice with a maple, Dijon and garlic glaze and baked until lacquered. Twenty-two minutes.',
    meta: 'Maple glazed salmon: skin-on fillets brushed twice with a maple, Dijon and garlic glaze and baked until lacquered. Ready in 22 minutes.',
    kw: ['maple glazed salmon', 'maple glazed salmon recipe', 'canadian maple salmon', 'baked maple salmon', 'maple mustard salmon'],
    why: 'Maple and salmon are a Canadian pairing that works because the sweetness balances the fish oil and the mustard in the glaze cuts through both. The glaze goes on in two stages: the first coat bakes in and seasons the fish, and the second, brushed on part-way, stays sticky and glossy instead of burning off. A brief grill at the end caramelises the maple sugars, but they go from amber to bitter in seconds, so watch it.',
    ing: [
      '4 skin-on salmon fillets, about 170 g each',
      '3 tbsp maple syrup',
      '2 tbsp Dijon mustard',
      '1 tbsp tamari',
      '2 garlic cloves, grated',
      '1 tsp lemon juice',
      '1 tbsp olive oil',
      '0.5 tsp fine sea salt',
      '0.25 tsp black pepper',
      '2 tbsp chopped chives'
    ],
    st: [
      'Heat the oven to 200°C / 400°F and line a tray with baking paper.',
      'Whisk the maple syrup, mustard, tamari, garlic and lemon juice together.',
      'Pat the salmon dry, rub with the oil, season with the salt and pepper and set skin side down on the tray.',
      'Spoon half the glaze over the fillets.',
      'Bake 10 to 12 minutes, brushing on the remaining glaze after 6 minutes, until the salmon flakes and reads 57°C / 135°F for medium.',
      'For a caramelised top, grill for the final minute, watching closely.',
      'Scatter with chives and serve.'
    ],
    tips: [
      'Glaze in two stages. The first seasons the fish and the second stays glossy.',
      'Take it out at 57°C. Salmon is best just done.',
      'Watch it under the grill. Maple sugar burns in seconds.'
    ],
    pair: ['Maple roasted root vegetables', 'Wild rice', 'Steamed green beans'],
    store: 'Refrigerate up to 3 days and eat cold or reheat at 140°C for 8 minutes. Freeze cooked fillets for 2 months.',
    nut: [372, 34, 14, 20, 0, 13, 560]
  },

  'roasted-root-vegetables': {
    d: 'Carrots, parsnips, swede and sweet potato roasted hard on a hot tray, then glazed with maple syrup and thyme. Sixty-five minutes.',
    meta: 'Roasted root vegetables: carrots, parsnips, swede and sweet potato roasted on a hot tray until caramelised, then glazed with maple and thyme.',
    kw: ['roasted root vegetables', 'roasted root vegetables recipe', 'maple roasted root vegetables', 'oven roasted carrots and parsnips', 'roasted vegetables with thyme'],
    why: 'Root vegetables are full of sugar and starch, which is why they caramelise so well and why they burn if they are crowded or the oven is too cool. A very hot tray sears the cut faces, and spreading them out means they roast in dry heat instead of steaming in each other\'s moisture. The maple goes on late for the same reason the sugar in any glaze does: added at the start it would burn long before the vegetables were tender.',
    ing: [
      '4 carrots, cut into 3 cm chunks',
      '4 parsnips, cut into 3 cm chunks',
      '1 small swede, peeled and cut into 3 cm chunks',
      '1 large sweet potato, peeled and cut into 3 cm chunks',
      '1 red onion, cut into wedges',
      '4 tbsp olive oil',
      '1.5 tsp fine sea salt',
      '0.5 tsp black pepper',
      '2 tbsp maple syrup',
      '1 tbsp fresh thyme leaves',
      '1 tbsp balsamic vinegar',
      '2 tbsp chopped parsley'
    ],
    st: [
      'Heat the oven to 220°C / 425°F with two large baking trays inside.',
      'Toss all the vegetables with the oil, salt and pepper until glossy.',
      'Spread over the hot trays in a single layer without crowding.',
      'Roast 25 minutes.',
      'Drizzle with the maple syrup, scatter over the thyme, turn the vegetables and roast 15 to 20 minutes more, until deep golden at the edges and tender.',
      'Toss with the balsamic vinegar and parsley and serve hot.'
    ],
    tips: [
      'Preheat the trays. Vegetables that hit hot metal brown rather than steam.',
      'Add the maple late or it burns before the vegetables are tender.',
      'Cut everything to the same size so it finishes together.'
    ],
    pair: ['Roast chicken', 'A nut roast', 'Maple glazed salmon'],
    store: 'Refrigerate up to 4 days and re-crisp in a 200°C oven for 10 minutes. Freezing softens them, but they work well blended into soup.',
    nut: [230, 3, 32, 10, 8, 14, 380]
  },

  'prawn-cocktail': {
    d: 'Cold prawns in a Marie Rose sauce on crisp shredded lettuce, the dinner-party starter of the 1970s. Twenty minutes, and nothing to cook.',
    meta: 'Classic prawn cocktail: cold prawns in a tangy Marie Rose sauce of mayonnaise, ketchup, horseradish and lemon, served on crisp lettuce in a glass.',
    kw: ['prawn cocktail', 'prawn cocktail recipe', 'classic prawn cocktail', 'marie rose sauce', 'prawn cocktail starter'],
    why: 'A prawn cocktail is only as good as its sauce and its cold. The prawns must be dry and chilled, the lettuce crisp, and the Marie Rose properly balanced: mayonnaise for body, ketchup for sweetness, horseradish and lemon to cut through both and cayenne for a little warmth. Everything that goes wrong with it, the watery pink pool at the bottom of the glass, the limp lettuce, comes from wet ingredients, so the prawns are patted dry and the lettuce is dressed at the last moment.',
    ing: [
      '# For the Marie Rose sauce',
      '120 g mayonnaise',
      '2 tbsp tomato ketchup',
      '1 tsp creamed horseradish',
      '2 tsp lemon juice',
      '0.5 tsp Worcestershire sauce',
      'A few drops of hot pepper sauce',
      'A pinch of cayenne pepper',
      '0.25 tsp fine sea salt',
      '# For the cocktail',
      '350 g cooked peeled prawns, thawed if frozen',
      '1 Little Gem lettuce, finely shredded',
      '0.5 cucumber, peeled and thinly sliced',
      '1 lemon, cut into wedges',
      'Paprika and chopped dill, to finish',
      'Buttered brown bread, to serve'
    ],
    st: [
      'Mix the mayonnaise, ketchup, horseradish, lemon juice, Worcestershire sauce, hot pepper sauce, cayenne and salt in a bowl. Taste: it should be sweet, tangy and slightly hot.',
      'Pat the prawns very dry with paper towels so they do not thin the sauce.',
      'Fold the prawns into two thirds of the sauce until evenly coated.',
      'Divide the lettuce and cucumber between four glasses or small bowls.',
      'Spoon the prawns on top and drizzle over the remaining sauce.',
      'Dust with paprika, scatter with dill and set a lemon wedge on the rim of each glass.',
      'Serve at once with buttered brown bread.'
    ],
    tips: [
      'Dry the prawns thoroughly. Wet prawns thin the sauce into a pink puddle.',
      'Shred the lettuce finely and add the prawns just before serving so it stays crisp.',
      'Taste the sauce on its own. It should be sharper than you think, since cold food mutes flavour.'
    ],
    pair: ['Buttered brown bread', 'A crisp Sauvignon Blanc', 'A wedge of lemon'],
    store: 'Best assembled just before serving. Refrigerate the sauce up to 3 days and keep prepared prawns covered and cold for a day. The assembled cocktail cannot be frozen.',
    nut: [262, 17, 8, 18, 1, 6, 780]
  },

  'beef-and-barley-soup': {
    d: 'Browned chuck, root vegetables and pearl barley simmered until the beef is spoon-tender and the broth turns thick and hearty. Two hours and fifteen minutes.',
    meta: 'Beef and barley soup: seared chuck, carrots, celery and mushrooms simmered with pearl barley in a rich broth until the beef is spoon-tender.',
    kw: ['beef and barley soup', 'beef and barley soup recipe', 'hearty beef barley soup', 'beef barley soup with vegetables', 'slow simmered beef and barley soup'],
    why: 'Two things go into the pot for different lengths of time. Beef chuck needs an hour of gentle simmering to break down its collagen into gelatin, which is what makes the broth rich and the meat tender, while pearl barley needs only about 35 minutes and turns to mush if it goes in with the beef. So the barley waits, and its starch thickens the soup at the end. Browning the beef properly, in batches, is the flavour base; a crowded pan steams and gives a grey, thin broth.',
    ing: [
      '2 tbsp vegetable oil',
      '700 g beef chuck, cut into 2 cm cubes',
      '1 tsp fine sea salt, divided',
      '1 onion, diced',
      '3 carrots, diced',
      '3 celery sticks, diced',
      '250 g chestnut mushrooms, quartered',
      '4 garlic cloves, minced',
      '2 tbsp tomato purée',
      '2 litres beef stock',
      '2 bay leaves',
      '1 tsp dried thyme',
      '1 tbsp Worcestershire sauce',
      '150 g pearl barley, rinsed',
      '0.5 tsp black pepper',
      '2 tbsp chopped parsley'
    ],
    st: [
      'Pat the beef dry and season with half the salt. Heat 1 tablespoon of the oil in a large heavy pot over high heat and brown the beef in two batches, 4 minutes each. Set aside.',
      'Add the remaining oil, the onion, carrots, celery and mushrooms and cook 8 minutes, until the mushrooms have released their liquid and started to colour.',
      'Add the garlic and tomato purée and cook 2 minutes.',
      'Pour in the stock, scraping up the browned bits, and add the beef, bay leaves, thyme, Worcestershire sauce and pepper.',
      'Bring to a boil, cover and simmer 60 minutes.',
      'Stir in the barley, replace the lid and simmer 35 to 40 minutes more, until the barley and beef are tender.',
      'Season with the remaining salt, remove the bay leaves and stir in the parsley.'
    ],
    tips: [
      'Brown the beef in batches. A crowded pan steams and the broth comes out thin.',
      'Add the barley late. It turns to mush if it simmers for two hours.',
      'The soup thickens overnight, so thin it with stock or water when reheating.'
    ],
    pair: ['Crusty bread', 'A green salad', 'A dark ale'],
    store: 'Refrigerate up to 5 days. It thickens as the barley swells, so loosen with stock when reheating. Freeze for 3 months.',
    nut: [340, 28, 30, 12, 6, 5, 980]
  }
};
