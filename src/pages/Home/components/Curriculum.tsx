import { useState } from 'react';
import { Link } from 'react-router-dom';

import { subjectKeys, subjects } from '../constants';

export default function Curriculum() {
  const [selected, setSelected] = useState(subjectKeys[0]);

  const active = 'bg-primary-400 text-white';

  return (
    <section
      className='w-full min-h-[1500px] flex-col-center gap-30 
      md:px-50 px-18 py-100 max-md:pb-120 bg-neutral-100'
    >
      <h2 className='md:text-48 text-28 leading-[1.3] font-extrabold tracking-tight'>
        커리큘럼 소개
      </h2>
      <p
        className='md:text-18 max-w-[680px] break-keep text-center leading-[1.3]
      text-[#bbb] font-medium'
      >
        ABCDEdu는 미래 사회에 꼭 필요하지만 학교에서 제공하기 어려운 데이터
        사이언스 교육을 Ai(인공지능), Bigdata(빅데이터), Coding(코딩),
        Domain(관심분야)으로 나누어 제공합니다.
      </p>
      <div className='max-md:hidden flex-row-center flex-wrap gap-24 mt-40 mb-70'>
        {subjectKeys.map(key => (
          <button
            type='button'
            key={key}
            onClick={() => setSelected(key)}
            className={`text-18 w-144 h-45 flex-row-center font-semibold rounded-[20px] 
            px-20 py-10 border-1 border-black/5 shadow-sm
            ${selected === key ? active : 'bg-white'}`}
          >
            클래스 {key}
          </button>
        ))}
      </div>
      <div
        className='w-full max-w-[720px] grid md:grid-cols-2 grid-cols-1 justify-items-center 
        md:gap-40 gap-32 max-md:mt-60 max-md:px-30'
      >
        {subjects.map(subject => (
          <div
            key={subject.key}
            className={`relative md:text-28 text-22 bg-white rounded-[10px] 
            w-full max-w-[340px] md:h-[400px] h-[320px] pr-24 pl-50 max-400:pl-40 pt-14
            ${subject.key === selected && 'md:shadow-card-lg'}`}
          >
            <span
              className={`block w-full text-right text-[1em] text-primary-400 
              mb-4 font-semibold
              ${
                subject.key === selected &&
                'md:underline underline-offset-4 decoration-4 md:font-extrabold'
              }`}
            >
              {subject.key}
            </span>
            <div className='flex items-center gap-10 text-primary-400 mb-22'>
              <span className='text-[1em] font-semibold'>{subject.name}</span>
              <span className='text-[0.5em]'>{subject.engName}</span>
            </div>
            <div className='flex flex-col gap-10'>
              {subject.chapters.map((chapter, i) => (
                <div
                  key={chapter}
                  className='flex items-center gap-12 font-medium'
                >
                  <span
                    className='flex-row-center w-40 h-26 text-center py-3 rounded 
                  bg-primary-400/10 text-[0.465em] text-primary-400'
                  >
                    {subject.key}-{i + 1}
                  </span>
                  <span className='text-[0.5em] text-[#4f4f4f]'>{chapter}</span>
                </div>
              ))}
            </div>
            {subject.key === selected && (
              <span
                className='max-md:hidden absolute left-18 -bottom-28 text-[120px] 
                font-extrabold text-primary-400/5'
              >
                {subject.key}
              </span>
            )}
            <Link
              to={`/classes/${subject.key.toLowerCase()}`}
              className={`text-[0.465em] font-medium absolute md:right-40 right-30 bottom-20 
            text-neutral-400 ${subject.key === selected && 'md:text-primary-400'}`}
            >
              클래스 들어가기
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
