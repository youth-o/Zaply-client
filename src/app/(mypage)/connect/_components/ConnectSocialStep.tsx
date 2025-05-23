"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components";
import SocialSelect from "./SocialSelect";
import SocialLogin from "./SocialLogin";
import { useSelectedSocialStore } from "./store/social-store";
import { useToast } from "@/utils/useToast";
import { useSnsLinkStore } from "./store/link-store";
import accountService from "@/lib/api/service/AccountService";
import { SocialPlatform } from "../../_components/types/platform";
import { Platforms } from "@/types/platform";

const snsList = [
  {
    name: "Instagram",
  },
  {
    name: "Thread",
  },
  {
    name: "Facebook",
  },
];

const nameToPlatformMap: Record<string, SocialPlatform> = {
  Thread: Platforms.THREADS,
  Facebook: Platforms.FACEBOOK,
  Instagram: Platforms.INSTAGRAM,
};

const serviceMap: Record<string, () => Promise<void>> = {
  Thread: accountService.threads,
  Facebook: accountService.facebook,
  Instagram: async () => {
    console.log("Instagram login not implemented yet");
  },
};

export const ConnectSocialStep = () => {
  const { selected } = useSelectedSocialStore();
  const { toast } = useToast();
  const [step, setStep] = useState<1 | 2>(1);
  const { setLinked } = useSnsLinkStore();

  const selectedSns = snsList.find(sns => sns.name === selected);

  useEffect(() => {
    const handler = (event: MessageEvent) => {
      if (event.data.status === "success") {
        setLinked(Platforms.THREADS, "연결된 계정");
        window.location.href = "/connect-complete?status=success";
      } else if (event.data.status === "error") {
        window.location.href = "/connect-complete?status=error";
      }
    };

    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, [setLinked]);

  const handleClick = async () => {
    if (!selectedSns?.name) return;
    const platform = nameToPlatformMap[selectedSns.name];
    const service = serviceMap[selectedSns.name];

    setStep(2);

    try {
      setLinked(platform, "");
      await service();
    } catch (err) {
      toast({
        variant: "error",
        description: `${selectedSns?.name} 로그인에 실패했습니다.`,
      });
      setLinked(platform, "");
    }
  };

  if (step === 2) {
    return <SocialLogin />;
  }

  return (
    <>
      <section className="relative mt-[106px] flex flex-col gap-12">
        <p className="text-t3 text-grayscale-900">계정을 연결할 플랫폼을 선택해주세요.</p>
        <SocialSelect />
      </section>
      <div className="fixed bottom-[60px] left-1/2 -translate-x-1/2 w-full max-w-[440px] px-5 z-50">
        <Button
          className="w-full"
          variant={selected ? "active" : "deactive"}
          disabled={!selected}
          onClick={handleClick}>
          다음
        </Button>
      </div>
    </>
  );
};

export default ConnectSocialStep;
