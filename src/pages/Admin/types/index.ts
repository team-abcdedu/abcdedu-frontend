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

export interface TheoryTableData {
  id: string;
  class: string;
  file: string;
}

export interface ExamTableData {
  id: string;
  createdAt: string;
  class: string;
  pdf: string;
  hwp: string;
}

export interface TableColumns {
  class: Array<keyof ClassData>;
  assignment: Array<keyof AssignmentTableData>;
  survey: Array<keyof SurveyTableData>;
  theory: Array<keyof TheoryTableData>;
  exam: Array<keyof ExamTableData>;
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
  theory: {
    id: string;
    class: string;
    file: string;
  };
  exam: {
    id: string;
    createdAt: string;
    class: string;
    pdf: string;
    hwp: string;
  };
  contact: {
    contactId: string;
    type: string;
    title: string;
    userName: string;
    createdAt: string;
  };
}
