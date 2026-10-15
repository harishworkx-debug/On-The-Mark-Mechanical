import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
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
          className="rounded-lg bg-white ring-1 ring-gray-200 overflow-hidden"
        >
          <button
            className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="font-semibold text-navy-900">{faq.question}</span>
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
              <p className="px-5 pb-4 text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
