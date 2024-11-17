import { Outlet, useOutletContext } from 'react-router-dom';

import Head from '@/components/Head';
import useClassDataByParams from '@/hooks/class/useClassDataByParams';
import useGetClass from '@/hooks/class/useGetClass';
import { SubClassIdMap } from '@/types/class';

import SubClassNavigationCardGroup from '../components/SubClassNavigationCardGroup';
import SubClassOverview from '../components/SubClassOverview';

function Class() {
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
      <SubClassOverview
        classData={currentPageClassData}
        subClassData={currentPageSubClassData}
        isSubClassPage={isSubClassPage}
      />
      <Outlet context={subClassIdMap satisfies SubClassIdMap} />
      <SubClassNavigationCardGroup classData={currentPageClassData} />
    </>
  );
}

export function useSubClassIdMap() {
  return useOutletContext<SubClassIdMap>();
}

export default Class;
