import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Head from '@/components/Head';
import ClassContent from '@/pages/Classes/components/ClassContent';
import ClassNavigationCardGroup from '@/pages/Classes/components/ClassNavigationCardGroup';
import ClassOverview from '@/pages/Classes/components/ClassOverview';
import { courseInfoMap } from '@/pages/Classes/constants/courseInfo';

function Class() {
  const navigate = useNavigate();
  const { courseId, classCode } = useParams();
  const courseInfo = courseInfoMap[`${courseId?.toUpperCase()}`];
  const classInfo = courseInfo?.classes.find(
    c => c.code === classCode?.toUpperCase(),
  );

  const { description } = courseInfo || {};
  const { code, title: classTitle } = classInfo || {};

  useEffect(() => {
    if (!classInfo) {
      navigate(`/classes/${courseId ?? ''}`);
    }
  }, [navigate, courseInfo]);

  return (
    <div>
      <Head
        title={`ABCDEdu-Class ${code}-${classTitle}`}
        description={description}
      />
      <ClassOverview
        title={`Class\n${code}`}
        subTitle={classTitle || ''}
        description={description}
      />
      <ClassContent />
      <ClassNavigationCardGroup courseInfo={courseInfo} />
    </div>
  );
}

export default Class;
