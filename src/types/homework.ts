export interface HomeworkSummary {
  id: number;
  title: string;
  subTitle: string;
}

export interface HomeworkQuestion {
  orderNumber: string;
  content: string;
  isAnswerRequired: boolean;
}

export type HomeworkInfo = Omit<HomeworkSummary, 'id'> & {
  description: string;
  questionGetResponses: HomeworkQuestion[];
};

export interface HomeworkAnswer {
  answer: string;
}
