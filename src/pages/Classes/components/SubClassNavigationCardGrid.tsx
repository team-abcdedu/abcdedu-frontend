import { ArrowRight } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

import { ClassData } from '@/types/class';

interface SubClassNavigationCardGridProps {
  bgColor: 'neutral' | 'white';
  classData: ClassData | undefined;
}

function SubClassNavigationCardGrid({
  bgColor,
  classData,
}: SubClassNavigationCardGridProps) {
  const { title: classTitle, subClasses } = classData || {};

  const bgClass = bgColor === 'neutral' ? 'bg-neutral-100' : 'bg-white';
  const gridStyle =
    subClasses && subClasses.length > 4
      ? 'md:grid-cols-3'
      : 'grid-flow-row lg:flex';

  if (!subClasses) return null;

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 ${gridStyle} gap-20`}>
      {subClasses.map(subClass => (
        <div
          key={subClass.orderNumber}
          className={`min-w-50 min-h-60 p-15 flex-col-center sm:items-start grow basis-0 rounded-[20px] ${bgClass}`}
        >
          <h5 className={'text-20 font-semibold text-primary-300'}>
            {classTitle}-{subClass.orderNumber}
          </h5>
          <h5 className={'h-full text-20 font-semibold break-keep'}>
            {subClass.title}
          </h5>
          <Link
            to={`/classes/${classTitle?.toLowerCase()}/${subClass.orderNumber}`}
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

export default SubClassNavigationCardGrid;
