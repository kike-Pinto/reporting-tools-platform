import Link from 'next/link'

import { guides, type GuideCategory } from '@/lib/guides'

type RelatedGuidesProps = {
  currentHref: string
  category: GuideCategory
  title?: string
  limit?: number
}

const categoryStyles: Record<
  GuideCategory,
  {
    icon: string
    iconClasses: string
    labelClasses: string
    linkClasses: string
    hoverClasses: string
  }
> = {
  'Daily Reports': {
    icon: 'DR',
    iconClasses: 'bg-blue-600 text-white',
    labelClasses: 'text-blue-600',
    linkClasses: 'text-blue-700 group-hover:text-blue-900',
    hoverClasses: 'hover:border-blue-200 hover:bg-blue-50',
  },
  'Maintenance Reports': {
    icon: 'MR',
    iconClasses: 'bg-amber-500 text-white',
    labelClasses: 'text-amber-600',
    linkClasses: 'text-amber-700 group-hover:text-amber-900',
    hoverClasses: 'hover:border-amber-200 hover:bg-amber-50',
  },
  'Incident Reports': {
    icon: 'IR',
    iconClasses: 'bg-red-500 text-white',
    labelClasses: 'text-red-600',
    linkClasses: 'text-red-700 group-hover:text-red-900',
    hoverClasses: 'hover:border-red-200 hover:bg-red-50',
  },
  'Progress Reports': {
    icon: 'PR',
    iconClasses: 'bg-emerald-600 text-white',
    labelClasses: 'text-emerald-600',
    linkClasses: 'text-emerald-700 group-hover:text-emerald-900',
    hoverClasses: 'hover:border-emerald-200 hover:bg-emerald-50',
  },
  'Shift Handover': {
    icon: 'SH',
    iconClasses: 'bg-violet-600 text-white',
    labelClasses: 'text-violet-600',
    linkClasses: 'text-violet-700 group-hover:text-violet-900',
    hoverClasses: 'hover:border-violet-200 hover:bg-violet-50',
  },
}

export default function RelatedGuides({
  currentHref,
  category,
  title = 'Related guides',
  limit = 4,
}: RelatedGuidesProps) {
  const relatedGuides = guides
    .filter(
      (guide) =>
        guide.category === category &&
        guide.href !== currentHref &&
        guide.status === 'Available',
    )
    .slice(0, limit)

  const styles = categoryStyles[category]

  if (relatedGuides.length === 0) {
    return null
  }

  return (
    <section className='mt-14'>
      <div className='flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between'>
        <div>
          <p
            className={`text-sm font-semibold uppercase tracking-[0.18em] ${styles.labelClasses}`}
          >
            Continue learning
          </p>

          <h2 className='mt-3 text-3xl font-bold text-slate-950'>{title}</h2>
        </div>

        <Link
          href={getCategoryHub(category)}
          className={`inline-flex w-fit items-center text-sm font-semibold transition ${styles.linkClasses}`}
        >
          Explore the complete category →
        </Link>
      </div>

      <div className='mt-6 grid gap-4 sm:grid-cols-2'>
        {relatedGuides.map((guide) => (
          <Link
            key={guide.href}
            href={guide.href}
            className={`group flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50 p-5 transition ${styles.hoverClasses}`}
          >
            <div className='flex items-start gap-4'>
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-xs font-bold ${styles.iconClasses}`}
              >
                {styles.icon}
              </div>

              <div>
                <p className='font-semibold text-slate-950'>{guide.title}</p>

                <p className='mt-2 text-sm leading-6 text-slate-600'>
                  {guide.description}
                </p>
              </div>
            </div>

            <span
              className={`mt-5 inline-flex items-center text-sm font-semibold transition ${styles.linkClasses}`}
            >
              Read guide →
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}

function getCategoryHub(category: GuideCategory) {
  const categoryHubs: Record<GuideCategory, string> = {
    'Daily Reports': '/guides/daily-reports',
    'Maintenance Reports': '/guides/maintenance-reports',
    'Incident Reports': '/guides/incident-reports',
    'Progress Reports': '/guides/progress-reports',
    'Shift Handover': '/guides/shift-handover',
  }

  return categoryHubs[category]
}
