import { ChevronRight, ExternalLink, Search } from 'lucide-react';

import type { PaletteColor } from '../../types/palette';

type SearchUrls = {
  google: string;
  brave: string;
  pinterest: string;
};

type InspirationHubSectionProps = {
  paletteTitle: string;
  colors: PaletteColor[];
  searchUrls: SearchUrls;
};

export const InspirationHubSection = ({ paletteTitle, colors, searchUrls }: InspirationHubSectionProps) => {
  return (
    <section className="mb-16 overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/50 p-8">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500">
          <Search className="h-4 w-4" /> Integrated Inspiration Hub
        </div>
        <span className="rounded border bg-white px-2 py-1 font-mono text-[10px] text-slate-400">
          QUERY: {paletteTitle.toLowerCase()}-wedding guest outfit
        </span>
      </div>

      <div className="grid lg:grid-cols-2">
        <div className="flex flex-col justify-center p-10">
          <h4 className="mb-4 text-3xl tracking-tight text-slate-800">Explore Real Styles</h4>
          <p className="mb-8 leading-relaxed text-slate-500">
            Instantly view real-world examples for your selection. We optimized search results for guests to keep the
            wedding aesthetic cohesive.
          </p>

          <div className="space-y-3">
            <button
              onClick={() => window.open(searchUrls.google, '_blank')}
              className="group flex w-full items-center justify-between rounded-2xl bg-slate-900 p-4 font-bold text-white shadow-lg shadow-slate-200 transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="flex items-center gap-3">
                Google Images <ExternalLink className="h-4 w-4 opacity-50" />
              </span>
              <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => window.open(searchUrls.brave, '_blank')}
              className="group flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-white p-4 font-bold text-slate-800 transition-all hover:-translate-x-1 hover:bg-slate-50"
            >
              <span className="flex items-center gap-3">
                Brave Search <ExternalLink className="h-4 w-4 opacity-50" />
              </span>
              <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => window.open(searchUrls.pinterest, '_blank')}
              className="group flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-white p-4 font-bold text-slate-800 transition-all hover:-translate-x-1 hover:bg-slate-50"
            >
              <span className="flex items-center gap-3">
                Pinterest Moodboard <ExternalLink className="h-4 w-4 opacity-50" />
              </span>
              <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        <div className="relative flex min-h-[400px] flex-col items-center justify-center overflow-hidden bg-slate-100 p-6">
          <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] opacity-10 [background-size:20px_20px]" />
          <div className="relative z-10 w-full max-w-sm space-y-4">
            <div className="animate-pulse rounded-xl border border-slate-200 bg-white p-4 shadow-lg">
              <div className="mb-4 h-4 w-3/4 rounded bg-slate-100" />
              <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3].map((index) => (
                  <div key={index} className="aspect-square overflow-hidden rounded bg-slate-50">
                    <div className="h-full w-full opacity-50" style={{ backgroundColor: colors[index % colors.length]?.hex }} />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center pt-4">
              <div className="rounded-full border border-rose-100 bg-rose-50 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-rose-500">
                Live Search Links Enabled
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
