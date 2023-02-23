export const LOCALES = {
  en: 'en',
  uk: 'uk',
} as const;

export type TLocalesKeys = keyof typeof LOCALES;
