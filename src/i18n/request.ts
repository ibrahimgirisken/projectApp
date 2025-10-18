// src/i18n/request.ts
import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locales = ['tr', 'en', 'de'];
  const defaultLocale = 'en';

  const locale = hasLocale(locales, requested) ? requested : defaultLocale;

  // messages JSON'larını import et
  const messages = import(`../locales/${locale}.json`).then((m) => m.default);

  return {
    locale,
    messages,
  };
});
