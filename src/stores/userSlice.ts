import { StateCreator } from 'zustand';

import { User } from '@/types/user';

type State = {
  user: User | null;
};

type Actions = {
  setUser: (user: User) => void;
  resetUser: () => void;
};

export type UserSlice = State & Actions;

const initialState: State = {
  user: null,
};

export const createUserSlice: StateCreator<UserSlice> = set => ({
  ...initialState,
  setUser: user => set({ user }),
  resetUser: () => set(initialState),
});
