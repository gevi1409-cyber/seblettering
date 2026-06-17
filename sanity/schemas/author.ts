import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'author',
  title: 'Autor',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Nombre', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' } }),
    defineField({ name: 'photo', title: 'Foto', type: 'image' }),
    defineField({ name: 'bio', title: 'Biografía', type: 'text' }),
    defineField({
      name: 'socialLinks', title: 'Redes sociales', type: 'array',
      of: [{ type: 'object', fields: [
        { name: 'platform', title: 'Plataforma', type: 'string' },
        { name: 'url', title: 'URL', type: 'url' }
      ]}]
    }),
  ]
})