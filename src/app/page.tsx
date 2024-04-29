import { api } from "@/trpc/server";

import { SpacecraftListingCard } from "./_page";

export default async function Home() {
  const spacecrafts = await api.spacecraft.search();

  return (
    <div className="flex min-h-full w-full items-center justify-center text-white">
      <section className="grid grid-cols-3 gap-6 rounded-lg">
        {spacecrafts.map((spacecraft) => {
          return (
            <SpacecraftListingCard
              key={spacecraft.id}
              spacecraft={spacecraft}
            />
          );
        })}
      </section>
    </div>
  );
}
