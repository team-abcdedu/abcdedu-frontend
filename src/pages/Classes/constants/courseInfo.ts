import { CourseInfoMap } from '@/types/classTypes';

export const mediaList = [
  '인공지능 눈길',
  '인공지능 영실이',
  '스타트업',
  'AI, Math, Computer',
  'Atari Games',
];

export const courseInfoMap: CourseInfoMap = {
  A: {
    title: 'Class A',
    subTitle: '인공지능 강의',
    description:
      '인공지능에게 대체되지 않는 인간지능이 되기 위해 인공지능에 대한 기본 원리를 학습하는 수업',
    classes: [
      { code: 'A-1', title: '인공지능의\n수학적 기초', to: '/classes/a/a-1' },
      { code: 'A-2', title: 'ChatGPT의\n수학적 기초', to: '/classes/a/a-2' },
      {
        code: 'A-3',
        title: '눈으로 이해하는\n인공신경망',
        to: '/classes/a/a-3',
      },
      { code: 'A-4', title: '창의 수학\n연구소', to: '/classes/a/a-4' },
    ],
  },
  B: {
    title: 'Class B',
    subTitle: '',
    description: '',
    classes: [
      { code: 'B-1', title: '빅데이터', to: '/classes/b/b-1' },
      { code: 'B-2', title: '데이터베이스', to: '/classes/b/b-2' },
      { code: 'B-3', title: '데이터 분석', to: '/classes/b/b-3' },
      { code: 'B-4', title: '데이터 관리 도구', to: '/classes/b/b-4' },
    ],
  },
  C: {
    title: 'Class C',
    subTitle: '인공지능 강의',
    description: '인공신경망 설계',
    classes: [
      {
        code: 'C-1',
        title: '눈으로 이해하는 인공신경망\n(코드 없이 인공신경망 설계하기)',
        to: '/classes/c/c-1',
      },
      {
        code: 'C-2',
        title: '파이썬으로 이해하는 인공신경망',
        to: '/classes/c/c-2',
      },
    ],
  },
  D: {
    title: 'Class D',
    subTitle: '',
    description: '',
    classes: [
      { code: 'D-1', title: '첨단 융합', to: '/classes/d/d-1' },
      { code: 'D-2', title: '인문 ・ 사회', to: '/classes/d/d-2' },
      { code: 'D-3', title: '수리 ・ 과학', to: '/classes/d/d-3' },
      { code: 'D-4', title: '창의 ・ 예술', to: '/classes/d/d-4' },
    ],
  },
};
