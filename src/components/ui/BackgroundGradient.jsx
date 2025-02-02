"use client";
import React from "react";
import { motion } from "framer-motion";

export const BackgroundGradient = ({
  children,
  className = "",
  containerClassName = "",
  animate = true,
}) => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <div className={`relative ${containerClassName} group`}>
      <motion.div
        initial="initial"
        animate={animate ? "animate" : "initial"}
        variants={variants}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          backgroundSize: "400% 400%",
        }}
        className={`absolute inset-0 rounded-xl opacity-60 group-hover:opacity-100 blur-xl transition duration-500 ${className}`}
      />
      <motion.div
        initial="initial"
        animate={animate ? "animate" : "initial"}
        variants={variants}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          backgroundSize: "400% 400%",
        }}
        className={`absolute inset-0 rounded-xl opacity-60 group-hover:opacity-100 ${className}`}
      />
      <div className="relative">{children}</div>
    </div>
  );
};
