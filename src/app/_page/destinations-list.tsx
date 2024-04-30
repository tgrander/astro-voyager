import { cn } from "@/utils";

import { DestinationListingCard } from "./destination-listing-card";

import type { DestinationsSearch } from "@/api/types";
interface Props {
  destinations: DestinationsSearch;
}

export function DestinationsList(props: Props) {
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
