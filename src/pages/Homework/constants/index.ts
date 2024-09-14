import { HomeworkInfo, MyHomeworkAnswerInfo } from '@/types/homework';

export const mockAnswer: MyHomeworkAnswerInfo[] = [
  {
    questionId: 1,
    content: '평소에 해결하고 싶었던 문제는 환경 문제입니다.',
  },
  {
    questionId: 2,
    content:
      '환경 문제를 해결하기 위해 인공지능을 활용한 쓰레기 수거 로봇을 제안합니다.',
  },
  {
    questionId: 3,
    content:
      '현재 나의 부족한 수학 지식은 미적분학입니다. 앞으로의 공부 계획은 미적분학을 중점적으로 공부할 것입니다.',
  },
  {
    questionId: 4,
    optionIndex: 1,
  },
  {
    questionId: 5,
    optionIndexes: [1, 2],
  },
  {
    questionId: 6,
    content: '재미있어요',
  },
];

export const mockHomework: HomeworkInfo = {
  id: 1,
  title: '사회 문제 해결을 위한 인공지능 설계',
  subTitle: '인공지능으로 사회문제를 해결한 사례 시청',
  description:
    '다양한 사례를 통해 인공지능이 사회문제를 해결하기 위해 어떻게 사용되는지 알아보자.\n그리고 다음 과제를 수행해보자.',
  questions: [
    {
      index: 1,
      type: 'SUBJECTIVE',
      title: '해결하고 싶은 현재 또는 미래 사회의 문제 찾기',
      description:
        '평소에 해결하고 싶었던 어떠한 문제가 있는가? 또는 미래 사회에 우리가 부딪히게 될 문제 중 해결하고 싶은 무언가가 있는가?\n어떠한 종류의 문제든 본인이 해결하고 싶은 현재 또는 미래 사회의 문제를 찾아서 적어보자.',
      score: 10,
    },
    {
      index: 2,
      type: 'SUBJECTIVE',
      title: '문제를 해결하기 위한 인공지능 아이디어 제시',
      description:
        '앞에서 찾은 사회 문제를 해결하기 위해 어떤 인공지능이 필요하다고 생각하는지 구체적으로 표현해보자.\n상상력을 발휘하는 것은 좋지만 실현가능성도 어느 정도 고려하자.',
      score: 10,
    },
    {
      index: 3,
      type: 'SUBJECTIVE',
      title:
        '현재 나의 부족한 수학 지식이 무엇인지 파악하고 앞으로의 공부 계획 세우기',
      description:
        '학교에서 배우는 수학의 여러 가지 주제들 중 현재 나는 어떠한 부분이 부족하다고 생각하는지 본인의 약점을 구체적으로 적어보자.\n대학교에 진학하여 인공지능과 관련된 수학을 공부하기 위해 현재 학교 수학에서 부족한 부분을 어떻게 보완해야할지, 특히 어떤 부분을 중점적으로 공부해야할지, 앞으로의 수학 공부 계획을 구체적으로 세워보자.',
      score: 10,
    },
    {
      index: 4,
      type: 'SINGLE_OPTION',
      title: '수학 공부에 대한 나의 의견은?',
      description: '수학 공부에 대한 나의 의견을 선택해주세요.',
      score: 10,
      options: [
        { index: 1, content: '재미있어요' },
        { index: 2, content: '어려워요' },
        { index: 3, content: '흥미롭지 않아요' },
      ],
    },
    {
      index: 5,
      type: 'MULTIPLE_OPTION',
      title: '수학 공부에 대한 나의 의견은?',
      description: '수학 공부에 대한 나의 의견을 선택해주세요.',
      score: 10,
      options: [
        { index: 1, content: '재미있어요' },
        { index: 2, content: '어려워요' },
        { index: 3, content: '흥미롭지 않아요' },
      ],
    },
    {
      index: 6,
      type: 'SHORT_ANSWER',
      title: '수학 공부에 대한 나의 의견은?',
      description: '수학 공부에 대한 나의 의견을 짧게 적어주세요.',
      score: 10,
    },
  ],
  additionalDescription:
    '인공지능을 활용하여 사회문제를 해결하기 위한 방법을 발표하고 토론해보자.',
};
