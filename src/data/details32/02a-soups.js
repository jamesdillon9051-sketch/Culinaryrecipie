'use strict';

/**
 * Volume thirty-two — soups.
 *
 * Seven soups built on vegetables, with no potato, rice or pasta to push the
 * carbohydrate up: cream of broccoli, zucchini, spinach and asparagus, and
 * three that carry meat, chicken and vegetable, beef and vegetable, and a
 * chicken pot pie soup. Stock is unsalted throughout, so the cook sets the
 * sodium, and none of them is thickened with flour.
 */

module.exports = {
  'cream-of-broccoli-soup': {
    d: 'A smooth, pale green broccoli soup finished with half-and-half and a squeeze of lemon, with no flour or potato. Four servings in 35 minutes.',
    meta: 'Cream of broccoli soup with no flour or potato: broccoli simmered with onion and garlic, blended and finished with half-and-half and lemon.',
    kw: ['cream of broccoli soup', 'diabetic friendly broccoli soup', 'low carb cream of broccoli soup', 'gluten free broccoli soup', 'easy cream of broccoli soup'],
    why: 'Why does broccoli soup so often taste dull and look grey? Because it is cooked too long. Twelve minutes at a simmer is enough to make the florets tender, and anything beyond that turns the colour olive and the flavour sulphurous.\n\nThere is no flour and no potato in this pot. The broccoli itself, stems included, thickens the soup once it is blended, and half-and-half added at the end gives the cream without the carbohydrate a roux would bring. **Keep the lid off** while it simmers, since steam trapped under a lid dulls the green. Blend until smooth. Then taste before you add salt, because the stock is unsalted and the soup needs very little.\n\nLemon brightens everything. A pinch of nutmeg adds warmth, and a few drops of olive oil on top finish the bowl. Serve it hot with a slice of wholegrain bread, and eat any leftovers within four days.',
    ing: [
      '1 tbsp olive oil',
      '100 g onion, chopped',
      '2 garlic cloves, minced',
      '600 g broccoli, cut into small florets, stems peeled and chopped',
      '600 ml unsalted vegetable stock',
      '150 ml half-and-half',
      '¼ tsp ground nutmeg',
      '½ tsp salt',
      '¼ tsp black pepper',
      '1 tbsp lemon juice'
    ],
    st: [
      'Heat the olive oil in a large saucepan over medium heat. Cook the onion for 5 minutes, until soft, then add the garlic and cook for 30 seconds more.',
      'Add the broccoli and the stock and bring to a boil. Lower the heat and simmer, uncovered, for 12 minutes, until the stems are tender.',
      'Blend the soup with a stick blender, or in batches in a blender, until completely smooth.',
      'Stir in the half-and-half, nutmeg, salt, pepper and lemon juice and warm gently for 2 minutes without letting it boil. Taste and adjust the seasoning.'
    ],
    tips: [
      'Peel the thick broccoli stems; the tough skin does not blend smooth.',
      'If the soup is thicker than you like, thin it with a splash of stock rather than water.',
      'Blend hot soup in batches with the lid ajar and a cloth over it, so the steam can escape.',
      'Reheat gently; boiling splits the half-and-half.'
    ],
    pair: ['A slice of wholegrain bread', 'A green salad', 'A spoonful of plain yogurt'],
    store: 'Keeps in the fridge for up to 4 days. Freezes for up to 2 months without the half-and-half; stir it in after reheating.',
    nut: [173, 7, 16, 9, 4, 6, 420]
  },

  'chicken-vegetable-soup': {
    d: 'A clear chicken soup packed with carrot, celery, green beans and zucchini, with no noodles or rice. Six servings in 50 minutes.',
    meta: 'Chicken vegetable soup without noodles: poached chicken breast, carrot, celery, green beans and zucchini in unsalted stock. Six servings.',
    kw: ['chicken vegetable soup', 'diabetic friendly chicken soup', 'chicken soup without noodles', 'gluten free chicken vegetable soup', 'easy chicken vegetable soup'],
    why: 'It is chicken noodle soup without the noodles. Nobody misses them: vegetables take their place and make the pot more filling, with the chicken adding the protein. The whole pot is ready in under an hour.\n\nThis one is poached rather than boiled. The chicken breasts go into the pot whole, simmer gently for 20 minutes and are lifted out to be shredded, which keeps the meat tender instead of stringy. Carrot and celery go in first, because they need the longest, and the green beans and zucchini follow so they stay bright. **Skim the surface now and then** for a clear broth. Season at the end, since the stock is unsalted.\n\nShred the chicken with two forks. Return it to the pot with the parsley. Eat the soup the same day, or keep it for lunches; it improves overnight as the flavours settle. A squeeze of lemon at the table wakes it up.',
    ing: [
      '1 tbsp olive oil',
      '150 g onion, diced',
      '200 g carrots, sliced',
      '150 g celery, sliced',
      '2 garlic cloves, minced',
      '2 litres unsalted chicken stock',
      '450 g skinless chicken breast',
      '200 g green beans, trimmed and cut into 3 cm pieces',
      '200 g zucchini, diced',
      '2 bay leaves',
      '1 tsp dried thyme',
      '¾ tsp salt',
      '¼ tsp black pepper',
      '2 tbsp chopped fresh parsley'
    ],
    st: [
      'Heat the olive oil in a large pot over medium heat. Cook the onion, carrots and celery for 6 minutes, until the onion is soft, then add the garlic and cook for 30 seconds.',
      'Pour in the stock, add the chicken, bay leaves and thyme and bring to a boil. Lower the heat and simmer gently for 20 minutes, until the chicken is cooked through.',
      'Lift the chicken onto a board and shred it with two forks. Add the green beans and zucchini to the pot and simmer for 8 minutes, until tender.',
      'Return the chicken to the pot, season with the salt and pepper, remove the bay leaves and stir in the parsley.'
    ],
    tips: [
      'Keep the heat low enough that the surface barely moves; a hard boil toughens the chicken.',
      'Cut the vegetables to a similar size so they cook at the same rate.',
      'Taste before you season, since the stock and the vegetables add their own flavour.'
    ],
    pair: ['A slice of wholegrain toast', 'A handful of baby spinach stirred in', 'Lemon wedges'],
    store: 'Keeps in the fridge for up to 4 days. Freezes for up to 3 months.',
    nut: [181, 22, 12, 5, 3, 6, 510]
  },

  'beef-vegetable-soup': {
    d: 'A tomato-tinged beef soup with carrot, celery, cabbage and green beans, built on browned beef and unsalted stock. Six servings in 75 minutes.',
    meta: 'Beef vegetable soup: browned lean beef simmered with carrot, celery, cabbage and green beans in unsalted stock. Six hearty servings.',
    kw: ['beef vegetable soup', 'vegetable beef soup', 'diabetic friendly beef vegetable soup', 'gluten free beef vegetable soup', 'easy beef vegetable soup'],
    why: 'Brown the beef first. Most beef soups taste thin because the meat went in pale, and a few minutes in a hot pan gives the broth the depth that a pale simmer never will.\n\nBrown the cubes in batches so they colour rather than steam. Do not crowd the pan. Then add the vegetables to the same pot and scrape up the browned bits. Tomato paste goes in next and cooks for a minute, which deepens its flavour, and beef sirloin is lean, so it needs an hour to turn tender while the cabbage and green beans join near the end. **Salt only at the end**, because the stock is unsalted and the beef gives up a good deal of its own.\n\nThere is no potato or barley here, so the carbohydrate stays modest. Cabbage supplies the bulk. A bowl is plenty for lunch with a slice of rye on the side.',
    ing: [
      '1 tbsp olive oil',
      '450 g lean beef sirloin, cut into 2 cm cubes',
      '150 g onion, diced',
      '200 g carrots, sliced',
      '150 g celery, sliced',
      '2 garlic cloves, minced',
      '2 tbsp tomato paste',
      '1.5 litres unsalted beef stock',
      '300 g green cabbage, shredded',
      '200 g green beans, trimmed and cut into 3 cm pieces',
      '1 tsp dried thyme',
      '2 bay leaves',
      '¾ tsp salt',
      '¼ tsp black pepper',
      '2 tbsp chopped fresh parsley'
    ],
    st: [
      'Heat the olive oil in a large pot over medium-high heat. Brown the beef in two batches for 4 minutes each, then lift it out onto a plate.',
      'Add the onion, carrots and celery to the pot and cook for 5 minutes, scraping up the browned bits. Stir in the garlic and tomato paste and cook for 1 minute.',
      'Return the beef, pour in the stock and add the thyme and bay leaves. Bring to a boil, lower the heat and simmer, partly covered, for 40 minutes.',
      'Add the cabbage and green beans and simmer for 15 minutes more, until the beef is tender. Remove the bay leaves, season with the salt and pepper and stir in the parsley.'
    ],
    tips: [
      'Pat the beef dry with kitchen paper before browning; wet meat steams.',
      'If the beef is not tender at 40 minutes, keep simmering and add a splash of stock.',
      'Skim any foam from the surface in the first few minutes for a clearer broth.',
      'Cool leftovers quickly and refrigerate within two hours.'
    ],
    pair: ['A slice of rye bread', 'A green salad', 'Plain yogurt with chives'],
    store: 'Keeps in the fridge for up to 4 days. Freezes for up to 3 months.',
    nut: [221, 21, 14, 9, 5, 7, 500]
  },

  'zucchini-soup': {
    d: 'A bright green soup of zucchini, spinach and basil, blended smooth and finished with a little Parmesan. Four servings in 35 minutes.',
    meta: 'Zucchini soup: zucchini, spinach and fresh basil simmered in unsalted stock and blended smooth with a little Parmesan. Ready in 35 minutes.',
    kw: ['zucchini soup', 'diabetic friendly zucchini soup', 'low carb zucchini soup', 'gluten free zucchini soup', 'easy zucchini soup'],
    why: 'Do not peel the zucchini. The skin carries the colour, and a peeled zucchini gives a soup the shade of weak tea.\n\nZucchini is mostly water. That makes it a delicate soup and a quick one. Cut it into chunks of about the same size so everything softens together, and it needs only ten minutes at a simmer before it falls apart and blends into something silky without any cream. A handful of spinach deepens the green, and fresh basil goes in at the very end, because long cooking turns its flavour flat. **Add the basil after blending** for the sharpest perfume. A little Parmesan stirred in thickens the soup slightly and adds the saltiness it needs.\n\nServe it hot or cold. In a warm kitchen it is a good lunch straight from the fridge. A few drops of olive oil and a twist of black pepper finish the bowl.',
    ing: [
      '1 tbsp olive oil',
      '100 g onion, chopped',
      '2 garlic cloves, minced',
      '800 g zucchini, chopped',
      '600 ml unsalted vegetable stock',
      '60 g baby spinach',
      '15 g fresh basil leaves',
      '30 g grated Parmesan',
      '¼ tsp salt',
      '¼ tsp black pepper',
      '1 tbsp lemon juice'
    ],
    st: [
      'Heat the olive oil in a large saucepan over medium heat. Cook the onion for 5 minutes, until soft, then stir in the garlic for 30 seconds.',
      'Add the zucchini and stock, bring to a boil and simmer for 10 minutes, until the zucchini is very tender.',
      'Stir in the spinach and cook for 1 minute until wilted. Take the pan off the heat.',
      'Add the basil, Parmesan, salt, pepper and lemon juice and blend until smooth. Taste and adjust the seasoning, and reheat gently if needed.'
    ],
    tips: [
      'Chop the zucchini evenly so it all softens at the same time.',
      'If the soup looks watery, simmer it uncovered for 5 more minutes before blending.',
      'Cool the soup quickly if you plan to eat it cold; the green fades the longer it stays warm.'
    ],
    pair: ['A grilled cheese on wholegrain bread', 'A boiled egg', 'A drizzle of olive oil'],
    store: 'Keeps in the fridge for up to 3 days. Freezes for up to 2 months.',
    nut: [139, 8, 11, 7, 3, 7, 350]
  },

  'creamy-spinach-soup': {
    d: 'A silky green soup of spinach and cauliflower, blended with a splash of half-and-half and a pinch of nutmeg. Four servings in 30 minutes.',
    meta: 'Creamy spinach soup: spinach and cauliflower blended silky with half-and-half and nutmeg, no flour needed. Four servings in 30 minutes.',
    kw: ['creamy spinach soup', 'diabetic friendly spinach soup', 'low carb spinach soup', 'gluten free spinach soup', 'easy spinach soup'],
    why: 'Add the spinach last. Heat dulls it quickly, and spinach that goes in at the start of the simmer gives a soup the colour of old moss.\n\nCauliflower does the thickening. Simmered with onion and garlic in unsalted stock, it softens into a base that blends as smooth as cream, with no flour or potato in sight. The spinach goes in for a minute only, just long enough to wilt. A splash of half-and-half and a pinch of nutmeg round the flavour. **Blend it straight away** while the colour is at its brightest, and taste before you add salt. A blender gives a finer purée than a stick blender, if you have one.\n\nGentle is the word for it. The soup is mild and green, and a good place to start for anyone who thinks they dislike spinach. Stir in a squeeze of lemon at the end to lift it. Serve with a poached egg floating on top for a fuller meal.',
    ing: [
      '1 tbsp olive oil',
      '100 g onion, chopped',
      '2 garlic cloves, minced',
      '200 g cauliflower florets',
      '600 ml unsalted vegetable stock',
      '300 g baby spinach',
      '100 ml half-and-half',
      '¼ tsp ground nutmeg',
      '½ tsp salt',
      '¼ tsp black pepper',
      '1 tbsp lemon juice'
    ],
    st: [
      'Heat the olive oil in a large saucepan over medium heat. Cook the onion for 5 minutes, until soft, then stir in the garlic for 30 seconds.',
      'Add the cauliflower and stock, bring to a boil and simmer for 10 minutes, until the cauliflower is very tender.',
      'Add the spinach and cook for 1 minute, pushing it under the liquid until it wilts.',
      'Blend until completely smooth, then stir in the half-and-half, nutmeg, salt, pepper and lemon juice. Warm gently without boiling.'
    ],
    tips: [
      'Wash the spinach well; grit shows up in a smooth soup.',
      'If the soup is too thick, add stock a few tablespoons at a time.',
      'Serve it straight away for the best colour.'
    ],
    pair: ['A poached egg', 'A slice of wholegrain toast', 'A few toasted pumpkin seeds'],
    store: 'Keeps in the fridge for up to 3 days. The colour fades a little on standing.',
    nut: [127, 6, 10, 7, 3, 4, 440]
  },

  'asparagus-soup': {
    d: 'A delicate green soup of asparagus and leek, blended smooth with half-and-half and lemon, with no flour or potato. Four servings in 35 minutes.',
    meta: 'Asparagus soup: tender asparagus and leek blended silky smooth with half-and-half and a little lemon, with no flour or potato. Four servings.',
    kw: ['asparagus soup', 'cream of asparagus soup', 'diabetic friendly asparagus soup', 'low carb asparagus soup', 'gluten free asparagus soup'],
    why: 'Trust your nose. When the pot smells sweet and grassy rather than sharp, a few minutes after the asparagus goes in, the spears are done and ready to blend.\n\nAsparagus does not need a thickener. Its fibres break down into a smooth purée that holds up on a spoon, and a leek softened in butter gives the soup its gentle sweetness. Trim the woody ends, which are tough and fibrous, and peel the lower stalks if they are thick. Keep the tips to one side. **Reserve the tips for the garnish**, simmered for two minutes in the soup and spooned on top. A splash of half-and-half enriches it without making it heavy.\n\nStrain it for a finer texture. A good soup tastes of asparagus and little else, with lemon to sharpen it. Serve it warm in small bowls. It makes a light lunch or a starter, and chives on top add a mild onion note.',
    ing: [
      '1 tbsp butter',
      '100 g leek, white and pale green part, sliced',
      '2 garlic cloves, minced',
      '600 g asparagus, woody ends trimmed and spears cut into 3 cm pieces',
      '600 ml unsalted vegetable stock',
      '100 ml half-and-half',
      '1 tsp fresh thyme leaves',
      '¼ tsp salt',
      '¼ tsp black pepper',
      '1 tbsp lemon juice'
    ],
    st: [
      'Melt the butter in a large saucepan over medium heat. Cook the leek for 5 minutes, until soft but not coloured, then add the garlic and cook for 30 seconds.',
      'Add the asparagus, saving about a dozen tips, with the stock and thyme. Bring to a boil and simmer for 10 minutes, until the stalks are very tender.',
      'Blend until completely smooth. Return the soup to the pan and stir in the half-and-half, salt, pepper and lemon juice.',
      'Add the reserved tips and warm gently for 2 minutes. Taste, adjust the seasoning and serve hot.'
    ],
    tips: [
      'Snap the spears and let them break where they want to; the tough part stays behind.',
      'If the soup has threads, press it through a sieve for a finer texture.',
      'Reheat gently so the half-and-half does not curdle.'
    ],
    pair: ['A slice of wholegrain bread', 'A soft-boiled egg', 'Fresh chives'],
    store: 'Keeps in the fridge for up to 3 days. Freezes for up to 2 months without the half-and-half.',
    nut: [126, 6, 12, 6, 4, 5, 230]
  },

  'chicken-pot-pie-soup': {
    d: 'All the filling of a chicken pot pie in a creamy soup, with carrots, celery, green beans and thyme, and no pastry. Six servings in 45 minutes.',
    meta: 'Chicken pot pie soup: tender chicken, carrots, celery and green beans in a creamy thyme broth, with no crust. Six servings in 45 minutes.',
    kw: ['chicken pot pie soup', 'diabetic friendly chicken pot pie soup', 'low carb chicken pot pie soup', 'creamy chicken soup without pastry', 'easy chicken pot pie soup'],
    why: 'Keep the filling, lose the crust. On the first cold evening, when a pot pie sounds right and the pastry does not, this soup gives you the comfort with most of the carbohydrate left out.\n\nOnion, carrot and celery softened in butter make the base, and the chicken breasts simmer in the unsalted stock beside them. Cut the vegetables small so they cook evenly. Once cooked, the chicken comes out to be shredded. Half-and-half and a spoonful of cornflour dissolved in cold water turn the broth thick and creamy. **Add the cornflour slowly.** It needs a minute at the bubble to lose its raw taste.\n\nThyme is the only herb and the right one. Taste the soup before you season, since the stock is unsalted and a pinch goes a long way. A spoonful of parsley on top finishes the bowl. Serve it in warm bowls. It tastes best a day later.',
    ing: [
      '1 tbsp butter',
      '150 g onion, diced',
      '150 g carrots, diced',
      '100 g celery, diced',
      '2 garlic cloves, minced',
      '1.2 litres unsalted chicken stock',
      '450 g skinless chicken breast',
      '150 g green beans, trimmed and cut into 2 cm pieces',
      '1 tsp dried thyme',
      '240 ml half-and-half',
      '2 tbsp cornflour',
      '¾ tsp salt',
      '¼ tsp black pepper',
      '1 tbsp chopped fresh parsley'
    ],
    st: [
      'Melt the butter in a large pot over medium heat. Cook the onion, carrots and celery for 6 minutes, until softened, then stir in the garlic and thyme for 30 seconds.',
      'Add the stock and chicken, bring to a boil, then lower the heat and simmer for 20 minutes, until the chicken is cooked through.',
      'Lift the chicken onto a board and shred it. Add the green beans to the pot and simmer for 5 minutes.',
      'Whisk the cornflour with 3 tablespoons of cold water and stir it into the soup with the half-and-half. Simmer for 2 minutes, stirring, until thickened.',
      'Return the chicken to the pot, season with the salt and pepper and stir in the parsley.'
    ],
    tips: [
      'Dissolve the cornflour in cold liquid first; stirred in dry, it forms lumps.',
      'If the soup is too thick, thin it with a splash of stock.',
      'Reheat it gently, since boiling can split the half-and-half.',
      'Taste before you season; the stock carries no salt of its own.'
    ],
    pair: ['A green salad', 'A slice of wholegrain bread', 'Fresh parsley'],
    store: 'Keeps in the fridge for up to 4 days. Freezes for up to 2 months, though the texture is best fresh.',
    nut: [217, 21, 13, 9, 2, 5, 460]
  }
};
