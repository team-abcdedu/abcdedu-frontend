export interface SubClassData {
  title: string;
  orderNumber: number;
  description: string;
  subClassId: number;
}

export interface ClassData {
  title: string;
  type: string;
  description: string;
  subClasses: SubClassData[];
}
