import { create } from 'zustand';

interface IStore {
  isOpen: boolean;
  setOpen: () => void;
  language: string;
  setLanguage: (value: string) => void;
}

export const useLayoutStore = create<IStore>((set) => ({
  isOpen: true,
  setOpen: () => set((state: IStore) => ({ isOpen: !state.isOpen })),
  language: 'English',
  setLanguage: (language) =>
    set((state: IStore) => ({
      language,
    })),
}));
