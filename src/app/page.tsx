import Image from "next/image";

import { api } from "@/trpc/server";
import { Button } from "@nextui-org/button";
import { Card, CardFooter } from "@nextui-org/card";

export default async function Home() {
  const spacecrafts = await api.spacecraft.search();

  return (
    <div className="flex h-full w-full items-center justify-center text-white">
      {spacecrafts.map((spacecraft) => {
        const src = `/spacecraft-images/${spacecraft.slug}.png`;
        console.log("src", src);

        return (
          <div key={spacecraft.id} className="grid grid-cols-3 gap-6">
            <Card isFooterBlurred radius="lg" className="border-none">
              <Image
                alt="Woman listing to music"
                className="object-cover"
                height={200}
                width={200}
                src={`/${spacecraft.slug}.png`}
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
          </div>
        );
      })}
    </div>
  );
}
