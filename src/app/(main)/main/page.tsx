"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Container, TopBar } from "@/components";
import { useScrollBlur } from "@/utils/useScrollBlur";
import BNB from "@/components/common/bnb";
import MainSection from "./_components/section/MainSection";
import MainContent from "./_components/content/MainContent";
import { useLinkModalOnce } from "./_components/hooks/useLinkModalOnce";

export default function Home() {
  const containerRef = useRef<HTMLElement>(null);
  const [isBlur, setIsBlur] = useState(false);

  useScrollBlur(containerRef, setIsBlur);
  useLinkModalOnce();

  return (
    <>
      <Container
        ref={containerRef}
        className="min-h-real-screen overflow-y-scroll scrollbar-hide bg-backgroundLine-green bg-cover bg-center flex flex-col gap-[28px] pb-[185px]">
        <TopBar
          isBlur={isBlur}
          left={<Image src={"/assets/images/logo-black.webp"} width={99} height={36} alt="logo" />}
        />
        <div className="flex flex-col gap-[72px]">
          <MainSection />
          <MainContent />
        </div>
      </Container>
      <BNB />
    </>
  );
}
