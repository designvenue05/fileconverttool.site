// src/app/blog/page.tsx
import { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/lib/blog';
import { ClockIcon, ArrowRightIcon } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Blog — File Conversion Tips & Guides',
  description: 'Learn about file formats, conversion tips, and best practices. Guides for image, video, and audio conversion from the FileConvertTool team.',
  alternates: { canonical: 'https://www.fileconverttool.com/blog' },
};

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-extrabold mb-2" style={{ color: 'var(--text-primary)' }}>Blog</h1>
      <p className="text-base mb-10" style={{ color: 'var(--text-secondary)' }}>
        Guides, tips, and insights about file conversion, formats, and optimisation.
      </p>

      <div className="space-y-6">
        {blogPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="section-card p-6 block group hover:border-[var(--brand-500)] transition-all">
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-semibold" style={{ background: 'rgba(108,99,255,0.08)', color: 'var(--brand-500)' }}>
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-xs" style={{ color: 'var(--text-muted)' }}>
                <ClockIcon size={12} />
                {post.readTime}
              </span>
              <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
                {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
              </span>
            </div>
            <h2 className="text-lg font-bold mb-2 group-hover:text-[var(--brand-500)] transition-colors" style={{ color: 'var(--text-primary)' }}>
              {post.title}
            </h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>
              {post.excerpt}
            </p>
            <span className="inline-flex items-center gap-1 text-sm font-medium gradient-text">
              Read more <ArrowRightIcon size={14} />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
