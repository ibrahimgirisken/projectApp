import { getTranslations } from 'next-intl/server';

type TFunction = (key: string, options?: { default?: string }) => string | Promise<string>;

function tSafeWrapper(t: TFunction) {
  return async (key: string) => {
    try {
      return await t(key, { default: key });
    } catch {
      return key;
    }
  };
}

export async function getSafeTranslations(params: { locale: string }) {
  const t = await getTranslations(params);
  return tSafeWrapper(t);
}
