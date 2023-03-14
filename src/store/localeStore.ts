import { create, StoreApi } from 'zustand';
import { persist } from 'zustand/middleware';
import { useEffect, useState } from 'react';

import { LOCALES, TLocalesKeys } from '@/i18n';

interface IStore {
  locale: TLocalesKeys;
  setLocale: (value: TLocalesKeys) => void;
}

const localeKey = 'locale';

const emptyStore = (set?: StoreApi<IStore>['setState']): IStore => ({
  locale: LOCALES.en,
  setLocale: (locale) => set?.(() => ({ locale })),
});

export const useCombinedStore = create<IStore>()(
  persist<IStore>(emptyStore, {
    name: localeKey,
  }),
);

export const useLocaleStore = () => {
  const store = useCombinedStore();
  const [isHydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);

  return isHydrated ? store : emptyStore();
};
