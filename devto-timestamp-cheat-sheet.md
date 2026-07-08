---
title: "Unix Timestamp Cheat Sheet: Convert, Read, and Debug Like a Pro"
description: "A complete guide to Unix timestamps: convert seconds/milliseconds, handle timezones, common pitfalls, and one-liners for JavaScript, Python, SQL, Go, Rust, and more."
tags: [webdev, javascript, tutorial, beginners]
canonical_url: https://devtoolshub-seven.vercel.app/blog/timestamp-cheat-sheet
published: true
cover_image: https://devtoolshub-seven.vercel.app/og-image.png
---

> Originally published on [DevToolsHub](https://devtoolshub-seven.vercel.app/blog/timestamp-cheat-sheet) — free, privacy-first online tools for developers.

Every developer hits timestamps at some point. JWT expiration (`exp`), API pagination cursors, database audit fields — Unix timestamps are everywhere. Yet they're one of the most common sources of confusion (and bugs).

This cheat sheet covers everything: conversion tricks, the **seconds vs milliseconds** trap, timezone gotchas, and one-liners for every major language.

⏱ **Quick Try:** Convert timestamps instantly with our free [Timestamp Converter](https://devtoolshub-seven.vercel.app/tools/timestamp) — supports seconds, milliseconds, and multiple timezone formats.

---

## Quick Reference: Common Timestamps

| Date/Time (UTC) | Unix (seconds) | Unix (ms) |
|----------------|----------------|-----------|
| Jan 1, 1970 00:00:00 | 0 | 0 |
| Jan 1, 2000 00:00:00 | 946684800 | 946684800000 |
| Jan 1, 2020 00:00:00 | 1577836800 | 1577836800000 |
| **Now (Jun 2026)** | **~1782000000** | **~1782000000000** |
| Jan 19, 2038 03:14:07 | **2147483647** ⚠️ | **2147483647000** ⚠️ |

> ⚠️ **Year 2038 Problem:** The last row shows **2,147,483,647** — the maximum value for a signed 32-bit integer. After this point, 32-bit systems will overflow. Most modern systems use 64-bit timestamps (safe for 292 billion years), but embedded systems and legacy APIs may still be vulnerable.

## The #1 Bug: Seconds vs Milliseconds

This is the most common timestamp bug in existence:

- JavaScript `Date.now()` → **milliseconds**
- Python `time.time()` → **seconds** (as float)
- JWT `exp` claim → **seconds**
- PostgreSQL `EXTRACT(EPOCH FROM NOW())` → **seconds**
- MySQL `UNIX_TIMESTAMP()` → **seconds**

**Rule of thumb:** If the value is around 1.7 billion → it's seconds. If it's around 1.7 trillion → it's milliseconds. The current epoch (June 2026) is about **1,782,000,000** in seconds.

Our [Timestamp Converter](https://devtoolshub-seven.vercel.app/tools/timestamp) automatically detects whether your input is seconds or milliseconds — just paste and it works.

## One-Liners for Every Language

### JavaScript / TypeScript

```javascript
// Current time
Date.now()                         // -> 1782000000000 (ms)
Math.floor(Date.now() / 1000)      // -> 1782000000 (s)

// Timestamp to Date
new Date(1782000000000)            // -> 2026-06-24T... (ms)
new Date(1782000000 * 1000)        // -> same, but for seconds input

// Date to timestamp
new Date('2026-06-24').getTime()   // -> 1758585600000 (ms)
+new Date()                        // -> shorthand for Date.now()

// Format timestamp
new Date(1782000000000).toISOString()  // -> "2026-06-24T12:00:00.000Z"
```

### Python

```python
import time, datetime

# Current time
time.time()                        # -> 1782000000.123 (seconds, float)

# Timestamp to datetime
dt = datetime.datetime.fromtimestamp(1782000000)
print(dt.strftime('%Y-%m-%d %H:%M:%S'))

# Datetime to timestamp
dt = datetime.datetime(2026, 6, 24)
dt.timestamp()                     # -> 1758585600.0

# Timezone-aware (recommended)
from datetime import timezone
dt_utc = datetime.datetime.fromtimestamp(1782000000, tz=timezone.utc)
```

### SQL (PostgreSQL)

```sql
-- Current Unix timestamp (seconds)
SELECT EXTRACT(EPOCH FROM NOW())::bigint;

-- Timestamp to date
SELECT to_timestamp(1782000000);

-- Date to timestamp
SELECT EXTRACT(EPOCH FROM TIMESTAMP '2026-06-24 12:00:00')::bigint;

-- Check if JWT is expired
SELECT 1782000000 > EXTRACT(EPOCH FROM NOW())::bigint; -- false = expired
```

### Bash / Shell

```bash
# Current timestamp
date +%s                    # -> 1782000000 (seconds)

# Timestamp to date
date -d @1782000000         # macOS: date -r 1782000000

# Date to timestamp
date -d "2026-06-24" +%s   # -> 1758585600

# ISO format
date -u -d @1782000000 +"%Y-%m-%dT%H:%M:%SZ"
```

### Java

```java
// Current time (milliseconds)
System.currentTimeMillis();        // -> 1782000000000L

// Convert to seconds
System.currentTimeMillis() / 1000;

// Timestamp to Instant
Instant.ofEpochSecond(1782000000);
Instant.ofEpochMilli(1782000000000L);

// Format
Instant.now().toString();          // -> "2026-06-24T12:00:00Z"

// JWT exp check
long exp = 1782000000L;
boolean expired = Instant.now().getEpochSecond() > exp;
```

### Go

```go
// Current time
time.Now().Unix()              // -> 1782000000 (seconds)
time.Now().UnixMilli()         // -> 1782000000000 (ms)

// Timestamp to readable
t := time.Unix(1782000000, 0)
fmt.Println(t.Format(time.RFC3339))

// Parse to timestamp
t, _ := time.Parse(time.RFC3339, "2026-06-24T12:00:00Z")
t.Unix()                       // -> 1782000000
```

### Rust

```rust
use std::time::{SystemTime, UNIX_EPOCH};

// Current timestamp
let now = SystemTime::now()
    .duration_since(UNIX_EPOCH)
    .unwrap();
println!("{}", now.as_secs());       // seconds
println!("{}", now.as_millis());      // ms
```

## Common JWT Timestamp Patterns

If you're decoding JWTs (use our [JWT Decoder](https://devtoolshub-seven.vercel.app/tools/jwt-decoder)), you'll frequently need to check these timestamp claims:

- **exp** — Token expiration (always in **seconds**)
- **iat** — Token issued at (seconds)
- **nbf** — Not valid before (seconds)

Copy the `exp` value into the [Timestamp Converter](https://devtoolshub-seven.vercel.app/tools/timestamp) to instantly see if a token is expired — it color-codes expired vs valid.

## Time Zones: The Hidden Trap

**Unix timestamps are always UTC.** They don't have a timezone. A timestamp of `1782000000` means the same moment everywhere on Earth — it's the display that varies by timezone.

When converting timestamps to readable dates:

- Use **ISO 8601 format** (e.g., `2026-06-24T12:00:00Z`) for communication between systems — the trailing Z means UTC
- Only convert to local time when **presenting to users**
- Never store timestamps in local time — always use Unix timestamps or UTC ISO strings

---

> 🎯 **Summary:** Unix timestamps = seconds since Jan 1, 1970 UTC. JS uses milliseconds, most backends use seconds. Timestamps are always UTC — timezone is a display concern. Use our [Timestamp Converter](https://devtoolshub-seven.vercel.app/tools/timestamp) for quick conversions and check JWT expiration with our [JWT Decoder](https://devtoolshub-seven.vercel.app/tools/jwt-decoder).

**Related Tools:** [Timestamp Converter](https://devtoolshub-seven.vercel.app/tools/timestamp) · [JWT Decoder](https://devtoolshub-seven.vercel.app/tools/jwt-decoder) · [UUID Generator](https://devtoolshub-seven.vercel.app/tools/uuid-generator)
