import { Navigate, useParams } from 'react-router-dom';

import HomeworkForm from '@/pages/Homework/components/HomeworkForm';

function HomeworkDetail() {
  const { homeworkId } = useParams();

  if (!homeworkId || Number.isNaN(Number(homeworkId))) {
    alert('과제가 존재하지 않습니다.');
    return <Navigate to={'/homework'} replace />;
  }

  return <HomeworkForm homeworkId={Number(homeworkId)} />;
}

export default HomeworkDetail;
