import { SurveyInfo } from '@/types/classTypes';

export const surveyInfo = (classTitle: string): SurveyInfo[] => {
  return [
    {
      index: '1',
      question: `본인은 [${classTitle}] 수업을 신청한 동기가 무엇이었나요?`,
      type: 'textarea',
      required: true,
    },
    {
      index: '2',
      question: '수업이 본인의 동기를 충족시키는데 도움이 되었나요?',
      type: 'radio',
      options: ['예', '아니요'],
      required: true,
    },
    {
      index: '2.1',
      question: `도움이 되었다면 어떤 부분이 어떻게 도움이 되었는지 구체적으로 말씀 부탁드려요.`,
      type: 'textarea',
      required: false,
    },
    {
      index: '2.2',
      question: `도움이 안 되었다면 그 이유가 무엇이라고 생각하는지 구체적으로 말씀 부탁드려요.`,
      type: 'textarea',
      required: false,
    },
    {
      index: '3',
      question: `수업의 난이도는 어떠했나요?`,
      type: 'radio',
      options: ['어려웠다', '적절했다', '쉬웠다'],
      required: true,
    },
    {
      index: '3.1',
      question: `어려웠다면 어떤 부분이 어려웠는지 구체적으로 말씀 부탁드려요.`,
      type: 'textarea',
      required: false,
    },
    {
      index: '4',
      question: `수업은 흥미로웠나요?`,
      type: 'radio',
      options: ['재밌었다', '들을만했다', '재미없었다'],
      required: true,
    },
    {
      index: '4.1',
      question: `재미가 없었다면 어떤 부분이 재미가 없었는지 구체적으로 말씀 부탁드려요.`,
      type: 'textarea',
      required: false,
    },
    {
      index: '5',
      question: `후배들에게 이 수업을 추천해줄 의향이 있나요?`,
      type: 'radio',
      options: ['네', '아니오'],
      required: true,
    },
    {
      index: '5.1',
      question: `향후 이 수업을 들을 후배들을 위해서 어떤 점이 개선되어야 한다고 생각하는지 구체적으로 말씀 부탁드려요.`,
      type: 'textarea',
      required: false,
    },
    {
      index: '6',
      question: `결론적으로 이 강의에 대한 전반적인 평점은?`,
      type: 'radio',
      options: ['0', '1', '2', '3', '4', '5'],
      required: true,
    },
    {
      index: '7',
      question: `한서현 선생님에게 하고 싶은 말이 있다면 자유롭게 남겨주세요! \n(시간 관계 상 특강 기간 내에 질문을 다 못 받아주어 미안해요. 추가 질문이 있으면 DM주세요! @hshverse)`,
      type: 'textarea',
      required: false,
    },
    {
      index: '',
      question: `(선택) 성실하게 피드백 해주신 분들께는 소정의 기프티콘을 선물로 보내드릴 예정입니다. \n기프티콘을 받고 싶으신 분들께서는 연락처를 남겨주시기 바랍니다. (예 : 010-1234-5678)`,
      type: 'textarea',
      required: false,
    },
  ];
};
