import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'episode',
  title: 'Episodio',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Título', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'season', title: 'Temporada', type: 'number' }),
    defineField({
      name: 'guest', title: 'Invitado',
      type: 'reference', to: [{ type: 'author' }]
    }),
    defineField({ name: 'videoEmbed', title: 'URL del video', type: 'url' }),
    defineField({ name: 'description', title: 'Descripción', type: 'text' }),
    defineField({ name: 'publishedAt', title: 'Fecha', type: 'date' }),
  ]
})