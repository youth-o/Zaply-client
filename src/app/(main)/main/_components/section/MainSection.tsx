"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CHIP_TYPES } from "../constants/chips";
import { useContentStore } from "@/stores/useContentStore";
import Chips from "./Chips";
import ContentButton from "./ContentButton";
import { useRouter } from "next/navigation";
import useUserStore from "@/stores/userStore";
// import useRouterPrefetch from "@/utils/useRouterPrefetch";

const MainSection = ({ state }: { state: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();
  const { userInfo } = useUserStore();

  const { counts } = useContentStore();

  const isEmpty = counts.reserved === 0 && counts.recent === 0;

  useEffect(() => {
    if (state === "INIT") {
      router.push("/main/link");
    }
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % CHIP_TYPES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // useRouterPrefetch({
  //   path: ["/new-content", "/warning"],
  // });

  const currentType = CHIP_TYPES[currentIndex];

  return (
    <section className="mt-[84px] flex flex-col items-center justify-center gap-5">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentType}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.4 }}>
          <Chips
            type={currentType}
            month={5}
            counts={{
              default: 1234,
              like: 567,
              follow: 89,
            }}
          />
        </motion.div>
      </AnimatePresence>

      {isEmpty ? (
        <p className="text-center text-t3 text-grayscale-900">
          {userInfo?.name}님의 콘텐츠를
          <br />
          재플리와 함께 성장시켜 보세요!
        </p>
      ) : (
        <p className="text-center text-t3 text-grayscale-900">
          {userInfo?.name}님의 콘텐츠가
          <br />
          재플리와 함께 성장하고 있어요
        </p>
      )}

      <ContentButton />
    </section>
  );
};

export default MainSection;
