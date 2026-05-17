import {
  calculateCriticalItems,
  calculateIncidents,
  calculatePendingTasks,
} from '@/lib/handover/calculations'
import type { ShiftHandoverData } from '@/lib/handover/types'

type PrintableHandoverReportProps = {
  data: ShiftHandoverData
}

function showValue(value: string, fallback: string) {
  return value.trim() ? value : fallback
}

export default function PrintableHandoverReport({
  data,
}: PrintableHandoverReportProps) {
  const pendingTasks = calculatePendingTasks(data)
  const incidents = calculateIncidents(data)
  const criticalItems = calculateCriticalItems(data)

  return (
    <div className='print-document'>
      <header className='print-header'>
        <div>
          <p className='print-eyebrow'>Reporting Tools Platform</p>
          <h1>Shift Handover Report</h1>
          <p className='print-subtitle'>
            Operational shift continuity document
          </p>
        </div>

        <div className='print-date-box'>
          <p>Handover Date</p>
          <strong>{showValue(data.handoverDate, 'Not specified')}</strong>
        </div>
      </header>

      <section className='print-section'>
        <h2>Handover Details</h2>

        <div className='print-details'>
          <div>
            <span>Site / Project</span>
            <strong>{showValue(data.siteName, 'Not specified')}</strong>
          </div>

          <div>
            <span>Location</span>
            <strong>{showValue(data.location, 'Not specified')}</strong>
          </div>

          <div>
            <span>Outgoing Shift</span>
            <strong>{data.outgoingShift}</strong>
          </div>

          <div>
            <span>Incoming Shift</span>
            <strong>{data.incomingShift}</strong>
          </div>

          <div>
            <span>Outgoing Supervisor</span>
            <strong>
              {showValue(data.outgoingSupervisor, 'Not specified')}
            </strong>
          </div>

          <div>
            <span>Incoming Supervisor</span>
            <strong>
              {showValue(data.incomingSupervisor, 'Not specified')}
            </strong>
          </div>
        </div>
      </section>

      <section className='print-kpis'>
        <div>
          <span>Pending Tasks</span>
          <strong>{pendingTasks}</strong>
        </div>

        <div>
          <span>Incidents</span>
          <strong>{incidents}</strong>
        </div>

        <div>
          <span>Critical Items</span>
          <strong>{criticalItems}</strong>
        </div>

        <div>
          <span>Total Items</span>
          <strong>{pendingTasks + incidents}</strong>
        </div>
      </section>

      <section className='print-section'>
        <h2>Work Completed</h2>
        <p>{showValue(data.workCompleted, 'No work completed added.')}</p>
      </section>

      <section className='print-section'>
        <h2>Equipment Status</h2>
        <p>{showValue(data.equipmentStatus, 'No equipment status added.')}</p>
      </section>

      <PrintableItems
        title='Pending Tasks'
        items={data.pendingTasks}
        emptyText='No pending tasks added.'
      />

      <PrintableItems
        title='Incidents / Risks'
        items={data.incidents}
        emptyText='No incidents or risks added.'
      />

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

function PrintableItems({
  title,
  items,
  emptyText,
}: {
  title: string
  items: ShiftHandoverData['pendingTasks']
  emptyText: string
}) {
  return (
    <section className='print-section'>
      <h2>{title}</h2>

      {items.length === 0 ? (
        <p>{emptyText}</p>
      ) : (
        <table className='print-table'>
          <thead>
            <tr>
              <th>Description</th>
              <th>Area</th>
              <th>Status</th>
              <th>Priority</th>
            </tr>
          </thead>

          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{showValue(item.description, 'Not specified')}</td>
                <td>{showValue(item.area, 'Not specified')}</td>
                <td>{item.status}</td>
                <td>{item.priority}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  )
}
