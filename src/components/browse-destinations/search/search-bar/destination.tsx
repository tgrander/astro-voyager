"use client";

import * as React from "react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Destination as DestinationListItem,
  destinations,
} from "@/data/search";

import { cn } from "@/lib/utils";

export function Destination() {
  const [open, setOpen] = React.useState(false);
  const [selectedStatus, setSelectedStatus] =
    React.useState<DestinationListItem | null>(null);

  return (
    <div className="flex items-center space-x-4">
      <Command>
        <CommandInput
          placeholder="Search destination..."
          className="text-base"
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup>
            {destinations.map((destination) => (
              <CommandItem
                key={destination.value}
                value={destination.value}
                className="text-base"
                onSelect={(value) => {
                  setSelectedStatus(
                    destinations.find((priority) => priority.value === value) ||
                      null,
                  );
                  setOpen(false);
                }}
              >
                <destination.icon
                  className={cn(
                    "mr-5 h-4 w-4",
                    destination.value === selectedStatus?.value
                      ? "opacity-100"
                      : "opacity-40",
                  )}
                />
                <span>{destination.label}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
}
