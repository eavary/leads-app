'use client'

import { format } from 'date-fns'
import { ColumnDef } from '@tanstack/react-table'
import { ArrowUp, ArrowDown, SquareCheckBig } from 'lucide-react'

import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import type { Lead } from "@/types/lead"
 
export const columns: ColumnDef<Lead>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
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
    ),
  },
  {
    accessorKey: "submitted",
    header: ({ column }) => (
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
    ),
    cell: ({ row }) => {
      // submitted is a string like "2024-12-11T05:41:52.367Z", format it to "12/11/2024 5:41 AM"
      const submittedDate = row.original.submitted
      const formattedDate = submittedDate ? format(new Date(submittedDate), 'MM/dd/yyyy h:mm a') : 'Invalid date'
      return (
        <div className="flex items-center space-x-2">
          <span>{formattedDate}</span>
        </div>
      )
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
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
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger
              className="hover:bg-transparent text-slate-500 hover:text-slate-900"
              onClick={() => console.log("Update lead", lead)}
            >
              <SquareCheckBig className="ml-2 h-4 w-4" />
            </TooltipTrigger>
            <TooltipContent>
              Update Status
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )
    },
  },
]
