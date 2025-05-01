import Image from "next/image";
import { Container } from "@/components";
import { TopBar } from "@/components/common/topBar";
import OnBoardingContent from "./_components/OnBoardingContent";
import OnBoardingFooter from "./_components/OnBoardingFooter";

const OnBoarding = () => {
  return (
    <Container className="overflow-y-scroll bg-b500-y300 flex flex-col gap-[114px]">
      <TopBar
        left={<Image src={"/assets/images/logo-black.svg"} width={99} height={36} alt="logo" />}
      />
      <OnBoardingContent />
      <OnBoardingFooter />
    </Container>
  );
};

export default OnBoarding;
