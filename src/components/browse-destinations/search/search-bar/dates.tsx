"use client";

import * as React from "react";

import { ChevronsUpDown, X } from "lucide-react";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Experience as ExperienceListItem, experiences } from "@/data/search";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Experience() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] =
    React.useState<ExperienceListItem | null>(null);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          size="lg"
          aria-expanded={open}
          className={cn(
            "flex h-12 w-fit items-center justify-center rounded-full",
            {
              "border-white": !!selectedValue,
            },
          )}
        >
          <p
            className={cn("text-base text-white", {
              "text-white/80": !selectedValue,
            })}
          >
            {selectedValue
              ? experiences.find(
                  (experience) => experience.value === selectedValue.value,
                )?.label
              : "Add experience"}
          </p>
          <TriggerButtonIcon
            open={open}
            isSelected={!!selectedValue}
            setSelectedValue={setSelectedValue}
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandGroup>
              {experiences.map((experience) => (
                <CommandItem
                  key={experience.value}
                  value={experience.value}
                  className="text-base"
                  onSelect={(value) => {
                    setSelectedValue(
                      experiences.find(
                        (priority) => priority.value === value,
                      ) || null,
                    );
                    setOpen(false);
                  }}
                >
                  <experience.icon
                    className={cn(
                      "mr-5 h-4 w-4",
                      experience.value === selectedValue?.value
                        ? "opacity-100"
                        : "opacity-40",
                    )}
                  />
                  <span>{experience.label}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

function TriggerButtonIcon({
  open,
  isSelected,
  setSelectedValue,
}: {
  open: boolean;
  isSelected: boolean;
  setSelectedValue: React.Dispatch<
    React.SetStateAction<ExperienceListItem | null>
  >;
}) {
  const openAndHasValue = open && isSelected;
  const className = "h-4 w-4 shrink-0 opacity-50";

  return (
    <div className="ml-6">
      {openAndHasValue ? (
        <div
          className="rounded-full p-1 hover:bg-gray-600"
          onClick={(e) => {
            e.stopPropagation();
            setSelectedValue(null);
          }}
        >
          <X className={className} />
        </div>
      ) : (
        <ChevronsUpDown className={className} />
      )}
    </div>
  );
}
