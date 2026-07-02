---
title: "How to Decode JWT Tokens Without a Backend"
description: "Learn how to decode JWT tokens client-side. Understand header, payload, signature, and how to inspect tokens safely without sending them to any server."
tags: [webdev, javascript, tutorial, security]
canonical_url: https://devtoolshub-seven.vercel.app/blog/jwt-decoder-guide
published: true
cover_image: https://devtoolshub-seven.vercel.app/og-image.png
---

> Originally published on [DevToolsHub](https://devtoolshub-seven.vercel.app) — free, privacy-first online tools for developers. All tools run in your browser; your data never touches any server.

If you've worked with authentication (OAuth, OpenID Connect, or any modern API), you've almost certainly encountered **JWT** (JSON Web Tokens). They're everywhere — but they can feel like a black box.

The good news: **you don't need a backend to inspect a JWT**. Since JWTs are base64url-encoded JSON, you can decode them entirely in your browser. In fact, that's the safest way to do it — your token data never leaves your machine.

🔐 **Quick Try:** Decode any JWT instantly with our free [JWT Decoder tool](https://devtoolshub-seven.vercel.app/tools/jwt-decoder) — all client-side, no server uploads.

---

## What is a JWT?

A JSON Web Token is a compact, URL-safe way to represent claims between two parties. A JWT looks like this:

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

It has three parts, separated by dots: **Header**.**Payload**.**Signature**

---

## Part 1: The Header

The header tells you **how** the token was created. Decode the first segment from base64url, and you'll get something like:

```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

Key fields:
- **alg** (Algorithm) — The signing algorithm. Common values: HS256 (HMAC+SHA256), RS256 (RSA+SHA256), EdDSA
- **typ** (Type) — Usually "JWT"
- **kid** (Key ID) — Optional. Identifies which key was used to sign

---

## Part 2: The Payload (Claims)

This is the **data** part — the actual claims the token carries. Standardized claims include:

| Claim | Name | Description |
|-------|------|-------------|
| `iss` | Issuer | Who created the token |
| `sub` | Subject | Who/what the token is about (usually a user ID) |
| `aud` | Audience | Who should accept this token |
| `exp` | Expiration | Unix timestamp when token expires |
| `nbf` | Not Before | Token is not valid before this time |
| `iat` | Issued At | When the token was issued |
| `jti` | JWT ID | Unique identifier (prevents replay attacks) |

Custom claims (like `role`, `permissions`, or `email`) are also common. Use our [JWT Decoder](https://devtoolshub-seven.vercel.app/tools/jwt-decoder) to see exactly what your token contains.

---

## Part 3: The Signature

The signature **verifies that the token hasn't been tampered with**. It's created by taking the header + payload, signing them with a secret key (for HMAC) or private key (for RSA/ECDSA), and base64url-encoding the result.

```
signature = HMACSHA256(
  base64urlEncode(header) + "." + base64urlEncode(payload),
  secretOrPrivateKey
)
```

> ⚠️ **Important:** Decoding a JWT does NOT verify the signature. You can read the payload without the secret key, but you need the server's secret to confirm the token is authentic. Never trust a decoded JWT without verification.

---

## How to Decode a JWT Step by Step

You only need 3 steps. No server, no libraries:

1. **Split by dots** — Take your JWT and split on "." — you get three parts: `[header, payload, signature]`
2. **Base64url decode the payload** — Convert from base64url (use `atob()` in JS, but first replace `-` with `+` and `_` with `/`)
3. **Parse as JSON** — `JSON.parse()` the decoded string — now you can read every claim

Or just use our [JWT Decoder](https://devtoolshub-seven.vercel.app/tools/jwt-decoder) and paste your token — it does all three steps instantly, with syntax-highlighted output and expiration status.

---

## Common JWT Security Pitfalls

### 1. The "none" Algorithm Attack
Older JWT libraries had a vulnerability where an attacker could change the algorithm to `"none"` and bypass signature verification. Always **whitelist expected algorithms** on the server side.

### 2. Storing JWTs in localStorage
While convenient, localStorage is accessible to any JavaScript running on the same origin. If your site has an XSS vulnerability, tokens can be stolen. Consider **HttpOnly cookies** for production applications.

### 3. Not Checking the exp Claim
Always verify the `exp` (expiration) claim on the server. An expired token should be rejected. Use our [Timestamp Converter](https://devtoolshub-seven.vercel.app/tools/timestamp) to check if a token's exp timestamp is still valid.

### 4. Decoding Without Verifying
This bears repeating: **anyone can decode a JWT**. The security comes from **verifying the signature**, which requires the server's secret key. Client-side tools like our JWT Decoder are great for debugging and inspection, but never trust the decoded data for authorization decisions.

---

## Debugging JWTs Like a Pro

When debugging authentication issues, here's what to check with a JWT decoder:

- **Is the token expired?** Check the `exp` claim against the current time
- **Is the issuer correct?** Verify the `iss` claim matches your auth server
- **Is the audience correct?** Check `aud` — your API should verify it
- **Are custom claims present?** If your API expects a `role` or `permissions` claim, confirm it's there

Use our free [JWT Decoder](https://devtoolshub-seven.vercel.app/tools/jwt-decoder) to inspect tokens quickly — it runs entirely in your browser, so your tokens stay private.

---

**Related Tools:**
- [JWT Decoder](https://devtoolshub-seven.vercel.app/tools/jwt-decoder)
- [Base64 Encoder/Decoder](https://devtoolshub-seven.vercel.app/tools/base64)
- [Timestamp Converter](https://devtoolshub-seven.vercel.app/tools/timestamp)
