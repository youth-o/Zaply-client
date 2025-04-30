import { Container } from "@/components";
import SignInFooter from "@/components/signIn/SignInFooter";
import SignInForm from "@/components/signIn/SignInForm";
import SignInHeader from "@/components/signIn/SignInHeader";

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
