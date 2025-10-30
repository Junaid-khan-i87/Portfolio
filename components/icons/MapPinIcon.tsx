import React, { memo } from 'react';
import { motion, SVGMotionProps } from 'framer-motion';

const MapPinIcon = (props: SVGMotionProps<SVGSVGElement>) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M10 2a6 6 0 00-6 6c0 4.418 6 10 6 10s6-5.582 6-10a6 6 0 00-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z"
      clipRule="evenodd"
    />
  </motion.svg>
);

export default memo(MapPinIcon);
