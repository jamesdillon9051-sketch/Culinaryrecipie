/** French recipe details, volume two. See ./italian.js for the field schema. */

module.exports = {
  'croque-monsieur': {
    d: 'The Parisian café sandwich raised to its proper form: ham and Gruyère between buttered pain de mie, blanketed in béchamel and grilled until the top blisters. It is a toastie only in the way a soufflé is an omelette.',
    meta: 'Authentic croque monsieur with ham, Gruyère and a nutmeg béchamel, grilled until the cheese top blisters and browns.',
    kw: ['croque monsieur recipe', 'french ham and cheese sandwich', 'bechamel toastie', 'paris cafe sandwich'],
    why: 'Béchamel on top rather than butter alone is the whole trick — the milk proteins and lactose brown far faster than bread does, so you get a mottled, savoury crust before the interior overcooks. Toasting the bread lightly first builds a moisture barrier that stops the sauce soaking through into a wet middle.',
    ing: [
      '# For the béchamel',
      '40 g unsalted butter',
      '40 g plain flour',
      '450 ml whole milk, warmed',
      '¼ tsp freshly grated nutmeg',
      '1 tsp Dijon mustard',
      '½ tsp fine sea salt',
      '# For the sandwiches',
      '8 slices pain de mie or good white sandwich bread',
      '250 g cooked ham, thickly sliced',
      '200 g Gruyère, coarsely grated',
      '30 g unsalted butter, softened',
      'Black pepper'
    ],
    st: [
      'Melt the butter over medium heat, whisk in the flour and cook for 2 minutes without colouring — this cooks out the raw starch taste.',
      'Add the warm milk in three additions, whisking smooth after each. Simmer 4 minutes until it thickly coats a spoon, then stir in the nutmeg, mustard and salt. Cool slightly.',
      'Heat the grill to high and set a rack about 12 cm below the element.',
      'Butter one side of each slice of bread and toast, buttered side up, for 2 minutes until barely golden.',
      'Turn four slices over. Spread each with a thin layer of béchamel, then a quarter of the ham, then a third of the cheese in total across them. Close with the remaining slices, toasted side down.',
      'Spread the tops generously with the remaining béchamel, right to the edges, and scatter over the rest of the Gruyère.',
      'Grill for 4 to 6 minutes until the top is bubbling and blistered dark brown in patches. Grind over black pepper and eat immediately, with a knife and fork.'
    ],
    tips: [
      'For a croque madame, fry an egg in butter until the white is set and the yolk still runs, and land it on top.',
      'Grate the Gruyère yourself. Pre-shredded cheese is dusted with anti-caking starch that stops it melting into a sheet.',
      'Béchamel that is fridge-cold will tear the bread. Let it come to a spreadable, thick-custard consistency first.'
    ],
    pair: ['A green salad with a sharp mustard vinaigrette', 'Cornichons and Dijon on the side', 'A glass of dry cider or a cold lager'],
    store: 'Best eaten within minutes of grilling. The béchamel keeps 3 days refrigerated with cling film on its surface; loosen with a splash of milk before using.',
    nut: [648, 34, 42, 37, 2, 8, 1480]
  },

  'gratin-dauphinois': {
    d: 'Waxy potatoes simmered in garlicky cream and baked until the top is bronzed and the layers have fused into something closer to a savoury custard than a bake. No cheese, no stock — the potatoes make their own sauce.',
    meta: 'Traditional gratin dauphinois: thin potatoes simmered in garlic cream and baked until bronzed. No cheese, just potato and cream.',
    kw: ['gratin dauphinois recipe', 'french potato gratin', 'creamy scalloped potatoes', 'potatoes dauphinoise'],
    why: 'Simmering the slices in the cream before baking is what separates this from watery scalloped potatoes: the starch leaches out into the cream and thickens it, so the gratin sets rather than splits. Waxy potatoes hold their shape through that double cooking, where floury ones collapse into mash.',
    ing: [
      '1.2 kg waxy potatoes such as Charlotte or Yukon Gold',
      '400 ml double cream',
      '200 ml whole milk',
      '3 garlic cloves, 1 halved and 2 crushed',
      '25 g unsalted butter, for the dish',
      '¼ tsp freshly grated nutmeg',
      '1½ tsp fine sea salt',
      '½ tsp white pepper',
      '1 bay leaf'
    ],
    st: [
      'Heat the oven to 160°C / 320°F. Rub a shallow 25 cm baking dish hard with the cut garlic halves, then butter it generously.',
      'Peel the potatoes and slice them 3 mm thick on a mandoline. Do not rinse them — that starch is your thickener.',
      'Put the cream, milk, crushed garlic, bay, nutmeg, salt and pepper in a wide pan and bring to a bare simmer.',
      'Slide in the potato slices, separating them with a spoon, and simmer very gently for 10 minutes, stirring carefully twice. The cream will visibly thicken.',
      'Fish out the bay leaf. Tip everything into the dish and level the top, pressing the slices down so the cream just covers them.',
      'Bake for 60 to 75 minutes until a knife slips through with no resistance and the top is deeply bronzed. If it browns early, tent loosely with foil.',
      'Rest for 15 minutes before serving. It needs that time to set enough to cut into clean squares.'
    ],
    tips: [
      'A mandoline is not optional here — uneven slices cook unevenly and the gratin will have both raw and disintegrated layers.',
      'Purists use no cheese at all. If you want a crust, 40 g of Gruyère in the last 15 minutes is the discreet compromise.',
      'Assemble a day ahead, refrigerate, and reheat at 150°C / 300°F for 30 minutes — it is arguably better on day two.'
    ],
    pair: ['Roast lamb, beef or a simple roast chicken', 'A bitter leaf salad to cut the richness', 'A red from the Rhône or a Beaujolais'],
    store: 'Refrigerate up to 4 days. Reheat portions covered at 160°C / 320°F for 20 minutes. Freezing splits the cream, so it is not recommended.',
    nut: [432, 7, 34, 31, 3, 4, 620]
  },

  'blanquette-de-veau': {
    d: 'France\'s great white stew: veal poached with aromatics, the broth turned into a velouté enriched with cream and egg yolk, finished with a squeeze of lemon. Nothing is browned, and that restraint is the entire point.',
    meta: 'Classic blanquette de veau — veal poached with aromatics in a cream and egg yolk velouté, finished with lemon.',
    kw: ['blanquette de veau recipe', 'french veal stew', 'creamy veal blanquette', 'white veal stew'],
    why: 'Blanching the veal first and discarding that water removes the scum proteins that would otherwise cloud the sauce grey — a blanquette is judged on its whiteness. The liaison of yolk and cream is added off the heat because yolks scramble at 82°C, well below a simmer.',
    ing: [
      '# For the poaching',
      '1.2 kg veal shoulder or breast, cut into 4 cm pieces',
      '1 onion studded with 3 cloves',
      '2 carrots, halved',
      '1 leek, white part only',
      '1 celery stick',
      '1 bouquet garni',
      '1½ tsp fine sea salt',
      '# For the garnish and sauce',
      '250 g button mushrooms, halved',
      '250 g pearl onions, peeled',
      '50 g unsalted butter',
      '50 g plain flour',
      '150 ml double cream',
      '2 egg yolks',
      '1 tbsp lemon juice',
      'White pepper'
    ],
    st: [
      'Cover the veal with cold water, bring to the boil and simmer 3 minutes. Drain and rinse the pieces well — this is the step that keeps the sauce white.',
      'Return the veal to the clean pan with the studded onion, carrots, leek, celery, bouquet garni and salt. Cover with fresh cold water by 3 cm.',
      'Bring to a bare simmer and cook, uncovered, skimming as needed, for 1 hour 15 minutes until the veal is tender but not falling apart.',
      'Meanwhile simmer the pearl onions and mushrooms separately in a little water with a knob of butter for 10 minutes, then set aside.',
      'Lift out the veal. Strain the broth and measure out 800 ml; discard the poaching vegetables, which have given everything they have.',
      'Melt the butter, whisk in the flour and cook 2 minutes without colouring. Whisk in the hot broth in stages and simmer 10 minutes until it coats a spoon.',
      'Whisk the yolks and cream together. Take the sauce off the heat, ladle in a little hot sauce to temper the liaison, then stir it back in. Do not let it boil again.',
      'Return the veal, onions and mushrooms, add the lemon juice and white pepper, and warm through gently for 5 minutes before serving.'
    ],
    tips: [
      'Chicken thighs make an excellent substitute — poach for 35 minutes rather than 75.',
      'If the sauce ever threatens to break after the liaison, pull it off the heat and whisk in a tablespoon of cold cream.',
      'The lemon at the end is not optional. Without acid the sauce reads flat and heavy.'
    ],
    pair: ['Steamed rice or buttered new potatoes', 'A white Burgundy or dry Alsace Riesling', 'Fresh baguette for the sauce'],
    store: 'Refrigerate up to 3 days. Reheat below a simmer only — boiling will curdle the egg liaison. Freezing is not recommended.',
    nut: [586, 48, 20, 34, 3, 6, 890]
  },

  'moules-marinieres': {
    d: 'Mussels steamed open in white wine, shallots and parsley in under ten minutes. The broth they release is the sauce, and the only correct accompaniment is enough bread to finish every drop of it.',
    meta: 'Moules marinières: mussels steamed in white wine, shallots, garlic and parsley in ten minutes. With frites or bread.',
    kw: ['moules marinieres recipe', 'french mussels white wine', 'mussels in wine sauce', 'moules frites'],
    why: 'Mussels cook by their own steam, so the pan needs a hard heat and a tight lid, not a large volume of liquid — too much wine dilutes the mussel liquor that is the actual flavour. Adding the butter off the heat at the end emulsifies the broth into something glossy rather than thin and boozy.',
    ing: [
      '2 kg live mussels',
      '300 ml dry white wine',
      '3 shallots, finely diced',
      '3 garlic cloves, thinly sliced',
      '50 g unsalted butter, cold and cubed',
      '1 large bunch flat-leaf parsley, chopped',
      '2 bay leaves',
      '1 tbsp olive oil',
      'Black pepper',
      '100 ml double cream, optional'
    ],
    st: [
      'Scrub the mussels under cold running water and pull away the beards. Discard any that are cracked, or any open ones that do not close when tapped firmly.',
      'In your largest lidded pot, soften the shallots in the olive oil over medium heat for 4 minutes without colouring. Add the garlic and bay and cook 1 minute more.',
      'Pour in the wine, raise the heat and boil hard for 2 minutes to drive off the raw alcohol.',
      'Tip in the mussels, clamp on the lid and cook over high heat for 4 to 5 minutes, shaking the pan twice, until the shells have opened.',
      'Lift the mussels into warmed bowls with a slotted spoon, leaving the broth behind. Discard any that stayed shut.',
      'Take the broth off the heat, whisk in the cold butter a cube at a time until glossy, then stir in the parsley and a good grind of pepper. Add the cream now if using.',
      'Pour the broth over the mussels, avoiding the last spoonful in the pan where any grit will have settled. Serve at once.'
    ],
    tips: [
      'Buy mussels the day you cook them and keep them in the fridge under a damp cloth, never sealed in a bag or submerged in water.',
      'Do not salt the broth until the very end. Mussels release a surprising amount of seawater.',
      'Cook in two batches if your pot is not large enough to hold the mussels in a loose double layer.'
    ],
    pair: ['Frites with mayonnaise, for the full moules-frites', 'A crusty baguette', 'Muscadet, Picpoul or a Belgian witbier'],
    store: 'Eat immediately. Cooked mussels do not reheat well; if you must keep leftovers, pick the meat out, cover with the broth and refrigerate for one day, eating them cold.',
    nut: [398, 34, 14, 19, 1, 3, 940]
  },

  'tartiflette': {
    d: 'A Savoyard mountain bake of potatoes, lardons and onions buried under a whole halved Reblochon, which melts down through the layers into a single molten sheet. Ski food, engineered to be eaten after a day in the cold.',
    meta: 'Alpine tartiflette with potatoes, lardons, onions and a whole Reblochon melted over the top. The classic Savoie bake.',
    kw: ['tartiflette recipe', 'french potato bacon cheese bake', 'reblochon recipe', 'savoyard tartiflette'],
    why: 'Par-boiling the potatoes and then browning them means the interiors are cooked through before the cheese goes on, so the bake only needs long enough to melt — twenty minutes, not an hour that would dry out the lardons. Reblochon\'s washed rind carries most of the flavour, which is why it goes on rind and all.',
    ing: [
      '1 kg waxy potatoes, peeled and cut into 2 cm chunks',
      '1 whole Reblochon, about 450 g',
      '250 g smoked lardons or diced pancetta',
      '2 large onions, sliced',
      '2 garlic cloves, 1 halved and 1 crushed',
      '150 ml dry white wine',
      '150 ml crème fraîche',
      '1 tbsp olive oil',
      'Black pepper',
      'Salt, sparingly'
    ],
    st: [
      'Boil the potatoes in well-salted water for 8 minutes — they should still meet a knife with some resistance. Drain and steam dry.',
      'Heat the oven to 190°C / 375°F. Rub a gratin dish with the cut garlic clove.',
      'Fry the lardons in the olive oil over medium heat until the fat has rendered and the edges are crisp, about 8 minutes. Lift out.',
      'Add the onions to the fat and cook for 12 minutes until soft and golden, adding the crushed garlic for the last minute.',
      'Pour in the wine and let it bubble away almost entirely, scraping the base of the pan.',
      'Add the potatoes and lardons back, fold in the crème fraîche and plenty of black pepper, then taste before adding any salt — the lardons and cheese bring most of it.',
      'Tip into the dish. Halve the Reblochon horizontally through its equator and lay both halves rind side up on top.',
      'Bake for 20 to 25 minutes until the cheese has flowed across the surface and is bubbling at the edges. Rest 5 minutes before serving.'
    ],
    tips: [
      'If Reblochon is unavailable, a whole small Camembert or a Tomme de Savoie works, though the flavour is milder.',
      'Leave the rind on. It holds the cheese together as it melts and tastes of the mountain cellar it came from.',
      'Slice the onions with the grain so they hold their shape rather than dissolving into the cream.'
    ],
    pair: ['A simple green salad with a sharp vinaigrette', 'Cornichons and charcuterie', 'A cold Savoie white such as Apremont'],
    store: 'Refrigerate up to 3 days. Reheat covered at 170°C / 340°F for 20 minutes. It freezes acceptably for 1 month but the cheese loses its stretch.',
    nut: [742, 32, 44, 48, 4, 6, 1320]
  },

  'pissaladiere': {
    d: 'Nice\'s answer to pizza: a bread base under a thick layer of onions cooked down for an hour until they are sweet and jammy, latticed with anchovies and studded with black olives. No tomato, no cheese.',
    meta: 'Pissaladière from Nice — a bread base under slow-cooked sweet onions, anchovies and black olives. No cheese, no tomato.',
    kw: ['pissaladiere recipe', 'french onion tart', 'nice onion anchovy tart', 'provencal onion pizza'],
    why: 'The onions must be cooked low and covered for the first half hour so they sweat and collapse rather than fry — you want their sugars to caramelise slowly in their own moisture, which builds sweetness without any bitterness. Draining them before they go on the dough is what keeps the base crisp.',
    ing: [
      '# For the base',
      '350 g strong white bread flour',
      '7 g fast-action dried yeast',
      '1 tsp fine sea salt',
      '210 ml warm water',
      '3 tbsp olive oil',
      '# For the topping',
      '1.5 kg onions, halved and thinly sliced',
      '4 tbsp olive oil',
      '4 thyme sprigs',
      '2 bay leaves',
      '2 garlic cloves, crushed',
      '16 anchovy fillets in oil, drained',
      '20 small black Niçoise olives',
      'Black pepper'
    ],
    st: [
      'Mix the flour, yeast and salt, add the water and oil, and knead for 8 minutes to a smooth, slightly slack dough. Cover and prove for 1 hour.',
      'Meanwhile put the onions in a wide pan with the olive oil, thyme, bay and a pinch of salt. Cover and cook over low heat for 30 minutes, stirring occasionally.',
      'Uncover, add the garlic, and cook 25 to 30 minutes more, stirring often, until the onions are pale gold, jammy and greatly reduced. Season with pepper and cool.',
      'Heat the oven to 220°C / 430°F with a baking sheet inside.',
      'Roll or press the dough into a 30 x 25 cm rectangle on an oiled sheet of baking paper, pushing up a slight rim.',
      'Fish out the herbs and drain the onions of any free oil, then spread them over the dough in an even, thick layer right to the rim.',
      'Lay the anchovies over the top in a diamond lattice and press an olive into the centre of each diamond.',
      'Slide the paper onto the hot sheet and bake for 20 to 25 minutes until the base is crisp and browned underneath. Serve warm or at room temperature.'
    ],
    tips: [
      'An hour of onion cooking sounds excessive and is not. Rushing it on high heat gives you fried onions, which taste entirely different.',
      'Salt-packed anchovies rinsed and filleted are markedly better than tinned, if you can find them.',
      'It travels beautifully. Cut into squares, it is the best picnic food there is.'
    ],
    pair: ['A chilled Provençal rosé', 'Ratatouille or a tomato salad', 'Pastis with water, if you are being properly Niçois'],
    store: 'Keeps 2 days at room temperature under a cloth, or 4 days refrigerated. Refresh in a 200°C / 390°F oven for 6 minutes to re-crisp the base.',
    nut: [386, 10, 52, 16, 5, 11, 890]
  },

  'pot-au-feu': {
    d: 'The dish the French call their national plate: beef and marrow bones simmered for hours with whole winter vegetables, served as two courses — the broth first, then the meat and vegetables with coarse salt and mustard.',
    meta: 'Traditional pot-au-feu with beef, marrow bones and winter vegetables, served as broth then meat with mustard and coarse salt.',
    kw: ['pot au feu recipe', 'french boiled beef', 'beef and vegetable stew', 'classic french pot au feu'],
    why: 'Starting the meat in cold water draws proteins out slowly so they coagulate into skimmable scum instead of clouding the broth — the opposite of what you do when you want to keep flavour inside the meat. The vegetables go in staggered because a carrot and a leek do not take the same time, and mushy vegetables ruin the plate.',
    ing: [
      '# For the pot',
      '1 kg beef short rib or brisket',
      '800 g beef shin, on the bone',
      '2 marrow bones, about 8 cm each',
      '1 onion, halved and charred cut side down',
      '3 cloves',
      '1 bouquet garni',
      '1 tbsp black peppercorns',
      '2 tsp coarse sea salt',
      '# For the vegetables',
      '6 carrots, halved lengthways',
      '4 turnips, quartered',
      '3 leeks, halved and tied in a bundle',
      '4 celery sticks, cut into batons',
      '6 small potatoes',
      '# To serve',
      'Dijon mustard, cornichons, coarse sea salt, toasted baguette'
    ],
    st: [
      'Put the short rib and shin in a stockpot, cover with cold water by 5 cm and bring slowly to the boil. Skim the grey foam off thoroughly for the first 15 minutes.',
      'Stud the charred onion halves with the cloves and add them with the bouquet garni, peppercorns and salt.',
      'Adjust the heat so the surface barely trembles — a rolling boil emulsifies the fat and turns the broth cloudy. Cook uncovered for 2½ hours.',
      'Add the carrots, turnips and celery and cook 25 minutes. Add the leeks and potatoes and cook 20 minutes more.',
      'Wrap the marrow bones in muslin and lower them in for the last 20 minutes, standing upright so the marrow does not slide out.',
      'Lift everything out and keep warm under foil. Strain the broth through muslin and skim the fat from the surface.',
      'Serve the broth first in bowls, with the marrow spread on toast alongside.',
      'Follow with the meat carved thickly and the vegetables, passing mustard, cornichons and coarse salt at the table.'
    ],
    tips: [
      'Use at least two cuts of beef. Shin gives gelatine, short rib gives flavour, and neither on its own makes a complete pot.',
      'Never boil it. Every clear-broth failure traces back to the heat being too high.',
      'Leftover broth is the best base you will ever have for onion soup or a risotto.'
    ],
    pair: ['A robust red such as a Côtes du Rhône', 'Sea salt and strong mustard, nothing more elaborate', 'A tart apple dessert afterwards'],
    store: 'Refrigerate meat and broth separately up to 4 days. The broth freezes for 3 months. Reheat the meat in the broth rather than dry.',
    nut: [624, 52, 34, 30, 6, 10, 1180]
  },

  'sole-meuniere': {
    d: 'The dish that made Julia Child fall in love with France: sole floured and fried in butter, finished with foaming beurre noisette, lemon and parsley. Four ingredients, eight minutes, and no room to hide.',
    meta: 'Sole meunière — sole floured and pan-fried in butter, finished with nutty beurre noisette, lemon and parsley.',
    kw: ['sole meuniere recipe', 'french pan fried sole', 'butter lemon fish', 'julia child sole'],
    why: 'The flour coating does two jobs: it dries the surface so it browns, and it gives the butter something to cling to. Clarified butter for the frying and fresh butter for the finishing sauce is the classic split — clarified takes the heat without burning, fresh butter has the milk solids that brown into hazelnut flavour.',
    ing: [
      '2 whole Dover sole, 400 g each, skinned and trimmed',
      '4 tbsp plain flour',
      '60 g clarified butter or ghee, for frying',
      '80 g cold unsalted butter, for the sauce',
      '1 lemon, half juiced and half cut into wedges',
      '3 tbsp flat-leaf parsley, chopped',
      '1 tsp fine sea salt',
      'White pepper'
    ],
    st: [
      'Pat the sole bone dry on both sides and season with salt and white pepper 5 minutes before cooking.',
      'Season the flour, then dredge each fish, pressing lightly and shaking off every loose speck — excess flour burns in the pan.',
      'Heat the clarified butter in a large frying pan over medium-high heat until it shimmers.',
      'Lay in the fish, presentation side down, and cook undisturbed for 4 minutes until deep gold. Turn once with two spatulas and cook 3 minutes more.',
      'Lift onto warmed plates. Wipe the pan clean of any burnt flour.',
      'Add the fresh butter to the pan over medium heat and swirl until it foams, then subsides, and the milk solids turn hazelnut brown and smell of toasted nuts, about 90 seconds.',
      'Take off the heat, add the lemon juice — it will spit — then the parsley, and pour immediately over the fish. Serve with the lemon wedges.'
    ],
    tips: [
      'Ask the fishmonger to skin and trim the sole. It is a fiddly job and they will do it in thirty seconds.',
      'Beurre noisette goes from perfect to burnt in about fifteen seconds. Have the lemon juice already measured and standing by.',
      'Lemon sole, plaice or trout fillets all work; reduce the cooking time to 2 minutes a side for fillets.'
    ],
    pair: ['Steamed new potatoes with parsley', 'A crisp Chablis or Muscadet', 'Buttered green beans or wilted spinach'],
    store: 'This is a dish to cook and eat within minutes. Leftovers are not worth keeping.',
    nut: [512, 44, 12, 33, 1, 1, 780]
  },

  'crepes-suzette': {
    d: 'Paper-thin crêpes folded into an orange-caramel butter sauce and flambéed at the table with Grand Marnier. A piece of theatre invented by accident in Monte Carlo, and still the best trick in the dessert repertoire.',
    meta: 'Crêpes Suzette: thin crêpes in an orange caramel butter sauce, flambéed with Grand Marnier at the table.',
    kw: ['crepes suzette recipe', 'flambe crepes', 'orange crepes dessert', 'french crepe recipe'],
    why: 'Resting the batter for an hour lets the flour hydrate and the gluten relax, which is the difference between a crêpe that tears and one that lifts cleanly. The sauce is a beurre Suzette — an emulsion of caramel, orange juice and butter — so the butter goes in cold, off the boil, or it splits into an oily slick.',
    ing: [
      '# For the crêpes',
      '125 g plain flour',
      '2 large eggs',
      '300 ml whole milk',
      '30 g unsalted butter, melted, plus more for the pan',
      '1 tbsp caster sugar',
      '¼ tsp fine sea salt',
      '# For the Suzette sauce',
      '80 g caster sugar',
      '90 g cold unsalted butter, cubed',
      '2 large oranges, zest of both and juice of both',
      '3 tbsp Grand Marnier',
      '2 tbsp brandy, for flambéing'
    ],
    st: [
      'Whisk the flour, sugar and salt, make a well, and beat in the eggs and a third of the milk to a smooth thick paste. Whisk in the rest of the milk and the melted butter. Rest, covered, for 1 hour.',
      'Heat a 20 cm pan over medium heat and wipe with butter. Ladle in just enough batter to coat the base thinly, swirling immediately.',
      'Cook 45 seconds until the edges lift and the underside is lacily browned, flip, and cook 20 seconds more. Repeat to make about 12 crêpes, stacking them as you go.',
      'For the sauce, melt the sugar in a wide frying pan over medium heat without stirring until it is a light amber caramel, about 5 minutes.',
      'Add the orange zest and juice — the caramel will seize, then dissolve — and simmer 3 minutes until slightly syrupy.',
      'Lower the heat and whisk in the cold butter a few cubes at a time until the sauce is glossy and emulsified. Stir in the Grand Marnier.',
      'Fold each crêpe into quarters and slide them into the sauce, spooning it over, until all are coated and hot.',
      'Warm the brandy, pour it over, and light it carefully with a long match. Let the flames die completely before serving.'
    ],
    tips: [
      'The first crêpe is always a write-off. It is calibrating the pan temperature, not failing.',
      'Stand well back when you flambé, tie back long hair, and never pour spirit from the bottle straight into a lit pan.',
      'Crêpes can be made a day ahead and stacked between baking paper — only the sauce needs to be last-minute.'
    ],
    pair: ['A glass of the same Grand Marnier', 'Vanilla ice cream, if you want the contrast', 'Strong black coffee'],
    store: 'Plain crêpes keep 2 days refrigerated or 2 months frozen, interleaved with paper. Assemble and sauce them only when serving.',
    nut: [412, 6, 44, 21, 1, 28, 180]
  },

  'profiteroles': {
    d: 'Choux buns filled with cold vanilla cream and drowned in hot dark chocolate sauce. The temperature contrast is the whole idea, and the reason they have outlasted every dessert trend since the 1960s.',
    meta: 'Classic profiteroles — crisp choux buns filled with vanilla cream under hot dark chocolate sauce.',
    kw: ['profiteroles recipe', 'choux pastry buns', 'chocolate profiteroles', 'french cream puffs'],
    why: 'Choux rises on steam alone: the flour is gelatinised in boiling water and butter, which lets the paste hold enough water to inflate itself violently in a hot oven. Piercing each bun the moment it comes out lets that steam escape, which is the only reliable way to stop them collapsing as they cool.',
    ing: [
      '# For the choux',
      '125 ml water',
      '125 ml whole milk',
      '110 g unsalted butter, cubed',
      '150 g strong white flour, sifted',
      '1 tsp caster sugar',
      '½ tsp fine sea salt',
      '4 large eggs, beaten',
      '# For the filling',
      '450 ml double cream, well chilled',
      '3 tbsp icing sugar',
      '2 tsp vanilla bean paste',
      '# For the sauce',
      '200 g dark chocolate, 70%, chopped',
      '150 ml double cream',
      '40 g unsalted butter',
      '2 tbsp golden syrup'
    ],
    st: [
      'Heat the oven to 200°C / 390°F. Line two baking sheets.',
      'Bring the water, milk, butter, sugar and salt to a full rolling boil in a saucepan — the butter must be fully melted before it boils, so start it from cold.',
      'Tip in all the flour at once and beat hard with a wooden spoon. Keep beating over medium heat for 2 minutes until the paste comes away cleanly and films the base of the pan.',
      'Transfer to a bowl and beat for 2 minutes to cool. Add the eggs a little at a time, beating fully between additions, until the paste falls from the spoon in a reluctant V. You may not need all the egg.',
      'Pipe 4 cm mounds, well spaced, and flatten any peaks with a wet fingertip.',
      'Bake 20 minutes without opening the door, then reduce to 180°C / 350°F and bake 15 minutes more until deep gold and light.',
      'Pierce the base of each bun immediately with a skewer and return them to the switched-off oven, door ajar, for 10 minutes to dry out. Cool completely.',
      'Whip the cream with the icing sugar and vanilla to soft peaks and pipe it into each bun through the hole.',
      'Melt the sauce ingredients together over low heat until glossy. Stack the buns and pour the hot sauce over at the table.'
    ],
    tips: [
      'Do not open the oven in the first 20 minutes. A draught of cool air collapses choux irreversibly.',
      'Judge the egg by consistency, not quantity. Egg sizes vary and a too-wet paste spreads into flat discs.',
      'Unfilled buns freeze perfectly. Refresh from frozen at 180°C / 350°F for 5 minutes and they crisp up as good as new.'
    ],
    pair: ['A small glass of Armagnac or Cognac', 'Espresso', 'Fresh raspberries to cut the richness'],
    store: 'Unfilled buns keep 1 day in an airtight tin or 2 months frozen. Once filled they soften within a few hours, so fill just before serving.',
    nut: [524, 8, 34, 40, 2, 22, 220]
  },

  'mille-feuille': {
    d: 'Three sheets of caramelised puff pastry alternating with crème pâtissière, topped with the marbled feathered icing that gives it its other name, the Napoleon. The most technically demanding thing in a French pâtisserie window.',
    meta: 'Mille-feuille with caramelised puff pastry, vanilla crème pâtissière and feathered fondant icing.',
    kw: ['mille feuille recipe', 'napoleon pastry', 'french puff pastry dessert', 'creme patissiere layers'],
    why: 'Baking the pastry pressed between two trays stops it puffing wildly and gives you flat, even sheets with hundreds of compressed layers — the goal is crispness, not height. Dusting with icing sugar for the last few minutes caramelises the surface into a lacquer that stays crisp against the cream far longer than plain pastry would.',
    ing: [
      '# For the pastry',
      '500 g all-butter puff pastry',
      '3 tbsp icing sugar, for glazing',
      '# For the crème pâtissière',
      '500 ml whole milk',
      '1 vanilla pod, split, or 2 tsp vanilla bean paste',
      '6 egg yolks',
      '120 g caster sugar',
      '45 g cornflour',
      '50 g unsalted butter',
      '# For the icing',
      '200 g fondant icing sugar',
      '2 tbsp water',
      '30 g dark chocolate, melted'
    ],
    st: [
      'Heat the oven to 200°C / 390°F. Roll the pastry to a 3 mm thick rectangle, prick it all over, and rest it in the fridge for 30 minutes.',
      'Lay the pastry on a lined tray, cover with baking paper and set a second heavy tray on top. Bake 20 minutes.',
      'Remove the top tray and paper, dust generously with icing sugar and bake 8 to 10 minutes more until the surface is glazed and mahogany. Cool completely, then trim to three equal rectangles with a serrated knife.',
      'For the crème, heat the milk with the vanilla to just below a simmer.',
      'Whisk the yolks, sugar and cornflour to a pale paste. Pour in the hot milk while whisking, return everything to the pan, and cook over medium heat, whisking constantly, until it thickens and boils for a full minute.',
      'Beat in the butter, pass through a sieve, and press cling film onto the surface. Chill at least 3 hours.',
      'Beat the cold crème smooth and pipe it in tight rows onto the first pastry sheet. Add the second sheet, press gently, pipe again, and top with the third, flattest sheet, best side up.',
      'Mix the fondant sugar with the water to a thick, spreadable icing, spread it over the top, then pipe parallel lines of melted chocolate and drag a skewer across them in alternating directions to feather.',
      'Chill 30 minutes, then cut with a serrated knife using a firm sawing motion, wiping the blade between slices.'
    ],
    tips: [
      'Use all-butter puff pastry. The margarine kind tastes of nothing under this much cream.',
      'The crème must be boiled for a full minute or the cornflour will not set and an enzyme in the yolks will thin it overnight.',
      'Assemble no more than three hours before serving. Beyond that the pastry softens and the layers slide.'
    ],
    pair: ['A cup of strong coffee', 'A glass of Sauternes or a demi-sec Champagne', 'Fresh raspberries alongside'],
    store: 'Best within 4 hours of assembly. The crème keeps 3 days refrigerated and the baked pastry 2 days in an airtight tin, so prepare the parts ahead and build late.',
    nut: [586, 9, 68, 31, 1, 44, 260]
  },

  'clafoutis': {
    d: 'A Limousin dessert somewhere between a flan and a pancake: cherries dropped into a loose batter and baked until it puffs and sets around them. Traditionally the stones are left in, and there is a good reason for it.',
    meta: 'Cherry clafoutis from the Limousin — a light batter baked around fresh cherries until puffed and just set.',
    kw: ['clafoutis recipe', 'french cherry dessert', 'cherry batter pudding', 'limousin clafoutis'],
    why: 'The batter is deliberately eggy and low in flour so it sets like a custard rather than rising like a cake — too much flour and you have a heavy pancake. Cherry stones contain benzaldehyde, the compound that gives almond extract its flavour, which is why traditional recipes leave them in and modern ones add a splash of kirsch to compensate.',
    ing: [
      '600 g ripe black cherries',
      '3 large eggs',
      '100 g caster sugar, plus 1 tbsp for the dish',
      '70 g plain flour',
      '300 ml whole milk',
      '50 ml double cream',
      '30 g unsalted butter, melted, plus more for the dish',
      '1 tsp vanilla bean paste',
      '2 tbsp kirsch, optional',
      '¼ tsp fine sea salt',
      'Icing sugar, to finish'
    ],
    st: [
      'Heat the oven to 180°C / 350°F. Butter a 26 cm ceramic dish heavily and dust it with the tablespoon of sugar, tapping out the excess.',
      'Scatter the cherries over the base in a single layer. Do not pack them in tightly — they need batter around them.',
      'Whisk the eggs and sugar for 2 minutes until pale and slightly thickened.',
      'Whisk in the flour and salt until smooth, then the milk, cream, melted butter, vanilla and kirsch. The batter will be very loose, like single cream.',
      'Rest the batter 15 minutes, then pour it gently over the cherries.',
      'Bake for 40 to 45 minutes until puffed, deeply golden at the edges and set with only the faintest wobble at the centre.',
      'Let it settle for 15 minutes — it will sink, which is correct — then dust with icing sugar and serve warm.'
    ],
    tips: [
      'If you leave the stones in, tell your guests. If you take them out, add the kirsch to replace the almond note they carry.',
      'A ceramic or glass dish conducts heat gently and gives a better set than metal, which can overcook the base.',
      'Out of cherry season, plums, apricots or blackberries all work. Avoid anything as watery as strawberries.'
    ],
    pair: ['A spoonful of crème fraîche', 'A glass of chilled Sauternes or a cherry eau-de-vie', 'Strong coffee'],
    store: 'Best warm on the day it is made. It keeps 2 days refrigerated and is good cold for breakfast, though it will not re-puff.',
    nut: [268, 7, 38, 10, 2, 28, 140]
  },

  'brioche': {
    d: 'The richest bread in the French repertoire: a dough carrying half its weight in butter, worked until it is silky, chilled overnight, and baked into something with the crumb of bread and the flavour of pastry.',
    meta: 'Classic French brioche with a rich buttery crumb, overnight cold prove and a glossy egg-washed crust.',
    kw: ['brioche recipe', 'french butter bread', 'brioche nanterre', 'enriched bread dough'],
    why: 'The butter goes in only after the gluten network is fully developed, because fat coats gluten strands and prevents them linking — add it too early and the dough never gains the strength to hold its rise. The overnight chill firms that butter so the dough can be shaped at all, and gives the flavour time to develop through slow fermentation.',
    ing: [
      '500 g strong white bread flour',
      '10 g fine sea salt',
      '60 g caster sugar',
      '10 g fast-action dried yeast',
      '6 large eggs, cold',
      '60 ml whole milk, cold',
      '280 g unsalted butter, softened but still cool, cubed',
      '# For the glaze',
      '1 egg yolk beaten with 1 tbsp milk'
    ],
    st: [
      'In a stand mixer with the dough hook, combine the flour, sugar and yeast on one side of the bowl and the salt on the other, then mix briefly.',
      'Add the eggs and milk and mix on low for 3 minutes, then medium for 8 minutes, until the dough is smooth and pulls away from the sides in a single mass.',
      'With the mixer running, add the butter five or six cubes at a time, waiting until each addition disappears completely. This takes 10 to 12 minutes and the dough will look broken in the middle of it. Keep going.',
      'Mix a final 5 minutes until the dough is glossy, elastic and slaps the sides of the bowl cleanly.',
      'Cover and prove at room temperature for 1 hour, then refrigerate overnight, at least 8 hours and up to 16.',
      'Divide the cold dough into 8 pieces, roll each into a tight ball, and set them in two rows in a buttered 900 g loaf tin.',
      'Prove, covered, at warm room temperature for 2 to 3 hours until doubled and touching. The dough should spring back slowly when pressed.',
      'Heat the oven to 180°C / 350°F. Brush twice with the glaze, gently, and bake 35 to 40 minutes until deep mahogany and 92°C at the centre. Cool in the tin 10 minutes, then on a rack.'
    ],
    tips: [
      'This dough cannot realistically be kneaded by hand. A stand mixer is the price of entry.',
      'If the dough gets warmer than about 24°C during mixing, refrigerate it for 20 minutes and carry on — greasy, weeping dough is overheated butter.',
      'Day-old brioche makes the best French toast, bread and butter pudding, or burger buns you will ever have.'
    ],
    pair: ['Salted butter and apricot jam', 'Café au lait', 'Foie gras or chicken liver parfait, for the savoury route'],
    store: 'Keeps 3 days wrapped at room temperature and freezes beautifully for 2 months, whole or sliced. Refresh slices in a toaster.',
    nut: [432, 9, 40, 26, 2, 9, 380]
  },

  'madeleines': {
    d: 'Proust\'s shell-shaped tea cakes, with the crisp browned edge and the hump on the back that tells you the batter was properly cold. They are at their peak for about ten minutes after leaving the oven.',
    meta: 'Classic French madeleines with browned butter, a crisp shell edge and the signature hump. Best eaten warm.',
    kw: ['madeleine recipe', 'french shell cakes', 'brown butter madeleines', 'proust madeleines'],
    why: 'The hump comes from thermal shock: cold batter meeting a hot tin sets the outside instantly while the centre is still liquid, and the trapped steam pushes upward through the only soft point. Browning the butter first drives off water and creates nutty melanoidins, which is the difference between a madeleine and a small sponge cake.',
    ing: [
      '120 g unsalted butter, plus extra for the tin',
      '2 large eggs',
      '100 g caster sugar',
      '2 tbsp honey',
      '120 g plain flour, plus extra for the tin',
      '1 tsp baking powder',
      'Zest of 1 lemon',
      '1 tsp vanilla bean paste',
      '¼ tsp fine sea salt',
      'Icing sugar, to finish'
    ],
    st: [
      'Melt the butter over medium heat and keep cooking until it foams, then subsides, and the solids at the bottom turn hazelnut brown, about 5 minutes. Pour into a bowl, scraping in the solids, and cool to lukewarm.',
      'Whisk the eggs, sugar and honey for 4 minutes until pale, thick and holding a ribbon.',
      'Sift over the flour, baking powder and salt and fold in gently with a spatula until barely combined.',
      'Fold in the browned butter, lemon zest and vanilla in three additions until the batter is glossy and homogeneous.',
      'Cover and refrigerate for at least 2 hours, or overnight. This rest is not optional — it is what gives you the hump.',
      'Butter and flour a 12-hole madeleine tin thoroughly, then chill the tin too. Heat the oven to 210°C / 410°F.',
      'Spoon cold batter into each shell, filling three-quarters full. Do not spread it; it will find its own level in the heat.',
      'Bake 9 to 11 minutes until the edges are browned and the humps have risen and spring back. Turn out immediately onto a rack, dust with icing sugar and eat while warm.'
    ],
    tips: [
      'Butter and flour the tin even if it is non-stick. The ridges of the shell are unforgiving.',
      'Batter can be refrigerated for up to 3 days, so you can bake a fresh half-dozen whenever you want them.',
      'Dip half of each cooled madeleine in melted dark chocolate for the classic pâtisserie finish.'
    ],
    pair: ['Lime blossom tea, as Proust had them', 'Strong espresso', 'A glass of chilled Sauternes'],
    store: 'They are genuinely best within an hour. They keep 2 days in an airtight tin but lose the crisp edge; freeze for 1 month and refresh at 160°C / 320°F for 4 minutes.',
    nut: [186, 3, 20, 11, 0, 12, 90]
  }
};
