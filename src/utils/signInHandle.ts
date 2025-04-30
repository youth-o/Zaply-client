import { FieldValues, UseFormSetError } from "react-hook-form";
import { useToast } from "./useToast";

type ToastFn = ReturnType<typeof useToast>["toast"];

export const handleSignInSubmit = async (
  data: FieldValues,
  setError: UseFormSetError<any>,
  toast: ToastFn
) => {
  try {
    const userExists = false;
    const passwordCorrect = false;

    if (!userExists) {
      const message = "가입되지 않은 이메일 주소예요.";
      setError("email", { type: "manual", message });
      toast({ variant: "error", description: message });
      return;
    }

    if (!passwordCorrect) {
      const message = "아이디 또는 비밀번호가 맞지 않아요.\n다시 확인해주세요.";
      setError("password", { type: "manual", message });
      toast({ variant: "error", description: message });
      return;
    }

    console.log("로그인 성공", data);
  } catch (err) {
    console.error("로그인 실패", err);
  }
};

export const handleInvalidForm = (errors: Record<string, any>, toast: ToastFn) => {
  const firstError = errors.email?.message || errors.password?.message;
  if (firstError) {
    toast({ variant: "error", description: firstError });
  }
};
