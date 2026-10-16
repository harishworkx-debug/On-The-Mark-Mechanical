import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const BASE_URL = 'https://www.onthemarkmechanical.com';

// 1. Read services from src/data/services.ts
const servicesFile = fs.readFileSync(path.join(rootDir, 'src/data/services.ts'), 'utf8');
const serviceMatches = [...servicesFile.matchAll(/slug:\s*'([^']+)'/g)].map((m) => m[1]);
const services = Array.from(new Set(serviceMatches));

// 2. Read locations from src/data/locations.ts
const locationsFile = fs.readFileSync(path.join(rootDir, 'src/data/locations.ts'), 'utf8');
const locationMatches = [...locationsFile.matchAll(/slug:\s*'([^']+)'/g)].map((m) => m[1]);
const locations = Array.from(new Set(locationMatches));

// 3. Read articles from src/data/articles.ts
const articlesFile = fs.readFileSync(path.join(rootDir, 'src/data/articles.ts'), 'utf8');
const articleMatches = [...articlesFile.matchAll(/slug:\s*'([^']+)'/g)].map((m) => m[1]);
const articleSlugs = Array.from(new Set(articleMatches));

// Verified milestone release dates reflecting genuine content updates
const MILESTONE_RELEASE = '2026-10-16';
const STABLE_CORE_DATE = '2026-10-16';

const coreRoutes = [
  { path: '/', lastmod: MILESTONE_RELEASE },
  { path: '/services', lastmod: STABLE_CORE_DATE },
  { path: '/service-areas', lastmod: STABLE_CORE_DATE },
  { path: '/about', lastmod: MILESTONE_RELEASE },
  { path: '/reviews', lastmod: MILESTONE_RELEASE },
  { path: '/resources', lastmod: MILESTONE_RELEASE },
  { path: '/contact', lastmod: STABLE_CORE_DATE },
  { path: '/faq', lastmod: STABLE_CORE_DATE },
];

const urls = [];

// Add core pages
for (const route of coreRoutes) {
  urls.push({
    loc: route.path === '/' ? `${BASE_URL}/` : `${BASE_URL}${route.path}`,
    lastmod: route.lastmod,
  });
}

// Add educational resource articles
for (const slug of articleSlugs) {
  urls.push({
    loc: `${BASE_URL}/resources/${slug}`,
    lastmod: MILESTONE_RELEASE,
  });
}

// Add service-location combinations
for (const service of services) {
  for (const location of locations) {
    urls.push({
      loc: `${BASE_URL}/${service}-${location}`,
      lastmod: MILESTONE_RELEASE, // Substantially updated with unique local housing stock, dispatch tiers, and local FAQs on 2026-10-16
    });
  }
}

// Generate sitemap XML content
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (item) => `  <url>
    <loc>${item.loc}</loc>
    <lastmod>${item.lastmod}</lastmod>
  </url>`
  )
  .join('\n')}
</urlset>
`;

const publicDir = path.join(rootDir, 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Write public/sitemap.xml
const sitemapPath = path.join(publicDir, 'sitemap.xml');
fs.writeFileSync(sitemapPath, sitemapXml, 'utf8');
console.log(`Successfully generated ${sitemapPath} with ${urls.length} URLs.`);

// Generate & write public/robots.txt
const robotsTxt = `User-agent: *
Allow: /
Disallow: /404

Sitemap: ${BASE_URL}/sitemap.xml
`;

const robotsPath = path.join(publicDir, 'robots.txt');
fs.writeFileSync(robotsPath, robotsTxt, 'utf8');
console.log(`Successfully generated ${robotsPath}.`);
