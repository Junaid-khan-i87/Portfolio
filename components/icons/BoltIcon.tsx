import React, { memo } from 'react';
import { motion, SVGMotionProps } from 'framer-motion';

const BoltIcon = (props: SVGMotionProps<SVGSVGElement>) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
  </motion.svg>
);

export default memo(BoltIcon);
