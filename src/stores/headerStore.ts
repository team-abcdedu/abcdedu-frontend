import { create } from 'zustand';

type State = {
  headerRef: HTMLElement | null;
};

type Actions = {
  setHeaderRef: (headerRef: HTMLElement | null) => void;
};

const useHeaderStore = create<State & Actions>(set => ({
  headerRef: null,
  setHeaderRef: headerRef => set(() => ({ headerRef })),
}));

export default useHeaderStore;
