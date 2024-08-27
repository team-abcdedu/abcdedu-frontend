export interface Review {
  keyword: string;
  school: string;
  grade: string;
  content: string;
}

export interface ClassType {
  key: string;
  name: string;
  engName: string;
  chapters: string[];
}

export interface Achievement {
  label: string;
  value: number;
  imgUrl: string;
  unit: string;
}
