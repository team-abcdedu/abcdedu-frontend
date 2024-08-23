function Hero() {
  return (
    <section
      className={
        'min-w-0 min-h-[600px] h-max flex flex-col justify-center px-24'
      }
    >
      <div
        className={
          'flex flex-col w-auto self-center justify-start gap-y-12 max-w-[800px]'
        }
      >
        <p className={'text-18 text-neutral-400 text-center'}>
          AI & Data 사회에서 진로를 준비하기 위한 ABCDEdu만의 특별한 수업!
        </p>
        <h1 className={'text-80 font-bold text-primary-300 text-center'}>
          ABCD CLASSES
        </h1>
      </div>
      <button
        className={
          'w-auto min-w-[100px] min-h-[50px] self-center text-18 text-primary-300 font-medium text-center border-2 rounded-[10px] border-primary-300 py-8 px-16 mt-40 hover:bg-primary-50'
        }
      >
        커리큘럼 보기
      </button>
    </section>
  );
}

export default Hero;
