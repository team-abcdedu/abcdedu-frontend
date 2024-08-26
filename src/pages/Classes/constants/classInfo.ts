import { ClassInfoMap } from '@/types/classTypes';

export const mediaList = [
  '인공지능 눈길',
  '인공지능 영실이',
  '스타트업',
  'AI, Math, Computer',
  'Atari Games',
];

export const classInfoMap: ClassInfoMap = {
  A: {
    label: 'Class A',
    title: '인공지능 강의',
    description:
      '인공지능에게 대체되지 않는 인간지능이 되기 위해 인공지능에 대한 기본 원리를 학습하는 수업',
    lessons: [
      { code: 'A-1', title: '인공지능의\n수학적 기초', to: '/class_a_1' },
      { code: 'A-2', title: 'ChatGPT의\n수학적 기초', to: '/class_a_2' },
      { code: 'A-3', title: '눈으로 이해하는\n인공신경망', to: '/class_a_3' },
      { code: 'A-4', title: '창의 수학\n연구소', to: '/class_a_4' },
    ],
  },
  B: {
    label: 'Class B',
    title: '',
    description: '',
    lessons: [
      { code: 'B-1', title: '빅데이터', to: '/class_b_1' },
      { code: 'B-2', title: '데이터베이스', to: '/class_b_2' },
      { code: 'B-3', title: '데이터 분석', to: '/class_b_3' },
      { code: 'B-4', title: '데이터 관리 도구', to: '/class_b_4' },
    ],
  },
  C: {
    label: 'Class C',
    title: '인공지능 강의',
    description: '',
    lessons: [
      {
        code: 'C-1',
        title: '눈으로 이해하는 인공신경망\n(코드 없이 인공신경망 설계하기)',
        to: '/class_c_1',
      },
      {
        code: 'C-2',
        title: '파이썬으로 이해하는 인공신경망',
        to: '/class_c_2',
      },
    ],
  },
  D: {
    label: 'Class D',
    title: '',
    description: '',
    lessons: [
      { code: 'D-1', title: '첨단 융합', to: '/class_d_1' },
      { code: 'D-2', title: '인문 ・ 사회', to: '/class_d_2' },
      { code: 'D-3', title: '수리 ・ 과학', to: '/class_d_3' },
      { code: 'D-4', title: '창의 ・ 예술', to: '/class_d_4' },
    ],
  },
};
