'use client';

import { ReactNode, useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface FAQ {
  q: string;
  a: (string | ReactNode)[];
}

interface FAQSectionProps {
  title: string;
  faqs: FAQ[];
}

export function FAQSection({ title, faqs }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 last:mb-0">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={`faq-${index}`} className="border-b border-gray-200">
            <button
              type="button"
              className="flex justify-between items-center w-full py-4 cursor-pointer hover:text-accent text-left text-gray-900 focus:outline-none"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <span className="text-lg font-medium">{faq.q}</span>
              <ChevronDownIcon
                className={`w-5 h-5 transform transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            <div 
              id={`faq-answer-${index}`}
              className={`mt-2 mb-2 text-gray-700 transition-all ${
                openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              {faq.a.map((ans, i) => (
                <div key={`faq-${index}-answer-${i}`}>{ans}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
