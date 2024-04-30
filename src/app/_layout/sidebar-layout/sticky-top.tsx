"use client";

import { SearchBar } from "./sticky-top/";

export function StickyTop() {
  return (
    <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
      <SearchBar />
    </div>
  );
}

// {/* Hamburger menu */}
// <button
// type="button"
// className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
// onClick={() => setSidebarOpen(true)}
// >
// <span className="sr-only">Open sidebar</span>
// <Bars3Icon className="h-6 w-6" aria-hidden="true" />
// </button>
// {/* Separator */}
// <div className="h-6 w-px bg-gray-900/10 lg:hidden" aria-hidden="true" />
// <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
// {/* Search */}
// <Search />
// <div className="flex items-center gap-x-4 lg:gap-x-6">
//   {/* Notifications */}
//   <Notifications />
//   {/* Separator */}
//   <div
//     className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"
//     aria-hidden="true"
//   />
//   {/* Profile dropdown */}
//   <ProfileDropdown />
// </div>
// </div>
