// src/app/contact/page.tsx
import { Metadata } from 'next';
import { ContactForm } from './ContactForm';
import { MailIcon, ClockIcon, GlobeIcon } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the FileConvertTool team. Report issues, request features, or ask questions about our file conversion service.',
  alternates: { canonical: 'https://www.fileconverttool.com/contact' },
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-extrabold mb-2" style={{ color: 'var(--text-primary)' }}>Contact Us</h1>
      <p className="text-base mb-10" style={{ color: 'var(--text-secondary)' }}>
        Have a question, feature request, or found a bug? We would love to hear from you.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-[1fr,280px] gap-8">
        <div className="section-card p-6">
          <ContactForm />
        </div>

        <div className="space-y-4">
          {[
            { icon: <MailIcon size={18} />, title: 'Contact', text: 'Use the form', sub: 'We\'ll get back to you' },
            { icon: <ClockIcon size={18} />, title: 'Response Time', text: 'Within 24 hours', sub: 'Monday to Friday' },
            { icon: <GlobeIcon size={18} />, title: 'Based In', text: 'United Kingdom', sub: 'Serving users worldwide' },
          ].map((item, i) => (
            <div key={i} className="section-card p-5">
              <div className="gradient-text mb-2">{item.icon}</div>
              <h3 className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{item.title}</h3>
              <p className="text-sm font-medium mt-0.5" style={{ color: 'var(--text-primary)' }}>{item.text}</p>
              <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
