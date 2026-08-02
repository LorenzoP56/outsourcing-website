import {defineField, defineType} from 'sanity'

export const serviceVariant = defineType({
  name: 'serviceVariant',
  title: 'Variante',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Nome variante',
      type: 'string',
      description: 'Es. "Remota", "Smart card fisica", "Token USB"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({name: 'sku', title: 'SKU', type: 'string'}),
    defineField({
      name: 'deliveryMode',
      title: 'Modalità di erogazione',
      type: 'string',
      options: {
        list: [
          {title: 'Remota / online', value: 'remota'},
          {title: 'Smart card fisica', value: 'smart-card'},
          {title: 'Token USB', value: 'token-usb'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'verificationMode',
      title: 'Modalità identificazione',
      type: 'string',
      options: {
        list: [
          {title: 'Video-identificazione online', value: 'online-video'},
          {title: 'Di persona', value: 'in-presenza'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Prezzo',
      type: 'price',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'durationMonths',
      title: 'Validità (mesi)',
      type: 'number',
      description: 'Es. 12 per PEC annuale, 36 per firma digitale triennale. Lasciare vuoto se non applicabile.',
    }),
    defineField({
      name: 'stock',
      title: 'Giacenza disponibile',
      type: 'number',
      hidden: ({parent}) => parent?.deliveryMode === 'remota',
      description: 'Solo per varianti fisiche (smart card, token USB).',
    }),
    defineField({name: 'active', title: 'Variante attiva', type: 'boolean', initialValue: true}),
  ],
  preview: {
    select: {title: 'label', amount: 'price.amount', currency: 'price.currency'},
    prepare({title, amount, currency}) {
      return {title, subtitle: amount ? `${amount} ${currency}` : undefined}
    },
  },
})
