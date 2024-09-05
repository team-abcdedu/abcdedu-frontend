import { TableColumnMap, TableColumns } from '../types';

export const tableColumns: TableColumns = {
  class: ['id', 'createdAt', 'title', 'description', 'list', 'manage'],
  assignment: ['id', 'createdAt', 'name'],
  survey: ['id', 'createdAt', 'class', 'name'],
};

export const tableColumnMap: TableColumnMap = {
  class: {
    id: 'ID',
    createdAt: '생성일',
    title: '클래스명',
    description: '설명',
    list: '목록',
    manage: '관리',
  },
  assignment: {
    id: 'ID',
    createdAt: '제출일',
    name: '이름',
  },
  survey: {
    id: 'ID',
    createdAt: '제출일',
    class: '클래스',
    name: '이름',
  },
};
