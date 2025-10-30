import React, { memo } from 'react';
import { motion, SVGMotionProps } from 'framer-motion';

const ReactIcon = (props: SVGMotionProps<SVGSVGElement>) => (
  <motion.svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    {...props}
  >
    <circle cx="12" cy="12" r="2" />
    <g>
      <ellipse rx="11" ry="4.2" cx="12" cy="12" fill="none" stroke="currentColor" strokeWidth="1" />
      <ellipse rx="11" ry="4.2" cx="12" cy="12" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(60 12 12)" />
      <ellipse rx="11" ry="4.2" cx="12" cy="12" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(120 12 12)" />
    </g>
  </motion.svg>
);

export default memo(ReactIcon);
