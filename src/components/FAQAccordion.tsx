import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight } from 'lucide-react';
import type { FAQItem } from '@/data/faqs';

interface FAQAccordionProps {
  faqs: FAQItem[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="rounded-xl bg-white ring-1 ring-gray-200 overflow-hidden shadow-sm transition-all"
        >
          <button
            className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="font-semibold text-navy-900 text-sm sm:text-base">{faq.question}</span>
            <ChevronDown
              className={`h-5 w-5 flex-shrink-0 text-sky-500 transition-transform duration-200 ${
                open === i ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`grid transition-all duration-200 ${
              open === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
            }`}
          >
            <div className="overflow-hidden">
              <div className="px-5 pb-5 pt-1 text-sm text-gray-600 leading-relaxed">
                <p>{faq.answer}</p>
                {faq.linkPath && faq.linkText && (
                  <div className="mt-3.5 pt-3 border-t border-gray-100">
                    <Link
                      to={faq.linkPath}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-sky-600 hover:text-sky-700 underline underline-offset-4"
                    >
                      <span>{faq.linkText}</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
