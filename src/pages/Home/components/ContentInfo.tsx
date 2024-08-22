import { imageUrls } from '../constants/imageUrls';

export default function ContentInfo() {
  const { contentInfo } = imageUrls;

  return (
    <section className='bg-white px-16 py-100'>
      <div className='flex-row-center gap-40 max-md:flex-col-center max-md:gap-0'>
        <div className='flex-col-center py-10 pl-10 gap-20 leading-[1.4] font-bold max-w-[400px] w-full'>
          <h2 className='text-47'>최고의 전문가들이 만든 콘텐츠</h2>
          <p className='text-20 text-neutral-500 max-md:font-semibold'>
            저희가 만든 교육 콘텐츠들은 최고의 수학교육 전문가와 인공지능
            전문가들이 만나 치열한 고민 끝에 탄생한 콘텐츠입니다. <br /> <br />
            2022년부터 연간 30회 이상씩 누적된 강의를 통해 계속해서 다듬어지고,
            업데이트되어 최상의 퀄리티를 유지하고 있습니다.
          </p>
        </div>
        <div className='max-w-[400px] [&>img]:w-full'>
          <img src={contentInfo} alt='content-img' />
        </div>
      </div>
    </section>
  );
}
