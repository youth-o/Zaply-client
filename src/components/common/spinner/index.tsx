import * as React from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/utils";

interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
}

const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ className, size = "md", ...props }, ref) => {
    const sizeClasses = {
      sm: "h-4 w-4",
      md: "h-6 w-6",
      lg: "h-8 w-8",
    };

    return (
      <div ref={ref} className={cn("flex items-center justify-center", className)} {...props}>
        <Loader2 className={cn("animate-spin text-grayscale-300", sizeClasses[size])} />
      </div>
    );
  }
);

Spinner.displayName = "Spinner";

export { Spinner, type SpinnerProps };
