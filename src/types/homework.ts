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

export interface HomeworkInfo extends HomeworkSummary {
  description: string;
  questionGetResponses: HomeworkQuestion[];
}

export interface HomeworkAnswer {
  answer: string;
}
