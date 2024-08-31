import { StateCreator } from 'zustand';
import { persist } from 'zustand/middleware';

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

const createAuthSlice: StateCreator<AuthSlice> = set => ({
  ...initialState,
  fetchAccessToken: accessToken => set({ accessToken }),
  resetAuthState: () => set(initialState),
  setIsAutoLogin: () => set({ isAutoLogin: true }),
});

export const createPersistedAuthSlice = persist(createAuthSlice, {
  name: 'abcdedu',
  partialize: state => ({ isAutoLogin: state.isAutoLogin }), // isAutoLogin만 localStorage에 저장
});
