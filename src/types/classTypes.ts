export interface ClassInfo {
  label: string;
  description: string;
  lessons: {
    code: string;
    title: string;
  }[];
}

export interface ClassInfoMap {
  [title: string]: ClassInfo;
}
