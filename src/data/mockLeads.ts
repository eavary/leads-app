import { v4 as uuidv4 } from 'uuid'
import { Lead } from '@/types/lead'
import { STATUS } from '@/lib/constants'

const countries = [
  'United States',
  'Germany',
  'Italy',
  'France',
  'Spain',
  'United Kingdom',
  'China',
  'Japan',
  'Brazil',
  'Canada',
];

const mockLeads: Lead[] = Array.from({ length: 35 }, (_, index) => ({
  id: uuidv4(),
  firstName: `FirstName${index + 1}`,
  lastName: `LastName${index + 1}`,
  name: `FirstName${index + 1} LastName${index + 1}`,
  email: `email${index + 1}@example.com`,
  country: countries[index % countries.length],
  url: `https://example.com/profile${index + 1}`,
  categories: { category: `Category${index + 1}` },
  moreInfo: { info: `More info about lead ${index + 1}` },
  submitted: new Date().toISOString(),
  status: STATUS.PENDING,
}));

export default mockLeads
