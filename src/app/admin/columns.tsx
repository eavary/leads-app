'use client'
 
import { ColumnDef } from '@tanstack/react-table'
import { ArrowUp, ArrowDown, ArrowUpDown } from 'lucide-react'

import { Button } from "@/components/ui/button"

import type { Lead } from "@/types/lead"
 
export const columns: ColumnDef<Lead>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <>
        <Button
          variant="ghost"
          className="flex items-center space-x-1"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          {column.getIsSorted() === "asc" ? (
            <ArrowUp className="ml-2 h-4 w-4" />
          ) : (
            <ArrowDown className="ml-2 h-4 w-4" />
          )}
        </Button>
      </>
    ),
  },
  {
    accessorKey: "submitted",
    header: ({ column }) => (
      <>
        <Button
          variant="ghost"
          className="flex items-center space-x-1"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Submitted
          {column.getIsSorted() === "asc" ? (
            <ArrowUp className="ml-2 h-4 w-4" />
          ) : (
            <ArrowDown className="ml-2 h-4 w-4" />
          )}
        </Button>
      </>
    ),
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <>
        <Button
          variant="ghost"
          className="flex items-center space-x-1"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          {column.getIsSorted() === "asc" ? (
            <ArrowUp className="ml-2 h-4 w-4" />
          ) : (
            <ArrowDown className="ml-2 h-4 w-4" />
          )}
        </Button>
      </>
    ),
  },
  {
    accessorKey: "country",
    header: ({ column }) => (
      <>
        <Button
          variant="ghost"
          className="flex items-center space-x-1"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Country
          {column.getIsSorted() === "asc" ? (
            <ArrowUp className="ml-2 h-4 w-4" />
          ) : (
            <ArrowDown className="ml-2 h-4 w-4" />
          )}
        </Button>
      </>
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const lead = row.original
      return (
        <Button 
          variant="secondary"
          className=""
          onClick={() => console.log("Update lead", lead)}
        >
          Update
        </Button>
      )
    },
  },
]
