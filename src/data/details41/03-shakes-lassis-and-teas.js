'use strict';

/**
 * Volume forty-one — milkshakes, lassis, smoothies, hot chocolates and teas.
 *
 * Cold drinks for summer and thick drinks for dessert, two lassis, and the
 * sweet teas of the American South. Times are the recipe's own. Nutrition is
 * estimated from the ingredient list by npm run calc.
 */

module.exports = {
  'limeade': {
    d: 'Fresh lime juice, sugar and cold water stirred into a sharp, clear drink and poured over ice.',
    meta: 'Limeade: fresh lime juice, sugar and cold water poured over ice. Six servings, no cooking.',
    kw: ['limeade', 'homemade limeade', 'fresh limeade', 'lime juice drink', 'easy limeade recipe'],
    why: 'It is lemonade with a sharper edge and a greener flavour. Limeade is also a better test of fresh fruit, because lime juice from a bottle tastes flat.\n\nRoll the limes hard on the counter before cutting them, pressing with the heel of your hand. This breaks the segments inside and gives about a third more juice. You need about 10 limes for 300 ml. **Dissolve the sugar in a little warm water first.** Cold water leaves grains at the bottom of the jug.\n\nStir the juice into the sugar syrup, add the cold water and taste. Limes vary a great deal, so the balance may need a spoon more sugar or a splash more water. A pinch of salt rounds out the sourness without making the drink taste salty.\n\nServe over lots of ice with lime slices and a sprig of mint. Make it up to an hour ahead and keep it in the fridge. After that the fresh taste of the juice begins to fade.',
    ing: [
      '300 ml lime juice, from about 10 limes',
      '150 g caster sugar',
      '100 ml warm water',
      '900 ml cold water',
      '1 pinch salt',
      '200 g ice cubes',
      '2 limes, sliced'
    ],
    st: [
      'Stir the sugar into the warm water until dissolved.',
      'Add the lime juice, cold water and salt and stir. Taste and adjust.',
      'Fill six glasses with ice, pour over the limeade and add the lime slices.'
    ],
    tips: [
      'Roll the limes before squeezing.',
      'Dissolve the sugar first.',
      'Taste and adjust.',
      'Serve within the hour for the freshest taste.'
    ],
    pair: ['Tacos', 'Barbecue food', 'Fish and chips', 'Fresh mint'],
    store: 'Best on the day. Keeps in the fridge for 2 days.',
    nut: [124, 0, 31, 0, 0, 26, 30]
  },

  'oreo-milkshake': {
    d: 'Vanilla ice cream, milk and crushed chocolate sandwich biscuits blended thick and topped with whipped cream.',
    meta: 'Oreo milkshake: vanilla ice cream, milk and crushed chocolate sandwich biscuits blended thick. Two servings, no cooking.',
    kw: ['oreo milkshake', 'cookies and cream milkshake', 'chocolate biscuit milkshake', 'oreo shake', 'homemade oreo milkshake'],
    why: 'A birthday, a rainy Sunday, a party for the children: this is a milkshake for an occasion rather than a drink to have with lunch.\n\nUse ice cream straight from the freezer, not softened, and add only enough milk to get the blades moving. The usual mistake is too much milk, which makes a thin drink that no one finishes. **Start with 100 ml of milk and add more by the splash.** A good shake should stay on a spoon for a second before it drops.\n\nBreak the biscuits by hand, or bash them in a bag. Blend most of them in, and keep a handful to fold in at the end so that the shake has pieces to chew rather than just a grey colour.\n\nPour into tall glasses, top with whipped cream and the last of the crumbs, and serve with a wide straw. Blend for only 20 to 30 seconds. Longer than that warms the mixture and thins it.',
    ing: [
      '400 g vanilla ice cream',
      '100 ml milk',
      '120 g chocolate sandwich biscuits, broken',
      '40 g whipped cream',
      '1 tbsp chocolate sauce'
    ],
    st: [
      'Blend the ice cream, milk and two-thirds of the biscuits for 20 seconds until smooth and thick.',
      'Add a splash more milk only if the shake is too stiff to move.',
      'Stir in the remaining crushed biscuits by hand.',
      'Pour into two glasses and top with the whipped cream and chocolate sauce.'
    ],
    tips: [
      'Use hard ice cream.',
      'Add the milk gradually.',
      'Fold in some biscuit by hand.',
      'Blend for no more than 30 seconds.'
    ],
    pair: ['Burgers', 'Fries', 'Popcorn', 'Brownies'],
    store: 'Best drunk at once.',
    nut: [827, 12, 98, 43, 3, 72, 440]
  },

  'peanut-butter-banana-shake': {
    d: 'A thick shake of frozen banana, peanut butter and milk with a drizzle of honey.',
    meta: 'Peanut butter banana shake: frozen banana, peanut butter and milk blended thick. Two servings, no cooking.',
    kw: ['peanut butter banana shake', 'banana peanut butter shake', 'peanut butter and banana milkshake', 'thick banana shake', 'frozen banana shake'],
    why: 'A frozen banana is the secret of a shake with no ice cream in it. When it blends, it turns creamy and cold, with a texture close to soft-serve.\n\nPeel ripe bananas, slice them and freeze them flat on a tray for 2 hours before you need them. Bananas frozen as lumps are hard on the blade. **Use bananas that are properly ripe.** Brown speckles mean the sugar has developed, and a green banana gives a starchy, bland shake.\n\nPeanut butter goes in with the milk so that it disperses. Use a smooth one, since crunchy leaves lumps. A spoonful of honey adds sweetness if the bananas were not ripe enough.\n\nBlend for 40 seconds, scraping down once. It should be thick enough to hold a straw upright for a moment. If the mixture sticks, add milk a tablespoon at a time. Drink it at once, because the cold banana turns gloopy as it warms.',
    ing: [
      '2 frozen bananas, about 240 g peeled',
      '2 tbsp smooth peanut butter, about 40 g',
      '250 ml milk',
      '1 tbsp honey',
      '1 pinch salt'
    ],
    st: [
      'Slice the bananas and freeze them flat on a tray for 2 hours.',
      'Put the milk, peanut butter, honey and salt into a blender, then add the frozen banana slices.',
      'Blend for 40 seconds, scraping down once, until thick and smooth.',
      'Add a tablespoon of milk if it will not move. Pour into two glasses and serve at once.'
    ],
    tips: [
      'Freeze the banana slices flat first.',
      'Use ripe bananas.',
      'Use smooth peanut butter.',
      'Drink straight away.'
    ],
    pair: ['Toast', 'Granola', 'Oat biscuits', 'Fresh berries'],
    store: 'Best drunk at once.',
    rest: [120, 'Freezing the banana'],
    nut: [341, 10, 46, 13, 4, 30, 140]
  },

  'peanut-butter-milkshake': {
    d: 'Vanilla ice cream blended with peanut butter and milk into a thick, nutty shake topped with whipped cream.',
    meta: 'Peanut butter milkshake: vanilla ice cream blended with peanut butter and milk. Two servings, no cooking.',
    kw: ['peanut butter milkshake', 'peanut butter shake', 'creamy peanut butter milkshake', 'peanut butter ice cream shake', 'homemade peanut butter milkshake'],
    why: 'Most home versions come out with lumps of peanut butter stuck to the bottom, and the fix is to blend it with the milk first.\n\nPut the milk and peanut butter into the blender before the ice cream and run it for 15 seconds. The peanut butter loosens into the milk and forms a smooth base. **Add the ice cream second, in scoops.** If everything goes in together, the peanut butter gets caught under the frozen block.\n\nUse a smooth peanut butter with no added oil on top, or stir it well first. The sweetness of the shake comes mostly from the ice cream, so choose a good vanilla with a short ingredients list.\n\nBlend for 20 seconds more, until the shake is thick and pale brown. Pour into tall glasses and top with whipped cream and a few chopped peanuts. If it is too thick to drink, add milk by the tablespoon and pulse once or twice.',
    ing: [
      '400 g vanilla ice cream',
      '150 ml milk',
      '3 tbsp smooth peanut butter, about 60 g',
      '40 g whipped cream',
      '1 tbsp chopped roasted peanuts'
    ],
    st: [
      'Blend the milk and peanut butter for 15 seconds until smooth.',
      'Add the ice cream in scoops and blend for 20 seconds until thick.',
      'Pour into two glasses, add the whipped cream and scatter with the peanuts.'
    ],
    tips: [
      'Blend the peanut butter with the milk first.',
      'Add the ice cream in scoops.',
      'Use smooth peanut butter.',
      'Add milk a spoon at a time if too thick.'
    ],
    pair: ['Burgers', 'Fries', 'Chocolate brownies', 'Popcorn'],
    store: 'Best drunk at once.',
    nut: [714, 17, 58, 46, 3, 48, 200]
  },

  'peppermint-hot-chocolate': {
    d: 'Milk heated with dark chocolate, cocoa and a few drops of peppermint extract, topped with cream.',
    meta: 'Peppermint hot chocolate: milk heated with dark chocolate, cocoa and peppermint. Two servings, ready in 13 minutes.',
    kw: ['peppermint hot chocolate', 'homemade peppermint hot chocolate', 'mint hot chocolate', 'peppermint cocoa', 'christmas peppermint hot chocolate'],
    why: 'How much peppermint is too much? One drop too many, and the drink tastes like toothpaste. The answer is to add the extract in stages and taste as you go.\n\nStart with 1/4 teaspoon for two mugs and stir it in off the heat. Peppermint extract is very strong, and it gets stronger as the drink sits. **Taste, then add another drop only if you want it.** Most people stop at 1/4 teaspoon.\n\nThe chocolate base is milk, cocoa and chopped dark chocolate. Whisk the cocoa into a little cold milk first to make a paste, then add the rest of the milk and warm gently for 8 minutes, whisking, until it steams. Stir in the chocolate until it melts.\n\nPour into two mugs and top with whipped cream and a crushed candy cane if you have one. Do not let the milk boil, since it scalds on the bottom and the flavour goes flat.',
    ing: [
      '500 ml milk',
      '2 tbsp cocoa powder',
      '2 tbsp caster sugar',
      '50 g dark chocolate, chopped',
      '1/4 tsp peppermint extract',
      '40 g whipped cream',
      '15 g candy cane, crushed'
    ],
    st: [
      'Whisk the cocoa and sugar with 60 ml of the milk in a pan to a smooth paste.',
      'Add the remaining milk and warm over low heat for 8 minutes, whisking, until steaming. Do not boil.',
      'Take off the heat, stir in the chocolate until melted, then the peppermint extract.',
      'Pour into two mugs and top with the cream and crushed candy cane.'
    ],
    tips: [
      'Add the peppermint a little at a time.',
      'Make a paste with the cocoa first.',
      'Do not let the milk boil.',
      'Use good dark chocolate.'
    ],
    pair: ['Shortbread', 'Marshmallows', 'Gingerbread', 'Biscotti'],
    store: 'Best drunk at once.',
    nut: [473, 11, 51, 25, 4, 45, 120]
  },

  'pineapple-mocktail': {
    d: 'Pineapple juice shaken with lime, coconut cream and ice, served in a tall glass with a pineapple wedge.',
    meta: 'Pineapple mocktail: pineapple juice shaken with lime and coconut cream. Four servings, no cooking.',
    kw: ['pineapple mocktail', 'pineapple coconut mocktail', 'non alcoholic pineapple drink', 'tropical pineapple mocktail', 'pineapple lime mocktail'],
    why: 'Pineapple, coconut, lime: the three flavours of a piña colada, without the rum. The coconut cream gives the drink its body, and the lime gives it its life.\n\nUse chilled juice and a can of coconut cream from the fridge, and spoon off only the thick top layer. Coconut cream that has been shaken in the can is thinner and gives a weaker drink. **Shake hard with ice for 15 seconds.** The ice chills the mixture and the shaking creates a frothy top.\n\nPineapple juice is sweet, so the lime has to be generous. Squeeze it fresh, and taste before pouring. If it is too sweet, a little more lime fixes it. If it is too sharp, a spoonful of coconut cream rounds it off.\n\nStrain into tall glasses over fresh ice, because the shaking ice is by then half melted. Add a wedge of pineapple on the rim and a straw, and serve at once. A little crushed ice makes it feel more like a holiday.',
    ing: [
      '400 ml pineapple juice, chilled',
      '80 g coconut cream',
      '3 limes, juice only, about 90 ml',
      '300 g ice cubes',
      '4 pineapple wedges, about 80 g'
    ],
    st: [
      'Put the pineapple juice, coconut cream, lime juice and half the ice into a shaker or jar.',
      'Shake hard for 15 seconds.',
      'Strain into four tall glasses filled with the remaining ice.',
      'Add a pineapple wedge to each glass and serve at once.'
    ],
    tips: [
      'Use the thick part of the coconut cream.',
      'Shake hard.',
      'Taste before pouring.',
      'Strain over fresh ice.'
    ],
    pair: ['Grilled prawns', 'Tacos', 'Jerk chicken', 'Rice and peas'],
    store: 'Best drunk at once.',
    nut: [125, 1, 19, 5, 2, 13, 5]
  },

  'pink-lemonade': {
    d: 'Fresh lemonade made pink with a handful of strawberries blended in and strained.',
    meta: 'Pink lemonade: fresh lemonade made pink with strawberries. Six servings, cooked for 5 minutes.',
    kw: ['pink lemonade', 'strawberry pink lemonade', 'homemade pink lemonade', 'fresh pink lemonade', 'pink lemonade with strawberries'],
    why: 'Pink, sweet and sharp: it is the sort of drink that gets served at a summer stall. The pink comes from fruit, not dye, which also gives a gentler flavour.\n\nStart with the syrup. Dissolve the sugar in the water over low heat for 5 minutes and cool it. Hot syrup cooks the lemon juice and makes it taste flat. **Blend the strawberries with some of the juice, then strain.** The seeds and fibres add nothing and make the drink gritty.\n\nCombine the strained strawberry juice, the lemon juice and the cold water, and chill. Taste it: if the strawberries were very sweet, you may want a little more lemon. If they were pale and sharp, add a spoonful of the syrup.\n\nServe over ice with slices of lemon and a few strawberries. The colour fades a little as the drink sits, so make it on the day. A stir before pouring brings back the red from the bottom.',
    ing: [
      '200 g caster sugar',
      '300 ml water for the syrup',
      '250 ml lemon juice, from about 6 lemons',
      '200 g strawberries, hulled',
      '700 ml cold water',
      '200 g ice cubes',
      '1 lemon, sliced'
    ],
    st: [
      'Heat the sugar and 300 ml water over low heat for 5 minutes, stirring until dissolved. Cool completely.',
      'Blend the strawberries with the lemon juice and strain through a fine sieve.',
      'Stir the strawberry juice and the syrup into the 700 ml cold water. Taste and adjust.',
      'Serve over ice with lemon slices.'
    ],
    tips: [
      'Cool the syrup before using it.',
      'Strain out the seeds.',
      'Taste and adjust.',
      'Stir before pouring.'
    ],
    pair: ['Picnic sandwiches', 'Barbecue', 'Shortbread', 'Fresh berries'],
    store: 'Best on the day. Keeps in the fridge for 2 days; stir before pouring.',
    nut: [288, 1, 71, 0, 1, 67, 5]
  },

  'pumpkin-spice-smoothie': {
    d: 'A thick smoothie of pumpkin puree, banana, yoghurt, milk and warm spices.',
    meta: 'Pumpkin spice smoothie: pumpkin puree, banana, yoghurt and warm spices blended thick. Two servings, no cooking.',
    kw: ['pumpkin spice smoothie', 'pumpkin pie smoothie', 'pumpkin banana smoothie', 'pumpkin smoothie with yoghurt', 'autumn pumpkin smoothie'],
    why: 'It is the nearest thing to a pumpkin pie that you can drink. The puree gives the colour and the body, and the spices do the rest.\n\nUse plain pumpkin puree from a tin, not pie filling. Pie filling is already sweetened and spiced, so the balance goes wrong. **Freeze the banana in slices first.** It chills the smoothie and gives the thickness that ice would only water down.\n\nThe spice mix is cinnamon, ginger and nutmeg in the proportions of pie, with a pinch of salt to sharpen everything. Blend them into the milk first so that they disperse, or the first sip is bland and the last is all nutmeg.\n\nBlend for 45 seconds, until no flecks remain. Taste and add a spoonful of maple syrup if it is too earthy. Pour into glasses and dust with a little cinnamon. It thickens as it stands, so add a splash of milk if you leave it for a few minutes.',
    ing: [
      '120 g plain pumpkin puree',
      '1 frozen banana, about 120 g peeled',
      '150 g plain yoghurt',
      '200 ml milk',
      '1 tsp ground cinnamon',
      '1/2 tsp ground ginger',
      '1/4 tsp ground nutmeg',
      '1 tbsp maple syrup',
      '1 pinch salt'
    ],
    st: [
      'Blend the milk with the cinnamon, ginger, nutmeg and salt for 10 seconds.',
      'Add the pumpkin puree, banana, yoghurt and maple syrup and blend for 45 seconds until smooth.',
      'Pour into two glasses and dust with cinnamon.'
    ],
    tips: [
      'Use plain pumpkin puree, not pie filling.',
      'Freeze the banana slices first.',
      'Blend the spices into the milk.',
      'Add milk if it thickens too much.'
    ],
    pair: ['Toast', 'Granola', 'Oat biscuits', 'Hot coffee'],
    store: 'Best drunk at once. Keeps in the fridge for 1 day; stir well.',
    nut: [233, 12, 35, 5, 3, 23, 150]
  },

  'rhubarb-cordial': {
    d: 'A pink cordial made by simmering rhubarb with sugar, water and ginger, to be diluted with sparkling water.',
    meta: 'Rhubarb cordial: rhubarb simmered with sugar, water and ginger into a pink cordial. Makes about ten servings, cooked for 20 minutes.',
    kw: ['rhubarb cordial', 'homemade rhubarb cordial', 'rhubarb syrup', 'rhubarb and ginger cordial', 'pink rhubarb cordial'],
    why: 'Leave the colour to the stalks. That is most of the recipe, and the part people skip.\n\nChoose the reddest rhubarb you can find, since the pink of the cordial comes from the skin. Green stalks give a pale, brownish drink. Chop it in 2 cm lengths and simmer it with the water, ginger and sugar for 20 minutes, until the stalks collapse. **Do not stir more than you must.** Breaking up the rhubarb makes the cordial cloudy.\n\nLet the pan drip through a sieve lined with muslin and leave it alone. The liquid that comes out slowly is clear and ruby pink. Pressing the pulp gets more juice but loses the clarity.\n\nAdd a squeeze of lemon to brighten the colour and the taste. Pour the syrup into a clean bottle while still warm. Dilute one part cordial to five parts sparkling water over ice, or splash it into a glass of prosecco. If your hob runs hot, lower the heat to a gentle bubble.',
    ing: [
      '500 g red rhubarb, chopped',
      '400 g caster sugar',
      '500 ml water',
      '20 g fresh ginger, sliced',
      '2 tbsp lemon juice'
    ],
    st: [
      'Simmer the rhubarb, sugar, water and ginger over medium-low heat for 20 minutes until the rhubarb has collapsed.',
      'Strain through muslin without pressing.',
      'Stir in the lemon juice and pour into a clean bottle. Cool.',
      'Dilute one part cordial to five parts sparkling water.'
    ],
    tips: [
      'Choose red rhubarb.',
      'Do not press the pulp.',
      'If your hob runs hot, keep the heat low.',
      'Use a clean, sterilised bottle.'
    ],
    pair: ['Sparkling water', 'Vanilla ice cream', 'Prosecco', 'Shortbread'],
    store: 'Keeps in the fridge for 2 weeks.',
    nut: [172, 0, 43, 0, 1, 41, 5]
  },

  'salted-caramel-hot-chocolate': {
    d: 'Hot chocolate made with milk and dark chocolate, stirred with caramel sauce and a pinch of sea salt.',
    meta: 'Salted caramel hot chocolate: milk and dark chocolate stirred with caramel sauce and sea salt. Two servings, ready in 15 minutes.',
    kw: ['salted caramel hot chocolate', 'homemade salted caramel hot chocolate', 'caramel hot chocolate', 'hot chocolate with salted caramel', 'salted caramel cocoa'],
    why: 'The first sign it is right is the smell: warm milk and burnt sugar. The salt follows in the first sip, and the chocolate arrives last.\n\nUse a good dark chocolate and chop it fine so that it melts in seconds. Heat the milk with the caramel sauce until it steams and the caramel has dissolved, about 6 minutes, and whisk in the chocolate off the heat. **The salt goes in at the end.** Too early and it is lost in the milk, while a pinch of flaky salt on top hits the tongue first.\n\nAdd the caramel in two parts, half to the pan and half to drizzle over the whipped cream. The part in the pan gives a deep, toffee-like base, while the drizzle gives a bright top note.\n\nPour into warm mugs. If your hob runs hot, keep the heat low, because milk with sugar in it catches and scorches quickly. A pinch of cocoa dusted on the cream finishes the mug.',
    ing: [
      '500 ml milk',
      '3 tbsp caramel sauce',
      '60 g dark chocolate, chopped',
      '40 g whipped cream',
      '1/4 tsp flaky sea salt'
    ],
    st: [
      'Warm the milk with 2 tbsp of the caramel sauce over low heat for 6 minutes, whisking, until steaming. Do not boil.',
      'Take off the heat and whisk in the chocolate until melted.',
      'Pour into two warm mugs and top with the whipped cream.',
      'Drizzle with the remaining caramel and finish with the sea salt.'
    ],
    tips: [
      'Chop the chocolate fine.',
      'Salt at the end.',
      'If your hob runs hot, keep the heat low.',
      'Warm the mugs first.'
    ],
    pair: ['Shortbread', 'Marshmallows', 'Biscotti', 'Pretzels'],
    store: 'Best drunk at once.',
    nut: [488, 11, 48, 28, 3, 41, 450]
  },

  'salted-lassi': {
    d: 'A cold, savoury yoghurt drink with water, salt, roasted cumin and mint.',
    meta: 'Salted lassi: a cold, savoury yoghurt drink with salt, cumin and mint. Two servings, no cooking.',
    kw: ['salted lassi', 'namkeen lassi', 'indian salted lassi', 'savoury yoghurt drink', 'cumin and mint lassi'],
    why: 'Sweet lassi gets all the attention, but salted lassi is what many cooks drink with a heavy meal. It is cold, sour, slightly salty, and cuts through spice.\n\nThe base is plain yoghurt whisked with cold water until it pours like thin cream. Use a whole-milk yoghurt for the best body. **Whisk or blend until perfectly smooth.** Lumps of yoghurt in the glass are the first thing people notice.\n\nCumin is the main spice. Dry-roast it for 30 seconds in a pan until it smells nutty, then crush it. The roasting changes the flavour from flat and dusty to warm and deep. Add the mint leaves and blend them in so the drink turns pale green.\n\nSeason with salt a pinch at a time, tasting each time. It should be noticeably salty, since the cold mutes salt. Pour over ice and sprinkle with extra cumin. Serve straight away, because the water begins to separate from the yoghurt after about half an hour.',
    ing: [
      '300 g plain whole-milk yoghurt',
      '250 ml cold water',
      '1/2 tsp ground cumin',
      '1/2 tsp salt',
      '10 mint leaves',
      '100 g ice cubes'
    ],
    st: [
      'Toast the cumin in a dry pan for 30 seconds until fragrant.',
      'Blend the yoghurt, cold water, cumin, salt and mint leaves for 30 seconds until smooth.',
      'Taste and add salt if needed. Pour over the ice and sprinkle with a little more cumin.'
    ],
    tips: [
      'Use whole-milk yoghurt.',
      'Toast the cumin first.',
      'Salt a little at a time.',
      'Serve straight away.'
    ],
    pair: ['Curry', 'Biryani', 'Samosas', 'Grilled meats'],
    store: 'Best drunk at once. Keeps in the fridge for 1 day; whisk before pouring.',
    nut: [97, 5, 8, 5, 0, 7, 660]
  },

  'spinach-pineapple-smoothie': {
    d: 'A green smoothie of baby spinach, pineapple, banana and coconut water that tastes mostly of the fruit.',
    meta: 'Spinach pineapple smoothie: baby spinach, pineapple, banana and coconut water blended smooth. Two servings, no cooking.',
    kw: ['spinach pineapple smoothie', 'green pineapple smoothie', 'spinach and banana smoothie', 'pineapple spinach smoothie with coconut water', 'tropical green smoothie'],
    why: 'It is a morning drink for people who want vegetables and hate the taste of them. Pineapple is strong enough to cover a whole handful of spinach.\n\nPut the liquid in first, then the spinach, then the fruit. Blenders work from the bottom, and leaves on top of a pile of frozen fruit are left behind. **Blend the spinach and coconut water first for 20 seconds.** It breaks the leaves down into a fine green liquid, and no bits are left to catch your teeth.\n\nFrozen pineapple chunks give the thick, cold body that ice would dilute. A ripe banana adds creaminess and sweetness so that no sugar is needed. A squeeze of lime lifts the flavour and keeps the colour bright.\n\nBlend for 40 seconds until the colour is an even, bright green. If it is too thick, add water by the splash. Pour into glasses and drink at once, since a green smoothie loses its colour after an hour.',
    ing: [
      '60 g baby spinach',
      '250 ml coconut water',
      '200 g frozen pineapple chunks',
      '1 banana, about 120 g peeled',
      '1 lime, juice only, about 30 ml'
    ],
    st: [
      'Blend the coconut water and spinach for 20 seconds until the leaves have broken down.',
      'Add the pineapple, banana and lime juice and blend for 40 seconds until smooth.',
      'Thin with a splash of water if needed. Pour into two glasses and drink at once.'
    ],
    tips: [
      'Blend the spinach with the liquid first.',
      'Use frozen pineapple.',
      'Add lime to keep the colour bright.',
      'Drink at once.'
    ],
    pair: ['Wholegrain toast', 'Porridge', 'A boiled egg', 'Fresh fruit'],
    store: 'Best drunk at once. Keeps in the fridge for 1 day.',
    nut: [157, 3, 34, 1, 5, 21, 160]
  },

  'strawberry-lassi': {
    d: 'A cold, sweet yoghurt drink blended with strawberries, milk, honey and a pinch of cardamom.',
    meta: 'Strawberry lassi: yoghurt blended with strawberries, milk, honey and cardamom. Two servings, no cooking.',
    kw: ['strawberry lassi', 'indian strawberry lassi', 'strawberry yoghurt lassi', 'strawberry cardamom lassi', 'homemade strawberry lassi'],
    why: 'Two ingredients carry this drink: yoghurt for body and sourness, and strawberries for sweetness and colour. A pinch of cardamom is what turns it from a smoothie into a lassi.\n\nUse plain, full-fat yoghurt, which gives a creamy drink with a little tang. Sweetened or fruit yoghurt makes the drink too sugary and hides the strawberries. **Choose the sweetest strawberries you can find.** Pale or hard ones give a sharp, thin lassi that needs a lot of honey.\n\nCrush the cardamom seeds from two pods in a pestle, or use a pinch of ground. A few specks of it go a long way. It adds a floral, slightly citrus note that nothing else here supplies.\n\nBlend everything for 30 seconds until the drink is smooth and pink. Taste, and add honey a spoonful at a time. Pour over ice into tall glasses and serve straight away, with a strawberry on the rim if you like.',
    ing: [
      '300 g plain whole-milk yoghurt',
      '200 g strawberries, hulled',
      '100 ml milk',
      '1 tbsp honey',
      '1 pinch ground cardamom',
      '100 g ice cubes'
    ],
    st: [
      'Blend the yoghurt, strawberries, milk, honey and cardamom for 30 seconds until smooth.',
      'Taste and add more honey if needed.',
      'Pour over the ice into two tall glasses and serve at once.'
    ],
    tips: [
      'Use plain, full-fat yoghurt.',
      'Choose sweet strawberries.',
      'Add honey gradually.',
      'Serve cold.'
    ],
    pair: ['Spicy curry', 'Naan', 'Paratha', 'Fresh fruit'],
    store: 'Best drunk at once. Keeps in the fridge for 1 day.',
    nut: [195, 7, 26, 7, 2, 23, 90]
  },

  'strawberry-milkshake': {
    d: 'Vanilla ice cream blended with fresh strawberries and milk into a thick pink shake.',
    meta: 'Strawberry milkshake: vanilla ice cream blended with fresh strawberries and milk. Two servings, no cooking.',
    kw: ['strawberry milkshake', 'fresh strawberry milkshake', 'homemade strawberry milkshake', 'strawberry ice cream shake', 'creamy strawberry shake'],
    why: 'Summer produces the best strawberries and the best excuse to blend them into a milkshake. The season matters, because a shake is only as good as the fruit in it.\n\nHull the strawberries and cut any large ones in half. Mash a third of them with a fork and a spoonful of sugar and leave them for 5 minutes, so that the juice runs. **Macerated strawberries taste much stronger than raw ones.** The sugar draws out the juice and makes the flavour deeper.\n\nBlend the mashed fruit with the milk first, then add the remaining strawberries and the ice cream in scoops. Blend for 20 seconds, no more. A longer blend warms the shake and makes it thin.\n\nPour into tall glasses. The shake should be thick enough to need a spoon at first and a straw by the end. Top with a strawberry on the rim and, if you like, a swirl of whipped cream. Drink at once while it is icy cold.',
    ing: [
      '250 g strawberries, hulled',
      '1 tbsp caster sugar',
      '400 g vanilla ice cream',
      '100 ml milk',
      '2 strawberries for decoration'
    ],
    st: [
      'Mash a third of the strawberries with the sugar and leave for 5 minutes.',
      'Blend the mashed fruit with the milk, then add the remaining strawberries and the ice cream.',
      'Blend for 20 seconds until thick. Pour into two glasses and decorate with the whole strawberries.'
    ],
    tips: [
      'Use ripe, sweet strawberries.',
      'Macerate some of the fruit.',
      'Blend for no more than 20 seconds.',
      'Serve at once.'
    ],
    pair: ['Burgers', 'Fries', 'Cupcakes', 'Pancakes'],
    store: 'Best drunk at once.',
    nut: [528, 10, 68, 24, 4, 58, 180]
  },

  'sun-tea': {
    d: 'Tea bags steeped in a jar of cold water in the sun for three hours, then chilled and served over ice.',
    meta: 'Sun tea: tea bags steeped in a jar of water in the sun for 3 hours. Six servings, no heat needed.',
    kw: ['sun tea', 'homemade sun tea', 'sun brewed iced tea', 'southern sun tea', 'sun tea recipe'],
    why: 'No kettle is needed. A jar of water, a handful of tea bags and a sunny windowsill do the work over an afternoon.\n\nThe tea brews slowly in warm water, so it comes out smoother and less bitter than tea made with boiling water. Five black tea bags in 1.5 litres give a medium-strength drink that holds up against ice. **Use a very clean glass jar with a lid.** Water kept warm for hours is a good place for bacteria to grow, and a clean jar is the only protection.\n\nPut the jar in full sun for 3 hours, no longer. Take out the tea bags when it is the colour of strong tea, and move the jar to the fridge at once. Do not leave it out overnight.\n\nServe over ice with lemon slices and sugar to taste. Stir sugar in while the tea is still warm, if you plan to sweeten it, because it dissolves poorly in cold tea. Throw it away if it looks cloudy or stringy, and do not keep it for more than a day.',
    ing: [
      '1.5 litres cold water',
      '5 black tea bags, about 10 g',
      '200 g ice cubes',
      '1 lemon, sliced',
      '2 tbsp caster sugar, optional'
    ],
    st: [
      'Fill a clean glass jar with the cold water and add the tea bags.',
      'Put the lid on and leave the jar in full sun for 3 hours.',
      'Remove the tea bags and chill the tea in the fridge straight away. Stir in the sugar if using.',
      'Serve over ice with lemon slices.'
    ],
    tips: [
      'Use a very clean jar.',
      'Do not steep for longer than 3 hours.',
      'Refrigerate at once.',
      'Throw it away if it looks cloudy.'
    ],
    pair: ['Sandwiches', 'Barbecue', 'Cornbread', 'Fresh peaches'],
    store: 'Keeps in the fridge for 1 day.',
    rest: [180, 'Steeping in the sun'],
    nut: [20, 0, 5, 0, 0, 4, 5]
  },

  'sweet-tea': {
    d: 'Strong black tea brewed with sugar while still hot, chilled and poured over ice with lemon.',
    meta: 'Sweet tea: strong black tea brewed with sugar, chilled and served over ice with lemon. Eight servings, cooked for 10 minutes.',
    kw: ['sweet tea', 'southern sweet tea', 'homemade sweet tea', 'sweet iced tea', 'classic sweet tea recipe'],
    why: 'Sugar goes in while the tea is hot. That one rule is the difference between sweet tea and tea with sugar sitting on the bottom of the glass.\n\nBring 1 litre of water to the boil and pour it over the tea bags. Leave them for 5 minutes, no longer. Longer steeping draws out tannins and gives a bitter, cloudy drink. **Stir in the sugar straight after removing the bags.** Hot tea dissolves it completely.\n\nTop up with 1 litre of cold water, which cools the tea quickly and prevents it from clouding. A pinch of bicarbonate of soda is a common trick that softens the tannins, but it is not needed with a good tea.\n\nChill for at least an hour, then serve over lots of ice with lemon wedges. It should be properly sweet: southern sweet tea has a lot of sugar. Add less if you prefer, but taste the finished tea cold, since cold dulls sweetness.',
    ing: [
      '1 litre water',
      '6 black tea bags, about 12 g',
      '150 g caster sugar',
      '1 litre cold water',
      '300 g ice cubes',
      '1 lemon, cut into wedges'
    ],
    st: [
      'Boil the 1 litre of water and pour it over the tea bags. Steep for 5 minutes, then remove the bags.',
      'Stir in the sugar until dissolved. Add the cold water.',
      'Chill the tea.',
      'Serve over ice with lemon wedges.'
    ],
    tips: [
      'Steep for 5 minutes only.',
      'Sweeten while the tea is hot.',
      'Add cold water to cool it quickly.',
      'Taste it cold before serving.'
    ],
    pair: ['Fried chicken', 'Barbecue', 'Cornbread', 'Peach cobbler'],
    store: 'Keeps in the fridge for 3 days.',
    nut: [76, 0, 19, 0, 0, 19, 5]
  },

  'vanilla-milkshake': {
    d: 'Vanilla ice cream blended with cold milk and a spoon of vanilla extract into a thick, pale shake.',
    meta: 'Vanilla milkshake: vanilla ice cream blended with cold milk and vanilla extract. Two servings, no cooking.',
    kw: ['vanilla milkshake', 'classic vanilla milkshake', 'homemade vanilla milkshake', 'thick vanilla shake', 'vanilla ice cream milkshake'],
    why: 'The first summer of warm days is when a vanilla milkshake belongs. It is the simplest shake there is and the hardest to improve upon.\n\nThree things make it good: ice cream, milk and restraint. Use a vanilla ice cream with real vanilla seeds if you can, and keep it in the freezer until the moment it goes in the blender. **Milk goes in first, ice cream second.** Starting with the milk lets the blades spin freely, and the ice cream breaks down cleanly.\n\nThe ratio is about four parts ice cream to one part milk, by weight. Add more milk only if the blender stalls. A teaspoon of extra vanilla extract brings out the flavour and makes the shake smell as it should.\n\nBlend for 20 seconds, then pour into chilled glasses. Chilling the glasses in the freezer for 10 minutes keeps the shake cold for longer. Serve with a spoon and a straw, and nothing else.',
    ing: [
      '400 g vanilla ice cream',
      '100 ml milk, cold',
      '1 tsp vanilla extract',
      '40 g whipped cream'
    ],
    st: [
      'Pour the milk and vanilla into a blender and add the ice cream in scoops.',
      'Blend for 20 seconds until thick and smooth.',
      'Pour into two chilled glasses and top with the whipped cream.'
    ],
    tips: [
      'Put the milk in first.',
      'Use hard ice cream.',
      'Chill the glasses.',
      'Blend for no more than 20 seconds.'
    ],
    pair: ['Burgers', 'Fries', 'Brownies', 'Hot dogs'],
    store: 'Best drunk at once.',
    nut: [519, 9, 51, 31, 1, 45, 190]
  }
};
