import {defineField, defineType} from 'sanity'

export const review = defineType({
  name: 'review',
  title: 'Recensione',
  type: 'document',
  fields: [
    defineField({
      name: 'service',
      title: 'Servizio',
      type: 'reference',
      to: [{type: 'service'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({name: 'authorName', title: 'Nome autore', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'clerkUserId', title: 'ID utente (Clerk)', type: 'string'}),
    defineField({
      name: 'rating',
      title: 'Voto',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(5),
    }),
    defineField({name: 'comment', title: 'Commento', type: 'text', validation: (Rule) => Rule.required()}),
    defineField({name: 'approved', title: 'Approvata', type: 'boolean', initialValue: false}),
  ],
  preview: {
    select: {title: 'authorName', rating: 'rating', service: 'service.title'},
    prepare({title, rating, service}) {
      return {title: `${title} — ${'★'.repeat(rating || 0)}`, subtitle: service}
    },
  },
})
