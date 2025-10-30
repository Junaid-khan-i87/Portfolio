import React, { memo } from 'react';
import { motion, SVGMotionProps } from 'framer-motion';

const PaintBrushIcon = (props: SVGMotionProps<SVGSVGElement>) => (
  <motion.svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.475 2.118 2.25 2.25 0 0 1-2.475-2.118c0-.566.242-1.099.655-1.489a2.25 2.25 0 0 0 .655-1.489V13.5a2.25 2.25 0 0 1 2.25-2.25h1.5m1.5 5.25h.75m-1.5-7.5h.75m4.125 7.5h.75m-1.5-7.5h.75M3.375 19.5h12.75m-12.75 0a1.65 1.65 0 0 1-1.65-1.65V4.125c0-.909.74-1.65 1.65-1.65h13.5c.909 0 1.65.74 1.65 1.65v13.725c0 .909-.74 1.65-1.65 1.65h-13.5z" />
  </motion.svg>
);

export default memo(PaintBrushIcon);
