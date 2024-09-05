export interface ClassTableData {
  id: string;
  createdAt: string;
  title: string;
  description: string;
  list: string[];
}

export interface ClassTableColumns extends ClassTableData {
  manage: string;
}

export interface AssignmentTableColumns {
  id: string;
  createdAt: string;
  name: string;
}

export interface SurveyTableColumns {
  id: string;
  createdAt: string;
  class: string;
  name: string;
}

export interface TableColumns {
  class: Array<keyof ClassTableColumns>;
  assignment: Array<keyof AssignmentTableColumns>;
  survey: Array<keyof SurveyTableColumns>;
}

export interface TableColumnMap {
  class: {
    id: string;
    createdAt: string;
    title: string;
    description: string;
    list: string;
    manage: string;
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
}
