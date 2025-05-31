import Earth from '../assets/Earth.png';
import Mars from '../assets/Mars.png';
import Uranus from '../assets/Mars.png';
import Mercury from '../assets/Uranus.png';
import Saturn from '../assets/Saturn.png';
import Neptune from '../assets/Neptune.png';
import Venus from '../assets/Venus.png';
import Jupiter from '../assets/Jupiter.png';
import Sun from '../assets/Sun.png';


export const planets = [
  {
    name: "Sun",
    description: `The Sun, a G-type main-sequence star (G2V), is the central star of our solar system, located 149.6 million kilometers from Earth on average. With a diameter of about 1.39 million kilometers, it accounts for 99.86% of the solar system’s mass. Its surface, the photosphere, emits light and heat from nuclear fusion in its core, converting hydrogen to helium. The Sun’s atmosphere includes the chromosphere and corona, with the latter reaching millions of degrees and producing solar winds. Sunspots, flares, and coronal mass ejections influence space weather, impacting Earth’s technology. Currently in its main sequence phase, it drives the solar system’s climate and sustains life on Earth.`,
    age: "4.5 billion years",
    type: "Yellow Dwarf",
    temperature: "5,500°C",
    image: Sun,
  },
  {
    name: "Mercury",
    description: `Mercury, the smallest planet in our solar system, orbits closest to the Sun at an average distance of 58 million kilometers. Its surface is heavily cratered, resembling Earth’s Moon, due to billions of years of meteorite impacts. With virtually no atmosphere to retain heat, Mercury experiences extreme temperature swings, ranging from 427°C during the day to -173°C at night. Its thin exosphere consists of trace amounts of hydrogen, helium, and oxygen. Mercury has a large iron core, making it unusually dense for its size, and recent data from NASA’s MESSENGER mission suggests possible water ice in permanently shadowed craters at its poles.`,
    age: "4.5 billion years",
    type: "Terrestrial",
    temperature: "430°C",
    image: Mercury,
  },
  {
    name: "Venus",
    description: "Venus, often called Earth’s 'sister planet' due to its similar size and composition, is the second planet from the Sun, orbiting at about 108 million kilometers. Its thick atmosphere, composed primarily of carbon dioxide with clouds of sulfuric acid, creates a runaway greenhouse effect, making it the hottest planet with surface temperatures averaging 464°C, hot enough to melt lead. The surface features vast volcanic plains, shield volcanoes like Maat Mons, and evidence of past tectonic activity. Venus rotates slowly and retrograde, meaning its day (243 Earth days) is longer than its year (225 Earth days). The crushing atmospheric pressure is 92 times that of Earth’s.",
    age: "4.6 billion years",
    type: "Terrestrial",
    temperature: "464°C",
    image: Venus,
  },
  {
    name: "Mars",
    description: "Mars, the fourth planet, orbits at 228 million kilometers from the Sun and is known as the 'Red Planet' due to iron oxide (rust) on its surface. Its thin atmosphere, mostly carbon dioxide, supports occasional dust storms that can engulf the planet. Mars hosts the solar system’s largest volcano, Olympus Mons, and a vast canyon system, Valles Marineris. Evidence of ancient riverbeds and polar ice caps suggests liquid water existed in its past, making it a prime target for life-detection missions like NASA’s Perseverance rover. Mars has two small moons, Phobos and Deimos, and a day length similar to Earth’s (24.6 hours).",
    age: "4.6 billion years",
    type: "Terrestrial",
    temperature: "-65°C",
    image: Mars,
  },
  {
    name: "Jupiter",
    description: "Jupiter, the fifth planet and largest in the solar system, is a gas giant orbiting at 778 million kilometers from the Sun. Composed mostly of hydrogen (90%) and helium, it lacks a solid surface, with its atmosphere featuring colorful bands and the Great Red Spot, a storm larger than Earth that’s raged for centuries. Jupiter’s strong magnetic field and rapid rotation (10-hour day) create intense radiation belts. It has 95 known moons, including Ganymede, the largest moon in the solar system, and a faint ring system. Its massive size could have made it a star if it had accumulated more mass during formation.",
    age: "4.6 billion years",
    type: "Gas Giant",
    temperature: "-110°C",
    image: Jupiter,
  },
  {
    name: "Saturn",
    description: "Saturn, the sixth planet, orbits at 1.4 billion kilometers from the Sun and is renowned for its stunning ring system, composed of ice and rock particles ranging from dust to mountain-sized chunks. This gas giant, made mostly of hydrogen and helium, has a low density, theoretically able to float in water. Its atmosphere displays subtle bands and occasional storms. Saturn has 145 moons, with Titan, larger than Mercury, boasting a thick atmosphere and stable bodies of surface liquid, including lakes of methane. Saturn’s rings and moons make it a key target for missions like Cassini, which revealed its complex system.",
    age: "4.6 billion years",
    type: "Gas Giant",
    temperature: "-140°C",
    image: Saturn,
  },
  {
    name: "Uranus",
    description: "Uranus, the seventh planet, orbits at 2.9 billion kilometers from the Sun and is an ice giant with a composition of water, ammonia, and methane ices beneath a hydrogen-helium atmosphere. Its pale blue-green color comes from methane absorbing red light. Uranus has a unique 98-degree axial tilt, likely from a massive ancient collision, causing extreme seasonal variations during its 84-year orbit. It has 27 known moons, named after literary characters, and a faint ring system discovered in 1977. Its cold, featureless atmosphere and low internal heat make it less dynamic than other gas giants.",
    age: "4.6 billion years",
    type: "Ice Giant",
    temperature: "-195°C",
    image: Uranus,
  },
  {
    name: "Neptune",
    description: "Neptune, the eighth and farthest planet from the Sun at 4.5 billion kilometers, is an ice giant with a vivid blue atmosphere due to methane and an unknown component. Its dynamic weather includes the fastest winds in the solar system, reaching 2,400 km/h, and features like the Great Dark Spot, a storm observed by Voyager 2. Neptune’s composition is similar to Uranus, with water, ammonia, and methane ices. It has 14 known moons, including Triton, which may be a captured Kuiper Belt object with geysers. Neptune’s faint rings and distant orbit make it challenging to study.",
    age: "4.6 billion years",
    type: "Ice Giant",
    temperature: "-200°C",
    image: Neptune,
  }
];
