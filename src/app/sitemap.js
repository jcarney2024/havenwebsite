export default function sitemap() {
    const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, "");
    const routes = ["/", "/about", "/patients", "/volunteer", "/donate", "/request-appointment", "/5k"];
    return routes.map((route) => ({ url: `${baseUrl}${route}`, lastModified: new Date() }));
}
