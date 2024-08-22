import { imageUrls } from '../constants/imageUrls';

export default function Reviews() {
  const { reviews } = imageUrls;
  const reviewCardStyle = 'p-20 bg-white shadow-lg rounded-[20px] font-bold';

  const reviewData = [
    {
      userInfo: '양천고, 고1',
      content: `"수업은 세 번이었지만 엄청 알찬 수업이라 정말 큰 도움이
              되었습니다.. 오늘 진로 시간에 AI에 관련된 책을 읽었는데, 수업에서
              다 배운 내용이라 쉽게 읽혀서 내심 뿌듯하고 감사했어요!"`,
    },
    {
      userInfo: '고양외고, 고1',
      content: `"들으면 들을수록 어디에서도 듣기 힘든 내용들을 많이 배울 수 있어서 유익하다고 느낄 수 있었어요! 
      앞으로 이번 기회에 배운 내용들을 통해 제 진로를 더 발전시켜 나갈게요. 감사합니다!!"`,
    },
    {
      userInfo: '서울여고, 고2',
      content: `"지루할 법한 주제임에도 너무 재미있게 설명해 주셔서 감사했어요! 
      서울대 특강 ,, 하는 내내 많이 웃고 정말 즐거웠습니다! 선생님 진짜 최고예요! 언젠가 꼭 다시 뵙고 싶어요ㅜㅜ
      5일이 정말 빠르게 지나간 것 같은데, 좋은 수업 감사했습니다!"`,
    },
  ];

  return (
    <section className='w-full bg-neutral-100'>
      <div className='px-16 py-150 mx-auto flex-row-center max-800:flex-col-center gap-40'>
        <div className='w-[360px] gap-20 flex-col-center px-16 xl:px-0 max-800:min-w-[80%]'>
          {reviewData.map(review => (
            <div key={review.userInfo} className={reviewCardStyle}>
              <span className='text-24'>{review.userInfo}</span>
              <p className='text-20 text-neutral-500 max-md:font-semibold'>
                {review.content}
              </p>
            </div>
          ))}
        </div>
        <div className='flex-1 max-w-[707px] [&>img]:w-full font-bold text-center'>
          <img src={reviews} alt='reviews-img' />
          <h2 className='text-36 text-primary-300 leading-[1.4] mb-10'>
            높은 강의 만족도
          </h2>
          <p className='text-24 leading-[1.3] max-md:font-semibold'>
            강의 후 진행된 익명 강의평가에서 3년간 누적 평점 4.5/5.0을 기록!
          </p>
        </div>
      </div>
    </section>
  );
}
