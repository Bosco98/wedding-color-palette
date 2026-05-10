import type { Palette } from '../types/palette';

export const createPaletteSearchUrls = (paletteTitle: string) => {
  const query = `${paletteTitle}-wedding guest outfit`;
  const encoded = encodeURIComponent(query);

  return {
    google: `https://www.google.com/search?q=${encoded}&tbm=isch`,
    brave: `https://search.brave.com/images?q=${encoded}`,
    pinterest: `https://www.pinterest.com/search/pins/?q=${encoded}`,
  };
};

export const buildShareText = (palette: Palette) =>
  `Check out this ${palette.title} wedding color palette: ${palette.colors.map((c) => c.hex).join(', ')}`;

export const copyText = async (text: string): Promise<boolean> => {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Fall through to legacy approach.
    }
  }

  const textArea = document.createElement('textarea');
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();

  try {
    return document.execCommand('copy');
  } finally {
    document.body.removeChild(textArea);
  }
};
