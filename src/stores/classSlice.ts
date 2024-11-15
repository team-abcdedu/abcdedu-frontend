import { StateCreator } from 'zustand';

import { ClassData, SubClassData, SubClassIdMap } from '@/types/class';

type State = {
  subClassIdMap: SubClassIdMap | Record<string, never>;
  classData: ClassData | undefined;
  subClassData: SubClassData | undefined;
};

type Actions = {
  setSubClassIdMap: (subClassIdMap: SubClassIdMap) => void;
  setClassData: (classData: ClassData | undefined) => void;
  setSubClassData: (subClassData: SubClassData | undefined) => void;
};

export type ClassSlice = State & Actions;

const initialState: State = {
  subClassIdMap: {},
  classData: undefined,
  subClassData: undefined,
};

export const createClassSlice: StateCreator<ClassSlice> = set => ({
  ...initialState,
  setSubClassIdMap: subClassIdMap => set({ subClassIdMap }),
  setClassData: classData => set({ classData }),
  setSubClassData: subClassData => set({ subClassData }),
});
