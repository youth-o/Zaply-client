import { Container } from "@/components";
import { Input } from "@/components/common/input/input";

export default function Home() {
  const passwordChecks = [
    { label: "영문 포함", isChecked: true },
    { label: "숫자 포함", isChecked: false },
    { label: "8-20자 이내", isChecked: true },
  ];

  return (
    <Container className="bg-center bg-cover bg-main">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <h1 className="text-h1">Zaply</h1>
          <p className="text-b1R">Create once. Spread with Zaply</p>
          <Input placeholder="하이" type="check" className="w-[200px]" />
          <Input type="check" placeholder="비밀번호를 입력하세요" checkItems={passwordChecks} />
          <Input type="timer" placeholder="타이머" />
        </div>
      </div>
    </Container>
  );
}
