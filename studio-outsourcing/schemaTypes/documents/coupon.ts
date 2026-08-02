import {defineField, defineType} from 'sanity'

export const coupon = defineType({
  name: 'coupon',
  title: 'Coupon',
  type: 'document',
  fields: [
    defineField({name: 'code', title: 'Codice', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({
      name: 'discountType',
      title: 'Tipo sconto',
      type: 'string',
      options: {
        list: [
          {title: 'Percentuale', value: 'percentage'},
          {title: 'Importo fisso', value: 'fixed'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'discountValue',
      title: 'Valore sconto',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({name: 'validFrom', title: 'Valido da', type: 'datetime'}),
    defineField({name: 'validTo', title: 'Valido fino a', type: 'datetime'}),
    defineField({name: 'maxUses', title: 'Utilizzi massimi', type: 'number'}),
    defineField({
      name: 'applicableServices',
      title: 'Servizi applicabili (vuoto = tutti)',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'service'}]}],
    }),
    defineField({name: 'active', title: 'Attivo', type: 'boolean', initialValue: true}),
  ],
  preview: {
    select: {title: 'code', discountType: 'discountType', discountValue: 'discountValue'},
    prepare({title, discountType, discountValue}) {
      const suffix = discountType === 'percentage' ? '%' : '€'
      return {title, subtitle: `-${discountValue}${suffix}`}
    },
  },
})
