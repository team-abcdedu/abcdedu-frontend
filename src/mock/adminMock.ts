interface AdminMock {
  id: number;
  school: string;
  studentId: string;
  name: string;
  assignmentName: string;
  submissionDate: string;
  status: string;
  content: string;
}

export const mockAdminAssignment: AdminMock[] = [
  {
    id: 1,
    school: 'school1',
    studentId: 'studentId1',
    name: 'name1',
    assignmentName: 'assignmentName1',
    submissionDate: 'submissionDate1',
    status: 'status1',
    content: 'content1',
  },
  {
    id: 2,
    school: 'school2',
    studentId: 'studentId2',
    name: 'name2',
    assignmentName: 'assignmentName2',
    submissionDate: 'submissionDate2',
    status: 'status2',
    content: 'content2',
  },
  {
    id: 3,
    school: 'school3',
    studentId: 'studentId3',
    name: 'name3',
    assignmentName: 'assignmentName3',
    submissionDate: 'submissionDate3',
    status: 'status3',
    content: 'content3',
  },
];
