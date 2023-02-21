import { create } from 'zustand';

import { LOCALES } from '@/i18n';
import { LANGUAGES } from '@/components/Layout/NavBar/LanguageDropdown/constants';

interface IStore {
  isOpen: boolean;
  setOpen: () => void;
  language: string;
  setLanguage: (value: string) => void;
  locale: string;
  setLocale: (value: string) => void;
}

export const useLayoutStore = create<IStore>((set) => ({
  isOpen: true,
  setOpen: () => set((state: IStore) => ({ isOpen: !state.isOpen })),
  language: LANGUAGES.ENGLISH,
  setLanguage: (language) =>
    set((state: IStore) => ({
      language,
    })),
  locale: LOCALES.ENGLISH,
  setLocale: (locale) =>
    set((state: IStore) => ({
      locale,
    })),
}));
