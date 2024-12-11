import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit'

import mockLeads from '../data/mockLeads'
import type { Lead } from '../types/lead'

// Create a slice for leads
const leadsSlice = createSlice({
  name: 'leads',
  initialState: {
    leads: mockLeads,
  },
  reducers: {
    addLead: (state, action: { payload: Lead }) => {
      state.leads.push(action.payload)
    },
    updateLeadStatus: (state, action: PayloadAction<{ id: string; status: string }>) => {
      const lead = state.leads.find((lead) => lead.id === action.payload.id);
      if (lead) {
        lead.status = action.payload.status;
      }
    },
  },
})

// Export the actions
export const {
  addLead,
  updateLeadStatus,
} = leadsSlice.actions

// Configure the store
const store = configureStore({
  reducer: {
    leads: leadsSlice.reducer,
  },
})

// Export the RootState type
export type RootState = ReturnType<typeof store.getState>

export default store
