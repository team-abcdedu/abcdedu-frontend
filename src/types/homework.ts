export interface QuestionOption {
  index: number;
  content: string;
}

export type QuestionType =
  | 'SUBJECTIVE'
  | 'SINGLE_OPTION'
  | 'MULTIPLE_OPTION'
  | 'SHORT_ANSWER';

export interface QuestionInfo {
  index: number;
  type: QuestionType;
  title: string;
  description: string;
  score: number;
  options?: QuestionOption[];
}

export interface HomeworkBrief {
  id: number;
  title: string;
  subTitle: string;
  description: string;
}

export interface HomeworkInfo extends HomeworkBrief {
  questions: QuestionInfo[];
  additionalDescription: string;
}

export interface HomeworksInfo {
  content: HomeworkBrief[];
  currentPage: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
  last: boolean;
}

export interface MyHomeworkAnswerInfo {
  questionId: number;
  content?: string;
  optionIndex?: number;
  optionIndexes?: number[];
}
