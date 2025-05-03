"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Container } from "@/components";
import { TopBar } from "@/components/common/topBar";
import { useScrollBlur } from "@/utils/useScrollBlur";
import BNB from "@/components/common/bnb";
import MainContent from "./(main)/content/_components/MainContent";
import MainSection from "./(main)/section/_components/MainSection";

export default function Home() {
  const containerRef = useRef<HTMLElement>(null);
  const [isBlur, setIsBlur] = useState(false);
  useScrollBlur(containerRef, setIsBlur);

  return (
    <>
      <Container
        ref={containerRef}
        className="overflow-y-scroll bg-backgroundLine-yellow bg-cover bg-center flex flex-col gap-[28px]">
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
