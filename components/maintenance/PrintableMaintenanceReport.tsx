import {
  calculateCompletedTasks,
  calculatePartsUsed,
  calculateTotalHours,
} from '@/lib/maintenance/calculations'
import type { MaintenanceReportData } from '@/lib/maintenance/types'

type PrintableMaintenanceReportProps = {
  data: MaintenanceReportData
}

function showValue(value: string, fallback: string) {
  return value.trim() ? value : fallback
}

export default function PrintableMaintenanceReport({
  data,
}: PrintableMaintenanceReportProps) {
  const totalHours = calculateTotalHours(data)
  const completedTasks = calculateCompletedTasks(data)
  const partsUsed = calculatePartsUsed(data)

  return (
    <div className='print-document'>
      <header className='print-header'>
        <div>
          <p className='print-eyebrow'>Reporting Tools Platform</p>
          <h1>Maintenance Report</h1>
          <p className='print-subtitle'>
            Equipment maintenance and service document
          </p>
        </div>

        <div className='print-date-box'>
          <p>Report Date</p>
          <strong>{showValue(data.reportDate, 'Not specified')}</strong>
        </div>
      </header>

      <section className='print-section'>
        <h2>Equipment Details</h2>

        <div className='print-details'>
          <div>
            <span>Equipment</span>
            <strong>{showValue(data.equipmentName, 'Not specified')}</strong>
          </div>

          <div>
            <span>Equipment ID</span>
            <strong>{showValue(data.equipmentId, 'Not specified')}</strong>
          </div>

          <div>
            <span>Location</span>
            <strong>{showValue(data.location, 'Not specified')}</strong>
          </div>

          <div>
            <span>Maintenance Type</span>
            <strong>{data.maintenanceType}</strong>
          </div>

          <div>
            <span>Supervisor</span>
            <strong>{showValue(data.supervisor, 'Not specified')}</strong>
          </div>
        </div>
      </section>

      <section className='print-kpis'>
        <div>
          <span>Total Hours</span>
          <strong>{totalHours}</strong>
        </div>

        <div>
          <span>Tasks</span>
          <strong>{data.tasks.length}</strong>
        </div>

        <div>
          <span>Completed</span>
          <strong>{completedTasks}</strong>
        </div>

        <div>
          <span>Parts Used</span>
          <strong>{partsUsed}</strong>
        </div>
      </section>

      <section className='print-section'>
        <h2>Work Summary</h2>
        <p>{showValue(data.workSummary, 'No work summary added.')}</p>
      </section>

      <section className='print-section'>
        <h2>Findings</h2>
        <p>{showValue(data.findings, 'No findings added.')}</p>
      </section>

      <section className='print-section'>
        <h2>Maintenance Tasks</h2>

        {data.tasks.length === 0 ? (
          <p>No maintenance tasks added.</p>
        ) : (
          <table className='print-table'>
            <thead>
              <tr>
                <th>Description</th>
                <th>Area</th>
                <th>Technician</th>
                <th>Hours</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {data.tasks.map((task) => (
                <tr key={task.id}>
                  <td>{showValue(task.description, 'Not specified')}</td>
                  <td>{showValue(task.area, 'Not specified')}</td>
                  <td>{showValue(task.technician, 'Not specified')}</td>
                  <td>{task.hours}</td>
                  <td>{task.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>

      <section className='print-section'>
        <h2>Parts / Materials Used</h2>

        {data.parts.length === 0 ? (
          <p>No parts or materials added.</p>
        ) : (
          <table className='print-table'>
            <thead>
              <tr>
                <th>Part / Material</th>
                <th>Quantity</th>
                <th>Notes</th>
              </tr>
            </thead>

            <tbody>
              {data.parts.map((part) => (
                <tr key={part.id}>
                  <td>{showValue(part.name, 'Not specified')}</td>
                  <td>{part.quantity}</td>
                  <td>{showValue(part.notes, 'No notes')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>

      <section className='print-section'>
        <h2>Recommendations</h2>
        <p>{showValue(data.recommendations, 'No recommendations added.')}</p>

        <p className='print-generated-note'>
          Generated with Reporting Tools Platform
        </p>
      </section>
    </div>
  )
}
