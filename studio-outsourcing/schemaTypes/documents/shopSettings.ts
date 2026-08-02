import {defineField, defineType} from 'sanity'

export const shopSettings = defineType({
  name: 'shopSettings',
  title: 'Impostazioni negozio',
  type: 'document',
  fields: [
    defineField({
      name: 'storeName',
      title: 'Nome negozio',
      type: 'string',
      initialValue: 'Punto Digitale — Outsourcing Group',
    }),
    defineField({name: 'contactEmail', title: 'Email di contatto', type: 'string'}),
    defineField({name: 'supportPhone', title: 'Telefono assistenza', type: 'string'}),
    defineField({name: 'vatNumber', title: 'Partita IVA', type: 'string'}),
    defineField({name: 'defaultCurrency', title: 'Valuta predefinita', type: 'string', initialValue: 'EUR'}),
  ],
  preview: {
    prepare() {
      return {title: 'Impostazioni negozio'}
    },
  },
})
