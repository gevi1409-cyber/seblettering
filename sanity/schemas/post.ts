import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'post',
  title: 'Blog',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Título', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
    defineField({
      name: 'category', title: 'Categoría', type: 'string',
      options: { list: [
        { title: 'Oficio', value: 'oficio' },
        { title: 'Comunidad', value: 'comunidad' },
        { title: 'Evento', value: 'evento' },
      ]}
    }),
    defineField({ name: 'coverImage', title: 'Imagen de portada', type: 'image' }),
    defineField({
      name: 'body', title: 'Contenido', type: 'array',
      of: [{ type: 'block' }]
    }),
    defineField({
      name: 'author', title: 'Autor',
      type: 'reference', to: [{ type: 'author' }]
    }),
    defineField({ name: 'publishedAt', title: 'Fecha', type: 'date' }),
  ]
})