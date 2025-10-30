import React, { memo } from 'react';
import { motion, SVGMotionProps } from 'framer-motion';

const FirebaseIcon = (props: SVGMotionProps<SVGSVGElement>) => (
  <motion.svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    {...props}
  >
    <path d="M3.135 11.088l7.464-9.336c.228-.288.648-.288.876 0l1.836 2.304-6.42 8.016-3.756-.984zM16.908.828l-9.3 11.628 3.756.984L21.9 4.14c.228-.288.108-.732-.216-.864l-4.764-2.448zM4.164 12.6l-1.068 5.484c-.084.432.3.804.732.732l5.484-1.068-5.148-5.148z" />
  </motion.svg>
);

export default memo(FirebaseIcon);
