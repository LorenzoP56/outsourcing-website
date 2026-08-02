import {defineField, defineType} from 'sanity'

export const professional = defineType({
  name: 'professional',
  title: 'Professionista (avvocato/commercialista)',
  type: 'document',
  fields: [
    defineField({name: 'name', title: 'Nome / Studio', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({
      name: 'professionType',
      title: 'Tipo professionista',
      type: 'string',
      options: {
        list: [
          {title: 'Avvocato', value: 'avvocato'},
          {title: 'Commercialista', value: 'commercialista'},
          {title: 'Altro', value: 'altro'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({name: 'email', title: 'Email', type: 'string', validation: (Rule) => Rule.email()}),
    defineField({name: 'phone', title: 'Telefono', type: 'string'}),
    defineField({name: 'vatNumber', title: 'Partita IVA', type: 'string'}),
    defineField({name: 'notes', title: 'Note', type: 'text'}),
    defineField({name: 'active', title: 'Attivo', type: 'boolean', initialValue: true}),
  ],
  preview: {
    select: {title: 'name', subtitle: 'professionType'},
  },
})
