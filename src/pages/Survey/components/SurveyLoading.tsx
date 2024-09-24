import Skeleton from '@/components/Skeleton';

function SurveyLoading() {
  return (
    <>
      {/* md 기준 */}
      <div
        className={
          'md:hidden w-full min-h-[700px] px-30 pt-60 flex flex-col items-center gap-40'
        }
      >
        <Skeleton w={60} h={60} wUnit={'%'} />
        <div className={'w-full h-full flex-col-center mt-40'}>
          <Skeleton w={80} h={230} wUnit={'%'} />
        </div>

        <div className={'w-full flex-col-center mt-40'}>
          <Skeleton w={50} h={80} wUnit={'%'} />
        </div>
      </div>
      <div
        className={
          'max-md:hidden w-full min-h-[700px] px-30 pt-60 flex flex-col items-center gap-40'
        }
      >
        <Skeleton w={500} h={70} />
        <div className={'w-full h-full flex-col-center mt-40'}>
          <Skeleton w={700} h={250} />
        </div>

        <div className={'w-full flex-col-center mt-40'}>
          <Skeleton w={600} h={120} />
        </div>
      </div>

      {/* 스크린 리더 메시지 */}
      <span className={'sr-only'} aria-live={'polite'}>
        Loading...
      </span>
    </>
  );
}

export default SurveyLoading;
