"use client";

import type { PlanetSearch } from "@/api/types";
import { CldImage } from "@/common/image";
import { Card, CardBody, CardFooter } from "@nextui-org/card";

interface Props {
  planet: PlanetSearch;
}

export function PlanetCard({ planet }: Props) {
  return (
    <Card
      isFooterBlurred={true}
      radius="lg"
      className="m-1 h-[250px] w-[250px] flex-shrink-0 border-none"
    >
      <CldImage
        src={planet.heroImage ?? ""}
        alt={planet.name}
        height={150}
        width={150}
        className="h-[150px] w-full object-cover"
      />
      <CardBody>
        <p>{planet.name}</p>
      </CardBody>
      <CardFooter></CardFooter>
    </Card>
  );
}
