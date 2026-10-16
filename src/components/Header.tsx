import { Link, NavLink } from 'react-router-dom';
import { Phone, Menu, X, Wrench, ChevronDown, MapPin } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { business } from '@/data/business';
import { services } from '@/data/services';
import { locations } from '@/data/locations';
import { serviceLocationUrl } from '@/lib/routes';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [areasDropdown, setAreasDropdown] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const areasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesDropdown(false);
      }
      if (areasRef.current && !areasRef.current.contains(e.target as Node)) {
        setAreasDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-navy-900 text-white shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-3" onClick={() => setMobileOpen(false)}>
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-sky-500">
              <Wrench className="h-6 w-6 text-white" />
            </div>
            <div className="leading-tight">
              <div className="text-lg font-bold tracking-tight">On The Mark</div>
              <div className="text-xs text-sky-300">Mechanical HVAC</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive ? 'bg-sky-500 text-white' : 'text-gray-200 hover:bg-navy-800 hover:text-white'
                }`
              }
              end
            >
              Home
            </NavLink>

            {/* Services Dropdown */}
            <div ref={servicesRef} className="relative">
              <button
                className="flex items-center gap-1 px-4 py-2 rounded-md text-sm font-medium text-gray-200 hover:bg-navy-800 hover:text-white transition-colors"
                onClick={() => { setServicesDropdown(!servicesDropdown); setAreasDropdown(false); }}
                onMouseEnter={() => { setServicesDropdown(true); setAreasDropdown(false); }}
              >
                Services
                <ChevronDown className={`h-4 w-4 transition-transform ${servicesDropdown ? 'rotate-180' : ''}`} />
              </button>
              {servicesDropdown && (
                <div
                  className="absolute left-0 top-full mt-1 w-64 rounded-lg bg-white py-2 shadow-2xl ring-1 ring-gray-200 max-h-[70vh] overflow-y-auto"
                  onMouseLeave={() => setServicesDropdown(false)}
                >
                  <Link
                    to="/services"
                    className="block px-4 py-2 text-sm font-bold text-navy-900 hover:bg-sky-50 border-b border-gray-100 mb-1"
                    onClick={() => setServicesDropdown(false)}
                  >
                    View All Services
                  </Link>
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      to={serviceLocationUrl(service.slug, business.primaryLocationSlug)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-sky-50 hover:text-sky-600 transition-colors"
                      onClick={() => setServicesDropdown(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Service Areas Dropdown */}
            <div ref={areasRef} className="relative">
              <button
                className="flex items-center gap-1 px-4 py-2 rounded-md text-sm font-medium text-gray-200 hover:bg-navy-800 hover:text-white transition-colors"
                onClick={() => { setAreasDropdown(!areasDropdown); setServicesDropdown(false); }}
                onMouseEnter={() => { setAreasDropdown(true); setServicesDropdown(false); }}
              >
                Service Areas
                <ChevronDown className={`h-4 w-4 transition-transform ${areasDropdown ? 'rotate-180' : ''}`} />
              </button>
              {areasDropdown && (
                <div
                  className="absolute left-0 top-full mt-1 w-56 rounded-lg bg-white py-2 shadow-2xl ring-1 ring-gray-200"
                  onMouseLeave={() => setAreasDropdown(false)}
                >
                  <Link
                    to="/service-areas"
                    className="block px-4 py-2 text-sm font-bold text-navy-900 hover:bg-sky-50 border-b border-gray-100 mb-1"
                    onClick={() => setAreasDropdown(false)}
                  >
                    View All Service Areas
                  </Link>
                  {locations.map((loc) => (
                    <Link
                      key={loc.slug}
                      to={serviceLocationUrl('air-conditioning-repair', loc.slug)}
                      className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-sky-50 hover:text-sky-600 transition-colors"
                      onClick={() => setAreasDropdown(false)}
                    >
                      <MapPin className="h-3.5 w-3.5 text-sky-500 flex-shrink-0" />
                      {loc.city}, {loc.stateAbbr}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive ? 'bg-sky-500 text-white' : 'text-gray-200 hover:bg-navy-800 hover:text-white'
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/reviews"
              className={({ isActive }) =>
                `px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive ? 'bg-sky-500 text-white' : 'text-gray-200 hover:bg-navy-800 hover:text-white'
                }`
              }
            >
              Reviews
            </NavLink>
            <NavLink
              to="/resources"
              className={({ isActive }) =>
                `px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive ? 'bg-sky-500 text-white' : 'text-gray-200 hover:bg-navy-800 hover:text-white'
                }`
              }
            >
              Guides
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive ? 'bg-sky-500 text-white' : 'text-gray-200 hover:bg-navy-800 hover:text-white'
                }`
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="/faq"
              className={({ isActive }) =>
                `px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive ? 'bg-sky-500 text-white' : 'text-gray-200 hover:bg-navy-800 hover:text-white'
                }`
              }
            >
              FAQ
            </NavLink>
          </nav>

          <div className="hidden lg:flex items-center">
            <a
              href={business.phoneLink}
              className="flex items-center gap-2 rounded-lg bg-sky-500 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-sky-400"
            >
              <Phone className="h-4 w-4" />
              {business.phoneDisplay}
            </a>
          </div>

          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-navy-800 bg-navy-900 max-h-[80vh] overflow-y-auto">
          <nav className="mx-auto max-w-7xl px-4 py-4 space-y-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block px-4 py-3 rounded-md text-base font-medium transition-colors ${
                  isActive ? 'bg-sky-500 text-white' : 'text-gray-200 hover:bg-navy-800 hover:text-white'
                }`
              }
              end
              onClick={() => setMobileOpen(false)}
            >
              Home
            </NavLink>

            {/* Mobile Services */}
            <div>
              <div className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-sky-300">Services</div>
              <Link
                to="/services"
                className="block px-4 py-2.5 text-sm font-semibold text-white hover:bg-navy-800 rounded-md"
                onClick={() => setMobileOpen(false)}
              >
                View All Services
              </Link>
              {services.map((service) => (
                <Link
                  key={service.slug}
                  to={serviceLocationUrl(service.slug, business.primaryLocationSlug)}
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-navy-800 hover:text-white rounded-md"
                  onClick={() => setMobileOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
            </div>

            {/* Mobile Service Areas */}
            <div className="pt-2">
              <div className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-sky-300">Service Areas</div>
              <Link
                to="/service-areas"
                className="block px-4 py-2.5 text-sm font-semibold text-white hover:bg-navy-800 rounded-md"
                onClick={() => setMobileOpen(false)}
              >
                View All Service Areas
              </Link>
              {locations.map((loc) => (
                <Link
                  key={loc.slug}
                  to={serviceLocationUrl('air-conditioning-repair', loc.slug)}
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-navy-800 hover:text-white rounded-md"
                  onClick={() => setMobileOpen(false)}
                >
                  {loc.city}, {loc.stateAbbr}
                </Link>
              ))}
            </div>

            <div className="pt-2 border-t border-navy-800">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-md text-base font-medium transition-colors ${
                    isActive ? 'bg-sky-500 text-white' : 'text-gray-200 hover:bg-navy-800 hover:text-white'
                  }`
                }
                onClick={() => setMobileOpen(false)}
              >
                About
              </NavLink>
              <NavLink
                to="/reviews"
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-md text-base font-medium transition-colors ${
                    isActive ? 'bg-sky-500 text-white' : 'text-gray-200 hover:bg-navy-800 hover:text-white'
                  }`
                }
                onClick={() => setMobileOpen(false)}
              >
                Reviews
              </NavLink>
              <NavLink
                to="/resources"
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-md text-base font-medium transition-colors ${
                    isActive ? 'bg-sky-500 text-white' : 'text-gray-200 hover:bg-navy-800 hover:text-white'
                  }`
                }
                onClick={() => setMobileOpen(false)}
              >
                HVAC Guides &amp; Resources
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-md text-base font-medium transition-colors ${
                    isActive ? 'bg-sky-500 text-white' : 'text-gray-200 hover:bg-navy-800 hover:text-white'
                  }`
                }
                onClick={() => setMobileOpen(false)}
              >
                Contact
              </NavLink>
              <NavLink
                to="/faq"
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-md text-base font-medium transition-colors ${
                    isActive ? 'bg-sky-500 text-white' : 'text-gray-200 hover:bg-navy-800 hover:text-white'
                  }`
                }
                onClick={() => setMobileOpen(false)}
              >
                FAQ
              </NavLink>
            </div>

            <a
              href={business.phoneLink}
              className="flex items-center gap-2 rounded-lg bg-sky-500 px-4 py-3 text-base font-bold text-white mt-2"
            >
              <Phone className="h-5 w-5" />
              Call {business.phoneDisplay}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
