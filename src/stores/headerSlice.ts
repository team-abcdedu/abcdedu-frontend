import { StateCreator } from 'zustand';

type State = {
  headerRef: HTMLElement | null;
  isSidebarOpen: boolean;
};

type Actions = {
  setHeaderRef: (headerRef: HTMLElement | null) => void;
  setIsSidebarOpen: (
    nextState:
      | State['isSidebarOpen']
      | ((current: State['isSidebarOpen']) => State['isSidebarOpen']),
  ) => void;
};

export type HeaderSlice = State & Actions;

const initialState: State = {
  headerRef: null,
  isSidebarOpen: false,
};

export const createHeaderSlice: StateCreator<HeaderSlice> = set => ({
  ...initialState,
  setHeaderRef: headerRef =>
    set({
      headerRef,
    }),
  setIsSidebarOpen: nextState => {
    set(state => ({
      isSidebarOpen:
        typeof nextState === 'function'
          ? nextState(state.isSidebarOpen)
          : nextState,
    }));
  },
});
