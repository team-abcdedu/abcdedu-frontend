import { StateCreator } from 'zustand';

import { ClassData, SubClassIdMap } from '@/types/class';

type State = {
  subClassIdMap: SubClassIdMap | Record<string, never>;
  classDataList: ClassData[];
};

type Actions = {
  setSubClassIdMap: (subClassIdMap: SubClassIdMap) => void;
  setClassDataList: (classDataList: ClassData[]) => void;
};

export type ClassSlice = State & Actions;

const initialState: State = {
  subClassIdMap: {},
  classDataList: [],
};

export const createClassSlice: StateCreator<ClassSlice> = set => ({
  ...initialState,
  setSubClassIdMap: subClassIdMap => set({ subClassIdMap }),
  setClassDataList: classDataList => set({ classDataList }),
});
