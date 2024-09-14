import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Head from '@/components/Head';

import SubClassContent from '../../components/SubClassContent';
import SubClassNavigationCardGroup from '../../components/SubClassNavigationCardGroup';
import SubClassOverview from '../../components/SubClassOverview';
import { classInfoMap } from '../../constants';

function SubClass() {
  const navigate = useNavigate();
  const { classId, subClassId } = useParams();
  const classInfo = classInfoMap[`${classId?.toUpperCase()}`];
  const subClassInfo = classInfo?.subClasses.find(
    c => c.code === subClassId?.toUpperCase(),
  );

  const { description } = classInfo || {};
  const { code, title: subClassTitle } = subClassInfo || {};

  useEffect(() => {
    if (!classInfo) {
      navigate(`/classes/${classId || ''}`);
    }
  }, [navigate, classInfo, classId]);

  return (
    <div>
      <Head
        title={`ABCDEdu-Class ${code}-${subClassTitle}`}
        description={description}
      />
      <SubClassOverview
        title={`Class\n${code}`}
        subTitle={subClassTitle || ''}
        description={description}
      />
      <SubClassContent
        subClassCode={code || ''}
        subClassTitle={subClassTitle || ''}
      />
      <SubClassNavigationCardGroup classInfo={classInfo} />
    </div>
  );
}

export default SubClass;
