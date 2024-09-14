import { ClassInfoMap, ExamInfoMap, TempExamInfoMap } from '../types';

export const curriculumImgUrl =
  'https://c48aa73694122edae77e6fe97fafbfbe.cdn.bubble.io/f1723138717697x280065903378054820/%E1%84%8F%E1%85%A5%E1%84%85%E1%85%B5%E1%84%8F%E1%85%B2%E1%86%AF%E1%84%85%E1%85%A5%E1%86%B7.svg';

export const mediaList = [
  '인공지능 눈길',
  '인공지능 영실이',
  '스타트업',
  'AI, Math, Computer',
  'Atari Games',
];

export const classInfoMap: ClassInfoMap = {
  A: {
    title: 'Class A',
    subTitle: '인공지능 강의',
    description:
      '인공지능에게 대체되지 않는 인간지능이 되기 위해 인공지능에 대한 기본 원리를 학습하는 수업',
    subClasses: [
      { code: 'A-1', title: '학생을 위한\n머신러닝', to: '/classes/a/a-1' },
      { code: 'A-2', title: '학생을 위한\n딥러닝', to: '/classes/a/a-2' },
      {
        code: 'A-3',
        title: '인공지능의\n수학적 기초',
        to: '/classes/a/a-3',
      },
      { code: 'A-4', title: 'ChatGPT의\n수학적 기초', to: '/classes/a/a-4' },
    ],
  },
  B: {
    title: 'Class B',
    subTitle: '',
    description: '',
    subClasses: [
      { code: 'B-1', title: '데이터 수집과 저장', to: '/classes/b/b-1' },
      { code: 'B-2', title: '데이터 처리', to: '/classes/b/b-2' },
      { code: 'B-3', title: '데이터 시각화', to: '/classes/b/b-3' },
      { code: 'B-4', title: '빅데이터 분석과 통계', to: '/classes/b/b-4' },
    ],
  },
  C: {
    title: 'Class C',
    subTitle: '인공지능 강의',
    description: '인공신경망 설계',
    subClasses: [
      {
        code: 'C-1',
        title: '컴퓨터의 기본원리',
        to: '/classes/c/c-1',
      },
      {
        code: 'C-2',
        title: '코딩 및 프로그래밍 개론',
        to: '/classes/c/c-2',
      },
      {
        code: 'C-3',
        title: 'Python 프로그래밍',
        to: '/classes/c/c-3',
      },
      {
        code: 'C-4',
        title: 'C, C++ 프로그래밍',
        to: '/classes/c/c-4',
      },
      {
        code: 'C-5',
        title: '눈으로 이해하는 인공신경망',
        to: '/classes/c/c-5',
      },
      {
        code: 'C-6',
        title: 'Python으로 이해하는 인공신경망',
        to: '/classes/c/c-6',
      },
    ],
  },
  D: {
    title: 'Class D',
    subTitle: '',
    description: '',
    subClasses: [
      {
        code: 'D-1',
        title: 'ChatGPT를 활용한 전공 탐색 프로젝트',
        to: '/classes/d/d-1',
      },
    ],
  },
};

export const examInfoMap: ExamInfoMap = {
  'A-2': {
    title: 'Chapter 5. ChatGPT의 수학적 기초의 이해',
    questions: [
      '인공지능, 머신러닝, 딥러닝의 관계를 설명해봅시다.',
      '인공지능을 만들기 위해 우리가 배워야 하는 주요 수학의 분야는 무엇이 있는지 나열해보고, 각 분야에 대해 간단히 설명해봅시다.',
      '텍스트 생성형 인공지능을 만들기 위한 핵심 수학적 개념이 무엇인가요?\n그리고 왜 그러한 수학적 개념을 사용하는지 이유를 설명해봅시다.',
      'ChatGPT를 만들기 위한 핵심 원리 세 가지를 우리가 배운 수학 개념을 이용하여 설명해봅시다.',
    ],
  },
};

export const tempExamInfoMap: TempExamInfoMap = {
  'A-2': {
    pdf: 'https://www.soundczech.cz/temp/lorem-ipsum.pdf',
    hwp: 'https://cdn.hancom.com/link/docs/한글문서파일형식_배포용문서_revision1.2.hwp',
  },
  'C-1': {
    pdf: 'https://www.soundczech.cz/temp/lorem-ipsum.pdf',
    hwp: 'https://cdn.hancom.com/link/docs/한글문서파일형식_배포용문서_revision1.2.hwp',
  },
  'D-1': {
    pdf: 'https://www.soundczech.cz/temp/lorem-ipsum.pdf',
    hwp: 'https://cdn.hancom.com/link/docs/한글문서파일형식_배포용문서_revision1.2.hwp',
  },
};
