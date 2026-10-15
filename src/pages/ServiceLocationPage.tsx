import { Link, useLocation } from 'react-router-dom';
import {
  Phone,
  ArrowRight,
  MapPin,
  CheckCircle2,
  Wrench,
  ChevronRight,
} from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQAccordion from '@/components/FAQAccordion';
import CTASection from '@/components/CTASection';
import { getService } from '@/data/services';
import { getLocation, locations } from '@/data/locations';
import { services } from '@/data/services';
import { business } from '@/data/business';
import { serviceLocationUrl, baseUrl, parseServiceLocationUrl } from '@/lib/routes';
import { localBusinessJsonLd, serviceJsonLd, faqJsonLd, breadcrumbJsonLd } from '@/lib/jsonLd';

export default function ServiceLocationPage() {
  const navLocation = useLocation();
  const parsed = parseServiceLocationUrl(navLocation.pathname);

  if (!parsed) return null;

  const service = getService(parsed.service);
  const location = getLocation(parsed.location);
  if (!service || !location) return null;

  const canonicalPath = serviceLocationUrl(service.slug, location.slug);
  const canonicalUrl = `${baseUrl}${canonicalPath}`;
  const pageTitle = `${service.name} in ${location.city}, ${location.stateAbbr} | On The Mark Mechanical`;
  const pageDescription = `Professional ${service.name.toLowerCase()} services in ${location.city}, ${location.stateAbbr}. ${service.summary} Call ${business.phoneDisplay}.`;

  const relatedServices = services.filter((s) => s.slug !== service.slug);
  const otherLocations = locations.filter((l) => l.slug !== location.slug);

  const jsonLd = [
    localBusinessJsonLd(),
    serviceJsonLd(service.name, `${location.city}, ${location.stateAbbr}`, canonicalUrl),
    faqJsonLd(service.faqs),
    breadcrumbJsonLd([
      { name: 'Home', url: `${baseUrl}/` },
      { name: 'Services', url: `${baseUrl}/services` },
      { name: `${service.name} in ${location.city}, ${location.stateAbbr}`, url: canonicalUrl },
    ]),
  ];

  return (
    <>
      <SEO
        title={pageTitle}
        description={pageDescription}
        canonicalPath={canonicalPath}
        ogImage={service.image}
        jsonLd={jsonLd}
      />
      <Breadcrumbs
        crumbs={[
          { name: 'Services', path: '/services' },
          { name: `${service.name} in ${location.city}, ${location.stateAbbr}`, path: canonicalPath },
        ]}
      />

      {/* Hero */}
      <section className="relative bg-navy-900 overflow-hidden">
        <div className="absolute inset-0">
          <img src={service.image} alt={service.imageAlt} className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900/90 to-navy-800/60" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/20 px-4 py-1.5 text-sm font-medium text-sky-300 ring-1 ring-sky-500/30 mb-6">
              <MapPin className="h-4 w-4" />
              {location.city}, {location.stateAbbr}
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {service.name} in {location.city}, {location.stateAbbr}
            </h1>
            <p className="mt-6 text-lg text-gray-200 leading-relaxed">{service.summary}</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href={business.phoneLink}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-500 px-7 py-4 text-lg font-bold text-white shadow-lg transition-all hover:bg-sky-400 hover:shadow-xl hover:scale-105"
              >
                <Phone className="h-5 w-5" />
                Call {business.phoneDisplay}
              </a>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-7 py-4 text-lg font-semibold text-white ring-1 ring-white/30 backdrop-blur transition-all hover:bg-white/20"
              >
                View All Services
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Left: Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Detailed Service Content */}
              <div>
                <h2 className="text-2xl font-bold text-navy-900">
                  {service.name} in {location.city}, {location.stateAbbr}
                </h2>
                <div className="mt-4 space-y-4">
                  {service.detailedContent.map((paragraph, i) => (
                    <p key={i} className="text-gray-600 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Location Context */}
              <div className="rounded-xl bg-sky-50 p-6 ring-1 ring-sky-100">
                <h3 className="text-lg font-bold text-navy-900">
                  {service.name} for {location.city} Homes and Businesses
                </h3>
                <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                  {location.description} {location.city} is located in {location.county}, {location.state},
                  and our Ann Arbor-based team is ready to serve customers throughout the area. If you need
                  {' '}{service.name.toLowerCase()} in {location.city}, call us at {business.phoneDisplay} to
                  schedule a visit or ask about your specific situation.
                </p>
              </div>

              {/* Common Problems */}
              <div>
                <h3 className="text-xl font-bold text-navy-900">Common {service.shortName} Issues We Address</h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {service.problems.map((problem) => (
                    <div key={problem} className="flex items-start gap-3 text-gray-700">
                      <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-sky-500 mt-0.5" />
                      <span className="text-sm">{problem}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div>
                <h3 className="text-xl font-bold text-navy-900">Our {service.shortName} Process</h3>
                <div className="mt-6 space-y-6">
                  {service.process.map((step, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-sky-100">
                        <span className="text-lg font-bold text-sky-600">{i + 1}</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-navy-900">{step.title}</h4>
                        <p className="mt-1 text-sm text-gray-600 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Sidebar */}
            <div className="space-y-6">
              {/* CTA Card */}
              <div className="rounded-xl bg-navy-900 p-6 text-center text-white shadow-lg">
                <h3 className="text-lg font-bold">Need {service.shortName} in {location.city}?</h3>
                <p className="mt-2 text-sm text-gray-300">
                  Call us today to schedule a service appointment.
                </p>
                <a
                  href={business.phoneLink}
                  className="mt-4 inline-flex items-center gap-2 rounded-lg bg-sky-500 px-6 py-3 font-bold text-white transition-colors hover:bg-sky-400"
                >
                  <Phone className="h-5 w-5" />
                  {business.phoneDisplay}
                </a>
              </div>

              {/* Other Locations for This Service */}
              <div className="rounded-xl bg-white p-6 ring-1 ring-gray-200">
                <h3 className="text-sm font-bold uppercase tracking-wider text-navy-900 mb-4">
                  {service.shortName} in Other Areas
                </h3>
                <div className="space-y-2 max-h-72 overflow-y-auto">
                  {otherLocations.map((loc) => (
                    <Link
                      key={loc.slug}
                      to={serviceLocationUrl(service.slug, loc.slug)}
                      className="flex items-center justify-between text-sm text-gray-700 hover:text-sky-600 transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-sky-500" />
                        {loc.city}, {loc.stateAbbr}
                      </span>
                      <ChevronRight className="h-4 w-4 text-gray-300" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Related Services in This Location */}
              <div className="rounded-xl bg-white p-6 ring-1 ring-gray-200">
                <h3 className="text-sm font-bold uppercase tracking-wider text-navy-900 mb-4">
                  Other Services in {location.city}
                </h3>
                <div className="space-y-2 max-h-72 overflow-y-auto">
                  {relatedServices.map((relService) => (
                    <Link
                      key={relService.slug}
                      to={serviceLocationUrl(relService.slug, location.slug)}
                      className="flex items-center justify-between text-sm text-gray-700 hover:text-sky-600 transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <Wrench className="h-4 w-4 text-sky-500" />
                        {relService.name}
                      </span>
                      <ChevronRight className="h-4 w-4 text-gray-300" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Linking Grid - All Other Service+Location Combos for This Service */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-navy-900">
              {service.name} Throughout Our Service Area
            </h2>
            <p className="mt-3 text-gray-600">
              We provide {service.name.toLowerCase()} across Ann Arbor and surrounding Michigan communities.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {otherLocations.map((loc) => (
              <Link
                key={loc.slug}
                to={serviceLocationUrl(service.slug, loc.slug)}
                className="flex items-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-medium text-navy-900 ring-1 ring-gray-200 transition-all hover:bg-sky-50 hover:ring-sky-300 hover:text-sky-600"
              >
                <MapPin className="h-4 w-4 flex-shrink-0 text-sky-500" />
                <span>{service.shortName} in {loc.city}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-900">
              {service.shortName} FAQs for {location.city}
            </h2>
            <p className="mt-4 text-gray-600">
              Common questions about {service.name.toLowerCase()} in {location.city}, {location.stateAbbr}.
            </p>
          </div>
          <FAQAccordion faqs={service.faqs} />
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Have a different question? Call us at{' '}
              <a href={business.phoneLink} className="font-semibold text-sky-600">
                {business.phoneDisplay}
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title={`Ready for ${service.shortName} in ${location.city}?`}
        subtitle={`Call On The Mark Mechanical at ${business.phoneDisplay} to schedule your service today.`}
      />
    </>
  );
}
