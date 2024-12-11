export interface SurveySummary {
  id: number;
  title: string;
  createdAt: string;
  writerName: string;
}

export type SurveyQuestionType = 'ESSAY' | 'CHOICE';

export interface SurveyQuestionChoice {
  orderNumber: number;
  description: string;
}

export interface SurveyQuestion {
  type: SurveyQuestionType;
  orderNumber: string;
  isAnswerRequired: boolean;
  content: string;
  choices?: SurveyQuestionChoice[];
}

export type SurveyInfo = Omit<SurveySummary, 'id' | 'createdAt'> & {
  description: string;
  questionGetResponses: SurveyQuestion[];
};

export interface SurveyAnswer {
  answer: string;
  type: SurveyQuestionType;
}

export interface SurveyReplies {
  questionHeaders: string[];
  records: string[][];
}
