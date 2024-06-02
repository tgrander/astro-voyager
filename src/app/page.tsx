import { DestinationsList } from "./_page";
import { api } from "@/trpc/server";
import { cn } from "@/utils";

export default async function Home() {
  const destinations = await api.destination.search();

  if (!destinations) {
    return null;
  }

  return (
    <div
      className={cn(
        "@container/main",
        "relative bg-slate-950 text-white",
        "flex min-h-screen w-full min-w-full",
        "bg-cover bg-center bg-no-repeat",
      )}
    >
      {/* Sidebar Filters */}
      <div className=" w-40"></div>

      {/* Destinations */}
      <div className=" pl-40">
        <DestinationsList destinations={destinations} />
      </div>
    </div>
  );
}
