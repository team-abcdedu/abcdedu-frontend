export interface ClassTableData {
  ID: string;
  생성일: string;
  이름: string;
  설명: string;
  목록: string[];
}

export interface ClassTableColumns extends ClassTableData {
  관리: string;
}

export interface AssignmentTableColumns {
  ID: string;
  제출일: string;
  이름: string;
}

export interface SurveyTableColumns {
  ID: string;
  제출일: string;
  클래스: string;
  이름: string;
}

export interface TableColumns {
  class: Array<keyof ClassTableColumns>;
  assignment: Array<keyof AssignmentTableColumns>;
  survey: Array<keyof SurveyTableColumns>;
}
