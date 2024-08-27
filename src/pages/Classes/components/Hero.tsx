import { useState } from 'react';

import { curriculumImgUrl } from '@/pages/Classes/constants/imgUrl';

function Hero() {
  const [showCurriculum, setShowCurriculum] = useState(false);

  return (
    <section>
      <div
        className={
          'min-w-0 min-h-[600px] h-max px-24 flex flex-col justify-center'
        }
      >
        <div
          className={
            'max-w-[800px] w-auto flex flex-col self-center justify-start gap-y-12'
          }
        >
          <p className={'text-18 text-center text-neutral-400'}>
            AI & Data 사회에서 진로를 준비하기 위한 ABCDEdu만의 특별한 수업!
          </p>
          <h1 className={'text-80 font-bold text-center text-primary-300 '}>
            ABCD CLASSES
          </h1>
        </div>
        <button
          className={
            'w-auto min-w-100 min-h-50 mt-40 px-16 py-8 self-center text-18 font-medium text-center text-primary-300 btn-white-pb !border-2 rounded-[10px]'
          }
          onClick={() => setShowCurriculum(!showCurriculum)}
        >
          커리큘럼 보기
        </button>
      </div>
      {showCurriculum && (
        <div className={'h-min py-100 px-50 grid place-items-center'}>
          <div className={'max-w-[800px]'}>
            <img src={curriculumImgUrl} className={''} alt={'Curriculum'} />
          </div>
        </div>
      )}
    </section>
  );
}

export default Hero;
