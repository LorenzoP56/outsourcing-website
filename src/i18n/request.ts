import {getRequestConfig} from 'next-intl/server';
import {hasLocale} from 'next-intl';
import {routing} from './routing';

export default getRequestConfig(async ({requestLocale}) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const [common, home, chiSiamo, contatti, servizi, esternalizzazione, faq, blog] =
    await Promise.all([
      import(`../../messages/${locale}/common.json`),
      import(`../../messages/${locale}/home.json`),
      import(`../../messages/${locale}/chiSiamo.json`),
      import(`../../messages/${locale}/contatti.json`),
      import(`../../messages/${locale}/servizi.json`),
      import(`../../messages/${locale}/esternalizzazione.json`),
      import(`../../messages/${locale}/faq.json`),
      import(`../../messages/${locale}/blog.json`),
    ]);

  return {
    locale,
    messages: {
      ...common.default,
      ...home.default,
      ...chiSiamo.default,
      ...contatti.default,
      ...servizi.default,
      ...esternalizzazione.default,
      ...faq.default,
      ...blog.default,
    }
  };
});
