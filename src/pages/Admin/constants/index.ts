import { ClassData } from '@/types/class';
import { ContactSummary, ContactTypeLabel } from '@/types/contact';
import { HomeworkSummary } from '@/types/homework';
import { SurveySummary } from '@/types/survey';
import { UserSummary } from '@/types/user';

import { AdminTableColumns } from '../types';

export const classTableColumns: AdminTableColumns<ClassData> = {
  columnList: ['title', 'subTitle', 'description', 'subClasses'],
  columnLabels: {
    title: '클래스명',
    subTitle: '부제목',
    description: '설명',
    subClasses: '서브클래스',
  },
};

export const homeworkTableColumns: AdminTableColumns<
  HomeworkSummary & { repliesDownload: string }
> = {
  columnList: ['id', 'title', 'writer', 'updatedDate', 'repliesDownload'],
  columnLabels: {
    id: 'ID',
    title: '제목',
    writer: '작성자',
    updatedDate: '최종 수정일',
    repliesDownload: '응답 다운로드',
  },
};

export const surveyTableColumns: AdminTableColumns<SurveySummary> = {
  columnList: ['id', 'title', 'createdAt', 'writerName'],
  columnLabels: {
    id: 'ID',
    title: '제목',
    createdAt: '제출일',
    writerName: '작성자',
  },
};

export const contactTableColumns: AdminTableColumns<ContactSummary> = {
  columnList: ['contactId', 'type', 'title', 'userName', 'createdAt'],
  columnLabels: {
    contactId: 'ID',
    type: '문의 유형',
    title: '문의 제목',
    userName: '작성자',
    createdAt: '작성일',
  },
};

export const userTableColumns: AdminTableColumns<UserSummary> = {
  columnList: [
    'memberId',
    'role',
    'name',
    'email',
    'school',
    'studentId',
    'createdAt',
  ],
  columnLabels: {
    memberId: '회원번호',
    role: '등급',
    name: '이름',
    email: '이메일',
    school: '학교',
    studentId: '학번',
    createdAt: '가입일',
  },
};

export const contactTypeLabel: ContactTypeLabel = {
  class: '강의 의뢰',
  training: '교사 연수 의뢰',
  etc: '기타 문의',
};
