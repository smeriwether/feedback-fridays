import { v4 as uuidv4 } from 'uuid'

export interface Teammate {
  id: string
  name: string
}

export const newTeammateBuilder = (name = '') => ({
  id: uuidv4(),
  name,
})
