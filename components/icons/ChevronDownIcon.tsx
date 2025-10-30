import React, { memo } from 'react';
import { motion, SVGMotionProps } from 'framer-motion';

const ChevronDownIcon = (props: SVGMotionProps<SVGSVGElement>) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </motion.svg>
);

export default memo(ChevronDownIcon);
