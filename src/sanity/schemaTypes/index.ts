import { type SchemaTypeDefinition } from 'sanity'
import { home } from './home'
import { prodect } from './prodects'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [home,prodect],
}
