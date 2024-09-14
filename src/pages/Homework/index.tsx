import HomeworkForm from '@/pages/Homework/components/HomeworkForm';
import { mockHomework } from '@/pages/Homework/constants';
// import useGetHomework from '@/pages/Homework/hooks/useGetHomework';

function Index() {
  // const { data, isLoading, isError } = useGetHomework({ homeworkId: 1 });

  // 화면 테스트용
  const isLoading = false;
  const isError = false;
  const data = mockHomework;

  if (isError || isLoading) {
    return (
      <div className={'w-full h-[600px] flex-row-center text-center text-30'}>
        {isError ? '에러가 발생했습니다.' : '로딩 중입니다.'}
      </div>
    );
  }

  return (
    <>
      <div
        className={
          'w-full min-h-[600px] px-30 flex-col-center gap-40 text-center break-keep'
        }
      >
        <h1 className={'w-full'}>
          <div className={'text-25 text-neutral-400'}>과제</div>
          <div className={'text-30 md:text-50 font-bold text-primary-300'}>
            {data.title}
          </div>
        </h1>
        <h2 className={`w-full text-18 md:text-22 font-semibold`}>
          [{data.subTitle}]
        </h2>
        <p className={`w-full text-16 md:text-20 whitespace-pre-wrap`}>
          {data.description}
        </p>
      </div>
      <HomeworkForm
        homeworkId={data.id}
        questions={data.questions}
        additionalDescription={data.additionalDescription}
        showScore={false}
      />
    </>
  );
}

export default Index;
