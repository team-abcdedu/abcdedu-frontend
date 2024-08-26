export interface ClassInfo {
  label: string;
  title: string;
  description: string;
  lessons: {
    code: string;
    title: string;
    to: string;
  }[];
}

export interface ClassInfoMap {
  [title: string]: ClassInfo;
}
