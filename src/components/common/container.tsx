import { cn } from "@/utils";

const Container = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={cn("px-5 w-full h-dvh", className)}>{children}</div>;
};

export default Container;
