import { useTranslations } from 'next-intl';

type SyncTFunction = (key: string, options?: Record<string, any>) => string;

export function getUseTranslationsSafe(namespace?: string): SyncTFunction {
  const t = useTranslations(namespace);

  return (key: string, options?: Record<string, any>) => {
    try {
      return t(key, options);
    } catch {
      return key;
    }
  };
}
