'use strict';

/**
 * Volume nineteen — Korea, Japan, Thailand, Vietnam.
 *
 * Twenty-three. The gaps here were not obscure: Korea had sixteen entries and
 * none of jjajangmyeon, kimchi fried rice or budae jjigae, which are three of
 * the most-searched Korean dishes there are. Japan had thirty-six and no
 * tonkatsu, which is the cutlet the katsu curry already on the site is made
 * from. Thailand had fourteen and no panang or yellow curry. Vietnam had ten
 * and neither bánh xèo nor phở gà.
 *
 * Budae jjigae is here with its tinned meat intact. It was invented around
 * American army surplus after the Korean war and the tin is the dish; writing
 * it out to make it respectable would be writing out the history.
 */

module.exports = {
  'jjajangmyeon': {
    d: 'Thick wheat noodles under a black bean sauce of pork and diced vegetables. Korea\'s most-ordered delivery food, eaten with yellow pickled radish.',
    meta: 'Korean noodles in a fried black bean sauce with pork belly, onion, courgette and potato, thickened and served with cucumber.',
    kw: ['jjajangmyeon', 'jjajangmyeon recipe', 'korean black bean noodles', 'jajangmyeon', 'chunjang sauce'],
    why: 'Fry the chunjang paste in oil on its own for two full minutes before anything else goes in. Straight from the tub it is bitter and raw and tastes faintly of ash; fried, it turns sweet, glossy and about two shades darker. Every recipe that skips this makes a sauce people describe as "bitter" without knowing why. Fry it in more oil than feels sensible, then pour the excess off.',
    ing: [
      '400 g fresh thick wheat noodles',
      '300 g pork belly, in 1.5 cm dice',
      '5 tbsp chunjang (Korean black bean paste)',
      '5 tbsp vegetable oil',
      '1 large onion, in 1.5 cm dice',
      '1 potato, in 1.5 cm dice',
      '1 courgette, in 1.5 cm dice',
      '2.5 cm ginger, grated',
      '1 tbsp caster sugar',
      '1 tbsp oyster sauce',
      '350 ml water',
      '2 tbsp cornflour mixed with 4 tbsp water',
      '1 tsp toasted sesame oil',
      '0.5 cucumber, cut into fine matchsticks'
    ],
    st: [
      'Heat 4 tbsp of the oil in a small pan and fry the chunjang over a medium heat for 2 minutes, stirring, until glossy and darker. Set aside.',
      'Heat the remaining oil in a wok and fry the pork for 5 minutes, until the fat renders and the edges brown.',
      'Add the ginger and cook 30 seconds.',
      'Add the onion and potato and fry 4 minutes.',
      'Add the courgette and fry 2 minutes.',
      'Stir in the fried chunjang, the sugar and the oyster sauce and coat everything for 1 minute.',
      'Pour in the water and simmer 8 minutes, until the potato is tender.',
      'Stir the cornflour slurry and pour it in, stirring, until the sauce turns thick and shining.',
      'Boil the noodles as the packet directs, drain and divide between bowls.',
      'Spoon the sauce over, add the sesame oil and top with cucumber matchsticks.'
    ],
    tips: [
      'Fry the chunjang alone for two minutes. It is the whole dish.',
      'Dice everything the same size so it cooks together.',
      'Serve the sauce on top and let people mix it themselves.'
    ],
    pair: ['Danmuji (yellow pickled radish)', 'Kimchi', 'Tangsuyuk'],
    store: 'The sauce keeps 3 days refrigerated and freezes 2 months. Boil noodles fresh.',
    nut: [720, 28, 82, 31, 6, 9, 1290]
  },

  'kimchi-fried-rice': {
    d: 'Cold rice fried hard with sour kimchi and topped with a fried egg. Twenty-five minutes, and better the older the kimchi is.',
    meta: 'Cold rice stir-fried with aged kimchi, gochujang and sesame oil, topped with a fried egg and seaweed.',
    kw: ['kimchi fried rice', 'kimchi fried rice recipe', 'kimchi bokkeumbap', 'korean fried rice', 'leftover rice recipe'],
    why: 'Use kimchi that has gone properly sour — the fizzing, three-weeks-open kind that is no longer pleasant to eat raw. Fresh kimchi is crunchy and mild and makes a fried rice that tastes of not much; sour kimchi has developed the acidity and depth the dish is built on. Fry the kimchi in oil for three minutes on its own before the rice, and use its juice too.',
    ing: [
      '350 g cooked short-grain rice, cold',
      '200 g well-fermented kimchi, roughly chopped',
      '4 tbsp kimchi juice from the jar',
      '2 tbsp vegetable oil',
      '100 g pork belly or bacon, in small dice',
      '3 garlic cloves, finely chopped',
      '1 tbsp gochujang',
      '1 tsp caster sugar',
      '1 tbsp toasted sesame oil',
      '2 eggs',
      '2 spring onions, sliced',
      '1 tsp toasted sesame seeds',
      '1 sheet toasted nori, cut into strips'
    ],
    st: [
      'Break up the cold rice with wet fingers until no lumps remain.',
      'Heat the vegetable oil in a wok and fry the pork for 4 minutes, until the fat runs and the edges crisp.',
      'Add the garlic and cook 30 seconds.',
      'Add the kimchi and fry over a high heat for 3 minutes, until it darkens and smells sweet.',
      'Stir in the gochujang and sugar and cook 1 minute.',
      'Add the rice and the kimchi juice and toss for 4 minutes, pressing the rice against the hot pan and lifting.',
      'Stir in the sesame oil and take off the heat.',
      'Fry the eggs in a separate pan until the whites are set and the yolks still soft.',
      'Divide the rice between two bowls, top each with an egg.',
      'Scatter the spring onions, sesame seeds and nori over.'
    ],
    tips: [
      'Sour kimchi, not fresh. Three weeks open is right.',
      'Use the juice — it is half the seasoning.',
      'Cold rice, pressed and lifted rather than stirred.'
    ],
    pair: ['A fried egg, always', 'Miyeokguk', 'Cold barley tea'],
    store: 'Keeps 2 days refrigerated. Reheat in a hot pan and add a fresh egg.',
    nut: [620, 22, 68, 29, 4, 8, 1420]
  },

  'budae-jjigae': {
    d: 'Army base stew: kimchi, gochujang, sausage, tinned meat and instant noodles in one bubbling pan. Invented from surplus, and now ordered on purpose.',
    meta: 'Korean stew of kimchi, gochujang broth, sausages, tinned luncheon meat, tofu and instant noodles, cooked at the table.',
    kw: ['budae jjigae', 'budae jjigae recipe', 'army stew', 'korean sausage stew', 'kimchi noodle stew'],
    why: 'The noodles go in for the last three minutes and not a moment sooner. They are there to be eaten from the pan while still springy, and a block that has sat in the broth for ten minutes turns to sludge and thickens everything around it. Arrange the ingredients in wedges rather than stirring them in, so each person can see what they are taking.',
    ing: [
      '200 g well-fermented kimchi, roughly chopped',
      '150 g tinned luncheon meat, sliced',
      '2 frankfurters, sliced on the diagonal',
      '150 g firm tofu, sliced',
      '1 onion, sliced',
      '2 spring onions, in 4 cm lengths',
      '100 g enoki or shiitake mushrooms',
      '2 tbsp gochujang',
      '1 tbsp gochugaru',
      '3 garlic cloves, crushed',
      '1 tbsp light soy sauce',
      '1 tsp caster sugar',
      '900 ml chicken or anchovy stock',
      '1 block instant ramen noodles',
      '2 slices processed cheese'
    ],
    st: [
      'Mix the gochujang, gochugaru, garlic, soy sauce and sugar into a paste.',
      'Arrange the kimchi, luncheon meat, frankfurters, tofu, onion and mushrooms in wedges in a wide shallow pan.',
      'Spoon the paste into the middle.',
      'Pour the stock in around the edge, so as not to disturb the arrangement.',
      'Bring to the boil over a high heat, then simmer 12 minutes.',
      'Taste the broth and correct the salt.',
      'Push the noodle block into the centre and cook 3 minutes.',
      'Lay the cheese slices on top and let them melt for 1 minute without stirring.',
      'Scatter the spring onions over and bring the pan to the table.'
    ],
    tips: [
      'Noodles in for the last three minutes only.',
      'Arrange in wedges rather than stirring.',
      'The cheese is not a joke — it rounds off the chilli.'
    ],
    pair: ['Steamed rice', 'Soju', 'Extra kimchi'],
    store: 'Best made and eaten in one sitting. The broth keeps 2 days without the noodles.',
    nut: [640, 32, 44, 36, 5, 10, 1980]
  },

  'doenjang-jjigae': {
    d: 'A soybean paste stew of courgette, potato and tofu, thick and deeply savoury. The everyday Korean stew, on the table most nights.',
    meta: 'Korean fermented soybean paste stew with courgette, potato, tofu and green chilli in an anchovy and kelp broth.',
    kw: ['doenjang jjigae', 'doenjang jjigae recipe', 'korean soybean paste stew', 'doenjang stew', 'korean tofu stew'],
    why: 'Dissolve the doenjang in a ladleful of hot broth before it goes into the pot. Spooned in as a lump it never fully disperses — you get salty pockets and a bland broth, and stirring harder only breaks up the tofu. Make the broth with dried anchovy and kelp if you can; it takes ten minutes and is what separates this from a bowl of salty water.',
    ing: [
      '3 tbsp doenjang (Korean soybean paste)',
      '1 litre water',
      '15 dried anchovies, heads and guts removed',
      '1 piece dried kelp, about 10 cm',
      '1 potato, in 1.5 cm dice',
      '1 courgette, halved and sliced',
      '1 onion, sliced',
      '200 g firm tofu, in 2 cm cubes',
      '2 green chillies, sliced',
      '1 red chilli, sliced',
      '4 garlic cloves, crushed',
      '1 tsp gochugaru',
      '2 spring onions, sliced'
    ],
    st: [
      'Bring the water, anchovies and kelp to a simmer and cook 10 minutes.',
      'Lift out the kelp after 10 minutes and the anchovies with a slotted spoon. Keep the broth.',
      'Ladle a little hot broth into a bowl and whisk the doenjang into it until smooth.',
      'Return the dissolved doenjang to the pot with the potato and onion and simmer 8 minutes.',
      'Add the courgette, garlic and gochugaru and simmer 5 minutes.',
      'Slide in the tofu and the chillies and simmer 4 minutes, without stirring hard.',
      'Taste and add a little more doenjang if it needs salt.',
      'Scatter the spring onions over and take the pot straight to the table, still bubbling.'
    ],
    tips: [
      'Dissolve the paste in broth first, never spoon it in whole.',
      'Anchovy and kelp broth takes ten minutes and doubles the dish.',
      'Add tofu last and stop stirring once it is in.'
    ],
    pair: ['Steamed rice', 'Kimchi', 'Grilled mackerel'],
    store: 'Keeps 3 days refrigerated and is better on the second day.',
    nut: [215, 15, 20, 8, 5, 6, 1420]
  },

  'gyeranjjim': {
    d: 'Eggs beaten with water and steamed in an earthenware pot until they rise like a soufflé. Twenty minutes, and it arrives still swelling.',
    meta: 'Korean steamed egg custard whisked with stock and salt, cooked in an earthenware pot until risen and softly set.',
    kw: ['gyeranjjim', 'gyeranjjim recipe', 'korean steamed eggs', 'steamed egg custard', 'korean side dish'],
    why: 'The ratio is one and a half parts liquid to one part egg by volume, and it decides everything: less and you get a rubbery omelette, more and it will not set. Strain the mixture — the chalazae, those white cords attached to the yolk, will not break down and show as threads in the finished custard. Cover for the first half so the surface sets before the middle rises.',
    ing: [
      '4 eggs',
      '180 ml chicken or anchovy stock',
      '0.5 tsp fine sea salt',
      '1 tsp toasted sesame oil',
      '1 spring onion, finely sliced',
      '0.5 red chilli, finely sliced',
      '1 tsp toasted sesame seeds'
    ],
    st: [
      'Beat the eggs thoroughly with the stock and salt.',
      'Pass the mixture through a fine sieve into a small earthenware pot or heavy saucepan.',
      'Skim off any foam on the surface with a spoon.',
      'Set the pot over a medium-low heat and cover, so the eggs steam in their own moisture.',
      'Cook 8 minutes, stirring slowly with a spoon for the first 3 minutes only, until the edges set.',
      'Stop stirring and cook covered a further 5 minutes, until the centre puffs above the rim.',
      'Take off the heat and leave covered 2 minutes.',
      'Drizzle the sesame oil over and scatter the spring onion, chilli and sesame seeds.',
      'Serve immediately, while it is still standing tall.'
    ],
    tips: [
      'One and a half parts liquid to one of egg.',
      'Sieve it, or you will find white threads.',
      'Stir for the first three minutes, then leave it entirely alone.'
    ],
    pair: ['Steamed rice', 'Grilled meat', 'Kimchi'],
    store: 'Eat at once. It collapses within minutes and does not reheat.',
    nut: [135, 12, 2, 9, 0, 1, 620]
  },

  'bossam': {
    d: 'Pork belly boiled with aromatics until it slices clean, wrapped in lettuce with salted shrimp and radish. No frying, no grill, no smoke.',
    meta: 'Whole pork belly simmered with doenjang, ginger and coffee, rested, sliced and served with lettuce, ssamjang and radish salad.',
    kw: ['bossam', 'bossam recipe', 'korean boiled pork belly', 'pork lettuce wraps', 'korean pork wraps'],
    why: 'Rest the belly wrapped in foil for fifteen minutes before slicing. Straight from the pot the fat is molten and the slices fall apart under the knife; rested, the collagen firms just enough to hold. A spoonful of instant coffee in the water is a standard Korean trick — it does not taste of coffee, it takes the porkiness off and darkens the meat.',
    ing: [
      '1.2 kg pork belly, in one piece, skin on',
      '2 tbsp doenjang',
      '1 onion, halved',
      '1 whole garlic bulb, halved across',
      '8 cm ginger, sliced',
      '1 tbsp instant coffee granules',
      '4 spring onions',
      '2 bay leaves',
      '2 tbsp caster sugar',
      '2 litres water',
      '2 heads little gem lettuce, leaves separated',
      '200 g mooli radish, cut into fine matchsticks',
      '2 tbsp gochugaru',
      '1 tbsp rice vinegar',
      '1 tsp fine sea salt',
      '4 tbsp ssamjang'
    ],
    st: [
      'Bring the water to the boil with the doenjang, onion, garlic, ginger, coffee, spring onions, bay and sugar.',
      'Lower the pork belly in, skin side up, and return to a bare simmer.',
      'Cook 90 minutes, turning once, until a skewer slides through the thickest part with no resistance.',
      'Meanwhile toss the radish with the gochugaru, vinegar and salt and leave 20 minutes.',
      'Lift the pork out and wrap it tightly in foil.',
      'Rest 15 minutes.',
      'Unwrap and slice across into pieces about 5 mm thick.',
      'Arrange on a board with the lettuce, radish salad and ssamjang.',
      'Eat by laying a slice in a lettuce leaf with radish and a dab of ssamjang and folding it into a parcel.'
    ],
    tips: [
      'Rest wrapped for fifteen minutes or it will not slice.',
      'The coffee is for colour and cleanness, not flavour.',
      'Slice thin — thick bossam is heavy.'
    ],
    pair: ['Fresh oysters', 'Kimchi', 'Soju'],
    store: 'Keeps 3 days refrigerated. Steam slices for 2 minutes to reheat.',
    nut: [690, 38, 12, 55, 3, 8, 1180]
  },

  'hotteok': {
    d: 'A yeasted pancake stuffed with brown sugar and nuts, pressed flat on a griddle so the filling melts to syrup. Korean winter street food.',
    meta: 'Yeasted Korean pancakes filled with brown sugar, cinnamon and peanuts, pressed flat and fried until the filling liquefies.',
    kw: ['hotteok', 'hotteok recipe', 'korean sweet pancake', 'brown sugar pancake', 'korean street food dessert'],
    why: 'The filling turns to molten syrup at about 150C and will burn a mouth badly, so these want three or four minutes standing before anyone bites one. Press them with an oiled spatula or the bottom of a cup rather than your hand, and press once firmly rather than repeatedly — repeated pressing splits the seam and the syrup escapes into the pan.',
    ing: [
      '250 g plain flour',
      '30 g glutinous rice flour',
      '1 tsp fast-action yeast',
      '1 tbsp caster sugar',
      '0.5 tsp fine sea salt',
      '180 ml warm milk',
      '1 tbsp vegetable oil, for the dough',
      '100 g dark brown sugar',
      '2 tsp ground cinnamon',
      '50 g peanuts, roughly chopped',
      '20 g walnuts, roughly chopped',
      '4 tbsp vegetable oil, for frying'
    ],
    st: [
      'Mix the flours, yeast, caster sugar and salt, then work in the warm milk and dough oil to a soft, sticky dough.',
      'Knead in the bowl for 5 minutes, cover, and leave in a warm place for 60 minutes, until doubled.',
      'Mix the brown sugar, cinnamon, peanuts and walnuts for the filling.',
      'Knock the dough back and divide into 6 with oiled hands.',
      'Flatten each piece, put a heaped spoonful of filling in the middle, and gather the edges over to seal completely.',
      'Heat 2 tbsp of the frying oil in a heavy pan over a medium heat.',
      'Put three parcels in seam-side down and cook 1 minute.',
      'Press each flat to about 1 cm with an oiled spatula, in one firm movement, and cook 2 minutes.',
      'Turn and cook 2 minutes more, until deep gold both sides.',
      'Repeat with the rest and stand them 4 minutes before eating — the filling is molten.'
    ],
    tips: [
      'Seal the parcel completely or the syrup runs out.',
      'One firm press, not several.',
      'Four minutes standing. The filling is hotter than it looks.'
    ],
    pair: ['Hot barley tea', 'A cold winter street', 'Vanilla ice cream'],
    store: 'Best within the hour. Reheat in a dry pan for 2 minutes a side.',
    nut: [395, 8, 62, 14, 3, 26, 240],
    rest: [60, 'proving the dough']
  },

  'korean-corn-cheese': {
    d: 'Sweetcorn bound with mayonnaise under a lid of grilled mozzarella. A side dish that arrives bubbling and never comes back to the kitchen.',
    meta: 'Sweetcorn mixed with mayonnaise and spring onion, topped with mozzarella and grilled until browned and bubbling.',
    kw: ['korean corn cheese', 'corn cheese recipe', 'korean cheesy corn', 'bar snack corn cheese', 'grilled corn cheese'],
    why: 'Drain the sweetcorn properly and then dry it in the pan for two minutes before anything else goes in. Tinned corn carries far more water than it looks, and wet corn makes the mayonnaise split under the grill so you get an oily pool under the cheese. Use low-moisture mozzarella for the same reason — fresh mozzarella weeps.',
    ing: [
      '600 g tinned sweetcorn, drained',
      '4 tbsp mayonnaise',
      '2 tbsp unsalted butter',
      '1 tbsp caster sugar',
      '0.5 tsp fine sea salt',
      '0.25 tsp ground black pepper',
      '3 spring onions, sliced',
      '0.5 red pepper, finely diced',
      '200 g low-moisture mozzarella, grated'
    ],
    st: [
      'Heat the grill to its highest setting.',
      'Melt the butter in an ovenproof frying pan over a medium heat.',
      'Add the drained sweetcorn and cook 2 minutes, stirring, to drive off the water.',
      'Add the red pepper and cook 2 minutes.',
      'Take off the heat and stir in the mayonnaise, sugar, salt, pepper and two thirds of the spring onions.',
      'Level the surface and scatter the mozzarella evenly over the top.',
      'Grill 5 minutes, until the cheese is melted, blistered and brown in patches.',
      'Scatter the remaining spring onions over.',
      'Serve straight from the pan while the cheese still pulls.'
    ],
    tips: [
      'Dry the corn in the pan first or the mayonnaise splits.',
      'Low-moisture mozzarella, not the kind in water.',
      'Straight from the pan — it sets fast.'
    ],
    pair: ['Korean fried chicken', 'Cold beer', 'Kimchi'],
    store: 'Best immediately. Keeps 2 days refrigerated; re-grill to bring the cheese back.',
    nut: [420, 16, 34, 25, 4, 10, 860]
  },

  'tonkatsu': {
    d: 'A pork loin cutlet in panko, fried until the crust is pale gold and shattering. The cutlet behind katsu curry, done for its own sake.',
    meta: 'Pork loin scored, breaded in flour, egg and panko and deep fried at 170C, rested and sliced, with tonkatsu sauce and shredded cabbage.',
    kw: ['tonkatsu', 'tonkatsu recipe', 'japanese pork cutlet', 'panko pork', 'katsu cutlet'],
    why: 'Score through the line of fat and sinew that runs round the edge of a pork loin, every two centimetres. Left whole it contracts in the oil and curls the cutlet into a dome, so the middle never touches the fat and cooks unevenly. Fry at 170C, which is lower than instinct says: panko browns fast and pork loin this thick needs six minutes to come through.',
    ing: [
      '4 pork loin steaks, about 180 g each and 2 cm thick',
      '1 tsp fine sea salt',
      '0.5 tsp ground white pepper',
      '60 g plain flour',
      '2 eggs, beaten',
      '120 g panko breadcrumbs',
      '700 ml vegetable oil, for frying',
      '0.25 white cabbage, very finely shredded',
      '6 tbsp tonkatsu sauce',
      '1 tsp toasted sesame seeds',
      '1 lemon, in wedges'
    ],
    st: [
      'Score through the fat and sinew round the edge of each steak at 2 cm intervals.',
      'Bat the steaks lightly to an even thickness and season both sides with the salt and pepper.',
      'Soak the shredded cabbage in iced water for 10 minutes, then spin or pat dry.',
      'Coat each steak in flour, then beaten egg, then panko, pressing the crumbs on firmly.',
      'Heat the oil to 170C.',
      'Fry two cutlets for 6 minutes, turning once, until the crust is pale gold.',
      'Drain on a rack, standing them on edge rather than flat.',
      'Repeat with the other two, then rest all four for 4 minutes.',
      'Slice each cutlet across into 2 cm strips, keeping the shape.',
      'Serve with the cabbage, tonkatsu sauce, sesame seeds and lemon.'
    ],
    tips: [
      'Score the edge or the cutlet curls.',
      '170C, not hotter — the crust will be ahead of the meat otherwise.',
      'Rest on a rack standing on edge, so the underside stays crisp.'
    ],
    pair: ['Shredded cabbage with lemon', 'Miso soup', 'Steamed rice'],
    store: 'Eat fresh. Reheat in a 200C oven for 8 minutes rather than a microwave.',
    nut: [720, 45, 42, 40, 3, 8, 1140]
  },

  'onigiri': {
    d: 'Rice pressed round a filling and wrapped in a band of nori. Japan\'s packed lunch, and the reason convenience stores there are worth visiting.',
    meta: 'Seasoned short-grain rice shaped into triangles around salmon or tuna filling and wrapped in toasted nori.',
    kw: ['onigiri', 'onigiri recipe', 'japanese rice balls', 'rice triangles', 'japanese packed lunch'],
    why: 'Shape them while the rice is hot enough to be uncomfortable — around 60C. Cool rice has lost the surface starch that makes the grains hold together and an onigiri made from it falls apart in the hand. Wet your palms and salt them; the salt seasons the outside, which is the only part that gets any, and stops the rice sticking.',
    ing: [
      '400 g short-grain Japanese rice',
      '480 ml water',
      '1 tsp fine sea salt, for shaping',
      '150 g hot-smoked salmon, flaked',
      '2 tbsp Japanese mayonnaise',
      '1 tsp light soy sauce',
      '2 tbsp toasted sesame seeds',
      '3 sheets toasted nori, each cut into 4 bands',
      '2 tbsp water, for wetting hands'
    ],
    st: [
      'Rinse the rice in several changes of water until it runs almost clear.',
      'Cook it with the 480 ml water, covered, for 12 minutes, then rest off the heat 10 minutes.',
      'Mix the flaked salmon with the mayonnaise and soy sauce.',
      'Tip the rice into a wide bowl and fold in the sesame seeds. Let it cool to about 60C — hot but just handleable.',
      'Wet your palms with the water and rub a pinch of the shaping salt over them.',
      'Take a handful of rice, flatten it, put a spoonful of filling in the middle and close the rice over it.',
      'Press into a triangle by cupping one hand into a V and turning the rice against it, three or four turns.',
      'Wrap a band of nori round the base of each.',
      'Repeat, re-wetting and salting your hands each time.',
      'Serve within a few hours, at room temperature.'
    ],
    tips: [
      'Shape hot, around sixty degrees.',
      'Wet, salted palms every single time.',
      'Wrap the nori just before eating if you want it crisp.'
    ],
    pair: ['Miso soup', 'Green tea', 'Pickled ginger'],
    store: 'Best the day they are made, at room temperature. Refrigeration makes the rice hard.',
    nut: [395, 15, 66, 8, 2, 2, 690]
  },

  'shoyu-ramen': {
    d: 'A clear chicken broth seasoned with a soy tare, with chashu pork, a marinated egg and thin curled noodles. The oldest ramen there is.',
    meta: 'Clear chicken and kombu broth with a soy tare, rolled chashu pork, marinated egg and thin ramen noodles.',
    kw: ['shoyu ramen', 'shoyu ramen recipe', 'soy sauce ramen', 'japanese ramen broth', 'homemade ramen'],
    why: 'Shoyu ramen is a clear soup and clarity is the whole discipline: it must never boil once the bones are in. A bare shiver at the surface for ninety minutes gives a broth you can see the bottom of; one hard boil emulsifies the fat and it turns cloudy and cannot be brought back. Skim in the first ten minutes, when the grey scum rises.',
    ing: [
      '1.5 kg chicken wings and carcass',
      '2.5 litres cold water',
      '1 piece dried kombu, about 10 cm',
      '20 g dried shiitake mushrooms',
      '1 onion, halved',
      '6 cm ginger, sliced',
      '6 spring onions, halved',
      '120 ml light soy sauce',
      '2 tbsp mirin',
      '2 tbsp sake',
      '1 tsp caster sugar',
      '400 g pork belly, rolled and tied',
      '4 eggs',
      '400 g thin ramen noodles',
      '2 sheets toasted nori',
      '4 spring onions, finely sliced'
    ],
    st: [
      'Cover the chicken bones with cold water in a large pan and bring slowly to a bare simmer.',
      'Skim the grey scum off for the first 10 minutes, until the surface runs clear.',
      'Add the kombu, shiitake, onion, ginger and halved spring onions.',
      'Hold at a bare shiver — never a boil — for 90 minutes. Lift the kombu out after 20 minutes.',
      'Meanwhile simmer the rolled pork belly in a little of the broth with 2 tbsp of the soy for 60 minutes, then cool and slice.',
      'Boil the eggs 6 minutes 30 seconds, cool in iced water, peel, and steep in the remaining soy, mirin, sake and sugar for 30 minutes.',
      'Strain the broth through a fine sieve. Do not press the solids.',
      'Divide the remaining soy tare between four bowls and ladle the hot broth over.',
      'Boil the noodles as the packet directs, drain hard, and lift into the bowls.',
      'Top with chashu slices, a halved egg, nori and sliced spring onion.'
    ],
    tips: [
      'Never let it boil. That is the entire technique.',
      'Skim hard in the first ten minutes.',
      'Strain without pressing, or you undo the clarity.'
    ],
    pair: ['Gyoza', 'Pickled bamboo shoots', 'Cold beer'],
    store: 'The broth keeps 4 days refrigerated and freezes 3 months. Boil noodles to order.',
    nut: [745, 42, 78, 29, 4, 7, 2100],
    rest: [90, 'simmering the broth']
  },

  'ebi-fry': {
    d: 'Panko prawns fried straight rather than curled, served with tartare. A Japanese diner classic and the reason for the cuts along the belly.',
    meta: 'King prawns scored along the belly to keep them straight, breaded in panko and deep fried, served with tartare sauce.',
    kw: ['ebi fry', 'ebi fry recipe', 'japanese fried prawns', 'panko prawns', 'japanese tartare sauce'],
    why: 'Prawns curl in hot oil because the muscle on the belly side contracts more than the back. Three or four shallow cuts across the underside sever that muscle, and then a firm press to straighten before breading — after which they stay straight through the fryer. It is the difference between a prawn that looks like a restaurant made it and one that looks like a comma.',
    ing: [
      '16 raw king prawns, peeled with tails on',
      '0.5 tsp fine sea salt',
      '0.25 tsp ground white pepper',
      '60 g plain flour',
      '2 eggs, beaten',
      '120 g panko breadcrumbs',
      '600 ml vegetable oil, for frying',
      '6 tbsp Japanese mayonnaise',
      '1 hard-boiled egg, finely chopped',
      '2 tbsp gherkins, finely chopped',
      '1 tbsp capers, chopped',
      '1 tbsp finely chopped onion',
      '1 tsp lemon juice',
      '1 lemon, in wedges'
    ],
    st: [
      'Devein the prawns and make 3 shallow cuts across the belly of each.',
      'Hold each prawn belly-down and press firmly along its length to straighten it. You will hear the fibres give.',
      'Season with the salt and pepper.',
      'Coat in flour, then egg, then panko, pressing the crumbs on.',
      'Mix the mayonnaise, chopped egg, gherkins, capers, onion and lemon juice for the tartare.',
      'Heat the oil to 180C.',
      'Fry the prawns in two batches for 2 minutes 30 seconds each, until pale gold.',
      'Drain on a rack.',
      'Serve at once with the tartare and lemon wedges.'
    ],
    tips: [
      'Three cuts and a firm press, or they curl.',
      '180C and two and a half minutes — prawns need very little.',
      'Tails on, for something to hold.'
    ],
    pair: ['Shredded cabbage', 'Steamed rice', 'Miso soup'],
    store: 'Eat immediately. The coating softens within twenty minutes.',
    nut: [510, 28, 38, 27, 2, 4, 1050]
  },

  'japanese-curry-roux': {
    d: 'Flour and butter cooked slowly to a nutty brown and spiced. Make it once and the shop-bought blocks stop being necessary.',
    meta: 'A homemade Japanese curry roux of butter, flour, curry powder and garam masala cooked to a nut-brown paste, then made into sauce.',
    kw: ['japanese curry roux', 'homemade curry roux', 'japanese curry recipe', 'curry roux from scratch', 'katsu curry sauce'],
    why: 'The roux is cooked for twenty minutes over a low heat, which is far longer than a French one, and the colour goes from pale to the shade of peanut butter. That browning is where Japanese curry gets its particular round, almost sweet depth. Take it further and it turns bitter; stop early and the sauce tastes of raw flour, which is the fault of nearly every homemade version.',
    ing: [
      '80 g unsalted butter',
      '80 g plain flour',
      '2 tbsp mild curry powder',
      '1 tsp garam masala',
      '0.5 tsp ground turmeric',
      '1 tbsp tomato purée',
      '1 tbsp honey',
      '1 tbsp light soy sauce',
      '1 onion, finely sliced',
      '1 tbsp vegetable oil',
      '1 carrot, in 2 cm chunks',
      '2 potatoes, in 3 cm chunks',
      '900 ml vegetable stock',
      '1 apple, grated',
      '1 tsp fine sea salt'
    ],
    st: [
      'Melt the butter in a heavy pan over a low heat and stir in the flour.',
      'Cook 20 minutes, stirring often, until the roux is the colour of peanut butter and smells nutty.',
      'Stir in the curry powder, garam masala and turmeric and cook 2 minutes.',
      'Take off the heat and stir in the tomato purée, honey and soy sauce. Set the roux aside.',
      'In a second pan, heat the oil and fry the onion for 8 minutes, until golden.',
      'Add the carrot and potato and cook 2 minutes.',
      'Pour in the stock, add the grated apple and salt, and simmer 15 minutes until the potato is tender.',
      'Ladle a little hot stock into the roux and whisk smooth, then stir the loosened roux back into the pan.',
      'Simmer 5 minutes, stirring, until thick and glossy.',
      'Taste, correct the salt, and serve over rice.'
    ],
    tips: [
      'Twenty minutes for the roux. Peanut-butter colour is the target.',
      'Loosen the roux with hot stock before it goes into the pan.',
      'The grated apple is standard and it is what rounds the edges.'
    ],
    pair: ['Steamed rice', 'Tonkatsu', 'Fukujinzuke pickles'],
    store: 'The roux keeps 3 weeks refrigerated. The finished curry keeps 3 days and freezes 2 months.',
    nut: [385, 6, 48, 19, 5, 12, 890]
  },

  'panang-curry': {
    d: 'A thick, sweet red curry finished with kaffir lime and crushed peanuts. Drier than the other Thai curries, and richer.',
    meta: 'Thai panang curry of beef or chicken simmered in a thick coconut and peanut curry paste, finished with kaffir lime leaf.',
    kw: ['panang curry', 'panang curry recipe', 'thai panang', 'penang curry', 'thai peanut curry'],
    why: 'Crack the coconut cream first: fry the thick top of the tin, without the watery part, until the oil separates and pools. Then fry the paste in that oil for two minutes. Nearly every home version tips paste and liquid in together and produces a thin curry with a flat, raw edge — the separated oil is what carries the spice and gives panang its gloss.',
    ing: [
      '600 g beef rump or chicken thigh, thinly sliced',
      '400 ml tin coconut milk, unshaken',
      '3 tbsp panang curry paste',
      '3 tbsp roasted peanuts, finely crushed',
      '2 tbsp fish sauce',
      '1 tbsp palm sugar',
      '6 kaffir lime leaves, 4 whole and 2 finely shredded',
      '1 red pepper, thinly sliced',
      '100 ml water',
      '1 red chilli, sliced',
      '10 Thai basil leaves'
    ],
    st: [
      'Open the tin without shaking it and spoon the thick cream from the top into a wok.',
      'Fry over a medium heat for 4 minutes, until it separates and the oil pools clear at the edges.',
      'Add the curry paste and fry 2 minutes, until dark and fragrant.',
      'Stir in the crushed peanuts and cook 1 minute.',
      'Add the meat and turn it in the paste for 3 minutes.',
      'Pour in the rest of the coconut milk and the water, add the whole lime leaves, and simmer 10 minutes.',
      'Add the fish sauce, palm sugar and red pepper and simmer 4 minutes.',
      'Taste and balance: it should be salty, sweet and rich in that order.',
      'Scatter the shredded lime leaf, sliced chilli and basil over and serve.'
    ],
    tips: [
      'Crack the cream before the paste goes in.',
      'Panang is thick — do not thin it out with stock.',
      'Shredded lime leaf at the end, not cooked in.'
    ],
    pair: ['Jasmine rice', 'Som tam', 'Thai iced tea'],
    store: 'Keeps 3 days refrigerated and improves. Freezes 2 months.',
    nut: [545, 36, 16, 39, 3, 9, 1290]
  },

  'thai-yellow-curry': {
    d: 'The mildest of the Thai curries, yellow with turmeric and thick with potato. The one to cook for people who say they do not like heat.',
    meta: 'Thai yellow curry of chicken and potato simmered in coconut milk with turmeric-based curry paste and fish sauce.',
    kw: ['thai yellow curry', 'yellow curry recipe', 'gaeng garee', 'thai chicken curry', 'mild thai curry'],
    why: 'Yellow curry has Indian ancestry — turmeric, cumin and coriander seed came through the Muslim trading routes — which is why it takes potato happily where a green curry does not. Cut the potato in three-centimetre chunks and give it fifteen minutes: smaller and it disintegrates into the sauce and thickens it to paste.',
    ing: [
      '600 g chicken thigh, in 3 cm pieces',
      '400 ml tin coconut milk, unshaken',
      '3 tbsp yellow curry paste',
      '2 potatoes, in 3 cm chunks',
      '1 onion, in petals',
      '250 ml chicken stock',
      '2 tbsp fish sauce',
      '1 tbsp palm sugar',
      '0.5 tsp ground turmeric',
      '1 tbsp lime juice',
      '2 tbsp crispy fried shallots',
      '2 tbsp coriander leaves'
    ],
    st: [
      'Spoon the thick cream from the top of the tin into a wide pan.',
      'Fry over a medium heat for 4 minutes, until the oil separates.',
      'Add the curry paste and turmeric and fry 2 minutes.',
      'Add the chicken and turn it in the paste for 4 minutes.',
      'Pour in the remaining coconut milk and the stock and bring to a simmer.',
      'Add the potato and onion and simmer 15 minutes, until the potato is tender but still holding its shape.',
      'Stir in the fish sauce and palm sugar and simmer 3 minutes.',
      'Take off the heat and stir in the lime juice.',
      'Scatter the fried shallots and coriander over and serve.'
    ],
    tips: [
      'Three-centimetre potato, or it dissolves.',
      'Crack the coconut cream before the paste.',
      'Lime juice off the heat, or it turns bitter.'
    ],
    pair: ['Jasmine rice', 'Cucumber relish', 'Roti'],
    store: 'Keeps 3 days refrigerated. The potato softens further but holds.',
    nut: [520, 34, 34, 28, 4, 10, 1180]
  },

  'moo-ping': {
    d: 'Pork shoulder marinated in coconut milk and white pepper, threaded on bamboo and grilled over charcoal. Bangkok breakfast, eaten with sticky rice.',
    meta: 'Thai grilled pork skewers marinated in coconut milk, garlic, white pepper and palm sugar, basted while grilling.',
    kw: ['moo ping', 'moo ping recipe', 'thai pork skewers', 'thai grilled pork', 'street food skewers'],
    why: 'The coconut milk in the marinade is not for flavour so much as for basting — it keeps the surface from drying while the sugar caramelises, and it is why moo ping comes off the grill glossy rather than leathery. Baste every time you turn them. White pepper rather than black is the Thai signature and tastes distinctly different: floral and hot rather than woody.',
    ing: [
      '700 g pork shoulder, in thin 4 cm strips',
      '150 ml coconut milk',
      '6 garlic cloves, crushed',
      '2 coriander roots, or 4 tbsp coriander stalks, pounded',
      '2 tsp ground white pepper',
      '3 tbsp light soy sauce',
      '1 tbsp oyster sauce',
      '3 tbsp palm sugar',
      '1 tbsp fish sauce',
      '16 bamboo skewers, soaked 30 minutes',
      '4 tbsp coconut milk, for basting'
    ],
    st: [
      'Pound the garlic, coriander root and white pepper to a paste in a mortar.',
      'Mix the paste with the coconut milk, soy sauce, oyster sauce, palm sugar and fish sauce.',
      'Turn the pork strips through the marinade and refrigerate 4 hours.',
      'Thread the strips onto the soaked skewers, weaving them so the meat lies flat.',
      'Heat a charcoal grill or a griddle pan until very hot.',
      'Grill 12 minutes, turning every 2 minutes.',
      'Brush with the basting coconut milk at every turn.',
      'They are ready when the edges char and the surface is glossy.',
      'Rest 2 minutes and serve with sticky rice.'
    ],
    tips: [
      'Baste at every turn — that is what makes them glossy.',
      'White pepper, not black. It is a different flavour.',
      'Weave the meat so it lies flat and cooks evenly.'
    ],
    pair: ['Sticky rice', 'Nam jim jaew', 'Thai iced tea'],
    store: 'Marinated raw pork freezes 2 months. Cooked skewers keep 2 days.',
    nut: [420, 35, 16, 25, 1, 13, 1180],
    rest: [270, 'marinating']
  },

  'pad-woon-sen': {
    d: 'Glass noodles tossed with egg, prawns and vegetables in a light soy dressing. Twenty-seven minutes and lighter than pad thai.',
    meta: 'Thai stir-fried mung bean glass noodles with prawns, egg and vegetables in a soy, oyster and fish sauce dressing.',
    kw: ['pad woon sen', 'pad woon sen recipe', 'thai glass noodles', 'stir fried glass noodles', 'mung bean noodle stir fry'],
    why: 'Soak the glass noodles in warm water, not boiling, and stop while they still have a firm core. They finish in the wok by absorbing the sauce, and noodles that arrive fully soft turn to jelly and clump into one lump. Cut them through with scissors once soaked, or you will be fighting a single continuous noodle for the whole stir-fry.',
    ing: [
      '150 g mung bean glass noodles',
      '200 g raw prawns, peeled',
      '2 eggs, beaten',
      '3 tbsp vegetable oil',
      '4 garlic cloves, finely chopped',
      '1 onion, sliced',
      '1 carrot, in fine matchsticks',
      '100 g white cabbage, shredded',
      '4 spring onions, in 4 cm lengths',
      '2 tbsp light soy sauce',
      '1 tbsp oyster sauce',
      '1 tbsp fish sauce',
      '1 tsp caster sugar',
      '0.5 tsp ground white pepper',
      '4 tbsp water'
    ],
    st: [
      'Soak the glass noodles in warm water for 8 minutes, until pliable but with a firm core. Drain and cut through with scissors.',
      'Mix the soy, oyster sauce, fish sauce, sugar, white pepper and water in a cup.',
      'Heat 1 tbsp of the oil in a wok and scramble the eggs for 45 seconds until just set. Lift out.',
      'Add the remaining oil and fry the garlic for 20 seconds.',
      'Add the prawns and cook 90 seconds, until pink. Lift out with the egg.',
      'Add the onion, carrot and cabbage and stir-fry 2 minutes over a high heat.',
      'Add the noodles and the sauce and toss for 3 minutes, until the noodles have taken up the liquid and turned clear.',
      'Return the prawns and egg and add the spring onions.',
      'Toss for 1 minute more and serve at once.'
    ],
    tips: [
      'Warm water, firm core. They finish in the wok.',
      'Scissors through the noodles after soaking.',
      'Everything out and back in, so nothing overcooks.'
    ],
    pair: ['Nam pla prik', 'Lime wedges', 'Thai iced tea'],
    store: 'Keeps 1 day refrigerated. The noodles soften; eat fresh if you can.',
    nut: [430, 22, 58, 13, 3, 7, 1420]
  },

  'crying-tiger': {
    d: 'Grilled beef sliced across the grain and served with nam jim jaew, a roasted rice and chilli dipping sauce. The sauce is the dish.',
    meta: 'Thai grilled steak rested and sliced, served with nam jim jaew of toasted rice powder, chilli, lime and fish sauce.',
    kw: ['crying tiger', 'crying tiger beef', 'seua rong hai', 'nam jim jaew', 'thai grilled beef'],
    why: 'Toasted rice powder is what makes nam jim jaew taste Thai rather than merely hot and sour. Raw sticky rice toasted dry until it is the colour of straw and then pounded gives a nutty, slightly gritty body that thickens the sauce without any fat in it. It takes five minutes and nothing else does the same job.',
    ing: [
      '700 g sirloin or rump steak, in one or two thick pieces',
      '1 tbsp vegetable oil',
      '1 tsp fine sea salt',
      '1 tsp ground black pepper',
      '2 tbsp uncooked sticky rice',
      '3 tbsp fish sauce',
      '3 tbsp lime juice',
      '1 tbsp tamarind paste',
      '1 tbsp palm sugar',
      '1 tbsp gochugaru or Thai roasted chilli flakes',
      '3 shallots, finely sliced',
      '3 tbsp chopped coriander leaves',
      '2 spring onions, finely sliced'
    ],
    st: [
      'Toast the sticky rice in a dry pan over a medium heat for 5 minutes, shaking, until it is the colour of straw.',
      'Cool, then pound to a coarse powder in a mortar.',
      'Whisk the fish sauce, lime juice, tamarind, palm sugar and chilli flakes together.',
      'Stir in the toasted rice powder, shallots, coriander and spring onions. Set the sauce aside.',
      'Rub the steak with the oil, salt and pepper.',
      'Heat a griddle or charcoal grill until it smokes.',
      'Grill 6 minutes for medium rare on a 3 cm steak, turning once.',
      'Rest the meat 8 minutes on a warm plate.',
      'Slice thinly across the grain.',
      'Arrange on a plate with the nam jim jaew alongside for dipping.'
    ],
    tips: [
      'Toast and pound the rice. It is what the sauce is built on.',
      'Rest eight minutes, then slice across the grain.',
      'Make the sauce first so the flavours have time to meet.'
    ],
    pair: ['Sticky rice', 'Som tam', 'Cold Thai beer'],
    store: 'The sauce keeps 3 days refrigerated. Cooked beef is good cold the next day.',
    nut: [395, 42, 12, 19, 1, 8, 1520]
  },

  'banh-xeo': {
    d: 'A rice flour crêpe made yellow with turmeric, filled with pork and prawn and folded over beansprouts. It is torn up and wrapped in lettuce to eat.',
    meta: 'Vietnamese crisp turmeric rice flour crêpes filled with pork, prawn and beansprouts, eaten wrapped in lettuce with nuoc cham.',
    kw: ['banh xeo', 'banh xeo recipe', 'vietnamese pancake', 'crispy vietnamese crepe', 'turmeric rice pancake'],
    why: 'The batter must be thin as single cream and the pan properly hot, and you pour it in and immediately tilt to spread — hesitate and it sets in a thick patch in the middle. The crispness comes from a generous amount of oil round the edge and from leaving it alone: no poking, no lifting to check, five minutes uncovered and then a lid for one.',
    ing: [
      '200 g rice flour',
      '2 tbsp cornflour',
      '1 tsp ground turmeric',
      '0.5 tsp fine sea salt',
      '400 ml water',
      '150 ml coconut milk',
      '3 spring onions, finely sliced',
      '200 g pork belly, thinly sliced',
      '200 g raw prawns, peeled',
      '1 onion, thinly sliced',
      '200 g beansprouts',
      '6 tbsp vegetable oil',
      '2 heads little gem lettuce, leaves separated',
      '1 bunch mint',
      '1 bunch coriander',
      '6 tbsp nuoc cham'
    ],
    st: [
      'Whisk the rice flour, cornflour, turmeric and salt with the water and coconut milk to a batter the thickness of single cream.',
      'Stir in the spring onions and rest the batter 30 minutes.',
      'Heat 1 tbsp of the oil in a 24 cm frying pan over a high heat.',
      'Fry a quarter of the pork for 90 seconds, then a quarter of the prawns and onion for 1 minute.',
      'Stir the batter and pour a ladleful in, tilting the pan at once to spread it thin.',
      'Drizzle a little more oil round the rim and cook 5 minutes, uncovered, without touching it.',
      'Pile a quarter of the beansprouts on one half, cover, and cook 1 minute.',
      'Fold the crêpe over the beansprouts and slide it out.',
      'Repeat three more times.',
      'Tear pieces off, wrap them in lettuce with the herbs, and dip in nuoc cham.'
    ],
    tips: [
      'Batter as thin as single cream, and tilt the moment it goes in.',
      'Oil round the rim is what crisps the edge.',
      'Do not touch it for five minutes.'
    ],
    pair: ['Nuoc cham', 'Pickled carrot and daikon', 'Iced Vietnamese coffee'],
    store: 'Eat immediately. They soften within minutes of folding.',
    nut: [560, 24, 62, 25, 4, 6, 1120]
  },

  'pho-ga': {
    d: 'Chicken pho: a clear broth of charred ginger and onion with poached chicken and flat rice noodles. Lighter than the beef, and quicker.',
    meta: 'Vietnamese chicken noodle soup with a clear broth of charred ginger, onion and toasted spices, poached chicken and rice noodles.',
    kw: ['pho ga', 'pho ga recipe', 'vietnamese chicken noodle soup', 'chicken pho', 'pho broth'],
    why: 'Char the ginger and onion black in patches directly over a flame before they go into the pot. It is not decoration: the burnt sugars give the broth its particular smoky sweetness, and pho made with raw aromatics tastes thin and vegetal in a way people notice without being able to name. Blanch the chicken first and throw that water away — it is where the scum comes from.',
    ing: [
      '1 whole chicken, about 1.6 kg',
      '3 litres cold water',
      '2 onions, halved and left unpeeled',
      '10 cm ginger, halved lengthways',
      '4 star anise',
      '1 cinnamon stick',
      '4 cloves',
      '1 tbsp coriander seeds',
      '2 tbsp fish sauce',
      '1 tbsp caster sugar',
      '2 tsp fine sea salt',
      '400 g flat rice noodles',
      '4 spring onions, finely sliced',
      '1 bunch coriander',
      '1 bunch Thai basil',
      '200 g beansprouts',
      '2 limes, in wedges',
      '2 red chillies, sliced'
    ],
    st: [
      'Cover the chicken with water in a large pan, bring to the boil, boil 3 minutes, then drain and rinse the bird and the pan.',
      'Char the onion and ginger halves directly over a gas flame or under a hot grill for 6 minutes, until blackened in patches.',
      'Toast the star anise, cinnamon, cloves and coriander seeds in a dry pan for 90 seconds.',
      'Return the chicken to the clean pan with the 3 litres of cold water, the charred aromatics and the toasted spices.',
      'Bring to a bare simmer and cook 45 minutes, skimming twice. Do not let it boil.',
      'Lift the chicken out, cool it enough to handle, and shred the meat. Return the carcass to the pot.',
      'Simmer the broth a further 30 minutes, then strain through a fine sieve.',
      'Season with the fish sauce, sugar and salt.',
      'Soak or boil the noodles as the packet directs and divide between bowls with the shredded chicken.',
      'Ladle the hot broth over and serve with the herbs, beansprouts, lime and chilli on the side.'
    ],
    tips: [
      'Blanch and discard the first water — it takes the scum with it.',
      'Char the aromatics black in patches.',
      'A bare simmer keeps it clear.'
    ],
    pair: ['Hoisin and sriracha, on the side', 'Fried dough sticks', 'Iced jasmine tea'],
    store: 'The broth keeps 4 days refrigerated and freezes 3 months. Assemble bowls to order.',
    nut: [545, 42, 68, 12, 3, 6, 1680]
  },

  'bun-thit-nuong': {
    d: 'Grilled lemongrass pork over cold rice vermicelli with herbs, pickle and nuoc cham poured over. A hot and cold bowl at once.',
    meta: 'Vietnamese grilled lemongrass pork served over cold rice vermicelli with herbs, pickled carrot and nuoc cham.',
    kw: ['bun thit nuong', 'bun thit nuong recipe', 'vietnamese grilled pork noodles', 'lemongrass pork', 'vermicelli bowl'],
    why: 'The noodles are dressed with nothing and served at room temperature; all the seasoning arrives as nuoc cham poured over at the table. That is deliberate — the contrast between the hot charred pork, the cool noodles and the sharp dressing is the dish. Rinse the cooked vermicelli under cold water and drain it hard, or the bowl turns into a wet clump.',
    ing: [
      '600 g pork shoulder, thinly sliced',
      '3 lemongrass stalks, tender part only, finely chopped',
      '6 garlic cloves, crushed',
      '3 shallots, finely chopped',
      '3 tbsp fish sauce',
      '2 tbsp caster sugar',
      '1 tbsp light soy sauce',
      '1 tbsp vegetable oil',
      '0.5 tsp ground black pepper',
      '300 g rice vermicelli',
      '1 carrot, in fine matchsticks',
      '1 small mooli, in fine matchsticks',
      '3 tbsp rice vinegar',
      '1 tbsp caster sugar, for the pickle',
      '1 bunch mint',
      '1 bunch coriander',
      '1 cucumber, in matchsticks',
      '4 tbsp roasted peanuts, crushed',
      '8 tbsp nuoc cham'
    ],
    st: [
      'Pound the lemongrass, garlic and shallots to a paste.',
      'Mix with the fish sauce, sugar, soy, oil and pepper, and turn the pork through it.',
      'Marinate 2 hours refrigerated.',
      'Toss the carrot and mooli with the vinegar and pickle sugar and leave 30 minutes.',
      'Boil the vermicelli as the packet directs, rinse under cold water and drain hard.',
      'Heat a griddle or charcoal grill until it smokes.',
      'Grill the pork in a single layer for 6 minutes, turning once, until charred at the edges.',
      'Divide the noodles between four bowls.',
      'Top with the hot pork, the drained pickle, cucumber, herbs and crushed peanuts.',
      'Pour 2 tbsp of nuoc cham over each bowl at the table and toss before eating.'
    ],
    tips: [
      'Noodles cold and drained hard.',
      'Char the pork properly — the black edges are the flavour.',
      'Dress at the table, not in the kitchen.'
    ],
    pair: ['Nuoc cham', 'Vietnamese iced coffee', 'Fresh spring rolls'],
    store: 'Components keep 2 days refrigerated separately. Assemble to order.',
    nut: [640, 38, 74, 21, 4, 14, 1560],
    rest: [150, 'marinating the pork']
  },

  'bo-kho': {
    d: 'Beef shin stewed with lemongrass, star anise and annatto until it falls apart, with carrots cut thick. Eaten with bread or noodles.',
    meta: 'Vietnamese beef stew of shin simmered two hours with lemongrass, star anise, annatto oil and tomato, with carrots.',
    kw: ['bo kho', 'bo kho recipe', 'vietnamese beef stew', 'lemongrass beef stew', 'vietnamese curry'],
    why: 'Annatto seeds fried in oil for one minute and then strained out give bo kho its red colour without any heat or flavour of their own. It is the reason a proper bowl looks the way it does, and paprika is not a substitute — it muddies the broth. Beef shin, not braising steak: the connective tissue is what makes the sauce sticky rather than watery.',
    ing: [
      '1.2 kg beef shin, in 5 cm chunks',
      '3 tbsp vegetable oil',
      '1 tbsp annatto seeds',
      '3 lemongrass stalks, bruised and halved',
      '2 onions, sliced',
      '6 garlic cloves, crushed',
      '5 cm ginger, sliced',
      '3 tbsp tomato purée',
      '3 star anise',
      '1 cinnamon stick',
      '2 bay leaves',
      '3 tbsp fish sauce',
      '1 tbsp caster sugar',
      '1.2 litres beef stock',
      '4 carrots, in 4 cm chunks',
      '1.5 tsp fine sea salt',
      '1 bunch Thai basil',
      '1 lime, in wedges'
    ],
    st: [
      'Heat the oil in a heavy pan and fry the annatto seeds for 1 minute, until the oil turns deep orange. Strain the seeds out and discard them.',
      'Brown the beef in the annatto oil in three batches, 4 minutes a batch. Lift out.',
      'Add the onions and fry 8 minutes, until golden.',
      'Stir in the garlic, ginger and tomato purée and cook 2 minutes.',
      'Return the beef with the lemongrass, star anise, cinnamon, bay, fish sauce, sugar and salt.',
      'Pour in the stock, bring to a simmer, cover, and cook on the lowest heat for 90 minutes.',
      'Add the carrots and simmer uncovered 30 minutes more, until the beef pulls apart and the sauce coats a spoon.',
      'Fish out the lemongrass, star anise, cinnamon and bay.',
      'Taste and correct the salt.',
      'Serve with Thai basil torn over and lime wedges alongside.'
    ],
    tips: [
      'Annatto for colour — strain the seeds out after a minute.',
      'Beef shin, not braising steak.',
      'Carrots in for the last thirty minutes only.'
    ],
    pair: ['A crusty baguette', 'Flat rice noodles', 'Iced Vietnamese coffee'],
    store: 'Better the next day. Keeps 4 days refrigerated, freezes 3 months.',
    nut: [545, 48, 22, 29, 4, 10, 1420]
  },

  'vegetable-stir-fry': {
    d: 'Whatever is in the fridge, cut evenly and cooked hard for four minutes in a sauce that clings. Twenty-five minutes and the noodles are optional.',
    meta: 'Mixed vegetables stir-fried over a high heat in a soy, garlic and ginger sauce thickened with a cornflour slurry.',
    kw: ['vegetable stir fry', 'vegetable stir fry recipe', 'easy stir fry sauce', 'quick vegetable stir fry', 'stir fry vegetables'],
    why: 'Cut everything to a thickness that matches how long it takes to cook, not to look tidy: broccoli in thin florets, carrots in matchsticks, peppers in wide strips. Then add them in order of hardness, thirty to sixty seconds apart. A stir-fry that goes in all at once is either raw carrot or grey broccoli, and usually both.',
    ing: [
      '200 g broccoli, in thin florets',
      '2 carrots, in fine matchsticks',
      '1 red pepper, in wide strips',
      '150 g mangetout',
      '150 g baby corn, halved lengthways',
      '4 spring onions, in 4 cm lengths',
      '3 tbsp vegetable oil',
      '5 garlic cloves, finely chopped',
      '2.5 cm ginger, finely chopped',
      '3 tbsp light soy sauce',
      '1 tbsp rice vinegar',
      '1 tbsp caster sugar',
      '1 tsp toasted sesame oil',
      '2 tsp cornflour mixed with 5 tbsp water',
      '1 tbsp toasted sesame seeds'
    ],
    st: [
      'Mix the soy, vinegar, sugar and sesame oil in a cup and set it by the hob.',
      'Heat the oil in a wok until it just begins to smoke.',
      'Fry the garlic and ginger for 20 seconds.',
      'Add the carrot and broccoli and stir-fry 90 seconds.',
      'Add the baby corn and stir-fry 45 seconds.',
      'Add the pepper and mangetout and stir-fry 60 seconds.',
      'Pour in the sauce and let it boil hard for 30 seconds.',
      'Stir the cornflour slurry and pour it in, tossing, until the sauce turns glossy and clings.',
      'Add the spring onions and toss once.',
      'Scatter the sesame seeds over and serve immediately.'
    ],
    tips: [
      'Cut to cooking time, not to neatness.',
      'Hardest vegetables first, softest last.',
      'The slurry goes into a boiling pan, moving.'
    ],
    pair: ['Steamed rice', 'Egg fried rice', 'Chilli oil'],
    store: 'Keeps 2 days refrigerated but the vegetables soften. Best fresh.',
    nut: [235, 7, 24, 13, 6, 10, 980]
  }
};
