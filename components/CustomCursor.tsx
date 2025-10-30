import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [isPointer, setIsPointer] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // A softer spring for a more fluid feel
  const springConfig = { damping: 30, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', moveCursor);

    const handleMouseEnter = () => setIsPointer(true);
    const handleMouseLeave = () => setIsPointer(false);

    const interactiveElements = 'a, button, input, textarea, [role="button"], [data-cursor-hover]';

    const elements = document.querySelectorAll(interactiveElements);
    elements.forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      elements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [cursorX, cursorY]);

  const cursorVariants = {
    default: {
      scale: 1,
      border: '1px solid #fff',
      backgroundColor: 'rgba(255, 255, 255, 0)',
    },
    pointer: {
      scale: 2.5,
      border: '1px solid #fff',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
  };

  const dotVariants = {
    default: {
      scale: 1,
      backgroundColor: '#fff',
    },
    pointer: {
      scale: 0,
      opacity: 0,
    },
  };

  return (
    <div className="hidden md:block pointer-events-none fixed inset-0 z-[9999]" style={{ mixBlendMode: 'difference' }}>
      <motion.div
        className="w-8 h-8 rounded-full absolute"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          x: '-50%',
          y: '-50%',
        }}
        variants={cursorVariants}
        animate={isPointer ? 'pointer' : 'default'}
        transition={{ type: 'spring', ...springConfig }}
      />
      <motion.div
        className="w-2 h-2 rounded-full absolute"
        style={{
          translateX: cursorX,
          translateY: cursorY,
          x: '-50%',
          y: '-50%',
        }}
        variants={dotVariants}
        animate={isPointer ? 'pointer' : 'default'}
        transition={{ duration: 0.15 }}
      />
    </div>
  );
};

export default CustomCursor;