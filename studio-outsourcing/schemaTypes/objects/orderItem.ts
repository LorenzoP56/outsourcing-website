import {defineField, defineType} from 'sanity'

export const orderItem = defineType({
  name: 'orderItem',
  title: 'Riga ordine',
  type: 'object',
  fields: [
    defineField({
      name: 'service',
      title: 'Servizio',
      type: 'reference',
      to: [{type: 'service'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'variantLabel',
      title: 'Variante scelta',
      type: 'string',
      description: 'Snapshot del nome variante al momento dell\'ordine (es. "Token USB").',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'quantity',
      title: 'Quantità',
      type: 'number',
      initialValue: 1,
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'unitPrice',
      title: 'Prezzo unitario',
      type: 'price',
      description: 'Snapshot del prezzo al momento dell\'ordine.',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {service: 'service.title', variant: 'variantLabel', qty: 'quantity'},
    prepare({service, variant, qty}) {
      return {title: `${service || 'Servizio'} — ${variant}`, subtitle: `x${qty}`}
    },
  },
})
