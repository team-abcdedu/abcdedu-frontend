import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Head from '@/components/Head';

import ClassNavigationCardGroup from '../components/ClassNavigationCardGroup';
import ClassOverview from '../components/ClassOverview';
import { courseInfoMap } from '../constants/courseInfo';

function Course() {
  const navigate = useNavigate();
  const { courseId } = useParams();
  const courseInfo = courseInfoMap[`${courseId?.toUpperCase()}`];
  const { title, subTitle, description } = courseInfo || {};

  useEffect(() => {
    if (!courseInfo) {
      navigate('/classes');
    }
  }, [navigate, courseInfo]);

  return (
    <>
      <Head title={`ABCDEdu-${title}-${subTitle}`} description={description} />
      <ClassOverview
        title={title}
        subTitle={subTitle}
        description={description}
      />
      <ClassNavigationCardGroup courseInfo={courseInfo} />
    </>
  );
}

export default Course;
