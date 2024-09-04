export interface SubClassInfo {
  code: string;
  title: string;
  description?: string;
  to: string;
}

export interface ClassInfo {
  title: string;
  subTitle: string;
  description: string;
  subClasses: SubClassInfo[];
}

export interface ClassInfoMap {
  [title: string]: ClassInfo;
}

export interface ExamInfo {
  title: string;
  questions: string[];
}

export interface ExamInfoMap {
  [classCode: string]: ExamInfo;
}
