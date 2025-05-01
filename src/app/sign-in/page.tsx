import { Container } from "@/components";
import SignInFooter from "@/app/onboarding/_components/SignInFooter";
import SignInForm from "@/app/onboarding/_components/SignInForm";
import SignInHeader from "@/app/onboarding/_components/SignInHeader";

const SignIn = () => {
  return (
    <Container className="bg-center bg-b500-y300">
      <div className="flex flex-col gap-[54px]">
        <SignInHeader />
        <SignInForm />
        <SignInFooter />
      </div>
    </Container>
  );
};

export default SignIn;
