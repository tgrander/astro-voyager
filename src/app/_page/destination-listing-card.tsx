"use client";

import type { DestinationSearch } from "@/api/types";
import { CldImage } from "@/common/image";
import { useBrowseDestinationsStore } from "@/state/destinations";
import { Button } from "@nextui-org/button";
import { Card, CardFooter } from "@nextui-org/card";

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
      <div className="flex flex-col gap-2">
        <h2 className=" text-small font-medium">{`${destination.name}, ${destination.planet.name}`}</h2>
        {/* <p classsName="text-sm">{destination.description}</p> */}
      </div>
    </div>
  );
}
