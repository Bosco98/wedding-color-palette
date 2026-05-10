import type { Palette } from '../types/palette';

export const INITIAL_PALETTES: Palette[] = [
  {
    title: 'Rustic Elegance',
    colors: [
      { name: 'Rose Taupe', hex: '#926C6C' },
      { name: 'Powder Blue', hex: '#97ADAF' },
      { name: 'Parchment', hex: '#F5EADD' },
      { name: 'Tan', hex: '#CDB77D' },
      { name: 'Camouflage Green', hex: '#6E6D51' },
      { name: 'Gray Asparagus', hex: '#47503D' },
    ],
  },
  {
    title: 'Champagne',
    colors: [
      { name: 'Champagne', hex: '#F3E8D7' },
      { name: 'Almond', hex: '#F1E0D0' },
      { name: 'Seashell', hex: '#F7F1EB' },
      { name: 'Light Taupe', hex: '#B3956B' },
      { name: 'Desert Sand', hex: '#EDCBA7' },
    ],
  },
  {
    title: 'Boho Chic',
    colors: [
      { name: 'Eggshell', hex: '#F1ECE2' },
      { name: 'Windsor Tan', hex: '#B16531' },
      { name: 'Ebony', hex: '#525A4E' },
      { name: 'Chiffon Pink', hex: '#F3D7CD' },
      { name: 'Earth Yellow', hex: '#E6B36E' },
    ],
  },
  {
    title: 'Sage & Terracotta',
    colors: [
      { name: 'Laurel Green', hex: '#B1BC9D' },
      { name: 'Terracotta', hex: '#E2725B' },
      { name: 'Brick Red', hex: '#8B4442' },
      { name: 'Middle Gray', hex: '#A1937A' },
      { name: 'Burnt Orange', hex: '#D98552' },
    ],
  },
  {
    title: 'Blush and Gray',
    colors: [
      { name: 'Pale Pink', hex: '#F7DAD8' },
      { name: 'Lace Mauve', hex: '#EADBDD' },
      { name: 'Light Gray', hex: '#DCDDDD' },
      { name: 'Rhythm', hex: '#72758F' },
      { name: 'Quartz Gray', hex: '#5B5154' },
    ],
  },
  {
    title: 'Classic Romance',
    colors: [
      { name: 'Dark Scarlet', hex: '#5B021A' },
      { name: 'Burgundy', hex: '#8B0021' },
      { name: 'Peach Puff', hex: '#FFE5CE' },
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Ebony', hex: '#515A4C' },
    ],
  },
  {
    title: 'Modern Minimalism',
    colors: [
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Grullo', hex: '#B6B1A7' },
      { name: "Davy's Gray", hex: '#4F4F4F' },
      { name: 'Almond Frost', hex: '#978A7B' },
      { name: 'Silver', hex: '#C0C0C0' },
      { name: 'Black', hex: '#000000' },
    ],
  },
  {
    title: 'Frosted Winter',
    colors: [
      { name: 'Cadet Gray', hex: '#91A1B4' },
      { name: 'Silver', hex: '#C0C0C0' },
      { name: 'Steel Blue', hex: '#D1DCE8' },
      { name: 'Air Force Blue', hex: '#538BB1' },
      { name: 'Prussian Blue', hex: '#00495F' },
    ],
  },
];

export const PALETTE_MAKER_TITLE = 'Palette Maker';

export const DEFAULT_CUSTOM_COLORS = [
  { name: 'Main Tone', hex: '#E2725B' },
  { name: 'Accent', hex: '#B1BC9D' },
  { name: 'Background', hex: '#F5EADD' },
];
