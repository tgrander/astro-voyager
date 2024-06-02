import { DestinationsList, FiltersSidebar } from "./_page";

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
      <div>
        {/* Sidebar Filters */}
        <div className="fixed left-0 top-0 h-full w-80 p-8">
          <FiltersSidebar />
        </div>

        {/* Destinations */}
        <div className="pl-80">
          <DestinationsList destinations={destinations} />
        </div>
      </div>
    </div>
  );
}
