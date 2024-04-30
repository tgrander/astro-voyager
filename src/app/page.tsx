import { api } from "@/trpc/server";

import { DestinationListingCard } from "./_page";

export default async function Home() {
  // const spacecrafts = await api.spacecraft.search();
  const destinations = await api.destination.search();

  return (
    <div className="flex min-h-full w-full items-center justify-center text-white">
      <section className="grid grid-cols-3 gap-6 rounded-lg">
        {destinations.map((destination) => {
          return (
            <DestinationListingCard
              key={destination.id}
              destination={destination}
            />
          );
        })}
      </section>
    </div>
  );
}
