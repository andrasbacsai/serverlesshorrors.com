---
title: $36,000
description: RetainDB side project with 81 users hit a $36k Cloudflare bill — 16B Durable Object writes from a runaway queue loop, unbatched DO writes, and a KV list scan on every request...
tags:
  - cloudflare
  - workers
  - durable-objects
  - kv
  - queues
author: Andras Bacsai
authorTwitter: heyandras
date: "2026-05-02T12:00:00.000Z"
image: /assets/cloudflare-36k.png
category: development
isNew: false
---

---

[Original post](https://www.reddit.com/r/CloudFlare/comments/1t1e8nh/i_accidentally_generated_16_billion_durable/)

Conclusion: Fixes deployed. Bill sent to Cloudflare support with full explanation. Unknown if Cloudflare will credit it.

---

__tldr: RetainDB (memory layer for AI agents on Cloudflare Workers + KV + Durable Objects + Queues) with 81 users racked up $36k in one month — 3.13B KV writes ($15,635), 16.62B KV reads ($8,306), 4.01B DO storage rows written ($3,962), 574M KV list ops ($2,870) — caused by three compounding bugs: an infinite queue loop passing `write_mode: "async"` back into itself, 12 unbatched DO `storage.put()` calls per memory write, and a `kv.list()` scan running on 95% of auth requests because legacy keys missed the hash/prefix indexes.__

---

The three bugs:

**Bug #1 — Infinite queue loop ($15k):** Ingest worker forwarded the original `write_mode` to its internal API call. `async` got re-queued every time. Fix: force `write_mode: "sync"` on internal calls.

**Bug #2 — 4B DO writes ($4k):** 12 unbatched `storage.put()` calls per memory write across pending overlay, job state, and acks. Fix: removed all DO writes from ingest worker. Pending overlay TTL handles expiry. Dropped 12 → 2.

**Bug #3 — KV list scan on every request ($2.8k):** Auth fallback ran `kv.list()` when hash/prefix lookups missed. Legacy keys missed both indexes — 574M list ops. Fix: `LEGACY_API_KEY_SCAN_ENABLED = "false"`.

Lessons:

- Never pass user-facing write modes through to internal queue workers. Queue consumer IS the async handler.
- Durable Object `storage.put()` is not cheap at scale. Batch everything. Use TTLs instead of explicit deletes.
- Any fallback that touches `kv.list()` runs on every request in practice. KV list is $5/million.
- Set up Cloudflare spending alerts before you need them. There's no hard spending cap on Workers.
