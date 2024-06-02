import type { NewPlanet } from "@/server/db/helpers";

// alien planets
const data: NewPlanet[] = [
  // Neonix
  {
    name: "Neonix",
    description:
      "A cyberpunk planet famed for its human-like androids and notorious adult themes, Neonix is a high-stakes, neon-lit world where corporate power battles underground rebellions in a never-ending dance of intrigue and survival.",
    type: "Artificial",
    species: "Hybrid",
    location: "Vega System",
    distanceFromSun: "About 320 AU (47.9 billion km)",
    orbitalPeriod: "525 Earth days",
    rotationPeriod: "33 Earth hours",
    diameter: 12300,
    climate: "Controlled Atmospheric Conditions",
    gravity: "1.0 Earth gravity",
    moons: [
      {
        name: "Decay",
        description: "Known for its vast ocean and underwater caves.",
      },
      {
        name: "Pulse",
        description:
          "Characterized by its extensive coral reefs and diverse marine life.",
      },
    ],
    ringSystem: false,
    atmosphere: {
      hydrogen: 5.0,
      helium: 2.0,
      oxygenLevel: 21.0,
      nitrogen: 70.0,
      carbonDioxide: 1.0,
      methane: 0.5,
      traceGases: 0.5,
      waterVapor: 2.0,
    },
    imageUrls: [
      "https://res.cloudinary.com/skywalker/planets/neonix_night_view",
    ],
    discoveryDate: "2310",
    discoveredBy: "Corporation: Synthetix",
    notableFeatures:
      "Neonix is renowned for its sprawling neon landscapes, android-dominated society, and as a hub for cybernetic enhancements and AI research.",
    habitability:
      "Fully habitable with extensive urban environments tailored for both organic and synthetic life forms.",
    status: "Open for Visits",
    iconImage: "skywalker/icons/planets/pink_rzeft1",
    heroImage: "skywalker/planets/neonix_hero_image",
    slug: "neonix",
  },

  // Caelux
  {
    name: "Caelux",
    description:
      "A vibrant gas giant known for its majestic floating cities, which hover gracefully within its dense, dynamically charged atmospheric layers, famous for vivid lightning storms.",
    type: "Gas Giant",
    species: "Hybrid",
    location: "Andromeda Galaxy, Luminous Sector",
    distanceFromSun: "About 300 AU (44.8 billion km)",
    orbitalPeriod: "690 Earth days",
    rotationPeriod: "16 Earth hours",
    diameter: 142000,
    climate: "Temperate with frequent dynamic storm activity",
    gravity: "1.1 times Earth gravity",
    moons: [
      {
        name: "Miranda",
        description: "Known for its vast ocean and underwater caves.",
      },
      {
        name: "Thesan",
        description:
          "Characterized by its extensive coral reefs and diverse marine life.",
      },
    ],
    ringSystem: true,
    atmosphere: {
      hydrogen: 70.0,
      helium: 25.0,
      oxygenLevel: 3.5,
      nitrogen: 1.0,
      carbonDioxide: 0.3,
      methane: 0.1,
      traceGases: 0.1,
      waterVapor: 5.0,
    },
    imageUrls: ["https://res.cloudinary.com/skywalker/planets/caelux_view_01"],
    discoveryDate: "2122",
    discoveredBy: "Dr. Ava Starling",
    notableFeatures:
      "Caelux is celebrated for its innovative energy harnessing technologies, its floating cities utilizing atmospheric electricity, and its cultural festivals that integrate art and technology.",
    habitability:
      "Highly habitable for diverse species due to advanced climate control technologies within the floating cities.",
    status: "Open for Visits",
    iconImage: "skywalker/icons/planets/lhsijbc4b3udyddypj7u",
    heroImage: "skywalker/planets/caelux_hero_image",
    slug: "caelux",
  },

  // Seraphis
  {
    name: "Seraphis",
    description:
      "A stunning gas giant known for its visually striking floating cities and dynamic atmospheric phenomena, Seraphis is a hub of innovation and culture, celebrated for its art, technology, and unique adaptability to the planet's intense storm activity.",
    type: "Gas Giant",
    species: "Hybrid",
    location: "Garnet Star System, Nebular Sector",
    distanceFromSun: "Approximately 450 AU (67.5 billion km)",
    orbitalPeriod: "3100 Earth days",
    rotationPeriod: "19 Earth hours",
    diameter: 119000,
    climate: "Highly variable with frequent powerful storm systems",
    gravity: "2.5 times Earth gravity",
    moons: [
      {
        name: "Stratos",
        description: "Known for its vast ocean and underwater caves.",
      },
      {
        name: "Cirron",
        description:
          "Characterized by its extensive coral reefs and diverse marine life.",
      },
    ],
    ringSystem: true,
    atmosphere: {
      hydrogen: 72.0,
      helium: 21.5,
      oxygenLevel: 2.0,
      nitrogen: 3.2,
      carbonDioxide: 0.5,
      methane: 0.3,
      traceGases: 0.5,
      waterVapor: 4.0,
    },
    imageUrls: [
      "https://res.cloudinary.com/skywalker/planets/seraphis_view_01",
    ],
    discoveryDate: "2184",
    discoveredBy: "Explorer Corps Unit 52",
    notableFeatures:
      "Known for its Electrum Bridges that connect the floating cities, which are designed to harness and utilize the planet’s atmospheric electricity. Seraphis is also famous for its cultural festivals that are synchronized with the planet's natural electrical displays.",
    habitability:
      "Habitable within floating cities equipped with advanced life support and environmental control systems.",
    status: "Open for Visits",
    iconImage: "skywalker/icons/planets/fdbgvwlwhjswn1l0c0ut",
    heroImage: "skywalker/planets/seraphis_hero_image",
    slug: "seraphis",
  },

  // Valyrian
  {
    name: "Valyrian",
    description:
      "A planet of spectacular beauty, Valyrian boasts enormous waterfalls plunging from floating islands, lush tropical archipelagos, and high-tech cities that defy gravity. The planet's atmosphere supports various unique ecosystems and advanced civilizations.",
    type: "Terrestrial Planet",
    species: "Hybrid",
    location: "Eridani Sector, Star System Helios",
    distanceFromSun: "About 210 AU (31.5 billion km)",
    orbitalPeriod: "480 Earth days",
    rotationPeriod: "28 Earth hours",
    diameter: 15000,
    climate: "Varied - ranging from temperate to tropical",
    gravity: "0.9 Earth gravity",
    moons: [
      {
        name: "Lyra",
        description: "Known for its vast ocean and underwater caves.",
      },
      {
        name: "Thalos",
        description:
          "Characterized by its extensive coral reefs and diverse marine life.",
      },
    ],
    ringSystem: false,
    atmosphere: {
      hydrogen: 10.0,
      helium: 5.0,
      oxygenLevel: 25.0,
      nitrogen: 58.0,
      carbonDioxide: 1.5,
      methane: 0.2,
      traceGases: 0.3,
      waterVapor: 10.0,
    },
    imageUrls: [
      "https://res.cloudinary.com/skywalker/planets/valyrian_view_01",
    ],
    discoveryDate: "2245",
    discoveredBy: "Dr. Elara Mivon",
    notableFeatures:
      "Known for its floating cities and massive waterfalls, Valyrian is a center for intergalactic tourism and diverse ecological research.",
    habitability:
      "Highly habitable with advanced environmental control systems within the cities.",
    status: "Open for Visits",
    iconImage: "skywalker/icons/planets/m3rhhxwxv8lpfiaclkcp",
    heroImage: "skywalker/planets/valyrian_hero_image",
    slug: "valyrian",
  },

  // Aquarion
  {
    name: "Aquarion",
    slug: "aquarion",
    description:
      "An entirely aquatic planet with deep oceans covering its surface, home to a rich variety of marine life and underwater cities.",
    type: "Terrestrial Planet",
    species: "Alien",
    location: "Andromeda Galaxy, Poseidon Constellation",
    distanceFromSun: "About 150 AU (22.4 billion km)",
    orbitalPeriod: "687 Earth days",
    rotationPeriod: "30 Earth hours",
    diameter: 12742,
    climate: "Aquatic",
    gravity: "0.97 Earth gravity",
    moons: [
      {
        name: "Neptunea",
        description: "Known for its vast ocean and underwater caves.",
      },
      {
        name: "Hydrus",
        description:
          "Characterized by its extensive coral reefs and diverse marine life.",
      },
    ],
    ringSystem: true,
    atmosphere: {
      hydrogen: 3.0,
      helium: 2.0,
      oxygenLevel: 28.0,
      nitrogen: 67.0,
      carbonDioxide: 0.1,
      methane: 0.005,
      traceGases: 0.015,
      waterVapor: 10.0,
    },
    imageUrls: [
      "https://res.cloudinary.com/skywalker/planets/aquarion_view_01",
    ],
    discoveryDate: "2099",
    discoveredBy: "Dr. Luna Marin",
    notableFeatures:
      "Aquarion is famous for its underwater cities, extensive coral reefs, and the Aquatic Opera House, known for performances by native species.",
    habitability:
      "Highly habitable for aqua-amphibious species and equipped with advanced underwater living technologies for others.",
    status: "Open for Visits",
    iconImage: "skywalker/icons/planets/dusotsioeldrul0h4p4i",
    heroImage: "skywalker/icons/planets/pink_rzeft1",
  },
];

const bgImage: Record<string, string> = {
  neonix: "skywalker/planets/backgrounds/neonix/r9yqkrkuphdarqbsicpb",
  caelux: "skywalker/planets/backgrounds/caelux/jpmrn3gyxljzg4y1g9dx",
  seraphis: "skywalker/planets/backgrounds/udq11nhkcaml0awiaxrt",
  valyrian: "skywalker/planets/backgrounds/nxkgjgpr7a5ddelhed50",
  aquarion: "skywalker/planets/backgrounds/twyvxjy5dnriq05wtpzx",
};

export const planetData: NewPlanet[] = data.map((planet) => ({
  ...planet,
  heroImage: bgImage[planet.slug],
}));

// export const planetData: NewPlanet[] = [
//   // EARTH
//   {
//     name: "Earth",
//     heroImage: "skywalker/icons/planets/pink_rzeft1",

//     slug: "earth",
//     description:
//       "Our home planet, known for its vast oceans, diverse ecosystems, and rich history.",
//     type: "Terrestrial Planet",
//     species: "Human",
//     location: "Third planet from the Sun",
//     distanceFromSun: "About 1 AU (149.6 million km)",
//     orbitalPeriod: "1.0",
//     rotationPeriod: "24.0",
//     diameter: 12742,
//     climate: "Temperate",
//     gravity: "1.0",
//     moons: [
//       {
//         name: "Moon",
//         description:
//           "Earth's only natural satellite, known for its influence on the planet's tides and its visible phases.",
//       },
//     ],
//     ringSystem: false,
//     atmosphere: {
//       oxygenLevel: 21,
//       carbonDioxide: 0.04,
//       nitrogen: 78,
//       hydrogen: 0,
//       methane: 0.00017,
//       helium: 0.00052,
//       traceGases: 0.07,
//       waterVapor: 1,
//     },
//     imageUrls: ["https://cdn.example.com/images/earth.jpg"],
//     discoveryDate: "Prehistoric",
//     discoveredBy: "Humanity",
//     notableFeatures:
//       "Home to a wide variety of life forms and the only known planet with liquid water on its surface.",
//     habitability: "Habitable",
//     status: "Open for Visits",
//   },
//   // SATURN
//   {
//     name: "Saturn",
//     description:
//       "Known for its extensive ring system, Saturn is a gas giant with a magnetic field stronger than Earth's. It is enveloped by over a hundred rings made of ice and rock.",
//     type: "Gas Giant",
//     species: "Human",
//     location: "Sixth planet from the Sun",
//     distanceFromSun: "About 9.58 AU (1.43 billion km)",
//     orbitalPeriod: "29.5",
//     rotationPeriod: "10.7",
//     diameter: 116460,
//     climate: "Extremely cold with ammonia clouds",
//     gravity: "1.065",
//     moons: [
//       {
//         name: "Titan",
//         description:
//           "Largest moon of Saturn, known for its dense atmosphere and liquid hydrocarbon lakes.",
//       },
//       {
//         name: "Enceladus",
//         description: "Notable for its ice geysers and subsurface ocean.",
//       },
//     ],
//     ringSystem: true,
//     imageUrls: [
//       "https://res.cloudinary.com/skywalker/planets/ofwlgtac1sanltemy0db",
//     ],
//     discoveryDate: "1610",
//     discoveredBy: "Galileo Galilei",
//     notableFeatures: "Extensive and bright ring system visible from Earth.",
//     habitability: "Non-habitable",
//     status: "Research Only",
//     slug: "saturn",
//     heroImage: "skywalker/icons/planets/pink_rzeft1",
//     atmosphere: {
//       oxygenLevel: 0,
//       carbonDioxide: 0,
//       nitrogen: 1.5,
//       hydrogen: 96,
//       methane: 3,
//       helium: 0.3,
//       traceGases: 0.2,
//       waterVapor: 0,
//     },
//   },
//   // VENUS
//   {
//     name: "Venus",
//     slug: "venus",
//     description:
//       "Often called Earth's 'sister planet' due to its similar size and proximity to the Sun, Venus is covered in a thick atmosphere that traps heat.",
//     type: "Terrestrial Planet",
//     species: "Human",
//     location: "Second planet from the Sun",
//     distanceFromSun: "About 0.72 AU (108 million km)",
//     orbitalPeriod: "0.6152",
//     rotationPeriod: "5832.6",
//     diameter: 12104,
//     climate: "Extremely hot with thick clouds of sulfuric acid",
//     gravity: "0.904",
//     moons: [],
//     ringSystem: false,
//     atmosphere: {
//       hydrogen: 0,
//       helium: 0,
//       methane: 0,
//       waterVapor: 0.002,
//       carbonDioxide: 96.5,
//       nitrogen: 3.5,
//     },
//     imageUrls: [
//       "https://res.cloudinary.com/skywalker/planets/ugyvue8v07gbrtodvsvq",
//     ],
//     heroImage: "skywalker/icons/planets/pink_rzeft1",
//     discoveryDate: "Prehistoric",
//     discoveredBy: "Ancient Observers",
//     notableFeatures: "Known for its runaway greenhouse effect.",
//     habitability: "Non-habitable",
//     status: "Research Only",
//   },
//   // ORION NEBULA
//   {
//     name: "Orion Nebula",
//     description:
//       "A diffuse nebula situated in the Milky Way, being south of Orion's Belt in the constellation of Orion. It is one of the brightest nebulae, visible to the naked eye in the night sky.",
//     type: "Nebula",
//     species: "Alien",
//     location: "Milky Way Galaxy, Orion Constellation",
//     distanceFromSun: "About 89.87 AU (1.34 billion km)",
//     orbitalPeriod: null,
//     rotationPeriod: null,
//     diameter: 24000000,
//     climate: "N/A",
//     gravity: null,
//     moons: [],
//     ringSystem: false,
//     atmosphere: {
//       hydrogen: 75.0,
//       helium: 23.0,
//       oxygenLevel: 1.0,
//       nitrogen: 0.5,
//       carbonDioxide: 0.01,
//       methane: 0.002,
//       traceGases: null,
//       waterVapor: null,
//     },
//     imageUrls: [
//       "https://res.cloudinary.com/skywalker/planets/kxmsqguenmhsduy9kd4w",
//     ],
//     discoveryDate: "1610",
//     discoveredBy: "Nicholas-Claude Fabri de Peiresc",
//     notableFeatures:
//       "Orion Nebula is an active stellar nursery where new stars are being born. It contains a young open cluster, known as the Trapezium due to the asterism of its primary stars.",
//     habitability:
//       "Not habitable due to being a vast cloud of gas and dust without a solid surface.",
//     status: "Open for Observation",
//     heroImage: "skywalker/icons/planets/pink_rzeft1",
//     slug: "orion-nebula",
//   },
//   // POLARIS
//   {
//     name: "Polaris",
//     slug: "polaris",
//     description:
//       "Known as the North Star, serves as an important fixed point for navigation and is located at the end of the Little Dipper's handle.",
//     type: "Variable Star",
//     species: "Human",
//     location: "End of the Little Dipper's handle",
//     distanceFromSun: "About 2.89 light-years",
//     orbitalPeriod: "0.0",
//     rotationPeriod: "0.0",
//     diameter: 69000000,
//     climate: "N/A",
//     gravity: "0.0",
//     moons: [],
//     ringSystem: false,
//     imageUrls: ["https://cdn.example.com/images/polaris.jpg"],
//     discoveryDate: "Antiquity",
//     discoveredBy: "Ancient astronomers",
//     notableFeatures: "Crucial for celestial navigation, marking true north.",
//     habitability: "Not habitable",
//     status: "Restricted",
//     heroImage: "skywalker/icons/planets/pink_rzeft1",
//     atmosphere: {
//       hydrogen: 70.0,
//       helium: 28.0,
//       methane: null,
//       waterVapor: null,
//       carbonDioxide: null,
//       nitrogen: null,
//       oxygenLevel: null,
//       traceGases: null,
//     },
//   },
//   // MERCURY
//   {
//     name: "Mercury",
//     slug: "mercury",
//     description:
//       "The smallest planet in our solar system and closest to the Sun, known for its extreme temperature fluctuations.",
//     type: "Terrestrial Planet",
//     species: "Human",
//     location: "First planet from the sun",
//     distanceFromSun: "About 0.39 AU (58 million km)",
//     orbitalPeriod: "0.24",
//     rotationPeriod: "1407.6",
//     diameter: 4879,
//     climate: "Extremely harsh with great temperature extremes",
//     gravity: "0.38",
//     moons: [],
//     ringSystem: false,
//     atmosphere: {
//       oxygenLevel: 42.0,
//       hydrogen: 22.0,
//       helium: 6.0,
//       traceGases: null,
//     },
//     imageUrls: ["https://cdn.example.com/images/mercury.jpg"],
//     discoveryDate: "Prehistoric",
//     discoveredBy: "Unknown",
//     notableFeatures: "Has a very thin atmosphere and no natural satellites.",
//     habitability: "Not habitable",
//     status: "Research Only",
//     heroImage: "skywalker/icons/planets/pink_rzeft1",
//   },
//   // MARS
//   {
//     name: "Mars",
//     slug: "mars",
//     description:
//       "Known as the Red Planet, Mars bears a striking red appearance due to iron oxide prevalent on its surface.",
//     type: "Terrestrial Planet",
//     species: "Human",
//     location: "Fourth planet from the sun",
//     distanceFromSun: "About 1.52 AU (227 million km)",
//     orbitalPeriod: "1.88",
//     rotationPeriod: "24.6",
//     diameter: 6779,
//     climate: "Mostly cold desert with some polar ice caps",
//     gravity: "0.38",
//     moons: [
//       {
//         name: "Phobos",
//         description: "Extremely close orbit and rapid orbital decay expected",
//       },
//       {
//         name: "Deimos",
//         description: "Smaller and further than Phobos with a smoother surface",
//       },
//     ],
//     ringSystem: false,
//     atmosphere: {
//       carbonDioxide: 95.32,
//       nitrogen: 2.7,
//       oxygenLevel: 0.13,
//       waterVapor: 0.03,
//       traceGases: null,
//     },
//     imageUrls: ["https://cdn.example.com/images/mars.jpg"],
//     discoveryDate: "Prehistoric",
//     discoveredBy: "Unknown",
//     notableFeatures:
//       "Home to the largest volcano and the deepest, longest canyon in the solar system.",
//     habitability: "Potentially habitable with human intervention",
//     status: "Open for Visits",
//     heroImage: "skywalker/icons/planets/pink_rzeft1",
//   },
//   // JUPITER
//   {
//     name: "Jupiter",
//     slug: "jupiter",
//     description:
//       "The largest planet in our solar system, known for its magnificent storms including the Great Red Spot.",
//     type: "Gas Giant",
//     species: "Human",
//     location: "Fifth planet from the Sun",
//     distanceFromSun: "About 5.20 AU (778 million km)",
//     orbitalPeriod: "11.86",
//     rotationPeriod: "9.93",
//     diameter: 139820,
//     climate: "Extremely turbulent and stormy",
//     gravity: "2.64",
//     moons: [
//       {
//         name: "Io",
//         description:
//           "The most geologically active object in the Solar System, characterized by hundreds of volcanoes and extensive lava flows.",
//       },
//       {
//         name: "Europa",
//         description:
//           "Noted for its smooth ice-covered surface, it is believed to harbor a subsurface ocean, making it one of the most likely places to find extraterrestrial life.",
//       },
//       {
//         name: "Ganymede",
//         description:
//           "The largest moon in the Solar System, Ganymede is unique for its internal ocean and its intrinsic magnetic field.",
//       },
//       {
//         name: "Callisto",
//         description:
//           "Known for its heavily cratered surface, providing evidence of the ancient surface dating back billions of years.",
//       },
//     ],
//     ringSystem: true,
//     atmosphere: {
//       hydrogen: 90,
//       helium: 10,
//       methane: 0,
//       waterVapor: 0,
//     },
//     imageUrls: ["https://cdn.example.com/images/jupiter.jpg"],
//     discoveryDate: "Prehistoric",
//     discoveredBy: "unknown",
//     notableFeatures:
//       "Home to the largest planetary atmosphere, with persistent storms such as the Great Red Spot.",
//     habitability:
//       "Not suitable for human life due to extreme pressure and composition",
//     status: "Open for Visits",
//     heroImage: "skywalker/icons/planets/pink_rzeft1",
//   },
//   // SATURN
//   {
//     name: "Saturn",
//     description:
//       "The sixth planet from the Sun and the second-largest in our solar system, Saturn is famed for its stunning ring system, composed of ice particles, rocky debris, and dust.",
//     type: "Gas Giant",
//     species: "Human",
//     location: "Sixth planet from the Sun",
//     distanceFromSun: "About 9.54 AU (1.43 billion km)",
//     orbitalPeriod: "29.4571",
//     rotationPeriod: "10.7",
//     diameter: 116460,
//     climate: "Extreme cold with violent storms",
//     gravity: "1.065",
//     moons: [
//       {
//         name: "Titan",
//         description:
//           "Largest moon of Saturn, known for its dense atmosphere and lakes of liquid methane.",
//       },
//       {
//         name: "Enceladus",
//         description:
//           "Noted for its ice geysers and potential subsurface ocean.",
//       },
//       {
//         name: "Rhea",
//         description:
//           "The second-largest moon of Saturn, characterized by its heavily cratered surface and thin atmosphere.",
//       },
//       {
//         name: "Iapetus",
//         description:
//           "Famous for its dramatic two-tone coloration and equatorial ridge.",
//       },
//       {
//         name: "Dione",
//         description:
//           "Known for its wispy terrain consisting of high-albedo ice cliffs.",
//       },
//     ],
//     ringSystem: true,
//     atmosphere: {
//       hydrogen: 96.3,
//       helium: 3.25,
//       methane: 0.45,
//       waterVapor: 0.01,
//     },
//     imageUrls: [
//       "https://res.cloudinary.com/skywalker/planets/ofwlgtac1sanltemy0db",
//     ],
//     discoveryDate: "1610",
//     discoveredBy: "Galileo Galilei",
//     notableFeatures:
//       "Saturn's ring system is the most extensive and complex in the solar system, providing a spectacular feature visible even from Earth with small telescopes.",
//     habitability:
//       "Not habitable due to extreme pressures and temperatures, lack of a solid surface, and intense radiation.",
//     status: "Research Only",
//     heroImage: "skywalker/icons/planets/pink_rzeft1",
//     slug: "saturn",
//   },
//   // DORMANT QUASAR / BLACK HOLE
//   {
//     name: "Dormant Quasar",
//     description:
//       "A formerly active quasar now in a dormant state, located at the edge of the observable universe. Once a bright beacon of immense energy, it now serves as a mysterious relic of the cosmos's dynamic past.",
//     type: "Quasar",
//     species: "Alien",
//     location: "Edge of the Observable Universe",
//     distanceFromSun: "About 24.30 million light-years",
//     orbitalPeriod: null,
//     rotationPeriod: null,
//     diameter: 0, // Quasars do not have a defined diameter in traditional sense
//     climate: "N/A",
//     gravity: null,
//     moons: [],
//     ringSystem: false,
//     atmosphere: {
//       hydrogen: null,
//       helium: null,
//       oxygenLevel: null,
//       nitrogen: null,
//       carbonDioxide: null,
//       methane: null,
//     },
//     imageUrls: [
//       "https://res.cloudinary.com/skywalker/planets/lxh9kgud4htsdkv8veps",
//     ],
//     discoveryDate: "1963",
//     discoveredBy: "Astronomical observations",
//     notableFeatures:
//       "Once a powerful source of energy, it is now a fascinating subject for studying the life cycle of quasars and the early universe.",
//     habitability:
//       "Not habitable, as quasars represent the extremely energetic and distant phenomena associated with supermassive black holes at the center of galaxies.",
//     status: "Open for Observation",
//     heroImage: "skywalker/icons/planets/pink_rzeft1",
//     slug: "dormant-quasar",
//   },
// ];
