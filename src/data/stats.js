'use strict';

/* Counts derived from the catalogues rather than written into copy, so the
   headline numbers on the site can never drift from the actual data. */
const catalog = [...require('./catalog'), ...require('./catalog-2'),
                 ...require('./catalog-3')];

module.exports = {
  recipeCount: catalog.length,
  cuisineCount: new Set(catalog.map(r => r.cuisine)).size,
  categoryCount: new Set(catalog.map(r => r.category)).size
};
