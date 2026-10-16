import { Link } from 'react-router-dom';
import {
  Phone,
  MapPin,
  Wrench,
  CheckCircle2,
  Star,
  ArrowRight,
  ShieldCheck,
  Award,
  Users,
  Clock,
  FileCheck,
  Building,
  HeartHandshake,
} from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';
import { GoogleIcon } from '@/components/ReviewsSection';
import { business } from '@/data/business';
import { localBusinessJsonLd } from '@/lib/jsonLd';

const aboutImage = 'https://images.pexels.com/photos/5463575/pexels-photo-5463575.jpeg?auto=compress&cs=tinysrgb&w=1200';
const teamWorkImage = 'https://images.pexels.com/photos/7347538/pexels-photo-7347538.jpeg?auto=compress&cs=tinysrgb&w=1200';
const diagnosticImage = 'https://images.pexels.com/photos/32497161/pexels-photo-32497161.jpeg?auto=compress&cs=tinysrgb&w=1200';

const teamMembers = [
  {
    name: 'Richard',
    role: 'Lead Service Specialist & Diagnostics',
    experience: '18+ Years Experience',
    bio: 'Richard handles in-depth service calls and mechanical diagnostics. Known for clear, patient explanations and a zero-pressure approach. Customers frequently praise his responsiveness by phone, text, and email, helping homeowners make well-informed decisions.',
    highlight: 'Commended by customers Laura Myers & Matt Crigger for honest options and no-pressure advice.',
  },
  {
    name: 'Rick',
    role: 'Installation Lead & Systems Specialist',
    experience: '20+ Years Experience',
    bio: 'Rick oversees new system replacements, duct transitions, and high-efficiency heat pump installs. Respected for exceptional speed and precision—frequently completing emergency next-day change-outs so families do not suffer in freezing or sweltering weather.',
    highlight: 'Praised by homeowners for flawless next-day AC replacements and immaculate cleanups.',
  },
  {
    name: 'Terry',
    role: 'Diagnostic Master Technician',
    experience: '15+ Years Experience',
    bio: 'Terry is our master troubleshooter for complex electrical controls, intermittent heating failures, and commercial mechanical systems. He specializes in accurately identifying root causes when other contractors could not pinpoint the problem.',
    highlight: 'Recognized by customers Zuzana Tomas & Mallory Matthews for restoring comfort swiftly.',
  },
];

const credentials = [
  {
    title: 'State of Michigan Mechanical Contractor License',
    description: 'Fully licensed under Michigan LARA regulations for heating, ventilation, air conditioning, and refrigeration systems.',
    icon: Award,
  },
  {
    title: 'EPA Section 608 Universal Certification',
    description: 'Certified for safe, legal recovery, recycling, and handling of all high- and low-pressure refrigerants (R-410A, R-22, R-32, R-454B).',
    icon: ShieldCheck,
  },
  {
    title: '$2M General Commercial Liability & Bonding',
    description: 'Comprehensive commercial insurance and bonding to protect homeowners, commercial tenants, and historic properties.',
    icon: FileCheck,
  },
  {
    title: 'Full Municipal Permitting Compliance',
    description: 'We pull required mechanical permits and schedule inspections in compliance with the City of Ann Arbor and Washtenaw County building codes.',
    icon: Building,
  },
];

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About On The Mark Mechanical | HVAC Contractor in Ann Arbor, MI"
        description="Learn about On The Mark Mechanical: 20+ years of trusted HVAC service in Ann Arbor, MI. Meet our technicians Richard, Rick & Terry. Licensed, EPA certified, upfront pricing."
        canonicalPath="/about"
        ogImage={aboutImage}
        jsonLd={[localBusinessJsonLd()]}
      />
      <Breadcrumbs crumbs={[{ name: 'About', path: '/about' }]} />

      {/* Page Header */}
      <section className="bg-navy-900 text-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/20 px-4 py-1.5 text-xs font-semibold text-sky-300 ring-1 ring-sky-500/30 mb-4">
            Ann Arbor HQ · 3526 W Liberty Rd, Suite 300
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            About On The Mark Mechanical
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-200 leading-relaxed">
            For more than two decades, On The Mark Mechanical has provided Ann Arbor and Washtenaw County
            homeowners and commercial businesses with honest, dependable heating, cooling, and mechanical craftsmanship.
          </p>
        </div>
      </section>

      {/* Company History & Roots */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-gray-900/10">
              <img
                src={aboutImage}
                alt="On The Mark Mechanical technician servicing an HVAC condenser unit"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-navy-900/90 backdrop-blur p-4 text-white text-xs">
                <div className="font-semibold text-sky-300">Over 20 Years Serving Ann Arbor</div>
                <div className="text-gray-300 mt-0.5">Built on repeat customers, long-term relationships, and word-of-mouth trust.</div>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3.5 py-1 text-xs font-semibold text-sky-700 ring-1 ring-sky-200 mb-4">
                <MapPin className="h-3.5 w-3.5" />
                Headquartered in Ann Arbor, MI
              </div>
              <h2 className="text-3xl font-bold text-navy-900 sm:text-4xl">
                A Local Company Built on Straightforward Integrity
              </h2>
              <p className="mt-6 text-gray-600 leading-relaxed">
                On The Mark Mechanical was founded on a simple principle: treat customers like neighbors, provide crystal-clear diagnostic explanations, and never recommend an expensive system replacement when an affordable, reliable repair solves the problem.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Operating out of our shop at <strong>3526 W Liberty Rd, Suite 300, Ann Arbor, MI 48103</strong>, our service territory spans Washtenaw and Western Wayne counties. We have had the privilege of working with generational clients—such as customer <em>HK Parrot</em>, who has trusted our team for 5 system installations across two decades of homeownership.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                When you call us at <strong>{business.phoneDisplay}</strong>, you don't get an impersonal out-of-state call center. You speak directly with our team, receive prompt communication, and get honest technical evaluations backed by decades of hands-on mechanical experience.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={business.phoneLink}
                  className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-6 py-3 text-sm font-bold text-white shadow hover:bg-sky-400 transition-all"
                >
                  <Phone className="h-4 w-4" />
                  Call {business.phoneDisplay}
                </a>
                <Link
                  to="/reviews"
                  className="inline-flex items-center gap-2 rounded-xl bg-gray-100 px-6 py-3 text-sm font-semibold text-navy-900 hover:bg-gray-200 transition-all"
                >
                  View 11 Verified Google Reviews
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Technicians Spotlight */}
      <section className="bg-gray-50 py-16 lg:py-24 border-y border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 rounded-full bg-navy-100 px-3.5 py-1 text-xs font-bold text-navy-800 mb-3">
              <Users className="h-3.5 w-3.5" />
              Our Field Team
            </div>
            <h2 className="text-3xl font-bold text-navy-900 sm:text-4xl">
              Meet the Technicians Who Care for Your Home
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our customers know our technicians by name. Here are the experienced specialists who diagnose, repair, and install your heating and cooling equipment.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-gray-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-navy-900">{member.name}</h3>
                      <p className="text-xs font-semibold text-sky-600 uppercase tracking-wider mt-0.5">
                        {member.role}
                      </p>
                    </div>
                    <span className="rounded-md bg-sky-50 px-2.5 py-1 text-xs font-bold text-sky-700 ring-1 ring-sky-200">
                      {member.experience}
                    </span>
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed mb-5">
                    {member.bio}
                  </p>
                </div>

                <div className="rounded-xl bg-gray-50 p-4 border-l-4 border-sky-500 text-xs text-gray-700 font-medium">
                  {member.highlight}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verifiable Licenses & Credentials */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3.5 py-1 text-xs font-bold text-emerald-800 mb-3">
              <ShieldCheck className="h-3.5 w-3.5" />
              Verifiable Credentials
            </div>
            <h2 className="text-3xl font-bold text-navy-900 sm:text-4xl">
              Licensed, Insured &amp; Code Compliant
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Your mechanical systems involve high-voltage electricity, pressurized refrigerants, and combustible natural gas. We operate with strict regulatory licensing, safety certifications, and code compliance.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {credentials.map((cred) => (
              <div key={cred.title} className="rounded-xl bg-gray-50 p-6 ring-1 ring-gray-200 flex flex-col justify-between">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-gray-200 text-sky-600 mb-4">
                    <cred.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-navy-900 text-base mb-2">{cred.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{cred.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work / No Sales Pressure */}
      <section className="bg-navy-900 text-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/20 px-3.5 py-1 text-xs font-semibold text-sky-300 ring-1 ring-sky-500/30 mb-4">
                <HeartHandshake className="h-4 w-4" />
                Our Service Commitment
              </div>
              <h2 className="text-3xl font-bold sm:text-4xl">
                The No-Pressure Service Promise
              </h2>
              <p className="mt-6 text-gray-300 leading-relaxed">
                Many HVAC companies operate on commission quotas, pushing customers toward multi-thousand-dollar replacements even when a minor component repair would keep the system running reliably.
              </p>
              <p className="mt-4 text-gray-300 leading-relaxed">
                At On The Mark Mechanical, we never do high-pressure sales. Our technicians quote repairs transparently. If a replacement is worth considering due to equipment age or safety hazards, we provide clear numbers and suggest you take your time to compare options.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  'Upfront flat-rate pricing before work begins',
                  'Honest breakdown of repair vs. replacement economics',
                  'Clean drop cloths, boot covers, and complete cleanup',
                  'Full post-service operational testing on every call',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-gray-200">
                    <CheckCircle2 className="h-5 w-5 text-sky-400 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-white/10">
              <img
                src={teamWorkImage}
                alt="On The Mark Mechanical technician testing heating system controls"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent flex items-end p-6">
                <div className="text-xs text-white">
                  <div className="font-bold text-sky-300">Precision Testing</div>
                  <div className="text-gray-300">Every system is tested under load before we conclude a service call.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Trust & Reviews Preview */}
      <section className="bg-gray-50 py-16 lg:py-20 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-gray-800 shadow-sm ring-1 ring-gray-200 mb-4">
            <GoogleIcon className="h-4 w-4" />
            <div className="flex items-center gap-0.5 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span>4.4 Rating Across 11 Google Reviews</span>
          </div>
          <h2 className="text-3xl font-bold text-navy-900 sm:text-4xl">
            Trusted by Homeowners Across Washtenaw County
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            Read firsthand accounts from Ann Arbor residents who have relied on our technicians Richard, Rick, and Terry for fast response and honest heating and cooling care.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              to="/reviews"
              className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-6 py-3 text-sm font-bold text-white shadow hover:bg-sky-400 transition-all"
            >
              Read Customer Reviews
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
