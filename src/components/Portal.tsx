import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { StrictPropsWithChildren } from '@/types';

export default function Portal({ children }: StrictPropsWithChildren) {
  const [container, setContainer] = useState<Element | null>(null);

  useEffect(() => {
    if (document) {
      setContainer(document.body);
    }
  }, [container]);

  if (!container) return null;

  return createPortal(children, container);
}
