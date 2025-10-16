import { set } from 'lodash';

export async function fetchMessages(locale: string): Promise<Record<string, any>> {
  const res = await fetch(
    `http://localhost:5070/api/Translations/all`
  );
  if (!res.ok) throw new Error(`Failed to fetch messages for ${locale}`);

  const data = await res.json();

  const flat: Record<string, string> = {};

  for (const item of data) {
    const translation = item.translations.find((t: any) => t.langCode === locale);
    if (translation) {
      flat[item.key] = translation.value;
    }
  }
  return Object.entries(flat).reduce((acc, [key, value]) => {
    set(acc, key, value);
    return acc;
  }, {});
}
