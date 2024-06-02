import { Destination, Experience } from "./search-bar/";

import { cn } from "@/utils/cn";

export function SearchBar() {
  return (
    <div
      className={cn("flex h-full w-full items-center justify-center gap-x-4")}
    >
      <Destination />
      <Experience />
    </div>
  );
}
