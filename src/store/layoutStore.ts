import { create } from 'zustand';

interface IStore {
  isOpen: boolean;
  setOpen: () => void;
}

export const useLayoutStore = create<IStore>((set) => ({
  isOpen: true,
  setOpen: () => set((state: IStore) => ({ isOpen: !state.isOpen })),
}));
