import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import LocationCard from '@/components/LocationCard';
import CTASection from '@/components/CTASection';
import { locations } from '@/data/locations';
import { localBusinessJsonLd } from '@/lib/jsonLd';

export default function ServiceAreasPage() {
  return (
    <>
      <SEO
        title="Service Areas | On The Mark Mechanical HVAC Ann Arbor, MI"
        description="On The Mark Mechanical provides HVAC services in Ann Arbor, Dexter, Saline, Chelsea, Ypsilanti, Canton, Plymouth, Belleville, and surrounding Michigan communities. Call 734-222-0918."
        canonicalPath="/service-areas"
        jsonLd={[localBusinessJsonLd()]}
      />
      <Breadcrumbs crumbs={[{ name: 'Service Areas', path: '/service-areas' }]} />

      <section className="bg-navy-900 text-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Our Service Areas</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-200">
            Based in Ann Arbor, Michigan, we provide heating and cooling services to communities
            throughout Washtenaw and Wayne counties.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {locations.map((location) => (
              <LocationCard key={location.slug} location={location} />
            ))}
          </div>

          <div className="mt-12 rounded-xl bg-white p-6 ring-1 ring-gray-200">
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong className="text-navy-900">Note:</strong> This list represents our general
              service coverage area. Please call us at{' '}
              <a href="tel:7342220918" className="font-semibold text-sky-600">
                734-222-0918
              </a>{' '}
              to confirm we serve your specific location. We do not have physical offices in every
              listed community.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
