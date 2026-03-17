// src/app/about/page.tsx
import { Metadata } from 'next';
import { ZapIcon, ShieldIcon, GlobeIcon, StarIcon } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about FileConvertTool — our mission, story, and the team behind the free online file converter trusted by millions.',
  alternates: { canonical: 'https://www.fileconverttool.com/about' },
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-extrabold mb-6" style={{ color: 'var(--text-primary)' }}>About FileConvertTool</h1>

      <div className="space-y-8 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
        <section>
          <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>Our Story</h2>
          <p>FileConvertTool was born out of frustration. We were tired of hunting for reliable file converters online, only to find tools cluttered with intrusive ads, hidden watermarks, aggressive upsells, or suspicious software downloads. We knew there had to be a better way.</p>
          <p className="mt-3">So we built one. FileConvertTool launched with a simple promise: fast, free, and honest file conversion that works exactly as advertised. No tricks, no hidden catches, no compromises on quality. Just upload your file, choose a format, and download the result — in seconds.</p>
          <p className="mt-3">What started as a simple image converter has grown into a comprehensive platform supporting over 30 file formats across images, video, and audio. We process thousands of conversions every day for users around the world, from students and freelancers to designers and small businesses.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>Our Mission</h2>
          <p>Our mission is to make file conversion effortless for everyone. We believe that basic file conversion is a utility — something that should be accessible, reliable, and free. You should not need to install software, create an account, or hand over your credit card just to change a PNG to a JPG.</p>
          <p className="mt-3">We are committed to keeping our free tier genuinely useful. Ten conversions per day with a 200 MB file limit covers the vast majority of everyday needs. For power users who need more, our affordable Pro and Business plans provide unlimited conversions, larger file sizes, and advanced features — without ever compromising the free experience.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>What We Stand For</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {[
              { icon: <ShieldIcon size={20} />, title: 'Privacy First', text: 'Your files are your business. We process them securely, delete them immediately, and never access your content.' },
              { icon: <ZapIcon size={20} />, title: 'Speed Matters', text: 'Our cloud infrastructure is optimised for fast conversions. Most files are processed in under 10 seconds.' },
              { icon: <GlobeIcon size={20} />, title: 'Accessible Everywhere', text: 'No downloads or installations. FileConvertTool works in any modern browser on any device.' },
              { icon: <StarIcon size={20} />, title: 'Quality You Can Trust', text: 'We use industry-standard libraries to ensure every conversion is as accurate and high-quality as possible.' },
            ].map((item, i) => (
              <div key={i} className="section-card p-5">
                <div className="gradient-text mb-3">{item.icon}</div>
                <h3 className="text-sm font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>{item.title}</h3>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>Our Technology</h2>
          <p>FileConvertTool is built with modern web technologies to deliver the fastest and most reliable conversion experience possible. Our frontend is built with Next.js and React, served globally through Vercel's edge network for minimal latency worldwide. Our conversion API runs on dedicated cloud servers powered by industry-standard tools including FFmpeg for audio and video processing, Pillow and CairoSVG for image manipulation, and custom optimisation pipelines for each format.</p>
          <p className="mt-3">Every file is transmitted over encrypted HTTPS connections, processed in isolated environments, and automatically purged after conversion. We never store, share, or access the contents of your files.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>The Team</h2>
          <p>FileConvertTool is built and maintained by a small, dedicated team of developers and designers who are passionate about creating useful tools for the web. We are a lean team that moves fast, ships often, and listens to our users. Every feature we build is informed by real user feedback and real-world needs.</p>
          <p className="mt-3">Have a suggestion, found a bug, or just want to say hello? We would love to hear from you. Reach out anytime through our contact page.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>Looking Ahead</h2>
          <p>We are constantly improving FileConvertTool with new formats, faster processing, and smarter features. On our roadmap: document conversion (PDF, DOCX, XLSX), batch processing enhancements, API access for developers, and a desktop application for offline use. We are building the file conversion tool we always wished existed — and we are just getting started.</p>
        </section>
      </div>
    </div>
  );
}
