'use client';

import { motion, useInView, useAnimation, Variants } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface BlurTextProps {
  text: string;
  className?: string;
  type?: 'title' | 'subtitle';
  delay?: number;
  duration?: number;
}

const BlurText = ({ 
  text, 
  className = "", 
  type = "title",
  delay = 0,
  duration = 0.5 
}: BlurTextProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const controls = useAnimation();

  const words = text.split(" ").map(word => word.trim()).filter(Boolean);

  const container: Variants = {
    hidden: { 
      opacity: 0,
      transition: { 
        when: "afterChildren",
      }
    },
    visible: {
      opacity: 1,
      transition: { 
        when: "beforeChildren",
        staggerChildren: 0.035,
        delayChildren: delay,
        ease: [0.2, 0.65, 0.3, 0.9],
      }
    }
  };

  const child: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(10px)",
      transition: {
        type: "tween",
        duration: 0.1,
      }
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "tween",
        duration: duration,
        ease: [0.2, 0.65, 0.3, 0.9],
      }
    }
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const Tag = type === 'title' ? 'h1' : 'p';

  return (
    <Tag 
      ref={ref}
      className={className}
      style={{ 
        position: 'relative',
        paddingTop: '0.5em',
        paddingBottom: '0.5em',
        marginTop: '-0.5em',
        marginBottom: '-0.5em',
        willChange: 'transform'
      }}
    >
      <motion.span
        initial="hidden"
        animate={controls}
        variants={container}
        style={{ 
          display: 'block',
          willChange: 'transform',
        }}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            variants={child}
            style={{ 
              display: 'inline-block',
              whiteSpace: 'pre',
              willChange: 'transform, opacity, filter',
              padding: '0.1em 0',
            }}
          >
            {word}
            {index !== words.length - 1 && "\u00A0"}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
};

export default BlurText; 