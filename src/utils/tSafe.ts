type TFunction = (key: string, options?: { default?: string }) => string | Promise<string>;

export function tSafe(t: TFunction) {
  return async (key: string) => {
    try {
      return await t(key, { default: key });
    } catch (error) {
      return key;
    }
  };
}
