import { ContactTypeLabel } from '@/types/contact';

import { TableColumnMap, TableColumns } from '../types';

export const tableColumns: TableColumns = {
  class: ['title', 'subTitle', 'description', 'subClasses'],
  homework: ['id', 'title', 'description'],
  survey: ['id', 'createdAt', 'class', 'name'],
  contact: ['contactId', 'type', 'title', 'userName', 'createdAt'],
  user: [
    'memberId',
    'role',
    'name',
    'email',
    'school',
    'studentId',
    'createdAt',
  ],
};

export const tableColumnMap: TableColumnMap = {
  class: {
    title: '클래스명',
    subTitle: '부제목',
    description: '설명',
    subClasses: '서브클래스',
  },
  homework: {
    id: 'ID',
    title: '제목',
    description: '설명',
  },
  survey: {
    id: 'ID',
    createdAt: '제출일',
    class: '클래스',
    name: '이름',
  },
  contact: {
    contactId: 'ID',
    type: '문의 유형',
    title: '문의 제목',
    userName: '작성자',
    createdAt: '작성일',
  },
  user: {
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
