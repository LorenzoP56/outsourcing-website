# Lavoro svolto — 2 agosto 2026

Riepilogo delle attività di oggi sul progetto e-commerce (SPID, Firma digitale, PEC) su
branch `ecom`.

## Middleware: unificazione Clerk + next-intl

`src/proxy.ts` conteneva due middleware separati e in conflitto (incollati uno sotto
l'altro durante l'integrazione di Clerk). Unificati in un solo `clerkMiddleware` che al
suo interno richiama `intlMiddleware`, con bypass esplicito per `/api` e `/trpc` e un
matcher unico che copre anche il path di auto-proxy di Clerk (`/__clerk/:path*`).

## Sanity Studio: setup standalone

- Confermato (documentazione ufficiale Sanity + skill `sanity-best-practices`) che lo
  Studio standalone in `studio-outsourcing/` — sibling di `src/`, non annidato dentro
  `app/` — è l'approccio raccomandato per progetti nuovi: build più veloci (Vite),
  auto-update, TypeGen in watch mode, modello di contenuto indipendente dal sito.
- Trovato e corretto un bug reale: il `tsconfig.json` del sito Next.js aveva
  `include: ["**/*.ts", ...]` senza restrizione a `src/`, quindi compilava anche tutti i
  file di `studio-outsourcing/`. Aggiunto `studio-outsourcing` a `exclude`.

## Schema types Sanity (catalogo SPID / Firma digitale / PEC)

Definito lo schema per il catalogo, basato sui prodotti reali confermati dal wiki cliente
(SPID, Firma digitale in 3 modalità — remota, smart card, token USB —, PEC da confermare):

**Document types**
- `service` — SPID / Firma digitale / PEC, con array di varianti
- `order` — con reference a `customer`, righe ordine, stato, indirizzo di spedizione
- `review`
- `coupon`
- `shopSettings` (singleton)
- `customer` — collegato a Clerk via `clerkUserId`, indirizzi salvati, segnalazione
  professionista, note interne di assistenza
- `professional` — avvocato/commercialista del canale di vendita "1 a molti"

**Object types**
- `seo`, `price`, `serviceVariant` (con stock condizionale sulle varianti fisiche),
  `address` (con etichetta per la rubrica), `orderItem` (snapshot prezzo/variante),
  `supportNote` (log strutturato: testo, autore, data)

Validato con `sanity schema validate` (0 errori) e `tsc --noEmit` (0 errori).

## Collegamento Next.js ↔ Sanity

- Installate `next-sanity`, `@sanity/client`, `@sanity/image-url` nel sito
- `src/sanity/lib/client.ts`, `image.ts` (URL builder immagini), `live.ts`
  (`defineLive`/`sanityFetch`/`SanityLive` per Live Content API)
- `<SanityLive />` montato in `src/app/layout.tsx`
- Env vars aggiunte a `.env`: `NEXT_PUBLIC_SANITY_API_VERSION`, `SANITY_API_READ_TOKEN`
- CORS origin configurato su Sanity Manage per il sito

## Prime pagine del catalogo

- `src/sanity/lib/queries.ts` — query GROQ per listing (`SERVICES_QUERY`, con prezzo di
  partenza calcolato) e dettaglio (`SERVICE_BY_SLUG_QUERY`)
- `src/sanity/lib/types.ts` — tipi TypeScript per i risultati delle query
- `src/app/[locale]/negozio/page.tsx` — catalogo pubblico
- `src/app/[locale]/negozio/[slug]/page.tsx` — pagina di dettaglio (descrizione via
  PortableText, documenti richiesti, varianti con prezzo)
- `messages/it/negozio.json` e `messages/en/negozio.json` — stringhe i18n, agganciate in
  `src/i18n/request.ts`
- Verificato end-to-end in locale: entrambe le pagine rispondono 200 e mostrano dati reali
  letti dallo Studio

## Limiti noti / prossimi passi

- Contenuto `service` non ancora localizzato per lingua (stesso testo su `it`/`en`)
- Nessun JSON-LD `Product`/`Offer` sulle pagine prodotto
- Nessun carrello / checkout — prossimo blocco di lavoro
- PEC come prodotto da vendere è ancora da confermare col cliente
