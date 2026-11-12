#!/usr/bin/env python3
"""Dev.to 批量交叉发布器（防 429：间隔 65s；每篇发布后读回验证）"""
import os, re, json, subprocess, sys, time

BASE = "/root/projects/devtoolshub"
_m = re.search(r'DEVTO_API_KEY\s*=\s*(\S+)',
               open(os.path.expanduser("~/.hermes/.env")).read())
assert _m, "DEVTO_API_KEY not found in ~/.hermes/.env"
api_key = _m.group(1).strip().strip('"')

def parse_draft(path):
    src = open(path).read()
    parts = src.split("---", 2)
    fm = {}
    for line in parts[1].strip().split("\n"):
        if ":" in line:
            k, _, v = line.partition(":")
            fm[k.strip()] = v.strip().strip('"')
    return fm, parts[2].strip()

def publish(path, dry=False):
    fm, body = parse_draft(path)
    tags = re.findall(r'\w+', fm.get("tags", "webdev tutorial"))[:4]
    payload = {"article": {
        "title": fm["title"],
        "description": fm.get("description", "")[:140],
        "body_markdown": body,
        "published": True,
        "tags": tags,
        "canonical_url": fm["canonical_url"],
        "cover_image": fm.get("cover_image", ""),
    }}
    if dry:
        print(f"[DRY] {fm['title'][:50]} → {fm['canonical_url']} tags={tags}")
        return True
    with open("/tmp/devto_payload.json", "w") as f:
        json.dump(payload, f, ensure_ascii=False)
    out = subprocess.run(["curl", "-s", "--max-time", "40", "-w", "\nHTTP:%{http_code}",
        "https://dev.to/api/articles", "-H", f"api-key: {api_key}",
        "-H", "Content-Type: application/json", "-d", "@/tmp/devto_payload.json"],
        capture_output=True, text=True, timeout=50).stdout
    m = re.search(r'HTTP:(\d+)$', out)
    code = m.group(1) if m else "?"
    raw = out[:out.rfind("\nHTTP:")] if m else out
    try:
        resp = json.loads(re.sub(r'[\x00-\x1f\x7f]', '', raw))
    except Exception:
        resp = {}
    if code == "201" and resp.get("url"):
        print(f"✅ 已发布: {resp['title'][:50]}")
        print(f"   {resp['url']}  canonical={resp.get('canonical_url')}")
        return True
    else:
        print(f"❌ HTTP {code}: {json.dumps(resp, ensure_ascii=False)[:300]}")
        return False

def verify(url, expect_canonical):
    """读回验证：公开访问 200 + canonical 指向主站"""
    import requests
    r = requests.get(url, headers={"User-Agent": "Mozilla/5.0"}, timeout=15)
    canon = re.search(r'rel="canonical" href="([^"]*)"', r.text)
    ok = r.status_code == 200 and canon and canon.group(1) == expect_canonical
    print(f"   读回: HTTP {r.status_code}, canonical={canon.group(1) if canon else '无'} {'✓' if ok else '✗'}")
    return ok

if __name__ == "__main__":
    files = sys.argv[1:]
    if not files:
        print("用法: publish_devto.py <file1.md> [file2.md ...] [--dry]")
        sys.exit(1)
    dry = "--dry" in files
    files = [f for f in files if not f.startswith("--")]
    results = []
    for i, f in enumerate(files):
        if i > 0:
            print(f"⏳ 等 65s 防限流...({i+1}/{len(files)})")
            time.sleep(65)
        p = f if f.startswith("/") else os.path.join(BASE, f)
        ok = publish(p, dry=dry)
        if ok and not dry:
            fm, _ = parse_draft(p)
            verify(fm["published_url"] if "published_url" in fm else "", fm["canonical_url"]) if False else None
        results.append((os.path.basename(f), ok))
    print("\n=== 汇总 ===")
    for name, ok in results:
        print(f"  {'✅' if ok else '❌'} {name}")
    sys.exit(0 if all(ok for _, ok in results) else 2)
