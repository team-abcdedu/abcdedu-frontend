export interface ClassTableData {
  id: string;
  createdAt: string;
  title: string;
  description: string;
  list: string[];
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
    id: string;
    createdAt: string;
    title: string;
    description: string;
    list: string;
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
