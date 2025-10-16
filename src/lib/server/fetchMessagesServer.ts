// lib/server/fetchMessagesServer.ts
import { set } from 'lodash';

// İKİ SEÇENEK: A) doğrudan fetch  B) service ile axios
// A) Doğrudan fetch:
export async function fetchMessagesServer(locale: string): Promise<Record<string, any>> {
  const res = await fetch(`http://localhost:5070/api/Translations/all`, {
    // Next.js App Router kullanıyorsan cache kontrolü de ekleyebilirsin:
    // next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error('Translations fetch failed');
  const rows: Array<{ key: string; translations: { langCode: string; value: string }[] }> = await res.json();

  const norm = (s: string) => s.toLowerCase().slice(0, 2);
  const flat: Record<string, string> = {};
  for (const item of rows) {
    const t = item.translations?.find((x) => norm(x.langCode) === norm(locale));
    if (t) flat[item.key] = t.value;
  }

  return Object.entries(flat).reduce((acc, [k, v]) => {
    set(acc, k, v);
    return acc;
  }, {} as Record<string, any>);
}
