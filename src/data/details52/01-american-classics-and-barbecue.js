'use strict';

/**
 * Volume fifty-two — American regional classics, barbecue, bakes and
 * everyday cooking, first part.
 *
 * Twenty-five dishes: apple pandowdy, sourdough discard crackers, three
 * sauces and rubs (barbecue rub, comeback sauce, fry sauce), salads and
 * sandwiches, honey garlic wings, chicken scampi, broccoli cheddar chicken,
 * Tex-Mex migas, Texas beef ribs and toast, the regional barbecue sauces and
 * ribs of Kansas City, Memphis, Carolina, Alabama and St Louis, New York
 * pizza, the New England boiled dinner, Maine lobster stew and Vermont maple
 * cream pie. Waits of an hour or more are declared as rest. Nutrition is
 * estimated by npm run calc.
 */

module.exports = {
  'apple-pandowdy': {
    d: 'Spiced apples under a pastry lid that is cut and pressed into the juices halfway through baking, so the crust is part crisp and part soaked.',
    meta: 'Apple pandowdy: spiced apples under a pastry lid that is cut and pressed into the juices halfway through baking. Eight servings, cooked for 45 minutes.',
    kw: ['apple pandowdy', 'pandowdy recipe', 'new england apple pandowdy', 'apple pandowdy with maple', 'apple dessert with broken crust'],
    why: 'Why is the crust of a pandowdy broken halfway through baking? The cook "dowdies" it, which means cutting the lid into pieces and pressing them down into the bubbling fruit, so that the pastry soaks up the apple juices and the maple syrup. What was a lid becomes a layer of soft, buttery dumplings in the syrup, with a few crisp tops still sticking out.\n\nThe filling is sliced firm apples tossed with brown sugar, maple syrup, cinnamon, nutmeg and lemon juice, thickened with a spoonful of cornflour. Choose apples that keep their shape when cooked, such as Granny Smith or Braeburn, and cut them thickly, so they do not turn to purée.\n\n**Cut and press the crust once it is golden**, around 25 minutes into baking. Then return the dish to the oven to brown the new surfaces. Serve warm, with cream or vanilla ice cream, which pools into the gaps. It looks rustic, and that is the point.',
    ing: [
      '1.2 kg firm apples, peeled, cored and sliced 1 cm thick',
      '100 g dark brown sugar',
      '60 ml maple syrup',
      '2 tbsp lemon juice',
      '1 tbsp cornflour',
      '1 tsp ground cinnamon',
      '1/4 tsp ground nutmeg',
      '30 g butter, cut into small pieces',
      '320 g ready-made shortcrust pastry',
      '1 egg, beaten'
    ],
    st: [
      'Heat the oven to 190°C. Toss the apples with the sugar, maple syrup, lemon juice, cornflour, cinnamon and nutmeg in a large bowl.',
      'Tip into a 23 cm baking dish and dot with the butter. Roll the pastry to fit, lay it over the apples, trim the edge and brush with egg.',
      'Bake for 25 minutes until the pastry is golden.',
      'Cut the pastry into squares with a knife and press them down into the juices with a spoon. Bake for 20 minutes more until the fruit is bubbling. Serve warm.'
    ],
    tips: [
      'Choose apples that hold their shape when cooked.',
      'If the edges brown too quickly, cover them loosely with foil.',
      'Let the dish stand for 10 minutes before serving so the juices thicken.'
    ],
    pair: ['Vanilla ice cream', 'Double cream', 'Custard', 'Strong coffee'],
    store: 'Keeps in the fridge for 3 days. Reheat in a moderate oven.',
    nut: [387, 4, 59, 15, 5, 34, 250]
  },

  'sourdough-discard-crackers': {
    d: 'Thin, crisp crackers made from sourdough discard, olive oil and rosemary, rolled out and baked until golden.',
    meta: 'Sourdough discard crackers: thin, crisp crackers made from sourdough discard, olive oil and rosemary. Six servings, cooked for 20 minutes.',
    kw: ['sourdough discard crackers', 'sourdough cracker recipe', 'crackers from sourdough discard', 'rosemary sourdough crackers', 'crisp sourdough crackers'],
    why: 'What do you do with sourdough discard besides throw it away? Make crackers. Every time a starter is fed, some of it has to be taken out, and that discard is perfectly good dough that has simply lost its lifting power. It brings tang and a deep, toasty flavour to crackers that plain flour cannot match.\n\nThe dough is a few spoonfuls of discard, flour, oil, salt and chopped rosemary, brought together and rolled very thin. Thin is the whole secret. Roll the dough until you can nearly see the work surface through it, and the crackers will snap. Thick patches stay chewy.\n\nPrick the sheet all over with a fork so it does not puff. **Bake until the edges are golden brown** and let the crackers cool on the tray; they crisp more as they cool. Break into rough pieces and serve with cheese, dips or soup. If any soften, a few minutes in a warm oven brings them back.',
    ing: [
      '120 g sourdough discard',
      '100 g plain flour',
      '2 tbsp olive oil',
      '1/2 tsp salt',
      '1 tbsp chopped fresh rosemary',
      '1/2 tsp flaky sea salt'
    ],
    st: [
      'Heat the oven to 180°C and line a large baking tray with baking paper.',
      'Mix the discard, flour, oil, salt and rosemary into a firm dough, adding a teaspoon of water if it is dry. Knead for 1 minute.',
      'Roll the dough out directly on the baking paper as thinly as you can, to about 2 mm. Prick all over with a fork and sprinkle with the flaky salt.',
      'Bake for 18 minutes until golden at the edges and crisp. Cool on the tray, then break into pieces.'
    ],
    tips: [
      'Roll the dough as thin as possible for a good snap.',
      'If the centre is soft when the edges brown, break off the crisp pieces and bake the rest longer.',
      'Use discard of any age; older discard gives a tangier cracker.'
    ],
    pair: ['Hard cheese', 'Hummus', 'Soup', 'Cured meats'],
    store: 'Keeps in an airtight tin for 1 week.',
    nut: [145, 3, 22, 5, 1, 1, 490]
  },

  'barbecue-rub': {
    d: 'An all-purpose dry rub of brown sugar, smoked paprika, garlic, onion, mustard and pepper for ribs, pork, chicken and beef.',
    meta: 'Barbecue rub: an all-purpose dry rub of brown sugar, smoked paprika, garlic, onion, mustard and pepper for ribs, pork and chicken. Twelve servings, no cooking.',
    kw: ['barbecue rub', 'bbq dry rub', 'all purpose barbecue rub', 'dry rub for ribs and chicken', 'homemade barbecue rub'],
    why: 'It smells of smoke and brown sugar the moment the jar is opened. A dry rub is the base of most barbecue in the United States, and this one is built around the usual balance: sugar for caramelisation, salt for seasoning, paprika for colour and pepper for heat.\n\nBrown sugar browns and sticks to the surface of the meat, which is how a good crust, or bark, forms in a slow oven or smoker. Smoked paprika adds depth that makes the meat taste as though it spent hours over wood. Garlic and onion powders round out the base, and mustard powder and cayenne give a sharper edge at the back.\n\n**Rub it in about 30 minutes before cooking** or leave it overnight. Use roughly 1 tablespoon per 500 g of meat, and press it on firmly with your hands. Make a double batch and store it; the flavour holds for months, and it is just as good on roasted vegetables as on ribs.',
    ing: [
      '50 g dark brown sugar',
      '20 g smoked paprika',
      '30 g fine salt',
      '10 g ground black pepper',
      '10 g garlic powder',
      '10 g onion powder',
      '5 g mustard powder',
      '3 g cayenne pepper'
    ],
    st: [
      'Put the sugar, paprika, salt, pepper, garlic powder, onion powder, mustard powder and cayenne in a bowl.',
      'Mix thoroughly, breaking up any lumps of sugar with the back of a spoon.',
      'Store in a clean, dry jar with a tight lid.'
    ],
    tips: [
      'Press the rub firmly into the meat so it sticks.',
      'Lower the salt to 20 g if you plan to brine the meat first.',
      'Shake the jar before each use, as the heavier spices settle.'
    ],
    pair: ['Pork ribs', 'Pulled pork', 'Roast chicken', 'Beef brisket'],
    store: 'Keeps in an airtight jar in a cool, dark cupboard for 6 months.',
    nut: [32, 1, 7, 0, 1, 4, 990]
  },

  'comeback-sauce': {
    d: 'A tangy Mississippi dipping sauce of mayonnaise, chilli sauce, garlic, Worcestershire and hot sauce, good with fries, salads and fried fish.',
    meta: 'Comeback sauce: a tangy Mississippi dipping sauce of mayonnaise, chilli sauce, garlic, Worcestershire and hot sauce. Eight servings, no cooking.',
    kw: ['comeback sauce', 'mississippi comeback sauce', 'comeback sauce recipe', 'southern dipping sauce', 'comeback sauce for fries'],
    why: 'This is what to put on the table when people come back for seconds, which is where the name is said to come from. Comeback sauce is a creamy, savoury and mildly spicy sauce from the South, closely related to Thousand Island dressing but sharper and with more heat.\n\nThe base is mayonnaise, loosened with a little chilli sauce and ketchup for sweetness and colour. Worcestershire adds depth, hot sauce brings a steady burn, and grated onion and garlic give it body and bite. A squeeze of lemon lifts the whole thing. There is no cooking, so everything depends on how fresh the ingredients are.\n\n**Grate the onion on the fine side of the grater** so it melts into the sauce, and chill it for at least 30 minutes before serving, so the flavours blend and the garlic mellows. Use it as a dip for fried pickles, fries and chicken, or spread it on a burger or a sandwich.',
    ing: [
      '200 g mayonnaise',
      '60 g chilli sauce',
      '1 tbsp ketchup',
      '2 tsp Worcestershire sauce',
      '1 tsp hot pepper sauce',
      '2 garlic cloves, crushed',
      '1 tbsp grated onion',
      '1 tbsp lemon juice',
      '1/2 tsp ground black pepper',
      '1/2 tsp paprika'
    ],
    st: [
      'Put the mayonnaise, chilli sauce, ketchup, Worcestershire sauce and hot sauce in a bowl.',
      'Stir in the garlic, onion, lemon juice, pepper and paprika until smooth.',
      'Taste and add more hot sauce if you want. Cover and chill for 30 minutes before serving.'
    ],
    tips: [
      'Grate the onion finely so it blends in.',
      'Add the hot sauce a little at a time and taste as you go.',
      'Thin with a teaspoon of water if you want a pourable sauce.'
    ],
    pair: ['Fried pickles', 'French fries', 'Fried chicken', 'Green salad'],
    store: 'Keeps in a covered jar in the fridge for 1 week.',
    nut: [187, 1, 3, 19, 0, 1, 180]
  },

  'fry-sauce': {
    d: 'A pink Utah dipping sauce of mayonnaise and ketchup with a little pickle brine and paprika, made for fries and burgers.',
    meta: 'Fry sauce: a pink Utah dipping sauce of mayonnaise and ketchup with a little pickle brine and paprika, made for fries. Eight servings, no cooking.',
    kw: ['fry sauce', 'utah fry sauce', 'fry sauce recipe', 'mayonnaise and ketchup sauce', 'dipping sauce for french fries'],
    why: 'Fry sauce sits somewhere between mayonnaise and ketchup, and it is closer to the fast-food chip shop than to anything on a restaurant menu. It is the pink dip served with fries and burgers in Utah, and the idea could hardly be simpler: two spoonfuls of mayonnaise for every one of ketchup.\n\nThe small additions are what make it taste complete. A teaspoon of pickle brine adds acidity, which cuts through the richness of the mayonnaise. Smoked paprika gives a faint smokiness, and a pinch of garlic powder brings a savoury edge. Without them, the sauce tastes flat and sweet.\n\n**Stir, taste, then adjust the ratio.** Some people like more ketchup for sweetness and others more mayonnaise for body. Chill it for a few minutes to let the flavours settle, and serve it in a small bowl with hot fries, onion rings or a burger. It is also good on a hot dog or in a sandwich.',
    ing: [
      '200 g mayonnaise',
      '100 g ketchup',
      '1 tbsp pickle brine',
      '1/2 tsp smoked paprika',
      '1/2 tsp garlic powder',
      '1/4 tsp ground black pepper'
    ],
    st: [
      'Put the mayonnaise and ketchup in a bowl and stir until evenly pink.',
      'Stir in the pickle brine, paprika, garlic powder and pepper.',
      'Taste and adjust, then cover and chill for 10 minutes before serving.'
    ],
    tips: [
      'Use a good quality mayonnaise; the sauce is only as good as its base.',
      'Add more pickle brine for a sharper sauce.',
      'Stir again before serving, as it can separate slightly on standing.'
    ],
    pair: ['French fries', 'Onion rings', 'Burgers', 'Chicken tenders'],
    store: 'Keeps in a covered jar in the fridge for 1 week.',
    nut: [191, 0, 5, 19, 0, 4, 280]
  },

  'kale-salad-with-lemon': {
    d: 'Raw kale massaged with lemon juice and olive oil until tender, tossed with Parmesan, pine nuts and a little garlic.',
    meta: 'Kale salad with lemon: raw kale massaged with lemon juice and olive oil until tender, tossed with Parmesan and pine nuts. Four servings, no cooking.',
    kw: ['kale salad with lemon', 'lemon kale salad', 'massaged kale salad', 'raw kale salad with parmesan', 'kale salad recipe'],
    why: 'Kale is a tough leaf, and the way to deal with it is to use your hands. Rubbing the chopped leaves with lemon juice and oil for two or three minutes breaks down the fibres, so the kale softens, darkens and loses its raw, bitter edge. The change is plain to see: the leaves shrink and turn glossy.\n\nOnce massaged, the kale takes a dressing well and does not wilt on standing, which makes it a good salad for a packed lunch or a table that waits. Lemon provides the acid, olive oil the body, and a little garlic the punch. Parmesan adds salty depth, and pine nuts give a soft crunch.\n\n**Strip the leaves from the thick stalks**, which are too fibrous to eat raw, and cut the leaves into thin ribbons. Season with salt and a pinch of chilli flakes. Leave the salad for 10 minutes before serving; the kale keeps improving as it sits. Add the nuts at the last moment so they stay crisp.',
    ing: [
      '200 g curly kale, stalks removed',
      '3 tbsp lemon juice',
      '3 tbsp olive oil',
      '1 garlic clove, crushed',
      '40 g Parmesan, finely grated',
      '30 g pine nuts',
      '1/2 tsp salt',
      '1/4 tsp crushed chilli flakes'
    ],
    st: [
      'Cut the kale leaves into thin ribbons and put them in a large bowl.',
      'Add the lemon juice, oil, garlic and salt. Massage the leaves with your hands for 3 minutes until darker and tender.',
      'Leave to stand for 10 minutes. Toss with the Parmesan and chilli flakes.',
      'Scatter with the pine nuts and serve.'
    ],
    tips: [
      'Massage for the full time; short-changing it leaves the kale tough.',
      'Taste for salt before adding the cheese, which is itself salty.',
      'Use cavolo nero for a darker, slightly sweeter salad.'
    ],
    pair: ['Grilled chicken', 'Roast salmon', 'Soup', 'Crusty bread'],
    store: 'Keeps in the fridge for 2 days, and holds its texture better than lettuce.',
    nut: [227, 7, 7, 19, 2, 2, 460]
  },

  'cranberry-pecan-salad': {
    d: 'Mixed salad leaves with dried cranberries, pecans, goat cheese and apple in a maple balsamic dressing.',
    meta: 'Cranberry pecan salad: mixed leaves with dried cranberries, pecans, goat cheese and apple in a maple balsamic dressing. Four servings, no cooking.',
    kw: ['cranberry pecan salad', 'cranberry pecan salad with goat cheese', 'maple balsamic salad', 'salad with dried cranberries and pecans', 'cranberry pecan salad recipe'],
    why: 'Dress the salad at the last moment. A salad of delicate leaves, with soft cheese and nuts, loses its crunch within minutes of meeting an acid, so keep the dressing in a jar and toss it through only when everyone is at the table.\n\nThe pieces are chosen for contrast: sweet dried cranberries against peppery leaves, creamy goat cheese against crisp apple, rich pecans against sharp balsamic vinegar. A spoonful of maple syrup in the dressing links the sweet and sharp notes together, and Dijon mustard helps the oil and vinegar emulsify so the dressing coats the leaves.\n\n**Slice the apple at the end** and toss it with a little of the dressing, since the lemon in it stops browning. Crumble the cheese over the top rather than mixing it in, so it keeps its shape. Serve as a starter, a light lunch or beside roast chicken or pork. Serve it as a starter before a roast, or with soup for a light lunch.',
    ing: [
      '150 g mixed salad leaves',
      '60 g dried cranberries',
      '60 g pecan halves',
      '80 g goat cheese, crumbled',
      '1 apple, about 150 g, cored and thinly sliced',
      '3 tbsp olive oil',
      '2 tbsp balsamic vinegar',
      '1 tbsp maple syrup',
      '1 tsp Dijon mustard',
      '1/4 tsp salt'
    ],
    st: [
      'Whisk the oil, balsamic vinegar, maple syrup, mustard and salt in a small bowl, or shake them in a jar.',
      'Put the leaves in a large bowl and scatter over the cranberries, pecans and apple.',
      'Pour over the dressing and toss gently. Crumble the goat cheese on top and serve at once.'
    ],
    tips: [
      'Wash and dry the leaves well; wet leaves dilute the dressing.',
      'Use goat cheese straight from the fridge for neat crumbs.',
      'Break the pecans in half if they are large.'
    ],
    pair: ['Roast chicken', 'Pork tenderloin', 'Crusty bread', 'Soup'],
    store: 'Best eaten straight away. The dressing keeps in a jar in the fridge for 5 days.',
    nut: [380, 6, 26, 28, 4, 20, 300]
  },

  'apple-cabbage-slaw': {
    d: 'A crisp slaw of shredded cabbage, apple and carrot in a light yoghurt and cider vinegar dressing with a touch of honey.',
    meta: 'Apple cabbage slaw: a crisp slaw of shredded cabbage, apple and carrot in a light yoghurt and cider vinegar dressing. Six servings, no cooking.',
    kw: ['apple cabbage slaw', 'apple slaw', 'cabbage and apple coleslaw', 'apple coleslaw with yoghurt', 'crunchy apple cabbage slaw recipe'],
    why: 'Most home slaw ends up watery by the time you get to the table, and the fix is to salt the cabbage first. Tossed with a pinch of salt and left to stand for 20 minutes, shredded cabbage gives up much of its water, which you then squeeze out. The cabbage stays crisp and the dressing stays creamy.\n\nApple brings sweetness and juice, so choose a tart variety that holds its crunch, such as Granny Smith. Carrot adds colour and a gentle sweetness of its own. Cut everything in matchsticks or shreds of the same size, so every forkful has a bit of each.\n\nThe dressing is half mayonnaise, half yoghurt, with cider vinegar, honey and a little mustard. **Toss it through just before serving** if you can, and add the apple last to stop it browning. The slaw is the right partner for pulled pork, burgers and fried fish, where its sharp crunch cuts the richness.',
    ing: [
      '400 g white cabbage, finely shredded',
      '2 apples, about 300 g, cut into matchsticks',
      '1 carrot, about 100 g, grated',
      '40 g red onion, thinly sliced',
      '1/2 tsp salt',
      '80 g mayonnaise',
      '80 g plain yoghurt',
      '2 tbsp cider vinegar',
      '1 tbsp honey',
      '1 tsp Dijon mustard',
      '1/2 tsp celery seeds'
    ],
    st: [
      'Toss the cabbage with the salt and leave in a colander for 20 minutes. Squeeze out the water with your hands.',
      'Whisk the mayonnaise, yoghurt, vinegar, honey, mustard and celery seeds in a large bowl.',
      'Add the cabbage, apples, carrot and onion and toss until coated. Serve cold.'
    ],
    tips: [
      'Squeeze the cabbage firmly; the drier it is, the creamier the slaw.',
      'Add the apple last to stop it browning.',
      'Taste before serving and add salt or more vinegar as needed.'
    ],
    pair: ['Pulled pork', 'Burgers', 'Fried fish', 'Grilled sausages'],
    store: 'Keeps in the fridge for 2 days, though it softens.',
    nut: [179, 3, 17, 11, 3, 12, 320]
  },

  'chicken-salad-sandwich-with-cranberries': {
    d: 'Shredded cooked chicken with celery, dried cranberries and pecans in a creamy dressing, piled between slices of bread with lettuce.',
    meta: 'Chicken salad sandwich with cranberries: shredded chicken with celery, cranberries and pecans in a creamy dressing. Four servings, no cooking.',
    kw: ['chicken salad sandwich with cranberries', 'cranberry chicken salad sandwich', 'chicken salad sandwich recipe', 'chicken salad with pecans', 'cranberry pecan chicken salad'],
    why: 'A sandwich for a picnic, a baby shower or a packed lunch, and it feeds four with little effort. Chicken salad is a standard American way to use cooked chicken, and the addition of sweet dried cranberries and crunchy pecans lifts it above the plain version.\n\nShred the chicken with two forks instead of dicing it. Ragged shreds hold the dressing better and give a more tender bite. The dressing is half mayonnaise, half Greek yoghurt, lightened with lemon juice, which keeps the salad creamy without feeling heavy. Celery and spring onion give crunch and a mild freshness.\n\n**Chill the mixture for 30 minutes** before assembling the sandwiches, so the flavours settle. Pile it onto the bread with a leaf of lettuce, which acts as a barrier and keeps the bread from going soggy. Cut the sandwiches in half and serve with crisps or a pickle. Cut the sandwiches into triangles for a party, and keep them covered until they are served.',
    ing: [
      '400 g cooked chicken breast, shredded',
      '100 g mayonnaise',
      '50 g Greek yoghurt',
      '50 g dried cranberries',
      '60 g celery, finely diced',
      '40 g pecan halves, roughly chopped',
      '2 spring onions, sliced',
      '1 tbsp lemon juice',
      '1/2 tsp salt',
      '1/4 tsp ground black pepper',
      '280 g bread, 8 slices',
      '4 lettuce leaves'
    ],
    st: [
      'Mix the mayonnaise, yoghurt, lemon juice, salt and pepper in a large bowl.',
      'Fold in the chicken, cranberries, celery, pecans and spring onions until coated.',
      'Cover and chill for 30 minutes.',
      'Lay the lettuce on 4 slices of bread, spoon over the chicken salad and top with the other slices. Cut in half to serve.'
    ],
    tips: [
      'Use chicken that is fully cold before mixing.',
      'Taste the salad before filling the bread and adjust the seasoning.',
      'Toast the bread lightly if you plan to eat the sandwiches later.'
    ],
    pair: ['Crisps', 'Pickles', 'Tomato soup', 'Green salad'],
    store: 'The salad keeps in the fridge for 2 days. Assemble the sandwiches just before eating.',
    nut: [604, 31, 48, 32, 4, 14, 850]
  },

  'peanut-butter-and-banana-sandwich': {
    d: 'Toasted bread spread with peanut butter and layered with sliced banana and a drizzle of honey, ready in minutes.',
    meta: 'Peanut butter and banana sandwich: toasted bread spread with peanut butter, sliced banana and a drizzle of honey. One serving, cooked in 3 minutes.',
    kw: ['peanut butter and banana sandwich', 'peanut butter banana sandwich', 'pb and banana sandwich', 'banana and peanut butter on toast', 'peanut butter and banana sandwich with honey'],
    why: 'Most of these sandwiches go wrong in the same way: the bread goes soft and the banana turns brown. The fix is toast. Lightly toasted bread forms a firm surface that keeps the peanut butter from soaking in, and the banana, laid on top of the spread rather than touching the bread, stays sweet and fresh for the few minutes it takes to eat.\n\nPeanut butter provides the salt and richness, banana the sweetness and soft texture. Honey is optional and adds a floral note; skip it if the banana is very ripe. A very light spreading of butter on the outside before toasting gives the bread a golden crust.\n\n**Spread the peanut butter on both slices**, so it acts as glue and holds the banana in place. Slice the banana into rounds of about 1 cm. Press the sandwich gently, cut it in half on the diagonal and eat it at once. Crunchy peanut butter adds extra texture.',
    ing: [
      '60 g bread, 2 slices',
      '1 tsp butter, softened',
      '2 tbsp peanut butter',
      '1 banana, about 100 g peeled',
      '1 tsp honey'
    ],
    st: [
      'Spread the butter thinly on the outside of each slice of bread. Toast in a dry frying pan over medium heat for 1 1/2 minutes on each side until golden.',
      'Spread the peanut butter over the inside of both slices.',
      'Slice the banana into rounds and lay them over one slice. Drizzle with honey, top with the other slice and cut in half.'
    ],
    tips: [
      'Use a banana that is ripe but not spotted brown.',
      'Press the slices gently so the banana stays in place.',
      'Grill the sandwich in the pan for 1 minute if you like a warm filling.'
    ],
    pair: ['Cold milk', 'Apple slices', 'Hot chocolate', 'Yoghurt'],
    store: 'Best eaten straight away.',
    nut: [497, 14, 63, 21, 6, 23, 400]
  },

  'honey-garlic-wings': {
    d: 'Oven-baked chicken wings with crisp skin, tossed in a sticky sauce of honey, garlic, soy sauce and butter.',
    meta: 'Honey garlic wings: oven-baked chicken wings with crisp skin, tossed in a sticky sauce of honey, garlic, soy sauce and butter. Four servings, cooked for 40 minutes.',
    kw: ['honey garlic wings', 'baked honey garlic wings', 'honey garlic chicken wings recipe', 'crispy honey garlic wings', 'sticky honey garlic wings'],
    why: 'Why do oven wings so often come out pale and soft? Because the skin holds on to moisture. A dusting of baking powder changes that: it raises the pH of the skin, which helps it brown and blister into a crisp shell, without any frying. The wings need to be dry, with the powder and salt rubbed in, before they go into the oven.\n\nBake them hot, at 220°C, on a rack if you have one, so the fat drips away. Turn them halfway. While they cook, simmer honey, soy sauce, garlic, rice vinegar and butter for a few minutes until the sauce is syrupy enough to cling.\n\n**Toss the wings in the sauce the moment they come out**, while they are still sizzling. The glaze will cool into a sticky coating, and the skin stays crisp underneath for several minutes. Serve with celery sticks and a cooling dip. Serve them on a platter with a pile of napkins, since the glaze is sticky.',
    ing: [
      '1 kg chicken wings, tips removed, split at the joint',
      '1 tbsp baking powder',
      '1 tsp salt',
      '80 g honey',
      '3 tbsp soy sauce',
      '4 garlic cloves, crushed',
      '30 g butter',
      '1 tbsp rice vinegar',
      '1 spring onion, sliced',
      '1 tsp sesame seeds'
    ],
    st: [
      'Heat the oven to 220°C. Pat the wings very dry. Toss with the baking powder and salt and spread on a rack set over a lined baking tray.',
      'Bake for 40 minutes, turning once halfway, until the skin is deep golden and crisp.',
      'In the last 10 minutes, simmer the honey, soy sauce, garlic, butter and vinegar in a small pan for 4 minutes until syrupy.',
      'Toss the hot wings in the sauce, scatter with the spring onion and sesame seeds and serve at once.'
    ],
    tips: [
      'Dry the wings well; wet skin never crisps.',
      'Use baking powder, not bicarbonate of soda, which leaves a metallic taste.',
      'Keep the sauce on a low heat so the honey does not burn.'
    ],
    pair: ['Celery sticks', 'Blue cheese dip', 'Coleslaw', 'Cold beer'],
    store: 'Keeps in the fridge for 2 days. Reheat in a hot oven to crisp them.',
    nut: [652, 44, 20, 44, 0, 17, 1850]
  },

  'chicken-scampi': {
    d: 'Thin chicken cutlets pan-fried and finished in a garlic, white wine and lemon butter sauce, served over linguine.',
    meta: 'Chicken scampi: thin chicken cutlets pan-fried and finished in a garlic, white wine and lemon butter sauce, served over linguine. Four servings, cooked in 20 minutes.',
    kw: ['chicken scampi', 'chicken scampi recipe', 'chicken scampi with linguine', 'lemon garlic chicken scampi', 'chicken in garlic butter sauce'],
    why: 'Most home versions come out with a thin, greasy sauce, and the fix is to add a little pasta water at the end. Scampi sauce is garlic, wine, lemon and butter, and it needs something to bind it. The starch in the water the pasta cooked in does that, and turns the liquid into a silky coating that clings to every strand.\n\nThe chicken is cut into thin cutlets, which cook in a few minutes and stay juicy. Dredge them lightly in flour, shaking off the excess, so they brown in the pan and thicken the sauce. Brown them well in oil, remove them, and build the sauce in the same pan so none of the browned bits are wasted.\n\n**Add the garlic once the butter melts** and cook it for only a minute, because burnt garlic ruins the sauce. Wine goes in next, then the stock and lemon. Return the chicken to the sauce, add the drained linguine and toss until everything is glossy. Finish with parsley.',
    ing: [
      '600 g chicken breast, sliced into 4 thin cutlets',
      '40 g plain flour',
      '2 tbsp olive oil',
      '40 g butter',
      '4 garlic cloves, thinly sliced',
      '100 ml dry white wine',
      '100 ml chicken stock',
      '3 tbsp lemon juice',
      '250 g linguine',
      '2 tbsp chopped fresh parsley',
      '1/2 tsp salt',
      '1/4 tsp ground black pepper'
    ],
    st: [
      'Boil the linguine in salted water for 10 minutes. Drain, keeping 100 ml of the cooking water.',
      'Season the chicken with salt and pepper and dust with flour. Heat the oil in a large frying pan and cook the cutlets for 4 minutes on each side until golden. Lift out onto a plate.',
      'Melt the butter in the pan, add the garlic and cook for 1 minute. Pour in the wine and stock and simmer for 4 minutes. Add the lemon juice.',
      'Return the chicken to the pan with the linguine and a splash of the pasta water. Toss for 1 minute, scatter with parsley and serve.'
    ],
    tips: [
      'Slice the chicken evenly so every cutlet cooks at the same speed.',
      'Do not let the garlic brown, or the sauce turns bitter.',
      'Add pasta water a splash at a time until the sauce is glossy.'
    ],
    pair: ['Green salad', 'Garlic bread', 'Steamed broccoli', 'Dry white wine'],
    store: 'Keeps in the fridge for 2 days. Reheat with a splash of water.',
    nut: [584, 44, 57, 20, 2, 3, 450]
  },

  'broccoli-cheddar-chicken': {
    d: 'Chicken breasts and broccoli florets baked under a sharp cheddar sauce until bubbling and golden on top.',
    meta: 'Broccoli cheddar chicken: chicken breasts and broccoli baked under a sharp cheddar sauce until bubbling and golden. Four servings, cooked for 30 minutes.',
    kw: ['broccoli cheddar chicken', 'broccoli cheddar chicken bake', 'chicken and broccoli with cheese sauce', 'baked cheddar chicken and broccoli', 'broccoli cheese chicken recipe'],
    why: 'A weeknight dish for four, with the vegetable and the sauce in the same dish as the meat. It works because each part is sized to finish together: chicken breasts sliced in half to make thin cutlets, broccoli cut into small florets, and a cheese sauce made while the chicken cooks.\n\nThe sauce is a classic white sauce, a roux of butter and flour whisked with milk, then thickened and finished with mature cheddar and a spoonful of mustard. The mustard does not taste of mustard; it just sharpens the cheese. A pinch of garlic powder and black pepper do the rest.\n\n**Bake the chicken and broccoli uncovered first**, before the sauce goes on, so the chicken browns slightly and the broccoli loses its raw taste. Then pour the sauce over, add the remaining cheese and finish the dish in the oven until the top is bubbling and speckled with gold. Rest it for five minutes before serving.',
    ing: [
      '600 g chicken breast, sliced in half horizontally into 4 cutlets',
      '300 g broccoli florets',
      '1 tbsp olive oil',
      '1/2 tsp salt',
      '30 g butter',
      '25 g plain flour',
      '300 ml milk',
      '150 g mature cheddar, grated',
      '1 tsp Dijon mustard',
      '1/2 tsp garlic powder',
      '1/4 tsp ground black pepper'
    ],
    st: [
      'Heat the oven to 200°C. Put the chicken and broccoli in a baking dish, drizzle with the oil and season with the salt. Bake for 15 minutes.',
      'Meanwhile melt the butter in a pan, stir in the flour and cook for 1 minute. Whisk in the milk and simmer for 5 minutes until thick.',
      'Take the pan off the heat and stir in two thirds of the cheddar, the mustard, garlic powder and pepper.',
      'Pour the sauce over the chicken and broccoli, scatter with the remaining cheddar and bake for 15 minutes more until bubbling and golden. Rest for 5 minutes.'
    ],
    tips: [
      'Slice the chicken to an even thickness so it cooks through.',
      'Whisk the sauce constantly as it thickens to avoid lumps.',
      'Check the chicken reaches 74°C inside, or cut the thickest piece to see that no pink is left.'
    ],
    pair: ['Steamed rice', 'Baked potatoes', 'Green salad', 'Crusty bread'],
    store: 'Keeps in the fridge for 3 days. Reheat covered in the oven.',
    nut: [517, 49, 15, 29, 2, 5, 690]
  },

  'tex-mex-migas': {
    d: 'Soft scrambled eggs folded with crisp tortilla strips, onion, jalapeño, tomato and melted cheese.',
    meta: 'Tex-Mex migas: soft scrambled eggs folded with crisp tortilla strips, onion, jalapeño, tomato and melted cheese. Two servings, cooked in 10 minutes.',
    kw: ['tex-mex migas', 'migas recipe', 'migas with eggs and tortilla strips', 'texas migas', 'tex mex breakfast migas'],
    why: 'This is a breakfast to make for two on a slow weekend morning, and it begins with leftovers. Migas, which means crumbs, were born from stale tortillas, fried until crisp and cooked into scrambled eggs along with whatever vegetables were around. In Texas the version is spicy, cheesy and served with warm tortillas and salsa.\n\nCut the tortillas into thin strips and fry them first, until they turn golden and crisp. Then cook the onion and jalapeño in the same oil, add the tomato, and pour in the beaten eggs. Cook over medium heat and stir gently, pulling the eggs from the edge of the pan to the middle. They should be creamy, not dry.\n\n**Take the pan off the heat while the eggs still look slightly wet.** They carry on cooking from their own heat. Fold in the cheese, which melts into the eggs, and top with coriander. Serve straight away so the tortilla strips keep some of their crunch.',
    ing: [
      '90 g corn tortillas, cut into thin strips',
      '1 tbsp vegetable oil',
      '50 g onion, finely diced',
      '1 jalapeño, about 30 g, seeded and diced',
      '1 tomato, about 100 g, diced',
      '4 eggs',
      '60 g Monterey Jack or cheddar, grated',
      '2 tbsp chopped fresh coriander',
      '1/4 tsp salt'
    ],
    st: [
      'Heat the oil in a non-stick frying pan over medium-high heat. Fry the tortilla strips for 2 minutes until golden and crisp.',
      'Add the onion and jalapeño and cook for 2 minutes. Stir in the tomato and cook for 1 minute.',
      'Beat the eggs with the salt and pour into the pan. Cook for 3 minutes, stirring gently, until just set but still soft.',
      'Fold in the cheese and coriander, and serve at once.'
    ],
    tips: [
      'Use stale tortillas if you have them; they fry crisper.',
      'Keep the heat at medium so the eggs stay soft.',
      'Serve with salsa and warm tortillas on the side.'
    ],
    pair: ['Refried beans', 'Salsa', 'Warm tortillas', 'Sliced avocado'],
    store: 'Best eaten straight away.',
    nut: [439, 23, 26, 27, 4, 4, 620]
  },

  'texas-beef-ribs': {
    d: 'Meaty beef ribs rubbed with coarse salt and black pepper, wrapped and cooked low and slow in the oven until tender.',
    meta: 'Texas beef ribs: meaty beef ribs rubbed with coarse salt and black pepper, wrapped and cooked slowly in the oven. Eight servings, cooked for 300 minutes.',
    kw: ['texas beef ribs', 'texas style beef ribs', 'oven beef ribs texas style', 'beef short ribs with salt and pepper rub', 'texas beef ribs recipe'],
    why: 'What makes a Texas beef rib? Restraint. The rub is just coarse black pepper and salt, with a little garlic powder, and the aim is to taste beef. Where other barbecue styles lean on sugar and sauce, Texas treats the meat as the main event, and a great rib needs nothing more than a long, gentle cook.\n\nThe cut matters. Buy meaty beef short ribs or plate ribs, with a thick layer of meat on top of the bone. They are tough when raw because they are full of connective tissue, and long cooking at 140°C melts it into gelatin, which is what makes the meat so soft and juicy.\n\n**Cook them wrapped in foil for the first 4 hours**, then unwrap for the last hour to let the outside darken into a crust. The ribs are ready when a skewer slides in without resistance and the meat has pulled back from the ends of the bones. Rest them for 30 minutes before cutting.',
    ing: [
      '2.4 kg bone-in beef short ribs',
      '30 g coarse sea salt',
      '15 g coarse ground black pepper',
      '8 g garlic powder',
      '2 tbsp beef stock'
    ],
    st: [
      'Heat the oven to 140°C. Mix the salt, pepper and garlic powder and rub it all over the ribs.',
      'Put the ribs in a roasting tin, pour in the stock and cover tightly with foil. Cook for 4 hours.',
      'Remove the foil and cook for 1 hour more until the outside is dark and crusty.',
      'Rest the ribs, loosely covered, for 30 minutes before cutting between the bones.'
    ],
    tips: [
      'Use coarse pepper and salt; fine grains make a salty crust.',
      'Seal the foil well so the ribs steam rather than dry out.',
      'Save the juices in the tin and spoon them over the meat.'
    ],
    pair: ['Coleslaw', 'Pickles', 'White bread', 'Pinto beans'],
    store: 'Keeps in the fridge for 4 days. Reheat covered in a low oven.',
    nut: [851, 42, 2, 75, 1, 0, 1670]
  },

  'texas-toast': {
    d: 'Thick slices of white bread brushed with garlic butter and baked until crisp at the edges and soft in the middle.',
    meta: 'Texas toast: thick slices of white bread brushed with garlic butter and baked until crisp at the edges and soft in the middle. Six servings, cooked in 10 minutes.',
    kw: ['texas toast', 'garlic texas toast', 'texas toast recipe', 'thick garlic bread slices', 'garlic butter texas toast'],
    why: 'It looks like garlic bread and eats like toast, and the difference is the thickness. Texas toast is cut from an extra-thick sliced loaf, about 2 cm, which gives you a crisp, buttery outside and a pillowy centre that soaks up the garlic butter.\n\nBuy a white sandwich loaf and slice it yourself if the pack is thin, since the slices have to be thick enough to stay soft in the middle. Softened butter, mixed with crushed garlic, parsley and a little grated Parmesan, spreads easily and goes on in an even layer right to the edges, where it crisps.\n\n**Bake on a hot tray** so the underside crisps at the same time as the top. Turn the slices once if you like both sides toasted. They are ready when the edges are deep gold and the butter has soaked in and bubbled. Serve straight from the oven with pasta, steak or a bowl of soup.',
    ing: [
      '240 g thick-sliced white bread, 6 slices',
      '80 g butter, softened',
      '3 garlic cloves, crushed',
      '2 tbsp chopped fresh parsley',
      '20 g Parmesan, finely grated',
      '1/4 tsp salt'
    ],
    st: [
      'Heat the oven to 200°C. Mix the butter, garlic, parsley, Parmesan and salt.',
      'Spread the garlic butter evenly over one side of each slice, right to the edges.',
      'Place the slices butter side up on a baking tray and bake for 10 minutes until golden and crisp at the edges.',
      'Serve hot.'
    ],
    tips: [
      'Use butter at room temperature so it spreads evenly.',
      'Spread to the very edge; that is where the best crunch comes from.',
      'Slide the tray to the top of the oven for the last 2 minutes if you want more colour.'
    ],
    pair: ['Spaghetti', 'Steak', 'Tomato soup', 'Chili'],
    store: 'Best eaten warm. Keeps for 1 day and reheats in a hot oven.',
    nut: [217, 5, 20, 13, 1, 2, 350]
  },

  'kansas-city-barbecue-sauce': {
    d: 'A thick, sweet and tangy tomato barbecue sauce with brown sugar, molasses, mustard and smoked paprika.',
    meta: 'Kansas City barbecue sauce: a thick, sweet and tangy tomato sauce with brown sugar, molasses, mustard and smoked paprika. Twelve servings, cooked for 30 minutes.',
    kw: ['kansas city barbecue sauce', 'kansas city bbq sauce', 'sweet and tangy barbecue sauce', 'homemade barbecue sauce with molasses', 'kc style bbq sauce'],
    why: 'This is the sauce for the table at a cookout, set out in a bowl beside the ribs so everyone can add what they like. Kansas City style is thick and sweet, built on tomato, with brown sugar and molasses for depth, vinegar for tang and spices for warmth. It is the most familiar barbecue sauce in the world.\n\nThe cooking is simple. Everything goes into a pan and simmers gently until the sauce thickens and darkens. The molasses gives a bitter-sweet edge that plain sugar cannot, and smoked paprika puts a campfire note in the background. A little mustard and Worcestershire sauce fill in the savoury flavours.\n\n**Stir often and keep the heat low.** The sugar catches on the base of the pan quickly, and a scorched sauce cannot be rescued. It is done when it coats the back of a spoon and leaves a line when you draw a finger through. Cool it, as it thickens further, and brush it on the meat in the last few minutes of cooking.',
    ing: [
      '300 g ketchup',
      '100 g dark brown sugar',
      '2 tbsp molasses',
      '100 ml cider vinegar',
      '1 tbsp Worcestershire sauce',
      '1 tbsp yellow mustard',
      '2 tsp smoked paprika',
      '1 tsp garlic powder',
      '1 tsp onion powder',
      '1/4 tsp cayenne pepper',
      '1/2 tsp ground black pepper',
      '100 ml water'
    ],
    st: [
      'Put all the ingredients in a saucepan and stir until the sugar begins to dissolve.',
      'Bring to a gentle simmer over low heat and cook for 30 minutes, stirring often, until thick and glossy.',
      'Taste and adjust the sweetness, vinegar or heat. Cool before using.'
    ],
    tips: [
      'Keep the heat low to avoid scorching.',
      'Brush it on in the last 10 minutes of cooking so the sugar does not burn.',
      'Stir in a splash of water if the sauce gets too thick.'
    ],
    pair: ['Pork ribs', 'Pulled pork', 'Burgers', 'Grilled chicken'],
    store: 'Keeps in a sealed jar in the fridge for 3 weeks.',
    nut: [68, 0, 17, 0, 0, 16, 260]
  },

  'memphis-dry-rub-ribs': {
    d: 'Pork ribs coated in a paprika and brown sugar dry rub and cooked slowly in the oven until the meat pulls from the bone, with no sauce.',
    meta: 'Memphis dry rub ribs: pork ribs coated in a paprika and brown sugar dry rub and cooked slowly until the meat pulls from the bone. Six servings, cooked for 180 minutes.',
    kw: ['memphis dry rub ribs', 'memphis style ribs', 'dry rub pork ribs', 'oven memphis ribs', 'memphis ribs recipe'],
    why: 'Most home ribs come out tough or dry, and the fix is a slow, wrapped cook. Memphis ribs are served dry, with the flavour in the crust of spices rather than a sauce, so they have to be tender from the inside. Wrapping them in foil for the main part of the cooking traps steam and moisture and softens the meat.\n\nThe rub is paprika, brown sugar, salt, pepper, garlic and onion powder, with mustard powder and a little cayenne. Press it on thickly, covering every surface. The sugar melts into a thin glaze and the paprika colours the meat a deep red-brown.\n\n**Cook them wrapped for 2.5 hours**, then unwrap and let them finish for 30 minutes to firm up the crust. The ribs are ready when the meat has shrunk back from the ends of the bones and a toothpick slides in with no resistance. Cut between the bones and serve them bare, with extra rub to sprinkle on top.',
    ing: [
      '2 kg pork back ribs, 2 racks',
      '40 g dark brown sugar',
      '20 g smoked paprika',
      '15 g fine salt',
      '8 g ground black pepper',
      '8 g garlic powder',
      '8 g onion powder',
      '5 g mustard powder',
      '2 g cayenne pepper'
    ],
    st: [
      'Heat the oven to 150°C. Peel the thin membrane from the back of each rack of ribs.',
      'Mix the sugar, paprika, salt, pepper, garlic powder, onion powder, mustard powder and cayenne. Rub it thickly over both sides of the ribs.',
      'Wrap each rack tightly in foil and cook on a baking tray for 2 1/2 hours.',
      'Unwrap and cook for 30 minutes more until the crust is dark. Rest for 10 minutes, then cut between the bones.'
    ],
    tips: [
      'Remove the membrane, or the ribs stay tough.',
      'Wrap the foil tightly so no steam escapes.',
      'Save the juices from the foil and spoon them over the cut ribs.'
    ],
    pair: ['Coleslaw', 'Baked beans', 'Cornbread', 'Pickles'],
    store: 'Keeps in the fridge for 3 days. Reheat wrapped in foil in a low oven.',
    nut: [918, 51, 12, 74, 2, 7, 1190]
  },

  'carolina-mustard-sauce': {
    d: 'A thin, tangy, golden barbecue sauce of yellow mustard, cider vinegar and brown sugar from South Carolina.',
    meta: 'Carolina mustard sauce: a thin, tangy, golden barbecue sauce of yellow mustard, cider vinegar and brown sugar. Ten servings, cooked in 10 minutes.',
    kw: ['carolina mustard sauce', 'south carolina mustard bbq sauce', 'carolina gold sauce', 'mustard barbecue sauce', 'carolina mustard sauce for pulled pork'],
    why: 'What makes Carolina mustard sauce different from every other barbecue sauce? It has no tomato at all. The base is yellow mustard thinned with cider vinegar and sweetened with brown sugar, and the result is bright gold, sharp and thin enough to pour over a pile of pulled pork. It is found most often in South Carolina.\n\nThe balance is between three things: the heat of the mustard, the sourness of the vinegar and the sweetness of the sugar and honey. A spoonful of ketchup rounds the colour, Worcestershire sauce adds savoury depth, and a splash of hot sauce keeps it from tasting too sweet. A little butter at the end gives it a smooth finish.\n\n**Simmer for 10 minutes**, no longer, so the raw edge of the mustard cooks off but its brightness remains. Stir it often. Serve it warm over pulled pork or chicken, or use it as a dipping sauce and a spread for sandwiches.',
    ing: [
      '150 g yellow mustard',
      '100 ml cider vinegar',
      '60 g dark brown sugar',
      '1 tbsp honey',
      '1 tbsp ketchup',
      '1 tbsp Worcestershire sauce',
      '1 tsp hot pepper sauce',
      '1/2 tsp garlic powder',
      '1/2 tsp ground black pepper',
      '1 tbsp butter'
    ],
    st: [
      'Put the mustard, vinegar, sugar, honey, ketchup, Worcestershire sauce, hot sauce, garlic powder and pepper in a saucepan.',
      'Bring to a gentle simmer and cook for 10 minutes, stirring often.',
      'Remove from the heat and stir in the butter until it melts. Serve warm or cold.'
    ],
    tips: [
      'Use plain yellow mustard, not Dijon or wholegrain.',
      'Taste the sauce and balance the sweet and sour to your liking.',
      'Whisk again before using, as the sauce can separate.'
    ],
    pair: ['Pulled pork', 'Grilled chicken', 'Sausages', 'Coleslaw'],
    store: 'Keeps in a sealed jar in the fridge for 3 weeks.',
    nut: [58, 1, 9, 2, 1, 8, 200]
  },

  'alabama-white-sauce-chicken': {
    d: 'Roasted chicken pieces dunked in a tangy white barbecue sauce of mayonnaise, vinegar, horseradish and black pepper.',
    meta: 'Alabama white sauce chicken: roasted chicken pieces dunked in a tangy white barbecue sauce of mayonnaise, vinegar and horseradish. Six servings, cooked for 45 minutes.',
    kw: ['alabama white sauce chicken', 'alabama white barbecue sauce', 'white barbecue sauce chicken', 'chicken with alabama white sauce', 'bbq chicken with white sauce'],
    why: 'Forget the red. Alabama white sauce is a mayonnaise-based sauce, thinned with vinegar and sharpened with horseradish and plenty of black pepper, and it was developed to go with smoked chicken. It looks odd and tastes brilliant: creamy, tart and peppery, with a heat that creeps up.\n\nThe chicken is cooked first and the sauce is applied after, which keeps the mayonnaise from splitting in the heat. Roast chicken thighs and drumsticks at a high temperature, 220°C, and the skin crisps while the meat stays juicy. Then dunk each piece in the sauce, or pour it over, and serve the rest in a bowl.\n\n**Add the vinegar slowly while whisking** so the sauce stays smooth. The sauce should be thin enough to coat a spoon but not run off it. Taste it with a hot piece of chicken, since the heat softens the sharpness. Use plenty of fresh black pepper; it is the signature note.',
    ing: [
      '1.5 kg chicken thighs and drumsticks, bone in',
      '1 tbsp olive oil',
      '1 tsp salt',
      '1 tsp paprika',
      '250 g mayonnaise',
      '3 tbsp cider vinegar',
      '1 tbsp lemon juice',
      '1 tbsp prepared horseradish',
      '1 tsp ground black pepper',
      '1 tsp sugar',
      '1 tsp hot pepper sauce'
    ],
    st: [
      'Heat the oven to 220°C. Toss the chicken with the oil, salt and paprika and spread on a baking tray.',
      'Roast for 45 minutes, turning once, until the skin is crisp and the juices run clear.',
      'Whisk the mayonnaise, vinegar, lemon juice, horseradish, pepper, sugar and hot sauce until smooth.',
      'Dunk the hot chicken in the sauce, or pour half over, and serve the rest in a bowl.'
    ],
    tips: [
      'Use freshly ground black pepper for the best flavour.',
      'Keep the sauce cold; add it to hot chicken, not the other way round.',
      'Thin the sauce with a spoonful of water if it is too thick.'
    ],
    pair: ['Coleslaw', 'Potato salad', 'Baked beans', 'Green salad'],
    store: 'The chicken keeps in the fridge for 3 days; the sauce keeps in a jar for 1 week.',
    nut: [617, 50, 3, 45, 0, 1, 880]
  },

  'st-louis-ribs': {
    d: 'St Louis cut pork spare ribs rubbed with spices, cooked slowly in the oven and glazed with barbecue sauce.',
    meta: 'St Louis ribs: pork spare ribs rubbed with spices, cooked slowly in the oven and glazed with barbecue sauce. Six servings, cooked for 180 minutes.',
    kw: ['st louis ribs', 'st louis style ribs', 'st louis cut spare ribs', 'oven st louis ribs', 'st louis ribs with barbecue sauce'],
    why: 'St Louis cut means spare ribs with the breastbone and cartilage trimmed away, which leaves a neat, rectangular rack with an even thickness. That regular shape is the reason they cook evenly and look good on a platter. They are meatier and fattier than back ribs, and need a slower cook.\n\nRub them with brown sugar, paprika, salt, pepper and garlic powder, then bake low, wrapped in foil. The wrapping steams the meat tender and the fat melts into it. When the bones are exposed at the ends and the meat gives under a gentle push, they are ready for the final step: a coat of barbecue sauce.\n\n**Brush on the sauce and return the ribs to a hot oven** for 10 minutes, unwrapped, until it turns sticky and starts to caramelise at the edges. Do it in two coats for a lacquered finish. Let the racks rest for 10 minutes, and use a sharp knife to cut between the bones.',
    ing: [
      '2.2 kg pork spare ribs, St Louis cut',
      '40 g dark brown sugar',
      '20 g smoked paprika',
      '15 g fine salt',
      '8 g ground black pepper',
      '8 g garlic powder',
      '150 g barbecue sauce'
    ],
    st: [
      'Heat the oven to 150°C. Peel the membrane from the back of the ribs.',
      'Mix the sugar, paprika, salt, pepper and garlic powder and rub it over both sides. Wrap each rack tightly in foil.',
      'Cook on a baking tray for 2 1/2 hours until tender.',
      'Raise the oven to 220°C. Unwrap the ribs, brush with the barbecue sauce and cook for 20 minutes more, brushing again halfway, until sticky. Rest for 10 minutes.'
    ],
    tips: [
      'Do not skip the membrane; it makes the ribs chewy.',
      'Brush the sauce on at the end, or the sugar will burn.',
      'Cut between the bones with a sharp knife.'
    ],
    pair: ['Coleslaw', 'Cornbread', 'Baked beans', 'Corn on the cob'],
    store: 'Keeps in the fridge for 3 days. Reheat wrapped in foil in a low oven.',
    nut: [1029, 56, 19, 81, 2, 14, 1460]
  },

  'new-york-style-pizza': {
    d: 'A thin, foldable pizza with a crisp base and chewy edge, topped with simple tomato sauce and low-moisture mozzarella.',
    meta: 'New York style pizza: a thin, foldable pizza with a crisp base and chewy edge, topped with tomato sauce and mozzarella. Four servings, 90 minutes proving.',
    kw: ['new york style pizza', 'ny style pizza', 'new york pizza recipe', 'foldable thin crust pizza', 'new york pizza dough and sauce'],
    why: 'It is closer to Italian pizza than people think, but bigger, thinner and foldable. New York style pizza has a base that is crisp underneath and chewy at the rim, a layer of tomato sauce that is cooked only in the oven, and a blanket of low-moisture mozzarella that browns in blisters. It is eaten by the slice, folded in half.\n\nThe dough is made with strong bread flour, which has more protein than ordinary flour and gives the chew. A touch of sugar and oil helps it brown and stay supple. Knead it well, until smooth and elastic, then let it prove until doubled. The dough should be stretched by hand, with the edges left thicker so they puff.\n\n**Heat the oven to its maximum**, with a baking sheet or stone inside, for at least 30 minutes. A very hot surface sets the base fast and gives the bubbles. Slide the pizza on, bake for 7 minutes, and watch closely: it can go from golden to dark in a minute.',
    ing: [
      '500 g strong white bread flour',
      '325 ml warm water',
      '3 g dried yeast',
      '10 g salt',
      '1 tsp sugar',
      '1 tbsp olive oil',
      '# Topping',
      '400 g tinned crushed tomatoes',
      '1 tbsp olive oil',
      '1/2 tsp salt',
      '1 tsp dried oregano',
      '250 g low-moisture mozzarella, grated'
    ],
    st: [
      'Mix the flour, yeast, salt and sugar. Add the water and oil and knead for 10 minutes into a smooth, elastic dough. Cover and leave to prove for 90 minutes until doubled.',
      'Heat the oven to its highest setting with a baking sheet inside. Stir the tomatoes, oil, salt and oregano together.',
      'Divide the dough in two. Stretch each piece by hand into a 35 cm circle, keeping the edge thicker.',
      'Top each with half the sauce and half the mozzarella. Slide onto the hot sheet and bake for 7 minutes until the edge is blistered and the cheese is browned. Repeat with the second pizza.'
    ],
    tips: [
      'Use low-moisture mozzarella, not fresh, to avoid a wet pizza.',
      'Do not overload the pizza; thin toppings cook properly.',
      'Let the oven heat for the full time; the hot surface does the work.'
    ],
    pair: ['Green salad', 'Garlic knots', 'Chilli flakes', 'Cold lager'],
    store: 'Best eaten straight away. Leftover slices keep in the fridge for 2 days; reheat in a hot pan.',
    nut: [577, 28, 69, 21, 5, 11, 2410],
    rest: [90, 'Proving the dough']
  },

  'new-england-boiled-dinner': {
    d: 'Corned beef simmered with cabbage, carrots, potatoes and turnip in a single pot until tender, served with mustard.',
    meta: 'New England boiled dinner: corned beef simmered with cabbage, carrots, potatoes and turnip in a single pot. Six servings, cooked for 180 minutes.',
    kw: ['new england boiled dinner', 'boiled dinner recipe', 'corned beef and cabbage boiled dinner', 'new england corned beef dinner', 'corned beef with root vegetables'],
    why: 'Keep the heat low. That is most of the recipe, and the part people skip. A boiled dinner is a single pot of salted beef and vegetables, and a hard boil toughens the meat and clouds the broth. A gentle simmer, with the water barely moving, turns the brisket tender enough to cut with a spoon.\n\nThe corned beef goes in first and cooks alone for 2.5 hours, with onion, bay and peppercorns. Then the vegetables join it in order of hardness: turnip and carrots first, then the potatoes, and the cabbage last, so each one is just tender when the beef is done. Everything shares the same salty, savoury broth.\n\n**Lift the beef out and rest it** for 15 minutes before slicing across the grain. Serve the sliced meat and the vegetables on a platter with some of the broth spooned over and a pot of mustard on the table. Keep the leftover broth for soup.',
    ing: [
      '1.5 kg corned beef brisket',
      '2 onions, peeled and halved',
      '2 bay leaves',
      '5 g black peppercorns',
      '2.5 litres water',
      '300 g turnip, peeled and cut into large chunks',
      '4 carrots, about 400 g, cut into thick lengths',
      '600 g potatoes, peeled and halved',
      '600 g green cabbage, cut into 6 wedges',
      '4 tbsp wholegrain mustard'
    ],
    st: [
      'Put the beef, onions, bay, peppercorns and water in a large pot. Bring to a boil, skim, then reduce to a bare simmer. Cover and cook for 2 1/2 hours.',
      'Add the turnip and carrots and simmer for 10 minutes.',
      'Add the potatoes and simmer for 10 minutes. Lay the cabbage on top, cover and simmer for 10 minutes more until all the vegetables are tender.',
      'Lift out the beef and rest for 15 minutes. Slice across the grain and serve with the vegetables, some broth and the mustard.'
    ],
    tips: [
      'Keep the water at a bare simmer; boiling makes the beef tough.',
      'Taste the broth before adding salt; corned beef is already salty.',
      'Slice across the grain for tender slices.'
    ],
    pair: ['Mustard', 'Horseradish', 'Rye bread', 'Pickles'],
    store: 'Keeps in the fridge for 4 days, with some broth to stop the meat drying out.',
    nut: [670, 54, 37, 34, 9, 11, 460]
  },

  'maine-lobster-stew': {
    d: 'A simple, rich stew of cooked lobster meat warmed in butter, milk and cream with a splash of sherry and a pinch of paprika.',
    meta: 'Maine lobster stew: a simple, rich stew of cooked lobster warmed in butter, milk and cream with sherry and paprika. Four servings, cooked in 25 minutes.',
    kw: ['maine lobster stew', 'lobster stew recipe', 'new england lobster stew', 'lobster stew with butter and cream', 'lobster stew with sherry and cream'],
    why: 'Lobster, butter, milk and cream: four things, and not much else. Maine lobster stew is a plain dish that lets the shellfish do the talking, with a broth that is more like a warm, sweet cream soup than a thick chowder. It has no potatoes, no flour and no vegetables.\n\nThe lobster meat is warmed gently in butter, which draws out its flavour and turns the butter pink. Milk and cream go in next, and the whole thing is heated slowly, never boiled, because boiling toughens the meat and splits the dairy. A spoonful of sherry and a pinch of paprika give depth and colour.\n\n**Let the stew stand off the heat for 30 minutes**, if you can, before reheating gently to serve. It rests, and the lobster flavour moves into the liquid, giving a much richer result. Serve it in warm bowls with oyster crackers or buttered bread, and an extra pat of butter floating on top.',
    ing: [
      '400 g cooked lobster meat, cut into bite-size pieces',
      '60 g butter',
      '600 ml whole milk',
      '300 ml double cream',
      '2 tbsp dry sherry',
      '1/2 tsp paprika',
      '1/2 tsp salt',
      '1/4 tsp white pepper',
      '2 tbsp chopped fresh chives'
    ],
    st: [
      'Melt the butter in a heavy saucepan over low heat. Add the lobster and the paprika and stir for 4 minutes without browning.',
      'Add the sherry and cook for 1 minute.',
      'Pour in the milk and cream and heat gently for 15 minutes, without boiling, until steaming. Season with the salt and white pepper.',
      'Take off the heat and leave to stand for 30 minutes. Reheat gently, scatter with chives and serve.'
    ],
    tips: [
      'Never let the stew boil; the dairy splits and the lobster turns tough.',
      'Use the lobster tomalley if you can find it for extra flavour.',
      'Season carefully, as the lobster is naturally salty.'
    ],
    pair: ['Oyster crackers', 'Buttered bread', 'Green salad', 'Dry white wine'],
    store: 'Keeps in the fridge for 2 days. Reheat gently.',
    nut: [549, 26, 10, 45, 0, 10, 690]
  },

  'vermont-maple-cream-pie': {
    d: 'A baked pastry shell filled with a set maple custard and topped with whipped cream, cool and smooth.',
    meta: 'Vermont maple cream pie: a baked pastry shell filled with a set maple custard and topped with whipped cream. Eight servings, chilled for 3 hours.',
    kw: ['vermont maple cream pie', 'maple cream pie', 'maple custard pie', 'maple cream pie recipe', 'maple pie with whipped cream'],
    why: 'It looks like a butterscotch pie and eats like a custard tart, and the flavour of real maple syrup is the reason for it. Vermont maple cream pie relies on the syrup for all its sweetness and aroma, so use pure maple syrup, not pancake syrup, which is mostly sugar and flavouring.\n\nThe filling is cooked on the hob, a custard of egg yolks, milk and cornflour with the maple syrup stirred in. Whisk constantly as it thickens, since the yolks scramble if the heat is too high, and cook for a full 2 minutes after it bubbles to remove the starchy taste. A knob of butter at the end gives it a glossy finish.\n\n**Pour the hot custard into a pre-baked shell** and press cling film onto the surface, so a skin does not form. Chill it for at least 3 hours until firm enough to slice. Add the whipped cream just before serving, and a little extra syrup for drizzling.',
    ing: [
      '320 g ready-made shortcrust pastry',
      '4 egg yolks',
      '30 g cornflour',
      '400 ml whole milk',
      '180 ml maple syrup',
      '30 g butter',
      '1 pinch of salt',
      '200 ml double cream',
      '1 tbsp icing sugar'
    ],
    st: [
      'Heat the oven to 190°C. Roll out the pastry and line a 23 cm pie dish. Prick the base, line with baking paper and beans, and bake for 15 minutes. Remove the paper and beans and bake for 5 minutes more. Cool.',
      'Whisk the egg yolks and cornflour with 100 ml of the milk. Heat the rest of the milk with the maple syrup and salt until steaming.',
      'Pour the hot milk into the yolk mixture, whisking, then return to the pan. Cook for 5 minutes over medium heat, whisking constantly, until thick. Stir in the butter.',
      'Pour into the shell, press cling film onto the surface and chill for 3 hours. Whip the cream with the icing sugar and spread over before serving.'
    ],
    tips: [
      'Use dark, robust-grade maple syrup for a stronger flavour.',
      'Whisk constantly when cooking the custard.',
      'Chill the pie fully before slicing.'
    ],
    pair: ['Hot coffee', 'Fresh berries', 'Whipped cream', 'Black tea'],
    store: 'Keeps in the fridge for 3 days.',
    nut: [459, 8, 46, 27, 1, 24, 320],
    rest: [180, 'Chilling']
  }
};
