// src/app/page.tsx
import { Metadata } from 'next';
import { HomeConverter } from '@/components/HomeConverter';
import { HomeSchema } from '@/components/schemas/HomeSchema';

export const metadata: Metadata = {
  title: 'FileConvertTool — Free Online File Converter | Images, Video, Audio',
  description: 'Convert images, videos, and audio files online for free. No sign-up, no watermarks. Support for PNG, JPG, WebP, MP4, MP3, WAV, and 30+ formats. Fast, secure, and unlimited.',
  alternates: { canonical: 'https://www.fileconverttool.com' },
};

export default function HomePage() {
  return (
    <>
      <HomeSchema />
      <HomeConverter />
    </>
  );
}
