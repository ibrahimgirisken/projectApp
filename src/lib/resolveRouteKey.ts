export default function resolveRouteKey(
  slugSegment: string,
  routeMap: Record<string, string>
): string | undefined {
  return Object.entries(routeMap).find(([, translated]) => translated === slugSegment)?.[0];
}
