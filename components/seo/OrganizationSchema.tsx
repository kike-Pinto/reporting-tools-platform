export default function OrganizationSchema() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Reporting Tools Platform',
    url: 'https://reporting-tools-platform.vercel.app',
    logo: 'https://reporting-tools-platform.vercel.app/icon.svg',
    description:
      'Browser-based reporting tools for daily reports, shift handovers, maintenance reports, incident reports and project progress reports.',
    sameAs: [
      'https://github.com/kike-Pinto/reporting-tools-platform',
      'https://kike-pinto.github.io/reporting-tools-platform-site/',
    ],
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
