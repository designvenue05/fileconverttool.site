// src/app/formats/page.tsx
import { Metadata } from 'next';
import { categories } from '@/lib/conversions';
import { getCategoryIcon } from '@/components/Icons';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Supported Formats — All File Types',
  description: 'Complete list of all file formats supported by FileConvertTool. Convert between 30+ image, video, and audio formats online for free.',
  alternates: { canonical: 'https://www.fileconverttool.com/formats' },
};

export default function FormatsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-extrabold mb-2" style={{ color: 'var(--text-primary)' }}>Supported Formats</h1>
      <p className="text-base mb-10" style={{ color: 'var(--text-secondary)' }}>
        FileConvertTool supports 30+ file formats across images, video, and audio. Here is the full list.
      </p>

      <div className="space-y-10">
        {categories.map(cat => (
          <section key={cat.id}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${cat.color}14` }}>
                {getCategoryIcon(cat.icon, { size: 20, color: cat.color })}
              </div>
              <div>
                <h2 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>{cat.name}</h2>
                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{cat.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {cat.fromFormats.map(fmt => (
                <div key={fmt.value} className="section-card p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-bold text-white" style={{ background: cat.color }}>
                      {fmt.ext}
                    </span>
                    <h3 className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{fmt.label}</h3>
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{fmt.description}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {cat.toFormats.filter(t => t.value !== fmt.value).slice(0, 4).map(to => (
                      <Link
                        key={to.value}
                        href={`/${fmt.value}-to-${to.value}`}
                        className="text-xs px-2 py-0.5 rounded-md font-medium transition-colors hover:opacity-80"
                        style={{ background: `${cat.color}10`, color: cat.color }}
                      >
                        → {to.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
