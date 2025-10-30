import React, { memo } from 'react';
import { motion, SVGMotionProps } from 'framer-motion';

const PhoneIcon = (props: SVGMotionProps<SVGSVGElement>) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    {...props}
  >
    <path d="M2.003 5.884c.155-1.732 1.57-3.1 3.307-3.1h1.4c.86 0 1.6.654 1.72 1.507l.27 1.882c.1.69-.27 1.36-.9 1.65l-.8.37a11.05 11.05 0 006.07 6.07l.37-.8c.29-.63.96-1 1.65-.9l1.88.27c.85.12 1.51.86 1.51 1.72v1.4c0 1.74-1.37 3.15-3.1 3.31-5.24.47-9.64-3.93-9.17-9.17z" />
  </motion.svg>
);

export default memo(PhoneIcon);
