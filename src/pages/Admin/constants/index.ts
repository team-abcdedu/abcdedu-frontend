import { TableColumnMap, TableColumns } from '../types';

export const tableColumns: TableColumns = {
  class: ['id', 'createdAt', 'title', 'description', 'list'],
  assignment: ['id', 'createdAt', 'name'],
  survey: ['id', 'createdAt', 'class', 'name'],
  theory: ['id', 'class', 'file'],
  exam: ['id', 'createdAt', 'class', 'pdf', 'hwp'],
};

export const tableColumnMap: TableColumnMap = {
  class: {
    id: 'ID',
    createdAt: '생성일',
    title: '클래스명',
    description: '설명',
    list: '목록',
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
  theory: {
    id: 'ID',
    class: '클래스',
    file: '파일',
  },
  exam: {
    id: 'ID',
    createdAt: '생성일',
    class: '클래스',
    pdf: '과제 PDF',
    hwp: '제출용 HWP',
  },
};
