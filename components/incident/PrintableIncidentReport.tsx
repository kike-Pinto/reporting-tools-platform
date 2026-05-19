import {
  calculateClosedActions,
  calculateCorrectiveActions,
  calculateOpenActions,
} from '@/lib/incident/calculations'
import type { IncidentReportData } from '@/lib/incident/types'

type PrintableIncidentReportProps = {
  data: IncidentReportData
}

function showValue(value: string, fallback: string) {
  return value.trim() ? value : fallback
}

export default function PrintableIncidentReport({
  data,
}: PrintableIncidentReportProps) {
  const totalActions = calculateCorrectiveActions(data)
  const openActions = calculateOpenActions(data)
  const closedActions = calculateClosedActions(data)

  return (
    <div className='print-document'>
      <header className='print-header'>
        <div>
          <p className='print-eyebrow'>Reporting Tools Platform</p>
          <h1>Incident Report</h1>
          <p className='print-subtitle'>
            Safety incident and corrective action document
          </p>
        </div>

        <div className='print-date-box'>
          <p>Incident Date</p>
          <strong>{showValue(data.incidentDate, 'Not specified')}</strong>
        </div>
      </header>

      <section className='print-section'>
        <h2>Incident Details</h2>

        <div className='print-details'>
          <div>
            <span>Incident Title</span>
            <strong>{showValue(data.incidentTitle, 'Not specified')}</strong>
          </div>

          <div>
            <span>Type</span>
            <strong>{data.incidentType}</strong>
          </div>

          <div>
            <span>Severity</span>
            <strong>{data.severity}</strong>
          </div>

          <div>
            <span>Status</span>
            <strong>{data.status}</strong>
          </div>

          <div>
            <span>Location</span>
            <strong>{showValue(data.location, 'Not specified')}</strong>
          </div>

          <div>
            <span>Reported By</span>
            <strong>{showValue(data.reportedBy, 'Not specified')}</strong>
          </div>

          <div>
            <span>Supervisor</span>
            <strong>{showValue(data.supervisor, 'Not specified')}</strong>
          </div>
        </div>
      </section>

      <section className='print-kpis'>
        <div>
          <span>Corrective Actions</span>
          <strong>{totalActions}</strong>
        </div>

        <div>
          <span>Open Actions</span>
          <strong>{openActions}</strong>
        </div>

        <div>
          <span>Closed Actions</span>
          <strong>{closedActions}</strong>
        </div>

        <div>
          <span>Severity</span>
          <strong>{data.severity}</strong>
        </div>
      </section>

      <section className='print-section'>
        <h2>Incident Description</h2>
        <p>
          {showValue(
            data.incidentDescription,
            'No incident description added.',
          )}
        </p>
      </section>

      <section className='print-section'>
        <h2>Immediate Actions Taken</h2>
        <p>{showValue(data.immediateActions, 'No immediate actions added.')}</p>
      </section>

      <section className='print-section'>
        <h2>Root Cause / Contributing Factors</h2>
        <p>{showValue(data.rootCause, 'No root cause information added.')}</p>
      </section>

      <section className='print-section'>
        <h2>Corrective Actions</h2>

        {data.correctiveActions.length === 0 ? (
          <p>No corrective actions added.</p>
        ) : (
          <table className='print-table'>
            <thead>
              <tr>
                <th>Description</th>
                <th>Responsible</th>
                <th>Due Date</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {data.correctiveActions.map((action) => (
                <tr key={action.id}>
                  <td>{showValue(action.description, 'Not specified')}</td>
                  <td>{showValue(action.responsible, 'Not specified')}</td>
                  <td>{showValue(action.dueDate, 'Not specified')}</td>
                  <td>{action.status}</td>
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
