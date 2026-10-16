import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Clock,
  Navigation,
  CheckCircle2,
  Phone,
  ShieldCheck,
  ArrowRight,
  Flame,
  Snowflake,
  RefreshCw,
  Building,
} from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';
import { locations, LocationData } from '@/data/locations';
import { business } from '@/data/business';
import { serviceLocationUrl } from '@/lib/routes';
import { localBusinessJsonLd } from '@/lib/jsonLd';

const dispatchTiers = [
  {
    tier: 'Tier 1: Primary Dispatch Hub (5–15 Mins)',
    description: 'Immediate local response from our central shop at 3526 W Liberty Rd. Priority dispatch for no-heat and no-cool emergencies.',
    badgeClass: 'bg-emerald-100 text-emerald-800 ring-emerald-300',
    slugs: ['ann-arbor-mi', 'scio-township-mi', 'pittsfield-charter-township-mi'],
  },
  {
    tier: 'Tier 2: West & South Washtenaw Corridor (15–25 Mins)',
    description: 'Rapid daily service along the I-94 and US-12 corridors for residential homes, historic properties, and rural properties.',
    badgeClass: 'bg-sky-100 text-sky-800 ring-sky-300',
    slugs: ['dexter-mi', 'saline-mi', 'chelsea-mi'],
  },
  {
    tier: 'Tier 3: East Washtenaw & Western Wayne Corridor (20–35 Mins)',
    description: 'Comprehensive residential and commercial HVAC service across US-23, I-94, and M-14 arterial routes.',
    badgeClass: 'bg-purple-100 text-purple-800 ring-purple-300',
    slugs: ['ypsilanti-mi', 'canton-mi', 'plymouth-mi', 'belleville-mi'],
  },
];

export default function ServiceAreasPage() {
  const [selectedCounty, setSelectedCounty] = useState<'all' | 'washtenaw' | 'wayne'>('all');

  const filteredLocations = locations.filter((loc) => {
    if (selectedCounty === 'all') return true;
    if (selectedCounty === 'washtenaw') return loc.county.toLowerCase().includes('washtenaw');
    if (selectedCounty === 'wayne') return loc.county.toLowerCase().includes('wayne');
    return true;
  });

  return (
    <>
      <SEO
        title="HVAC Service Areas in Washtenaw & Wayne Counties | On The Mark Mechanical"
        description="Explore HVAC service coverage across Ann Arbor, Dexter, Saline, Chelsea, Ypsilanti, Canton, Plymouth, and Belleville. Fast dispatch from 3526 W Liberty Rd. Call (734) 294-5501."
        canonicalPath="/service-areas"
        jsonLd={[localBusinessJsonLd()]}
      />
      <Breadcrumbs crumbs={[{ name: 'Service Areas', path: '/service-areas' }]} />

      {/* Hero Header */}
      <section className="bg-navy-900 text-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/20 px-4 py-1.5 text-xs font-semibold text-sky-300 ring-1 ring-sky-500/30 mb-4">
            Centrally Located at 3526 W Liberty Rd, Ann Arbor, MI
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Our HVAC Service Areas &amp; Dispatch Coverage
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-200 leading-relaxed">
            On The Mark Mechanical is strategically located at the intersection of I-94 and W Liberty Rd in Ann Arbor.
            Our fully equipped service vans carry universal replacement parts to deliver rapid, reliable heating and cooling service across Washtenaw and Western Wayne counties.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={business.phoneLink}
              className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-7 py-3.5 text-base font-bold text-white shadow-lg transition-all hover:bg-sky-400 hover:scale-105"
            >
              <Phone className="h-5 w-5" />
              Call For Immediate Dispatch: {business.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* Dispatch Transparency & Coverage Guarantee */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-xl bg-gray-50 p-6 ring-1 ring-gray-200">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-100 text-sky-600 mb-4">
                <Navigation className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-navy-900 text-base">Centrally Located Ann Arbor Shop</h3>
              <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                Operating out of 3526 W Liberty Rd gives our technicians swift highway access via I-94, US-23, and M-14, ensuring we arrive promptly without excessive travel delays.
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-6 ring-1 ring-gray-200">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-100 text-sky-600 mb-4">
                <Clock className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-navy-900 text-base">Emergency Availability</h3>
              <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                We prioritize urgent heating breakdowns during Michigan sub-zero winters and cooling failures during summer heat waves with transparent diagnostic scheduling.
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-6 ring-1 ring-gray-200">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-100 text-sky-600 mb-4">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-navy-900 text-base">No Out-of-Area Surcharges</h3>
              <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                Every community in our service radius enjoys the exact same transparent, upfront flat-rate repair pricing. No hidden mileage fees or quote surprises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter by County */}
      <section className="bg-gray-50 pt-8 pb-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-center gap-3">
          {[
            { id: 'all', label: 'All 10 Communities' },
            { id: 'washtenaw', label: 'Washtenaw County' },
            { id: 'wayne', label: 'Western Wayne County' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCounty(tab.id as typeof selectedCounty)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                selectedCounty === tab.id
                  ? 'bg-navy-900 text-white shadow-sm'
                  : 'bg-white text-gray-700 ring-1 ring-gray-200 hover:bg-gray-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* Dispatch Tiers & Community Cards */}
      <section className="bg-gray-50 pb-16 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          {dispatchTiers.map((tier) => {
            const tierLocations = filteredLocations.filter((loc) => tier.slugs.includes(loc.slug));
            if (tierLocations.length === 0) return null;

            return (
              <div key={tier.tier} className="space-y-6">
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="text-xl sm:text-2xl font-bold text-navy-900">{tier.tier}</h2>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ring-1 ${tier.badgeClass}`}>
                      Active Dispatch Zone
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-gray-600">{tier.description}</p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {tierLocations.map((location) => (
                    <div
                      key={location.slug}
                      className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 flex flex-col justify-between hover:shadow-md transition-shadow"
                    >
                      <div>
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <div>
                            <div className="flex items-center gap-2">
                              <MapPin className="h-5 w-5 text-sky-500 flex-shrink-0" />
                              <h3 className="text-xl font-bold text-navy-900">
                                {location.city}, {location.stateAbbr}
                              </h3>
                            </div>
                            <span className="text-xs text-gray-500 font-medium block mt-0.5 ml-7">
                              {location.county}
                            </span>
                          </div>
                          <span className="inline-flex items-center gap-1 rounded-md bg-sky-50 px-2 py-1 text-xs font-bold text-sky-700 ring-1 ring-sky-200">
                            <Clock className="h-3 w-3" />
                            {location.travelMinutes}
                          </span>
                        </div>

                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                          {location.description}
                        </p>

                        <div className="rounded-lg bg-gray-50 p-3 text-xs space-y-1.5 mb-5 ring-1 ring-gray-100">
                          <div>
                            <strong className="text-navy-900">Dispatch Route:</strong>{' '}
                            <span className="text-gray-600">{location.dispatchRoute}</span>
                          </div>
                          {location.utilityRebates && (
                            <div>
                              <strong className="text-navy-900">Utility Rebates:</strong>{' '}
                              <span className="text-gray-600">{location.utilityRebates}</span>
                            </div>
                          )}
                          {location.neighborhoods && location.neighborhoods.length > 0 && (
                            <div>
                              <strong className="text-navy-900">Neighborhoods:</strong>{' '}
                              <span className="text-gray-600">{location.neighborhoods.slice(0, 4).join(', ')}...</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Direct Service Links for this City */}
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                          Available {location.city} Services:
                        </div>
                        <div className="space-y-1.5 text-xs">
                          <Link
                            to={serviceLocationUrl('air-conditioning-repair', location.slug)}
                            className="flex items-center justify-between text-navy-900 hover:text-sky-600 font-medium py-1 px-2 rounded hover:bg-sky-50 transition-colors"
                          >
                            <span className="flex items-center gap-1.5">
                              <Snowflake className="h-3.5 w-3.5 text-sky-500" /> AC Repair in {location.city}
                            </span>
                            <ArrowRight className="h-3 w-3 text-gray-400" />
                          </Link>
                          <Link
                            to={serviceLocationUrl('furnace-repair', location.slug)}
                            className="flex items-center justify-between text-navy-900 hover:text-sky-600 font-medium py-1 px-2 rounded hover:bg-sky-50 transition-colors"
                          >
                            <span className="flex items-center gap-1.5">
                              <Flame className="h-3.5 w-3.5 text-amber-500" /> Furnace Repair in {location.city}
                            </span>
                            <ArrowRight className="h-3 w-3 text-gray-400" />
                          </Link>
                          <Link
                            to={serviceLocationUrl('heat-pump-services', location.slug)}
                            className="flex items-center justify-between text-navy-900 hover:text-sky-600 font-medium py-1 px-2 rounded hover:bg-sky-50 transition-colors"
                          >
                            <span className="flex items-center gap-1.5">
                              <RefreshCw className="h-3.5 w-3.5 text-emerald-500" /> Heat Pumps in {location.city}
                            </span>
                            <ArrowRight className="h-3 w-3 text-gray-400" />
                          </Link>
                          <Link
                            to={serviceLocationUrl('commercial-hvac', location.slug)}
                            className="flex items-center justify-between text-navy-900 hover:text-sky-600 font-medium py-1 px-2 rounded hover:bg-sky-50 transition-colors"
                          >
                            <span className="flex items-center gap-1.5">
                              <Building className="h-3.5 w-3.5 text-indigo-500" /> Commercial HVAC in {location.city}
                            </span>
                            <ArrowRight className="h-3 w-3 text-gray-400" />
                          </Link>
                        </div>

                        <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                          <Link
                            to={serviceLocationUrl('air-conditioning-repair', location.slug)}
                            className="text-xs font-bold text-sky-600 hover:text-sky-700"
                          >
                            All {location.city} Services &rarr;
                          </Link>
                          <a
                            href={business.phoneLink}
                            className="text-xs font-semibold text-gray-500 hover:text-navy-900 flex items-center gap-1"
                          >
                            <Phone className="h-3 w-3" /> Call {business.phoneDisplay}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CTASection
        title="Don't See Your Specific Neighborhood Listed?"
        subtitle="If you live in Washtenaw County or Western Wayne County, chances are we can dispatch to your home or facility. Call (734) 294-5501 to confirm availability."
      />
    </>
  );
}
