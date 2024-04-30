import { getCldImageUrl } from "next-cloudinary";

import { api } from "@/trpc/server";
import { cn } from "@/utils";

import { DestinationListingCard } from "./_page";

export default async function Home() {
  const destinations = await api.destination.search();

  if (!destinations) {
    return null;
  }

  const cloudinaryPublicId = destinations[0]?.heroImage ?? "";

  const backgroundImageUrl = getCldImageUrl({
    src: cloudinaryPublicId,
    fillBackground: true,
    crop: "fill",
    quality: 100,
  });

  return (
    <div
      className={cn(
        "relative bg-slate-950 text-white",
        "flex min-h-screen w-full min-w-full flex-col",
        "bg-cover bg-center bg-no-repeat",
      )}
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      {/* Overlay with opacity */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Destinations horizontal card list */}
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
