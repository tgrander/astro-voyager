"use client";

import type { DestinationSearch } from "@/api/types";
import { CldImage } from "@/common/image";
import { Button } from "@nextui-org/button";
import { Card, CardFooter } from "@nextui-org/card";

interface Props {
  destination: DestinationSearch;
}

export function DestinationListingCard(props: Props) {
  return (
    <Card isFooterBlurred radius="lg" className="border-none">
      <CldImage
        alt="Image of interstellar planet"
        className="rounded-lg object-cover"
        height={400}
        width={400}
        src={props.destination.heroImage ?? ""}
      />
      <CardFooter className="border-1 rounded-large shadow-small absolute bottom-1 z-10 ml-1 w-[calc(100%_-_8px)] justify-between overflow-hidden border-white/20 py-1 before:rounded-xl before:bg-white/10">
        <p className="text-tiny text-white/80">Available soon.</p>
        <Button
          className="text-tiny bg-black/20 text-white"
          variant="flat"
          color="default"
          radius="lg"
          size="sm"
        >
          Notify me
        </Button>
      </CardFooter>
    </Card>
  );
}
