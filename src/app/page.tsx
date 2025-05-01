import { Container } from "@/components";
import Link from "next/link";
import OnBoardingFooter from "@/components/onBoarding/OnBoardingFooter";

export default function Home() {
  return (
    <Container className="bg-center bg-cover bg-main">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <h1 className="text-h1">Zaply</h1>
          <p className="text-b1R">Create once. Spread with Zaply</p>
          <Link href="/policy">회원가입</Link>
          <OnBoardingFooter />
        </div>
      </div>
    </Container>
  );
}
