import { services } from '@/data/services';
import { locations } from '@/data/locations';
import { business } from '@/data/business';

export function serviceLocationUrl(serviceSlug: string, locationSlug: string): string {
  return `/${serviceSlug}-${locationSlug}`;
}

export function parseServiceLocationUrl(
  path: string
): { service: string; location: string } | null {
  const trimmed = path.replace(/^\//, '').replace(/\/$/, '');
  for (const service of services) {
    for (const location of locations) {
      if (trimmed === `${service.slug}-${location.slug}`) {
        return { service: service.slug, location: location.slug };
      }
    }
  }
  return null;
}

export function allServiceLocationUrls(): string[] {
  const urls: string[] = [];
  for (const service of services) {
    for (const location of locations) {
      urls.push(serviceLocationUrl(service.slug, location.slug));
    }
  }
  return urls;
}

export const coreRoutes = [
  '/',
  '/services',
  '/service-areas',
  '/about',
  '/contact',
  '/faq',
];

export const baseUrl = business.website.replace(/\/$/, '');
