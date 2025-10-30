import React, { memo } from 'react';
import { motion, SVGMotionProps } from 'framer-motion';

const ServerStackIcon = (props: SVGMotionProps<SVGSVGElement>) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5h10.5v3.75H6.75V7.5zm0 5.25h10.5v3.75H6.75v-3.75zM6 18.75h12" />
  </motion.svg>
);

export default memo(ServerStackIcon);
