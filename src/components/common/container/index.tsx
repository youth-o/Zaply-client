import { cn } from "@/utils";

const Container = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <main className={cn("px-5 w-full h-dvh", className)}>{children}</main>;
};

export default Container;
