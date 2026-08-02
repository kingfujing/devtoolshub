import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "JavaScript Array Methods Cheat Sheet — DevToolsHub",
  description:
    "Complete JavaScript array methods reference with examples. From map() and filter() to flatMap() and toSorted() — every ES6+ array method explained.",
  openGraph: {
    title: "JavaScript Array Methods Cheat Sheet: Complete ES6+ Reference",
    description:
      "Every JavaScript Array prototype method explained with syntax, return values, mutation info, and practical code examples. Covering ES3 through ES2023.",
    type: "article",
  },
};

export default function JavaScriptArrayMethodsCheatSheet() {
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
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
            Cheat Sheet
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
          JavaScript Array Methods Cheat Sheet
        </h1>
        <div className="flex items-center gap-3 text-sm text-[#64748b]">
          <span>July 15, 2026</span>
          <span className="w-1 h-1 rounded-full bg-[#475569]"></span>
          <span>12 min read</span>
        </div>
      </div>

      <div className="prose-content space-y-6 text-[#cbd5e1] leading-relaxed">
        <p>
          JavaScript arrays are everywhere. Whether you&apos;re transforming API responses,
          filtering user input, or building complex data pipelines, array methods are the
          tools you reach for daily. But with over 30 methods on{" "}
          <code className="text-xs">Array.prototype</code>, it&apos;s easy to lose track of
          which method does what, what it returns, and whether it mutates the original array.
        </p>
        <p>
          This cheat sheet covers every major array method — from the classics like{" "}
          <code className="text-xs">push()</code> and <code className="text-xs">map()</code>{" "}
          to the newest ES2023 additions like{" "}
          <code className="text-xs">toSorted()</code>,{" "}
          <code className="text-xs">toReversed()</code>, and{" "}
          <code className="text-xs">with()</code>. Methods are grouped by category so you
          can quickly find what you need.
        </p>

        <div className="bg-[#1e293b] border border-[#334155] rounded-lg p-4">
          <p className="text-xs text-[#94a3b8] mb-1">⚡ Quick Tip</p>
          <p className="text-sm">
            Use our{" "}
            <a href="/tools/json-formatter" className="text-[#3b82f6] hover:text-blue-300">
              JSON Formatter
            </a>{" "}
            to inspect API responses that contain arrays, and our{" "}
            <a href="/tools/base64" className="text-[#3b82f6] hover:text-blue-300">
              Base64 Encoder/Decoder
            </a>{" "}
            for decoding token payloads that use array-like structures.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          Quick Legend
        </h2>
        <p>
          Throughout this guide, each method table includes the following columns:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong className="text-white">Method</strong> — The method name and its parameters</li>
          <li><strong className="text-white">Description</strong> — What the method does</li>
          <li><strong className="text-white">Returns</strong> — The return value type</li>
          <li><strong className="text-white">Mutates?</strong> — Whether it modifies the original array</li>
          <li><strong className="text-white">Example</strong> — A concise code snippet</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          1. Mutator Methods
        </h2>
        <p>
          Mutator methods <strong className="text-white">change the original array</strong>.
          Use them when you want to modify data in place. Be careful — these can lead to
          unintended side effects if referenced elsewhere in your code.
        </p>

        <h3 className="text-xl font-semibold text-white mt-8 mb-3">Adding &amp; Removing Elements</h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#1e293b]">
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Method</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Returns</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs text-[#60a5fa]">push(el1, ..., elN)</td>
                <td className="p-3 border border-[#334155]">New <code className="text-xs">length</code> of array</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">arr.push(4) // arr → [1,2,3,4]</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs text-[#60a5fa]">pop()</td>
                <td className="p-3 border border-[#334155]">Removed element (or <code className="text-xs">undefined</code>)</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">arr.pop() // returns 3</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs text-[#60a5fa]">unshift(el1, ..., elN)</td>
                <td className="p-3 border border-[#334155]">New <code className="text-xs">length</code> of array</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">arr.unshift(0) // arr → [0,1,2,3]</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs text-[#60a5fa]">shift()</td>
                <td className="p-3 border border-[#334155]">Removed element (or <code className="text-xs">undefined</code>)</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">arr.shift() // returns 1</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs text-[#60a5fa]">splice(start, deleteCount, ...items)</td>
                <td className="p-3 border border-[#334155]">Array of removed elements</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">arr.splice(1, 0, &apos;a&apos;)</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs text-[#60a5fa]">fill(value, start?, end?)</td>
                <td className="p-3 border border-[#334155]">Modified array (<code className="text-xs">this</code>)</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">arr.fill(0, 1, 3)</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs text-[#60a5fa]">copyWithin(target, start, end?)</td>
                <td className="p-3 border border-[#334155]">Modified array (<code className="text-xs">this</code>)</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">arr.copyWithin(0, 2)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold text-white mt-8 mb-3">Sorting &amp; Reversing</h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#1e293b]">
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Method</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Returns</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs text-[#60a5fa]">sort(compareFn?)</td>
                <td className="p-3 border border-[#334155]">Modified array (<code className="text-xs">this</code>)</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">arr.sort((a,b) =&gt; a - b)</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs text-[#60a5fa]">reverse()</td>
                <td className="p-3 border border-[#334155]">Modified array (<code className="text-xs">this</code>)</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">arr.reverse()</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-[#1e293b] border border-[#f59e0b]/30 rounded-lg p-4">
          <p className="text-xs text-[#f59e0b] mb-1">⚠️ sort() Gotcha</p>
          <p className="text-sm text-[#cbd5e1]">
            Without a compare function, <code className="text-xs">sort()</code> converts
            elements to strings and sorts lexicographically.{" "}
            <code className="text-xs">[10, 2, 1].sort()</code> gives{" "}
            <code className="text-xs">[1, 10, 2]</code>. Always provide a compare function
            for numeric sorting.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          2. Accessor Methods
        </h2>
        <p>
          Accessor methods <strong className="text-white">do not mutate</strong> the original
          array. They return a new array or value. These are generally safer and more
          predictable — prefer them over mutators when you don&apos;t need in-place modification.
        </p>

        <h3 className="text-xl font-semibold text-white mt-8 mb-3">Creating New Arrays</h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#1e293b]">
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Method</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Returns</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs text-[#22c55e]">concat(arr2, ..., arrN)</td>
                <td className="p-3 border border-[#334155]">New concatenated array</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">[1].concat([2, 3]) // [1,2,3]</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs text-[#22c55e]">slice(start?, end?)</td>
                <td className="p-3 border border-[#334155]">New shallow-copied array</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">arr.slice(1, 3)</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs text-[#22c55e]">flat(depth?)</td>
                <td className="p-3 border border-[#334155]">New flattened array</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">[[1],[2,[3]]].flat(2)</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs text-[#22c55e]">flatMap(fn)</td>
                <td className="p-3 border border-[#334155]">New flattened array (depth 1)</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">arr.flatMap(x =&gt; [x, x*2])</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs text-[#22c55e]">join(separator?)</td>
                <td className="p-3 border border-[#334155]">String</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">arr.join(&apos;, &apos;)</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs text-[#22c55e]">toString()</td>
                <td className="p-3 border border-[#334155]">Comma-separated string</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">arr.toString()</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs text-[#22c55e]">toLocaleString()</td>
                <td className="p-3 border border-[#334155]">Localized string</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">arr.toLocaleString()</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold text-white mt-8 mb-3">Searching &amp; Checking</h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#1e293b]">
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Method</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Returns</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs text-[#22c55e]">indexOf(el, fromIndex?)</td>
                <td className="p-3 border border-[#334155]">First index, or <code className="text-xs">-1</code></td>
                <td className="p-3 border border-[#334155] font-mono text-xs">[1,2,3].indexOf(2) // 1</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs text-[#22c55e]">lastIndexOf(el, fromIndex?)</td>
                <td className="p-3 border border-[#334155]">Last index, or <code className="text-xs">-1</code></td>
                <td className="p-3 border border-[#334155] font-mono text-xs">[1,2,1].lastIndexOf(1) // 2</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs text-[#22c55e]">includes(el, fromIndex?)</td>
                <td className="p-3 border border-[#334155]">Boolean</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">[1,2,3].includes(2) // true</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs text-[#22c55e]">find(fn)</td>
                <td className="p-3 border border-[#334155]">First matching element, or <code className="text-xs">undefined</code></td>
                <td className="p-3 border border-[#334155] font-mono text-xs">arr.find(x =&gt; x &gt; 2)</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs text-[#22c55e]">findIndex(fn)</td>
                <td className="p-3 border border-[#334155]">Index of first match, or <code className="text-xs">-1</code></td>
                <td className="p-3 border border-[#334155] font-mono text-xs">arr.findIndex(x =&gt; x &gt; 2)</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs text-[#22c55e]">findLast(fn)</td>
                <td className="p-3 border border-[#334155]">Last matching element, or <code className="text-xs">undefined</code></td>
                <td className="p-3 border border-[#334155] font-mono text-xs">arr.findLast(x =&gt; x &gt; 2)</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs text-[#22c55e]">findLastIndex(fn)</td>
                <td className="p-3 border border-[#334155]">Index of last match, or <code className="text-xs">-1</code></td>
                <td className="p-3 border border-[#334155] font-mono text-xs">arr.findLastIndex(x =&gt; x &gt; 2)</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs text-[#22c55e]">some(fn)</td>
                <td className="p-3 border border-[#334155]">Boolean</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">arr.some(x =&gt; x &gt; 2)</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs text-[#22c55e]">every(fn)</td>
                <td className="p-3 border border-[#334155]">Boolean</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">arr.every(x =&gt; x &gt; 0)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          3. Iterator Methods
        </h2>
        <p>
          Iterator methods loop over the array and execute a callback. They are the workhorses
          of functional JavaScript. All iterator methods return a new value — they never mutate
          the original array.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#1e293b]">
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Method</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Returns</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs text-[#a855f7]">forEach(fn)</td>
                <td className="p-3 border border-[#334155]"><code className="text-xs">undefined</code></td>
                <td className="p-3 border border-[#334155] font-mono text-xs">arr.forEach(x =&gt; console.log(x))</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs text-[#a855f7]">map(fn)</td>
                <td className="p-3 border border-[#334155]">New array (same length)</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">arr.map(x =&gt; x * 2)</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs text-[#a855f7]">filter(fn)</td>
                <td className="p-3 border border-[#334155]">New array (filtered)</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">arr.filter(x =&gt; x &gt; 2)</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs text-[#a855f7]">reduce(fn, initial?)</td>
                <td className="p-3 border border-[#334155]">Accumulated value (any type)</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">arr.reduce((a,b) =&gt; a+b, 0)</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs text-[#a855f7]">reduceRight(fn, initial?)</td>
                <td className="p-3 border border-[#334155]">Accumulated value (right-to-left)</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">arr.reduceRight((a,b)=&gt;a+b)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-[#1e293b] border border-[#334155] rounded-lg p-4">
          <p className="text-xs text-[#94a3b8] mb-1">💡 Chaining Pattern</p>
          <p className="text-sm text-[#cbd5e1]">
            Because most iterator and accessor methods return new arrays, you can chain them:
          </p>
          <pre className="bg-[#0f172a] border border-[#334155] rounded-lg p-3 mt-2 text-xs overflow-x-auto"><code>{`arr
  .filter(x => x > 0)
  .map(x => x * 2)
  .reduce((sum, x) => sum + x, 0)`}</code></pre>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          4. ES2023: The New Wave
        </h2>
        <p>
          The 2023 update to ECMAScript introduced three new array methods that return
          <strong className="text-white"> new arrays</strong> instead of mutating in place.
          These are the non-mutating alternatives to <code className="text-xs">sort()</code>,
          <code className="text-xs">reverse()</code>, and bracket assignment.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#1e293b]">
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Method</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Returns</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs text-[#0ea5e9]">toSorted(compareFn?)</td>
                <td className="p-3 border border-[#334155]">New sorted array</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">arr.toSorted() // arr unchanged</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs text-[#0ea5e9]">toReversed()</td>
                <td className="p-3 border border-[#334155]">New reversed array</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">arr.toReversed() // arr unchanged</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs text-[#0ea5e9]">with(index, value)</td>
                <td className="p-3 border border-[#334155]">New array with element replaced</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">arr.with(1, 99)</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs text-[#0ea5e9]">toSpliced(start, deleteCount?, ...items)</td>
                <td className="p-3 border border-[#334155]">New array with splice applied</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">arr.toSpliced(1, 1, 42)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-[#1e293b] border border-[#334155] rounded-lg p-4">
          <p className="text-xs text-[#94a3b8] mb-1">💡 Immutable Arrays</p>
          <p className="text-sm text-[#cbd5e1]">
            The ES2023 methods make it easy to work immutably. Instead of <code className="text-xs">arr.sort()</code> which mutates, use <code className="text-xs">arr.toSorted()</code> which returns a copy. This is especially useful in React and Redux where immutability is required.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          5. Static Methods
        </h2>
        <p>
          These are methods on the <code className="text-xs">Array</code> constructor itself,
          not on instances.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#1e293b]">
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Method</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Returns</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs text-[#f59e0b]">Array.from(arrayLike, mapFn?)</td>
                <td className="p-3 border border-[#334155]">New array from iterable/array-like</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">Array.from(&apos;abc&apos;) // [&apos;a&apos;,&apos;b&apos;,&apos;c&apos;]</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs text-[#f59e0b]">Array.of(...items)</td>
                <td className="p-3 border border-[#334155]">New array from arguments</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">Array.of(1, 2, 3)</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs text-[#f59e0b]">Array.isArray(value)</td>
                <td className="p-3 border border-[#334155]">Boolean</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">Array.isArray([]) // true</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          6. Practical Examples
        </h2>

        <h3 className="text-xl font-semibold text-white mt-8 mb-3">
          Removing Duplicates
        </h3>
        <pre className="bg-[#1e293b] border border-[#334155] rounded-lg p-4 text-sm overflow-x-auto"><code>{`const arr = [1, 2, 2, 3, 3, 4];
const unique = [...new Set(arr)];
// [1, 2, 3, 4]`}</code></pre>

        <h3 className="text-xl font-semibold text-white mt-8 mb-3">
          Grouping Objects by Property
        </h3>
        <pre className="bg-[#1e293b] border border-[#334155] rounded-lg p-4 text-sm overflow-x-auto"><code>{`const users = [
  { name: 'Alice', role: 'admin' },
  { name: 'Bob', role: 'user' },
  { name: 'Charlie', role: 'admin' },
];

const grouped = users.reduce((acc, user) => {
  (acc[user.role] = acc[user.role] || []).push(user);
  return acc;
}, {});
// { admin: [Alice, Charlie], user: [Bob] }`}</code></pre>

        <h3 className="text-xl font-semibold text-white mt-8 mb-3">
          Deep Flattening
        </h3>
        <pre className="bg-[#1e293b] border border-[#334155] rounded-lg p-4 text-sm overflow-x-auto"><code>{`const nested = [1, [2, [3, [4]]]];
nested.flat(Infinity);
// [1, 2, 3, 4]`}</code></pre>

        <h3 className="text-xl font-semibold text-white mt-8 mb-3">
          Safe Sorting (Immutably)
        </h3>
        <pre className="bg-[#1e293b] border border-[#334155] rounded-lg p-4 text-sm overflow-x-auto"><code>{`const arr = [3, 1, 4, 1, 5];
const sorted = arr.toSorted((a, b) => a - b);
// sorted = [1, 1, 3, 4, 5]
// arr = [3, 1, 4, 1, 5] (unchanged!)`}</code></pre>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          7. Performance Notes
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-white">push/pop</strong> are O(1) — fastest way to add/remove from end.
          </li>
          <li>
            <strong className="text-white">shift/unshift</strong> are O(n) — they re-index all elements.
          </li>
          <li>
            <strong className="text-white">splice</strong> is O(n) in worst case due to re-indexing.
          </li>
          <li>
            <strong className="text-white">filter/map</strong> create new arrays — chaining many of them uses more memory. For performance-critical paths, consider a single <code className="text-xs">reduce()</code> or a loop.
          </li>
          <li>
            <strong className="text-white">flat(Infinity)</strong> is convenient but slow for deeply nested arrays. Use iterative flattening for large datasets.
          </li>
          <li>
            <strong className="text-white">sort()</strong> uses Timsort (O(n log n)) and is stable as of ES2019.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          8. Quick Reference Table
        </h2>
        <p>
          All methods at a glance. <strong className="text-white">M</strong> = Mutator,{" "}
          <strong className="text-white">A</strong> = Accessor,{" "}
          <strong className="text-white">I</strong> = Iterator.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#1e293b]">
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Cat</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Method</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Returns</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-[#334155] text-[#ef4444] font-bold">M</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">push()</td>
                <td className="p-3 border border-[#334155]">New length</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] text-[#ef4444] font-bold">M</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">pop()</td>
                <td className="p-3 border border-[#334155]">Removed element</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] text-[#ef4444] font-bold">M</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">unshift()</td>
                <td className="p-3 border border-[#334155]">New length</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] text-[#ef4444] font-bold">M</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">shift()</td>
                <td className="p-3 border border-[#334155]">Removed element</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] text-[#ef4444] font-bold">M</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">splice()</td>
                <td className="p-3 border border-[#334155]">Removed elements array</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] text-[#ef4444] font-bold">M</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">sort()</td>
                <td className="p-3 border border-[#334155]">Modified array</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] text-[#ef4444] font-bold">M</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">reverse()</td>
                <td className="p-3 border border-[#334155]">Modified array</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] text-[#ef4444] font-bold">M</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">fill()</td>
                <td className="p-3 border border-[#334155]">Modified array</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] text-[#ef4444] font-bold">M</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">copyWithin()</td>
                <td className="p-3 border border-[#334155]">Modified array</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] text-[#22c55e] font-bold">A</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">concat()</td>
                <td className="p-3 border border-[#334155]">New array</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] text-[#22c55e] font-bold">A</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">slice()</td>
                <td className="p-3 border border-[#334155]">New array</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] text-[#22c55e] font-bold">A</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">flat()</td>
                <td className="p-3 border border-[#334155]">New array</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] text-[#22c55e] font-bold">A</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">flatMap()</td>
                <td className="p-3 border border-[#334155]">New array</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] text-[#22c55e] font-bold">A</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">join()</td>
                <td className="p-3 border border-[#334155]">String</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] text-[#22c55e] font-bold">A</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">indexOf()</td>
                <td className="p-3 border border-[#334155]">Index or -1</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] text-[#22c55e] font-bold">A</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">includes()</td>
                <td className="p-3 border border-[#334155]">Boolean</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] text-[#22c55e] font-bold">A</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">find()</td>
                <td className="p-3 border border-[#334155]">Element or undefined</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] text-[#22c55e] font-bold">A</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">findIndex()</td>
                <td className="p-3 border border-[#334155]">Index or -1</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] text-[#22c55e] font-bold">A</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">some()</td>
                <td className="p-3 border border-[#334155]">Boolean</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] text-[#22c55e] font-bold">A</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">every()</td>
                <td className="p-3 border border-[#334155]">Boolean</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] text-[#a855f7] font-bold">I</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">forEach()</td>
                <td className="p-3 border border-[#334155]">undefined</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] text-[#a855f7] font-bold">I</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">map()</td>
                <td className="p-3 border border-[#334155]">New array</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] text-[#a855f7] font-bold">I</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">filter()</td>
                <td className="p-3 border border-[#334155]">New array</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] text-[#a855f7] font-bold">I</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">reduce()</td>
                <td className="p-3 border border-[#334155]">Accumulated value</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] text-[#0ea5e9] font-bold">N</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">toSorted()</td>
                <td className="p-3 border border-[#334155]">New array</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] text-[#0ea5e9] font-bold">N</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">toReversed()</td>
                <td className="p-3 border border-[#334155]">New array</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] text-[#0ea5e9] font-bold">N</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">with()</td>
                <td className="p-3 border border-[#334155]">New array</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] text-[#0ea5e9] font-bold">N</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">toSpliced()</td>
                <td className="p-3 border border-[#334155]">New array</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          Browser Support
        </h2>
        <p>
          All methods covered here are well-supported in modern browsers:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong className="text-white">ES2023 methods</strong> (toSorted, toReversed, with, toSpliced): Chrome 110+, Firefox 115+, Safari 16.4+, Node 20+
          </li>
          <li>
            <strong className="text-white">ES2019+ methods</strong> (flat, flatMap): Chrome 69+, Firefox 62+, Safari 12+, Node 11+
          </li>
          <li>
            <strong className="text-white">All others</strong>: Supported everywhere including IE9+ (with polyfills for <code className="text-xs">find</code>, <code className="text-xs">findIndex</code>)
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          Common Mistakes &amp; How to Avoid Them
        </h2>
        <p>
          Even experienced developers trip over these array method gotchas. Here are the five
          most common pitfalls and how to dodge them.
        </p>

        <h3 className="text-xl font-semibold text-white mt-8 mb-3">
          1. Forgetting That sort() Sorts Strings by Default
        </h3>
        <p>
          <code className="text-xs">sort()</code> converts every element to a string before
          comparing, so <code className="text-xs">[10, 2, 1].sort()</code> returns{" "}
          <code className="text-xs">[1, 10, 2]</code> — not the numeric order you expected.
          Always pass a comparator for numbers:
        </p>
        <pre className="bg-[#1e293b] border border-[#334155] rounded-lg p-4 text-sm overflow-x-auto"><code>{`[10, 2, 1].sort((a, b) => a - b); // [1, 2, 10]`}</code></pre>

        <h3 className="text-xl font-semibold text-white mt-8 mb-3">
          2. Mutating an Array While Iterating Over It
        </h3>
        <p>
          Calling <code className="text-xs">splice()</code> inside a{" "}
          <code className="text-xs">forEach()</code> loop shifts the indexes of every remaining
          element, which causes items to be silently skipped. Instead of removing elements in
          place, build a new array with <code className="text-xs">filter()</code> — it is safer
          and easier to reason about.
        </p>

        <h3 className="text-xl font-semibold text-white mt-8 mb-3">
          3. Using map() for Side Effects
        </h3>
        <p>
          <code className="text-xs">map()</code> exists to transform data and always returns a
          new array. If you only need to run side effects like logging or DOM updates, use{" "}
          <code className="text-xs">forEach()</code> instead. Calling{" "}
          <code className="text-xs">map()</code> and discarding its return value allocates an
          unused array and signals the wrong intent to readers.
        </p>

        <h3 className="text-xl font-semibold text-white mt-8 mb-3">
          4. filter(Boolean) Silently Drops Falsy Values
        </h3>
        <p>
          <code className="text-xs">filter(Boolean)</code> is a popular one-liner, but it also
          removes <code className="text-xs">0</code>, <code className="text-xs">""</code>, and{" "}
          <code className="text-xs">NaN</code>. When those values are meaningful data, use an
          explicit predicate such as{" "}
          <code className="text-xs">x =&gt; x !== null &amp;&amp; x !== undefined</code>.
        </p>

        <h3 className="text-xl font-semibold text-white mt-8 mb-3">
          5. map() Skips Holes in Sparse Arrays
        </h3>
        <p>
          <code className="text-xs">Array(3).map(x =&gt; 1)</code> returns an array of empty
          holes, not <code className="text-xs">[1, 1, 1]</code>. Create a dense array first with{" "}
          <code className="text-xs">{`Array.from({ length: 3 })`}</code> or{" "}
          <code className="text-xs">[...Array(3)]</code> before mapping over it.
        </p>

        <section className="mt-10 pt-8 border-t border-[#334155]">
          <h2 className="text-2xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="group rounded-lg bg-[#1e293b] border border-[#334155] overflow-hidden">
              <summary className="flex items-center justify-between px-4 py-3 text-sm text-white cursor-pointer hover:bg-[#334155] transition-colors list-none">
                <span>What is the difference between map() and forEach()?</span>
                <svg className="w-4 h-4 text-[#64748b] group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-4 pb-3 text-xs text-[#94a3b8] leading-relaxed">
                <code className="text-xs">map()</code> builds and returns a new array with the
                same length, transformed by the callback. <code className="text-xs">forEach()</code>{" "}
                runs the callback for side effects and returns <code className="text-xs">undefined</code>.
                Use <code className="text-xs">map()</code> when you need the transformed result,
                and <code className="text-xs">forEach()</code> when you only need to perform an
                action. Neither can be stopped early with <code className="text-xs">break</code> —
                use a <code className="text-xs">for...of</code> loop if you need early exit.
              </div>
            </details>

            <details className="group rounded-lg bg-[#1e293b] border border-[#334155] overflow-hidden">
              <summary className="flex items-center justify-between px-4 py-3 text-sm text-white cursor-pointer hover:bg-[#334155] transition-colors list-none">
                <span>How do I remove duplicates from an array?</span>
                <svg className="w-4 h-4 text-[#64748b] group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-4 pb-3 text-xs text-[#94a3b8] leading-relaxed">
                The simplest approach is to spread a <code className="text-xs">Set</code>:{" "}
                <code className="text-xs">{`[...new Set(arr)]`}</code>. This preserves insertion
                order and works for primitives. For arrays of objects, dedupe by a key with a{" "}
                <code className="text-xs">Map</code> or a <code className="text-xs">Set</code> of
                ids instead of relying on reference equality.
              </div>
            </details>

            <details className="group rounded-lg bg-[#1e293b] border border-[#334155] overflow-hidden">
              <summary className="flex items-center justify-between px-4 py-3 text-sm text-white cursor-pointer hover:bg-[#334155] transition-colors list-none">
                <span>What is the difference between slice() and splice()?</span>
                <svg className="w-4 h-4 text-[#64748b] group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-4 pb-3 text-xs text-[#94a3b8] leading-relaxed">
                <code className="text-xs">slice(start, end)</code> returns a new array containing
                a copy of a portion of the original, without modifying it.{" "}
                <code className="text-xs">splice(start, deleteCount, ...items)</code> removes or
                replaces elements in the original array and returns the removed elements.
                Remember: <strong className="text-white">slice copies, splice mutates</strong>.
                If you need the non-mutating version of splice, use{" "}
                <code className="text-xs">toSpliced()</code>.
              </div>
            </details>

            <details className="group rounded-lg bg-[#1e293b] border border-[#334155] overflow-hidden">
              <summary className="flex items-center justify-between px-4 py-3 text-sm text-white cursor-pointer hover:bg-[#334155] transition-colors list-none">
                <span>Why does sort() return an unexpected order for numbers?</span>
                <svg className="w-4 h-4 text-[#64748b] group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-4 pb-3 text-xs text-[#94a3b8] leading-relaxed">
                The default <code className="text-xs">sort()</code> converts elements to strings
                and compares them lexicographically, so <code className="text-xs">10</code> comes
                before <code className="text-xs">2</code>. Pass a numeric comparator like{" "}
                <code className="text-xs">(a, b) =&gt; a - b</code> to sort numbers correctly, or
                use <code className="text-xs">toSorted()</code> when you want to keep the original
                array unchanged.
              </div>
            </details>

            <details className="group rounded-lg bg-[#1e293b] border border-[#334155] overflow-hidden">
              <summary className="flex items-center justify-between px-4 py-3 text-sm text-white cursor-pointer hover:bg-[#334155] transition-colors list-none">
                <span>How do I check if an array contains a value?</span>
                <svg className="w-4 h-4 text-[#64748b] group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-4 pb-3 text-xs text-[#94a3b8] leading-relaxed">
                Use <code className="text-xs">includes(value)</code> for a simple boolean check,
                or <code className="text-xs">indexOf(value)</code> when you also need the position.
                Both use strict equality, so neither can find <code className="text-xs">NaN</code> —
                use <code className="text-xs">some(x =&gt; Number.isNaN(x))</code> for that case,
                and <code className="text-xs">find()</code> with a predicate when searching for
                objects by property.
              </div>
            </details>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html:
              '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the difference between map() and forEach()?","acceptedAnswer":{"@type":"Answer","text":"map() returns a new array with the same length, transformed by the callback. forEach() runs the callback for side effects and returns undefined. Use map() when you need the transformed result and forEach() when you only need side effects."}},{"@type":"Question","name":"How do I remove duplicates from an array?","acceptedAnswer":{"@type":"Answer","text":"The simplest way is to spread a Set: [...new Set(arr)]. This preserves insertion order and works for primitives. For arrays of objects, dedupe by a key with a Map or a Set of ids."}},{"@type":"Question","name":"What is the difference between slice() and splice()?","acceptedAnswer":{"@type":"Answer","text":"slice(start, end) returns a new array that copies a portion of the original without modifying it. splice(start, deleteCount, items) removes or replaces elements in the original array and returns the removed elements. slice copies, splice mutates."}},{"@type":"Question","name":"Why does sort() return an unexpected order for numbers?","acceptedAnswer":{"@type":"Answer","text":"The default sort() converts elements to strings and compares them lexicographically, so 10 comes before 2. Pass a numeric comparator such as (a, b) => a - b to sort numbers correctly, or use toSorted() to keep the original array unchanged."}},{"@type":"Question","name":"How do I check if an array contains a value?","acceptedAnswer":{"@type":"Answer","text":"Use includes(value) for a boolean check, or indexOf(value) when you also need the position. Both use strict equality, so they cannot find NaN. Use some(x => Number.isNaN(x)) for NaN, and find() with a predicate for objects."}}]}',
          }}
        />

        <div className="bg-[#1e293b] border border-[#334155] rounded-lg p-4">
          <p className="text-xs text-[#94a3b8] mb-1">🔍 Related Resources</p>
          <p className="text-sm">
            Check out our{" "}
            <a href="/tools/json-formatter" className="text-[#3b82f6] hover:text-blue-300">
              JSON Formatter
            </a>{" "}
            and{" "}
            <a href="/tools/base64" className="text-[#3b82f6] hover:text-blue-300">
              Base64 Encoder/Decoder
            </a>{" "}
            for more dev tools. Also read our{" "}
            <a href="/blog/json-formatting-101" className="text-[#3b82f6] hover:text-blue-300">
              JSON Formatting Guide
            </a>{" "}
            for data debugging tips.
          </p>
        </div>
      </div>
    </article>
  );
}
