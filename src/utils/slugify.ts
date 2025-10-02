export function slugify(text: string): string {
  return text
    .toString()
    .normalize('NFD') // Türkçe karakterleri ayır
    .replace(/[\u0300-\u036f]/g, '') // aksan işaretlerini sil
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ı/g, 'i')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c')
    .replace(/Ğ/g, 'G')
    .replace(/Ü/g, 'U')
    .replace(/Ş/g, 'S')
    .replace(/İ/g, 'I')
    .replace(/I/g, 'I')
    .replace(/Ö/g, 'O')
    .replace(/Ç/g, 'C')
    .replace(/[^a-zA-Z0-9\s-]/g, '') // harf, sayı ve boşluk dışındakileri sil
    .trim()
    .replace(/\s+/g, '-') // boşlukları tire yap
    .replace(/-+/g, '-') // birden fazla tırayı tek tire yap
    .toLowerCase();
}
