import { BLOG_SEO, articleJsonLd } from "@/lib/seo";

const post = BLOG_SEO.find((p) => p.slug === "uuid-v4-vs-v7")!;

// 仅注入 Article JSON-LD；页面 metadata 由 page.tsx 提供（避免双处维护）
export default function UuidV4VsV7Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(articleJsonLd(post))}}
      />
      {children}
    </>
  );
}
