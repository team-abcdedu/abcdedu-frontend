import LaurelWreath from '@/assets/icons/laurel-wreath.svg?react';

export default function ContentInfo() {
  return (
    <section
      className='bg-white px-16 flex-col-center text-center gap-30 
      h-[800px] max-sm:h-[520px]'
    >
      <div className='flex-row-center gap-12'>
        <LaurelWreath />
        <h2 className='text-24 sm:text-28 lg:text-48 font-extrabold tracking-tight '>
          최고의 전문가들이 <br />
          만든 콘텐츠
        </h2>
        <LaurelWreath className='-scale-x-100' />
      </div>
      <p className='text-18 text-[#bbb] font-medium max-sm:text-16'>
        저희가 만든 교육 콘텐츠들은 최고의 수학교육 전문가와 인공지능 전문가들이
        만나 치열한 <br />
        고민 끝에 탄생한 콘텐츠입니다. <br /> <br />
        2022년부터 연간 30회 이상씩 누적된 강의를 통해 계속해서 다듬어지고,
        업데이트되어 <br />
        최상의 퀄리티를 유지하고 있습니다.
      </p>
    </section>
  );
}
