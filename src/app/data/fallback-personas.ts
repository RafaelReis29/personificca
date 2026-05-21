import { Category, Persona } from '../models/persona';

export const CATEGORIES: Category[] = [
  { id: 1, name: 'Cyberpunk' },
  { id: 2, name: 'Sci-fi' },
  { id: 3, name: 'Ordinary' },
  { id: 4, name: 'Steampunk' },
  { id: 5, name: 'Fantasy' },
];

export const FALLBACK_PERSONAS: Persona[] = [
  {
    id: 1,
    name: 'Bob, The Destroyer',
    story:
      'A careful city guide who reads people quickly and keeps her promises simple.',
    category_id: 3,
    category: 'Ordinary',
    share: 'public',
    attributes: [
      { id: 1, name: 'Intelligence', level: 72 },
      { id: 2, name: 'Strength', level: 38 },
      { id: 5, name: 'Wisdom', level: 80 },
    ],
  },
  {
    id: 2,
    name: 'Henry Hacker',
    story:
      'A quiet engineer from a dense neon district, known for solving problems before sunrise.',
    category_id: 1,
    category: 'Cyberpunk',
    share: 'private',
    attributes: [
      { id: 1, name: 'Intelligence', level: 88 },
      { id: 3, name: 'Dexterity', level: 64 },
      { id: 6, name: 'Charisma', level: 42 },
    ],
  },
  {
    id: 3,
    name: 'Gisele, the Roadkeeper',
    story:
      'A patient keeper of old roads, practical maps, and small rituals that calm a group.',
    category_id: 5,
    category: 'Fantasy',
    share: 'public',
    attributes: [
      { id: 2, name: 'Strength', level: 59 },
      { id: 4, name: 'Constitution', level: 76 },
      { id: 5, name: 'Wisdom', level: 84 },
    ],
  },
];
