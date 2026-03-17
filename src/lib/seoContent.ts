// src/lib/seoContent.ts

export interface ConverterSEO {
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  description: string;
  whyConvert: string;
  comparisonTable: { feature: string; from: string; to: string }[];
  howTo: string[];
  faqs: { question: string; answer: string }[];
}

const formatNames: Record<string, string> = {
  png: 'PNG', jpg: 'JPG', jpeg: 'JPEG', webp: 'WebP', gif: 'GIF', bmp: 'BMP',
  tiff: 'TIFF', ico: 'ICO', svg: 'SVG', mp4: 'MP4', webm: 'WebM', avi: 'AVI',
  mov: 'MOV', mkv: 'MKV', flv: 'FLV', wmv: 'WMV', mp3: 'MP3', wav: 'WAV',
  aac: 'AAC', ogg: 'OGG', flac: 'FLAC', wma: 'WMA', m4a: 'M4A',
};

const formatDescriptions: Record<string, string> = {
  png: 'a lossless raster image format that supports transparency. It is widely used for web graphics, screenshots, and digital art where image quality must be preserved without compression artifacts.',
  jpg: 'a lossy compressed image format designed for photographs and complex images. It achieves small file sizes by discarding some visual data, making it the standard choice for web photos and email attachments.',
  jpeg: 'the full name for JPG, a lossy compressed image format optimised for photographic content with millions of colours.',
  webp: 'a modern image format developed by Google that offers both lossy and lossless compression. WebP files are typically 25-35% smaller than equivalent JPG or PNG files, making it excellent for web performance.',
  gif: 'a legacy format supporting up to 256 colours, transparency, and simple animation. It remains popular for short animated clips and reaction images.',
  bmp: 'an uncompressed bitmap format native to Windows. BMP files are large but preserve every pixel exactly, making them useful for raw image data and simple editing.',
  tiff: 'a flexible, lossless format commonly used in professional photography, printing, and archival. TIFF supports layers, multiple pages, and high colour depths.',
  ico: 'a container format used for favicons and Windows application icons. ICO files can contain multiple image sizes and colour depths within a single file.',
  svg: 'an XML-based vector format that scales to any size without quality loss. SVG is ideal for logos, icons, illustrations, and any graphic that needs to look sharp on all screen sizes.',
  mp4: 'the most universally supported video container format, using H.264/H.265 codecs. MP4 offers an excellent balance of quality and file size and plays on virtually every device and platform.',
  webm: 'an open-source video format backed by Google, using VP8/VP9 codecs. WebM offers efficient compression for web streaming and is natively supported by most modern browsers.',
  avi: 'a classic multimedia container developed by Microsoft. AVI files tend to be larger than modern formats but offer broad compatibility with older software and devices.',
  mov: 'Apple\'s QuickTime container format, widely used in video production and editing. MOV supports high-quality codecs but has limited playback support outside Apple\'s ecosystem.',
  mkv: 'a flexible open-standard container that can hold virtually any codec, including subtitles and multiple audio tracks. MKV is favoured by media enthusiasts for its versatility.',
  flv: 'a legacy Flash Video format once dominant for web video streaming. FLV has been largely replaced by MP4 and WebM as Flash support has been discontinued.',
  wmv: 'a Windows Media Video format developed by Microsoft. WMV offers good compression but has limited cross-platform support outside Windows environments.',
  mp3: 'the most widely recognised lossy audio format. MP3 achieves significant file-size reduction while maintaining acceptable quality, making it the universal standard for music distribution.',
  wav: 'an uncompressed audio format that preserves full sound fidelity. WAV files are large but are the industry standard for audio editing, production, and archival.',
  aac: 'an advanced lossy audio codec that delivers better quality than MP3 at similar bitrates. AAC is the default audio format for Apple devices, YouTube, and many streaming services.',
  ogg: 'an open-source lossy audio format using Vorbis compression. OGG offers quality comparable to AAC and is popular in gaming, open-source software, and web applications.',
  flac: 'a lossless audio codec that compresses audio to roughly 50-60% of the original size without any quality loss. FLAC is preferred by audiophiles and music archivists.',
  wma: 'a Microsoft audio format offering both lossy and lossless compression. WMA was designed for Windows Media Player but has limited support on non-Windows platforms.',
  m4a: 'an Apple audio container typically using AAC encoding. M4A offers high quality at reasonable file sizes and is the default format for iTunes Store purchases.',
};

const formatTypes: Record<string, string> = {
  png: 'image', jpg: 'image', jpeg: 'image', webp: 'image', gif: 'image', bmp: 'image',
  tiff: 'image', ico: 'image', svg: 'vector', mp4: 'video', webm: 'video', avi: 'video',
  mov: 'video', mkv: 'video', flv: 'video', wmv: 'video', mp3: 'audio', wav: 'audio',
  aac: 'audio', ogg: 'audio', flac: 'audio', wma: 'audio', m4a: 'audio',
};

function getCompression(f: string): string {
  const lossless = ['png', 'bmp', 'tiff', 'wav', 'flac', 'svg'];
  const lossy = ['jpg', 'jpeg', 'mp3', 'aac', 'ogg', 'wma', 'm4a'];
  if (lossless.includes(f)) return 'Lossless';
  if (lossy.includes(f)) return 'Lossy';
  return 'Both options';
}

function getQuality(f: string): string {
  const high = ['png', 'tiff', 'bmp', 'wav', 'flac', 'svg'];
  if (high.includes(f)) return 'Maximum';
  return 'Good (adjustable)';
}

function getFileSize(f: string): string {
  const small = ['jpg', 'jpeg', 'webp', 'mp3', 'aac', 'ogg', 'wma', 'm4a'];
  const large = ['bmp', 'tiff', 'wav', 'flac', 'avi'];
  if (small.includes(f)) return 'Small';
  if (large.includes(f)) return 'Large';
  return 'Medium';
}

export function generateConverterSEO(from: string, to: string): ConverterSEO {
  const fromName = formatNames[from] || from.toUpperCase();
  const toName = formatNames[to] || to.toUpperCase();
  const fromDesc = formatDescriptions[from] || `a ${from.toUpperCase()} file`;
  const toDesc = formatDescriptions[to] || `a ${to.toUpperCase()} file`;
  const fromType = formatTypes[from] || 'file';
  const toType = formatTypes[to] || 'file';
  const year = new Date().getFullYear();

  return {
    title: `${fromName} to ${toName} Converter`,
    metaTitle: `Convert ${fromName} to ${toName} Free Online — FileConvertTool ${year}`,
    metaDescription: `Convert ${fromName} to ${toName} online for free. No sign-up, no watermarks, instant conversion. Drag & drop your ${fromName} file and download the ${toName} result in seconds.`,
    h1: `Convert ${fromName} to ${toName} Online — Free & Instant`,
    description: `Need to convert a ${fromName} file to ${toName}? FileConvertTool makes it effortless. Simply upload your ${fromName} file, and our converter will transform it into a high-quality ${toName} file in seconds — completely free, with no registration required.\n\n${fromName} is ${fromDesc}\n\n${toName} is ${toDesc}\n\nOur cloud-based converter handles the heavy lifting server-side, so it works on any device — desktop, tablet, or mobile — without installing any software. Your files are processed securely and automatically deleted after conversion.`,
    whyConvert: `There are many reasons you might need to convert ${fromName} to ${toName}:\n\n• **Compatibility** — ${toName} may be required by a specific platform, application, or device that doesn't support ${fromName} files natively.\n• **File size** — Converting from ${fromName} to ${toName} can ${getFileSize(to) === 'Small' ? 'significantly reduce' : 'help optimise'} your file size ${getFileSize(to) === 'Small' ? ', saving storage space and bandwidth' : 'for your specific use case'}.\n• **Web performance** — ${toType === 'image' || toType === 'video' ? `${toName} files are ${getFileSize(to) === 'Small' ? 'lighter and load faster on websites' : 'well-suited for online use'}` : `${toName} is widely supported for streaming and playback`}.\n• **Quality requirements** — ${getCompression(to) === 'Lossless' ? `${toName} preserves full quality with lossless compression, ideal for archival and professional work` : `${toName} offers an excellent balance of quality and file size for everyday use`}.\n• **Sharing** — ${toName} files are universally recognised and easy to share via email, messaging apps, and cloud storage services.`,
    comparisonTable: [
      { feature: 'Format Type', from: fromType.charAt(0).toUpperCase() + fromType.slice(1), to: toType.charAt(0).toUpperCase() + toType.slice(1) },
      { feature: 'Compression', from: getCompression(from), to: getCompression(to) },
      { feature: 'Quality', from: getQuality(from), to: getQuality(to) },
      { feature: 'Typical File Size', from: getFileSize(from), to: getFileSize(to) },
      { feature: 'Web Support', from: ['jpg', 'png', 'webp', 'gif', 'svg', 'mp4', 'webm', 'mp3', 'aac', 'ogg'].includes(from) ? 'Excellent' : 'Limited', to: ['jpg', 'png', 'webp', 'gif', 'svg', 'mp4', 'webm', 'mp3', 'aac', 'ogg'].includes(to) ? 'Excellent' : 'Limited' },
      { feature: 'Transparency', from: ['png', 'webp', 'gif', 'svg', 'tiff'].includes(from) ? 'Yes' : 'No', to: ['png', 'webp', 'gif', 'svg', 'tiff'].includes(to) ? 'Yes' : 'No' },
    ],
    howTo: [
      `Click "Choose File" or drag and drop your ${fromName} file into the upload area.`,
      `The converter is pre-set to ${fromName} → ${toName}. Adjust settings if needed.`,
      `Click "Convert" and wait a few seconds for processing to complete.`,
      `Download your converted ${toName} file — it's ready to use immediately.`,
    ],
    faqs: [
      {
        question: `Is it free to convert ${fromName} to ${toName}?`,
        answer: `Yes, FileConvertTool offers free ${fromName} to ${toName} conversion. Free users get 10 conversions per day with files up to 200 MB. For unlimited conversions and larger files, check out our Pro and Business plans.`,
      },
      {
        question: `Will I lose quality converting ${fromName} to ${toName}?`,
        answer: getCompression(to) === 'Lossless'
          ? `No. ${toName} uses lossless compression, so your converted file will retain full quality with no data loss.`
          : `${toName} uses lossy compression, so there is a small reduction in quality. However, our converter is optimised to preserve maximum visual fidelity while achieving efficient file sizes. For most use cases the difference is imperceptible.`,
      },
      {
        question: `How long does ${fromName} to ${toName} conversion take?`,
        answer: `Most conversions complete in under 10 seconds. Larger files or video conversions may take a bit longer depending on file size and complexity.`,
      },
      {
        question: `Is my file safe during conversion?`,
        answer: `Absolutely. All files are processed securely on our servers using encrypted connections. Uploaded files are automatically deleted after conversion — we never store, share, or access your content.`,
      },
      {
        question: `Can I convert ${fromName} to ${toName} on my phone?`,
        answer: `Yes! FileConvertTool is fully responsive and works on any device — iPhone, Android, tablet, or desktop. No app installation needed; just use your web browser.`,
      },
      {
        question: `What is the maximum file size I can convert?`,
        answer: `Free users can convert files up to 200 MB. Pro subscribers get a 500 MB limit, and Business plan users can convert files up to 2 GB.`,
      },
    ],
  };
}
