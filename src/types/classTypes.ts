export interface ClassInfo {
  code: string;
  title: string;
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
