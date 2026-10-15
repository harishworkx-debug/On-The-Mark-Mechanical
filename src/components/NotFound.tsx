import { Link } from 'react-router-dom';
import { Phone, ArrowRight, Home } from 'lucide-react';
import { business } from '@/data/business';
import { services } from '@/data/services';
import { serviceLocationUrl } from '@/lib/routes';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-20">
      <div className="text-center max-w-lg">
        <div className="text-7xl font-bold text-sky-500 mb-4">404</div>
        <h1 className="text-3xl font-bold text-navy-900 mb-3">Page Not Found</h1>
        <p className="text-gray-600 mb-8">
          The page you are looking for does not exist or has been moved. Please use the navigation
          menu or try one of the links below.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-lg bg-navy-900 px-6 py-3 text-white font-semibold hover:bg-navy-800 transition-colors"
          >
            <Home className="h-5 w-5" />
            Back to Home
          </Link>
          <a
            href={business.phoneLink}
            className="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-6 py-3 text-white font-semibold hover:bg-sky-400 transition-colors"
          >
            <Phone className="h-5 w-5" />
            Call {business.phoneDisplay}
          </a>
        </div>
        <div className="text-left">
          <p className="text-sm font-semibold text-navy-900 mb-2">Popular services:</p>
          <div className="flex flex-wrap gap-2">
            {services.slice(0, 5).map((service) => (
              <Link
                key={service.slug}
                to={serviceLocationUrl(service.slug, business.primaryLocationSlug)}
                className="inline-flex items-center gap-1 rounded-md bg-gray-100 px-3 py-1.5 text-sm text-navy-900 hover:bg-sky-50 hover:text-sky-600 transition-colors"
              >
                {service.name}
                <ArrowRight className="h-3 w-3" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
