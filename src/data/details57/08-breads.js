'use strict';

/**
 * Volume fifty-seven, eighth part: four breads (hot dog buns, cheddar
 * jalapeno bread, brown soda bread, honey oat bread). Waits of an hour or
 * more are declared as rest. Nutrition is estimated by npm run calc.
 */

module.exports = {
  'hot-dog-buns': {
    d: 'Soft, slightly sweet white rolls shaped long and narrow, proved twice and baked for 15 minutes at 200C.',
    meta: 'Hot dog buns of soft enriched dough, baked for 15 minutes at 200C. Eight buns, ready in 45 minutes plus 1 hour 30 minutes of rising.',
    kw: ['hot dog buns', 'homemade hot dog rolls', 'soft white sausage rolls', 'enriched dough buns', 'baked hot dog buns'],
    why: 'A hot dog bun is a soft white roll, shaped long and narrow, so it holds a sausage without swallowing it. The dough is the same enriched dough used for burger buns, with milk, butter and a little sugar for a tender crumb and a pale golden crust.\n\nKnead for 10 minutes by hand until the dough is smooth and springs back when poked. Under-kneaded dough gives tight, crumbly buns. After the first rise, divide into eight equal pieces, roll each into a log about 14 cm long and place them close together on the tray, almost touching. **Packing the rolls tightly** makes them rise upwards and leaves the sides soft and pale.\n\nThe second rise takes 30 minutes, until puffy. Brush with beaten egg for a glossy top and bake until deep golden and hollow-sounding underneath. Cool on a rack under a cloth to keep the crust soft, then split lengthways without cutting right through.',
    ing: [
      '400 g strong white bread flour',
      '7 g fast action yeast',
      '25 g caster sugar',
      '1 1/2 tsp salt',
      '250 ml whole milk, warm',
      '40 g butter, softened',
      '1 egg, beaten, for glazing'
    ],
    st: [
      'Mix the flour, yeast, sugar and salt in a large bowl. Add the warm milk and butter and mix to a dough.',
      'Knead for 10 minutes until smooth and elastic. Cover and leave to rise for 1 hour until doubled.',
      'Divide into 8 pieces and roll each into a log about 14 cm long. Place almost touching on a lined tray and leave to rise for 30 minutes.',
      'Heat the oven to 200C. Brush the buns with the beaten egg.',
      'Bake for 15 minutes until deep golden. Cool on a rack under a cloth.'
    ],
    tips: [
      'Knead until the dough springs back.',
      'Place the buns almost touching.',
      'Cool under a cloth for a soft crust.'
    ],
    pair: ['Sausages', 'Mustard', 'Fried onions', 'Coleslaw'],
    store: 'Best on the day. Keeps for 2 days wrapped; freeze for 1 month.',
    rest: [90, 'Rising'],
    nut: [211, 7, 30, 7, 2, 7, 710]
  },

  'cheddar-jalapeno-bread': {
    d: 'A yeasted loaf studded with cubes of mature cheddar and chopped fresh jalapeños, baked for 40 minutes.',
    meta: 'Cheddar jalapeno bread with cubed cheese and fresh chillies, baked for 40 minutes. Ten slices, ready in 1 hour 5 minutes plus 1 hour of rising.',
    kw: ['cheddar jalapeno bread', 'cheese and chilli bread', 'jalapeno cheese loaf', 'yeasted cheddar bread', 'baked cheese bread'],
    why: 'Flour, yeast, water, cheddar and jalapeños: five things, and a loaf that smells like toasted cheese within minutes of going in the oven. The cheese is cut into small cubes, not grated, so it stays in pockets that melt and brown instead of dissolving into the crumb.\n\nThe dough is wetter than a plain loaf, because the cheese soaks up moisture as it bakes. Knead it for 8 minutes before adding the cheese and chillies, then fold them in gently so the cubes survive. Deseed the jalapeños for a mild heat; leave the seeds in if you want it fiery. **Pat the chopped chillies dry** so they do not make wet streaks in the dough.\n\nLet the dough rise for 1 hour until doubled, shape it into a round and bake on a hot tray at 220C for 10 minutes, then lower to 200C. Cheese that touches the tray will blister and brown into a crisp lace, which is a bonus. Cool the loaf for 30 minutes before slicing so the crumb sets.',
    ing: [
      '450 g strong white bread flour',
      '7 g fast action yeast',
      '1 tbsp caster sugar',
      '2 tsp salt',
      '300 ml warm water',
      '2 tbsp olive oil',
      '150 g mature cheddar, cut into 1 cm cubes',
      '2 fresh jalapeños, deseeded and finely chopped'
    ],
    st: [
      'Mix the flour, yeast, sugar and salt in a large bowl. Add the warm water and oil and mix to a dough.',
      'Knead for 8 minutes until smooth. Flatten the dough, scatter over the cheese and jalapeños, then fold and knead gently until mixed in.',
      'Cover and leave to rise for 1 hour until doubled.',
      'Shape into a round and place on a lined tray. Heat the oven to 220C with a tray inside.',
      'Bake for 10 minutes, then reduce to 200C and bake for 30 minutes more until deep golden and hollow-sounding underneath.',
      'Cool on a rack for 30 minutes before slicing.'
    ],
    tips: [
      'Cut the cheese into cubes, not shreds.',
      'Pat the chillies dry.',
      'Cool before slicing.'
    ],
    pair: ['Chili', 'Soup', 'Butter', 'Eggs'],
    store: 'Keeps for 3 days wrapped. Freeze sliced for 2 months.',
    rest: [90, 'Rising and cooling'],
    nut: [209, 8, 24, 9, 1, 4, 790]
  },

  'brown-soda-bread': {
    d: 'A dense, nutty loaf of wholemeal and plain flour raised with bicarbonate of soda and buttermilk, baked for 40 minutes at 200C.',
    meta: 'Brown soda bread of wholemeal flour and buttermilk, baked for 40 minutes at 200C. Eight slices, ready in 50 minutes.',
    kw: ['brown soda bread', 'wholemeal soda bread', 'irish style soda bread', 'bread without yeast', 'baked buttermilk bread'],
    why: 'The first sign it is ready is the sound: tap the base and it rings hollow, like a drum. Before that, the loaf will have risen into a rough dome, split along the cross cut on top, and turned a deep, nutty brown.\n\nSoda bread needs no yeast and no proving. Bicarbonate of soda reacts with the acid in buttermilk the moment they meet, and the gas that forms lifts the loaf, so the dough must go into the oven straight away. Mix with a light hand, only until the flour is damp; **overworking makes the bread tough** and heavy. The dough will be sticky and shaggy, and that is right.\n\nShape it quickly into a round about 4 cm thick, cut a deep cross to let heat reach the middle, and bake. The crust is hard when it comes out, so wrap the loaf in a clean tea towel as it cools for a softer finish. Eat it the day it is made, with butter, or toast it the next day.',
    ing: [
      '300 g wholemeal flour',
      '150 g plain flour',
      '1 tsp bicarbonate of soda',
      '1 tsp salt',
      '400 ml buttermilk'
    ],
    st: [
      'Heat the oven to 200C and dust a tray with flour.',
      'Mix the wholemeal flour, plain flour, bicarbonate of soda and salt in a large bowl.',
      'Make a well, pour in the buttermilk and mix quickly with a hand to a soft, sticky dough.',
      'Tip onto a floured surface, shape into a round about 4 cm thick and place on the tray. Cut a deep cross.',
      'Bake for 40 minutes until the base sounds hollow when tapped. Wrap in a clean tea towel to cool.'
    ],
    tips: [
      'Bake as soon as the dough is mixed.',
      'Handle the dough as little as possible.',
      'Wrap in a cloth for a softer crust.'
    ],
    pair: ['Butter', 'Smoked salmon', 'Soup', 'Cheese'],
    store: 'Best on the day. Keeps for 2 days wrapped; toast afterwards.',
    nut: [214, 8, 41, 2, 4, 3, 510]
  },

  'honey-oat-bread': {
    d: 'A soft sandwich loaf of white flour and rolled oats sweetened with honey, baked for 40 minutes at 190C.',
    meta: 'Honey oat bread with rolled oats and a soft crumb, baked for 40 minutes at 190C. Ten slices, ready in 1 hour 10 minutes plus 2 hours of rising.',
    kw: ['honey oat bread', 'oat sandwich loaf', 'soft honey bread', 'rolled oat bread', 'baked honey loaf'],
    why: 'Flour, oats, honey, milk, yeast and butter: six everyday things, and a loaf that tastes of toast the moment it comes out. The oats go in whole, so they leave a nubbly top and a soft, slightly chewy crumb.\n\nSoak the oats in the warm milk for 10 minutes before mixing. They soften and give up their starch, which keeps the loaf moist for days. Honey feeds the yeast and gives a golden crust, but it also browns quickly, so cover the loaf with foil if the top darkens before the 40 minutes are up. **Knead for 10 minutes** until the dough is smooth and elastic; oats make it feel stickier than plain dough, so resist adding much extra flour.\n\nThe dough needs two rises, an hour in the bowl and another 45 minutes in the tin, until it domes about 2 cm above the rim. Brush with a little milk and sprinkle with oats. Cool it on a rack for an hour before slicing, otherwise the crumb is gummy.',
    ing: [
      '400 g strong white bread flour',
      '80 g rolled oats',
      '7 g fast action yeast',
      '2 tsp salt',
      '3 tbsp honey',
      '300 ml whole milk, warm',
      '30 g butter, softened',
      '1 tbsp whole milk, for brushing',
      '2 tbsp rolled oats, for the top'
    ],
    st: [
      'Soak the oats in the warm milk for 10 minutes.',
      'Mix the flour, yeast and salt in a large bowl. Add the oat mix, honey and butter and mix to a dough.',
      'Knead for 10 minutes until smooth. Cover and leave to rise for 1 hour until doubled.',
      'Shape and place in a lined 900 g tin. Cover and leave for 45 minutes until domed above the rim.',
      'Heat the oven to 190C. Brush with milk, sprinkle with oats and bake for 40 minutes, covering with foil if the top browns too fast.',
      'Cool on a rack for at least 1 hour before slicing.'
    ],
    tips: [
      'Soak the oats first.',
      'Cover with foil if the top darkens early.',
      'Cool completely before slicing.'
    ],
    pair: ['Butter and jam', 'Cheese', 'Soup', 'Peanut butter'],
    store: 'Keeps for 3 days wrapped. Freeze sliced for 2 months.',
    rest: [165, 'Rising and cooling'],
    nut: [201, 6, 33, 5, 2, 9, 680]
  }
};
