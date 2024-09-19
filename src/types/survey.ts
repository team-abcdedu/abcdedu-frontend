export interface SurveySummary {
  id: number;
  title: string;
  createAt: string;
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

export type SurveyInfo = Omit<SurveySummary, 'id' | 'createAt'> & {
  description: string;
  questionGetResponses: SurveyQuestion[];
};

export interface SurveyAnswer {
  answer: string;
  type: SurveyQuestionType;
}
