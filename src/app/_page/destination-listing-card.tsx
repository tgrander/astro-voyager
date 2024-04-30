"use client";

import type { DestinationSearch } from "@/api/types";
import { CldImage } from "@/common/image";
import { Button } from "@nextui-org/button";
import { Card, CardFooter } from "@nextui-org/card";

interface Props {
  destination: DestinationSearch;
}

export function DestinationListingCard({ destination }: Props) {
  return (
    <Card
      isFooterBlurred
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
      <CardFooter className="border-1 absolute bottom-1 left-1 right-1 z-10 flex items-center justify-between overflow-hidden rounded-lg bg-black/30 px-2 py-1 shadow-md">
        <p className="text-xs text-white/80">Available soon.</p>
        <Button
          className="bg-black/50 text-xs text-white"
          variant="flat"
          radius="lg"
          size="sm"
        >
          Notify me
        </Button>
      </CardFooter>
    </Card>
  );
}
