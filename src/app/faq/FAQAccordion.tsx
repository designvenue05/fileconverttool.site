// src/app/faq/FAQAccordion.tsx
'use client';

import { ChevronDownIcon } from '@/components/Icons';

export function FAQAccordion({ faqs }: { faqs: { question: string; answer: string }[] }) {
  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <details key={i} className="faq-item">
          <summary>
            {faq.question}
            <ChevronDownIcon size={16} className="faq-chevron" />
          </summary>
          <div className="px-[22px] pb-4 -mt-1">
            <p className="text-[13px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{faq.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
