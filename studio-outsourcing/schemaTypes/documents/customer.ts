import {defineField, defineType} from 'sanity'

export const customer = defineType({
  name: 'customer',
  title: 'Cliente',
  type: 'document',
  fields: [
    defineField({
      name: 'clerkUserId',
      title: 'ID utente (Clerk)',
      type: 'string',
      description: "Collega questo documento all'utente reale gestito da Clerk (auth/profilo).",
      validation: (Rule) => Rule.required(),
    }),
    defineField({name: 'fullName', title: 'Nome e cognome', type: 'string'}),
    defineField({name: 'email', title: 'Email', type: 'string', validation: (Rule) => Rule.email()}),
    defineField({
      name: 'savedAddresses',
      title: 'Indirizzi di spedizione salvati',
      type: 'array',
      of: [{type: 'address'}],
      description: 'Rubrica indirizzi per non reinserirli ad ogni ordine di smart card/token USB.',
    }),
    defineField({
      name: 'referredByProfessional',
      title: 'Segnalato da (avvocato/commercialista)',
      type: 'reference',
      to: [{type: 'professional'}],
      description: 'Canale "1 a molti" — quale professionista ha portato questo cliente.',
    }),
    defineField({
      name: 'supportNotes',
      title: 'Note interne di assistenza',
      type: 'array',
      of: [{type: 'supportNote'}],
    }),
  ],
  preview: {
    select: {title: 'fullName', subtitle: 'email'},
  },
})
