export interface HomeworkSummary {
  id: number;
  title: string;
  description: string;
}

export interface HomeworkQuestion {
  orderNumber: string;
  content: string;
  additionalContent: string;
  isAnswerRequired: boolean;
}

export type HomeworkInfo = Omit<HomeworkSummary, 'id'> & {
  additionalDescription: string;
  questionGetResponses: HomeworkQuestion[];
};

export interface HomeworkAnswer {
  answer: string;
}

export interface HomeworkReplies {
  questionHeaders: string[];
  records: string[][];
}
