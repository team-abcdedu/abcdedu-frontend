import { ClassData } from '@/types/class';
import { ContactSummary } from '@/types/contact';
import { HomeworkSummary } from '@/types/homework';

export interface SurveyTableData {
  id: string;
  createdAt: string;
  class: string;
  name: string;
}

export interface TableColumns {
  class: Array<keyof ClassData>;
  homework: Array<keyof HomeworkSummary>;
  survey: Array<keyof SurveyTableData>;
  contact: Array<keyof ContactSummary>;
}

export interface TableColumnMap {
  class: {
    title: string;
    subTitle: string;
    description: string;
    subClasses: string;
  };
  homework: {
    id: string;
    title: string;
    description: string;
  };
  survey: {
    id: string;
    createdAt: string;
    class: string;
    name: string;
  };
  contact: {
    contactId: string;
    type: string;
    title: string;
    userName: string;
    createdAt: string;
  };
}
