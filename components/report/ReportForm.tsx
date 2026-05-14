import type { DailyReportData } from '@/lib/report/types'

type ReportFormProps = {
  data: DailyReportData
  onChange: (field: keyof DailyReportData, value: string) => void
}

export default function ReportForm({ data, onChange }: ReportFormProps) {
  return (
    <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'>
      <div className='mb-6'>
        <p className='text-sm font-semibold uppercase tracking-wide text-blue-600'>
          Report form
        </p>
        <h2 className='mt-2 text-2xl font-bold text-slate-950'>
          Report details
        </h2>
        <p className='mt-2 text-sm leading-6 text-slate-600'>
          Start with the basic information for your daily report.
        </p>
      </div>

      <div className='grid gap-4 md:grid-cols-2'>
        <div>
          <label className='mb-2 block text-sm font-medium text-slate-700'>
            Project / Site name
          </label>
          <input
            type='text'
            value={data.projectName}
            onChange={(event) => onChange('projectName', event.target.value)}
            placeholder='Example: Plant Maintenance Area 2'
            className='w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100'
          />
        </div>

        <div>
          <label className='mb-2 block text-sm font-medium text-slate-700'>
            Company
          </label>
          <input
            type='text'
            value={data.company}
            onChange={(event) => onChange('company', event.target.value)}
            placeholder='Example: ABC Contractors'
            className='w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100'
          />
        </div>

        <div>
          <label className='mb-2 block text-sm font-medium text-slate-700'>
            Location
          </label>
          <input
            type='text'
            value={data.location}
            onChange={(event) => onChange('location', event.target.value)}
            placeholder='Example: Mine Site / Building / Area'
            className='w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100'
          />
        </div>

        <div>
          <label className='mb-2 block text-sm font-medium text-slate-700'>
            Report date
          </label>
          <input
            type='date'
            value={data.reportDate}
            onChange={(event) => onChange('reportDate', event.target.value)}
            className='w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100'
          />
        </div>

        <div>
          <label className='mb-2 block text-sm font-medium text-slate-700'>
            Shift
          </label>
          <select
            value={data.shift}
            onChange={(event) => onChange('shift', event.target.value)}
            className='w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100'
          >
            <option>Day Shift</option>
            <option>Night Shift</option>
          </select>
        </div>

        <div>
          <label className='mb-2 block text-sm font-medium text-slate-700'>
            Supervisor
          </label>
          <input
            type='text'
            value={data.supervisor}
            onChange={(event) => onChange('supervisor', event.target.value)}
            placeholder='Example: John Smith'
            className='w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100'
          />
        </div>
      </div>

      <div className='mt-8 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-5'>
        <h3 className='text-base font-semibold text-slate-950'>Next step</h3>
        <p className='mt-2 text-sm leading-6 text-slate-600'>
          In the next step we will add the daily summary, activities table,
          safety section and automatic KPI calculations.
        </p>
      </div>
    </div>
  )
}
