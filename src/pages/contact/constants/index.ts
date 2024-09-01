import EnvelopeO from '@/assets/icons/envelope-o.svg?react';
import Envelope from '@/assets/icons/envelope.svg?react';
import Inbox from '@/assets/icons/inbox.svg?react';

import { ContactItem } from '../types';

export const contactItems: ContactItem[] = [
  {
    type: 'lecture', // 임시
    label: '강의 의뢰',
    message:
      'ABCDEdu가 제공하는 교육 프로그램에 관심이 있으시면, 간단한 양식을 작성해 주세요. 빠르게 연락드리겠습니다.',
    icon: Envelope,
  },
  {
    type: 'teacher training',
    label: '교사 연수 의뢰',
    message:
      'ABCDEdu가 제공하는 교육 프로그램에 관심이 있으시면, 간단한 양식을 작성해 주세요. 빠르게 연락드리겠습니다.',
    icon: EnvelopeO,
  },
  {
    type: 'inquiry',
    label: '문의 남기기',
    message: '문의 사항을 남겨주시면 빠르게 연락드리겠습니다.',
    icon: Inbox,
  },
];
