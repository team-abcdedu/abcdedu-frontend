import { useState } from 'react';

import { reviews } from '../../constants';

import ReivewCard from './ReivewCard';
import ReviewSlide from './ReviewSlide';

export default function Reviews() {
  const [isSlideOpen, setIsSlideOpen] = useState(false);
  const toggleSlide = () => setIsSlideOpen(prev => !prev);

  return (
    <div className='flex-col-center gap-48'>
      <div className='flex-col-center lg:flex-row-center gap-30 lg:-mt-13'>
        {reviews.slice(0, 3).map(review => (
          <ReivewCard key={review.school} review={review} />
        ))}
      </div>
      {isSlideOpen && <ReviewSlide reviews={reviews.slice(3)} />}
      <button
        className='bg-white px-12 py-8 border-1 lg:hover:bg-primary-200/5 rounded-xl text-primary-400/60 shadow-btn-light transition-colors duration-200 font-medium'
        onClick={toggleSlide}
      >
        {isSlideOpen ? '리뷰 접기' : '리뷰 더보기'}
      </button>
    </div>
  );
}
