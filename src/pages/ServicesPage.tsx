import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Wrench,
  Flame,
  Wind,
  Snowflake,
  Building,
  RefreshCw,
  Gauge,
  ShieldCheck,
  HelpCircle,
  Sliders,
  DollarSign,
  FileText,
} from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';
import { business } from '@/data/business';
import { services } from '@/data/services';
import { localBusinessJsonLd } from '@/lib/jsonLd';

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'residential' | 'commercial' | 'maintenance'>('all');

  return (
    <>
      <SEO
        title="HVAC Services in Ann Arbor, MI | On The Mark Mechanical"
        description="Comprehensive heating, cooling, heat pump, commercial HVAC, and refrigeration services in Ann Arbor, MI. Upfront transparent estimates, expert diagnostics, and no sales pressure. Call (734) 294-5501."
        canonicalPath="/services"
        jsonLd={[localBusinessJsonLd()]}
      />
      <Breadcrumbs crumbs={[{ name: 'Services', path: '/services' }]} />

      {/* Page Header */}
      <section className="bg-navy-900 text-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/20 px-4 py-1.5 text-xs font-semibold text-sky-300 ring-1 ring-sky-500/30 mb-4">
            Ann Arbor HQ · 3526 W Liberty Rd · Licensed &amp; Insured
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Heating, Cooling &amp; Commercial HVAC Services
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-200 leading-relaxed">
            From precision diagnostic troubleshooting on older units to full high-efficiency heat pump
            and rooftop replacements, On The Mark Mechanical delivers honest assessments, upfront written pricing,
            and reliable craftsmanship across Ann Arbor and Washtenaw County.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={business.phoneLink}
              className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-7 py-3.5 text-base font-bold text-white shadow-lg transition-all hover:bg-sky-400 hover:scale-105"
            >
              <Phone className="h-5 w-5" />
              Call {business.phoneDisplay}
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-7 py-3.5 text-base font-semibold text-white ring-1 ring-white/30 backdrop-blur transition-all hover:bg-white/20"
            >
              Request a Service Quote
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Category Navigation Bar */}
      <section className="sticky top-0 z-20 bg-white border-b border-gray-200 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-3 gap-2 no-scrollbar">
            {[
              { id: 'all', label: 'All Services' },
              { id: 'residential', label: 'Residential Heating & Cooling' },
              { id: 'commercial', label: 'Commercial HVAC & Refrigeration' },
              { id: 'maintenance', label: 'Maintenance & Air Quality' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as typeof activeCategory)}
                className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  activeCategory === tab.id
                    ? 'bg-sky-500 text-white shadow-sm'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-navy-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Core Answers Guide (Visitor FAQs on Repairs, Inspections, & Estimates) */}
      <section className="bg-sky-50/60 py-12 border-b border-sky-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900">
              How Our Service &amp; Diagnostic Process Works
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-600">
              Clear answers to the most common questions before our licensed technician arrives at your door.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-100 text-sky-600 mb-4">
                <AlertCircle className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-navy-900 text-base">What Problems We Repair</h3>
              <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                From ACs blowing lukewarm air and frozen evaporator coils to furnaces with ignition lockout, cracked heat exchangers, or noisy blower bearings—we diagnose root causes rather than guessing.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-100 text-sky-600 mb-4">
                <Gauge className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-navy-900 text-base">What Technicians Inspect</h3>
              <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                We test electrical amp draw on motors/compressors, measure static duct pressure, check refrigerant subcooling/superheat, and conduct combustion carbon monoxide safety analysis on furnaces.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-100 text-sky-600 mb-4">
                <DollarSign className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-navy-900 text-base">Repair vs. Replace Guide</h3>
              <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                We use the standard <strong>$5,000 Rule</strong> (Equipment Age × Repair Cost). If greater than $5,000, replacement offers better long-term ROI. We always give you both options clearly with zero pressure.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-100 text-sky-600 mb-4">
                <FileText className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-navy-900 text-base">Transparent Estimates</h3>
              <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                You receive an upfront flat-rate written quote before any wrench is turned. No surprise travel fees, no hidden part markups, and no aggressive sales quotas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Residential Heating & Cooling */}
      {(activeCategory === 'all' || activeCategory === 'residential') && (
        <section className="bg-white py-16 lg:py-20 border-b border-gray-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500 text-white">
                <Wind className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-navy-900">Residential Heating &amp; Cooling</h2>
                <p className="text-sm text-gray-500">Tailored comfort systems for Ann Arbor, historic homes, and Washtenaw County subdivisions.</p>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* AC Repair & Installation Block */}
              <div className="rounded-2xl bg-gray-50 p-6 sm:p-8 ring-1 ring-gray-200">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-100 text-sky-600">
                      <Snowflake className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-navy-900">Air Conditioning Repair &amp; Installation</h3>
                      <span className="text-xs font-semibold text-sky-600 uppercase tracking-wider">Cooling Solutions</span>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                  During hot and humid Michigan summers, cooling breakdowns demand fast, accurate troubleshooting. We service all major central AC brands (Carrier, Trane, Lennox, Rheem, Goodman) and provide high-efficiency replacements when older units reach end of life.
                </p>

                <div className="mt-5 space-y-3">
                  <div className="text-xs font-bold text-navy-900 uppercase tracking-wider">Common Diagnoses Handled:</div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700">
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-sky-500 flex-shrink-0" /> Failed dual run capacitors &amp; contactors
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-sky-500 flex-shrink-0" /> Refrigerant leak detection &amp; recharge
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-sky-500 flex-shrink-0" /> Frozen evaporator coils &amp; airflow blockages
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-sky-500 flex-shrink-0" /> Seized condenser fan motors
                    </li>
                  </ul>
                </div>

                <div className="mt-6 pt-5 border-t border-gray-200 flex flex-wrap items-center gap-3">
                  <Link
                    to="/air-conditioning-repair-ann-arbor-mi"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-sky-600 hover:text-sky-700 underline underline-offset-4"
                  >
                    AC Repair in Ann Arbor
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <span className="text-gray-300">·</span>
                  <Link
                    to="/air-conditioning-installation-ann-arbor-mi"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-sky-600 hover:text-sky-700 underline underline-offset-4"
                  >
                    AC Installation in Ann Arbor
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              {/* Furnace Repair & Installation Block */}
              <div className="rounded-2xl bg-gray-50 p-6 sm:p-8 ring-1 ring-gray-200">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 text-amber-600">
                      <Flame className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-navy-900">Furnace Repair &amp; Replacement</h3>
                      <span className="text-xs font-semibold text-amber-600 uppercase tracking-wider">Heating Systems</span>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                  Sub-zero Michigan winters make heating reliability critical. Our technicians respond promptly to no-heat emergencies, diagnose ignition or gas valve failures, and replace aged, unsafe furnaces with high-efficiency 96%+ AFUE condensing units.
                </p>

                <div className="mt-5 space-y-3">
                  <div className="text-xs font-bold text-navy-900 uppercase tracking-wider">Common Diagnoses Handled:</div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700">
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-amber-500 flex-shrink-0" /> Dirty flame sensor &amp; ignition lockouts
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-amber-500 flex-shrink-0" /> Cracked heat exchanger CO safety testing
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-amber-500 flex-shrink-0" /> Draft inducer blower motor replacement
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-amber-500 flex-shrink-0" /> High-limit switch &amp; safety circuit trips
                    </li>
                  </ul>
                </div>

                <div className="mt-6 pt-5 border-t border-gray-200 flex flex-wrap items-center gap-3">
                  <Link
                    to="/furnace-repair-ann-arbor-mi"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-sky-600 hover:text-sky-700 underline underline-offset-4"
                  >
                    Furnace Repair in Ann Arbor
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <span className="text-gray-300">·</span>
                  <Link
                    to="/furnace-installation-ann-arbor-mi"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-sky-600 hover:text-sky-700 underline underline-offset-4"
                  >
                    Furnace Installation in Ann Arbor
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              {/* Heat Pumps & Ductless Mini-Splits */}
              <div className="rounded-2xl bg-gray-50 p-6 sm:p-8 ring-1 ring-gray-200">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
                    <RefreshCw className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy-900">Heat Pumps &amp; Dual-Fuel Systems</h3>
                    <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">All-Electric &amp; Hybrid Comfort</span>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                  Modern cold-climate inverter heat pumps efficiently heat homes even at -15°F outside temperatures. Pair with your existing gas furnace for a dual-fuel hybrid system to maximize energy savings and qualify for DTE and federal IRA rebates.
                </p>
                <div className="mt-6 pt-5 border-t border-gray-200">
                  <Link
                    to="/heat-pump-services-ann-arbor-mi"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-sky-600 hover:text-sky-700 underline underline-offset-4"
                  >
                    Heat Pump Services in Ann Arbor
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              {/* Ductless Mini-Splits */}
              <div className="rounded-2xl bg-gray-50 p-6 sm:p-8 ring-1 ring-gray-200">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
                    <Sliders className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy-900">Ductless Mini-Split Services</h3>
                    <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">Room-By-Room Zoning</span>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                  Ideal for Ann Arbor historic homes without existing ductwork, home additions, sunrooms, or garage workshops. Multi-zone mini-splits deliver customized comfort control with whisper-quiet operation and outstanding SEER2 efficiency.
                </p>
                <div className="mt-6 pt-5 border-t border-gray-200">
                  <Link
                    to="/ductless-mini-split-services-ann-arbor-mi"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-sky-600 hover:text-sky-700 underline underline-offset-4"
                  >
                    Ductless Mini-Splits in Ann Arbor
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Section 2: Commercial HVAC & Refrigeration */}
      {(activeCategory === 'all' || activeCategory === 'commercial') && (
        <section className="bg-gray-50 py-16 lg:py-20 border-b border-gray-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-800 text-white">
                <Building className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-navy-900">Commercial HVAC &amp; Refrigeration</h2>
                <p className="text-sm text-gray-500">Commercial facilities, retail spaces, restaurants, and venue mechanical operations.</p>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* Commercial HVAC & RTUs */}
              <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-sm ring-1 ring-gray-200">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-100 text-sky-600">
                    <Building className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy-900">Commercial Rooftop Units (RTUs) &amp; Splits</h3>
                    <span className="text-xs font-semibold text-sky-600 uppercase tracking-wider">Facility Climate Management</span>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                  We service, repair, and maintain commercial rooftop packaged units, economizers, make-up air units, and commercial split systems. Our technicians work around your business hours to minimize customer disruption and keep tenants comfortable.
                </p>

                <div className="mt-5 space-y-2 text-xs text-gray-700">
                  <div className="font-bold text-navy-900">Commercial Capabilities:</div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-sky-500" /> Economizer damper calibration and sensor troubleshooting
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-sky-500" /> Belt and pulley drive alignments, blower balancing
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-sky-500" /> Preventative quarterly HVAC maintenance contracts
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-gray-100">
                  <Link
                    to="/commercial-hvac-ann-arbor-mi"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-sky-600 hover:text-sky-700 underline underline-offset-4"
                  >
                    Commercial HVAC Services in Ann Arbor
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              {/* Commercial Refrigeration */}
              <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-sm ring-1 ring-gray-200">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-100 text-cyan-600">
                    <Snowflake className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy-900">Commercial Refrigeration</h3>
                    <span className="text-xs font-semibold text-cyan-600 uppercase tracking-wider">Cold Storage &amp; Food Service</span>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                  Equipment failure in cold storage means immediate inventory risk. We provide fast diagnostic response for walk-in coolers, walk-in freezers, reach-in display cases, and ice machines for restaurants, venues, and research facilities.
                </p>

                <div className="mt-5 space-y-2 text-xs text-gray-700">
                  <div className="font-bold text-navy-900">Refrigeration Scope:</div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-cyan-500" /> Defrost clock, termination thermostat &amp; heater repairs
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-cyan-500" /> TXV valve adjustment, refrigerant recovery &amp; recharge
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-cyan-500" /> Temperature monitoring and condenser coil sanitization
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-gray-100">
                  <Link
                    to="/commercial-refrigeration-ann-arbor-mi"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-sky-600 hover:text-sky-700 underline underline-offset-4"
                  >
                    Commercial Refrigeration in Ann Arbor
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Section 3: Maintenance & Indoor Air Quality */}
      {(activeCategory === 'all' || activeCategory === 'maintenance') && (
        <section className="bg-white py-16 lg:py-20 border-b border-gray-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500 text-white">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-navy-900">Preventative Maintenance &amp; Air Quality</h2>
                <p className="text-sm text-gray-500">Extend equipment life, lower utility bills, and breathe healthier indoor air.</p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* HVAC Maintenance */}
              <div className="rounded-xl bg-gray-50 p-6 ring-1 ring-gray-200">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-100 text-teal-600 mb-3">
                  <Wrench className="h-4 w-4" />
                </div>
                <h3 className="font-bold text-navy-900 text-lg">Seasonal HVAC Maintenance</h3>
                <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Biannual precision tune-ups: Spring AC inspection (clean coils, test capacitors, clear drain lines) and Fall Furnace inspection (combustion safety, flame sensors, limit tests).
                </p>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <Link
                    to="/hvac-maintenance-ann-arbor-mi"
                    className="text-xs sm:text-sm font-bold text-sky-600 hover:text-sky-700 inline-flex items-center gap-1"
                  >
                    Maintenance Details <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>

              {/* Indoor Air Quality */}
              <div className="rounded-xl bg-gray-50 p-6 ring-1 ring-gray-200">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-100 text-sky-600 mb-3">
                  <Wind className="h-4 w-4" />
                </div>
                <h3 className="font-bold text-navy-900 text-lg">Indoor Air Quality &amp; Filtration</h3>
                <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Whole-home humidifiers to protect wood floors from dry winter air, high-capacity dehumidifiers for damp basements, media air cleaners (MERV 11-16), and UV germicidal air purifiers.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <Link
                    to="/indoor-air-quality-ann-arbor-mi"
                    className="text-xs sm:text-sm font-bold text-sky-600 hover:text-sky-700 inline-flex items-center gap-1"
                  >
                    Air Quality Solutions <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>

              {/* Thermostats */}
              <div className="rounded-xl bg-gray-50 p-6 ring-1 ring-gray-200">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-100 text-purple-600 mb-3">
                  <Sliders className="h-4 w-4" />
                </div>
                <h3 className="font-bold text-navy-900 text-lg">Smart Thermostats &amp; Controls</h3>
                <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Professional wiring, installation, and Wi-Fi configuration for Ecobee, Google Nest, and Honeywell Home smart thermostats. Proper C-wire power supply and multi-stage staging.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <Link
                    to="/thermostat-services-ann-arbor-mi"
                    className="text-xs sm:text-sm font-bold text-sky-600 hover:text-sky-700 inline-flex items-center gap-1"
                  >
                    Thermostat Upgrades <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Repair vs. Replace In-Depth Guide */}
      <section className="bg-gray-50 py-16 lg:py-20 border-b border-gray-200">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-navy-100 px-3.5 py-1 text-xs font-bold text-navy-800 mb-3">
              Consumer HVAC Guide
            </span>
            <h2 className="text-3xl font-bold text-navy-900">Should You Repair or Replace Your HVAC Unit?</h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              At On The Mark Mechanical, our field technicians provide honest, data-backed recommendations. We never push a replacement when a simple repair makes financial sense.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-emerald-200 border-t-4 border-emerald-500">
              <h3 className="text-xl font-bold text-navy-900 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-500" /> When Repair Makes Sense
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span><strong>System age is under 10 years:</strong> Most equipment is designed for a 15-year operational lifespan; components like contactors, capacitors, or motors are standard repairs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Repair cost is modest:</strong> If the repair is less than one-third of replacement cost and the unit has a clean repair history.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Modern refrigerant:</strong> System uses R-410A rather than obsolete, costly R-22 freon.</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-amber-200 border-t-4 border-amber-500">
              <h3 className="text-xl font-bold text-navy-900 flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-amber-500" /> When Replacement Is Smarter
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Fails the $5,000 Rule:</strong> (Age of System in Years) × (Estimated Repair Cost in $) exceeds $5,000.</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Major safety hazard:</strong> A cracked furnace heat exchanger releasing carbon monoxide cannot be patched—replacement is mandatory by code.</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span><strong>High energy bills &amp; rebates:</strong> Upgrading from an old 10 SEER AC or 70% furnace to modern equipment saves 20–40% on DTE utility bills, plus rebates.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Community Service Areas Quick Links */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-lg font-bold text-navy-900 mb-2">We Provide These Services Across Washtenaw &amp; Wayne Counties</h3>
          <p className="text-xs sm:text-sm text-gray-500 mb-6">Dispatched daily from our shop at 3526 W Liberty Rd, Ann Arbor.</p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {[
              { name: 'Ann Arbor', link: '/air-conditioning-repair-ann-arbor-mi' },
              { name: 'Dexter', link: '/air-conditioning-repair-dexter-mi' },
              { name: 'Saline', link: '/air-conditioning-repair-saline-mi' },
              { name: 'Chelsea', link: '/air-conditioning-repair-chelsea-mi' },
              { name: 'Ypsilanti', link: '/air-conditioning-repair-ypsilanti-mi' },
              { name: 'Canton', link: '/air-conditioning-repair-canton-mi' },
              { name: 'Plymouth', link: '/air-conditioning-repair-plymouth-mi' },
              { name: 'Belleville', link: '/air-conditioning-repair-belleville-mi' },
            ].map((item) => (
              <Link
                key={item.name}
                to={item.link}
                className="rounded-lg bg-gray-100 px-3.5 py-1.5 text-xs font-semibold text-gray-700 hover:bg-sky-500 hover:text-white transition-colors"
              >
                {item.name} HVAC
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Have Questions or Need an Upfront Estimate?"
        subtitle="Call (734) 294-5501 to speak with our service team directly. We are happy to explain your options."
      />
    </>
  );
}
