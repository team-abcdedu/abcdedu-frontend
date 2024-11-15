import { ClassData } from '@/types/class';

import SubClassNavigationCard from './SubClassNavigationCard';

interface SubClassNavigationCardGroupProps {
  classData: ClassData | undefined;
}

function SubClassNavigationCardGroup({
  classData,
}: SubClassNavigationCardGroupProps) {
  const { title } = classData || {};

  const lineStyle = 'w-full h-4 bg-primary-300';

  return (
    <>
      <div className={'grid grid-cols-5 sm:grid-cols-3 items-center'}>
        <div className={lineStyle}></div>
        <div
          className={
            'col-span-3 sm:col-span-1 text-25 font-semibold text-neutral-400 text-center'
          }
        >
          {title} 바로가기
        </div>
        <div className={lineStyle}></div>
      </div>
      <div className={'p-30'}>
        <SubClassNavigationCard bgColor={'neutral'} classData={classData} />
      </div>
    </>
  );
}

export default SubClassNavigationCardGroup;
