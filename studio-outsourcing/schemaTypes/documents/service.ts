import {defineField, defineType} from 'sanity'

export const service = defineType({
  name: 'service',
  title: 'Servizio',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Nome', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'serviceType',
      title: 'Tipo servizio',
      type: 'string',
      options: {
        list: [
          {title: 'SPID', value: 'spid'},
          {title: 'Firma digitale', value: 'firma-digitale'},
          {title: 'PEC', value: 'pec'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({name: 'shortDescription', title: 'Descrizione breve', type: 'text', rows: 3}),
    defineField({name: 'description', title: 'Descrizione', type: 'array', of: [{type: 'block'}]}),
    defineField({name: 'image', title: 'Immagine', type: 'image', options: {hotspot: true}}),
    defineField({
      name: 'requiredDocuments',
      title: "Documenti richiesti per l'attivazione",
      type: 'array',
      of: [{type: 'string'}],
      description: 'Es. "Carta d\'identità", "Codice fiscale", "Numero di cellulare attivo"',
    }),
    defineField({
      name: 'variants',
      title: 'Varianti',
      type: 'array',
      of: [{type: 'serviceVariant'}],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({name: 'active', title: 'Visibile sul sito', type: 'boolean', initialValue: true}),
    defineField({name: 'seo', title: 'SEO', type: 'seo'}),
  ],
  preview: {
    select: {title: 'title', subtitle: 'serviceType', media: 'image'},
  },
})
