import { ArrowRight } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

import { SubClassInfo } from '../types';

interface SubClassNavCardProps {
  subClasses: SubClassInfo[] | undefined;
  bgColor: 'neutral' | 'white';
}

function SubClassNavigationCard({ subClasses, bgColor }: SubClassNavCardProps) {
  const bgClass = bgColor === 'neutral' ? 'bg-neutral-100' : 'bg-white';
  const gridStyle =
    subClasses && subClasses.length > 4
      ? 'md:grid-cols-3'
      : 'grid-flow-row lg:flex';

  if (!subClasses) return null;

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 ${gridStyle} gap-20`}>
      {subClasses.map(subClassInfo => (
        <div
          key={subClassInfo.code}
          className={`min-w-50 min-h-60 p-15 flex-col-center sm:items-start grow basis-0 rounded-[20px] ${bgClass}`}
        >
          <h5 className={'text-20 font-semibold text-primary-300'}>
            {subClassInfo.code}
          </h5>
          <h5 className={'h-full text-20 font-semibold whitespace-pre-wrap'}>
            {subClassInfo.title}
          </h5>
          <Link
            to={subClassInfo.to}
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

export default SubClassNavigationCard;
