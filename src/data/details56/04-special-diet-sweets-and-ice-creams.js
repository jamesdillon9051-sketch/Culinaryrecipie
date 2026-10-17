'use strict';

/**
 * Volume fifty-six — no-bake desserts, ice creams, mug cakes and special-diet
 * sweets, fourth part.
 *
 * Twenty-five dishes: freezer cookie dough; four gluten-free bakes (brownie
 * cookies, cookies, cupcakes, shortbread); a high-protein cheesecake and
 * cookies; three low-carb sweets (brownies, cookies, mug cake); four vegan
 * sweets (cupcakes, fudge, ice cream, mousse); and ice creams and sorbets in
 * maple walnut, pistachio, mango, raspberry ripple, pumpkin, eggnog,
 * watermelon, lemon gelato, matcha, butter pecan and cookie butter. Waits of
 * an hour or more are declared as rest. Nutrition is estimated by npm run
 * calc.
 */

module.exports = {
  'freezer-cookie-dough': {
    d: 'Chocolate chip cookie dough scooped into balls and frozen for 2 hours, then baked straight from the freezer for 14 minutes.',
    meta: 'Freezer cookie dough balls baked from frozen for 14 minutes. 24 cookies, ready in 2 hours 30 minutes including freezing.',
    kw: ['freezer cookie dough', 'frozen cookie dough balls', 'bake from frozen cookies', 'frozen chocolate chip cookie dough', 'cookie dough to freeze'],
    why: 'Freeze the dough in balls, not in a block. A block of cookie dough has to be thawed, scooped and then baked, and by the time you are ready it has softened and spread. Individual balls, frozen solid on a tray and then bagged, can be taken out one at a time and baked from frozen, with no thawing and no mess, in just 14 minutes.\n\nThe dough itself is a classic chocolate chip mixture, with a little extra flour so that it holds its shape. Cream the butter with brown and caster sugars, beat in an egg and vanilla, then fold in the flour, bicarbonate of soda and salt, and finally the chocolate chunks. Scoop the dough with an ice cream scoop for balls of even size, so they bake at the same rate.\n\n**Freeze the balls on a tray for 2 hours before bagging.** If you bag them while soft, they stick together into a lump. Once frozen solid, move them into a freezer bag, squeeze out the air and label it with the date and the baking instructions. They keep for 3 months.\n\nTo bake, place the frozen balls on a lined tray 5 cm apart, and bake at 175C for about 14 minutes, which is 2 minutes longer than fresh dough. The cookies come out thick, soft and domed, because the centre stays cold while the outside sets. Cool for 10 minutes before eating.',
    ing: [
      '225 g butter, softened',
      '150 g light brown sugar',
      '100 g caster sugar',
      '2 eggs',
      '2 tsp vanilla extract',
      '300 g plain flour',
      '1 tsp bicarbonate of soda',
      '1 tsp salt',
      '250 g dark chocolate chunks'
    ],
    st: [
      'Cream the butter and both sugars for 3 minutes until pale. Beat in the eggs one at a time, then the vanilla.',
      'Stir in the flour, bicarbonate of soda and salt, then fold in the chocolate chunks.',
      'Scoop 24 balls onto trays lined with baking paper and freeze for 2 hours until solid.',
      'Move the frozen balls into a freezer bag and keep frozen.',
      'To bake, heat the oven to 175C and place the frozen balls 5 cm apart on a lined tray. Bake for 14 minutes and cool for 10 minutes.'
    ],
    tips: [
      'Freeze the balls on a tray first.',
      'Bake from frozen, adding 2 minutes.',
      'Label the bag with the date.'
    ],
    pair: ['Cold milk', 'Coffee', 'Vanilla ice cream', 'Hot chocolate'],
    store: 'The dough balls keep in the freezer for 3 months. Baked cookies keep for 4 days.',
    rest: [120, 'Freezing'],
    nut: [220, 2, 26, 12, 1, 15, 160]
  },

  'gluten-free-brownie-cookies': {
    d: 'Fudgy chocolate cookies made with a gluten-free flour blend, with a shiny crackled top and a brownie-like centre, baked for 12 minutes.',
    meta: 'Gluten-free brownie cookies with a crackled top, baked for 12 minutes. 16 cookies, ready in 40 minutes.',
    kw: ['gluten-free brownie cookies', 'gluten-free chocolate cookies', 'fudgy gluten-free cookies', 'crackled gluten-free brownie cookie', 'gluten-free brownie cookie recipe'],
    why: 'Gluten gives wheat flour its stretch and chew, and a brownie cookie needs neither. It relies on fat, sugar and chocolate for its structure, with the minimum of flour to hold them together, which is why it is one of the easiest kinds of cookie to make gluten-free. Almost any decent gluten-free flour blend works, and the result is indistinguishable from the original.\n\nUse a gluten-free flour blend that contains xanthan gum, or add a quarter teaspoon, because the gum replaces the binding that gluten would have provided. Check the labels on the cocoa powder and baking powder as well, as some brands are processed alongside wheat. For anyone with coeliac disease, a certified gluten-free mark is the safest guide.\n\n**Whisk the eggs and sugar for a full 3 minutes.** The shiny, papery crust on the top of a brownie cookie comes from dissolved sugar rising to the surface, and a short mix leaves the top dull. The mixture should be pale, thick and fall from the whisk in a ribbon. Then fold in the melted chocolate and the flour gently.\n\nThe dough is wet and needs 30 minutes in the fridge to become scoopable. Bake until the tops are cracked and glossy and the edges set. The centres should look slightly underdone. They firm up as they cool on the tray, leaving a fudgy middle. Dark chocolate chunks stirred in make them even better.',
    ing: [
      '150 g dark chocolate, chopped',
      '60 g butter',
      '2 eggs',
      '150 g caster sugar',
      '1 tsp vanilla extract',
      '60 g gluten-free flour blend with xanthan gum',
      '25 g cocoa powder',
      '1/2 tsp baking powder',
      '1/4 tsp salt',
      '100 g dark chocolate chunks'
    ],
    st: [
      'Melt the 150 g chocolate and butter together, stir smooth and cool for 5 minutes.',
      'Whisk the eggs, sugar and vanilla for 3 minutes until thick and pale. Fold in the chocolate mixture.',
      'Fold in the flour blend, cocoa, baking powder and salt, then the chocolate chunks. Chill for 30 minutes.',
      'Heat the oven to 180C and line 2 trays. Scoop 16 mounds and space them 5 cm apart.',
      'Bake for 12 minutes until the tops are cracked. Cool on the trays for 10 minutes.'
    ],
    tips: [
      'Check the flour blend and cocoa for gluten-free labels.',
      'Whisk the eggs and sugar for 3 full minutes.',
      'Chill the dough so it can be scooped.'
    ],
    pair: ['Cold milk', 'Coffee', 'Vanilla ice cream', 'Fresh raspberries'],
    store: 'Keeps in an airtight container for 4 days.',
    nut: [181, 2, 23, 9, 2, 17, 60]
  },

  'gluten-free-cookies': {
    d: 'Chewy chocolate chip cookies made with a gluten-free flour blend, with crisp edges and soft centres, baked for 12 minutes.',
    meta: 'Gluten-free chocolate chip cookies, chewy with crisp edges, baked for 12 minutes. 24 cookies, ready in 45 minutes.',
    kw: ['gluten-free cookies', 'gluten-free chocolate chip cookies', 'chewy gluten-free cookies', 'gluten-free cookie recipe', 'cookies with gluten-free flour'],
    why: 'Gluten-free cookie doughs behave differently from wheat ones, and the main difference is time. Gluten-free flours, which are made of rice, tapioca, potato and corn starches, absorb liquid more slowly than wheat flour, so a dough that seems right when mixed turns dry and gritty after baking if it has not rested. Thirty minutes in the fridge before baking lets the starches hydrate fully and makes a dramatic difference to the texture.\n\nUse a flour blend that already contains xanthan gum, labelled as a one-to-one replacement for plain flour, and weigh it rather than measuring by volume. Gluten-free flours vary in density and a cup can differ by 30 g from brand to brand. The dough should feel like a standard cookie dough, soft and slightly sticky.\n\n**Underbake slightly and cool on the tray.** Gluten-free cookies are fragile when warm and set firm as they cool. Take them out when the edges are golden and the middle still looks pale and soft, and leave them on the hot tray for 10 minutes before moving. Overbaked, they turn sandy and crumbly.\n\nBrown sugar provides the moisture and chewiness that gluten-free baking tends to lack, so use more of it than white sugar. Check the chocolate chips for gluten too, since most brands are safe but a few add malt or are processed alongside wheat.',
    ing: [
      '115 g butter, softened',
      '120 g light brown sugar',
      '60 g caster sugar',
      '1 egg',
      '1 tsp vanilla extract',
      '200 g gluten-free flour blend with xanthan gum',
      '1/2 tsp bicarbonate of soda',
      '1/2 tsp salt',
      '150 g dark chocolate chips'
    ],
    st: [
      'Cream the butter and both sugars for 3 minutes. Beat in the egg and vanilla.',
      'Stir in the flour blend, bicarbonate of soda and salt, then fold in the chocolate chips.',
      'Chill the dough for 30 minutes.',
      'Heat the oven to 180C and line 2 trays. Roll 24 balls and place them 5 cm apart.',
      'Bake for 12 minutes until the edges are golden. Cool on the trays for 10 minutes.'
    ],
    tips: [
      'Rest the dough so the flours hydrate.',
      'Weigh the flour blend.',
      'Cool on the tray before moving.'
    ],
    pair: ['Cold milk', 'Coffee', 'Vanilla ice cream', 'Hot tea'],
    store: 'Keeps in an airtight tin for 4 days.',
    nut: [130, 1, 18, 6, 1, 10, 80]
  },

  'gluten-free-cupcakes': {
    d: 'Light vanilla cupcakes made with a gluten-free flour blend and a swirl of vanilla buttercream, baked for 22 minutes.',
    meta: 'Gluten-free cupcakes with vanilla buttercream, baked for 22 minutes. Twelve servings, ready in 50 minutes.',
    kw: ['gluten-free cupcakes', 'gluten-free vanilla cupcakes', 'cupcakes with gluten-free flour', 'gluten-free cupcake recipe', 'moist gluten-free cupcakes'],
    why: 'Cakes are in some ways easier to make gluten-free than bread, because they rely less on gluten structure and more on eggs, fat and sugar. The trick is moisture: gluten-free flours dry out quickly and produce crumbly, sandy cakes unless the batter is slightly wetter than usual. A good cupcake is soft, fine-grained and tender.\n\nUse a gluten-free flour blend with xanthan gum, and increase the liquid by a spoonful or two compared with a wheat recipe. Buttermilk or yogurt adds tenderness, and an extra egg yolk gives richness and binding. Beat the butter and sugar for a full 4 minutes until pale and fluffy, and add the eggs gradually, since the structure of these cakes depends on well-aerated batter.\n\n**Let the batter rest for 15 minutes before baking.** The starches in the flour blend need time to absorb the liquid, and a rested batter bakes into a finer, less gritty crumb. It will thicken noticeably as it stands. Give it a quick stir before spooning it into the cases, filling them two thirds full.\n\nBake until the tops spring back when pressed. Gluten-free cakes can dome and then sink if overbaked, so check at 20 minutes. Cool completely before frosting with vanilla buttercream, made from butter, icing sugar, cream and vanilla. Check that the icing sugar and baking powder are labelled gluten-free.',
    ing: [
      '200 g gluten-free flour blend with xanthan gum',
      '1 1/2 tsp baking powder',
      '1/4 tsp salt',
      '115 g butter, softened',
      '150 g caster sugar',
      '2 eggs',
      '1 egg yolk',
      '1 tsp vanilla extract',
      '150 ml buttermilk',
      '175 g butter, softened, for the buttercream',
      '300 g icing sugar',
      '2 tbsp double cream'
    ],
    st: [
      'Heat the oven to 180C and line a 12-hole muffin tin.',
      'Beat the 115 g butter and sugar for 4 minutes. Beat in the eggs, egg yolk and vanilla.',
      'Fold in the flour, baking powder and salt alternately with the buttermilk. Leave to rest for 15 minutes, then stir.',
      'Fill the cases two thirds full and bake for 22 minutes. Cool completely.',
      'Beat the buttercream butter, icing sugar and cream until fluffy and swirl onto the cupcakes.'
    ],
    tips: [
      'Rest the batter for 15 minutes.',
      'Add an extra yolk for richness.',
      'Frost only when cool.'
    ],
    pair: ['Cold milk', 'Hot tea', 'Fresh berries', 'Coffee'],
    store: 'Keeps in an airtight container for 3 days.',
    nut: [418, 4, 51, 22, 1, 38, 140]
  },

  'gluten-free-shortbread': {
    d: 'Buttery shortbread made with rice flour and cornflour in place of wheat, pressed into a tin and baked for 20 minutes at 160C.',
    meta: 'Gluten-free shortbread with rice flour and cornflour, baked for 20 minutes. 16 fingers, ready in 40 minutes.',
    kw: ['gluten-free shortbread', 'rice flour shortbread', 'gluten-free scottish shortbread', 'butter shortbread without wheat', 'gluten-free shortbread fingers'],
    why: 'Shortbread is perhaps the easiest classic biscuit to make gluten-free, because it has almost no gluten structure to replace. Its whole identity is short, crumbly and sandy, and gluten works against that. Rice flour has been used in shortbread for generations, especially in Scotland, where it gives the biscuit its characteristic fine, sandy bite.\n\nThe flour is a mix of white rice flour and cornflour, with a little icing sugar. Rice flour on its own can be gritty, so the cornflour smooths it out. A ratio of two parts rice flour to one part cornflour produces a tender biscuit with a melting texture. Check that the cornflour is certified gluten-free, as some are processed alongside wheat.\n\n**Rub the butter in with your fingertips.** Cold butter, cubed, worked into the flours and sugar until the mixture looks like fine breadcrumbs, then pressed together into a ball. Overworking the dough makes it greasy and tough. If it will not come together, add a teaspoon of cold water.\n\nPress into a tin, prick with a fork and bake low, at 160C, until pale gold. Cut into fingers while warm and let it cool in the tin, as the shortbread is very fragile when hot. Sprinkle with caster sugar while warm.',
    ing: [
      '225 g cold butter, cubed',
      '90 g icing sugar',
      '1/4 tsp salt',
      '200 g white rice flour',
      '100 g cornflour',
      '1 tbsp caster sugar, for sprinkling'
    ],
    st: [
      'Heat the oven to 160C. Line a 20 cm square tin with baking paper.',
      'Rub the butter into the rice flour, cornflour, icing sugar and salt until it looks like fine breadcrumbs. Press into a ball.',
      'Press the dough into the tin and prick all over with a fork.',
      'Bake for 20 minutes until pale gold at the edges.',
      'Cut into 16 fingers while warm, sprinkle with the caster sugar and cool in the tin.'
    ],
    tips: [
      'Use certified gluten-free cornflour.',
      'Cut the fingers while warm.',
      'Cool in the tin: the shortbread is fragile.'
    ],
    pair: ['Hot tea', 'Coffee', 'Fresh berries', 'Cheese'],
    store: 'Keeps in an airtight tin for 2 weeks.',
    nut: [191, 1, 22, 11, 0, 6, 40]
  },

  'high-protein-cheesecake': {
    d: 'A baked cheesecake made from cottage cheese, Greek yogurt and cream cheese with a nut and oat base, baked for 35 minutes.',
    meta: 'High-protein cheesecake from cottage cheese and Greek yogurt, baked for 35 minutes. Eight servings, ready in 6 hours with chilling.',
    kw: ['high-protein cheesecake', 'cottage cheese cheesecake', 'greek yogurt cheesecake', 'protein cheesecake', 'lighter baked cheesecake'],
    why: 'Cottage cheese does the heavy lifting. A 200 g pot contains about 22 g of protein, and when blended until smooth it loses its curds and becomes a thick, creamy base that is indistinguishable from cream cheese in a baked dessert. Combined with Greek yogurt and a little cream cheese for richness, it gives a cheesecake with roughly three times the protein of a standard slice.\n\nThe blending is the critical step. Put the cottage cheese in a food processor and run it for a full 2 minutes, scraping down the sides, until there is not a single lump left. A grainy cheesecake is the usual complaint and it always comes from impatience. Add the yogurt, eggs, cream cheese, sweetener and vanilla, and blend until completely smooth.\n\n**Bake at a low temperature and let it cool slowly.** At 160C the proteins set gently and the cheesecake stays creamy, whereas a hot oven makes it puff and crack. After 35 minutes, when the edges are set and the centre has a slight wobble, turn off the oven and leave the door ajar for an hour, then chill for at least 4 hours.\n\nThe base is oats and almonds blitzed with a little honey and melted butter, pressed into a tin and baked for 8 minutes. Top with fresh berries just before serving.',
    ing: [
      '60 g rolled oats',
      '60 g almonds',
      '1 tbsp honey',
      '30 g butter, melted',
      '400 g cottage cheese',
      '250 g Greek yogurt',
      '100 g cream cheese',
      '3 eggs',
      '80 g caster sugar',
      '2 tbsp cornflour',
      '1 tsp vanilla extract',
      '1 lemon, zested',
      '150 g raspberries, to serve'
    ],
    st: [
      'Heat the oven to 160C. Blitz the oats and almonds to a coarse crumb with the honey and melted butter. Press into the base of a lined 20 cm springform tin and bake for 8 minutes.',
      'Blend the cottage cheese for 2 minutes until completely smooth. Add the yogurt, cream cheese, eggs, sugar, cornflour, vanilla and lemon zest and blend smooth.',
      'Pour onto the base and tap the tin to remove air bubbles.',
      'Bake for 35 minutes until set at the edges with a slight wobble. Turn off the oven, open the door slightly and leave for 1 hour.',
      'Chill for 4 hours. Serve with the raspberries.'
    ],
    tips: [
      'Blend the cottage cheese until completely smooth.',
      'Cool slowly in the oven.',
      'Chill for at least 4 hours.'
    ],
    pair: ['Fresh berries', 'Coffee', 'Hot tea', 'Greek yogurt'],
    store: 'Keeps in the fridge for 4 days.',
    rest: [300, 'Cooling and chilling'],
    nut: [312, 15, 27, 16, 3, 17, 270]
  },

  'high-protein-cookies': {
    d: 'Soft oat and peanut butter cookies made with whey protein powder and an egg white, baked for 12 minutes.',
    meta: 'High-protein cookies with oats, peanut butter and protein powder, baked for 12 minutes. 12 cookies, ready in 30 minutes.',
    kw: ['high-protein cookies', 'protein powder cookies', 'oat and peanut butter protein cookies', 'protein cookies with oats', 'high protein cookie recipe'],
    why: 'Protein powder behaves like a very dry flour and drinks up moisture, so a cookie made with a lot of it turns dry, tough and chalky if the recipe is not adjusted. The way round it is plenty of moist, fatty ingredients, which here means peanut butter and a mashed banana, and a modest amount of powder, so each cookie has about 8 g of protein without being hard.\n\nWhey protein is the usual choice, but it sets firm when baked, so keep the oven temperature moderate and the time short. A vanilla flavour is the most versatile. Chocolate gives a double-chocolate cookie, but the sweeteners in some brands taste harsh when heated. Plant-based powders are drier still and may need an extra spoonful of milk.\n\n**Take them out while still soft.** These cookies firm up considerably as they cool, and baked until they look done, they will be hard and rubbery. Pull them at 12 minutes, when the edges are set and the tops still look slightly moist, and leave them on the tray for 10 minutes.\n\nOats add chew and fibre, and a small handful of chocolate chips adds enough sweetness to make them feel like a treat. They freeze well, so a batch can last for weeks, and they make a convenient snack after exercise.',
    ing: [
      '120 g rolled oats',
      '60 g vanilla whey protein powder',
      '1 tsp baking powder',
      '1/4 tsp salt',
      '1 ripe banana, mashed, about 120 g',
      '100 g smooth peanut butter',
      '1 egg white',
      '2 tbsp honey',
      '1 tsp vanilla extract',
      '40 g dark chocolate chips'
    ],
    st: [
      'Heat the oven to 175C and line a tray.',
      'Mix the oats, protein powder, baking powder and salt.',
      'Beat the banana, peanut butter, egg white, honey and vanilla until smooth. Stir into the dry ingredients, then fold in the chocolate chips.',
      'Scoop 12 mounds onto the tray and flatten slightly.',
      'Bake for 12 minutes until set at the edges. Cool on the tray for 10 minutes.'
    ],
    tips: [
      'Do not overbake: these dry out fast.',
      'Use a vanilla protein powder.',
      'Cool on the tray before moving.'
    ],
    pair: ['Cold milk', 'Coffee', 'Greek yogurt', 'Fresh fruit'],
    store: 'Keeps in an airtight container for 4 days, or frozen for 2 months.',
    nut: [150, 8, 16, 6, 2, 7, 120]
  },

  'low-carb-brownies': {
    d: 'Fudgy brownies made with almond flour, cocoa and erythritol, baked for 22 minutes with chocolate chips.',
    meta: 'Low-carb brownies with almond flour and cocoa, baked for 22 minutes, cooled and chilled for an hour before cutting. Makes 12 squares.',
    kw: ['low-carb brownies', 'almond flour brownies', 'low carb chocolate brownies', 'sugar free brownies with erythritol', 'low carb brownie recipe'],
    why: 'The carbohydrate in a brownie comes mainly from sugar and flour, and both can be swapped. Ground almonds replace the wheat flour, bringing protein, fat and a moist, fudgy structure, and erythritol replaces the sugar. It is a sugar alcohol which tastes sweet but is largely not absorbed, so the nutrition figures here count it as no carbohydrate. The brownies come out dense, rich and very chocolatey.\n\nErythritol has a slight cooling effect on the tongue, and in large amounts it can taste a little chemical. Powdered erythritol dissolves better than granular, and gives a smoother brownie, so grind granular in a spice grinder if you can only find that. A pinch of salt and a teaspoon of vanilla cover any aftertaste. The sweetness is about 70 per cent that of sugar, so adjust to taste.\n\n**Do not overbake.** Almond flour brownies dry out quickly and have no gluten structure to hold them together, so they become crumbly if cooked too long. Take them out when the edges are set and the centre looks a little underdone. A skewer should come out with moist crumbs.\n\nCool completely in the tin, then chill for an hour before cutting. They are fragile when warm, and firm up in the fridge to a dense, fudgy bar. Use sugar-free dark chocolate chips to keep the total carbohydrate low, and store them in the fridge.',
    ing: [
      '100 g butter',
      '100 g sugar-free dark chocolate, chopped',
      '120 g powdered erythritol',
      '3 eggs',
      '1 tsp vanilla extract',
      '120 g ground almonds',
      '30 g cocoa powder',
      '1/2 tsp baking powder',
      '1/4 tsp salt',
      '40 g sugar-free dark chocolate chips'
    ],
    st: [
      'Heat the oven to 175C. Grease and line a 20 cm square tin.',
      'Melt the butter and chopped chocolate together, stir smooth and cool for 5 minutes.',
      'Whisk the erythritol, eggs and vanilla for 3 minutes. Stir in the chocolate mixture.',
      'Fold in the ground almonds, cocoa, baking powder and salt, then half the chocolate chips. Spread in the tin and scatter over the rest.',
      'Bake for 22 minutes until the edges are set. Cool completely, chill for 1 hour and cut into 12.'
    ],
    tips: [
      'Erythritol is not absorbed, so the figures count it as no carbohydrate.',
      'Use powdered erythritol for a smooth finish.',
      'Do not overbake the brownies.'
    ],
    pair: ['Coffee', 'Unsweetened whipped cream', 'Fresh raspberries', 'Hot tea'],
    store: 'Keeps in the fridge for 5 days.',
    rest: [60, 'Chilling'],
    nut: [226, 5, 11, 18, 3, 6, 90]
  },

  'low-carb-cookies': {
    d: 'Chewy almond flour cookies sweetened with erythritol and dotted with sugar-free chocolate chips, baked for 12 minutes.',
    meta: 'Low-carb cookies with almond flour and sugar-free chocolate chips, baked for 12 minutes. 16 cookies, ready in 30 minutes.',
    kw: ['low-carb cookies', 'almond flour chocolate chip cookies', 'sugar free low carb cookies', 'erythritol cookies', 'low carb cookie recipe'],
    why: 'A chocolate chip cookie with the wheat flour and sugar replaced is a surprisingly good thing, if you accept that it is its own cookie and not an imitation. The ground almonds give a tender, slightly crumbly crumb and a nutty richness, and the erythritol sweetens without raising blood sugar. The cookies come out buttery and chewy, with a distinctive almond flavour.\n\nBrowned butter is the secret to making them taste like the real thing. Melt the butter in a pan for about 5 minutes until the milk solids toast to hazelnut brown and smell nutty, then cool it for 10 minutes. This adds a deep caramel flavour that substitutes for the brown sugar absent from the recipe. Erythritol does not caramelise, so it needs a hand from somewhere.\n\n**Chill the dough for 30 minutes.** Almond flour dough is soft and sticky, and without a rest it spreads into flat, greasy discs. After chilling it holds together and bakes into thick cookies. Press each ball down gently with your palm, as the dough barely spreads.\n\nBake until the edges turn golden, leaving the centres soft. Cool on the tray for at least 15 minutes. These cookies are very fragile when warm and firm up considerably. The nutrition figures treat erythritol as carbohydrate-free, since it is mostly not absorbed.',
    ing: [
      '100 g butter',
      '80 g powdered erythritol',
      '1 egg',
      '1 tsp vanilla extract',
      '200 g ground almonds',
      '1/2 tsp baking powder',
      '1/4 tsp salt',
      '60 g sugar-free dark chocolate chips'
    ],
    st: [
      'Melt the butter in a pan for 5 minutes until it smells nutty and turns light brown. Pour into a bowl and cool for 10 minutes.',
      'Whisk in the erythritol, egg and vanilla.',
      'Stir in the ground almonds, baking powder and salt, then the chocolate chips. Chill for 30 minutes.',
      'Heat the oven to 175C and line a tray. Roll 16 balls, place 5 cm apart and flatten gently.',
      'Bake for 12 minutes until the edges are golden. Cool on the tray for 15 minutes.'
    ],
    tips: [
      'Brown the butter for extra flavour.',
      'Chill the dough before baking.',
      'Cool on the tray: the cookies are fragile.'
    ],
    pair: ['Unsweetened almond milk', 'Coffee', 'Hot tea', 'Fresh berries'],
    store: 'Keeps in an airtight container for 5 days.',
    nut: [149, 3, 5, 13, 2, 2, 60]
  },

  'low-carb-mug-cake': {
    d: 'A single-serving chocolate cake made with almond flour, cocoa and erythritol in a mug, microwaved for 90 seconds.',
    meta: 'Low-carb mug cake with almond flour and cocoa, microwaved for 90 seconds. One serving, ready in 7 minutes.',
    kw: ['low-carb mug cake', 'almond flour mug cake', 'chocolate mug cake without sugar', 'sugar free chocolate mug cake', 'microwave low carb cake'],
    why: 'A low-carb cake in a mug sounds like a compromise, and it tastes like a pleasant surprise. Almond flour makes a denser, moister cake than wheat flour, with a fine crumb that sets in the microwave in 90 seconds, and the cocoa gives it a deep, bittersweet flavour that does not depend on sugar for its charm.\n\nThe ingredient list is short: almond flour, cocoa, erythritol, baking powder, an egg, butter and a splash of cream or milk. The egg does most of the structural work, so it must be fully beaten into the batter, with no streaks. The baking powder lifts the batter and the butter keeps it tender. A few sugar-free chocolate chips in the middle melt into a molten pocket.\n\n**Cook in short bursts.** Almond flour cakes go from perfectly done to dry within 10 or 15 seconds. Start with 60 seconds, check, and add 10 seconds at a time. The cake is done when the top looks set and springs back, and the middle is no longer liquid. It will sink a little as it cools.\n\nErythritol is mostly not absorbed, so the nutrition figures count it as no carbohydrate. Leave the cake to stand for a minute and eat it from the mug, with a spoonful of whipped cream.',
    ing: [
      '3 tbsp ground almonds',
      '1 tbsp cocoa powder',
      '1 1/2 tbsp powdered erythritol',
      '1/4 tsp baking powder',
      '1 pinch salt',
      '1 egg',
      '1 tbsp butter, melted',
      '1 tbsp double cream',
      '1/4 tsp vanilla extract',
      '1 tbsp sugar-free chocolate chips'
    ],
    st: [
      'Mix the ground almonds, cocoa, erythritol, baking powder and salt in a large mug.',
      'Beat in the egg, melted butter, cream and vanilla until smooth with no streaks.',
      'Press the chocolate chips into the middle of the batter.',
      'Microwave on high for 60 seconds, then check. Add 10 seconds at a time if the middle is still wet.',
      'Leave to stand for 1 minute and eat from the mug.'
    ],
    tips: [
      'Cook in short bursts.',
      'Beat the egg in completely.',
      'Stand for a minute before eating.'
    ],
    pair: ['Unsweetened whipped cream', 'Fresh raspberries', 'Coffee', 'Hot tea'],
    store: 'Best eaten at once.',
    nut: [420, 12, 21, 32, 4, 14, 350]
  },

  'vegan-cupcakes': {
    d: 'Light vanilla cupcakes made with oat milk, oil and a splash of vinegar, topped with a vegan buttercream, baked for 22 minutes.',
    meta: 'Vegan cupcakes with oat milk and vanilla buttercream, baked for 22 minutes. Twelve servings, ready in 50 minutes.',
    kw: ['vegan cupcakes', 'vegan vanilla cupcakes', 'cupcakes without eggs or dairy', 'plant based cupcakes', 'vegan cupcake recipe'],
    why: 'A cake without eggs or dairy is a chemistry problem, and the solution is a reaction. Vinegar mixed with bicarbonate of soda produces carbon dioxide at once, and that gas lifts the batter in the oven in the same way that whisked eggs would do. The result is a light, fine-crumbed vanilla cupcake that rises as well as any traditional one.\n\nThe liquid is oat milk, which is neutral in flavour and slightly sweet, with a body that suits baking. Almond or soy would work, but oat gives the best crumb. Add a tablespoon of cider vinegar to the milk and leave it for 5 minutes, and it curdles into something like buttermilk, which tenderises the cake. Oil replaces butter in the batter, keeping the cupcakes moist for days.\n\n**Mix the wet and dry separately and combine at the last second.** The vinegar and soda start reacting as soon as they meet, and the batter must go into the oven straight away to capture the lift. Fold until just combined. A few small lumps are fine, and the batter will be quite thin.\n\nThe buttercream uses a vegan baking block beaten with icing sugar, a splash of oat milk and vanilla. Check the sugar labels if you eat a strict vegan diet, as some icing sugar is processed with bone char. Cool the cupcakes completely before frosting.',
    ing: [
      '250 ml unsweetened oat milk',
      '1 tbsp cider vinegar',
      '200 g plain flour',
      '150 g caster sugar',
      '1 1/2 tsp baking powder',
      '1/2 tsp bicarbonate of soda',
      '1/4 tsp salt',
      '80 ml sunflower oil',
      '2 tsp vanilla extract',
      '150 g vegan baking block, softened',
      '300 g icing sugar',
      '2 tbsp oat milk'
    ],
    st: [
      'Heat the oven to 180C and line a 12-hole muffin tin. Stir the vinegar into the 250 ml oat milk and leave for 5 minutes.',
      'Mix the flour, caster sugar, baking powder, bicarbonate of soda and salt.',
      'Whisk the soured oat milk with the oil and 1 tsp of the vanilla. Pour into the dry ingredients and fold until just combined.',
      'Divide between the cases at once and bake for 22 minutes. Cool completely.',
      'Beat the vegan block, icing sugar, 2 tbsp oat milk and remaining vanilla until fluffy and swirl onto the cupcakes.'
    ],
    tips: [
      'Bake the batter immediately after mixing.',
      'Use a firm vegan baking block for the buttercream.',
      'Frost only when cool.'
    ],
    pair: ['Oat milk', 'Fresh berries', 'Hot tea', 'Coffee'],
    store: 'Keeps in an airtight container for 3 days.',
    nut: [369, 2, 52, 17, 1, 39, 220]
  },

  'vegan-fudge': {
    d: 'A creamy no-cook fudge of coconut oil, cocoa, almond butter and maple syrup, set in the fridge for 2 hours.',
    meta: 'Vegan fudge with cocoa, almond butter and maple syrup, set for 2 hours. 24 squares, ready in 2 hours 15 minutes.',
    kw: ['vegan fudge', 'coconut oil chocolate fudge', 'dairy free fudge', 'vegan chocolate fudge without condensed milk', 'almond butter fudge'],
    why: 'Condensed milk is the usual shortcut to a smooth fudge, and it has to go. The replacement here is a combination of coconut oil, which firms in the fridge to give the same dense, sliceable body as a milk-based fudge, and nut butter, which provides richness and a smooth, creamy mouthfeel. Maple syrup sweetens it with a faint caramel taste.\n\nThe method has no sugar syrup to boil and no thermometer. Melt the coconut oil and almond butter together gently, then whisk in the cocoa, maple syrup, vanilla and a pinch of salt until the mixture is glossy and thick. The cocoa must be sifted so that it does not form lumps. Taste it at this stage: it should be sweeter than you want the finished fudge, as cold dulls sweetness.\n\n**Pour into a lined tin and chill, but not for too long.** Two hours in the fridge sets it firm enough to cut, but this fudge softens quickly at room temperature, as coconut oil melts at 24C. Cut it straight from the fridge with a hot knife, and keep it chilled until serving.\n\nA handful of chopped walnuts or a sprinkle of flaky salt on top makes it feel like a proper sweet shop treat. Check the labels on the cocoa and almond butter for any milk ingredients if you eat a strict vegan diet.',
    ing: [
      '120 g coconut oil',
      '120 g smooth almond butter',
      '60 g cocoa powder, sifted',
      '100 ml maple syrup',
      '1 tsp vanilla extract',
      '1/4 tsp salt',
      '40 g walnuts, chopped',
      '1/4 tsp flaky sea salt'
    ],
    st: [
      'Line a 20 cm loaf tin with baking paper.',
      'Melt the coconut oil and almond butter together over low heat for 3 minutes, stirring.',
      'Whisk in the cocoa, maple syrup, vanilla and 1/4 tsp salt until glossy and thick. Stir in half of the walnuts.',
      'Pour into the tin, smooth the top, and scatter with the rest of the walnuts and the flaky salt.',
      'Chill for 2 hours and cut into 24 squares with a hot knife.'
    ],
    tips: [
      'Sift the cocoa to avoid lumps.',
      'Keep the fudge chilled.',
      'Cut with a hot knife.'
    ],
    pair: ['Coffee', 'Hot tea', 'Oat milk', 'Fresh fruit'],
    store: 'Keeps in the fridge for 2 weeks.',
    rest: [120, 'Chilling'],
    nut: [113, 2, 6, 9, 1, 4, 50]
  },

  'vegan-ice-cream': {
    d: 'A creamy coconut milk ice cream thickened with cornflour and flavoured with vanilla, chilled for 4 hours, churned and frozen.',
    meta: 'Vegan ice cream with coconut milk and vanilla, chilled and churned. Six servings, ready in 9 hours.',
    kw: ['vegan ice cream', 'coconut milk vanilla ice cream', 'dairy free ice cream with coconut milk', 'plant based ice cream', 'homemade vegan ice cream'],
    why: 'A custard without eggs needs a different thickener, and cornflour does the job. It sets the base lightly, giving the ice cream body and the stability to resist ice crystals, without any animal products. Combined with full-fat coconut milk, which is high in saturated fat and freezes beautifully, the result is a rich, smooth scoop with a clean vanilla flavour.\n\nUse tins of full-fat coconut milk, not cartons, which are thin and watery. Shake the tin well before opening, as the cream and water separate, and use all of it. A pinch of salt and a spoon of vanilla bean paste, with its visible seeds, lift the flavour above the faint coconut taste. Some people like that taste, but if you do not, refined coconut oil and cashew cream are alternatives.\n\n**Cook the cornflour mixture until it thickens.** Whisk the cornflour into a little cold coconut milk to make a slurry, then add it to the rest of the milk and sugar in a pan. Heat gently, stirring constantly, until it thickens enough to coat a spoon and no longer tastes starchy, about 5 minutes. Do not boil hard.\n\nChill the base for 4 hours, until completely cold. Churn in an ice cream machine, and freeze in a covered container for 4 hours. Without a machine, whisk by hand every 45 minutes during freezing. Vegan ice cream freezes harder than dairy, so leave it out for 10 minutes before scooping.',
    ing: [
      '800 ml full-fat coconut milk',
      '100 g caster sugar',
      '2 tbsp cornflour',
      '2 tsp vanilla bean paste',
      '1/4 tsp salt',
      '1 tbsp coconut oil'
    ],
    st: [
      'Whisk the cornflour with 4 tbsp of the coconut milk until smooth.',
      'Heat the remaining coconut milk and the sugar in a pan until the sugar dissolves. Whisk in the cornflour mixture and cook, stirring, for 5 minutes until thickened.',
      'Take off the heat and stir in the vanilla, salt and coconut oil. Chill for 4 hours.',
      'Churn in an ice cream machine until thick.',
      'Freeze in a covered container for 4 hours. Stand for 10 minutes before scooping.'
    ],
    tips: [
      'Use tinned full-fat coconut milk.',
      'Cook the cornflour until it no longer tastes starchy.',
      'Soften before scooping.'
    ],
    pair: ['Fresh berries', 'Brownies', 'Wafer cones', 'Chocolate sauce'],
    store: 'Keeps in the freezer for 2 weeks.',
    rest: [480, 'Chilling and freezing'],
    nut: [329, 3, 23, 25, 0, 20, 120]
  },

  'vegan-mousse': {
    d: 'A light chocolate mousse made from dark chocolate and whipped chickpea water, folded together and chilled for 3 hours.',
    meta: 'Vegan chocolate mousse with whipped aquafaba, chilled for 3 hours. Four servings, ready in 3 hours 25 minutes.',
    kw: ['vegan mousse', 'aquafaba chocolate mousse', 'chickpea water mousse', 'plant based chocolate mousse', 'egg free chocolate mousse'],
    why: 'The liquid from a tin of chickpeas whips like egg white. It is called aquafaba, and it contains proteins and starches that foam when beaten, and hold air. Whipped to stiff peaks with a pinch of cream of tartar and a little sugar, it looks and behaves remarkably like a meringue, and folded into melted chocolate it makes a light, airy mousse without eggs or dairy.\n\nUse the liquid from an unsalted tin of chickpeas, drained and measured: 120 ml is about the amount in a standard tin. If it is thin and watery, reduce it in a pan for 5 minutes. Chill it before whipping. The aquafaba takes longer to reach stiff peaks than egg whites, up to 8 minutes with an electric whisk, so be patient and keep going until it stands up on the whisk.\n\n**Cool the chocolate before folding.** Melt the dark chocolate gently, stir until smooth, and leave for 10 minutes, until just warm and no longer hot. Hot chocolate deflates the foam. Fold in a spoonful of the whipped aquafaba to loosen it, then fold in the rest in two additions, gently, until no streaks remain.\n\nSpoon into glasses and chill for 3 hours until set. The mousse tastes of dark chocolate, with no trace of chickpea. Check the chocolate for milk, and top with raspberries and a pinch of flaky salt.',
    ing: [
      '120 ml aquafaba from a tin of unsalted chickpeas, chilled',
      '1/4 tsp cream of tartar',
      '2 tbsp caster sugar',
      '150 g vegan dark chocolate, chopped',
      '1 tsp vanilla extract',
      '1 pinch salt',
      '100 g raspberries, to serve'
    ],
    st: [
      'Melt the chocolate gently, stir smooth and cool for 10 minutes. Stir in the vanilla and salt.',
      'Whisk the aquafaba and cream of tartar with an electric whisk for 5 minutes until soft peaks form. Add the sugar a spoonful at a time and whisk for 3 minutes more until stiff and glossy.',
      'Fold a spoonful of the whipped aquafaba into the chocolate to loosen, then fold in the rest in 2 additions.',
      'Spoon into 4 glasses.',
      'Chill for 3 hours and top with the raspberries.'
    ],
    tips: [
      'Chill the aquafaba before whipping.',
      'Whip until stiff peaks form.',
      'Cool the chocolate before folding.'
    ],
    pair: ['Fresh raspberries', 'Coffee', 'Vegan biscuits', 'Hot tea'],
    store: 'Keeps in the fridge for 2 days.',
    rest: [180, 'Chilling'],
    nut: [290, 4, 37, 14, 7, 26, 130]
  },

  'maple-walnut-ice-cream': {
    d: 'A custard ice cream sweetened with pure maple syrup, churned with toasted walnuts, chilled for 4 hours and frozen for 4 more.',
    meta: 'Maple walnut ice cream with pure maple syrup and toasted walnuts, chilled and churned. Eight servings, ready in 9 hours.',
    kw: ['maple walnut ice cream', 'canadian maple ice cream', 'maple custard ice cream with walnuts', 'homemade maple walnut ice cream', 'maple syrup ice cream'],
    why: 'It is a classic of the maple-producing regions of eastern Canada and New England, where the syrup is boiled down in late winter, and the ice cream has been a spring tradition for as long as ice cream has been made. The flavour of real maple, caramelly, woody and faintly smoky, is impossible to imitate with flavouring.\n\nUse dark, robust syrup, which in Canada is labelled very dark or strong, and in the United States is grade A dark. It has more flavour than pale golden syrup, which disappears when frozen. Reduce the syrup in a pan for 5 minutes before adding it to the custard, so the flavour is concentrated, and the extra water does not make the ice cream icy.\n\n**Replace some of the sugar with maple, not all of it.** Maple syrup is sweeter by volume than sugar but contains more water, and too much will prevent the ice cream from freezing firm. About 120 ml of reduced syrup and 40 g of sugar is a good balance for a litre of ice cream. The egg yolks provide the body.\n\nToast the walnuts first for 6 minutes in a 180C oven until fragrant, and chop coarsely. Add them in the last minute of churning so they stay crunchy. They offer a welcome bitterness that offsets the syrup. Freeze for 4 hours until firm.',
    ing: [
      '120 ml pure maple syrup, dark',
      '300 ml double cream',
      '300 ml whole milk',
      '5 egg yolks',
      '40 g caster sugar',
      '1/4 tsp salt',
      '1 tsp vanilla extract',
      '80 g walnuts, toasted and chopped'
    ],
    st: [
      'Boil the maple syrup in a small pan for 5 minutes until reduced by a third. Cool slightly.',
      'Heat the cream and milk until steaming. Whisk the egg yolks, sugar and salt until pale and whisk in a ladle of the hot cream, then return all to the pan.',
      'Cook over low heat to 80C, stirring, then stir in the maple syrup and vanilla. Strain and chill for 4 hours.',
      'Churn until thick, adding the walnuts for the last minute.',
      'Freeze in a covered container for 4 hours.'
    ],
    tips: [
      'Use dark, strongly flavoured maple syrup.',
      'Reduce the syrup first.',
      'Add the nuts at the end of churning.'
    ],
    pair: ['Waffles', 'Pancakes', 'Apple pie', 'Wafer cones'],
    store: 'Keeps in the freezer for 2 weeks.',
    rest: [480, 'Chilling and freezing'],
    nut: [336, 7, 23, 24, 1, 20, 140]
  },

  'pistachio-ice-cream': {
    d: 'A custard ice cream made with ground pistachios and a hint of almond, chilled for 4 hours, churned and frozen for 4 more.',
    meta: 'Pistachio ice cream with ground pistachios in a custard base, chilled and churned. Eight servings, ready in 9 hours.',
    kw: ['pistachio ice cream', 'homemade pistachio ice cream', 'italian pistachio gelato style ice cream', 'pistachio custard ice cream', 'real pistachio ice cream'],
    why: 'Real pistachio ice cream is a dull sage-brown, not the bright green of the shop-bought kind. The colour comes from the nuts themselves, and the flavour is nutty, sweet and faintly floral. Italians, especially in Sicily, take it seriously, and the best come from the town of Bronte, where the volcanic soil is said to give the pistachios their depth.\n\nThe nuts must be unsalted and raw. Blanch them in boiling water for 1 minute, drain, and slip the skins off by rubbing them in a tea towel, which leaves the pale green kernels underneath. Toast them lightly for 5 minutes at 160C, then grind them to a fine paste in a food processor with a spoonful of sugar. This paste is the flavour of the ice cream.\n\n**Add a drop of almond extract.** A tiny amount, no more than a quarter teaspoon, boosts the nutty flavour and rounds it out, and is common in Italian recipes. More than that tastes of marzipan. Stir the paste into the warm custard while it is still hot, so the nut oils infuse the milk, and let the mixture steep for 30 minutes.\n\nStrain through a fine sieve, pressing hard, and chill for 4 hours. After churning, stir in a handful of roughly chopped pistachios for crunch. Freeze for 4 hours until firm.',
    ing: [
      '150 g raw unsalted pistachios, plus 30 g chopped for the end',
      '300 ml double cream',
      '300 ml whole milk',
      '5 egg yolks',
      '110 g caster sugar',
      '1/4 tsp salt',
      '1/4 tsp almond extract'
    ],
    st: [
      'Blanch the 150 g pistachios for 1 minute, drain and rub off the skins. Toast at 160C for 5 minutes. Grind to a fine paste with 2 tbsp of the sugar.',
      'Heat the cream and milk until steaming and whisk in the pistachio paste. Cover and leave for 30 minutes.',
      'Whisk the yolks, remaining sugar and salt until pale. Reheat the pistachio milk, whisk a ladle into the yolks and return to the pan. Cook to 80C, stirring.',
      'Strain, pressing hard, stir in the almond extract and chill for 4 hours.',
      'Churn until thick, stir in the chopped pistachios and freeze for 4 hours.'
    ],
    tips: [
      'Use unsalted raw pistachios.',
      'Steep the paste in the warm milk.',
      'Add chopped nuts at the end.'
    ],
    pair: ['Chocolate sauce', 'Shortbread', 'Fresh cherries', 'Espresso'],
    store: 'Keeps in the freezer for 2 weeks.',
    rest: [510, 'Steeping, chilling and freezing'],
    nut: [362, 10, 22, 26, 2, 18, 140]
  },

  'mango-ice-cream': {
    d: 'Mango puree folded with whipped cream and condensed milk into a no churn ice cream, frozen for 6 hours.',
    meta: 'Mango ice cream with whipped cream and condensed milk, no churn, frozen for 6 hours. Eight servings, ready in 6 hours 15 minutes.',
    kw: ['mango ice cream', 'no churn mango ice cream', 'fresh mango ice cream', 'mango ice cream with condensed milk', 'easy mango ice cream'],
    why: 'Mangoes at their peak are among the sweetest fruit there is, and their flavour is strong enough to flavour ice cream without help. The best for this are the sweet, non-fibrous varieties, such as Alphonso, Kesar or Ataulfo, which blend to a velvety puree. Stringy mangoes leave fibres that catch in the teeth and spoil the texture.\n\nPeel and chop the flesh, then blend until perfectly smooth. Press through a sieve if there is any trace of fibre. Add a squeeze of lime juice, which sharpens the flavour and prevents it from tasting flat when frozen. Ripe fruit smells strongly sweet at the stem end and yields to gentle pressure. Tinned mango pulp is a good substitute out of season.\n\n**Fold the puree in carefully.** Whip the cold cream to soft peaks, and no further, since stiff cream becomes hard to fold into the thick puree without losing air. Mix the condensed milk with the mango, then fold in the cream in two additions with a large spatula, cutting down through the middle and sweeping up the side.\n\nPour into a loaf tin lined with greaseproof paper, press more paper on the surface and freeze for at least 6 hours. The ice cream is vividly orange and has a smooth, rich texture. Let it stand for 10 minutes before scooping. Serve with lime zest.',
    ing: [
      '600 g ripe mango flesh, about 3 mangoes',
      '2 tbsp lime juice',
      '300 ml double cream, cold',
      '200 g sweetened condensed milk',
      '1/4 tsp salt',
      '1 lime, zested, to serve'
    ],
    st: [
      'Blend the mango flesh and lime juice until completely smooth. Press through a sieve if fibrous.',
      'Stir in the condensed milk and salt.',
      'Whip the cream to soft peaks and fold into the mango mixture in 2 additions.',
      'Pour into a 900 g loaf tin lined with greaseproof paper and press paper onto the surface.',
      'Freeze for at least 6 hours. Soften for 10 minutes and serve with the lime zest.'
    ],
    tips: [
      'Use sweet, non-fibrous mangoes.',
      'Whip the cream only to soft peaks.',
      'Cover the surface to stop ice crystals.'
    ],
    pair: ['Fresh lime', 'Coconut flakes', 'Wafer cones', 'Mango lassi'],
    store: 'Keeps in the freezer for 2 weeks.',
    rest: [360, 'Freezing'],
    nut: [255, 3, 27, 15, 1, 25, 120]
  },

  'raspberry-ripple-ice-cream': {
    d: 'A vanilla no churn ice cream rippled with a cooked raspberry sauce and frozen for 6 hours.',
    meta: 'Raspberry ripple ice cream, no churn with a cooked raspberry sauce, frozen for 6 hours. Eight servings, ready in 6 hours 25 minutes.',
    kw: ['raspberry ripple ice cream', 'no churn raspberry ripple', 'vanilla ice cream with raspberry sauce', 'british raspberry ripple', 'raspberry swirl ice cream'],
    why: 'Raspberry ripple is the sort of ice cream that British children are given in a cone on a seaside pier, creamy and vanilla with a sticky, tart red sauce running through it. The ripple is what sets it apart, and the key to getting it right is that the sauce must be thick and cold. A thin or warm sauce dissolves into the cream and leaves a vague pink wash.\n\nMake the sauce first. Simmer raspberries with sugar and lemon juice for about 5 minutes, crushing them as they soften. Press the mixture through a sieve to remove the seeds, return to the pan and reduce for another 3 minutes, until it is thick like jam. Cool completely in the fridge. A teaspoon of cornflour helps if it still seems runny.\n\n**Layer, do not stir.** Pour a third of the no churn ice cream base into the lined tin, drizzle over a third of the sauce, then repeat twice more, finishing with sauce. Draw a skewer through the layers once or twice to create the ripple. More than that and the sauce blends into the cream.\n\nThe base is the same as any no churn ice cream: whipped cream folded with sweetened condensed milk and vanilla. Freeze for at least 6 hours. Serve in cones or bowls, with fresh raspberries on top.',
    ing: [
      '300 g raspberries',
      '60 g caster sugar',
      '1 tbsp lemon juice',
      '600 ml double cream, cold',
      '400 g sweetened condensed milk',
      '2 tsp vanilla extract',
      '1/4 tsp salt'
    ],
    st: [
      'Simmer the raspberries, sugar and lemon juice for 5 minutes, crushing. Press through a sieve, return to the pan and reduce for 3 minutes until thick. Cool in the fridge.',
      'Whip the cream to stiff peaks and fold in the condensed milk, vanilla and salt.',
      'Pour a third into a 900 g loaf tin lined with greaseproof paper. Drizzle over a third of the sauce. Repeat twice.',
      'Draw a skewer through the layers once or twice to ripple.',
      'Cover and freeze for at least 6 hours.'
    ],
    tips: [
      'Make the sauce thick and chill it fully.',
      'Ripple only once or twice.',
      'Cover the surface with paper.'
    ],
    pair: ['Wafer cones', 'Fresh raspberries', 'Shortbread', 'Meringue'],
    store: 'Keeps in the freezer for 2 weeks.',
    rest: [360, 'Freezing'],
    nut: [471, 6, 42, 31, 2, 39, 160]
  },

  'pumpkin-ice-cream': {
    d: 'Pumpkin puree, warm spices and brown sugar folded into whipped cream and condensed milk for a no churn ice cream, frozen for 6 hours.',
    meta: 'Pumpkin ice cream with warm spices, no churn, frozen for 6 hours. Eight servings, ready in 6 hours 15 minutes.',
    kw: ['pumpkin ice cream', 'no churn pumpkin ice cream', 'pumpkin pie ice cream', 'spiced pumpkin ice cream', 'homemade pumpkin ice cream'],
    why: 'Pumpkin pie as a frozen scoop is perhaps the most seasonal ice cream there is, and it tastes more or less exactly like the pie: smooth, orange, cinnamon-scented and comforting. It is made with tinned pumpkin puree, which is reliably thick and dense, and warm spices, folded into the same no churn base used for any other flavour.\n\nBlot the puree on kitchen paper first. Tinned pumpkin is about 90 per cent water, and in a frozen dessert that water turns to ice crystals and makes the texture grainy. Pressing it between sheets of kitchen paper for 5 minutes removes enough to make a difference. Choose plain puree, not pie filling, which is already sweetened and spiced and would throw off the balance.\n\n**Bloom the spices in the puree.** Stir the cinnamon, ginger, nutmeg and cloves into the pumpkin with a little brown sugar and leave it to sit for 10 minutes before mixing in the condensed milk. This lets the flavours develop and soften. Pumpkin by itself tastes mild and earthy, and the spices carry the flavour.\n\nFold the whipped cream in gently, in two additions, keeping as much air as you can. Freeze for at least 6 hours. Serve with crushed gingersnaps, toasted pecans or a drizzle of caramel sauce. It makes a good alternative to pie at the holiday table.',
    ing: [
      '250 g tinned pumpkin puree, blotted',
      '3 tbsp light brown sugar',
      '1 1/2 tsp ground cinnamon',
      '1/2 tsp ground ginger',
      '1/4 tsp ground nutmeg',
      '1/4 tsp ground cloves',
      '1/4 tsp salt',
      '400 g sweetened condensed milk',
      '1 tsp vanilla extract',
      '500 ml double cream, cold',
      '30 g gingersnap biscuits, crushed, to serve'
    ],
    st: [
      'Stir the blotted pumpkin with the brown sugar, spices and salt and leave for 10 minutes.',
      'Stir in the condensed milk and vanilla.',
      'Whip the cream to stiff peaks. Fold into the pumpkin mixture in 2 additions.',
      'Pour into a 900 g loaf tin lined with greaseproof paper and press paper onto the surface.',
      'Freeze for at least 6 hours. Serve with the crushed gingersnaps.'
    ],
    tips: [
      'Blot the pumpkin puree.',
      'Let the spices bloom in the puree.',
      'Fold the cream in gently.'
    ],
    pair: ['Gingersnaps', 'Caramel sauce', 'Toasted pecans', 'Apple pie'],
    store: 'Keeps in the freezer for 2 weeks.',
    rest: [360, 'Freezing'],
    nut: [422, 6, 41, 26, 1, 37, 180]
  },

  'eggnog-ice-cream': {
    d: 'A rich nutmeg custard ice cream with egg yolks, cream and a splash of rum, chilled for 4 hours and frozen for 4 more.',
    meta: 'Eggnog ice cream with nutmeg and rum, chilled and churned. Eight servings, ready in 9 hours.',
    kw: ['eggnog ice cream', 'homemade eggnog ice cream', 'christmas eggnog ice cream', 'nutmeg custard ice cream', 'rum eggnog ice cream'],
    why: 'Eggnog is traditionally egg yolks, cream, sugar, spice and spirits, and that is almost exactly the definition of a rich custard ice cream. The drink and the dessert were always meant to meet. It is a holiday treat in North America, with a thick, spiced base that freezes into something richer than most vanilla ice creams.\n\nUse a generous measure of freshly grated nutmeg: a whole nutmeg grated on a fine grater has a scent and sweetness that pre-ground powder lacks. About a teaspoon in the custard is right, with a pinch of cinnamon and a split vanilla pod for roundness. Infuse the spices in the warm milk for 15 minutes before making the custard.\n\n**Add the rum after cooking, and in a small quantity.** Alcohol lowers the freezing point of ice cream, and too much leaves it soft and slushy. Two tablespoons of dark rum or bourbon per litre of base is enough to give the flavour of a spiked eggnog without harming the texture. Leave it out for children, and the ice cream will be slightly firmer.\n\nCook the custard to 80C, strain, and chill for 4 hours until cold. Churn, then freeze for 4 hours. Serve in small scoops with a grating of nutmeg on top, alongside Christmas pudding or gingerbread.',
    ing: [
      '300 ml double cream',
      '300 ml whole milk',
      '2 tsp vanilla bean paste',
      '1 tsp freshly grated nutmeg',
      '1/4 tsp ground cinnamon',
      '6 egg yolks',
      '120 g caster sugar',
      '1/4 tsp salt',
      '2 tbsp dark rum'
    ],
    st: [
      'Heat the cream, milk, vanilla bean paste, nutmeg and cinnamon until steaming. Cover and infuse for 15 minutes.',
      'Whisk the yolks, sugar and salt until pale. Reheat the milk, whisk a ladle into the yolks, then return everything to the pan.',
      'Cook over low heat to 80C, stirring, until the custard coats a spoon. Strain, stir in the rum and chill for 4 hours.',
      'Churn until thick.',
      'Freeze in a covered container for 4 hours.'
    ],
    tips: [
      'Grate fresh nutmeg.',
      'Use only a small amount of rum.',
      'Chill the custard completely.'
    ],
    pair: ['Gingerbread', 'Christmas pudding', 'Mince pies', 'Hot coffee'],
    store: 'Keeps in the freezer for 2 weeks.',
    rest: [480, 'Infusing, chilling and freezing'],
    nut: [266, 7, 19, 18, 0, 18, 150]
  },

  'watermelon-sorbet': {
    d: 'Cubed watermelon frozen for 4 hours and blended with lime and honey into a soft pink sorbet with no sugar syrup.',
    meta: 'Watermelon sorbet with lime and honey, blended from frozen fruit. Six servings, ready in 4 hours 10 minutes.',
    kw: ['watermelon sorbet', 'frozen watermelon sorbet', 'watermelon lime sorbet', 'blended watermelon sorbet', 'watermelon sorbet recipe'],
    why: 'Watermelon is mostly water, which is a problem for a sorbet. Left to freeze as a juice, it turns into a solid block of pink ice, with no body and a flat flavour. The solution is to freeze the fruit in cubes first, and then blend the frozen cubes into a soft, scoopable mass, which has the texture of sorbet without needing a machine or a sugar syrup.\n\nCut seedless watermelon into 3 cm cubes, remove any pale seeds, and spread them in a single layer on a tray lined with baking paper. Freeze for at least 4 hours, until completely hard. If the cubes touch when they freeze, they stick into clumps that are hard on the blender. Once frozen, they can be bagged and kept for months.\n\n**Add a little honey and a pinch of salt.** Watermelon is only mildly sweet, and freezing mutes sweetness further, so a tablespoon of honey makes a difference. Salt brings out the sweetness in fruit, a trick well known in Mexico, where watermelon is often sprinkled with it. Lime juice adds the brightness that stops the flavour from tasting flat.\n\nBlend the frozen cubes in short bursts, with the tamper if you have one, scraping down the sides until the mixture is smooth and thick. Serve at once, as the sorbet softens quickly. For a firmer texture, freeze it for 30 minutes in a container.',
    ing: [
      '900 g seedless watermelon, cut into 3 cm cubes',
      '2 tbsp lime juice',
      '1 tbsp honey',
      '1 pinch salt',
      '1 tbsp fresh mint, chopped'
    ],
    st: [
      'Spread the watermelon cubes in a single layer on a lined tray. Freeze for 4 hours until hard.',
      'Put the frozen cubes, lime juice, honey and salt in a food processor.',
      'Blend in short bursts, scraping down the sides, for about 2 minutes until thick and smooth.',
      'Taste and add more honey or lime if needed.',
      'Serve at once, scattered with the mint.'
    ],
    tips: [
      'Freeze the cubes in a single layer.',
      'Add salt to bring out the sweetness.',
      'Serve right away.'
    ],
    pair: ['Fresh mint', 'Sparkling water', 'Shortbread', 'Feta'],
    store: 'Best served at once. Keeps in the freezer for 1 week but hardens.',
    rest: [240, 'Freezing'],
    nut: [64, 1, 15, 0, 1, 12, 30]
  },

  'lemon-gelato': {
    d: 'An Italian-style gelato made with milk, a little cream and fresh lemon, chilled for 4 hours, churned and frozen for 3 hours.',
    meta: 'Lemon gelato with milk, cream and fresh lemon, chilled and churned. Eight servings, ready in 8 hours.',
    kw: ['lemon gelato', 'italian lemon gelato', 'homemade lemon gelato', 'lemon custard gelato', 'gelato al limone'],
    why: 'What makes gelato different from ice cream? Mostly the proportions. Gelato contains more milk and less cream than ice cream, so it has less fat, and it is churned more slowly, so it contains less air. The result is a dense, silky, intensely flavoured scoop that is served slightly warmer than ice cream, which lets the flavour come through. Lemon is a classic.\n\nThe base is mostly whole milk, with a smaller amount of cream, egg yolks and sugar, cooked as a custard. Add the lemon zest to the milk while it heats, using a peeler to take wide strips without any white pith. The zest holds the aroma, and steeping it in the milk for 20 minutes extracts the flavour. Strain it out afterwards.\n\n**Add the lemon juice after chilling, not before.** Acid curdles milk, and juice stirred into the warm custard can split it. After 4 hours in the fridge, when the custard is cold, stir in the juice and taste. It should be clearly lemony and sharp. The sugar will mask the acidity when frozen, so go a little further than seems right.\n\nChurn until thick and glossy, and freeze for 3 hours. Gelato is best eaten within a few days, and left out for 5 minutes before serving it softens into the right silky consistency.',
    ing: [
      '500 ml whole milk',
      '150 ml double cream',
      '3 lemons, zest in wide strips',
      '5 egg yolks',
      '150 g caster sugar',
      '1/4 tsp salt',
      '100 ml fresh lemon juice'
    ],
    st: [
      'Heat the milk, cream and lemon zest until steaming. Cover and infuse for 20 minutes, then remove the zest.',
      'Whisk the egg yolks, sugar and salt until pale. Reheat the milk, whisk a ladle into the yolks and return to the pan.',
      'Cook over low heat to 80C, stirring, then strain and chill for 4 hours.',
      'Stir the lemon juice into the cold custard and taste. Churn until thick and glossy.',
      'Freeze in a covered container for 3 hours.'
    ],
    tips: [
      'Avoid the white pith when peeling the zest.',
      'Add the lemon juice to the cold custard.',
      'Soften for 5 minutes before serving.'
    ],
    pair: ['Shortbread', 'Fresh berries', 'Espresso', 'Prosecco'],
    store: 'Best within 3 days. Keeps in the freezer for 1 week.',
    rest: [420, 'Infusing, chilling and freezing'],
    nut: [236, 7, 25, 12, 1, 23, 150]
  },

  'matcha-ice-cream': {
    d: 'A Japanese green tea ice cream made from a custard base whisked with ceremonial matcha, chilled for 4 hours and frozen for 4 more.',
    meta: 'Matcha ice cream with a custard base and ceremonial matcha, chilled and churned. Eight servings, ready in 9 hours.',
    kw: ['matcha ice cream', 'green tea ice cream', 'japanese matcha ice cream', 'homemade matcha custard ice cream', 'matcha ice cream recipe'],
    why: 'The colour of good matcha is a vivid, almost fluorescent green, and the finished ice cream is a muted version of it, a pale sage that deepens as the ice cream sits. The flavour is grassy, slightly bitter and sweet, with a long, savoury finish known as umami. A scoop of matcha ice cream is a popular end to a Japanese meal.\n\nThe quality of the powder matters. Ceremonial grade matcha, ground from the youngest tea leaves, is smoother, sweeter and brighter than culinary grade, which is more bitter and suited to baking. For ice cream, where it is the main flavour, it is worth the extra cost. Look for a vivid green colour. Dull, yellowish powder is stale and will taste flat and harsh.\n\n**Sift the matcha and dissolve it in a little hot milk.** Matcha does not dissolve, it disperses, and added straight to a custard it forms clumps of dry green powder. Whisk the sifted matcha with 3 tablespoons of warm, not boiling, milk into a smooth paste, as boiling water destroys the delicate flavour. Whisk this into the custard after cooking, while it is still warm.\n\nStrain, chill for 4 hours, then churn. Freeze for 4 hours. Serve with a spoonful of sweet red bean paste, or a scatter of toasted sesame seeds.',
    ing: [
      '300 ml double cream',
      '300 ml whole milk',
      '5 egg yolks',
      '120 g caster sugar',
      '1/4 tsp salt',
      '2 tbsp ceremonial matcha powder, sifted',
      '3 tbsp warm milk',
      '1 tsp vanilla extract'
    ],
    st: [
      'Heat the cream and milk until steaming. Whisk the yolks, sugar and salt until pale, whisk in a ladle of the hot milk and return to the pan.',
      'Cook over low heat to 80C, stirring, until the custard coats a spoon.',
      'Whisk the sifted matcha with the 3 tbsp warm milk until smooth, then whisk into the hot custard with the vanilla.',
      'Strain and chill for 4 hours, then churn until thick.',
      'Freeze in a covered container for 4 hours.'
    ],
    tips: [
      'Use ceremonial grade matcha.',
      'Sift the powder and make a paste first.',
      'Do not use boiling liquid on the matcha.'
    ],
    pair: ['Red bean paste', 'Mochi', 'Toasted sesame', 'Green tea'],
    store: 'Keeps in the freezer for 2 weeks.',
    rest: [480, 'Chilling and freezing'],
    nut: [270, 7, 20, 18, 1, 18, 140]
  },

  'butter-pecan-ice-cream': {
    d: 'A brown butter custard ice cream churned with butter-toasted pecans, chilled for 4 hours and frozen for 4 more.',
    meta: 'Butter pecan ice cream with brown butter and toasted pecans, chilled and churned. Eight servings, ready in 9 hours.',
    kw: ['butter pecan ice cream', 'homemade butter pecan ice cream', 'brown butter pecan ice cream', 'southern butter pecan ice cream', 'butter pecan custard'],
    why: 'Butter pecan is the Southern American ice cream, and it is built on a double dose of butter: browned butter in the custard for a toasty, nutty flavour, and more butter to toast the pecans. It is a rich, caramel-coloured ice cream with a deep, warm taste that suits the nuts.\n\nBrowning the butter takes about 5 minutes. Melt it in a light-coloured pan, so that you can see the colour, and keep stirring as it foams. When the milk solids at the bottom turn from white to golden brown and the smell changes from cream to hazelnut, pour it into a bowl immediately. The flavour is transformative, but the window is small, and burnt butter is bitter.\n\n**Toast the pecans in butter with a pinch of salt.** Fry 100 g of halved pecans in a spoonful of butter over medium heat for 4 minutes, stirring, until they smell fragrant and darken slightly. Salt them lightly while hot. They add a savoury edge to the sweet ice cream and keep their crunch even in the freezer.\n\nWhisk the brown butter into the warm custard along with the sugar, using brown sugar for a molasses note. Chill for 4 hours, churn until thick, fold in the cooled pecans and freeze for 4 hours.',
    ing: [
      '60 g butter, for browning',
      '300 ml double cream',
      '300 ml whole milk',
      '5 egg yolks',
      '120 g light brown sugar',
      '1/4 tsp salt',
      '1 tsp vanilla extract',
      '100 g pecans, halved',
      '1 tbsp butter, for the pecans',
      '1/4 tsp salt, for the pecans'
    ],
    st: [
      'Brown the 60 g butter in a pan for 5 minutes until golden and nutty, then pour into a bowl.',
      'Fry the pecans in the 1 tbsp butter for 4 minutes, sprinkle with the 1/4 tsp salt and cool.',
      'Heat the cream and milk until steaming. Whisk the yolks, sugar and 1/4 tsp salt until pale, whisk in a ladle of hot milk and return to the pan.',
      'Cook to 80C, stirring. Whisk in the brown butter and vanilla, strain and chill for 4 hours.',
      'Churn until thick, fold in the pecans and freeze for 4 hours.'
    ],
    tips: [
      'Watch the butter closely as it browns.',
      'Toast the pecans in butter.',
      'Fold in the nuts after churning.'
    ],
    pair: ['Peach cobbler', 'Pound cake', 'Wafer cones', 'Hot fudge sauce'],
    store: 'Keeps in the freezer for 2 weeks.',
    rest: [480, 'Chilling and freezing'],
    nut: [414, 7, 20, 34, 1, 18, 220]
  },

  'cookie-butter-ice-cream': {
    d: 'A vanilla custard ice cream swirled with spiced cookie butter and crushed speculoos biscuits, chilled for 4 hours and frozen for 4 more.',
    meta: 'Cookie butter ice cream with Biscoff spread and biscuit pieces, chilled and churned. Eight servings, ready in 9 hours.',
    kw: ['cookie butter ice cream', 'biscoff ice cream', 'speculoos ice cream', 'cookie butter swirl ice cream', 'spiced biscuit ice cream'],
    why: 'Speculoos, the spiced shortcrust biscuit of Belgium and the Netherlands, has a warm blend of cinnamon, nutmeg, ginger and clove, and a caramelised, browned-sugar flavour that is made for ice cream. When ground into a smooth spread it becomes cookie butter, and in a frozen dessert it behaves like a nut butter, melting into the custard and swirling through in ribbons.\n\nThe base is a plain vanilla custard, which allows the spice to take centre stage. Cook it as usual to 80C, cool it slightly and whisk in a third of the cookie butter while still warm so that it disperses completely. This gives a pale caramel colour and a flavour that runs through every spoonful. Chill for 4 hours, until completely cold.\n\n**Warm the remaining spread before swirling.** Thick cookie butter straight from the jar tears the ice cream and sits in lumps. Ten seconds in the microwave turns it pourable, and it should be only just warm so as not to melt the ice cream. Layer it into the container with the churned ice cream, drag a knife through once, and add the broken biscuits on top.\n\nBreak the biscuits by hand into pieces about the size of a coin, so they stay crunchy. Freeze for 4 hours before serving. It is outstanding next to apple pie or a warm brownie.',
    ing: [
      '300 ml double cream',
      '300 ml whole milk',
      '5 egg yolks',
      '110 g caster sugar',
      '1/4 tsp salt',
      '1 tsp vanilla extract',
      '240 g Biscoff spread',
      '60 g Biscoff biscuits, broken'
    ],
    st: [
      'Bring the cream and milk to a gentle steam. In a bowl, beat the yolks with the sugar and salt, pour in a ladle of the hot milk while whisking and tip the lot back into the pan.',
      'Stir over low heat until the custard reaches 80C. Off the heat, whisk in 80 g of the spread and the vanilla until dissolved.',
      'Sieve the custard and chill for 4 hours, then churn until thick and creamy.',
      'Warm the remaining 160 g spread for 10 seconds in the microwave. Layer the ice cream into a container with the spread and biscuit pieces and swirl once.',
      'Freeze for 4 hours.'
    ],
    tips: [
      'Warm the spread slightly before swirling.',
      'Break the biscuits by hand.',
      'Swirl only once or twice.'
    ],
    pair: ['Apple pie', 'Brownies', 'Hot coffee', 'Wafer cones'],
    store: 'Keeps in the freezer for 2 weeks.',
    rest: [480, 'Chilling and freezing'],
    nut: [445, 7, 39, 29, 0, 32, 180]
  }
};
