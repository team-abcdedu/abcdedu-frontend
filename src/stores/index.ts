import { create } from 'zustand';

import { AuthSlice, createPersistedAuthSlice } from './authSlice';

type StoreState = AuthSlice;

const useBoundStore = create<StoreState>()((...a) => ({
  ...createPersistedAuthSlice(...a),
}));

export default useBoundStore;
