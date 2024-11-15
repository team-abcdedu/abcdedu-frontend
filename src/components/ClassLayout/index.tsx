import Head from '@/components/Head';
import useClassAndSubClassData from '@/hooks/class/useClassAndSubClassData';
import useGetClass from '@/hooks/class/useGetClass';

import SubClassNavigationCardGroup from './SubClassNavigationCardGroup';
import SubClassOverview from './SubClassOverview';

function ClassLayout() {
  const { isError, isLoading } = useGetClass();

  const { classData, subClassData, isSubClassPage } = useClassAndSubClassData();

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
      <SubClassOverview />
      <SubClassNavigationCardGroup />
    </>
  );
}

export default ClassLayout;
