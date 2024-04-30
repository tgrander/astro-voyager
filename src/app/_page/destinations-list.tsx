"use client";

import React from "react";

import { useBrowseDestinationsStore } from "@/state/destinations";
import { cn } from "@/utils";

import { DestinationListingCard } from "./destination-listing-card";

import type { DestinationsSearch } from "@/api/types";

interface Props {
  destinations: DestinationsSearch;
}

export function DestinationsList(props: Props) {
  const { destinations } = props;

  const { setSelectedDestination } = useBrowseDestinationsStore();

  React.useEffect(() => {
    const firstDestination = destinations[0]!;

    setSelectedDestination(firstDestination);
  }, [destinations, setSelectedDestination]);

  return (
    <section
      className={cn(
        "flex w-full items-center justify-start gap-6 overflow-x-scroll",
        "p-4",
        "absolute inset-x-0 bottom-0",
      )}
    >
      {props.destinations.map((destination) => (
        <DestinationListingCard
          key={destination.id}
          destination={destination}
        />
      ))}
    </section>
  );
}
