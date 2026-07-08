---
title: "UUID v4 vs UUID v7: Which One Should You Use?"
description: "Compare UUID v4 and UUID v7: random vs time-ordered, database performance, sortability, and when to choose each. Includes practical code examples in JS, Python, and PostgreSQL."
tags: [webdev, javascript, tutorial, database]
canonical_url: https://devtoolshub-seven.vercel.app/blog/uuid-v4-vs-v7
published: true
cover_image: https://devtoolshub-seven.vercel.app/og-image.png
---

> Originally published on [DevToolsHub](https://devtoolshub-seven.vercel.app/blog/uuid-v4-vs-v7) — free, privacy-first online tools for developers.

UUIDs (Universally Unique Identifiers) are everywhere in modern software development. But not all UUIDs are created equal. With the introduction of **UUID v7** in RFC 9562 (May 2024), developers now have a compelling alternative to the ubiquitous UUID v4.

In this guide, we'll compare UUID v4 and UUID v7 across performance, database impact, sortability, and real-world use cases — so you can make the right choice for your next project.

💡 **Quick Try:** Use our free [UUID Generator](https://devtoolshub-seven.vercel.app/tools/uuid-generator) to generate UUID v4 and v7 right in your browser.

---

## What is UUID v4?

UUID v4 is the most commonly used UUID version. It generates **122 bits of random data**, making it effectively unique for practical purposes. The probability of collision is so low (about 1 in 5.3×10³⁶) that you can generate billions per second without worrying.

```
550e8400-e29b-41d4-a716-446655440000  (v4 example)
# The "4" in position 13 indicates UUID v4
# The version nibble (4) and variant (10xx) are fixed
# Everything else is random
```

**Pros:** Simple, battle-tested, available everywhere. Doesn't leak timing information.

**Cons:** Completely random — no natural ordering. This wreaks havoc on B-tree database indexes because new rows get inserted at random positions instead of appended.

## What is UUID v7?

UUID v7 is the new kid on the block. It encodes a **48-bit Unix timestamp (millisecond precision)** as its most significant bits, followed by random data. This makes v7 UUIDs **time-sortable** — you can sort them by creation time without storing a separate timestamp column.

```
018f0a56-1234-7b00-8a00-123456789abc  (v7 example)
# "018f0a56-1234" = Unix timestamp in milliseconds
# The "7" in position 13 indicates UUID v7
# Remaining bits are random for uniqueness
```

**Pros:** Time-ordered = database-friendly. Monotonically increasing = great for B-tree indexes. Encodes creation time without an extra column.

**Cons:** Newer standard — not all languages/libraries support it yet. Leaks approximate creation time (like auto-increment IDs).

## Head-to-Head Comparison

| Feature | UUID v4 | UUID v7 |
|---------|---------|---------|
| Timestamp | None (random) | 48-bit ms timestamp |
| Sortable | ❌ No | ✅ Yes (by time) |
| DB Index Friendly | ❌ Bad (random inserts) | ✅ Excellent (sequential) |
| Collision Resistance | 122 random bits | 74 random bits |
| Privacy | ✅ No info leakage | ⚠️ Leaks creation time |
| Library Support | ✅ Universal | ⚠️ Growing (2026+) |
| Standard | RFC 4122 (2005) | RFC 9562 (2024) |

## Database Performance: The Real Story

The biggest pain point with UUID v4 is **database index fragmentation**. PostgreSQL, MySQL, and most relational databases use **B-tree indexes**, which perform best when new rows have sequentially increasing primary keys.

With UUID v4, every insert lands at a random leaf position, causing:

- **Page splits** — 50-100x more index maintenance
- **Cache misses** — working set doesn't fit in memory
- **Write amplification** — each insert touches multiple index pages

UUID v7 solves this elegantly. Since the timestamp is the leading bits, new UUIDs are monotonically increasing — new rows append to the rightmost index page. This gives you **near-sequential performance** without the coordination overhead of auto-increment.

## When to Use Each

### Use UUID v4 when:

- You need **unpredictable IDs** (public API tokens, session IDs)
- Privacy matters — v4 doesn't leak creation time
- Your database is **read-heavy** with few writes (index fragmentation isn't an issue)
- You're working in an environment without UUID v7 library support

### Use UUID v7 when:

- You're using UUIDs as **primary keys** in a write-heavy database
- You want **time-sortable identifiers** without an extra column
- You're designing a new system and can pick the latest libraries
- Database index performance matters at scale (millions+ rows)

## How to Generate UUID v7 in Different Languages

### JavaScript / TypeScript

```javascript
// UUID v7 is not yet in crypto.randomUUID() (still v4)
// Use a small helper:

function uuidv7() {
  const timestamp = Date.now();
  const hex = timestamp.toString(16).padStart(12, '0');
  const rest = Array.from({ length: 16 }, () =>
    Math.floor(Math.random() * 16).toString(16)
  ).join('');
  return `${hex.slice(0,8)}-${hex.slice(8,12)}-7${rest.slice(0,3)}-8${rest.slice(3,7)}-${rest.slice(7)}`;
}

console.log(uuidv7()); // "018f0a56-1234-7b00-8a00-123456789abc"
```

### Python

```python
import uuid
import time

def uuid7():
    timestamp = int(time.time() * 1000)
    hex_ts = f"{timestamp:012x}"
    rest = uuid.uuid4().hex[12:]
    return uuid.UUID(f"{hex_ts[:8]}-{hex_ts[8:12]}-7{rest[:3]}-8{rest[3:7]}-{rest[7:]}")

print(uuid7())  # UUID('018f0a56-1234-7b00-8a00-123456789abc')
```

### PostgreSQL

```sql
-- If using pg_uuidv7 extension:
CREATE EXTENSION IF NOT EXISTS pg_uuidv7;
SELECT uuid_generate_v7();

-- Or just generate v4 (built-in, PostgreSQL 13+):
SELECT gen_random_uuid();
```

## Final Verdict

> 🎯 **Recommendation:** For **new projects** that use UUIDs as database primary keys, start with **UUID v7**. The time-ordered structure gives you B-tree friendly insertion without sacrificing the global uniqueness that makes UUIDs valuable. Reserve **UUID v4** for cases where unpredictability is a requirement — API keys, session tokens, or any identifier that must not reveal creation time.

Try generating both UUID versions instantly with our free [online UUID Generator tool](https://devtoolshub-seven.vercel.app/tools/uuid-generator). It runs entirely in your browser — no server uploads, no data leaks.

---

**Related Tools:** [UUID Generator](https://devtoolshub-seven.vercel.app/tools/uuid-generator) · [Timestamp Converter](https://devtoolshub-seven.vercel.app/tools/timestamp) · [Base64 Encoder/Decoder](https://devtoolshub-seven.vercel.app/tools/base64)
