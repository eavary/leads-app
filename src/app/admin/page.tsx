import { columns } from "./columns"
import { DataTable } from "./data-table"

import type { Lead } from "@/types/lead"

async function getData(): Promise<Lead[]> {
  return [
    {
      id: 1,
      name: 'User One',
      submitted: '02/01/2024, 2:45 PM',
      status: "Pending",
      country: "Mexico",
    },
    {
      id: 2,
      name: 'User Two',
      submitted: '02/02/2024, 2:45 PM',
      status: "Reached Out",
      country: "United States",
    },
    {
      id: 3,
      name: 'User Three',
      submitted: '02/03/2024, 2:45 PM',
      status: "Pending",
      country: "Canada",
    },
    {
      id: 4,
      name: 'User Four',
      submitted: '02/04/2024, 2:45 PM',
      status: "Reached Out",
      country: "EU",
    },
    {
      id: 5,
      name: 'User Five',
      submitted: '02/05/2024, 2:45 PM',
      status: "Pending",
      country: "Italy",
    },
    {
      id: 6,
      name: 'User Six',
      submitted: '02/06/2024, 2:45 PM',
      status: "Reached Out",
      country: "Germany",
    },
    {
      id: 7,
      name: 'User Seven',
      submitted: '02/07/2024, 2:45 PM',
      status: "Pending",
      country: "France",
    },
    {
      id: 8,
      name: 'User Eight',
      submitted: '02/08/2024, 2:45 PM',
      status: "Reached Out",
      country: "Mexico",
    },
    {
      id: 9,
      name: 'User Nine',
      submitted: '02/09/2024, 2:45 PM',
      status: "Pending",
      country: "Mexico",
    },
    {
      id: 10,
      name: 'User Ten',
      submitted: '02/10/2024, 2:45 PM',
      status: "Reached Out",
      country: "Mexico",
    },
    {
      id: 11,
      name: 'User Eleven',
      submitted: '02/11/2024, 2:45 PM',
      status: "Pending",
      country: "Mexico",
    },
    {
      id: 12,
      name: 'User Twelve',
      submitted: '02/12/2024, 2:45 PM',
      status: "Reached Out",
      country: "Mexico",
    },
  ]
}

export default async function AdminPage() {
  const data = await getData()

  return (
    <section>
      <h1 className="text-2xl font-bold">Leeds</h1>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
    </section>
  )
}
