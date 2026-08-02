import { defineQuery } from 'next-sanity';

export const SERVICES_QUERY = defineQuery(`
  *[_type == "service" && active == true] | order(title asc) {
    _id,
    title,
    slug,
    serviceType,
    shortDescription,
    image,
    "startingPrice": variants[active == true] | order(price.amount asc)[0].price
  }
`);

export const SERVICE_BY_SLUG_QUERY = defineQuery(`
  *[_type == "service" && active == true && slug.current == $slug][0] {
    _id,
    title,
    slug,
    serviceType,
    shortDescription,
    description,
    image,
    requiredDocuments,
    variants[active == true],
    seo
  }
`);
