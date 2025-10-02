export function reviseTheText(name: string): string {
  return name
    .replace(/ı/g, 'i')
    .replace(/I/g, 'i')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^a-zA-Z0-9.\-_]/g, '')
    .toLowerCase();
}
