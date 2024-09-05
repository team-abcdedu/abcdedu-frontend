export interface AssignmentInfo {
  title: string;
  topic: string;
  description: string;
  questions: {
    question: string;
    explanation: string[];
  }[];
}

export interface AssignmentInfoMap {
  [classCode: string]: AssignmentInfo;
}
