// src/components/Footer.tsx
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="py-12 text-center" style={{ borderTop: '1px solid var(--border-light)' }}>
      <p className="text-[14px] mb-1.5" style={{ color: 'var(--text-muted)' }}>
        FileConvertTool — image, video &amp; audio conversion powered by our server.
      </p>
      <p className="text-[13px]" style={{ color: 'var(--text-muted)' }}>
        © {new Date().getFullYear()} FileConvertTool. No data collected. No cookies. No tracking.
      </p>
      <div className="flex items-center justify-center gap-5 mt-5 flex-wrap">
        {[
          { href: '/about', label: 'About' },
          { href: '/blog', label: 'Blog' },
          { href: '/faq', label: 'FAQ' },
          { href: '/formats', label: 'Formats' },
          { href: '/contact', label: 'Contact' },
          { href: '/privacy', label: 'Privacy' },
          { href: '/terms', label: 'Terms' },
        ].map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-[13px] font-medium transition-colors hover:text-[var(--brand-500)]"
            style={{ color: 'var(--text-muted)' }}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </footer>
  );
}
