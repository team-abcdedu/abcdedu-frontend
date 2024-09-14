import { useEffect } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';

import Head from '@/components/Head';
import useGetClass from '@/hooks/class/useGetClass';

import SubClassNavigationCardGroup from './SubClassNavigationCardGroup';
import SubClassOverview from './SubClassOverview';

function ClassLayout() {
  const { data, isError, isLoading } = useGetClass();
  const { classId, subClassId } = useParams();
  const navigate = useNavigate();

  const classData = data?.find(d => d.type === classId?.toUpperCase());
  const subClassData = classData?.subClasses.find(
    d => d.orderNumber === Number(subClassId),
  );

  useEffect(() => {
    if (data && (!classData || (subClassId && !subClassData))) {
      alert('존재하지 않는 클래스입니다.');
      navigate('/classes');
    }
  }, [data, classData, subClassId, subClassData, navigate]);

  if (isError || isLoading) {
    return null;
  }

  if (!classData) {
    return null;
  }

  return (
    <>
      <Head
        title={`ABCDEdu-${subClassData ? subClassData.title : classData.title}`}
        description={
          subClassData ? subClassData.description : classData.description
        }
      />
      <SubClassOverview
        viewData={subClassData ?? classData}
        classTitle={classData.title}
      />
      <Outlet />
      <SubClassNavigationCardGroup classData={classData} />
    </>
  );
}

export default ClassLayout;
