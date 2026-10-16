import { Link } from 'react-router-dom';
import {
  Phone,
  ArrowRight,
  Wrench,
  ShieldCheck,
  ThermometerSun,
  Snowflake,
  Flame,
  RefreshCw,
  Wind,
  Clock,
  CheckCircle2,
  MapPin,
  Star,
} from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import ServiceCard from '@/components/ServiceCard';
import CTASection from '@/components/CTASection';
import FAQAccordion from '@/components/FAQAccordion';
import ReviewsSection, { GoogleIcon } from '@/components/ReviewsSection';
import { business } from '@/data/business';
import { services } from '@/data/services';
import { locations } from '@/data/locations';
import { serviceLocationUrl } from '@/lib/routes';
import { localBusinessJsonLd, faqJsonLd } from '@/lib/jsonLd';
import { generalFAQs } from '@/data/faqs';

const heroImage = 'https://images.pexels.com/photos/5463581/pexels-photo-5463581.jpeg?auto=compress&cs=tinysrgb&w=1600';
const aboutImage = 'https://images.pexels.com/photos/32497161/pexels-photo-32497161.jpeg?auto=compress&cs=tinysrgb&w=1200';

const processSteps = [
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Contact us at 734-222-0918 to discuss your HVAC needs and schedule a visit.',
  },
  {
    icon: Wrench,
    title: 'Diagnosis',
    description: 'Our technician inspects your system, identifies the issue, and explains it clearly.',
  },
  {
    icon: ShieldCheck,
    title: 'Transparent Quote',
    description: 'You receive upfront pricing before any work begins. No surprises or hidden fees.',
  },
  {
    icon: CheckCircle2,
    title: 'Professional Service',
    description: 'We complete the repair or installation to the highest standard and test everything.',
  },
];

const homeFaqs = generalFAQs.slice(0, 6);

export default function HomePage() {
  const featuredServices = services.slice(0, 6);

  return (
    <>
      <SEO
        title="HVAC Services in Ann Arbor, MI | On The Mark Mechanical"
        description="Need AC repair or heating service in Ann Arbor, MI? On The Mark Mechanical can help diagnose cooling problems and explain your repair options. Call (734) 222-0918 to discuss your HVAC service needs."
        canonicalPath="/"
        ogImage={heroImage}
        jsonLd={[localBusinessJsonLd(), faqJsonLd(homeFaqs)]}
      />
      <Breadcrumbs crumbs={[{ name: 'Home', path: '/' }]} />

      {/* Hero */}
      <section className="relative bg-navy-900 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="HVAC technician repairing an air conditioning unit in Ann Arbor" className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900/95 to-navy-800/70" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/20 px-4 py-1.5 text-sm font-medium text-sky-300 ring-1 ring-sky-500/30 mb-6">
              <MapPin className="h-4 w-4" />
              <span>Ann Arbor, MI · 3526 W Liberty Rd</span>
              <span className="text-white/40">|</span>
              <span>20+ Years Serving Washtenaw County</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              HVAC Services in Ann Arbor, MI
            </h1>
            <p className="mt-6 text-xl text-gray-200 leading-relaxed font-normal">
              Trusted heating, air conditioning, and ventilation service by On The Mark Mechanical.
              From emergency AC and furnace repair to complete high-efficiency system installations,
              we deliver transparent diagnostics, honest advice, and zero sales pressure.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href={business.phoneLink}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-500 px-7 py-4 text-lg font-bold text-white shadow-lg transition-all hover:bg-sky-400 hover:shadow-xl hover:scale-105"
              >
                <Phone className="h-5 w-5" />
                Call {business.phoneDisplay}
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-7 py-4 text-lg font-semibold text-white ring-1 ring-white/30 backdrop-blur transition-all hover:bg-white/20"
              >
                Request Service / Quote
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            {/* Google Reviews Hero Trust Badge */}
            <div className="mt-8 flex flex-wrap items-center gap-4 pt-6 border-t border-white/10">
              <div className="flex items-center gap-2">
                <GoogleIcon className="h-5 w-5" />
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-white text-sm">4.4 Rating</span>
              </div>
              <span className="text-gray-400 hidden sm:inline">·</span>
              <a
                href="#reviews"
                className="text-sm font-medium text-sky-300 hover:text-sky-200 underline underline-offset-4"
              >
                11 Verified Google Reviews
              </a>
              <span className="text-gray-400 hidden sm:inline">·</span>
              <span className="text-xs text-gray-300 bg-white/10 px-2.5 py-1 rounded-md">
                Licensed MI Mechanical Contractor · EPA Universal
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-900 sm:text-4xl">Our HVAC Services</h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-600">
              Professional heating and cooling services for residential and commercial properties in
              Ann Arbor and surrounding communities.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-lg font-semibold text-sky-600 hover:text-sky-700"
            >
              View All Services
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3.5 py-1 text-xs font-semibold text-sky-700 ring-1 ring-sky-200 mb-4">
                <MapPin className="h-3.5 w-3.5" />
                Shop HQ: 3526 W Liberty Rd, Suite 300, Ann Arbor
              </div>
              <h2 className="text-3xl font-bold text-navy-900 sm:text-4xl">
                Your Trusted HVAC Contractor in Ann Arbor, MI
              </h2>
              <p className="mt-6 text-gray-600 leading-relaxed">
                On The Mark Mechanical is an established heating, cooling, and commercial refrigeration contractor
                headquartered at <strong>3526 W Liberty Rd, Suite 300, Ann Arbor, MI 48103</strong>.
                For more than two decades, we have provided Washtenaw County residents and commercial facility managers
                with dependable, high-integrity HVAC craftsmanship.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                When you call us at <strong>{business.phoneDisplay}</strong>, you speak directly with knowledgeable professionals.
                Our seasoned field team—including service diagnostics lead <em>Richard</em>, installation specialist <em>Rick</em>, and master diagnostic tech <em>Terry</em>—is known for thorough explanations, clean job sites, and zero sales pressure.
                We provide honest repair-versus-replace guidance so you can make confident, budget-smart decisions for your property.
              </p>

              {/* Direct Ann Arbor Internal Links */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">
                  Popular Ann Arbor HVAC Services:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <Link
                    to="/air-conditioning-repair-ann-arbor-mi"
                    className="flex items-center gap-2 text-sm font-medium text-navy-900 hover:text-sky-600 transition-colors group"
                  >
                    <CheckCircle2 className="h-4 w-4 text-sky-500 group-hover:scale-110 transition-transform" />
                    <span>AC Repair in Ann Arbor</span>
                  </Link>
                  <Link
                    to="/furnace-repair-ann-arbor-mi"
                    className="flex items-center gap-2 text-sm font-medium text-navy-900 hover:text-sky-600 transition-colors group"
                  >
                    <CheckCircle2 className="h-4 w-4 text-sky-500 group-hover:scale-110 transition-transform" />
                    <span>Furnace Repair in Ann Arbor</span>
                  </Link>
                  <Link
                    to="/heat-pump-services-ann-arbor-mi"
                    className="flex items-center gap-2 text-sm font-medium text-navy-900 hover:text-sky-600 transition-colors group"
                  >
                    <CheckCircle2 className="h-4 w-4 text-sky-500 group-hover:scale-110 transition-transform" />
                    <span>Heat Pumps &amp; Mini-Splits</span>
                  </Link>
                  <Link
                    to="/air-conditioning-installation-ann-arbor-mi"
                    className="flex items-center gap-2 text-sm font-medium text-navy-900 hover:text-sky-600 transition-colors group"
                  >
                    <CheckCircle2 className="h-4 w-4 text-sky-500 group-hover:scale-110 transition-transform" />
                    <span>AC Replacement &amp; Install</span>
                  </Link>
                  <Link
                    to="/furnace-installation-ann-arbor-mi"
                    className="flex items-center gap-2 text-sm font-medium text-navy-900 hover:text-sky-600 transition-colors group"
                  >
                    <CheckCircle2 className="h-4 w-4 text-sky-500 group-hover:scale-110 transition-transform" />
                    <span>Furnace Replacement &amp; Install</span>
                  </Link>
                  <Link
                    to="/commercial-hvac-ann-arbor-mi"
                    className="flex items-center gap-2 text-sm font-medium text-navy-900 hover:text-sky-600 transition-colors group"
                  >
                    <CheckCircle2 className="h-4 w-4 text-sky-500 group-hover:scale-110 transition-transform" />
                    <span>Commercial HVAC &amp; RTUs</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-gray-900/10">
              <img
                src={aboutImage}
                alt="On The Mark Mechanical HVAC technician inspecting an outdoor unit in Ann Arbor"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-navy-900/90 backdrop-blur p-4 text-white text-xs">
                <div className="font-semibold text-sky-300">Fast Local Response from Ann Arbor</div>
                <div className="text-gray-300 mt-0.5">Dispatched from 3526 W Liberty Rd to all Washtenaw County neighborhoods.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Residential & Commercial */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl bg-white p-8 shadow-md ring-1 ring-gray-200">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-sky-100">
                <Snowflake className="h-6 w-6 text-sky-600" />
              </div>
              <h3 className="mt-5 text-2xl font-bold text-navy-900">Residential HVAC</h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                We provide complete heating and cooling services for homes in Ann Arbor and
                surrounding communities. Whether you need a quick repair, a full system
                replacement, or routine maintenance, we are ready to help.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-sky-500" /> AC and furnace repair
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-sky-500" /> New system installation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-sky-500" /> Seasonal maintenance
                </li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-md ring-1 ring-gray-200">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-sky-100">
                <ThermometerSun className="h-6 w-6 text-sky-600" />
              </div>
              <h3 className="mt-5 text-2xl font-bold text-navy-900">Commercial HVAC</h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                We work with commercial customers on heating and cooling needs for their buildings.
                Contact us to discuss your commercial HVAC requirements.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-sky-500" /> Commercial system repair
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-sky-500" /> Rooftop unit service
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-sky-500" /> Preventative maintenance
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Contact Us */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-900 sm:text-4xl">Why Call On The Mark Mechanical?</h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Wrench, title: 'Experienced Technicians', text: 'Our technicians diagnose and repair a wide range of HVAC systems and equipment.' },
              { icon: ShieldCheck, title: 'Upfront Pricing', text: 'You get clear, transparent pricing before any work begins. No hidden fees.' },
              { icon: Phone, title: 'Direct Communication', text: 'Call us directly and talk to a real person about your heating and cooling needs.' },
              { icon: Clock, title: 'Prompt Service', text: 'We schedule appointments efficiently and communicate timelines clearly.' },
              { icon: MapPin, title: 'Locally Based', text: 'We are based in Ann Arbor and serve the surrounding Michigan communities.' },
              { icon: CheckCircle2, title: 'Quality Workmanship', text: 'We take pride in doing the job right and testing our work before we leave.' },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-sky-50 ring-1 ring-sky-100">
                  <item.icon className="h-7 w-7 text-sky-600" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-navy-900">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="bg-navy-900 py-16 lg:py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl">How Our Service Process Works</h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-300">
              From your first call to the completed job, we keep the process simple and
              transparent.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <div key={step.title} className="relative">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-500">
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                <div className="absolute top-8 left-16 right-0 hidden lg:block">
                  <div className="h-0.5 bg-navy-700"></div>
                </div>
                <div className="mt-4">
                  <div className="text-sm font-bold text-sky-400">Step {i + 1}</div>
                  <h3 className="mt-1 text-lg font-bold">{step.title}</h3>
                  <p className="mt-2 text-sm text-gray-300 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <ReviewsSection
        id="reviews"
        title="Real Google Customer Reviews"
        subtitle="Genuine reviews from Ann Arbor homeowners and businesses who trust On The Mark Mechanical."
        initialLimit={6}
        showFilters={true}
      />

      {/* Service Locations */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-900 sm:text-4xl">Communities We Serve</h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-600">
              Based in Ann Arbor, we provide HVAC services to surrounding communities in Washtenaw
              and Wayne counties.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {locations.map((location) => (
              <Link
                key={location.slug}
                to={serviceLocationUrl('air-conditioning-repair', location.slug)}
                className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-medium text-navy-900 ring-1 ring-gray-200 transition-all hover:bg-sky-50 hover:ring-sky-300 hover:text-sky-600"
              >
                <MapPin className="h-4 w-4 text-sky-500" />
                {location.city}, {location.stateAbbr}
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/service-areas"
              className="inline-flex items-center gap-2 text-lg font-semibold text-sky-600 hover:text-sky-700"
            >
              View All Service Areas
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-900 sm:text-4xl">Frequently Asked Questions</h2>
            <p className="mt-4 text-gray-600">Common questions about our HVAC services.</p>
          </div>
          <FAQAccordion faqs={homeFaqs} />
          <div className="text-center mt-8">
            <Link
              to="/faq"
              className="inline-flex items-center gap-2 text-lg font-semibold text-sky-600 hover:text-sky-700"
            >
              View All FAQs
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
