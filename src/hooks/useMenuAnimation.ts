import { AnimationSequence, useAnimate } from 'framer-motion';
import { useEffect } from 'react';

function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const menuAnimations: AnimationSequence = isOpen
      ? [
          [
            '#mobile-sidebar',
            { transform: 'translateX(-100%)' },
            { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.3 },
          ],
        ]
      : [['#mobile-sidebar', { transform: 'translateX(0%)' }, { at: '-0.1' }]];

    animate([
      [
        'path.top',
        { d: isOpen ? 'M 3 16.5 L 17 2.5' : 'M 2 2.5 L 20 2.5' },
        { at: '<' },
      ],
      ['path.middle', { opacity: isOpen ? 0 : 1 }, { at: '<' }],
      [
        'path.bottom',
        { d: isOpen ? 'M 3 2.5 L 17 16.346' : 'M 2 16.346 L 20 16.346' },
        { at: '<' },
      ],
      ...menuAnimations,
    ]);
  }, [isOpen]);

  return scope;
}

export default useMenuAnimation;
