export interface SubClassData {
  title: string;
  orderNumber: number;
  description: string;
  subClassId: number;
}

export interface ClassData {
  title: string;
  subTitle: string;
  description: string;
  subClasses: SubClassData[];
}

export type SubClassIdMap = { [key: string]: number };

export type FileData = {
  assignmentType: string;
  assignmentFileId: number;
};
