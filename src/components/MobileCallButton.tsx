import { PhoneCall } from 'lucide-react';
import { business } from '@/data/business';

export default function MobileCallButton() {
  return (
    <aside
      aria-label="Quick Call"
      className="fixed bottom-6 left-6 z-50 md:hidden"
    >
      <a
        href={business.phoneLink}
        aria-label={`Direct call to ${business.name} at ${business.phoneDisplay}`}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-emerald-600 to-green-500 text-white shadow-2xl ring-4 ring-white/90 transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-300"
      >
        {/* Pulsing radar effect */}
        <span
          className="absolute -inset-1 rounded-full bg-emerald-400 opacity-50 animate-ping -z-10"
          aria-hidden="true"
        />

        {/* Phone Call Icon with hover micro-rotation */}
        <PhoneCall className="h-6 w-6 stroke-[2.2] transition-transform duration-300 group-hover:rotate-12" />

        {/* Active Online Indicator dot */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5" aria-hidden="true">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 ring-2 ring-white"></span>
        </span>
      </a>
    </aside>
  );
}
