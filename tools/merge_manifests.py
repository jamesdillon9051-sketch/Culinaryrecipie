#!/usr/bin/env python3
"""Folds sharded image manifests back into src/data/images.json.

The fetcher rewrites its manifest whole after every recipe, so several workers
sharing one file would each overwrite the others' entries. Instead each worker
writes its own, and this merges them.

Merge rule: a shard may fill a slot the main manifest has empty, and may not
replace a photograph already recorded there. Heroes on this site are checked by
eye, and a later search can return a worse image for the same dish — so an
existing entry wins, and a shard that disagrees is reported rather than applied.

    python3 tools/merge_manifests.py /tmp/shard-*.json
    python3 tools/merge_manifests.py --dry-run /tmp/shard-*.json
"""

import argparse, json, os, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MANIFEST = os.path.join(ROOT, "src", "data", "images.json")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("shards", nargs="+")
    ap.add_argument("--dry-run", action="store_true")
    args = ap.parse_args()

    main_manifest = json.load(open(MANIFEST))
    added, skipped, conflicts = 0, 0, []

    for path in args.shards:
        if not os.path.exists(path):
            print(f"  missing, skipped: {path}")
            continue
        shard = json.load(open(path))
        for slug, entry in shard.items():
            if not isinstance(entry, dict):
                continue
            existing = main_manifest.get(slug) or {}
            if existing.get("skip"):
                skipped += 1
                continue
            if existing.get("hero"):
                # Only worth reporting when the shard actually found something
                # different; both having the same image is the normal case.
                if entry.get("hero") and \
                        (entry["hero"].get("page") != existing["hero"].get("page")):
                    conflicts.append(slug)
                skipped += 1
                continue
            if entry.get("hero"):
                main_manifest[slug] = entry
                added += 1

    if not args.dry_run:
        json.dump(main_manifest, open(MANIFEST, "w"), indent=1)

    print(f"{'would add' if args.dry_run else 'added'}: {added}   "
          f"left alone: {skipped}")
    if conflicts:
        print(f"kept the existing photograph for {len(conflicts)} slug(s) a shard "
              f"also matched: {', '.join(conflicts[:12])}")
    have = sum(1 for v in main_manifest.values() if (v or {}).get("hero"))
    print(f"manifest now holds {have} heroes")


if __name__ == "__main__":
    main()
