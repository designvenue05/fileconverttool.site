// src/app/blog/[slug]/page.tsx
import { Metadata } from 'next';

import Link from 'next/link';
import { blogPosts, getBlogPost } from '@/lib/blog';
import { ClockIcon, ArrowRightIcon } from '@/components/Icons';

export async function generateStaticParams() {
  return blogPosts.map(post => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `https://www.fileconverttool.com/blog/${post.slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

function renderContent(content: string) {
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} className="text-xl font-bold mt-8 mb-3" style={{ color: 'var(--text-primary)' }}>
          {line.replace('## ', '')}
        </h2>
      );
    } else if (line.startsWith('### ')) {
      elements.push(
        <h3 key={i} className="text-lg font-semibold mt-6 mb-2" style={{ color: 'var(--text-primary)' }}>
          {line.replace('### ', '')}
        </h3>
      );
    } else if (line.startsWith('- **') || line.startsWith('**')) {
      const parts = line.replace(/^- /, '').split('**');
      elements.push(
        <div key={i} className="flex gap-2 items-start my-1">
          <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: 'var(--brand-500)' }} />
          <p>
            <strong style={{ color: 'var(--text-primary)' }}>{parts[1]}</strong>
            {parts[2]}
          </p>
        </div>
      );
    } else if (line.trim() === '') {
      // skip
    } else {
      // Inline bold
      const rendered = line.replace(/\*\*(.+?)\*\*/g, '<strong style="color:var(--text-primary)">$1</strong>');
      elements.push(
        <p key={i} className="my-3 leading-relaxed" dangerouslySetInnerHTML={{ __html: rendered }} />
      );
    }
    i++;
  }
  return elements;
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return <div className='max-w-xl mx-auto px-4 py-24 text-center'><h1 className='text-4xl font-extrabold mb-4'>Post not found</h1><a href='/blog' className='btn-gradient inline-block mt-4'>Back to Blog</a></div>;

  const relatedPosts = blogPosts.filter(p => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm" style={{ color: 'var(--text-muted)' }}>
        <Link href="/" className="hover:text-[var(--brand-500)]">Home</Link>
        <span className="mx-2">›</span>
        <Link href="/blog" className="hover:text-[var(--brand-500)]">Blog</Link>
        <span className="mx-2">›</span>
        <span style={{ color: 'var(--text-secondary)' }}>{post.title}</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-semibold" style={{ background: 'rgba(108,99,255,0.08)', color: 'var(--brand-500)' }}>
            {post.category}
          </span>
          <span className="flex items-center gap-1 text-xs" style={{ color: 'var(--text-muted)' }}>
            <ClockIcon size={12} />
            {post.readTime}
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold leading-tight mb-3" style={{ color: 'var(--text-primary)' }}>
          {post.title}
        </h1>
        <div className="flex items-center gap-3 text-sm" style={{ color: 'var(--text-muted)' }}>
          <span>{post.author}</span>
          <span>•</span>
          <span>{new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
        </div>
      </div>

      {/* Content */}
      <article className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
        {renderContent(post.content)}
      </article>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="mt-12 pt-8 border-t" style={{ borderColor: 'var(--border)' }}>
          <h2 className="text-xl font-bold mb-5" style={{ color: 'var(--text-primary)' }}>Related Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedPosts.map(rp => (
              <Link key={rp.slug} href={`/blog/${rp.slug}`} className="section-card p-4 group hover:border-[var(--brand-500)]">
                <span className="text-xs font-medium" style={{ color: 'var(--brand-500)' }}>{rp.category}</span>
                <h3 className="text-sm font-semibold mt-1 leading-snug group-hover:text-[var(--brand-500)] transition-colors" style={{ color: 'var(--text-primary)' }}>
                  {rp.title}
                </h3>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
