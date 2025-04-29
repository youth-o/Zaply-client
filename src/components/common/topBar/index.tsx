import React from "react";
import cn from "@/utils/cn";

interface TopBarProps {
  left?: React.ReactNode;
  center?: React.ReactNode;
  right?: React.ReactNode;
  className?: string;
}

export const TopBar: React.FC<TopBarProps> = ({ left, center, right, className }) => {
  return (
    <header className={cn("flex items-end justify-between w-full h-[65px] py-3 ", className)}>
      <div className="w-[80px] flex justify-start">{left}</div>
      <div className="flex-1 flex justify-center">{center}</div>
      <div className="w-[80px] flex justify-end">{right}</div>
    </header>
  );
};
