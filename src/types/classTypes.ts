export interface ClassInfo {
  code: string;
  title: string;
  description?: string;
  to: string;
}

export interface CourseInfo {
  title: string;
  subTitle: string;
  description: string;
  classes: ClassInfo[];
}

export interface CourseInfoMap {
  [title: string]: CourseInfo;
}

export interface ExamInfo {
  title: string;
  questions: string[];
}

export interface ExamInfoMap {
  [classCode: string]: ExamInfo;
}
