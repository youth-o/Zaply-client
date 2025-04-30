import { Button } from "../common/button";
import { Input } from "../common/input";

const SignInForm = () => {
  return (
    <section className="w-full flex flex-col gap-3">
      <div className="w-full px-4 flex flex-col gap-2">
        <p className="text-t3 text-grayscale-800">로그인</p>
        <p className="text-b3R text-grayscale-800">이메일 주소와 비밀번호를 입력해 주세요.</p>
      </div>
      <form className="flex flex-col gap-5 mt-2">
        <div className="flex flex-col gap-2">
          <Input placeholder="zaply@example.com" className="rounded-full" />
          <Input placeholder="영문 대소문자, 특수문자 포함 8-20자" className="rounded-full" />
        </div>
        <Button variant="deactive">로그인</Button>
      </form>
      <div className="flex gap-1 items-center justify-center">
        <div className="px-[10px] py-1 text-b4M text-blue-blueblack cursor-pointer">
          이메일 찾기
        </div>
        <div className="w-[1px] h-[14px] bg-grayscale-400" />
        <div className="px-[10px] py-1 text-b4M text-blue-blueblack cursor-pointer">
          비밀번호 찾기
        </div>
      </div>
    </section>
  );
};

export default SignInForm;
