import { HomeworkInfo } from '@/types/homework';

export const mockHomework: HomeworkInfo = {
  title: '사회 문제 해결을 위한 인공지능 설계',
  subTitle: '인공지능으로 사회문제를 해결한 사례 시청',
  description:
    '다양한 사례를 통해 인공지능이 사회문제를 해결하기 위해 어떻게 사용되는지 알아보자.\n그리고 다음 과제를 수행해보자.',
  questionGetResponses: [
    {
      orderNumber: '1',
      content: '해결하고 싶은 현재 또는 미래 사회의 문제 찾기',
      isAnswerRequired: true,
    },
    {
      orderNumber: '2',
      content: '문제를 해결하기 위한 인공지능 아이디어 제시',
      isAnswerRequired: true,
    },
    {
      orderNumber: '3',
      content:
        '현재 나의 부족한 수학 지식이 무엇인지 파악하고 앞으로의 공부 계획 세우기',
      isAnswerRequired: true,
    },
  ],
};
