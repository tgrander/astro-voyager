import type { NewDestination } from "@/server/db/helpers";

// Alien Planet Destinations
import { data as aquarion } from "./aquarion/data";
import { auroraArboretum } from "./aurora-arboretum";
import { data as caelux } from "./caelux/data";
import { celestialFallsOfEnceladus } from "./celestial-falls-of-enceladus";
import { luminousLagoonOfVenus } from "./luminous-lagoon-of-venus";
import { nebulaVineyard } from "./nebula-vineyard";
import { data as neonix } from "./neonix/data";
import { novaPolarisStation } from "./nova-polaris-station";
import { plasmaBeachesOfMercury } from "./plasma-beaches-of-mercury";
import { quantumQuasarArcade } from "./quantum-quasar-arcade";
import { redCliffsResortOfMars } from "./red-cliffs-resort-of-mars";
import { data as seraphis } from "./seraphis/data";
import { silicaSandsOfIo } from "./silica-sands-of-io";
import { titansEchoCaverns } from "./titans-echo-caverns";
import { data as valyrian } from "./valyrian/data";

export const destinationsData: NewDestination[] = [
  auroraArboretum,
  novaPolarisStation,
  silicaSandsOfIo,
  titansEchoCaverns,
  celestialFallsOfEnceladus,
  nebulaVineyard,
  redCliffsResortOfMars,
  plasmaBeachesOfMercury,
  luminousLagoonOfVenus,
  quantumQuasarArcade,

  // Alien Planet Destinations
  ...aquarion,
  ...caelux,
  ...neonix,
  ...seraphis,
  ...valyrian,
] as const;
