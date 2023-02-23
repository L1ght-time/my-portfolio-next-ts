import { create } from 'zustand';

import { LOCALES, TLocalesKeys } from '@/i18n';

interface IStore {
  toggleOpen: boolean;
  setToggleOpen: () => void;
  locale: TLocalesKeys;
  setLocale: (value: TLocalesKeys) => void;
}

export const useLayoutStore = create<IStore>((set) => ({
  toggleOpen: true,
  setToggleOpen: () => set((state: IStore) => ({ toggleOpen: !state.toggleOpen })),
  locale: LOCALES.en,
  setLocale: (locale) =>
    set(() => ({
      locale,
    })),
}));
