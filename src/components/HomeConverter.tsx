// src/components/HomeConverter.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { categories } from '@/lib/conversions';
import { getCategoryIcon, ChevronDownIcon } from './Icons';

const formatColors: Record<string, string> = {
  png: '#6C63FF', jpg: '#EF4444', jpeg: '#EF4444', webp: '#10B981', gif: '#F59E0B',
  bmp: '#F97316', svg: '#8B5CF6', tiff: '#3B82F6', ico: '#6366F1',
  mp4: '#EF4444', webm: '#10B981', avi: '#F59E0B', mov: '#3B82F6',
  mkv: '#8B5CF6', flv: '#F97316', wmv: '#6366F1',
  mp3: '#6C63FF', wav: '#3B82F6', aac: '#F59E0B', ogg: '#10B981',
  flac: '#EF4444', wma: '#F97316', m4a: '#8B5CF6',
};

const categoryPopular: Record<string, { from: string; to: string; label: string; slug: string }[]> = {
  images: [
    { from: 'png', to: 'svg', label: 'Vectorize images', slug: 'png-to-svg' },
    { from: 'jpg', to: 'svg', label: 'Photo to vector', slug: 'jpg-to-svg' },
    { from: 'webp', to: 'png', label: 'Browser-friendly', slug: 'webp-to-png' },
    { from: 'png', to: 'jpg', label: 'Reduce file size', slug: 'png-to-jpg' },
    { from: 'svg', to: 'png', label: 'Rasterize vectors', slug: 'svg-to-png' },
    { from: 'jpg', to: 'webp', label: 'Modern format', slug: 'jpg-to-webp' },
    { from: 'gif', to: 'png', label: 'Static frame', slug: 'gif-to-png' },
    { from: 'png', to: 'webp', label: 'Compress lossless', slug: 'png-to-webp' },
  ],
  video: [
    { from: 'mp4', to: 'webm', label: 'Web optimised', slug: 'mp4-to-webm' },
    { from: 'avi', to: 'mp4', label: 'Modern format', slug: 'avi-to-mp4' },
    { from: 'mov', to: 'mp4', label: 'Universal', slug: 'mov-to-mp4' },
    { from: 'mkv', to: 'mp4', label: 'Wide support', slug: 'mkv-to-mp4' },
    { from: 'mp4', to: 'gif', label: 'Animated clip', slug: 'mp4-to-gif' },
    { from: 'webm', to: 'mp4', label: 'Compatibility', slug: 'webm-to-mp4' },
    { from: 'flv', to: 'mp4', label: 'Update format', slug: 'flv-to-mp4' },
    { from: 'wmv', to: 'mp4', label: 'Cross-platform', slug: 'wmv-to-mp4' },
  ],
  'video-to-audio': [
    { from: 'mp4', to: 'mp3', label: 'Extract audio', slug: 'mp4-to-mp3' },
    { from: 'mp4', to: 'wav', label: 'Lossless audio', slug: 'mp4-to-wav' },
    { from: 'mov', to: 'mp3', label: 'Apple to MP3', slug: 'mov-to-mp3' },
    { from: 'mkv', to: 'mp3', label: 'MKV audio', slug: 'mkv-to-mp3' },
    { from: 'avi', to: 'mp3', label: 'AVI audio', slug: 'avi-to-mp3' },
    { from: 'webm', to: 'mp3', label: 'Web audio', slug: 'webm-to-mp3' },
  ],
  compress: [
    { from: 'png', to: 'png', label: 'Smaller PNG', slug: 'png-to-webp' },
    { from: 'jpg', to: 'jpg', label: 'Smaller JPG', slug: 'jpg-to-webp' },
    { from: 'webp', to: 'webp', label: 'Optimise WebP', slug: 'webp-to-png' },
    { from: 'gif', to: 'gif', label: 'Smaller GIF', slug: 'gif-to-png' },
    { from: 'mp4', to: 'mp4', label: 'Compress video', slug: 'mp4-to-webm' },
  ],
  audio: [
    { from: 'mp3', to: 'wav', label: 'Lossless output', slug: 'mp3-to-wav' },
    { from: 'wav', to: 'mp3', label: 'Compress audio', slug: 'wav-to-mp3' },
    { from: 'flac', to: 'mp3', label: 'Universal format', slug: 'flac-to-mp3' },
    { from: 'ogg', to: 'mp3', label: 'Wide support', slug: 'ogg-to-mp3' },
    { from: 'aac', to: 'mp3', label: 'Standard audio', slug: 'aac-to-mp3' },
    { from: 'm4a', to: 'mp3', label: 'Apple to MP3', slug: 'mp3-to-wav' },
  ],
};

const heroLabels: Record<string, { title: string; lines: string[] }> = {
  images: { title: 'Convert Images.', lines: ['PNG, JPG, SVG, WebP, GIF, BMP, TIFF conversions.', 'Fast server-side processing — no browser limits.'] },
  video: { title: 'Convert Videos.', lines: ['MP4, WebM, AVI, MOV, MKV, FLV, WMV conversions.', 'Fast server-side processing — no browser limits.'] },
  'video-to-audio': { title: 'Extract Audio.', lines: ['Pull audio tracks from any video file.', 'MP3, WAV, AAC, OGG, FLAC output formats.'] },
  compress: { title: 'Compress Files.', lines: ['Reduce file sizes without losing quality.', 'Images and video compression powered by our server.'] },
  audio: { title: 'Convert Audio.', lines: ['MP3, WAV, AAC, OGG, FLAC, WMA, M4A conversions.', 'Fast server-side processing — no browser limits.'] },
};

function FormatBadge({ format }: { format: string }) {
  const color = formatColors[format] || '#6C63FF';
  return (
    <span
      className="inline-flex items-center gap-1 px-2 py-0.5 sm:px-3 sm:py-1 rounded-md text-[11px] sm:text-[13px] font-bold"
      style={{ background: `${color}12`, color: color, border: `1px solid ${color}20` }}
    >
      <span className="w-1.5 h-1.5 sm:w-[7px] sm:h-[7px] rounded-full" style={{ background: color }} />
      .{format.toUpperCase()}
    </span>
  );
}

function SupportedDot({ format }: { format: string }) {
  const color = formatColors[format] || '#6C63FF';
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[11px] sm:text-[13px] font-semibold" style={{ border: `1px solid ${color}18`, background: `${color}05`, color }}>
      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full" style={{ background: color }} />
      .{format.toUpperCase()}
    </span>
  );
}

const faqs = [
  { q: 'Is this free?', a: 'Yes — FileConvertTool is completely free. You get 10 conversions per day on the free tier with files up to 200 MB. For unlimited conversions, upgrades are coming soon.' },
  { q: 'Are my files private?', a: 'Absolutely. Files are transmitted over encrypted connections, processed on secure servers, and automatically deleted after conversion. We never access or store your content.' },
  { q: 'What formats are supported?', a: 'We support 30+ formats including PNG, JPG, WebP, SVG, GIF, BMP, TIFF, MP4, WebM, AVI, MOV, MKV, MP3, WAV, AAC, FLAC, OGG, and more.' },
  { q: 'How does video conversion work?', a: 'Video files are uploaded to our servers and converted using FFmpeg — the industry-standard tool used by YouTube, Netflix, and others. This means no browser limitations.' },
  { q: 'Is there a file size limit?', a: 'Currently the maximum file size is 200 MB. Larger limits are coming soon with our premium plans.' },
  { q: 'How fast are conversions?', a: 'Most conversions complete in under 10 seconds. Video files may take longer depending on size and complexity.' },
];

export function HomeConverter() {
  const [activeCategory, setActiveCategory] = useState('images');
  const [fromFormat, setFromFormat] = useState('');
  const [toFormat, setToFormat] = useState('');

  const currentCat = categories.find(c => c.id === activeCategory)!;
  const hero = heroLabels[activeCategory] || heroLabels.images;
  const popular = categoryPopular[activeCategory] || [];

  const handleCategoryChange = (catId: string) => {
    setActiveCategory(catId);
    setFromFormat('');
    setToFormat('');
  };

  const conversionLink = fromFormat && toFormat ? `/${fromFormat}-to-${toFormat}` : null;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      {/* ============ HERO ============ */}
      <section className="pt-10 sm:pt-20 pb-8 sm:pb-12 text-center">
        <h1 className="text-[32px] sm:text-[48px] lg:text-[64px] font-extrabold leading-[1.1] tracking-tight" style={{ color: 'var(--text-primary)' }}>
          {hero.title}
          <br />
          <span className="gradient-text italic">Instantly.</span>
        </h1>
        <div className="mt-4 sm:mt-6 space-y-1">
          {hero.lines.map((line, i) => (
            <p key={i} className="text-[14px] sm:text-[17px]" style={{ color: 'var(--text-secondary)' }}>{line}</p>
          ))}
        </div>
      </section>

      {/* ============ CATEGORY TABS — horizontal scroll on mobile ============ */}
      <section className="-mx-4 sm:mx-0">
        <div className="flex justify-start sm:justify-center overflow-x-auto scrollbar-hide px-4 sm:px-0 pb-2">
          <div className="section-card inline-flex items-center gap-1 sm:gap-1.5 p-1.5 sm:p-2 rounded-xl sm:rounded-2xl flex-nowrap">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`category-tab !py-2.5 !px-3.5 sm:!py-3 sm:!px-5 !text-[13px] sm:!text-[15px] flex-shrink-0 ${activeCategory === cat.id ? 'active' : ''}`}
              >
                {getCategoryIcon(cat.icon, { size: 15, color: activeCategory === cat.id ? 'white' : undefined })}
                <span className="hidden sm:inline">{cat.name}</span>
                <span className="sm:hidden">{cat.name.replace('Video → Audio', 'V→A')}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ============ POPULAR CONVERSIONS ============ */}
      <section className="mt-10 sm:mt-16">
        <p className="section-label text-center mb-4 sm:mb-6 !text-[11px] sm:!text-[12px]">Popular Conversions</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {popular.slice(0, 8).map((conv, i) => (
            <Link
              key={i}
              href={`/${conv.slug}`}
              className="flex flex-col items-center gap-2.5 sm:gap-3 py-5 sm:py-7 px-3 sm:px-5 rounded-2xl border transition-all hover:shadow-md hover:-translate-y-0.5"
              style={{ background: 'var(--card-bg)', borderColor: 'var(--border-light)', boxShadow: 'var(--card-shadow)' }}
            >
              {/* Badges row — always horizontal */}
              <div className="flex items-center gap-2 sm:gap-2.5">
                <span
                  className="inline-flex items-center gap-[5px] px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-[11px] sm:text-[12px] font-bold whitespace-nowrap"
                  style={{ background: `${formatColors[conv.from] || '#6C63FF'}12`, color: formatColors[conv.from] || '#6C63FF', border: `1px solid ${formatColors[conv.from] || '#6C63FF'}20` }}
                >
                  <span className="w-[6px] h-[6px] rounded-full flex-shrink-0" style={{ background: formatColors[conv.from] || '#6C63FF' }} />
                  .{conv.from.toUpperCase()}
                </span>

                <span className="text-[12px] sm:text-[14px] flex-shrink-0" style={{ color: 'var(--text-muted)' }}>→</span>

                <span
                  className="inline-flex items-center gap-[5px] px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-[11px] sm:text-[12px] font-bold whitespace-nowrap"
                  style={{ background: `${formatColors[conv.to] || '#4F46E5'}12`, color: formatColors[conv.to] || '#4F46E5', border: `1px solid ${formatColors[conv.to] || '#4F46E5'}20` }}
                >
                  <span className="w-[6px] h-[6px] rounded-full flex-shrink-0" style={{ background: formatColors[conv.to] || '#4F46E5' }} />
                  .{conv.to.toUpperCase()}
                </span>
              </div>

              {/* Label */}
              <span className="text-[12px] sm:text-[14px] font-medium" style={{ color: 'var(--text-secondary)' }}>
                {conv.label}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ============ OR PICK ANY CONVERSION ============ */}
      <section className="mt-10 sm:mt-16">
        <p className="section-label text-center mb-4 sm:mb-6 !text-[11px] sm:!text-[12px]">Or Pick Any Conversion</p>
        <div className="section-card p-4 sm:p-8 space-y-4 sm:space-y-6">
          {/* FROM row */}
          <div>
            <span className="text-[12px] sm:text-[13px] font-bold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>From</span>
            <div className="flex flex-wrap gap-2 sm:gap-2.5 mt-2 sm:mt-3">
              {currentCat.fromFormats.map(fmt => (
                <button
                  key={fmt.value}
                  onClick={() => { setFromFormat(fmt.value); if (toFormat === fmt.value) setToFormat(''); }}
                  className={`format-chip !py-2 !px-3 sm:!py-2.5 sm:!px-5 !text-[12px] sm:!text-[14px] ${fromFormat === fmt.value ? 'active' : ''}`}
                >
                  .{fmt.label}
                </button>
              ))}
            </div>
          </div>
          {/* TO row */}
          <div>
            <span className="text-[12px] sm:text-[13px] font-bold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>To</span>
            <div className="flex flex-wrap gap-2 sm:gap-2.5 mt-2 sm:mt-3">
              {currentCat.toFormats
                .filter(f => f.value !== fromFormat)
                .map(fmt => (
                  <button
                    key={fmt.value}
                    onClick={() => setToFormat(fmt.value)}
                    className={`format-chip !py-2 !px-3 sm:!py-2.5 sm:!px-5 !text-[12px] sm:!text-[14px] ${toFormat === fmt.value ? 'active' : ''}`}
                  >
                    .{fmt.label}
                  </button>
                ))}
            </div>
          </div>
          {/* Go button */}
          {conversionLink && (
            <div className="pt-2 sm:pt-3 text-center animate-fade-in">
              <Link href={conversionLink} className="btn-gradient !px-8 sm:!px-12 !py-3 sm:!py-3.5 !text-[14px] sm:!text-[15px] w-full sm:w-auto">
                Convert .{fromFormat.toUpperCase()} → .{toFormat.toUpperCase()}
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* ============ SUPPORTED FORMATS ============ */}
      <section className="mt-10 sm:mt-16">
        <p className="section-label text-center mb-4 sm:mb-6 !text-[11px] sm:!text-[12px]">Supported Formats</p>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {currentCat.fromFormats.map(fmt => (
            <SupportedDot key={fmt.value} format={fmt.value} />
          ))}
        </div>
      </section>

      {/* ============ HOW TO USE ============ */}
      <section className="mt-16 sm:mt-24">
        <h2 className="text-[24px] sm:text-[32px] lg:text-[36px] font-extrabold mb-2 sm:mb-3" style={{ color: 'var(--text-primary)' }}>How to Use</h2>
        <p className="text-[14px] sm:text-[16px] mb-6 sm:mb-10" style={{ color: 'var(--text-secondary)' }}>
          Convert images, video, and audio in four simple steps.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {[
            { n: '1', color: '#10B981', title: 'Choose Conversion', desc: 'Pick source and target format from popular options or use the custom selector.' },
            { n: '2', color: '#3B82F6', title: 'Upload Files', desc: 'Drag and drop or click to browse. Batch upload multiple files at once.' },
            { n: '3', color: '#F59E0B', title: 'Convert Instantly', desc: 'Click Convert and watch real-time progress. Processed server-side for maximum quality.' },
            { n: '4', color: '#EF4444', title: 'Download Results', desc: 'Click Download to save your converted file. No browser limitations.' },
          ].map((step) => (
            <div key={step.n} className="step-card !p-5 sm:!p-7">
              <div
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center text-[13px] sm:text-[15px] font-bold text-white mb-3 sm:mb-5"
                style={{ background: step.color }}
              >
                {step.n}
              </div>
              <h3 className="text-[14px] sm:text-[16px] font-bold mb-1.5 sm:mb-2" style={{ color: 'var(--text-primary)' }}>{step.title}</h3>
              <p className="text-[12px] sm:text-[14px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ TRUST BADGES ============ */}
      <section className="mt-10 sm:mt-14 flex flex-wrap justify-center gap-5 sm:gap-10">
        {[
          { icon: '🔒', label: 'Private' },
          { icon: '⚡', label: 'Instant' },
          { icon: '∞', label: 'Unlimited' },
          { icon: '📱', label: 'Any Device' },
        ].map((badge) => (
          <div key={badge.label} className="inline-flex items-center gap-2 text-[14px] sm:text-[16px] font-medium" style={{ color: 'var(--text-secondary)' }}>
            <span className="text-[16px] sm:text-[18px]">{badge.icon}</span>
            <span>{badge.label}</span>
          </div>
        ))}
      </section>

      {/* ============ FAQ ============ */}
      <section className="mt-16 sm:mt-24 mb-12 sm:mb-20">
        <h2 className="text-[24px] sm:text-[32px] lg:text-[36px] font-extrabold mb-2 sm:mb-3" style={{ color: 'var(--text-primary)' }}>FAQ</h2>
        <p className="text-[14px] sm:text-[16px] mb-6 sm:mb-10" style={{ color: 'var(--text-secondary)' }}>
          Common questions about FileConvertTool.
        </p>
        <div className="space-y-2.5 sm:space-y-3.5">
          {faqs.map((faq, i) => (
            <details key={i} className="faq-item">
              <summary className="!text-[14px] sm:!text-[16px] !py-4 !px-4 sm:!py-5 sm:!px-6">
                {faq.q}
                <ChevronDownIcon size={16} className="faq-chevron" />
              </summary>
              <div className="px-4 sm:px-6 pb-4 sm:pb-5 -mt-1">
                <p className="text-[13px] sm:text-[15px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
