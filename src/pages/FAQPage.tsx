import { Phone } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQAccordion from '@/components/FAQAccordion';
import CTASection from '@/components/CTASection';
import { generalFAQs } from '@/data/faqs';
import { faqJsonLd, localBusinessJsonLd } from '@/lib/jsonLd';
import { business } from '@/data/business';

export default function FAQPage() {
  return (
    <>
      <SEO
        title="HVAC FAQ | On The Mark Mechanical Ann Arbor, MI"
        description="Frequently asked questions about HVAC services, air conditioning repair, furnace repair, service areas, and how to contact On The Mark Mechanical in Ann Arbor, Michigan."
        canonicalPath="/faq"
        jsonLd={[localBusinessJsonLd(), faqJsonLd(generalFAQs)]}
      />
      <Breadcrumbs crumbs={[{ name: 'FAQ', path: '/faq' }]} />

      <section className="bg-navy-900 text-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Frequently Asked Questions</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-200">
            Common questions about our HVAC services, service areas, and how to get in touch.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FAQAccordion faqs={generalFAQs} />

          <div className="mt-12 rounded-xl bg-white p-6 ring-1 ring-gray-200 text-center">
            <h2 className="text-xl font-bold text-navy-900">Still Have Questions?</h2>
            <p className="mt-2 text-gray-600">
              Call us at {business.phoneDisplay} and we will be happy to help.
            </p>
            <a
              href={business.phoneLink}
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-sky-500 px-6 py-3 font-bold text-white transition-colors hover:bg-sky-400"
            >
              <Phone className="h-5 w-5" />
              Call {business.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
