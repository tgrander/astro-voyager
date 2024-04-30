import { api } from "@/trpc/server";
import { cn } from "@/utils";

import { DestinationListingCard } from "./_page";

export default async function Home() {
  const destinations = await api.destination.search();

  return (
    <div
      className={cn(
        "relative bg-slate-950 text-white",
        "flex min-h-screen w-full min-w-full flex-col",
      )}
    >
      <section
        className={cn(
          "flex w-full items-center justify-start gap-6 overflow-x-scroll",
          "p-4",
          "absolute inset-x-0 bottom-0",
        )}
      >
        {destinations.map((destination) => (
          <DestinationListingCard
            key={destination.id}
            destination={destination}
          />
        ))}
      </section>
    </div>
  );
}
