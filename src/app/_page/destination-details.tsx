"use client";

import React from "react";

import { CldImage } from "@/common/image";
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

      {/* Planet */}
      <div className="flex max-w-fit flex-col items-center justify-center">
        <CldImage
          alt="Image of planet"
          className="rounded-lg object-cover"
          height={200}
          width={200}
          src={selectedDestination?.planet.image ?? ""}
        />
        <h2 className="font-rift text-4xl font-semibold">
          {selectedDestination?.planet.name}
        </h2>
      </div>
    </section>
  );
}
