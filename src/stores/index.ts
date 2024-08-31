import { create } from 'zustand';

import { AuthSlice, createPersistedAuthSlice } from './authSlice';
import { UserSlice, createUserSlice } from './userSlice';

type StoreState = AuthSlice & UserSlice;

const useBoundStore = create<StoreState>()((...a) => ({
  ...createPersistedAuthSlice(...a),
  ...createUserSlice(...a),
}));

export default useBoundStore;
