import { SurveyInfo, SurveySummary } from '@/types/survey';

export const mockSurvey: SurveyInfo = {
  title: '수업 만족도 조사',
  writerName: 'ABCDEdu',
  description:
    '안녕하세요. "중고등학생을 위한 데이터 사이언스" 교육 서비스를 제공하는 ABCDEdu입니다.\n수업을 수강해주신 학생 분들께 진심으로 감사하다는 말씀 드립니다.\n본 수업은 딥러닝을 구현하기 위해 수학이 어떻게 활용되는가에 대해 알아보는 프로그램으로, 인공지능과 관련된 일을 하기 위해 구체적으로 어떤 수학을 어떻게 공부해야 하는지에 대하여 탐구함으로써, 학교 수학을 공부하는 의미를 찾고 진로를 탐색하는 기회를 갖는 시간이었습니다.\n본 수업의 발전을 위해 아래와 같은 설문 조사에 응해주시면 감사하겠습니다.',
  questionGetResponses: [
    {
      type: 'ESSAY',
      orderNumber: '1',
      isAnswerRequired: true,
      content: '수업 전반에 대한 의견을 자유롭게 작성해주세요.',
    },
    {
      type: 'CHOICE',
      orderNumber: '1-1',
      isAnswerRequired: true,
      content: '수업의 난이도는 어떠셨나요?',
      choices: [
        { orderNumber: 1, description: '매우 쉬웠다' },
        { orderNumber: 2, description: '쉬웠다' },
        { orderNumber: 3, description: '보통이었다' },
        { orderNumber: 4, description: '어려웠다' },
        { orderNumber: 5, description: '매우 어려웠다' },
      ],
    },
    {
      type: 'CHOICE',
      orderNumber: '2',
      isAnswerRequired: true,
      content: '수업의 만족도는 어떠셨나요?',
      choices: [
        { orderNumber: 1, description: '매우 만족했다' },
        { orderNumber: 2, description: '만족했다' },
        { orderNumber: 3, description: '보통이었다' },
        { orderNumber: 4, description: '불만족했다' },
        { orderNumber: 5, description: '매우 불만족했다' },
      ],
    },
    {
      type: 'CHOICE',
      orderNumber: '2-1',
      isAnswerRequired: true,
      content: '수업의 내용은 충분했나요?',
      choices: [
        { orderNumber: 1, description: '매우 충분했다' },
        { orderNumber: 2, description: '충분했다' },
        { orderNumber: 3, description: '보통이었다' },
        { orderNumber: 4, description: '부족했다' },
        { orderNumber: 5, description: '매우 부족했다' },
      ],
    },
  ],
};

export const mockSurveyList: SurveySummary[] = [
  {
    id: 1,
    title: '수업 만족도 조사',
    createAt: '2021-08-01',
    writerName: 'ABCDEdu',
  },
  {
    id: 2,
    title: '수업 만족도 조사',
    createAt: '2021-08-01',
    writerName: 'ABCDEdu',
  },
  {
    id: 3,
    title: '수업 만족도 조사',
    createAt: '2021-08-01',
    writerName: 'ABCDEdu',
  },
  {
    id: 4,
    title: '수업 만족도 조사',
    createAt: '2021-08-01',
    writerName: 'ABCDEdu',
  },
];
