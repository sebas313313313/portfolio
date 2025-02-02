"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

export const Card3d = ({ children, className, containerClassName }) => {
  const ref = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const rotateY = ((mouseX - width / 2) / width) * 20;
    const rotateX = ((mouseY - height / 2) / height) * -20;
    setRotateX(rotateX);
    setRotateY(rotateY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d",
      }}
      className={containerClassName}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
        }}
        className={className}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};
