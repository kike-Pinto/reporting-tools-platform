type FaqItem = {
  question: string
  answer: string
}

type FaqSchemaProps = {
  faqs: FaqItem[]
}

export default function FaqSchema({ faqs }: FaqSchemaProps) {
  if (faqs.length === 0) {
    return null
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
      }}
    />
  )
}
