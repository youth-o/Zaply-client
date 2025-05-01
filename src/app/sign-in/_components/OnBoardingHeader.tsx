import { TopBar } from "@/components/common/topBar";
import Image from "next/image";

const OnBoardingHeader = () => {
  return (
    <TopBar
      left={<Image src={"/assets/images/logo-black.svg"} width={99} height={36} alt="logo" />}
    />
  );
};

export default OnBoardingHeader;
