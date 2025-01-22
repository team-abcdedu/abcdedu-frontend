import Skeleton from '@/components/Skeleton';

function HomeworkFormLoading() {
  return (
    <>
      {/* md 기준 */}
      <div
        className={'max-md:hidden w-full h-[600px] flex flex-col-center gap-40'}
      >
        <Skeleton w={700} h={75} />
        <Skeleton w={400} h={40} />
        <div className={'w-full flex-col-center'}>
          <Skeleton w={800} h={35} />
        </div>
      </div>
      <div className={'md:hidden w-full h-[600px] flex flex-col-center gap-30'}>
        <Skeleton w={70} wUnit={'%'} h={75} />
        <Skeleton w={40} wUnit={'%'} h={40} />
        <div className={'w-full flex-col-center'}>
          <Skeleton w={80} wUnit={'%'} h={35} />
        </div>
      </div>

      {/* 스크린 리더 메시지 */}
      <span className={'sr-only'} aria-live={'polite'}>
        Loading...
      </span>
    </>
  );
}

export default HomeworkFormLoading;
