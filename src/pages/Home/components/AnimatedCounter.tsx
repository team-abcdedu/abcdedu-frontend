import { animate } from 'framer-motion';
import { useRef, useState } from 'react';

import useIntersectionObserver from '@/hooks/useIntersectionObserver';

interface CounterProps extends React.HTMLAttributes<HTMLSpanElement> {
  from: number;
  to: number;
}

export default function AnimatedCounter({ from, to, ...rest }: CounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const onIntersect = () => {
    const element = ref.current;
    if (!element) return;

    animate(from, to, {
      duration: 1,
      onUpdate(value) {
        element.textContent = `${Math.round(value).toLocaleString()}${'+'}`;
      },
    });

    setHasAnimated(true);
  };

  useIntersectionObserver({ ref, onIntersect, enabled: !hasAnimated });

  return <span ref={ref} {...rest} />;
}
