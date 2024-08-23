import Envelop from '@/assets/envelope.svg?react';

export default function Inquiry() {
  return (
    <section
      className='flex-col-center gap-30 px-70 py-70 min-h-[536px] 
      bg-gradient-to-b from-[#8ba5ff] to-primary-300'
    >
      <h2 className='text-center text-white text-40 font-bold leading-[1.4] max-xs:text-36'>
        지금 바로! <br /> 학생들에게 새로운 배움의 기회를 제공해 주세요
      </h2>
      <Envelop className='w-90 max-xs:w-70 h-fit py-5 fill-primary-300' />
      <button
        type='button'
        className='w-248 h-44 bg-white mt-20 mb-30 px-16 py-8 rounded-[20px] 
        btn-white-wb font-semibold text-primary-300 text-15'
      >
        ABCDEdu 강의 의뢰하기
      </button>
    </section>
  );
}
