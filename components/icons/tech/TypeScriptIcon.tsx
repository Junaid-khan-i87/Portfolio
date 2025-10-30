import React, { memo } from 'react';
import { motion, SVGMotionProps } from 'framer-motion';

const TypeScriptIcon = (props: SVGMotionProps<SVGSVGElement>) => (
  <motion.svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    {...props}
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M21.5 2.5H2.5v19h19V2.5zM14 17h-4v-2h4v-2h-2v-2h2V9h-4V7h6v10z" />
  </motion.svg>
);

export default memo(TypeScriptIcon);
