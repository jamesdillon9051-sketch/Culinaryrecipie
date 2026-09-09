'use strict';

/**
 * Volume eighteen — Chinese dim sum, cold dishes and street food.
 *
 * Seventeen. Dim sum is a Cantonese discipline in its own right and the site
 * had two entries of it; the wrappers alone are three different doughs, none
 * of them interchangeable, and the har gow skin is made from wheat starch
 * rather than flour precisely so it will go transparent.
 *
 * The cold dishes are the other gap. A Sichuan meal opens with liangcai —
 * smashed cucumber, wood ear, bang bang chicken — served at room temperature
 * before anything hot arrives, and they are among the easiest Chinese dishes
 * to make well outside China because nothing depends on wok heat.
 */

module.exports = {
  'har-gow': {
    d: 'Crystal-skinned prawn dumplings with at least ten pleats, steamed until the wrapper turns translucent. The dish a dim sum kitchen is judged by.',
    meta: 'Cantonese prawn dumplings in a wheat starch and tapioca wrapper made with boiling water, pleated and steamed until transparent.',
    kw: ['har gow', 'har gow recipe', 'crystal shrimp dumplings', 'cantonese prawn dumpling', 'dim sum dumpling wrapper'],
    why: 'The wrapper is wheat starch, not wheat flour, and the water must be at a full rolling boil when it goes in. Wheat starch has had the gluten washed out of it, so it cannot form a dough at all until the starch gelatinises, and water even slightly below boiling gives you a crumbly mixture that will not hold together. Work it while it is almost too hot to handle. The other rule is that half the prawn is chopped and half left whole, so the filling has both a paste that binds and pieces you can bite.',
    ing: [
      '# For the filling',
      '400 g raw prawns, peeled and deveined',
      '60 g pork fat or fatty pork belly, finely diced',
      '80 g bamboo shoots, finely diced',
      '1 tbsp cornflour',
      '1 tsp fine sea salt',
      '1 tsp caster sugar',
      '1 tbsp Shaoxing wine',
      '1 tbsp sesame oil',
      '0.5 tsp white pepper',
      '# For the wrappers',
      '200 g wheat starch',
      '50 g tapioca starch',
      '0.5 tsp fine sea salt',
      '280 ml boiling water',
      '1 tbsp vegetable oil',
      '# For the steamer',
      '2 tbsp vegetable oil, for oiling'
    ],
    st: [
      'Chop half the prawns to a rough paste and cut the other half into 1 cm pieces.',
      'Mix all the prawns with the pork fat, bamboo shoots, cornflour, salt, sugar, wine, sesame oil and white pepper. Refrigerate 30 minutes.',
      'Whisk the wheat starch, tapioca starch and salt together in a heatproof bowl.',
      'Pour the boiling water in all at once, stirring hard with a chopstick until it comes together in a lump.',
      'Cover 2 minutes, then add the oil and knead the hot dough on an oiled surface until smooth and glossy.',
      'Roll into a rope and cut into 24 pieces. Keep them covered — this dough dries in minutes.',
      'Flatten each piece with the oiled flat of a cleaver into a 8 cm round.',
      'Put a spoonful of filling in each, fold over and pleat one side only, pressing each pleat against the flat back.',
      'Set them on oiled baking paper in a steamer, well apart.',
      'Steam over rapidly boiling water 8 minutes, until the wrappers are translucent and the prawn is pink.'
    ],
    tips: [
      'Wheat starch, not flour, and water at a full rolling boil.',
      'Work the dough hot and keep every piece covered.',
      'Half the prawn chopped, half in pieces.'
    ],
    pair: ['Siu mai', 'Chilli oil', 'A pot of jasmine tea'],
    store: 'Freeze uncooked on a tray for 2 months and steam from frozen, adding 3 minutes.',
    nut: [290, 20, 38, 7, 1, 2, 890]
  },

  'siu-mai': {
    d: 'Open-topped pork and prawn dumplings in a yellow wrapper, finished with a dot of roe. The other half of the dim sum trolley\'s opening pair.',
    meta: 'Cantonese open-topped dumplings of pork, prawn and shiitake in thin yellow wrappers, steamed and topped with roe or diced carrot.',
    kw: ['siu mai', 'siu mai recipe', 'shumai dumplings', 'pork prawn dumpling', 'cantonese dim sum'],
    why: 'Beat the pork mixture in one direction for a full two minutes until it turns sticky and pulls away from the bowl. That is not folklore — the mechanical action extracts myosin from the meat, which sets on steaming into the springy, bouncy texture that separates a good siu mai from a loose meatball in a wrapper. The wrapper is not pleated at all: it is gathered around the filling and squeezed at the waist, then the top is left open and pressed flat with a spoon.',
    ing: [
      '400 g minced pork, about 20 per cent fat',
      '150 g raw prawns, roughly chopped',
      '6 dried shiitake mushrooms, soaked and finely diced',
      '2 tbsp light soy sauce',
      '1 tbsp Shaoxing wine',
      '1 tbsp oyster sauce',
      '2 tsp sesame oil',
      '1 tbsp cornflour',
      '1 tsp caster sugar',
      '0.75 tsp fine sea salt',
      '0.5 tsp white pepper',
      '2 tbsp cold water',
      '2 spring onions, finely chopped',
      '# To assemble',
      '30 round yellow wonton wrappers',
      '2 tbsp vegetable oil, for the steamer',
      '# To finish',
      '3 tbsp flying fish roe, or 1 carrot, finely diced'
    ],
    st: [
      'Soak the shiitake in warm water 30 minutes, then squeeze them dry and dice them finely.',
      'Put the pork in a bowl with the soy sauce, wine, oyster sauce, sesame oil, cornflour, sugar, salt, white pepper and water.',
      'Beat the mixture with chopsticks in one direction only for 2 minutes, until it is sticky and pulls from the side of the bowl.',
      'Fold in the prawns, shiitake and spring onions.',
      'Hold a wrapper in a loose circle of thumb and forefinger, drop a heaped spoonful of filling in and push it down.',
      'Squeeze gently at the waist so the wrapper gathers, then flatten the exposed top with the back of a wet spoon.',
      'Set them on oiled paper in a steamer and top each with a little roe or diced carrot.',
      'Steam over rapidly boiling water 12 minutes, until firm and cooked through.'
    ],
    tips: [
      'Beat in one direction for two full minutes. That is the bounce.',
      'No pleating — gather and squeeze at the waist.',
      'Flatten the open top with a wet spoon.'
    ],
    pair: ['Har gow', 'Chilli oil', 'Chinese tea'],
    store: 'Freeze uncooked for 2 months and steam from frozen, adding 4 minutes.',
    nut: [330, 24, 26, 14, 1, 3, 1090]
  },

  'cheung-fun': {
    d: 'Sheets of rice batter steamed on a tray, rolled around prawns or beef and dressed in sweetened soy. The most delicate thing on the trolley.',
    meta: 'Cantonese rice noodle rolls: a thin rice flour batter steamed in a flat tray, rolled while hot and served with sweetened soy sauce.',
    kw: ['cheung fun', 'cheung fun recipe', 'rice noodle rolls', 'rice flour steamed rolls', 'dim sum noodle roll'],
    why: 'The batter must be stirred immediately before every single pour, because rice flour settles to the bottom of the bowl within about a minute and an unstirred ladleful gives you a translucent, holey sheet at the top of the batch and a thick chalky one at the bottom. Pour it thin — barely two millimetres — and roll each sheet the moment it comes out of the steamer, while it is still hot and pliable. A cooled sheet cracks along the fold.',
    ing: [
      '# For the batter',
      '150 g rice flour',
      '30 g tapioca starch',
      '20 g cornflour',
      '0.5 tsp fine sea salt',
      '600 ml water',
      '1 tbsp vegetable oil',
      '# For the filling',
      '200 g raw prawns, peeled and halved lengthways',
      '1 tsp cornflour',
      '0.5 tsp fine sea salt',
      '2 spring onions, finely sliced',
      '3 tbsp coriander, chopped',
      '# For the sauce',
      '4 tbsp light soy sauce',
      '2 tbsp water',
      '1.5 tbsp caster sugar',
      '1 tsp dark soy sauce',
      '1 tsp sesame oil',
      '# For the tray',
      '3 tbsp vegetable oil'
    ],
    st: [
      'Whisk the rice flour, tapioca starch, cornflour, salt and water to a thin smooth batter and stir in the oil.',
      'Toss the prawns with the cornflour and salt.',
      'Warm the sauce ingredients together until the sugar dissolves, then set aside.',
      'Oil a flat metal tray that fits inside a large steamer and set the steamer to a hard boil.',
      'Stir the batter well, then ladle just enough into the hot tray to coat it about 2 mm deep, tilting to spread.',
      'Scatter a few prawn halves, spring onion and coriander over and steam 4 minutes, until the sheet is set and bubbling.',
      'Lift the tray out, run an oiled scraper under one edge and roll the sheet up on itself into a fat cylinder.',
      'Cut into 5 cm lengths and keep warm. Repeat, stirring the batter before every pour.',
      'Pour the warm sauce over just before serving.'
    ],
    tips: [
      'Stir the batter before every single ladleful.',
      'Two millimetres. Any thicker and it is stodgy.',
      'Roll it hot. A cool sheet cracks.'
    ],
    pair: ['Chilli oil', 'Har gow', 'Jasmine tea'],
    store: 'Best immediately. Refrigerated 1 day and re-steamed 3 minutes.',
    nut: [310, 14, 52, 6, 1, 8, 1180]
  },

  'lo-mai-gai': {
    d: 'Sticky rice packed around chicken, sausage and mushroom in a lotus leaf and steamed until the leaf perfumes the whole parcel.',
    meta: 'Glutinous rice soaked and steamed with chicken, lap cheong and shiitake, wrapped in lotus leaves and steamed again.',
    kw: ['lo mai gai', 'lo mai gai recipe', 'sticky rice lotus leaf', 'chinese steamed rice parcel', 'dim sum sticky rice'],
    why: 'Glutinous rice has to be soaked for at least four hours before it is steamed. Unlike ordinary rice it will not absorb enough water during cooking alone, and unsoaked grains come out with hard opaque centres however long you steam them. The lotus leaves also need soaking, in hot water, until pliable — a dry leaf splits as you fold it. And the rice is steamed once before it is wrapped and once after, which is what makes the grains distinct rather than a single paste.',
    ing: [
      '400 g glutinous rice',
      '4 dried lotus leaves',
      '# For the filling',
      '300 g boneless chicken thigh, in 2 cm pieces',
      '2 lap cheong sausages, sliced',
      '8 dried shiitake mushrooms, soaked and quartered',
      '4 dried scallops, soaked, optional',
      '2 tbsp light soy sauce',
      '1 tbsp oyster sauce',
      '1 tbsp Shaoxing wine',
      '1 tsp dark soy sauce',
      '1 tsp caster sugar',
      '1 tbsp cornflour',
      '0.5 tsp white pepper',
      '# For the rice',
      '2 tbsp vegetable oil',
      '1 tbsp light soy sauce',
      '1 tsp dark soy sauce',
      '1 tsp sesame oil',
      '1 tsp fine sea salt',
      '150 ml of the mushroom soaking water'
    ],
    st: [
      'Soak the glutinous rice in cold water 4 hours, then drain it well.',
      'Soak the lotus leaves in hot water 30 minutes, until pliable, then rinse and trim out the hard stems.',
      'Marinate the chicken with the soy sauces, oyster sauce, wine, sugar, cornflour and white pepper 20 minutes.',
      'Steam the drained rice in a lined steamer 20 minutes, until just tender.',
      'Turn the hot rice through the oil, soy sauces, sesame oil, salt and mushroom water until evenly coloured.',
      'Stir-fry the chicken with the lap cheong, shiitake and scallops over high heat 5 minutes, until the chicken is sealed.',
      'Lay a lotus leaf flat, spread a layer of rice, spoon filling into the centre, then cover with more rice.',
      'Fold the leaf into a tight parcel and tie with string. Repeat.',
      'Steam the parcels 25 minutes, and open them at the table.'
    ],
    rest: [270, 'soaking the glutinous rice and the lotus leaves'],
    tips: [
      'Four hours of soaking for the rice, and there is no shortcut.',
      'Soak the leaves in hot water or they split.',
      'Steam the rice before wrapping as well as after.'
    ],
    pair: ['Chilli oil', 'Chinese tea', 'The rest of the trolley'],
    store: 'Refrigerated for 3 days, or frozen 2 months. Re-steam 20 minutes.',
    nut: [560, 26, 82, 15, 2, 5, 1290]
  },

  'chicken-feet-black-bean': {
    d: 'Chicken feet deep-fried, soaked until they puff, then braised in black bean and steamed. Three stages, two days, and the most ordered dish in Guangzhou.',
    meta: 'Phoenix claws: chicken feet blanched, fried, soaked until puffed, then braised and steamed in a black bean, garlic and chilli sauce.',
    kw: ['chicken feet', 'phoenix claws recipe', 'chicken feet black bean', 'dim sum chicken feet', 'cantonese braised feet'],
    why: 'The frying-then-soaking is the entire technique and cannot be skipped. Deep-frying blisters the skin, and the long cold soak afterwards lets those blisters swell with water, which is what gives phoenix claws their characteristic puffed, wrinkled surface and lets them absorb sauce. Skip either step and you have chewy chicken feet in gravy. Dry them completely before they go in the oil — wet feet spit violently — and keep a lid to hand.',
    ing: [
      '900 g chicken feet, nails trimmed',
      '2 tbsp maltose or honey',
      '2 tbsp rice vinegar',
      '1 litre vegetable oil, for frying',
      '# For the braise',
      '3 tbsp fermented black beans, rinsed and roughly chopped',
      '6 garlic cloves, chopped',
      '20 g ginger, chopped',
      '2 red chillies, sliced',
      '3 tbsp light soy sauce',
      '1 tbsp oyster sauce',
      '1 tbsp Shaoxing wine',
      '1 tbsp caster sugar',
      '1 tsp dark soy sauce',
      '2 star anise',
      '400 ml water',
      '# To finish',
      '1 tbsp cornflour, slaked in 2 tbsp water',
      '2 spring onions, sliced'
    ],
    st: [
      'Blanch the chicken feet in boiling water 5 minutes, then drain and dry them completely on a cloth.',
      'Rub them with the maltose and vinegar and leave to dry 30 minutes, until the skin looks glazed.',
      'Heat the oil to 180C and fry the feet in batches 4 minutes, with a lid ready — they spit. They should blister and turn golden.',
      'Drop them straight into a large bowl of cold water and soak 2 hours, until visibly puffed and wrinkled.',
      'Drain, then simmer them in fresh water 30 minutes, until the skin gives easily.',
      'Fry the black beans, garlic, ginger and chilli in 2 tbsp of oil 2 minutes.',
      'Add the soy sauces, oyster sauce, wine, sugar, star anise and water and bring to a simmer.',
      'Add the feet, cover and braise 45 minutes.',
      'Stir in the slaked cornflour to thicken, then transfer to bowls and steam 20 minutes more.',
      'Scatter with spring onion and serve very hot.'
    ],
    rest: [150, 'drying the glazed skin and soaking the fried feet'],
    tips: [
      'Fry, then soak in cold water. That is what makes them puff.',
      'Bone dry before they go in the oil, and keep a lid to hand.',
      'The final steam is what makes them fall off the bone.'
    ],
    pair: ['Jasmine tea', 'Har gow', 'Steamed rice'],
    store: 'Refrigerated for 3 days. Re-steam 15 minutes. Freezes 2 months.',
    nut: [400, 32, 12, 25, 1, 6, 1290]
  },

  'nai-wong-bao': {
    d: 'Snow-white steamed buns filled with a set custard of egg yolk, butter and milk powder. The filling is made and chilled before it goes anywhere near the dough.',
    meta: 'Cantonese steamed custard buns: a milk-powder and egg yolk custard chilled firm, wrapped in a white steamed bun dough and steamed.',
    kw: ['nai wong bao', 'custard bun recipe', 'steamed custard buns', 'chinese milk custard bao', 'dim sum sweet bun'],
    why: 'The custard has to be refrigerated until genuinely firm, at least two hours, and preferably rolled into balls and frozen for twenty minutes before wrapping. Soft custard cannot be enclosed — it squeezes out at the seam and welds the bun to the steamer. The dough uses low-protein flour and a little baking powder alongside the yeast, which is what gives Cantonese buns their fine white crumb rather than the chewier texture of a bread roll. And lift the lid slowly at the end, because a rush of cold air wrinkles the surface.',
    ing: [
      '# For the custard',
      '4 hard-boiled egg yolks, sieved',
      '2 egg yolks, raw',
      '80 g butter, softened',
      '80 g caster sugar',
      '40 g milk powder',
      '20 g cornflour',
      '80 ml whole milk',
      '0.25 tsp fine sea salt',
      '# For the dough',
      '350 g plain or low-protein flour',
      '6 g fast-action yeast',
      '1 tsp baking powder',
      '50 g caster sugar',
      '180 ml whole milk, warm',
      '2 tbsp vegetable oil',
      '0.5 tsp fine sea salt'
    ],
    st: [
      'Beat the softened butter with the sugar, then beat in the raw yolks, the sieved cooked yolks, milk powder, cornflour, milk and salt.',
      'Cook the mixture in a bowl set over simmering water, stirring, 6 minutes, until it thickens to a stiff paste.',
      'Refrigerate the custard 2 hours, then roll it into 10 balls and freeze them 20 minutes.',
      'Mix the flour, yeast, baking powder, sugar, warm milk, oil and salt and knead 10 minutes to a smooth soft dough.',
      'Cover and prove 60 minutes, until doubled.',
      'Knock back and divide into 10 pieces. Roll each into a disc thicker at the centre than the edge.',
      'Wrap a frozen custard ball in each, pleat closed and set seam down on a square of paper.',
      'Prove 30 minutes more, until light and puffy.',
      'Steam over gently boiling water 15 minutes, then turn the heat off and wait 3 minutes before lifting the lid slowly.'
    ],
    rest: [210, 'chilling the custard and proving the dough'],
    tips: [
      'Freeze the custard balls. Soft filling squeezes out at the seam.',
      'Discs thicker at the centre, or the base tears.',
      'Lift the lid slowly or the buns wrinkle.'
    ],
    pair: ['Jasmine tea', 'Har gow', 'Cheung fun'],
    store: 'Freeze steamed buns for 2 months and re-steam from frozen for 8 minutes.',
    nut: [310, 8, 44, 12, 1, 16, 240]
  },

  'sheng-jian-bao': {
    d: 'Shanghai buns with a crisp fried base and soup inside, cooked base-down in a covered pan and finished with sesame and spring onion.',
    meta: 'Shanghai pan-fried pork buns with jellied stock in the filling, fried base down then steamed in the same covered pan until crisp beneath and soft above.',
    kw: ['sheng jian bao', 'sheng jian bao recipe', 'pan fried pork buns', 'shanghai soup buns', 'crispy bottom bao'],
    why: 'The soup inside comes from aspic — stock set with gelatine, diced and mixed cold into the filling, which melts in the pan. There is no other way to get liquid inside a bun. The cooking is fried and steamed at once: the buns go base down into hot oil, water is poured in and the lid goes on, so the bottoms crisp while the tops steam. Do not lift the lid until the water has gone, and listen for the sound to change from bubbling to a dry sizzle.',
    ing: [
      '# For the aspic',
      '300 ml chicken stock',
      '6 g gelatine leaves, or 1.5 tsp powdered gelatine',
      '1 tbsp Shaoxing wine',
      '# For the filling',
      '400 g minced pork, 20 per cent fat',
      '2 tbsp light soy sauce',
      '1 tbsp Shaoxing wine',
      '1 tsp caster sugar',
      '1 tsp sesame oil',
      '0.75 tsp fine sea salt',
      '0.5 tsp white pepper',
      '20 g ginger, grated',
      '3 spring onions, finely chopped',
      '# For the dough',
      '350 g plain flour',
      '4 g fast-action yeast',
      '1 tsp caster sugar',
      '200 ml warm water',
      '0.5 tsp fine sea salt',
      '# For frying',
      '3 tbsp vegetable oil',
      '200 ml water',
      '2 tbsp sesame seeds',
      '3 spring onions, sliced'
    ],
    st: [
      'Soften the gelatine, dissolve it in the warm stock with the wine, pour into a shallow tray and refrigerate 2 hours until firmly set. Chop it into small dice.',
      'Beat the pork with the soy sauce, wine, sugar, sesame oil, salt, white pepper and ginger in one direction for 2 minutes, until sticky.',
      'Fold in the spring onions and the diced aspic and refrigerate.',
      'Mix the flour, yeast, sugar, warm water and salt and knead 10 minutes to a smooth dough. Cover and prove 60 minutes.',
      'Divide into 18 pieces and roll each into a disc thicker at the centre.',
      'Fill and pleat each bun closed, and set them seam up.',
      'Heat the oil in a wide lidded frying pan and set the buns in, seam up, just apart.',
      'Fry 2 minutes, until the bases are golden, then pour in the water and clamp the lid on at once.',
      'Cook 12 minutes, until the water has gone and the sound turns to a dry sizzle.',
      'Scatter with sesame seeds and spring onion, cook 1 minute more, and lift them out with a fish slice.'
    ],
    rest: [180, 'setting the aspic and proving the dough'],
    tips: [
      'Aspic in the filling is the only way to get soup inside.',
      'Seam up, base down. The base is the crisp part.',
      'Lid on until the sound goes from bubbling to sizzling.'
    ],
    pair: ['Chinkiang vinegar with ginger', 'Chilli oil', 'A bowl of soup'],
    store: 'Freeze uncooked for 2 months. Cook from frozen with an extra 4 minutes under the lid.',
    nut: [380, 20, 42, 15, 2, 3, 980]
  },

  'jianbing': {
    d: 'A thin mung bean crepe with an egg cracked onto it, folded around a sheet of fried cracker, hoisin and coriander. Beijing breakfast, eaten walking.',
    meta: 'A Beijing street crepe of mung bean and wheat batter spread thin, topped with egg, sauces, coriander and a crisp cracker, then folded.',
    kw: ['jianbing', 'jianbing recipe', 'chinese breakfast crepe', 'beijing street food', 'mung bean pancake'],
    why: 'The batter must be genuinely thin — the consistency of single cream — and spread immediately with the back of a ladle in one continuous spiral. Thick batter gives a pancake rather than a crepe, and hesitating while you spread leaves ridges that tear. The egg goes on within about twenty seconds, while the surface is still tacky enough for it to bond; any later and it slides off when you fold. The cracker goes in last and is what the whole thing is for.',
    ing: [
      '# For the batter',
      '80 g mung bean flour',
      '80 g plain flour',
      '20 g cornflour',
      '0.75 tsp fine sea salt',
      '400 ml water',
      '2 spring onions, very finely chopped',
      '# For each crepe',
      '4 eggs',
      '2 tbsp vegetable oil',
      '4 tbsp sweet bean sauce or hoisin',
      '2 tbsp chilli sauce',
      '4 sheets crisp fried cracker, or 4 handfuls prawn crackers',
      '6 tbsp coriander, chopped',
      '4 spring onions, sliced',
      '4 tbsp pickled mustard stem, chopped',
      '2 tbsp white sesame seeds'
    ],
    st: [
      'Whisk both flours, the cornflour, salt and water to a batter the consistency of single cream, then stir in the chopped spring onion. Leave 20 minutes.',
      'Heat a large flat pan or crepe pan over medium heat and brush it with oil.',
      'Ladle in a portion of batter and spread it immediately in one continuous spiral with the back of the ladle, as thin as you can.',
      'Crack an egg onto the crepe within 20 seconds and spread it across the surface with a spatula.',
      'Scatter with sesame seeds and coriander, then flip the whole crepe over.',
      'Brush the top with sweet bean sauce and chilli sauce.',
      'Scatter with spring onion and pickled mustard stem and lay the cracker across the middle.',
      'Fold both sides in over the cracker, then fold in half and cut across. Eat immediately.'
    ],
    tips: [
      'Batter the thickness of single cream, spread in one spiral.',
      'Egg on within twenty seconds while the surface is still tacky.',
      'The cracker is the point. Do not leave it out.'
    ],
    pair: ['Hot soy milk', 'Youtiao', 'Eaten standing up'],
    store: 'None. It is crisp for about four minutes.',
    nut: [430, 16, 52, 18, 3, 8, 1180]
  },

  'rou-jia-mo': {
    d: 'Chopped braised pork packed into a flatbread baked on a griddle. Xi\'an has sold it for two thousand years and calls it, fairly, the world\'s oldest sandwich.',
    meta: 'Xi\'an chopped pork sandwich: pork belly braised in a spiced master stock, chopped with coriander and packed into a griddled flatbread.',
    kw: ['rou jia mo', 'rou jia mo recipe', 'chinese pork burger', 'xian street food', 'chopped pork flatbread'],
    why: 'The meat is chopped, not shredded or sliced — a cleaver, a board, and enough chopping that the fat and the lean become one mixture held together by the braising jelly. Shredded pork falls out of the bread. The bread is a baijimo, cooked on a dry griddle and finished in the oven, so it has a crisp skin and a hollow inside; a soft bun collapses under the wet meat within a minute. Split it round the equator and keep the crust intact.',
    ing: [
      '# For the pork',
      '1 kg pork belly, skin on, in large pieces',
      '2 tbsp vegetable oil',
      '3 tbsp light soy sauce',
      '1 tbsp dark soy sauce',
      '3 tbsp Shaoxing wine',
      '2 tbsp rock sugar',
      '4 slices ginger',
      '4 spring onions, in lengths',
      '2 star anise',
      '1 cinnamon stick',
      '1 tsp fennel seeds',
      '4 cloves',
      '2 bay leaves',
      '1 tsp Sichuan peppercorns',
      '2 dried chillies',
      '1.2 litres water',
      '1.5 tsp fine sea salt',
      '# For the bread',
      '400 g plain flour',
      '4 g fast-action yeast',
      '240 ml warm water',
      '1 tsp fine sea salt',
      '# To finish',
      '6 tbsp coriander, chopped',
      '2 green chillies, finely chopped'
    ],
    st: [
      'Mix the flour, yeast, warm water and salt and knead 10 minutes to a firm dough. Cover and prove 60 minutes.',
      'Blanch the pork in boiling water 5 minutes, then drain and rinse it.',
      'Brown the pork in the oil, then add both soy sauces, the wine, rock sugar, ginger, spring onions, all the spices, the water and the salt.',
      'Simmer, covered, 2 hours 30 minutes, until the pork is completely soft.',
      'Divide the dough into 6, roll each into a rope, coil it and flatten into a 10 cm disc.',
      'Cook the discs on a dry griddle over medium heat 4 minutes a side, pressing, until marked and puffed.',
      'Finish them in the oven at 200C fan / 220C / gas 7 for 6 minutes, until crisp and hollow.',
      'Lift the pork out, discard the bones and any hard skin, and chop it on a board with some of the jelly, the coriander and the green chilli.',
      'Split each bread round its equator and pack the chopped pork in.'
    ],
    rest: [60, 'proving the bread dough'],
    tips: [
      'Chop the meat. Shredded pork falls straight out.',
      'A crisp baijimo, not a soft bun.',
      'Include some of the braising jelly — it is the binder.'
    ],
    pair: ['Liangpi', 'A cold beer', 'Pickled garlic'],
    store: 'The pork keeps refrigerated 4 days and freezes 3 months. Bake the bread fresh.',
    nut: [680, 34, 56, 36, 3, 6, 1390]
  },

  'liangpi': {
    d: 'Cold wheat noodles made by washing the starch out of a dough, steamed into sheets and cut into wide slippery ribbons under chilli oil and vinegar.',
    meta: 'Xi\'an cold skin noodles: a wheat dough washed until the starch separates, the starch water steamed into sheets and cut, dressed with chilli oil, vinegar and garlic.',
    kw: ['liangpi', 'liangpi recipe', 'cold skin noodles', 'xian cold noodles', 'washed dough noodles'],
    why: 'The washing separates the dough into two things you use separately: the starch water, which becomes the noodles, and the gluten ball left behind, which is steamed and torn into the bowl as a sponge. Wash until the water runs almost clear, six or seven changes, and then let the starch water settle for at least four hours — the starch sinks and the clear water on top is poured away. Skip the settling and the sheets will not set. Stir the settled starch thoroughly before every pour.',
    ing: [
      '# For the dough',
      '500 g strong white flour',
      '1 tsp fine sea salt',
      '260 ml water',
      '# For steaming',
      '2 tbsp vegetable oil, for the tray',
      '# For the dressing',
      '6 tbsp chilli oil, with sediment',
      '5 tbsp Chinkiang black vinegar',
      '3 tbsp light soy sauce',
      '6 garlic cloves, crushed with 4 tbsp cold water',
      '1 tbsp sesame paste, loosened with 2 tbsp water',
      '1 tsp caster sugar',
      '1 tsp fine sea salt',
      '# To serve',
      '1 cucumber, in matchsticks',
      '150 g bean sprouts, blanched',
      '4 tbsp coriander, chopped'
    ],
    st: [
      'Mix the flour, salt and water into a firm dough and knead 8 minutes. Cover and rest 30 minutes.',
      'Submerge the dough in a large bowl of cold water and knead it under the water until the water turns milky.',
      'Pour the milky water into a second container and add fresh water to the dough. Repeat 6 or 7 times, until the water stays almost clear and only a rubbery gluten ball is left.',
      'Steam the gluten ball 20 minutes, until risen and spongy, then cool and tear into pieces.',
      'Leave the collected starch water to settle 4 hours, then carefully pour off and discard the clear water on top.',
      'Stir the thick settled starch back to an even batter, thin with a little water if needed.',
      'Oil a flat metal tray, ladle in a thin layer of batter and float the tray in a wide pan of boiling water. Cover and steam 3 minutes, until the sheet bubbles and sets.',
      'Cool the sheet in cold water, peel it off, oil it and stack. Repeat, stirring the batter each time.',
      'Cut the sheets into 2 cm ribbons.',
      'Toss with the gluten pieces, cucumber, bean sprouts and all the dressing ingredients, and scatter with coriander.'
    ],
    rest: [270, 'resting the dough and settling the starch water'],
    tips: [
      'Wash until the water runs almost clear — six or seven changes.',
      'Four hours of settling, then pour the clear water off.',
      'Keep the gluten ball. It goes back in the bowl.'
    ],
    pair: ['Rou jia mo', 'A cold beer', 'More chilli oil'],
    store: 'The cut sheets keep refrigerated 2 days, oiled. Dress only to order.',
    nut: [520, 16, 82, 15, 4, 5, 1290]
  },

  'smashed-cucumber': {
    d: 'Cucumber hit with the flat of a cleaver until it splits, salted, drained and dressed in garlic and vinegar. Fifteen minutes and no heat at all.',
    meta: 'Cucumber smashed rather than sliced so it holds dressing, salted and drained, then tossed with garlic, black vinegar, soy and chilli oil.',
    kw: ['smashed cucumber', 'smashed cucumber salad', 'pai huang gua', 'chinese cucumber salad', 'garlic cucumber side'],
    why: 'Smashing rather than slicing is the whole idea. A cleaver blow splits the cucumber along its own irregular lines, creating rough torn faces and open seed channels that hold dressing, where a clean knife cut gives a smooth surface the dressing runs straight off. Then salt it and let it drain for ten minutes: cucumber is mostly water and, undrained, that water dilutes the dressing into a pale puddle within minutes of it reaching the table.',
    ing: [
      '2 cucumbers, about 600 g',
      '1.5 tsp fine sea salt',
      '# For the dressing',
      '6 garlic cloves, finely chopped',
      '3 tbsp Chinkiang black vinegar',
      '2 tbsp light soy sauce',
      '2 tbsp chilli oil, with sediment',
      '1 tbsp sesame oil',
      '2 tsp caster sugar',
      '0.5 tsp ground Sichuan pepper',
      '# To finish',
      '2 tbsp coriander, chopped',
      '1 tbsp toasted sesame seeds'
    ],
    st: [
      'Trim the cucumbers and lay them on a board.',
      'Lay the flat of a cleaver or a heavy knife along each one and strike it with your palm until the cucumber splits open along its length.',
      'Tear or cut the split cucumber into rough 3 cm pieces.',
      'Toss with the salt in a colander and leave to drain 10 minutes.',
      'Whisk the garlic, vinegar, soy sauce, chilli oil, sesame oil, sugar and Sichuan pepper together.',
      'Shake the drained cucumber dry and tip it into a bowl. Do not rinse it.',
      'Pour the dressing over, toss well, and scatter with coriander and sesame seeds.',
      'Serve within 20 minutes, while the pieces are still crisp.'
    ],
    tips: [
      'Smash it, do not slice it. The torn faces hold the dressing.',
      'Salt and drain for ten minutes, and do not rinse.',
      'Dress it at the last moment.'
    ],
    pair: ['Bang bang chicken', 'Wood ear salad', 'A cold beer'],
    store: 'Best within the hour. It slackens and weeps after that.',
    nut: [110, 2, 8, 8, 1, 5, 890]
  },

  'bang-bang-chicken': {
    d: 'Poached chicken torn into shreds under a sesame and chilli sauce. Named for the stick used to beat the meat loose from the bone in Sichuan.',
    meta: 'Poached chicken cooled in its liquid and hand-torn into shreds, dressed in a Sichuan sauce of sesame paste, chilli oil and black vinegar.',
    kw: ['bang bang chicken', 'bang bang chicken recipe', 'sichuan shredded chicken', 'sesame chilli chicken salad', 'chinese cold chicken'],
    why: 'Tear the chicken along the grain with your fingers rather than cutting it. Torn shreds have rough fibrous surfaces that trap a thick sesame sauce; knife-cut strips are smooth and the sauce slides off into the bottom of the bowl. And take the pan off the heat once the chicken is in, letting it cook through in the cooling water — actively simmering chicken breast for twenty minutes gives you dry meat, while residual heat leaves it juicy.',
    ing: [
      '# For the chicken',
      '600 g chicken breast, on the bone if possible',
      '4 slices ginger',
      '3 spring onions, in lengths',
      '1 tbsp Shaoxing wine',
      '1 tsp fine sea salt',
      '1.2 litres water',
      '# For the sauce',
      '3 tbsp Chinese sesame paste, or tahini',
      '3 tbsp of the poaching liquid',
      '3 tbsp chilli oil, with sediment',
      '2 tbsp light soy sauce',
      '2 tbsp Chinkiang black vinegar',
      '3 garlic cloves, crushed',
      '1 tbsp caster sugar',
      '1 tsp ground Sichuan pepper',
      '1 tsp sesame oil',
      '# To serve',
      '1 cucumber, in matchsticks',
      '3 tbsp coriander, chopped',
      '2 spring onions, sliced',
      '1 tbsp toasted sesame seeds',
      '3 tbsp roasted peanuts, crushed'
    ],
    st: [
      'Bring the water to the boil with the ginger, spring onion, wine and salt.',
      'Lower in the chicken, bring back to a bare simmer for 3 minutes, then cover and take the pan off the heat.',
      'Leave the chicken in the cooling liquid 25 minutes, until cooked through.',
      'Lift it out, cool it, and tear the meat along the grain into rough shreds with your fingers.',
      'Loosen the sesame paste with the 3 tbsp poaching liquid until it pours.',
      'Whisk in the chilli oil, soy sauce, vinegar, garlic, sugar, Sichuan pepper and sesame oil.',
      'Lay the cucumber on a plate, pile the shredded chicken over and pour the sauce across.',
      'Finish with coriander, spring onion, sesame seeds and crushed peanuts.'
    ],
    tips: [
      'Tear the chicken, never slice it.',
      'Off the heat and covered. Simmering dries the breast out.',
      'Loosen the sesame paste with the poaching liquid, not water.'
    ],
    pair: ['Smashed cucumber', 'Cold beer', 'Steamed rice'],
    store: 'Refrigerated for 2 days, chicken and sauce kept separately.',
    nut: [430, 38, 12, 26, 2, 6, 1090]
  },

  'pidan-tofu': {
    d: 'Century eggs on cold silken tofu with soy, chilli oil and a great deal of coriander. Assembly only, five minutes, and one of the great cold dishes.',
    meta: 'Chilled silken tofu topped with chopped century eggs, crisp fried shallots, soy dressing, chilli oil and coriander.',
    kw: ['pidan tofu', 'century egg tofu', 'pidan tofu recipe', 'chinese cold tofu dish', 'century egg recipe'],
    why: 'Rinse the century eggs after peeling and cut them with a wet knife or a length of thread. The yolk is soft and sticky enough to drag a dry blade through the white and smear the whole slice grey, while thread cuts cleanly. The tofu must be properly cold and thoroughly drained: silken tofu carries a lot of water and, undrained, it releases it under the dressing within a few minutes and everything turns pale and dilute.',
    ing: [
      '400 g silken tofu, chilled',
      '3 century eggs',
      '# For the dressing',
      '3 tbsp light soy sauce',
      '1 tbsp Chinkiang black vinegar',
      '1 tbsp chilli oil, with sediment',
      '2 tsp sesame oil',
      '1 tsp caster sugar',
      '3 garlic cloves, finely chopped',
      '# To finish',
      '4 tbsp coriander, chopped',
      '3 spring onions, sliced',
      '3 tbsp crisp fried shallots',
      '1 tbsp toasted sesame seeds'
    ],
    st: [
      'Drain the silken tofu on kitchen paper in the fridge for 15 minutes, then turn it out onto a shallow plate.',
      'Peel the century eggs, rinse them and pat them dry.',
      'Cut each egg into eight wedges using a wet knife or a length of thread pulled through.',
      'Whisk the soy sauce, vinegar, chilli oil, sesame oil, sugar and garlic together.',
      'Arrange the egg wedges over and around the tofu.',
      'Pour the dressing over the whole plate.',
      'Scatter with coriander, spring onion, fried shallots and sesame seeds and serve at once, cold.'
    ],
    tips: [
      'Cut the eggs with wet thread or a wet blade.',
      'Drain the tofu properly and keep it cold.',
      'Dress at the table, not in advance.'
    ],
    pair: ['Congee', 'A cold beer', 'Smashed cucumber'],
    store: 'None. Assemble and eat.',
    nut: [230, 16, 8, 15, 1, 3, 1180]
  },

  'drunken-chicken': {
    d: 'Poached chicken steeped for a day in Shaoxing wine and its own jellied stock, then sliced cold. Shanghai in summer, and it needs no cooking on the day.',
    meta: 'Chicken poached and cooled in its own liquid, then steeped overnight in a Shaoxing wine and stock marinade and served cold in slices.',
    kw: ['drunken chicken', 'drunken chicken recipe', 'shaoxing wine chicken', 'shanghai cold chicken', 'chinese wine marinated chicken'],
    why: 'Chill the poached chicken in iced water before it goes into the wine. The shock sets the skin into the springy, slightly gelatinous texture that is half the point of the dish, and it stops the residual heat carrying the meat past done. The wine marinade is never heated with the chicken in it either — heat drives off the alcohol and most of the aroma, and the whole character of drunken chicken is raw Shaoxing wine against cold set stock.',
    ing: [
      '1 kg chicken thighs and drumsticks, or a whole small chicken',
      '# For poaching',
      '1.5 litres water',
      '6 slices ginger',
      '4 spring onions, in lengths',
      '1 tbsp fine sea salt',
      '1 tsp Sichuan peppercorns',
      '# For the marinade',
      '400 ml Shaoxing wine',
      '300 ml of the poaching stock, cooled',
      '2 tbsp caster sugar',
      '2 tsp fine sea salt',
      '4 slices ginger',
      '3 spring onions, in lengths',
      '6 goji berries, optional',
      '# To serve',
      '3 tbsp coriander, chopped'
    ],
    st: [
      'Bring the water to the boil with the ginger, spring onions, salt and peppercorns.',
      'Lower in the chicken, simmer 5 minutes, then cover, take the pan off the heat and leave 30 minutes.',
      'Lift the chicken straight into a bowl of iced water and leave 10 minutes, until completely cold.',
      'Strain 300 ml of the poaching stock and cool it completely.',
      'Mix the cooled stock with the Shaoxing wine, sugar, salt, ginger, spring onion and goji berries. Do not heat it.',
      'Cut the chicken into large pieces, on the bone, and submerge them in the marinade.',
      'Refrigerate 24 hours, turning once.',
      'Lift the pieces out, slice them, and spoon a little of the jellied marinade over. Scatter with coriander.'
    ],
    rest: [1470, 'steeping the chicken in the wine marinade'],
    tips: [
      'Iced water straight after poaching. It sets the skin.',
      'Never heat the marinade. Heat takes the wine with it.',
      'A full day in the fridge, and the jelly is part of the dish.'
    ],
    pair: ['A cold beer', 'Smashed cucumber', 'Steamed rice'],
    store: 'Refrigerated in its marinade for 4 days. Do not freeze.',
    nut: [340, 32, 8, 16, 0, 6, 1290]
  },

  'spicy-wontons': {
    d: 'Pork wontons under a slick of red chilli oil, black vinegar and garlic. Sichuan\'s answer to the soup version, and the sauce does all the work.',
    meta: 'Sichuan red oil wontons: pork and ginger wontons boiled and served in a sauce of chilli oil, black vinegar, garlic and sweetened soy.',
    kw: ['red oil wontons', 'spicy wontons recipe', 'hong you chao shou', 'sichuan chilli wontons', 'chilli oil dumplings'],
    why: 'Lift the wontons out with a slotted spoon and shake them properly dry before they go in the sauce. Water carried over from the pan dilutes chilli oil instantly, and a bowl of red oil wontons that arrives pink and watery has been drained badly. The sauce is also assembled in the bowl, not cooked — the garlic is raw, the vinegar has not been heated, and warming any of it flattens the whole thing.',
    ing: [
      '# For the wontons',
      '300 g minced pork, 20 per cent fat',
      '20 g ginger, grated',
      '2 spring onions, finely chopped',
      '1 tbsp light soy sauce',
      '1 tbsp Shaoxing wine',
      '1 tsp sesame oil',
      '0.5 tsp fine sea salt',
      '0.5 tsp white pepper',
      '2 tbsp cold water',
      '30 square wonton wrappers',
      '# For the sauce',
      '5 tbsp chilli oil, with plenty of sediment',
      '3 tbsp light soy sauce',
      '2 tbsp Chinkiang black vinegar',
      '4 garlic cloves, crushed to a paste',
      '1 tbsp caster sugar',
      '1 tsp ground Sichuan pepper',
      '1 tsp sesame oil',
      '# To finish',
      '3 spring onions, sliced',
      '3 tbsp roasted peanuts, crushed',
      '2 tbsp coriander, chopped'
    ],
    st: [
      'Beat the pork with the ginger, spring onions, soy sauce, wine, sesame oil, salt, white pepper and water in one direction for 2 minutes, until sticky.',
      'Put a small spoonful on each wrapper, wet two edges, fold into a triangle and press out the air, then bring the two long corners together and pinch.',
      'Mix all the sauce ingredients in the bottom of four bowls and divide between them.',
      'Bring a large pan of water to a rolling boil and drop the wontons in.',
      'Cook 4 minutes from the moment they float, adding a cup of cold water if the pan threatens to boil over.',
      'Lift them out with a slotted spoon and shake off every drop of water.',
      'Tip them straight into the bowls of sauce and turn to coat.',
      'Scatter with spring onion, peanuts and coriander.'
    ],
    tips: [
      'Shake them properly dry. Water ruins chilli oil.',
      'Assemble the sauce cold in the bowl.',
      'Press the air out as you fold, or they burst.'
    ],
    pair: ['Smashed cucumber', 'A cold beer', 'Dan dan noodles'],
    store: 'Freeze uncooked for 2 months and boil from frozen, adding 2 minutes.',
    nut: [520, 24, 42, 29, 3, 6, 1390]
  },

  'tea-eggs': {
    d: 'Hard-boiled eggs cracked all over and simmered in tea, soy and star anise until the shell pattern shows through as brown marbling.',
    meta: 'Eggs boiled, cracked all over the shell, then simmered and steeped in a spiced black tea and soy brine until marbled.',
    kw: ['tea eggs', 'marbled tea eggs recipe', 'chinese tea eggs', 'soy star anise eggs', 'chinese snack eggs'],
    why: 'Crack the shells thoroughly but leave every piece attached — tap the whole surface with the back of a spoon rather than rolling the egg, so you get a dense web of fine cracks. Loose shell falls away and the marbling turns into a solid brown egg. And the colour comes from steeping, not simmering: twenty minutes in the pan and then a night in the cold brine, because eggs boiled for hours in soy turn rubbery and unpleasantly salty.',
    ing: [
      '8 eggs',
      '# For the brine',
      '1 litre water',
      '3 black tea bags, or 2 tbsp loose black tea',
      '5 tbsp light soy sauce',
      '2 tbsp dark soy sauce',
      '1 tbsp caster sugar',
      '1 tbsp fine sea salt',
      '3 star anise',
      '1 cinnamon stick',
      '4 slices ginger',
      '2 bay leaves',
      '1 tsp Sichuan peppercorns',
      '2 strips dried tangerine peel, optional'
    ],
    st: [
      'Lower the eggs into boiling water and cook 8 minutes, then cool them under cold running water.',
      'Tap each egg all over with the back of a spoon until the shell is a web of fine cracks, leaving every piece attached.',
      'Bring the water, tea, both soy sauces, sugar, salt and all the spices to a simmer for 5 minutes.',
      'Lower the cracked eggs in and simmer very gently 20 minutes.',
      'Take the pan off the heat and let the eggs cool completely in the brine, 1 hour.',
      'Refrigerate the eggs in their brine 12 hours, or up to two days for a stronger colour.',
      'Peel just before eating, to show the marbling.'
    ],
    rest: [780, 'cooling and steeping the eggs in the brine'],
    tips: [
      'Tap the whole shell, and leave every piece attached.',
      'Twenty minutes of simmering, then steeping. Long boiling makes them rubbery.',
      'Peel at the last moment so the pattern is a surprise.'
    ],
    pair: ['Congee', 'A flask of tea', 'A long train journey'],
    store: 'Refrigerated in their brine for 5 days. Do not freeze.',
    nut: [105, 8, 3, 7, 0, 2, 890]
  },

  'youtiao': {
    d: 'Long twisted dough sticks fried until they puff hollow, torn and dipped in hot soy milk. The Chinese breakfast, everywhere, every morning.',
    meta: 'Chinese fried dough sticks: a slack alkaline dough rested overnight, cut into strips, pressed in pairs and deep-fried until hollow and puffed.',
    kw: ['youtiao', 'youtiao recipe', 'chinese fried dough sticks', 'chinese breakfast donut', 'soy milk and youtiao'],
    why: 'The dough is deliberately slack and is never kneaded hard — it is folded a few times over several hours and then left overnight, so the gluten relaxes completely. A tight dough cannot expand fast enough in the oil and gives a dense, solid stick instead of a hollow one. Two strips are pressed together with a chopstick before frying, and it is the seam between them, held shut, that forces the expansion outwards and sideways. The oil must be at 200C — cooler and they soak rather than leap.',
    ing: [
      '400 g plain flour',
      '1.5 tsp baking powder',
      '0.5 tsp bicarbonate of soda',
      '1.5 tsp fine sea salt',
      '2 tbsp vegetable oil',
      '260 ml warm water',
      '# For frying',
      '1.5 litres vegetable oil',
      '2 tbsp plain flour, for dusting',
      '# To serve',
      'Hot soy milk',
      'Congee'
    ],
    st: [
      'Mix the flour, baking powder, bicarbonate of soda and salt, then add the oil and warm water and bring to a shaggy, sticky dough.',
      'Fold the dough over on itself a few times in the bowl, cover, and leave 20 minutes. Repeat this folding three more times over 90 minutes.',
      'Cover the bowl tightly and refrigerate 12 hours.',
      'Turn the dough onto a floured surface and press it into a rectangle 1 cm thick. Do not knead it.',
      'Cut it into strips 2 cm wide.',
      'Lay one strip on top of another and press a chopstick firmly down the middle to join them.',
      'Heat the oil to 200C.',
      'Stretch each pair gently to about 25 cm and lower it into the oil, turning constantly with chopsticks.',
      'Fry 2 minutes, until puffed, hollow and deep gold.',
      'Drain on a rack and eat within minutes, torn and dipped in hot soy milk.'
    ],
    rest: [720, 'the overnight chill that relaxes the dough'],
    tips: [
      'Never knead it. Fold, rest, and leave it overnight.',
      'Press two strips together with a chopstick — the seam is what makes it hollow.',
      'Oil at 200C. Cooler oil gives a greasy solid stick.'
    ],
    pair: ['Hot soy milk', 'Congee', 'Jianbing'],
    store: 'None. Crisp for about ten minutes. Re-crisp leftovers in a hot oven.',
    nut: [360, 6, 42, 19, 2, 1, 780]
  }
};
