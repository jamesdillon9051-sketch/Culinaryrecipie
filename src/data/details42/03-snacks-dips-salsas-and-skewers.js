'use strict';

/**
 * Volume forty-two — snacks, dips, salsas and skewers.
 *
 * Roasted nuts, trail mix, popcorn and sweet potato chips, six dips and
 * hummuses, two salsas and a roasted one, and three skewers and wraps for
 * a party plate. Times are the recipe's own; ovens differ, so each method
 * says when to check early. Nutrition is estimated from the ingredient list
 * by npm run calc.
 */

module.exports = {
  'spiced-nuts': {
    d: 'Mixed nuts roasted in butter, sugar, smoked paprika, cayenne and rosemary until crisp and fragrant.',
    meta: 'Spiced nuts: mixed nuts roasted with butter, sugar, smoked paprika, cayenne and rosemary. Ten servings, roasted for 20 minutes.',
    kw: ['spiced nuts', 'roasted spiced nuts', 'sweet and spicy nuts', 'rosemary spiced nuts', 'party spiced nuts'],
    why: 'Why do spiced nuts so often come out chewy? Because the coating is wet when it goes into the oven, and stays that way.\n\nMix the butter, sugar and spices in a bowl and toss the nuts through until each is coated, then spread them in a single layer on a lined tray. Nuts that touch steam each other and stay soft. **Stir them twice during roasting.** The coating pools in the gaps and burns without a stir.\n\nRoast at 160°C for 20 minutes, until the nuts smell toasty and the coating has dried to a glaze. If your oven runs hot, check at 15 minutes. Nuts burn quickly, and the difference between toasted and bitter is about 2 minutes.\n\nLeave them to cool completely on the tray. They crisp up as they cool, and are soft and sticky until then. Break up any clumps, add the rosemary and a little extra salt if needed, and serve in a bowl. They keep in a jar for a week and make a good gift.',
    ing: [
      '300 g mixed nuts',
      '2 tbsp butter, melted, about 30 g',
      '2 tbsp caster sugar',
      '1 tsp salt',
      '1 tsp smoked paprika',
      '1/2 tsp cayenne pepper',
      '1 tbsp chopped rosemary'
    ],
    st: [
      'Heat the oven to 160°C and line a tray. Mix the melted butter, sugar, salt, paprika and cayenne in a bowl.',
      'Toss the nuts in the mixture until coated. Spread in a single layer on the tray.',
      'Roast for 20 minutes, stirring twice, until fragrant and the coating has dried.',
      'Scatter with the rosemary and cool completely on the tray.'
    ],
    tips: [
      'Spread the nuts in one layer.',
      'Stir twice.',
      'If your oven runs hot, check at 15 minutes.',
      'Let them cool completely.'
    ],
    pair: ['Cold beer', 'Cheese board', 'Sparkling wine', 'Olives'],
    store: 'Keeps in an airtight jar for 1 week.',
    nut: [222, 6, 9, 18, 3, 4, 240]
  },

  'trail-mix': {
    d: 'Almonds, cashews, raisins, dried cranberries, pumpkin seeds and dark chocolate chips mixed in a jar.',
    meta: 'Trail mix: almonds, cashews, raisins, cranberries, pumpkin seeds and chocolate chips mixed in a jar. Eight servings, no cooking.',
    kw: ['trail mix', 'homemade trail mix', 'nut and fruit trail mix', 'chocolate trail mix', 'easy trail mix'],
    why: 'What makes a good trail mix? A mix of textures, sweet and salty, and nothing that goes soft in a bag. It is a snack for a walk, a desk drawer or a school lunch.\n\nStart with the nuts, which give crunch and substance, and choose unsalted ones so that you control the salt. Dried fruit gives chew and sweetness, and seeds give a different kind of crunch. **Add the chocolate last.** If it goes in with warm nuts, or sits in a hot bag, it melts into a sticky lump.\n\nThe proportions below are a guide. Keep the nuts at about half the total, the fruit at about a third and the rest for seeds and chocolate. Too much fruit makes the mix sticky, and too many nuts makes it dry.\n\nToss everything together in a large bowl and divide into small bags or jars. A pinch of flaky salt over the finished mix lifts the sweet and the savoury. Store in a cool, dry place.',
    ing: [
      '100 g almonds',
      '100 g cashews',
      '80 g raisins',
      '60 g dried cranberries',
      '60 g pumpkin seeds',
      '80 g dark chocolate chips',
      '1/4 tsp flaky sea salt'
    ],
    st: [
      'Put the almonds, cashews, raisins, cranberries and pumpkin seeds in a large bowl and toss.',
      'Add the chocolate chips and the salt and stir.',
      'Divide into small bags or jars.'
    ],
    tips: [
      'Choose unsalted nuts.',
      'Add the chocolate last.',
      'Keep it out of the heat.',
      'Divide into small portions.'
    ],
    pair: ['Fresh fruit', 'Yoghurt', 'Hot tea', 'A long walk'],
    store: 'Keeps in an airtight jar for 3 weeks.',
    nut: [311, 8, 27, 19, 4, 17, 80]
  },

  'cheese-popcorn': {
    d: 'Freshly popped popcorn tossed in melted butter, finely grated parmesan, garlic powder and salt.',
    meta: 'Cheese popcorn: freshly popped popcorn tossed in butter, parmesan and garlic powder. Four servings, popped in 5 minutes.',
    kw: ['cheese popcorn', 'parmesan popcorn', 'homemade cheese popcorn', 'stovetop cheese popcorn', 'garlic parmesan popcorn'],
    why: 'A film night is the occasion, and a bowl of popcorn with a cheesy coating is the answer. The cheese sticks if you do three things in the right order.\n\nPop the kernels in a large pan with a lid, in the oil, over medium-high heat. Shake the pan every few seconds, and take it off the heat when the popping slows to about two seconds between pops. **Do not wait for the popping to stop.** The last kernels will burn before the rest are done.\n\nMelt the butter while the popcorn is still hot and pour it over, tossing well. The butter is the glue. Then add the parmesan, garlic powder and salt, in that order, and toss again. A very finely grated cheese, almost a powder, clings far better than coarse shreds.\n\nServe straight away in a big bowl. Popcorn goes soft within an hour. If your hob runs hot, lower the heat slightly once the first few kernels pop.',
    ing: [
      '50 g popcorn kernels',
      '2 tbsp sunflower oil',
      '30 g butter, melted',
      '40 g parmesan, very finely grated',
      '1/2 tsp garlic powder',
      '1/2 tsp salt'
    ],
    st: [
      'Heat the oil in a large pan with a lid over medium-high heat. Add the kernels, cover and shake the pan often for 4 minutes.',
      'When the popping slows to one pop every 2 seconds, take the pan off the heat.',
      'Pour the melted butter over the popcorn and toss. Add the parmesan, garlic powder and salt and toss again.',
      'Serve straight away.'
    ],
    tips: [
      'Grate the parmesan very finely.',
      'Add the butter first.',
      'If your hob runs hot, lower the heat.',
      'Serve at once.'
    ],
    pair: ['Cold beer', 'Cola', 'Hot chocolate', 'A good film'],
    store: 'Best eaten within the hour. Keeps in a tin for 1 day but loses its crunch.',
    nut: [204, 5, 10, 16, 2, 0, 450]
  },

  'sweet-potato-chips': {
    d: 'Thin slices of sweet potato baked slowly with olive oil, salt and smoked paprika until crisp.',
    meta: 'Sweet potato chips: thin slices of sweet potato baked slowly with olive oil and smoked paprika. Four servings, baked for 25 minutes.',
    kw: ['sweet potato chips', 'baked sweet potato chips', 'crispy sweet potato chips', 'homemade sweet potato crisps', 'sweet potato chips with paprika'],
    why: 'It looks like a crisp and bakes like a biscuit, which is why the oven is set low and the slices are thin. Chips cut thick turn soft and chewy, and thin ones turn crisp.\n\nSlice the sweet potatoes 2 mm thick, ideally with a mandoline, and soak them in cold water for 10 minutes to remove some of the surface starch. Dry them thoroughly on a tea towel. **Wet slices steam and never crisp.** The drier they are when they go into the oven, the better.\n\nToss with the oil, salt and paprika until each slice has a coating, and spread them in a single layer on two lined trays, with no overlaps. Overlapping slices stay soft where they touch.\n\nBake at 150°C for 25 minutes, turning once, until the edges curl and the slices are crisp. If your oven runs hot, check at 20 minutes. They crisp more as they cool. Take out any that are done early, as thin slices vary.',
    ing: [
      '500 g sweet potatoes, sliced 2 mm thick',
      '2 tbsp olive oil',
      '1/2 tsp salt',
      '1/2 tsp smoked paprika'
    ],
    st: [
      'Soak the sweet potato slices in cold water for 10 minutes, then dry thoroughly on a tea towel.',
      'Heat the oven to 150°C and line two trays. Toss the slices with the oil, salt and paprika.',
      'Spread in a single layer without overlapping. Bake for 25 minutes, turning once, until crisp at the edges.',
      'Cool on the trays for 5 minutes.'
    ],
    tips: [
      'Slice thin and even.',
      'Dry the slices well.',
      'If your oven runs hot, check at 20 minutes.',
      'Take out slices as they finish.'
    ],
    pair: ['Sour cream dip', 'Burgers', 'Guacamole', 'Cold beer'],
    store: 'Best on the day. Keeps in an airtight tin for 2 days.',
    nut: [171, 2, 25, 7, 4, 5, 360]
  },

  'beetroot-dip': {
    d: 'Cooked beetroot blended with Greek yoghurt, garlic, lemon and dill into a bright pink dip.',
    meta: 'Beetroot dip: cooked beetroot blended with Greek yoghurt, garlic, lemon and dill. Six servings, no cooking.',
    kw: ['beetroot dip', 'beetroot and yoghurt dip', 'beetroot dip with dill', 'pink beetroot dip', 'easy beetroot dip'],
    why: 'The first sign it works is the colour: a hot pink that makes the whole table look brighter. The taste is earthy and sweet, with a tang from the yoghurt.\n\nUse cooked beetroot from a vacuum pack, not pickled in vinegar. Pickled beetroot makes a dip that tastes sharp and sour. Drain the beetroot well and pat it dry, since too much liquid thins the dip. **Blend the beetroot with the garlic and lemon first, then add the yoghurt.** The beetroot needs time to break down on its own, and the yoghurt turns pink as it joins in.\n\nBlend for a full minute until the mixture is perfectly smooth, scraping down the sides once. Season with the salt and cumin, and taste. A little more lemon juice brightens the flavour if the dip seems flat.\n\nSpoon into a bowl, swirl in the olive oil and scatter with the dill. Serve with pitta, raw vegetables or crackers. The dip stains everything, so use a white bowl at your own risk.',
    ing: [
      '250 g cooked beetroot, drained',
      '150 g Greek yoghurt',
      '1 clove garlic, crushed',
      '1 tbsp lemon juice',
      '1 tbsp olive oil',
      '1/2 tsp ground cumin',
      '1/2 tsp salt',
      '1 tbsp chopped dill'
    ],
    st: [
      'Blend the beetroot, garlic and lemon juice for 1 minute until smooth.',
      'Add the yoghurt, cumin and salt and blend until completely smooth. Taste and add more lemon if needed.',
      'Spoon into a bowl, swirl in the olive oil and scatter with the dill.'
    ],
    tips: [
      'Use cooked beetroot, not pickled.',
      'Drain it well.',
      'Taste and add lemon.',
      'Serve cold.'
    ],
    pair: ['Pitta bread', 'Raw vegetables', 'Crackers', 'Grilled lamb'],
    store: 'Keeps in the fridge for 4 days.',
    nut: [68, 3, 5, 4, 1, 4, 240]
  },

  'beetroot-hummus': {
    d: 'Hummus blended with cooked beetroot, tahini, lemon and cumin into a deep pink dip.',
    meta: 'Beetroot hummus: chickpeas blended with cooked beetroot, tahini, lemon and cumin. Eight servings, no cooking.',
    kw: ['beetroot hummus', 'pink beetroot hummus', 'beetroot and tahini hummus', 'homemade beetroot hummus', 'beetroot chickpea dip'],
    why: 'Blend the tahini and lemon first. That is the quick tip for any hummus, and the one that makes this beetroot version silky instead of grainy.\n\nWhisk the tahini and lemon juice together in the food processor for a full minute, until they turn pale and creamy. This is called whipping the tahini, and it lightens the whole dip. **Add the iced water a spoon at a time while the machine is running.** The cold water aerates the mixture and keeps it fluffy.\n\nThen add the chickpeas, beetroot, garlic, cumin and salt and blend for 3 minutes, scraping down the sides. The beetroot gives colour and sweetness, but it should not overwhelm the chickpea and tahini flavour.\n\nTaste and adjust: more lemon for sharpness, more salt to bring out the flavour, or a splash of water for a softer texture. Serve in a shallow bowl with a well of olive oil in the middle and some toasted seeds on top.',
    ing: [
      '240 g drained tinned chickpeas',
      '150 g cooked beetroot',
      '2 tbsp tahini',
      '2 tbsp lemon juice',
      '1 clove garlic, crushed',
      '3 tbsp olive oil',
      '1/2 tsp ground cumin',
      '1/2 tsp salt',
      '3 tbsp iced water'
    ],
    st: [
      'Whip the tahini and lemon juice in a food processor for 1 minute until pale and creamy.',
      'Add the chickpeas, beetroot, garlic, cumin and salt and blend for 3 minutes, scraping down.',
      'With the machine running, add the iced water a spoon at a time, then 2 tbsp of the oil.',
      'Spoon into a shallow bowl and drizzle with the remaining oil.'
    ],
    tips: [
      'Whip the tahini first.',
      'Use iced water.',
      'Blend for the full 3 minutes.',
      'Taste and adjust the lemon.'
    ],
    pair: ['Pitta bread', 'Raw vegetables', 'Falafel', 'Toasted seeds'],
    store: 'Keeps in the fridge for 5 days.',
    nut: [116, 3, 8, 8, 2, 2, 260]
  },

  'edamame-hummus': {
    d: 'A bright green hummus of shelled edamame, tahini, lemon, garlic and olive oil.',
    meta: 'Edamame hummus: a bright green dip of shelled edamame, tahini, lemon and garlic. Six servings, no cooking.',
    kw: ['edamame hummus', 'green edamame hummus', 'edamame and tahini dip', 'homemade edamame hummus', 'edamame dip'],
    why: 'It is a dip for a party where someone has already brought the hummus. A bowl of bright green is a good change from the usual beige.\n\nUse cooked, shelled edamame that you have thawed, from the freezer section. Dry them on kitchen paper before they go in the processor, since extra water thins the dip. **Blend for longer than you think.** Edamame have a tougher skin than chickpeas and need a full 3 minutes to break down completely.\n\nWhip the tahini with the lemon juice first, then add the edamame, garlic, salt and oil. The dip will look thick at first and then loosen as the oil and tahini work through the beans. Add water a spoon at a time if it is too stiff.\n\nTaste and adjust: a little more lemon makes the flavour fresher and keeps the green bright, while salt brings out the sweetness of the beans. Serve with vegetable sticks, rice crackers or toasted pitta. The colour fades after a day, so make it close to serving.',
    ing: [
      '300 g shelled edamame, cooked and thawed',
      '2 tbsp tahini',
      '3 tbsp lemon juice',
      '1 clove garlic, crushed',
      '3 tbsp olive oil',
      '1/2 tsp salt',
      '2 tbsp water'
    ],
    st: [
      'Whip the tahini and lemon juice in a food processor for 1 minute until pale.',
      'Add the dried edamame, garlic and salt and blend for 3 minutes, scraping down.',
      'With the machine running, add the oil and water a little at a time until smooth.',
      'Taste and adjust. Spoon into a bowl.'
    ],
    tips: [
      'Dry the edamame.',
      'Blend for the full 3 minutes.',
      'Add water a spoon at a time.',
      'Make it close to serving.'
    ],
    pair: ['Rice crackers', 'Vegetable sticks', 'Pitta bread', 'Cold white wine'],
    store: 'Keeps in the fridge for 3 days; the colour fades.',
    nut: [156, 6, 6, 12, 3, 1, 210]
  },

  'pea-and-mint-dip': {
    d: 'Peas cooked for three minutes and blended with fresh mint, feta, lemon and olive oil into a bright green dip.',
    meta: 'Pea and mint dip: peas blended with fresh mint, feta, lemon and olive oil. Six servings, cooked for 3 minutes.',
    kw: ['pea and mint dip', 'minted pea dip', 'pea and feta dip', 'green pea dip', 'pea mint and feta dip'],
    why: 'Frozen peas, mint, feta, lemon: four things, and a dip that is greener than any guacamole. It is a standby for a summer table, since the peas live in the freezer.\n\nCook the peas for 3 minutes in boiling water and drain them at once, then rinse in cold water. Cold water sets the colour and keeps the peas bright green. **Do not overcook them.** Peas cooked too long turn a dull khaki, and the dip loses its look.\n\nBlend the peas with the mint, garlic and lemon juice, keeping some texture. A dip with a few whole peas looks more interesting than a smooth purée. Add the olive oil and pulse, then crumble in the feta and pulse once or twice more, to keep small pieces.\n\nTaste, since feta varies in salt, and add pepper. Serve with toasted pitta, crostini or raw vegetables, or spread on toast with a poached egg. It keeps well for two days in the fridge.',
    ing: [
      '300 g frozen peas',
      '15 g fresh mint leaves',
      '1 clove garlic, crushed',
      '2 tbsp lemon juice',
      '3 tbsp olive oil',
      '80 g feta, crumbled',
      '1/4 tsp black pepper'
    ],
    st: [
      'Boil the peas for 3 minutes, drain and rinse in cold water.',
      'Blend the peas, mint, garlic and lemon juice until mostly smooth but with a little texture.',
      'Add the oil and pulse, then crumble in the feta and pulse once or twice. Season with the pepper.',
      'Spoon into a bowl and serve.'
    ],
    tips: [
      'Do not overcook the peas.',
      'Rinse them in cold water.',
      'Leave some texture.',
      'Taste before adding salt.'
    ],
    pair: ['Toasted pitta', 'Crostini', 'Raw vegetables', 'Poached eggs'],
    store: 'Keeps in the fridge for 2 days.',
    nut: [142, 5, 8, 10, 3, 4, 150]
  },

  'pumpkin-hummus': {
    d: 'Hummus blended with plain pumpkin puree, tahini, smoked paprika and cumin into a creamy orange dip.',
    meta: 'Pumpkin hummus: chickpeas blended with pumpkin puree, tahini, smoked paprika and cumin. Eight servings, no cooking.',
    kw: ['pumpkin hummus', 'pumpkin chickpea hummus', 'autumn pumpkin hummus', 'homemade pumpkin hummus', 'pumpkin tahini dip'],
    why: 'Most home versions come out too sweet, and the fix is to use plain pumpkin puree and plenty of lemon. The pumpkin has to be a background, not a dessert.\n\nUse the unsweetened tinned puree, not pie filling, and blot it on kitchen paper if it looks wet. A wet puree makes a loose, watery dip that no amount of chickpeas can rescue. **Whip the tahini with the lemon first.** It lightens the base and gives a creamy texture.\n\nAdd the chickpeas, pumpkin, garlic, cumin, smoked paprika and salt and blend for 3 minutes, scraping down. The paprika gives a smoky flavour that balances the sweetness of the pumpkin. Add the olive oil gradually, with the machine running, for a silky finish.\n\nTaste, and adjust the lemon and salt. The dip should taste savoury, with a gentle sweetness at the end. Serve in a bowl with a dusting of paprika and toasted pumpkin seeds, with pitta or raw carrots.',
    ing: [
      '240 g drained tinned chickpeas',
      '150 g plain pumpkin puree',
      '2 tbsp tahini',
      '2 tbsp lemon juice',
      '1 clove garlic, crushed',
      '2 tbsp olive oil',
      '1/2 tsp ground cumin',
      '1/2 tsp smoked paprika',
      '1/2 tsp salt'
    ],
    st: [
      'Whip the tahini and lemon juice in a food processor for 1 minute until pale and creamy.',
      'Add the chickpeas, pumpkin puree, garlic, cumin, paprika and salt and blend for 3 minutes, scraping down.',
      'With the machine running, add the oil gradually. Taste and adjust.',
      'Spoon into a bowl and dust with a little paprika.'
    ],
    tips: [
      'Use plain pumpkin puree.',
      'Blot the puree if wet.',
      'Whip the tahini first.',
      'Taste and add lemon.'
    ],
    pair: ['Pitta bread', 'Carrot sticks', 'Toasted pumpkin seeds', 'Crackers'],
    store: 'Keeps in the fridge for 5 days.',
    nut: [98, 3, 8, 6, 2, 2, 240]
  },

  'roasted-red-pepper-hummus': {
    d: 'Hummus blended with roasted red peppers from a jar, tahini, lemon, garlic and cumin into a sweet, smoky dip.',
    meta: 'Roasted red pepper hummus: chickpeas blended with roasted red peppers, tahini, lemon and cumin. Eight servings, no cooking.',
    kw: ['roasted red pepper hummus', 'red pepper hummus', 'hummus with roasted peppers', 'homemade red pepper hummus', 'roasted pepper tahini dip'],
    why: 'Chickpeas, tahini, roasted red pepper: three things you can buy in jars and tins, and a dip that tastes of the grill. It needs no cooking at all.\n\nUse peppers from a jar, drained and patted dry. They have been roasted and peeled already, which saves you 40 minutes. Pat them well on kitchen paper, since the brine in the jar thins the hummus and gives an acidic edge. **Add the peppers last.** If they go in at the start, the tahini does not whip properly and the dip stays heavy.\n\nWhip the tahini and lemon first, then add the chickpeas, garlic, cumin and salt and blend for 3 minutes. Add the peppers and blend for 1 minute more, until the dip is a smooth, pale coral.\n\nTaste and adjust, then serve in a shallow bowl with a drizzle of olive oil and a dusting of smoked paprika. It is lovely in a wrap, or as a sandwich spread, and keeps in the fridge for 5 days.',
    ing: [
      '240 g drained tinned chickpeas',
      '150 g jarred roasted red peppers, drained',
      '2 tbsp tahini',
      '2 tbsp lemon juice',
      '1 clove garlic, crushed',
      '3 tbsp olive oil',
      '1/2 tsp ground cumin',
      '1/2 tsp salt'
    ],
    st: [
      'Whip the tahini and lemon juice in a food processor for 1 minute until pale.',
      'Add the chickpeas, garlic, cumin and salt and blend for 3 minutes, scraping down.',
      'Pat the peppers dry, add them and blend for 1 minute. With the machine running, add 2 tbsp of the oil.',
      'Spoon into a bowl and drizzle with the remaining oil.'
    ],
    tips: [
      'Pat the peppers dry.',
      'Add the peppers last.',
      'Whip the tahini first.',
      'Taste and adjust.'
    ],
    pair: ['Pitta bread', 'Raw vegetables', 'Falafel', 'Wraps'],
    store: 'Keeps in the fridge for 5 days.',
    nut: [112, 3, 7, 8, 2, 2, 240]
  },

  'whipped-feta': {
    d: 'Feta blended with Greek yoghurt, olive oil and honey into a light, creamy spread with lemon zest.',
    meta: 'Whipped feta: feta blended with Greek yoghurt, olive oil and honey into a creamy spread. Six servings, no cooking.',
    kw: ['whipped feta', 'whipped feta dip', 'whipped feta with honey', 'creamy whipped feta', 'feta and yoghurt dip'],
    why: 'Feta, yoghurt, olive oil, honey: four things, a food processor and five minutes. The result is a cloud of cheese that tastes of salt and lemon.\n\nFeta is crumbly and salty on its own, and the yoghurt turns it into a spread. Use a block of feta in brine, not the dry pre-crumbled kind, which does not whip. Drain it and pat it dry. **Blend the feta for a full 2 minutes before adding anything else.** It breaks down into a smooth paste, and the other ingredients mix in easily.\n\nAdd the yoghurt a spoon at a time, then the olive oil in a thin stream with the machine running. The mixture should look like whipped cream, light and fluffy. If it is too stiff, add more yoghurt.\n\nSpread it in a shallow bowl, swirling the top with the back of a spoon, and drizzle with honey and olive oil. Add lemon zest and black pepper. Serve with warm pitta, raw vegetables or crusty bread.',
    ing: [
      '200 g feta, drained',
      '150 g Greek yoghurt',
      '2 tbsp olive oil',
      '1 tbsp honey',
      '1 lemon, zest only',
      '1/4 tsp black pepper'
    ],
    st: [
      'Blend the feta in a food processor for 2 minutes until smooth.',
      'Add the yoghurt a spoon at a time, then the 2 tbsp olive oil in a thin stream, until light and fluffy.',
      'Spread in a shallow bowl and swirl the top.',
      'Drizzle with the honey and scatter with the lemon zest and pepper.'
    ],
    tips: [
      'Use feta in brine.',
      'Blend the feta on its own first.',
      'Add the yoghurt gradually.',
      'Serve at room temperature.'
    ],
    pair: ['Warm pitta', 'Raw vegetables', 'Roasted tomatoes', 'Crusty bread'],
    store: 'Keeps in the fridge for 4 days.',
    nut: [169, 7, 6, 13, 0, 5, 380]
  },

  'black-bean-salsa': {
    d: 'Black beans, sweetcorn, tomato, red onion, jalapeno, coriander and lime juice, chopped and tossed together.',
    meta: 'Black bean salsa: black beans, sweetcorn, tomato, red onion, jalapeno and lime juice. Eight servings, no cooking.',
    kw: ['black bean salsa', 'black bean and corn salsa', 'black bean salsa with lime', 'easy black bean salsa', 'texas caviar style salsa'],
    why: 'Drain the beans and corn well. That is the quick tip, and the thing that keeps the salsa fresh and not soggy.\n\nRinse the black beans in a sieve until the water runs clear. The liquid in the tin is thick and starchy and makes the salsa cloudy. Drain the sweetcorn and pat it dry as well. **Salt the tomatoes and let them stand for 5 minutes.** They release their juice, which you can pour off, and the flesh left behind is firmer and tastes sweeter.\n\nChop everything the same size, about the size of a pea, so that every spoonful has a bit of each. Mix with the lime juice, cumin and salt, and taste. A salsa needs more lime and salt than you expect.\n\nLeave it for 15 minutes to let the flavours settle, then serve with tortilla chips, in tacos or on top of grilled chicken. It keeps for 2 days in the fridge, though the tomatoes soften and the coriander darkens.',
    ing: [
      '240 g drained tinned black beans',
      '140 g drained tinned sweetcorn',
      '2 tomatoes, about 240 g, diced',
      '1/2 red onion, about 60 g, finely chopped',
      '1 jalapeno, about 20 g, finely chopped',
      '15 g fresh coriander, chopped',
      '2 limes, juice only, about 60 ml',
      '1/2 tsp ground cumin',
      '1/2 tsp salt'
    ],
    st: [
      'Rinse and drain the beans and corn. Salt the tomatoes and leave for 5 minutes, then pour off the juice.',
      'Mix the beans, corn, tomatoes, onion, jalapeno and coriander in a bowl.',
      'Stir in the lime juice, cumin and salt. Taste and adjust. Leave for 15 minutes before serving.'
    ],
    tips: [
      'Drain the beans and corn well.',
      'Salt and drain the tomatoes.',
      'Chop everything the same size.',
      'Taste for lime and salt.'
    ],
    pair: ['Tortilla chips', 'Tacos', 'Grilled chicken', 'Cold lager'],
    store: 'Keeps in the fridge for 2 days.',
    nut: [65, 3, 11, 1, 3, 2, 240]
  },

  'mango-salsa': {
    d: 'Diced ripe mango, red pepper, red onion, jalapeno, coriander and lime juice for fish, chicken and tacos.',
    meta: 'Mango salsa: diced mango, red pepper, red onion, jalapeno, coriander and lime. Eight servings, no cooking.',
    kw: ['mango salsa', 'fresh mango salsa', 'mango salsa for fish tacos', 'easy mango salsa', 'mango salsa with lime'],
    why: 'Quick tip: use a mango that gives slightly under your thumb, not one that is soft and bruised. The salsa depends on pieces that hold their shape.\n\nCut the flesh away from the stone and score it in a grid, then slice the cubes off the skin. Each cube should be about 1 cm. Dice the red pepper and red onion to the same size so that every spoonful has a bit of each. **Soak the onion in cold water for 5 minutes and drain.** It takes the bite off and leaves a sweet crunch.\n\nMix the mango, pepper, onion, jalapeno and coriander and dress with the lime juice and salt. Start with half the jalapeno and add the rest if you want more heat. The seeds make it much hotter.\n\nLet it stand for 10 minutes for the flavours to mix, then serve it with grilled fish, chicken, tacos or tortilla chips. It is best made within an hour of serving, since the mango softens.',
    ing: [
      '2 ripe mangoes, about 400 g flesh, diced',
      '1 red pepper, about 150 g, diced',
      '1/2 red onion, about 60 g, finely diced',
      '1 jalapeno, about 20 g, finely chopped',
      '15 g fresh coriander, chopped',
      '2 tbsp lime juice',
      '1/4 tsp salt'
    ],
    st: [
      'Soak the diced onion in cold water for 5 minutes and drain.',
      'Mix the mango, red pepper, onion, jalapeno and coriander in a bowl.',
      'Stir in the lime juice and salt. Taste and adjust.',
      'Leave for 10 minutes before serving.'
    ],
    tips: [
      'Use a mango that is ripe but firm.',
      'Soak the onion.',
      'Start with half the jalapeno.',
      'Make it within the hour.'
    ],
    pair: ['Fish tacos', 'Grilled chicken', 'Tortilla chips', 'Grilled prawns'],
    store: 'Best on the day. Keeps in the fridge for 1 day.',
    nut: [44, 1, 10, 0, 1, 8, 80]
  },

  'roasted-tomato-salsa': {
    d: 'Tomatoes, onion, jalapenos and garlic roasted until charred, then blended with lime and coriander.',
    meta: 'Roasted tomato salsa: tomatoes, onion, jalapenos and garlic roasted until charred, then blended. Eight servings, roasted for 25 minutes.',
    kw: ['roasted tomato salsa', 'oven roasted tomato salsa', 'roasted salsa', 'charred tomato salsa', 'homemade roasted tomato salsa'],
    why: 'What does roasting do to a salsa? It browns the sugars in the tomatoes and onion, turning a sharp, fresh sauce into a deeper, smokier one with a darker colour.\n\nHalve the tomatoes and set them cut-side down on a tray with the onion wedges, the jalapenos and the whole, unpeeled garlic. Roast at 220°C for 25 minutes, until the skins are blackened in patches and the tomatoes have collapsed. **Do not skip the blackening.** The charred spots carry the smoky flavour.\n\nIf your oven runs hot, check at 20 minutes. Cool the vegetables for 5 minutes, then squeeze the garlic from its skin. Peel the tomatoes if you want a smoother salsa, or leave the skins for a rustic one.\n\nBlend in short pulses, so that the salsa keeps some texture, with the lime juice, coriander and salt. Taste and adjust. The salsa thickens as it cools and tastes better the next day. Serve warm or cold.',
    ing: [
      '600 g tomatoes, halved',
      '1 onion, about 150 g, cut into wedges',
      '2 jalapenos, about 40 g',
      '3 cloves garlic, unpeeled',
      '1 tbsp sunflower oil',
      '2 limes, juice only, about 60 ml',
      '15 g fresh coriander',
      '1/2 tsp salt'
    ],
    st: [
      'Heat the oven to 220°C. Toss the tomatoes, onion, jalapenos and garlic with the oil on a tray, tomatoes cut-side down.',
      'Roast for 25 minutes until blackened in patches and collapsed. Cool for 5 minutes.',
      'Squeeze the garlic from its skins. Pulse the vegetables with the lime juice, coriander and salt until chunky.',
      'Taste and adjust. Serve warm or cold.'
    ],
    tips: [
      'Let the vegetables blacken.',
      'Pulse, do not purée.',
      'If your oven runs hot, check at 20 minutes.',
      'Taste for lime and salt.'
    ],
    pair: ['Tortilla chips', 'Tacos', 'Scrambled eggs', 'Grilled chicken'],
    store: 'Keeps in the fridge for 5 days.',
    nut: [46, 1, 6, 2, 2, 3, 150]
  },

  'antipasto-skewers': {
    d: 'Salami, mozzarella balls, olives, artichoke hearts and roasted peppers threaded onto skewers with a drizzle of oil and balsamic.',
    meta: 'Antipasto skewers: salami, mozzarella, olives, artichoke hearts and roasted peppers on skewers. Eight servings, no cooking.',
    kw: ['antipasto skewers', 'antipasto skewers for parties', 'italian antipasto skewers', 'salami and mozzarella skewers', 'antipasto kebabs'],
    why: 'Put the ingredients on a stick and everything is a mouthful. That is the whole idea behind this party plate, and why it saves you from a cheese board and a lot of plates.\n\nThread the pieces in an order that looks good and eats well: a slice of folded salami, a mozzarella ball, an olive, an artichoke heart, a piece of roasted pepper. Alternate colours so that the skewer looks bright. **Pat the artichokes, peppers and olives dry before threading.** The brine in the jar makes the other items soggy and slippery.\n\nMake the skewers up to 3 hours ahead and keep them covered in the fridge. Drizzle with the oil and balsamic vinegar only just before serving, so that the colours stay clean. A pinch of dried oregano and a few torn basil leaves finish them.\n\nServe on a long board or platter. Use short wooden skewers or cocktail sticks for smaller bites. If you are feeding a crowd, double the quantities and use a bigger board.',
    ing: [
      '80 g salami slices',
      '120 g mozzarella balls',
      '60 g black olives',
      '100 g jarred artichoke hearts, drained',
      '80 g jarred roasted red peppers, drained',
      '1 tbsp olive oil',
      '1 tbsp balsamic vinegar',
      '1/2 tsp dried oregano'
    ],
    st: [
      'Pat the artichokes, peppers and olives dry. Fold the salami slices.',
      'Thread the salami, mozzarella, olives, artichoke and pepper onto 8 skewers, alternating colours.',
      'Arrange on a platter. Just before serving, drizzle with the oil and balsamic vinegar and scatter with the oregano.'
    ],
    tips: [
      'Pat the jarred items dry.',
      'Alternate the colours.',
      'Dress just before serving.',
      'Make up to 3 hours ahead.'
    ],
    pair: ['Sparkling wine', 'Crusty bread', 'Olives', 'Cold beer'],
    store: 'Best on the day. Keeps in the fridge for 1 day, undressed.',
    nut: [122, 6, 2, 10, 1, 1, 420]
  },

  'caprese-skewers': {
    d: 'Cherry tomatoes, mozzarella bocconcini and basil threaded onto skewers with olive oil and balsamic vinegar.',
    meta: 'Caprese skewers: cherry tomatoes, mozzarella and basil on skewers with olive oil and balsamic. Eight servings, no cooking.',
    kw: ['caprese skewers', 'caprese salad skewers', 'tomato mozzarella basil skewers', 'caprese skewers for parties', 'easy caprese skewers'],
    why: 'Cut the stem end off the tomatoes, so they stand on their own. That is the quick tip, and the one that makes these look good on a plate.\n\nThe three ingredients should be at room temperature for the best flavour. Cold tomatoes and cold mozzarella taste of very little, so take them out of the fridge 30 minutes before you thread them. **Fold the basil leaf around the mozzarella.** It stays in place and gives a bit of green at every bite.\n\nThread in this order: a tomato, a folded basil leaf, a mozzarella ball. Repeat three times on each skewer, ending with a tomato. Use 8 short skewers, or cocktail sticks if you want smaller bites.\n\nDrizzle with the olive oil and balsamic vinegar, and season with salt and pepper just before serving. Salt makes the tomatoes release juice, and the skewers become slippery if dressed too early. Serve at once on a flat platter.',
    ing: [
      '24 cherry tomatoes, about 360 g',
      '24 mozzarella bocconcini, about 240 g',
      '24 basil leaves',
      '2 tbsp olive oil',
      '1 tbsp balsamic vinegar',
      '1/4 tsp salt',
      '1/4 tsp black pepper'
    ],
    st: [
      'Bring the tomatoes and mozzarella to room temperature. Fold each basil leaf in half.',
      'Thread a tomato, a folded basil leaf and a mozzarella ball onto each skewer, three times over, ending with a tomato.',
      'Arrange on a platter. Just before serving, drizzle with the oil and vinegar and season.'
    ],
    tips: [
      'Serve at room temperature.',
      'Fold the basil.',
      'Dress just before serving.',
      'Use ripe tomatoes.'
    ],
    pair: ['Sparkling wine', 'Crusty bread', 'Prosciutto', 'Rose wine'],
    store: 'Best eaten within 2 hours.',
    nut: [130, 7, 3, 10, 1, 2, 260]
  },

  'prosciutto-wrapped-asparagus': {
    d: 'Asparagus spears wrapped in prosciutto, brushed with olive oil and roasted until the ham is crisp.',
    meta: 'Prosciutto wrapped asparagus: asparagus spears wrapped in prosciutto and roasted for 12 minutes. Six servings.',
    kw: ['prosciutto wrapped asparagus', 'asparagus wrapped in prosciutto', 'roasted prosciutto asparagus', 'prosciutto asparagus bundles', 'prosciutto and asparagus appetizer'],
    why: 'It looks like a bacon-wrapped asparagus, and it cooks in about half the time. Prosciutto is already cured and sliced so thinly that it crisps in minutes.\n\nSnap the woody ends off the asparagus by bending each spear until it breaks naturally. Choose spears of medium thickness, about as thick as a pencil. Thin ones overcook, and thick ones stay raw inside while the ham burns. **Wrap loosely and spiral the ham.** Tight wrapping steams the ham, and it never crisps.\n\nLay the wrapped spears on a lined tray, brush with olive oil, and grind over black pepper. Do not add salt, because the prosciutto brings plenty. Roast at 200°C for 12 minutes, until the ham is crisp at the edges and the asparagus tip is tender. If your oven runs hot, check at 9 minutes.\n\nSqueeze lemon juice over the top as they come out, and serve warm. They are good as a starter, on a brunch plate or on a party table. Pair them with a soft poached egg.',
    ing: [
      '400 g asparagus, about 24 spears, trimmed',
      '8 slices prosciutto, about 100 g, halved lengthways',
      '1 tbsp olive oil',
      '1/4 tsp black pepper',
      '1 tbsp lemon juice'
    ],
    st: [
      'Heat the oven to 200°C and line a tray. Wrap each asparagus spear with a strip of prosciutto in a loose spiral.',
      'Arrange in a single layer, brush with the olive oil and grind over the pepper.',
      'Roast for 12 minutes until the prosciutto is crisp at the edges.',
      'Squeeze over the lemon juice and serve warm.'
    ],
    tips: [
      'Choose medium-thick spears.',
      'Wrap loosely.',
      'If your oven runs hot, check at 9 minutes.',
      'Do not add extra salt.'
    ],
    pair: ['Poached eggs', 'Sparkling wine', 'Crusty bread', 'Lemon wedges'],
    store: 'Best eaten at once. Keeps in the fridge for 1 day.',
    nut: [81, 6, 3, 5, 1, 1, 330]
  }
};
