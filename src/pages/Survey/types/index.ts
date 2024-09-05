export interface SubClassItem {
  id: string;
  title: string;
}

export interface SurveyInfo {
  index: string;
  question: string;
  type: string;
  options?: string[];
  required: boolean;
}
