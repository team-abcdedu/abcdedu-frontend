import useClassAndSubClassData from '@/hooks/class/useClassAndSubClassData';

import SubClassNavigationCard from './SubClassNavigationCard';

function SubClassNavigationCardGroup() {
  const { classData } = useClassAndSubClassData();
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
        <SubClassNavigationCard bgColor={'neutral'} />
      </div>
    </>
  );
}

export default SubClassNavigationCardGroup;
