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

// Today's date YYYY-MM-DD
const today = new Date().toISOString().split('T')[0];

const coreRoutes = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/services', changefreq: 'monthly', priority: '0.9' },
  { path: '/service-areas', changefreq: 'monthly', priority: '0.8' },
  { path: '/about', changefreq: 'monthly', priority: '0.7' },
  { path: '/contact', changefreq: 'monthly', priority: '0.8' },
  { path: '/faq', changefreq: 'monthly', priority: '0.6' },
];

const urls = [];

// Add core pages
for (const route of coreRoutes) {
  urls.push({
    loc: route.path === '/' ? `${BASE_URL}/` : `${BASE_URL}${route.path}`,
    lastmod: today,
    changefreq: route.changefreq,
    priority: route.priority,
  });
}

// Add service-location combinations
for (const service of services) {
  for (const location of locations) {
    const isPrimaryLocation = location === 'ann-arbor-mi';
    urls.push({
      loc: `${BASE_URL}/${service}-${location}`,
      lastmod: today,
      changefreq: 'monthly',
      priority: isPrimaryLocation ? '0.8' : '0.7',
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
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
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
