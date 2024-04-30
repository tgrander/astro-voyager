import { getCldImageUrl } from "next-cloudinary";

import { api } from "@/trpc/server";
import { cn } from "@/utils";

import { DestinationsList } from "./_page";

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
        "@container/main",
        "relative bg-slate-950 text-white",
        "flex min-h-screen w-full min-w-full flex-col",
        "bg-cover bg-center bg-no-repeat",
      )}
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <DestinationsList destinations={destinations} />
    </div>
  );
}
