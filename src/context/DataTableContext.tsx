import React, { createContext, useContext } from 'react'
import type { Lead } from '@/types/lead'

interface DataTableContextProps {
  handleUpdateStatus: (lead: Lead) => void
}

const DataTableContext = createContext<DataTableContextProps | undefined>(undefined)

export const useDataTableContext = () => {
  const context = useContext(DataTableContext)
  if (!context) {
    throw new Error('useDataTableContext must be used within a DataTableProvider')
  }
  return context
}

export const DataTableProvider: React.FC<{ handleUpdateStatus: (lead: Lead) => void }> = ({ children, handleUpdateStatus }) => {
  return (
    <DataTableContext.Provider value={{ handleUpdateStatus }}>
      {children}
    </DataTableContext.Provider>
  )
}
