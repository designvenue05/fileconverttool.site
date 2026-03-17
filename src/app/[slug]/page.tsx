// src/app/[slug]/page.tsx
import { Metadata } from 'next';
import { ConverterUI } from '@/components/ConverterUI';
import { ConverterSchema } from '@/components/schemas/HomeSchema';
import { getConversionFromSlug, getRelatedConversions, popularConversions } from '@/lib/conversions';
import { generateConverterSEO } from '@/lib/seoContent';
import Link from 'next/link';
import { ChevronDownIcon } from '@/components/Icons';

// Only pre-generate popular conversions to keep build fast
export async function generateStaticParams() {
  return popularConversions.map(c => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const conv = getConversionFromSlug(slug);
  if (!conv) return {};
  const seo = generateConverterSEO(conv.from, conv.to);
  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    alternates: { canonical: `https://www.fileconverttool.com/${slug}` },
    openGraph: {
      title: seo.metaTitle,
      description: seo.metaDescription,
      url: `https://www.fileconverttool.com/${slug}`,
      type: 'website',
    },
  };
}

function FAQAccordion({ faqs }: { faqs: { question: string; answer: string }[] }) {
  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <details key={i} className="faq-item">
          <summary>
            <span>{faq.question}</span>
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

export default async function ConverterPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const conv = getConversionFromSlug(slug);
  if (!conv) {
    return (
      <div className="max-w-xl mx-auto px-4 py-24 text-center">
        <h1 className="text-4xl font-extrabold gradient-text mb-4">404</h1>
        <p style={{ color: 'var(--text-secondary)' }}>Conversion not found.</p>
        <a href="/" className="btn-gradient inline-block mt-6 !px-8">Go Home</a>
      </div>
    );
  }

  const seo = generateConverterSEO(conv.from, conv.to);
  const related = getRelatedConversions(conv.from, conv.to);
  const fromUpper = conv.from.toUpperCase();
  const toUpper = conv.to.toUpperCase();

  return (
    <>
      <ConverterSchema from={conv.from} to={conv.to} faqs={seo.faqs} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb */}
        <nav className="pt-6 pb-2 text-sm" style={{ color: 'var(--text-muted)' }}>
          <Link href="/" className="hover:text-[var(--brand-500)] transition-colors">Home</Link>
          <span className="mx-2">›</span>
          <span style={{ color: 'var(--text-secondary)' }}>{fromUpper} to {toUpper}</span>
        </nav>

        {/* Hero */}
        <section className="pb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight" style={{ color: 'var(--text-primary)' }}>
            {seo.h1}
          </h1>
          <p className="mt-3 text-base max-w-3xl" style={{ color: 'var(--text-secondary)' }}>
            Convert your {fromUpper} files to {toUpper} format online in seconds — completely free, no registration required.
          </p>
        </section>

        {/* Converter */}
        <section className="pb-10">
          <ConverterUI initialFrom={conv.from} initialTo={conv.to} initialCategory={conv.category.id} />
        </section>

        {/* SEO content sections */}
        <div className="space-y-12 pb-12">
          {/* About section */}
          <section className="border-t pt-10" style={{ borderColor: 'var(--border)' }}>
            <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              About {fromUpper} to {toUpper} Conversion
            </h2>
            <div className="prose max-w-none text-sm leading-relaxed space-y-4" style={{ color: 'var(--text-secondary)' }}>
              {seo.description.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </section>

          {/* Why convert */}
          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Why Convert {fromUpper} to {toUpper}?
            </h2>
            <div className="text-sm leading-relaxed space-y-2" style={{ color: 'var(--text-secondary)' }}>
              {seo.whyConvert.split('\n').map((line, i) => {
                const cleaned = line.replace(/^• \*\*(.+?)\*\*/, '$1');
                if (line.startsWith('•')) {
                  const parts = line.replace('• **', '').split('**');
                  return (
                    <div key={i} className="flex gap-2 items-start">
                      <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: 'var(--brand-500)' }} />
                      <p><strong style={{ color: 'var(--text-primary)' }}>{parts[0]}</strong>{parts[1]}</p>
                    </div>
                  );
                }
                return <p key={i}>{line}</p>;
              })}
            </div>
          </section>

          {/* Comparison table */}
          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              {fromUpper} vs {toUpper} Comparison
            </h2>
            <div className="section-card overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: 'var(--bg-secondary)' }}>
                    <th className="text-left px-5 py-3 font-semibold" style={{ color: 'var(--text-primary)' }}>Feature</th>
                    <th className="text-left px-5 py-3 font-semibold" style={{ color: 'var(--text-primary)' }}>{fromUpper}</th>
                    <th className="text-left px-5 py-3 font-semibold" style={{ color: 'var(--text-primary)' }}>{toUpper}</th>
                  </tr>
                </thead>
                <tbody>
                  {seo.comparisonTable.map((row, i) => (
                    <tr key={i} className="border-t" style={{ borderColor: 'var(--border)' }}>
                      <td className="px-5 py-3 font-medium" style={{ color: 'var(--text-primary)' }}>{row.feature}</td>
                      <td className="px-5 py-3" style={{ color: 'var(--text-secondary)' }}>{row.from}</td>
                      <td className="px-5 py-3" style={{ color: 'var(--text-secondary)' }}>{row.to}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* How to */}
          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              How to Convert {fromUpper} to {toUpper}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {seo.howTo.map((step, i) => (
                <div key={i} className="section-card p-5">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold text-white mb-3" style={{ background: 'var(--gradient)' }}>
                    {i + 1}
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{step}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Frequently Asked Questions
            </h2>
            <FAQAccordion faqs={seo.faqs} />
          </section>

          {/* Related conversions */}
          {related.length > 0 && (
            <section>
              <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                Related Conversions
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {related.map(r => (
                  <Link key={r.slug} href={`/${r.slug}`} className="popular-card">
                    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: r.color }} />
                    <span className="text-sm font-medium">{r.from} → {r.to}</span>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </>
  );
}
