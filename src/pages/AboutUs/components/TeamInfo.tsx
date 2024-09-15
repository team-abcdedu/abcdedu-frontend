import { teamImage } from '../constants';

export default function TeamInfo() {
  const profileCardStyle =
    'w-full h-full max-w-[500px] pt-70 pb-60 px-24 sm:px-50 bg-neutral-100 shadow-lg rounded-[20px] font-bold';
  const infoCardStyle =
    'flex flex-col justify-center gap-24 py-30 px-24 sm:px-40 max-w-[500px] bg-white shadow-lg rounded-[20px]';
  const imgContainerStyle =
    'w-150 h-150 rounded-full border-10 border-neutral-100 absolute top-0 overflow-hidden';

  return (
    <div className='w-full leading-[1.4] pt-100'>
      <div className='flex-col-center gap-65 mt-20 mb-150 about-gradient'>
        <h2 className='text-primary-400 text-26 xs:text-30 font-bold'>
          ABCDEdu Team
        </h2>
        <p className='text-32 xs:text-40 px-24 font-bold text-white text-center break-keep'>
          중고등학생 인공지능 교육을 위한 최고의 전문가
        </p>
        <p className='text-20 sm:text-24 font-bold pt-20'>
          Edu 전문가 X AI 전문가
        </p>
      </div>
      <div className='px-24 max-w-[1088px] grid md:grid-cols-2 max-md:justify-center m-auto gap-40 md:gap-y-60'>
        <div className='flex-col-center relative pt-90'>
          <div className={imgContainerStyle}>
            <img
              src={teamImage[0]}
              alt='한서현'
              className='block w-150 h-fit object-center scale-125 -mt-30 -ml-8'
            />
          </div>
          <div className={profileCardStyle}>
            <h3 className='text-24 sm:text-30'>한서현</h3>
            <span className='block sm:text-18 text-neutral-500 font-semibold mb-20'>
              (대표 / AI-Edu 전문가)
            </span>
            <div className='flex flex-col gap-5 sm:text-18 font-normal text-left break-keep'>
              <span>• 교육학 박사 과정 (전: 수학교육, 부: 데이터사이언스)</span>
              <span>• 교육학 석사 (전: 수학교육, 부: 인공지능)</span>
              <span>• 이학사 (전: 수학교육)</span>
              <span>• 서울시 중고등학교 인공지능/수학 강사</span>
              <span>• 대한수학교육학회 사무간사</span>
              <span>
                • 초중등교원양성대학 인공지능 교육 강화 지원 국가사업 평가위원
              </span>
            </div>
          </div>
        </div>
        <div className='flex-col-center relative pt-90 max-md:order-3'>
          <div className={imgContainerStyle}>
            <img
              src={teamImage[1]}
              alt='박건도'
              className='w-full h-full object-cover'
            />
          </div>
          <div className={profileCardStyle}>
            <h3 className='text-24 sm:text-30'>박건도</h3>
            <span className='block sm:text-18 text-neutral-500 font-semibold mb-20'>
              (AI 개발)
            </span>
            <div className='flex flex-col gap-5 sm:text-18 font-normal text-left break-keep'>
              <span>• 서울대 데이터사이언스 대학원 박사과정</span>
              <span>• 서울대 데이터사이언스 대학원 석사 졸업</span>
              <span>• 서울대 수리과학부 졸업</span>
              <span>• ’23 삼성 AI Challenge 최우수상 (1위)</span>
              <span>• ’22 NAVER AI Rush 2회</span>
              <span>• ’22 과학기술정보통신부 AI경진대회 2위</span>
            </div>
          </div>
        </div>
        <div className={`${infoCardStyle} max-md:order-2 max-md:mb-20`}>
          <div className='flex flex-wrap text-20 text-primary-400 font-bold'>
            <span className='shrink-0'>[한서현 대표]&nbsp;&nbsp;</span>
            <span className='shrink-0 text-neutral-600'>
              AI-Edu Professional
            </span>
          </div>
          <p className='text-left indent-12'>
            {`한서현 대표는 교육과 인공지능을 모두 전공하고 풍부한 실전 교육 경험까지 갖춘 명실상부 "인공지능 교육 전문가"로서, 현재 서울대학교 평생교육원을 통해 서울시 중고등학교들을 대상으로 인공지능과 수학을 가르치고 있습니다.`}
            <span className='indent-12 block'>{`바야흐로 인공지능 시대, 인공지능에게 대체되지 않는 인재를 양성하겠다는 목표를 갖고, 소수의 전공자들만 배우는 어려운 인공지능 이론을 어떻게 어린 학생들에게 이해시킬 수 있을까를 고민하며 ABCDEdu를 창업했습니다. 특히 <인공지능의 수학적 기초>, <ChatGPT의 수학적 기초> 등의 강좌가 많은 인기를 끌고 있습니다.`}</span>
          </p>
        </div>
        <div className={`${infoCardStyle} max-md:order-4`}>
          <div className='flex flex-wrap text-20 text-primary-400 font-bold'>
            <span className='shrink-0'>[박건도 AI 개발자]&nbsp;&nbsp;</span>
            <span className='shrink-0 text-neutral-600'>AI Professional</span>
          </div>
          <p className='text-left indent-12'>
            {`박건도 AI개발자는 인공지능 전문가로서, 현재 서울대학교 데이터사이언스 대학원 박사과정 연구원으로 활동하고 있습니다.`}
            <br />
            <span className='indent-12 block'>
              {`한 아이의 아빠로서 평소 교육 분야에 큰 관심을 갖고 데이터 사이언스를 연구하던 중, 한서현 대표의 "ABCD"를 기반으로 한 교육 철학과 비전에 깊이 공감하여 팀에 합류하였고, 현재 중고등학생들의 눈높이에 맞는 데이터 사이언스 콘텐츠 개발에 매진하고 있습니다.`}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
