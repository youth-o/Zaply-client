"use client";

import { useRouter } from "next/navigation";
import { Button } from "../common/button";

const OnBoardingFooter = () => {
  const router = useRouter();

  return (
    <footer className="w-full">
      <Button onClick={() => router.push("/sign-in")}>시작하기</Button>
    </footer>
  );
};

export default OnBoardingFooter;
