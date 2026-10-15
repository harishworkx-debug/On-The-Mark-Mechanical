import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import type { LocationData } from '@/data/locations';
import { services } from '@/data/services';
import { serviceLocationUrl } from '@/lib/routes';

interface LocationCardProps {
  location: LocationData;
  serviceLimit?: number;
}

export default function LocationCard({ location, serviceLimit = 3 }: LocationCardProps) {
  const featuredServices = services.slice(0, serviceLimit);

  return (
    <div className="rounded-xl bg-white p-6 shadow-md ring-1 ring-gray-200 transition-all hover:shadow-lg">
      <div className="flex items-center gap-2 mb-3">
        <MapPin className="h-5 w-5 text-sky-500" />
        <h3 className="text-lg font-bold text-navy-900">{location.city}, {location.stateAbbr}</h3>
      </div>
      <p className="text-sm text-gray-600 mb-4 leading-relaxed">{location.description}</p>
      <div className="space-y-1.5">
        {featuredServices.map((service) => (
          <Link
            key={service.slug}
            to={serviceLocationUrl(service.slug, location.slug)}
            className="block text-sm text-sky-600 hover:text-sky-700 hover:underline font-medium"
          >
            {service.name} in {location.city}
          </Link>
        ))}
      </div>
      <Link
        to={serviceLocationUrl('air-conditioning-repair', location.slug)}
        className="mt-4 inline-block text-sm font-semibold text-navy-900 hover:text-sky-600 transition-colors"
      >
        View {location.city} Services &rarr;
      </Link>
    </div>
  );
}
