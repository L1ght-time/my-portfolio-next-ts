// import { create } from 'zustand';
// import { persist, createJSONStorage } from 'zustand/middleware';
// import { useEffect, useState } from 'react';

// import { LOCALES, TLocalesKeys } from '@/i18n';

// interface IStore {
//   locale: TLocalesKeys;
//   setLocale: (value: TLocalesKeys) => void;
// }

// const localeKey = 'locale';

// const emptyStorage = (set) => ({
//   locale: LOCALES.en,
//   setLocale: (locale) => set(() => ({ locale })),
// });

// export const useStore = create<IStore>()(
//   persist(emptyStorage, {
//     name: localeKey,
//   }),
// );

// export const useLocaleStore = () => {
//   const store = useStore();
//   const [isHydrated, setHydrated] = useState(false);
//   useEffect(() => setHydrated(true), []);

//   return isHydrated ? store : emptyStorage();
// };
