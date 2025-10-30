import React, { memo } from 'react';
import { motion, SVGMotionProps } from 'framer-motion';

const PostgresqlIcon = (props: SVGMotionProps<SVGSVGElement>) => (
  <motion.svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    {...props}
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15V8h2.5c1.38 0 2.5 1.12 2.5 2.5S14.88 13 13.5 13H13v4h-2zm5-1.5c0-2.02-1.3-3.73-3-4.34V8h-4v10h5.5c1.93 0 3.5-1.57 3.5-3.5z" />
    <path d="M11 15h2v-2h-2v2zm0-4h1.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5H11v3z" />
  </motion.svg>
);

export default memo(PostgresqlIcon);
