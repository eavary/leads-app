// TODO: use constants for status

export type Lead = {
  id: number
  name: string
  submitted: string
  status: "Pending" | "Reached Out"
  country: string
}
