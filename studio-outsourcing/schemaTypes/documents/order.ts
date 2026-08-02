import {defineField, defineType} from 'sanity'

export const order = defineType({
  name: 'order',
  title: 'Ordine',
  type: 'document',
  fields: [
    defineField({name: 'orderNumber', title: 'Numero ordine', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({
      name: 'customer',
      title: 'Cliente',
      type: 'reference',
      to: [{type: 'customer'}],
    }),
    defineField({
      name: 'customerEmail',
      title: 'Email cliente',
      type: 'string',
      description: "Snapshot dell'email al momento dell'ordine (indipendente da eventuali modifiche successive sul profilo cliente).",
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({name: 'customerPhone', title: 'Telefono cliente', type: 'string'}),
    defineField({
      name: 'items',
      title: 'Righe ordine',
      type: 'array',
      of: [{type: 'orderItem'}],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'status',
      title: 'Stato',
      type: 'string',
      options: {
        list: [
          {title: 'In attesa di pagamento', value: 'pending'},
          {title: 'Pagato', value: 'paid'},
          {title: 'In verifica identità', value: 'verification'},
          {title: 'Attivato', value: 'completed'},
          {title: 'Annullato', value: 'cancelled'},
          {title: 'Rimborsato', value: 'refunded'},
        ],
      },
      initialValue: 'pending',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'shippingAddress',
      title: 'Indirizzo di spedizione',
      type: 'address',
      description: 'Solo se l\'ordine include varianti fisiche (smart card, token USB).',
    }),
    defineField({name: 'totalAmount', title: 'Totale', type: 'number', validation: (Rule) => Rule.required().min(0)}),
    defineField({name: 'currency', title: 'Valuta', type: 'string', initialValue: 'EUR'}),
    defineField({name: 'coupon', title: 'Coupon applicato', type: 'reference', to: [{type: 'coupon'}]}),
    defineField({name: 'stripeSessionId', title: 'Stripe Session ID', type: 'string'}),
    defineField({name: 'notes', title: 'Note interne', type: 'text'}),
  ],
  preview: {
    select: {title: 'orderNumber', subtitle: 'status', email: 'customerEmail'},
    prepare({title, subtitle, email}) {
      return {title: title || 'Ordine', subtitle: [subtitle, email].filter(Boolean).join(' — ')}
    },
  },
})
