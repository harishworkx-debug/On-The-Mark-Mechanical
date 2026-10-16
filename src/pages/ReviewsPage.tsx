import { Link } from 'react-router-dom';
import { Phone, Star, ShieldCheck, Clock, ThumbsUp, HeartHandshake, CheckCircle2, ExternalLink } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';
import ReviewsSection, { GoogleIcon } from '@/components/ReviewsSection';
import { business } from '@/data/business';
import { reviewsSummary } from '@/data/reviews';
import { localBusinessJsonLd } from '@/lib/jsonLd';

export default function ReviewsPage() {
  return (
    <>
      <SEO
        title={`Customer Reviews | 4.4 Stars (11 Google Reviews) | ${business.name}`}
        description={`Read genuine Google customer reviews for On The Mark Mechanical in Ann Arbor, MI. 4.4 star rating from 11 verified reviews for air conditioning repair, furnace installation, and HVAC services.`}
        canonicalPath="/reviews"
        jsonLd={[localBusinessJsonLd()]}
      />
      <Breadcrumbs crumbs={[{ name: 'Reviews', path: '/reviews' }]} />

      {/* Hero Section */}
      <section className="relative bg-navy-900 py-16 lg:py-24 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-800 opacity-90" />
        
        {/* Decorative ambient circles */}
        <div className="pointer-events-none absolute -top-24 right-10 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-10 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-sky-300 ring-1 ring-sky-500/30 mb-6">
              <GoogleIcon className="h-4 w-4" />
              Verified Google Customer Reviews
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              What Ann Arbor Homeowners Say About Us
            </h1>

            <p className="mt-6 text-lg text-gray-200 leading-relaxed">
              Real feedback from real customers across Washtenaw County. From fast emergency AC
              repairs on the hottest days of summer to reliable furnace installations for freezing
              Michigan winters, here is what our clients experience when they call On The Mark
              Mechanical.
            </p>

            {/* Quick stats row */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-navy-800">
              <div className="rounded-xl bg-navy-800/60 p-4 ring-1 ring-navy-700">
                <div className="flex items-center gap-1 text-amber-400">
                  <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                  <span className="text-2xl font-black text-white">{reviewsSummary.rating}</span>
                </div>
                <div className="text-xs text-gray-300 mt-1">Google Star Rating</div>
              </div>

              <div className="rounded-xl bg-navy-800/60 p-4 ring-1 ring-navy-700">
                <div className="text-2xl font-black text-white">{reviewsSummary.totalReviews}</div>
                <div className="text-xs text-gray-300 mt-1">Total Google Reviews</div>
              </div>

              <div className="rounded-xl bg-navy-800/60 p-4 ring-1 ring-navy-700">
                <div className="text-2xl font-black text-white">20+ Yrs</div>
                <div className="text-xs text-gray-300 mt-1">Loyal Client History</div>
              </div>

              <div className="rounded-xl bg-navy-800/60 p-4 ring-1 ring-navy-700">
                <div className="text-2xl font-black text-sky-400">Same-Day</div>
                <div className="text-xs text-gray-300 mt-1">Emergency Calls</div>
              </div>
            </div>

            {/* Hero CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href={business.phoneLink}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-500 px-7 py-3.5 text-base font-bold text-white shadow-lg transition-all hover:bg-sky-400 hover:shadow-xl hover:scale-105"
              >
                <Phone className="h-4 w-4" />
                Call {business.phoneDisplay}
              </a>
              <a
                href={business.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-7 py-3.5 text-base font-semibold text-white ring-1 ring-white/30 backdrop-blur transition-all hover:bg-white/20"
              >
                <GoogleIcon className="h-4 w-4" />
                Review Us on Google
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Review Spotlight */}
      <section className="bg-white py-14 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
              Verified Highlights
            </span>
            <h2 className="mt-2 text-2xl font-bold text-navy-900 sm:text-3xl">
              Stories From Our Long-Term Customers
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-gradient-to-br from-sky-50 to-white p-6 shadow-sm ring-1 ring-sky-100 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-700 italic leading-relaxed">
                  &ldquo;I have used &lsquo;On the Mark&rsquo; for more than 20 years, both for service and system replacements. Today was the 5th system they have replaced... install was done very professionally, the clean up was superb, and the price was more than just &lsquo;competitive&rsquo;.&rdquo;
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-sky-100 flex items-center justify-between">
                <div>
                  <div className="font-bold text-navy-900 text-sm">HK Parrot</div>
                  <div className="text-xs text-gray-500">20+ Year Customer · 6 Reviews</div>
                </div>
                <span className="text-[11px] font-semibold text-sky-700 bg-sky-100 px-2 py-0.5 rounded">
                  5th System Install
                </span>
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-sky-50 to-white p-6 shadow-sm ring-1 ring-sky-100 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-700 italic leading-relaxed">
                  &ldquo;HOLY COW! BEST. SERVICE. CALL. EVER!! Called at 8:44 AM on the hottest day... Richard was at my house within 45 minutes and fixed the outside unit! Super quick. Super friendly! CALL THEM! Won&rsquo;t ever think about someone else.&rdquo;
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-sky-100 flex items-center justify-between">
                <div>
                  <div className="font-bold text-navy-900 text-sm">Matt Crigger</div>
                  <div className="text-xs text-gray-500">Local Guide · 47 Reviews</div>
                </div>
                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                  45-Min Emergency
                </span>
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-sky-50 to-white p-6 shadow-sm ring-1 ring-sky-100 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-700 italic leading-relaxed">
                  &ldquo;Richard did not pressure the sale, suggested to look around for prices. Rick was able to do the install the very next day! By 5:00 PM the unit was up and running, cooling the house down. Exceptional work.&rdquo;
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-sky-100 flex items-center justify-between">
                <div>
                  <div className="font-bold text-navy-900 text-sm">Laura Myers</div>
                  <div className="text-xs text-gray-500">AC Installation Client</div>
                </div>
                <span className="text-[11px] font-semibold text-sky-700 bg-sky-100 px-2 py-0.5 rounded">
                  Next-Day Install
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Reviews Section */}
      <ReviewsSection
        title="All Google Customer Reviews"
        subtitle="Explore all verified Google reviews for On The Mark Mechanical in Ann Arbor. Filter by heating, cooling, unit, or service experience."
        showFilters={true}
      />

      {/* Trust Factors */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-900">Why Customers Keep Coming Back</h2>
            <p className="mt-3 text-gray-600 max-w-xl mx-auto">
              What sets On The Mark Mechanical apart according to our verified reviews.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-gray-200 p-6 text-center hover:border-sky-300 transition-colors">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-600 mb-4">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-navy-900">Rapid Response</h3>
              <p className="mt-2 text-xs text-gray-600 leading-relaxed">
                Aiming to be on-site the day you call, especially when extreme weather hits Michigan.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 p-6 text-center hover:border-sky-300 transition-colors">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-600 mb-4">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-navy-900">No Sales Pressure</h3>
              <p className="mt-2 text-xs text-gray-600 leading-relaxed">
                We give honest assessments. If an affordable repair is possible, that is what we recommend.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 p-6 text-center hover:border-sky-300 transition-colors">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-600 mb-4">
                <HeartHandshake className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-navy-900">20+ Year Loyalty</h3>
              <p className="mt-2 text-xs text-gray-600 leading-relaxed">
                Homeowners and businesses continue trusting us across multiple systems and locations.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 p-6 text-center hover:border-sky-300 transition-colors">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-600 mb-4">
                <ThumbsUp className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-navy-900">Competitive Pricing</h3>
              <p className="mt-2 text-xs text-gray-600 leading-relaxed">
                Upfront quotes and high value without hidden surprise fees or unnecessary upselling.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
