import { Destination } from "./search-bar/";
import { cn } from "@/utils/cn";

export function SearchBar() {
  return (
    <div
      className={cn(
        "relative flex w-full items-center justify-center",
        "fixed inset-x-0 top-10 z-50 mx-auto max-w-2xl",
      )}
    >
      <Destination />
    </div>
  );
}
