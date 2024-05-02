"use client";

import React from "react";

import { CldImage } from "@/common/image";
import { BackgroundGradient } from "@/components/ui/aceternity/background-gradient";
import { Card, CardBody, CardFooter } from "@nextui-org/card";

import type { PlanetSearch } from "@/api/types";
interface Props {
  planet: PlanetSearch;
}

export function PlanetCard({ planet }: Props) {
  return (
    <div>
      <BackgroundGradient className="flex max-h-[75px] max-w-[75px] items-center justify-center rounded-full bg-white p-0 dark:bg-zinc-900/0">
        <Card
          isFooterBlurred={true}
          radius="lg"
          className="m-1 h-[75px] w-[75px] flex-shrink-0 border-none"
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
      </BackgroundGradient>
    </div>
  );
}
