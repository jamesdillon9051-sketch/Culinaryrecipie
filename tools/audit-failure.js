'use strict';
/* A crashed/skipped child audit must never become a successful site check. */
function auditFailure(script, error) {
  const stdout = String(error.stdout || '');
  const lines = stdout.split('\n').filter(line => line.trim().startsWith('✗'))
    .map(line => `${script}: ${line.replace(/^\s*✗\s*/, '')}`);
  if (lines.length) return lines;
  const detail = String(error.stderr || stdout || error.message || 'no diagnostic output').trim().slice(-1200);
  return [`${script} failed (${error.code || error.status || error.signal || 'unknown exit'}): ${detail}`];
}
module.exports = { auditFailure };
