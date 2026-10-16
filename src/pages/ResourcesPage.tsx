import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  ArrowRight,
  Clock,
  User,
  Search,
  CheckCircle2,
  Phone,
  Flame,
  Snowflake,
  RefreshCw,
  Wrench,
  Building,
  Wind,
  ShieldCheck,
} from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';
import { articles } from '@/data/articles';
import { business } from '@/data/business';
import { localBusinessJsonLd } from '@/lib/jsonLd';

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Cooling', 'Heating', 'Heat Pumps', 'Maintenance', 'Commercial & Specialized'];

  const filteredArticles = articles.filter((article) => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesQuery =
      searchQuery === '' ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.author.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const featuredArticle = articles[0];

  return (
    <>
      <SEO
        title="HVAC Guides & Resources | On The Mark Mechanical Ann Arbor, MI"
        description="Expert HVAC guides written by licensed Ann Arbor technicians. AC repair signs, furnace repair vs replacement ($5k rule), winter maintenance checklists, heat pumps, and refrigeration."
        canonicalPath="/resources"
        jsonLd={[localBusinessJsonLd()]}
      />
      <Breadcrumbs crumbs={[{ name: 'Resources', path: '/resources' }]} />

      {/* Hero Header */}
      <section className="bg-navy-900 text-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/20 px-4 py-1.5 text-xs font-semibold text-sky-300 ring-1 ring-sky-500/30 mb-4">
            <BookOpen className="h-4 w-4" />
            Field-Tested Technical Guides &amp; Insights
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            HVAC Guides &amp; Homeowner Resources
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-200 leading-relaxed">
            Written and reviewed by our licensed Ann Arbor technicians (Richard, Rick, and Terry).
            Real troubleshooting steps, economic repair-vs-replace math, and Michigan weather prep.
          </p>
          <div className="mt-6 flex justify-center">
            <a
              href={business.phoneLink}
              className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-6 py-3 font-bold text-white shadow hover:bg-sky-400 transition-all"
            >
              <Phone className="h-4 w-4" />
              Speak With a Technician: {business.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* Featured Guide Banner */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-r from-navy-950 via-navy-900 to-navy-800 text-white overflow-hidden shadow-xl ring-1 ring-gray-900/10 grid lg:grid-cols-12 items-center">
            <div className="p-8 sm:p-12 lg:col-span-7">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-500/30 px-3 py-1 text-xs font-bold text-sky-300 ring-1 ring-sky-500/40 mb-4">
                Featured Guide
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold leading-tight">
                <Link to={`/resources/${featuredArticle.slug}`} className="hover:text-sky-300 transition-colors">
                  {featuredArticle.title}
                </Link>
              </h2>
              <p className="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed">
                {featuredArticle.excerpt}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-gray-300">
                <span className="flex items-center gap-1.5 font-medium">
                  <User className="h-3.5 w-3.5 text-sky-400" />
                  Reviewed by {featuredArticle.author.name} ({featuredArticle.author.role})
                </span>
                <span>·</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-sky-400" />
                  {featuredArticle.readTime}
                </span>
              </div>
              <div className="mt-8">
                <Link
                  to={`/resources/${featuredArticle.slug}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-6 py-3 text-sm font-bold text-white shadow hover:bg-sky-400 transition-all"
                >
                  Read Full Guide
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5 h-64 lg:h-full min-h-[300px] relative">
              <img
                src={featuredArticle.heroImage}
                alt={featuredArticle.heroImageAlt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Directory Specialized Capabilities Highlight */}
      <section className="bg-sky-50/60 py-10 border-b border-sky-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700">Specialized Mechanical Solutions</span>
            <h3 className="text-xl sm:text-2xl font-bold text-navy-900 mt-1">
              Commercial Refrigeration, Custom Ductwork &amp; Air Purification
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              Recognized in Washtenaw County business directories for full-spectrum mechanical craftsmanship.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-gray-200">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-100 text-cyan-600 mb-3">
                <Snowflake className="h-4 w-4" />
              </div>
              <h4 className="font-bold text-navy-900 text-sm">Commercial Refrigeration</h4>
              <p className="mt-1.5 text-xs text-gray-600 leading-relaxed">
                Walk-in coolers, freezers, reach-in cases, and ice machines for restaurants, venues, and research labs.
              </p>
              <Link to="/commercial-refrigeration-ann-arbor-mi" className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-sky-600 hover:text-sky-700">
                View Services <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            <div className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-gray-200">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-100 text-sky-600 mb-3">
                <Wind className="h-4 w-4" />
              </div>
              <h4 className="font-bold text-navy-900 text-sm">Ductwork &amp; Airflow Modification</h4>
              <p className="mt-1.5 text-xs text-gray-600 leading-relaxed">
                Custom sheet metal transitions, return air expansion, and balancing for older Ann Arbor homes.
              </p>
              <Link to="/contact" className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-sky-600 hover:text-sky-700">
                Request Evaluation <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            <div className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-gray-200">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-100 text-teal-600 mb-3">
                <ShieldCheck className="h-4 w-4" />
              </div>
              <h4 className="font-bold text-navy-900 text-sm">Whole-Home Humidification</h4>
              <p className="mt-1.5 text-xs text-gray-600 leading-relaxed">
                Bypass and steam humidifiers to protect hardwood floors, trim, and respiratory comfort during dry winters.
              </p>
              <Link to="/indoor-air-quality-ann-arbor-mi" className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-sky-600 hover:text-sky-700">
                Humidifier Options <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            <div className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-gray-200">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600 mb-3">
                <Wrench className="h-4 w-4" />
              </div>
              <h4 className="font-bold text-navy-900 text-sm">Air Purification &amp; Filtration</h4>
              <p className="mt-1.5 text-xs text-gray-600 leading-relaxed">
                High-MERV media air cleaners, germicidal UV-C coil scrubbers, and electronic purifiers.
              </p>
              <Link to="/indoor-air-quality-ann-arbor-mi" className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-sky-600 hover:text-sky-700">
                Air Purification <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Articles Grid & Search */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Search & Category Filter Controls */}
          <div className="mb-10 space-y-4">
            <div className="relative max-w-xl">
              <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles (e.g., warm air, furnace vs replace, heat pump, freezing)..."
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

          {/* Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((article) => (
              <article
                key={article.slug}
                className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-gray-100">
                    <img
                      src={article.heroImage}
                      alt={article.heroImageAlt}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                      loading="lazy"
                    />
                    <span className="absolute top-3 left-3 rounded-md bg-navy-900/80 backdrop-blur px-2.5 py-1 text-xs font-bold text-sky-300">
                      {article.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                      <span className="font-semibold text-sky-600">{article.searchIntent}</span>
                      <span>·</span>
                      <span>{article.readTime}</span>
                    </div>

                    <h3 className="text-xl font-bold text-navy-900 leading-snug">
                      <Link to={`/resources/${article.slug}`} className="hover:text-sky-600 transition-colors">
                        {article.title}
                      </Link>
                    </h3>

                    <p className="mt-3 text-sm text-gray-600 leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-3 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-sky-100 font-bold text-sky-700 text-xs">
                      {article.author.name[0]}
                    </div>
                    <span>{article.author.name}</span>
                  </div>
                  <Link
                    to={`/resources/${article.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-sky-600 hover:text-sky-700"
                  >
                    Read Guide <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      <CTASection
        title="Need Hands-On Diagnosis From Richard, Rick or Terry?"
        subtitle="Call (734) 294-5501. We provide upfront flat-rate estimates, honest advice, and fast local dispatch."
      />
    </>
  );
}
