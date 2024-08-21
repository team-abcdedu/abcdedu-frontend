import { useEffect } from 'react';

export default function useScrollLock(isLock: boolean) {
  useEffect(() => {
    if (!isLock) return;

    document.body.style.cssText = `
      position: fixed;
      top: -${window.scrollY}px;
      overflow-y: ${
        window.innerWidth - document.body.clientWidth > 0 ? 'scroll' : 'hidden'
      };
      width: 100%;
  `;

    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, Number(scrollY || '0') * -1);
    };
  }, [isLock]);
}
