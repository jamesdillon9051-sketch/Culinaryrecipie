'use strict';

/**
 * Volume fifty-eight, second part: twenty-five more French dishes. A savoury
 * loaf, a brioche tart, Alsatian and Auvergne cooking, five chicken and rabbit
 * braises, roasts, a fish, a soup and vegetable sides. Waits of an hour or
 * more are declared as rest. Nutrition is estimated by npm run calc.
 */

module.exports = {
  'cake-sale': {
    d: 'A savoury loaf of ham, green olives and Gruyère in a light batter of eggs, olive oil and milk, baked for 45 minutes at 180C.',
    meta: 'Cake salé, a savoury loaf with ham, olives and Gruyère, baked for 45 minutes. Ten slices, ready in 1 hour.',
    kw: ['cake sale', 'french savoury loaf', 'ham olive and cheese loaf', 'savoury cake for picnics', 'cake sale jambon olives'],
    why: 'Most home versions come out dry or heavy, and the cause is nearly always the ratio of filling to batter. A cake salé is a quick bread, not a bread, so it is mixed in one bowl with no kneading, and it needs just enough batter to hold the ham, olives and cheese together.\n\nEggs, olive oil and milk make a rich, tender crumb. The oil keeps it moist for days, which is why this is a loaf made for picnics and aperitifs. **Toss the filling in a spoonful of flour first** so it does not sink to the bottom of the tin. Dry the olives on kitchen paper, because wet ones leave streaks and soggy pockets.\n\nStir until the flour just disappears. Overmixing makes the loaf tough and tunnelled. It bakes until risen, golden and cracked along the top, and a skewer comes out clean. Cool it in the tin for 10 minutes, then on a rack before slicing. Cut it into thick slices to serve with a drink, or into cubes with toothpicks.',
    ing: [
      '200 g plain flour',
      '11 g baking powder',
      '3 eggs',
      '100 ml olive oil',
      '100 ml whole milk',
      '150 g cooked ham, diced',
      '100 g pitted green olives, halved',
      '100 g Gruyère, grated',
      '1/2 tsp salt',
      '1/4 tsp black pepper'
    ],
    st: [
      'Heat the oven to 180C. Line a 900 g loaf tin.',
      'Mix the flour, baking powder, salt and pepper. Toss the ham, olives and half the cheese in 1 tbsp of the mix.',
      'Whisk the eggs, oil and milk together and stir into the flour until just combined. Fold in the ham, olives and cheese.',
      'Spoon into the tin, smooth the top and scatter over the remaining cheese.',
      'Bake for 45 minutes until risen and golden and a skewer comes out clean.',
      'Cool in the tin for 10 minutes, then on a rack.'
    ],
    tips: [
      'Coat the filling in flour so it stays spread through the loaf.',
      'Dry the olives before adding them.',
      'Stir only until the flour disappears.'
    ],
    pair: ['Green salad', 'Aperitif drinks', 'Soup', 'Cold meats'],
    store: 'Keeps for 4 days wrapped. Freeze sliced for 2 months.',
    nut: [252, 10, 17, 16, 1, 1, 620]
  },

  'tarte-tropezienne': {
    untimed: ['cooling completely'],
    d: 'A split sugar-topped brioche filled with vanilla crème mousseline, made from an enriched dough that rises for an hour and bakes for 25 minutes.',
    meta: 'Tarte tropézienne, a sugared brioche filled with vanilla cream, baked for 25 minutes. Ten servings, ready in 1 hour 25 minutes plus rising and chilling.',
    kw: ['tarte tropezienne', 'brioche with vanilla cream', 'french cream filled brioche', 'sugar topped brioche cake', 'tropezienne cake'],
    why: 'It looks like a bun and eats like a dessert, and the filling is what raises it above both. A tarte tropézienne is a brioche, split and filled with a rich vanilla cream, with crunchy pearl sugar on top for texture. Both halves can be made ahead and put together a few hours before serving.\n\nThe dough is soft and sticky because it holds a great deal of butter and egg. Knead it for 10 minutes until it clears the bowl, and do not be tempted to add flour; the stickiness is what makes the crumb tender. **Give it a full hour to rise** in a warm place, then shape it into a round and prove it again for 40 minutes. Brush with egg and scatter the pearl sugar just before baking.\n\nThe cream is a classic crème pâtissière lightened with whipped cream and softened with butter. Chill it well, because warm cream makes the brioche soggy. Split the cold brioche in two, pipe or spoon the cream on the base, replace the lid and chill for 1 hour. Serve in wedges.',
    ing: [
      '300 g strong white bread flour',
      '7 g fast action yeast',
      '50 g caster sugar',
      '1/2 tsp salt',
      '2 eggs, plus 1 beaten egg for glazing',
      '80 ml whole milk, warm',
      '80 g butter, softened',
      '2 tbsp pearl sugar',
      '300 ml whole milk, for the cream',
      '3 egg yolks',
      '60 g caster sugar, for the cream',
      '25 g cornflour',
      '1 tsp vanilla extract',
      '150 ml double cream, whipped'
    ],
    st: [
      'Mix the flour, yeast, 50 g sugar and salt. Add the 2 eggs and warm milk and knead for 5 minutes. Add the butter a little at a time and knead for 10 minutes until smooth.',
      'Cover and leave to rise for 1 hour until doubled.',
      'Shape into a round on a lined tray and leave for 40 minutes. Heat the oven to 180C.',
      'Brush with beaten egg, scatter with the pearl sugar and bake for 25 minutes until deep golden. Cool on a rack.',
      'Heat the 300 ml milk until steaming. Whisk the yolks, 60 g sugar and cornflour, pour on the milk and return to the pan. Whisk over medium heat for 3 minutes until thick. Stir in the vanilla and cool completely.',
      'Fold the whipped cream into the cold custard. Split the brioche, fill with the cream and chill for 1 hour before serving.'
    ],
    tips: [
      'Do not add flour to the sticky dough.',
      'Cool the custard completely before folding in the cream.',
      'Fill the brioche only a few hours before serving.'
    ],
    pair: ['Coffee', 'Sweet wine', 'Fresh strawberries'],
    store: 'Best on the day. Keeps for 1 day in the fridge once filled.',
    rest: [160, 'Rising and chilling'],
    nut: [308, 8, 33, 16, 1, 17, 320]
  },

  'bugnes': {
    d: 'Crisp, light ribbons of sweet dough scented with orange zest, deep fried until golden and dusted with icing sugar, in 10 minutes.',
    meta: 'Bugnes, crisp fried ribbons of orange-scented dough, cooked for 10 minutes. Twenty bugnes, ready in 35 minutes plus 1 hour of resting.',
    kw: ['bugnes', 'french fried dough ribbons', 'carnival fritters with orange zest', 'crisp sweet fried pastry', 'lyonnaise bugnes'],
    why: 'Roll the dough thinner than feels sensible. That is the quick tip that separates crisp, blistered bugnes from tough, doughy ones. The dough is rolled to about 2 mm, so thin that you can almost see the work surface through it, and it puffs and shatters in hot oil.\n\nThe dough is made from flour, eggs, sugar, butter and a little orange zest, and it has to rest for an hour so the gluten relaxes. Without the rest it springs back as you roll and shrinks when cut. **Cut the ribbons with a knife or a pastry wheel**, make a slit in the middle of each and pull one end through to make a loose knot, which helps them puff.\n\nFry at 170C, a few at a time. They take under a minute a side, puffing and turning golden almost at once. Too cool an oil makes them greasy; too hot browns them before they cook. Drain on paper, and dust with icing sugar while still warm. They are best on the day they are fried, and traditionally made for carnival.',
    ing: [
      '250 g plain flour',
      '2 eggs',
      '40 g caster sugar',
      '40 g butter, melted',
      '1 tbsp zest of an orange',
      '1 pinch salt',
      '60 ml rapeseed oil absorbed, from 750 ml for frying',
      '3 tbsp icing sugar'
    ],
    st: [
      'Mix the flour, sugar, salt and orange zest. Add the eggs and melted butter and knead for 5 minutes into a smooth dough.',
      'Wrap and rest for 1 hour at room temperature.',
      'Roll the dough out to 2 mm thick. Cut into ribbons about 3 cm by 12 cm and make a slit in the centre of each.',
      'Heat the oil to 170C. Fry the bugnes in small batches for 1 minute a side until puffed and golden.',
      'Drain on kitchen paper and dust with the icing sugar while warm.'
    ],
    tips: [
      'Roll the dough very thin so the bugnes turn crisp.',
      'Keep the oil at 170C and fry in small batches.',
      'Dust with icing sugar while they are still warm.'
    ],
    pair: ['Hot chocolate', 'Coffee', 'Cider'],
    store: 'Best on the day. Keeps for 2 days in an airtight tin but softens.',
    rest: [60, 'Resting the dough'],
    nut: [109, 2, 14, 5, 0, 4, 10]
  },

  'baeckeoffe': {
    d: 'Beef, pork and lamb marinated overnight in white wine and baked for 3 hours with potatoes, onions and leeks in a sealed pot.',
    meta: 'Baeckeoffe, an Alsatian meat and potato casserole baked in white wine, cooked for 3 hours. Six servings, ready in 3 hours 30 minutes plus marinating.',
    kw: ['baeckeoffe', 'alsatian meat and potato casserole', 'three meat casserole in white wine', 'beef pork and lamb casserole', 'baeckeoffe recipe'],
    why: 'Where does the broth in a baeckeoffe come from? It comes from the wine the meat was marinated in, and from the juices of three kinds of meat, with the potatoes stacked on top soaking it all up. There is no stock added, which is why the marinade does so much of the work.\n\nThe three meats are beef, pork and lamb, cut into large chunks and left overnight in dry white wine with onions, carrots, garlic and thyme. The acidity tenderises the meat, and the wine seasons everything. **Layer the potatoes in the pot first and last**, thick slices underneath and on top, so they catch the juices and form a tender crust. Seal the lid tightly, traditionally with a rope of dough, or use a layer of foil under the lid.\n\nBake low and slow for 3 hours without lifting the lid. The result is a pot of soft meat in a light, rich liquor, with potatoes that have turned to a soft, savoury mass. Serve it straight from the pot with a green salad and a glass of the same wine.',
    ing: [
      '400 g beef chuck, cut into large chunks',
      '400 g pork shoulder, cut into large chunks',
      '400 g lamb shoulder, cut into large chunks',
      '500 ml dry white wine',
      '2 onions, sliced',
      '2 carrots, sliced',
      '3 garlic cloves, crushed',
      '1 tsp fresh thyme leaves',
      '2 bay leaves',
      '2 leeks, sliced',
      '1 kg potatoes, peeled and thickly sliced',
      '1 tbsp salt',
      '1/2 tsp black pepper'
    ],
    st: [
      'Put the meats in a bowl with the wine, onions, carrots, garlic, thyme, bay leaves, salt and pepper. Cover and marinate in the fridge overnight.',
      'Heat the oven to 160C. Layer half the potatoes in a large casserole.',
      'Lift the meat and vegetables from the marinade and layer them over the potatoes with the leeks. Pour over the marinade.',
      'Top with the remaining potatoes. Cover with foil, press on the lid and bake for 3 hours without opening.',
      'Rest for 10 minutes and serve from the pot.'
    ],
    tips: [
      'Marinate the meat overnight; the wine is the only liquid.',
      'Seal the pot well so the steam stays in.',
      'Do not lift the lid during cooking.'
    ],
    pair: ['Green salad', 'Riesling', 'Pickled gherkins'],
    store: 'Keeps for 4 days in the fridge. Reheat gently.',
    rest: [480, 'Marinating overnight'],
    nut: [628, 41, 44, 32, 6, 7, 1350]
  },

  'bretzel-alsacien': {
    d: 'Soft, chewy pretzels shaped by hand, dipped briefly in a bicarbonate of soda bath and baked for 15 minutes until deep brown.',
    meta: 'Bretzel alsacien, soft chewy pretzels with a dark crust, baked for 15 minutes. Eight pretzels, ready in 55 minutes plus rising.',
    kw: ['bretzel alsacien', 'alsatian soft pretzels', 'homemade soft pretzels', 'pretzels with bicarbonate bath', 'soft salted pretzel recipe'],
    why: 'Keep the bath short. A pretzel owes its dark, glossy crust and its chew to a quick dip in water with bicarbonate of soda, and the dip should last no more than 30 seconds. Any longer and the crust turns bitter and the surface goes slimy.\n\nThe dough is plain: flour, yeast, salt, water and a little butter. It should be smooth and firm, firmer than a loaf dough, so that it keeps its shape when rolled into long ropes. Knead for 8 minutes and rise for an hour. **Roll each rope thin at the ends and thick in the middle**, then cross the ends twice and press them to the belly of the pretzel. A fat middle gives the soft inside; thin arms give the crisp bits.\n\nLower each pretzel into the bubbling bath for 30 seconds, lift with a slotted spoon, and slash the thick part with a sharp knife so it opens as it bakes. Scatter with coarse salt and bake at 220C until deep mahogany. Eat them warm, with butter or mustard.',
    ing: [
      '500 g strong white bread flour',
      '7 g fast action yeast',
      '10 g salt',
      '300 ml warm water',
      '30 g butter, softened',
      '1 litre water, for the bath',
      '50 g bicarbonate of soda',
      '2 tbsp coarse sea salt'
    ],
    st: [
      'Mix the flour, yeast and salt. Add the warm water and butter and knead for 8 minutes into a firm, smooth dough.',
      'Cover and leave to rise for 1 hour until doubled.',
      'Heat the oven to 220C and line two trays. Divide the dough into 8 and roll each into a rope about 60 cm long, thin at the ends and fat in the middle. Shape into pretzels.',
      'Bring the water and bicarbonate of soda to the boil in a wide pan. Lower in each pretzel for 30 seconds, lift out and drain.',
      'Place on the trays, slash the thick part and scatter with the coarse salt.',
      'Bake for 15 minutes until deep brown.'
    ],
    tips: [
      'Dip the pretzels for only 30 seconds.',
      'Roll the ropes thin at the ends and thick in the middle.',
      'Slash the thick part so it opens as it bakes.'
    ],
    pair: ['Mustard', 'Butter', 'Beer', 'Cold cuts'],
    store: 'Best eaten the day they are baked. Freeze for 1 month.',
    rest: [60, 'Rising'],
    nut: [193, 6, 31, 5, 2, 3, 4280]
  },

  'pounti': {
    d: 'A savoury loaf of bacon, prunes and Swiss chard set in a batter of eggs, flour and milk, baked for 60 minutes.',
    meta: 'Pounti, a savoury bake of bacon, prunes and chard, baked for 60 minutes at 180C. Six servings, ready in 1 hour 20 minutes.',
    kw: ['pounti', 'auvergne bacon and prune loaf', 'savoury bake with chard and prunes', 'french country bacon bake', 'pounti recipe'],
    why: 'A Sunday dish for a table of six, and an odd-looking one: a golden loaf studded with green chard, pink bacon and dark prunes. The combination reads strangely on paper and tastes right on the fork, because the sweet prune and the salty bacon play against each other, and the chard keeps it fresh.\n\nThe batter is nothing more than eggs, flour and milk, much like a Yorkshire pudding batter, and it must be thick enough to carry the filling. **Wilt the chard first and squeeze it dry**, because wet greens turn the loaf soggy and stop it setting. Fry the bacon until it gives up its fat, and chop the prunes small so that each slice has some in it.\n\nPour everything into a greased tin and bake until the top is golden and the centre is firm. A skewer should come out clean. It is eaten warm or cold, sliced, with a green salad, and it is a good use for a handful of leftover greens. The loaf keeps well for a few days.',
    ing: [
      '200 g Swiss chard leaves',
      '150 g smoked bacon lardons',
      '100 g pitted prunes, chopped',
      '1 shallot, finely chopped',
      '2 tbsp parsley, chopped',
      '150 g plain flour',
      '4 eggs',
      '300 ml whole milk',
      '1/2 tsp salt',
      '1/4 tsp black pepper'
    ],
    st: [
      'Heat the oven to 180C and grease a 900 g loaf tin.',
      'Blanch the chard in boiling water for 1 minute, drain, squeeze very dry and chop.',
      'Fry the bacon for 6 minutes until the fat runs. Add the shallot for 2 minutes. Mix with the chard, prunes and parsley.',
      'Whisk the flour, eggs, milk, salt and pepper to a smooth batter. Stir in the filling.',
      'Pour into the tin and bake for 60 minutes until golden and firm.',
      'Rest for 10 minutes before slicing.'
    ],
    tips: [
      'Squeeze the cooked chard dry.',
      'Chop the prunes small so each slice has some.',
      'Rest the loaf before slicing.'
    ],
    pair: ['Green salad', 'Cider', 'Dijon mustard'],
    store: 'Keeps for 3 days in the fridge. Good cold or reheated.',
    nut: [386, 22, 34, 18, 2, 10, 700]
  },

  'potee-auvergnate': {
    d: 'A pot of pork shoulder, smoked sausage, cabbage, carrots, turnips and potatoes simmered for 2 hours in one pot.',
    meta: 'Potée auvergnate, a one-pot pork, sausage and cabbage stew, cooked for 2 hours. Six servings, ready in 2 hours 20 minutes.',
    kw: ['potee auvergnate', 'french pork and cabbage stew', 'smoked sausage and cabbage pot', 'french boiled dinner with sausage', 'potee with vegetables'],
    why: 'It looks like a pot of boiled meat and cabbage and behaves like a feast, because the broth is as good as the meat. A potée is a boiled dinner, a whole meal cooked in one pot, and the French country cook served the broth first, then the meat and vegetables on a platter.\n\nStart with the pork shoulder and cover it with cold water, which draws out flavour into the liquid. Bring it to a gentle simmer and skim for 10 minutes. **Add the vegetables in order of how long they take**: carrots, turnips and the onion first, the sausage after an hour, and the cabbage and potatoes for the last 30 minutes. Everything finishes together this way, and nothing turns to mush.\n\nA studded onion, bay leaf and peppercorns scent the broth. Keep the heat low enough that the surface barely moves; a hard boil clouds the stock and toughens the meat. Serve the meat sliced, with the vegetables and Dijon mustard and gherkins on the side. Keep the broth for soup the next day.',
    ing: [
      '800 g pork shoulder',
      '300 g smoked sausage',
      '1 onion, studded with 3 cloves',
      '3 carrots, thickly sliced',
      '300 g turnips, quartered',
      '2 leeks, cut in chunks',
      '500 g green cabbage, quartered',
      '600 g potatoes, halved',
      '2 bay leaves',
      '1 tsp black peppercorns',
      '2 litres water',
      '1 tsp salt'
    ],
    st: [
      'Put the pork in a large pot with the water, onion, bay leaves, peppercorns and salt. Bring to a simmer and skim for 10 minutes.',
      'Add the carrots, turnips and leeks and simmer gently for 50 minutes.',
      'Add the sausage and simmer for 30 minutes.',
      'Add the cabbage and potatoes and simmer for 30 minutes more until tender.',
      'Lift out the meat and slice. Serve on a platter with the vegetables and a ladle of the broth.'
    ],
    tips: [
      'Start the pork in cold water and skim the scum.',
      'Add the vegetables in stages so none turns to mush.',
      'Keep the broth for soup.'
    ],
    pair: ['Dijon mustard', 'Gherkins', 'Rye bread', 'Dry white wine'],
    store: 'Keeps for 4 days in the fridge. The broth freezes for 3 months.',
    nut: [575, 35, 39, 31, 8, 10, 960]
  },

  'lapin-chasseur': {
    d: 'Rabbit pieces braised for 60 minutes with mushrooms, tomato, shallots and white wine, finished with tarragon.',
    meta: 'Lapin chasseur, rabbit braised with mushrooms and white wine, cooked for 1 hour. Four servings, ready in 1 hour 20 minutes.',
    kw: ['lapin chasseur', 'hunter style rabbit', 'rabbit with mushrooms and white wine', 'french rabbit casserole', 'rabbit chasseur recipe'],
    why: 'It is cooked the same way as chicken chasseur, which is the quickest way to understand it: a braise with mushrooms, tomato, shallots and white wine, finished with tarragon. The rabbit takes the place of the chicken, and it needs a bit longer and a gentler heat.\n\nA young rabbit is tender, and its flavour is mild, so the sauce should be savoury without overpowering it. Brown the jointed pieces well in a mix of butter and oil, then set them aside and cook the mushrooms in the same pot until they lose their water. **Do not crowd the mushrooms**, because they steam and turn grey instead of browning. Add shallots, garlic, tomato purée and wine, and scrape up everything stuck to the base.\n\nReturn the rabbit, cover, and simmer very gently for 60 minutes. Rabbit is lean, and a hard boil makes it stringy. Taste the sauce at the end and add the tarragon just before serving, because its aniseed taste fades in long cooking. Mashed potato or tagliatelle goes well with it.',
    ing: [
      '1 rabbit, about 1.2 kg, jointed',
      '1 tbsp butter',
      '1 tbsp rapeseed oil',
      '250 g chestnut mushrooms, quartered',
      '3 shallots, chopped',
      '2 garlic cloves, crushed',
      '1 tbsp tomato purée',
      '150 ml dry white wine',
      '250 ml chicken stock',
      '200 g chopped tomatoes',
      '1 tbsp fresh tarragon, chopped',
      '1/2 tsp salt'
    ],
    st: [
      'Season the rabbit with the salt. Heat the butter and oil in a casserole and brown the rabbit for 8 minutes, turning. Lift out.',
      'Cook the mushrooms in the same pot for 6 minutes until golden. Add the shallots and garlic for 2 minutes, then the tomato purée.',
      'Pour in the wine, boil for 2 minutes, then add the stock and tomatoes.',
      'Return the rabbit, cover and simmer gently for 60 minutes until tender.',
      'Stir in the tarragon and taste for salt.'
    ],
    tips: [
      'Brown the rabbit well before braising.',
      'Cook the mushrooms in batches so they colour.',
      'Add the tarragon at the end.'
    ],
    pair: ['Mashed potatoes', 'Tagliatelle', 'Green beans'],
    store: 'Keeps for 3 days in the fridge. Reheat gently.',
    nut: [483, 67, 11, 19, 2, 6, 650]
  },

  'poulet-vallee-dauge': {
    d: 'Chicken pieces browned and braised with apples, cider and calvados, then finished with cream, in 50 minutes.',
    meta: 'Poulet Vallée d\'Auge, chicken braised with apples, cider and cream, cooked for 50 minutes. Four servings, ready in 1 hour 5 minutes.',
    kw: ['poulet vallee d\'auge', 'chicken with apples and cider', 'normandy chicken with cream', 'chicken in cider and calvados', 'french apple and cream chicken'],
    why: 'Most home versions come out sweet and sticky, and the fix is to choose a dry cider and a sharp apple. The sauce is meant to taste of apples and cream, not of sugar, and a sweet cider with a sweet apple tips it over.\n\nBrown the chicken pieces well in butter, skin-side down first, until they are deep gold. Take them out and soften shallots in the same pan, then add a splash of calvados, if you have it. **Flame it or boil it for 30 seconds** to burn off the harshness of the alcohol. Pour in the cider, scrape up the base and add the chicken back in with half the apples.\n\nSimmer, covered, for 30 minutes, then take off the lid. The sauce reduces while the chicken finishes cooking. Fry the remaining apple slices in butter until golden and use them as a garnish. Stir in the cream last, off the boil, and taste for salt and a squeeze of lemon. Serve with rice or boiled potatoes.',
    ing: [
      '1 kg chicken thighs, skin on',
      '1/2 tsp salt',
      '30 g butter',
      '2 shallots, chopped',
      '3 tbsp calvados',
      '300 ml dry cider',
      '3 firm dessert apples, cored and sliced',
      '150 ml double cream',
      '1 tsp lemon juice',
      '1 tsp fresh thyme leaves'
    ],
    st: [
      'Season the chicken with the salt. Brown in half the butter in a wide pan for 10 minutes, skin side down first. Lift out.',
      'Cook the shallots for 3 minutes. Add the calvados and boil for 30 seconds.',
      'Pour in the cider, add the thyme and half the apples and return the chicken. Cover and simmer for 30 minutes.',
      'Meanwhile fry the remaining apple slices in the rest of the butter for 5 minutes until golden.',
      'Uncover the pan and simmer for 5 minutes. Stir in the cream and lemon juice off the boil.',
      'Serve with the fried apples on top.'
    ],
    tips: [
      'Choose dry cider and firm, slightly sharp apples.',
      'Boil the calvados for 30 seconds to soften it.',
      'Add the cream off the boil so it does not split.'
    ],
    pair: ['Rice', 'Boiled potatoes', 'Green beans'],
    store: 'Keeps for 2 days in the fridge. Reheat gently.',
    nut: [591, 51, 27, 31, 4, 19, 540]
  },

  'poulet-au-vinaigre': {
    d: 'Chicken pieces browned and simmered in a sauce of red wine vinegar, tomato and cream, until the sauce turns glossy and tangy, 45 minutes.',
    meta: 'Poulet au vinaigre, chicken in a tangy red wine vinegar and cream sauce, cooked for 45 minutes. Four servings, ready in 1 hour.',
    kw: ['poulet au vinaigre', 'chicken in vinegar sauce', 'french vinegar chicken', 'chicken with red wine vinegar and cream', 'vinegar chicken recipe'],
    why: 'The smell of vinegar hitting a hot pan is sharp, and it is the first clue that this is a dish that tastes better than it smells. Boiled down with tomato and finished with cream, red wine vinegar loses its harshness and turns into a mellow, tangy sauce that cuts through the richness of the chicken.\n\nBrown the chicken pieces well on all sides, as the base of the sauce is the browned bits stuck to the pan. Set the chicken aside, soften the shallots and garlic, and then pour in the vinegar. **Let it bubble for a full 2 minutes** until the sharp smell mellows and the liquid has reduced by half. Skipping this step leaves a raw, acidic taste in the finished dish.\n\nAdd the tomato and stock, return the chicken and simmer until it is cooked through and the sauce has thickened. Stir in the cream at the end, off the heat, to round the flavour. If it tastes too sharp, a pinch of sugar or a bit more cream fixes it. Serve with rice or potatoes to soak up the sauce.',
    ing: [
      '1 kg chicken thighs, skin on',
      '1/2 tsp salt',
      '1 tbsp rapeseed oil',
      '2 shallots, chopped',
      '2 garlic cloves, crushed',
      '100 ml red wine vinegar',
      '2 tbsp tomato purée',
      '200 ml chicken stock',
      '100 g chopped tomatoes',
      '100 ml double cream',
      '1 tbsp chopped parsley'
    ],
    st: [
      'Season the chicken with the salt. Heat the oil in a wide pan and brown the thighs for 10 minutes, skin side down first. Lift out.',
      'Cook the shallots and garlic in the pan for 2 minutes. Add the vinegar and boil for 2 minutes until reduced by half.',
      'Stir in the tomato purée, stock and chopped tomatoes and return the chicken.',
      'Cover and simmer for 30 minutes until cooked through. Uncover and simmer for 5 minutes to thicken.',
      'Take off the heat, stir in the cream and parsley and taste for salt.'
    ],
    tips: [
      'Boil the vinegar down before adding anything else.',
      'Brown the chicken well for a deeper sauce.',
      'Add the cream off the heat.'
    ],
    pair: ['Rice', 'Boiled potatoes', 'Green beans'],
    store: 'Keeps for 2 days in the fridge. Reheat gently.',
    nut: [448, 51, 7, 24, 1, 3, 710]
  },

  'poulet-a-lestragon': {
    d: 'Chicken pieces browned and cooked in white wine and cream with plenty of fresh tarragon, ready in about an hour.',
    meta: 'Poulet à l\'estragon, chicken in a tarragon and cream sauce, cooked for 40 minutes. Four servings, ready in 55 minutes.',
    kw: ['poulet a l\'estragon', 'tarragon chicken with cream', 'french tarragon chicken', 'chicken in white wine and tarragon', 'creamy tarragon chicken'],
    why: 'Keep the heat low. That is the rule that decides whether the sauce is silky or split, because cream and wine curdle if they are boiled hard. A gentle simmer lets the chicken cook through while the sauce stays smooth and glossy.\n\nTarragon is the whole point of the dish, with its aniseed scent, and it should be used fresh. Add half to the pot while the chicken cooks, so the flavour goes into the sauce, and stir in the rest at the end so it stays bright and green. **Never use dried tarragon here**, which tastes of hay and has none of the fragrance. If you cannot find fresh, choose another dish.\n\nBrown the chicken pieces gently in butter without letting the butter burn, then add shallots and white wine and reduce it. Cover and cook until the chicken is tender, then lift it out while you finish the sauce with cream and a squeeze of lemon. Taste for salt. Serve with rice or buttered new potatoes.',
    ing: [
      '1 kg chicken thighs, skin on',
      '1/2 tsp salt',
      '30 g butter',
      '2 shallots, finely chopped',
      '150 ml dry white wine',
      '150 ml chicken stock',
      '4 tbsp fresh tarragon, chopped',
      '150 ml double cream',
      '1 tsp lemon juice'
    ],
    st: [
      'Season the chicken with the salt. Brown it in the butter in a wide pan over medium heat for 10 minutes. Lift out.',
      'Cook the shallots for 3 minutes. Add the wine and boil for 3 minutes until reduced by half.',
      'Add the stock and half the tarragon and return the chicken. Cover and cook gently for 30 minutes.',
      'Lift out the chicken. Stir the cream into the pan and simmer for 3 minutes until slightly thick.',
      'Stir in the remaining tarragon and lemon juice, return the chicken and warm through.'
    ],
    tips: [
      'Use fresh tarragon, never dried.',
      'Keep the heat low so the cream does not split.',
      'Add half the tarragon at the end for colour.'
    ],
    pair: ['Rice', 'New potatoes', 'Green beans'],
    store: 'Keeps for 2 days in the fridge. Reheat gently.',
    nut: [507, 51, 6, 31, 1, 3, 660]
  },

  'poulet-marengo': {
    d: 'Chicken pieces browned and braised with tomatoes, mushrooms, garlic and white wine, simmered for 50 minutes and served with croutons.',
    meta: 'Poulet Marengo, chicken braised with tomatoes, mushrooms and white wine, cooked for 50 minutes. Four servings, ready in 1 hour 10 minutes.',
    kw: ['poulet marengo', 'chicken marengo', 'chicken with tomatoes and mushrooms in white wine', 'french chicken and tomato casserole', 'marengo chicken'],
    why: 'Quick tip: brown the chicken in oil first, then add the butter. Butter alone burns before the chicken colours, and oil alone gives no flavour. Together they get the skin a deep, even gold, and that colour is the base of the sauce.\n\nThe sauce is tomatoes, mushrooms, garlic, white wine and stock, and it is rich and slightly sharp. Use tinned tomatoes for body and a spoonful of tomato purée for depth, and cook the mushrooms separately until golden so they keep their flavour and do not turn grey. **Add the wine to the hot pan and boil it for 2 minutes** to burn off the raw alcohol taste before the stock goes in.\n\nSimmer the chicken, covered, until a knife slides easily into the thickest part of a thigh, then uncover for the last 10 minutes to thicken the sauce. Garnish with parsley and, in the classic style, with croutons fried in butter, which stay crisp at the side of the plate. Serve with rice or boiled potatoes.',
    ing: [
      '1 kg chicken thighs, skin on',
      '1/2 tsp salt',
      '1 tbsp rapeseed oil',
      '1 tbsp butter',
      '250 g chestnut mushrooms, halved',
      '1 onion, chopped',
      '3 garlic cloves, crushed',
      '1 tbsp tomato purée',
      '150 ml dry white wine',
      '400 g tinned chopped tomatoes',
      '150 ml chicken stock',
      '4 slices bread, cut into triangles',
      '2 tbsp chopped parsley'
    ],
    st: [
      'Season the chicken. Brown it in the oil and half the butter in a casserole for 10 minutes. Lift out.',
      'Cook the mushrooms in the pot for 5 minutes until golden. Lift out. Cook the onion for 5 minutes, then add the garlic and tomato purée for 1 minute.',
      'Add the wine, boil for 2 minutes, then add the tomatoes and stock. Return the chicken.',
      'Cover and simmer for 30 minutes. Add the mushrooms, uncover and cook for 10 minutes.',
      'Fry the bread in the remaining butter until golden. Scatter the parsley over the chicken and serve with the croutons.'
    ],
    tips: [
      'Brown the chicken in oil first, then butter.',
      'Cook the mushrooms separately so they stay golden.',
      'Fry the croutons just before serving.'
    ],
    pair: ['Rice', 'Boiled potatoes', 'Green salad'],
    store: 'Keeps for 3 days in the fridge. Reheat gently.',
    nut: [499, 56, 26, 19, 3, 7, 810]
  },

  'gigot-de-sept-heures': {
    d: 'A leg of lamb cooked for 7 hours at a very low heat in white wine and vegetables until it can be eaten with a spoon.',
    meta: 'Gigot de sept heures, lamb leg cooked for 7 hours until spoon tender. Eight servings, ready in 7 hours 20 minutes.',
    kw: ['gigot de sept heures', 'seven hour lamb', 'slow cooked leg of lamb', 'spoon tender french lamb', 'lamb leg in white wine'],
    why: 'Keep the heat low. That is the whole recipe, and the part people skip. A leg of lamb cooked for 7 hours at 120C stops being a roast to be carved and becomes a dish served with a spoon, with meat so soft that it comes off the bone at the touch.\n\nA slow braise needs very little. Brown the leg well on all sides to build flavour, then set it on a bed of carrots, onions, garlic and tomatoes in a heavy pot with a tight lid. Pour in white wine and stock, to come about a third of the way up the meat. **Seal the pot with foil under the lid** so the steam stays in and the leg can cook in its own juices for the full time.\n\nAfter 7 hours, lift the leg onto a dish and skim the fat from the juices, which you can boil down into a gravy. The meat will fall into pieces if you try to carve it, so serve it in spoonfuls with the vegetables and the sauce. It suits a table of eight and needs almost no attention. Mashed potatoes or white beans are the best partners.',
    ing: [
      '2 kg leg of lamb, bone in',
      '1 tsp salt',
      '2 tbsp rapeseed oil',
      '4 carrots, chopped',
      '2 onions, quartered',
      '1 head garlic, halved across',
      '400 g tinned chopped tomatoes',
      '300 ml dry white wine',
      '300 ml chicken stock',
      '6 g thyme sprigs',
      '2 bay leaves'
    ],
    st: [
      'Heat the oven to 120C. Season the lamb with the salt. Brown it in the oil in a large casserole for 15 minutes, turning. Lift out.',
      'Put the carrots, onions, garlic and tomatoes in the pot and lay the lamb on top. Add the wine, stock, thyme and bay leaves.',
      'Cover with foil, press on the lid and cook in the oven for 7 hours until the lamb is falling off the bone.',
      'Lift the lamb onto a dish. Skim the fat from the juices and boil them for 10 minutes to thicken.',
      'Serve in spoonfuls with the vegetables and the sauce.'
    ],
    tips: [
      'Keep the oven at 120C; do not raise it to hurry.',
      'Seal the pot with foil under the lid.',
      'Skim the fat from the juices before serving.'
    ],
    pair: ['Mashed potatoes', 'White beans', 'Green beans', 'Red wine'],
    store: 'Keeps for 4 days in the fridge. Reheat gently in the juices.',
    nut: [514, 42, 10, 34, 2, 5, 590]
  },

  'ris-de-veau': {
    d: 'Veal sweetbreads soaked, blanched, pressed and pan-fried in butter until golden, served in a cream and mushroom sauce.',
    meta: 'Ris de veau, pan-fried sweetbreads with mushrooms and cream, cooked for 25 minutes. Four servings, ready in 55 minutes plus soaking and pressing.',
    kw: ['ris de veau', 'veal sweetbreads in cream sauce', 'pan fried sweetbreads with mushrooms', 'french sweetbreads', 'sweetbreads recipe'],
    why: 'Soak, blanch, press. Those three steps are the whole technique, and they make the difference between sweetbreads that are delicate and those that are strange and soft. The glands are rich in blood and membrane, and the preparation draws both out before any cooking begins.\n\nSoak the sweetbreads in cold water for 2 hours, changing the water twice. Then simmer them gently for 5 minutes in lightly salted water, lift them into iced water and peel away the thin outer membrane and any gristle. **Press them under a weight for 1 hour** in the fridge, between cloths, so they firm up and brown evenly in the pan. Skipping the press leaves a spongy texture.\n\nDust the pieces with flour and fry them in hot butter for 4 minutes a side until crisp and golden outside, soft inside. Make a sauce in the same pan with mushrooms, shallot, white wine and cream, and spoon it around, not over the top, so the crust stays crisp. Serve at once, on hot plates.',
    ing: [
      '600 g veal sweetbreads',
      '1 tsp salt, for blanching',
      '30 g plain flour',
      '60 g butter',
      '1 tbsp rapeseed oil',
      '200 g chestnut mushrooms, sliced',
      '2 shallots, finely chopped',
      '100 ml dry white wine',
      '150 ml double cream',
      '1 tbsp chopped parsley'
    ],
    st: [
      'Soak the sweetbreads in cold water for 2 hours, changing the water twice. Drain.',
      'Simmer in lightly salted water for 5 minutes, then lift into iced water. Peel off the membrane and any gristle.',
      'Wrap in a cloth, put on a tray and chill under a weight for 1 hour.',
      'Cut the sweetbreads into thick slices and dust with the flour. Fry in half the butter and the oil for 4 minutes a side until golden. Lift out.',
      'Cook the mushrooms and shallots in the remaining butter for 5 minutes. Add the wine and boil for 2 minutes, then the cream and simmer for 3 minutes.',
      'Spoon the sauce onto plates, lay the sweetbreads beside it and scatter with the parsley.'
    ],
    tips: [
      'Soak, blanch and press the sweetbreads before cooking.',
      'Pat them dry and flour them just before frying.',
      'Serve at once so the crust stays crisp.'
    ],
    pair: ['Buttered spinach', 'Mashed potatoes', 'White wine'],
    store: 'Eat at once. Raw sweetbreads keep for 1 day in the fridge.',
    rest: [180, 'Soaking and pressing'],
    nut: [489, 35, 13, 33, 1, 4, 740]
  },

  'roti-de-porc-au-lait': {
    d: 'A pork roast simmered for 90 minutes in milk with garlic and sage until the milk curdles into a nutty, golden sauce.',
    meta: 'Rôti de porc au lait, pork roast braised in milk with garlic and sage, cooked for 1 hour 30 minutes. Six servings, ready in 1 hour 45 minutes.',
    kw: ['roti de porc au lait', 'pork braised in milk', 'milk braised pork roast', 'french pork roast with garlic and sage', 'pork in milk sauce'],
    why: 'Pork in milk sounds like a mistake, and it is one of the best things you can do to a pork loin. The milk cooks the meat gently, keeps it moist and, as it reduces, turns into a golden sauce of soft curds with a nutty, caramel flavour.\n\nBrown the roast all over in butter and oil first, because the colour carries into the sauce. Add garlic, sage and a strip of lemon zest, then pour in enough milk to come halfway up the meat. **Keep the heat low and the pot partly covered**, so the milk simmers but never boils over. As it reduces, it separates into curds, and that is correct, not a fault.\n\nTurn the roast every 20 minutes. By the end the liquid will have shrunk to a thick, pale-brown sauce. Lift out the meat, rest it for 10 minutes and slice, then spoon the sauce over. If it is too thick, loosen it with a splash of water or stock. Mashed potatoes are the natural partner.',
    ing: [
      '1.2 kg boneless pork loin, tied',
      '1 tsp salt',
      '1 tbsp butter',
      '1 tbsp rapeseed oil',
      '4 garlic cloves, unpeeled',
      '6 sage leaves',
      '1 strip lemon zest',
      '1 litre whole milk',
      '1/4 tsp black pepper'
    ],
    st: [
      'Season the pork with the salt and pepper. Brown it in the butter and oil in a heavy pot for 10 minutes, turning. Pour off the fat.',
      'Add the garlic, sage, lemon zest and enough of the milk to come halfway up the meat. Bring to a gentle simmer.',
      'Partly cover and cook on low for 90 minutes, turning every 20 minutes and adding the remaining milk as it reduces.',
      'Lift out the pork and rest for 10 minutes.',
      'Skim the sauce, taste it and loosen with water if it is too thick. Slice the pork and spoon over the sauce.'
    ],
    tips: [
      'Keep the heat low so the milk does not boil over.',
      'Do not worry if the milk curdles; it makes the sauce.',
      'Rest the pork before slicing.'
    ],
    pair: ['Mashed potatoes', 'Green beans', 'Roasted carrots'],
    store: 'Keeps for 3 days in the fridge. Reheat gently in the sauce.',
    nut: [448, 48, 10, 24, 0, 8, 580]
  },

  'filet-de-porc-moutarde': {
    d: 'Pork tenderloin browned and roasted until just cooked, then sliced and served with a mustard cream sauce made in the same pan.',
    meta: 'Filet de porc à la moutarde, pork tenderloin in a mustard and cream sauce, cooked for 40 minutes. Four servings, ready in 55 minutes.',
    kw: ['filet de porc moutarde', 'pork tenderloin in mustard sauce', 'pork with mustard and cream', 'french mustard pork', 'pork fillet with dijon sauce'],
    why: 'Most home versions come out dry, and the fix is to take the pork out of the oven earlier than feels right. A tenderloin is a lean muscle that cooks in minutes, and it carries on cooking as it rests, so the target is 63C in the centre, not the 75C of old advice.\n\nBrush the tenderloin with Dijon mustard before browning, which seasons it and helps the crust colour. Sear it on all sides in a hot ovenproof pan, then finish it in a hot oven for about 15 minutes. **Rest it for 10 minutes under foil**, while you make the sauce, because slicing it straight from the oven spills the juices.\n\nThe sauce is made in the same pan: shallots, white wine boiled down by half, stock, and then cream and more mustard stirred in off the heat. The mustard should be added at the end, because boiling dulls its sharpness. Slice the pork into thick rounds and pour the sauce over. Buttered noodles or a potato gratin goes well.',
    ing: [
      '2 pork tenderloins, about 700 g total',
      '3 tbsp Dijon mustard',
      '1/2 tsp salt',
      '1 tbsp rapeseed oil',
      '2 shallots, finely chopped',
      '100 ml dry white wine',
      '150 ml chicken stock',
      '100 ml double cream',
      '1 tbsp wholegrain mustard'
    ],
    st: [
      'Heat the oven to 200C. Brush the pork with 1 tbsp of the Dijon mustard and season with the salt.',
      'Sear in the oil in an ovenproof pan for 6 minutes, turning. Roast for 15 minutes until the centre reaches 63C.',
      'Lift out, cover with foil and rest for 10 minutes.',
      'Cook the shallots in the pan for 2 minutes. Add the wine and boil for 3 minutes, then the stock and boil for 3 minutes more.',
      'Take off the heat and stir in the cream and the remaining mustards.',
      'Slice the pork and spoon the sauce over.'
    ],
    tips: [
      'Take the pork out at 63C and rest it.',
      'Add the mustard to the sauce off the heat.',
      'Slice thickly so the slices stay juicy.'
    ],
    pair: ['Buttered noodles', 'Potato gratin', 'Green beans'],
    store: 'Keeps for 2 days in the fridge. Slice cold for sandwiches.',
    nut: [351, 39, 6, 19, 1, 3, 810]
  },

  'jambon-braise-madere': {
    d: 'A gammon joint soaked, simmered and then glazed and braised for 2 hours in Madeira with shallots and stock.',
    meta: 'Jambon braisé au Madère, gammon braised in Madeira, cooked for 2 hours. Eight servings, ready in 2 hours 15 minutes.',
    kw: ['jambon braise madere', 'gammon braised in madeira', 'braised ham with madeira sauce', 'french ham in madeira', 'madeira glazed gammon'],
    why: 'It is a ham for a table of eight, and a dish for a holiday weekend. Braising a gammon joint in Madeira keeps it moist, seasons it from the inside and gives you a glossy, dark sauce to serve beside it.\n\nGammon is cured, so it is salty, and the first step is to soak it overnight in cold water, or simmer it for 20 minutes in fresh water and pour that water away. **Skipping this makes the sauce too salty to eat.** Then drain, pat dry and brown the joint lightly in butter, which gives the sauce a start.\n\nThe braise itself is gentle: shallots, Madeira, stock and a few peppercorns, covered, in a low oven for 2 hours, basting every 30 minutes. The sauce is reduced at the end until it coats a spoon, and a few drops of cream or a knob of butter make it silky. Slice the ham thickly and serve it hot with the sauce, with spinach or a potato gratin.',
    ing: [
      '1.5 kg gammon joint',
      '1 tbsp butter',
      '4 shallots, halved',
      '200 ml Madeira',
      '400 ml chicken stock',
      '2 bay leaves',
      '1 g black peppercorns',
      '100 ml double cream'
    ],
    st: [
      'Cover the gammon with cold water, bring to the boil and simmer for 20 minutes. Drain, discard the water and pat the joint dry.',
      'Heat the oven to 160C. Brown the gammon lightly in the butter in a casserole for 6 minutes.',
      'Add the shallots, Madeira, stock, bay leaves and peppercorns. Cover and cook in the oven for 2 hours, basting every 30 minutes.',
      'Lift out the gammon and rest for 15 minutes.',
      'Strain the sauce into a pan and boil for 10 minutes until it coats a spoon. Stir in the cream.',
      'Slice the gammon and serve with the sauce.'
    ],
    tips: [
      'Blanch the gammon first to remove excess salt.',
      'Baste every 30 minutes for a glossy finish.',
      'Reduce the sauce until it coats a spoon.'
    ],
    pair: ['Buttered spinach', 'Potato gratin', 'Green beans'],
    store: 'Keeps for 4 days in the fridge. Good cold in sandwiches.',
    nut: [311, 39, 5, 15, 1, 3, 2240]
  },

  'dorade-royale': {
    d: 'A whole sea bream roasted on a bed of fennel and lemon with white wine and olive oil, ready in 35 minutes.',
    meta: 'Dorade royale, whole sea bream roasted with fennel and lemon, cooked for 25 minutes. Two servings, ready in 35 minutes.',
    kw: ['dorade royale', 'whole roasted sea bream', 'sea bream with fennel and lemon', 'french baked sea bream', 'roast dorade with white wine'],
    why: 'Why does a whole fish cook better than a fillet? The bones and skin protect the flesh, hold in the juices and add flavour to the cooking liquid, so a whole bream stays moist even if it is a minute or two over. The reward is a fish that looks impressive on the table and is almost impossible to ruin.\n\nAsk the fishmonger to scale and gut it. Slash the thickest part of each side three times, down to the bone, so the heat gets in evenly. **Stuff the cavity with lemon slices, fennel fronds and thyme**, and lay the fish on a bed of sliced fennel and onion. The vegetables raise it off the tray so the underside does not stew, and they flavour the wine and oil that pool beneath.\n\nRoast in a hot oven until the flesh near the bone is opaque and lifts easily from the spine, which takes about 25 minutes for a 600 g fish. Serve with the juices spooned over. To fillet at the table, run a knife along the backbone and lift off the top fillet, then lift out the bones and take the lower one.',
    ing: [
      '1 whole sea bream, about 700 g, scaled and gutted',
      '1/2 tsp salt',
      '1 fennel bulb, thinly sliced',
      '1 onion, thinly sliced',
      '1 lemon, sliced',
      '4 g thyme sprigs',
      '3 tbsp olive oil',
      '100 ml dry white wine'
    ],
    st: [
      'Heat the oven to 220C. Slash the fish three times on each side and season inside and out with the salt.',
      'Spread the fennel and onion in a roasting dish and drizzle with half the oil.',
      'Stuff the fish with half the lemon and the thyme and lay it on the vegetables. Lay the rest of the lemon on top.',
      'Pour over the wine and the remaining oil.',
      'Roast for 25 minutes until the flesh near the bone is opaque.',
      'Serve with the juices spooned over.'
    ],
    tips: [
      'Slash the thickest part so the fish cooks evenly.',
      'Roast it on a bed of fennel so the base does not stew.',
      'Check near the backbone for doneness.'
    ],
    pair: ['New potatoes', 'Green beans', 'Dry white wine'],
    store: 'Best eaten at once. Keeps for 1 day in the fridge.',
    nut: [719, 73, 19, 39, 6, 9, 910]
  },

  'soupe-de-moules': {
    d: 'A creamy soup of mussels steamed in white wine with shallot and garlic, then finished with the strained cooking liquor and cream, 40 minutes.',
    meta: 'Soupe de moules, creamy mussel soup with white wine and garlic, cooked for 25 minutes. Four servings, ready in 40 minutes.',
    kw: ['soupe de moules', 'french mussel soup', 'creamy mussel and white wine soup', 'mussel soup with garlic and cream', 'mussel chowder french style'],
    why: 'Mussels, shallot, white wine, cream and garlic: five things, and a soup that tastes of the sea. The liquor that comes out of the mussels as they open is the heart of it, so it is never thrown away.\n\nScrub the mussels and pull off the beards. Discard any that are open and will not close when tapped, because a mussel that has died is not safe to eat. Steam them in a covered pot with shallots and wine for 4 minutes, until they just open. **Discard any that stay shut**, then strain the cooking liquid through a fine sieve or a cloth to leave behind any grit.\n\nBuild the soup from that liquor: soften leek and potato in butter, add the strained liquid and a little water, simmer until tender, then blend part of it for body. Stir in the cream and most of the mussel meat, taken from their shells. Keep the shells of a few mussels as garnish. Serve at once with crusty bread, because mussels toughen when they are reheated.',
    ing: [
      '1 kg mussels, scrubbed',
      '30 g butter',
      '2 shallots, chopped',
      '1 leek, sliced',
      '2 garlic cloves, crushed',
      '300 g potatoes, diced',
      '150 ml dry white wine',
      '500 ml water',
      '150 ml double cream',
      '2 tbsp chopped parsley',
      '1/4 tsp black pepper'
    ],
    st: [
      'Put the wine and half the shallots in a large pot, bring to the boil, add the mussels, cover and steam for 4 minutes until open. Discard any that stay shut.',
      'Strain the liquor through a fine sieve. Pick the meat from most of the mussels and keep a few in their shells.',
      'Melt the butter and cook the leek, remaining shallot and garlic for 6 minutes. Add the potatoes, liquor and water and simmer for 15 minutes.',
      'Blend half the soup and return it to the pan. Stir in the cream, pepper and mussel meat and warm gently for 2 minutes.',
      'Serve with the parsley and the mussels in their shells on top.'
    ],
    tips: [
      'Discard mussels that stay shut after cooking.',
      'Strain the liquor to remove any grit.',
      'Do not boil the soup once the mussels are in.'
    ],
    pair: ['Crusty bread', 'Dry white wine', 'Green salad'],
    store: 'Best eaten at once. Keeps for 1 day in the fridge but the mussels toughen.',
    nut: [488, 34, 34, 24, 3, 5, 780]
  },

  'tarte-fine-aux-tomates': {
    d: 'A thin puff pastry tart spread with mustard and topped with overlapping tomato slices, thyme and olive oil, baked for 25 minutes.',
    meta: 'Tarte fine aux tomates, a thin tomato tart on puff pastry, baked for 25 minutes. Four servings, ready in 40 minutes.',
    kw: ['tarte fine aux tomates', 'french tomato tart', 'thin tomato tart on puff pastry', 'tomato and mustard tart', 'summer tomato tart'],
    why: 'This is what to make in the first week the tomatoes taste of tomatoes, because the tart has nothing to hide behind. A sheet of pastry, a layer of mustard, tomato slices, olive oil and thyme: that is the whole list, and the quality of the tomatoes is the quality of the tart.\n\nThe main enemy is water. Slice the tomatoes 5 mm thick, lay them on kitchen paper and sprinkle them lightly with salt for 15 minutes, then pat them dry. **Brush the pastry with Dijon mustard** first, and leave a 2 cm border, which puffs into a golden edge. The mustard seasons the tart and acts as a barrier so the juices do not soak the base.\n\nPrick the middle of the pastry with a fork so it does not rise under the tomatoes, overlap the slices in rows and drizzle with oil. Bake hot, at 200C, on a preheated tray so the base crisps. The tart is ready when the edges are puffed and deep golden and the tomatoes have started to caramelise at the edges. Finish with torn basil.',
    ing: [
      '320 g ready-rolled puff pastry',
      '2 tbsp Dijon mustard',
      '600 g ripe tomatoes, sliced 5 mm thick',
      '1/2 tsp salt',
      '2 tbsp olive oil',
      '1 tsp fresh thyme leaves',
      '1 egg, beaten, for the edge',
      '8 basil leaves'
    ],
    st: [
      'Heat the oven to 200C with a baking tray inside. Salt the tomato slices on kitchen paper for 15 minutes, then pat dry.',
      'Unroll the pastry on baking paper. Score a 2 cm border, prick the middle with a fork and brush with the mustard inside the border.',
      'Lay the tomatoes in overlapping rows inside the border. Drizzle with the oil and scatter with the thyme.',
      'Brush the border with the beaten egg.',
      'Slide onto the hot tray and bake for 25 minutes until deep golden.',
      'Scatter with the basil and serve warm.'
    ],
    tips: [
      'Salt the tomato slices and pat them dry.',
      'Brush the pastry with mustard to seal the base.',
      'Bake on a hot tray so the base crisps.'
    ],
    pair: ['Green salad', 'Goat cheese', 'Rosé'],
    store: 'Best on the day. Reheat at 180C for 10 minutes.',
    nut: [433, 8, 35, 29, 4, 6, 940]
  },

  'gratin-de-blettes': {
    d: 'Swiss chard stalks and leaves cooked and baked in a cheese béchamel under a golden crust, 40 minutes in the oven.',
    meta: 'Gratin de blettes, Swiss chard baked in a cheese béchamel, cooked for 40 minutes. Four servings, ready in 1 hour.',
    kw: ['gratin de blettes', 'swiss chard gratin', 'chard baked in cheese sauce', 'french chard gratin with bechamel', 'chard and gruyere gratin'],
    why: 'A dish for a table of four, built on a vegetable that does not get much attention. Chard has two parts that cook differently: the leaves wilt in a minute, and the stalks need 10, so the two are treated separately and put back together.\n\nSeparate the stalks from the leaves with a knife, cut the stalks into 3 cm lengths and boil them for 8 minutes. Add the leaves for the last minute. **Drain very well and squeeze out the water**, pressing the greens in a clean cloth, because chard holds a lot of liquid and a wet gratin turns out watery. Then make a béchamel from butter, flour and milk, season it with nutmeg and stir in half the cheese.\n\nLayer the greens in a buttered dish, pour over the sauce, top with the rest of the cheese and bake until bubbling and browned. The topping crisps nicely if you add a few breadcrumbs. Serve as a side dish for roast chicken or lamb, or as a supper with bread and a salad.',
    ing: [
      '800 g Swiss chard, stalks and leaves separated',
      '1 tsp salt, for the water',
      '30 g butter',
      '30 g plain flour',
      '400 ml whole milk',
      '100 g Gruyère, grated',
      '1 pinch nutmeg',
      '1/4 tsp black pepper',
      '2 tbsp fresh breadcrumbs'
    ],
    st: [
      'Heat the oven to 190C. Cut the chard stalks into 3 cm lengths and boil in salted water for 8 minutes, adding the leaves for the last minute. Drain, squeeze very dry and chop the leaves.',
      'Melt the butter, stir in the flour for 1 minute and whisk in the milk a little at a time. Simmer for 5 minutes until thick.',
      'Take off the heat and stir in half the Gruyère, the nutmeg and pepper.',
      'Mix the chard with the sauce and tip into a buttered dish.',
      'Scatter with the breadcrumbs and the remaining cheese.',
      'Bake for 40 minutes until bubbling and golden.'
    ],
    tips: [
      'Cook the stalks longer than the leaves.',
      'Squeeze the chard very dry before saucing.',
      'Add breadcrumbs for a crisp top.'
    ],
    pair: ['Roast chicken', 'Roast lamb', 'Green salad'],
    store: 'Keeps for 3 days in the fridge. Reheat at 180C for 15 minutes.',
    nut: [994, 66, 16, 74, 0, 7, 1110]
  },

  'epinards-a-la-creme': {
    d: 'Fresh spinach wilted in butter and finished in cream with a pinch of nutmeg, ready in 25 minutes.',
    meta: 'Épinards à la crème, spinach in butter and cream with nutmeg, cooked for 15 minutes. Four servings, ready in 25 minutes.',
    kw: ['epinards a la creme', 'creamed spinach french style', 'spinach in cream sauce', 'buttered spinach with cream', 'french creamed spinach'],
    why: 'A heap of raw spinach looks like far too much, and then it shrinks to almost nothing. That is the main fact about this dish: 800 g of leaves cooks down to a small bowl, enough for four people as a side dish.\n\nWilt the spinach in batches in a large pan with no oil, because its own water is enough. As soon as each batch turns bright green, lift it into a colander. **Press out the liquid with the back of a spoon**, then chop the spinach roughly. Water left in the spinach dilutes the cream and gives a thin, green puddle instead of a velvety dish.\n\nIn a clean pan, melt butter, then stir in a spoonful of flour to take the edge off the cream, and add the cream and a pinch of nutmeg. Simmer for 2 minutes, add the spinach and warm it through. Season carefully, since spinach tastes flat without salt. It is a classic partner for roast chicken, fish and steak, and it freezes badly, so make only what you need.',
    ing: [
      '800 g fresh spinach, washed',
      '30 g butter',
      '1 shallot, finely chopped',
      '10 g plain flour',
      '150 ml double cream',
      '1 pinch nutmeg',
      '1/2 tsp salt',
      '1/4 tsp black pepper'
    ],
    st: [
      'Wilt the spinach in batches in a large dry pan over medium heat for 1 minute each. Tip into a colander, press out the liquid and chop roughly.',
      'Melt the butter in the pan and cook the shallot for 2 minutes. Stir in the flour for 30 seconds.',
      'Add the cream and nutmeg and simmer for 2 minutes until it thickens slightly.',
      'Stir in the spinach, salt and pepper and warm through for 2 minutes.'
    ],
    tips: [
      'Squeeze out as much liquid as you can.',
      'Season with care; spinach needs salt.',
      'Use fresh nutmeg for the best flavour.'
    ],
    pair: ['Roast chicken', 'Pan-fried fish', 'Steak', 'Poached eggs'],
    store: 'Best fresh. Keeps for 1 day in the fridge.',
    nut: [256, 7, 12, 20, 5, 3, 470]
  },

  'carottes-vichy': {
    d: 'Sliced carrots simmered in water, butter and a little sugar until tender and glazed, finished with parsley, in 35 minutes.',
    meta: 'Carottes Vichy, glazed buttery carrots, cooked for 25 minutes. Four servings, ready in 35 minutes.',
    kw: ['carottes vichy', 'french glazed carrots', 'carrots glazed in butter and sugar', 'vichy carrots', 'buttered carrots with parsley'],
    why: 'Why does a plain dish of carrots taste so good here? Because the water, butter and sugar reduce together into a shiny glaze, and the carrots finish cooking in it. They are never boiled and drained; they absorb their own cooking liquid.\n\nSlice the carrots into even rounds, about 5 mm thick, so they cook at the same speed. Put them in a wide pan with enough water to come about halfway up, a knob of butter, a pinch of sugar and a pinch of salt. **Cook uncovered over medium heat**, so the water evaporates as the carrots soften. By the time they are tender, the liquid should have reduced to a few spoonfuls of buttery syrup.\n\nTilt the pan and toss the carrots in the glaze for the last minute, which coats each slice. If they are still firm and the pan is dry, add a splash more water. Finish with chopped parsley. Carrots this size are tender in about 20 minutes. They are a classic partner for roast meat and chicken, and good for children.',
    ing: [
      '600 g carrots, peeled and sliced 5 mm thick',
      '30 g butter',
      '1 tsp caster sugar',
      '1/2 tsp salt',
      '150 ml water',
      '1 tbsp chopped parsley'
    ],
    st: [
      'Put the carrots, butter, sugar, salt and water in a wide pan.',
      'Bring to a simmer and cook uncovered for 20 minutes, until the carrots are tender and the liquid has reduced to a glaze.',
      'Toss the carrots in the glaze for 1 minute, adding a splash of water if the pan is dry.',
      'Scatter with the parsley and serve.'
    ],
    tips: [
      'Slice the carrots evenly.',
      'Cook uncovered so the liquid reduces to a glaze.',
      'Add a splash of water if the pan dries out too soon.'
    ],
    pair: ['Roast chicken', 'Roast beef', 'Pork chops', 'Grilled fish'],
    store: 'Keeps for 2 days in the fridge. Reheat in a pan.',
    nut: [122, 1, 16, 6, 4, 8, 400]
  },

  'salade-de-betteraves': {
    d: 'Sliced cooked beetroot dressed with a mustard vinaigrette, shallot and parsley, ready in 15 minutes with no cooking.',
    meta: 'Salade de betteraves, beetroot with mustard vinaigrette and shallot, ready in 15 minutes with no cooking. Four servings.',
    kw: ['salade de betteraves', 'french beetroot salad', 'beetroot with mustard vinaigrette', 'beetroot and shallot salad', 'beetroot salad with parsley'],
    why: 'Dress it while the beetroot is still a little warm, or at least at room temperature. Cold from the fridge, beetroot is dull and does not take up the dressing, and warm it drinks in the vinaigrette and tastes of the shallot and mustard.\n\nVacuum-packed cooked beetroot works well and saves an hour. Choose the plain kind, not the pickled one in vinegar. Slice it into rounds or wedges, as you prefer. **Make the vinaigrette in the bowl first**, with mustard, vinegar, salt, pepper and oil, then add the beetroot and toss. Whisking the mustard into the vinegar before the oil goes in produces a thick dressing that clings to the slices.\n\nThe finely chopped shallot gives a sharp, fresh note against the earthy sweetness. Parsley adds colour. Leave the salad for 10 minutes before serving, so the flavours meet. Wear an apron, since beetroot juice stains. It is a classic French starter and part of a plate of crudités, and it is good beside cold meat, goat cheese or smoked fish.',
    ing: [
      '500 g cooked beetroot, sliced',
      '1 shallot, very finely chopped',
      '1 tbsp Dijon mustard',
      '2 tbsp red wine vinegar',
      '4 tbsp olive oil',
      '1/2 tsp salt',
      '1/4 tsp black pepper',
      '2 tbsp chopped parsley'
    ],
    st: [
      'Whisk the mustard, vinegar, salt and pepper in a bowl, then whisk in the oil until thick.',
      'Stir in the shallot.',
      'Add the beetroot and toss gently to coat.',
      'Leave for 10 minutes, then scatter over the parsley and serve.'
    ],
    tips: [
      'Dress the beetroot while it is at room temperature.',
      'Whisk the mustard into the vinegar before the oil.',
      'Leave the salad for 10 minutes before serving.'
    ],
    pair: ['Goat cheese', 'Cold meats', 'Smoked fish', 'Crusty bread'],
    store: 'Keeps for 3 days in the fridge.',
    nut: [194, 3, 14, 14, 4, 9, 470]
  },

  'pommes-sarladaises': {
    d: 'Sliced potatoes fried slowly in duck fat until golden and crisp, then finished with garlic and parsley, ready in 45 minutes.',
    meta: 'Pommes sarladaises, potatoes fried in duck fat with garlic and parsley, cooked for 30 minutes. Four servings, ready in 45 minutes.',
    kw: ['pommes sarladaises', 'potatoes fried in duck fat', 'french garlic and parsley potatoes', 'sarlat style potatoes', 'crispy duck fat potatoes'],
    why: 'An occasion dish for a table of four, and one that takes almost no skill: sliced potatoes fried slowly in duck fat until they are crisp at the edges and soft in the middle, then tossed with garlic and parsley. The smell alone fills the kitchen.\n\nThe potato matters. Choose a waxy variety that holds its shape, and slice it about 3 mm thick. Do not rinse the slices, because the starch on the surface helps them brown and cling together. **Add the garlic at the end**, not at the start, since it burns in a long fry and turns bitter. The parsley goes in with it, so the heat of the potatoes releases its fragrance.\n\nCook in a wide, heavy pan in a single layer if you can, and turn the slices gently every few minutes. They should take about 25 to 30 minutes. If the fat browns too fast, lower the heat. Season with salt only at the end. Duck fat is sold in jars, and the leftover fat can be strained and kept in the fridge for roasting potatoes.',
    ing: [
      '800 g waxy potatoes, peeled and sliced 3 mm thick',
      '4 tbsp duck fat',
      '3 garlic cloves, finely chopped',
      '3 tbsp chopped parsley',
      '1 tsp salt',
      '1/4 tsp black pepper'
    ],
    st: [
      'Heat the duck fat in a wide heavy pan over medium heat.',
      'Add the potato slices in a single layer if you can, in two batches if needed. Fry for 25 minutes, turning gently every few minutes, until golden and tender.',
      'Add the garlic and parsley and cook for 2 minutes.',
      'Season with the salt and pepper and serve at once.'
    ],
    tips: [
      'Do not rinse the potato slices.',
      'Add the garlic at the end so it does not burn.',
      'Turn the slices gently so they do not break up.'
    ],
    pair: ['Roast duck', 'Steak', 'Grilled chicken', 'Green salad'],
    store: 'Best fresh. Reheat in a hot oven for 10 minutes.',
    nut: [291, 4, 35, 15, 5, 2, 600]
  }
};
