// src/app/layout.tsx
import './globals.css';
import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Analytics } from '@/components/Analytics';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.fileconverttool.com'),
  title: {
    default: 'FileConvertTool — Free Online File Converter',
    template: '%s | FileConvertTool',
  },
  description: 'Convert images, videos, and audio files online for free. No sign-up required. Support for PNG, JPG, WebP, MP4, MP3, WAV, and 30+ formats.',
  keywords: ['file converter', 'image converter', 'video converter', 'audio converter', 'png to jpg', 'mp4 to mp3', 'online converter', 'free converter'],
  authors: [{ name: 'FileConvertTool' }],
  creator: 'FileConvertTool',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://www.fileconverttool.com',
    siteName: 'FileConvertTool',
    title: 'FileConvertTool — Free Online File Converter',
    description: 'Convert images, videos, and audio files online for free. No sign-up, no watermarks, instant conversion.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FileConvertTool — Free Online File Converter',
    description: 'Convert images, videos, and audio files online for free.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <Analytics />
      </head>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
