#!/usr/bin/env node
'use strict';
/** Minimal static server for previewing the generated site: `npm run serve`. */
const http = require('http');
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const ROOT = path.join(__dirname, '..');   /* the site is generated at the repo root */
const PORT = process.env.PORT || 4173;
const TYPES = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8', '.json': 'application/json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8', '.txt': 'text/plain; charset=utf-8',
  '.webp': 'image/webp', '.jpg': 'image/jpeg', '.png': 'image/png', '.svg': 'image/svg+xml', '.woff2': 'font/woff2'
};
/* Compressed the way the live host compresses them, so a preview measured with
   Lighthouse reflects the bytes a visitor really downloads. */
const COMPRESSIBLE = new Set(['.html', '.css', '.js', '.json', '.xml', '.txt', '.svg']);

http.createServer((req, res) => {
  let url;
  try {
    url = decodeURIComponent(req.url.split('?')[0]);
  } catch (e) {
    /* Malformed percent-encoding (e.g. "GET /%") throws URIError, which would
       otherwise take the whole server down. */
    res.writeHead(400, { 'Content-Type': 'text/plain' }).end('Bad request');
    return;
  }
  if (url.indexOf('\0') !== -1) { res.writeHead(400).end('Bad request'); return; }

  let file = path.join(ROOT, url);
  if (file !== ROOT && !file.startsWith(ROOT + path.sep)) {
    res.writeHead(403).end('Forbidden');
    return;
  }
  try {
    if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, 'index.html');
    if (!fs.existsSync(file)) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(fs.readFileSync(path.join(ROOT, '404.html')));
      return;
    }
    const ext = path.extname(file);
    const headers = { 'Content-Type': TYPES[ext] || 'application/octet-stream' };
    let body = fs.readFileSync(file);
    if (COMPRESSIBLE.has(ext) && /\bgzip\b/.test(req.headers['accept-encoding'] || '')) {
      body = zlib.gzipSync(body);
      headers['Content-Encoding'] = 'gzip';
      headers.Vary = 'Accept-Encoding';
    }
    res.writeHead(200, headers);
    res.end(body);
  } catch (e) {
    res.writeHead(500, { 'Content-Type': 'text/plain' }).end('Server error');
  }
}).listen(PORT, () => console.log(`Weekly Delight preview: http://localhost:${PORT}`));
