import type { NewDestination } from "@/server/db/helpers";

const kepler186f: NewDestination = {
  name: "Kepler-186f",
  slug: "kepler-186f",
  description:
    "Kepler-186f is known for its Earth-like qualities, offering lush landscapes, vibrant oceans, and diverse ecosystems. Visitors can enjoy eco-tours, exotic wildlife safaris, and luxury resorts nestled in pristine environments.",
  planet: {
    slug: "kepler-186f",
    name: "Kepler-186f",
    image: "kepler-186f.jpg",
  },
  distanceFromEarth: "490 light years",
  travelTime: "3 years (subjective), 6 months (Earth time)",
  attractions: [
    {
      name: "Lush Landscapes",
      description:
        "Explore the dense forests and rolling hills of Kepler-186f, teeming with alien flora and fauna.",
    },
    {
      name: "Vibrant Oceans",
      description:
        "Dive into the crystal-clear waters and discover underwater ecosystems unlike any on Earth.",
    },
    {
      name: "Luxury Resorts",
      description:
        "Stay in eco-friendly luxury resorts that blend seamlessly with the natural environment.",
    },
  ],
  heroImage: "kepler-186f-hero.jpg",
  imageUrls: ["kepler-186f-1.jpg", "kepler-186f-2.jpg", "kepler-186f-3.jpg"],
  climate: "Temperate",
  gravity: "0.9g",
  safetyRating: "A",
  visitorRating: "4.8",
  visitorReviews: [
    {
      reviewer: "Alice Johnson",
      rating: 5,
      comment:
        "An absolutely stunning planet! The eco-tours were enlightening and the wildlife was mesmerizing.",
    },
    {
      reviewer: "Bob Smith",
      rating: 4.5,
      comment: "Loved the luxury resort! Perfect blend of comfort and nature.",
    },
  ],
  averageCostPerDay: 300,
  popularActivities: ["Eco-tours", "Wildlife Safaris", "Snorkeling"],
  researchFacilities: "Biological Research Center",
  culturalSignificance:
    "One of the first Earth-like exoplanets discovered, symbolizing hope for habitable worlds.",
  historicalEvents: [
    {
      event: "Discovery",
      date: "2014",
      description:
        "Kepler-186f was discovered by NASA's Kepler spacecraft, marking a milestone in the search for habitable planets.",
    },
  ],
};

const proximaCentauriB: NewDestination = {
  name: "Proxima Centauri b",
  slug: "proxima-centauri-b",
  description:
    "Located in the habitable zone of Proxima Centauri, this planet features stunning, rugged terrain with towering mountains and deep valleys. Adventure seekers can explore uncharted territories and participate in extreme sports adapted for alien landscapes.",
  planet: {
    slug: "proxima-centauri-b",
    name: "Proxima Centauri b",
    image: "proxima-centauri-b.jpg",
  },
  distanceFromEarth: "4.24 light years",
  travelTime: "1 month (subjective), 1 week (Earth time)",
  attractions: [
    {
      name: "Towering Mountains",
      description:
        "Scale the majestic mountains and enjoy breathtaking views of the planet's rugged landscape.",
    },
    {
      name: "Deep Valleys",
      description:
        "Hike through the deep valleys and discover the unique geological formations.",
    },
    {
      name: "Extreme Sports",
      description:
        "Engage in extreme sports like alien rock climbing and zero-gravity paragliding.",
    },
  ],
  heroImage: "proxima-centauri-b-hero.jpg",
  imageUrls: [
    "proxima-centauri-b-1.jpg",
    "proxima-centauri-b-2.jpg",
    "proxima-centauri-b-3.jpg",
  ],
  climate: "Arid",
  gravity: "1.1g",
  safetyRating: "B",
  visitorRating: "4.5",
  visitorReviews: [
    {
      reviewer: "Carol Diaz",
      rating: 4.7,
      comment:
        "The adventure sports on Proxima Centauri b are unmatched! A must-visit for thrill-seekers.",
    },
    {
      reviewer: "Dan Williams",
      rating: 4.3,
      comment:
        "Stunning landscapes and challenging terrains. The experience was exhilarating.",
    },
  ],
  averageCostPerDay: 250,
  popularActivities: ["Rock Climbing", "Paragliding", "Hiking"],
  researchFacilities: "Geological Research Station",
  culturalSignificance:
    "Closest exoplanet to Earth, symbolizing the first step in interstellar exploration.",
  historicalEvents: [
    {
      event: "First Expedition",
      date: "2035",
      description:
        "The first manned expedition to Proxima Centauri b marked the beginning of humanity's interstellar adventures.",
    },
  ],
};

const jupiterCloudCities: NewDestination = {
  name: "Jupiter’s Cloud Cities",
  slug: "jupiters-cloud-cities",
  description:
    "Floating habitats in the upper atmosphere of Jupiter, where travelers can experience the beauty of swirling gas clouds and lightning storms from the safety of high-tech cities. Attractions include zero-gravity sports, skydiving from floating platforms, and observatories for studying the planet’s weather systems.",
  planet: {
    slug: "jupiter",
    name: "Jupiter",
    image: "jupiter.jpg",
  },
  distanceFromEarth: "778 million kilometers",
  travelTime: "5 months (subjective), 2 months (Earth time)",
  attractions: [
    {
      name: "Zero-Gravity Sports",
      description:
        "Participate in thrilling zero-gravity sports unique to Jupiter’s atmosphere.",
    },
    {
      name: "Skydiving from Floating Platforms",
      description:
        "Experience the ultimate adrenaline rush by skydiving from floating platforms high above Jupiter.",
    },
    {
      name: "Weather Observatories",
      description:
        "Study Jupiter’s complex weather systems and observe its famous Great Red Spot.",
    },
  ],
  heroImage: "jupiters-cloud-cities-hero.jpg",
  imageUrls: [
    "jupiters-cloud-cities-1.jpg",
    "jupiters-cloud-cities-2.jpg",
    "jupiters-cloud-cities-3.jpg",
  ],
  climate: "Gas Giant",
  gravity: "2.5g",
  safetyRating: "B",
  visitorRating: "4.6",
  visitorReviews: [
    {
      reviewer: "Emily Green",
      rating: 4.8,
      comment:
        "Skydiving from the floating platforms was an experience of a lifetime! Highly recommended.",
    },
    {
      reviewer: "Frank Martin",
      rating: 4.4,
      comment:
        "The zero-gravity sports were incredibly fun and unique. Jupiter's atmosphere is mesmerizing.",
    },
  ],
  averageCostPerDay: 400,
  popularActivities: [
    "Zero-Gravity Sports",
    "Skydiving",
    "Weather Observation",
  ],
  researchFacilities: "Atmospheric Research Center",
  culturalSignificance:
    "Known for its stunning and dynamic atmosphere, Jupiter represents the grandeur and complexity of our solar system.",
  historicalEvents: [
    {
      event: "Construction of Cloud Cities",
      date: "2070",
      description:
        "The first floating city was constructed in Jupiter's atmosphere, marking a milestone in human engineering.",
    },
  ],
};

const saturnsRings: NewDestination = {
  name: "Saturn’s Rings",
  slug: "saturns-rings",
  description:
    "Stay in luxury hotels built into the rings of Saturn, offering breathtaking views of the planet and its moons. Activities include ring-surfing, space-yachting, and guided tours of the moon Titan.",
  planet: {
    slug: "saturn",
    name: "Saturn",
    image: "saturn.jpg",
  },
  distanceFromEarth: "1.2 billion kilometers",
  travelTime: "8 months (subjective), 3 months (Earth time)",
  attractions: [
    {
      name: "Ring-Surfing",
      description:
        "Surf along the icy particles of Saturn's rings and enjoy a unique space adventure.",
    },
    {
      name: "Space-Yachting",
      description:
        "Cruise through Saturn's rings on luxurious space yachts with panoramic views.",
    },
    {
      name: "Guided Tours of Titan",
      description:
        "Explore the intriguing surface of Titan with expert guides.",
    },
  ],
  heroImage: "saturns-rings-hero.jpg",
  climate: "Cold",
  gravity: "1.1g",
  safetyRating: "A",
  visitorRating: "4.9",
  visitorReviews: [
    {
      reviewer: "George Lucas",
      rating: 5,
      comment:
        "The views from the luxury hotels are out of this world! A truly unforgettable experience.",
    },
    {
      reviewer: "Hannah Brown",
      rating: 4.8,
      comment:
        "Ring-surfing was exhilarating! Saturn’s rings are a must-see for any space traveler.",
    },
  ],
  averageCostPerDay: 500,
  popularActivities: ["Ring-Surfing", "Space-Yachting", "Titan Tours"],
  researchFacilities: "Astrophysics Lab",
  culturalSignificance:
    "Saturn’s rings are iconic and symbolize the beauty and mystery of our solar system.",
  historicalEvents: [
    {
      event: "First Manned Mission",
      date: "2055",
      description:
        "The first manned mission to Saturn’s rings provided unprecedented insights into their composition and dynamics.",
    },
  ],
  imageUrls: [
    "lunar-base-alpha-1.jpg",
    "lunar-base-alpha-2.jpg",
    "lunar-base-alpha-3.jpg",
  ],
};

const lunarBaseAlpha: NewDestination = {
  name: "Lunar Base Alpha",
  slug: "lunar-base-alpha",
  description:
    "A well-established colony on Earth’s Moon, featuring research labs, residential areas, and tourist attractions. Visitors can experience low-gravity fun, lunar rover expeditions, and historical tours of the Apollo landing sites.",
  planet: {
    slug: "moon",
    name: "Moon",
    image: "moon.jpg",
  },
  distanceFromEarth: "384,400 kilometers",
  travelTime: "3 days (subjective), 3 days (Earth time)",
  attractions: [
    {
      name: "Low-Gravity Fun",
      description:
        "Experience the unique sensation of low gravity with various fun activities.",
    },
    {
      name: "Lunar Rover Expeditions",
      description:
        "Drive across the Moon's surface in state-of-the-art lunar rovers.",
    },
    {
      name: "Apollo Landing Sites",
      description:
        "Tour the historic sites of the Apollo missions and learn about human space exploration.",
    },
  ],
  heroImage: "lunar-base-alpha-hero.jpg",
  imageUrls: [
    "lunar-base-alpha-1.jpg",
    "lunar-base-alpha-2.jpg",
    "lunar-base-alpha-3.jpg",
  ],
  climate: "No Atmosphere",
  gravity: "0.16g",
  safetyRating: "A",
  visitorRating: "4.7",
  visitorReviews: [
    {
      reviewer: "Ian Clarke",
      rating: 4.9,
      comment:
        "Walking on the Moon is an unparalleled experience! The historical tours were very informative.",
    },
    {
      reviewer: "Jane Smith",
      rating: 4.5,
      comment:
        "Loved the low-gravity activities and the rover expeditions. A must-visit for space enthusiasts.",
    },
  ],
  averageCostPerDay: 200,
  popularActivities: [
    "Low-Gravity Sports",
    "Rover Expeditions",
    "Historical Tours",
  ],
  researchFacilities: "Lunar Research Station",
  culturalSignificance:
    "The Moon is humanity's first step in space exploration and holds significant historical importance.",
  historicalEvents: [
    {
      event: "First Moon Landing",
      date: "1969",
      description:
        "Apollo 11's landing marked a monumental achievement in human history.",
    },
  ],
};

const europaIceCaves: NewDestination = {
  name: "Europa Ice Caves",
  slug: "europa-ice-caves",
  description:
    "Beneath the icy surface of Jupiter’s moon Europa lies a network of caves filled with liquid water. This destination offers ice climbing, underwater exploration, and the chance to discover alien life forms in its subterranean oceans.",
  planet: {
    slug: "europa",
    name: "Europa",
    image: "europa.jpg",
  },
  distanceFromEarth: "628.3 million kilometers",
  travelTime: "6 months (subjective), 2 months (Earth time)",
  attractions: [
    {
      name: "Ice Climbing",
      description: "Scale the icy walls of Europa's subterranean caves.",
    },
    {
      name: "Underwater Exploration",
      description:
        "Dive into the liquid water beneath Europa's surface and discover alien ecosystems.",
    },
    {
      name: "Alien Life Discovery",
      description:
        "Participate in scientific missions aimed at discovering alien life forms in Europa's oceans.",
    },
  ],
  heroImage: "europa-ice-caves-hero.jpg",
  imageUrls: [
    "europa-ice-caves-1.jpg",
    "europa-ice-caves-2.jpg",
    "europa-ice-caves-3.jpg",
  ],
  climate: "Icy",
  gravity: "0.13g",
  safetyRating: "B",
  visitorRating: "4.6",
  visitorReviews: [
    {
      reviewer: "Laura Stevens",
      rating: 4.8,
      comment:
        "The ice caves are stunning and the underwater exploration was unlike anything I've ever experienced.",
    },
    {
      reviewer: "Mark Wilson",
      rating: 4.4,
      comment:
        "A fascinating destination for adventurers and scientists alike.",
    },
  ],
  averageCostPerDay: 350,
  popularActivities: [
    "Ice Climbing",
    "Underwater Exploration",
    "Scientific Missions",
  ],
  researchFacilities: "Subterranean Research Lab",
  culturalSignificance:
    "Europa's potential for harboring life makes it a focal point for astrobiological studies.",
  historicalEvents: [
    {
      event: "First Discovery of Water",
      date: "2025",
      description:
        "NASA's Europa Clipper mission confirmed the presence of liquid water beneath Europa's ice.",
    },
  ],
};

const alphaCentauriPrime: NewDestination = {
  name: "Alpha Centauri Prime",
  slug: "alpha-centauri-prime",
  description:
    "A bustling metropolis on a planet orbiting Alpha Centauri, known for its rich cultural diversity and advanced technology. Tourists can immerse themselves in alien art, cuisine, and architecture, and attend interstellar festivals.",
  planet: {
    slug: "alpha-centauri",
    name: "Alpha Centauri",
    image: "alpha-centauri.jpg",
  },
  distanceFromEarth: "4.37 light years",
  travelTime: "2 months (subjective), 2 weeks (Earth time)",
  attractions: [
    {
      name: "Alien Art",
      description:
        "Explore galleries showcasing the art of various alien species.",
    },
    {
      name: "Interstellar Cuisine",
      description: "Enjoy a diverse array of dishes from across the galaxy.",
    },
    {
      name: "Architectural Tours",
      description:
        "Marvel at the advanced and unique architecture of Alpha Centauri Prime.",
    },
  ],
  heroImage: "alpha-centauri-prime-hero.jpg",
  imageUrls: [
    "alpha-centauri-prime-1.jpg",
    "alpha-centauri-prime-2.jpg",
    "alpha-centauri-prime-3.jpg",
  ],
  climate: "Temperate",
  gravity: "1.0g",
  safetyRating: "A",
  visitorRating: "4.9",
  visitorReviews: [
    {
      reviewer: "Olivia Taylor",
      rating: 5,
      comment: "A cultural paradise! The art and food were out of this world.",
    },
    {
      reviewer: "Lucas Harris",
      rating: 4.8,
      comment:
        "Alpha Centauri Prime is a must-visit for anyone interested in alien cultures.",
    },
  ],
  averageCostPerDay: 450,
  popularActivities: ["Art Galleries", "Culinary Tours", "Festival Attendance"],
  researchFacilities: "Cultural Research Institute",
  culturalSignificance:
    "A hub of cultural exchange, Alpha Centauri Prime exemplifies interstellar unity.",
  historicalEvents: [
    {
      event: "First Contact",
      date: "2085",
      description:
        "Humans established contact with the advanced civilizations of Alpha Centauri.",
    },
  ],
};

const vegaStation: NewDestination = {
  name: "Vega Station",
  slug: "vega-station",
  description:
    "A large space station orbiting the star Vega, serving as a major trading and cultural hub. The station features a mix of species from across the galaxy, with marketplaces, entertainment venues, and cultural exchanges.",
  planet: {
    slug: "vega",
    name: "Vega",
    image: "vega.jpg",
  },
  distanceFromEarth: "25 light years",
  travelTime: "4 months (subjective), 1 month (Earth time)",
  attractions: [
    {
      name: "Galactic Marketplaces",
      description: "Shop for unique goods and artifacts from different worlds.",
    },
    {
      name: "Entertainment Venues",
      description:
        "Enjoy a variety of entertainment options, from theaters to interstellar sports.",
    },
    {
      name: "Cultural Exchanges",
      description:
        "Participate in cultural events and learn about different species.",
    },
  ],
  heroImage: "vega-station-hero.jpg",
  imageUrls: ["vega-station-1.jpg", "vega-station-2.jpg", "vega-station-3.jpg"],
  climate: "Controlled",
  gravity: "1.0g",
  safetyRating: "A",
  visitorRating: "4.7",
  visitorReviews: [
    {
      reviewer: "Zara Morgan",
      rating: 4.8,
      comment:
        "Vega Station is a vibrant and exciting place. The marketplace is incredible!",
    },
    {
      reviewer: "Ethan Brooks",
      rating: 4.6,
      comment:
        "Loved the cultural exchanges and the variety of entertainment options.",
    },
  ],
  averageCostPerDay: 300,
  popularActivities: ["Shopping", "Theater", "Sports"],
  researchFacilities: "Interstellar Research Hub",
  culturalSignificance:
    "Vega Station is a beacon of interstellar commerce and cultural diversity.",
  historicalEvents: [
    {
      event: "Opening of Vega Station",
      date: "2100",
      description:
        "The grand opening of Vega Station marked a new era in interstellar trade and cultural exchange.",
    },
  ],
};

const ceresMiningColony: NewDestination = {
  name: "Ceres Mining Colony",
  slug: "ceres-mining-colony",
  description:
    "Located on the dwarf planet Ceres within the asteroid belt, this colony offers tours of its mining operations, space walks along the surface, and educational exhibits on asteroid mining technology.",
  planet: {
    slug: "ceres",
    name: "Ceres",
    image: "ceres.jpg",
  },
  distanceFromEarth: "413 million kilometers",
  travelTime: "5 months (subjective), 2 months (Earth time)",
  attractions: [
    {
      name: "Mining Operation Tours",
      description:
        "Learn about the mining operations and see the machinery in action.",
    },
    {
      name: "Space Walks",
      description:
        "Experience walking on the surface of Ceres with guided space walks.",
    },
    {
      name: "Educational Exhibits",
      description:
        "Explore exhibits detailing the technology and history of asteroid mining.",
    },
  ],
  heroImage: "ceres-mining-colony-hero.jpg",
  imageUrls: [
    "ceres-mining-colony-1.jpg",
    "ceres-mining-colony-2.jpg",
    "ceres-mining-colony-3.jpg",
  ],
  climate: "Cold",
  gravity: "0.27g",
  safetyRating: "B",
  visitorRating: "4.4",
  visitorReviews: [
    {
      reviewer: "Ryan Clark",
      rating: 4.6,
      comment:
        "The mining tours were fascinating, and the space walk was an unforgettable experience.",
    },
    {
      reviewer: "Sophia Lee",
      rating: 4.2,
      comment:
        "A great destination for those interested in space technology and mining.",
    },
  ],
  averageCostPerDay: 220,
  popularActivities: ["Mining Tours", "Space Walks", "Educational Exhibits"],
  researchFacilities: "Mining Technology Lab",
  culturalSignificance:
    "Ceres plays a crucial role in providing resources for space colonization.",
  historicalEvents: [
    {
      event: "Establishment of Mining Colony",
      date: "2065",
      description:
        "The establishment of the mining colony on Ceres marked a significant achievement in space resource utilization.",
    },
  ],
};

const pallasObservatory: NewDestination = {
  name: "Pallas Observatory",
  slug: "pallas-observatory",
  description:
    "An astronomical observatory on the asteroid Pallas, providing unparalleled views of the stars and galaxies. Visitors can participate in stargazing events, astronomy workshops, and guided tours of the observatory.",
  planet: {
    slug: "pallas",
    name: "Pallas",
    image: "pallas.jpg",
  },
  distanceFromEarth: "414 million kilometers",
  travelTime: "5 months (subjective), 2 months (Earth time)",
  attractions: [
    {
      name: "Stargazing Events",
      description:
        "Join stargazing events and observe the universe through powerful telescopes.",
    },
    {
      name: "Astronomy Workshops",
      description:
        "Participate in workshops and learn about the latest discoveries in astronomy.",
    },
    {
      name: "Guided Observatory Tours",
      description:
        "Take a tour of the observatory and see the advanced equipment used for astronomical research.",
    },
  ],
  heroImage: "pallas-observatory-hero.jpg",
  imageUrls: [
    "pallas-observatory-1.jpg",
    "pallas-observatory-2.jpg",
    "pallas-observatory-3.jpg",
  ],
  climate: "Cold",
  gravity: "0.28g",
  safetyRating: "A",
  visitorRating: "4.7",
  visitorReviews: [
    {
      reviewer: "Nathan Reed",
      rating: 4.9,
      comment:
        "The stargazing events were spectacular, and the workshops were very informative.",
    },
    {
      reviewer: "Lily Turner",
      rating: 4.6,
      comment:
        "A must-visit for astronomy enthusiasts. The views of the stars are breathtaking.",
    },
  ],
  averageCostPerDay: 240,
  popularActivities: ["Stargazing", "Workshops", "Tours"],
  researchFacilities: "Astronomical Research Center",
  culturalSignificance:
    "Pallas Observatory is a key site for astronomical observations and research.",
  historicalEvents: [
    {
      event: "First Observation",
      date: "2090",
      description:
        "The first observations made from Pallas Observatory provided new insights into distant galaxies.",
    },
  ],
};

const gliese581g: NewDestination = {
  name: "Gliese 581g",
  slug: "gliese-581g",
  description:
    "A planet with a unique atmosphere and stunning natural formations, including crystal forests, floating islands, and bioluminescent flora. Ideal for nature lovers and photographers.",
  planet: {
    slug: "gliese-581g",
    name: "Gliese 581g",
    image: "gliese-581g.jpg",
  },
  distanceFromEarth: "20.3 light years",
  travelTime: "3 months (subjective), 1 month (Earth time)",
  attractions: [
    {
      name: "Crystal Forests",
      description: "Explore the beautiful and otherworldly crystal forests.",
    },
    {
      name: "Floating Islands",
      description:
        "Visit the floating islands that hover above the planet's surface.",
    },
    {
      name: "Bioluminescent Flora",
      description:
        "Witness the breathtaking glow of bioluminescent plants at night.",
    },
  ],
  heroImage: "gliese-581g-hero.jpg",
  imageUrls: ["gliese-581g-1.jpg", "gliese-581g-2.jpg", "gliese-581g-3.jpg"],
  climate: "Mild",
  gravity: "0.96g",
  safetyRating: "A",
  visitorRating: "4.8",
  visitorReviews: [
    {
      reviewer: "Emma Davis",
      rating: 5,
      comment:
        "The crystal forests and bioluminescent flora are simply magical. A photographer's dream.",
    },
    {
      reviewer: "James Miller",
      rating: 4.7,
      comment: "An awe-inspiring destination with stunning natural beauty.",
    },
  ],
  averageCostPerDay: 350,
  popularActivities: ["Nature Hikes", "Photography", "Exploration"],
  researchFacilities: "Environmental Research Center",
  culturalSignificance:
    "Gliese 581g is known for its unique natural beauty and potential for hosting life.",
  historicalEvents: [
    {
      event: "Discovery",
      date: "2010",
      description:
        "Gliese 581g was discovered by astronomers and hailed as a potential habitable planet.",
    },
  ],
};

const horseheadNebula: NewDestination = {
  name: "The Horsehead Nebula",
  slug: "the-horsehead-nebula",
  description:
    "A space tourism destination where travelers can witness the majestic beauty of the Horsehead Nebula up close. Space cruises offer panoramic views, and visitors can enjoy zero-gravity dining and luxury accommodations on specialized spacecraft.",
  planet: {
    slug: "horsehead-nebula",
    name: "Horsehead Nebula",
    image: "horsehead-nebula.jpg",
  },
  distanceFromEarth: "1,500 light years",
  travelTime: "5 years (subjective), 1 year (Earth time)",
  attractions: [
    {
      name: "Space Cruises",
      description:
        "Enjoy panoramic views of the nebula from luxurious space cruises.",
    },
    {
      name: "Zero-Gravity Dining",
      description:
        "Experience fine dining in zero gravity with stunning nebula views.",
    },
    {
      name: "Luxury Accommodations",
      description:
        "Stay in high-end accommodations designed for comfort in space.",
    },
  ],
  heroImage: "horsehead-nebula-hero.jpg",
  imageUrls: [
    "horsehead-nebula-1.jpg",
    "horsehead-nebula-2.jpg",
    "horsehead-nebula-3.jpg",
  ],
  climate: "Space",
  gravity: "0g",
  safetyRating: "A",
  visitorRating: "4.9",
  visitorReviews: [
    {
      reviewer: "Grace Thompson",
      rating: 5,
      comment:
        "The views of the Horsehead Nebula are absolutely breathtaking. A must-see for any space traveler.",
    },
    {
      reviewer: "Henry Moore",
      rating: 4.8,
      comment:
        "Zero-gravity dining was an unforgettable experience. The space cruise was luxurious and comfortable.",
    },
  ],
  averageCostPerDay: 1000,
  popularActivities: ["Space Cruises", "Dining", "Luxury Stays"],
  researchFacilities: "Astrophysics Observatory",
  culturalSignificance:
    "The Horsehead Nebula is an iconic and visually stunning region of space.",
  historicalEvents: [
    {
      event: "First Space Cruise",
      date: "2105",
      description:
        "The first space cruise to the Horsehead Nebula marked a new era in space tourism.",
    },
  ],
};

const marsHistoricalPark: NewDestination = {
  name: "Mars Historical Park",
  slug: "mars-historical-park",
  description:
    "Experience the history of human exploration on Mars with tours of the original landing sites, preserved habitats, and interactive museums detailing the journey from Earth to Mars colonization.",
  planet: {
    slug: "mars",
    name: "Mars",
    image: "mars.jpg",
  },
  distanceFromEarth: "225 million kilometers",
  travelTime: "6 months (subjective), 6 months (Earth time)",
  attractions: [
    {
      name: "Landing Site Tours",
      description:
        "Visit the historic landing sites of the first Mars missions.",
    },
    {
      name: "Preserved Habitats",
      description: "Explore the preserved habitats of the first Mars settlers.",
    },
    {
      name: "Interactive Museums",
      description:
        "Learn about the history of Mars exploration through interactive exhibits.",
    },
  ],
  heroImage: "mars-historical-park-hero.jpg",
  imageUrls: [
    "mars-historical-park-1.jpg",
    "mars-historical-park-2.jpg",
    "mars-historical-park-3.jpg",
  ],
  climate: "Arid",
  gravity: "0.38g",
  safetyRating: "A",
  visitorRating: "4.7",
  visitorReviews: [
    {
      reviewer: "Anna Roberts",
      rating: 4.9,
      comment:
        "A fascinating and educational experience. The interactive museums were particularly engaging.",
    },
    {
      reviewer: "Chris Johnson",
      rating: 4.5,
      comment:
        "Loved the tours of the landing sites and habitats. A must-visit for space history enthusiasts.",
    },
  ],
  averageCostPerDay: 200,
  popularActivities: ["Tours", "Museum Visits", "Educational Programs"],
  researchFacilities: "Mars Research Institute",
  culturalSignificance:
    "Mars holds a significant place in human space exploration history.",
  historicalEvents: [
    {
      event: "First Human Landing",
      date: "2024",
      description:
        "The first human landing on Mars marked a monumental achievement in space exploration.",
    },
  ],
};

const milkyWayHeritageTrail: NewDestination = {
  name: "The Milky Way Heritage Trail",
  slug: "the-milky-way-heritage-trail",
  description:
    "A guided tour through significant locations in the galaxy that played pivotal roles in the history of space exploration, including the Andromeda Galaxy observation point and the birthplace of interstellar travel technologies.",
  planet: {
    slug: "milky-way",
    name: "Milky Way",
    image: "milky-way.jpg",
  },
  distanceFromEarth: "Various",
  travelTime: "Varies (subjective), Varies (Earth time)",
  attractions: [
    {
      name: "Andromeda Galaxy Observation",
      description:
        "Observe the Andromeda Galaxy from a specially designed observation point.",
    },
    {
      name: "Interstellar Travel Technologies",
      description:
        "Learn about the development of interstellar travel technologies.",
    },
    {
      name: "Historic Space Stations",
      description:
        "Visit historic space stations that played key roles in space exploration.",
    },
  ],
  heroImage: "milky-way-heritage-trail-hero.jpg",
  imageUrls: [
    "milky-way-heritage-trail-1.jpg",
    "milky-way-heritage-trail-2.jpg",
    "milky-way-heritage-trail-3.jpg",
  ],
  climate: "Varies",
  gravity: "Varies",
  safetyRating: "A",
  visitorRating: "4.8",
  visitorReviews: [
    {
      reviewer: "Daniel White",
      rating: 4.9,
      comment:
        "An amazing journey through the history of space exploration. The observation points were breathtaking.",
    },
    {
      reviewer: "Megan Scott",
      rating: 4.7,
      comment:
        "A must-do for anyone interested in the history of space travel. The guided tours were excellent.",
    },
  ],
  averageCostPerDay: 500,
  popularActivities: ["Guided Tours", "Observation", "Educational Programs"],
  researchFacilities: "Galactic History Research Center",
  culturalSignificance:
    "The Milky Way Heritage Trail showcases the milestones of space exploration.",
  historicalEvents: [
    {
      event: "First Observation of Andromeda",
      date: "1923",
      description:
        "Edwin Hubble's observation of the Andromeda Galaxy expanded our understanding of the universe.",
    },
  ],
};

export const destinations = [
  kepler186f,
  proximaCentauriB,
  jupiterCloudCities,
  saturnsRings,
  lunarBaseAlpha,
  europaIceCaves,
  alphaCentauriPrime,
  vegaStation,
  ceresMiningColony,
  pallasObservatory,
  gliese581g,
  horseheadNebula,
  marsHistoricalPark,
  milkyWayHeritageTrail,
];
