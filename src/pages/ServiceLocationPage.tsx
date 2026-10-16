import { Link, useLocation } from 'react-router-dom';
import {
  Phone,
  ArrowRight,
  MapPin,
  CheckCircle2,
  Wrench,
  ChevronRight,
  Star,
  Clock,
  ShieldCheck,
  Building,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQAccordion from '@/components/FAQAccordion';
import CTASection from '@/components/CTASection';
import { GoogleIcon } from '@/components/ReviewsSection';
import { getService, services } from '@/data/services';
import { getLocation, locations } from '@/data/locations';
import { business } from '@/data/business';
import { reviews, Review } from '@/data/reviews';
import { serviceLocationUrl, baseUrl, parseServiceLocationUrl } from '@/lib/routes';
import { localBusinessJsonLd, serviceJsonLd, faqJsonLd, breadcrumbJsonLd } from '@/lib/jsonLd';

function getRelevantReview(serviceSlug: string): Review {
  if (serviceSlug.includes('installation') || serviceSlug.includes('furnace-installation')) {
    return reviews.find((r) => r.id === 'terri-augustine') || reviews[0];
  }
  if (serviceSlug === 'air-conditioning-installation') {
    return reviews.find((r) => r.id === 'laura-myers') || reviews[0];
  }
  if (serviceSlug.includes('repair')) {
    return reviews.find((r) => r.id === 'matt-crigger') || reviews[1];
  }
  if (serviceSlug.includes('commercial')) {
    return reviews.find((r) => r.id === 'kristen-burrill') || reviews[3];
  }
  return reviews.find((r) => r.id === 'hk-parrot') || reviews[2];
}

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
  const pageDescription = `Need ${service.shortName.toLowerCase()} in ${location.city}, ${location.stateAbbr}? On The Mark Mechanical can help diagnose heating & cooling problems and explain your repair options. Local dispatch in ${location.travelMinutes}. Call ${business.phoneDisplay} to discuss your HVAC service needs.`;

  const relatedServices = services.filter((s) => s.slug !== service.slug);
  const otherLocations = locations.filter((l) => l.slug !== location.slug);

  // Combine city-specific FAQs with general service FAQs for unique on-page value
  const combinedFaqs = [
    ...(location.localFaqs || []),
    ...service.faqs.slice(0, 3),
  ];

  const featuredReview = getRelevantReview(service.slug);

  const jsonLd = [
    localBusinessJsonLd(),
    serviceJsonLd(service.name, `${location.city}, ${location.stateAbbr}`, canonicalUrl),
    faqJsonLd(combinedFaqs),
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

      {/* Hero Header */}
      <section className="relative bg-navy-900 overflow-hidden">
        <div className="absolute inset-0">
          <img src={service.image} alt={service.imageAlt} className="h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900/90 to-navy-800/60" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            {/* Local Dispatch Badge */}
            <div className="inline-flex flex-wrap items-center gap-2 rounded-full bg-sky-500/20 px-4 py-1.5 text-xs font-semibold text-sky-300 ring-1 ring-sky-500/30 mb-6">
              <MapPin className="h-3.5 w-3.5" />
              <span>{location.city}, {location.stateAbbr} Service Area</span>
              <span className="text-sky-400/50">·</span>
              <Clock className="h-3.5 w-3.5 text-sky-400" />
              <span>{location.travelMinutes} direct dispatch</span>
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {service.name} in {location.city}, {location.stateAbbr}
            </h1>
            <p className="mt-5 text-lg text-gray-200 leading-relaxed">
              {service.summary} Dispatched directly from our Ann Arbor facility to homes and businesses across {location.city} and {location.county}.
            </p>

            {/* CTAs */}
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

            {/* Trust Bar Under Hero */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-4 text-xs text-gray-300">
              <span className="flex items-center gap-1 text-amber-400 font-bold">
                <Star className="h-4 w-4 fill-amber-400" />
                4.4 Rating (11 Google Reviews)
              </span>
              <span>·</span>
              <span>20+ Years Local HVAC Experience</span>
              <span>·</span>
              <span>No High-Pressure Sales Tactics</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Sidebar */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Left 2 Columns: Detailed Content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Detailed Service Content */}
              <div>
                <h2 className="text-2xl font-bold text-navy-900">
                  Professional {service.name} for {location.city} Properties
                </h2>
                <div className="mt-4 space-y-4 text-gray-600 leading-relaxed">
                  {service.detailedContent.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Unique City HVAC & Architectural Analysis */}
              <div className="rounded-2xl bg-sky-50/70 p-6 sm:p-8 ring-1 ring-sky-100">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-800 mb-2">
                  <Building className="h-4 w-4 text-sky-600" />
                  Local {location.city} Housing &amp; Climate Considerations
                </div>
                <h3 className="text-xl font-bold text-navy-900">
                  Tailored {service.shortName} for {location.city} Homes
                </h3>
                
                <div className="mt-4 space-y-3 text-sm text-gray-700 leading-relaxed">
                  <p>
                    <strong>Housing Characteristics:</strong> {location.housingStock}
                  </p>
                  <p>
                    <strong>Climate &amp; Seasonal Demands:</strong> {location.climateContext}
                  </p>
                  <p>
                    <strong>Local HVAC Focus:</strong> {location.hvacChallenges}
                  </p>
                  {location.neighborhoods && location.neighborhoods.length > 0 && (
                    <div className="pt-2">
                      <span className="font-semibold text-navy-900">Neighborhoods Served in {location.city}: </span>
                      <span className="text-gray-600">{location.neighborhoods.join(', ')}.</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Michigan Utility Rebates Banner */}
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-6 flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-navy-900 text-base">
                    Michigan Utility Rebates for {location.city} Residents
                  </h4>
                  <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                    {location.utilityRebates} Upgrading to qualifying high-efficiency equipment can also lower your monthly energy expenses while keeping your home comfortable during intense Michigan weather. Call us at {business.phoneDisplay} to discuss eligible models.
                  </p>
                </div>
              </div>

              {/* Verified Customer Review Card Matching this Service */}
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <GoogleIcon className="h-5 w-5" />
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                      Verified Customer Experience
                    </span>
                  </div>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-700 italic leading-relaxed">
                  &ldquo;{featuredReview.text}&rdquo;
                </p>
                <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
                  <div>
                    <span className="font-bold text-navy-900">{featuredReview.author}</span>
                    <span className="text-gray-400"> · {featuredReview.reviewerInfo}</span>
                  </div>
                  <Link to="/reviews" className="font-semibold text-sky-600 hover:text-sky-700">
                    All 11 Reviews &rarr;
                  </Link>
                </div>
              </div>

              {/* Common Issues We Address */}
              <div>
                <h3 className="text-xl font-bold text-navy-900">
                  Common {service.shortName} Issues We Solve in {location.city}
                </h3>
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
                <h3 className="text-xl font-bold text-navy-900">
                  How Our {service.shortName} Service Works
                </h3>
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

              {/* City-Specific & General FAQs */}
              <div className="pt-6 border-t border-gray-100">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-navy-900">
                    Frequently Asked Questions for {location.city}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Practical information about {service.name.toLowerCase()} and local service in {location.city}, {location.stateAbbr}.
                  </p>
                </div>
                <FAQAccordion faqs={combinedFaqs} />
              </div>
            </div>

            {/* Right: Sidebar */}
            <div className="space-y-6">
              {/* Call CTA Box */}
              <div className="rounded-2xl bg-navy-900 p-6 text-center text-white shadow-xl">
                <h3 className="text-lg font-bold">Need {service.shortName} in {location.city}?</h3>
                <p className="mt-2 text-xs text-gray-300">
                  Call our technicians directly. We discuss your issue, explain pricing upfront, and schedule prompt dispatch.
                </p>
                <a
                  href={business.phoneLink}
                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-sky-500 px-6 py-3.5 font-bold text-white shadow hover:bg-sky-400 transition-all hover:scale-105 w-full"
                >
                  <Phone className="h-5 w-5" />
                  {business.phoneDisplay}
                </a>
              </div>

              {/* Transparent Dispatch Logistics Card */}
              <div className="rounded-2xl bg-gray-50 p-5 ring-1 ring-gray-200">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-700 mb-2">
                  <Clock className="h-4 w-4" />
                  Local Dispatch Information
                </div>
                <div className="text-sm font-bold text-navy-900">{location.dispatchTime}</div>
                <p className="mt-2 text-xs text-gray-600 leading-relaxed">
                  {location.dispatchRoute}
                </p>
                <div className="mt-3 pt-3 border-t border-gray-200 text-xs text-gray-500">
                  <span className="font-semibold text-gray-700">Estimated Transit: </span>
                  {location.travelMinutes} from our Ann Arbor facility.
                </div>
              </div>

              {/* Customer Trust Card */}
              <div className="rounded-2xl bg-white p-5 ring-1 ring-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-navy-900 bg-sky-50 px-2 py-0.5 rounded text-sky-700">
                    4.4 Rating
                  </span>
                </div>
                <h4 className="mt-2 text-sm font-bold text-navy-900">
                  Verified Google Customer Reviews
                </h4>
                <p className="mt-1 text-xs text-gray-600 leading-relaxed">
                  Trusted by Washtenaw &amp; Wayne County homeowners for over 20 years.
                </p>
                <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-gray-500">11 Verified Reviews</span>
                  <Link
                    to="/reviews"
                    className="text-xs font-semibold text-sky-600 hover:text-sky-700 inline-flex items-center gap-1"
                  >
                    Read Reviews
                    <ChevronRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              {/* Other Services in This Location */}
              <div className="rounded-2xl bg-white p-6 ring-1 ring-gray-200">
                <h3 className="text-sm font-bold uppercase tracking-wider text-navy-900 mb-4">
                  Other Services in {location.city}
                </h3>
                <div className="space-y-2 max-h-72 overflow-y-auto">
                  {relatedServices.map((relService) => (
                    <Link
                      key={relService.slug}
                      to={serviceLocationUrl(relService.slug, location.slug)}
                      className="flex items-center justify-between text-sm text-gray-700 hover:text-sky-600 transition-colors py-1 border-b border-gray-50 last:border-0"
                    >
                      <span className="flex items-center gap-2">
                        <Wrench className="h-3.5 w-3.5 text-sky-500" />
                        {relService.name}
                      </span>
                      <ChevronRight className="h-3.5 w-3.5 text-gray-300" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Linking: All other locations for this service */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-navy-900">
              {service.name} Throughout Our Service Area
            </h2>
            <p className="mt-3 text-sm text-gray-600 max-w-2xl mx-auto">
              Dispatched from Ann Arbor, we provide professional {service.name.toLowerCase()} across Washtenaw and Wayne counties.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {otherLocations.map((loc) => (
              <Link
                key={loc.slug}
                to={serviceLocationUrl(service.slug, loc.slug)}
                className="flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-medium text-navy-900 ring-1 ring-gray-200 transition-all hover:bg-sky-50 hover:ring-sky-300 hover:text-sky-600"
              >
                <MapPin className="h-4 w-4 flex-shrink-0 text-sky-500" />
                <span>{service.shortName} in {loc.city}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Ready for ${service.shortName} in ${location.city}?`}
        subtitle={`Call On The Mark Mechanical at ${business.phoneDisplay} to discuss your system or schedule a service visit today.`}
      />
    </>
  );
}
