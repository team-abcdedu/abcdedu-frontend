import { RefObject, useEffect } from 'react';

interface UseIntersectionObserverProps {
  ref: RefObject<HTMLElement | null>;
  enabled?: boolean;
  onIntersect: () => void;
  threshold?: number;
}

export default function useIntersectionObserver({
  ref,
  onIntersect,
  threshold = 1.0,
  enabled = true,
}: UseIntersectionObserverProps) {
  useEffect(() => {
    const target = ref.current;
    if (!target || !enabled) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) onIntersect();
        });
      },
      { threshold },
    );

    observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, [enabled, onIntersect, ref, threshold]);
}
