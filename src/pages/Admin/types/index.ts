export interface AdminTableColumns<T> {
  columnList: Array<keyof T>;
  columnLabels: {
    [key in keyof T]: string;
  };
}
