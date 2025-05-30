"use client";

import { Button } from "@/components";
import { useSelectedSocialStore } from "../../connect/_components/store/social-store";
import SnsProfile from "../../mypage/_components/SnsProfile";
import { ArrowIcon } from "@/components/icons/service";
import { useRouter } from "next/navigation";
import { SocialPlatform } from "../../_components/types/platform";

export const ErrorContent = () => {
  const { selected } = useSelectedSocialStore();
  const router = useRouter();

  return (
    <section className="pt-[194px] flex flex-col gap-5 items-center justify-center">
      <div className="flex flex-col items-center gap-1">
        <SnsProfile
          type={selected?.toLowerCase() as SocialPlatform}
          className="border-[2.8px] border-redscale-700"
        />
        <p className="italic text-b2M text-grayscale-600 creato-500">@username1</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <p className="text-h3 text-grayscale-900">계정이 연결에 실패했어요.</p>
        <p className="text-b2R text-grayscale-700">다시 시도해주세요.</p>
      </div>
      <div className="fixed bottom-[60px] left-1/2 -translate-x-1/2 w-full max-w-[440px] px-5 z-50 flex flex-col gap-3">
        <Button
          className="w-full"
          rightIcon={<ArrowIcon type="right" />}
          onClick={() => router.push("/connect")}>
          다시 시도하기
        </Button>
        <Button className="w-full" variant="subAction" onClick={() => router.push("/mypage")}>
          닫기
        </Button>
      </div>
    </section>
  );
};

export default ErrorContent;
