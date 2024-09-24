import { StateCreator } from 'zustand';

type State = {
  headerRef: HTMLElement | null;
};

type Actions = {
  setHeaderRef: (headerRef: HTMLElement | null) => void;
};

export type HeaderSlice = State & Actions;

const initialState: State = {
  headerRef: null,
};

export const createHeaderSlice: StateCreator<HeaderSlice> = set => ({
  ...initialState,
  setHeaderRef: headerRef => set({ headerRef }),
});
