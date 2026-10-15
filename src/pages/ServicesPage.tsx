import { Link } from 'react-router-dom';
import { Phone, ArrowRight, CheckCircle2 } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import ServiceCard from '@/components/ServiceCard';
import CTASection from '@/components/CTASection';
import { business } from '@/data/business';
import { services } from '@/data/services';
import { localBusinessJsonLd } from '@/lib/jsonLd';

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="HVAC Services in Ann Arbor, MI | On The Mark Mechanical"
        description="Explore our full range of HVAC services including AC repair, furnace installation, heat pump services, maintenance, thermostat services, and indoor air quality. Call 734-222-0918."
        canonicalPath="/services"
        jsonLd={[localBusinessJsonLd()]}
      />
      <Breadcrumbs crumbs={[{ name: 'Services', path: '/services' }]} />

      {/* Page Header */}
      <section className="bg-navy-900 text-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Our HVAC Services</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-200">
            Complete heating and cooling services for homes and businesses in Ann Arbor, Michigan,
            and surrounding communities.
          </p>
          <a
            href={business.phoneLink}
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-sky-500 px-6 py-3 text-lg font-bold text-white shadow-lg transition-all hover:bg-sky-400 hover:scale-105"
          >
            <Phone className="h-5 w-5" />
            Call {business.phoneDisplay}
          </a>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need a Service Not Listed?"
        subtitle="Call us to discuss your specific HVAC needs. We are happy to help."
      />
    </>
  );
}
