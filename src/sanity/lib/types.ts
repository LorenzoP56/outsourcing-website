import type { SanityImageSource } from '@sanity/image-url';

export type Price = {
  amount: number;
  currency: string;
  billingPeriod: 'one-time' | 'annual';
};

export type ServiceListItem = {
  _id: string;
  title: string;
  slug: { current: string };
  serviceType: 'spid' | 'firma-digitale' | 'pec';
  shortDescription?: string;
  image?: SanityImageSource;
  startingPrice?: Price;
};

export type ServiceVariant = {
  _key: string;
  label: string;
  sku?: string;
  deliveryMode: 'remota' | 'smart-card' | 'token-usb';
  verificationMode: 'online-video' | 'in-presenza';
  price: Price;
  durationMonths?: number;
  stock?: number;
  active: boolean;
};

export type Seo = {
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: SanityImageSource;
};

export type ServiceDetail = ServiceListItem & {
  description?: unknown;
  requiredDocuments?: string[];
  variants: ServiceVariant[];
  seo?: Seo;
};
