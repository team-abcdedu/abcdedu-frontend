import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { AuthSlice, createAuthSlice } from './authSlice';
import { UserSlice, createUserSlice } from './userSlice';

type StoreState = AuthSlice & UserSlice;

const useBoundStore = create<StoreState>()(
  persist(
    (set, get, api) => ({
      ...createAuthSlice(set, get, api),
      ...createUserSlice(set, get, api),
    }),
    {
      name: 'abcdedu',
      partialize: state => ({
        isAutoLogin: state.isAutoLogin,
        user: state.user,
      }),
    },
  ),
);

export default useBoundStore;
