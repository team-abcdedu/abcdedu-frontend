import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { StrictPropsWithChildren } from '@/types';

export default function AnimatedSection({ children }: StrictPropsWithChildren) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const onIntersect = () => setIsVisible(true);

  useIntersectionObserver({ ref, onIntersect });

  useEffect(() => {
    // 이미 화면에 있을 경우에도 애니메이션 트리거
    // (새로고침 시 section의 일부가 viewport에 포함되지만, target이 viewport에 포함되지 않은 경우 대비)
    const target = ref.current;
    if (target && target.getBoundingClientRect().top < window.innerHeight) {
      setIsVisible(true);
    }
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
