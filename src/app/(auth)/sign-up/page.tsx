import { Container } from "@/components";
import EmailCheckWrapper from "./_components/email/email-check-wrapper";
import PasswordCheckWrapper from "./_components/password/password-check-wrapper";
import UserInfoWrapper from "./_components/userInfo/user-info-wrapper";

export default function SignInPage({ searchParams }: { searchParams: { state: string } }) {
  const state = searchParams.state;
  return (
    <Container className="relative bg-grayscale-100">
      {state === "EMAIL" ? <EmailCheckWrapper /> : null}
      {state === "PASSWORD" ? <PasswordCheckWrapper /> : null}
      {state === "USER_INFO" ? <UserInfoWrapper /> : null}
    </Container>
  );
}
