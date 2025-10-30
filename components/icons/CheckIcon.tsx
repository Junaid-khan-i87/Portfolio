import React, { memo } from 'react';
import { motion, SVGMotionProps } from 'framer-motion';

const CheckIcon = (props: SVGMotionProps<SVGSVGElement>) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
  </motion.svg>
);

export default memo(CheckIcon);
