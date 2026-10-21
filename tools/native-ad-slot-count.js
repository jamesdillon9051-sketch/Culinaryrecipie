'use strict';

/** Count real native ad embeds, without counting source URLs in photo credits. */
module.exports = function nativeAdSlotCount(html) {
  const markup = String(html).replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<script\b[^>]*>[\s\S]*?<\/script\s*>/gi, '');
  const attribute = (tag, name) => {
    const match = tag.match(new RegExp('\\s' + name + '\\s*=\\s*(["\\\'])([\\s\\S]*?)\\1', 'i'));
    return match ? match[2] : '';
  };
  return (markup.match(/<(?:div|iframe)\b[^>]*>/gi) || []).filter(tag => {
    if (/^<div\b/i.test(tag)) return /^container-[\w-]+$/.test(attribute(tag, 'id'));
    const src = attribute(tag, 'src').split(/[?#]/)[0];
    return /(?:^|\/)assets\/ads\/native-banner\.html$/.test(src);
  }).length;
};
