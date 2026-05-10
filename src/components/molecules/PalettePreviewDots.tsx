import type { PaletteColor } from '../../types/palette';

type PalettePreviewDotsProps = {
  colors: PaletteColor[];
  dotClassName?: string;
};

export const PalettePreviewDots = ({ colors, dotClassName = 'h-2 w-2' }: PalettePreviewDotsProps) => {
  return (
    <div className="flex gap-0.5">
      {colors.slice(0, 3).map((color, index) => (
        <div key={index} className={`${dotClassName} rounded-full`.trim()} style={{ backgroundColor: color.hex }} />
      ))}
    </div>
  );
};
