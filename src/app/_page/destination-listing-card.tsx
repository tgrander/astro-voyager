"use client";

import type { DestinationSearch } from "@/api/types";
import { CldImage } from "@/common/image";
import { useBrowseDestinationsStore } from "@/state/destinations";
import { StarIcon } from "@heroicons/react/20/solid";
import { Card } from "@nextui-org/card";

interface Props {
  destination: DestinationSearch;
}

export function DestinationListingCard({ destination }: Props) {
  const { selectedDestination } = useBrowseDestinationsStore();

  return (
    <div className="flex flex-col justify-start gap-1">
      <Card
        isFooterBlurred={true}
        radius="lg"
        className="m-1 h-[250px] w-[250px] flex-shrink-0 border-none"
      >
        <CldImage
          alt="Image of interstellar planet"
          className="h-full w-full rounded-lg object-cover object-center"
          height={400}
          width={400}
          src={destination.heroImage ?? ""}
        />
      </Card>

      {/* Destination Info */}
      <div className="flex w-[250px] items-start justify-between gap-4">
        {/* Text info */}
        <div className="flex flex-col gap-1">
          <h2 className=" text-small font-medium">{`${destination.name}, ${destination.planet.name}`}</h2>
          <p className="text-sm text-gray-300">
            {destination.distanceFromEarth}
          </p>
        </div>

        {/* Rating */}
        <div className="flex shrink-0 items-center gap-1">
          <StarIcon className="h-4 w-4 text-yellow-400" />
          <span className="text-sm text-gray-300">
            {destination.visitorRating}
          </span>
        </div>
      </div>
    </div>
  );
}
