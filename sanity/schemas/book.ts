import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'book',
  title: 'Libro',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Título', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'cover', title: 'Portada', type: 'image' }),
    defineField({
      name: 'author', title: 'Autor',
      type: 'reference', to: [{ type: 'author' }]
    }),
    defineField({ name: 'description', title: 'Descripción', type: 'text' }),
    defineField({ name: 'amazonLink', title: 'Link Amazon', type: 'url' }),
    defineField({
      name: 'status', title: 'Estado', type: 'string',
      options: { list: [
        { title: 'Disponible', value: 'disponible' },
        { title: 'Pronto', value: 'pronto' },
        { title: 'Próximamente', value: 'proximamente' },
      ]}
    }),
    defineField({ name: 'publishedAt', title: 'Fecha de publicación', type: 'date' }),
  ]
})