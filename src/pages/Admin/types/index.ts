export interface SurveyTableData {
  id: string;
  createdAt: string;
  class: string;
  name: string;
}

export interface AdminTableColumns<T> {
  columnList: Array<keyof T>;
  columnLabels: {
    [key in keyof T]: string;
  };
}
