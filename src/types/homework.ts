export interface HomeworkSummary {
  id: number;
  title: string;
  updatedDate: string;
  writer: string;
}

export interface HomeworkQuestion {
  orderNumber: string;
  content: string;
  additionalContent: string;
  isAnswerRequired: boolean;
}

export interface HomeworkInfo {
  title: string;
  description: string;
  additionalDescription: string;
  questionGetResponses: HomeworkQuestion[];
}

export interface HomeworkAnswer {
  answer: string;
}

export interface HomeworkReplies {
  questionHeaders: string[];
  records: string[][];
}
