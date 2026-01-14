export default function sitemap() {
    const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, "");
    const routes = [
        "/",
        "/about",
        "/history",
        "/community-partners",
        "/leadership",
        "/news",
        "/patients",
        "/for-patients",
        "/patient-faqs",
        "/education-guides",
        "/resources",
        "/volunteer",
        "/volunteer-1",
        "/professional-volunteers",
        "/volunteer-reference",
        "/apply",
        "/donate",
        "/endowment",
        "/request-appointment",
        "/5k",
    ];
    return routes.map((route) => ({ url: `${baseUrl}${route}`, lastModified: new Date() }));
}
