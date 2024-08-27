import Clock from '@/assets/icons/clock.png';
import School from '@/assets/icons/school.png';
import Students from '@/assets/icons/students.png';

import { Achievement, Review, ClassType } from '../types';

// Hero review data
export const reviews: Review[] = [
  {
    keyword: '알찬 수업',
    school: '양천고',
    grade: '고1',
    content: `"수업은 세 번이었지만 엄청 <strong>알찬 수업</strong>이라 정말 큰 도움이 되었습니다.. 오늘 진로 시간에 AI에 관련된 책을 읽었는데, 수업에서 다 배운 내용이라 <strong>쉽게 읽혀서</strong> 내심 <strong>뿌듯하고 감사했어요!</strong>"`,
  },
  {
    keyword: '유익한 수업',
    school: '고양외고',
    grade: '고1',
    content: `"들으면 들을수록 어디에서도 듣기 힘든 내용들을 많이 배울 수 있어서 <strong>유익</strong>하다고 느낄 수 있었어요! 앞으로 이번 기회에 <strong>배운 내용들을 통해 제 진로를 더 발전시켜 나갈게요.</strong> 감사합니다!!"`,
  },
  {
    keyword: '재밌는 수업',
    school: '서울여고',
    grade: '고2',
    content: `"지루할 법한 주제임에도 <strong>너무 재미있게 설명</strong>해주셔서 감사했어요! 서울대 특강 ,, 하는 <strong>내내 많이 웃고 정말 즐거웠습니다!</strong> 선생님 진짜 최고예요! 언젠가 꼭 다시 뵙고 싶어요ㅜㅜ 5일이 정말 빠르게 지나간 것 같은데, 좋은 수업 감사했습니다!"`,
  },
];

// AboutUs
export const schools =
  '성보고 고척고 계성고 여의도고 경복여고 한영고 배문고 은광여고 서울여고 대화고 한양사대부중 세현고 공항고 난곡중 동북고 서초고 충암고 서울세종고 미림여고 미사고 한백고 명덕고 진관고 양천고 한양사대부고 당곡고 신일고 신림고 동화고 인헌고 덕수중 영신고 경문고 오산고 고양외고 동명여고 성수고 보인고 선정고 진선여고 환일고 여의도여고 성신여고 남강고 여주제일고 장충고 명지고';

export const achievements: Achievement[] = [
  {
    label: `전체 강의 <br /> 누적 수업 시간&nbsp;`,
    value: 45000,
    imgUrl: Clock,
    unit: '시간',
  },
  {
    label: `인공지능 강의 <br /> 누적 학교수&nbsp;`,
    value: 63,
    imgUrl: School,
    unit: '개수',
  },
  {
    label: `인공지능 강의 <br /> 누적 학생수&nbsp;`,
    value: 3000,
    imgUrl: Students,
    unit: '명',
  },
];

// Curriculum
export const classes: ClassType[] = [
  {
    key: 'A',
    name: '인공지능',
    engName: 'Artificial Intelligence',
    chapters: [
      '인공지능의 수학적 기초',
      'ChatGPT의 수학적 기초',
      '머신러닝과 딥러닝',
      '창의 수학 연구소',
    ],
  },
  {
    key: 'B',
    name: '빅데이터',
    engName: 'Bigdata',
    chapters: ['빅데이터', '데이터베이스', '데이터 분석', '데이터 관리 도구'],
  },
  {
    key: 'C',
    name: '코딩',
    engName: 'Coding',
    chapters: [
      '컴퓨터 기초',
      '코딩 기초',
      '눈으로 이해하는 인공신경망',
      '파이썬으로 이해하는 인공신경망',
    ],
  },
  {
    key: 'D',
    name: '관심분야',
    engName: 'Domain',
    chapters: ['첨단 융합', '인문·사회', '수리·과학', '창의·예술'],
  },
];

export const classKeys = classes.map(c => c.key);
