'use client'

import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { columns } from './columns'
import { DataTable } from './data-table'
import type { Lead } from '@/types/lead'

export default function AdminPage() {
  const leads = useSelector((state: RootState) => state.leads.leads)
  return (
    <section className="pt-2">
      <h1 className="text-2xl font-bold">Leads</h1>
      <div className="container mx-auto py-4">
        <DataTable columns={columns} data={leads} />
      </div>
    </section>
  )
}
