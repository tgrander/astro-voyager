"use client";

import React, { useState } from "react";

import { PlanetsSearch } from "@/api/types";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/aceternity/navbar-menu";
import { api } from "@/trpc/react";
import { cn } from "@/utils/cn";

export function NavbarSearch() {
  const planetsQuery = api.planet.search.useQuery();

  const planets = planetsQuery.data ?? [];

  console.log("planets", planets);

  return (
    <div className="relative flex w-full items-center justify-center">
      <Navbar className="top-2" planets={planets} />
    </div>
  );
}

function Navbar({
  className,
  planets,
}: {
  className?: string;
  planets: PlanetsSearch;
}) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn("fixed inset-x-0 top-10 z-50 mx-auto max-w-2xl", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Destination">
          <div className="  grid grid-cols-2 gap-10 p-4 text-sm">
            <ProductItem
              title="Algochurn"
              href="https://algochurn.com"
              src="https://res.cloudinary.com/dfjcoifwd/image/upload/v1714469357/skywalker/destinations/quantum-arcade/xnfa81muik2c0qbfruoo.png"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="https://tailwindmasterkit.com"
              src="https://res.cloudinary.com/dfjcoifwd/image/upload/v1714469356/skywalker/destinations/quantum-arcade/xjbprwvsj9jwinpolotm.png"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href="https://gomoonbeam.com"
              src="https://res.cloudinary.com/dfjcoifwd/image/upload/v1714469356/skywalker/destinations/quantum-arcade/hgpri2m5sbmx9ndk5ypw.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src="https://res.cloudinary.com/dfjcoifwd/image/upload/v1714469356/skywalker/destinations/quantum-arcade/vvmmtigp3v74s07sybv6.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Dates">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Spacecraft">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
