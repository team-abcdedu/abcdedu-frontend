import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Head from '@/components/Head';

import SubClassNavigationCardGroup from '../components/SubClassNavigationCardGroup';
import SubClassOverview from '../components/SubClassOverview';
import { classInfoMap } from '../constants';

function Class() {
  const navigate = useNavigate();
  const { classId } = useParams();
  const classInfo = classInfoMap[`${classId?.toUpperCase()}`];
  const { title, subTitle, description } = classInfo || {};

  useEffect(() => {
    if (!classInfo) {
      navigate('/classes');
    }
  }, [navigate, classInfo]);

  return (
    <>
      <Head title={`ABCDEdu-${title}-${subTitle}`} description={description} />
      <SubClassOverview
        title={title}
        subTitle={subTitle}
        description={description}
      />
      <SubClassNavigationCardGroup classInfo={classInfo} />
    </>
  );
}

export default Class;
