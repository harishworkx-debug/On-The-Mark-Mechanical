import { Phone } from 'lucide-react';
import { business } from '@/data/business';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
}

export default function CTASection({
  title = 'Ready to Schedule Service?',
  subtitle = 'Call On The Mark Mechanical today to discuss your heating and cooling needs.',
}: CTASectionProps) {
  return (
    <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-sky-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
          <p className="mt-4 max-w-2xl text-lg text-gray-200">{subtitle}</p>
          <a
            href={business.phoneLink}
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-sky-500 px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:bg-sky-400 hover:shadow-xl hover:scale-105"
          >
            <Phone className="h-6 w-6" />
            Call {business.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
