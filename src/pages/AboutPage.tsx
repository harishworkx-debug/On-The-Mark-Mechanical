import { Phone, MapPin, Wrench, CheckCircle2 } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';
import { business } from '@/data/business';
import { localBusinessJsonLd } from '@/lib/jsonLd';

const aboutImage = 'https://images.pexels.com/photos/5463575/pexels-photo-5463575.jpeg?auto=compress&cs=tinysrgb&w=1200';
const teamImage = 'https://images.pexels.com/photos/7347538/pexels-photo-7347538.jpeg?auto=compress&cs=tinysrgb&w=1200';

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About On The Mark Mechanical | HVAC Contractor in Ann Arbor, MI"
        description="Learn about On The Mark Mechanical, an HVAC contractor based in Ann Arbor, Michigan, providing heating and cooling services to homes and businesses in the surrounding area."
        canonicalPath="/about"
        jsonLd={[localBusinessJsonLd()]}
      />
      <Breadcrumbs crumbs={[{ name: 'About', path: '/about' }]} />

      <section className="bg-navy-900 text-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">About On The Mark Mechanical</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-200">
            An HVAC contractor serving Ann Arbor, Michigan, and surrounding communities.
          </p>
        </div>
      </section>

      {/* Company Intro */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={aboutImage}
                alt="HVAC technician repairing an outdoor air conditioning unit"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-navy-900">Our Company</h2>
              <p className="mt-6 text-gray-600 leading-relaxed">
                On The Mark Mechanical is a heating, ventilation, and air conditioning contractor
                located in Ann Arbor, Michigan. We serve residential and commercial customers
                throughout Ann Arbor and the surrounding communities.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Our focus is on delivering reliable HVAC service with clear communication and
                honest recommendations. Whether you need a repair, a new installation, or routine
                maintenance, we take the time to understand your needs and explain your options.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                We are based at 3526 W Liberty Rd, Suite 300, Ann Arbor, MI 48103, and can be
                reached directly at {business.phoneDisplay}.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-900 sm:text-4xl">Our HVAC Specialties</h2>
            <p className="mt-4 text-gray-600">The heating and cooling services we provide.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Air Conditioning', text: 'AC repair, installation, and system replacement for residential and commercial properties.' },
              { title: 'Heating Systems', text: 'Furnace and heating system repair, installation, and maintenance for Michigan winters.' },
              { title: 'Heat Pumps', text: 'Heat pump repair, installation, and maintenance for efficient year-round comfort.' },
              { title: 'HVAC Maintenance', text: 'Preventative maintenance to extend equipment life and reduce breakdowns.' },
              { title: 'Thermostats', text: 'Thermostat installation, repair, and smart thermostat upgrades.' },
              { title: 'Indoor Air Quality', text: 'Air filtration, humidity control, and ventilation solutions for healthier indoor air.' },
            ].map((item) => (
              <div key={item.title} className="rounded-xl bg-white p-6 shadow-md ring-1 ring-gray-200">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-100">
                  <Wrench className="h-5 w-5 text-sky-600" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-navy-900">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Communication Approach */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy-900">How We Work With You</h2>
              <p className="mt-6 text-gray-600 leading-relaxed">
                We believe in straightforward communication. When you call, you talk to someone who
                listens to your concern and helps you figure out the next step. No pressure, no
                jargon.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  'Clear explanation of the problem and your options',
                  'Upfront pricing before any work begins',
                  'Honest recommendations for repair vs. replacement',
                  'Respect for your home and your time',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-sky-500" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={teamImage}
                alt="HVAC technician working on an air conditioning unit"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Let's Talk About Your HVAC Needs"
        subtitle="Call us today to schedule a service appointment or ask a question."
      />
    </>
  );
}
