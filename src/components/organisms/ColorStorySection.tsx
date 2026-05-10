import { Palette } from 'lucide-react';

import type { PaletteColor } from '../../types/palette';
import { SectionHeader } from '../atoms/SectionHeader';
import { ColorStoryCard } from '../molecules/ColorStoryCard';

type ColorStorySectionProps = {
  colors: PaletteColor[];
  onCopyHex: (hex: string) => void;
};

export const ColorStorySection = ({ colors, onCopyHex }: ColorStorySectionProps) => {
  return (
    <section className="mb-16">
      <SectionHeader icon={<Palette className="h-4 w-4" />} title="The Color Story" className="mb-6 text-slate-400" />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {colors.map((color, index) => (
          <ColorStoryCard key={`${color.hex}-${index}`} color={color} index={index} onCopy={onCopyHex} />
        ))}
      </div>
    </section>
  );
};
