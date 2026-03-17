// src/app/contact/ContactForm.tsx
'use client';

import { useState } from 'react';

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would POST to an API endpoint
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, rgba(108,99,255,0.1), rgba(79,70,229,0.1))' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-500)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5"/>
          </svg>
        </div>
        <h3 className="text-lg font-bold mb-1" style={{ color: 'var(--text-primary)' }}>Message Sent</h3>
        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
          Thanks for reaching out. We'll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  const inputStyle = {
    background: 'var(--bg-secondary)',
    border: '1.5px solid var(--border)',
    color: 'var(--text-primary)',
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--text-primary)' }}>Name</label>
        <input
          type="text"
          required
          placeholder="Your name"
          className="w-full px-4 py-2.5 rounded-xl text-sm outline-none focus:border-[var(--brand-500)] transition-colors"
          style={inputStyle}
        />
      </div>
      <div>
        <label className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--text-primary)' }}>Email</label>
        <input
          type="email"
          required
          placeholder="your@email.com"
          className="w-full px-4 py-2.5 rounded-xl text-sm outline-none focus:border-[var(--brand-500)] transition-colors"
          style={inputStyle}
        />
      </div>
      <div>
        <label className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--text-primary)' }}>Subject</label>
        <select
          required
          className="w-full px-4 py-2.5 rounded-xl text-sm outline-none focus:border-[var(--brand-500)] transition-colors"
          style={inputStyle}
        >
          <option value="">Select a topic</option>
          <option value="bug">Bug Report</option>
          <option value="feature">Feature Request</option>
          <option value="billing">Billing Question</option>
          <option value="general">General Enquiry</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--text-primary)' }}>Message</label>
        <textarea
          required
          rows={5}
          placeholder="Tell us what's on your mind..."
          className="w-full px-4 py-2.5 rounded-xl text-sm outline-none resize-y focus:border-[var(--brand-500)] transition-colors"
          style={inputStyle}
        />
      </div>
      <button type="submit" className="btn-gradient w-full !py-3">
        Send Message
      </button>
    </form>
  );
}
