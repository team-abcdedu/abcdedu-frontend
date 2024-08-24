import { ArrowRight } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

import { ClassInfo } from '@/types/classTypes';

function ClassContents({ classInfo }: { classInfo: ClassInfo }) {
  return (
    <div
      className={
        'w-full min-h-[100px] p-30 flex flex-col border-2 border-white rounded-[20px]'
      }
    >
      <h3 className={'text-30 font-semibold text-white'}>{classInfo.label}</h3>
      <p className={'mt-5 mb-20 text-20 text-white'}>{classInfo.description}</p>
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 grid-flow-row lg:flex gap-20`}
      >
        {classInfo.lessons.map(lesson => {
          return (
            <div
              key={lesson.code}
              className={
                'min-w-[50px] min-h-[60px] p-15 flex-col-center sm:items-start grow basis-0 bg-white rounded-[20px] leading-[1.4]'
              }
            >
              <h5 className={'text-20 font-semibold text-primary-300'}>
                {lesson.code}
              </h5>
              <h5
                className={'h-full text-20 font-semibold whitespace-pre-wrap'}
              >
                {lesson.title}
              </h5>
              <Link
                to={lesson.to}
                className={'pt-10 flex items-center self-end'}
              >
                <span className={'text-15 underline'}>바로가기</span>
                <ArrowRight size={15} weight='bold' />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ClassContents;
