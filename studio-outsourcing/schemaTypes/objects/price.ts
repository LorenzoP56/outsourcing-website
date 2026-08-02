import {defineField, defineType} from 'sanity'

export const price = defineType({
  name: 'price',
  title: 'Prezzo',
  type: 'object',
  fields: [
    defineField({
      name: 'amount',
      title: 'Importo',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'currency',
      title: 'Valuta',
      type: 'string',
      options: {list: ['EUR']},
      initialValue: 'EUR',
    }),
    defineField({
      name: 'billingPeriod',
      title: 'Periodicità',
      type: 'string',
      options: {
        list: [
          {title: 'Una tantum', value: 'one-time'},
          {title: 'Annuale', value: 'annual'},
        ],
      },
      initialValue: 'one-time',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {amount: 'amount', currency: 'currency', period: 'billingPeriod'},
    prepare({amount, currency, period}) {
      return {title: `${amount} ${currency}${period === 'annual' ? ' /anno' : ''}`}
    },
  },
})
