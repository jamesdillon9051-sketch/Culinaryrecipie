'use strict';

/**
 * Volume twenty-seven — snacks and drinks, first part.
 *
 * Six American party snacks, a cheese ball, French onion dip, grape jelly
 * meatballs, kettle corn, sausage balls and a mocha, and three cocktails, the
 * French 75, the Sazerac and the tequila sunrise.
 */

module.exports = {
  'cheese-ball': {
    d: 'Cream cheese and sharp cheddar mixed with spring onion, garlic and Worcestershire sauce, shaped into a ball, chilled and rolled in chopped pecans. A party appetizer that is made ahead.',
    meta: 'Cheese ball: cream cheese and sharp cheddar mixed with spring onion, garlic and Worcestershire, shaped into a ball, chilled and rolled in chopped pecans.',
    kw: ['cheese ball', 'classic cheese ball', 'pecan cheese ball', 'cream cheese and cheddar cheese ball', 'how to make a cheese ball'],
    why: 'The cheese ball is an American party staple from the 1950s and 1960s, when it appeared on buffet tables at every holiday party and cocktail hour, and it has lasted because it is easy to make and easy to eat. It is a spread that has been turned into a centrepiece. Cream cheese gives the base its smooth, tangy body, and grated sharp cheddar gives it flavour and a little texture, while spring onion, garlic and a spoonful of Worcestershire sauce supply the savoury, slightly sharp notes that keep it from tasting flat. The mixture needs to be chilled before it can be shaped, because at room temperature it is too soft to hold a form, and it needs to be chilled again once it is rolled in chopped pecans, so that it firms up and can be cut into with a knife. It is made a day ahead, which lets the flavours meld, and it is put out with crackers, pretzels and vegetable sticks.',
    ing: [
      '225 g cream cheese, softened',
      '200 g extra-sharp cheddar, finely grated',
      '3 spring onions, finely chopped',
      '1 garlic clove, grated',
      '1 tbsp Worcestershire sauce',
      '0.25 tsp cayenne pepper',
      '0.25 tsp fine salt',
      '100 g pecans, finely chopped',
      '1 tbsp chopped parsley'
    ],
    st: [
      'Beat the cream cheese in a bowl until smooth, then mix in the cheddar, spring onions, garlic, Worcestershire sauce, cayenne and salt.',
      'Scrape the mixture onto a sheet of cling film, shape it into a rough ball, wrap it up, and refrigerate for 2 hours, until firm.',
      'Mix the chopped pecans and parsley on a plate.',
      'Unwrap the cheese ball, roll it in the pecans, pressing them on so they stick all over.',
      'Set it on a plate and serve with crackers and vegetable sticks.'
    ],
    tips: [
      'Soften the cream cheese properly. Cold cream cheese leaves lumps, and it does not blend with the cheddar.',
      'Grate the cheddar finely from a block. Pre-shredded cheese has a coating that makes the mixture dry and grainy.',
      'Make it a day ahead. The garlic and onion soften and the flavours join up overnight, and the ball is easier to shape.'
    ],
    pair: ['Buttery crackers', 'Celery and carrot sticks', 'Pretzel crisps'],
    store: 'Keeps wrapped in the fridge for up to 5 days. Roll it in the nuts on the day it is served, so they stay crisp. Freeze the plain ball for up to 2 months.',
    nut: [185, 6, 2, 17, 1, 1, 230],
    rest: [120, 'Chilling']
  },

  'french-75': {
    d: 'Gin, lemon juice and sugar syrup shaken with ice, strained into a flute and topped with cold sparkling wine. Sharp, dry and fizzy, and it hits harder than it tastes.',
    meta: 'French 75: gin, lemon juice and sugar syrup shaken with ice, strained into a flute and topped with cold sparkling wine. Sharp, dry, fizzy and strong.',
    kw: ['french 75', 'french 75 cocktail', 'classic french 75', 'gin and champagne cocktail', 'how to make a french 75'],
    why: 'The French 75 is a cocktail from the First World War, named after the French 75 mm field gun, the quick-firing artillery piece that was the pride of the French army, and the drink is said to have the same kick: it tastes light and lemony, but it is strong. The best-known account places its invention at Harry MacElhone\'s New York Bar in Paris around 1915, and it appeared in print in the 1930s in Harry Craddock\'s Savoy Cocktail Book. It is a simple structure and a good one, gin with lemon juice and sugar in the form of a Tom Collins, with the soda swapped for sparkling wine. The gin gives it botanical bite, the lemon gives sharpness and the syrup rounds the edge, and the bubbles lift the whole thing. Champagne is the classic choice, but a dry sparkling wine such as prosecco or cava is a very good substitute, and it does not need to be expensive. Everything except the wine is shaken hard with ice, so that it is really cold, and the wine is added at the end, gently, so that it keeps its fizz.',
    ing: [
      '30 ml gin',
      '15 ml fresh lemon juice',
      '10 ml sugar syrup (equal parts sugar and water)',
      '60 ml chilled dry sparkling wine or Champagne',
      'A handful of ice cubes',
      '1 long strip of lemon peel, to garnish'
    ],
    st: [
      'Put the gin, lemon juice and sugar syrup in a cocktail shaker with a handful of ice and shake hard for 10 seconds, until the outside is frosted.',
      'Strain into a chilled champagne flute.',
      'Top slowly with the sparkling wine, pouring it down the inside of the glass to keep the bubbles.',
      'Twist the lemon peel over the glass to release its oils, and drop it in or curl it on the rim.'
    ],
    tips: [
      'Use fresh lemon juice and not a bottle. Bottled juice tastes flat, and the drink depends on the fresh, sharp lemon.',
      'Chill the glass and the wine. A cold glass keeps the drink fizzy for longer, and warm sparkling wine goes flat quickly.',
      'Pour the wine last and slowly. Adding it to the shaker will froth it over, and pouring quickly loses the bubbles.'
    ],
    pair: ['Oysters', 'Smoked salmon canapés', 'Salted almonds'],
    store: 'Best made and drunk at once. The shaken base of gin, lemon and syrup can be mixed ahead and kept in the fridge for a day. Add the sparkling wine only when serving.',
    nut: [138, 0, 8, 0, 0, 6, 5]
  },

  'french-onion-dip': {
    d: 'Slowly caramelised onions folded into sour cream, cream cheese and mayonnaise with a dash of Worcestershire, and chilled until thick. Real onion flavour, not a packet.',
    meta: 'French onion dip: slowly caramelised onions folded into sour cream, cream cheese and mayonnaise with Worcestershire, chilled until thick. No packet needed.',
    kw: ['french onion dip', 'homemade french onion dip', 'caramelized onion dip', 'french onion dip with sour cream', 'how to make french onion dip'],
    why: 'French onion dip is a piece of American food history, and the story is that in the 1950s a Los Angeles cook stirred a packet of dried onion soup mix into sour cream, and the soup company printed the recipe on the box, where it has stayed. The packet version is salty and one-note. The homemade version is a different thing altogether: onions cooked slowly for 40 minutes, until they collapse into a sweet, jammy, deep brown mass, folded into a rich base of sour cream, cream cheese and mayonnaise. That patience is the whole recipe, since the flavour of the dip is the flavour of the caramelised onion. Cooked over medium heat and stirred now and then, with a pinch of salt to draw out their water, the onions go from raw and sharp to soft and sweet, and the last stage, when the sugars brown, is where the depth comes from. The dip must be chilled for a couple of hours so the flavour spreads.',
    ing: [
      '3 large onions (about 700 g), thinly sliced',
      '2 tbsp olive oil',
      '15 g butter',
      '0.75 tsp fine salt',
      '1 tsp caster sugar',
      '225 g sour cream',
      '115 g cream cheese, softened',
      '80 g mayonnaise',
      '1 tsp Worcestershire sauce',
      '0.5 tsp garlic powder',
      '0.25 tsp ground black pepper',
      '1 tbsp chopped chives'
    ],
    st: [
      'Heat the oil and butter in a large frying pan over medium heat, add the onions and 0.5 tsp of the salt, and cook for 10 minutes, stirring occasionally, until they are soft and pale gold.',
      'Lower the heat to medium-low, stir in the sugar, and cook for 30 minutes more, stirring every few minutes and scraping up the brown bits, until the onions are deep golden brown and jammy.',
      'Chop the onions roughly and let them cool for 15 minutes.',
      'Beat the sour cream, cream cheese, mayonnaise, Worcestershire sauce, garlic powder, pepper and the remaining salt until smooth.',
      'Fold in the cooled onions.',
      'Cover and refrigerate for at least 2 hours.',
      'Stir, top with the chives and serve with potato chips.'
    ],
    tips: [
      'Do not rush the onions. Turning up the heat browns the edges and leaves the middle raw, whereas slow cooking turns the whole pan soft and sweet.',
      'Cool the onions before they meet the dairy. Warm onions thin the sour cream and make the dip runny.',
      'Chill the dip for a few hours before serving. It thickens and the flavours blend, and it tastes noticeably better than it does fresh.'
    ],
    pair: ['Ridged potato chips', 'Raw vegetable sticks', 'Pretzels'],
    store: 'Keeps in the fridge for up to 5 days. Stir before serving. It does not freeze well.',
    nut: [206, 2, 9, 18, 1, 5, 260],
    rest: [120, 'Chilling']
  },

  'grape-jelly-meatballs': {
    d: 'Small beef meatballs baked and simmered in a sauce of grape jelly and chili sauce until glossy and sticky. The sweet-and-tangy potluck meatball of the American Midwest.',
    meta: 'Grape jelly meatballs: small beef meatballs baked and simmered in a sauce of grape jelly and chili sauce until glossy, sticky and sweet-and-tangy.',
    kw: ['grape jelly meatballs', 'cocktail meatballs with grape jelly', 'grape jelly and chili sauce meatballs', 'party meatballs with grape jelly', 'how to make grape jelly meatballs'],
    why: 'Grape jelly meatballs sound strange to anyone who has not grown up with them, and they have been a fixture of American potlucks, baby showers and holiday buffets since the 1960s, when a jar of grape jelly and a bottle of chili sauce were the whole recipe. There is a reason they survive. The sauce is a sweet-and-sour glaze in which the grape jelly, which is grape juice, sugar and pectin, supplies fruity sweetness and gloss, and the chili sauce, which is a sweet tomato condiment with vinegar and spice, cuts it with tang and savouriness. Together they taste like a simplified barbecue sauce, and they cling to the meatballs in a shiny coat. Here the meatballs are made from scratch and baked, so they are tender and evenly browned, and not the frozen ones that many versions call for. They are then simmered in the sauce for 15 minutes so they take up flavour, and the pot can be kept on a low heat for hours at a party.',
    ing: [
      '700 g ground beef',
      '60 g dry breadcrumbs',
      '1 egg',
      '60 ml whole milk',
      '1 tsp garlic powder',
      '1 tsp fine salt',
      '0.5 tsp ground black pepper',
      '300 g grape jelly',
      '300 g chili sauce (the sweet tomato kind sold with ketchup)',
      '1 tbsp Worcestershire sauce',
      '1 tbsp lemon juice'
    ],
    st: [
      'Heat the oven to 200°C / 400°F and line a large baking tray with baking paper.',
      'Mix the beef, breadcrumbs, egg, milk, garlic powder, salt and pepper in a bowl with your hands until just combined.',
      'Roll the mixture into 40 balls of about 18 g each and set them on the tray.',
      'Bake for 15 minutes, until browned and cooked through to 71°C / 160°F.',
      'Meanwhile, stir the grape jelly, chili sauce, Worcestershire sauce and lemon juice in a large saucepan over medium heat until the jelly melts and the sauce is smooth.',
      'Add the meatballs and simmer, stirring gently, for 15 minutes, until the sauce is thick and glossy and coats each meatball.',
      'Serve hot with toothpicks.'
    ],
    tips: [
      'Bake the meatballs instead of frying them. It is easier, and they brown evenly without needing to be turned.',
      'Make the meatballs small. Bite-sized balls take up more sauce, and they are easier to eat with a toothpick at a party.',
      'Keep them warm in a slow cooker on low. The sauce holds up for hours, and they stay glossy.'
    ],
    pair: ['Toothpicks and napkins', 'Cheese and crackers', 'Vegetable sticks'],
    store: 'Keeps in the fridge for up to 4 days and reheats on the hob or in the microwave. Freeze in the sauce for up to 3 months.',
    nut: [236, 13, 28, 8, 1, 22, 500]
  },

  'kettle-corn': {
    d: 'Popcorn popped in a pot with a little sugar and oil, so the sugar melts and coats each piece in a thin, crisp shell, then tossed with salt. Sweet, salty and ready in 13 minutes.',
    meta: 'Kettle corn: popcorn popped in a pot with a little sugar and oil so each piece gets a thin, crisp, sweet coating, then tossed with salt. Ready in 13 minutes.',
    kw: ['kettle corn', 'homemade kettle corn', 'stovetop kettle corn', 'sweet and salty popcorn', 'how to make kettle corn'],
    why: 'Kettle corn is the popcorn of country fairs, where it is made in a big iron kettle over a fire and stirred with a paddle, and it is one of the few fair foods that is genuinely easy to make at home, in one pot. What sets it apart from ordinary popcorn is that the sugar goes in with the kernels, so it melts in the hot oil as the corn pops and coats each piece in a thin, sweet, crunchy shell, and the salt goes on at the end for the sweet and salty contrast. It is a quick recipe but a fussy one, because the sugar can burn. The pot must be shaken constantly, so the sugar does not sit on the bottom and scorch, and the popcorn must come off the heat the moment the popping slows, since the few seconds after the last pops are when the sugar turns from golden to black. It is tipped out of the pot at once, since the hot base carries on cooking it, and stirred so the pieces do not fuse into a lump.',
    ing: [
      '3 tbsp vegetable oil',
      '100 g popcorn kernels',
      '50 g caster sugar',
      '0.5 tsp fine salt'
    ],
    st: [
      'Heat the oil in a large, heavy pot with a lid over medium-high heat and drop in 3 kernels. When they pop, the oil is ready.',
      'Add the rest of the kernels and the sugar, put on the lid, and shake the pot constantly over the heat.',
      'Keep shaking as the popping speeds up, holding the lid slightly ajar to let the steam out, until the pops are 2 to 3 seconds apart, about 3 to 4 minutes.',
      'Take the pot off the heat right away and tip the popcorn into a large bowl. Sprinkle with the salt and toss.',
      'Spread out to cool for a few minutes, breaking apart any clumps.'
    ],
    tips: [
      'Shake the pot without stopping. The sugar burns in seconds if it sits still against the metal.',
      'Take it off the heat when the pops are 2 or 3 seconds apart. Waiting for the last kernels burns the sugar, and a few unpopped ones are the price.',
      'Tip it out of the pot at once. The pot stays hot and carries on cooking the popcorn, and the sugar can scorch.'
    ],
    pair: ['A movie night', 'A glass of cold milk', 'Salted peanuts'],
    store: 'Best on the day it is made. It keeps in an airtight container for up to 2 days, and softens with time.',
    nut: [99, 2, 16, 3, 2, 6, 120]
  },

  'mocha': {
    d: 'Strong espresso mixed with hot chocolate milk made from real dark chocolate and cocoa, topped with whipped cream. A chocolate lover\'s coffee.',
    meta: 'Mocha: strong espresso mixed with hot milk melted with real dark chocolate and cocoa, and topped with whipped cream. The coffee for chocolate lovers.',
    kw: ['mocha', 'homemade mocha', 'cafe mocha', 'mocha coffee with real chocolate', 'how to make a mocha'],
    why: 'A mocha is a cafe latte with chocolate, and the name is older than the drink: Mocha is the Yemeni port from which coffee was shipped to Europe for centuries, and its beans were prized for a natural chocolate flavour, so a chocolate coffee took its name. The modern mocha, a shot of espresso with steamed milk and chocolate, became a coffeehouse standard in the 1980s and 1990s. Most cafe mochas rely on a sweet chocolate syrup, and the home version is better made with real chocolate, because it gives a deeper, less sugary flavour. Dark chocolate and cocoa are heated with milk and whisked until smooth, which makes a rich hot chocolate that is then joined with the coffee. The trick is balance. The coffee must be strong enough to be tasted through the milk and chocolate, and the chocolate must be bitter enough to make the drink not too sweet. Whipped cream and a dusting of cocoa are the finish.',
    ing: [
      '400 ml whole milk',
      '40 g dark chocolate (70 percent), finely chopped',
      '1 tbsp unsweetened cocoa powder',
      '2 tbsp caster sugar',
      '120 ml hot strong espresso or very strong coffee',
      '0.25 tsp vanilla extract',
      'Whipped cream, to top',
      'Cocoa powder, to dust'
    ],
    st: [
      'Heat the milk, chocolate, cocoa powder and sugar in a small saucepan over medium heat, whisking constantly, for 4 minutes, until the chocolate melts and the milk is steaming but not boiling.',
      'Take the pan off the heat, whisk in the vanilla, and whisk hard for 30 seconds to make it frothy.',
      'Pour the hot espresso into two large mugs.',
      'Pour the chocolate milk over the coffee, holding back the froth with a spoon, and spoon the froth on top.',
      'Top with whipped cream and a dusting of cocoa powder and serve at once.'
    ],
    tips: [
      'Use real dark chocolate as well as cocoa. The chocolate gives body and the cocoa gives depth, and syrups and mixes are mostly sugar.',
      'Whisk the milk rather than boiling it. Boiled milk forms a skin and turns the chocolate grainy, and whisking makes a light froth.',
      'Make the coffee strong. A weak brew vanishes under the milk and chocolate, and espresso or moka pot coffee holds its own.'
    ],
    pair: ['A croissant', 'Shortbread', 'A slice of banana bread'],
    store: 'Best drunk at once. The chocolate milk can be made ahead and kept in the fridge for 2 days, then reheated and whisked.',
    nut: [355, 9, 37, 19, 3, 32, 90]
  },

  'sausage-balls': {
    d: 'Pork sausage meat mixed with sharp cheddar and a soft biscuit dough, rolled into balls and baked until golden. The Southern party snack that disappears first.',
    meta: 'Sausage balls: pork sausage meat mixed with sharp cheddar and a soft biscuit dough, rolled into balls and baked until golden. A Southern party snack.',
    kw: ['sausage balls', 'sausage cheese balls', 'southern sausage balls', 'sausage balls with cheddar', 'how to make sausage balls'],
    why: 'Sausage balls are a Southern American party food, served at Christmas, at tailgates and at brunches, and the reason they vanish is that they are only three main ingredients, sausage, cheese and a biscuit dough, each doing a different job. The sausage supplies flavour, salt and fat, and it needs to be raw, bulk pork sausage, not links or precooked, because its fat melts into the dough as it bakes and makes the balls moist and rich. The sharp cheddar goes in generously, and it should be freshly grated from a block, because pre-shredded cheese is coated in starch and makes the mixture dry. The flour and baking powder are the binder and the lift, cut with a little cold butter, and just enough milk brings the mixture together. It is mixed with the hands, rolled into balls and baked, and the fat in the sausage cooks the dough from the inside. Eaten warm, they have crisp edges, soft middles and pockets of melted cheese.',
    ing: [
      '240 g self-raising flour',
      '60 g cold butter, cubed',
      '0.25 tsp cayenne pepper',
      '0.25 tsp fine salt',
      '450 g raw pork sausage meat',
      '300 g extra-sharp cheddar, freshly grated',
      '2 tbsp whole milk'
    ],
    st: [
      'Heat the oven to 190°C / 375°F and line two baking trays with baking paper.',
      'Rub the butter into the flour, cayenne and salt until it looks like coarse crumbs.',
      'Add the sausage meat, cheddar and milk and work everything together with your hands until the mixture holds together in a rough dough.',
      'Roll it into 36 balls, about 2.5 cm across, and set them on the trays 2 cm apart.',
      'Bake for 18 to 20 minutes, until golden brown and cooked through to 71°C / 160°F.',
      'Drain on kitchen paper and serve warm.'
    ],
    tips: [
      'Use raw bulk sausage. The fat it releases as it bakes is what makes the balls moist, and precooked sausage makes them dry.',
      'Grate the cheese yourself. Packaged shreds are coated with starch, and they make the dough dry and crumbly.',
      'Do not overmix. Working the dough more than you need toughens it, and the balls turn dense.'
    ],
    pair: ['Honey mustard for dipping', 'Scrambled eggs', 'A tomato salad'],
    store: 'Keep in the fridge for up to 4 days and reheat in a 180°C oven for 8 minutes. Freeze raw or baked for up to 3 months and bake from frozen for 5 minutes longer.',
    nut: [296, 13, 16, 20, 1, 1, 610]
  },

  'sazerac': {
    d: 'Rye whiskey stirred with sugar and Peychaud\'s bitters, strained into a glass rinsed with absinthe and finished with a lemon twist. The New Orleans cocktail, and the official drink of the city.',
    meta: 'Sazerac: rye whiskey stirred with sugar and Peychaud\'s bitters, strained into a glass rinsed with absinthe and finished with a lemon twist. From New Orleans.',
    kw: ['sazerac', 'sazerac cocktail', 'new orleans sazerac', 'classic sazerac recipe', 'how to make a sazerac'],
    why: 'The Sazerac is the cocktail of New Orleans, and in 2008 the Louisiana legislature made it the official cocktail of the city. Its history is tied to the Sazerac Coffee House in the French Quarter and to Antoine Peychaud, the Creole apothecary whose bitters give the drink its taste, and it began as a cognac drink, the base changing to rye whiskey after phylloxera destroyed the French vineyards in the 1870s and made cognac scarce. What makes it distinct is the absinthe rinse. A little absinthe is swirled around a chilled glass to coat the inside and the excess is tipped out, so that the drink is poured into a glass that smells of anise but tastes only of rye, sugar and bitters. The bitters are Peychaud\'s, which are lighter and more floral than Angostura, with a note of cherry and anise, and they are essential. The drink is stirred, not shaken, over ice for a silky, cold, spirit-forward finish and served without ice, with a lemon peel twisted over the top.',
    ing: [
      '60 ml rye whiskey',
      '1 sugar cube, or 1 tsp sugar syrup',
      '3 dashes Peychaud\'s bitters',
      '1 dash Angostura bitters, optional',
      '5 ml absinthe, for rinsing',
      'A handful of ice cubes',
      '1 strip of lemon peel'
    ],
    st: [
      'Fill a rocks glass with ice and a little water to chill it while you make the drink.',
      'In a mixing glass, crush the sugar cube with the bitters and a teaspoon of water, or stir the syrup with the bitters.',
      'Add the rye and fill the mixing glass with ice, then stir for 30 seconds, until very cold.',
      'Empty the ice from the rocks glass, pour in the absinthe and swirl it around to coat the inside, then tip out the excess.',
      'Strain the rye mixture into the absinthe-rinsed glass.',
      'Twist the lemon peel over the drink to release its oil, rub it round the rim, and drop it in or discard it.'
    ],
    tips: [
      'Rinse and discard the absinthe. Too much overpowers the whiskey with aniseed, and the point is a scent rather than a flavour.',
      'Use Peychaud\'s bitters. They are the signature of the drink, and Angostura alone makes a different, spicier cocktail.',
      'Stir and do not shake. Shaking makes the drink cloudy and dilutes it, and this is a drink that should be clear, silky and strong.'
    ],
    pair: ['Oysters', 'Beignets', 'Gumbo'],
    store: 'Best made and drunk at once.',
    nut: [167, 0, 4, 0, 0, 4, 5]
  },

  'tequila-sunrise': {
    d: 'Tequila and orange juice over ice, with grenadine poured slowly down the side of the glass so that it sinks and rises in a gradient from red to gold, like a sunrise.',
    meta: 'Tequila sunrise: tequila and orange juice over ice, with grenadine poured slowly down the side so it sinks and fades from red to gold like a sunrise.',
    kw: ['tequila sunrise', 'tequila sunrise cocktail', 'classic tequila sunrise', 'tequila sunrise with grenadine and orange juice', 'how to make a tequila sunrise'],
    why: 'The tequila sunrise is a cocktail that is drunk for its looks as much as its taste. The name comes from the layered colours, a bright red band at the base that fades through orange to a pale gold at the top, which look like a sunrise in a glass, and the effect is achieved with no more than physics. Grenadine, a thick pomegranate syrup, is much denser than orange juice, so when it is poured slowly down the inside of the glass it sinks straight to the bottom and stays there, forming the red layer, and it rises only slightly as it mixes. The drink is usually said to have been popularised in the 1970s, when it became a rock-and-roll favourite on the road, though an earlier version made with creme de cassis was served at the Arizona Biltmore in Phoenix. The drink is built in the glass with no shaking, which is what keeps the layers. Fresh orange juice makes it, since a carton of sweet, thin juice makes a drink that tastes like squash.',
    ing: [
      '60 ml blanco tequila',
      '120 ml fresh orange juice',
      '15 ml grenadine',
      'A handful of ice cubes',
      '1 orange slice and 1 cocktail cherry, to garnish'
    ],
    st: [
      'Fill a tall highball glass with ice.',
      'Pour in the tequila, then the orange juice, and stir gently once.',
      'Tilt the glass and pour the grenadine slowly down the inside, so that it sinks to the bottom.',
      'Do not stir. Garnish with the orange slice and cherry and serve with a straw.'
    ],
    tips: [
      'Pour the grenadine slowly down the side of the glass. It is heavy and sinks, and pouring it in the middle scatters it and clouds the colours.',
      'Use freshly squeezed orange juice. Carton juice is thin and sweet and the drink tastes flat.',
      'Do not stir after adding the grenadine. The layers are the whole idea, and the drinker mixes them as they sip.'
    ],
    pair: ['Tacos', 'Tortilla chips and guacamole', 'Grilled shrimp'],
    store: 'Best made and drunk at once. The colours blend within about 15 minutes.',
    nut: [236, 1, 25, 0, 0, 23, 5]
  }
};
