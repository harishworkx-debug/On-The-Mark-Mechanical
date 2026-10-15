import { Phone, MapPin, Clock, ExternalLink } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';
import { business } from '@/data/business';
import { localBusinessJsonLd } from '@/lib/jsonLd';

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact On The Mark Mechanical | Ann Arbor, MI HVAC"
        description="Contact On The Mark Mechanical at 734-222-0918. Located at 3526 W Liberty Rd, Suite 300, Ann Arbor, MI 48103. Call us for all your heating and cooling needs."
        canonicalPath="/contact"
        jsonLd={[localBusinessJsonLd()]}
      />
      <Breadcrumbs crumbs={[{ name: 'Contact', path: '/contact' }]} />

      <section className="bg-navy-900 text-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Contact Us</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-200">
            Call us directly to discuss your HVAC needs or schedule a service appointment.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="rounded-xl bg-white p-8 shadow-md ring-1 ring-gray-200">
                <h2 className="text-2xl font-bold text-navy-900">{business.name}</h2>
                <div className="mt-6 space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-sky-100 flex-shrink-0">
                      <Phone className="h-5 w-5 text-sky-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 font-medium">Phone</div>
                      <a
                        href={business.phoneLink}
                        className="text-lg font-bold text-navy-900 hover:text-sky-600 transition-colors"
                      >
                        {business.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-sky-100 flex-shrink-0">
                      <MapPin className="h-5 w-5 text-sky-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 font-medium">Address</div>
                      <div className="text-base text-navy-900">
                        {business.address.street}<br />
                        {business.address.city}, {business.address.state} {business.address.zip}<br />
                        {business.address.country}
                      </div>
                      <a
                        href={business.mapsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-sky-600 hover:text-sky-700"
                      >
                        View on Google Maps
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-sky-100 flex-shrink-0">
                      <Clock className="h-5 w-5 text-sky-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 font-medium">Business Hours</div>
                      <div className="text-sm text-gray-600">
                        Please call us at {business.phoneDisplay} to confirm current hours and schedule an appointment.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-sky-500 p-8 text-center shadow-lg">
                <h3 className="text-xl font-bold text-white">Call to Schedule Service</h3>
                <p className="mt-2 text-sky-50">
                  Speak with us directly about your heating and cooling needs.
                </p>
                <a
                  href={business.phoneLink}
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-lg font-bold text-sky-600 shadow-lg transition-all hover:bg-gray-50 hover:scale-105"
                >
                  <Phone className="h-6 w-6" />
                  {business.phoneDisplay}
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden shadow-md ring-1 ring-gray-200 min-h-[400px]">
              <iframe
                title="On The Mark Mechanical location map"
                src={business.mapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
