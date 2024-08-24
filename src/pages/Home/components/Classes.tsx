import { imageUrls } from '../constants/imageUrls';

export default function Classes() {
  const { classes } = imageUrls;

  const imageContainerStyle = 'rounded-[20px] shadow-lg overflow-hidden';
  const cardStyle =
    'flex-col-center gap-20 [&>p]:text-center text-24 font-bold [&>p]:leading-[1.4]';
  const groupStyle =
    'flex-row-center gap-30 max-xs:flex-col-center max-xs:gap-y-60';

  return (
    <section
      className='w-full gap-30 px-50 py-100 flex-row-center 
      max-900:flex-col-center max-900:gap-y-60'
    >
      <h2 className='w-0 h-0 overflow-hidden'>클래스</h2>
      <div className={groupStyle}>
        <div className={cardStyle}>
          <p className='text-primary-300'>
            인공지능의
            <br />
            수학적 기초
          </p>
          <div className={imageContainerStyle}>
            <img src={classes[0]} alt='classes-1-img' />
          </div>
        </div>
        <div className={cardStyle}>
          <p>
            ChatGPT의
            <br />
            수학적 기초
          </p>
          <div className={imageContainerStyle}>
            <img src={classes[1]} alt='classes-2-img' />
          </div>
        </div>
      </div>
      <div className={groupStyle}>
        <div className={cardStyle}>
          <p className='text-primary-300'>
            눈으로 이해하는
            <br />
            인공신경망
          </p>
          <div className={imageContainerStyle}>
            <img src={classes[2]} alt='classes-3-img' />
          </div>
        </div>
        <div className={cardStyle}>
          <p>
            창의 수학
            <br />
            연구소
          </p>
          <div className={imageContainerStyle}>
            <img src={classes[3]} alt='classes-4-img' />
          </div>
        </div>
      </div>
    </section>
  );
}
