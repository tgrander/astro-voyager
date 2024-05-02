import type { ClassValue } from "clsx";
import React from "react";

import { cn } from "@/utils";

interface Props extends React.PropsWithChildren {
  className?: ClassValue;
}

export function ContentLayout({ children, className }: Props) {
  return (
    <div
      className={cn(
        "mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-40",
        className,
      )}
    >
      {children}
    </div>
  );
}
