type SoftwareSchemaProps = {
  name: string
  description: string
  url: string
  featureList: string[]
  applicationCategory?: string
}

export default function SoftwareSchema({
  name,
  description,
  url,
  featureList,
  applicationCategory = 'BusinessApplication',
}: SoftwareSchemaProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name,
    description,
    url,
    applicationCategory,
    operatingSystem: 'Any',
    browserRequirements: 'Requires a modern web browser',
    isAccessibleForFree: true,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    featureList,
    publisher: {
      '@type': 'Organization',
      name: 'Reporting Tools Platform',
      url: 'https://reporting-tools-platform.vercel.app',
    },
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
