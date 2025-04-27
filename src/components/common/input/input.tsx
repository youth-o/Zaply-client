import * as React from "react";
import { cn } from "@/lib/utils";
import { CheckIcon } from "@/components/icons";

type CheckItem = {
  label: string;
  isChecked: boolean;
};

const Input = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<"input"> & {
    type?: "text" | "check" | "timer";
    timerText?: string;
    checkItems?: CheckItem[];
  }
>(({ className, type = "text", placeholder, timerText, checkItems = [], ...props }, ref) => {
  return (
    <div className="relative w-full">
      <input
        type={type === "check" ? "text" : type}
        className={cn(
          "flex h-[50px] w-full px-5 py-[14px] outline-none bg-grayscale-100 border border-grayscale-300 rounded-[12px] text-[14px] font-medium text-grayscale-800 placeholder:text-grayscale-600 placeholder:font-normal placeholder:text-b3R focus:border-grayscale-700",
          className
        )}
        placeholder={placeholder}
        ref={ref}
        {...props}
      />

      {type === "check" && checkItems.length > 0 && (
        <div className="flex flex-wrap gap-4 items-center mt-2 pl-3">
          {checkItems.map((item, index) => (
            <div key={index} className="flex gap-1 items-center">
              <CheckIcon stroke={item.isChecked ? "#22C7FA" : "#BDC5D0"} />
              <p
                className={cn(
                  "!text-b4R",
                  item.isChecked ? "text-blue-700" : "text-grayscale-500"
                )}>
                {item.label}
              </p>
            </div>
          ))}
        </div>
      )}

      {type === "timer" && (
        <div className="absolute right-5 top-1/2 -translate-y-1/2 text-b3M text-redscale-700">
          {timerText ?? "03:00"}
        </div>
      )}
    </div>
  );
});
Input.displayName = "Input";

export { Input };
