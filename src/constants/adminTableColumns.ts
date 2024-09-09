import { TableColumnMap, TableColumns } from '@/types/admin';

export const tableColumns: TableColumns = {
  class: ['title', 'type', 'description', 'subClasses'],
  assignment: ['id', 'createdAt', 'name'],
  survey: ['id', 'createdAt', 'class', 'name'],
  theory: ['id', 'class', 'file'],
  exam: ['id', 'createdAt', 'class', 'pdf', 'hwp'],
};

export const tableColumnMap: TableColumnMap = {
  class: {
    title: '클래스명',
    type: '타입',
    description: '설명',
    subClasses: '서브클래스',
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
