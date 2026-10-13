'use strict';

/**
 * Volume forty-eight — Indian restaurant and regional favourites, third part.
 *
 * Twenty-five dishes: Kerala appam, puttu and idiyappam, prawn roast and raw
 * mango curry, mint and tamarind chutney, boondi raita, milk barfi, Bengali
 * sandesh, rava kesari, three drinks and puddings, slow cooker, Instant Pot
 * and sheet pan curries, two pickles, aam ras, pesarattu and kootu. Waits of
 * an hour or more are declared as rest. Nutrition is estimated by npm run
 * calc.
 */

module.exports = {
  'kerala-appam': {
    d: 'Soft, bowl-shaped rice pancakes with a thick white centre and thin, lacy edges, made from a fermented rice and coconut batter.',
    meta: 'Kerala appam: bowl-shaped rice and coconut pancakes with a soft centre and lacy edges. Makes eight, cooked in 20 minutes.',
    kw: ['kerala appam', 'appam recipe', 'palappam', 'appam with coconut milk', 'rice and coconut pancake'],
    why: 'Why does the batter need all night? Because appam is a fermented batter, and the yeast or the long soak is what makes the centre soft and the edges thin. Rice, a spoonful of cooked rice, grated coconut and a little sugar are ground smooth and left to rise until the surface is covered in bubbles.\n\nThe batter should be thinner than pancake batter, like single cream. If it is too thick, the appam will not spread into the lacy rim. **Add water a spoonful at a time until the batter runs off a spoon in a steady ribbon.**\n\nUse a small, deep pan with a lid (an appam chatti if you have one, otherwise a small wok). Heat it, wipe it with a little oil, pour in a ladleful of batter and swirl the pan so the batter coats the sides and pools in the middle.\n\nCover and cook for 3 minutes. The edges crisp and brown, and the centre sets pillow soft. There is no flipping. Slide the appam out onto a plate and make the next.',
    ing: [
      '200 g raw rice, soaked for 4 hours',
      '50 g cooked rice',
      '60 g grated fresh coconut',
      '1/2 tsp fast-action dried yeast',
      '2 tsp sugar',
      '1/2 tsp salt',
      '250 ml water',
      '2 tbsp vegetable oil, for cooking'
    ],
    st: [
      'Drain the soaked rice. Grind it with the cooked rice, coconut, yeast, sugar and half the water to a very smooth batter, adding the rest of the water to reach the consistency of single cream.',
      'Cover and leave in a warm place for 8 hours, until bubbly and risen. Stir in the salt.',
      'Heat a small, deep non-stick pan or wok and wipe with oil. Pour in a ladleful of batter and swirl the pan so the batter coats the sides.',
      'Cover and cook over a medium heat for 3 minutes, until the edges are crisp and golden and the centre is set. Repeat with the rest of the batter.'
    ],
    tips: [
      'Do not stir the batter beyond folding in the salt; the bubbles give the soft centre.',
      'Keep the heat at medium so the edges crisp without scorching.',
      'A little extra water makes the rim lacier.'
    ],
    pair: ['Vegetable stew', 'Kerala chicken curry', 'Egg roast', 'Sweetened coconut milk'],
    store: 'Best eaten straight away. The batter keeps in the fridge for 1 day.',
    nut: [320, 5, 48, 12, 2, 3, 300],
    rest: [720, 'Soaking and fermenting']
  },

  'kerala-puttu': {
    d: 'Cylinders of steamed rice flour layered with grated coconut, soft and crumbly, served with curry or banana and sugar.',
    meta: 'Kerala puttu: steamed cylinders of rice flour layered with grated coconut. Four servings, steamed for 15 minutes.',
    kw: ['kerala puttu', 'puttu recipe', 'rice puttu with coconut', 'steamed rice flour puttu', 'puttu and kadala curry'],
    why: 'Keep the flour crumbly. That is most of the recipe, and the part people get wrong. Puttu flour is lightly roasted rice flour, and the whole dish is made by sprinkling it with salted water and rubbing it between your palms until it looks like wet sand.\n\nThe test is simple. Take a handful and squeeze: it should hold together, then crumble when you press it with a finger. If it stays in a lump, it is too wet. If it falls apart at once, add a spoonful of water. **Do not knead.** Kneading makes a paste that steams into a solid cylinder.\n\nA puttu maker has a tall steel tube that sits on a pot of boiling water. Without one, use any tall, narrow heatproof container with a perforated lid, or fill small cups and steam them in a steamer basket.\n\nLayer a spoonful of coconut, then flour, then coconut again, until the tube is full. Steam for 8 minutes, until steam rises through the top. Push the cylinder out gently with a spoon handle.',
    ing: [
      '250 g puttu flour (roasted rice flour)',
      '1/2 tsp salt',
      '100 ml water',
      '80 g grated fresh coconut'
    ],
    st: [
      'Mix the flour and salt. Sprinkle with the water a little at a time, rubbing with your fingertips until the flour looks like damp sand and holds when squeezed, then crumbles.',
      'Heat water in a puttu maker or steamer to boiling.',
      'Fill the tube or steamer cup with alternating layers: 1 tablespoon of coconut, a layer of flour, coconut again, until full, finishing with coconut.',
      'Steam for 8 minutes, until steam comes through the top. Rest for 1 minute, then push the puttu out in one piece. Repeat to make 4 portions.'
    ],
    tips: [
      'Sieve the flour first for the softest result.',
      'Do not pack the flour tightly into the tube.',
      'Serve while hot; cold puttu turns dry.'
    ],
    pair: ['Kadala curry', 'Ripe bananas and sugar', 'Kerala chicken curry', 'Egg curry'],
    store: 'Best eaten straight away. Leftovers keep in the fridge for 1 day and can be crumbled and sautéed with coconut.',
    nut: [295, 7, 51, 7, 4, 2, 300]
  },

  'idiyappam': {
    d: 'Fine strands of steamed rice flour dough pressed into nests, soft and pale, served with curry or sweetened coconut milk.',
    meta: 'Idiyappam: fine steamed rice flour noodle nests, soft and pale. Makes about twelve, steamed in 15 minutes.',
    kw: ['idiyappam', 'idiyappam recipe', 'string hoppers', 'kerala idiyappam', 'steamed rice noodles from rice flour'],
    why: 'Rice flour, hot water, salt: the dough is the whole recipe, and the only trick is the heat of the water. Boiling water cooks the starch in the flour as it is mixed, so the dough turns soft and pressable instead of crumbly. Cold water gives a dough that clogs the press.\n\nPour the boiling water in slowly while stirring with a spoon. It is too hot to touch at first. Cover for 5 minutes, then knead briefly with oiled hands until smooth. **The dough should feel like soft clay.** If it cracks, add a spoonful of hot water. If it is sticky, add a spoonful of flour.\n\nA sev press or idiyappam maker with a fine disc turns the dough into strands. Press them in a spiral on an oiled idli plate or a piece of banana leaf, a thin nest at a time.\n\nSteam for 8 minutes, until the strands lose their shine and feel firm to the touch. Eat while warm, with a coconut or vegetable curry.',
    ing: [
      '250 g fine rice flour',
      '1/2 tsp salt',
      '300 ml boiling water',
      '1 tbsp vegetable oil',
      '2 tbsp grated fresh coconut, optional'
    ],
    st: [
      'Mix the rice flour and salt in a bowl. Pour in the boiling water gradually, stirring with a spoon, until a dough forms. Cover and leave for 5 minutes.',
      'Add the oil and knead with oiled hands until smooth and soft. Fill a sev press fitted with a fine disc.',
      'Press the dough in a spiral onto oiled idli plates or squares of banana leaf, making about 12 small nests. Top each with a little coconut if using.',
      'Steam over boiling water for 8 minutes, until firm and no longer shiny.'
    ],
    tips: [
      'Knead the dough while it is still warm.',
      'Oil the press well so the dough does not stick.',
      'Use fine rice flour, not coarse.'
    ],
    pair: ['Vegetable stew', 'Egg curry', 'Coconut milk with jaggery', 'Kerala chicken curry'],
    store: 'Best eaten warm. Keeps in the fridge for 1 day and reheats by steaming.',
    nut: [283, 6, 49, 7, 3, 1, 300]
  },

  'kerala-prawn-roast': {
    d: 'Prawns cooked with sliced shallots, curry leaves, black pepper and coconut oil until the masala clings in a dark, nearly dry coating.',
    meta: 'Kerala prawn roast: prawns with shallots, curry leaves and black pepper in coconut oil. Four servings, cooked for 20 minutes.',
    kw: ['kerala prawn roast', 'prawn roast', 'chemmeen roast', 'kerala style prawn masala', 'prawn roast with shallots'],
    why: 'The first week the evenings turn warm and prawns look good at the counter is the time for this. Prawn roast is quick, and its character comes from three things: coconut oil, a lot of shallots and plenty of black pepper.\n\nCook the shallots slowly. They are sweeter than onions and need 10 minutes in the coconut oil to turn deep brown. Add the ginger, garlic and spices, and then the tomato, and cook until the whole mixture is a thick, dark paste. **Do not rush this stage.** A pale masala makes a thin dish.\n\nPrawns go in last. They need only 4 minutes, and the pan should be hot enough to evaporate the juices they release. Stir them over a high heat until the masala clings, with no liquid left in the pan.\n\nCurry leaves are added twice: some at the start for flavour, and a few at the end for their fresh scent. A squeeze of lime at the table lifts the dark, peppery coating.',
    ing: [
      '3 tbsp coconut oil',
      '2 sprigs curry leaves',
      '10 shallots, about 200 g, thinly sliced',
      '1 tbsp ginger and garlic paste',
      '1 tsp ground coriander',
      '1/2 tsp ground turmeric',
      '1 tsp chilli powder',
      '1 tsp ground black pepper',
      '1 tomato, about 100 g, chopped',
      '1/2 tsp salt',
      '500 g raw king prawns, peeled',
      '1 lime, cut into wedges'
    ],
    st: [
      'Heat the oil in a wide pan. Add 1 sprig of curry leaves and the shallots and cook for 10 minutes until deep brown.',
      'Add the ginger and garlic paste and cook for 1 minute. Stir in the coriander, turmeric, chilli powder and half the pepper, then the tomato and salt. Cook for 5 minutes until thick and dark.',
      'Add the prawns and turn the heat to high. Cook for 4 minutes, stirring, until the prawns are pink and the masala clings.',
      'Stir in the remaining pepper and curry leaves. Serve with lime wedges.'
    ],
    tips: [
      'Pat the prawns dry first.',
      'Use a wide pan so the prawns roast rather than steam.',
      'Grind the pepper fresh for the best heat.'
    ],
    pair: ['Steamed rice', 'Kerala parotta', 'Dal', 'Sliced cucumber'],
    store: 'Best eaten the day it is made. Keeps in the fridge for 1 day.',
    nut: [259, 27, 13, 11, 3, 5, 500]
  },

  'raw-mango-curry': {
    d: 'Sour green mango simmered in a mild coconut, yoghurt and turmeric sauce, finished with a tempering of mustard seeds and curry leaves.',
    meta: 'Raw mango curry: sour green mango in a mild coconut, yoghurt and turmeric sauce. Four servings, cooked for 20 minutes.',
    kw: ['raw mango curry', 'kerala raw mango curry', 'green mango curry', 'manga curry', 'raw mango curry with coconut'],
    why: 'Use mangoes that are hard and green, with a sharp, almost sour taste. A ripe mango turns to mush and sweetens the curry; a raw one holds its shape and brings the tang that the whole dish is built around.\n\nPeel the mangoes and cut them into 3 cm pieces, leaving the flesh close to the stone, which adds flavour. Simmer them in a little water with turmeric and salt for 8 minutes, until soft but not falling apart. **The pieces should still hold their edges.** A fork should slide in with a little resistance.\n\nThe sauce is a paste of grated coconut, green chilli and cumin, ground coarsely and stirred in with whisked yoghurt. A small spoonful of jaggery balances the sourness of the fruit; taste before adding more.\n\nKeep the heat low once the yoghurt goes in, or it will split. Finish with a tempering of mustard seeds, dried chilli and curry leaves in coconut oil, poured over the top.',
    ing: [
      '2 raw green mangoes, about 500 g, peeled and cut into 3 cm pieces',
      '1/2 tsp ground turmeric',
      '1/2 tsp salt',
      '150 ml water',
      '60 g grated fresh coconut',
      '2 green chillies',
      '1 tsp cumin seeds',
      '150 g plain yoghurt, whisked',
      '1 tbsp jaggery or brown sugar',
      '1 tbsp coconut oil',
      '1 tsp mustard seeds',
      '1 dried red chilli',
      '1 sprig curry leaves'
    ],
    st: [
      'Put the mango, turmeric, salt and water in a pan. Cover and simmer for 8 minutes until the mango is just soft.',
      'Grind the coconut, green chillies and cumin to a coarse paste with 2 tablespoons of water.',
      'Stir the paste into the mango with the jaggery and simmer for 3 minutes. Lower the heat, add the yoghurt and warm through for 2 minutes without boiling.',
      'Heat the oil in a small pan. Add the mustard seeds, dried chilli and curry leaves until they crackle, and pour over the curry.'
    ],
    tips: [
      'Taste a piece of mango before cooking to judge how sour it is.',
      'Add the jaggery gradually.',
      'Do not boil once the yoghurt is in.'
    ],
    pair: ['Steamed rice', 'Papadums', 'Thoran', 'Fish fry'],
    store: 'Keeps in the fridge for 2 days. Reheat gently.',
    nut: [222, 6, 27, 10, 4, 23, 330]
  },

  'mint-chutney': {
    d: 'A bright green chutney of fresh mint and coriander, green chilli, lemon juice and cumin, blended smooth for chaats, kebabs and samosas.',
    meta: 'Mint chutney: fresh mint and coriander blended with green chilli, lemon juice and cumin. Four servings, ready in 10 minutes.',
    kw: ['mint chutney', 'mint chutney recipe', 'pudina chutney', 'indian mint and coriander chutney', 'green chutney for chaat'],
    why: 'A table of six sitting down to kebabs, samosas and a plate of chaat needs a good green chutney, and it takes 10 minutes. Mint chutney is the sharp, fresh counterpoint to anything rich or fried.\n\nTwo things keep it green. The first is ice: add a couple of ice cubes to the blender and the chutney stays cool, so the herbs do not discolour from the friction of the blades. The second is acid. Lemon juice added at the end holds the colour for hours. **Blend, taste, and adjust with lemon and salt.** Salt brings out the mint.\n\nUse mostly mint leaves with a smaller handful of coriander. All mint is bitter, all coriander is flat. The two together are balanced. Green chillies supply the heat; use two for mild and four for hot, and remove the seeds if you want less.\n\nA spoonful of yoghurt turns the chutney creamy and mild, a good choice for children. Without it, the chutney is sharp and thin enough to drizzle.',
    ing: [
      '60 g fresh mint leaves',
      '30 g fresh coriander, including stalks',
      '2 green chillies',
      '1 tsp ground cumin',
      '1 tsp sugar',
      '1/2 tsp salt',
      '2 tbsp lemon juice',
      '5 tbsp ice-cold water'
    ],
    st: [
      'Put the mint, coriander, chillies, cumin, sugar, salt, lemon juice and the ice-cold water in a blender.',
      'Blend until smooth, scraping down the sides once.',
      'Taste and adjust the salt and lemon juice. Serve at once or chill.'
    ],
    tips: [
      'Add a spoonful of plain yoghurt for a creamy version.',
      'Use fresh, perky herbs; wilted ones taste bitter.',
      'Keep the chutney covered so it does not darken.'
    ],
    pair: ['Samosas', 'Tandoori chicken', 'Chaat', 'Sandwiches'],
    store: 'Keeps in the fridge for 3 days; it darkens slightly. Freeze in ice cube trays for up to 1 month.',
    nut: [20, 1, 4, 0, 1, 2, 300]
  },

  'tamarind-chutney': {
    d: 'A sweet and sour brown chutney of tamarind, jaggery, ginger and roasted cumin, simmered until it coats a spoon.',
    meta: 'Tamarind chutney: tamarind paste simmered with jaggery, ginger and roasted cumin. Ten servings, cooked for 20 minutes.',
    kw: ['tamarind chutney', 'imli chutney', 'sweet tamarind chutney', 'tamarind chutney for chaat', 'meethi chutney'],
    why: 'Sweet, sour and a little spiced: this is the brown chutney that goes on samosa chaat, dahi puri and every plate of papdi. Tamarind is the sour element, jaggery the sweet, and the spices give the background.\n\nTamarind paste from a jar is the easy route and gives a consistent result. Dilute it with water so the mixture is thin enough to simmer; it thickens a great deal as it cooks and again as it cools. **Aim for a pourable consistency in the pan.** What looks right hot will be too thick cold.\n\nJaggery has a deeper, caramel taste than white sugar, but either works. Add it in stages and taste. Ground ginger, roasted cumin, chilli powder and black salt (kala namak) go in with the jaggery. Black salt has a distinctive sulphurous note that is part of the chutney\'s identity.\n\nSimmer for 15 to 20 minutes, until it coats the back of a spoon, then strain if you want it smooth.',
    ing: [
      '100 g tamarind paste',
      '400 ml water',
      '120 g jaggery or brown sugar',
      '1 tsp ground ginger',
      '1 tsp roasted cumin, ground',
      '1/2 tsp chilli powder',
      '1/2 tsp black salt (kala namak)',
      '1/2 tsp salt'
    ],
    st: [
      'Put the tamarind paste and water in a pan and bring to a simmer, stirring until dissolved.',
      'Add the jaggery, ginger, cumin, chilli powder, black salt and salt.',
      'Simmer over a medium heat for 15 to 20 minutes, stirring now and then, until the chutney coats the back of a spoon.',
      'Strain through a sieve if you want a smooth chutney. Cool completely before using.'
    ],
    tips: [
      'The chutney thickens as it cools; stop cooking while it is still pourable.',
      'Add a splash of hot water if it becomes too thick.',
      'Store in a clean jar.'
    ],
    pair: ['Samosas', 'Papdi chaat', 'Dahi puri', 'Pakoras'],
    store: 'Keeps in a clean jar in the fridge for 2 weeks. Freezes well in small portions.',
    nut: [72, 0, 18, 0, 1, 17, 130]
  },

  'boondi-raita': {
    d: 'Whisked yoghurt with soaked crisp gram flour pearls, roasted cumin, chaat masala and mint, served chilled.',
    meta: 'Boondi raita: whisked yoghurt with soaked crisp gram flour pearls, cumin and chaat masala. Four servings, no cooking.',
    kw: ['boondi raita', 'boondi raita recipe', 'indian boondi raita', 'yoghurt raita with boondi', 'raita for biryani'],
    why: 'Most home versions come out gluey or tasteless, and the fix is to soak the boondi for exactly as long as it needs and to season the yoghurt before the boondi goes in. Boondi are tiny fried pearls of gram flour, sold in packets. Dry, they are crisp. Soaked, they turn soft and sponge up the yoghurt.\n\nPut the boondi in a bowl of warm water for 5 minutes, then drain and squeeze gently. **Do not soak them for longer.** They disintegrate. A quick rinse in water also washes off the salt that sticks to some brands.\n\nWhisk the yoghurt with a splash of cold water until smooth and pourable. Season it with salt, roasted cumin, chaat masala and a pinch of chilli. Taste at this stage. Once the boondi is added, the raita takes on flavour only slowly.\n\nStir in the boondi just before serving and top with a pinch of cumin and mint. Chill for 10 minutes if you have time. It is a cooling side for biryani, pulao and anything spicy.',
    ing: [
      '60 g plain boondi',
      '400 g plain yoghurt',
      '4 tbsp cold water',
      '1/2 tsp salt',
      '1 tsp roasted cumin, ground',
      '1/2 tsp chaat masala',
      '1/4 tsp chilli powder',
      '1 tbsp chopped fresh mint'
    ],
    st: [
      'Soak the boondi in a bowl of warm water for 5 minutes. Drain and squeeze gently.',
      'Whisk the yoghurt with the water, salt, cumin and chaat masala until smooth.',
      'Stir in the soaked boondi and chill for 10 minutes.',
      'Sprinkle with the chilli powder and mint and serve.'
    ],
    tips: [
      'Soak the boondi briefly; long soaking makes it dissolve.',
      'Add the boondi at the last minute for a little texture.',
      'Use full-fat yoghurt for the best flavour.'
    ],
    pair: ['Biryani', 'Pulao', 'Paratha', 'Kebabs'],
    store: 'Best eaten within 1 hour of mixing. Keeps in the fridge for 1 day, though the boondi softens.',
    nut: [159, 13, 11, 7, 1, 4, 420]
  },

  'milk-barfi': {
    d: 'Soft, fudge-like squares of milk powder, milk, sugar and ghee flavoured with cardamom and topped with pistachios.',
    meta: 'Milk barfi: soft squares of milk powder, milk, sugar and ghee flavoured with cardamom. Sixteen pieces, cooked for 25 minutes.',
    kw: ['milk barfi', 'milk powder barfi', 'plain barfi recipe', 'indian milk fudge', 'barfi with cardamom and pistachio'],
    why: 'A sweet for Diwali, for a birthday, or for the afternoon someone brings round a box and you want to make a better one. Milk barfi is simple, and it uses milk powder instead of hours of reducing milk.\n\nThe method is quick. Milk, milk powder, sugar and ghee go into a non-stick pan over a low heat, and you stir. The mixture goes lumpy, then smooth, then thick, and after about 15 minutes it pulls away from the sides into one mass. **That is the moment to stop.** Cook it further and the barfi turns dry and crumbly.\n\nBefore it goes into the tin, test a little on a cold plate: it should hold together and feel soft, not sticky. Cardamom is stirred in just before pouring.\n\nPress the mixture into a greased tin, smooth the top, and scatter with chopped pistachios. Leave it to set for 1 hour. Cut into squares with a hot knife. The texture is soft and fudgy, and the barfi keeps for several days.',
    ing: [
      '200 g full-fat milk powder',
      '150 ml whole milk',
      '100 g sugar',
      '60 g ghee',
      '1/2 tsp ground cardamom',
      '2 tbsp chopped pistachios'
    ],
    st: [
      'Grease a 15 cm square tin.',
      'Put the milk powder, milk, sugar and ghee in a non-stick pan over a low heat. Stir constantly for about 15 minutes until the mixture thickens and pulls away from the sides.',
      'Stir in the cardamom and cook for 2 minutes more.',
      'Press into the tin, smooth the top and scatter with the pistachios. Leave to set for 1 hour, then cut into 16 squares.'
    ],
    tips: [
      'Keep the heat low and stir all the time to stop lumps and sticking.',
      'Do not overcook; the barfi firms up as it cools.',
      'Use a hot, dry knife to cut clean squares.'
    ],
    pair: ['Masala chai', 'Gulab jamun', 'Saffron milk', 'Fresh fruit'],
    store: 'Keeps in an airtight tin for 4 days, or in the fridge for up to 1 week.',
    nut: [136, 4, 12, 8, 0, 12, 50],
    rest: [60, 'Setting']
  },

  'bengali-sandesh': {
    d: 'Soft, fudgy Bengali sweets made from fresh curdled milk, kneaded with sugar, cooked briefly and shaped into small pieces.',
    meta: 'Bengali sandesh: soft sweets of fresh curdled milk kneaded with sugar and flavoured with cardamom. Twelve pieces, cooked for 15 minutes.',
    kw: ['bengali sandesh', 'sandesh recipe', 'sondesh', 'chhena sandesh', 'bengali milk sweet'],
    why: 'Why does sandesh feel so different from other Indian sweets? Because it is made of fresh milk curds, not milk reduced by hours of boiling, and so the texture is soft and delicate rather than dense. The curds, called chhena, are made by curdling hot whole milk with lemon juice and draining the whey.\n\nUse full-fat milk. Low-fat milk gives a dry, crumbly chhena. Heat it until it just boils, add the lemon juice a spoonful at a time, and stop when the milk separates into white curds and clear, greenish whey. Strain through muslin and rinse under cold water to remove the lemon taste. **Hang or press the curds for 30 minutes to drain.**\n\nKnead the drained chhena for 5 minutes on a smooth surface, using the heel of your hand, until it is soft and smooth with no grain. The kneading is what gives sandesh its melting texture.\n\nCook the dough with sugar in a pan for a few minutes, until it just comes together. Mould it while warm into small pieces, press a pistachio on each, and chill.',
    ing: [
      '1 litre full-fat milk',
      '3 tbsp lemon juice',
      '60 g caster sugar',
      '1/2 tsp ground cardamom',
      '10 g pistachios, halved'
    ],
    st: [
      'Bring the milk to a boil in a heavy pan. Add the lemon juice a spoonful at a time, stirring, until the curds separate from the whey.',
      'Strain through muslin, rinse under cold water, then squeeze out the whey. Hang or press for 30 minutes.',
      'Knead the chhena for 5 minutes on a smooth surface until completely smooth and soft.',
      'Cook the chhena and sugar in a non-stick pan over a low heat for 6 minutes, stirring, until the mixture comes together and leaves the pan. Stir in the cardamom.',
      'While still warm, divide into 12 pieces, shape into discs and press a pistachio half into each. Chill before serving.'
    ],
    tips: [
      'Rinse the curds well to remove the lemon taste.',
      'Knead until you cannot feel any grains.',
      'Do not overcook the dough; it should stay soft.'
    ],
    pair: ['Masala chai', 'Fresh fruit', 'Rasgulla', 'Saffron milk'],
    store: 'Keeps in the fridge for 2 days. Serve at room temperature.',
    nut: [79, 3, 10, 3, 0, 9, 40]
  },

  'rava-kesari': {
    d: 'A soft, golden pudding of roasted semolina cooked with ghee, sugar and saffron, studded with cashews and raisins.',
    meta: 'Rava kesari: roasted semolina cooked with ghee, sugar and saffron, with cashews and raisins. Six servings, cooked for 20 minutes.',
    kw: ['rava kesari', 'rava kesari recipe', 'kesari bath', 'semolina kesari', 'sooji kesari'],
    why: 'The first cold week of the year is when a bowl of warm semolina pudding earns its place. Rava kesari is a dessert that takes 25 minutes and uses things that sit in most cupboards: semolina, sugar, ghee and a pinch of saffron.\n\nThe flavour starts with the roasting. Semolina is cooked in ghee over a medium heat for 5 minutes until it smells nutty and just starts to colour. Skip this and the pudding tastes raw. **Add the boiling water slowly and keep stirring.** The semolina swells and spits, and lumps form if the water goes in all at once.\n\nWater first, sugar second. Sugar added to dry semolina stops it from swelling, so always let the grain absorb water before the sugar goes in. Once the sugar melts, the pudding loosens for a moment and then thickens again.\n\nThe saffron is soaked in warm milk and added with the sugar for colour and scent. Cashews and raisins are fried in ghee and stirred through at the end. Serve warm.',
    ing: [
      '150 g fine semolina (rava)',
      '4 tbsp ghee',
      '20 g cashew nuts',
      '20 g raisins',
      '450 ml boiling water',
      '150 g sugar',
      '1 pinch saffron strands',
      '2 tbsp warm milk',
      '1/2 tsp ground cardamom'
    ],
    st: [
      'Soak the saffron in the warm milk.',
      'Heat 1 tablespoon of ghee in a pan, fry the cashews until golden, then the raisins for 30 seconds. Remove.',
      'Add 2 tablespoons of ghee and the semolina to the pan and roast over a medium heat for 5 minutes, stirring, until fragrant.',
      'Pour in the boiling water gradually, stirring all the time. Cook for 3 minutes until thick.',
      'Add the sugar, saffron milk, cardamom and the remaining ghee. Cook for 5 minutes until glossy. Stir in the cashews and raisins.'
    ],
    tips: [
      'Use boiling water so the semolina cooks evenly.',
      'Do not stop stirring when the water goes in.',
      'Serve warm; the pudding stiffens as it cools.'
    ],
    pair: ['Masala chai', 'Upma', 'Filter coffee', 'Fresh mango'],
    store: 'Best eaten warm. Keeps in the fridge for 2 days; reheat with a splash of milk.',
    nut: [312, 4, 47, 12, 1, 28, 5]
  },

  'kashmiri-chai': {
    d: 'A pink, creamy Kashmiri tea made by boiling green tea leaves with bicarbonate of soda and cardamom, then adding milk.',
    meta: 'Kashmiri chai: pink Kashmiri tea made from green tea leaves boiled with bicarbonate of soda, cardamom and milk. Four servings, ready in 20 minutes.',
    kw: ['kashmiri chai', 'noon chai', 'pink tea', 'kashmiri pink tea recipe', 'kashmiri tea with milk'],
    why: 'If the tea comes out brown instead of pink, you have missed the long boil. This is the weekend tea of Kashmir, and the colour does not come from food dye: it comes from boiling green tea leaves for a long time with a pinch of bicarbonate of soda, until the water turns deep red.\n\nThe usual leaves are a special tightly rolled green tea called Kashmiri chai or "samavar" tea, sold in Asian shops. Ordinary green tea leaves will give a paler result. Simmer for 15 minutes, lifting a ladleful and pouring it back from a height. **That aeration is what builds the colour.**\n\nWhen the decoction is dark and reduced by about half, add cold milk and keep stirring over the heat. The colour changes from red to a soft salmon pink as the milk goes in.\n\nThe traditional version is salty, with a pinch of salt and sometimes baking soda. If you prefer a sweet tea, use sugar instead and top with chopped almonds and pistachios. Strain into cups.',
    ing: [
      '2 tsp Kashmiri green tea leaves',
      '500 ml water',
      '1/4 tsp bicarbonate of soda',
      '1 g green cardamom pods, crushed',
      '300 ml cold whole milk',
      '1/4 tsp salt',
      '1 tbsp chopped almonds and pistachios'
    ],
    st: [
      'Put the tea leaves, water, bicarbonate of soda and cardamom in a pan. Bring to a boil and simmer for 15 minutes, lifting and pouring back a ladleful every few minutes, until deep red and reduced by about half.',
      'Pour in the cold milk and the salt. Bring to a gentle boil, stirring, until the tea turns pink, about 3 minutes.',
      'Strain into cups and top with the chopped nuts.'
    ],
    tips: [
      'Use a pan with a wide base for even evaporation.',
      'For a sweet version, replace the salt with sugar to taste.',
      'Add the milk cold; a sudden change helps the colour.'
    ],
    pair: ['Kulcha or bread', 'Almond biscuits', 'Sheermal', 'Dates'],
    store: 'Best made fresh. The decoction keeps in the fridge for 1 day; reheat and add milk.',
    nut: [68, 3, 5, 4, 0, 4, 260]
  },

  'sol-kadhi': {
    d: 'A pink, cooling drink of coconut milk infused with dried kokum, garlic, green chilli and coriander, served chilled.',
    meta: 'Sol kadhi: a pink, cooling coconut milk drink infused with kokum, garlic and green chilli. Four servings, ready in 15 minutes.',
    kw: ['sol kadhi', 'sol kadhi recipe', 'kokum coconut milk drink', 'konkani sol kadhi', 'coconut kokum digestive drink'],
    why: 'Soak the kokum first. Dried kokum is a sour, dark purple rind, and when it steeps in warm water for 10 minutes it gives up its colour and tang, turning the water a deep pink-purple that becomes the base of the drink.\n\nSol kadhi comes from the Konkan coast and is served with a seafood and rice meal. The sourness of the kokum, the richness of the coconut milk and the sharpness of raw garlic work together, and the drink cools the mouth after spicy food.\n\nUse fresh coconut milk if you can, or a good tinned one. **Do not boil the finished kadhi.** Coconut milk splits when it is heated hard, and the kokum loses its fresh colour. Everything here is mixed cold.\n\nBlend the coconut milk with the garlic, green chilli and cumin, then stir in the kokum water, salt and a pinch of sugar. Taste and adjust: it should be sour, mild and slightly sweet. Chill and serve in small glasses, with fresh coriander on top.',
    ing: [
      '10 g dried kokum',
      '150 ml warm water',
      '400 ml coconut milk',
      '2 garlic cloves',
      '1 green chilli',
      '1/2 tsp ground cumin',
      '1/2 tsp salt',
      '1/2 tsp sugar',
      '2 tbsp chopped fresh coriander'
    ],
    st: [
      'Soak the kokum in the warm water for 10 minutes. Squeeze it to release the colour and sourness, then strain, keeping the liquid.',
      'Blend the coconut milk with the garlic, green chilli and cumin until smooth.',
      'Stir in the kokum liquid, salt and sugar. Taste and adjust.',
      'Chill for 30 minutes and serve topped with the coriander.'
    ],
    tips: [
      'Taste the kokum soaking water; if it is weak, add a little more kokum.',
      'Serve it cold, not iced, so it does not water down.',
      'Skip the garlic if you prefer a milder drink.'
    ],
    pair: ['Steamed rice and fish curry', 'Fried prawns', 'Bombil fry', 'Spicy seafood'],
    store: 'Keeps in the fridge for 1 day. Stir before serving.',
    nut: [185, 2, 6, 17, 1, 3, 310]
  },

  'badam-milk': {
    d: 'Warm milk simmered with ground almonds, sugar, cardamom and saffron, served hot in winter or chilled in summer.',
    meta: 'Badam milk: milk simmered with ground almonds, sugar, cardamom and saffron. Four servings, ready in 15 minutes.',
    kw: ['badam milk', 'badam milk recipe', 'almond milk drink with saffron', 'indian almond milk', 'hot badam milk'],
    why: 'Soak the almonds in hot water and peel them. It sounds like a chore, but it is the single step that decides whether the milk is smooth or gritty. After 10 minutes in hot water the skins slide off between your fingers, and the blanched almonds grind to a fine, creamy paste.\n\nGrind them with a splash of the milk until there is no grit left. **Strain through a fine sieve if you can feel grains when you rub a drop between your fingers.**\n\nThe milk should be whole, for body. Warm it gently with sugar, cardamom and a pinch of saffron, then whisk in the almond paste and let it all simmer for 5 minutes. Stir often, because milk catches easily on the base of the pan.\n\nServe it hot on a cold night with a few sliced pistachios on top. In summer, chill it for 2 hours and pour over ice, in which case add a little extra sugar, since cold dulls sweetness. A pinch of turmeric, if you like, gives golden milk.',
    ing: [
      '60 g blanched almonds',
      '500 ml whole milk',
      '3 tbsp sugar',
      '1/2 tsp ground cardamom',
      '1 pinch saffron strands',
      '1 tbsp chopped pistachios'
    ],
    st: [
      'Soak the almonds in hot water for 10 minutes. Drain and slip off the skins.',
      'Blend the almonds with 100 ml of the milk to a very smooth paste.',
      'Heat the remaining milk with the sugar, cardamom and saffron over a medium heat until steaming.',
      'Whisk in the almond paste and simmer gently for 5 minutes, stirring, until slightly thickened.',
      'Pour into glasses and top with the pistachios.'
    ],
    tips: [
      'Stir often so the milk does not catch on the base.',
      'Chill for 2 hours for a cold version, and add a little sugar.',
      'Use a fine sieve for the smoothest milk.'
    ],
    pair: ['Samosas', 'Dates', 'Biscuits', 'Fruit'],
    store: 'Keeps in the fridge for 2 days. Stir well before serving.',
    nut: [229, 8, 20, 13, 2, 16, 60]
  },

  'tender-coconut-pudding': {
    d: 'A chilled, softly set pudding of coconut water, coconut milk and tender coconut flesh, thickened with agar-agar.',
    meta: 'Tender coconut pudding: coconut water, coconut milk and soft coconut flesh set with agar-agar. Six servings, chilled for 2 hours.',
    kw: ['tender coconut pudding', 'tender coconut pudding recipe', 'coconut water pudding', 'tender coconut dessert', 'coconut pudding with agar agar'],
    why: 'In the hottest week of the year, no one wants to turn the oven on, and this is the dessert for that week. Tender coconut pudding is made on the hob in 10 minutes and set in the fridge, and it tastes cool and clean.\n\nThe core of it is tender coconut: the young, green coconut whose flesh is soft and translucent. If you cannot find it, use the best coconut water you can buy and soft coconut flesh from a tin or the frozen aisle. Blend the flesh with the coconut milk until smooth, and keep a few pieces back to fold through for texture.\n\n**Agar-agar needs boiling to set.** Whisk it into the liquid cold, bring it up to the boil, and simmer for 2 minutes. Unlike gelatine, it sets firm at room temperature and does not melt, so there is no worry on a warm table.\n\nPour into small glasses or a dish and leave it to set for 2 hours in the fridge. The texture should be soft but sliceable, like a light blancmange. Serve topped with a few strips of coconut.',
    ing: [
      '300 ml coconut water',
      '300 ml coconut milk',
      '100 g soft coconut flesh',
      '60 g sugar',
      '2 tsp agar-agar powder',
      '1/2 tsp ground cardamom',
      '2 tbsp coconut flesh strips, to serve'
    ],
    st: [
      'Blend the coconut flesh with the coconut water until smooth. Pour into a pan with the coconut milk, sugar and agar-agar and whisk well.',
      'Bring to a boil, stirring, then simmer gently for 2 minutes. Stir in the cardamom.',
      'Pour into 6 small glasses or a dish and leave to cool for 10 minutes.',
      'Chill for 2 hours until set. Top with the coconut strips to serve.'
    ],
    tips: [
      'Make sure the agar-agar is fully dissolved before it boils.',
      'Taste the coconut water first; very sweet ones need less sugar.',
      'Set in a dish and cut into squares for a firmer pudding.'
    ],
    pair: ['Fresh mango', 'Fruit salad', 'Masala chai', 'Toasted coconut'],
    store: 'Keeps in the fridge for 2 days.',
    nut: [224, 2, 18, 16, 3, 14, 70],
    rest: [120, 'Chilling']
  },

  'slow-cooker-chicken-tikka-masala': {
    d: 'Chicken thighs cooked slowly in a tomato, onion and yoghurt sauce with tikka spices, finished with cream.',
    meta: 'Slow cooker chicken tikka masala: chicken in a tomato and yoghurt sauce with tikka spices. Four servings, cooked for 4 hours.',
    kw: ['slow cooker chicken tikka masala', 'crockpot chicken tikka masala', 'slow cooker tikka masala', 'chicken tikka masala in the slow cooker', 'slow cooked indian chicken curry'],
    why: 'Chicken thighs, tinned tomatoes, onion, yoghurt, spices: five things to put in the pot, and four hours to do something else. The slow cooker suits this curry because thighs stay tender over a long cook, and the sauce reduces as the lid traps and releases steam.\n\nThe marinade is simple. Yoghurt, lemon juice, ginger, garlic and spices go over the chicken for 30 minutes while you do other things. That is enough to season the meat and begin tenderising it. **Do not trim off all the fat.** A little fat melts into the sauce and carries the flavour.\n\nSkip the pre-browning if you are short of time, though 5 minutes in a hot pan adds a roasted flavour and a better colour. The slow cooker does not brown anything on its own.\n\nCook on high for 4 hours, or low for 7. The sauce will look thin at first and thickens once the cream goes in. Stir that in 10 minutes before serving, with a spoonful of garam masala and fresh coriander on top.',
    ing: [
      '800 g boneless skinless chicken thighs, halved',
      '150 g plain yoghurt',
      '2 tbsp lemon juice',
      '1 tbsp ginger and garlic paste',
      '2 tsp garam masala',
      '2 tsp paprika',
      '1 tsp ground cumin',
      '1 tsp ground turmeric',
      '1 tsp salt',
      '1 onion, about 150 g, finely chopped',
      '400 g tinned chopped tomatoes',
      '2 tbsp tomato purée',
      '100 ml double cream',
      '2 tbsp chopped fresh coriander'
    ],
    st: [
      'Mix the chicken with the yoghurt, lemon juice, ginger and garlic paste, 1 tsp of the garam masala, paprika, cumin, turmeric and salt. Leave for 30 minutes.',
      'Put the onion, tomatoes and tomato purée in the slow cooker. Add the chicken and its marinade.',
      'Cover and cook on high for 4 hours, until the chicken is very tender.',
      'Stir in the cream and the remaining garam masala. Cook for 10 minutes more.',
      'Scatter with the coriander.'
    ],
    tips: [
      'Do not lift the lid during cooking; each peek adds time.',
      'If the sauce is thin, remove the lid for the last 20 minutes.',
      'Brown the chicken in a pan first for more flavour.'
    ],
    pair: ['Basmati rice', 'Naan', 'Cucumber raita', 'Mango chutney'],
    store: 'Keeps in the fridge for 3 days and freezes for up to 3 months.',
    nut: [407, 46, 13, 19, 3, 7, 810]
  },

  'instant-pot-butter-chicken': {
    d: 'Chicken thighs pressure-cooked in a spiced tomato sauce, then finished with butter and cream for a rich, mild curry.',
    meta: 'Instant Pot butter chicken: chicken pressure-cooked in a spiced tomato sauce, finished with butter and cream. Four servings, cooked in 25 minutes.',
    kw: ['instant pot butter chicken', 'instant pot butter chicken recipe', 'instant pot murgh makhani', 'butter chicken in the instant pot', 'instant pot indian chicken curry'],
    why: 'It looks like the slow version and tastes almost the same, but the pressure cooker does in 8 minutes what a pan does in 40. The sauce is built in the pot: onion, ginger and garlic softened on the sauté setting, spices bloomed in the fat, then tomatoes and chicken.\n\nThe main danger in a pressure cooker is the burn warning, which comes from a dry base. Deglaze well after sautéing: pour in the tomatoes and scrape the base until nothing sticks. **Do not stir once the lid is on.** Thick sauce settles at the bottom and triggers the warning.\n\nChicken thighs are best. They stay tender under pressure, whereas breast meat turns dry. Cut them into 4 cm pieces so they cook in 8 minutes at high pressure.\n\nRelease the pressure naturally for 5 minutes, then manually. Stir in the butter and cream with the sauté setting back on low, and simmer for 3 minutes to thicken. Finish with kasuri methi crushed between the palms.',
    ing: [
      '2 tbsp butter',
      '1 onion, about 150 g, finely chopped',
      '1 tbsp ginger and garlic paste',
      '2 tsp garam masala',
      '1 tsp paprika',
      '1 tsp ground cumin',
      '1/2 tsp chilli powder',
      '400 g tinned chopped tomatoes',
      '700 g boneless skinless chicken thighs, cut into 4 cm pieces',
      '1 tsp salt',
      '2 tbsp butter, to finish',
      '100 ml double cream',
      '1 tbsp dried fenugreek leaves',
      '2 tbsp chopped fresh coriander'
    ],
    st: [
      'Set the pot to sauté. Melt the first 2 tbsp butter and cook the onion for 5 minutes. Add the ginger and garlic paste and spices and cook for 1 minute.',
      'Add the tomatoes, scraping the base to loosen any bits. Add the chicken and salt and do not stir.',
      'Lock the lid and cook at high pressure for 8 minutes. Release the pressure naturally for 5 minutes, then manually.',
      'Set to sauté on low. Stir in the remaining butter and the cream and simmer for 3 minutes.',
      'Crush the fenugreek leaves over the top and scatter with the coriander.'
    ],
    tips: [
      'Deglaze fully to avoid the burn warning.',
      'Blend the sauce with a stick blender for a smoother texture.',
      'Add the cream at the end; pressure can split it.'
    ],
    pair: ['Basmati rice', 'Garlic naan', 'Cucumber raita', 'Pickled onions'],
    store: 'Keeps in the fridge for 3 days and freezes for up to 3 months.',
    nut: [453, 37, 11, 29, 3, 5, 770]
  },

  'instant-pot-dal': {
    d: 'Yellow split lentils pressure-cooked until creamy and finished with a hot tempering of cumin, garlic and chilli.',
    meta: 'Instant Pot dal: yellow split lentils pressure-cooked until creamy and finished with a cumin and garlic tempering. Four servings, cooked in 25 minutes.',
    kw: ['instant pot dal', 'instant pot toor dal', 'instant pot dal recipe', 'instant pot lentil dal', 'instant pot dal tadka'],
    why: 'Does dal need soaking in a pressure cooker? No, and that is the point of making it this way. Split lentils (toor dal) cook to a soft, creamy purée in 10 minutes under pressure, with no overnight wait, and the result tastes like a pot that has simmered all afternoon.\n\nRinse the dal in several changes of water until the water runs nearly clear. **Skim any foam from the surface before the lid goes on.** In a pressure cooker foam can block the valve, and a spoonful of oil in the pot helps keep it down.\n\nThe ratio is 1 part dal to 3 parts water. Add turmeric and salt, and a chopped tomato if you like a little tang. After 10 minutes at high pressure and a natural release of 10 minutes, the lentils will have collapsed. A whisk through the pot makes it creamy.\n\nThe tempering finishes it. Heat ghee in a small pan, add cumin seeds, sliced garlic, dried chillies and a pinch of asafoetida, and pour the sizzling mixture over the dal. Stir and serve at once.',
    ing: [
      '200 g toor dal (split pigeon peas)',
      '600 ml water',
      '1/2 tsp ground turmeric',
      '1 tomato, about 100 g, chopped',
      '1 tsp salt',
      '1 tsp vegetable oil',
      '2 tbsp ghee',
      '1 tsp cumin seeds',
      '4 garlic cloves, sliced',
      '2 dried red chillies',
      '1/4 tsp asafoetida',
      '2 tbsp chopped fresh coriander'
    ],
    st: [
      'Rinse the dal in several changes of water until clear. Put it in the pot with the water, turmeric, tomato, salt and the oil.',
      'Lock the lid and cook at high pressure for 10 minutes. Release naturally for 10 minutes. Whisk the dal until creamy, adding hot water if it is too thick.',
      'Heat the ghee in a small pan. Add the cumin seeds, garlic, dried chillies and asafoetida and cook for 1 minute until the garlic is golden.',
      'Pour the sizzling tempering over the dal, stir and add the coriander.'
    ],
    tips: [
      'Add a splash of hot water if the dal thickens as it stands.',
      'Do not skip the rinse; it removes foam-causing starch.',
      'Add lemon juice at the end for brightness.'
    ],
    pair: ['Steamed rice', 'Roti', 'Cucumber salad', 'Papadums'],
    store: 'Keeps in the fridge for 4 days and freezes for up to 3 months.',
    nut: [274, 12, 34, 10, 8, 2, 600]
  },

  'instant-pot-chana-masala': {
    d: 'Dried chickpeas pressure-cooked from dry, with no soaking, in a tomato, onion and spice sauce until soft and thick.',
    meta: 'Instant Pot chana masala: dried chickpeas pressure-cooked without soaking in a tomato and spice sauce. Four servings, cooked in about an hour.',
    kw: ['instant pot chana masala', 'instant pot chickpea masala', 'instant pot chickpea curry', 'chana masala from dried chickpeas', 'instant pot chole'],
    why: 'Dried chickpeas, onions, tomatoes, spices and about an hour: that is the whole shopping list. Chana masala made from dry chickpeas has a nuttier flavour than the tinned version, and the pressure cooker removes the need for an overnight soak.\n\nSauté the onion, ginger and garlic first until golden, then bloom the spices in the fat for 1 minute. Add the tomatoes and scrape the base clean so the pot does not trigger the burn warning. **Put the chickpeas in on top of the sauce and do not stir.** The chickpeas need plenty of water, and the sauce must not sit on the base.\n\nCook at high pressure for 40 minutes for unsoaked chickpeas, then release naturally for 15 minutes. Quick release makes the skins burst and the chickpeas split.\n\nStir, then mash a ladleful of chickpeas against the side of the pot to thicken the sauce. If it is still thin, simmer on the sauté setting for 5 minutes. Finish with garam masala, lemon juice and coriander.',
    ing: [
      '200 g dried chickpeas, rinsed',
      '2 tbsp vegetable oil',
      '1 onion, about 150 g, finely chopped',
      '1 tbsp ginger and garlic paste',
      '2 tsp ground coriander',
      '1 tsp ground cumin',
      '1 tsp garam masala',
      '1/2 tsp ground turmeric',
      '1 tsp chilli powder',
      '400 g tinned chopped tomatoes',
      '500 ml water',
      '1 tsp salt',
      '1 tbsp lemon juice',
      '2 tbsp chopped fresh coriander'
    ],
    st: [
      'Set the pot to sauté. Heat the oil and cook the onion for 6 minutes. Add the ginger and garlic paste and spices and cook for 1 minute.',
      'Add the tomatoes, scraping the base. Add the water and salt, then the chickpeas on top. Do not stir.',
      'Lock the lid and cook at high pressure for 40 minutes. Release naturally for 15 minutes.',
      'Stir, mashing a few chickpeas against the side. Sauté for 5 minutes if the sauce is thin.',
      'Stir in the lemon juice and coriander.'
    ],
    tips: [
      'Old chickpeas take longer; check one before serving and cook for 5 minutes more if firm.',
      'Do not add salt in the beginning if your chickpeas are very old.',
      'Natural release keeps the skins on.'
    ],
    pair: ['Bhatura', 'Steamed rice', 'Sliced red onion', 'Cucumber raita'],
    store: 'Keeps in the fridge for 4 days and freezes for up to 3 months.',
    nut: [173, 5, 18, 9, 5, 6, 760]
  },

  'sheet-pan-chicken-tikka': {
    d: 'Yoghurt-marinated chicken thighs and onion roasted together on one tray until charred at the edges.',
    meta: 'Sheet pan chicken tikka: yoghurt-marinated chicken thighs and onion roasted on one tray. Four servings, cooked in 25 minutes.',
    kw: ['sheet pan chicken tikka', 'oven chicken tikka', 'chicken tikka in the oven', 'sheet pan indian chicken', 'baked chicken tikka'],
    why: 'Keep the oven hot. That is most of the recipe, and the part people skip. A tikka marinade is thick and sticky, and it only chars at the edges at 240°C. Lower than that, the chicken bakes pale and wet.\n\nThe marinade is yoghurt, lemon juice, ginger, garlic, garam masala, cumin, turmeric and chilli powder. Thigh meat tolerates the heat and stays juicy, and cutting it into 4 cm pieces gives plenty of surface for the char. Coat the chicken and leave it for 30 minutes. **A longer marinade is fine, but there is no need for more.**\n\nSpread the chicken and wedges of onion on a preheated tray in a single layer, leaving gaps. A crowded tray steams. Roast for 25 minutes, turning once, until the edges are blackened and the juices run clear.\n\nA squeeze of lemon and a shower of coriander finish the tray. It makes a quick dinner with rice and chutney, or the filling for wraps, and cleaning up takes a minute.',
    ing: [
      '800 g boneless skinless chicken thighs, cut into 4 cm pieces',
      '150 g plain yoghurt',
      '2 tbsp lemon juice',
      '1 tbsp ginger and garlic paste',
      '2 tsp garam masala',
      '1 tsp ground cumin',
      '1 tsp ground turmeric',
      '1 tsp chilli powder',
      '1 tsp salt',
      '2 tbsp vegetable oil',
      '2 red onions, cut into wedges',
      '2 tbsp chopped fresh coriander',
      '1 lemon, cut into wedges'
    ],
    st: [
      'Mix the yoghurt, lemon juice, ginger and garlic paste, spices, salt and oil. Add the chicken, coat well and leave for 30 minutes.',
      'Heat the oven to 240°C (220°C fan) and put a large baking tray in to heat.',
      'Spread the chicken and onion wedges on the hot tray in one layer.',
      'Roast for 25 minutes, turning once, until charred at the edges and cooked through.',
      'Scatter with the coriander and serve with the lemon wedges.'
    ],
    tips: [
      'Use two trays if the chicken is crowded.',
      'Pat the chicken dry before marinating.',
      'Finish under the grill for 2 minutes if you want more char.'
    ],
    pair: ['Basmati rice', 'Naan or wraps', 'Mint chutney', 'Cucumber raita'],
    store: 'Keeps in the fridge for 3 days. Reheat in a hot oven.',
    nut: [373, 44, 11, 17, 2, 4, 800]
  },

  'lime-pickle': {
    d: 'Quartered limes softened with salt, then cooked with fenugreek, mustard, chilli and asafoetida in oil, left to mature in a jar.',
    meta: 'Lime pickle: quartered limes softened with salt and cooked with fenugreek, mustard and chilli in oil. Twenty servings, matured for a week.',
    kw: ['lime pickle', 'indian lime pickle', 'lime pickle recipe', 'nimbu achar', 'spicy lime pickle'],
    why: 'It tastes harsh on the first day, and that is why the instruction here is to wait. Lime pickle is a store-cupboard preserve that improves for weeks. The salt draws out the juice, the peel softens, and the sharp bitterness settles into something deep and tangy.\n\nChoose thin-skinned limes with no soft spots, and wipe them clean. Cut each into eight small wedges and remove any seeds. Toss them with salt and turmeric and leave them in a jar for 2 days, shaking each day. The limes release juice and begin to soften. **Do not use a metal bowl for this.** The acid reacts with it.\n\nThe spice mix is cooked briefly in hot oil: mustard seeds, fenugreek seeds, chilli powder and asafoetida. Pour it over the limes while it is hot, and stir. The oil protects the surface from spoilage and carries the heat.\n\nSterilise the jar before using it, press the limes below the oil, and leave the jar in a cool place for a week before eating. It goes well with curry and rice.',
    ing: [
      '10 limes, about 600 g, washed and cut into 8 wedges each',
      '3 tbsp salt',
      '1 tsp ground turmeric',
      '100 ml vegetable oil',
      '2 tsp mustard seeds',
      '1 tsp fenugreek seeds',
      '3 tbsp chilli powder',
      '1/2 tsp asafoetida',
      '1 tbsp sugar'
    ],
    st: [
      'Toss the lime wedges with the salt and turmeric in a clean glass jar. Seal and leave in a cool place for 2 days, shaking once a day.',
      'Heat the oil in a small pan. Add the mustard seeds and fenugreek seeds until they crackle, then take off the heat and stir in the chilli powder, asafoetida and sugar.',
      'Pour the hot spiced oil over the limes and stir well.',
      'Press the limes down so they are below the oil, seal, and leave for 1 week before eating.'
    ],
    tips: [
      'Sterilise the jar with boiling water and dry it fully.',
      'Use a clean, dry spoon each time you take pickle out.',
      'Shake the jar every day for the first week.'
    ],
    pair: ['Rice and dal', 'Curry and poppadoms', 'Cheese sandwiches', 'Paratha'],
    store: 'Keeps in a sterilised jar in a cool place for up to 2 months, or in the fridge for longer.',
    nut: [65, 0, 5, 5, 1, 1, 1090],
    rest: [12960, 'Salting and maturing']
  },

  'mango-pickle': {
    d: 'Cubes of raw green mango salted and dried, then mixed with mustard, fenugreek and fennel and a mustard-oil spice mix, left to mature in a jar.',
    meta: 'Mango pickle: raw mango cubes salted, then mixed with mustard, fenugreek and fennel in oil. Twenty servings, matured for several days.',
    kw: ['mango pickle', 'raw mango pickle', 'indian mango pickle', 'aam ka achar', 'mango pickle recipe'],
    why: 'In the first hot weeks of summer, when raw mangoes appear in the shops, this is the pickle to make. Mango pickle is a preserve built on salt, oil and spice, and it keeps the sour taste of the green fruit for months.\n\nUse hard, completely green mangoes. A ripe mango turns to mush. Cut the flesh, with the skin on, into 2 cm pieces. The skin helps the cubes keep their shape and adds a pleasant chew.\n\nSalt and turmeric come first, and the cubes sit in them for a day to release their water. Drain and dry them thoroughly, spreading them on a clean cloth. **Any moisture left on the mango can spoil the jar.** Dry them for at least 3 hours, or longer in a warm place.\n\nThe spice mix is crushed mustard seeds, fenugreek, fennel, nigella seeds, chilli powder and asafoetida, stirred into the mango with mustard or vegetable oil. Pack into a sterilised jar, press down, and leave it for 3 days in a warm place, shaking each day. The oil should always cover the mango.',
    ing: [
      '4 raw green mangoes, about 1 kg, cut into 2 cm pieces with the skin on',
      '3 tbsp salt',
      '1 tsp ground turmeric',
      '2 tbsp mustard seeds, coarsely crushed',
      '1 tsp fenugreek seeds, coarsely crushed',
      '1 tbsp fennel seeds, coarsely crushed',
      '1 tsp nigella seeds',
      '3 tbsp chilli powder',
      '1/2 tsp asafoetida',
      '200 ml mustard oil or vegetable oil'
    ],
    st: [
      'Toss the mango pieces with the salt and turmeric in a glass bowl. Cover and leave for 24 hours.',
      'Drain the mango, spread on a clean cloth and dry for at least 3 hours.',
      'Mix the crushed mustard, fenugreek, fennel, nigella, chilli powder and asafoetida. Heat the oil until just smoking, cool for 5 minutes, then stir into the spices.',
      'Toss the mango with the spiced oil, pack into a sterilised jar and press down so the oil covers the fruit.',
      'Leave in a warm place for 3 days, shaking daily, before eating.'
    ],
    tips: [
      'Use a dry, sterilised jar.',
      'Top up with oil if the mango rises above it.',
      'Mustard oil should be heated until it stops smelling raw.'
    ],
    pair: ['Paratha', 'Curd rice', 'Dal and rice', 'Khichdi'],
    store: 'Keeps in a cool, dark place for up to 3 months, or in the fridge for longer.',
    nut: [130, 1, 9, 10, 1, 7, 1100],
    rest: [5940, 'Curing, drying and maturing']
  },

  'aam-ras': {
    d: 'Ripe mango pulp whisked smooth with milk, sugar and cardamom, served chilled as a dessert or alongside puri.',
    meta: 'Aam ras: ripe mango pulp blended with milk, sugar and cardamom, served chilled. Four servings, no cooking.',
    kw: ['aam ras', 'aam ras recipe', 'mango pulp dessert', 'maharashtrian aam ras', 'aamras with puri'],
    why: 'Ripe mangoes, and nothing else worth mentioning: aam ras is a dessert that works only when the fruit is right. Choose mangoes that are fragrant at the stalk and give slightly when pressed. Alphonso, Kesar and Honey mangoes are the classic choices, but any sweet, fibreless variety will do.\n\nPeel the mangoes and scrape the flesh off the stones, pressing the stone to extract every bit of pulp. Blend it until completely smooth. **Strain the pulp if the mango is fibrous.** A fibrous mango leaves strands that spoil the silky finish.\n\nAdd milk a spoonful at a time and stop when the ras is the thickness of thin custard. Sugar depends on the fruit; taste first and add it gradually. A pinch of ground cardamom or saffron gives a floral lift.\n\nChill for at least 30 minutes before serving. The traditional way is to eat it with hot puris, the cold, sweet ras against the salty, crisp bread.',
    ing: [
      '3 ripe mangoes, about 900 g, peeled and stoned',
      '100 ml cold whole milk',
      '2 tbsp sugar',
      '1/2 tsp ground cardamom',
      '1 pinch saffron strands'
    ],
    st: [
      'Blend the mango flesh until completely smooth. Strain if it contains fibres.',
      'Stir in the milk, a spoonful at a time, until the ras is the thickness of thin custard.',
      'Add the sugar, cardamom and saffron and stir until the sugar dissolves. Taste and add more sugar if needed.',
      'Chill for at least 30 minutes before serving.'
    ],
    tips: [
      'Scrape the pulp from the stones; it is sweet and plentiful.',
      'Skip the sugar if the mangoes are very sweet.',
      'Serve in small glasses or bowls.'
    ],
    pair: ['Hot puris', 'Shrikhand', 'Almonds', 'Vanilla ice cream'],
    store: 'Keeps in the fridge for 2 days. Stir before serving.',
    nut: [194, 3, 41, 2, 4, 38, 10]
  },

  'pesarattu': {
    d: 'Thin, savoury Andhra pancakes of soaked whole green moong ground with ginger, green chilli and cumin, cooked on a hot griddle.',
    meta: 'Pesarattu: thin Andhra pancakes of soaked green moong ground with ginger, chilli and cumin. Four servings, cooked in 20 minutes.',
    kw: ['pesarattu', 'pesarattu recipe', 'green moong dosa', 'andhra pesarattu', 'moong dal dosa with ginger'],
    why: 'Salt the batter after grinding, not before, and soak the beans for six hours. Everything else follows from those two. Pesarattu is an Andhra breakfast dosa made from whole green moong beans, not from rice, so there is no fermentation and no waiting beyond the soak.\n\nThe beans should be soaked in plenty of water until they have swollen and the skins are loose. Drain and grind them with a small piece of ginger, green chillies, cumin and a little water to a smooth batter. It should be thicker than a pancake batter, but pourable. **A thin batter will tear when spread.** A thick one will not spread at all.\n\nThe pan has to be hot and lightly oiled. Pour a ladleful into the centre and spread it with the back of the ladle in a circular motion, thin and even. Drizzle a little oil at the edges.\n\nCook for 2 minutes on one side until the underside is green-gold and crisp. Fold and serve straight away with ginger chutney, or with upma inside, which is the traditional pairing.',
    ing: [
      '200 g whole green moong beans, soaked for 6 hours',
      '2 green chillies',
      '1 tbsp ginger, chopped',
      '1 tsp cumin seeds',
      '1 tsp salt',
      '100 ml water',
      '1 small onion, about 80 g, finely chopped',
      '4 tbsp vegetable oil, for cooking'
    ],
    st: [
      'Drain the soaked moong. Grind with the chillies, ginger, cumin, salt and water to a smooth batter, thicker than pancake batter.',
      'Heat a flat griddle or non-stick pan over a medium-high heat and oil lightly.',
      'Pour a ladleful of batter into the centre and spread in a circular motion into a thin round. Scatter with a little onion.',
      'Drizzle a teaspoon of oil around the edge and cook for 2 minutes until the base is crisp. Fold and serve.'
    ],
    tips: [
      'Use the back of the ladle and light pressure to spread.',
      'Add a splash of water if the batter is too thick.',
      'Wipe the pan with an oiled cloth between pesarattu.'
    ],
    pair: ['Ginger chutney', 'Coconut chutney', 'Upma', 'Tomato chutney'],
    store: 'Best eaten at once. The batter keeps in the fridge for 1 day.',
    nut: [319, 12, 34, 15, 9, 4, 600],
    rest: [360, 'Soaking the beans']
  },

  'kootu': {
    d: 'A South Indian stew of yellow split lentils and vegetables in a coconut and cumin paste, finished with a mustard seed tempering.',
    meta: 'Kootu: yellow split lentils and vegetables in a coconut and cumin paste with a mustard tempering. Four servings, cooked for 30 minutes.',
    kw: ['kootu', 'kootu recipe', 'cabbage kootu', 'south indian kootu', 'dal and vegetable kootu'],
    why: 'It is the dish a South Indian meal quietly depends on: lentils and vegetables cooked soft together, scented with coconut and cumin, and eaten with rice. Kootu sits between a dal and a stew, thicker than the first and more mellow than the second.\n\nMoong dal is the traditional choice, since it cooks quickly and breaks down to a soft pulp. Simmer it with turmeric until tender, about 15 minutes, then add the vegetables. Cabbage, pumpkin, bottle gourd and chayote all work. **Cut the vegetable into similar pieces about 2 cm across** so they soften together without turning to mush.\n\nThe coconut paste is the second layer: grated coconut, green chillies and cumin, ground coarse with a little water. Stir it in and simmer for 5 minutes, long enough to lose its raw edge.\n\nThe tempering finishes it. Mustard seeds, a dried chilli, urad dal and curry leaves are fried in coconut oil, then tipped over the pot. The scent is what people remember. Serve with plain rice and a spoonful of ghee.',
    ing: [
      '100 g split yellow moong dal',
      '1/2 tsp ground turmeric',
      '600 ml water',
      '300 g white cabbage, shredded',
      '1 tsp salt',
      '60 g grated fresh coconut',
      '2 green chillies',
      '1 tsp cumin seeds',
      '1 tbsp coconut oil',
      '1 tsp mustard seeds',
      '1 tsp urad dal',
      '1 dried red chilli',
      '1 sprig curry leaves'
    ],
    st: [
      'Rinse the dal. Cook it in the water with the turmeric for 15 minutes until soft.',
      'Add the cabbage and salt and simmer for 8 minutes until tender.',
      'Grind the coconut, green chillies and cumin to a coarse paste with 2 tablespoons of water. Stir into the pan and simmer for 5 minutes.',
      'Heat the oil in a small pan. Add the mustard seeds, urad dal, dried chilli and curry leaves until the seeds pop and the dal turns golden. Pour over the kootu.'
    ],
    tips: [
      'Add more water if the kootu thickens too much.',
      'Mash the dal lightly with the back of a spoon for a creamier texture.',
      'Serve with a spoonful of ghee on the rice.'
    ],
    pair: ['Steamed rice', 'Rasam', 'Papadums', 'Poriyal'],
    store: 'Keeps in the fridge for 3 days. Reheat with a splash of water.',
    nut: [209, 8, 24, 9, 8, 5, 630]
  }
};
