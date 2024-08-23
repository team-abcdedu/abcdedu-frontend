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
    description:
      '인공지능 강의: 인공지능에게 대체되지 않는 인간지능이 되기 위해 인공지능에 대한 기본 원리를 학습하는 수업',
    lessons: [
      { code: 'A-1', title: '인공지능의\n수학적 기초' },
      { code: 'A-2', title: 'ChatGPT의\n수학적 기초' },
      { code: 'A-3', title: '눈으로 이해하는\n인공신경망' },
      { code: 'A-4', title: '창의 수학\n연구소' },
    ],
  },
  B: {
    label: 'Class B',
    description: '',
    lessons: [
      { code: 'B-1', title: '빅데이터' },
      { code: 'B-2', title: '데이터베이스' },
      { code: 'B-3', title: '데이터 분석' },
      { code: 'B-4', title: '데이터 관리 도구' },
    ],
  },
  C: {
    label: 'Class C',
    description: '',
    lessons: [
      {
        code: 'C-1',
        title: '눈으로 이해하는 인공신경망\n(코드 없이 인공신경망 설계하기)',
      },
      { code: 'C-2', title: '파이썬으로 이해하는 인공신경망' },
    ],
  },
  D: {
    label: 'Class D',
    description: '',
    lessons: [
      { code: 'D-1', title: '첨단 융합' },
      { code: 'D-2', title: '인문 ・ 사회' },
      { code: 'D-3', title: '수리 ・ 과학' },
      { code: 'D-4', title: '창의 ・ 예술' },
    ],
  },
};
