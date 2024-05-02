import { api } from "@/trpc/server";

import { PlanetPageWrapper } from "./_page/planet-page-wrapper";

export default async function PlanetsPage() {
  const planets = await api.planet.search();

  return <PlanetPageWrapper planets={planets} />;
}
