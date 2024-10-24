import { animate, motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

import { Review } from '../../types';

import ReivewCard from './ReivewCard';

export default function ReviewSlide({ reviews }: { reviews: Review[] }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const xTranslation = useMotionValue(0);

  const translate3d = useTransform(
    xTranslation,
    x => `translate3d(${x}px, 0, 0)`,
  );

  useEffect(() => {
    if (!ref.current) return;
    const x = ref.current.offsetWidth;
    const finalPosition = -x / 2 - 16;

    const controls = animate(xTranslation, [0, finalPosition], {
      ease: 'linear',
      duration: 60,
      repeat: Infinity,
      repeatType: 'loop',
      repeatDelay: 0,
    });

    return controls.stop;
  }, [xTranslation]);

  return (
    <div id='slide-container' className='w-full overflow-hidden pb-40'>
      <motion.div
        className='w-[max-content] flex flex-nowrap gap-32 items-center'
        ref={ref}
        style={{
          transform: translate3d,
        }}
      >
        {[...reviews, ...reviews].map((review, index) => (
          <ReivewCard key={index} review={review} />
        ))}
      </motion.div>
    </div>
  );
}
