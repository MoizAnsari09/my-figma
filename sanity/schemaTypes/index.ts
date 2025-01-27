import { type SchemaTypeDefinition } from 'sanity'
import { productSchema } from './product'
import { categorySchema } from './catogory'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema,categorySchema],
}
