import { useQuery } from '@tanstack/react-query';

import HomeworkForm from '@/pages/Homework/components/HomeworkForm';
import HomeworkApi from '@/services/homework';

function HomeworkLayout() {
  const { data: homework } = useQuery({
    queryKey: ['homework'],
    queryFn: () => HomeworkApi.getHomework(),
  });

  if (!homework) {
    return null;
  }

  return (
    <div className={'w-full h-full'}>
      <div
        className={
          'w-full min-h-[600px] px-30 flex-col-center gap-40 text-center break-keep'
        }
      >
        <h1 className={'w-full'}>
          <div className={'text-30 md:text-50 font-bold text-primary-300'}>
            {homework.title}
          </div>
        </h1>
        <h2 className={`w-full text-18 md:text-22 font-semibold`}>
          {homework.description}
        </h2>
        <p className={`w-full text-16 md:text-20 whitespace-pre-wrap`}>
          {homework.additionalDescription}
        </p>
      </div>
      <HomeworkForm homework={homework} />
    </div>
  );
}

export default HomeworkLayout;
