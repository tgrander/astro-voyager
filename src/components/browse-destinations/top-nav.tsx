"use client";

import { SearchBar } from "@/components/browse-destinations/search";

export function TopNav() {
  return (
    <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 bg-slate-950 px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
      <SearchBar />
    </div>
  );
}
