import { useEffect } from 'react';
import {
  Outlet,
  useNavigate,
  useOutletContext,
  useParams,
} from 'react-router-dom';

import Head from '@/components/Head';
import useGetClass from '@/hooks/class/useGetClass';
import useGetSubClassIdMap from '@/hooks/class/useGetSubClassIdMap';
import { SubClassIdMap } from '@/types/class';

import SubClassNavigationCardGroup from './SubClassNavigationCardGroup';
import SubClassOverview from './SubClassOverview';

function ClassLayout() {
  const { classId, subClassId } = useParams();
  const navigate = useNavigate();
  const { data: classes, isError, isLoading } = useGetClass();

  const classData = classes?.find(d => d.title === classId?.toUpperCase());
  const subClassData = classData?.subClasses.find(
    d => d.orderNumber === Number(subClassId),
  );

  const subClassIdMap = useGetSubClassIdMap({ classes: classes ?? [] });

  useEffect(() => {
    if (classes && (!classData || (subClassId && !subClassData))) {
      alert('존재하지 않는 클래스입니다.');
      navigate('/classes');
    }
  }, [classes, classData, subClassId, subClassData, navigate]);

  if (isError || isLoading) {
    return null;
  }

  if (!classData) {
    return null;
  }

  return (
    <>
      <Head
        title={`${subClassData ? subClassData.title : classData.subTitle} | ABCDEdu`}
        description={
          subClassData ? subClassData.description : classData.description
        }
      />
      <SubClassOverview
        viewData={subClassData ?? classData}
        classTitle={classData.title}
      />
      <Outlet context={subClassIdMap satisfies SubClassIdMap} />
      <SubClassNavigationCardGroup classData={classData} />
    </>
  );
}

export function useSubClassIdMap() {
  return useOutletContext<SubClassIdMap>();
}

export default ClassLayout;
