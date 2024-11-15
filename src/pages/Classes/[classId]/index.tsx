import { Outlet, useOutletContext } from 'react-router-dom';

import Head from '@/components/Head';
import useClassAndSubClassData from '@/hooks/class/useClassAndSubClassData';
import useGetClass from '@/hooks/class/useGetClass';
import { SubClassIdMap } from '@/types/class';

import SubClassNavigationCardGroup from '../components/SubClassNavigationCardGroup';
import SubClassOverview from '../components/SubClassOverview';

function Class() {
  const { classDataList, subClassIdMap, isError, isLoading } = useGetClass();

  const { classData, subClassData, isSubClassPage } = useClassAndSubClassData({
    classDataList: classDataList || [],
  });

  if (isError || isLoading) {
    return null;
  }

  if (!classData || (isSubClassPage && !subClassData)) {
    return null;
  }

  return (
    <>
      {/* 각 클래스 메인 페이지(ex. Class A 페이지)인 경우 subClassData 없음 */}
      <Head
        title={`${subClassData ? subClassData.title : classData?.subTitle} | ABCDEdu`}
        description={
          subClassData ? subClassData.description : classData?.description
        }
      />
      <SubClassOverview
        classData={classData}
        subClassData={subClassData}
        isSubClassPage={isSubClassPage}
      />
      <Outlet context={subClassIdMap satisfies SubClassIdMap} />
      <SubClassNavigationCardGroup classData={classData} />
    </>
  );
}

export function useSubClassIdMap() {
  return useOutletContext<SubClassIdMap>();
}

export default Class;
