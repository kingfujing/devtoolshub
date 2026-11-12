#!/usr/bin/env python3
"""JSX/TSX 博客页 → Dev.to Markdown 确定性转换器（无 LLM，规则引擎）"""
import re, sys, html as htmllib

SITE = "https://devtoolshub.cloud"

def ent(s):
    return (s.replace("&apos;", "'").replace("&#x27;", "'").replace("&quot;", '"')
             .replace("&amp;", "&").replace("&lt;", "<").replace("&gt;", ">")
             .replace("&nbsp;", " ").replace("&mdash;", "—").replace("&rarr;", "→")
             .replace("&larr;", "←").replace("&times;", "×").replace("&hellip;", "…"))

def abs_link(m):
    href, text = m.group(1), m.group(2)
    if href.startswith("/"):
        href = SITE + href
    return f"[{text}]({href})"

def convert_pre(m):
    """<pre...><code...>{`CONTENT`}</code></pre> → fenced block"""
    inner = m.group(1)
    # 语言猜测
    lang = ""
    if re.search(r'\b(const|let|var|function|=>|import )', inner): lang = "javascript"
    elif re.search(r'\b(SELECT|FROM|WHERE|JOIN)\b', inner, re.I): lang = "sql"
    elif re.search(r'\{|:\s*;|px|rem', inner) and "{" in inner: lang = "css"
    elif re.search(r'^\s*[\w.-]+\s+\w+|git |cron', inner, re.M): lang = "bash"
    if inner.lstrip().startswith(("{", "<")) and lang == "": lang = "html"
    return f"\n```{lang}\n{inner}\n```\n"

def convert_table(tbl):
    """整个 <table...>...</table> → Markdown 表格"""
    rows = re.findall(r'<tr[^>]*>(.*?)</tr>', tbl, re.DOTALL)
    out_rows = []
    for r in rows:
        cells = re.findall(r'<t[hd][^>]*>(.*?)</t[hd]>', r, re.DOTALL)
        def clean_cell(c):
            c = re.sub(r'<code[^>]*>(.*?)</code>', r'`\1`', c, flags=re.DOTALL)
            c = re.sub(r'<strong[^>]*>(.*?)</strong>', r'**\1**', c, flags=re.DOTALL)
            c = re.sub(r'<[^>]+>', '', c)
            c = ent(c).replace("\n", " ").replace("|", "\\|").strip()
            return re.sub(r'\s+', ' ', c)
        out_rows.append([clean_cell(c) for c in cells])
    if not out_rows:
        return ""
    ncols = max(len(r) for r in out_rows)
    for r in out_rows:
        r += [""] * (ncols - len(r))
    lines = ["| " + " | ".join(out_rows[0]) + " |",
             "|" + "|".join([" --- "] * ncols) + "|"]
    for r in out_rows[1:]:
        lines.append("| " + " | ".join(r) + " |")
    return "\n" + "\n".join(lines) + "\n"

def convert(src):
    # 0. 取 return ( ... ) 的 JSX 主体
    m = re.search(r'return\s*\(\s*(.*?)\n\s*\);\s*\n\}', src, re.DOTALL)
    if not m:
        m = re.search(r'return\s*\(\s*(.*?)\);\s*$', src, re.DOTALL)
    assert m, "cannot locate JSX return block"
    t = m.group(1)

    # 1. 删除块级噪音
    t = re.sub(r'<script[^>]*type="application/ld\+json"[^>]*>.*?</script>', '', t, flags=re.DOTALL)
    t = re.sub(r'<script\b[^>]*type="application/ld\+json"[^>]*/>', '', t, flags=re.DOTALL)  # 自闭合 JSON-LD
    t = re.sub(r'<script\b(?:(?!/>).)*?type="application/ld\+json"(?:(?!/>).)*?/>', '', t, flags=re.DOTALL)  # 属性值含>的自闭合 JSON-LD
    t = re.sub(r'<AdSlot[^>]*/>', '', t)
    t = re.sub(r'<Link[^>]*>\s*← Back to Home\s*</Link>', '', t, flags=re.DOTALL)
    t = re.sub(r'<div className="[^"]*rounded-full[^"]*">\s*<span[^>]*>[^<]*</span>\s*</div>', '', t)  # 分类徽章
    t = re.sub(r'<span[^>]*rounded-full[^>]*>[^<]*</span>', '', t)  # 徽章 span（外层 div 类名结构不一）
    t = re.sub(r'<div className="flex items-center gap-3[^"]*">.*?</div>', '', t, flags=re.DOTALL)  # 日期/时长行
    t = re.sub(r'\{/\*.*?\*/\}', '', t, flags=re.DOTALL)  # JSX 注释

    # 2. pre 代码块（先于其他规则，防止内部被误处理）
    t = re.sub(r'<pre[^>]*>\s*<code[^>]*>\s*\{`((?:[^`\\]|\\.)*)`\}\s*</code>\s*</pre>', convert_pre, t, flags=re.DOTALL)
    t = re.sub(r'<pre[^>]*>\s*<code[^>]*>(.*?)</code>\s*</pre>', convert_pre, t, flags=re.DOTALL)

    # 3. 表格
    t = re.sub(r'<div className="overflow-x-auto[^"]*">\s*(<table.*?</table>)\s*</div>', lambda m: convert_table(m.group(1)), t, flags=re.DOTALL)
    t = re.sub(r'<table.*?</table>', lambda m: convert_table(m.group(0)), t, flags=re.DOTALL)

    # 4. FAQ details → ### 问题 + 答案
    def faq(m):
        inner = m.group(1)
        q = re.search(r'<summary[^>]*>(.*?)</summary>', inner, re.DOTALL)
        a = re.sub(r'<summary.*?</summary>', '', inner, flags=re.DOTALL)
        qt = re.sub(r'<[^>]+>', '', q.group(1) if q else "").strip()
        at = re.sub(r'<p[^>]*>', '\n', a)
        at = re.sub(r'</p>', '\n', at)
        at = re.sub(r'<[^>]+>', '', at)
        return f"\n### {ent(qt)}\n\n{ent(at).strip()}\n"
    t = re.sub(r'<details[^>]*>(.*?)</details>', faq, t, flags=re.DOTALL)

    # 5. 高亮提示框（bg-[#1e293b] div）→ 引用块
    def callout(m):
        inner = m.group(1)
        label = re.search(r'<p className="text-xs[^"]*">([^<]*)</p>', inner)
        body = re.sub(r'<p className="text-xs[^"]*">.*?</p>', '', inner, flags=re.DOTALL)
        bt = re.sub(r'<a[^>]*href="([^"]*)"[^>]*>(.*?)</a>', abs_link, body, flags=re.DOTALL)
        bt = re.sub(r'<[^>]+>', ' ', bt)
        bt = ent(re.sub(r'[ \t]+', ' ', bt)).strip()
        lab = ent(re.sub(r'<[^>]+>', '', label.group(1)).strip()) if label else ""
        return f"\n> **{lab}** {bt}\n"
    t = re.sub(r'<div className="bg-\[#1e293b\][^"]*">(.*?)</div>', callout, t, flags=re.DOTALL)

    # 6. 标题
    t = re.sub(r'<h1[^>]*>(.*?)</h1>', lambda m: "", t, flags=re.DOTALL)  # FM 已有 title
    t = re.sub(r'<h2[^>]*>(.*?)</h2>', lambda m: f"\n## {ent(re.sub(r'<[^>]+>', '', m.group(1)).strip())}\n", t, flags=re.DOTALL)
    t = re.sub(r'<h3[^>]*>(.*?)</h3>', lambda m: f"\n### {ent(re.sub(r'<[^>]+>', '', m.group(1)).strip())}\n", t, flags=re.DOTALL)
    t = re.sub(r'<h4[^>]*>(.*?)</h4>', lambda m: f"\n#### {ent(re.sub(r'<[^>]+>', '', m.group(1)).strip())}\n", t, flags=re.DOTALL)

    # 7. 行内元素
    t = re.sub(r'<a[^>]*href="([^"]*)"[^>]*>(.*?)</a>', abs_link, t, flags=re.DOTALL)
    t = re.sub(r'<strong[^>]*>(.*?)</strong>', r'**\1**', t, flags=re.DOTALL)
    t = re.sub(r'<em[^>]*>(.*?)</em>', r'*\1*', t, flags=re.DOTALL)
    t = re.sub(r'<code[^>]*>\s*\{`(.*?)`\}\s*</code>', r'`\1`', t, flags=re.DOTALL)
    t = re.sub(r'<code[^>]*>(.*?)</code>', r'`\1`', t, flags=re.DOTALL)

    # 8. 列表
    t = re.sub(r'<li[^>]*>', '- ', t)
    t = re.sub(r'</li>', '\n', t)
    t = re.sub(r'</?[uo]l[^>]*>', '\n', t)

    # 9. 段落与容器
    t = re.sub(r'</p>', '\n\n', t)
    t = re.sub(r'<p[^>]*>', '', t)
    t = re.sub(r'<br\s*/?>', '\n', t)
    t = re.sub(r'</?(article|div|section|main|span|table|thead|tbody|tr)[^>]*>', '', t)

    # 10. JSX 表达式
    t = t.replace('{" "}', ' ')
    t = re.sub(r'\{`([^`]*)`\}', r'\1', t, flags=re.DOTALL)   # 剩余模板字面量
    t = re.sub(r'\{&apos;([^&]*)&apos;\}', r"'\1'", t)
    t = re.sub(r'\{[^}]{0,40}\}', '', t)  # 兜底清残留表达式

    # 11. 实体 + 清理
    t = ent(t)
    t = re.sub(r'\n{3,}', '\n\n', t)
    t = re.sub(r'[ \t]+\n', '\n', t)
    return t.strip()

if __name__ == "__main__":
    slug, out, title, tags, desc = sys.argv[1], sys.argv[2], sys.argv[3], sys.argv[4], sys.argv[5]
    src = open(f"/root/projects/devtoolshub/src/app/blog/{slug}/page.tsx").read()
    body = convert(src)
    desc = desc[:137] + "..." if len(desc) > 140 else desc
    md = f'''---
title: "{title}"
description: "{desc}"
tags: [{tags}]
canonical_url: {SITE}/blog/{slug}
published: true
cover_image: {SITE}/og-devto-cover.png
---

> Originally published on [DevToolsHub]({SITE}/blog/{slug}) — free, privacy-first online tools for developers.

{body}
'''
    open(f"/root/projects/devtoolshub/{out}", "w").write(md)
    words = len(re.sub(r'[#*`>|\-`]', ' ', body).split())
    residual = len(re.findall(r'className|<script|<div|<span|<td|href="/|\{" "\}', body))
    tables = len(re.findall(r'^\|[-| :]+\|$', body, re.M))
    codes = body.count("```") // 2
    print(f"{out}: {len(md)} chars ≈{words}词 | 表格{tables} 代码块{codes} 残留标签{residual}")
    if residual:
        # 打印残留上下文便于修规则
        for m in list(re.finditer(r'className|<div|<span|<td|href="/', body))[:5]:
            print("  残留:", body[max(0,m.start()-40):m.start()+80].replace("\n", " ")[:130])
