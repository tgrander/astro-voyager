"use client";

import React from "react";

import { useBrowseDestinationsStore } from "@/state/destinations";
import { cn } from "@/utils";

export function DestinationDetails() {
  const { selectedDestination } = useBrowseDestinationsStore();

  return (
    <section
      className={cn(
        "flex h-full w-full flex-grow flex-col",
        "px-20 pb-[290px] pt-[100px]",
        "z-10",
      )}
    >
      <h1 className={cn("font-rift text-8xl font-bold text-white")}>
        {selectedDestination?.name}
      </h1>
    </section>
  );
}
