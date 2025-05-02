import { Container } from "@/components";
import Link from "next/link";

export default function Home() {
  return (
    <Container className="bg-b300-g100">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <h1 className="text-h1">Zaply</h1>
          <p className="text-b1R">Create once. Spread with Zaply</p>
          <Link href="/policy">회원가입</Link>
        </div>
      </div>
    </Container>
  );
}
