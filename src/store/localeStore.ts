import { create } from 'zustand';

import { LOCALES, TLocalesKeys } from '@/i18n';

interface IStore {
  locale: TLocalesKeys;
  setLocale: (value: TLocalesKeys) => void;
}

export const useLocaleStore = create<IStore>((set) => ({
  locale: LOCALES.en,
  setLocale: (locale) =>
    set(() => ({
      locale,
    })),
}));
