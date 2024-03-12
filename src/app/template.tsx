'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

interface Props {
  children: React.ReactNode;
}
const Template = ({ children }: Props) => {
  return (
    <>
      {children}

      <motion.div
        className='fixed top-0 left-0 w-full h-[100vh] bg-sky-700 origin-bottom'
        initial={{ scaleY: 1 }}
        animate={{
          scaleY: 0,
        }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      />
    </>
  );
};

export default Template;
