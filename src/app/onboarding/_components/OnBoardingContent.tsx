"use client";

import { EllipseIcon } from "@/components/icons";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { fadeUpVariants, transition } from "./_animation";

const mockContents = [
  {
    id: 0,
    title: "하나의 콘텐츠로\n모든 플랫폼을 연결하세요",
    gui: "나중에 기능 GUI 1",
  },
  {
    id: 1,
    title: "두 번째 온보딩 메시지",
    gui: "나중에 기능 GUI 2",
  },
  {
    id: 2,
    title: "세 번째 온보딩 메시지",
    gui: "나중에 기능 GUI 3",
  },
];

const OnBoardingContent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollX = scrollRef.current?.scrollLeft ?? 0;
      const width = scrollRef.current?.offsetWidth ?? 1;
      const index = Math.round(scrollX / width);
      setCurrentIndex(index);
    };

    const el = scrollRef.current;
    el?.addEventListener("scroll", handleScroll);
    return () => el?.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="flex flex-col items-center justify-center gap-10 w-full">
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto overflow-y-hidden scrollbar-hide w-full snap-x snap-mandatory"
        style={{
          WebkitOverflowScrolling: "touch",
          scrollBehavior: "smooth",
        }}>
        {mockContents.map((item, index) => (
          <motion.div
            key={item.id}
            className="w-full flex-shrink-0 snap-start flex flex-col items-center justify-center gap-12"
            initial="hidden"
            animate={currentIndex === index ? "visible" : "hidden"}
            variants={fadeUpVariants}
            transition={transition}>
            <p className="text-blue-blueblack text-h2 text-center whitespace-pre-line">
              {item.title}
            </p>
            <div className="w-full h-[115px] flex items-center justify-center">{item.gui}</div>
          </motion.div>
        ))}
      </div>

      <div className="flex gap-2 mt-[92px]">
        {mockContents.map((_, i) => (
          <EllipseIcon
            key={i}
            className={i === currentIndex ? "text-blue-700" : "text-grayscale-400"}
          />
        ))}
      </div>
    </section>
  );
};

export default OnBoardingContent;
