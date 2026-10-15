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
} from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import ServiceCard from '@/components/ServiceCard';
import CTASection from '@/components/CTASection';
import FAQAccordion from '@/components/FAQAccordion';
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
        title="On The Mark Mechanical | HVAC Services in Ann Arbor, MI"
        description="Heating & cooling services in Ann Arbor, Michigan. Contact On The Mark Mechanical for air conditioning repair, furnace repair, HVAC installation, and more. Call 734-222-0918."
        canonicalPath="/"
        ogImage={heroImage}
        jsonLd={[localBusinessJsonLd(), faqJsonLd(homeFaqs)]}
      />
      <Breadcrumbs crumbs={[{ name: 'Home', path: '/' }]} />

      {/* Hero */}
      <section className="relative bg-navy-900 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="HVAC technician repairing an air conditioning unit" className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900/90 to-navy-800/60" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/20 px-4 py-1.5 text-sm font-medium text-sky-300 ring-1 ring-sky-500/30 mb-6">
              <MapPin className="h-4 w-4" />
              Ann Arbor, Michigan
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Heating &amp; Cooling Services in Ann Arbor, Michigan
            </h1>
            <p className="mt-6 text-lg text-gray-200 leading-relaxed">
              Contact On The Mark Mechanical to discuss your heating, cooling, and HVAC service
              needs.
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
                to="/services"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-7 py-4 text-lg font-semibold text-white ring-1 ring-white/30 backdrop-blur transition-all hover:bg-white/20"
              >
                Explore Our Services
                <ArrowRight className="h-5 w-5" />
              </Link>
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
              <h2 className="text-3xl font-bold text-navy-900 sm:text-4xl">
                Your Local HVAC Contractor in Ann Arbor
              </h2>
              <p className="mt-6 text-gray-600 leading-relaxed">
                On The Mark Mechanical is an HVAC contractor based in Ann Arbor, Michigan. We
                provide heating and cooling services to homes and businesses throughout the
                surrounding area.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                From air conditioning repair to furnace installation, our technicians work to
                deliver reliable service and straightforward communication. When you call us, you
                get a real conversation about your needs and honest recommendations for your
                system.
              </p>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Air conditioning repair and installation',
                  'Furnace repair and installation',
                  'Heat pump services',
                  'HVAC maintenance and tune-ups',
                  'Thermostat installation and repair',
                  'Indoor air quality solutions',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-sky-500" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={aboutImage}
                alt="HVAC technician inspecting an outdoor unit during maintenance"
                className="h-full w-full object-cover"
                loading="lazy"
              />
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

      {/* Service Locations */}
      <section className="bg-gray-50 py-16 lg:py-24">
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
      <section className="bg-white py-16 lg:py-24">
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
