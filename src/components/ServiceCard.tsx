import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { ServiceData } from '@/data/services';
import { serviceLocationUrl } from '@/lib/routes';
import { business } from '@/data/business';

interface ServiceCardProps {
  service: ServiceData;
  locationSlug?: string;
}

export default function ServiceCard({ service, locationSlug }: ServiceCardProps) {
  const loc = locationSlug || business.primaryLocationSlug;
  const href = serviceLocationUrl(service.slug, loc);

  return (
    <Link
      to={href}
      className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-md ring-1 ring-gray-200 transition-all hover:shadow-xl hover:ring-sky-300"
    >
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={service.image}
          alt={service.imageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-navy-900 group-hover:text-sky-600 transition-colors">
          {service.name}
        </h3>
        <p className="mt-2 flex-1 text-sm text-gray-600 leading-relaxed">
          {service.description}
        </p>
        <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-sky-600">
          {service.name}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
