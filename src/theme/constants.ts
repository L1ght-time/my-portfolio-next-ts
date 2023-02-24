export const THEMES = {
  light: 'light',
  dark: 'dark',
} as const;

export type TThemesKeys = keyof typeof THEMES;
