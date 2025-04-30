import { Container } from "@/components";
import OnBoardingContent from "@/components/onBoarding/OnBoardingContent";
import OnBoardingFooter from "@/components/onBoarding/OnBoardingFooter";
import OnBoardingHeader from "@/components/onBoarding/OnBoardingHeader";

const OnBoarding = () => {
  return (
    <Container className="bg-center bg-b500-y300">
      <div className="flex flex-col items-center justify-center gap-[114px]">
        <OnBoardingHeader />
        <OnBoardingContent />
        <OnBoardingFooter />
      </div>
    </Container>
  );
};

export default OnBoarding;
