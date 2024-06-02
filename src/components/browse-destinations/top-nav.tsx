import { SearchBar } from "@/components/browse-destinations/search";

export function TopNav() {
  return (
    <div className="sticky top-0 z-40 flex h-24 shrink-0 items-center bg-transparent sm:gap-x-6 sm:px-6 lg:px-8">
      <SearchBar />
    </div>
  );
}
