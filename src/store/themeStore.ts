import { create } from 'zustand';

import { THEMES, TThemesKeys } from '@/theme/constants';

interface IStore {
  theme: TThemesKeys;
  setTheme: (value: TThemesKeys) => void;
}

export const useThemeStore = create<IStore>((set) => ({
  theme: THEMES.light,
  setTheme: (theme) =>
    set(() => ({
      theme,
    })),
}));
