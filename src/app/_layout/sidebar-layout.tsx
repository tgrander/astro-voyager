import React from "react";

import { StaticSidebar, StickyTop, TransitionRoot } from "./sidebar-layout/";

export function SidebarLayout({ children }: React.PropsWithChildren) {
  return (
    <>
      <div>
        <TransitionRoot />
        <StaticSidebar />

        <div className="lg:pl-72">
          <StickyTop />

          {/* Main content */}
          <main className="py-10">
            <div className="px-4 sm:px-6 lg:px-8">{children}</div>
          </main>
        </div>
      </div>
    </>
  );
}
