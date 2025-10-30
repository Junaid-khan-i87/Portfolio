import React, { memo } from 'react';
import { motion, SVGMotionProps } from 'framer-motion';

const NextjsIcon = (props: SVGMotionProps<SVGSVGElement>) => (
  <motion.svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    {...props}
  >
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.25 18.297l-5.94-10.301h-.045L5.25 18.297h-2.1l7.395-12.82h1.905l7.395 12.82h-2.1z" />
  </motion.svg>
);

export default memo(NextjsIcon);
