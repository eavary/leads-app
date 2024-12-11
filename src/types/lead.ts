import { STATUS } from '@/lib/constants'

export type Lead = {
  id?: string,
  firstName: string,
  lastName: string,
  name: string,
  email: string,
  country: string,
  url: string,
  categories: {},
  moreInfo: {},
  submitted?: string,
  status?: typeof STATUS[keyof typeof STATUS]
}
