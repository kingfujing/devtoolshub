---
title: "SQL Query Cheat Sheet: Essential Queries and Patterns"
description: "Essential SQL query reference for developers. SELECT, JOIN, GROUP BY, subqueries, window functions, query optimization tips, common mista..."
tags: [webdev, sql, database, tutorial]
canonical_url: https://devtoolshub.cloud/blog/sql-query-cheat-sheet
published: true
cover_image: https://devtoolshub.cloud/og-devto-cover.png
---

> Originally published on [DevToolsHub](https://devtoolshub.cloud/blog/sql-query-cheat-sheet) — free, privacy-first online tools for developers.

SQL is the language of data. Whether you're pulling records from a Postgres
          database, debugging a slow query in MySQL, or writing analytics queries in
          Snowflake, the fundamentals are the same. This cheat sheet covers everything from
          basic SELECT statements to advanced window functions — with syntax that works
          across most major SQL databases.



          Each section includes the syntax, a practical example, and notes on database-specific
          differences where they matter. Bookmark this page and use it as your daily reference
          for writing SQL queries.



> **⚡ Quick Tip** Use our
 [
 JSON Formatter
 ](https://devtoolshub.cloud/tools/json-formatter)
 to prettify your JSON query results, and our
 [
 Regex Tester
 ](https://devtoolshub.cloud/tools/regex-tester)
 for crafting SQL pattern-matching expressions.


## 1. SELECT & FROM


          The foundation of every SQL query. `SELECT` specifies
          which columns to return, `FROM` specifies the table.



```sql
-- Select all columns
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
SELECT * FROM products OFFSET 0 ROWS FETCH NEXT 10 ROWS ONLY;
```


## 2. WHERE Clause


          Filter rows based on conditions. The WHERE clause is evaluated row-by-row before
          GROUP BY and aggregate functions.



```sql
-- Comparison operators
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
  AND (category_id = 5 OR category_id = 8);
```


> **⚠️ NULL Comparison** NULL is not equal to anything — not even
 NULL . Use IS NULL
 or IS NOT NULL . Expressions like
 column = NULL will always evaluate to false
 (or unknown in SQL three-valued logic).


## 3. JOINs


          Combine rows from two or more tables based on related columns. Understanding JOINs
          is critical for working with normalized databases.



### INNER JOIN

        Returns rows where there is a match in **both** tables.


```sql
SELECT u.name, o.id AS order_id, o.total
FROM users u
INNER JOIN orders o ON u.id = o.user_id;
-- Only returns users with at least one order
```


### LEFT JOIN

        Returns all rows from the **left** table, with matching rows from the right table. Non-matching right-side columns are `NULL`.


```sql
SELECT u.name, o.id AS order_id
FROM users u
LEFT JOIN orders o ON u.id = o.user_id;
-- Returns ALL users, even if they have no orders
```


### RIGHT JOIN

        Returns all rows from the **right** table, with matching rows from the left table. Less common — usually you can rewrite as a LEFT JOIN by swapping table order.


```sql
SELECT u.name, o.id AS order_id
FROM users u
RIGHT JOIN orders o ON u.id = o.user_id;
-- All orders, even if user is missing
```


### FULL OUTER JOIN

        Returns all rows from **both** tables. Missing matches are `NULL` on the opposite side.


```sql
SELECT u.name, o.id AS order_id
FROM users u
FULL OUTER JOIN orders o ON u.id = o.user_id;
-- All users and all orders, matched where possible
```


### CROSS JOIN

        Cartesian product — every row from table A combined with every row from table B. Use sparingly.


```sql
SELECT sizes.name, colors.name
FROM sizes
CROSS JOIN colors;
-- Returns size × color combinations
```


### Self JOIN

        Joining a table to itself — useful for hierarchies (e.g., employees and managers).


```sql
SELECT e.name AS employee, m.name AS manager
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.id;
```


> **💡 JOIN vs WHERE Filtering** Conditions on the right table in a LEFT JOIN should go in the
 JOIN clause, not the WHERE clause. A condition like
 WHERE o.status = 'active' effectively
 converts a LEFT JOIN to an INNER JOIN because it filters out NULL rows.


## 4. GROUP BY & HAVING


          `GROUP BY` groups rows with the same values, then
          aggregate functions are applied per group. `HAVING`
          filters groups (like WHERE filters rows).



```sql
-- Count users per status
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
ORDER BY total_spent DESC;
```


> **⚠️ WHERE vs HAVING** WHERE filters rows before grouping.
 HAVING filters groups after aggregation.
 You can use both in the same query:
 WHERE created_at > '2024-01-01'
 (filter rows), then
 HAVING COUNT(*) > 5 (filter groups).


## 5. ORDER BY

        Sort results by one or more columns. Sorting is applied last, after GROUP BY and HAVING.


```sql
-- Ascending (default)
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
SELECT name, price FROM products ORDER BY 2 DESC;
```


## 6. Subqueries


          Subqueries (nested queries) can appear in SELECT, FROM, WHERE, or HAVING clauses.
          They let you break complex problems into logical steps.



```sql
-- Subquery in WHERE
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
-- Gets the most expensive product in each category
```


## 7. Common Functions


### Aggregate Functions


| Function | Description | Example |
| --- | --- | --- |
| COUNT(*) | Count all rows in group | COUNT(*) AS total |
| COUNT(column) | Count non-NULL values | COUNT(email) |
| COUNT(DISTINCT col) | Count unique values | COUNT(DISTINCT city) |
| SUM(column) | Sum of values | SUM(total) AS revenue |
| AVG(column) | Average of values | AVG(price) AS avg_price |
| MIN(column) | Minimum value | MIN(created_at) |
| MAX(column) | Maximum value | MAX(score) AS high_score |


### NULL Handling


| Function | Description | Example |
| --- | --- | --- |
| COALESCE(val1, val2, ...) | Returns first non-NULL value | COALESCE(phone, email, 'N/A') |
| NULLIF(expr1, expr2) | Returns NULL if equal, else expr1 | NULLIF(price, 0) |
| IFNULL(expr, default) | MySQL/ SQLite — replaces NULL | IFNULL(discount, 0) |
| NVL(expr, default) | Oracle — replaces NULL | NVL(commission, 0) |


### String Functions


| Function | Description | Example |
| --- | --- | --- |
| CONCAT(a, b, ...) | Concatenate strings | CONCAT(first, ' ', last) |
| UPPER(str) | Convert to uppercase | UPPER(email) |
| LOWER(str) | Convert to lowercase | LOWER(name) |
| TRIM(str) | Remove leading/trailing spaces | TRIM(' hello ') |
| SUBSTRING(str, start, len) | Extract substring | SUBSTRING(phone, 1, 3) |
| REPLACE(str, from, to) | Replace substring | REPLACE(name, ' ', '_') |
| LENGTH(str) | String length | LENGTH(description) |


### Date/Time Functions


| Function | Description | Example |
| --- | --- | --- |
| NOW() / CURRENT_TIMESTAMP | Current date and time | WHERE created_at < NOW() |
| CURRENT_DATE | Current date only | WHERE date = CURRENT_DATE |
| DATE_TRUNC(part, date) | Truncate date to precision | DATE_TRUNC('month', ts) |
| EXTRACT(part FROM date) | Extract a date part | EXTRACT(YEAR FROM ts) |
| DATEDIFF(end, start) | Difference in days | DATEDIFF('day', start, end) |


## 8. Window Functions


          Window functions perform calculations across a set of rows related to the current row
          — **without collapsing** the result set like GROUP BY
          does. They are among the most powerful SQL features for analytics.



### ROW_NUMBER, RANK, DENSE_RANK


```sql
-- ROW_NUMBER: unique sequential number per partition
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
-- 100, 95, 95, 90 → ranks 1, 2, 2, 3
```


### LAG and LEAD

        Access data from previous or next rows without self-joins.


```sql
-- LAG: previous row value
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
FROM salaries;
```


### Aggregate Window Functions


```sql
-- Running total
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
FROM employees;
```


> **💡 Window Function Frame Clause** The frame clause ( ROWS BETWEEN ... or
 RANGE BETWEEN ... ) defines which rows are included
 in the window. Common frames:
 UNBOUNDED PRECEDING (all previous),
 CURRENT ROW , and
 N FOLLOWING .


## 9. DML: INSERT, UPDATE, DELETE


### INSERT


```sql
-- Single row
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
WHERE created_at < '2023-01-01';
```


### UPDATE


```sql
-- Simple update
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
WHERE category_id IS NULL;
```


### DELETE


```sql
-- Delete specific rows
DELETE FROM logs WHERE created_at < '2020-01-01';

-- Delete all rows (truncate is faster)
DELETE FROM temp_data;

-- Delete with subquery
DELETE FROM users
WHERE id NOT IN (SELECT DISTINCT user_id FROM orders);
```


> **⚠️ Always Use WHERE in DELETE/UPDATE** Forgetting the WHERE clause in a DELETE or UPDATE affects all rows .
 When writing destructive queries, first write the matching SELECT to verify which
 rows will be affected.


## 10. DDL: CREATE TABLE & Indexes


### CREATE TABLE


```bash
-- Basic table
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
);
```


### Indexes


          Indexes speed up queries at the cost of slower writes. Use them on columns used
          in WHERE, JOIN, and ORDER BY.



```sql
-- Single column index
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
DROP INDEX idx_users_email;
```


## 11. Query Optimization Tips


| Tip | Explanation |
| --- | --- |
| Avoid SELECT * | Only fetch columns you need. Reduces I/O and network overhead. |
| Use EXISTS vs IN | `EXISTS` stops scanning as soon as a match is found. `IN` materializes the entire subquery result. |
| Index JOIN columns | Columns used in `ON` and `WHERE` clauses should be indexed. |
| Avoid functions in WHERE | `WHERE YEAR(created_at) = 2024` prevents index use. Use `WHERE created_at >= '2024-01-01' AND created_at < '2025-01-01'` instead. |
| Use UNION ALL instead of UNION | `UNION` deduplicates (extra sort). `UNION ALL` just appends — use it when you know there are no duplicates. |
| Use EXPLAIN | `EXPLAIN ANALYZE SELECT ...` shows the query plan and actual execution time. Always check it for slow queries. |
| Limit pagination depth | `OFFSET 10000 LIMIT 10` still scans 10010 rows. Use keyset pagination (`WHERE id > last_id LIMIT 10`) for deep pages. |
| Use materialized views | For expensive aggregations that don't change often, precompute with `CREATE MATERIALIZED VIEW` and refresh periodically. |


## 12. Common Table Expressions (CTEs)


          CTEs let you name a subquery and reference it like a table. They improve readability
          and enable recursive queries.



```sql
-- Basic CTE
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
SELECT * FROM org_chart ORDER BY level, name;
```


## 13. Database-Specific Syntax


| Feature | PostgreSQL | MySQL | SQL Server |
| --- | --- | --- | --- |
| Auto-increment | SERIAL / IDENTITY | AUTO_INCREMENT | IDENTITY(1,1) |
| ILIKE | ILIKE (case-insensitive) | LIKE (case-insensitive by default) | LIKE (case-insensitive based on collation) |
| LIMIT | LIMIT 10 OFFSET 20 | LIMIT 10 OFFSET 20 | OFFSET 20 ROWS FETCH NEXT 10 ROWS ONLY |
| String concat | \\|\\| | CONCAT() | + or CONCAT() |
| Upsert | ON CONFLICT DO UPDATE | ON DUPLICATE KEY UPDATE | MERGE |


## Common Mistakes & How to Avoid Them


          These five mistakes cause most of the slow queries and wrong results
          I've debugged in production. Each one has a simple fix once you
          know what to look for.




          -
            **Comparing to NULL with `=`.**
            `WHERE email = NULL` returns zero rows
            because NULL comparisons evaluate to UNKNOWN, not TRUE. Always use
            `IS NULL` / `IS NOT NULL`
            — and remember that `NULL <> 'x'`
            also excludes NULL rows.


          -
            **Using `SELECT *` in production code.**
            It pulls every column, wasting I/O and bandwidth, and silently breaks when
            someone adds a column. List columns explicitly — it also makes your
            application's data contract visible in the query itself.


          -
            **The N+1 query trap.**
            Fetching a list of users, then running one query per user inside a loop,
            is the classic ORM performance killer. Replace it with a single JOIN or an
            `IN` subquery:
            `SELECT * FROM orders WHERE user_id IN (SELECT id FROM users WHERE plan = 'pro')`.


          -
            **Wrapping indexed columns in functions.**
            `WHERE YEAR(created_at) = 2024` forces a full
            scan because the index stores raw values, not function results. Use a range
            predicate instead:
            `created_at >= '2024-01-01' AND created_at < '2025-01-01'`.


          -
            **Deep OFFSET pagination.**
            `OFFSET 100000 LIMIT 50` still reads and
            discards 100,000 rows. Use keyset pagination —
            `WHERE id > last_seen_id ORDER BY id LIMIT 50`
            — which stays fast no matter how deep you go.






## Frequently Asked Questions



### What's the difference between INNER JOIN and LEFT JOIN?

INNER JOIN returns only rows that have
                matches in both tables. LEFT JOIN returns
                every row from the left table, filling unmatched right-side columns with
                NULL. If your result is missing rows, you
                probably need a LEFT JOIN; if you're seeing duplicate rows, the
                "one" side has multiple matches.


### Why is my query slow, and how do I fix it?

Start with EXPLAIN ANALYZE SELECT ... and
                look for sequential scans on large tables — add an index on the columns
                used in WHERE and
                JOIN. Avoid SELECT *,
                avoid functions around indexed columns, and prefer
                EXISTS over
                IN for large subqueries.


### What's the difference between WHERE and HAVING?

WHERE filters individual rows
                before grouping; HAVING filters
                groups after aggregation. That's why
                WHERE can't reference
                SUM() or COUNT(),
                but HAVING can. Use
                WHERE status = 'paid' to drop rows,
                and HAVING SUM(total) > 100 to drop groups.


### Why do COUNT(*) and COUNT(column) give different results?

COUNT(*) counts every row, including rows
                with NULLs. COUNT(column) counts only
                non-NULL values in that column. If the two numbers differ, your column
                contains NULLs — which is often the real signal you're looking for.


### How do I avoid the N+1 query problem?

Replace loop-based per-row queries with a single JOIN or an
                IN subquery. Instead of querying orders
                once per user, fetch them all at once:
                SELECT * FROM orders WHERE user_id IN (SELECT id FROM users WHERE plan = 'pro').
                In ORMs, use eager loading (selectinload in
                SQLAlchemy, includes in Rails/EF) rather
                than lazy loading.







> **🔍 Related Resources** Check out our
 [
 Unix Timestamp Cheat Sheet
 ](https://devtoolshub.cloud/blog/timestamp-cheat-sheet)
 for working with dates across SQL databases, and our
 [
 JSON Formatter
 ](https://devtoolshub.cloud/tools/json-formatter)
 for visualizing query results.
