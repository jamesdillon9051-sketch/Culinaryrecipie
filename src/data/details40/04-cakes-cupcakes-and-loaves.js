'use strict';

/**
 * Volume forty — cupcakes, loaves and layer cakes.
 *
 * Everyday cakes of Britain, Australia, Italy, Germany and the United States:
 * cupcakes, a tea loaf, fruit cakes, two chocolate layer cakes and a mud cake.
 * Times are the recipe's own; ovens differ, so each method says when to
 * check early. Nutrition is estimated from the ingredient list by npm run calc.
 */

module.exports = {
  'carrot-cake-cupcakes': {
    d: 'Spiced carrot and walnut cupcakes made with oil for a moist crumb, topped with a swirl of cream cheese frosting.',
    meta: 'Carrot cake cupcakes: moist spiced carrot and walnut cupcakes with cream cheese frosting. Makes twelve, baked for 20 minutes.',
    kw: ['carrot cake cupcakes', 'carrot cupcakes with cream cheese frosting', 'homemade carrot cake cupcakes', 'moist carrot cupcakes', 'spiced carrot cupcakes'],
    why: 'Flour, sugar, eggs, oil, carrot: five things you probably own, and a cupcake that stays moist for days. The carrot is mostly water, so it keeps the crumb soft from the inside.\n\nGrate it on the fine side of the grater. Coarse shreds leave wet streaks, while fine ones disappear into the batter. **Use oil rather than butter.** Oil stays liquid when cold, so the cupcakes do not firm up in the fridge.\n\nWhisk the sugar, eggs and oil until thick, fold in the carrot, then the flour, spices and walnuts. Stop as soon as the flour has disappeared.\n\nBake at 180°C for 20 minutes. If your oven runs hot, check at 16 minutes. They are done when a skewer comes out clean and the tops spring back. Cool them completely before frosting, as warm cupcakes melt the frosting into a puddle. A pinch of ground ginger in the batter adds warmth if you have some, though the recipe works without it.',
    ing: [
      '200 g plain flour',
      '2 tsp baking powder',
      '1 tsp ground cinnamon',
      '1/2 tsp ground nutmeg',
      '1/2 tsp salt',
      '150 g soft light brown sugar',
      '2 eggs, about 100 g',
      '120 ml sunflower oil',
      '200 g carrot, finely grated',
      '50 g walnuts, chopped',
      '150 g cream cheese',
      '60 g butter, softened',
      '150 g icing sugar'
    ],
    st: [
      'Heat the oven to 180°C and line a 12-hole muffin tin with paper cases.',
      'Whisk the brown sugar, eggs and oil for 2 minutes until thick. Stir in the carrot.',
      'Fold in the flour, baking powder, spices and salt, then the walnuts, until no dry flour shows.',
      'Fill the cases two-thirds full and bake for 20 minutes until a skewer comes out clean. Cool completely.',
      'Beat the cream cheese, butter and icing sugar until smooth and swirl onto the cupcakes.'
    ],
    tips: [
      'Grate the carrot finely.',
      'Cool the cupcakes fully before frosting.',
      'If your oven runs hot, check at 16 minutes.',
      'Use cold cream cheese straight from the fridge for a firm frosting.'
    ],
    pair: ['Hot tea', 'Chopped walnuts on top', 'Strong coffee', 'Cold milk'],
    store: 'Keeps in the fridge for 3 days. Bring to room temperature before serving.',
    nut: [369, 4, 41, 21, 1, 26, 240]
  },

  'lemon-cupcakes': {
    d: 'Light butter sponge cupcakes with lemon zest and juice, topped with a tangy lemon buttercream.',
    meta: 'Lemon cupcakes: light butter sponge cupcakes with lemon zest, topped with a tangy lemon buttercream. Makes twelve, baked for 20 minutes.',
    kw: ['lemon cupcakes', 'lemon cupcakes with buttercream', 'homemade lemon cupcakes', 'light lemon sponge cupcakes', 'lemon buttercream cupcakes'],
    why: 'Rub the lemon zest into the sugar before you start, and everything else in the recipe tastes better. That is the single most useful instruction here.\n\nThe oils in the zest carry most of the lemon flavour, and the sugar crystals break them out. Two minutes of rubbing with your fingers turns the sugar pale yellow and fragrant. **Zest, not juice, gives the flavour.** Juice adds sourness but also water, which can make a sponge heavy.\n\nCream the butter and lemon sugar until pale and fluffy, about 4 minutes. Add the eggs one at a time with a spoonful of flour, then fold in the rest of the flour and 1 tablespoon of juice.\n\nBake at 180°C for 20 minutes. If your oven runs hot, check at 16 minutes. Cool fully, then pipe or swirl on the buttercream, which carries the rest of the lemon juice. A few strands of lemon zest on top of each swirl make the cupcakes look finished.',
    ing: [
      '175 g butter, softened',
      '175 g caster sugar',
      '2 lemons, zest only',
      '3 eggs, about 150 g',
      '175 g self-raising flour',
      '1 tbsp lemon juice',
      '100 g butter, softened, for the buttercream',
      '200 g icing sugar',
      '2 tbsp lemon juice for the buttercream'
    ],
    st: [
      'Heat the oven to 180°C and line a 12-hole muffin tin. Rub the lemon zest into the caster sugar until fragrant.',
      'Beat the 175 g butter with the lemon sugar for 4 minutes until pale and fluffy.',
      'Beat in the eggs one at a time, with a spoonful of the flour each time. Fold in the rest of the flour and 1 tbsp juice.',
      'Divide between the cases and bake for 20 minutes until golden. Cool completely.',
      'Beat the remaining butter with the icing sugar and 2 tbsp lemon juice until smooth, and swirl onto the cupcakes.'
    ],
    tips: [
      'Rub the zest into the sugar.',
      'Use butter that is soft but not melted.',
      'If your oven runs hot, check at 16 minutes.',
      'Wait for the cakes to cool before frosting.'
    ],
    pair: ['Hot tea', 'Sprinkles', 'Fresh berries', 'Cold milk'],
    store: 'Best on the day. Keeps in an airtight tin for 2 days.',
    nut: [368, 3, 44, 20, 1, 32, 20]
  },

  'cookies-and-cream-cupcakes': {
    d: 'Vanilla cupcakes with crushed chocolate sandwich biscuits folded through, topped with a biscuit-speckled vanilla buttercream.',
    meta: 'Cookies and cream cupcakes: vanilla cupcakes with crushed chocolate sandwich biscuits, topped with buttercream. Makes twelve, baked for 20 minutes.',
    kw: ['cookies and cream cupcakes', 'oreo cupcakes', 'cookies and cream cupcakes with buttercream', 'chocolate biscuit cupcakes', 'homemade cookies and cream cupcakes'],
    why: 'Butter, sugar, eggs, flour, biscuits: five things and about forty-five minutes. The only job that needs care is crushing the biscuits.\n\nPut them in a bag and bash with a rolling pin until they are the size of small gravel, not dust. Chunks stay crunchy at the edges, while dust turns the sponge grey. **Keep a handful back for the topping.** The same biscuits that flavour the batter finish the buttercream.\n\nBeat the butter and sugar until pale, add the eggs one at a time and fold in the flour with the milk and vanilla. The batter should drop easily off a spoon.\n\nFold in 80 g of the crushed biscuits, fill the cases two-thirds full and bake at 180°C for 20 minutes. If your oven runs hot, check at 16 minutes. Cool the cakes, then swirl on the buttercream and scatter with the biscuit crumbs. Press half a biscuit into the top of each swirl for a finish that tells people what is inside.',
    ing: [
      '175 g butter, softened',
      '175 g caster sugar',
      '3 eggs, about 150 g',
      '200 g self-raising flour',
      '3 tbsp milk',
      '1 tsp vanilla extract',
      '160 g chocolate sandwich biscuits',
      '120 g butter, softened, for the buttercream',
      '250 g icing sugar',
      '2 tbsp milk for the buttercream'
    ],
    st: [
      'Heat the oven to 180°C and line a 12-hole tin. Crush the biscuits in a bag into small chunks and set 80 g aside.',
      'Beat the 175 g butter and caster sugar for 4 minutes until pale. Beat in the eggs one at a time.',
      'Fold in the flour, 3 tbsp milk, vanilla and the other 80 g of biscuits.',
      'Fill the cases two-thirds full and bake for 20 minutes until a skewer comes out clean. Cool completely.',
      'Beat the 120 g butter with the icing sugar and 2 tbsp milk, swirl on the cakes and scatter with the reserved biscuit crumbs.'
    ],
    tips: [
      'Crush the biscuits to gravel, not dust.',
      'Keep some back for the topping.',
      'If your oven runs hot, check at 16 minutes.',
      'Let the cakes cool before frosting.'
    ],
    pair: ['Cold milk', 'Hot chocolate', 'Vanilla ice cream', 'Coffee'],
    store: 'Best on the day. Keeps in an airtight tin for 2 days.',
    nut: [464, 4, 58, 24, 1, 41, 70]
  },

  'tea-loaf': {
    d: 'A dense, fruity loaf made by soaking mixed dried fruit in strong hot tea, sliced and spread with butter.',
    meta: 'Tea loaf: a dense, fruity loaf made with dried fruit soaked in strong hot tea. Ten slices, baked for 60 minutes.',
    kw: ['tea loaf', 'easy tea loaf', 'fruit tea loaf', 'tea soaked fruit loaf', 'british tea loaf'],
    why: 'Salt, fat and eggs are the usual things a fruit cake needs, but this one asks for tea. The soak does what an overnight rest would, because hot tea plumps the dried fruit and carries its flavour into the loaf.\n\nPour 250 ml of strong hot tea over the fruit and sugar and leave it for 30 minutes. The fruit should swell and the liquid should turn syrupy. **Use tea you would happily drink.** Weak tea gives a washed-out loaf.\n\nStir in the egg, then fold in the flour and mixed spice until just combined. The batter is wet and looks too loose, which is correct.\n\nPour into a lined 900 g loaf tin and bake at 160°C for 60 minutes. If your oven runs hot, check at 50 minutes. A skewer should come out clean. Cool completely, wrap, and slice thinly with butter. Serve it cut into slices no thicker than a finger, spread with salted butter.',
    ing: [
      '300 g mixed dried fruit',
      '250 ml hot strong tea',
      '150 g soft light brown sugar',
      '1 egg, about 50 g',
      '250 g self-raising flour',
      '1 tsp mixed spice',
      '1 tbsp butter for the tin'
    ],
    st: [
      'Put the fruit and sugar in a bowl, pour over the hot tea and leave to soak for 30 minutes.',
      'Heat the oven to 160°C and grease and line a 900 g loaf tin.',
      'Stir the egg into the soaked fruit, then fold in the flour and mixed spice until just combined.',
      'Pour into the tin and bake for 60 minutes until a skewer comes out clean. Cool in the tin for 15 minutes, then turn out.'
    ],
    tips: [
      'Use strong tea.',
      'Do not worry that the batter looks loose.',
      'If your oven runs hot, check at 50 minutes.',
      'Slice thin and spread with butter.'
    ],
    pair: ['Salted butter', 'Hot tea', 'Mature cheddar', 'Apple slices'],
    store: 'Keeps wrapped in a tin for 5 days.',
    nut: [254, 4, 55, 2, 2, 33, 20]
  },

  'cherry-cake': {
    d: 'A buttery almond sponge studded with glace cherries, baked in a round tin and dusted with icing sugar.',
    meta: 'Cherry cake: a buttery almond sponge studded with glace cherries and dusted with icing sugar. Ten slices, baked for 50 minutes.',
    kw: ['cherry cake', 'glace cherry cake', 'cherry and almond cake', 'british cherry cake', 'classic cherry cake'],
    why: 'The sight of the cake coming out of the oven is the reason to make it: a deep gold top, cherries peeping through, and a smell of almonds and butter.\n\nThe cherries need a little care. Rinse the syrup off the glace cherries, dry them and cut them in half, then toss them in a spoonful of flour. **Flour keeps them from sinking to the bottom of the tin.** Without it, you get a cherry layer instead of cherries through the cake.\n\nCream the butter and sugar until pale, beat in the eggs one at a time with a spoonful of flour, then fold in the rest of the flour, the ground almonds and the milk. Fold in the cherries last.\n\nBake in a lined 20 cm tin at 160°C for 50 minutes. If your oven runs hot, check at 40 minutes. A skewer should come out clean. Cool completely before slicing.',
    ing: [
      '175 g butter, softened',
      '175 g caster sugar',
      '3 eggs, about 150 g',
      '225 g self-raising flour',
      '50 g ground almonds',
      '2 tbsp milk',
      '200 g glace cherries, rinsed, dried and halved',
      '1 tbsp icing sugar to dust'
    ],
    st: [
      'Heat the oven to 160°C and line a 20 cm round tin. Toss the cherries in 1 tbsp of the flour.',
      'Beat the butter and caster sugar for 4 minutes until pale and fluffy.',
      'Beat in the eggs one at a time with a spoonful of flour each. Fold in the remaining flour, ground almonds and milk, then the cherries.',
      'Spoon into the tin, level the top and bake for 50 minutes until a skewer comes out clean. Cool in the tin for 15 minutes, then turn out and dust with icing sugar.'
    ],
    tips: [
      'Rinse and dry the cherries.',
      'Toss them in flour to keep them afloat.',
      'If your oven runs hot, check at 40 minutes.',
      'Cool before slicing.'
    ],
    pair: ['Hot tea', 'Whipped cream', 'Fresh cherries', 'Coffee'],
    store: 'Keeps in an airtight tin for 4 days.',
    nut: [399, 6, 51, 19, 1, 33, 30]
  },

  'passionfruit-cake': {
    d: 'A soft butter cake with passionfruit pulp in the batter, finished with a tangy passionfruit icing.',
    meta: 'Passionfruit cake: a soft butter cake with passionfruit pulp and a tangy passionfruit icing. Ten slices, baked for 40 minutes.',
    kw: ['passionfruit cake', 'passionfruit butter cake', 'passionfruit cake with icing', 'australian passionfruit cake', 'homemade passionfruit cake'],
    why: 'Keep the seeds in. That is most of the recipe, and the part people want to strain out.\n\nThe black seeds give the cake its look and a slight crunch, and the pulp around them is where the flavour lives. Scoop the pulp from six passionfruit, about 100 g in all, and stir half into the batter. **Save the other half for the icing.**\n\nCream the butter and sugar for 4 minutes, add the eggs one at a time and fold in the flour with the milk and pulp. The batter looks curdled for a moment, which is normal and smooths out with the flour.\n\nBake in a lined 20 cm tin at 170°C for 40 minutes. If your oven runs hot, check at 32 minutes. Cool completely, then spread with icing made from icing sugar and the remaining pulp. If the icing is too stiff to spread, add a few drops of water until it loosens.',
    ing: [
      '175 g butter, softened',
      '175 g caster sugar',
      '3 eggs, about 150 g',
      '225 g self-raising flour',
      '3 tbsp milk',
      '100 g passionfruit pulp, from about 6 fruit',
      '150 g icing sugar'
    ],
    st: [
      'Heat the oven to 170°C and line a 20 cm round tin. Scoop the pulp from the passionfruit and divide it into two halves.',
      'Beat the butter and caster sugar for 4 minutes until pale. Beat in the eggs one at a time.',
      'Fold in the flour, milk and half the pulp until just combined. Spoon into the tin.',
      'Bake for 40 minutes until a skewer comes out clean. Cool completely.',
      'Stir the icing sugar with the rest of the pulp to a thick icing and spread over the cake.'
    ],
    tips: [
      'Do not strain the seeds out.',
      'Keep half the pulp for the icing.',
      'If your oven runs hot, check at 32 minutes.',
      'Ice the cake only when cold.'
    ],
    pair: ['Whipped cream', 'Hot tea', 'Fresh mango', 'Coffee'],
    store: 'Keeps in an airtight tin for 3 days.',
    nut: [372, 5, 52, 16, 2, 34, 30]
  },

  'raspberry-cake': {
    d: 'A tender almond-scented sponge with raspberries baked through it and a snow of icing sugar on top.',
    meta: 'Raspberry cake: a tender almond-scented sponge with raspberries baked through it. Ten slices, baked for 40 minutes.',
    kw: ['raspberry cake', 'fresh raspberry cake', 'raspberry and almond cake', 'raspberry sponge cake', 'british raspberry cake'],
    why: 'The first thing you notice is the colour: pink streaks where the berries have burst and bled into the sponge. It looks like more work than it is.\n\nRaspberries are fragile, so fold them in last and do not stir. Scatter a few more over the top before baking, where they sink partway and caramelise at the edges. **Frozen raspberries work as well as fresh, so there is no need to thaw them.**\n\nCream the butter and sugar until pale, beat in the eggs with a spoonful of flour each, then fold in the flour, ground almonds and milk. The almonds hold moisture, which is why the cake stays soft for days.\n\nBake in a lined 20 cm tin at 170°C for 40 minutes. If your oven runs hot, check at 32 minutes. Cool in the tin before turning out, as the warm cake is fragile. A spoonful of whipped cream beside each slice rounds off the tartness of the berries.',
    ing: [
      '175 g butter, softened',
      '175 g caster sugar',
      '3 eggs, about 150 g',
      '200 g self-raising flour',
      '50 g ground almonds',
      '3 tbsp milk',
      '200 g raspberries',
      '1 tbsp icing sugar to dust'
    ],
    st: [
      'Heat the oven to 170°C and line a 20 cm round tin.',
      'Beat the butter and caster sugar for 4 minutes until pale. Beat in the eggs one at a time with a spoonful of flour each.',
      'Fold in the flour, ground almonds and milk, then 150 g of the raspberries.',
      'Spoon into the tin, scatter the remaining raspberries on top and bake for 40 minutes until a skewer comes out clean. Cool in the tin, then dust with icing sugar.'
    ],
    tips: [
      'Fold the raspberries in gently.',
      'Use frozen berries without thawing.',
      'If your oven runs hot, check at 32 minutes.',
      'Cool in the tin before turning out.'
    ],
    pair: ['Whipped cream', 'Vanilla ice cream', 'Hot tea', 'Coffee'],
    store: 'Keeps in an airtight tin for 3 days.',
    nut: [343, 5, 38, 19, 3, 20, 20]
  },

  'mango-cake': {
    d: 'A soft mango sponge with fresh mango folded into the batter and a lime icing on top.',
    meta: 'Mango cake: a soft mango sponge with fresh fruit in the batter and a lime icing on top. Ten slices, baked for 40 minutes.',
    kw: ['mango cake', 'fresh mango cake', 'mango sponge cake', 'mango cake with lime icing', 'australian mango cake'],
    why: 'Mangoes, butter, eggs, sugar, flour: five things and about an hour. The fruit does the work.\n\nPuree 200 g of ripe mango to a smooth sauce and stir it into the batter. Dice another 100 g and fold it in at the end, so the cake has both a mango flavour and a few soft pieces. **The riper the mango, the better the cake.** A firm, pale mango tastes of very little once baked.\n\nCream the butter and sugar, add the eggs one at a time, and fold in the flour with the puree and milk. The batter looks thicker than a plain sponge, which is correct.\n\nBake in a lined 20 cm tin at 170°C for 40 minutes. If your oven runs hot, check at 32 minutes. Cool completely and spread with an icing of icing sugar and lime juice. Cut it with a long knife dipped in hot water for tidy slices through the soft fruit.',
    ing: [
      '125 g butter, softened',
      '150 g caster sugar',
      '2 eggs, about 100 g',
      '200 g self-raising flour',
      '100 ml milk',
      '300 g ripe mango flesh, 200 g pureed and 100 g diced',
      '100 g icing sugar',
      '1 tbsp lime juice'
    ],
    st: [
      'Heat the oven to 170°C and line a 20 cm round tin. Puree 200 g of the mango and dice the rest.',
      'Beat the butter and caster sugar for 4 minutes until pale. Beat in the eggs one at a time.',
      'Fold in the flour, milk and mango puree, then the diced mango.',
      'Spoon into the tin and bake for 40 minutes until a skewer comes out clean. Cool completely.',
      'Stir the icing sugar with the lime juice and spread over the cake.'
    ],
    tips: [
      'Use very ripe mango.',
      'Fold in the diced fruit last.',
      'If your oven runs hot, check at 32 minutes.',
      'Ice the cake only when cold.'
    ],
    pair: ['Whipped cream', 'Coconut yoghurt', 'Hot tea', 'Iced coffee'],
    store: 'Keeps in the fridge for 3 days.',
    nut: [304, 4, 45, 12, 1, 30, 20]
  },

  'fig-cake': {
    d: 'An Italian-style almond cake with fresh figs set into the top and a thin honey glaze.',
    meta: 'Fig cake: an almond cake with fresh figs set into the top and a thin honey glaze. Ten slices, baked for 45 minutes.',
    kw: ['fig cake', 'fresh fig cake', 'fig and almond cake', 'italian fig cake', 'fig cake with honey'],
    why: 'Fresh figs are in season for a short while, and this cake shows them off. Press them in, cut side up, and they soften into jammy pools as the sponge rises around them.\n\nThe sponge is mostly eggs, butter, flour and ground almonds. The almonds keep the crumb moist and give a faint sweetness that suits the figs. **Do not push the figs in too deep.** They sink further as the cake bakes, and buried figs make a wet middle.\n\nBeat the butter and sugar with the orange zest until pale, beat in the eggs and fold in the flour, almonds and baking powder. The batter is thick, so spread it into the tin with a spoon.\n\nBake in a lined 23 cm tin at 170°C for 45 minutes. If your oven runs hot, check at 36 minutes. Brush with warm honey as soon as it comes out. The cake is best warm, when the figs are still jammy, though it is good cold the next day.',
    ing: [
      '150 g butter, softened',
      '150 g caster sugar',
      '1 orange, zest only',
      '3 eggs, about 150 g',
      '150 g plain flour',
      '100 g ground almonds',
      '1 tsp baking powder',
      '8 fresh figs, about 400 g, halved',
      '2 tbsp honey'
    ],
    st: [
      'Heat the oven to 170°C and line a 23 cm round tin.',
      'Beat the butter, sugar and orange zest for 4 minutes until pale. Beat in the eggs one at a time.',
      'Fold in the flour, ground almonds and baking powder. Spread the batter in the tin.',
      'Press the figs into the top, cut-side up, and bake for 45 minutes until a skewer comes out clean.',
      'Warm the honey and brush it over the hot cake. Cool in the tin.'
    ],
    tips: [
      'Press the figs in lightly.',
      'Use ripe but firm figs.',
      'If your oven runs hot, check at 36 minutes.',
      'Brush the honey on while the cake is hot.'
    ],
    pair: ['Mascarpone', 'Hot coffee', 'Greek yoghurt', 'Sweet wine'],
    store: 'Keeps in an airtight tin for 3 days.',
    nut: [359, 6, 41, 19, 3, 27, 70]
  },

  'honey-cake': {
    d: 'A dark, spiced honey cake made with strong tea and oil, sliced thick and eaten plain.',
    meta: 'Honey cake: a dark, spiced cake made with honey, strong tea and oil. Ten slices, baked for 50 minutes.',
    kw: ['honey cake', 'spiced honey cake', 'moist honey cake', 'honey tea cake', 'homemade honey cake'],
    why: 'Honey is sweeter and wetter than sugar, and the cake gets its character from that. It browns faster, stays moist longer and tastes of the flower it came from.\n\nWarm the honey with the oil before you mix, so it pours instead of clinging to the jug. Then whisk it into the eggs and sugar with the hot tea. **The batter will be thin, almost like a pancake mix.** Do not add flour to thicken it. The thin batter is what makes the crumb soft.\n\nSift the flour with the baking powder, bicarbonate of soda and spices, and whisk it in until smooth.\n\nBake in a lined 900 g loaf tin at 170°C for 50 minutes. If your oven runs hot, check at 40 minutes. The top will crack and darken, which is normal. Cool completely and wrap for a day if you can, as the flavour deepens. Use a mild, runny honey, as a dark honey can make the loaf taste bitter.',
    ing: [
      '300 g plain flour',
      '2 tsp baking powder',
      '1/2 tsp bicarbonate of soda',
      '1 tsp ground cinnamon',
      '1/2 tsp ground ginger',
      '3 eggs, about 150 g',
      '100 g caster sugar',
      '200 g honey',
      '120 ml sunflower oil',
      '120 ml hot strong tea'
    ],
    st: [
      'Heat the oven to 170°C and line a 900 g loaf tin.',
      'Whisk the eggs and sugar for 3 minutes until pale. Whisk in the honey, oil and hot tea.',
      'Sift in the flour, baking powder, bicarbonate and spices and whisk until smooth. The batter will be thin.',
      'Pour into the tin and bake for 50 minutes until a skewer comes out clean. Cool completely.'
    ],
    tips: [
      'Do not thicken the batter.',
      'Use strong tea.',
      'If your oven runs hot, check at 40 minutes.',
      'Wrap it for a day to let the flavour deepen.'
    ],
    pair: ['Hot tea', 'Butter', 'Greek yoghurt', 'Sliced apple'],
    store: 'Keeps wrapped for 5 days.',
    nut: [337, 5, 50, 13, 1, 27, 180]
  },

  'italian-lemon-cake': {
    d: 'A moist olive oil and yoghurt cake with lemon zest, soaked in a light lemon syrup while still warm.',
    meta: 'Italian lemon cake: a moist olive oil and yoghurt cake soaked in lemon syrup. Ten slices, baked for 40 minutes.',
    kw: ['italian lemon cake', 'lemon olive oil cake', 'lemon yoghurt cake', 'italian lemon olive oil cake', 'lemon syrup cake'],
    why: 'The first sign it is ready is the smell: lemon zest and warm olive oil rising from the oven. The cake itself is almost effortless, as it mixes in a single bowl.\n\nOlive oil keeps the crumb soft and gives a fruity note that butter does not. Use a mild one, because a peppery oil tastes strange in a cake. **Do not skip the syrup.** It soaks in while the cake is warm and keeps it moist for days.\n\nWhisk the eggs and sugar until pale, then the yoghurt, oil, zest and juice. Fold in the flour and baking powder until smooth.\n\nBake in a lined 23 cm tin at 170°C for 40 minutes. If your oven runs hot, check at 32 minutes. Prick the hot cake with a skewer, spoon over the syrup of sugar and lemon juice, and leave it to soak in the tin. Serve it in thin wedges, because the soaked crumb is rich and goes a long way.',
    ing: [
      '3 eggs, about 150 g',
      '150 g caster sugar',
      '150 g Greek yoghurt',
      '100 ml olive oil',
      '2 lemons, zest only',
      '60 ml lemon juice',
      '250 g plain flour',
      '2 tsp baking powder',
      '50 g caster sugar for the syrup',
      '2 tbsp lemon juice for the syrup'
    ],
    st: [
      'Heat the oven to 170°C and line a 23 cm round tin.',
      'Whisk the eggs and 150 g sugar for 3 minutes until pale. Whisk in the yoghurt, oil, zest and 60 ml juice.',
      'Fold in the flour and baking powder until smooth. Pour into the tin.',
      'Bake for 40 minutes until a skewer comes out clean.',
      'Warm the syrup sugar with 2 tbsp juice until dissolved, prick the hot cake all over and spoon the syrup over. Cool in the tin.'
    ],
    tips: [
      'Use a mild olive oil.',
      'Prick the cake before adding the syrup.',
      'If your oven runs hot, check at 32 minutes.',
      'Leave it in the tin so the syrup soaks in.'
    ],
    pair: ['Mascarpone', 'Fresh berries', 'Espresso', 'Sparkling wine'],
    store: 'Keeps in an airtight tin for 4 days.',
    nut: [300, 6, 42, 12, 1, 21, 120]
  },

  'german-apple-cake': {
    d: 'A buttery sponge packed with sliced apples and cinnamon, baked until the top is golden and sugary.',
    meta: 'German apple cake: a buttery sponge packed with sliced apples and cinnamon. Ten slices, baked for 50 minutes.',
    kw: ['german apple cake', 'apfelkuchen', 'german apple cake with cinnamon', 'apple cake with butter sponge', 'traditional apple cake'],
    why: 'This is what to make when the apples start to arrive in autumn and the oven becomes welcome. Three apples go into the batter and the top, and the cake needs nothing more than a pot of tea.\n\nPeel and slice the apples thinly, about 3 mm, so they soften fully and do not stay hard. Half go through the batter and the rest are fanned across the top, where they brown at the edges. **Toss the apple in lemon juice.** It keeps the slices from browning while you work.\n\nBeat the butter and sugar until pale, add the eggs one at a time, then fold in the flour and baking powder. The batter is thick and almost doughy, which holds the apples up.\n\nBake in a lined 23 cm tin at 175°C for 50 minutes. If your oven runs hot, check at 40 minutes. Sprinkle with cinnamon sugar halfway through. Choose a firm, slightly tart apple, since sweet and soft varieties collapse into mush when baked.',
    ing: [
      '150 g butter, softened',
      '150 g caster sugar',
      '3 eggs, about 150 g',
      '200 g plain flour',
      '2 tsp baking powder',
      '3 apples, about 450 g, peeled and thinly sliced',
      '1 tbsp lemon juice',
      '1 tsp ground cinnamon',
      '2 tbsp caster sugar for the topping'
    ],
    st: [
      'Heat the oven to 175°C and line a 23 cm round tin. Toss the apple slices in the lemon juice.',
      'Beat the butter and 150 g sugar for 4 minutes until pale. Beat in the eggs one at a time.',
      'Fold in the flour and baking powder. Fold half the apple into the batter and spoon it into the tin.',
      'Fan the remaining apple on top. Bake for 25 minutes, sprinkle with the cinnamon and topping sugar, and bake for 25 minutes more.'
    ],
    tips: [
      'Slice the apples thinly.',
      'Toss them in lemon juice.',
      'If your oven runs hot, check at 40 minutes.',
      'Cool a little before turning out.'
    ],
    pair: ['Whipped cream', 'Hot tea', 'Vanilla sauce', 'Coffee'],
    store: 'Keeps in an airtight tin for 3 days.',
    nut: [302, 4, 40, 14, 2, 22, 120]
  },

  'gingerbread-cake': {
    d: 'A sticky, dark loaf-style cake of ginger, cinnamon, golden syrup and treacle, sliced and eaten with butter.',
    meta: 'Gingerbread cake: a sticky, dark cake of ginger, cinnamon, golden syrup and treacle. Twelve slices, baked for 45 minutes.',
    kw: ['gingerbread cake', 'sticky gingerbread cake', 'ginger cake', 'dark gingerbread cake', 'british gingerbread cake'],
    why: 'It looks like a plain brown cake, and it eats like a toffee. The difference comes from the syrup and treacle, which are heavy, dark and slightly bitter in a way sugar is not.\n\nMelt the butter, sugar, golden syrup and treacle together over a low heat, only until the sugar dissolves. **Do not let the mixture boil.** Boiling thickens it, and the cake turns dense and dry.\n\nLet the melted mixture cool for a few minutes before whisking in the milk and egg, then fold in the flour, ginger, cinnamon and bicarbonate. The batter is very runny.\n\nBake in a lined 20 cm square tin at 170°C for 45 minutes. If your oven runs hot, check at 36 minutes. The top should be dark and spring back. Cool in the tin, wrap, and wait a day, because the cake becomes stickier and more flavoursome as it rests. Cut it into squares and keep it in a tin, where it gets darker and stickier each day.',
    ing: [
      '100 g butter',
      '100 g dark brown sugar',
      '120 g golden syrup',
      '60 g black treacle',
      '240 ml milk',
      '1 egg, about 50 g',
      '250 g plain flour',
      '2 tsp ground ginger',
      '1 tsp ground cinnamon',
      '1 tsp bicarbonate of soda'
    ],
    st: [
      'Heat the oven to 170°C and line a 20 cm square tin.',
      'Melt the butter, sugar, golden syrup and treacle over low heat, stirring until smooth. Do not boil. Cool for 5 minutes.',
      'Whisk in the milk and egg. Sift in the flour, ginger, cinnamon and bicarbonate and whisk to a runny batter.',
      'Pour into the tin and bake for 45 minutes until risen and springy. Cool in the tin.'
    ],
    tips: [
      'Do not let the syrup mixture boil.',
      'Cool it before adding the egg.',
      'If your oven runs hot, check at 36 minutes.',
      'Wrap it for a day to make it stickier.'
    ],
    pair: ['Butter', 'Hot tea', 'Custard', 'Sliced pear'],
    store: 'Keeps wrapped for 5 days and gets stickier each day.',
    nut: [236, 4, 37, 8, 1, 20, 140]
  },

  'milo-cake': {
    d: 'A malted chocolate sponge made with Milo drink powder and iced with a thick Milo buttercream.',
    meta: 'Milo cake: a malted chocolate sponge made with Milo drink powder, iced with Milo buttercream. Twelve slices, baked for 35 minutes.',
    kw: ['milo cake', 'easy milo cake', 'milo chocolate cake', 'malted chocolate cake', 'australian milo cake'],
    why: 'A Milo cake suits the afternoon, a school party or a birthday for twelve, and the tin is usually empty by the evening. It is a plain butter cake with malted chocolate drink powder in place of some of the flour.\n\nMilo is sweet and malty and finely ground, so it blends into the batter without lumps. Whisk it with the flour before adding the wet mixture. **The cake will be paler than a cocoa cake.** That is correct, as the colour comes from malt, not from dark chocolate.\n\nCream the butter and sugar, add the eggs one at a time and fold in the flour mixture and the milk. The batter should drop easily from a spoon.\n\nBake in a lined 23 cm tin at 170°C for 35 minutes. If your oven runs hot, check at 28 minutes. Cool completely and ice with the buttercream. Sprinkle a little extra drink powder over the icing for a malty finish.',
    ing: [
      '175 g butter, softened',
      '150 g caster sugar',
      '3 eggs, about 150 g',
      '200 g self-raising flour',
      '80 g malted chocolate drink powder (Milo)',
      '120 ml milk',
      '60 g butter, softened, for the icing',
      '150 g icing sugar',
      '3 tbsp malted chocolate drink powder (Milo) for the icing',
      '1 tbsp milk for the icing'
    ],
    st: [
      'Heat the oven to 170°C and line a 23 cm round tin. Whisk the flour with 80 g of the drink powder.',
      'Beat the 175 g butter and caster sugar for 4 minutes until pale. Beat in the eggs one at a time.',
      'Fold in the flour mixture and the 120 ml milk. Spoon into the tin.',
      'Bake for 35 minutes until a skewer comes out clean. Cool completely.',
      'Beat the 60 g butter with the icing sugar, 3 tbsp drink powder and 1 tbsp milk until thick. Spread over the cake.'
    ],
    tips: [
      'Whisk the powder with the flour first.',
      'Do not expect a dark chocolate colour.',
      'If your oven runs hot, check at 28 minutes.',
      'Ice the cake once cold.'
    ],
    pair: ['Cold milk', 'Hot Milo', 'Vanilla ice cream', 'Hot tea'],
    store: 'Keeps in an airtight tin for 3 days.',
    nut: [366, 5, 46, 18, 1, 30, 40]
  },

  'chocolate-peanut-butter-cake': {
    d: 'Two layers of chocolate sponge sandwiched and covered with a peanut butter buttercream.',
    meta: 'Chocolate peanut butter cake: two layers of chocolate sponge with a peanut butter buttercream. Twelve slices, baked for 30 minutes.',
    kw: ['chocolate peanut butter cake', 'chocolate cake with peanut butter frosting', 'peanut butter chocolate layer cake', 'peanut butter buttercream cake', 'homemade chocolate peanut butter cake'],
    why: 'Salty, sweet and rich in the same bite: the pairing works because peanut butter cuts the sweetness of chocolate and the chocolate softens the peanut.\n\nThe sponge is a straightforward chocolate cake. Sift the flour with the cocoa and baking powder so no lumps hide in the batter. **Bake two thin layers, not one tall one.** Thin layers cook faster and stay moister.\n\nBeat the butter and sugar, add the eggs one at a time, and fold in the dry mixture with the milk. Divide it evenly between two lined 20 cm tins and bake at 180°C for 30 minutes. If your oven runs hot, check at 24 minutes.\n\nBeat the buttercream until pale. Sandwich the layers with about a third of it, spread the rest over the top and sides, and chill briefly so it sets enough to slice cleanly. Use a smooth peanut butter, not a crunchy one, as lumps make the buttercream hard to spread.',
    ing: [
      '150 g butter, softened',
      '200 g caster sugar',
      '3 eggs, about 150 g',
      '250 g plain flour',
      '50 g cocoa powder',
      '2 tsp baking powder',
      '240 ml milk',
      '100 g butter, softened, for the buttercream',
      '200 g smooth peanut butter',
      '250 g icing sugar',
      '3 tbsp milk for the buttercream'
    ],
    st: [
      'Heat the oven to 180°C and line two 20 cm round tins. Sift the flour, cocoa and baking powder together.',
      'Beat the 150 g butter and caster sugar for 4 minutes until pale. Beat in the eggs one at a time.',
      'Fold in the dry mixture and the 240 ml milk in two additions. Divide between the tins and bake for 30 minutes. Cool completely.',
      'Beat the 100 g butter and peanut butter with the icing sugar and 3 tbsp milk until pale and fluffy.',
      'Sandwich the layers with a third of the buttercream and spread the rest over the top and sides.'
    ],
    tips: [
      'Sift the cocoa.',
      'Divide the batter evenly.',
      'If your oven runs hot, check at 24 minutes.',
      'Chill the iced cake for 20 minutes before slicing.'
    ],
    pair: ['Cold milk', 'Hot coffee', 'Vanilla ice cream', 'Salted peanuts'],
    store: 'Keeps in the fridge for 4 days. Bring to room temperature before serving.',
    nut: [536, 10, 61, 28, 3, 40, 110]
  },

  'chocolate-mint-cake': {
    d: 'Two layers of dark chocolate sponge filled and covered with a peppermint buttercream and drizzled with melted chocolate.',
    meta: 'Chocolate mint cake: two layers of chocolate sponge with peppermint buttercream and a chocolate drizzle. Twelve slices, baked for 30 minutes.',
    kw: ['chocolate mint cake', 'chocolate peppermint cake', 'mint buttercream chocolate cake', 'chocolate layer cake with mint', 'homemade chocolate mint cake'],
    why: 'The first thing you notice is the contrast: dark cake, pale green-white frosting and the cool mint hit that follows. A drop of peppermint goes a long way.\n\nUse peppermint extract and measure it. Add a quarter teaspoon, taste, and add more only if needed. **Too much extract tastes of toothpaste.** The buttercream needs to be mildly minty, not medicinal.\n\nThe cake is a simple chocolate sponge. Cream the butter and sugar, add the eggs, and fold in the sifted flour, cocoa and baking powder with the milk. Divide the batter between two 20 cm tins.\n\nBake at 180°C for 30 minutes. If your oven runs hot, check at 24 minutes. Cool completely, then sandwich and cover with the buttercream. Melt the chocolate and drizzle it over the top, letting it run down the sides. Chill for 20 minutes to set it. Use a sharp knife warmed under hot water for clean slices through the layers and the drizzle.',
    ing: [
      '150 g butter, softened',
      '200 g caster sugar',
      '3 eggs, about 150 g',
      '250 g plain flour',
      '50 g cocoa powder',
      '2 tsp baking powder',
      '240 ml milk',
      '150 g butter, softened, for the buttercream',
      '300 g icing sugar',
      '1 tsp peppermint extract',
      '3 tbsp milk for the buttercream',
      '100 g dark chocolate'
    ],
    st: [
      'Heat the oven to 180°C and line two 20 cm tins. Sift together the flour, cocoa and baking powder.',
      'Cream the 150 g butter and caster sugar for 4 minutes. Add the eggs one by one.',
      'Fold in the dry ingredients with the 240 ml milk, split the batter between the tins and bake for 30 minutes. Cool fully.',
      'Beat the buttercream butter with the icing sugar, peppermint extract and 3 tbsp milk until smooth.',
      'Sandwich and cover the cake with the buttercream. Melt the chocolate, drizzle it over and chill for 20 minutes.'
    ],
    tips: [
      'Add the peppermint a little at a time.',
      'Let the cakes cool before icing.',
      'If your oven runs hot, check at 24 minutes.',
      'Let the melted chocolate cool for a minute before drizzling.'
    ],
    pair: ['Cold milk', 'Hot coffee', 'Vanilla ice cream', 'Fresh mint tea'],
    store: 'Keeps in the fridge for 4 days. Bring to room temperature before serving.',
    nut: [522, 6, 66, 26, 3, 47, 110]
  },

  'mud-cake': {
    d: 'A dense, fudgy chocolate cake made by melting butter and dark chocolate with hot water, baked low and slow.',
    meta: 'Mud cake: a dense, fudgy chocolate cake made with melted butter and dark chocolate, baked for 60 minutes. Twelve slices.',
    kw: ['mud cake', 'chocolate mud cake', 'australian mud cake', 'fudgy chocolate mud cake', 'dark chocolate mud cake'],
    why: 'Why does a mud cake taste so different from a sponge? Because it is built on melted chocolate and butter rather than creamed butter and air.\n\nMelt the butter, chocolate, sugar and hot water together over a low heat, stirring until smooth. **Let it cool for 10 minutes before adding the eggs.** Hot batter cooks the eggs into scrambled lumps.\n\nWhisk in the milk, eggs and vanilla, then sift in the flours and cocoa and whisk until you see no lumps. The batter is thin and glossy.\n\nBake in a lined 23 cm tin at 160°C for 60 minutes. If your oven runs hot, check at 50 minutes. The middle should be set but still slightly damp on a skewer, because a clean skewer means the cake is dry. Cool fully in the tin; mud cake is fragile when warm. Dust it with cocoa or serve it in small slices, because it is very rich.',
    ing: [
      '250 g butter',
      '200 g dark chocolate',
      '300 g caster sugar',
      '250 ml hot water',
      '125 ml milk',
      '2 eggs, about 100 g',
      '1 tsp vanilla extract',
      '150 g plain flour',
      '100 g self-raising flour',
      '40 g cocoa powder'
    ],
    st: [
      'Heat the oven to 160°C and line a 23 cm round tin.',
      'Melt the butter, chocolate, sugar and hot water over low heat, stirring until smooth. Cool for 10 minutes.',
      'Whisk in the milk, eggs and vanilla. Sift in the flours and cocoa and whisk until smooth.',
      'Pour into the tin and bake for 60 minutes until set with a slightly damp skewer. Cool completely in the tin.'
    ],
    tips: [
      'Cool the melted mixture before adding the eggs.',
      'A skewer should come out slightly damp.',
      'If your oven runs hot, check at 50 minutes.',
      'Do not turn it out while it is warm.'
    ],
    pair: ['Whipped cream', 'Fresh berries', 'Vanilla ice cream', 'Hot coffee'],
    store: 'Keeps in the fridge for 5 days. Serve at room temperature.',
    nut: [457, 5, 53, 25, 3, 34, 20]
  }
};
