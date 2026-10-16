import { useState } from 'react';
import {
  Phone,
  MapPin,
  Clock,
  ExternalLink,
  Send,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Calendar,
  Building,
} from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';
import { business } from '@/data/business';
import { localBusinessJsonLd } from '@/lib/jsonLd';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'air-conditioning-repair',
    propertyType: 'residential',
    urgency: 'flexible',
    city: 'Ann Arbor',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission handling
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <>
      <SEO
        title="Contact On The Mark Mechanical | Ann Arbor, MI HVAC"
        description="Contact On The Mark Mechanical at (734) 294-5501 or visit 3526 W Liberty Rd, Suite 300, Ann Arbor, MI. Verified hours, fast dispatch, and online quote requests."
        canonicalPath="/contact"
        jsonLd={[localBusinessJsonLd()]}
      />
      <Breadcrumbs crumbs={[{ name: 'Contact', path: '/contact' }]} />

      {/* Hero */}
      <section className="bg-navy-900 text-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/20 px-4 py-1.5 text-xs font-semibold text-sky-300 ring-1 ring-sky-500/30 mb-4">
            Official Shop: 3526 W Liberty Rd, Suite 300, Ann Arbor, MI
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Contact On The Mark Mechanical
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-200">
            Speak directly with our local HVAC team, request an upfront repair estimate, or schedule emergency service.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12">
            
            {/* Contact Info Column (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Direct Call Banner */}
              <div className="rounded-2xl bg-sky-600 p-8 text-white shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 text-white">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-sky-200">Need Immediate Help?</span>
                    <h2 className="text-xl font-bold">Fastest Response By Phone</h2>
                  </div>
                </div>
                <p className="text-sm text-sky-100 leading-relaxed mb-6">
                  For no-heat emergencies or urgent AC failures, call our shop directly. A technician is on call to evaluate your situation.
                </p>
                <a
                  href={business.phoneLink}
                  className="inline-flex items-center justify-center gap-2 w-full rounded-xl bg-white py-4 px-6 text-lg font-bold text-navy-900 shadow-md hover:bg-gray-100 transition-all hover:scale-[1.02]"
                >
                  <Phone className="h-5 w-5 text-sky-600" />
                  Call {business.phoneDisplay}
                </a>
              </div>

              {/* Verified NAP & Details */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200 space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-navy-900">Verified Business Information (NAP)</h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Accurate official location for On The Mark Mechanical in Ann Arbor, MI.
                  </p>
                </div>

                <div className="space-y-5 text-sm">
                  {/* Name */}
                  <div className="flex items-start gap-3.5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-50 text-sky-600 flex-shrink-0">
                      <Building className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Company Name</div>
                      <div className="font-bold text-navy-900 text-base">{business.name}</div>
                      <div className="text-xs text-gray-500">Heating, Cooling &amp; Commercial Refrigeration</div>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-3.5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-50 text-sky-600 flex-shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Physical Address</div>
                      <div className="font-semibold text-navy-900">
                        {business.address.street}<br />
                        {business.address.city}, {business.address.state} {business.address.zip}
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        Conveniently located off W Liberty Rd near I-94 in Scio/Ann Arbor.
                      </p>
                      <a
                        href={business.mapsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-sky-600 hover:text-sky-700"
                      >
                        View &amp; Get Directions on Google Maps
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-3.5 pt-2 border-t border-gray-100">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-50 text-sky-600 flex-shrink-0">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Verified Business Hours</div>
                      <div className="mt-1 space-y-1 text-xs sm:text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Monday – Friday:</span>
                          <span className="font-semibold text-navy-900">8:00 AM – 6:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Saturday:</span>
                          <span className="font-semibold text-navy-900">8:00 AM – 2:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Sunday:</span>
                          <span className="font-semibold text-navy-900">Emergency Dispatch</span>
                        </div>
                        <div className="pt-2 text-xs font-medium text-emerald-700 flex items-center gap-1.5">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                          <span>24/7 Emergency Service on Call for Severe Outages</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Note on legacy directory citations */}
                  <div className="rounded-lg bg-gray-50 p-3 text-xs text-gray-600 ring-1 ring-gray-200">
                    <strong className="text-navy-900">Directory Note:</strong> If you find an older web directory referencing 45 Enterprise Dr, please note our current verified headquarters is at <strong>3526 W Liberty Rd, Suite 300, Ann Arbor, MI 48103</strong>.
                  </div>
                </div>
              </div>

            </div>

            {/* Interactive Service Request & Quote Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
                <div className="border-b border-gray-200 pb-5 mb-6">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-50 px-3 py-1 text-xs font-bold text-sky-700 ring-1 ring-sky-200 mb-2">
                    <Calendar className="h-3.5 w-3.5" />
                    Online Service Request
                  </span>
                  <h2 className="text-2xl font-bold text-navy-900">Request a Service Call or Quote</h2>
                  <p className="mt-1 text-sm text-gray-600">
                    Fill out the form below. We will review your heating or cooling issue and contact you promptly.
                  </p>
                </div>

                {submitted ? (
                  <div className="rounded-xl bg-emerald-50 p-8 text-center ring-1 ring-emerald-200 my-6">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-4">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-emerald-900">Thank You, {formData.name || 'Valued Customer'}!</h3>
                    <p className="mt-2 text-sm text-emerald-800 leading-relaxed max-w-md mx-auto">
                      Your service request has been received. Our team will review your details and contact you at <strong>{formData.phone || 'your phone number'}</strong> to discuss appointment options.
                    </p>
                    <div className="mt-6 pt-6 border-t border-emerald-200/60 text-xs text-emerald-700">
                      Need emergency service right now?{' '}
                      <a href={business.phoneLink} className="font-bold underline text-emerald-900">
                        Call {business.phoneDisplay}
                      </a>
                    </div>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 text-xs font-semibold text-emerald-700 hover:text-emerald-900 underline"
                    >
                      Submit another request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. John Smith"
                          className="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm text-navy-900 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. (734) 555-0123"
                          className="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm text-navy-900 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                        />
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. john@example.com"
                          className="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm text-navy-900 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                          City / Community *
                        </label>
                        <select
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          className="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm text-navy-900 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 bg-white"
                        >
                          <option value="Ann Arbor">Ann Arbor, MI</option>
                          <option value="Scio Township">Scio Township, MI</option>
                          <option value="Pittsfield Township">Pittsfield Township, MI</option>
                          <option value="Dexter">Dexter, MI</option>
                          <option value="Saline">Saline, MI</option>
                          <option value="Chelsea">Chelsea, MI</option>
                          <option value="Ypsilanti">Ypsilanti, MI</option>
                          <option value="Canton">Canton, MI</option>
                          <option value="Plymouth">Plymouth, MI</option>
                          <option value="Belleville">Belleville, MI</option>
                          <option value="Other Washtenaw/Wayne">Other Nearby Area</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                          Service Needed *
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm text-navy-900 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 bg-white"
                        >
                          <option value="air-conditioning-repair">Air Conditioning Repair</option>
                          <option value="furnace-repair">Furnace / Heating Repair</option>
                          <option value="air-conditioning-installation">AC Replacement &amp; Install</option>
                          <option value="furnace-installation">Furnace Replacement &amp; Install</option>
                          <option value="heat-pump-services">Heat Pump / Dual Fuel System</option>
                          <option value="ductless-mini-splits">Ductless Mini-Split</option>
                          <option value="hvac-maintenance">Seasonal Tune-up / Maintenance</option>
                          <option value="commercial-hvac">Commercial HVAC &amp; RTU</option>
                          <option value="commercial-refrigeration">Commercial Refrigeration</option>
                          <option value="thermostats-air-quality">Thermostats &amp; Indoor Air Quality</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                          Urgency Level
                        </label>
                        <select
                          value={formData.urgency}
                          onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                          className="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm text-navy-900 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 bg-white"
                        >
                          <option value="emergency">Emergency (No heat / AC blowing hot)</option>
                          <option value="next-day">Within Next 24–48 Hours</option>
                          <option value="flexible">Flexible / Estimate Consultation</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                        Describe the Problem or Equipment Details
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please describe symptoms (e.g. strange noises, system freezing up, age of unit, error codes on thermostat)..."
                        className="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm text-navy-900 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-xl bg-sky-500 px-8 py-3.5 text-base font-bold text-white shadow hover:bg-sky-400 transition-all hover:scale-105 disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <span>Sending Request...</span>
                        ) : (
                          <>
                            <Send className="h-4 w-4" />
                            <span>Submit Service Request</span>
                          </>
                        )}
                      </button>
                      <span className="block sm:inline-block sm:ml-4 text-xs text-gray-500 mt-2 sm:mt-0">
                        We respect your privacy. No spam or high-pressure calls.
                      </span>
                    </div>
                  </form>
                )}
              </div>

              {/* Embedded Google Map */}
              <div className="mt-8 rounded-2xl overflow-hidden shadow-sm ring-1 ring-gray-200 h-[320px]">
                <iframe
                  title="On The Mark Mechanical Google Maps location at 3526 W Liberty Rd, Ann Arbor"
                  src={business.mapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
