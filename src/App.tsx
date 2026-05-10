import { useMemo, useState } from 'react';

import { ColorStorySection } from './components/organisms/ColorStorySection';
import { InspirationHubSection } from './components/organisms/InspirationHubSection';
import { MobilePaletteNav } from './components/organisms/MobilePaletteNav';
import { PaletteHero } from './components/organisms/PaletteHero';
import { PaletteMakerSection } from './components/organisms/PaletteMakerSection';
import { PaletteSidebar } from './components/organisms/PaletteSidebar';
import { ThemeVibeSection } from './components/organisms/ThemeVibeSection';
import { CopyToast } from './components/molecules/CopyToast';
import { DEFAULT_CUSTOM_COLORS, INITIAL_PALETTES, PALETTE_MAKER_TITLE } from './data/palettes';
import type { Palette as PaletteModel, PaletteColor } from './types/palette';
import { buildShareText, copyText, createPaletteSearchUrls } from './utils/paletteHelpers';

const App = () => {
  const [selectedPalette, setSelectedPalette] = useState<PaletteModel>({
    title: INITIAL_PALETTES[0]?.title ?? PALETTE_MAKER_TITLE,
    colors: INITIAL_PALETTES[0]?.colors ?? [],
  });
  const [customColors, setCustomColors] = useState<PaletteColor[]>(DEFAULT_CUSTOM_COLORS);
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSharing, setIsSharing] = useState(false);

  const activePalette = useMemo(
    () =>
      selectedPalette.title === PALETTE_MAKER_TITLE
        ? { title: 'Custom Palette', colors: customColors }
        : selectedPalette,
    [selectedPalette, customColors],
  );

  const searchUrls = useMemo(() => createPaletteSearchUrls(activePalette.title), [activePalette.title]);

  const copyToClipboard = async (text: string) => {
    const copied = await copyText(text);

    if (copied) {
      setCopiedHex(text);
      window.setTimeout(() => setCopiedHex(null), 2000);
    }
  };

  const addCustomColor = () => {
    if (customColors.length >= 8) {
      return;
    }

    setCustomColors((prev) => [...prev, { name: 'New Color', hex: '#cccccc' }]);
  };

  const removeCustomColor = (index: number) => {
    if (customColors.length <= 1) {
      return;
    }

    setCustomColors((prev) => prev.filter((_, i) => i !== index));
  };

  const updateCustomColor = (index: number, key: keyof PaletteColor, value: string) => {
    setCustomColors((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [key]: value };
      return updated;
    });
  };

  const handleShare = async () => {
    setIsSharing(true);

    try {
      const shareData = {
        title: `Wedding Palette: ${activePalette.title}`,
        text: buildShareText(activePalette),
        url: window.location.href,
      };

      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await copyToClipboard(shareData.text);
        alert('Share not supported. Palette details copied to clipboard!');
      }
    } catch (error) {
      console.error('Error sharing:', error);
    } finally {
      setIsSharing(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 font-sans text-slate-800 md:flex-row">
      <PaletteSidebar
        palettes={INITIAL_PALETTES}
        selectedTitle={selectedPalette.title}
        onSelectPalette={setSelectedPalette}
        onSelectPaletteMaker={() => setSelectedPalette({ title: PALETTE_MAKER_TITLE, colors: customColors })}
      />

      <MobilePaletteNav
        isOpen={isMobileMenuOpen}
        palettes={INITIAL_PALETTES}
        selectedTitle={selectedPalette.title}
        onToggleMenu={() => setIsMobileMenuOpen((prev) => !prev)}
        onCloseMenu={() => setIsMobileMenuOpen(false)}
        onSelectPalette={setSelectedPalette}
        onSelectPaletteMaker={() => setSelectedPalette({ title: PALETTE_MAKER_TITLE, colors: customColors })}
      />

      <main className="mx-auto w-full max-w-6xl flex-1 p-6 md:p-12">
        <PaletteHero
          title={activePalette.title}
          selectedTitle={selectedPalette.title}
          isSharing={isSharing}
          onShare={() => void handleShare()}
        />

        {selectedPalette.title === PALETTE_MAKER_TITLE && (
          <PaletteMakerSection
            customColors={customColors}
            onAddColor={addCustomColor}
            onRemoveColor={removeCustomColor}
            onUpdateColor={updateCustomColor}
          />
        )}

        <ColorStorySection colors={activePalette.colors} onCopyHex={(hex) => void copyToClipboard(hex)} />
        <ThemeVibeSection colors={activePalette.colors} />
        <InspirationHubSection
          paletteTitle={activePalette.title}
          colors={activePalette.colors}
          searchUrls={searchUrls}
        />

        {copiedHex && <CopyToast copiedHex={copiedHex} />}
      </main>
    </div>
  );
};

export default App;
