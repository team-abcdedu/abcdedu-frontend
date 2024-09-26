import { motion, AnimatePresence, Variants } from 'framer-motion';

import { StrictPropsWithChildren } from '@/types';

import Backdrop from '../Backdrop';
import Portal from '../Portal';

import ModalActions from './ModalActions';
import ModalContent from './ModalContent';

type ModalSize = 'xs' | 'sm' | 'md' | 'lg';

interface ModalProps {
  isVisible: boolean;
  showBackdrop?: boolean;
  enableBackdropClick?: boolean;
  onClose: () => void;
  size?: ModalSize;
}

const variants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function Modal({
  isVisible,
  size = 'md',
  showBackdrop = true,
  enableBackdropClick = true,
  onClose,
  children,
}: StrictPropsWithChildren<ModalProps>) {
  const getSizingStyle = () => {
    if (size === 'xs') return `min-w-240`;
    if (size === 'sm')
      return `min-400:min-w-[368px] max-400:w-[calc(100vw_-_16px)]`;
    if (size === 'lg') return `md:min-w-[700px] max-md:w-[calc(100vw_-_16px)]`;
    return `min-w-[480px] max-xs:w-[calc(100vw_-_16px)] max-xs:min-w-0`;
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <Portal>
          <div id='modal'>
            {showBackdrop && (
              <Backdrop onClick={enableBackdropClick ? onClose : undefined} />
            )}
            <motion.div
              role='dialog'
              className={`fixed z-modal bg-white position-center rounded-md 
                max-h-[calc(100dvh_-_16px)] flex flex-col ${getSizingStyle()}`}
              onClick={e => e.stopPropagation()}
              initial='hidden'
              animate='visible'
              exit='hidden'
              variants={variants}
              transition={{ duration: 0.2 }}
            >
              {children}
            </motion.div>
          </div>
        </Portal>
      )}
    </AnimatePresence>
  );
}

Modal.Content = ModalContent;
Modal.Actions = ModalActions;
