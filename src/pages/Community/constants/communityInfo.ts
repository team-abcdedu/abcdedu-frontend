import { CommunityInfoMap } from '../types';

export const communityInfoMap: CommunityInfoMap = {
  abcdProject: {
    label: 'ABCD Project',
    description:
      '세상의 혁신이 시작되는 곳, 여러분의 ABCD 프로젝트를 공유해주세요!',
    to: '/community/project',
  },
  qna: {
    label: 'Q & A',
    description: '무엇이든 물어보세요!',
    to: '/community/qna',
  },
  free: {
    label: '자유게시판',
    description: '고교학점제 관련 정보를 공유해보아요!',
    to: '/community/free',
  },
};

export const boardMetaData = {
  free: '자유게시판',
  qna: 'Q & A',
  project: 'ABCD 프로젝트',
  document: '자료실',
};

export type Category = keyof typeof boardMetaData;
