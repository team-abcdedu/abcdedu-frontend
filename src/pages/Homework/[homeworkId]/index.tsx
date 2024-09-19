import { Navigate, useParams } from 'react-router-dom';

import HomeworkForm from '@/pages/Homework/components/HomeworkForm';

function HomeworkDetail() {
  const { homeworkId } = useParams();

  if (!homeworkId) {
    return <Navigate to={'/homework'} replace />;
  }

  return <HomeworkForm homeworkId={Number(homeworkId)} />;
}

export default HomeworkDetail;
