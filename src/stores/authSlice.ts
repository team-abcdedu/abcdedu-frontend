import { StateCreator } from 'zustand';

type State = {
  accessToken: string | null;
  isAutoLogin: boolean;
};

type Actions = {
  fetchAccessToken: (accessToken: string | null) => void;
  resetAuthState: () => void;
  setIsAutoLogin: () => void;
};

export type AuthSlice = State & Actions;

const initialState: State = {
  accessToken: null,
  isAutoLogin: false,
};

export const createAuthSlice: StateCreator<AuthSlice> = set => ({
  ...initialState,
  fetchAccessToken: accessToken => set({ accessToken }),
  resetAuthState: () => set(initialState),
  setIsAutoLogin: () => set({ isAutoLogin: true }),
});
