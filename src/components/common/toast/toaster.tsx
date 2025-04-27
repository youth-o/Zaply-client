"use client";

import { useToast } from "@/hooks/useToast";
import {
  Toast,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/common/toast/toast";
import { CircleCheckIcon, ErrorIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, variant = "default", ...props }) {
        const icon =
          variant === "error" ? (
            <ErrorIcon width={20} height={20} stroke="#F83650" />
          ) : variant === "check" ? (
            <CircleCheckIcon width={20} height={20} stroke="#22C7FA" />
          ) : null;

        return (
          <Toast key={id} {...props}>
            <div className="flex w-full items-center gap-2">
              <div className="flex gap-2">
                {title && <ToastTitle>{title}</ToastTitle>}
                {description && (
                  <ToastDescription
                    icon={icon}
                    className={cn(variant === "default" ? "ml-[95px]" : "")}>
                    {description}
                  </ToastDescription>
                )}
              </div>
              {action}
            </div>
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
