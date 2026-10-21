'use strict';
const assert = require('node:assert/strict');
const count = require('./native-ad-slot-count');
const direct = '<div id="container-f30ffc4b87049d66ff2e2bd03e77caf9"></div>';
const framed = "<iframe src='/assets/ads/native-banner.html' title='Advertisement'></iframe>";
const photo = '<a href="https://www.pexels.com/photo/banana-bread-in-a-white-container-11481927/">Photo</a>';
assert.equal(count(direct + framed + photo + '<script type="application/ld+json">{"url":"container-11481927"}</script>'), 2);
assert.equal(count(photo), 0);
assert.equal(count(direct), 1); // A missing lower slot must still fail coverage.
assert.equal(count(framed), 1); // A missing upper slot must still fail coverage.
assert.equal(count(direct + framed + framed), 3);
assert.equal(count('<!--' + direct + '--><script>const example = ' + JSON.stringify(framed) + ';</script>'), 0);
assert.equal(count('<div data-id="container-example"></div><a href="/assets/ads/native-banner.html">Link</a>'), 0);
assert.equal(count('<iframe src="/assets/ads/native-banner.html?v=abc"></iframe>'), 1);
console.log('8 native-ad coverage regressions passed');
