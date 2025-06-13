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
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200">
            <button
              type="button"
              className="flex justify-between items-center w-full py-4 text-left text-gray-900 focus:outline-none"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="text-lg font-medium">{faq.q}</span>
              <ChevronDownIcon
                className={`w-5 h-5 transform transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="mt-2 mb-4 text-gray-700">
                {faq.a.map((ans, i) => {
                    return (typeof ans === 'string')
                      ? <div key={i} className="mb-2" dangerouslySetInnerHTML={{ __html: ans }} />
                      : ans;
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
