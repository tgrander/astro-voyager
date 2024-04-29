"use client";

import { TRPCReactProvider } from "@/trpc/react";
import { NextUIProvider } from "@nextui-org/system";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <TRPCReactProvider>
      <NextUIProvider className="h-full w-full">{children}</NextUIProvider>
    </TRPCReactProvider>
  );
}
