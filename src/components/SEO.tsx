import { useEffect } from 'react';
import { baseUrl } from '@/lib/routes';

interface SEOProps {
  title: string;
  description: string;
  canonicalPath: string;
  ogImage?: string;
  jsonLd?: Record<string, unknown>[];
}

function setOrCreateMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setOrCreateLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export default function SEO({ title, description, canonicalPath, ogImage, jsonLd }: SEOProps) {
  useEffect(() => {
    const canonical = `${baseUrl}${canonicalPath}`;
    document.title = title;
    setOrCreateMeta('name', 'description', description);
    setOrCreateLink('canonical', canonical);
    setOrCreateMeta('property', 'og:title', title);
    setOrCreateMeta('property', 'og:description', description);
    setOrCreateMeta('property', 'og:url', canonical);
    setOrCreateMeta('property', 'og:type', 'website');
    setOrCreateMeta('name', 'twitter:card', 'summary_large_image');
    if (ogImage) {
      setOrCreateMeta('property', 'og:image', ogImage);
      setOrCreateMeta('name', 'twitter:image', ogImage);
    }

    const existing = document.querySelectorAll('script[data-jsonld]');
    existing.forEach((el) => el.remove());

    if (jsonLd) {
      for (const obj of jsonLd) {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-jsonld', 'true');
        script.text = JSON.stringify(obj);
        document.head.appendChild(script);
      }
    }
  }, [title, description, canonicalPath, ogImage, jsonLd]);

  return null;
}
