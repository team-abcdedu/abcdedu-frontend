import { StateCreator } from 'zustand';

import { AuthModalType } from '@/types/auth';

type State = {
  isAutoLogin: boolean;
  authModalType: AuthModalType;
};

type Actions = {
  resetAuthState: () => void;
  setIsAutoLogin: () => void;
  setAuthModalType: (authModalType: AuthModalType) => void;
};

export type AuthSlice = State & Actions;

const initialState: State = {
  isAutoLogin: false,
  authModalType: 'login',
};

export const createAuthSlice: StateCreator<AuthSlice> = set => ({
  ...initialState,
  resetAuthState: () => set(initialState),
  setIsAutoLogin: () => set({ isAutoLogin: true }),
  setAuthModalType: authModalType => set({ authModalType }),
});
