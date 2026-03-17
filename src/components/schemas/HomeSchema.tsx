// src/components/schemas/HomeSchema.tsx

export function HomeSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'FileConvertTool',
    url: 'https://www.fileconverttool.com',
    description: 'Free online file converter for images, videos, and audio files. Convert PNG, JPG, WebP, MP4, MP3, WAV, and 30+ formats instantly.',
    applicationCategory: 'MultimediaApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '2450',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// src/components/schemas/ConverterSchema.tsx
export function ConverterSchema({ from, to, faqs }: { from: string; to: string; faqs: { question: string; answer: string }[] }) {
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How to Convert ${from.toUpperCase()} to ${to.toUpperCase()}`,
    description: `Step-by-step guide to convert ${from.toUpperCase()} files to ${to.toUpperCase()} format online for free.`,
    step: [
      { '@type': 'HowToStep', text: `Upload your ${from.toUpperCase()} file by clicking the upload area or dragging and dropping.` },
      { '@type': 'HowToStep', text: `Select ${to.toUpperCase()} as the output format.` },
      { '@type': 'HowToStep', text: 'Click Convert and wait for processing to complete.' },
      { '@type': 'HowToStep', text: `Download your converted ${to.toUpperCase()} file.` },
    ],
    tool: { '@type': 'HowToTool', name: 'FileConvertTool' },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}

export function FAQSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
