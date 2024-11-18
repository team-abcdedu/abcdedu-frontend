import { ClassData } from '@/types/class';
import { ContactSummary } from '@/types/contact';
import { HomeworkSummary } from '@/types/homework';
import { UserSummary } from '@/types/user';

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
  user: Array<keyof UserSummary>;
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
  user: {
    memberId: string;
    role: string;
    name: string;
    email: string;
    school: string;
    studentId: string;
    createdAt: string;
  };
}

export interface AdminTableColumns<T> {
  columnList: Array<keyof T>;
  columnLabels: {
    [key in keyof T]: string;
  };
}
