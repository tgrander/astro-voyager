"use client";

import React from "react";

import { cn } from "@/utils";

import { useSelectDestinationStore } from "../_state/useSelectDestinationStore";

import type { PlanetSearch } from "@/api/types";
interface Props {
  destinations: PlanetSearch["destinations"];
}

export function ImageCardSlider({ destinations }: Props) {
  const { selectedDestination, setSelectedDestination } =
    useSelectDestinationStore();

  return (
    <div className="w-full">
      <div className={cn("flex h-[400px] overflow-hidden")}>
        {destinations.map((destination) => (
          <React.Fragment key={destination.id}>
            <input
              type="radio"
              id={destination.slug}
              name="slide"
              className="hidden"
              checked={selectedDestination?.id === destination.id}
              onChange={() => setSelectedDestination(destination)}
            />

            <label
              htmlFor={destination.slug}
              className={`ease-cubic m-2 cursor-pointer overflow-hidden rounded-2xl bg-red-500 transition-all duration-700
                                                        ${selectedDestination?.id === destination.id ? "w-[600px]" : "w-[80px]"} bg-cover bg-center bg-no-repeat shadow-2xl`}
              style={{ backgroundImage: `url(${destination.heroImage})` }}
            >
              <div className="flex">
                <div className="m-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-800 text-white">
                  {/* {index} */}
                </div>
                <div
                  className={`flex h-20 w-full flex-col items-start justify-center overflow-hidden transition-all duration-300 ease-in
                                            ${selectedDestination?.id === destination.id ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
                >
                  <h4 className="uppercase text-white">{destination.name}</h4>
                  <p className="pt-1 text-gray-200">
                    {destination.description}
                  </p>
                </div>
              </div>
            </label>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
