import { useState } from 'react';
import { Phone, ArrowRight, HelpCircle, Search, MessageSquare, Wrench } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQAccordion from '@/components/FAQAccordion';
import CTASection from '@/components/CTASection';
import { generalFAQs } from '@/data/faqs';
import { faqJsonLd, localBusinessJsonLd } from '@/lib/jsonLd';
import { business } from '@/data/business';

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'General & Emergency',
    'Repairs & Diagnostics',
    'Replacement & Costs',
    'Maintenance & Efficiency',
  ];

  const filteredFaqs = generalFAQs.filter((faq) => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesQuery =
      searchQuery === '' ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <>
      <SEO
        title="HVAC FAQ | On The Mark Mechanical Ann Arbor, MI"
        description="Frequently asked questions about Ann Arbor HVAC repairs, furnace diagnostics, AC replacement, utility rebates, and emergency dispatch from 3526 W Liberty Rd. Call (734) 294-5501."
        canonicalPath="/faq"
        jsonLd={[localBusinessJsonLd(), faqJsonLd(generalFAQs)]}
      />
      <Breadcrumbs crumbs={[{ name: 'FAQ', path: '/faq' }]} />

      {/* Hero */}
      <section className="bg-navy-900 text-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/20 px-4 py-1.5 text-xs font-semibold text-sky-300 ring-1 ring-sky-500/30 mb-4">
            Expert HVAC Answers · Ann Arbor &amp; Washtenaw County
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-200">
            Real answers to common customer questions about diagnostics, repairs, equipment replacement, utility rebates, and local dispatch.
          </p>
          <div className="mt-6 flex justify-center">
            <a
              href={business.phoneLink}
              className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-6 py-3 font-bold text-white shadow hover:bg-sky-400 transition-all"
            >
              <Phone className="h-4 w-4" />
              Call Directly: {business.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Main Content */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          
          {/* Search & Category Filter Controls */}
          <div className="mb-10 space-y-4">
            <div className="relative">
              <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search HVAC questions (e.g., warm air, rebates, $5000 rule, emergency)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-gray-300 bg-white pl-10 pr-4 py-3 text-sm text-navy-900 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                    selectedCategory === cat
                      ? 'bg-sky-500 text-white shadow-sm'
                      : 'bg-white text-gray-700 ring-1 ring-gray-200 hover:bg-gray-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Accordion */}
          {filteredFaqs.length > 0 ? (
            <FAQAccordion faqs={filteredFaqs} />
          ) : (
            <div className="rounded-xl bg-white p-8 text-center ring-1 ring-gray-200">
              <p className="text-gray-500">No questions matched your search term.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="mt-3 text-sm font-semibold text-sky-600 hover:text-sky-700 underline"
              >
                Reset filters
              </button>
            </div>
          )}

          {/* Direct Help Callout */}
          <div className="mt-12 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-600 mb-4">
              <MessageSquare className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-bold text-navy-900">Have a Question About Your Specific System?</h2>
            <p className="mt-2 text-sm text-gray-600 max-w-md mx-auto">
              Call us directly at <strong>{business.phoneDisplay}</strong>. You'll speak with a knowledgeable technician who can evaluate your symptoms and provide straightforward guidance.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a
                href={business.phoneLink}
                className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-7 py-3.5 font-bold text-white shadow hover:bg-sky-400 transition-all hover:scale-105"
              >
                <Phone className="h-4 w-4" />
                Call {business.phoneDisplay}
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-gray-100 px-6 py-3.5 font-semibold text-navy-900 hover:bg-gray-200 transition-all"
              >
                Request a Service Quote
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
