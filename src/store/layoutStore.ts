import { create } from 'zustand';

interface IStore {
  isOpen: boolean;
  toggleOpen: () => void;
}

export const useLayoutStore = create<IStore>((set) => ({
  isOpen: true,
  toggleOpen: () => set((state: IStore) => ({ isOpen: !state.isOpen })),
}));
