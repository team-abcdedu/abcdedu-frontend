function Hero() {
  return (
    <section
      className={
        'min-w-0 min-h-[600px] h-max px-30 flex flex-col justify-center'
      }
    >
      <div
        className={
          'flex flex-col w-auto self-center justify-start gap-y-12 max-w-[800px]'
        }
      >
        <p className={'text-18 text-neutral-400 text-center'}>
          ABCDEdu 커뮤니티
        </p>
        <h1
          className={
            'font-bold text-primary-300 text-center text-40 md:text-50 lg:text-80 '
          }
        >
          전국 학생들이 하나로 모이는 공간!
        </h1>
      </div>
    </section>
  );
}

export default Hero;
