import { RefObject, useEffect } from 'react';

interface UseIntersectionObserver {
  target: RefObject<HTMLDivElement>;
  onIntersect: () => void;
  threshold?: number;
  enabled?: boolean;
}

export default function useIntersectionObserver({
  target,
  onIntersect,
  threshold = 1.0,
  enabled = true,
}: UseIntersectionObserver) {
  useEffect(() => {
    if (!enabled) {
      return;
    }

    const observer = new IntersectionObserver(
      entries =>
        entries.forEach(entry => entry.isIntersecting && onIntersect()),
      {
        threshold,
      },
    );

    const element = target && target.current;

    if (!element) {
      return;
    }

    observer.observe(element);
    return () => observer.unobserve(element);
  }, [enabled, threshold, target, onIntersect]);
}
