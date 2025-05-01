import { Container } from "@/components";
import OnBoardingHeader from "../sign-in/_components/OnBoardingHeader";
import OnBoardingContent from "../sign-in/_components/OnBoardingContent";
import OnBoardingFooter from "../sign-in/_components/OnBoardingFooter";

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
