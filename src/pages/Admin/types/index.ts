import { ClassData } from '@/types/class';
import { ContactSummary } from '@/types/contact';

export interface AssignmentTableData {
  id: string;
  createdAt: string;
  name: string;
}

export interface SurveyTableData {
  id: string;
  createdAt: string;
  class: string;
  name: string;
}

export interface TableColumns {
  class: Array<keyof ClassData>;
  assignment: Array<keyof AssignmentTableData>;
  survey: Array<keyof SurveyTableData>;
  contact: Array<keyof ContactSummary>;
}

export interface TableColumnMap {
  class: {
    title: string;
    type: string;
    description: string;
    subClasses: string;
  };
  assignment: {
    id: string;
    createdAt: string;
    name: string;
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
