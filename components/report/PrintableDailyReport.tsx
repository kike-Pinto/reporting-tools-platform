import {
  calculateAverageProgress,
  calculateCompletedActivities,
  calculateTotalManHours,
} from '@/lib/report/calculations'
import type { DailyReportData } from '@/lib/report/types'

type PrintableDailyReportProps = {
  data: DailyReportData
}

function showValue(value: string, fallback: string) {
  return value.trim() ? value : fallback
}

export default function PrintableDailyReport({
  data,
}: PrintableDailyReportProps) {
  const totalManHours = calculateTotalManHours(data)
  const averageProgress = calculateAverageProgress(data)
  const completedActivities = calculateCompletedActivities(data)

  return (
    <div className='print-document'>
      <header className='print-header'>
        <div>
          <p className='print-eyebrow'>Reporting Tools Platform</p>
          <h1>Daily Report</h1>
          <p className='print-subtitle'>
            Professional operational shift report
          </p>
        </div>

        <div className='print-date-box'>
          <p>Report Date</p>
          <strong>{showValue(data.reportDate, 'Not specified')}</strong>
        </div>
      </header>

      <section className='print-section'>
        <h2>Report Details</h2>

        <div className='print-details'>
          <div>
            <span>Project</span>
            <strong>{showValue(data.projectName, 'Not specified')}</strong>
          </div>

          <div>
            <span>Company</span>
            <strong>{showValue(data.company, 'Not specified')}</strong>
          </div>

          <div>
            <span>Location</span>
            <strong>{showValue(data.location, 'Not specified')}</strong>
          </div>

          <div>
            <span>Shift</span>
            <strong>{data.shift}</strong>
          </div>

          <div>
            <span>Supervisor</span>
            <strong>{showValue(data.supervisor, 'Not specified')}</strong>
          </div>
        </div>
      </section>

      <section className='print-kpis'>
        <div>
          <span>Total HH</span>
          <strong>{totalManHours}</strong>
        </div>
        <div>
          <span>Progress</span>
          <strong>{averageProgress}%</strong>
        </div>
        <div>
          <span>Activities</span>
          <strong>{data.activities.length}</strong>
        </div>
        <div>
          <span>Completed</span>
          <strong>{completedActivities}</strong>
        </div>
      </section>

      <section className='print-section'>
        <h2>Daily Summary</h2>
        <p>{showValue(data.dailySummary, 'No daily summary added.')}</p>
      </section>

      <section className='print-section'>
        <h2>Activities Performed</h2>

        {data.activities.length === 0 ? (
          <p>No activities added.</p>
        ) : (
          <table className='print-table'>
            <thead>
              <tr>
                <th>Activity</th>
                <th>Area</th>
                <th>Status</th>
                <th>Workers</th>
                <th>Hours</th>
                <th>Progress</th>
              </tr>
            </thead>
            <tbody>
              {data.activities.map((activity) => (
                <tr key={activity.id}>
                  <td>{showValue(activity.description, 'Not specified')}</td>
                  <td>{showValue(activity.area, 'Not specified')}</td>
                  <td>{activity.status}</td>
                  <td>{activity.workers}</td>
                  <td>{activity.hours}</td>
                  <td>{activity.progress}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>

      <section className='print-section'>
        <h2>Safety / Incidents</h2>
        <p>
          <strong>Status:</strong>{' '}
          {data.incidentReported ? 'Incident reported' : 'No incident reported'}
        </p>
        <p>
          {showValue(
            data.incidentDetails,
            'No incident details or safety observations added.',
          )}
        </p>
      </section>

      <section className='print-section'>
        <h2>Observations</h2>
        <p>{showValue(data.observations, 'No observations added.')}</p>
      </section>

      <section className='print-section'>
        <h2>Pending Tasks</h2>
        <p>{showValue(data.pendingTasks, 'No pending tasks added.')}</p>
      </section>

      <footer className='print-footer'>
        Generated with Reporting Tools Platform
      </footer>
    </div>
  )
}
