'use strict';

/**
 * Volume fifteen — French bread and savoury baking.
 *
 * Eight things, of which two are laminated and one is a sourdough, so this is
 * the most technically demanding group in the volume. The common thread is
 * temperature: laminated dough fails when the butter warms, sourdough fails
 * when the kitchen is cold, and both are far more about managing that than
 * about the recipe itself.
 */

module.exports = {
  'pain-de-campagne': {
    d: 'A country loaf of white and wholemeal flour raised with a levain, baked dark. The crumb should be open and the crust should crackle as it cools.',
    meta: 'A country sourdough of white and wholemeal flour raised on a levain, proved slowly and baked dark in a covered pot.',
    kw: ['pain de campagne', 'french country bread', 'pain de campagne recipe', 'sourdough country loaf', 'levain bread'],
    why: 'The loaf is baked in a covered pot for the first two-thirds, which traps the steam the dough releases and keeps the crust soft enough to expand — take the lid off too early and the crust sets before the loaf has finished rising, giving a dense crumb and a torn side. The autolyse before the salt goes in matters too: forty minutes of flour and water alone lets the gluten begin forming without any work, which is most of the kneading done for free.',
    ing: [
      '400 g strong white flour',
      '100 g wholemeal flour',
      '360 ml water at 28°C',
      '100 g active sourdough starter',
      '11 g fine sea salt',
      '# For dusting',
      '2 tbsp rice flour'
    ],
    st: [
      'Mix the flours with 340 ml of the water until no dry flour remains. Cover and leave 40 minutes — this is the autolyse.',
      'Add the starter and work it in, then the salt with the remaining 20 ml water. Squeeze it through until fully incorporated.',
      'Over the next 150 minutes, give the dough four sets of stretch-and-folds at half-hour intervals, then leave it to rise until it has grown by about half.',
      'Tip it out, shape it into a tight round, and rest it 20 minutes on the bench.',
      'Shape again more tightly and put it seam-side up in a banneton dusted with rice flour. Refrigerate 720 minutes.',
      'Heat a covered casserole in the oven at 250°C / 480°F for 45 minutes. Tip the cold loaf in, score it deeply, and put the lid on.',
      'Bake 20 minutes covered, then lower to 220°C, remove the lid and bake 25 minutes more until very dark. Cool completely on a rack before cutting.'
    ],
    rest: [910, 'the autolyse, bulk rise and cold overnight prove'],
    tips: [
      'Lid on for the first twenty minutes. It is the steam that lets it rise.',
      'Bake it darker than feels right — pale crust means flat flavour.',
      'Cool completely. Cutting it warm ruins the crumb.'
    ],
    pair: ['Salted butter', 'Any of the terrines', 'Soup'],
    store: 'Cut-side down on a board for 3 days. It freezes sliced for 3 months.',
    nut: [235, 8, 47, 1, 3, 1, 430]
  },

  'fougasse': {
    d: 'Provençal bread slashed into a leaf shape and stretched so the cuts open. More crust than crumb, which is the point.',
    meta: 'Provençal flatbread slashed into a leaf and stretched so the cuts open wide, giving far more crust than crumb.',
    kw: ['fougasse', 'provencal bread', 'fougasse recipe', 'olive herb bread', 'french leaf bread'],
    why: 'The cuts must go all the way through the dough to the tray and then be pulled open with your fingers — a slash that is not opened simply closes again as the bread proves and bakes, and you get an ordinary flatbread with lines on it. Pull them wider than looks right, because they shrink by roughly half. The dough is also wetter than most bread doughs, which is what gives the thin sections their crispness.',
    ing: [
      '500 g strong white flour',
      '7 g fast-action dried yeast',
      '10 g fine sea salt',
      '340 ml warm water',
      '4 tbsp olive oil',
      '# To flavour',
      '100 g black olives, pitted and chopped',
      '2 tbsp herbes de Provence',
      '3 garlic cloves, crushed',
      '# To finish',
      '3 tbsp olive oil',
      '1 tsp flaky sea salt'
    ],
    st: [
      'Mix the flour, yeast and salt, then work in the water and 4 tbsp oil to a soft, wet dough. Knead 8 minutes with a scraper.',
      'Work in the olives, herbs and garlic. Cover and prove 90 minutes until doubled.',
      'Heat the oven to 230°C / 450°F with a heavy tray inside.',
      'Divide the dough in two and stretch each into a rough oval on a sheet of baking paper, about 1.5 cm thick.',
      'Cut a long slash down the centre and three angled slashes off each side, like the veins of a leaf, going right through to the paper.',
      'Push your fingers into each cut and pull it wide open — much wider than looks sensible, since they shrink.',
      'Slide onto the hot tray and bake 25 minutes, until deep gold and crisp. Brush with the remaining oil and scatter with flaky salt.'
    ],
    rest: [90, 'the dough rising'],
    tips: [
      'Cut all the way through and pull the holes wide open.',
      'A wet dough. It gives the thin parts their crispness.',
      'Brush with oil the moment it leaves the oven.'
    ],
    pair: ['Tapenade', 'A glass of rosé', 'Soup'],
    store: 'Best the day it is baked. Two days wrapped; refresh at 200°C for 5 minutes.',
    nut: [295, 8, 46, 9, 3, 1, 620]
  },

  'pain-aux-noix': {
    d: 'A dense walnut loaf that turns faintly purple where the nuts touch the crumb. Made for cheese and very little else.',
    meta: 'A dense walnut bread that stains faintly purple around the nuts, made with wholemeal flour and a little honey.',
    kw: ['pain aux noix', 'walnut bread', 'pain aux noix recipe', 'french nut bread', 'bread for cheese'],
    why: 'The walnuts go in at the very end of the kneading, after the gluten has developed, because their sharp edges cut the strands and a dough kneaded with nuts in it never builds proper structure. The purple staining around them is a reaction between walnut tannins and the alkaline dough — it is harmless, characteristic, and a sign you used enough nuts. Toast them first: raw walnuts in bread taste faintly of nothing.',
    ing: [
      '350 g strong white flour',
      '150 g wholemeal flour',
      '7 g fast-action dried yeast',
      '10 g fine sea salt',
      '2 tbsp honey',
      '320 ml warm water',
      '3 tbsp walnut oil, or olive oil',
      '# To fold in',
      '200 g walnut halves'
    ],
    st: [
      'Toast the walnuts on a tray at 180°C for 8 minutes, until fragrant. Cool and break them roughly.',
      'Mix the flours, yeast and salt, then add the honey, water and oil and knead 10 minutes until smooth and elastic.',
      'Only now work in the walnuts, folding the dough over them until they are evenly distributed.',
      'Cover and prove 90 minutes until doubled.',
      'Knock back gently, shape into a tight oval, and set on a lined tray. Prove a second time for 45 minutes.',
      'Heat the oven to 220°C / 425°F. Slash the loaf three times across the top.',
      'Bake 40 minutes, until dark and hollow-sounding underneath. Cool completely on a rack.'
    ],
    rest: [135, 'both proves'],
    tips: [
      'Nuts in last, after the gluten has developed.',
      'Toast them first or they taste of nothing.',
      'The purple staining is normal and means you used enough.'
    ],
    pair: ['Blue cheese', 'Goat cheese', 'A glass of red'],
    store: 'Four days wrapped; it keeps better than plain bread. It freezes for 3 months.',
    nut: [325, 10, 42, 14, 4, 4, 480]
  },

  'tarte-flambee': {
    d: 'Alsatian flatbread with fromage blanc, onion and bacon, baked in two minutes at the top of a furnace-hot oven. Thin to the point of transparency.',
    meta: 'A paper-thin Alsatian flatbread topped with fromage blanc, raw onion and bacon and baked in minutes at maximum heat.',
    kw: ['tarte flambee', 'flammekueche', 'tarte flambee recipe', 'alsace bacon tart', 'french flatbread pizza'],
    why: 'The dough has no yeast, which is what lets it be rolled to the thickness of paper without springing back — a yeasted dough fights you and puffs in the oven, and this is meant to be flat and cracker-crisp at the edges. Everything on top goes on raw, because the whole bake is under twelve minutes at maximum heat. Fromage blanc thinned with cream gives the right tang; crème fraîche alone is too rich and too heavy.',
    ing: [
      '# For the dough',
      '300 g plain flour',
      '1 tsp fine sea salt',
      '170 ml water',
      '2 tbsp sunflower oil',
      '# For the topping',
      '250 g fromage blanc or quark',
      '100 ml double cream',
      '0.5 tsp ground nutmeg',
      '0.75 tsp fine sea salt',
      '0.5 tsp black pepper',
      '2 onions, sliced paper-thin',
      '200 g smoked bacon lardons'
    ],
    st: [
      'Knead the flour, salt, water and oil to a smooth dough, 6 minutes. It contains no yeast and needs no proving. Rest it 20 minutes.',
      'Put a baking stone or heavy tray on the top shelf and heat the oven to its absolute maximum, at least 260°C, for 40 minutes.',
      'Beat the fromage blanc with the cream, nutmeg, salt and pepper until smooth and spreadable.',
      'Divide the dough in two and roll each out on baking paper until you can almost see through it — 2 mm at most.',
      'Spread thinly with the cheese mixture, leaving a 1 cm border.',
      'Scatter over the raw sliced onion and the raw lardons, distributed evenly and not heaped.',
      'Slide onto the hot stone and bake 10 to 12 minutes, until the edges are blistered black in places and the bacon has crisped. Eat immediately, cut into strips.'
    ],
    tips: [
      'No yeast. That is what lets it roll paper-thin.',
      'Maximum heat, preheated properly.',
      'Everything raw on top. It cooks in the twelve minutes.'
    ],
    pair: ['A glass of Alsace riesling', 'Green salad', 'More of the same'],
    store: 'None. It is stale within twenty minutes of leaving the oven.',
    nut: [545, 22, 48, 30, 3, 6, 1180]
  },

  'pan-bagnat': {
    d: 'A salade niçoise pressed into a round loaf until the bread soaks up the dressing. Bagnat means bathed, and the pressing is not optional.',
    meta: 'Salade niçoise packed into a round loaf and pressed for hours so the bread absorbs the oil and tomato juices.',
    kw: ['pan bagnat', 'nicoise sandwich', 'pan bagnat recipe', 'french pressed sandwich', 'tuna nicoise roll'],
    why: 'Pressing it for at least two hours is the entire dish. The bread has to absorb the oil, vinegar and tomato juices and compress into something dense — an unpressed pan bagnat is just a tuna roll. Rub the cut faces with raw garlic and a halved tomato first, which seasons the crumb before anything else touches it. And no lettuce, ever: it collapses to slime under the weight.',
    ing: [
      '1 round country loaf, about 25 cm',
      '2 garlic cloves, halved',
      '1 tomato, halved',
      '6 tbsp olive oil',
      '2 tbsp red wine vinegar',
      '# For the filling',
      '250 g tinned tuna in oil, drained',
      '4 ripe tomatoes, sliced',
      '3 hard-boiled eggs, sliced',
      '100 g black olives, pitted',
      '8 anchovy fillets',
      '1 small red onion, sliced paper-thin',
      '1 green pepper, sliced thinly',
      '150 g cooked green beans',
      '20 basil leaves',
      '1 tsp fine sea salt',
      '0.5 tsp black pepper'
    ],
    st: [
      'Cut the loaf in half horizontally and pull out some of the soft crumb from each half to make room.',
      'Rub the cut faces hard with the garlic and then with the cut tomato, pressing so the juice soaks in.',
      'Whisk the oil and vinegar and brush both faces generously with it.',
      'Layer the filling into the bottom half in this order: tomatoes first and salted, then pepper, onion, beans, tuna, egg, olives, anchovies and basil.',
      'Season between the layers and put the lid on.',
      'Wrap the whole loaf tightly in cling film, put it on a plate, and weight it with something heavy.',
      'Press at least 120 minutes, refrigerated, before cutting it into wedges.'
    ],
    rest: [120, 'pressing under a weight'],
    tips: [
      'Press it. Two hours minimum, and longer is better.',
      'Rub the bread with garlic and tomato before anything else.',
      'No lettuce. It turns to slime.'
    ],
    pair: ['A glass of Provence rosé', 'A beach', 'Cornichons'],
    store: 'Refrigerated and pressed for up to a day; it improves for the first six hours.',
    nut: [585, 32, 52, 28, 6, 7, 1290]
  },

  'galettes-bretonnes': {
    d: 'Buckwheat crêpes filled with ham, cheese and an egg, the edges folded into a square. Savoury and dark, and a different batter entirely from the sweet crêpe.',
    meta: 'Dark buckwheat crêpes filled with ham, Gruyère and an egg, the edges folded square around a still-runny yolk.',
    kw: ['galette bretonne', 'buckwheat crepe', 'galette complete', 'galettes bretonnes recipe', 'savoury crepe'],
    why: 'The batter needs to rest for a couple of hours, because buckwheat has no gluten and the starch needs time to hydrate — an unrested batter tears in the pan and tastes chalky. It is also made with water rather than milk, which is what makes the galette crisp rather than soft. The egg goes onto the galette in the pan and the white sets while the yolk stays liquid, so the folding has to happen fast.',
    ing: [
      '# For the batter',
      '250 g buckwheat flour',
      '1 tsp fine sea salt',
      '1 egg',
      '500 ml cold water',
      '# For the pan',
      '50 g butter, melted',
      '# For each galette',
      '1 slice good cooked ham',
      '50 g Gruyère, grated',
      '1 egg',
      '10 g butter',
      'Black pepper'
    ],
    st: [
      'Whisk the buckwheat flour and salt with the egg and half the water until smooth, then beat in the rest. It should be the thickness of single cream.',
      'Cover and rest at least 120 minutes at room temperature. The batter darkens as it sits.',
      'Heat a wide flat pan or crêpe griddle over medium-high heat and brush with melted butter.',
      'Pour in a ladle of batter and spread it thin and quickly with a spreader or the back of the ladle. Cook 90 seconds, until the edges lift.',
      'Turn it, scatter the cheese over the centre, lay the ham on, and crack the egg into the middle.',
      'Cook 2 minutes, until the white has set and the yolk is still liquid.',
      'Fold the four edges in over the filling to make a square with the yolk showing, slide onto a plate, add a knob of butter and black pepper, and serve.'
    ],
    rest: [120, 'resting the batter'],
    tips: [
      'Rest the batter two hours. Buckwheat needs it.',
      'Water, not milk, or it will not crisp.',
      'Fold fast, while the yolk is still liquid.'
    ],
    pair: ['Dry Breton cider', 'Green salad', 'Salted butter'],
    store: 'Plain galettes keep 3 days refrigerated, interleaved with paper, and freeze for 2 months. Fill to order.',
    nut: [485, 26, 46, 22, 6, 2, 1090]
  },

  'saucisson-brioche': {
    d: 'A poaching sausage baked inside brioche. Lyon, and the trick is that the sausage is cooked and cooled before it is wrapped.',
    meta: 'A Lyon poaching sausage cooked, cooled and wrapped in enriched brioche dough, then baked until dark and glossy.',
    kw: ['saucisson en brioche', 'sausage in brioche', 'saucisson brioche recipe', 'lyon sausage bread', 'french sausage bake'],
    why: 'The sausage is poached first and then cooled completely, for two reasons: a raw sausage releases fat and water into the dough and gives you a soggy grey layer around it, and a warm one starts the dough proving unevenly before it goes in the oven. The brioche also needs an overnight cold prove — the butter content makes it impossible to handle at room temperature, and cold dough is the only way to wrap it neatly.',
    ing: [
      '# For the brioche',
      '350 g strong white flour',
      '7 g fast-action dried yeast',
      '30 g caster sugar',
      '1 tsp fine sea salt',
      '4 eggs',
      '60 ml whole milk',
      '200 g butter, softened and diced',
      '# For the sausage',
      '1 saucisson à cuire or coarse pork sausage, about 500 g',
      '2 bay leaves',
      '1 onion, halved',
      '# To finish',
      '1 egg, beaten',
      '1 tbsp Dijon mustard'
    ],
    st: [
      'Mix the flour, yeast, sugar and salt. Add the eggs and milk and beat with a dough hook for 8 minutes, until smooth and elastic.',
      'Add the softened butter a few pieces at a time, beating for a further 10 minutes, until the dough is glossy and pulls from the bowl.',
      'Cover and refrigerate at least 720 minutes. It is unworkable at room temperature.',
      'Poach the sausage with the bay and onion at a bare simmer for 35 minutes. Cool it completely, then peel off the skin.',
      'Roll the cold brioche into a rectangle, spread thinly with the mustard, and lay the cold sausage across it.',
      'Wrap tightly, seal the seam and ends, and set it seam-side down in a lined loaf tin. Prove 90 minutes, until risen by half.',
      'Brush with beaten egg and bake at 180°C / 350°F for 45 minutes, until deep brown and 90°C at the centre. Cool 20 minutes before slicing.'
    ],
    rest: [810, 'the cold prove and the second rise'],
    tips: [
      'Cook and cool the sausage completely first.',
      'Cold dough, straight from the fridge, or it cannot be handled.',
      'Cool 20 minutes before slicing or it tears.'
    ],
    pair: ['Cornichons', 'Green salad', 'A glass of Beaujolais'],
    store: 'Refrigerated for 3 days. Reheat slices at 170°C for 8 minutes. It freezes baked for 2 months.',
    nut: [545, 20, 42, 33, 2, 6, 980]
  },

  'pain-au-chocolat': {
    d: 'Laminated dough rolled around two batons of chocolate. The same dough as a croissant, and the same single problem: keeping the butter cold.',
    meta: 'Laminated yeasted dough folded three times around a butter block and rolled around chocolate batons, proved and baked.',
    kw: ['pain au chocolat', 'chocolatine', 'pain au chocolat recipe', 'laminated pastry', 'french viennoiserie'],
    why: 'Every failure in laminated pastry is the butter warming up. It has to stay pliable but cold — around 15°C — so that it rolls out in a continuous sheet rather than shattering into shards or melting into the dough. That means the dough goes back in the fridge for thirty minutes between every single turn, without exception, and you work quickly and on a cold surface. Butter that melts into the dough gives you bread, not pastry.',
    ing: [
      '# For the dough',
      '500 g strong white flour',
      '10 g fine sea salt',
      '60 g caster sugar',
      '10 g fast-action dried yeast',
      '250 ml cold whole milk',
      '50 g butter, softened',
      '# For the lamination',
      '280 g cold butter, in a block',
      '# To fill and finish',
      '16 chocolate batons, or 200 g dark chocolate cut into sticks',
      '1 egg, beaten'
    ],
    st: [
      'Mix the flour, salt, sugar, yeast, milk and 50 g softened butter into a dough. Knead 6 minutes, then wrap and refrigerate 60 minutes.',
      'Beat the cold butter block between two sheets of paper into a 20 cm square, keeping it cold and pliable. Chill.',
      'Roll the dough to a 40 x 20 cm rectangle, lay the butter on one half, fold the other over and seal the edges.',
      'Roll out to 60 x 20 cm and fold in three like a letter. Refrigerate 30 minutes. Repeat this twice more — three turns in total, chilling 30 minutes between each.',
      'Roll the finished dough to 3 mm thick and cut into 8 x 16 cm rectangles.',
      'Lay a chocolate baton near one short edge, roll once, add a second baton, and roll up. Set seam-side down on lined trays.',
      'Prove at cool room temperature 120 minutes, until visibly puffy and wobbling. Brush with egg and bake at 200°C / 400°F for 18 to 20 minutes until deep brown.'
    ],
    rest: [210, 'chilling between turns and the final prove'],
    tips: [
      'Thirty minutes in the fridge between every turn. No exceptions.',
      'Butter at 15°C — pliable but cold.',
      'Prove until they wobble. Under-proved pastries leak butter.'
    ],
    pair: ['Coffee', 'More coffee', 'A newspaper'],
    store: 'Best within hours. A day in a paper bag; refresh at 180°C for 5 minutes. They freeze proved and unbaked for a month.',
    nut: [425, 8, 42, 25, 2, 10, 380]
  }
};
