import { Link } from 'react-router-dom';
import { Phone, MapPin, Wrench } from 'lucide-react';
import { business } from '@/data/business';
import { services } from '@/data/services';
import { locations } from '@/data/locations';
import { serviceLocationUrl } from '@/lib/routes';

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-500">
                <Wrench className="h-5 w-5 text-white" />
              </div>
              <div className="leading-tight">
                <div className="text-base font-bold text-white">On The Mark Mechanical</div>
                <div className="text-xs text-sky-300">HVAC Contractor</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Heating and cooling services for homes and businesses in Ann Arbor, Michigan, and
              surrounding communities.
            </p>
            <a
              href={business.phoneLink}
              className="mt-4 inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 font-semibold"
            >
              <Phone className="h-4 w-4" />
              {business.phoneDisplay}
            </a>

            <div className="mt-4 pt-3 border-t border-navy-800">
              <Link
                to="/reviews"
                className="inline-flex items-center gap-2 text-xs text-gray-300 hover:text-white transition-colors"
              >
                <div className="flex text-amber-400">
                  {'★★★★★'}
                </div>
                <span className="font-bold text-white">4.4</span>
                <span className="text-gray-400">· 11 Google Reviews</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Services
            </h3>
            <ul className="space-y-2 text-sm">
              {services.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    to={serviceLocationUrl(service.slug, business.primaryLocationSlug)}
                    className="text-gray-400 hover:text-sky-400 transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  className="text-sky-400 hover:text-sky-300 font-medium"
                >
                  View All Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Service Areas
            </h3>
            <ul className="space-y-2 text-sm">
              {locations.slice(0, 6).map((location) => (
                <li key={location.slug}>
                  <Link
                    to={serviceLocationUrl('air-conditioning-repair', location.slug)}
                    className="text-gray-400 hover:text-sky-400 transition-colors"
                  >
                    HVAC in {location.city}, {location.stateAbbr}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/service-areas"
                  className="text-sky-400 hover:text-sky-300 font-medium"
                >
                  View All Areas
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Contact
            </h3>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-sky-400" />
                <span>
                  {business.address.street}
                  <br />
                  {business.address.city}, {business.address.state} {business.address.zip}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0 text-sky-400" />
                <a
                  href={business.phoneLink}
                  className="text-gray-400 hover:text-sky-400 transition-colors"
                >
                  {business.phoneDisplay}
                </a>
              </div>
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="text-sky-400 hover:text-sky-300 font-medium"
                >
                  Contact Page
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-navy-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} On The Mark Mechanical. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-gray-500">
            <Link to="/services" className="hover:text-sky-400 transition-colors">Services</Link>
            <Link to="/service-areas" className="hover:text-sky-400 transition-colors">Service Areas</Link>
            <Link to="/resources" className="hover:text-sky-400 transition-colors">Guides</Link>
            <Link to="/reviews" className="hover:text-sky-400 transition-colors">Reviews</Link>
            <Link to="/about" className="hover:text-sky-400 transition-colors">About</Link>
            <Link to="/faq" className="hover:text-sky-400 transition-colors">FAQ</Link>
            <Link to="/contact" className="hover:text-sky-400 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
