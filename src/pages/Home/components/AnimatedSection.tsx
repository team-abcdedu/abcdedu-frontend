import { motion } from 'framer-motion';

import { StrictPropsWithChildren } from '@/types';

export default function AnimatedSection({ children }: StrictPropsWithChildren) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 70 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
    >
      {children}
    </motion.section>
  );
}
