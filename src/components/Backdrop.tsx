import { motion, Variants } from 'framer-motion';

import useScrollLock from '@/hooks/useScrollLock';

interface BackdropProps {
  /**
   * 어두운 배경 설정 여부
   * @default true
   */
  isDark?: boolean;
  onClick: () => void;
}

const variants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function Backdrop({ isDark = true, onClick }: BackdropProps) {
  useScrollLock(isDark);

  return (
    <motion.div
      id='backdrop'
      className={`${isDark && 'bg-[rgba(0,0,0,0.7)]'} h-full fixed inset-0 z-backdrop`}
      onClick={onClick}
      initial='hidden'
      animate='visible'
      exit='hidden'
      variants={variants}
      transition={{ duration: 0.2 }}
    />
  );
}
