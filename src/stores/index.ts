import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { ClassSlice, createClassSlice } from '@/stores/classSlice';

import { AuthSlice, createAuthSlice } from './authSlice';
import {
  EmailVerificationSlice,
  createEmailVerificationSlice,
} from './emailVerificationSlice';
import { createHeaderSlice, HeaderSlice } from './headerSlice';
import { UserSlice, createUserSlice } from './userSlice';

type StoreState = AuthSlice &
  EmailVerificationSlice &
  UserSlice &
  HeaderSlice &
  ClassSlice;

const useBoundStore = create<StoreState>()(
  persist(
    (set, get, api) => ({
      ...createAuthSlice(set, get, api),
      ...createEmailVerificationSlice(set, get, api),
      ...createUserSlice(set, get, api),
      ...createHeaderSlice(set, get, api),
      ...createClassSlice(set, get, api),
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
