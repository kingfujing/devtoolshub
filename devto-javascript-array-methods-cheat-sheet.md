---
title: "JavaScript Array Methods Cheat Sheet: Every Method with Examples"
description: "Complete JavaScript array methods reference with examples. From map() and filter() to flatMap() and toSorted() — every ES6+ array method ..."
tags: [webdev, javascript, tutorial, beginners]
canonical_url: https://devtoolshub.cloud/blog/javascript-array-methods-cheat-sheet
published: true
cover_image: https://devtoolshub.cloud/og-devto-cover.png
---

> Originally published on [DevToolsHub](https://devtoolshub.cloud/blog/javascript-array-methods-cheat-sheet) — free, privacy-first online tools for developers.

JavaScript arrays are everywhere. Whether you're transforming API responses,
          filtering user input, or building complex data pipelines, array methods are the
          tools you reach for daily. But with over 30 methods on
          `Array.prototype`, it's easy to lose track of
          which method does what, what it returns, and whether it mutates the original array.



          This cheat sheet covers every major array method — from the classics like
          `push()` and `map()`
          to the newest ES2023 additions like
          `toSorted()`,
          `toReversed()`, and
          `with()`. Methods are grouped by category so you
          can quickly find what you need.



> **⚡ Quick Tip** Use our
 [
 JSON Formatter
 ](https://devtoolshub.cloud/tools/json-formatter)
 to inspect API responses that contain arrays, and our
 [
 Base64 Encoder/Decoder
 ](https://devtoolshub.cloud/tools/base64)
 for decoding token payloads that use array-like structures.


## Quick Legend


          Throughout this guide, each method table includes the following columns:




          - **Method** — The method name and its parameters

          - **Description** — What the method does

          - **Returns** — The return value type

          - **Mutates?** — Whether it modifies the original array

          - **Example** — A concise code snippet




## 1. Mutator Methods


          Mutator methods **change the original array**.
          Use them when you want to modify data in place. Be careful — these can lead to
          unintended side effects if referenced elsewhere in your code.



### Adding & Removing Elements


| Method | Returns | Example |
| --- | --- | --- |
| push(el1, ..., elN) | New `length` of array | arr.push(4) // arr → [1,2,3,4] |
| pop() | Removed element (or `undefined`) | arr.pop() // returns 3 |
| unshift(el1, ..., elN) | New `length` of array | arr.unshift(0) // arr → [0,1,2,3] |
| shift() | Removed element (or `undefined`) | arr.shift() // returns 1 |
| splice(start, deleteCount, ...items) | Array of removed elements | arr.splice(1, 0, 'a') |
| fill(value, start?, end?) | Modified array (`this`) | arr.fill(0, 1, 3) |
| copyWithin(target, start, end?) | Modified array (`this`) | arr.copyWithin(0, 2) |


### Sorting & Reversing


| Method | Returns | Example |
| --- | --- | --- |
| sort(compareFn?) | Modified array (`this`) | arr.sort((a,b) => a - b) |
| reverse() | Modified array (`this`) | arr.reverse() |


> **⚠️ sort() Gotcha** Without a compare function, sort() converts
 elements to strings and sorts lexicographically.
 [10, 2, 1].sort() gives
 [1, 10, 2] . Always provide a compare function
 for numeric sorting.


## 2. Accessor Methods


          Accessor methods **do not mutate** the original
          array. They return a new array or value. These are generally safer and more
          predictable — prefer them over mutators when you don't need in-place modification.



### Creating New Arrays


| Method | Returns | Example |
| --- | --- | --- |
| concat(arr2, ..., arrN) | New concatenated array | [1].concat([2, 3]) // [1,2,3] |
| slice(start?, end?) | New shallow-copied array | arr.slice(1, 3) |
| flat(depth?) | New flattened array | [[1],[2,[3]]].flat(2) |
| flatMap(fn) | New flattened array (depth 1) | arr.flatMap(x => [x, x*2]) |
| join(separator?) | String | arr.join(', ') |
| toString() | Comma-separated string | arr.toString() |
| toLocaleString() | Localized string | arr.toLocaleString() |


### Searching & Checking


| Method | Returns | Example |
| --- | --- | --- |
| indexOf(el, fromIndex?) | First index, or `-1` | [1,2,3].indexOf(2) // 1 |
| lastIndexOf(el, fromIndex?) | Last index, or `-1` | [1,2,1].lastIndexOf(1) // 2 |
| includes(el, fromIndex?) | Boolean | [1,2,3].includes(2) // true |
| find(fn) | First matching element, or `undefined` | arr.find(x => x > 2) |
| findIndex(fn) | Index of first match, or `-1` | arr.findIndex(x => x > 2) |
| findLast(fn) | Last matching element, or `undefined` | arr.findLast(x => x > 2) |
| findLastIndex(fn) | Index of last match, or `-1` | arr.findLastIndex(x => x > 2) |
| some(fn) | Boolean | arr.some(x => x > 2) |
| every(fn) | Boolean | arr.every(x => x > 0) |


## 3. Iterator Methods


          Iterator methods loop over the array and execute a callback. They are the workhorses
          of functional JavaScript. All iterator methods return a new value — they never mutate
          the original array.



| Method | Returns | Example |
| --- | --- | --- |
| forEach(fn) | `undefined` | arr.forEach(x => console.log(x)) |
| map(fn) | New array (same length) | arr.map(x => x * 2) |
| filter(fn) | New array (filtered) | arr.filter(x => x > 2) |
| reduce(fn, initial?) | Accumulated value (any type) | arr.reduce((a,b) => a+b, 0) |
| reduceRight(fn, initial?) | Accumulated value (right-to-left) | arr.reduceRight((a,b)=>a+b) |


> **💡 Chaining Pattern** Because most iterator and accessor methods return new arrays, you can chain them:


```
arr
 .filter(x => x > 0)
 .map(x => x * 2)
 .reduce((sum, x) => sum + x, 0)
```


## 4. ES2023: The New Wave


          The 2023 update to ECMAScript introduced three new array methods that return
          ** new arrays** instead of mutating in place.
          These are the non-mutating alternatives to `sort()`,
          `reverse()`, and bracket assignment.



| Method | Returns | Example |
| --- | --- | --- |
| toSorted(compareFn?) | New sorted array | arr.toSorted() // arr unchanged |
| toReversed() | New reversed array | arr.toReversed() // arr unchanged |
| with(index, value) | New array with element replaced | arr.with(1, 99) |
| toSpliced(start, deleteCount?, ...items) | New array with splice applied | arr.toSpliced(1, 1, 42) |


> **💡 Immutable Arrays** The ES2023 methods make it easy to work immutably. Instead of arr.sort() which mutates, use arr.toSorted() which returns a copy. This is especially useful in React and Redux where immutability is required.


## 5. Static Methods


          These are methods on the `Array` constructor itself,
          not on instances.



| Method | Returns | Example |
| --- | --- | --- |
| Array.from(arrayLike, mapFn?) | New array from iterable/array-like | Array.from('abc') // ['a','b','c'] |
| Array.of(...items) | New array from arguments | Array.of(1, 2, 3) |
| Array.isArray(value) | Boolean | Array.isArray([]) // true |


## 6. Practical Examples


### Removing Duplicates


```javascript
const arr = [1, 2, 2, 3, 3, 4];
const unique = [...new Set(arr)];
// [1, 2, 3, 4]
```


### Grouping Objects by Property


```javascript
const users = [
  ,
  ,
  ,
];

const grouped = users.reduce((acc, user) => {
  (acc[user.role] = acc[user.role] || []).push(user);
  return acc;
}, );
//
```


### Deep Flattening


```javascript
const nested = [1, [2, [3, [4]]]];
nested.flat(Infinity);
// [1, 2, 3, 4]
```


### Safe Sorting (Immutably)


```javascript
const arr = [3, 1, 4, 1, 5];
const sorted = arr.toSorted((a, b) => a - b);
// sorted = [1, 1, 3, 4, 5]
// arr = [3, 1, 4, 1, 5] (unchanged!)
```


## 7. Performance Notes



          -
            **push/pop** are O(1) — fastest way to add/remove from end.


          -
            **shift/unshift** are O(n) — they re-index all elements.


          -
            **splice** is O(n) in worst case due to re-indexing.


          -
            **filter/map** create new arrays — chaining many of them uses more memory. For performance-critical paths, consider a single `reduce()` or a loop.


          -
            **flat(Infinity)** is convenient but slow for deeply nested arrays. Use iterative flattening for large datasets.


          -
            **sort()** uses Timsort (O(n log n)) and is stable as of ES2019.





## 8. Quick Reference Table


          All methods at a glance. **M** = Mutator,
          **A** = Accessor,
          **I** = Iterator.



| Cat | Method | Returns |
| --- | --- | --- |
| M | push() | New length |
| M | pop() | Removed element |
| M | unshift() | New length |
| M | shift() | Removed element |
| M | splice() | Removed elements array |
| M | sort() | Modified array |
| M | reverse() | Modified array |
| M | fill() | Modified array |
| M | copyWithin() | Modified array |
| A | concat() | New array |
| A | slice() | New array |
| A | flat() | New array |
| A | flatMap() | New array |
| A | join() | String |
| A | indexOf() | Index or -1 |
| A | includes() | Boolean |
| A | find() | Element or undefined |
| A | findIndex() | Index or -1 |
| A | some() | Boolean |
| A | every() | Boolean |
| I | forEach() | undefined |
| I | map() | New array |
| I | filter() | New array |
| I | reduce() | Accumulated value |
| N | toSorted() | New array |
| N | toReversed() | New array |
| N | with() | New array |
| N | toSpliced() | New array |


## Browser Support


          All methods covered here are well-supported in modern browsers:




          -
            **ES2023 methods** (toSorted, toReversed, with, toSpliced): Chrome 110+, Firefox 115+, Safari 16.4+, Node 20+


          -
            **ES2019+ methods** (flat, flatMap): Chrome 69+, Firefox 62+, Safari 12+, Node 11+


          -
            **All others**: Supported everywhere including IE9+ (with polyfills for `find`, `findIndex`)





## Common Mistakes & How to Avoid Them


          Even experienced developers trip over these array method gotchas. Here are the five
          most common pitfalls and how to dodge them.



### 1. Forgetting That sort() Sorts Strings by Default


          `sort()` converts every element to a string before
          comparing, so `[10, 2, 1].sort()` returns
          `[1, 10, 2]` — not the numeric order you expected.
          Always pass a comparator for numbers:



```
[10, 2, 1].sort((a, b) => a - b); // [1, 2, 10]
```


### 2. Mutating an Array While Iterating Over It


          Calling `splice()` inside a
          `forEach()` loop shifts the indexes of every remaining
          element, which causes items to be silently skipped. Instead of removing elements in
          place, build a new array with `filter()` — it is safer
          and easier to reason about.



### 3. Using map() for Side Effects


          `map()` exists to transform data and always returns a
          new array. If you only need to run side effects like logging or DOM updates, use
          `forEach()` instead. Calling
          `map()` and discarding its return value allocates an
          unused array and signals the wrong intent to readers.



### 4. filter(Boolean) Silently Drops Falsy Values


          `filter(Boolean)` is a popular one-liner, but it also
          removes `0`, `""`, and
          `NaN`. When those values are meaningful data, use an
          explicit predicate such as
          `x => x !== null && x !== undefined`.



### 5. map() Skips Holes in Sparse Arrays


          `Array(3).map(x => 1)` returns an array of empty
          holes, not `[1, 1, 1]`. Create a dense array first with
          `Array.from()` or
          `[...Array(3)]` before mapping over it.




## Frequently Asked Questions



### What is the difference between map() and forEach()?

map() builds and returns a new array with the
                same length, transformed by the callback. forEach()
                runs the callback for side effects and returns undefined.
                Use map() when you need the transformed result,
                and forEach() when you only need to perform an
                action. Neither can be stopped early with break —
                use a for...of loop if you need early exit.


### How do I remove duplicates from an array?

The simplest approach is to spread a Set:
                [...new Set(arr)]. This preserves insertion
                order and works for primitives. For arrays of objects, dedupe by a key with a
                Map or a Set of
                ids instead of relying on reference equality.


### What is the difference between slice() and splice()?

slice(start, end) returns a new array containing
                a copy of a portion of the original, without modifying it.
                splice(start, deleteCount, ...items) removes or
                replaces elements in the original array and returns the removed elements.
                Remember: slice copies, splice mutates.
                If you need the non-mutating version of splice, use
                toSpliced().


### Why does sort() return an unexpected order for numbers?

The default sort() converts elements to strings
                and compares them lexicographically, so 10 comes
                before 2. Pass a numeric comparator like
                (a, b) => a - b to sort numbers correctly, or
                use toSorted() when you want to keep the original
                array unchanged.


### How do I check if an array contains a value?

Use includes(value) for a simple boolean check,
                or indexOf(value) when you also need the position.
                Both use strict equality, so neither can find NaN —
                use some(x => Number.isNaN(x)) for that case,
                and find() with a predicate when searching for
                objects by property.







> **🔍 Related Resources** Check out our
 [
 JSON Formatter
 ](https://devtoolshub.cloud/tools/json-formatter)
 and
 [
 Base64 Encoder/Decoder
 ](https://devtoolshub.cloud/tools/base64)
 for more dev tools. Also read our
 [
 JSON Formatting Guide
 ](https://devtoolshub.cloud/blog/json-formatting-101)
 for data debugging tips.
