import { animate } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface CounterProps extends React.HTMLAttributes<HTMLSpanElement> {
  from: number;
  to: number;
}

export default function AnimatedCounter({ from, to, ...rest }: CounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    // viewport 안에 카운터가 들어올 때 애니메이션 수행
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          animate(from, to, {
            duration: 1,
            onUpdate(value) {
              element.textContent = `${Math.round(value).toLocaleString()}${'+'}`;
            },
          });

          setHasAnimated(true); // 한 번만 수행
          observer.unobserve(element);
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [from, to, hasAnimated]);

  return <span ref={ref} {...rest} />;
}
