---
title: "HTTP Status Codes Cheat Sheet: Every Code Explained"
description: "Complete HTTP status code reference for developers. Every response code explained — 1xx informational, 2xx success, 3xx redirect, 4xx cli..."
tags: [webdev, api, tutorial, beginners]
canonical_url: https://devtoolshub.cloud/blog/http-status-codes-cheat-sheet
published: true
cover_image: https://devtoolshub.cloud/og-devto-cover.png
---

> Originally published on [DevToolsHub](https://devtoolshub.cloud/blog/http-status-codes-cheat-sheet) — free, privacy-first online tools for developers.

Every web developer encounters HTTP status codes daily. From successful
          ` 200 OK` responses to mysterious
          ` 418 I'm a Teapot` — understanding what each code
          means is essential for debugging APIs, configuring servers, and building robust
          applications.



          This cheat sheet covers every standard HTTP status code from **100** to
          **511**, grouped by category. Use it as a quick reference whenever you
          encounter an unfamiliar response code.



> **🔍 Quick Tip** Use our
 [
 JSON Formatter
 ](https://devtoolshub.cloud/tools/json-formatter)
 to prettify API error responses, and our
 [
 Base64 Encoder/Decoder
 ](https://devtoolshub.cloud/tools/base64)
 to decode token-based auth errors.


## 1xx Informational Responses


          These codes indicate that the server has received the request headers and the client
          should continue sending the request body. They are provisional responses — the client
          should wait for a final response.



| Code | Name | Description |
| --- | --- | --- |
| 100 | Continue | Server received headers, client should send body |
| 101 | Switching Protocols | Server is switching to the protocol requested in Upgrade header (e.g., WebSocket) |
| 102 | Processing | Server has received and is processing request, but no response yet (WebDAV) |
| 103 | Early Hints | Server can send some response headers before final response (for preloading) |


## 2xx Success Responses


          The request was successfully received, understood, and accepted. These are the codes
          every developer loves to see.



| Code | Name | Description |
| --- | --- | --- |
| 200 | OK | Standard success response for GET, PUT, PATCH, and POST requests |
| 201 | Created | Resource was successfully created (typically after POST/PUT). Include Location header |
| 202 | Accepted | Request accepted but not yet processed (async processing) |
| 203 | Non-Authoritative Info | Returned metadata is from a third-party copy, not the origin server |
| 204 | No Content | Request succeeded but no content to return (DELETE, or PUT saving unchanged data) |
| 205 | Reset Content | Server fulfilled request, user agent should reset the document view |
| 206 | Partial Content | Server is delivering only part of the resource (range requests, video streaming) |
| 207 | Multi-Status | Multiple status codes for multiple operations (WebDAV) |
| 208 | Already Reported | Members of a DAV binding have already been enumerated (WebDAV) |
| 226 | IM Used | Server fulfilled GET request using instance manipulations |


## 3xx Redirection Responses


          The client must take additional action to complete the request. Usually means the
          resource has moved or the request needs different treatment.



| Code | Name | Description |
| --- | --- | --- |
| 300 | Multiple Choices | Multiple possible representations; user or agent should choose one |
| 301 | Moved Permanently | Resource permanently moved to new URL. Browsers cache this redirect. Update bookmarks |
| 302 | Found | Resource temporarily found at different URI. Use for temporary redirects |
| 303 | See Other | Response to POST can be found at another URI (use GET to retrieve) |
| 304 | Not Modified | Cached version is still valid (conditional GET using If-Modified-Since / ETag) |
| 305 | Use Proxy | Requested resource must be accessed through a proxy (deprecated) |
| 306 | Switch Proxy | No longer used. Originally meant "subsequent requests should use specified proxy" |
| 307 | Temporary Redirect | Like 302 but guarantees method and body won't change when following redirect |
| 308 | Permanent Redirect | Like 301 but guarantees method and body won't change when following redirect |


## 4xx Client Error Responses


          The request contains bad syntax or cannot be fulfilled. These are the most common
          errors you'll encounter while debugging APIs.



| Code | Name | Description |
| --- | --- | --- |
| 400 | Bad Request | Malformed request syntax, invalid message framing, or deceptive request routing |
| 401 | Unauthorized | Authentication is required or has failed. Include WWW-Authenticate header |
| 402 | Payment Required | Reserved for future use (digital payment systems). Rarely used in practice |
| 403 | Forbidden | Server understood the request but refuses to authorize it. Different from 401 |
| 404 | Not Found | Server cannot find the requested resource. The most famous HTTP error |
| 405 | Method Not Allowed | HTTP method not supported for this resource. Include Allow header |
| 406 | Not Acceptable | Resource cannot produce content matching Accept headers |
| 407 | Proxy Auth Required | Client must first authenticate with the proxy (like 401 for proxies) |
| 408 | Request Timeout | Server timed out waiting for the request. Client can re-send |
| 409 | Conflict | Request conflicts with current state of the resource (e.g., version conflicts) |
| 410 | Gone | Resource is gone and will not be available again. Unlike 404, this is permanent |
| 411 | Length Required | Content-Length header is required but was not provided |
| 412 | Precondition Failed | Conditional request headers (If-Match, If-None-Match) evaluated to false |
| 413 | Payload Too Large | Request entity is larger than server is willing or able to process |
| 414 | URI Too Long | URI requested is longer than server can interpret |
| 415 | Unsupported Media Type | Media format in Content-Type is not supported by the server |
| 416 | Range Not Satisfiable | Range specified in Range header cannot be fulfilled |
| 417 | Expectation Failed | Server cannot meet the requirements of the Expect request header |
| 418 | I'm a Teapot | April Fools' joke (HTCPCP). Some servers use it for blocking bot traffic |
| 421 | Misdirected Request | Request was directed at a server that cannot produce a response |
| 422 | Unprocessable Entity | Request body is syntactically correct but semantically invalid (validation errors) |
| 423 | Locked | Resource is locked (WebDAV) |
| 424 | Failed Dependency | Request failed because another request it depended on failed (WebDAV) |
| 425 | Too Early | Server is unwilling to process a request that might be replayed |
| 426 | Upgrade Required | Client should switch to a different protocol (e.g., HTTP/1.1 → HTTP/2) |
| 428 | Precondition Required | Server requires the request to be conditional (prevent lost updates) |
| 429 | Too Many Requests | Rate limit exceeded. Include Retry-After header. Very common in APIs |
| 431 | Header Fields Too Large | Request header fields are too large (individual header or total size) |
| 451 | Unavailable For Legal Reasons | Resource blocked due to legal demands (censorship, copyright takedowns) |


## 5xx Server Error Responses


          The server failed to fulfill a valid request. These indicate problems on the server
          side — but sometimes the real issue is upstream.



| Code | Name | Description |
| --- | --- | --- |
| 500 | Internal Server Error | Generic server error when no specific message fits. Check server logs |
| 501 | Not Implemented | Server does not support the HTTP method. Unlike 405, this means server can't handle it at all |
| 502 | Bad Gateway | Server acting as gateway got an invalid response from upstream server |
| 503 | Service Unavailable | Server temporarily overloaded or under maintenance. Include Retry-After header |
| 504 | Gateway Timeout | Server acting as gateway did not receive response from upstream in time |
| 505 | HTTP Version Not Supported | Server does not support the HTTP protocol version used in the request |
| 506 | Variant Also Negotiates | Server configuration error: circular reference in transparent content negotiation |
| 507 | Insufficient Storage | Server cannot store the representation needed to complete the request (WebDAV) |
| 508 | Loop Detected | Server detected an infinite loop processing the request (WebDAV) |
| 510 | Not Extended | Further extensions to the request are required for the server to fulfill it |
| 511 | Network Auth Required | Client needs to authenticate to gain network access (captive portals) |


## Quick Reference by Category


          Some status codes appear in unexpected places. Here's a breakdown of which codes
          are commonly seen in specific scenarios:



| Scenario | Common Codes |
| --- | --- |
| REST API - GET | 200 (OK), 404 (Not Found), 401 (Unauthorized) |
| REST API - POST | 201 (Created), 400 (Bad Request), 422 (Unprocessable Entity), 409 (Conflict) |
| REST API - PUT/PATCH | 200 (OK), 204 (No Content), 409 (Conflict), 412 (Precondition Failed) |
| REST API - DELETE | 204 (No Content), 404 (Not Found), 410 (Gone) |
| CDN / Proxy | 502 (Bad Gateway), 504 (Gateway Timeout), 301 (Moved Permanently) |
| Rate Limiting | 429 (Too Many Requests), 503 (Service Unavailable) |
| Auth / Tokens | 401 (Unauthorized), 403 (Forbidden), 407 (Proxy Auth Required) |
| File Upload | 413 (Payload Too Large), 415 (Unsupported Media Type) |
| Redirects | 301 (Permanent), 302 (Temporary), 307 (Temporary, method-preserving), 308 (Permanent, method-preserving) |


## Common Mistakes & Best Practices


### 1. Don't Use 200 for Everything


          Many poorly designed APIs return `200 OK` for everything,
          including errors, and handle them in the response body. This breaks HTTP semantics
          and makes debugging harder. Use the correct status code for each scenario.



### 2. 401 vs 403 — Know the Difference


          `401 Unauthorized` means the client is not authenticated
          (no valid credentials). `403 Forbidden` means the client is
          authenticated but lacks permission. Use them correctly — a logged-in user hitting an
          admin endpoint should get 403, not 401.



### 3. Always Return Proper Error Bodies


          When returning 4xx or 5xx, include a structured error response body:



```css
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Email is required",
    "details": [
      { "field": "email", "issue": "must not be empty" }
    ]
  }
}
```


### 4. Use Retry-After With 429 and 503


          When rate-limiting (`429`) or serving maintenance pages
          (`503`), include the `Retry-After` header
          so clients know when to retry. This prevents thundering herd problems.



### 5. 301 Redirects Are Cached by Browsers


          A `301 Moved Permanently` redirect is aggressively cached
          by browsers. If you accidentally serve a 301 to the wrong URL, clients will cache it
          and you'll have trouble fixing it. Use `302` or
          `307` for temporary redirects.



> **** 🎯 Quick Summary

 1xx — Informational: continue, switching protocols
 2xx — Success: everything worked as expected
 3xx — Redirection: resource moved, use different URL
 4xx — Client Error: bad request, auth failure, not found (debug here first)
 5xx — Server Error: server crashed, gateway timeout, overloaded
 Use our [JSON Formatter](https://devtoolshub.cloud/tools/json-formatter) to read API error responses



## Frequently Asked Questions



### What is the difference between 401 Unauthorized and 403 Forbidden?

401 Unauthorized means the client is
                not authenticated — no valid credentials
                were provided, or the token is missing or expired.
                403 Forbidden means the client
                is authenticated but does not have
                permission to access the resource. A logged-in user hitting an admin endpoint
                should get 403; an anonymous request should get 401. Also note that the spec
                recommends 401 include a
                WWW-Authenticate header describing the auth scheme.


### What is the difference between 301, 302, 307, and 308 redirects?

301 and 308 are
                permanent redirects; 302 and
                307 are temporary. The key difference is method
                handling: 301 and 302
                may rewrite POST into GET
                (most browsers do), while 307 and
                308 always preserve the method and request body.
                Use 308 for permanent redirects of form
                submissions or API endpoints, and 307 for
                temporary ones where the method must survive.


### When should I return 429 Too Many Requests?

Return 429 when a client exceeds your rate limit
                — for example, more than 100 requests per minute. Always include a
                Retry-After header (in seconds or an HTTP date)
                so clients know when to try again, and consider adding
                RateLimit-Limit,
                RateLimit-Remaining, and
                RateLimit-Reset headers for transparency. Use
                503 instead when the whole service is overloaded
                or down for maintenance, since that signals a server-side condition rather than a
                client quota.


### Should I return 404 or 403 for resources that exist but are not authorized?

For security-sensitive resources, returning 404
                is usually the better choice. A 403 tells an
                attacker that the resource exists, letting them enumerate your API. Returning
                404 for both "not found" and "forbidden" hides
                the resource's existence. Reserve 403 for cases
                where revealing existence is fine, such as a public site telling a logged-in user
                they lack admin rights.


### What is the difference between 500, 502, 503, and 504?

500 Internal Server Error is a generic failure
                inside your application — an unhandled exception or misconfiguration.
                502 Bad Gateway means an upstream server (like a
                reverse proxy's backend) returned an invalid response.
                503 Service Unavailable means the server is
                overloaded or in maintenance — pair it with
                Retry-After.
                504 Gateway Timeout means an upstream server
                didn't respond in time. All four are server-side: check your application logs,
                upstream health, and load balancer configuration in that order.








            **Related Tools:**
            [JSON Formatter](https://devtoolshub.cloud/tools/json-formatter)

            [Base64 Encoder/Decoder](https://devtoolshub.cloud/tools/base64)

            [JWT Decoder](https://devtoolshub.cloud/tools/jwt-decoder)
