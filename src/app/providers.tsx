"use client";

import { TRPCReactProvider } from "@/trpc/react";
import { NextUIProvider } from "@nextui-org/system";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <TRPCReactProvider>
      <NextUIProvider className="flex h-screen w-full min-w-full flex-col">
        {children}
      </NextUIProvider>
    </TRPCReactProvider>
  );
}
