import { ArrowRight } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

import { ClassInfo } from '@/types/classTypes';

interface ClassNavCardProps {
  classes: ClassInfo[] | undefined;
  bgColor: 'neutral' | 'white';
}

function ClassNavigationCard({ classes, bgColor }: ClassNavCardProps) {
  const bgClass = bgColor === 'neutral' ? 'bg-neutral-100' : 'bg-white';

  if (!classes) return null;

  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 grid-flow-row lg:flex gap-20`}
    >
      {classes.map(classInfo => (
        <div
          key={classInfo.code}
          className={`min-w-50 min-h-60 p-15 flex-col-center sm:items-start grow basis-0 rounded-[20px] ${bgClass}`}
        >
          <h5 className={'text-20 font-semibold text-primary-300'}>
            {classInfo.code}
          </h5>
          <h5 className={'h-full text-20 font-semibold whitespace-pre-wrap'}>
            {classInfo.title}
          </h5>
          <Link
            to={classInfo.to}
            className={'pt-10 flex items-center self-end'}
          >
            <span className={'text-15 underline'}>바로가기</span>
            <ArrowRight size={15} weight='bold' />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ClassNavigationCard;