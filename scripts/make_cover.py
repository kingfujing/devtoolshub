#!/usr/bin/env python3
"""生成 Dev.to 标准封面图 1280x640（品牌渐变 + 站名 + 口号）"""
from PIL import Image, ImageDraw, ImageFont
import os

W, H = 1280, 640
img = Image.new("RGB", (W, H))
draw = ImageDraw.Draw(img)

# 对角渐变：深蓝 #0f172a → 蓝 #2563eb → 青 #06b6d4
c1 = (15, 23, 42); c2 = (37, 99, 235); c3 = (6, 182, 212)
for y in range(H):
    for step in [0]:  # 逐行算横向插值太慢，改为逐行竖直渐变+整体对角偏移
        t = y / H
        if t < 0.6:
            tt = t / 0.6
            r = int(c1[0] + (c2[0]-c1[0])*tt); g = int(c1[1] + (c2[1]-c1[1])*tt); b = int(c1[2] + (c2[2]-c1[2])*tt)
        else:
            tt = (t-0.6)/0.4
            r = int(c2[0] + (c3[0]-c2[0])*tt); g = int(c2[1] + (c3[1]-c2[1])*tt); b = int(c2[2] + (c3[2]-c2[2])*tt)
        draw.line([(0, y), (W, y)], fill=(r, g, b))

# 装饰：半透明工具括号符号
def find_font(size, bold=True):
    cands = [
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf" if bold else "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
        "/usr/share/fonts/dejavu/DejaVuSans-Bold.ttf" if bold else "/usr/share/fonts/dejavu/DejaVuSans.ttf",
    ]
    for c in cands:
        if os.path.exists(c):
            return ImageFont.truetype(c, size)
    return ImageFont.load_default()

f_brand = find_font(64)
f_tag = find_font(34, bold=False)
f_url = find_font(28, bold=False)

# 装饰符号（右上角，低调）
draw.text((W-200, 60), "{ }", font=find_font(80), fill=(255, 255, 255, 40))
draw.text((W-330, 180), "</>", font=find_font(56), fill=(148, 197, 255))

# 主标题
draw.text((90, 200), "DevToolsHub", font=f_brand, fill=(255, 255, 255))
# 副标语
draw.text((90, 310), "Free Online Developer Tools", font=f_tag, fill=(191, 219, 254))
draw.text((90, 370), "100% in-browser · No sign-up · Privacy first", font=f_tag, fill=(147, 197, 253))
# 底部 URL
draw.text((90, 500), "devtoolshub.cloud", font=f_url, fill=(255, 255, 255))

out = "/root/projects/devtoolshub/public/og-devto-cover.png"
img.save(out, "PNG", optimize=True)
print(f"saved {out}, {os.path.getsize(out)//1024}KB, {W}x{H}")
