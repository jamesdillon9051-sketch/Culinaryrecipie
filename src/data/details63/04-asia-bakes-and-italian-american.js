'use strict';

/**
 * Volume sixty-three, fourth part: two shaved-ice desserts, Singaporean,
 * Malaysian, Indonesian and Cambodian dishes, two Indian breads and curries,
 * the first bakes and the Italian-American baked pastas and pizza. Waits of
 * an hour or more are declared as rest. Nutrition is computed from the
 * ingredient lists by npm run calc.
 */

module.exports = {
  'kakigori': {
    d: 'Japanese shaved ice made from frozen water blocks and shaved fine as snow, topped with a fresh strawberry syrup cooked for 5 minutes.',
    meta: 'Kakigori: fluffy Japanese shaved ice with strawberry syrup. Four servings, plus 4 hours of freezing.',
    kw: ['kakigori', 'kakigori recipe', 'japanese shaved ice', 'strawberry shaved ice', 'shaved ice with fruit syrup'],
    why: `Freeze the ice slowly, in a block, and shave it only at the last minute. Kakigori is shaved ice so fine that it eats like fresh snow, and the texture depends on how the ice is frozen and how cold it is when it meets the blade. Texture is everything.

Pour boiled and cooled water into a tray or tub and freeze it for four hours or overnight until solid. Boiled water freezes clearer and harder, which shaves into finer flakes. **Let the block stand for two minutes at room temperature** before shaving; ice straight from the freezer is brittle and breaks into chips instead of ribbons. A shaving machine does the best job, but a strong food processor will give a coarser, still pleasing snow. Make the syrup first.

The syrup is strawberries cooked with sugar and lemon juice for five minutes and pressed through a sieve, then cooled. Pile the ice high in a chilled bowl and pour the syrup over in slow circles. Eat at once, since the snow melts in minutes. Speed matters at the table.`,
    ing: [
      '800 ml water, boiled and cooled',
      '300 g strawberries, hulled and chopped',
      '80 g sugar',
      '1 tbsp lemon juice',
      '4 whole strawberries, to serve'
    ],
    st: [
      'Pour the water into a freezer-safe tub and freeze for 4 hours until solid.',
      'Simmer the chopped strawberries, sugar and lemon juice in a small pan for 5 minutes until soft. Press through a sieve and cool.',
      'Stand the ice block at room temperature for 2 minutes. Shave it into 4 chilled bowls with a shaving machine or food processor.',
      'Spoon over the syrup and top with the whole strawberries. Serve at once.'
    ],
    tips: [
      'Chill the bowls in the freezer first.',
      'Use a block of ice rather than cubes for the finest snow.',
      'Make the syrup ahead and keep it cold.'
    ],
    pair: ['Green tea', 'Fresh fruit', 'Matcha syrup', 'Mochi'],
    store: 'Best eaten at once. The syrup keeps for 4 days in the fridge.',
    rest: [240, 'Freezing']
  },

  'bingsu': {
    d: 'Korean shaved milk ice piled high and topped with a strawberry compote simmered for 10 minutes and a drizzle of condensed milk.',
    meta: 'Bingsu: Korean shaved milk ice with strawberry compote and condensed milk. Two servings, plus 4 hours of freezing.',
    kw: ['bingsu', 'korean bingsu', 'bingsu recipe', 'korean shaved milk ice', 'strawberry bingsu'],
    why: `A bowl of bingsu looks like a snowdrift, and the main difference from other shaved ices is what it is made from: frozen sweetened milk, not frozen water. That gives the snow a creamy, soft flavour with no icy edge, and a texture that melts on the tongue. Milk makes the difference.

Stir milk with condensed milk until combined, pour it into a flat tray and freeze it solid, which takes about four hours. **Break the frozen slab into chunks** and let them soften for a couple of minutes before shaving. If they are too hard, the blade chatters and gives chips instead of fine curls. A food processor makes a coarser but still lovely snow if no ice shaver is at hand. Use a chilled bowl.

The compote is strawberries simmered with sugar until soft and syrupy, then cooled. Heap the milk snow into two bowls, spoon over the fruit and drizzle with a little more condensed milk. Bring spoons and eat quickly, working in from the edge. Spoons only.`,
    ing: [
      '400 ml whole milk',
      '4 tbsp sweetened condensed milk',
      '250 g strawberries, hulled and chopped',
      '60 g sugar',
      '1 tbsp lemon juice',
      '2 tbsp sweetened condensed milk, to serve',
      '2 tbsp toasted almond flakes'
    ],
    st: [
      'Stir the milk and the 4 tablespoons condensed milk together. Pour into a shallow tub and freeze for 4 hours until solid.',
      'Simmer the strawberries, sugar and lemon juice in a pan for 10 minutes until syrupy. Cool.',
      'Break the frozen milk into chunks, let it soften for 2 minutes and shave it in a shaving machine or food processor into 2 chilled bowls.',
      'Spoon over the strawberries, drizzle with the extra condensed milk and scatter with almonds.'
    ],
    tips: [
      'Let the frozen milk soften for a couple of minutes before shaving.',
      'Chill the bowls ahead of time.',
      'Serve at once; the snow melts quickly.'
    ],
    pair: ['Mochi', 'Fresh mango', 'Cornflakes', 'Barley tea'],
    store: 'Best eaten at once. The compote keeps for 4 days in the fridge.',
    rest: [240, 'Freezing']
  },

  'popiah': {
    d: 'Fresh Singaporean spring rolls of tender stewed turnip and carrot, egg, peanuts and sweet sauce, wrapped in thin skins; the filling cooks for 30 minutes.',
    meta: 'Popiah: soft spring rolls filled with stewed turnip, egg, prawns and peanuts. Eight rolls, ready in 60 minutes.',
    kw: ['popiah', 'popiah recipe', 'singapore popiah', 'fresh spring rolls with turnip', 'hokkien popiah'],
    why: `Popiah is a roll-your-own affair, laid out as a table of fillings, where everyone builds a soft, thin, un-fried spring roll and eats it in a few bites, a Singaporean favourite. It is a build-your-own meal.

The heart of the filling is turnip, or jicama, cut into thin sticks and stewed slowly with carrot and garlic until tender and almost sweet. **Squeeze the cooked filling dry** before using it. Wet filling soaks through the skin and the roll falls apart in the hand. Alongside it go strips of thin omelette, crisp lettuce, bean sprouts, chopped peanuts and cooked prawns.

Lay a skin flat, brush it with hoisin sauce and a little chilli, then pile a line of filling across the lower third. Fold in the sides, roll up tightly and cut in half if wanted. Popiah skins dry out quickly, so keep the stack under a damp cloth while you work. Roll tightly.`,
    ing: [
      '250 g popiah skins or spring roll wrappers (8 skins)',
      '2 tbsp vegetable oil',
      '4 garlic cloves, crushed',
      '600 g jicama (yam bean), cut into thin sticks',
      '2 carrots, cut into thin sticks',
      '150 g cooked peeled prawns',
      '2 tbsp soy sauce',
      '3 eggs, beaten',
      '8 lettuce leaves',
      '100 g bean sprouts',
      '40 g roasted peanuts, crushed',
      '4 tbsp hoisin sauce',
      '2 tsp chilli sauce'
    ],
    st: [
      'Heat 1 tablespoon of the oil and fry the garlic for 30 seconds. Add the jicama and carrots, then the soy sauce and 100 ml water. Cover and cook for 20 minutes until soft.',
      'Remove the lid and cook for 5 minutes until dry. Stir in the prawns. Drain off any liquid and cool slightly.',
      'Heat the rest of the oil and cook the eggs as a thin omelette for 2 minutes. Slice into strips.',
      'Lay a skin flat, brush with hoisin and chilli sauce, and add lettuce, bean sprouts, filling, egg and peanuts.',
      'Fold in the sides and roll up tightly. Repeat with the rest and serve at once.'
    ],
    tips: [
      'Squeeze the cooked filling dry before rolling.',
      'Keep the skins under a damp cloth so they do not crack.',
      'Do not overfill; a thinner roll is easier to eat.'
    ],
    pair: ['Chilli sauce', 'Satay', 'Iced tea', 'Fresh fruit'],
    store: 'Best eaten at once. The cooked filling keeps for 2 days in the fridge; roll fresh.'
  },

  'rojak': {
    d: 'A Malaysian fruit and vegetable salad of pineapple, cucumber and jicama in a sticky tamarind and shrimp paste sauce, topped with crushed peanuts.',
    meta: 'Rojak: Malaysian fruit and vegetable salad with a sweet, sour and spicy tamarind sauce. Four servings.',
    kw: ['rojak', 'malaysian rojak', 'fruit rojak', 'rojak sauce recipe', 'pineapple cucumber salad with tamarind'],
    why: `Sweet, sour, salty, hot and crunchy, all at once. Rojak is a salad of chopped fruit and vegetables dressed in a thick, dark sauce, and the sauce does most of the talking. It is eaten as a snack in Malaysia and Singapore, and it is nothing like a leafy salad. Taste as you go.

The fruit needs to be firm: pineapple, cucumber, jicama and a slightly under-ripe mango or green apple all work. Cut them in bite-sized chunks. The sauce is made from tamarind, palm sugar, chilli and shrimp paste, mixed to a thick consistency that clings. **Toast the shrimp paste briefly in a dry pan** before it goes in; it smells sharp and fishy raw and turns savoury and rounded with the heat.

Toss the fruit and vegetables with the sauce just before serving, so they stay crisp, then scatter with crushed peanuts and, if wanted, a few torn pieces of fried dough fritter. Serve immediately, with toothpicks.`,
    ing: [
      '250 g pineapple, in bite-sized pieces',
      '200 g cucumber, in chunks',
      '200 g jicama (yam bean), in chunks',
      '1 green apple, cored and cut into chunks',
      '2 tbsp tamarind paste',
      '3 tbsp palm sugar, grated',
      '1 tsp shrimp paste',
      '1 red chilli, chopped',
      '2 tbsp water',
      '40 g roasted peanuts, crushed'
    ],
    st: [
      'Toast the shrimp paste in a dry pan for 1 minute until fragrant.',
      'Mash the paste with the tamarind, palm sugar, chilli and water in a bowl into a thick, sticky sauce.',
      'Toss the pineapple, cucumber, jicama and apple with the sauce just before serving.',
      'Scatter with the peanuts and serve at once.'
    ],
    tips: [
      'Choose fruit that is firm, not ripe and soft.',
      'Dress the salad at the last minute so it stays crisp.',
      'Adjust the sugar and tamarind to balance sweet and sour.'
    ],
    pair: ['Satay', 'Iced lime juice', 'Fried fritters', 'Steamed rice'],
    store: 'Best eaten at once. The sauce keeps for 3 days in the fridge.'
  },

  'ikan-bakar': {
    d: 'Whole fish rubbed with turmeric, garlic and lime, marinated for 30 minutes and grilled for 15 minutes with a sweet soy glaze.',
    meta: 'Ikan bakar: Indonesian grilled whole fish with turmeric, garlic and a sweet soy glaze. Two servings, plus marinating.',
    kw: ['ikan bakar', 'ikan bakar recipe', 'indonesian grilled fish', 'grilled whole fish with sweet soy', 'ikan bakar with sambal'],
    why: `Fish for two, over fire, on a warm evening: that is the occasion for ikan bakar, the grilled fish of Indonesia and Malaysia. Whole fish are scored, rubbed with a yellow marinade and cooked over embers or on a grill, then served with sambal and rice. Keep the fish whole.

The skin does most of the work, protecting the flesh from the heat while it takes on char and flavour. Choose small whole fish, such as sea bream or snapper, and score each side two or three times so the marinade reaches the meat. **Oil the grill well and do not move the fish** until the skin has seared and releases cleanly. Fish that is turned too soon tears.

Marinate in the fridge, not on the counter, for 30 minutes. Brush with a glaze of sweet soy sauce and lime juice as it cooks, turning once. The fish is done when the flesh at the thickest part turns opaque and flakes at the touch of a fork. Serve with lime, rice and a fiery sambal.`,
    ing: [
      '2 whole sea bream (about 400 g each), cleaned and scaled',
      '2 tsp ground turmeric',
      '4 garlic cloves, crushed',
      '2 tbsp lime juice',
      '1 tsp salt',
      '2 tbsp vegetable oil',
      '3 tbsp sweet soy sauce (kecap manis)',
      '1 tbsp lime juice, extra',
      '1 lime, cut into wedges',
      '2 tbsp sambal, to serve'
    ],
    st: [
      'Score each fish 3 times on each side. Mix the turmeric, garlic, 2 tablespoons lime juice, salt and oil and rub over the fish.',
      'Cover and marinate in the fridge for 30 minutes.',
      'Heat the grill to medium-high and oil the grate. Mix the sweet soy sauce with the extra lime juice.',
      'Grill the fish for 7 minutes on each side, brushing with the glaze, until the flesh flakes.',
      'Serve with lime wedges and sambal.'
    ],
    tips: [
      'Oil the grill and leave the fish alone until the skin releases.',
      'Score the skin so the heat and marinade reach the flesh.',
      'Marinate in the fridge only.'
    ],
    pair: ['Steamed rice', 'Sambal', 'Lime wedges', 'Cucumber salad'],
    store: 'Best eaten at once. Leftover fish keeps for 1 day in the fridge.',
    rest: [30, 'Marinating']
  },

  'lok-lak': {
    d: 'Cambodian cubes of beef marinated for 30 minutes and seared for 8 minutes in a hot pan, served on lettuce with a lime and pepper dipping sauce.',
    meta: 'Lok lak: Cambodian seared beef cubes on lettuce with a lime and pepper dipping sauce. Four servings, plus marinating.',
    kw: ['lok lak', 'cambodian lok lak', 'lok lak recipe', 'cambodian beef stir fry', 'lok lak with lime pepper dip'],
    why: `Beef, soy, oyster sauce, pepper: four things and an hour. Lok lak is a quick Cambodian dish of seared beef cubes served with a plate of lettuce, tomato and onion and a dipping sauce of lime juice and black pepper, and it is one of the best-known dishes on the country's menus. It comes together fast.

The cut matters. Use sirloin or another tender steak, and cut it in 3 cm cubes so each piece browns outside and stays pink within. Toss the cubes with the soy sauce, oyster sauce, sugar, garlic and a spoonful of oil, and marinate them in the fridge for thirty minutes. **Get the pan very hot** before the beef goes in, and cook in two batches. A crowded pan steams the beef and turns it grey.

The dipping sauce is simple: salt, lots of freshly ground black pepper and lime juice, stirred in a small bowl. Lay the beef on the lettuce and tomato, top with a fried egg if wanted, and serve with rice. Dip each bite in the sauce as you go. Rice is the usual partner.`,
    ing: [
      '600 g beef sirloin, cut into 3 cm cubes',
      '2 tbsp soy sauce',
      '1 tbsp oyster sauce',
      '1 tbsp sugar',
      '3 garlic cloves, crushed',
      '3 tbsp vegetable oil',
      '1 lettuce, leaves separated',
      '2 tomatoes, sliced',
      '1 red onion, sliced',
      '3 tbsp lime juice',
      '1 tsp salt',
      '1 tsp coarsely ground black pepper'
    ],
    st: [
      'Mix the beef with the soy sauce, oyster sauce, sugar, garlic and 1 tablespoon of the oil. Cover and marinate in the fridge for 30 minutes.',
      'Stir the lime juice, salt and pepper in a small bowl for the dipping sauce.',
      'Heat the remaining oil in a wok or large pan over a very high heat. Sear the beef in 2 batches for 4 minutes each, turning, until browned outside and just pink inside.',
      'Arrange the lettuce, tomatoes and onion on a plate, top with the beef and serve with the dipping sauce.'
    ],
    tips: [
      'Cook the beef in batches so it sears, not stews.',
      'Marinate in the fridge, not on the counter.',
      'Use plenty of freshly ground pepper in the dipping sauce.'
    ],
    pair: ['Steamed rice', 'Fried egg', 'Cucumber', 'Cold beer'],
    store: 'Best eaten at once. Keeps for 1 day in the fridge.',
    rest: [30, 'Marinating']
  },

  'kulcha': {
    d: 'Soft, slightly puffy Indian flatbreads leavened with yoghurt and baking powder, rested for an hour and cooked for 15 minutes on a hot griddle.',
    meta: 'Kulcha: soft leavened Indian flatbreads cooked on a hot griddle. Six breads, plus resting.',
    kw: ['kulcha', 'kulcha recipe', 'indian kulcha bread', 'butter kulcha', 'kulcha on a tawa'],
    why: `Rest the dough, and the kulcha practically makes itself. This is a soft, leavened Indian flatbread, thicker and fluffier than a chapati and closer to a naan, and it is made with yoghurt, which does a slow, gentle job of tenderising the flour. Rest is the secret.

Mix the flour, baking powder, sugar and salt, then work in the yoghurt and enough warm milk to make a soft, slightly sticky dough. Knead for a few minutes until smooth. **Cover it and leave for an hour.** The dough will puff and relax, and the finished breads will be light and pillowy instead of stiff.

Divide into six and roll each into a round, sprinkling with nigella seeds and coriander and pressing them in. Cook on a very hot dry griddle, flat side down first, until bubbles form, then flip and cook until browned in spots. Brush with melted butter straight away so the surface softens and shines. Warm breads taste best.`,
    ing: [
      '400 g plain flour',
      '1 tsp baking powder',
      '1 tsp sugar',
      '1 tsp salt',
      '150 g plain yoghurt',
      '120 ml warm milk',
      '1 tbsp vegetable oil',
      '1 tbsp nigella seeds',
      '2 tbsp chopped coriander',
      '30 g butter, melted'
    ],
    st: [
      'Mix the flour, baking powder, sugar and salt. Add the yoghurt, milk and oil and mix to a soft dough.',
      'Knead for 5 minutes until smooth, cover and leave for 1 hour.',
      'Divide into 6 balls. Roll each into a round about 5 mm thick, pressing the nigella seeds and coriander into the top.',
      'Cook each on a hot dry griddle for 2 minutes until bubbles form, flip and cook for 1 minute more until browned in spots.',
      'Brush with the melted butter and serve warm.'
    ],
    tips: [
      'Keep the dough slightly sticky; use oiled hands.',
      'Heat the griddle until very hot before the first bread goes on.',
      'Wrap cooked breads in a cloth to stay soft.'
    ],
    pair: ['Chole', 'Dal makhani', 'Butter chicken', 'Raita'],
    store: 'Best on the day. Keeps for 2 days wrapped; reheat in a dry pan.',
    rest: [60, 'Resting']
  },

  'bhatura': {
    d: 'Large, puffed, deep-fried Indian breads of yoghurt dough rested for 2 hours and fried for 15 minutes until golden, served with chole.',
    meta: 'Bhatura: puffed deep-fried Indian bread made with yoghurt dough. Six breads, plus resting.',
    kw: ['bhatura', 'bhatura recipe', 'chole bhature', 'puffy fried indian bread', 'bhature dough'],
    why: `Here is what goes wrong with homemade bhatura: the dough is rushed, so it fries flat and tough instead of puffing into a big golden balloon. The cure is time, and a dough that has rested for two hours puffs reliably in hot oil. Time fixes it.

The dough is flour, a little semolina for crispness, yoghurt, baking powder, sugar and salt, kneaded smooth with just enough water. It is sticky at first. **Knead for ten minutes** until it holds together and feels elastic, then cover and leave it somewhere warm. The yoghurt works slowly on the flour as it stands, and the dough turns soft and stretchy.

Divide into six, roll each into an oval about the thickness of a coin, and fry one at a time in oil at 180C, pressing it under the surface with a slotted spoon. It will puff up in seconds. Turn once, fry until golden and drain. Serve at once with chole and pickled onion.`,
    ing: [
      '300 g plain flour',
      '2 tbsp fine semolina',
      '1 tsp baking powder',
      '1 tsp sugar',
      '1 tsp salt',
      '100 g plain yoghurt',
      '100 ml warm water',
      '2 tbsp vegetable oil',
      '1 litre vegetable oil, for frying'
    ],
    st: [
      'Mix the flour, semolina, baking powder, sugar and salt. Add the yoghurt, water and 2 tablespoons oil and mix to a dough.',
      'Knead for 10 minutes until smooth. Cover and rest for 2 hours.',
      'Divide into 6 balls and roll each into an oval about 3 mm thick.',
      'Heat the frying oil to 180C. Fry the bhatura one at a time for 1 minute on each side, pressing down so it puffs, until golden.',
      'Drain on kitchen paper and serve hot.'
    ],
    tips: [
      'Rest the dough for the full 2 hours.',
      'Keep the oil at 180C; cool oil gives greasy, flat bread.',
      'Fry one at a time and press it under the oil to puff.'
    ],
    pair: ['Chole', 'Pickled onions', 'Lassi', 'Green chutney'],
    store: 'Best eaten at once. Not suitable for keeping.',
    rest: [120, 'Resting']
  },

  'mee-rebus': {
    d: 'Malaysian yellow noodles in a thick sweet potato and spice gravy simmered for 30 minutes, topped with egg, tofu and fried shallots.',
    meta: 'Mee rebus: yellow noodles in a sweet potato and spice gravy with egg and lime. Four servings, ready in 50 minutes.',
    kw: ['mee rebus', 'mee rebus recipe', 'malaysian mee rebus', 'noodles in sweet potato gravy', 'mee rebus gravy'],
    why: `Sweet potato is the secret. It cooks down into the gravy and thickens it, giving mee rebus its velvety body without any flour or cornflour, and a faint sweetness that balances the chilli and tamarind.

Blend shallots, garlic, ginger, chillies and dried shrimp to a paste, and fry it in oil until it darkens and smells rich. **Cook the paste until the oil separates** at the edges. A paste that is not cooked enough tastes raw and sharp, and the gravy never gets its depth. Add the sweet potato, stock and tamarind and simmer until the sweet potato falls apart, then blend smooth. Fry the paste well.

Blanch the noodles briefly and divide them between bowls. Ladle over plenty of hot gravy and top with a halved boiled egg, fried tofu, bean sprouts and fried shallots. A wedge of lime on the side finishes the bowl; squeeze it over just before eating. Lime goes on last.`,
    ing: [
      '400 g fresh yellow egg noodles',
      '4 shallots, peeled',
      '4 garlic cloves',
      '2 cm fresh ginger',
      '3 red chillies',
      '2 tbsp dried shrimp',
      '3 tbsp vegetable oil',
      '300 g sweet potato, cubed',
      '800 ml chicken stock',
      '2 tbsp tamarind paste',
      '1 tbsp sugar',
      '1 tsp salt',
      '2 eggs, boiled and halved',
      '150 g fried tofu, sliced',
      '100 g bean sprouts',
      '2 tbsp fried shallots',
      '1 lime, cut into wedges'
    ],
    st: [
      'Blend the shallots, garlic, ginger, chillies and dried shrimp to a paste.',
      'Heat the oil in a pot and fry the paste for 8 minutes until darkened and the oil separates.',
      'Add the sweet potato, stock, tamarind, sugar and salt. Simmer for 20 minutes until the sweet potato is very soft.',
      'Blend the gravy until smooth and return it to the pot to keep hot.',
      'Cook the noodles in boiling water for 2 minutes and divide into bowls. Ladle over the gravy and top with the eggs, tofu, bean sprouts, fried shallots and lime.'
    ],
    tips: [
      'Fry the paste until the oil separates.',
      'Thin the gravy with stock if it thickens as it stands.',
      'Serve the lime on the side, squeezed over at the table.'
    ],
    pair: ['Lime wedges', 'Sliced chillies', 'Iced tea', 'Fried shallots'],
    store: 'The gravy keeps for 3 days in the fridge. Freeze for 2 months. Cook the noodles fresh.'
  },

  'methi-chicken': {
    d: 'Chicken thighs simmered for 35 minutes in an onion and tomato gravy with fresh fenugreek leaves, which add a slightly bitter, aromatic edge.',
    meta: 'Methi chicken: chicken with fresh fenugreek leaves in a spiced onion and tomato gravy. Four servings, ready in 60 minutes.',
    kw: ['methi chicken', 'methi chicken recipe', 'chicken with fenugreek leaves', 'murgh methi', 'fenugreek chicken curry'],
    why: `Fresh fenugreek smells like nothing else: grassy, slightly bitter and strangely sweet. A handful in a pot of chicken curry gives the whole dish a savoury depth, and it is what makes methi chicken different from the plain onion and tomato version. Smell it first.

Pick the small leaves from the stalks, wash them well and chop. The leaves carry some bitterness, so rubbing them with a little salt and rinsing them before using takes the edge off. **Add the fenugreek late.** It needs only ten minutes in the gravy; longer, and it turns dark and acrid.

Brown the onions slowly, since they build the base of the sauce. Add ginger, garlic and the dry spices, then tomato, and cook until the oil separates. The chicken goes in next, and simmers in the gravy until tender and the juices run clear. A little cream or yoghurt at the end softens the spice, but it is not essential. Serve with rotis or rice.`,
    ing: [
      '700 g boneless chicken thighs, cut into chunks',
      '3 tbsp vegetable oil',
      '2 onions, finely chopped',
      '1 tbsp grated fresh ginger',
      '4 garlic cloves, crushed',
      '1 tsp ground cumin',
      '1 tsp ground coriander',
      '1 tsp turmeric',
      '1 tsp garam masala',
      '1/2 tsp chilli powder',
      '3 tomatoes, chopped',
      '1 tsp salt',
      '100 g fresh fenugreek leaves, chopped',
      '100 g plain yoghurt'
    ],
    st: [
      'Heat the oil in a wide pan and cook the onions for 10 minutes until deep golden.',
      'Add the ginger, garlic, cumin, coriander, turmeric and chilli powder and fry for 1 minute. Add the tomatoes and salt and cook for 8 minutes until the oil separates.',
      'Add the chicken and 100 ml water. Cover and simmer for 15 minutes.',
      'Stir in the fenugreek leaves and cook for 10 minutes more until the chicken is tender and reads 74C.',
      'Stir in the yoghurt and garam masala and cook for 2 minutes. Serve hot.'
    ],
    tips: [
      'Add the fenugreek late so it keeps its colour.',
      'Brown the onions slowly; they set the base.',
      'Use dried fenugreek leaves (kasuri methi) if fresh is not available: 2 tablespoons, crushed.'
    ],
    pair: ['Rotis', 'Basmati rice', 'Cucumber raita', 'Lime pickle'],
    store: 'Keeps for 3 days in the fridge. Freeze for 3 months.'
  },

  'mandelbrot': {
    d: 'Crisp, twice-baked Jewish cookies of almond and cinnamon, baked as logs for 30 minutes, sliced and baked again for 15 minutes.',
    meta: 'Mandelbrot: twice-baked almond cookies with cinnamon sugar. Twenty-four cookies, ready in 65 minutes.',
    kw: ['mandelbrot', 'mandelbrot recipe', 'jewish almond cookies', 'twice baked almond cookies', 'mandel bread'],
    why: `Mandelbrot is the Jewish cousin of biscotti, with oil rather than butter, and it is dunked in tea or coffee at the end of a meal. The name means almond bread in Yiddish, and the cookie is crunchy, nutty and not very sweet. Crunch is the goal.

The dough is soft and sticky, mixed from eggs, oil, sugar, flour and almonds, and it is shaped into two flat logs on a lined tray, wet hands making it easier to handle. **Do not skip the cooling pause** between bakes. The warm logs are too fragile to slice, and a ten-minute rest firms them enough to cut cleanly into slices with a serrated knife.

Lay the slices on their sides and bake again until the cut edges are dry and golden, turning once for even colour. A dusting of cinnamon sugar before the second bake gives a sparkling crust. The cookies harden as they cool and keep well in a tin for weeks, which makes them a good gift. Dunk away.`,
    ing: [
      '3 eggs',
      '200 g sugar',
      '120 ml vegetable oil',
      '1 tsp vanilla extract',
      '400 g plain flour',
      '2 tsp baking powder',
      '1/2 tsp salt',
      '100 g whole almonds, roughly chopped',
      '2 tbsp sugar',
      '1 tsp ground cinnamon'
    ],
    st: [
      'Heat the oven to 180C. Whisk the eggs, 200 g sugar, oil and vanilla until smooth.',
      'Stir in the flour, baking powder, salt and almonds to make a sticky dough.',
      'With wet hands shape the dough into 2 logs, each about 30 cm long, on a lined tray. Bake for 30 minutes until golden.',
      'Cool the logs for 10 minutes, then slice into 24 pieces about 1.5 cm thick. Mix the 2 tablespoons sugar with the cinnamon and sprinkle over.',
      'Lay the slices on their sides and bake for 15 minutes, turning once, until dry and golden.'
    ],
    tips: [
      'Wet your hands to shape the sticky dough.',
      'Use a serrated knife and a sawing motion to slice.',
      'Bake the second time until the cut edges are properly dry.'
    ],
    pair: ['Tea', 'Coffee', 'Dessert wine', 'Fresh fruit'],
    store: 'Keeps for 3 weeks in an airtight tin. Freeze for 3 months.'
  },

  'spice-cake': {
    d: 'A moist, warmly spiced loaf cake of cinnamon, ginger, nutmeg and cloves with buttermilk, baked for 35 minutes and glazed with icing.',
    meta: 'Spice cake: a moist buttermilk cake with cinnamon, ginger, nutmeg and cloves, baked for 35 minutes. Twelve slices.',
    kw: ['spice cake', 'spice cake recipe', 'cinnamon ginger spice cake', 'buttermilk spice cake', 'old fashioned spice cake'],
    why: `Spice cake is a gingerbread that has been taught some manners: soft, tender, brown with sugar and scented with cinnamon, ginger, nutmeg and cloves. The spices are warm rather than hot, and the crumb is moist and slightly dense. It is a gentle cake.

Brown sugar and oil keep it soft for days, and buttermilk gives a gentle tang and a light crumb. Mix the dry ingredients and the wet ingredients separately, then fold them together until just combined. **Stop mixing as soon as no dry flour is visible.** Overmixed batter turns the cake tough and gives tunnels inside. Brown sugar helps.

Bake in a lined tin until a skewer comes out clean, and cool before icing. The glaze is icing sugar thinned with milk, spread over the top while the cake is cool so it sets in a thin, shiny layer. After a day the cake improves, once the spices have had time to settle into the crumb. Wrap leftovers well.`,
    ing: [
      '300 g plain flour',
      '2 tsp baking powder',
      '1/2 tsp bicarbonate of soda',
      '2 tsp ground cinnamon',
      '1 tsp ground ginger',
      '1/2 tsp ground nutmeg',
      '1/4 tsp ground cloves',
      '1/2 tsp salt',
      '200 g light brown sugar',
      '2 eggs',
      '120 ml vegetable oil',
      '240 ml buttermilk',
      '100 g icing sugar',
      '2 tbsp milk'
    ],
    st: [
      'Heat the oven to 180C. Grease and line a 23 cm square tin.',
      'Mix the flour, baking powder, bicarbonate of soda, spices and salt in a bowl.',
      'Whisk the sugar, eggs, oil and buttermilk in another bowl. Fold into the flour mixture until just combined.',
      'Pour into the tin and bake for 35 minutes until a skewer comes out clean. Cool in the tin for 10 minutes, then lift out.',
      'Whisk the icing sugar and milk until smooth and spread over the cooled cake.'
    ],
    tips: [
      'Do not overmix once the flour goes in.',
      'Check with a skewer at 30 minutes.',
      'Ice the cake only when completely cool.'
    ],
    pair: ['Tea', 'Whipped cream', 'Stewed apples', 'Vanilla ice cream'],
    store: 'Keeps for 4 days in an airtight tin. Freeze unglazed for 2 months.'
  },

  'raisin-bread': {
    d: 'A soft sandwich loaf of white dough kneaded with raisins and cinnamon, risen twice and baked for 40 minutes until golden.',
    meta: 'Raisin bread: a soft cinnamon raisin loaf, baked for 40 minutes. Ten slices, plus rising.',
    kw: ['raisin bread', 'raisin bread recipe', 'cinnamon raisin bread', 'homemade raisin loaf', 'soft raisin toast bread'],
    why: `Raisin bread is plain white bread with a sweet streak, a loaf that makes breakfast toast something to look forward to. Next to cinnamon raisin bread from a bakery it looks quite simple, which is the best thing about it. Toast makes it better.

Soak the raisins in warm water for ten minutes first, drain them well and pat them dry. Dry raisins steal moisture from the dough during baking and end up hard and chewy. **Add them near the end of kneading**, not at the start, or they are crushed and streak the dough grey. A teaspoon or two of cinnamon goes through the flour. Soak the raisins.

The dough is milk, butter and sugar enriched, so it rises more slowly than lean bread dough. Give it a full hour, shape it into a loaf, and let it rise in the tin until it crowns above the edge. Bake until the crust is deep golden and the loaf sounds hollow when tapped underneath, then cool on a rack before slicing. Slice when cool.`,
    ing: [
      '500 g strong white bread flour',
      '7 g fast action yeast',
      '50 g sugar',
      '1 1/2 tsp salt',
      '2 tsp ground cinnamon',
      '250 ml whole milk, warm',
      '40 g butter, softened',
      '1 egg',
      '150 g raisins, soaked in warm water and drained'
    ],
    st: [
      'Mix the flour, yeast, sugar, salt and cinnamon. Add the milk, butter and egg and mix to a dough.',
      'Knead for 10 minutes until smooth, working in the raisins for the last 2 minutes.',
      'Cover and leave to rise for 1 hour until doubled. Shape into a loaf and place in a greased 900 g tin.',
      'Leave to rise for 45 minutes until it crowns above the tin.',
      'Heat the oven to 180C and bake for 40 minutes until deep golden and hollow-sounding. Cool on a rack.'
    ],
    tips: [
      'Dry the soaked raisins well before kneading them in.',
      'Let the loaf rise until it crowns above the tin.',
      'If the top browns too fast, cover it with foil.'
    ],
    pair: ['Butter', 'Cream cheese', 'Peanut butter', 'Cheddar'],
    store: 'Keeps for 3 days wrapped at room temperature. Freeze sliced for 2 months.',
    rest: [105, 'Rising']
  },

  'crostoli': {
    d: 'Thin ribbons of Italian egg dough rested for 30 minutes, fried for 15 minutes until blistered and crisp, and dusted with icing sugar.',
    meta: 'Crostoli: crisp Italian fried pastry ribbons dusted with icing sugar. Eight servings, plus resting.',
    kw: ['crostoli', 'crostoli recipe', 'italian fried pastry', 'chiacchiere carnevale', 'fried dough ribbons with icing sugar'],
    why: `Roll it thinner than seems sensible. Crostoli are fried ribbons of pastry, and they are light and crisp only if the dough goes through the pasta machine, or under the rolling pin, until it is almost see-through. Thick dough fries heavy and tough.

The dough is made from flour, eggs, sugar, butter, a splash of white wine and lemon zest, and it is kneaded smooth and rested. **Rest it for 30 minutes** before rolling, so it stretches without springing back. Cut it into ribbons with a pastry wheel, make a small slit in the centre of each and, if wanted, pull one end through the slit to make a loose knot. Thin dough is crisp dough.

Fry a few pieces at a time in oil at 170C. They puff and blister within seconds and need only about a minute on each side. Lift them out onto kitchen paper while they are still pale gold, because they continue to darken. Dust them with icing sugar and serve the same day, as the crisp edge softens overnight. Serve with strong coffee.`,
    ing: [
      '250 g plain flour',
      '30 g sugar',
      '1/4 tsp salt',
      '2 eggs',
      '30 g butter, melted',
      '2 tbsp dry white wine',
      '1 tsp grated lemon zest',
      '1 litre vegetable oil, for frying',
      '50 g icing sugar, for dusting'
    ],
    st: [
      'Mix the flour, sugar and salt. Add the eggs, butter, wine and lemon zest and knead for 5 minutes into a smooth dough.',
      'Wrap and rest for 30 minutes.',
      'Roll the dough very thin, in batches, and cut into ribbons about 4 cm wide and 12 cm long. Cut a slit in the middle of each.',
      'Heat the oil to 170C and fry a few at a time for 1 minute on each side until pale gold and blistered.',
      'Drain on kitchen paper and dust with icing sugar.'
    ],
    tips: [
      'Roll the dough until thin enough to see your hand through.',
      'Fry in small batches and keep the oil at 170C.',
      'Take them out while pale gold; they darken as they drain.'
    ],
    pair: ['Sweet wine', 'Coffee', 'Hot chocolate', 'Fresh orange'],
    store: 'Best on the day they are made. Keeps for 2 days in a tin, but loses its crispness.',
    rest: [30, 'Resting']
  },

  'ricotta-pie': {
    d: 'A sweet Italian tart with a crumbly pastry shell and a creamy lemon-scented ricotta filling, baked for 55 minutes and chilled before slicing.',
    meta: 'Ricotta pie: a crumbly pastry tart filled with lemon and vanilla ricotta, baked for 55 minutes. Ten slices, plus chilling.',
    kw: ['ricotta pie', 'italian ricotta pie', 'ricotta pie recipe', 'sweet ricotta tart', 'lemon ricotta pie'],
    why: `Cool it overnight, or at least until the filling has fully set. Ricotta pie that is cut warm collapses into a custard, while the same pie, chilled, slices cleanly and tastes better, with the lemon and vanilla settled into the cheese. Patience is the method.

The crust is a sweet, short pastry that is pressed into the tin rather than rolled, which makes it a forgiving beginner's dough. Chill it for thirty minutes first. **Drain the ricotta for at least thirty minutes** in a sieve. Wet cheese gives a watery filling and a soggy base, and the pie will weep when sliced.

Beat the drained ricotta with eggs, sugar, vanilla, lemon zest and a pinch of cinnamon until smooth, then pour it into the shell. Bake until the centre is just set, with a very slight wobble, and the edges are lightly golden. It carries on setting as it cools. Cool for no more than two hours at room temperature, then chill before serving.`,
    ing: [
      '250 g plain flour',
      '80 g sugar',
      '125 g cold butter, cubed',
      '2 egg yolks',
      '2 tbsp cold water',
      '500 g ricotta, drained',
      '3 eggs',
      '100 g sugar',
      '1 tsp vanilla extract',
      '1 tbsp grated lemon zest',
      '1/2 tsp ground cinnamon',
      '2 tbsp icing sugar, for dusting'
    ],
    st: [
      'Rub the butter into the flour and 80 g sugar until crumbly. Mix in the yolks and water to a dough. Press into a 23 cm tin, prick the base and chill for 30 minutes.',
      'Heat the oven to 180C. Beat the ricotta, eggs, 100 g sugar, vanilla, lemon zest and cinnamon until smooth.',
      'Pour into the pastry shell and bake for 55 minutes until just set and lightly golden.',
      'Cool in the tin for 1 hour, then chill for at least 2 hours.',
      'Dust with icing sugar and slice.'
    ],
    tips: [
      'Drain the ricotta well so the filling stays firm.',
      'Take the pie out when the centre has a slight wobble.',
      'Refrigerate within 2 hours of baking.'
    ],
    pair: ['Espresso', 'Fresh berries', 'Sweet wine', 'Whipped cream'],
    store: 'Keeps for 3 days in the fridge, covered. Do not freeze.',
    rest: [210, 'Chilling and cooling']
  },

  'sauteed-broccoli-rabe': {
    d: 'Broccoli rabe blanched for 2 minutes and sautéed for 6 minutes with plenty of garlic, chilli and olive oil, with a squeeze of lemon.',
    meta: 'Sautéed broccoli rabe with garlic, chilli and olive oil. Four servings, ready in 20 minutes.',
    kw: ['sauteed broccoli rabe', 'broccoli rabe with garlic', 'broccoli rabe recipe', 'rapini with garlic and chilli', 'bitter greens sauteed'],
    why: `Most people give up on broccoli rabe because of the bitterness, and a short blanch in well-salted water is the fix. Two minutes in boiling water takes the sharp edge off and turns the stems tender, so the greens finish in the pan rather than stewing there. Bitterness can be tamed.

Trim the woody ends and cut the stalks into pieces about 5 cm long. Drop them into plenty of boiling salted water and cook for two minutes, then drain and cool quickly in cold water to hold the green colour. **Squeeze the greens dry in a clean cloth.** Wet greens spit in hot oil and never brown.

Warm the olive oil in a wide pan with sliced garlic and chilli flakes, taking care not to let the garlic colour beyond pale gold, since burnt garlic is bitter, too. Add the greens, toss until glossy and hot through, then season and finish with lemon juice. It is excellent with sausages or on a crusty roll. Add the lemon last.`,
    ing: [
      '700 g broccoli rabe, trimmed',
      '4 tbsp olive oil',
      '5 garlic cloves, thinly sliced',
      '1/2 tsp chilli flakes',
      '1/2 tsp salt',
      '1 tbsp lemon juice'
    ],
    st: [
      'Boil the broccoli rabe in a large pot of salted water for 2 minutes. Drain, cool in cold water and squeeze dry.',
      'Heat the oil in a wide pan over a medium heat. Add the garlic and chilli flakes and cook for 1 minute until pale gold.',
      'Add the broccoli rabe and cook, turning, for 6 minutes until tender and glossy.',
      'Season with the salt and lemon juice and serve hot.'
    ],
    tips: [
      'Blanch in well-salted water to tame the bitterness.',
      'Squeeze the greens dry so they sauté rather than steam.',
      'Take the garlic off the heat at the first sign of colour.'
    ],
    pair: ['Italian sausages', 'Pasta', 'Crusty bread', 'Grilled chicken'],
    store: 'Keeps for 3 days in the fridge. Reheat in a pan.'
  },

  'chicken-rollatini': {
    d: 'Chicken cutlets pounded thin and rolled around a spinach and ricotta filling, then baked for 35 minutes in tomato sauce under melted mozzarella.',
    meta: 'Chicken rollatini: chicken rolls with spinach and ricotta, baked in tomato sauce under mozzarella. Four servings.',
    kw: ['chicken rollatini', 'chicken rollatini recipe', 'stuffed chicken rolls with ricotta and spinach', 'italian chicken rolls', 'baked chicken rollatini'],
    why: `Pound the chicken to an even thickness. It is the quick tip that matters most, because a breast that is thick at one end and thin at the other cooks unevenly and will not roll. Put each piece between sheets of cling film and flatten it with a rolling pin or a heavy pan until it is about 1 cm thick all over.

The filling is ricotta, spinach, garlic and parmesan, with a pinch of nutmeg. **Squeeze the cooked spinach very dry**, or the filling leaks out into the sauce. Spoon a heaped tablespoon onto each cutlet, roll it up from the narrow end and secure with a toothpick, or place seam side down so the roll holds itself. Seal the edge.

Spread a layer of tomato sauce in a baking dish, set the rolls on top, and cover them with more sauce and a handful of mozzarella. Bake until the chicken reads 74C in the centre and the cheese is melted and speckled with gold. Remove the toothpicks before serving.`,
    ing: [
      '4 chicken breast cutlets (about 150 g each), pounded thin',
      '150 g frozen spinach, thawed and squeezed dry',
      '150 g ricotta',
      '30 g grated parmesan',
      '1 garlic clove, crushed',
      '1 pinch ground nutmeg',
      '1/2 tsp salt',
      '1/4 tsp black pepper',
      '500 g passata',
      '1 tsp dried oregano',
      '100 g grated mozzarella'
    ],
    st: [
      'Heat the oven to 190C. Mix the spinach, ricotta, parmesan, garlic, nutmeg, salt and pepper.',
      'Season the cutlets. Spoon the filling along each one, roll up from the narrow end and secure with a toothpick.',
      'Spread half the passata in a baking dish. Set the rolls on top, then pour over the rest of the passata and sprinkle with oregano.',
      'Bake for 25 minutes. Scatter over the mozzarella and bake for 10 minutes more until the chicken reaches 74C and the cheese melts.',
      'Remove the toothpicks and serve.'
    ],
    tips: [
      'Pound the chicken to an even thickness.',
      'Squeeze the spinach until it is dry.',
      'Check the middle of one roll with a thermometer.'
    ],
    pair: ['Spaghetti', 'Garlic bread', 'Green salad', 'Roasted broccoli'],
    store: 'Keeps for 3 days in the fridge. Freeze for 2 months and reheat until piping hot.'
  },

  'baked-mostaccioli': {
    d: 'Pasta tubes tossed with a meaty tomato sauce and ricotta, topped with mozzarella and baked for 50 minutes until bubbling and browned.',
    meta: 'Baked mostaccioli: pasta tubes in a meat sauce with ricotta and mozzarella, baked until bubbling. Eight servings.',
    kw: ['baked mostaccioli', 'baked mostaccioli recipe', 'mostaccioli with meat sauce', 'baked pasta with ricotta and mozzarella', 'italian american baked pasta'],
    why: `Pasta, meat sauce, three cheeses and an oven: that is the whole list. Baked mostaccioli is a family-size pasta bake in the Italian-American style, made for a table that needs feeding and a cook who wants most of it done ahead. It feeds a crowd.

Cook the pasta for two minutes less than the packet says. It finishes cooking in the oven, where it soaks up sauce, and pasta cooked fully soft first turns to mush by the time the top is browned. **Make the sauce a little looser than you would for serving**, because the pasta will drink it as it bakes. Keep it loose.

Brown the sausage and beef with onion and garlic, add passata, a spoonful of tomato paste and herbs, and simmer while the pasta boils. Mix half the sauce with the pasta and ricotta, spread in a deep dish, pour on the rest of the sauce and cover with mozzarella and parmesan. Cover with foil for most of the bake, then uncover to brown. Cover, then uncover.`,
    ing: [
      '450 g mostaccioli or penne',
      '300 g Italian sausage, casings removed',
      '300 g minced beef',
      '1 onion, chopped',
      '3 garlic cloves, crushed',
      '700 g passata',
      '2 tbsp tomato paste',
      '2 tsp dried oregano',
      '1 tsp salt',
      '250 g ricotta',
      '250 g grated mozzarella',
      '50 g grated parmesan'
    ],
    st: [
      'Heat the oven to 190C. Boil the pasta for 8 minutes, drain.',
      'Brown the sausage, beef and onion in a large pan for 10 minutes. Add the garlic, passata, tomato paste, oregano and salt and simmer for 15 minutes.',
      'Mix the pasta with half the sauce and the ricotta and spread in a 3 litre dish. Pour over the rest of the sauce.',
      'Top with the mozzarella and parmesan, cover with foil and bake for 20 minutes. Remove the foil and bake for 15 minutes more until bubbling and browned.',
      'Rest for 10 minutes before serving.'
    ],
    tips: [
      'Undercook the pasta slightly; it softens in the oven.',
      'Rest the bake for 10 minutes so it holds together when served.',
      'Cover with foil for the first part so the top does not dry out.'
    ],
    pair: ['Green salad', 'Garlic bread', 'Roasted vegetables', 'Red wine'],
    store: 'Keeps for 4 days in the fridge. Freeze for 3 months and bake from thawed until hot all through.'
  },

  'pepperoni-pizza': {
    d: 'A thin, chewy homemade pizza with tomato sauce, mozzarella and curling slices of pepperoni, baked for 15 minutes on a hot tray.',
    meta: 'Pepperoni pizza: homemade dough with tomato sauce, mozzarella and pepperoni, baked for 15 minutes. Four servings, plus rising.',
    kw: ['pepperoni pizza', 'homemade pepperoni pizza', 'pepperoni pizza recipe', 'pepperoni pizza from scratch', 'crispy pepperoni pizza'],
    why: `Listen for the sizzle. When a pepperoni pizza is right, the slices cup and curl as they cook, and the edges crisp and pool a thin film of red oil across the cheese. That is the sign the oven is hot enough and the pizza is nearly done.

Make the dough ahead; it needs an hour to rise. Flour, yeast, water, a little oil and salt: kneaded until smooth, risen until doubled, and then stretched, not rolled, so the air bubbles in the crust survive. **Heat the baking tray in the oven** while it preheats. A hot tray gives the base an immediate blast of heat and a crisp, browned underside. Hot ovens matter.

Spread the tomato sauce thinly. Too much makes the middle wet. Scatter the mozzarella, lay the pepperoni over the top and bake at the highest setting the oven allows until the crust is blistered and the cheese is bubbling and spotted brown. Let the pizza stand for two minutes before slicing.`,
    ing: [
      '300 g strong white bread flour',
      '4 g fast action yeast',
      '1 tsp salt',
      '1 tsp sugar',
      '190 ml warm water',
      '1 tbsp olive oil',
      '120 g passata',
      '1/2 tsp dried oregano',
      '200 g grated low-moisture mozzarella',
      '80 g sliced pepperoni'
    ],
    st: [
      'Mix the flour, yeast, salt and sugar. Add the water and oil and mix to a dough. Knead for 8 minutes until smooth.',
      'Cover and leave to rise for 1 hour until doubled.',
      'Heat the oven to 240C with a baking tray inside. Stretch the dough to a 30 cm round on baking paper.',
      'Spread with the passata and oregano, scatter over the mozzarella and lay on the pepperoni.',
      'Slide the pizza, on its paper, onto the hot tray and bake for 15 minutes until the crust is blistered and the cheese is bubbling.'
    ],
    tips: [
      'Stretch the dough by hand to keep the air in it.',
      'Preheat the tray so the base crisps.',
      'Use low-moisture mozzarella for the best melt.'
    ],
    pair: ['Green salad', 'Chilli oil', 'Cold lager', 'Garlic dip'],
    store: 'Keeps for 3 days in the fridge. Reheat slices in a hot oven or frying pan.',
    rest: [60, 'Rising']
  }
};
