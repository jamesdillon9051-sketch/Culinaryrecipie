'use strict';

/**
 * Volume fifty-two — American regional classics, barbecue, bakes and
 * everyday cooking, third part.
 *
 * Twenty-five dishes: popcorn balls, pizza dip, a fruit jelly salad, chow
 * chow, fried apple pies, switchel and the Spanish roscón de reyes; two air
 * fryer sides; seven slow cooker dishes (pulled beef, honey mustard chicken,
 * split pea soup, apple butter, oatmeal, sticky ribs, stuffed peppers); two
 * Instant Pot recipes (yogurt and egg bites); four cast iron recipes
 * (cornbread, pizza, steak, skillet cookie); a Dutch oven chicken, pull-apart
 * cheese bread and cheese twists. Waits of an hour or more are declared as
 * rest. Nutrition is estimated by npm run calc.
 */

module.exports = {
  'popcorn-balls': {
    d: 'Fresh popcorn bound with a hot marshmallow and butter syrup, shaped into balls while warm and left to set.',
    meta: 'Popcorn balls: fresh popcorn bound with a hot marshmallow and butter syrup, shaped into balls while warm. Ten servings, cooked in 10 minutes.',
    kw: ['popcorn balls', 'marshmallow popcorn balls', 'popcorn balls recipe', 'homemade popcorn balls', 'halloween popcorn balls'],
    why: 'The secret is butter on your hands. Popcorn balls are sticky work, and a thin film of butter on your palms means the warm marshmallow coating clings to the popcorn instead of to you. Work quickly, because the mixture sets as it cools and becomes impossible to shape.\n\nThe binding is a simple syrup of melted butter and marshmallows, stirred over low heat until smooth. It sets to a soft, chewy coating, not the hard crack of caramel corn. Use freshly popped corn, with the unpopped kernels sifted out, because a single hard kernel can break a tooth. About 3 litres of popped corn, or 80 g of kernels popped, is enough for ten balls.\n\n**Pour the syrup over the popcorn in two additions**, stirring gently with a buttered spatula to coat each piece. Press the mixture into balls the size of a tennis ball, using light pressure, and set them on baking paper. They firm up within 15 minutes. Wrap them in cellophane for gifts, or eat them within the day.',
    ing: [
      '80 g popping corn, popped, about 3 litres',
      '60 g butter, plus extra for greasing',
      '300 g marshmallows',
      '1 tsp vanilla extract',
      '1/2 tsp salt'
    ],
    st: [
      'Pop the corn and discard any unpopped kernels. Put it in a very large greased bowl.',
      'Melt the 60 g butter in a large saucepan over low heat. Add the marshmallows and stir for 5 minutes until completely smooth. Stir in the vanilla and salt.',
      'Pour half the syrup over the popcorn and fold with a buttered spatula. Add the rest and fold until coated.',
      'Butter your hands. Working quickly, press the mixture into 10 balls about the size of a tennis ball. Place on baking paper and let set.'
    ],
    tips: [
      'Butter your hands generously before shaping.',
      'Shape the balls while the mixture is warm, as it stiffens quickly.',
      'Sift out unpopped kernels before coating.'
    ],
    pair: ['Hot chocolate', 'Cold milk', 'Fresh apples', 'Cider'],
    store: 'Keeps wrapped in an airtight container for 2 days.',
    nut: [153, 1, 26, 5, 0, 18, 140]
  },

  'pizza-dip': {
    d: 'A hot, bubbling dip of cream cheese, tomato sauce, mozzarella and pepperoni, baked until golden and scooped up with bread.',
    meta: 'Pizza dip: a hot, bubbling dip of cream cheese, tomato sauce, mozzarella and pepperoni, baked until golden. Eight servings, cooked for 25 minutes.',
    kw: ['pizza dip', 'baked pizza dip', 'pizza dip recipe', 'cream cheese pizza dip with pepperoni', 'hot pizza dip for parties'],
    why: 'Keep it short and cheesy. Pizza dip takes the best parts of a pizza, the sauce, the cheese and the pepperoni, and skips the dough, which makes it a party food that disappears fast. It is layered in a baking dish and cooked until bubbling, and you only need something to scoop it with.\n\nThe base is cream cheese, beaten with a little Parmesan, oregano and garlic powder until smooth, then spread in the dish. It forms a rich cushion under the tomato sauce, which should be thick; a thin sauce makes the dip watery. Mozzarella and pepperoni go on top, with a few olives or peppers if you like.\n\n**Bake until the cheese is melted and speckled with brown**, about 25 minutes. Let the dip stand for 5 minutes, because it is molten when it first comes out. Serve with toasted bread, breadsticks or crackers, and warn people that the middle stays hot for some time.',
    ing: [
      '225 g cream cheese, softened',
      '30 g Parmesan, finely grated',
      '1 tsp dried oregano',
      '1/2 tsp garlic powder',
      '200 g thick tomato pasta sauce',
      '200 g mozzarella, grated',
      '60 g sliced pepperoni',
      '1 tbsp chopped fresh basil'
    ],
    st: [
      'Heat the oven to 190°C. Beat the cream cheese, Parmesan, oregano and garlic powder until smooth.',
      'Spread the mixture in the base of a 20 cm baking dish. Spoon the tomato sauce over the top.',
      'Cover with the mozzarella and pepperoni.',
      'Bake for 25 minutes until bubbling and golden. Stand for 5 minutes and scatter with the basil.'
    ],
    tips: [
      'Use a thick sauce so the dip does not turn watery.',
      'Soften the cream cheese first so it spreads without tearing.',
      'Serve with plenty of dippers; the dip goes fast.'
    ],
    pair: ['Garlic bread', 'Breadsticks', 'Tortilla chips', 'Carrot sticks'],
    store: 'Best eaten warm. Keeps in the fridge for 2 days; reheat in the oven.',
    nut: [236, 11, 3, 20, 0, 2, 430]
  },

  'fruit-jello-salad': {
    d: 'A creamy, no-cook salad of strawberry jelly powder, cottage cheese, whipped cream and tinned fruit, chilled until set.',
    meta: 'Fruit jello salad: a creamy no-cook salad of jelly powder, cottage cheese, whipped cream and tinned fruit, chilled until set. Eight servings, chilled for 2 hours.',
    kw: ['fruit jello salad', 'jello salad recipe', 'jello salad with cottage cheese', 'creamy fruit jelly salad', 'fruit jello salad with whipped cream'],
    why: 'It looks like a dessert and sits on the table beside the main course, which is what makes a jello salad so American. A mixture of cottage cheese, dry gelatin powder, whipped cream and fruit chills into a pink, creamy, lightly set dish with a texture somewhere between a mousse and a cheesecake filling.\n\nThere is no cooking, which is the surprise. The powder is stirred straight into the cottage cheese, where the moisture and the cold bring out the flavour and the sweetness, and the gelatin sets the salad lightly as it chills. Drain the fruit very well, because any syrup will thin the mix and leave a puddle at the bottom of the bowl.\n\n**Fold in the whipped cream last** and gently, so the mixture stays airy. Chill for 2 hours before serving. It is best in a glass bowl, so the pieces of fruit show through. Spoon it out onto plates and serve cold, as a side at a barbecue or a potluck.',
    ing: [
      '85 g strawberry jelly powder',
      '400 g cottage cheese',
      '400 g tinned fruit cocktail, very well drained',
      '200 ml double cream, whipped',
      '60 g mini marshmallows'
    ],
    st: [
      'Stir the jelly powder into the cottage cheese in a large bowl until evenly mixed.',
      'Fold in the drained fruit and marshmallows.',
      'Fold in the whipped cream gently until just combined.',
      'Cover and chill for 2 hours until lightly set. Spoon into bowls to serve.'
    ],
    tips: [
      'Drain the fruit on kitchen paper for the best texture.',
      'Fold the cream gently to keep the salad airy.',
      'Serve it very cold.'
    ],
    pair: ['Barbecued chicken', 'Baked ham', 'Potato salad', 'Burgers'],
    store: 'Keeps in the fridge for 2 days.',
    nut: [187, 6, 16, 11, 1, 14, 220],
    rest: [120, 'Chilling']
  },

  'southern-chow-chow': {
    d: 'A tangy Southern relish of green tomatoes, cabbage, onion and peppers in a sweet vinegar brine with mustard seed.',
    meta: 'Southern chow chow: a tangy relish of green tomatoes, cabbage, onion and peppers in a sweet vinegar brine with mustard seed. Ten servings, salted for 1 hour.',
    kw: ['southern chow chow', 'chow chow relish', 'green tomato chow chow', 'chow chow recipe', 'southern vegetable relish'],
    why: 'It looks like a relish and works like a pickle, and in the South it goes on everything. Chow chow is made from the end of the garden: green tomatoes that never ripened, cabbage, onions and peppers, all chopped and cooked in a sweet and sour brine. It is spooned over beans, greens, sausages and hot dogs, and eaten straight from the jar.\n\nThe vegetables are cut small, about the size of a pea, so the relish spoons easily. They are salted for an hour first, which draws out water and keeps them crisp-tender in the brine. Rinse and drain them well afterwards. The brine is cider vinegar, sugar, mustard seed, celery seed and turmeric, which gives chow chow its warm yellow colour.\n\n**Simmer for 15 minutes only.** Longer cooking turns the vegetables to mush. Pack the relish into clean jars while hot and cover with brine. It tastes better after a few days in the fridge, when the flavours have blended and the sharpness has softened.',
    ing: [
      '500 g green tomatoes, finely chopped',
      '300 g white cabbage, finely chopped',
      '2 onions, about 250 g, finely chopped',
      '1 red pepper, about 150 g, finely chopped',
      '1 green pepper, about 150 g, finely chopped',
      '2 tbsp fine salt',
      '400 ml cider vinegar',
      '200 g caster sugar',
      '2 tsp mustard seeds',
      '1 tsp celery seeds',
      '1/2 tsp ground turmeric'
    ],
    st: [
      'Mix the tomatoes, cabbage, onions and peppers with the salt in a large bowl. Leave for 1 hour, then rinse in a colander and drain well.',
      'Bring the vinegar, sugar, mustard seeds, celery seeds and turmeric to a boil in a large pan, stirring until the sugar dissolves.',
      'Add the vegetables and simmer for 15 minutes until just tender.',
      'Spoon into clean jars, cover with the brine, cool and seal. Chill before serving.'
    ],
    tips: [
      'Chop the vegetables evenly and small.',
      'Rinse the salted vegetables well, or the relish will be too salty.',
      'Use sterilised jars if you want to keep the relish for several weeks.'
    ],
    pair: ['Pinto beans', 'Collard greens', 'Hot dogs', 'Cornbread'],
    store: 'Keeps in the fridge in a sealed jar for 1 month.',
    nut: [116, 1, 28, 0, 2, 25, 1440],
    rest: [60, 'Salting the vegetables']
  },

  'appalachian-fried-apple-pies': {
    d: 'Small pastry turnovers filled with spiced dried apple and fried until blistered and golden, the crust crisp and flaky.',
    meta: 'Appalachian fried apple pies: small pastry turnovers filled with spiced dried apple and fried until golden. Eight servings, cooked in 15 minutes.',
    kw: ['appalachian fried apple pies', 'fried apple pies', 'fried apple pie recipe', 'dried apple hand pies', 'apple turnovers fried in oil'],
    why: 'Autumn is when these taste best, as the first cool weather makes the thought of hot fried pastry and apples appealing again, though the filling uses dried apples that keep all year. Dried fruit makes a better fried pie than fresh, because it has less water to turn the crust soggy and a more concentrated flavour.\n\nSimmer the dried apples with sugar, cinnamon and a little water until they are soft and thick, then mash them roughly and cool. The filling must be cool when it goes into the dough, or it will melt the fat and make the pastry tough. The dough is a simple one of flour, butter and cold water, rolled thin and cut into rounds.\n\n**Seal the edge firmly with a fork**, pressing along the curved edge, or the filling will leak into the oil. Fry in about 2 cm of oil at 175°C, for about 2 minutes on each side, turning once. Drain on paper and eat warm, dusted with sugar, with the filling still hot and sticky.',
    ing: [
      '200 g dried apples',
      '300 ml water',
      '60 g caster sugar',
      '1 tsp ground cinnamon',
      '1/4 tsp ground nutmeg',
      '# Pastry',
      '300 g plain flour',
      '1/2 tsp salt',
      '120 g cold butter, diced',
      '90 ml cold water',
      '300 ml vegetable oil, for frying'
    ],
    st: [
      'Simmer the apples, 300 ml water, sugar, cinnamon and nutmeg for 15 minutes until soft and thick. Mash roughly and cool completely.',
      'Rub the butter into the flour and salt until crumbly. Stir in the cold water to a firm dough and roll out to 3 mm thick. Cut 8 rounds, 12 cm across.',
      'Put a spoonful of filling on each round, fold over and press the edge with a fork to seal.',
      'Heat the oil to 175°C and fry the pies for 2 minutes on each side until golden. Drain on kitchen paper.'
    ],
    tips: [
      'Cool the filling fully before filling the pastry.',
      'Do not overfill; the pies burst if stuffed.',
      'Fry a few at a time to keep the oil hot.'
    ],
    pair: ['Vanilla ice cream', 'Hot coffee', 'Cold milk', 'Whipped cream'],
    store: 'Best eaten warm. Keeps for 1 day and reheats in a hot oven.',
    nut: [599, 4, 40, 47, 2, 10, 150]
  },

  'switchel': {
    d: 'A tart, gingery cold drink of water, cider vinegar and maple syrup, drunk on hot days in the hay fields of New England.',
    meta: 'Switchel: a tart, gingery cold drink of water, cider vinegar and maple syrup. Four servings, no cooking.',
    kw: ['switchel', 'switchel recipe', 'ginger switchel drink', 'vinegar and maple syrup drink', 'old fashioned switchel'],
    why: 'Most people expect it to be unbearably sour, and the fix is the maple syrup. Switchel is a cold drink of water, cider vinegar and a sweetener, and the sweetener is what balances the acid so it tastes like a sharp, refreshing lemonade rather than a mouthful of vinegar. Fresh ginger gives it a clean, warm bite.\n\nGrate the ginger finely and let it steep in the water for a few minutes, or the ginger will not flavour the drink fully. Use a good raw cider vinegar, and pure maple syrup, not pancake syrup. Taste and adjust, because brands of vinegar vary in strength. A squeeze of lemon helps the freshness.\n\n**Serve it very cold, over ice.** The drink is thin and drinks quickly, so make a jug. It is said to have been drunk in the hayfields in summer to quench thirst, and it stays refreshing for exactly that reason. Stir before pouring, because the ginger settles.',
    ing: [
      '1 litre cold water',
      '60 ml cider vinegar',
      '60 ml maple syrup',
      '20 g fresh ginger, finely grated',
      '1 tbsp lemon juice',
      '300 g ice'
    ],
    st: [
      'Stir the water, cider vinegar, maple syrup, ginger and lemon juice together in a jug.',
      'Taste and add a little more syrup or vinegar to suit.',
      'Strain if you like. Fill glasses with ice and pour the switchel over.'
    ],
    tips: [
      'Grate the ginger finely so the flavour spreads.',
      'Use raw cider vinegar for the best flavour.',
      'Serve over plenty of ice.'
    ],
    pair: ['Sandwiches', 'Salads', 'Cheese and crackers', 'Barbecued chicken'],
    store: 'Keeps in the fridge for 3 days. Stir before serving.',
    nut: [60, 0, 15, 0, 0, 12, 5]
  },

  'roscon-de-reyes': {
    d: 'A ring-shaped Spanish Epiphany bread, enriched with butter and flavoured with orange zest and blossom water, topped with candied fruit.',
    meta: 'Roscón de Reyes: a ring-shaped Spanish bread enriched with butter and flavoured with orange zest and blossom water. Ten servings, proving 135 minutes.',
    kw: ['roscon de reyes', 'roscón de reyes recipe', 'spanish three kings bread', 'orange blossom ring bread', 'spanish epiphany bread'],
    why: 'Why does the dough for a roscón need so much time? Because it is rich. Butter, sugar and eggs weigh the dough down and slow the yeast, so it needs two long proves, and patience is the only thing it demands. The reward is a soft, feathery, fragrant bread that tears into long strands.\n\nThe flavour comes from orange: grated zest in the dough and a splash of orange blossom water, which gives a floral, slightly perfumed note. Knead the dough until it is smooth and elastic, which takes about 10 minutes by hand. Shape it into a ring with a hole in the middle, and place it on a tray lined with baking paper.\n\n**Let the ring rise on the tray** until puffed, then brush it with beaten egg and decorate. Candied fruit, flaked almonds and a sprinkle of coarse sugar give the traditional look. Bake until deep golden. It is traditionally eaten on Epiphany, 6 January, often with a cup of hot chocolate for dipping.',
    ing: [
      '500 g strong white flour',
      '10 g dried yeast',
      '100 g caster sugar',
      '1/2 tsp salt',
      '100 ml warm milk',
      '100 g butter, softened',
      '2 eggs',
      '2 oranges, zested',
      '2 tbsp orange blossom water',
      '# Topping',
      '1 egg, beaten',
      '60 g mixed candied fruit',
      '30 g flaked almonds',
      '2 tbsp coarse sugar'
    ],
    st: [
      'Mix the flour, yeast, sugar and salt. Add the milk, butter, 2 eggs, orange zest and blossom water and knead for 10 minutes into a smooth, soft dough.',
      'Cover and prove for 90 minutes until doubled.',
      'Shape the dough into a ring 30 cm across, with a hole in the centre, on a lined tray. Cover and prove for 45 minutes.',
      'Heat the oven to 180°C. Brush with the beaten egg, decorate with the candied fruit, almonds and coarse sugar and bake for 30 minutes until deep golden.'
    ],
    tips: [
      'Keep the dough in a warm, draught-free spot while it rises.',
      'Cover the ring loosely with foil if the top browns too quickly.',
      'Let it cool before slicing.'
    ],
    pair: ['Hot chocolate', 'Strong coffee', 'Whipped cream', 'Orange juice'],
    store: 'Best eaten on the day. Keeps in an airtight tin for 2 days.',
    nut: [384, 9, 60, 12, 3, 20, 150],
    rest: [135, 'Proving the dough']
  },

  'air-fryer-potato-wedges': {
    d: 'Thick potato wedges tossed in oil and paprika and cooked in the air fryer until crisp outside and fluffy inside.',
    meta: 'Air fryer potato wedges: thick potato wedges tossed in oil and paprika and cooked in the air fryer until crisp outside. Four servings, cooked in 20 minutes.',
    kw: ['air fryer potato wedges', 'air fryer wedges', 'crispy air fryer potato wedges', 'paprika potato wedges', 'potato wedges in the air fryer'],
    why: 'It looks like a lot of oil and uses very little. An air fryer is a small, fast oven with a fan, and it crisps potatoes with a spoonful of oil where a pan or deep fryer needs a lot more. The wedges come out golden and crunchy outside, soft and fluffy in the middle.\n\nThe cut is what matters. Cut the potatoes into wedges of equal thickness, about 2 cm at the widest part, so they cook at the same speed. Soak them in cold water for 10 minutes to remove surface starch, then dry them thoroughly. Wet wedges steam instead of crisping.\n\n**Do not crowd the basket.** Wedges that overlap trap steam and stay pale. Cook in a single layer, or in two batches, and shake the basket halfway through. They are ready when the edges are deep golden and crisp. Toss with salt straight away and serve hot, with a dip such as sour cream, ketchup or garlic mayonnaise.',
    ing: [
      '800 g potatoes, cut into wedges',
      '2 tbsp vegetable oil',
      '1 tsp smoked paprika',
      '1/2 tsp garlic powder',
      '1 tsp salt'
    ],
    st: [
      'Heat the air fryer to 200°C. Dry the wedges thoroughly with a clean tea towel.',
      'Toss with the oil, paprika and garlic powder until coated.',
      'Cook in a single layer in the air fryer basket for 20 minutes, shaking the basket halfway through, until deep golden and crisp.',
      'Toss with the salt and serve at once.'
    ],
    tips: [
      'Dry the potatoes well before oiling.',
      'Cook in batches if the basket is small.',
      'Shake the basket partway for even colour.'
    ],
    pair: ['Sour cream', 'Garlic mayonnaise', 'Ketchup', 'Grilled chicken'],
    store: 'Best eaten straight away. Reheat leftovers in the air fryer for 4 minutes.',
    nut: [219, 4, 35, 7, 5, 2, 600]
  },

  'air-fryer-corn-ribs': {
    d: 'Corn cobs cut into long strips that curl into ribs, then cooked in the air fryer with paprika and lime until charred.',
    meta: 'Air fryer corn ribs: corn cobs cut into long strips that curl into ribs, then cooked in the air fryer with paprika and lime. Four servings, cooked in 15 minutes.',
    kw: ['air fryer corn ribs', 'corn ribs recipe', 'crispy corn ribs', 'air fryer corn on the cob strips', 'corn ribs with parmesan and lime'],
    why: 'Be careful with the knife. The ribs are made by cutting a corn cob in half, standing each half on its flat end and slicing downwards, then slicing each piece again into long strips. Cutting corn is the only tricky part, as the cob is slippery and tough, so use a large, sharp knife and a firm board.\n\nIn the heat of the air fryer, the strips curl up and the kernels brown at the edges and caramelise. The flavour is sweet and slightly smoky, like corn on the cob but easier to eat with the fingers. Brush with oil, paprika and garlic powder first, then add the toppings at the end.\n\n**Cook at 200°C for 12 to 15 minutes**, shaking the basket once. Finish with grated Parmesan, a squeeze of lime and a little chilli powder. The ribs are best eaten right away, while they are hot and crisp. They are a party snack that costs very little and disappears quickly.',
    ing: [
      '3 corn cobs, about 900 g, husks removed',
      '2 tbsp vegetable oil',
      '1 tsp smoked paprika',
      '1/2 tsp garlic powder',
      '1/2 tsp salt',
      '20 g Parmesan, finely grated',
      '1 lime'
    ],
    st: [
      'Heat the air fryer to 200°C. Cut each cob in half crossways, stand each half on its flat end and cut downwards into 4 strips.',
      'Toss the strips with the oil, paprika, garlic powder and salt.',
      'Cook in a single layer for 15 minutes, shaking the basket halfway through, until the edges are charred and the strips have curled.',
      'Scatter with the Parmesan and squeeze over the lime. Serve hot.'
    ],
    tips: [
      'Use a sharp, heavy knife and a stable board.',
      'Cook in batches so the ribs brown rather than steam.',
      'Serve with extra lime and a dipping sauce.'
    ],
    pair: ['Sour cream', 'Chipotle mayonnaise', 'Grilled chicken', 'Cold lager'],
    store: 'Best eaten straight away.',
    nut: [320, 9, 44, 12, 5, 7, 400]
  },

  'slow-cooker-pulled-beef': {
    d: 'Beef chuck cooked on low in a smoky tomato and vinegar sauce for eight hours, then shredded to pile into buns.',
    meta: 'Slow cooker pulled beef: beef chuck cooked on low in a smoky tomato and vinegar sauce, then shredded for buns. Eight servings, cooked for 480 minutes.',
    kw: ['slow cooker pulled beef', 'pulled beef recipe', 'slow cooker bbq pulled beef', 'shredded beef for sandwiches', 'pulled beef in the slow cooker'],
    why: 'Set it in the morning and forget it. Pulled beef is a cut that rewards neglect: chuck steak has plenty of connective tissue, which is tough when fresh and turns to gelatin after eight hours of slow, moist heat, leaving meat that shreds with two forks and a sauce with body.\n\nThe sauce is built from pantry staples: tomato paste, beef stock, cider vinegar, brown sugar, smoked paprika and garlic. The vinegar and sugar give the sweet-and-sour backbone of American barbecue, and the paprika adds smoke without a smoker. The onion cooks away to nothing and thickens the juices.\n\n**Shred the meat and return it to the juices** for 15 minutes before serving. Skim the fat off the top first with a spoon. Taste and adjust, adding salt or a splash of vinegar if it needs it. Pile the beef into toasted buns with coleslaw, or serve it over mash, rice or jacket potatoes.',
    ing: [
      '1.5 kg beef chuck, in 2 pieces',
      '1 onion, sliced',
      '4 garlic cloves, crushed',
      '250 ml beef stock',
      '3 tbsp tomato purée',
      '3 tbsp cider vinegar',
      '3 tbsp dark brown sugar',
      '2 tsp smoked paprika',
      '1 tsp salt',
      '1/2 tsp ground black pepper'
    ],
    st: [
      'Put the onion and garlic in the base of the slow cooker. Lay the beef on top.',
      'Whisk the stock, tomato purée, vinegar, sugar, paprika, salt and pepper and pour over the beef.',
      'Cover and cook on low for 8 hours until the beef shreds easily.',
      'Lift out the beef, shred with two forks and return to the juices. Stir, skim off any fat, and serve.'
    ],
    tips: [
      'Do not lift the lid during cooking; it lets out heat.',
      'Skim the fat from the juices before mixing in the meat.',
      'Taste at the end and adjust the salt and vinegar.'
    ],
    pair: ['Toasted buns', 'Coleslaw', 'Mashed potato', 'Baked beans'],
    store: 'Keeps in the fridge for 4 days and freezes for up to 3 months.',
    nut: [405, 37, 8, 25, 1, 6, 530]
  },

  'slow-cooker-honey-mustard-chicken': {
    d: 'Chicken thighs cooked in the slow cooker in a sauce of honey, wholegrain mustard and garlic, thickened at the end.',
    meta: 'Slow cooker honey mustard chicken: chicken thighs in a sauce of honey, wholegrain mustard and garlic, thickened at the end. Four servings, cooked for 240 minutes.',
    kw: ['slow cooker honey mustard chicken', 'honey mustard chicken thighs', 'honey mustard chicken recipe', 'chicken with honey and mustard sauce', 'slow cooker chicken thighs'],
    why: 'Put it on, then get on with your day. This is the kind of recipe a slow cooker is made for: bone-in chicken thighs, a sauce of honey and mustard and no attention for four hours. Thighs are the right cut, as they stay moist where breast meat dries out and turns stringy.\n\nThe sauce is honey, wholegrain mustard, garlic and a splash of stock. The honey sweetens, the mustard supplies sharpness and body, and the two together make a sticky, savoury coating. Brown the chicken first if you have time, since this adds flavour, though the dish works without it.\n\n**Lift the chicken out at the end** and thicken the liquid left in the pot. Stir in a spoonful of cornflour mixed with cold water, and turn the heat to high for 10 minutes until the sauce coats a spoon. Pour it over the chicken. Serve with mash or rice, which soak up the sauce, and a green vegetable on the side.',
    ing: [
      '900 g bone-in chicken thighs, skinned',
      '4 tbsp honey',
      '3 tbsp wholegrain mustard',
      '4 garlic cloves, crushed',
      '100 ml chicken stock',
      '1 tbsp cornflour',
      '1 tbsp water',
      '1/2 tsp salt',
      '1/2 tsp ground black pepper'
    ],
    st: [
      'Season the chicken with salt and pepper and put it in the slow cooker.',
      'Mix the honey, mustard, garlic and stock and pour over the chicken.',
      'Cover and cook on high for 4 hours until the chicken is tender and cooked through.',
      'Lift out the chicken. Stir the cornflour with the water, whisk into the juices and cook on high for 10 minutes until thickened. Pour over the chicken.'
    ],
    tips: [
      'Skin the thighs to avoid a greasy sauce.',
      'Brown the chicken first for deeper flavour if you have time.',
      'Check the thickest piece is cooked through, with no pink.'
    ],
    pair: ['Mashed potato', 'Steamed rice', 'Green beans', 'Crusty bread'],
    store: 'Keeps in the fridge for 3 days. Reheat gently.',
    nut: [564, 39, 21, 36, 1, 17, 780]
  },

  'slow-cooker-split-pea-soup': {
    d: 'A thick green soup of split peas, ham hock, carrot and celery, cooked on low for six hours until the peas collapse.',
    meta: 'Slow cooker split pea soup: a thick green soup of split peas, ham hock, carrot and celery, cooked on low until the peas collapse. Six servings, cooked for 360 minutes.',
    kw: ['slow cooker split pea soup', 'split pea soup with ham hock', 'split pea and ham soup', 'split pea soup recipe', 'split pea soup in the slow cooker'],
    why: 'Split pea is the soup that does not need soaking and does not need stirring. Split peas break down as they cook, so the soup thickens by itself, with no flour or cream, to a smooth, earthy purée with a texture somewhere between a soup and a porridge. Six hours on low is enough to melt them completely.\n\nThe ham hock supplies salt, smoke and body. As it cooks it gives up collagen and fat to the liquid, and the meat falls from the bone. Carrots and celery add sweetness and freshness, onion adds depth, and a bay leaf brings a herbal note. Rinse the peas first and pick out any small stones or discoloured ones.\n\n**Remove the hock and shred the meat** before serving, discarding the bone, skin and fat. Stir the meat back in. Taste before adding salt, as the ham may be salty enough. The soup thickens as it stands, so keep a little hot water to loosen it. Serve with crusty bread.',
    ing: [
      '400 g dried split green peas, rinsed',
      '400 g smoked ham hock',
      '2 carrots, about 200 g, diced',
      '2 celery sticks, diced',
      '1 onion, chopped',
      '3 garlic cloves, crushed',
      '1.8 litres water',
      '1 bay leaf',
      '1/2 tsp ground black pepper',
      '1/2 tsp dried thyme'
    ],
    st: [
      'Put the split peas, ham hock, carrots, celery, onion, garlic, bay leaf, thyme and pepper in the slow cooker.',
      'Pour in the water and stir.',
      'Cover and cook on low for 6 hours until the peas have collapsed and the soup is thick.',
      'Lift out the hock, shred the meat and return it to the pot. Remove the bay leaf, taste for salt and serve.'
    ],
    tips: [
      'Rinse the peas thoroughly and check for grit.',
      'Add the salt only at the end.',
      'Thin the soup with hot water if it becomes too thick.'
    ],
    pair: ['Crusty bread', 'Croutons', 'Green salad', 'Cheese toast'],
    store: 'Keeps in the fridge for 4 days and freezes for up to 3 months.',
    nut: [195, 18, 15, 7, 5, 6, 700]
  },

  'slow-cooker-apple-butter': {
    d: 'A dark, spiced, spreadable apple preserve with no added fat, cooked for ten hours in the slow cooker with cinnamon and cloves.',
    meta: 'Slow cooker apple butter: a dark, spiced, spreadable apple preserve cooked for ten hours with cinnamon and cloves. Sixteen servings, cooked for 600 minutes.',
    kw: ['slow cooker apple butter', 'apple butter recipe', 'homemade apple butter', 'spiced apple butter in the slow cooker', 'apple butter with cinnamon and cloves'],
    why: 'It looks like jam and tastes like apple pie filling, but there is no butter in it at all. Apple butter is a spread made by cooking apples for so long that they collapse and darken into a smooth, glossy paste, concentrated in flavour. The name refers to its texture, which is soft and spreadable like butter.\n\nThe slow cooker is ideal, since the heat is low and steady and nothing needs stirring. Apples, sugar, cider, cinnamon, cloves and nutmeg cook together for 10 hours: a long time, but all of it unattended. Leave the skins on if you plan to blend, as they add pectin and colour.\n\n**Blend until smooth, then cook with the lid off** for the last stretch, so the excess liquid evaporates and the butter thickens. It is ready when a spoonful holds its shape on a cold plate. Pour into clean jars while still hot. Spread it on toast, stir it into porridge, or serve it alongside roast pork.',
    ing: [
      '2 kg apples, cored and chopped',
      '150 g dark brown sugar',
      '120 ml apple cider',
      '2 tsp ground cinnamon',
      '1/2 tsp ground cloves',
      '1/4 tsp ground nutmeg',
      '1 tbsp lemon juice',
      '1/4 tsp salt'
    ],
    st: [
      'Put the apples, sugar, cider, cinnamon, cloves, nutmeg, lemon juice and salt in the slow cooker and stir.',
      'Cover and cook on low for 8 hours until the apples are completely soft.',
      'Blend with a stick blender until smooth.',
      'Cook with the lid off, on high, for 2 hours, stirring occasionally, until thick and dark. Spoon into clean jars.'
    ],
    tips: [
      'Use a mix of sweet and tart apples.',
      'Prop the lid open with a wooden spoon for the last stage.',
      'Test the thickness on a cold plate.'
    ],
    pair: ['Toast', 'Porridge', 'Roast pork', 'Cheese board'],
    store: 'Keeps in sealed jars in the fridge for 3 weeks.',
    nut: [108, 0, 27, 0, 3, 22, 40]
  },

  'slow-cooker-oatmeal': {
    d: 'Steel-cut oats cooked on low for seven hours in water and milk with cinnamon, ready and creamy when you wake.',
    meta: 'Slow cooker oatmeal: steel-cut oats cooked on low in water and milk with cinnamon, creamy and ready in the morning. Four servings, cooked for 420 minutes.',
    kw: ['slow cooker oatmeal', 'slow cooker oatmeal with cinnamon', 'steel cut oats in the slow cooker', 'slow cooker porridge', 'creamy slow cooker oatmeal'],
    why: 'Set it before bed. Steel-cut oats are the whole grain cut into pieces, and they take at least 20 minutes on the hob. In a slow cooker they cook for seven hours while you sleep, turning creamy and tender with no stirring, no sticking and no watching.\n\nThe liquid is a mix of water and milk. Water alone is thin, and milk alone can scorch on the sides, so the blend gives a creamy result without trouble. Cinnamon and a little brown sugar sweeten it, and a pinch of salt brings out the flavour of the oats. The ratio is about one part oats to five parts liquid.\n\n**Grease the slow cooker well** or line it with a liner, as oats cling to the sides. Give it a good stir in the morning and loosen with a splash of warm milk. Top each bowl with chopped nuts, sliced banana, berries or a spoonful of yoghurt. The oatmeal will keep warm for an hour or so.',
    ing: [
      '200 g steel-cut oats',
      '1 litre water',
      '500 ml whole milk',
      '50 g dark brown sugar',
      '1 tsp ground cinnamon',
      '1/2 tsp salt',
      '1 tsp vanilla extract'
    ],
    st: [
      'Grease the slow cooker. Add the oats, water, milk, sugar, cinnamon and salt and stir.',
      'Cover and cook on low for 7 hours.',
      'Stir well, stir in the vanilla and loosen with a splash of warm milk if needed. Serve hot.'
    ],
    tips: [
      'Use steel-cut oats, not rolled; rolled oats turn to mush.',
      'Grease the pot generously.',
      'Stir in the morning before serving.'
    ],
    pair: ['Sliced banana', 'Berries', 'Chopped nuts', 'Maple syrup'],
    store: 'Keeps in the fridge for 4 days. Reheat with a splash of milk.',
    nut: [328, 11, 53, 8, 5, 19, 360]
  },

  'slow-cooker-sticky-ribs': {
    d: 'Pork ribs cooked on low for six hours in a sticky glaze of honey, soy sauce, ketchup and garlic, until the meat falls from the bone.',
    meta: 'Slow cooker sticky ribs: pork ribs cooked on low in a sticky glaze of honey, soy sauce, ketchup and garlic. Four servings, cooked for 360 minutes.',
    kw: ['slow cooker sticky ribs', 'sticky pork ribs', 'slow cooker pork ribs', 'honey soy ribs', 'sticky ribs in the slow cooker'],
    why: 'The smell of the glaze reaching the hall hours before dinner is the best part. Pork ribs in a slow cooker turn out tender in a way that is difficult in a hot oven, as the low, moist heat melts the collagen and leaves the meat soft and juicy, pulling cleanly from the bone. The sauce does the rest.\n\nThe glaze is honey, soy sauce, ketchup, rice vinegar and garlic, which balance sweet, salt, acid and savoury in a simple way. Cut the rack into pieces of 3 or 4 ribs so they fit in the pot, stand them upright against the sides, and pour the sauce over. Do not add water; the ribs release plenty of their own juices.\n\n**Lift the ribs out carefully**, as they will fall apart. Skim the fat from the sauce, then boil it in a pan for 5 minutes to thicken, and brush it over the ribs. Serve hot, with plenty of napkins. Slow cooker ribs lack the crust of oven ribs, so brown under the grill if you want it.',
    ing: [
      '1.5 kg pork back ribs, cut into sections of 3 or 4 ribs',
      '4 tbsp honey',
      '4 tbsp soy sauce',
      '4 tbsp ketchup',
      '2 tbsp rice vinegar',
      '4 garlic cloves, crushed',
      '1 tsp ground ginger',
      '1/2 tsp ground black pepper'
    ],
    st: [
      'Mix the honey, soy sauce, ketchup, vinegar, garlic, ginger and pepper in a bowl.',
      'Stand the rib sections upright in the slow cooker and pour the sauce over.',
      'Cover and cook on low for 6 hours until the meat is tender and falling from the bone.',
      'Lift out the ribs. Skim the fat from the sauce, boil it in a pan for 5 minutes until thick and brush over the ribs.'
    ],
    tips: [
      'Pack the ribs loosely so the heat circulates.',
      'Skim the fat from the sauce before reducing it.',
      'Finish the ribs under a hot grill for a darker crust.'
    ],
    pair: ['Steamed rice', 'Coleslaw', 'Corn on the cob', 'Cold beer'],
    store: 'Keeps in the fridge for 3 days. Reheat covered in the oven.',
    nut: [1071, 58, 23, 83, 0, 21, 1240]
  },

  'slow-cooker-stuffed-peppers': {
    d: 'Peppers filled with beef, rice, tomato and cheese, then cooked upright in the slow cooker until tender.',
    meta: 'Slow cooker stuffed peppers: peppers filled with beef, rice, tomato and cheese, then cooked upright in the slow cooker. Four servings, cooked for 240 minutes.',
    kw: ['slow cooker stuffed peppers', 'stuffed peppers in the slow cooker', 'slow cooker beef and rice stuffed peppers', 'stuffed peppers recipe', 'crockpot stuffed peppers'],
    why: 'Short, sharp preparation, long, easy cooking. The peppers are filled raw, with beef, cooked rice, tinned tomatoes, onion and cheese, so the only work is mixing and stuffing. Four hours on high, the peppers soften and sweeten, and the filling cooks in the steam and the juices of the tomato.\n\nChoose peppers that are about the same size and can stand upright. Cut off the tops and scoop out the seeds, trimming the bases slightly if they wobble. Pack the filling firmly but not too tightly, because the rice will swell a little more, and pour a splash of the tomato juice around the bottom of the pot so nothing catches.\n\n**Put the peppers in snugly** so they support one another. They are ready when a knife slides in easily and the beef is cooked through. Scatter extra cheese over the tops for the last 10 minutes with the lid off. A spoonful of the tomato sauce from the base of the pot is the natural dressing.',
    ing: [
      '4 large peppers, about 800 g, tops cut off and seeded',
      '400 g beef mince',
      '200 g cooked long-grain rice',
      '400 g tinned chopped tomatoes',
      '1 onion, finely chopped',
      '2 garlic cloves, crushed',
      '1 tsp dried oregano',
      '1 tsp salt',
      '1/2 tsp ground black pepper',
      '80 g mozzarella, grated'
    ],
    st: [
      'Mix the beef, rice, half the tomatoes, onion, garlic, oregano, salt, pepper and half the cheese in a bowl.',
      'Pour the remaining tomatoes into the slow cooker. Fill the peppers with the mixture and stand them upright in the pot.',
      'Cover and cook on high for 4 hours until the peppers are tender and the beef is cooked through.',
      'Scatter with the remaining cheese, cover for 5 minutes until melted and serve with the tomato sauce.'
    ],
    tips: [
      'Trim the bases so the peppers stand upright.',
      'Use cooked rice; raw rice absorbs too much liquid.',
      'Check the beef reaches the centre of the filling.'
    ],
    pair: ['Green salad', 'Crusty bread', 'Sour cream', 'Steamed broccoli'],
    store: 'Keeps in the fridge for 3 days. Reheat covered.',
    nut: [549, 30, 60, 21, 7, 12, 790]
  },

  'instant-pot-yogurt': {
    d: 'Plain homemade yogurt made from milk and a spoonful of live yogurt, heated and then set in the Instant Pot over eight hours.',
    meta: 'Instant Pot yogurt: plain homemade yogurt made from milk and live yogurt, heated and then set in the pot over eight hours. Eight servings, cooked for 480 minutes.',
    kw: ['instant pot yogurt', 'homemade yogurt in the instant pot', 'instant pot yogurt recipe', 'plain yogurt from milk', 'set yogurt in the instant pot'],
    why: 'It looks like magic and is really a controlled bit of biology. Yogurt is milk that has been warmed to kill unwanted bacteria and then seeded with friendly ones, which turn the milk sugar into lactic acid and thicken it into a tangy, spoonable set. The Instant Pot holds a steady, gentle temperature for the whole eight hours, which does the job.\n\nThere are two stages. First the milk is heated to 82°C, which denatures the proteins and gives a thicker yogurt. Then it is cooled to 43°C, at which point the starter goes in. If the milk is hotter than that, it kills the culture, and if it is cooler, it may not set. Use an instant-read thermometer.\n\n**Whisk the starter into a ladleful of warm milk first**, then stir it into the pot. Do not stir or move the pot during incubation. When the time is up, chill the yogurt for several hours before eating. It will thicken further in the fridge. Save some as the starter for your next batch.',
    ing: [
      '2 litres whole milk',
      '2 tbsp plain live yogurt'
    ],
    st: [
      'Pour the milk into the Instant Pot. Press the Yogurt button until the display reads Boil, and heat the milk to 82°C.',
      'Cool the milk to 43°C by standing the pot in a sink of cold water, stirring occasionally.',
      'Whisk the live yogurt with a ladleful of the warm milk, then stir it back into the pot.',
      'Set the pot to Yogurt mode for 8 hours without moving it. Stir gently and spoon into jars. Chill before eating.'
    ],
    tips: [
      'Use a thermometer for both temperatures.',
      'Use fresh starter that contains live cultures.',
      'Strain through muslin for thick Greek-style yogurt.'
    ],
    pair: ['Honey', 'Fresh fruit', 'Granola', 'Muesli'],
    store: 'Keeps in the fridge for 1 week.',
    nut: [156, 9, 12, 8, 0, 12, 110]
  },

  'instant-pot-egg-bites': {
    d: 'Soft, fluffy egg bites with cheese and bacon, blended smooth and cooked in silicone moulds under pressure in the Instant Pot.',
    meta: 'Instant Pot egg bites: soft, fluffy egg bites with cheese and bacon, blended smooth and cooked in moulds under pressure. Four servings, cooked in 10 minutes.',
    kw: ['instant pot egg bites', 'egg bites recipe', 'pressure cooker egg bites', 'cheese and bacon egg bites', 'soft egg bites in the instant pot'],
    why: 'Blend the eggs for a full 20 seconds. The key to a smooth, custardy bite, with the velvety texture of a soufflé, is to whip in plenty of air and break up every strand of egg white. A blender also incorporates the cottage cheese, which makes the bites creamy and light without any flour or cream.\n\nThe pressure cooker is a gentle device for this. A cup of water in the base and a trivet above it create steam, and the egg mixture, in covered silicone moulds, sets slowly. In 8 minutes at high pressure, followed by a 2 minute natural release, the bites puff up and set without browning or becoming rubbery.\n\n**Cover the moulds with foil** so condensation does not drip into the eggs. Fill them only three-quarters full, since the mixture rises. Take them out with the trivet, let them stand for a few minutes and turn them out with a knife. They are good hot or cold, so make a batch for the week.',
    ing: [
      '6 eggs',
      '100 g cottage cheese',
      '80 g Gruyère or cheddar, grated',
      '60 g cooked bacon, crumbled',
      '2 spring onions, finely sliced',
      '1/4 tsp salt',
      '1/4 tsp ground black pepper',
      '250 ml water, for the pot'
    ],
    st: [
      'Blend the eggs, cottage cheese, salt and pepper for 20 seconds until completely smooth.',
      'Divide the bacon, cheese and spring onions between 7 greased silicone moulds. Pour in the egg mixture to three-quarters full and cover with foil.',
      'Pour the water into the Instant Pot, add the trivet and lower in the moulds. Seal and cook at high pressure for 8 minutes.',
      'Let the pressure release naturally for 2 minutes, then release the rest. Rest for 5 minutes before turning out.'
    ],
    tips: [
      'Grease the moulds well for easy turning out.',
      'Cover the moulds so that no water drips in.',
      'Let them rest before unmoulding.'
    ],
    pair: ['Toast', 'Sliced avocado', 'Fresh fruit', 'Hot coffee'],
    store: 'Keeps in the fridge for 4 days. Reheat for 30 seconds in the microwave.',
    nut: [241, 20, 2, 17, 0, 1, 700]
  },

  'cast-iron-cornbread': {
    d: 'Cornbread baked in a very hot buttered skillet, with a crisp golden crust and a moist, tender crumb.',
    meta: 'Cast iron cornbread: cornbread baked in a very hot buttered skillet, with a crisp golden crust and a tender crumb. Eight servings, cooked for 25 minutes.',
    kw: ['cast iron cornbread', 'skillet cornbread', 'cast iron skillet cornbread recipe', 'crispy crust cornbread', 'buttermilk cornbread in a cast iron pan'],
    why: 'Heat the skillet first. That is the secret, and the part people skip. A cast iron pan that has spent 10 minutes in a hot oven sears the batter on contact, and the result is a thick, crisp, deep golden crust on the bottom and sides that you cannot get from a cold tin.\n\nThe batter is plain: cornmeal, a little flour for structure, baking powder, buttermilk, eggs and melted butter. There is little sugar, in the Southern way, so the cornbread tastes savoury and suits chilli, greens and beans. Mix it only until combined, as lumps are fine and overmixing makes it tough.\n\n**Add the butter to the hot pan** and swirl it to coat the sides. It will sizzle and foam. Pour the batter in at once; it should sizzle again at the edges. Bake until the top is golden and a skewer comes out clean. Turn out onto a board and slice into wedges, while the crust is still at its crispest.',
    ing: [
      '180 g fine cornmeal',
      '100 g plain flour',
      '1 tbsp baking powder',
      '1 tbsp caster sugar',
      '1/2 tsp salt',
      '300 ml buttermilk',
      '2 eggs',
      '60 g butter, melted, plus 20 g for the pan'
    ],
    st: [
      'Heat the oven to 220°C and put a 25 cm cast iron skillet inside for 10 minutes.',
      'Mix the cornmeal, flour, baking powder, sugar and salt. Whisk the buttermilk, eggs and 60 g melted butter and stir into the dry mixture until just combined.',
      'Carefully remove the hot skillet, add the 20 g butter and swirl to coat. Pour in the batter.',
      'Bake for 25 minutes until golden and a skewer comes out clean. Turn out and cut into wedges.'
    ],
    tips: [
      'Wear oven gloves; the skillet handle is very hot.',
      'Do not overmix the batter.',
      'Serve while the crust is still crisp.'
    ],
    pair: ['Chilli', 'Collard greens', 'Butter and honey', 'Beans'],
    store: 'Best on the day. Keeps in an airtight container for 2 days.',
    nut: [229, 6, 31, 9, 2, 4, 400]
  },

  'cast-iron-pizza': {
    d: 'A thick-edged skillet pizza made with a quick yogurt dough, crisped on the hob and finished in a hot oven.',
    meta: 'Cast iron pizza: a thick-edged skillet pizza made with a quick yogurt dough, crisped on the hob and finished in a hot oven. Four servings, cooked in 20 minutes.',
    kw: ['cast iron pizza', 'skillet pizza', 'cast iron skillet pizza recipe', 'yogurt dough pizza', 'pizza in a cast iron pan'],
    why: 'It looks like a deep-dish pizza and cooks like a flatbread, and it needs no proving. The dough here is flour, baking powder, salt and yogurt, which mixes in two minutes and rolls out at once. It is nothing like a yeast dough, but the pan does a lot of the work, giving a crisp, golden base and a chewy edge.\n\nThe skillet goes on the hob first. A thin film of oil, a round of dough pressed in with a rim, and a few minutes of direct heat set and brown the base before any topping goes on. Then the sauce, the mozzarella and the pepperoni go on, and the pan moves to a hot oven for the cheese to melt and the edge to puff.\n\n**Keep the sauce thin and the cheese plentiful.** Too much sauce makes the centre soggy. Take the pizza out when the cheese is bubbling and the rim is dark gold, loosen the edges with a spatula and slide it onto a board. Slice and serve at once, with chilli flakes for those who want heat.',
    ing: [
      '300 g plain flour',
      '2 tsp baking powder',
      '1/2 tsp salt',
      '250 g plain Greek yogurt',
      '1 tbsp olive oil',
      '120 g tomato pizza sauce',
      '200 g mozzarella, grated',
      '60 g sliced pepperoni',
      '1 tsp dried oregano'
    ],
    st: [
      'Heat the oven to 230°C. Mix the flour, baking powder and salt. Stir in the yogurt and knead for 2 minutes into a smooth dough.',
      'Roll the dough into a 25 cm round slightly larger than the pan. Heat the oil in a 25 cm cast iron skillet over medium-high heat.',
      'Press the dough into the skillet, pushing up the sides to form a rim. Cook for 5 minutes until the base is golden.',
      'Spread with the sauce, scatter with the mozzarella, pepperoni and oregano, and bake for 12 minutes until the cheese is bubbling and the rim is golden.'
    ],
    tips: [
      'Use thick Greek yogurt for a dough that holds together.',
      'Keep the sauce thin so the base stays crisp.',
      'Loosen the pizza from the pan with a spatula before sliding it out.'
    ],
    pair: ['Green salad', 'Garlic bread', 'Chilli flakes', 'Cold lager'],
    store: 'Best eaten straight away. Leftover slices keep in the fridge for 2 days.',
    nut: [575, 29, 63, 23, 3, 4, 1130]
  },

  'cast-iron-steak': {
    d: 'Two thick steaks seared in a smoking-hot cast iron pan and basted with butter, garlic and thyme.',
    meta: 'Cast iron steak: two thick steaks seared in a smoking-hot cast iron pan and basted with butter, garlic and thyme. Two servings, cooked in 10 minutes.',
    kw: ['cast iron steak', 'cast iron skillet steak', 'pan seared steak with garlic butter', 'butter basted steak', 'cast iron steak recipe'],
    why: 'Steak, salt, a hot pan and butter: four things you already own, and about ten minutes. A cast iron skillet holds an enormous amount of heat, and a steak that goes into one browns hard and fast, forming the dark crust that gives the dish its flavour while the middle stays rosy.\n\nTake the steaks out of the fridge 30 minutes before cooking and pat them very dry, since a wet surface steams instead of searing. Salt generously. Get the pan smoking hot over high heat with a thin film of oil, and lay the steaks away from you so the splatter goes the other way.\n\n**Turn the steaks only once**, after 3 minutes. Add the butter, garlic and thyme to the pan and tilt it, spooning the foaming butter over the meat for the last 2 minutes. Rest the steaks on a board for 5 minutes before slicing, so the juices stay in the meat. Spoon the pan butter over the top.',
    ing: [
      '2 sirloin or ribeye steaks, about 300 g each',
      '1 tsp coarse salt',
      '1/2 tsp ground black pepper',
      '1 tbsp vegetable oil',
      '30 g butter',
      '2 garlic cloves, lightly crushed',
      '3 sprigs fresh thyme'
    ],
    st: [
      'Pat the steaks dry and season both sides with the salt and pepper.',
      'Heat a cast iron skillet over high heat for 5 minutes until smoking. Add the oil.',
      'Cook the steaks for 3 minutes without moving them. Turn and cook for 2 minutes more.',
      'Add the butter, garlic and thyme and spoon the foaming butter over the steaks for 2 minutes. Rest for 5 minutes before slicing.'
    ],
    tips: [
      'Dry the steaks thoroughly for a good crust.',
      'Open a window; searing makes smoke.',
      'Cook for 1 minute longer on each side for a well-done steak.'
    ],
    pair: ['Chips', 'Green salad', 'Roast tomatoes', 'Red wine'],
    store: 'Best eaten straight away.',
    nut: [643, 63, 1, 43, 0, 0, 1350]
  },

  'cast-iron-skillet-cookie': {
    d: 'One giant chocolate chip cookie baked in a cast iron skillet, golden at the edge and soft and gooey in the middle.',
    meta: 'Cast iron skillet cookie: one giant chocolate chip cookie baked in a cast iron skillet, golden at the edge and gooey in the middle. Eight servings, cooked for 20 minutes.',
    kw: ['cast iron skillet cookie', 'skillet cookie', 'giant chocolate chip skillet cookie', 'cast iron chocolate chip cookie', 'pizookie recipe'],
    why: 'Butter, sugar, chocolate, flour: four things you need, and one pan. A skillet cookie is a chocolate chip cookie dough pressed into a hot cast iron pan and baked as one big round, with a crisp, browned rim and a centre that stays soft. It is a dessert to share, with spoons and a scoop of ice cream.\n\nThe dough is made in one bowl with melted butter, so there is no creaming and no waiting for butter to soften. Brown sugar gives it chew, caster sugar crisp edges, and an extra egg yolk adds richness. Chop a good bar of dark chocolate and mix it with the chips, as the chunks melt into pools.\n\n**Underbake it slightly.** Take it out when the edge is golden and the middle looks barely set, as it carries on cooking in the hot pan. Let it stand for 5 minutes, then top with a scoop of vanilla ice cream, which melts into the warm cookie. Eat it straight from the skillet, with spoons.',
    ing: [
      '115 g butter, melted and cooled',
      '150 g dark brown sugar',
      '50 g caster sugar',
      '1 egg, plus 1 egg yolk',
      '2 tsp vanilla extract',
      '200 g plain flour',
      '1/2 tsp bicarbonate of soda',
      '1/2 tsp salt',
      '200 g dark chocolate chips'
    ],
    st: [
      'Heat the oven to 180°C. Grease a 20 cm cast iron skillet.',
      'Whisk the melted butter, both sugars, the egg, egg yolk and vanilla until smooth.',
      'Stir in the flour, bicarbonate of soda and salt, then fold in the chocolate chips. Press the dough into the skillet.',
      'Bake for 20 minutes until the edge is golden and the centre is just set. Stand for 5 minutes before serving.'
    ],
    tips: [
      'Cool the melted butter so it does not melt the chocolate.',
      'Underbake slightly for a gooey middle.',
      'Serve warm with vanilla ice cream.'
    ],
    pair: ['Vanilla ice cream', 'Whipped cream', 'Cold milk', 'Salted caramel sauce'],
    store: 'Best eaten warm. Keeps covered for 2 days and reheats in a low oven.',
    nut: [445, 5, 59, 21, 3, 37, 240]
  },

  'dutch-oven-chicken': {
    d: 'A whole chicken roasted in a covered Dutch oven on a bed of onions, carrots and potatoes, with crisp skin and plenty of juices.',
    meta: 'Dutch oven chicken: a whole chicken roasted in a covered pot on a bed of onions, carrots and potatoes. Four servings, cooked for 75 minutes.',
    kw: ['dutch oven chicken', 'dutch oven roast chicken', 'dutch oven chicken recipe', 'whole chicken with vegetables in a dutch oven', 'roast chicken with root vegetables'],
    why: 'Most roast chickens end up either dry or pale, and the Dutch oven fixes both. The heavy lid traps steam in the first part of cooking, which keeps the meat moist, and then coming off for the last part lets the skin dry out and brown. One pot, two stages, and almost no attention.\n\nThe chicken sits on a bed of vegetables, which lift it off the base and catch the juices: onions, carrots, potatoes and a halved head of garlic. As the chicken roasts, the fat and juices drip down and flavour the vegetables beneath, so they come out rich and soft. Rub the skin with butter and salt for flavour and colour.\n\n**Cook it covered for 50 minutes, then uncovered for 25.** The chicken is done when the juices run clear from the thickest part of the thigh and a thermometer reads 74°C. Rest it for 10 minutes before carving, with the pot juices spooned over the meat and vegetables.',
    ing: [
      '1.6 kg whole chicken',
      '40 g butter, softened',
      '1 tsp salt',
      '1/2 tsp ground black pepper',
      '2 onions, quartered',
      '300 g carrots, cut into chunks',
      '500 g potatoes, halved',
      '1 head of garlic, halved crossways',
      '4 sprigs fresh thyme',
      '1 lemon, halved',
      '200 ml chicken stock'
    ],
    st: [
      'Heat the oven to 200°C. Rub the chicken with the butter, salt and pepper and put the thyme and lemon in the cavity.',
      'Put the onions, carrots, potatoes and garlic in a 5 litre Dutch oven and pour in the stock. Set the chicken on top, breast side up.',
      'Cover and roast for 50 minutes.',
      'Remove the lid and roast for 25 minutes more until the skin is deep golden. Rest for 10 minutes before carving.'
    ],
    tips: [
      'Pat the chicken dry so that the skin crisps.',
      'Check the temperature in the thickest part of the thigh.',
      'Use the juices at the bottom of the pot as gravy.'
    ],
    pair: ['Green beans', 'Crusty bread', 'Cranberry sauce', 'Gravy'],
    store: 'Keeps in the fridge for 3 days. Reheat covered.',
    nut: [1017, 81, 36, 61, 6, 7, 1100]
  },

  'pull-apart-cheese-bread': {
    d: 'A round loaf cut into a grid and stuffed with garlic butter and mozzarella, baked until the cheese melts into every gap.',
    meta: 'Pull-apart cheese bread: a round loaf cut into a grid and stuffed with garlic butter and mozzarella, baked until melted. Eight servings, cooked for 30 minutes.',
    kw: ['pull-apart cheese bread', 'pull apart garlic cheese bread', 'cheesy pull apart bread', 'stuffed cheese bread loaf', 'cheese and garlic butter bread'],
    why: 'It is a loaf of bread that is meant to be torn apart with the fingers. A round sourdough or country loaf is cut into a diamond grid, almost to the base but not through it, then stuffed with cheese and brushed with garlic butter. In the oven the cheese melts into the cuts and the edges crisp.\n\nThe cuts are the key. Use a long serrated knife and slice at 2 cm intervals in one direction, then turn the loaf and slice across, so the loaf is divided into squares that still hold together at the base. Open the cuts gently with your fingers and push the cheese in as far as it will go.\n\n**Wrap the loaf in foil for the first 20 minutes**, so the steam softens the crumb and the cheese melts, then open the foil for the last 10 minutes to crisp the top. Garlic butter is made from softened butter, crushed garlic, parsley and a little salt. Serve the loaf hot, in the centre of the table, for people to pull apart.',
    ing: [
      '400 g round white loaf',
      '200 g mozzarella, grated',
      '60 g butter, melted',
      '3 garlic cloves, crushed',
      '2 tbsp chopped fresh parsley',
      '30 g Parmesan, finely grated',
      '1/4 tsp salt'
    ],
    st: [
      'Heat the oven to 190°C. Cut the loaf into a 2 cm grid, slicing almost to the base without cutting through.',
      'Mix the melted butter, garlic, parsley and salt. Brush it into the cuts and over the loaf.',
      'Push the mozzarella and Parmesan into the cuts. Wrap the loaf in foil and put it on a baking tray.',
      'Bake for 20 minutes. Open the foil and bake for 10 minutes more until golden and bubbling. Serve hot.'
    ],
    tips: [
      'Use a serrated knife for clean cuts.',
      'Do not cut through the base, or the loaf falls apart.',
      'Serve straight away, while the cheese is stretchy.'
    ],
    pair: ['Tomato soup', 'Pasta', 'Green salad', 'Dipping sauce'],
    store: 'Best eaten hot. Keeps for 1 day and reheats in a hot oven.',
    nut: [274, 12, 25, 14, 1, 3, 530]
  },

  'cheese-twists': {
    d: 'Strips of puff pastry spread with mustard, topped with cheddar and Parmesan, twisted and baked until golden and crisp.',
    meta: 'Cheese twists: strips of puff pastry spread with mustard, topped with cheddar and Parmesan, twisted and baked until crisp. Twelve servings, cooked in 15 minutes.',
    kw: ['cheese twists', 'puff pastry cheese twists', 'cheese straws recipe', 'cheddar and parmesan twists', 'cheese twists for parties'],
    why: 'Most home versions unwind in the oven, and the fix is to press the ends down onto the tray. Cheese twists are strips of puff pastry spun into corkscrews, and the pastry has a natural tendency to spring back as it bakes. Pinching each end firmly against the baking paper stops it, and the twist stays tight.\n\nThe filling is simple: a thin spread of mustard on the pastry, then plenty of grated cheddar and Parmesan, a pinch of paprika and a grind of pepper. Fold the pastry over to enclose the cheese, press it down with a rolling pin so that the layers seal, and cut into strips about 1.5 cm wide.\n\n**Twist each strip two or three times** and lay it on the tray with a small gap between. Brush with beaten egg to give a shiny, golden crust. Bake until puffed and deep gold, and cool for a few minutes on a rack. They are good served warm or cold, and they keep for a day or two in a tin.',
    ing: [
      '320 g ready-rolled puff pastry sheet',
      '1 tsp Dijon mustard',
      '100 g mature cheddar, grated',
      '30 g Parmesan, finely grated',
      '1/2 tsp smoked paprika',
      '1/4 tsp ground black pepper',
      '1 egg, beaten'
    ],
    st: [
      'Heat the oven to 200°C and line a baking tray with baking paper. Unroll the pastry and spread half with the mustard.',
      'Scatter with the cheddar, Parmesan, paprika and pepper. Fold the plain half over the cheese and roll lightly to seal.',
      'Cut into 12 strips and twist each two or three times. Lay on the tray and press the ends down.',
      'Brush with the egg and bake for 15 minutes until puffed and deep golden. Cool on a rack for 5 minutes.'
    ],
    tips: [
      'Press the ends firmly onto the tray.',
      'Use well-chilled pastry; it is easier to handle.',
      'Brush the egg on carefully so it does not drip down the cut edges.'
    ],
    pair: ['Soup', 'Sparkling wine', 'Dips', 'Salad'],
    store: 'Best eaten on the day. Keeps in an airtight tin for 2 days and crisps up in a warm oven.',
    nut: [159, 5, 10, 11, 1, 1, 260]
  }
};
