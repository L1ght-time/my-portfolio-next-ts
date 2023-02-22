import { create } from 'zustand';

import { LOCALES } from '@/i18n';
import { TLocalesKeys } from '@/types';

interface IStore {
  isOpen: boolean;
  setOpen: () => void;
  locale: TLocalesKeys;
  setLocale: (value: TLocalesKeys) => void;
}

export const useLayoutStore = create<IStore>((set) => ({
  isOpen: true,
  setOpen: () => set((state: IStore) => ({ isOpen: !state.isOpen })),
  locale: LOCALES.en,
  setLocale: (locale) =>
    set(() => ({
      locale,
    })),
}));
