export interface Persona {
  id: number;
  name: string;
  role: string;
  creator: string;
  category: string;
  accent: string;
  imageClass: string;
  description: string;
  stats: {
    strength: number;
    intellect: number;
    essence: number;
    stability: number;
  };
}

export const PERSONAS: Persona[] = [
  {
    id: 1,
    name: 'Elowen',
    role: 'Oracle of the Whispering Web',
    creator: 'VoidNavigator',
    category: 'Fantasy',
    accent: '#c45cff',
    imageClass: 'portrait-elf',
    description: 'A luminous strategist who reads intent through neural echoes and old myth.',
    stats: { strength: 68, intellect: 94, essence: 87, stability: 73 }
  },
  {
    id: 2,
    name: 'Unit 374',
    role: 'A decommissioned tactical drone with a poet core',
    creator: 'CipherMancer',
    category: 'Cyberpunk',
    accent: '#25e7ff',
    imageClass: 'portrait-cyborg',
    description: 'Built for combat, rebuilt for loyalty, and still learning how silence works.',
    stats: { strength: 92, intellect: 86, essence: 58, stability: 79 }
  },
  {
    id: 3,
    name: 'Kaelen',
    role: 'A shadow-walker and memory broker',
    creator: 'NightSignal',
    category: 'Sci-Fi',
    accent: '#ff3db8',
    imageClass: 'portrait-violet',
    description: 'Trades forgotten histories for impossible favors in neon back alleys.',
    stats: { strength: 71, intellect: 82, essence: 91, stability: 66 }
  },
  {
    id: 4,
    name: 'Commander Vex',
    role: 'Veteran starship tactician of the Obsidian Armada',
    creator: 'StarForge',
    category: 'Steampunk',
    accent: '#ff7a45',
    imageClass: 'portrait-soldier',
    description: 'A disciplined commander with a clockwork heart and a dangerous sense of honor.',
    stats: { strength: 88, intellect: 77, essence: 62, stability: 90 }
  },
  {
    id: 5,
    name: 'The Archivist',
    role: 'Master of hyper-dimensional memories',
    creator: 'EchoMoth',
    category: 'Historical',
    accent: '#ffd166',
    imageClass: 'portrait-archive',
    description: 'Keeps every lost future cataloged, cross-linked, and slightly rearranged.',
    stats: { strength: 48, intellect: 98, essence: 84, stability: 76 }
  },
  {
    id: 6,
    name: 'Aethelgard the Eternal',
    role: 'Guardian of the Obsidian Spire',
    creator: 'VoidNavigator',
    category: 'Fantasy',
    accent: '#d24dff',
    imageClass: 'portrait-guardian',
    description: 'Forged in the heart of a dying pulsar, Aethelgard binds honor to shadow.',
    stats: { strength: 88, intellect: 84, essence: 72, stability: 89 }
  }
];
