'use client';

import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
}
const SlideY = ({ children }: Props) => {
  return (
    <>
      {children}
      <motion.div
        className='absolute top-0 left-0 w-full h-[100vh] bg-black origin-bottom'
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{
          scaleY: 1,
        }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      />
      <motion.div
        className='absolute top-0 left-0 w-full h-[100vh] bg-black origin-top'
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{
          scaleY: 0,
        }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      />
    </>
  );
};

export default SlideY;
