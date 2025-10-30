import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const AnimatedBackground: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);
  
  const transformX1 = useTransform(mouseX, [0, typeof window !== 'undefined' ? window.innerWidth : 0], [-20, 20]);
  const transformY1 = useTransform(mouseY, [0, typeof window !== 'undefined' ? window.innerHeight : 0], [-20, 20]);
  const springX1 = useSpring(transformX1, { stiffness: 70, damping: 20 });
  const springY1 = useSpring(transformY1, { stiffness: 70, damping: 20 });
  
  const transformX2 = useTransform(mouseX, [0, typeof window !== 'undefined' ? window.innerWidth : 0], [30, -30]);
  const transformY2 = useTransform(mouseY, [0, typeof window !== 'undefined' ? window.innerHeight : 0], [30, -30]);
  const springX2 = useSpring(transformX2, { stiffness: 70, damping: 20 });
  const springY2 = useSpring(transformY2, { stiffness: 70, damping: 20 });

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden bg-gray-50 dark:bg-gray-950">
        <motion.div
            className="absolute inset-[-20px] z-0 opacity-40 dark:opacity-30"
            style={{
                backgroundImage: 'radial-gradient(circle at 25% 30%, #8b5cf6 0%, transparent 40%), radial-gradient(circle at 75% 70%, #14b8a6 0%, transparent 40%)',
                animation: 'pulse 25s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                x: springX1,
                y: springY1,
            }}
        />
        <motion.div
            className="absolute inset-[-20px] z-0 opacity-20 dark:opacity-10"
            style={{
                backgroundImage: 'radial-gradient(circle at 10% 80%, #8b5cf6 0%, transparent 30%), radial-gradient(circle at 90% 20%, #14b8a6 0%, transparent 30%)',
                animation: 'pulse 30s cubic-bezier(0.4, 0, 0.6, 1) infinite reverse',
                x: springX2,
                y: springY2,
            }}
        />
        <style>
            {`
            @keyframes pulse {
                0%, 100% {
                    transform: scale(1);
                    opacity: 0.3;
                }
                50% {
                    transform: scale(1.3);
                    opacity: 0.5;
                }
            }
            `}
        </style>
    </div>
  );
};

export default AnimatedBackground;