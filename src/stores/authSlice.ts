import { StateCreator } from 'zustand';

type State = {
  isAutoLogin: boolean;
};

type Actions = {
  resetAuthState: () => void;
  setIsAutoLogin: () => void;
};

export type AuthSlice = State & Actions;

const initialState: State = {
  isAutoLogin: false,
};

export const createAuthSlice: StateCreator<AuthSlice> = set => ({
  ...initialState,
  resetAuthState: () => set(initialState),
  setIsAutoLogin: () => set({ isAutoLogin: true }),
});
