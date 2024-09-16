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

export interface HomeworkSummary {
  id: number;
  title: string;
  subTitle: string;
}

export interface HomeworkInfo extends HomeworkSummary {
  description: string;
  questions: QuestionInfo[];
  additionalDescription: string;
}

export interface MyHomeworkAnswerInfo {
  questionId: number;
  content?: string;
  optionIndex?: number;
  optionIndexes?: number[];
}
