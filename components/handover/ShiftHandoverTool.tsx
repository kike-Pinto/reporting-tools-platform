'use client'

import { useState } from 'react'

import HandoverForm from './HandoverForm'
import HandoverPreview from './HandoverPreview'
import PrintableHandoverReport from './PrintableHandoverReport'

import type { HandoverItem, ShiftHandoverData } from '@/lib/handover/types'

const initialHandoverData: ShiftHandoverData = {
  siteName: '',
  location: '',
  handoverDate: '',
  outgoingShift: 'Day Shift',
  incomingShift: 'Night Shift',
  outgoingSupervisor: '',
  incomingSupervisor: '',

  workCompleted: '',
  equipmentStatus: '',
  recommendations: '',

  pendingTasks: [],
  incidents: [],
}

export default function ShiftHandoverTool() {
  const [handoverData, setHandoverData] =
    useState<ShiftHandoverData>(initialHandoverData)

  function updateHandoverData(field: keyof ShiftHandoverData, value: string) {
    setHandoverData((currentData) => ({
      ...currentData,
      [field]: value,
    }))
  }

  function addItem(type: 'pendingTasks' | 'incidents') {
    const newItem: HandoverItem = {
      id: crypto.randomUUID(),
      description: '',
      area: '',
      status: 'Open',
      priority: 'Medium',
    }

    setHandoverData((currentData) => ({
      ...currentData,
      [type]: [...currentData[type], newItem],
    }))
  }

  function updateItem(
    type: 'pendingTasks' | 'incidents',
    itemId: string,
    field: keyof HandoverItem,
    value: string,
  ) {
    setHandoverData((currentData) => ({
      ...currentData,
      [type]: currentData[type].map((item) =>
        item.id === itemId ? { ...item, [field]: value } : item,
      ),
    }))
  }

  function removeItem(type: 'pendingTasks' | 'incidents', itemId: string) {
    setHandoverData((currentData) => ({
      ...currentData,
      [type]: currentData[type].filter((item) => item.id !== itemId),
    }))
  }

  function clearForm() {
    setHandoverData(initialHandoverData)
  }

  return (
    <section
      id='report-tool'
      className='mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8'
    >
      <div className='screen-tool grid gap-6 lg:grid-cols-[1.1fr_0.9fr]'>
        <HandoverForm
          data={handoverData}
          onChange={updateHandoverData}
          onAddItem={addItem}
          onUpdateItem={updateItem}
          onRemoveItem={removeItem}
          onClearForm={clearForm}
        />

        <HandoverPreview data={handoverData} />
      </div>

      <div className='print-only'>
        <PrintableHandoverReport data={handoverData} />
      </div>
    </section>
  )
}
