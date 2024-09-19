export interface Comment {
  id: number;
  writer: string;
  // email: string;
  content: string;
  createdAt: string;
}

export const comments: Comment[] = [
  {
    id: 1,
    writer: '고양이',
    createdAt: '2024-08-28T12:45',
    content: '이 글 너무 좋아요!',
  },
  {
    id: 2,
    writer: '햇살',
    createdAt: '2024-08-27T09:30',
    content: '도움이 많이 되었어요.',
  },
  {
    id: 3,
    writer: '바람',
    createdAt: '2024-08-26T15:20',
    content: '재밌게 읽었어요.',
  },
  {
    id: 4,
    writer: '바다',
    createdAt: '2024-08-25T10:10',
    content: '궁금한 점이 있어요.',
  },
  {
    id: 5,
    writer: '별빛',
    createdAt: '2024-08-24T18:00',
    content: '정말 유용한 정보네요.',
  },
  {
    id: 6,
    writer: '나무',
    createdAt: '2024-08-23T08:55',
    content: '다음 글도 기대됩니다!',
  },
  {
    id: 7,
    writer: '하늘',
    createdAt: '2024-08-22T14:30',
    content: '이해하기 쉬웠어요.',
  },
];
