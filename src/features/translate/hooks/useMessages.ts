import { useMemo } from 'react';
import { set } from 'lodash';
import { useTranslations } from '@/features/translate/hooks/useTranslations';

type Row = { key: string; translations: { langCode: string; value: string }[] };

const norm = (s: string) => s.toLowerCase().slice(0, 2);

export function useMessages(locale: string) {
  const { data: all = [] } = useTranslations();
  return useMemo(() => {
    const flat: Record<string, string> = {};
    (all as Row[]).forEach((item) => {
      const t = item.translations?.find(x => norm(x.langCode) === norm(locale));
      if (t) flat[item.key] = t.value;
    });
    return Object.entries(flat).reduce((acc, [k, v]) => {
      set(acc, k, v); return acc;
    }, {} as Record<string, any>);
  }, [all, locale]);
}
