import React, { memo } from 'react';
import { motion, SVGMotionProps } from 'framer-motion';

const NodejsIcon = (props: SVGMotionProps<SVGSVGElement>) => (
  <motion.svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    {...props}
  >
    <path d="M12 0L1.74 6v12L12 24l10.26-6V6L12 0zm7.18 16.27l-3.32 1.92v-3.83l3.32-1.92v3.83zm-4.59-2.65l-2.59 1.5v3.13l-2.6-1.5v-3.13l-4.52-2.61 7.12-4.11 4.52 2.61-4.53 2.61zM3.44 7.64l3.32 1.92v3.83L3.44 11.47V7.64z" />
  </motion.svg>
);

export default memo(NodejsIcon);
