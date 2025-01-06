export interface HomeworkSummary {
  id: number;
  title: string;
  updatedDate: string;
  writer: string;
  isRepresentative: boolean;
}

export interface HomeworkQuestion {
  orderNumber: string;
  content: string;
  additionalContent: string;
  isAnswerRequired: boolean;
}

export interface HomeworkInfo {
  homeworkId: number;
  title: string;
  description: string;
  additionalDescription: string;
  questionGetResponses: HomeworkQuestion[];
}

export interface HomeworkAnswer {
  answer: string;
}

export interface IHomeworkForm {
  [key: string]: string;
}
