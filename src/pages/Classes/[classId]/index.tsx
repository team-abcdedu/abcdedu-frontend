import { Outlet, useOutletContext } from 'react-router-dom';

import Head from '@/components/Head';
import useClassDataByParams from '@/hooks/class/useClassDataByParams';
import useGetClass from '@/hooks/class/useGetClass';
import SubClassNavigationCardGrid from '@/pages/Classes/components/SubClassNavigationCardGrid';
import { SubClassIdMap } from '@/types/class';

import ClassContent from '../components/ClassContent';

function Class() {
  const lineStyle = 'w-full h-4 bg-primary-300';

  const { classDataList, subClassIdMap, isError, isLoading } = useGetClass();

  const { currentPageClassData, currentPageSubClassData, isSubClassPage } =
    useClassDataByParams({
      classDataList: classDataList || [],
    });

  if (isError || isLoading) {
    return null;
  }

  if (!currentPageClassData || (isSubClassPage && !currentPageSubClassData)) {
    return null;
  }

  return (
    <>
      {/* 각 클래스 메인 페이지(ex. Class A 페이지)인 경우 subClassData 없음 */}
      <Head
        title={`${currentPageSubClassData ? currentPageSubClassData.title : currentPageClassData?.subTitle} | ABCDEdu`}
        description={
          currentPageSubClassData
            ? currentPageSubClassData.description
            : currentPageClassData?.description
        }
      />
      <ClassContent
        classData={currentPageClassData}
        subClassData={currentPageSubClassData}
        isSubClassPage={isSubClassPage}
      />
      <Outlet context={subClassIdMap satisfies SubClassIdMap} />

      <div className={'grid grid-cols-5 sm:grid-cols-3 items-center'}>
        <div className={lineStyle}></div>
        <div
          className={
            'col-span-3 sm:col-span-1 text-25 font-semibold text-neutral-400 text-center'
          }
        >
          {currentPageClassData.title} 바로가기
        </div>
        <div className={lineStyle}></div>
      </div>
      <div className={'p-30'}>
        <SubClassNavigationCardGrid
          bgColor={'neutral'}
          classData={currentPageClassData}
        />
      </div>
    </>
  );
}

export function useSubClassIdMap() {
  return useOutletContext<SubClassIdMap>();
}

export default Class;
