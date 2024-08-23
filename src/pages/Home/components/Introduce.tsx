import { Link } from 'react-router-dom';

import { imageUrls } from '../constants/imageUrls';

export default function Information() {
  const { introduce } = imageUrls;

  const cardData = [
    {
      text: 'ABCDEdu의 인공지능 강의 누적 학생수',
      value: '3,000 +',
    },
    {
      text: '학생들이 인정하는 높은 평점',
      value: '4.5 / 5.0',
    },
  ];

  return (
    <section className='px-20 pt-100 pb-150 flex-col-center'>
      <div className='w-full mb-70'>
        <img
          className='block w-[80%] h-[80%] max-h-[350px] max-w-[350px] mx-auto'
          src={introduce}
          alt='info-img'
        />
      </div>
      <div className='flex-col-center gap-20 max-w-[1000px] text-center'>
        <h2 className='text-40 font-bold text-primary-300'>
          고교학점제 시대, <br /> 중고등학생들을 위한 데이터 사이언스 교육의
          선두 주자!
        </h2>
        <p
          className='w-auto min-w-0 whitespace-pre-wrap text-20 font-bold 
        text-neutral-400 mb-50 max-md:font-semibold'
        >
          ABCDEdu는 미래 사회에 꼭 필요하지만 학교에서 제공하기 어려운 데이터
          사이언스 교육을 <br />
          Ai(인공지능), Bigdata(빅데이터), Coding(코딩), Domain(관심분야)으로
          나누어 제공합니다.
        </p>
      </div>
      <div
        className='w-full flex justify-center items-stretch max-900:flex-col-center 
        px-60 py-30 gap-80 max-xs:px-30 max-900:gap-50'
      >
        {cardData.map(data => (
          <div
            key={data.text}
            className='bg-neutral-100 flex-1 w-full p-30 rounded-[20px] 
            shadow-lg font-bold leading-[1.4]'
          >
            <p className='mb-15 text-20 text-primary-300'>{data.text}</p>
            <span className='text-40'>{data.value}</span>
          </div>
        ))}
      </div>
      <Link
        to='/classes'
        className='flex-row-center mt-30 w-144 h-48 px-8 py-16 rounded-[20px] btn-white-pb'
      >
        <span className='text-primary-300 font-semibold'>강의 바로가기</span>
      </Link>
    </section>
  );
}
