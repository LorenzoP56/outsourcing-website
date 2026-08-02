import {defineField, defineType} from 'sanity'

export const address = defineType({
  name: 'address',
  title: 'Indirizzo',
  type: 'object',
  fields: [
    defineField({name: 'label', title: 'Etichetta', type: 'string', description: 'Es. "Casa", "Ufficio" — usato nella rubrica indirizzi del cliente.'}),
    defineField({name: 'fullName', title: 'Nome e cognome', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'street', title: 'Indirizzo', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'city', title: 'Città', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'postalCode', title: 'CAP', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'province', title: 'Provincia', type: 'string'}),
    defineField({name: 'country', title: 'Paese', type: 'string', initialValue: 'IT'}),
    defineField({name: 'phone', title: 'Telefono', type: 'string'}),
  ],
  preview: {
    select: {label: 'label', title: 'fullName', city: 'city', street: 'street'},
    prepare({label, title, city, street}) {
      return {title: label ? `${label} — ${title}` : title, subtitle: [street, city].filter(Boolean).join(', ')}
    },
  },
})
