import React, { memo } from 'react';
import { motion, SVGMotionProps } from 'framer-motion';

const FigmaIcon = (props: SVGMotionProps<SVGSVGElement>) => (
  <motion.svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    {...props}
  >
    <path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12zM8 12c0-2.21.896-4 2-4h4v4c-1.104 0-2 .79-2 2v4c0 1.11-.896 2-2 2s-2-.89-2-2v-4z" />
    <path d="M12 8c1.104 0 2-.89 2-2s-.896-2-2-2-2 .89-2 2 .896 2 2 2z" />
  </motion.svg>
);

export default memo(FigmaIcon);
