import { useParams, Link } from 'react-router-dom';
import {
  Clock,
  User,
  ArrowRight,
  Phone,
  CheckCircle2,
  AlertTriangle,
  BookOpen,
  Share2,
  ShieldCheck,
  MapPin,
  Calendar,
} from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import NotFound from '@/components/NotFound';
import CTASection from '@/components/CTASection';
import { getArticle, articles } from '@/data/articles';
import { business } from '@/data/business';
import { baseUrl } from '@/lib/routes';
import { localBusinessJsonLd } from '@/lib/jsonLd';

export default function ArticleDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  if (!slug) return <NotFound />;

  const article = getArticle(slug);
  if (!article) return <NotFound />;

  const canonicalPath = `/resources/${article.slug}`;
  const canonicalUrl = `${baseUrl}${canonicalPath}`;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl,
    },
    headline: article.title,
    description: article.excerpt,
    image: article.heroImage,
    datePublished: article.publishedDate,
    dateModified: article.publishedDate,
    author: {
      '@type': 'Person',
      name: article.author.name,
      jobTitle: article.author.role,
      worksFor: {
        '@type': 'HVACBusiness',
        name: business.name,
      },
    },
    publisher: {
      '@type': 'Organization',
      name: business.name,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/favicon.svg`,
      },
    },
  };

  const otherArticles = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <>
      <SEO
        title={`${article.title} | On The Mark Mechanical`}
        description={article.excerpt}
        canonicalPath={canonicalPath}
        ogImage={article.heroImage}
        jsonLd={[localBusinessJsonLd(), articleJsonLd]}
      />
      <Breadcrumbs
        crumbs={[
          { name: 'Resources', path: '/resources' },
          { name: article.title, path: canonicalPath },
        ]}
      />

      {/* Article Header */}
      <section className="bg-navy-900 text-white py-14 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/20 px-3.5 py-1 text-xs font-semibold text-sky-300 ring-1 ring-sky-500/30 mb-6">
            <span>{article.category}</span>
            <span className="text-white/40">·</span>
            <span>{article.searchIntent}</span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl leading-tight">
            {article.title}
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-200 leading-relaxed font-normal">
            {article.excerpt}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-5 pt-6 border-t border-white/10 text-xs sm:text-sm text-gray-300">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-500 font-bold text-white text-sm">
                {article.author.name[0]}
              </div>
              <div>
                <div className="font-bold text-white">{article.author.name}</div>
                <div className="text-xs text-sky-300">{article.author.role}</div>
              </div>
            </div>
            <span className="text-gray-500 hidden sm:inline">·</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-sky-400" />
              {article.publishedDate}
            </span>
            <span className="text-gray-500 hidden sm:inline">·</span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-sky-400" />
              {article.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Article Content Layout */}
      <section className="bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          
          {/* Hero Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg mb-10 ring-1 ring-gray-200 h-72 sm:h-96">
            <img
              src={article.heroImage}
              alt={article.heroImageAlt}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Key Takeaways Box */}
          <div className="rounded-2xl bg-sky-50/70 p-6 sm:p-8 ring-1 ring-sky-200 mb-12 border-l-4 border-sky-500">
            <h2 className="text-lg font-bold text-navy-900 flex items-center gap-2 mb-4">
              <CheckCircle2 className="h-5 w-5 text-sky-600" /> Key Technical Takeaways
            </h2>
            <ul className="space-y-2.5 text-sm text-gray-700">
              {article.keyTakeaways.map((point, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-sky-500 flex-shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Body Sections */}
          <div className="space-y-10 text-gray-700 leading-relaxed text-base">
            {article.sections.map((section, idx) => (
              <div key={idx} className="space-y-4">
                <h2 className="text-2xl font-bold text-navy-900 pt-2 border-b border-gray-100 pb-2">
                  {section.heading}
                </h2>
                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-gray-700 text-base leading-relaxed">
                    {p}
                  </p>
                ))}

                {section.bulletPoints && (
                  <ul className="my-4 space-y-2 rounded-xl bg-gray-50 p-5 ring-1 ring-gray-200 text-sm">
                    {section.bulletPoints.map((bp, bpIdx) => (
                      <li key={bpIdx} className="flex items-start gap-2 text-gray-700">
                        <span className="h-1.5 w-1.5 rounded-full bg-sky-500 mt-2 flex-shrink-0" />
                        <span>{bp}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.callout && (
                  <div className="my-5 rounded-xl bg-amber-50 p-4 ring-1 ring-amber-200 text-sm text-amber-900 flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div className="font-medium">{section.callout}</div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* In-Article Action Box (High Conversion) */}
          <div className="mt-14 rounded-2xl bg-gradient-to-br from-navy-900 to-navy-800 p-8 text-white shadow-xl">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
                Ann Arbor HVAC Diagnostics &amp; Care
              </span>
              <h3 className="text-2xl font-bold mt-1">Need Hands-On Diagnosis For Your System?</h3>
              <p className="mt-3 text-sm text-gray-300 leading-relaxed">
                Our technicians Richard, Rick, and Terry are dispatched daily from 3526 W Liberty Rd, Suite 300, Ann Arbor. We provide transparent written quotes before turning a wrench, with zero sales pressure.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <a
                  href={business.phoneLink}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-500 px-6 py-3.5 text-base font-bold text-white shadow hover:bg-sky-400 transition-all hover:scale-105"
                >
                  <Phone className="h-5 w-5" />
                  Call {business.phoneDisplay}
                </a>
                <Link
                  to={article.relatedServiceUrl}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-6 py-3.5 text-sm font-semibold text-white ring-1 ring-white/30 backdrop-blur hover:bg-white/20 transition-all"
                >
                  {article.relatedServiceCta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Author Bio Card (E-E-A-T Demonstration) */}
          <div className="mt-12 rounded-2xl bg-gray-50 p-6 sm:p-8 ring-1 ring-gray-200 flex flex-col sm:flex-row gap-5 items-start">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-500 font-bold text-white text-xl flex-shrink-0 shadow-md">
              {article.author.name[0]}
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h4 className="text-lg font-bold text-navy-900">Written &amp; Reviewed by {article.author.name}</h4>
                <span className="rounded-md bg-sky-100 px-2 py-0.5 text-xs font-bold text-sky-800">
                  {article.author.experience}
                </span>
              </div>
              <p className="text-xs font-semibold text-sky-600 mt-0.5">{article.author.role} · On The Mark Mechanical</p>
              <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                {article.author.bio}
              </p>
              <div className="mt-3 flex items-center gap-4 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                  State of Michigan Licensed Mechanical Contractor
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5 text-sky-500" />
                  3526 W Liberty Rd, Ann Arbor, MI
                </span>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-16 pt-10 border-t border-gray-200">
            <h3 className="text-xl font-bold text-navy-900 mb-6">Related Homeowner HVAC Guides</h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {otherArticles.map((rel) => (
                <div key={rel.slug} className="rounded-xl bg-gray-50 p-5 ring-1 ring-gray-200 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">{rel.category}</span>
                    <h4 className="text-sm font-bold text-navy-900 mt-1 leading-snug line-clamp-2">
                      <Link to={`/resources/${rel.slug}`} className="hover:text-sky-600">
                        {rel.title}
                      </Link>
                    </h4>
                    <p className="mt-2 text-xs text-gray-500 line-clamp-2">{rel.excerpt}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-gray-200 flex items-center justify-between text-xs">
                    <span className="text-gray-400">{rel.readTime}</span>
                    <Link to={`/resources/${rel.slug}`} className="font-bold text-sky-600 hover:text-sky-700 flex items-center gap-1">
                      Read <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <CTASection />
    </>
  );
}
