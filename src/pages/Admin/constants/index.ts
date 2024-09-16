import { ContactTypeLabel } from '@/types/contact';

import { TableColumnMap, TableColumns } from '../types';

export const tableColumns: TableColumns = {
  class: ['title', 'type', 'description', 'subClasses'],
  homework: ['id', 'title', 'subTitle'],
  survey: ['id', 'createdAt', 'class', 'name'],
  contact: ['contactId', 'type', 'title', 'userName', 'createdAt'],
};

export const tableColumnMap: TableColumnMap = {
  class: {
    title: '클래스명',
    type: '타입',
    description: '설명',
    subClasses: '서브클래스',
  },
  homework: {
    id: 'ID',
    title: '제목',
    subTitle: '부제목',
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
};

export const contactTypeLabel: ContactTypeLabel = {
  class: '강의 의뢰',
  training: '교사 연수 의뢰',
  etc: '기타 문의',
};
