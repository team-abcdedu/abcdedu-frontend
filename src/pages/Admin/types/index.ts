export interface SubClassData {
  title: string;
  orderNumber: number;
  description: string;
  subClassId: number;
}

export interface ClassTableData {
  title: string;
  type: string;
  description: string;
  subClasses: SubClassData[];
}

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

export interface TableColumns {
  class: Array<keyof ClassTableData>;
  assignment: Array<keyof AssignmentTableData>;
  survey: Array<keyof SurveyTableData>;
  theory: Array<keyof TheoryTableData>;
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
}
