'use strict';

/**
 * VideoObject and Review schema — emitted only from real assets.
 *
 * Both of these types make a claim about something that exists: a video someone
 * can watch, a review someone actually wrote. Structured data is where those
 * claims are made in a form a machine acts on, so this file's whole job is to
 * emit nothing when the thing is not there.
 *
 * That is not caution for its own sake. Google's policy requires review markup
 * to describe reviews visible on the page and genuinely collected, and a
 * VideoObject to point at a real video; and in the UK and US, publishing
 * invented reviews of your own product is regulated conduct, not merely a
 * ranking risk.
 *
 * So: add a `video` block to a recipe's detail record and the VideoObject
 * appears. Put real reviews in src/data/reviews.json and the Review objects and
 * an honest aggregateRating appear. Until then the page carries neither, which
 * is the correct description of a page that has neither.
 */

/* A VideoObject needs all of these to be eligible for anything, and a
   half-filled one is worse than none: it asserts a video and then fails to
   produce it. Anything missing is a build error rather than a silent omission. */
const VIDEO_REQUIRED = ['name', 'description', 'thumbnailUrl', 'uploadDate'];

/** ISO 8601 duration from seconds: 330 -> "PT5M30S". */
function isoDuration(seconds) {
  if (!seconds) return undefined;
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `PT${m ? `${m}M` : ''}${s ? `${s}S` : ''}` || undefined;
}

/**
 * @param {object} recipe  a built recipe; `video` is optional
 * @param {string} origin  absolute site origin, for relative asset paths
 * @returns {object|null}
 */
function videoSchema(recipe, origin = '') {
  const video = recipe.video;
  if (!video) return null;

  const missing = VIDEO_REQUIRED.filter(field => !video[field]);
  if (missing.length) {
    throw new Error(`"${recipe.slug}" has a video block missing: ${missing.join(', ')}`);
  }
  if (!video.contentUrl && !video.embedUrl) {
    throw new Error(`"${recipe.slug}" video needs contentUrl or embedUrl`);
  }

  const absolute = url => (url && !/^https?:/.test(url) ? `${origin}${url}` : url);
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: video.name,
    description: video.description,
    thumbnailUrl: [].concat(video.thumbnailUrl).map(absolute),
    uploadDate: video.uploadDate,
    ...(video.duration ? { duration: isoDuration(video.duration) } : {}),
    ...(video.contentUrl ? { contentUrl: absolute(video.contentUrl) } : {}),
    ...(video.embedUrl ? { embedUrl: absolute(video.embedUrl) } : {})
  };
}

/* A review needs an author, a rating and words. A star with no text is a vote,
   not a review, and marking it up as one overstates what the reader left. */
const REVIEW_REQUIRED = ['author', 'rating', 'body', 'date'];

/**
 * Review objects and the aggregate they add up to.
 *
 * The aggregate is computed here rather than taken from the catalogue on
 * purpose: a rating figure that is not the average of visible reviews is a
 * number nobody can check.
 *
 * @param {object[]} reviews  entries for one recipe, may be empty
 * @param {string} slug       for error messages
 * @returns {{reviews: object[], aggregate: object|null}}
 */
function reviewSchema(reviews, slug) {
  const list = (reviews || []).filter(Boolean);
  if (!list.length) return { reviews: [], aggregate: null };

  for (const review of list) {
    const missing = REVIEW_REQUIRED.filter(field => review[field] === undefined || review[field] === '');
    if (missing.length) {
      throw new Error(`"${slug}" has a review missing: ${missing.join(', ')}`);
    }
    if (!(review.rating >= 1 && review.rating <= 5)) {
      throw new Error(`"${slug}" has a review rated ${review.rating}, outside 1-5`);
    }
  }

  const total = list.reduce((sum, review) => sum + Number(review.rating), 0);
  return {
    reviews: list.map(review => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: review.author },
      datePublished: review.date,
      reviewBody: review.body,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: String(review.rating),
        bestRating: '5',
        worstRating: '1'
      }
    })),
    aggregate: {
      '@type': 'AggregateRating',
      ratingValue: (total / list.length).toFixed(1),
      reviewCount: list.length,
      bestRating: '5',
      worstRating: '1'
    }
  };
}

module.exports = { videoSchema, reviewSchema, isoDuration, VIDEO_REQUIRED, REVIEW_REQUIRED };
