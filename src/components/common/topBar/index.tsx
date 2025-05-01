"use client";

import React from "react";
import cn from "@/utils/cn";
import { motion } from "framer-motion";

interface TopBarProps {
  left?: React.ReactNode;
  center?: React.ReactNode;
  right?: React.ReactNode;
  className?: string;
  isBlur?: boolean;
}

export const TopBar: React.FC<TopBarProps> = ({
  left,
  center,
  right,
  className,
  isBlur = false,
}) => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "w-full flex items-end justify-between h-[76px] py-3",
        isBlur &&
          "fixed top-0 left-0 right-0 z-50 max-w-[440px] mx-auto px-5 backdrop-blur-[15px] bg-white/30 border-b border-grayscale-100",
        className
      )}
      style={
        isBlur
          ? {
              backdropFilter: "blur(15px)",
              WebkitBackdropFilter: "blur(15px)",
            }
          : undefined
      }>
      <div className="w-[80px] flex justify-start">{left}</div>
      <div className="flex-1 flex justify-center">{center}</div>
      <div className="w-[80px] flex justify-end">{right}</div>
    </motion.header>
  );
};
