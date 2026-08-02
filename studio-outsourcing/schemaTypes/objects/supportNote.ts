import {defineField, defineType} from 'sanity'

export const supportNote = defineType({
  name: 'supportNote',
  title: 'Nota assistenza',
  type: 'object',
  fields: [
    defineField({name: 'note', title: 'Nota', type: 'text', validation: (Rule) => Rule.required()}),
    defineField({name: 'author', title: 'Autore', type: 'string'}),
    defineField({
      name: 'date',
      title: 'Data',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {title: 'note', subtitle: 'author'},
  },
})
