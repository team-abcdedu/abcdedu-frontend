import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import { StrictPropsWithChildren } from '@/types';

export default function AnimatedSection({ children }: StrictPropsWithChildren) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  // viewport 안에 들어올 때 fade in 모션 수행
  useEffect(() => {
    const target = ref.current;
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 },
    );

    if (target) observer.observe(target);

    // 이미 화면에 있을 경우에도 애니메이션 트리거
    // (새로고침 시 section의 일부가 viewport에 포함되지만, target이 viewport에 포함되지 않은 경우 대비)
    if (target && target.getBoundingClientRect().top < window.innerHeight) {
      setIsVisible(true);
    }

    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  return (
    <>
      <div className='w-full h-1' ref={ref} />
      <motion.section
        initial={{ opacity: 0, y: 70 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2 }}
      >
        {children}
      </motion.section>
    </>
  );
}
