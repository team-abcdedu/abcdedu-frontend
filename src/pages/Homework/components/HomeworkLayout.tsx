import { useQuery } from '@tanstack/react-query';

import HomeworkApi from '@/services/homework';

import HomeworkDescription from './HomeworkDescription';
import HomeworkForm from './HomeworkForm';

function HomeworkLayout() {
  const { data: homework } = useQuery({
    queryKey: ['homework'],
    queryFn: () => HomeworkApi.getRepresentativeHomework(),
  });

  if (!homework) {
    return null;
  }

  return (
    <div className={'w-full h-full'}>
      <HomeworkDescription homework={homework} />
      <HomeworkForm homework={homework} />
    </div>
  );
}

export default HomeworkLayout;
