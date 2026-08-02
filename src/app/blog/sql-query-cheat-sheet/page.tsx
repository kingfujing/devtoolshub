import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SQL Query Cheat Sheet — DevToolsHub",
  description:
    "Essential SQL query reference for developers. SELECT, JOIN, GROUP BY, subqueries, window functions, query optimization tips, common mistakes, and a developer FAQ.",
  openGraph: {
    title: "SQL Query Cheat Sheet: Essential Reference for Developers",
    description:
      "Every SQL command you need — SELECT, JOIN, GROUP BY, subqueries, window functions, aggregate functions, DML, DDL, optimization tips, common mistakes, and FAQs with practical examples.",
    type: "article",
  },
};

export default function SqlQueryCheatSheet() {
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
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
            Cheat Sheet
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
          SQL Query Cheat Sheet
        </h1>
        <div className="flex items-center gap-3 text-sm text-[#64748b]">
          <span>July 15, 2026</span>
          <span className="w-1 h-1 rounded-full bg-[#475569]"></span>
          <span>14 min read</span>
        </div>
      </div>

      <div className="prose-content space-y-6 text-[#cbd5e1] leading-relaxed">
        <p>
          SQL is the language of data. Whether you&apos;re pulling records from a Postgres
          database, debugging a slow query in MySQL, or writing analytics queries in
          Snowflake, the fundamentals are the same. This cheat sheet covers everything from
          basic SELECT statements to advanced window functions — with syntax that works
          across most major SQL databases.
        </p>
        <p>
          Each section includes the syntax, a practical example, and notes on database-specific
          differences where they matter. Bookmark this page and use it as your daily reference
          for writing SQL queries.
        </p>

        <div className="bg-[#1e293b] border border-[#334155] rounded-lg p-4">
          <p className="text-xs text-[#94a3b8] mb-1">⚡ Quick Tip</p>
          <p className="text-sm">
            Use our{" "}
            <a href="/tools/json-formatter" className="text-[#3b82f6] hover:text-blue-300">
              JSON Formatter
            </a>{" "}
            to prettify your JSON query results, and our{" "}
            <a href="/tools/regex-tester" className="text-[#3b82f6] hover:text-blue-300">
              Regex Tester
            </a>{" "}
            for crafting SQL pattern-matching expressions.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          1. SELECT &amp; FROM
        </h2>
        <p>
          The foundation of every SQL query. <code className="text-xs">SELECT</code> specifies
          which columns to return, <code className="text-xs">FROM</code> specifies the table.
        </p>

        <pre className="bg-[#1e293b] border border-[#334155] rounded-lg p-4 text-sm overflow-x-auto"><code>{`-- Select all columns
SELECT * FROM users;

-- Select specific columns
SELECT id, name, email FROM users;

-- Select with alias
SELECT u.id, u.name AS username FROM users AS u;

-- Select distinct values
SELECT DISTINCT status FROM orders;

-- Select with LIMIT (MySQL/Postgres)
SELECT * FROM products LIMIT 10;

-- Select with TOP (SQL Server)
SELECT TOP 10 * FROM products;

-- Select with FETCH (standard SQL / Oracle)
SELECT * FROM products OFFSET 0 ROWS FETCH NEXT 10 ROWS ONLY;`}</code></pre>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          2. WHERE Clause
        </h2>
        <p>
          Filter rows based on conditions. The WHERE clause is evaluated row-by-row before
          GROUP BY and aggregate functions.
        </p>

        <pre className="bg-[#1e293b] border border-[#334155] rounded-lg p-4 text-sm overflow-x-auto"><code>{`-- Comparison operators
SELECT * FROM users WHERE age >= 18;
SELECT * FROM orders WHERE total != 0;

-- String matching
SELECT * FROM users WHERE name LIKE 'A%';    -- starts with A
SELECT * FROM users WHERE name LIKE '%son%';  -- contains 'son'
SELECT * FROM users WHERE name LIKE '_oe';    -- exactly 3 chars, ends with 'oe'

-- IN operator
SELECT * FROM orders WHERE status IN ('shipped', 'delivered', 'pending');

-- BETWEEN
SELECT * FROM products WHERE price BETWEEN 10 AND 50;

-- NULL checks
SELECT * FROM users WHERE email IS NULL;
SELECT * FROM users WHERE email IS NOT NULL;

-- Multiple conditions
SELECT * FROM orders
WHERE status = 'active'
  AND created_at >= '2024-01-01'
  AND (total > 100 OR priority = 'high');

-- Boolean expressions
SELECT * FROM products
WHERE NOT discontinued
  AND (category_id = 5 OR category_id = 8);`}</code></pre>

        <div className="bg-[#1e293b] border border-[#f59e0b]/30 rounded-lg p-4">
          <p className="text-xs text-[#f59e0b] mb-1">⚠️ NULL Comparison</p>
          <p className="text-sm text-[#cbd5e1]">
            <code className="text-xs">NULL</code> is not equal to anything — not even{" "}
            <code className="text-xs">NULL</code>. Use <code className="text-xs">IS NULL</code>{" "}
            or <code className="text-xs">IS NOT NULL</code>. Expressions like{" "}
            <code className="text-xs">column = NULL</code> will always evaluate to false
            (or unknown in SQL three-valued logic).
          </p>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          3. JOINs
        </h2>
        <p>
          Combine rows from two or more tables based on related columns. Understanding JOINs
          is critical for working with normalized databases.
        </p>

        <h3 className="text-xl font-semibold text-white mt-8 mb-3">INNER JOIN</h3>
        <p>Returns rows where there is a match in <strong className="text-white">both</strong> tables.</p>
        <pre className="bg-[#1e293b] border border-[#334155] rounded-lg p-4 text-sm overflow-x-auto"><code>{`SELECT u.name, o.id AS order_id, o.total
FROM users u
INNER JOIN orders o ON u.id = o.user_id;
-- Only returns users with at least one order`}</code></pre>

        <h3 className="text-xl font-semibold text-white mt-8 mb-3">LEFT JOIN</h3>
        <p>Returns all rows from the <strong className="text-white">left</strong> table, with matching rows from the right table. Non-matching right-side columns are <code className="text-xs">NULL</code>.</p>
        <pre className="bg-[#1e293b] border border-[#334155] rounded-lg p-4 text-sm overflow-x-auto"><code>{`SELECT u.name, o.id AS order_id
FROM users u
LEFT JOIN orders o ON u.id = o.user_id;
-- Returns ALL users, even if they have no orders`}</code></pre>

        <h3 className="text-xl font-semibold text-white mt-8 mb-3">RIGHT JOIN</h3>
        <p>Returns all rows from the <strong className="text-white">right</strong> table, with matching rows from the left table. Less common — usually you can rewrite as a LEFT JOIN by swapping table order.</p>
        <pre className="bg-[#1e293b] border border-[#334155] rounded-lg p-4 text-sm overflow-x-auto"><code>{`SELECT u.name, o.id AS order_id
FROM users u
RIGHT JOIN orders o ON u.id = o.user_id;
-- All orders, even if user is missing`}</code></pre>

        <h3 className="text-xl font-semibold text-white mt-8 mb-3">FULL OUTER JOIN</h3>
        <p>Returns all rows from <strong className="text-white">both</strong> tables. Missing matches are <code className="text-xs">NULL</code> on the opposite side.</p>
        <pre className="bg-[#1e293b] border border-[#334155] rounded-lg p-4 text-sm overflow-x-auto"><code>{`SELECT u.name, o.id AS order_id
FROM users u
FULL OUTER JOIN orders o ON u.id = o.user_id;
-- All users and all orders, matched where possible`}</code></pre>

        <h3 className="text-xl font-semibold text-white mt-8 mb-3">CROSS JOIN</h3>
        <p>Cartesian product — every row from table A combined with every row from table B. Use sparingly.</p>
        <pre className="bg-[#1e293b] border border-[#334155] rounded-lg p-4 text-sm overflow-x-auto"><code>{`SELECT sizes.name, colors.name
FROM sizes
CROSS JOIN colors;
-- Returns size × color combinations`}</code></pre>

        <h3 className="text-xl font-semibold text-white mt-8 mb-3">Self JOIN</h3>
        <p>Joining a table to itself — useful for hierarchies (e.g., employees and managers).</p>
        <pre className="bg-[#1e293b] border border-[#334155] rounded-lg p-4 text-sm overflow-x-auto"><code>{`SELECT e.name AS employee, m.name AS manager
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.id;`}</code></pre>

        <div className="bg-[#1e293b] border border-[#334155] rounded-lg p-4">
          <p className="text-xs text-[#94a3b8] mb-1">💡 JOIN vs WHERE Filtering</p>
          <p className="text-sm text-[#cbd5e1]">
            Conditions on the <strong>right</strong> table in a LEFT JOIN should go in the
            JOIN clause, not the WHERE clause. A condition like{" "}
            <code className="text-xs">WHERE o.status = &apos;active&apos;</code> effectively
            converts a LEFT JOIN to an INNER JOIN because it filters out NULL rows.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          4. GROUP BY &amp; HAVING
        </h2>
        <p>
          <code className="text-xs">GROUP BY</code> groups rows with the same values, then
          aggregate functions are applied per group. <code className="text-xs">HAVING</code>{" "}
          filters groups (like WHERE filters rows).
        </p>

        <pre className="bg-[#1e293b] border border-[#334155] rounded-lg p-4 text-sm overflow-x-auto"><code>{`-- Count users per status
SELECT status, COUNT(*) AS user_count
FROM users
GROUP BY status;

-- Multiple grouping columns
SELECT category_id, YEAR(created_at) AS year, COUNT(*) AS count
FROM products
GROUP BY category_id, YEAR(created_at);

-- Using HAVING (filter groups)
SELECT category_id, AVG(price) AS avg_price
FROM products
GROUP BY category_id
HAVING AVG(price) > 50;

-- HAVING with multiple conditions
SELECT user_id, COUNT(*) AS order_count, SUM(total) AS total_spent
FROM orders
GROUP BY user_id
HAVING COUNT(*) >= 5 AND SUM(total) > 1000
ORDER BY total_spent DESC;`}</code></pre>

        <div className="bg-[#1e293b] border border-[#f59e0b]/30 rounded-lg p-4">
          <p className="text-xs text-[#f59e0b] mb-1">⚠️ WHERE vs HAVING</p>
          <p className="text-sm text-[#cbd5e1]">
            <strong className="text-white">WHERE</strong> filters rows before grouping.{" "}
            <strong className="text-white">HAVING</strong> filters groups after aggregation.
            You can use both in the same query:{" "}
            <code className="text-xs">WHERE created_at &gt; &apos;2024-01-01&apos;</code>{" "}
            (filter rows), then{" "}
            <code className="text-xs">HAVING COUNT(*) &gt; 5</code> (filter groups).
          </p>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          5. ORDER BY
        </h2>
        <p>Sort results by one or more columns. Sorting is applied last, after GROUP BY and HAVING.</p>

        <pre className="bg-[#1e293b] border border-[#334155] rounded-lg p-4 text-sm overflow-x-auto"><code>{`-- Ascending (default)
SELECT name, price FROM products ORDER BY price;

-- Descending
SELECT name, price FROM products ORDER BY price DESC;

-- Multiple sort keys
SELECT name, category_id, price
FROM products
ORDER BY category_id ASC, price DESC;

-- Sort by aggregate alias
SELECT category_id, COUNT(*) AS cnt
FROM products
GROUP BY category_id
ORDER BY cnt DESC;

-- Sort by column position (not recommended)
SELECT name, price FROM products ORDER BY 2 DESC;`}</code></pre>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          6. Subqueries
        </h2>
        <p>
          Subqueries (nested queries) can appear in SELECT, FROM, WHERE, or HAVING clauses.
          They let you break complex problems into logical steps.
        </p>

        <pre className="bg-[#1e293b] border border-[#334155] rounded-lg p-4 text-sm overflow-x-auto"><code>{`-- Subquery in WHERE
SELECT name, price
FROM products
WHERE price > (SELECT AVG(price) FROM products);

-- Subquery with IN
SELECT name, email
FROM users
WHERE id IN (SELECT user_id FROM orders WHERE total > 500);

-- Subquery in SELECT (scalar subquery)
SELECT
  u.name,
  (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS order_count
FROM users u;

-- Subquery in FROM (derived table / subquery as table)
SELECT category, AVG(price) AS avg_price
FROM (
  SELECT p.*, c.name AS category
  FROM products p
  JOIN categories c ON p.category_id = c.id
) AS product_categories
GROUP BY category;

-- Correlated subquery (references outer query)
SELECT p1.name, p1.price, p1.category_id
FROM products p1
WHERE p1.price = (
  SELECT MAX(p2.price)
  FROM products p2
  WHERE p2.category_id = p1.category_id
);
-- Gets the most expensive product in each category`}</code></pre>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          7. Common Functions
        </h2>

        <h3 className="text-xl font-semibold text-white mt-8 mb-3">Aggregate Functions</h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#1e293b]">
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Function</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Description</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs">COUNT(*)</td>
                <td className="p-3 border border-[#334155]">Count all rows in group</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">COUNT(*) AS total</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs">COUNT(column)</td>
                <td className="p-3 border border-[#334155]">Count non-NULL values</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">COUNT(email)</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs">COUNT(DISTINCT col)</td>
                <td className="p-3 border border-[#334155]">Count unique values</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">COUNT(DISTINCT city)</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs">SUM(column)</td>
                <td className="p-3 border border-[#334155]">Sum of values</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">SUM(total) AS revenue</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs">AVG(column)</td>
                <td className="p-3 border border-[#334155]">Average of values</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">AVG(price) AS avg_price</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs">MIN(column)</td>
                <td className="p-3 border border-[#334155]">Minimum value</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">MIN(created_at)</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs">MAX(column)</td>
                <td className="p-3 border border-[#334155]">Maximum value</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">MAX(score) AS high_score</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold text-white mt-8 mb-3">NULL Handling</h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#1e293b]">
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Function</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Description</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs">COALESCE(val1, val2, ...)</td>
                <td className="p-3 border border-[#334155]">Returns first non-NULL value</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">COALESCE(phone, email, &apos;N/A&apos;)</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs">NULLIF(expr1, expr2)</td>
                <td className="p-3 border border-[#334155]">Returns NULL if equal, else expr1</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">NULLIF(price, 0)</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs">IFNULL(expr, default)</td>
                <td className="p-3 border border-[#334155]">MySQL/ SQLite — replaces NULL</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">IFNULL(discount, 0)</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs">NVL(expr, default)</td>
                <td className="p-3 border border-[#334155]">Oracle — replaces NULL</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">NVL(commission, 0)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold text-white mt-8 mb-3">String Functions</h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#1e293b]">
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Function</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Description</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs">CONCAT(a, b, ...)</td>
                <td className="p-3 border border-[#334155]">Concatenate strings</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">CONCAT(first, &apos; &apos;, last)</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs">UPPER(str)</td>
                <td className="p-3 border border-[#334155]">Convert to uppercase</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">UPPER(email)</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs">LOWER(str)</td>
                <td className="p-3 border border-[#334155]">Convert to lowercase</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">LOWER(name)</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs">TRIM(str)</td>
                <td className="p-3 border border-[#334155]">Remove leading/trailing spaces</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">TRIM(&apos;  hello  &apos;)</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs">SUBSTRING(str, start, len)</td>
                <td className="p-3 border border-[#334155]">Extract substring</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">SUBSTRING(phone, 1, 3)</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs">REPLACE(str, from, to)</td>
                <td className="p-3 border border-[#334155]">Replace substring</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">REPLACE(name, &apos; &apos;, &apos;_&apos;)</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs">LENGTH(str)</td>
                <td className="p-3 border border-[#334155]">String length</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">LENGTH(description)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold text-white mt-8 mb-3">Date/Time Functions</h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#1e293b]">
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Function</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Description</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs">NOW() / CURRENT_TIMESTAMP</td>
                <td className="p-3 border border-[#334155]">Current date and time</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">WHERE created_at &lt; NOW()</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs">CURRENT_DATE</td>
                <td className="p-3 border border-[#334155]">Current date only</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">WHERE date = CURRENT_DATE</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs">DATE_TRUNC(part, date)</td>
                <td className="p-3 border border-[#334155]">Truncate date to precision</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">DATE_TRUNC(&apos;month&apos;, ts)</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-mono text-xs">EXTRACT(part FROM date)</td>
                <td className="p-3 border border-[#334155]">Extract a date part</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">EXTRACT(YEAR FROM ts)</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-mono text-xs">DATEDIFF(end, start)</td>
                <td className="p-3 border border-[#334155]">Difference in days</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">DATEDIFF(&apos;day&apos;, start, end)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          8. Window Functions
        </h2>
        <p>
          Window functions perform calculations across a set of rows related to the current row
          — <strong className="text-white">without collapsing</strong> the result set like GROUP BY
          does. They are among the most powerful SQL features for analytics.
        </p>

        <h3 className="text-xl font-semibold text-white mt-8 mb-3">ROW_NUMBER, RANK, DENSE_RANK</h3>

        <pre className="bg-[#1e293b] border border-[#334155] rounded-lg p-4 text-sm overflow-x-auto"><code>{`-- ROW_NUMBER: unique sequential number per partition
SELECT
  name,
  salary,
  department_id,
  ROW_NUMBER() OVER (PARTITION BY department_id ORDER BY salary DESC) AS rank
FROM employees;
-- Within each department, rank employees by salary descending

-- RANK: same values get same rank, next skips numbers
SELECT
  name, salary,
  RANK() OVER (ORDER BY salary DESC) AS rank
FROM employees;
-- 3rd place if 2 tied: 100, 95, 95, 90 → ranks 1, 2, 2, 4

-- DENSE_RANK: no gaps in ranking
SELECT
  name, salary,
  DENSE_RANK() OVER (ORDER BY salary DESC) AS dense_rank
FROM employees;
-- 100, 95, 95, 90 → ranks 1, 2, 2, 3`}</code></pre>

        <h3 className="text-xl font-semibold text-white mt-8 mb-3">LAG and LEAD</h3>
        <p>Access data from previous or next rows without self-joins.</p>

        <pre className="bg-[#1e293b] border border-[#334155] rounded-lg p-4 text-sm overflow-x-auto"><code>{`-- LAG: previous row value
SELECT
  date,
  revenue,
  LAG(revenue, 1) OVER (ORDER BY date) AS prev_day_revenue,
  LAG(revenue, 7) OVER (ORDER BY date) AS prev_week_revenue
FROM daily_revenue;

-- LEAD: next row value
SELECT
  date,
  revenue,
  LEAD(revenue, 1) OVER (ORDER BY date) AS next_day_revenue
FROM daily_revenue;

-- Difference from previous value
SELECT
  employee_id,
  salary,
  salary - LAG(salary, 1, 0) OVER (ORDER BY employee_id) AS salary_change
FROM salaries;`}</code></pre>

        <h3 className="text-xl font-semibold text-white mt-8 mb-3">Aggregate Window Functions</h3>

        <pre className="bg-[#1e293b] border border-[#334155] rounded-lg p-4 text-sm overflow-x-auto"><code>{`-- Running total
SELECT
  date,
  amount,
  SUM(amount) OVER (ORDER BY date) AS running_total
FROM transactions;

-- Moving average (3-day)
SELECT
  date,
  revenue,
  AVG(revenue) OVER (ORDER BY date ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) AS moving_avg_3day
FROM daily_revenue;

-- Partitioned aggregates
SELECT
  department_id,
  employee_name,
  salary,
  AVG(salary) OVER (PARTITION BY department_id) AS dept_avg_salary,
  salary - AVG(salary) OVER (PARTITION BY department_id) AS diff_from_dept_avg
FROM employees;`}</code></pre>

        <div className="bg-[#1e293b] border border-[#334155] rounded-lg p-4">
          <p className="text-xs text-[#94a3b8] mb-1">💡 Window Function Frame Clause</p>
          <p className="text-sm text-[#cbd5e1]">
            The frame clause (<code className="text-xs">ROWS BETWEEN ...</code> or{" "}
            <code className="text-xs">RANGE BETWEEN ...</code>) defines which rows are included
            in the window. Common frames:{" "}
            <code className="text-xs">UNBOUNDED PRECEDING</code> (all previous),{" "}
            <code className="text-xs">CURRENT ROW</code>, and{" "}
            <code className="text-xs">N FOLLOWING</code>.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          9. DML: INSERT, UPDATE, DELETE
        </h2>

        <h3 className="text-xl font-semibold text-white mt-8 mb-3">INSERT</h3>
        <pre className="bg-[#1e293b] border border-[#334155] rounded-lg p-4 text-sm overflow-x-auto"><code>{`-- Single row
INSERT INTO users (name, email, status)
VALUES ('Alice', 'alice@example.com', 'active');

-- Multiple rows
INSERT INTO products (name, price, category_id)
VALUES
  ('Widget', 9.99, 1),
  ('Gadget', 24.99, 1),
  ('Doohickey', 14.99, 2);

-- Insert from query
INSERT INTO archived_orders (id, user_id, total, created_at)
SELECT id, user_id, total, created_at
FROM orders
WHERE created_at < '2023-01-01';`}</code></pre>

        <h3 className="text-xl font-semibold text-white mt-8 mb-3">UPDATE</h3>
        <pre className="bg-[#1e293b] border border-[#334155] rounded-lg p-4 text-sm overflow-x-auto"><code>{`-- Simple update
UPDATE users
SET status = 'inactive'
WHERE last_login < '2024-01-01';

-- Update multiple columns
UPDATE products
SET
  price = price * 1.10,
  updated_at = NOW()
WHERE category_id = 5;

-- Update with subquery
UPDATE products
SET category_id = (
  SELECT id FROM categories WHERE name = 'Clearance'
)
WHERE category_id IS NULL;`}</code></pre>

        <h3 className="text-xl font-semibold text-white mt-8 mb-3">DELETE</h3>
        <pre className="bg-[#1e293b] border border-[#334155] rounded-lg p-4 text-sm overflow-x-auto"><code>{`-- Delete specific rows
DELETE FROM logs WHERE created_at < '2020-01-01';

-- Delete all rows (truncate is faster)
DELETE FROM temp_data;

-- Delete with subquery
DELETE FROM users
WHERE id NOT IN (SELECT DISTINCT user_id FROM orders);`}</code></pre>

        <div className="bg-[#1e293b] border border-[#f59e0b]/30 rounded-lg p-4">
          <p className="text-xs text-[#f59e0b] mb-1">⚠️ Always Use WHERE in DELETE/UPDATE</p>
          <p className="text-sm text-[#cbd5e1]">
            Forgetting the WHERE clause in a DELETE or UPDATE affects <strong>all rows</strong>.
            When writing destructive queries, first write the matching SELECT to verify which
            rows will be affected.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          10. DDL: CREATE TABLE &amp; Indexes
        </h2>

        <h3 className="text-xl font-semibold text-white mt-8 mb-3">CREATE TABLE</h3>
        <pre className="bg-[#1e293b] border border-[#334155] rounded-lg p-4 text-sm overflow-x-auto"><code>{`-- Basic table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  status VARCHAR(20) DEFAULT 'active',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table with foreign key
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id),
  total DECIMAL(10, 2) NOT NULL CHECK (total >= 0),
  status VARCHAR(20) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table with composite primary key
CREATE TABLE order_items (
  order_id INTEGER REFERENCES orders(id),
  product_id INTEGER REFERENCES products(id),
  quantity INTEGER NOT NULL,
  unit_price DECIMAL(10, 2) NOT NULL,
  PRIMARY KEY (order_id, product_id)
);`}</code></pre>

        <h3 className="text-xl font-semibold text-white mt-8 mb-3">Indexes</h3>
        <p>
          Indexes speed up queries at the cost of slower writes. Use them on columns used
          in WHERE, JOIN, and ORDER BY.
        </p>

        <pre className="bg-[#1e293b] border border-[#334155] rounded-lg p-4 text-sm overflow-x-auto"><code>{`-- Single column index
CREATE INDEX idx_users_email ON users(email);

-- Composite index (column order matters!)
CREATE INDEX idx_orders_user_status ON orders(user_id, status);

-- Unique index
CREATE UNIQUE INDEX idx_products_sku ON products(sku);

-- Partial index (Postgres)
CREATE INDEX idx_active_users ON users(email) WHERE status = 'active';

-- Full-text index (MySQL/Postgres)
CREATE INDEX idx_products_name ON products USING GIN(to_tsvector('english', name));

-- Drop index
DROP INDEX idx_users_email;`}</code></pre>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          11. Query Optimization Tips
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#1e293b]">
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Tip</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Explanation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-[#334155] font-semibold text-white">Avoid SELECT *</td>
                <td className="p-3 border border-[#334155]">Only fetch columns you need. Reduces I/O and network overhead.</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-semibold text-white">Use EXISTS vs IN</td>
                <td className="p-3 border border-[#334155]"><code className="text-xs">EXISTS</code> stops scanning as soon as a match is found. <code className="text-xs">IN</code> materializes the entire subquery result.</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-semibold text-white">Index JOIN columns</td>
                <td className="p-3 border border-[#334155]">Columns used in <code className="text-xs">ON</code> and <code className="text-xs">WHERE</code> clauses should be indexed.</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-semibold text-white">Avoid functions in WHERE</td>
                <td className="p-3 border border-[#334155]"><code className="text-xs">WHERE YEAR(created_at) = 2024</code> prevents index use. Use <code className="text-xs">WHERE created_at &gt;= &apos;2024-01-01&apos; AND created_at &lt; &apos;2025-01-01&apos;</code> instead.</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-semibold text-white">Use UNION ALL instead of UNION</td>
                <td className="p-3 border border-[#334155]"><code className="text-xs">UNION</code> deduplicates (extra sort). <code className="text-xs">UNION ALL</code> just appends — use it when you know there are no duplicates.</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-semibold text-white">Use EXPLAIN</td>
                <td className="p-3 border border-[#334155]"><code className="text-xs">EXPLAIN ANALYZE SELECT ...</code> shows the query plan and actual execution time. Always check it for slow queries.</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-semibold text-white">Limit pagination depth</td>
                <td className="p-3 border border-[#334155]"><code className="text-xs">OFFSET 10000 LIMIT 10</code> still scans 10010 rows. Use keyset pagination (<code className="text-xs">WHERE id &gt; last_id LIMIT 10</code>) for deep pages.</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-semibold text-white">Use materialized views</td>
                <td className="p-3 border border-[#334155]">For expensive aggregations that don&apos;t change often, precompute with <code className="text-xs">CREATE MATERIALIZED VIEW</code> and refresh periodically.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          12. Common Table Expressions (CTEs)
        </h2>
        <p>
          CTEs let you name a subquery and reference it like a table. They improve readability
          and enable recursive queries.
        </p>

        <pre className="bg-[#1e293b] border border-[#334155] rounded-lg p-4 text-sm overflow-x-auto"><code>{`-- Basic CTE
WITH high_value_orders AS (
  SELECT user_id, SUM(total) AS total_spent
  FROM orders
  WHERE status = 'delivered'
  GROUP BY user_id
  HAVING SUM(total) > 1000
)
SELECT u.name, h.total_spent
FROM users u
JOIN high_value_orders h ON u.id = h.user_id;

-- Recursive CTE (hierarchy)
WITH RECURSIVE org_chart AS (
  -- Base: top-level managers
  SELECT id, name, manager_id, 1 AS level
  FROM employees
  WHERE manager_id IS NULL

  UNION ALL

  -- Recursive: direct reports
  SELECT e.id, e.name, e.manager_id, oc.level + 1
  FROM employees e
  JOIN org_chart oc ON e.manager_id = oc.id
)
SELECT * FROM org_chart ORDER BY level, name;`}</code></pre>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          13. Database-Specific Syntax
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#1e293b]">
                <th className="text-left p-3 border border-[#334155] font-medium text-white">Feature</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">PostgreSQL</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">MySQL</th>
                <th className="text-left p-3 border border-[#334155] font-medium text-white">SQL Server</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-[#334155] font-semibold text-white">Auto-increment</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">SERIAL / IDENTITY</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">AUTO_INCREMENT</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">IDENTITY(1,1)</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-semibold text-white">ILIKE</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">ILIKE (case-insensitive)</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">LIKE (case-insensitive by default)</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">LIKE (case-insensitive based on collation)</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-semibold text-white">LIMIT</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">LIMIT 10 OFFSET 20</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">LIMIT 10 OFFSET 20</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">OFFSET 20 ROWS FETCH NEXT 10 ROWS ONLY</td>
              </tr>
              <tr className="bg-[#1e293b]/50">
                <td className="p-3 border border-[#334155] font-semibold text-white">String concat</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">\|\|</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">CONCAT()</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">+ or CONCAT()</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#334155] font-semibold text-white">Upsert</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">ON CONFLICT DO UPDATE</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">ON DUPLICATE KEY UPDATE</td>
                <td className="p-3 border border-[#334155] font-mono text-xs">MERGE</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
          Common Mistakes &amp; How to Avoid Them
        </h2>
        <p>
          These five mistakes cause most of the slow queries and wrong results
          I&apos;ve debugged in production. Each one has a simple fix once you
          know what to look for.
        </p>
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong className="text-white">Comparing to NULL with <code className="text-xs">=</code>.</strong>{" "}
            <code className="text-xs">WHERE email = NULL</code> returns zero rows
            because NULL comparisons evaluate to UNKNOWN, not TRUE. Always use{" "}
            <code className="text-xs">IS NULL</code> / <code className="text-xs">IS NOT NULL</code>{" "}
            — and remember that <code className="text-xs">NULL &lt;&gt; &apos;x&apos;</code>{" "}
            also excludes NULL rows.
          </li>
          <li>
            <strong className="text-white">Using <code className="text-xs">SELECT *</code> in production code.</strong>{" "}
            It pulls every column, wasting I/O and bandwidth, and silently breaks when
            someone adds a column. List columns explicitly — it also makes your
            application&apos;s data contract visible in the query itself.
          </li>
          <li>
            <strong className="text-white">The N+1 query trap.</strong>{" "}
            Fetching a list of users, then running one query per user inside a loop,
            is the classic ORM performance killer. Replace it with a single JOIN or an{" "}
            <code className="text-xs">IN</code> subquery:{" "}
            <code className="text-xs">SELECT * FROM orders WHERE user_id IN (SELECT id FROM users WHERE plan = &apos;pro&apos;)</code>.
          </li>
          <li>
            <strong className="text-white">Wrapping indexed columns in functions.</strong>{" "}
            <code className="text-xs">WHERE YEAR(created_at) = 2024</code> forces a full
            scan because the index stores raw values, not function results. Use a range
            predicate instead:{" "}
            <code className="text-xs">created_at &gt;= &apos;2024-01-01&apos; AND created_at &lt; &apos;2025-01-01&apos;</code>.
          </li>
          <li>
            <strong className="text-white">Deep OFFSET pagination.</strong>{" "}
            <code className="text-xs">OFFSET 100000 LIMIT 50</code> still reads and
            discards 100,000 rows. Use keyset pagination —{" "}
            <code className="text-xs">WHERE id &gt; last_seen_id ORDER BY id LIMIT 50</code>{" "}
            — which stays fast no matter how deep you go.
          </li>
        </ul>

        <section className="mt-10 pt-8 border-t border-[#334155]">
          <h2 className="text-2xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="group rounded-lg bg-[#1e293b] border border-[#334155] overflow-hidden">
              <summary className="flex items-center justify-between px-4 py-3 text-sm text-white cursor-pointer hover:bg-[#334155] transition-colors list-none">
                <span>What&apos;s the difference between INNER JOIN and LEFT JOIN?</span>
                <svg className="w-4 h-4 text-[#64748b] group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-4 pb-3 text-xs text-[#94a3b8] leading-relaxed">
                <code className="text-xs">INNER JOIN</code> returns only rows that have
                matches in both tables. <code className="text-xs">LEFT JOIN</code> returns
                every row from the left table, filling unmatched right-side columns with{" "}
                <code className="text-xs">NULL</code>. If your result is missing rows, you
                probably need a LEFT JOIN; if you&apos;re seeing duplicate rows, the
                &quot;one&quot; side has multiple matches.
              </div>
            </details>
            <details className="group rounded-lg bg-[#1e293b] border border-[#334155] overflow-hidden">
              <summary className="flex items-center justify-between px-4 py-3 text-sm text-white cursor-pointer hover:bg-[#334155] transition-colors list-none">
                <span>Why is my query slow, and how do I fix it?</span>
                <svg className="w-4 h-4 text-[#64748b] group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-4 pb-3 text-xs text-[#94a3b8] leading-relaxed">
                Start with <code className="text-xs">EXPLAIN ANALYZE SELECT ...</code> and
                look for sequential scans on large tables — add an index on the columns
                used in <code className="text-xs">WHERE</code> and{" "}
                <code className="text-xs">JOIN</code>. Avoid <code className="text-xs">SELECT *</code>,
                avoid functions around indexed columns, and prefer{" "}
                <code className="text-xs">EXISTS</code> over{" "}
                <code className="text-xs">IN</code> for large subqueries.
              </div>
            </details>
            <details className="group rounded-lg bg-[#1e293b] border border-[#334155] overflow-hidden">
              <summary className="flex items-center justify-between px-4 py-3 text-sm text-white cursor-pointer hover:bg-[#334155] transition-colors list-none">
                <span>What&apos;s the difference between WHERE and HAVING?</span>
                <svg className="w-4 h-4 text-[#64748b] group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-4 pb-3 text-xs text-[#94a3b8] leading-relaxed">
                <code className="text-xs">WHERE</code> filters individual rows{" "}
                <em>before</em> grouping; <code className="text-xs">HAVING</code> filters
                groups <em>after</em> aggregation. That&apos;s why{" "}
                <code className="text-xs">WHERE</code> can&apos;t reference{" "}
                <code className="text-xs">SUM()</code> or <code className="text-xs">COUNT()</code>,
                but <code className="text-xs">HAVING</code> can. Use{" "}
                <code className="text-xs">WHERE status = &apos;paid&apos;</code> to drop rows,
                and <code className="text-xs">HAVING SUM(total) &gt; 100</code> to drop groups.
              </div>
            </details>
            <details className="group rounded-lg bg-[#1e293b] border border-[#334155] overflow-hidden">
              <summary className="flex items-center justify-between px-4 py-3 text-sm text-white cursor-pointer hover:bg-[#334155] transition-colors list-none">
                <span>Why do COUNT(*) and COUNT(column) give different results?</span>
                <svg className="w-4 h-4 text-[#64748b] group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-4 pb-3 text-xs text-[#94a3b8] leading-relaxed">
                <code className="text-xs">COUNT(*)</code> counts every row, including rows
                with NULLs. <code className="text-xs">COUNT(column)</code> counts only
                non-NULL values in that column. If the two numbers differ, your column
                contains NULLs — which is often the real signal you&apos;re looking for.
              </div>
            </details>
            <details className="group rounded-lg bg-[#1e293b] border border-[#334155] overflow-hidden">
              <summary className="flex items-center justify-between px-4 py-3 text-sm text-white cursor-pointer hover:bg-[#334155] transition-colors list-none">
                <span>How do I avoid the N+1 query problem?</span>
                <svg className="w-4 h-4 text-[#64748b] group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-4 pb-3 text-xs text-[#94a3b8] leading-relaxed">
                Replace loop-based per-row queries with a single JOIN or an{" "}
                <code className="text-xs">IN</code> subquery. Instead of querying orders
                once per user, fetch them all at once:{" "}
                <code className="text-xs">SELECT * FROM orders WHERE user_id IN (SELECT id FROM users WHERE plan = &apos;pro&apos;)</code>.{" "}
                In ORMs, use eager loading (<code className="text-xs">selectinload</code> in
                SQLAlchemy, <code className="text-xs">includes</code> in Rails/EF) rather
                than lazy loading.
              </div>
            </details>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html:
              '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the difference between INNER JOIN and LEFT JOIN?","acceptedAnswer":{"@type":"Answer","text":"INNER JOIN returns only rows with matches in both tables. LEFT JOIN returns every row from the left table and fills unmatched right-side columns with NULL. Missing rows usually means you need LEFT JOIN; duplicate rows usually means multiple matches on one side."}},{"@type":"Question","name":"Why is my SQL query slow and how do I fix it?","acceptedAnswer":{"@type":"Answer","text":"Run EXPLAIN ANALYZE SELECT and look for sequential scans on large tables, then index the columns used in WHERE and JOIN clauses. Avoid SELECT *, avoid functions on indexed columns, and prefer EXISTS over IN for large subqueries."}},{"@type":"Question","name":"What is the difference between WHERE and HAVING?","acceptedAnswer":{"@type":"Answer","text":"WHERE filters individual rows before grouping, while HAVING filters groups after aggregation. WHERE cannot reference aggregate functions like SUM, and HAVING filters the grouped result set."}},{"@type":"Question","name":"Why do COUNT(*) and COUNT(column) give different results?","acceptedAnswer":{"@type":"Answer","text":"COUNT(*) counts every row including rows with NULL values. COUNT(column) counts only non-NULL values in that column. If the two numbers differ, your column contains NULLs."}},{"@type":"Question","name":"How do I avoid the N+1 query problem?","acceptedAnswer":{"@type":"Answer","text":"Replace loop-based per-row queries with a single JOIN or an IN subquery, and use eager loading in ORMs instead of lazy loading."}}]}',
          }}
        />

        <div className="bg-[#1e293b] border border-[#334155] rounded-lg p-4">
          <p className="text-xs text-[#94a3b8] mb-1">🔍 Related Resources</p>
          <p className="text-sm">
            Check out our{" "}
            <a href="/blog/timestamp-cheat-sheet" className="text-[#3b82f6] hover:text-blue-300">
              Unix Timestamp Cheat Sheet
            </a>{" "}
            for working with dates across SQL databases, and our{" "}
            <a href="/tools/json-formatter" className="text-[#3b82f6] hover:text-blue-300">
              JSON Formatter
            </a>{" "}
            for visualizing query results.
          </p>
        </div>
      </div>
    </article>
  );
}
