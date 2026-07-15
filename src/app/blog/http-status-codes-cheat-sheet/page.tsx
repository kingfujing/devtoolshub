import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HTTP Status Codes Cheat Sheet — DevToolsHub",
  description:
    "Complete HTTP status code reference for developers. Every response code explained — 1xx informational, 2xx success, 3xx redirect, 4xx client error, 5xx server error.",
  openGraph: {
    title: "HTTP Status Codes Cheat Sheet: Complete Reference for Developers",
    description:
      "Every HTTP status code from 100 to 511 explained. Quick reference tables grouped by category with descriptions and use cases.",
    type: "article",
  },
};

export default function HttpStatusCodesCheatSheet() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-10">
        <Link
          href="/"
          className="text-sm text-[#3b82f6] hover:text-blue-300 transition-colors mb-4 inline-block"
        >
          ← Back to Home
        </Link>
        <div className="mb-4">
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white">
            Cheat Sheet
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
          HTTP Status Codes Cheat Sheet
        </h1>
        <div className="flex items-center gap-3 text-sm text-[#64748b]">
          <span>June 24, 2026</span>
          <span className="w-1 h-1 rounded-full bg-[#475569]"></span>
          <span>8 min read</span>
        </div>
      </div>

      <div className="prose-content space-y-6 text-[#cbd5e1] leading-relaxed">
        <p>
          Every web developer encounters HTTP status codes daily. From successful
          <code className="text-xs"> 200 OK</code> responses to mysterious
          <code className="text-xs"> 418 I&apos;m a Teapot</code> — understanding what each code
          means is essential for debugging APIs, configuring servers, and building robust
          applications.
        </p>
        <p>
          This cheat sheet covers every standard HTTP status code from <strong>100</strong> to{" "}
          <strong>511</strong>, grouped by category. Use it as a quick reference whenever you
          encounter an unfamiliar response code.
        </p>

        <div className="bg-[#1e293b] border border-[#334155] rounded-lg p-4">
          <p className="text-xs text-[#94a3b8] mb-1">🔍 Quick Tip</p>
          <p className="text-sm">
            Use our{" "}
            <a href="/tools/json-formatter" className="text-[#3b82f6] hover:text-blue-300">
              JSON Formatter
            </a>{" "}
            to prettify API error responses, and our{" "}
            <a href="/tools/base64" className="text-[#3b82f6] hover:text-blue-300">
              Base64 Encoder/Decoder
            </a>{" "}
            to decode token-based auth errors.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          1xx Informational Responses
        </h2>
        <p>
          These codes indicate that the server has received the request headers and the client
          should continue sending the request body. They are provisional responses — the client
          should wait for a final response.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#1e293b]">
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Code</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Name</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-[#60a5fa]">100</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Continue</td>
                <td className="p-3 border border-[#334155]">Server received headers, client should send body</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-[#60a5fa]">101</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Switching Protocols</td>
                <td className="p-3 border border-[#334155]">Server is switching to the protocol requested in Upgrade header (e.g., WebSocket)</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-[#60a5fa]">102</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Processing</td>
                <td className="p-3 border border-[#334155]">Server has received and is processing request, but no response yet (WebDAV)</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-[#60a5fa]">103</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Early Hints</td>
                <td className="p-3 border border-[#334155]">Server can send some response headers before final response (for preloading)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          2xx Success Responses
        </h2>
        <p>
          The request was successfully received, understood, and accepted. These are the codes
          every developer loves to see.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#1e293b]">
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Code</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Name</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-[#22c55e]">200</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">OK</td>
                <td className="p-3 border border-[#334155]">Standard success response for GET, PUT, PATCH, and POST requests</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-[#22c55e]">201</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Created</td>
                <td className="p-3 border border-[#334155]">Resource was successfully created (typically after POST/PUT). Include Location header</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-[#22c55e]">202</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Accepted</td>
                <td className="p-3 border border-[#334155]">Request accepted but not yet processed (async processing)</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-[#22c55e]">203</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Non-Authoritative Info</td>
                <td className="p-3 border border-[#334155]">Returned metadata is from a third-party copy, not the origin server</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-[#22c55e]">204</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">No Content</td>
                <td className="p-3 border border-[#334155]">Request succeeded but no content to return (DELETE, or PUT saving unchanged data)</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-[#22c55e]">205</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Reset Content</td>
                <td className="p-3 border border-[#334155]">Server fulfilled request, user agent should reset the document view</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-[#22c55e]">206</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Partial Content</td>
                <td className="p-3 border border-[#334155]">Server is delivering only part of the resource (range requests, video streaming)</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-[#22c55e]">207</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Multi-Status</td>
                <td className="p-3 border border-[#334155]">Multiple status codes for multiple operations (WebDAV)</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-[#22c55e]">208</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Already Reported</td>
                <td className="p-3 border border-[#334155]">Members of a DAV binding have already been enumerated (WebDAV)</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-[#22c55e]">226</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">IM Used</td>
                <td className="p-3 border border-[#334155]">Server fulfilled GET request using instance manipulations</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          3xx Redirection Responses
        </h2>
        <p>
          The client must take additional action to complete the request. Usually means the
          resource has moved or the request needs different treatment.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#1e293b]">
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Code</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Name</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-[#f59e0b]">300</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Multiple Choices</td>
                <td className="p-3 border border-[#334155]">Multiple possible representations; user or agent should choose one</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-[#f59e0b]">301</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Moved Permanently</td>
                <td className="p-3 border border-[#334155]">Resource permanently moved to new URL. Browsers cache this redirect. Update bookmarks</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-[#f59e0b]">302</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Found</td>
                <td className="p-3 border border-[#334155]">Resource temporarily found at different URI. Use for temporary redirects</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-[#f59e0b]">303</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">See Other</td>
                <td className="p-3 border border-[#334155]">Response to POST can be found at another URI (use GET to retrieve)</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-[#f59e0b]">304</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Not Modified</td>
                <td className="p-3 border border-[#334155]">Cached version is still valid (conditional GET using If-Modified-Since / ETag)</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-[#f59e0b]">305</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Use Proxy</td>
                <td className="p-3 border border-[#334155]">Requested resource must be accessed through a proxy (deprecated)</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-[#f59e0b]">306</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Switch Proxy</td>
                <td className="p-3 border border-[#334155]">No longer used. Originally meant "subsequent requests should use specified proxy"</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-[#f59e0b]">307</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Temporary Redirect</td>
                <td className="p-3 border border-[#334155]">Like 302 but guarantees method and body won&apos;t change when following redirect</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-[#f59e0b]">308</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Permanent Redirect</td>
                <td className="p-3 border border-[#334155]">Like 301 but guarantees method and body won&apos;t change when following redirect</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          4xx Client Error Responses
        </h2>
        <p>
          The request contains bad syntax or cannot be fulfilled. These are the most common
          errors you&apos;ll encounter while debugging APIs.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#1e293b]">
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Code</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Name</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-[#ef4444]">400</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Bad Request</td>
                <td className="p-3 border border-[#334155]">Malformed request syntax, invalid message framing, or deceptive request routing</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-[#ef4444]">401</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Unauthorized</td>
                <td className="p-3 border border-[#334155]">Authentication is required or has failed. Include WWW-Authenticate header</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-[#ef4444]">402</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Payment Required</td>
                <td className="p-3 border border-[#334155]">Reserved for future use (digital payment systems). Rarely used in practice</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-[#ef4444]">403</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Forbidden</td>
                <td className="p-3 border border-[#334155]">Server understood the request but refuses to authorize it. Different from 401</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-[#ef4444]">404</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Not Found</td>
                <td className="p-3 border border-[#334155]">Server cannot find the requested resource. The most famous HTTP error</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-[#ef4444]">405</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Method Not Allowed</td>
                <td className="p-3 border border-[#334155]">HTTP method not supported for this resource. Include Allow header</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-[#ef4444]">406</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Not Acceptable</td>
                <td className="p-3 border border-[#334155]">Resource cannot produce content matching Accept headers</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-[#ef4444]">407</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Proxy Auth Required</td>
                <td className="p-3 border border-[#334155]">Client must first authenticate with the proxy (like 401 for proxies)</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-[#ef4444]">408</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Request Timeout</td>
                <td className="p-3 border border-[#334155]">Server timed out waiting for the request. Client can re-send</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-[#ef4444]">409</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Conflict</td>
                <td className="p-3 border border-[#334155]">Request conflicts with current state of the resource (e.g., version conflicts)</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-[#ef4444]">410</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Gone</td>
                <td className="p-3 border border-[#334155]">Resource is gone and will not be available again. Unlike 404, this is permanent</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-[#ef4444]">411</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Length Required</td>
                <td className="p-3 border border-[#334155]">Content-Length header is required but was not provided</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-[#ef4444]">412</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Precondition Failed</td>
                <td className="p-3 border border-[#334155]">Conditional request headers (If-Match, If-None-Match) evaluated to false</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-[#ef4444]">413</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Payload Too Large</td>
                <td className="p-3 border border-[#334155]">Request entity is larger than server is willing or able to process</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-[#ef4444]">414</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">URI Too Long</td>
                <td className="p-3 border border-[#334155]">URI requested is longer than server can interpret</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-[#ef4444]">415</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Unsupported Media Type</td>
                <td className="p-3 border border-[#334155]">Media format in Content-Type is not supported by the server</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-[#ef4444]">416</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Range Not Satisfiable</td>
                <td className="p-3 border border-[#334155]">Range specified in Range header cannot be fulfilled</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-[#ef4444]">417</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Expectation Failed</td>
                <td className="p-3 border border-[#334155]">Server cannot meet the requirements of the Expect request header</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-[#ef4444]">418</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">I&apos;m a Teapot</td>
                <td className="p-3 border border-[#334155]">April Fools&apos; joke (HTCPCP). Some servers use it for blocking bot traffic</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-[#ef4444]">421</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Misdirected Request</td>
                <td className="p-3 border border-[#334155]">Request was directed at a server that cannot produce a response</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-[#ef4444]">422</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Unprocessable Entity</td>
                <td className="p-3 border border-[#334155]">Request body is syntactically correct but semantically invalid (validation errors)</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-[#ef4444]">423</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Locked</td>
                <td className="p-3 border border-[#334155]">Resource is locked (WebDAV)</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-[#ef4444]">424</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Failed Dependency</td>
                <td className="p-3 border border-[#334155]">Request failed because another request it depended on failed (WebDAV)</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-[#ef4444]">425</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Too Early</td>
                <td className="p-3 border border-[#334155]">Server is unwilling to process a request that might be replayed</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-[#ef4444]">426</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Upgrade Required</td>
                <td className="p-3 border border-[#334155]">Client should switch to a different protocol (e.g., HTTP/1.1 → HTTP/2)</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-[#ef4444]">428</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Precondition Required</td>
                <td className="p-3 border border-[#334155]">Server requires the request to be conditional (prevent lost updates)</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-[#ef4444]">429</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Too Many Requests</td>
                <td className="p-3 border border-[#334155]">Rate limit exceeded. Include Retry-After header. Very common in APIs</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-[#ef4444]">431</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Header Fields Too Large</td>
                <td className="p-3 border border-[#334155]">Request header fields are too large (individual header or total size)</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-[#ef4444]">451</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Unavailable For Legal Reasons</td>
                <td className="p-3 border border-[#334155]">Resource blocked due to legal demands (censorship, copyright takedowns)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          5xx Server Error Responses
        </h2>
        <p>
          The server failed to fulfill a valid request. These indicate problems on the server
          side — but sometimes the real issue is upstream.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#1e293b]">
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Code</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Name</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-[#a855f7]">500</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Internal Server Error</td>
                <td className="p-3 border border-[#334155]">Generic server error when no specific message fits. Check server logs</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-[#a855f7]">501</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Not Implemented</td>
                <td className="p-3 border border-[#334155]">Server does not support the HTTP method. Unlike 405, this means server can&apos;t handle it at all</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-[#a855f7]">502</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Bad Gateway</td>
                <td className="p-3 border border-[#334155]">Server acting as gateway got an invalid response from upstream server</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-[#a855f7]">503</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Service Unavailable</td>
                <td className="p-3 border border-[#334155]">Server temporarily overloaded or under maintenance. Include Retry-After header</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-[#a855f7]">504</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Gateway Timeout</td>
                <td className="p-3 border border-[#334155]">Server acting as gateway did not receive response from upstream in time</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-[#a855f7]">505</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">HTTP Version Not Supported</td>
                <td className="p-3 border border-[#334155]">Server does not support the HTTP protocol version used in the request</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-[#a855f7]">506</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Variant Also Negotiates</td>
                <td className="p-3 border border-[#334155]">Server configuration error: circular reference in transparent content negotiation</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-[#a855f7]">507</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Insufficient Storage</td>
                <td className="p-3 border border-[#334155]">Server cannot store the representation needed to complete the request (WebDAV)</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-[#a855f7]">508</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Loop Detected</td>
                <td className="p-3 border border-[#334155]">Server detected an infinite loop processing the request (WebDAV)</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-[#a855f7]">510</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Not Extended</td>
                <td className="p-3 border border-[#334155]">Further extensions to the request are required for the server to fulfill it</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-[#a855f7]">511</td>
                <td className="p-3 border border-[#334155] font-semibold text-white">Network Auth Required</td>
                <td className="p-3 border border-[#334155]">Client needs to authenticate to gain network access (captive portals)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          Quick Reference by Category
        </h2>
        <p>
          Some status codes appear in unexpected places. Here&apos;s a breakdown of which codes
          are commonly seen in specific scenarios:
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#1e293b]">
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Scenario</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Common Codes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-[#334155] font-semibold text-white">REST API - GET</td>
                <td className="p-3 border border-[#334155]">200 (OK), 404 (Not Found), 401 (Unauthorized)</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-semibold text-white">REST API - POST</td>
                <td className="p-3 border border-[#334155]">201 (Created), 400 (Bad Request), 422 (Unprocessable Entity), 409 (Conflict)</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-semibold text-white">REST API - PUT/PATCH</td>
                <td className="p-3 border border-[#334155]">200 (OK), 204 (No Content), 409 (Conflict), 412 (Precondition Failed)</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-semibold text-white">REST API - DELETE</td>
                <td className="p-3 border border-[#334155]">204 (No Content), 404 (Not Found), 410 (Gone)</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-semibold text-white">CDN / Proxy</td>
                <td className="p-3 border border-[#334155]">502 (Bad Gateway), 504 (Gateway Timeout), 301 (Moved Permanently)</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-semibold text-white">Rate Limiting</td>
                <td className="p-3 border border-[#334155]">429 (Too Many Requests), 503 (Service Unavailable)</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-semibold text-white">Auth / Tokens</td>
                <td className="p-3 border border-[#334155]">401 (Unauthorized), 403 (Forbidden), 407 (Proxy Auth Required)</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-semibold text-white">File Upload</td>
                <td className="p-3 border border-[#334155]">413 (Payload Too Large), 415 (Unsupported Media Type)</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-semibold text-white">Redirects</td>
                <td className="p-3 border border-[#334155]">301 (Permanent), 302 (Temporary), 307 (Temporary, method-preserving), 308 (Permanent, method-preserving)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          Common Mistakes &amp; Best Practices
        </h2>

        <h3 className="text-xl font-semibold text-white mt-8 mb-3">
          1. Don&apos;t Use 200 for Everything
        </h3>
        <p>
          Many poorly designed APIs return <code className="text-xs">200 OK</code> for everything,
          including errors, and handle them in the response body. This breaks HTTP semantics
          and makes debugging harder. Use the correct status code for each scenario.
        </p>

        <h3 className="text-xl font-semibold text-white mt-8 mb-3">
          2. 401 vs 403 — Know the Difference
        </h3>
        <p>
          <code className="text-xs">401 Unauthorized</code> means the client is not authenticated
          (no valid credentials). <code className="text-xs">403 Forbidden</code> means the client is
          authenticated but lacks permission. Use them correctly — a logged-in user hitting an
          admin endpoint should get 403, not 401.
        </p>

        <h3 className="text-xl font-semibold text-white mt-8 mb-3">
          3. Always Return Proper Error Bodies
        </h3>
        <p>
          When returning 4xx or 5xx, include a structured error response body:
        </p>
        <pre className="bg-[#1e293b] border border-[#334155] rounded-lg p-4 text-sm overflow-x-auto"><code>{`{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Email is required",
    "details": [
      { "field": "email", "issue": "must not be empty" }
    ]
  }
}`}</code></pre>

        <h3 className="text-xl font-semibold text-white mt-8 mb-3">
          4. Use Retry-After With 429 and 503
        </h3>
        <p>
          When rate-limiting (<code className="text-xs">429</code>) or serving maintenance pages
          (<code className="text-xs">503</code>), include the <code className="text-xs">Retry-After</code> header
          so clients know when to retry. This prevents thundering herd problems.
        </p>

        <h3 className="text-xl font-semibold text-white mt-8 mb-3">
          5. 301 Redirects Are Cached by Browsers
        </h3>
        <p>
          A <code className="text-xs">301 Moved Permanently</code> redirect is aggressively cached
          by browsers. If you accidentally serve a 301 to the wrong URL, clients will cache it
          and you&apos;ll have trouble fixing it. Use <code className="text-xs">302</code> or{" "}
          <code className="text-xs">307</code> for temporary redirects.
        </p>

        <div className="bg-[#1e293b] border border-[#334155] rounded-lg p-5 mt-6">
          <p className="text-white font-semibold mb-2">🎯 Quick Summary</p>
          <ul className="text-sm space-y-1.5 list-disc pl-5">
            <li><strong>1xx</strong> — Informational: continue, switching protocols</li>
            <li><strong>2xx</strong> — Success: everything worked as expected</li>
            <li><strong>3xx</strong> — Redirection: resource moved, use different URL</li>
            <li><strong>4xx</strong> — Client Error: bad request, auth failure, not found (debug here first)</li>
            <li><strong>5xx</strong> — Server Error: server crashed, gateway timeout, overloaded</li>
            <li>Use our <a href="/tools/json-formatter" className="text-[#3b82f6]">JSON Formatter</a> to read API error responses</li>
          </ul>
        </div>

        <div className="border-t border-[#334155] pt-6 mt-8">
          <p className="text-xs text-[#64748b]">
            <strong>Related Tools:</strong>{" "}
            <a href="/tools/json-formatter" className="text-[#3b82f6] hover:text-blue-300">JSON Formatter</a>
            {" · "}
            <a href="/tools/base64" className="text-[#3b82f6] hover:text-blue-300">Base64 Encoder/Decoder</a>
            {" · "}
            <a href="/tools/jwt-decoder" className="text-[#3b82f6] hover:text-blue-300">JWT Decoder</a>
          </p>
        </div>
      </div>
    </article>
  );
}
