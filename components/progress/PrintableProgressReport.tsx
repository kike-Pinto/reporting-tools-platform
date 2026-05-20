import {
  calculateAverageActualProgress,
  calculateAveragePlannedProgress,
  calculateCompletedActivities,
  calculateDelayedActivities,
  buildReportingPeriod,
} from '@/lib/progress/calculations'
import type { ProgressReportData } from '@/lib/progress/types'

type PrintableProgressReportProps = {
  data: ProgressReportData
}

function showValue(value: string, fallback: string) {
  return value.trim() ? value : fallback
}

export default function PrintableProgressReport({
  data,
}: PrintableProgressReportProps) {
  const plannedProgress = calculateAveragePlannedProgress(data)
  const actualProgress = calculateAverageActualProgress(data)
  const completedActivities = calculateCompletedActivities(data)
  const delayedActivities = calculateDelayedActivities(data)

  return (
    <div className='print-document'>
      <header className='print-header'>
        <div>
          <p className='print-eyebrow'>Reporting Tools Platform</p>
          <h1>Progress Report</h1>
          <p className='print-subtitle'>
            Project progress and performance summary
          </p>
        </div>

        <div className='print-date-box'>
          <p>Report Date</p>
          <strong>{showValue(data.reportDate, 'Not specified')}</strong>
        </div>
      </header>

      <section className='print-section'>
        <h2>Project Details</h2>

        <div className='print-details'>
          <div>
            <span>Project</span>
            <strong>{showValue(data.projectName, 'Not specified')}</strong>
          </div>

          <div>
            <span>Client</span>
            <strong>{showValue(data.client, 'Not specified')}</strong>
          </div>

          <div>
            <span>Location</span>
            <strong>{showValue(data.location, 'Not specified')}</strong>
          </div>

          <div>
            <span>Reporting Period</span>
            <strong>
              {buildReportingPeriod(data.periodStartDate, data.periodEndDate)}
            </strong>
          </div>

          <div>
            <span>Project Manager</span>
            <strong>{showValue(data.projectManager, 'Not specified')}</strong>
          </div>
        </div>
      </section>

      <section className='print-kpis'>
        <div>
          <span>Planned Progress</span>
          <strong>{plannedProgress}%</strong>
        </div>

        <div>
          <span>Actual Progress</span>
          <strong>{actualProgress}%</strong>
        </div>

        <div>
          <span>Completed</span>
          <strong>{completedActivities}</strong>
        </div>

        <div>
          <span>Delayed</span>
          <strong>{delayedActivities}</strong>
        </div>
      </section>

      <section className='print-section'>
        <h2>Executive Summary</h2>
        <p>{showValue(data.executiveSummary, 'No executive summary added.')}</p>
      </section>

      <section className='print-section'>
        <h2>Key Achievements</h2>
        <p>{showValue(data.keyAchievements, 'No key achievements added.')}</p>
      </section>

      <section className='print-section'>
        <h2>Progress Activities</h2>

        {data.activities.length === 0 ? (
          <p>No progress activities added.</p>
        ) : (
          <table className='print-table'>
            <thead>
              <tr>
                <th>Activity</th>
                <th>Area</th>
                <th>Owner</th>
                <th>Planned</th>
                <th>Actual</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {data.activities.map((activity) => (
                <tr key={activity.id}>
                  <td>{showValue(activity.description, 'Not specified')}</td>
                  <td>{showValue(activity.area, 'Not specified')}</td>
                  <td>{showValue(activity.owner, 'Not specified')}</td>
                  <td>{activity.plannedProgress}%</td>
                  <td>{activity.actualProgress}%</td>
                  <td>{activity.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>

      <section className='print-section'>
        <h2>Issues and Delays</h2>
        <p>{showValue(data.issuesAndDelays, 'No issues or delays added.')}</p>
      </section>

      <section className='print-section'>
        <h2>Next Steps</h2>
        <p>{showValue(data.nextSteps, 'No next steps added.')}</p>

        <p className='print-generated-note'>
          Generated with Reporting Tools Platform
        </p>
      </section>
    </div>
  )
}
