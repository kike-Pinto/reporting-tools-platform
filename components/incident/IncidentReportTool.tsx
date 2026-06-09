'use client'

import { useState } from 'react'

import IncidentForm from './IncidentForm'
import IncidentPreview from './IncidentPreview'
import PrintableIncidentReport from './PrintableIncidentReport'

import type { CorrectiveAction, IncidentReportData } from '@/lib/incident/types'

const initialIncidentData: IncidentReportData = {
  incidentTitle: '',
  incidentType: 'Safety Incident',
  severity: 'Medium',
  status: 'Open',

  incidentDate: '',
  location: '',
  reportedBy: '',
  supervisor: '',

  incidentDescription: '',
  immediateActions: '',
  rootCause: '',
  recommendations: '',

  correctiveActions: [],
}

export default function IncidentReportTool() {
  const [incidentData, setIncidentData] =
    useState<IncidentReportData>(initialIncidentData)

  function updateIncidentData(field: keyof IncidentReportData, value: string) {
    setIncidentData((currentData) => ({
      ...currentData,
      [field]: value,
    }))
  }

  function addCorrectiveAction() {
    const newAction: CorrectiveAction = {
      id: crypto.randomUUID(),
      description: '',
      responsible: '',
      dueDate: '',
      status: 'Open',
    }

    setIncidentData((currentData) => ({
      ...currentData,
      correctiveActions: [...currentData.correctiveActions, newAction],
    }))
  }

  function updateCorrectiveAction(
    actionId: string,
    field: keyof CorrectiveAction,
    value: string,
  ) {
    setIncidentData((currentData) => ({
      ...currentData,
      correctiveActions: currentData.correctiveActions.map((action) =>
        action.id === actionId ? { ...action, [field]: value } : action,
      ),
    }))
  }

  function removeCorrectiveAction(actionId: string) {
    setIncidentData((currentData) => ({
      ...currentData,
      correctiveActions: currentData.correctiveActions.filter(
        (action) => action.id !== actionId,
      ),
    }))
  }

  function clearForm() {
    setIncidentData(initialIncidentData)
  }

  return (
    <section
      id='report-tool'
      className='mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8'
    >
      <div className='screen-tool grid gap-6 lg:grid-cols-[1.1fr_0.9fr]'>
        <IncidentForm
          data={incidentData}
          onChange={updateIncidentData}
          onAddCorrectiveAction={addCorrectiveAction}
          onUpdateCorrectiveAction={updateCorrectiveAction}
          onRemoveCorrectiveAction={removeCorrectiveAction}
          onClearForm={clearForm}
        />

        <IncidentPreview data={incidentData} />
      </div>

      <div className='print-only'>
        <PrintableIncidentReport data={incidentData} />
      </div>
    </section>
  )
}
