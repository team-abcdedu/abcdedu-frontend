import { Review } from '../../types';

export default function ReivewCard({ review }: { review: Review }) {
  return (
    <div
      className='relative max-w-[385px] min-h-220 h-fit flex-grow rounded-[20px] bg-white
            shrink-0 flex-1 px-24 xs:px-32 py-36 shadow-card-md max-xs:w-240 max-xs:min-h-150'
    >
      {review.keyword && (
        <span
          className='absolute text-primary-400/60 font-HakgyoansimGaeulsopungB 
              text-26 top-12 right-18 max-xs:text-16'
        >
          {review.keyword}
        </span>
      )}
      <div className='font-semibold flex items-center gap-8 xs:gap-14 pt-4 pb-20'>
        <span className='xs:text-20'>{review.school}</span>
        <span
          className='text-primary-400 text-10 xs:text-12 block xs:min-h-22 px-6 xs:px-8 py-1 flex-row-center 
              bg-primary-400/15 rounded-[10px] border-1 border-primary-400'
        >
          {review.grade}
        </span>
      </div>
      <p
        className='text-neutral-300 [&>strong]:text-primary-400 [&>strong]:font-medium max-xs:text-11'
        dangerouslySetInnerHTML={{ __html: review.content }}
      />
    </div>
  );
}
