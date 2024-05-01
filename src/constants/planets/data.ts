import type { NewPlanet } from "@/server/db/helpers";

export const planetData: NewPlanet[] = [
  // EARTH
  {
    name: "Earth",
    heroImage: "skywalker/planets/c5seuo0awpmwudl0kdp9",

    slug: "earth",
    description:
      "Our home planet, known for its vast oceans, diverse ecosystems, and rich history.",
    type: "Terrestrial Planet",
    location: "Third planet from the Sun",
    distanceFromSun: "About 1 AU (149.6 million km)",
    orbitalPeriod: "1.0",
    rotationPeriod: "24.0",
    diameter: 12742,
    climate: "Temperate",
    gravity: "1.0",
    moons: [
      {
        name: "Moon",
        description:
          "Earth's only natural satellite, known for its influence on the planet's tides and its visible phases.",
      },
    ],
    ringSystem: false,
    atmosphere: {
      oxygenLevel: 21,
      carbonDioxide: 0.04,
      nitrogen: 78,
      hydrogen: 0,
      methane: 0.00017,
      helium: 0.00052,
      traceGases: 0.07,
      waterVapor: 1,
    },
    imageUrls: ["https://cdn.example.com/images/earth.jpg"],
    discoveryDate: "Prehistoric",
    discoveredBy: "Humanity",
    notableFeatures:
      "Home to a wide variety of life forms and the only known planet with liquid water on its surface.",
    habitability: "Habitable",
    status: "Open for Visits",
  },
  // SATURN
  {
    name: "Saturn",
    description:
      "Known for its extensive ring system, Saturn is a gas giant with a magnetic field stronger than Earth's. It is enveloped by over a hundred rings made of ice and rock.",
    type: "Gas Giant",
    location: "Sixth planet from the Sun",
    distanceFromSun: "About 9.58 AU (1.43 billion km)",
    orbitalPeriod: "29.5",
    rotationPeriod: "10.7",
    diameter: 116460,
    climate: "Extremely cold with ammonia clouds",
    gravity: "1.065",
    moons: [
      {
        name: "Titan",
        description:
          "Largest moon of Saturn, known for its dense atmosphere and liquid hydrocarbon lakes.",
      },
      {
        name: "Enceladus",
        description: "Notable for its ice geysers and subsurface ocean.",
      },
    ],
    ringSystem: true,
    imageUrls: [
      "https://res.cloudinary.com/skywalker/planets/ofwlgtac1sanltemy0db",
    ],
    discoveryDate: "1610",
    discoveredBy: "Galileo Galilei",
    notableFeatures: "Extensive and bright ring system visible from Earth.",
    habitability: "Non-habitable",
    status: "Research Only",
    slug: "saturn",
    heroImage: "skywalker/planets/ofwlgtac1sanltemy0db",
    atmosphere: {
      oxygenLevel: 0,
      carbonDioxide: 0,
      nitrogen: 1.5,
      hydrogen: 96,
      methane: 3,
      helium: 0.3,
      traceGases: 0.2,
      waterVapor: 0,
    },
  },
  // VENUS
  {
    name: "Venus",
    slug: "venus",
    description:
      "Often called Earth's 'sister planet' due to its similar size and proximity to the Sun, Venus is covered in a thick atmosphere that traps heat.",
    type: "Terrestrial Planet",
    location: "Second planet from the Sun",
    distanceFromSun: "About 0.72 AU (108 million km)",
    orbitalPeriod: "0.6152",
    rotationPeriod: "5832.6",
    diameter: 12104,
    climate: "Extremely hot with thick clouds of sulfuric acid",
    gravity: "0.904",
    moons: [],
    ringSystem: false,
    atmosphere: {
      hydrogen: 0,
      helium: 0,
      methane: 0,
      waterVapor: 0.002,
      carbonDioxide: 96.5,
      nitrogen: 3.5,
    },
    imageUrls: [
      "https://res.cloudinary.com/skywalker/planets/ugyvue8v07gbrtodvsvq",
    ],
    heroImage: "skywalker/planets/ugyvue8v07gbrtodvsvq",
    discoveryDate: "Prehistoric",
    discoveredBy: "Ancient Observers",
    notableFeatures: "Known for its runaway greenhouse effect.",
    habitability: "Non-habitable",
    status: "Research Only",
  },
  // ORION NEBULA
  {
    name: "Orion Nebula",
    description:
      "A diffuse nebula situated in the Milky Way, being south of Orion's Belt in the constellation of Orion. It is one of the brightest nebulae, visible to the naked eye in the night sky.",
    type: "Nebula",
    location: "Milky Way Galaxy, Orion Constellation",
    distanceFromSun: "About 89.87 AU (1.34 billion km)",
    orbitalPeriod: null,
    rotationPeriod: null,
    diameter: 24000000,
    climate: "N/A",
    gravity: null,
    moons: [],
    ringSystem: false,
    atmosphere: {
      hydrogen: 75.0,
      helium: 23.0,
      oxygenLevel: 1.0,
      nitrogen: 0.5,
      carbonDioxide: 0.01,
      methane: 0.002,
      traceGases: null,
      waterVapor: null,
    },
    imageUrls: [
      "https://res.cloudinary.com/skywalker/planets/kxmsqguenmhsduy9kd4w",
    ],
    discoveryDate: "1610",
    discoveredBy: "Nicholas-Claude Fabri de Peiresc",
    notableFeatures:
      "Orion Nebula is an active stellar nursery where new stars are being born. It contains a young open cluster, known as the Trapezium due to the asterism of its primary stars.",
    habitability:
      "Not habitable due to being a vast cloud of gas and dust without a solid surface.",
    status: "Open for Observation",
    heroImage: "skywalker/planets/kxmsqguenmhsduy9kd4w",
    slug: "orion-nebula",
  },
  // POLARIS
  {
    name: "Polaris",
    slug: "polaris",
    description:
      "Known as the North Star, serves as an important fixed point for navigation and is located at the end of the Little Dipper's handle.",
    type: "Variable Star",
    location: "End of the Little Dipper's handle",
    distanceFromSun: "About 2.89 light-years",
    orbitalPeriod: "0.0",
    rotationPeriod: "0.0",
    diameter: 69000000,
    climate: "N/A",
    gravity: "0.0",
    moons: [],
    ringSystem: false,
    imageUrls: ["https://cdn.example.com/images/polaris.jpg"],
    discoveryDate: "Antiquity",
    discoveredBy: "Ancient astronomers",
    notableFeatures: "Crucial for celestial navigation, marking true north.",
    habitability: "Not habitable",
    status: "Restricted",
    heroImage: "skywalker/planets/oqlfjlw3dyqhx55jr1xw",
    atmosphere: {
      hydrogen: 70.0,
      helium: 28.0,
      methane: null,
      waterVapor: null,
      carbonDioxide: null,
      nitrogen: null,
      oxygenLevel: null,
      traceGases: null,
    },
  },
  // MERCURY
  {
    name: "Mercury",
    slug: "mercury",
    description:
      "The smallest planet in our solar system and closest to the Sun, known for its extreme temperature fluctuations.",
    type: "Terrestrial Planet",
    location: "First planet from the sun",
    distanceFromSun: "About 0.39 AU (58 million km)",
    orbitalPeriod: "0.24",
    rotationPeriod: "1407.6",
    diameter: 4879,
    climate: "Extremely harsh with great temperature extremes",
    gravity: "0.38",
    moons: [],
    ringSystem: false,
    atmosphere: {
      oxygenLevel: 42.0,
      hydrogen: 22.0,
      helium: 6.0,
      traceGases: null,
    },
    imageUrls: ["https://cdn.example.com/images/mercury.jpg"],
    discoveryDate: "Prehistoric",
    discoveredBy: "Unknown",
    notableFeatures: "Has a very thin atmosphere and no natural satellites.",
    habitability: "Not habitable",
    status: "Research Only",
    heroImage: "skywalker/planets/bi5bukoq1irqv4kwc4ds",
  },
  // MARS
  {
    name: "Mars",
    slug: "mars",
    description:
      "Known as the Red Planet, Mars bears a striking red appearance due to iron oxide prevalent on its surface.",
    type: "Terrestrial Planet",
    location: "Fourth planet from the sun",
    distanceFromSun: "About 1.52 AU (227 million km)",
    orbitalPeriod: "1.88",
    rotationPeriod: "24.6",
    diameter: 6779,
    climate: "Mostly cold desert with some polar ice caps",
    gravity: "0.38",
    moons: [
      {
        name: "Phobos",
        description: "Extremely close orbit and rapid orbital decay expected",
      },
      {
        name: "Deimos",
        description: "Smaller and further than Phobos with a smoother surface",
      },
    ],
    ringSystem: false,
    atmosphere: {
      carbonDioxide: 95.32,
      nitrogen: 2.7,
      oxygenLevel: 0.13,
      waterVapor: 0.03,
      traceGases: null,
    },
    imageUrls: ["https://cdn.example.com/images/mars.jpg"],
    discoveryDate: "Prehistoric",
    discoveredBy: "Unknown",
    notableFeatures:
      "Home to the largest volcano and the deepest, longest canyon in the solar system.",
    habitability: "Potentially habitable with human intervention",
    status: "Open for Visits",
    heroImage: "skywalker/planets/bazxdxubljac3u6oibrn",
  },
  // JUPITER
  {
    name: "Jupiter",
    slug: "jupiter",
    description:
      "The largest planet in our solar system, known for its magnificent storms including the Great Red Spot.",
    type: "Gas Giant",
    location: "Fifth planet from the Sun",
    distanceFromSun: "About 5.20 AU (778 million km)",
    orbitalPeriod: "11.86",
    rotationPeriod: "9.93",
    diameter: 139820,
    climate: "Extremely turbulent and stormy",
    gravity: "2.64",
    moons: [
      {
        name: "Io",
        description:
          "The most geologically active object in the Solar System, characterized by hundreds of volcanoes and extensive lava flows.",
      },
      {
        name: "Europa",
        description:
          "Noted for its smooth ice-covered surface, it is believed to harbor a subsurface ocean, making it one of the most likely places to find extraterrestrial life.",
      },
      {
        name: "Ganymede",
        description:
          "The largest moon in the Solar System, Ganymede is unique for its internal ocean and its intrinsic magnetic field.",
      },
      {
        name: "Callisto",
        description:
          "Known for its heavily cratered surface, providing evidence of the ancient surface dating back billions of years.",
      },
    ],
    ringSystem: true,
    atmosphere: {
      hydrogen: 90,
      helium: 10,
      methane: 0,
      waterVapor: 0,
    },
    imageUrls: ["https://cdn.example.com/images/jupiter.jpg"],
    discoveryDate: "Prehistoric",
    discoveredBy: "unknown",
    notableFeatures:
      "Home to the largest planetary atmosphere, with persistent storms such as the Great Red Spot.",
    habitability:
      "Not suitable for human life due to extreme pressure and composition",
    status: "Open for Visits",
    heroImage: "skywalker/planets/qc6m1xiecp7xeunagvsx",
  },
  // SATURN
  {
    name: "Saturn",
    description:
      "The sixth planet from the Sun and the second-largest in our solar system, Saturn is famed for its stunning ring system, composed of ice particles, rocky debris, and dust.",
    type: "Gas Giant",
    location: "Sixth planet from the Sun",
    distanceFromSun: "About 9.54 AU (1.43 billion km)",
    orbitalPeriod: "29.4571",
    rotationPeriod: "10.7",
    diameter: 116460,
    climate: "Extreme cold with violent storms",
    gravity: "1.065",
    moons: [
      {
        name: "Titan",
        description:
          "Largest moon of Saturn, known for its dense atmosphere and lakes of liquid methane.",
      },
      {
        name: "Enceladus",
        description:
          "Noted for its ice geysers and potential subsurface ocean.",
      },
      {
        name: "Rhea",
        description:
          "The second-largest moon of Saturn, characterized by its heavily cratered surface and thin atmosphere.",
      },
      {
        name: "Iapetus",
        description:
          "Famous for its dramatic two-tone coloration and equatorial ridge.",
      },
      {
        name: "Dione",
        description:
          "Known for its wispy terrain consisting of high-albedo ice cliffs.",
      },
    ],
    ringSystem: true,
    atmosphere: {
      hydrogen: 96.3,
      helium: 3.25,
      methane: 0.45,
      waterVapor: 0.01,
    },
    imageUrls: [
      "https://res.cloudinary.com/skywalker/planets/ofwlgtac1sanltemy0db",
    ],
    discoveryDate: "1610",
    discoveredBy: "Galileo Galilei",
    notableFeatures:
      "Saturn's ring system is the most extensive and complex in the solar system, providing a spectacular feature visible even from Earth with small telescopes.",
    habitability:
      "Not habitable due to extreme pressures and temperatures, lack of a solid surface, and intense radiation.",
    status: "Research Only",
    heroImage: "skywalker/planets/ofwlgtac1sanltemy0db",
    slug: "saturn",
  },
  // DORMANT QUASAR / BLACK HOLE
  {
    name: "Dormant Quasar",
    description:
      "A formerly active quasar now in a dormant state, located at the edge of the observable universe. Once a bright beacon of immense energy, it now serves as a mysterious relic of the cosmos's dynamic past.",
    type: "Quasar",
    location: "Edge of the Observable Universe",
    distanceFromSun: "About 24.30 million light-years",
    orbitalPeriod: null,
    rotationPeriod: null,
    diameter: 0, // Quasars do not have a defined diameter in traditional sense
    climate: "N/A",
    gravity: null,
    moons: [],
    ringSystem: false,
    atmosphere: {
      hydrogen: null,
      helium: null,
      oxygenLevel: null,
      nitrogen: null,
      carbonDioxide: null,
      methane: null,
    },
    imageUrls: [
      "https://res.cloudinary.com/skywalker/planets/lxh9kgud4htsdkv8veps",
    ],
    discoveryDate: "1963",
    discoveredBy: "Astronomical observations",
    notableFeatures:
      "Once a powerful source of energy, it is now a fascinating subject for studying the life cycle of quasars and the early universe.",
    habitability:
      "Not habitable, as quasars represent the extremely energetic and distant phenomena associated with supermassive black holes at the center of galaxies.",
    status: "Open for Observation",
    heroImage: "skywalker/planets/lxh9kgud4htsdkv8veps.png",
    slug: "dormant-quasar",
  },
];
