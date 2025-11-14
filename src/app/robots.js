export default function robots() {
    const sitemapBase = process.env.NEXT_PUBLIC_SITE_URL;
    return {
        rules: [{ userAgent: "*", allow: "/" }],
        sitemap: sitemapBase ? `${sitemapBase.replace(/\/$/, "")}/sitemap.xml` : undefined,
    };
}
