// src/lib/conversions.ts

export interface FormatOption {
  value: string;
  label: string;
  ext: string;
  mime?: string;
  description: string;
}

export interface ConversionCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  fromFormats: FormatOption[];
  toFormats: FormatOption[];
  color: string;
}

export interface PopularConversion {
  from: string;
  to: string;
  category: string;
  color: string;
  slug: string;
}

export const categories: ConversionCategory[] = [
  {
    id: 'images',
    name: 'Images',
    icon: 'image',
    description: 'Convert between image formats',
    color: '#6C63FF',
    fromFormats: [
      { value: 'png', label: 'PNG', ext: '.png', description: 'Portable Network Graphics — lossless compression with transparency support' },
      { value: 'jpg', label: 'JPG', ext: '.jpg', description: 'JPEG — widely-used lossy compression ideal for photographs' },
      { value: 'jpeg', label: 'JPEG', ext: '.jpeg', description: 'JPEG — same as JPG, alternate extension' },
      { value: 'webp', label: 'WebP', ext: '.webp', description: 'WebP — modern format by Google offering superior compression' },
      { value: 'gif', label: 'GIF', ext: '.gif', description: 'Graphics Interchange Format — supports animations and transparency' },
      { value: 'bmp', label: 'BMP', ext: '.bmp', description: 'Bitmap — uncompressed raster image format' },
      { value: 'tiff', label: 'TIFF', ext: '.tiff', description: 'Tagged Image File Format — lossless format for print and archival' },
      { value: 'ico', label: 'ICO', ext: '.ico', description: 'Icon format — used for favicons and Windows icons' },
      { value: 'svg', label: 'SVG', ext: '.svg', description: 'Scalable Vector Graphics — XML-based vector image format' },
    ],
    toFormats: [
      { value: 'png', label: 'PNG', ext: '.png', description: 'Portable Network Graphics' },
      { value: 'jpg', label: 'JPG', ext: '.jpg', description: 'JPEG format' },
      { value: 'webp', label: 'WebP', ext: '.webp', description: 'WebP format' },
      { value: 'gif', label: 'GIF', ext: '.gif', description: 'GIF format' },
      { value: 'bmp', label: 'BMP', ext: '.bmp', description: 'Bitmap format' },
      { value: 'tiff', label: 'TIFF', ext: '.tiff', description: 'TIFF format' },
      { value: 'ico', label: 'ICO', ext: '.ico', description: 'Icon format' },
      { value: 'svg', label: 'SVG', ext: '.svg', description: 'SVG format' },
    ],
  },
  {
    id: 'video',
    name: 'Video',
    icon: 'video',
    description: 'Convert between video formats',
    color: '#F59E0B',
    fromFormats: [
      { value: 'mp4', label: 'MP4', ext: '.mp4', description: 'MPEG-4 — most widely supported video format' },
      { value: 'webm', label: 'WebM', ext: '.webm', description: 'WebM — open format optimised for web playback' },
      { value: 'avi', label: 'AVI', ext: '.avi', description: 'Audio Video Interleave — classic Windows video format' },
      { value: 'mov', label: 'MOV', ext: '.mov', description: 'QuickTime Movie — Apple video container format' },
      { value: 'mkv', label: 'MKV', ext: '.mkv', description: 'Matroska — flexible open-standard container' },
      { value: 'flv', label: 'FLV', ext: '.flv', description: 'Flash Video — legacy web video format' },
      { value: 'wmv', label: 'WMV', ext: '.wmv', description: 'Windows Media Video — Microsoft proprietary format' },
    ],
    toFormats: [
      { value: 'mp4', label: 'MP4', ext: '.mp4', description: 'MP4 format' },
      { value: 'webm', label: 'WebM', ext: '.webm', description: 'WebM format' },
      { value: 'avi', label: 'AVI', ext: '.avi', description: 'AVI format' },
      { value: 'mov', label: 'MOV', ext: '.mov', description: 'MOV format' },
      { value: 'mkv', label: 'MKV', ext: '.mkv', description: 'MKV format' },
      { value: 'flv', label: 'FLV', ext: '.flv', description: 'FLV format' },
      { value: 'wmv', label: 'WMV', ext: '.wmv', description: 'WMV format' },
      { value: 'gif', label: 'GIF', ext: '.gif', description: 'Animated GIF' },
    ],
  },
  {
    id: 'video-to-audio',
    name: 'Video → Audio',
    icon: 'music',
    description: 'Extract audio from video files',
    color: '#10B981',
    fromFormats: [
      { value: 'mp4', label: 'MP4', ext: '.mp4', description: 'MPEG-4 video' },
      { value: 'webm', label: 'WebM', ext: '.webm', description: 'WebM video' },
      { value: 'avi', label: 'AVI', ext: '.avi', description: 'AVI video' },
      { value: 'mov', label: 'MOV', ext: '.mov', description: 'MOV video' },
      { value: 'mkv', label: 'MKV', ext: '.mkv', description: 'MKV video' },
      { value: 'flv', label: 'FLV', ext: '.flv', description: 'FLV video' },
      { value: 'wmv', label: 'WMV', ext: '.wmv', description: 'WMV video' },
    ],
    toFormats: [
      { value: 'mp3', label: 'MP3', ext: '.mp3', description: 'MP3 audio' },
      { value: 'wav', label: 'WAV', ext: '.wav', description: 'WAV audio' },
      { value: 'aac', label: 'AAC', ext: '.aac', description: 'AAC audio' },
      { value: 'ogg', label: 'OGG', ext: '.ogg', description: 'OGG audio' },
      { value: 'flac', label: 'FLAC', ext: '.flac', description: 'FLAC audio' },
    ],
  },
  {
    id: 'compress',
    name: 'Compress',
    icon: 'minimize',
    description: 'Reduce file size',
    color: '#EF4444',
    fromFormats: [
      { value: 'png', label: 'PNG', ext: '.png', description: 'PNG image' },
      { value: 'jpg', label: 'JPG', ext: '.jpg', description: 'JPG image' },
      { value: 'webp', label: 'WebP', ext: '.webp', description: 'WebP image' },
      { value: 'gif', label: 'GIF', ext: '.gif', description: 'GIF image' },
      { value: 'mp4', label: 'MP4', ext: '.mp4', description: 'MP4 video' },
    ],
    toFormats: [
      { value: 'png', label: 'PNG', ext: '.png', description: 'Compressed PNG' },
      { value: 'jpg', label: 'JPG', ext: '.jpg', description: 'Compressed JPG' },
      { value: 'webp', label: 'WebP', ext: '.webp', description: 'Compressed WebP' },
      { value: 'gif', label: 'GIF', ext: '.gif', description: 'Compressed GIF' },
      { value: 'mp4', label: 'MP4', ext: '.mp4', description: 'Compressed MP4' },
    ],
  },
  {
    id: 'audio',
    name: 'Audio',
    icon: 'headphones',
    description: 'Convert between audio formats',
    color: '#8B5CF6',
    fromFormats: [
      { value: 'mp3', label: 'MP3', ext: '.mp3', description: 'MPEG Audio Layer III — universal lossy audio format' },
      { value: 'wav', label: 'WAV', ext: '.wav', description: 'Waveform Audio — uncompressed lossless audio' },
      { value: 'aac', label: 'AAC', ext: '.aac', description: 'Advanced Audio Coding — efficient lossy format' },
      { value: 'ogg', label: 'OGG', ext: '.ogg', description: 'Ogg Vorbis — open-source lossy audio' },
      { value: 'flac', label: 'FLAC', ext: '.flac', description: 'Free Lossless Audio Codec — lossless compression' },
      { value: 'wma', label: 'WMA', ext: '.wma', description: 'Windows Media Audio — Microsoft audio format' },
      { value: 'm4a', label: 'M4A', ext: '.m4a', description: 'MPEG-4 Audio — Apple audio container' },
    ],
    toFormats: [
      { value: 'mp3', label: 'MP3', ext: '.mp3', description: 'MP3 audio' },
      { value: 'wav', label: 'WAV', ext: '.wav', description: 'WAV audio' },
      { value: 'aac', label: 'AAC', ext: '.aac', description: 'AAC audio' },
      { value: 'ogg', label: 'OGG', ext: '.ogg', description: 'OGG audio' },
      { value: 'flac', label: 'FLAC', ext: '.flac', description: 'FLAC audio' },
      { value: 'wma', label: 'WMA', ext: '.wma', description: 'WMA audio' },
      { value: 'm4a', label: 'M4A', ext: '.m4a', description: 'M4A audio' },
    ],
  },
];

export const popularConversions: PopularConversion[] = [
  { from: 'PNG', to: 'JPG', category: 'images', color: '#6C63FF', slug: 'png-to-jpg' },
  { from: 'JPG', to: 'PNG', category: 'images', color: '#6C63FF', slug: 'jpg-to-png' },
  { from: 'WebP', to: 'PNG', category: 'images', color: '#6C63FF', slug: 'webp-to-png' },
  { from: 'PNG', to: 'WebP', category: 'images', color: '#6C63FF', slug: 'png-to-webp' },
  { from: 'SVG', to: 'PNG', category: 'images', color: '#6C63FF', slug: 'svg-to-png' },
  { from: 'JPG', to: 'WebP', category: 'images', color: '#6C63FF', slug: 'jpg-to-webp' },
  { from: 'BMP', to: 'JPG', category: 'images', color: '#6C63FF', slug: 'bmp-to-jpg' },
  { from: 'GIF', to: 'PNG', category: 'images', color: '#6C63FF', slug: 'gif-to-png' },
  { from: 'TIFF', to: 'JPG', category: 'images', color: '#6C63FF', slug: 'tiff-to-jpg' },
  { from: 'PNG', to: 'ICO', category: 'images', color: '#6C63FF', slug: 'png-to-ico' },
  { from: 'WebP', to: 'JPG', category: 'images', color: '#6C63FF', slug: 'webp-to-jpg' },
  { from: 'PNG', to: 'SVG', category: 'images', color: '#6C63FF', slug: 'png-to-svg' },
  { from: 'MP4', to: 'WebM', category: 'video', color: '#F59E0B', slug: 'mp4-to-webm' },
  { from: 'AVI', to: 'MP4', category: 'video', color: '#F59E0B', slug: 'avi-to-mp4' },
  { from: 'MOV', to: 'MP4', category: 'video', color: '#F59E0B', slug: 'mov-to-mp4' },
  { from: 'MKV', to: 'MP4', category: 'video', color: '#F59E0B', slug: 'mkv-to-mp4' },
  { from: 'MP4', to: 'GIF', category: 'video', color: '#F59E0B', slug: 'mp4-to-gif' },
  { from: 'WebM', to: 'MP4', category: 'video', color: '#F59E0B', slug: 'webm-to-mp4' },
  { from: 'MP4', to: 'MP3', category: 'video-to-audio', color: '#10B981', slug: 'mp4-to-mp3' },
  { from: 'MP4', to: 'WAV', category: 'video-to-audio', color: '#10B981', slug: 'mp4-to-wav' },
  { from: 'MOV', to: 'MP3', category: 'video-to-audio', color: '#10B981', slug: 'mov-to-mp3' },
  { from: 'MKV', to: 'MP3', category: 'video-to-audio', color: '#10B981', slug: 'mkv-to-mp3' },
  { from: 'MP3', to: 'WAV', category: 'audio', color: '#8B5CF6', slug: 'mp3-to-wav' },
  { from: 'WAV', to: 'MP3', category: 'audio', color: '#8B5CF6', slug: 'wav-to-mp3' },
  { from: 'FLAC', to: 'MP3', category: 'audio', color: '#8B5CF6', slug: 'flac-to-mp3' },
  { from: 'M4A', to: 'MP3', category: 'audio', color: '#8B5CF6', slug: 'mp3-to-m4a' },
  { from: 'OGG', to: 'MP3', category: 'audio', color: '#8B5CF6', slug: 'ogg-to-mp3' },
  { from: 'AAC', to: 'MP3', category: 'audio', color: '#8B5CF6', slug: 'aac-to-mp3' },
];

// Generate all valid conversion slugs
export function getAllConversionSlugs(): string[] {
  const slugs: string[] = [];
  for (const cat of categories) {
    for (const from of cat.fromFormats) {
      for (const to of cat.toFormats) {
        if (from.value !== to.value) {
          slugs.push(`${from.value}-to-${to.value}`);
        }
      }
    }
  }
  // deduplicate
  return [...new Set(slugs)];
}

export function getConversionFromSlug(slug: string): { from: string; to: string; category: ConversionCategory } | null {
  const match = slug.match(/^(.+)-to-(.+)$/);
  if (!match) return null;
  const [, from, to] = match;

  for (const cat of categories) {
    const hasFrom = cat.fromFormats.some(f => f.value === from);
    const hasTo = cat.toFormats.some(f => f.value === to);
    if (hasFrom && hasTo) {
      return { from, to, category: cat };
    }
  }
  return null;
}

export function getFormatInfo(format: string): FormatOption | undefined {
  for (const cat of categories) {
    const found = cat.fromFormats.find(f => f.value === format) || cat.toFormats.find(f => f.value === format);
    if (found) return found;
  }
  return undefined;
}

export function getRelatedConversions(from: string, to: string): PopularConversion[] {
  return popularConversions
    .filter(c => (c.from.toLowerCase() === from || c.to.toLowerCase() === to) && c.slug !== `${from}-to-${to}`)
    .slice(0, 6);
}

export const API_URL = 'https://fileconverttool-api-production.up.railway.app';

// Freemium limits
export const PLANS = {
  free: {
    name: 'Free',
    price: 0,
    conversionsPerDay: 10,
    maxFileSize: 200 * 1024 * 1024, // 200MB
    maxFileSizeLabel: '200 MB',
    ads: true,
    priority: false,
    apiAccess: false,
    batchLimit: 1,
  },
  pro: {
    name: 'Pro',
    price: 4.99,
    conversionsPerDay: Infinity,
    maxFileSize: 500 * 1024 * 1024, // 500MB
    maxFileSizeLabel: '500 MB',
    ads: false,
    priority: true,
    apiAccess: false,
    batchLimit: 10,
  },
  business: {
    name: 'Business',
    price: 14.99,
    conversionsPerDay: Infinity,
    maxFileSize: 2 * 1024 * 1024 * 1024, // 2GB
    maxFileSizeLabel: '2 GB',
    ads: false,
    priority: true,
    apiAccess: true,
    batchLimit: 100,
  },
};
