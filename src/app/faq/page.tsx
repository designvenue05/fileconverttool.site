// src/app/faq/page.tsx
import { Metadata } from 'next';
import { FAQSchema } from '@/components/schemas/HomeSchema';
import { FAQAccordion } from './FAQAccordion';

const faqs = [
  { question: 'What is FileConvertTool?', answer: 'FileConvertTool is a free online file converter that lets you convert images, videos, and audio files between 30+ formats. It works entirely in your browser — no software downloads or account sign-ups required.' },
  { question: 'Is FileConvertTool really free?', answer: 'Yes. Our free tier includes 10 conversions per day with files up to 200 MB. This covers the vast majority of everyday needs. For heavier usage, our Pro ($4.99/month) and Business ($14.99/month) plans offer unlimited conversions and larger file sizes.' },
  { question: 'What file formats do you support?', answer: 'We support 30+ formats including: Images (PNG, JPG, WebP, GIF, BMP, TIFF, ICO, SVG), Video (MP4, WebM, AVI, MOV, MKV, FLV, WMV), and Audio (MP3, WAV, AAC, OGG, FLAC, WMA, M4A). We also support video-to-audio extraction and image/video compression.' },
  { question: 'Are my files safe and private?', answer: 'Absolutely. All files are transmitted over encrypted HTTPS connections and processed on secure servers. Your files are automatically deleted immediately after conversion or within one hour at most. We never access, view, share, or analyse the contents of your uploads.' },
  { question: 'What is the maximum file size I can upload?', answer: 'Free users can upload files up to 200 MB. Pro subscribers get a 500 MB limit, and Business plan users can upload files up to 2 GB.' },
  { question: 'How long does conversion take?', answer: 'Most conversions complete in under 10 seconds. Larger files, especially video conversions, may take longer depending on file size and complexity. Our servers are optimised for speed.' },
  { question: 'Do I need to install any software?', answer: 'No. FileConvertTool works entirely in your web browser. There is nothing to download, install, or update. It works on Windows, macOS, Linux, iOS, Android — any device with a modern browser.' },
  { question: 'Will converting my file reduce its quality?', answer: 'It depends on the formats involved. Converting between lossless formats (e.g., PNG to TIFF) preserves full quality. Converting to lossy formats (e.g., PNG to JPG) involves some compression, but our converter is optimised to maintain maximum quality.' },
  { question: 'Can I convert multiple files at once?', answer: 'Free users can convert one file at a time. Pro subscribers can batch-convert up to 10 files, and Business users can process up to 100 files simultaneously.' },
  { question: 'Do you add watermarks to converted files?', answer: 'Never. All converted files are delivered clean, with no watermarks, logos, or branding of any kind — on all plans including the free tier.' },
  { question: 'Can I extract audio from a video file?', answer: 'Yes. Our Video to Audio converter lets you extract audio from MP4, MOV, MKV, AVI, WebM, and other video formats. You can save the audio as MP3, WAV, AAC, OGG, or FLAC.' },
  { question: 'What happens to my files after conversion?', answer: 'Files are automatically deleted from our servers immediately after conversion is complete, or within one hour at most. We do not retain any copies of your files.' },
  { question: 'Can I use FileConvertTool on my phone?', answer: 'Yes. FileConvertTool is fully responsive and works on any mobile device — iPhone, Android, iPad, or tablet. Simply open fileconverttool.com in your mobile browser and start converting.' },
  { question: 'Do I need to create an account?', answer: 'No account is required for free conversions. You can start converting immediately. Paid plans do require an account for billing purposes.' },
  { question: 'What payment methods do you accept?', answer: 'We accept all major credit and debit cards. Payment is processed securely through our payment provider. You can cancel your subscription at any time.' },
  { question: 'Can I cancel my subscription?', answer: 'Yes, you can cancel your Pro or Business subscription at any time. Cancellation takes effect at the end of your current billing period, and you will retain access to paid features until then.' },
  { question: 'What is the difference between Pro and Business plans?', answer: 'Pro ($4.99/month) offers unlimited conversions, 500 MB file size limit, no ads, and batch processing up to 10 files. Business ($14.99/month) includes everything in Pro plus a 2 GB file size limit, API access, and batch processing up to 100 files.' },
  { question: 'Do you offer an API?', answer: 'API access is available on our Business plan ($14.99/month). It allows you to integrate FileConvertTool into your applications and workflows. Contact us for API documentation.' },
  { question: 'How do I report a bug or request a feature?', answer: 'We love hearing from users! Please visit our Contact page to submit bug reports or feature requests. We read every message and typically respond within 24 hours.' },
];

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Find answers to common questions about FileConvertTool — file formats, privacy, pricing, limits, and more.',
  alternates: { canonical: 'https://www.fileconverttool.com/faq' },
};

export default function FAQPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <div className="max-w-3xl mx-auto px-5 py-12">
        <h1 className="text-[28px] font-extrabold mb-2" style={{ color: 'var(--text-primary)' }}>Frequently Asked Questions</h1>
        <p className="text-[14px] mb-8" style={{ color: 'var(--text-secondary)' }}>
          Everything you need to know about FileConvertTool.
        </p>
        <FAQAccordion faqs={faqs} />
      </div>
    </>
  );
}
