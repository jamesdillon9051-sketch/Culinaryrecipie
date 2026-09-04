/** Recipes with nothing sweetened by the cook, volume four.
    See ../details2/italian.js for the schema.

    The No Added Sugar tag is applied by src/lib/diet-derived.js from the
    ingredient list, not written here, so these carry it only while they
    genuinely contain no sugar, honey, syrup or condensed milk. Where a dish is
    sweet, the sweetness comes from fruit, and the nutrition row says so in the
    sugar column rather than pretending otherwise. */

module.exports = {
  'banana-oat-pancakes': {
    d: 'Pancakes made from oats, eggs and a very ripe banana, with no sugar, syrup or flour — soft in the middle and properly browned outside.',
    meta: 'Banana oat pancakes with no added sugar — oats, eggs and one ripe banana, browned in a hot pan.',
    kw: ['banana oat pancakes', 'no added sugar pancakes', 'flourless pancakes', 'healthy pancake recipe'],
    why: 'A ripe banana brings both sweetness and enough starch to bind, which is why this works without flour or sugar. The oats are blended to a flour so the texture is cake rather than porridge. There is 14 g of sugar a serving in these and all of it is the banana — a recipe with fruit in it is not sugar-free, and it is better to say so than to pretend the distinction does not exist.',
    ing: [
      '2 very ripe bananas, well speckled',
      '2 large eggs',
      '100 g rolled oats',
      '120 ml whole milk',
      '1 tsp baking powder',
      '1 tsp vanilla extract',
      '0.5 tsp ground cinnamon',
      '0.25 tsp fine sea salt',
      '1 tbsp neutral oil, for the pan',
      '# To serve',
      '150 g berries',
      '1 tbsp peanut butter, loosened with warm water'
    ],
    st: [
      'Blend the oats for 20 seconds until they are a coarse flour.',
      'Add the bananas, eggs, milk, baking powder, vanilla, cinnamon and salt and blend 30 seconds until smooth.',
      'Rest the batter 10 minutes. It thickens considerably as the oat flour hydrates, and pancakes made from unrested batter spread too thin.',
      'Heat a non-stick pan over medium and wipe it with oil.',
      'Drop in 3 tablespoons of batter per pancake and cook 2 to 3 minutes, until the edges look dry and bubbles hold open.',
      'Turn once and cook 90 seconds more.',
      'Serve with the berries and the loosened peanut butter spooned over.'
    ],
    tips: [
      'The bananas must be heavily speckled, nearly black. Yellow bananas leave these tasting of wet oats.',
      'Resist pressing them with the spatula. They are held together by egg and banana, not gluten, and pressing squeezes out what makes them tender.',
      'Frozen bananas work if thawed and drained — do not include the liquid that comes out.'
    ],
    pair: ['Black coffee', 'Thick yoghurt instead of the peanut butter', 'A glass of cold milk'],
    store: 'Refrigerate up to 3 days or freeze 2 months between sheets of paper. Reheat in a dry pan for a minute a side. They soften in the fridge and the pan brings the edges back.',
    nut: [384, 14, 58, 11, 8, 14, 380]
  },

  'roasted-tomato-basil-soup': {
    d: 'Tomatoes roasted until they collapse and caramelise at the edges, blended with garlic and basil. No sugar, because roasting does the job sugar is usually added to do.',
    meta: 'Roasted tomato and basil soup with no added sugar — the sweetness comes from roasting the tomatoes hard.',
    kw: ['roasted tomato soup', 'no added sugar soup', 'tomato basil soup', 'vegan tomato soup'],
    why: 'Almost every tinned tomato soup has sugar in it, because tinned tomatoes are acidic and sugar is the quick correction. Roasting is the slow one: dry heat drives off water and concentrates what is already in the fruit, so the tomatoes come out sweet on their own. A whole head of garlic roasted alongside goes mild and almost creamy, which is where the body comes from.',
    ing: [
      '1.2 kg ripe tomatoes, halved',
      '1 whole head garlic, top sliced off',
      '2 red onions, in wedges',
      '3 tbsp olive oil',
      '1.5 tsp fine sea salt',
      '0.5 tsp black pepper',
      '1 tsp dried oregano',
      '700 ml vegetable stock',
      '30 g fresh basil, leaves and stalks separated',
      '1 tbsp red wine vinegar'
    ],
    st: [
      'Heat the oven to 200C fan.',
      'Toss the tomatoes and onions with 2 tablespoons of the oil, the salt, pepper and oregano and spread them cut side up in a large roasting tin.',
      'Sit the garlic head in the tin, pour the last tablespoon of oil over its cut face and cover just the garlic with a scrap of foil.',
      'Roast 45 minutes. The tomatoes should be collapsed and browned at the edges — that browning is the whole point, so do not pull them early.',
      'Squeeze the garlic cloves out of their skins into the tin and discard the papery husk.',
      'Tip everything into a pot with the stock and the basil stalks and simmer 5 minutes.',
      'Blend until smooth, then stir in the vinegar and most of the basil leaves.',
      'Taste for salt. If it still reads sharp, another few minutes of simmering will do more than sugar would.'
    ],
    tips: [
      'Do not crowd the tin. Tomatoes packed together steam in their own juice and never brown, and unbrowned tomatoes will taste as though they need sugar.',
      'Basil stalks have more flavour than the leaves and hold up to simmering. Save the leaves for the end, where the heat will not flatten them.',
      'If your tomatoes are out of season and dull, roast them 10 minutes longer rather than reaching for sweetener.'
    ],
    pair: ['A grilled cheese sandwich', 'Crusty bread, to serve', 'A glass of Chianti'],
    store: 'Refrigerate up to 4 days and freeze 3 months. It thickens as it stands; loosen with stock rather than water so the seasoning holds.',
    nut: [186, 4, 21, 9, 5, 13, 640]
  },

  'baked-cinnamon-apples': {
    d: 'Apples baked slowly with cinnamon and a splash of orange juice until they collapse into their own syrup. The only sugar in the dish is the fruit.',
    meta: 'Baked cinnamon apples with no added sugar — slow-baked until they collapse into their own syrup.',
    kw: ['baked apples', 'no added sugar dessert', 'cinnamon apples', 'healthy apple pudding'],
    why: 'Apples are already about 10% sugar, and slow baking concentrates it — an hour at a moderate heat turns the juice that runs out into something close to a caramel without a grain of sugar added. Bramleys collapse to a purée and eating apples hold their shape, so this uses both: one for the sauce, one for the texture.',
    ing: [
      '2 Bramley or other cooking apples, peeled and thickly sliced',
      '4 eating apples, such as Braeburn, cored and quartered',
      '2 tsp ground cinnamon',
      '0.5 tsp ground ginger',
      '1 pinch ground cloves',
      '1 orange, zest and juice',
      '2 tbsp water',
      '20 g flaked almonds',
      '1 pinch fine sea salt'
    ],
    st: [
      'Heat the oven to 170C fan.',
      'Toss all the apples with the cinnamon, ginger, cloves, orange zest and salt in a baking dish.',
      'Pour the orange juice and water around, not over — you want the tops dry enough to colour.',
      'Cover with foil and bake 20 minutes, until the cooking apples have started to break down.',
      'Uncover, stir once so the collapsed apple coats the quarters, and bake 15 minutes more.',
      'Scatter the almonds over and give it a final 5 minutes, until they are toasted and the juices have thickened and darkened at the edges of the dish.',
      'Rest 10 minutes before serving — the syrup thickens as it cools.'
    ],
    tips: [
      'Two kinds of apple is the trick. All eating apples gives you baked apple wedges and no sauce; all cooking apples gives you purée.',
      'Do not cover for the whole bake. The uncovered stretch is where the liquid reduces and stops tasting watery.',
      'If it tastes flat, it wants salt and acid rather than sweetness — a squeeze more orange usually fixes it.'
    ],
    pair: ['Thick Greek yoghurt', 'Cold custard, if you are not avoiding sugar', 'A cup of strong tea'],
    store: 'Refrigerate up to 4 days. Good cold from the fridge for breakfast with yoghurt, or reheated at 160C for 10 minutes. Freezes 3 months, though the eating apples soften on thawing.',
    nut: [180, 2, 34, 4, 6, 26, 60]
  },

  'chickpea-socca': {
    d: 'A single thick pancake of chickpea flour, olive oil and water, baked fierce in a heavy pan until the edges blister — street food from Nice, and naturally free of gluten, dairy and sugar.',
    meta: 'Chickpea socca from Nice — a blistered gram flour pancake with olive oil, rosemary and pepper.',
    kw: ['socca recipe', 'chickpea pancake', 'gluten free flatbread', 'farinata'],
    why: 'Socca is three ingredients and one variable: heat. The batter has to rest so the chickpea flour hydrates fully, and the pan has to be genuinely smoking before the batter goes in, because the blistered top and the crisp underside both come from the shock. A tepid pan gives a pale, damp pancake and no amount of extra time recovers it.',
    ing: [
      '150 g gram flour (chickpea flour)',
      '350 ml warm water',
      '4 tbsp olive oil',
      '1 tsp fine sea salt',
      '1 tbsp rosemary leaves, chopped',
      '1 tsp coarsely ground black pepper',
      '# To serve',
      '1 lemon, in wedges',
      '2 handfuls rocket'
    ],
    st: [
      'Whisk the gram flour and water together until completely smooth, then whisk in 2 tablespoons of the oil and the salt.',
      'Rest the batter at room temperature for at least 30 minutes, and up to 4 hours. Unrested batter tastes raw and chalky.',
      'Heat the oven to its maximum, with a heavy 25 cm cast-iron pan inside, for 15 minutes.',
      'Skim any foam off the batter and stir in the rosemary.',
      'Take the pan out, add the remaining 2 tablespoons of oil and swirl — it should shimmer immediately.',
      'Pour the batter in; it will sizzle at the edges at once. Return it to the oven for 12 to 15 minutes, until set and blistered brown in patches.',
      'Grind the pepper over generously, cut into rough wedges and serve hot with lemon and rocket.'
    ],
    tips: [
      'The pan must be preheated empty and properly hot. This is the whole recipe.',
      'Gram flour foams as it rests; skimming it gives a smoother top.',
      'Socca is eaten hot and torn, not cooled and sliced. It goes leathery within twenty minutes.'
    ],
    pair: ['A cold glass of rosé', 'Olives and anchovies', 'Ratatouille alongside'],
    store: 'Best within the hour. It refrigerates 2 days and reheats in a dry pan over high heat for 2 minutes a side, which brings back some of the crispness but not the blister.',
    nut: [242, 9, 24, 12, 5, 2, 500]
  },

  'lentil-walnut-ragu': {
    d: 'Brown lentils and toasted walnuts cooked down with soffritto, tomato and a long simmer into something with the depth of a meat ragù and none of the meat.',
    meta: 'Lentil and walnut ragù — a long-simmered vegan sauce with the depth of a meat ragù, no added sugar.',
    kw: ['lentil ragu', 'vegan bolognese', 'walnut ragu', 'meat free pasta sauce'],
    why: 'Meatless ragùs usually fail on two counts: no fat to carry flavour and no browning to build it. Toasted walnuts fix the first, and taking the soffritto much further than feels comfortable — twenty minutes, not five — fixes the second. Tomato purée fried in the pan until it darkens is the third piece, and it is the one most often skipped.',
    ing: [
      '# For the base',
      '3 tbsp olive oil',
      '1 large onion, finely diced',
      '2 carrots, finely diced',
      '2 celery sticks, finely diced',
      '4 garlic cloves, crushed',
      '80 g walnuts, toasted and chopped',
      '# For the ragù',
      '3 tbsp tomato purée',
      '200 ml red wine',
      '250 g brown or Puy lentils',
      '400 g tin chopped tomatoes',
      '700 ml vegetable stock',
      '2 bay leaves',
      '1 tbsp dried oregano',
      '1.5 tsp fine sea salt',
      '0.5 tsp black pepper',
      '1 tbsp balsamic vinegar'
    ],
    st: [
      'Toast the walnuts in a dry pan for 4 minutes until they smell nutty, then chop them roughly.',
      'Heat the oil in a heavy pot and cook the onion, carrot and celery over medium-low for 20 minutes, stirring now and then, until sweet and beginning to colour. This is where the flavour comes from and it cannot be hurried.',
      'Add the garlic and cook 1 minute.',
      'Add the tomato purée and fry it, stirring, for 3 minutes until it darkens from red to brick.',
      'Pour in the wine and let it bubble away almost completely, scraping the base of the pot.',
      'Add the lentils, tomatoes, stock, bay, oregano, salt, pepper and the walnuts.',
      'Simmer uncovered 40 to 45 minutes, stirring occasionally, until the lentils are soft and the sauce holds its shape on a spoon.',
      'Stir in the balsamic off the heat, taste for salt, and fish out the bay leaves.'
    ],
    tips: [
      'Twenty minutes on the soffritto. Five gives you a sauce that tastes of tinned tomato and nothing else.',
      'Puy lentils hold their shape; brown lentils break down and thicken the sauce. Either works, and they give quite different results.',
      'It is better the next day, which is true of most ragùs and truer of this one.'
    ],
    pair: ['Rigatoni or pappardelle', 'A robust Sangiovese', 'Grated Parmesan, to serve, if not vegan'],
    store: 'Refrigerate up to 5 days and freeze 3 months. It thickens hard in the fridge; loosen with stock or pasta water rather than plain water.',
    nut: [396, 18, 44, 16, 14, 9, 720]
  },

  'savoury-cottage-cheese-bowl': {
    d: 'Cottage cheese with tomato, cucumber, olive oil and plenty of black pepper — eight minutes, no cooking, and 26 g of protein a serving.',
    meta: 'Savoury cottage cheese bowl with tomato, cucumber and olive oil — 26 g of protein, eight minutes, no cooking.',
    kw: ['savoury cottage cheese bowl', 'high protein no cook breakfast', 'cottage cheese recipe', 'no added sugar breakfast'],
    why: 'Cottage cheese is usually treated as something to endure with fruit on top. Handled as a savoury base — salted properly, dressed with good oil, given acid and crunch — it behaves like a soft cheese rather than a diet food. The trick is seasoning it as you would a burrata, which nobody does and which changes it entirely.',
    ing: [
      '400 g cottage cheese',
      '200 g cherry tomatoes, halved',
      '150 g cucumber, diced',
      '2 spring onions, sliced',
      '2 tbsp extra virgin olive oil',
      '1 tbsp red wine vinegar',
      '0.5 tsp flaky sea salt',
      '0.75 tsp coarsely ground black pepper',
      '2 tbsp chopped dill',
      '2 tbsp chopped flat-leaf parsley',
      '1 pinch chilli flakes',
      '# To serve',
      '2 slices rye or sourdough toast'
    ],
    st: [
      'Toss the tomatoes and cucumber with the vinegar and half the salt and leave them 5 minutes, so they release a little liquid and season themselves.',
      'Spoon the cottage cheese into two shallow bowls and spread it out rather than mounding it — more surface takes more dressing.',
      'Season the cottage cheese itself with the remaining salt and most of the pepper. This is the step that matters.',
      'Spoon the dressed vegetables over with their liquid.',
      'Scatter the spring onions, dill and parsley, add the chilli flakes and pour the olive oil over in a slow stream.',
      'Finish with the last of the pepper and serve with toast alongside.'
    ],
    tips: [
      'Season the cottage cheese, not just the topping. Unsalted curds under a salted salad is why this dish has a reputation.',
      'Full-fat cottage cheese. The low-fat version is watery and there is nothing here to hide behind.',
      'Let the vegetables sit in the vinegar for the full five minutes — the liquid they give up becomes part of the dressing.'
    ],
    pair: ['Strong coffee', 'A soft-boiled egg for more protein', 'Radishes and butter on the side'],
    store: 'Best assembled to order. The dressed vegetables keep a day in the fridge, but spooned onto the cottage cheese in advance they turn it watery within a couple of hours.',
    nut: [352, 26, 18, 20, 3, 9, 780]
  }
};
