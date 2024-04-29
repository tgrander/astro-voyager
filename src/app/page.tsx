import { api } from "@/trpc/server";

import { SpacecraftListingCard } from "./_page";

export default async function Home() {
  const spacecrafts = await api.spacecraft.search();

  return (
    <div className="flex h-full w-full items-center justify-center text-white">
      {spacecrafts.map((spacecraft) => {
        return (
          <div key={spacecraft.id} className="grid grid-cols-3 gap-6">
            <SpacecraftListingCard spacecraft={spacecraft} />
          </div>
        );
      })}
    </div>
  );
}
