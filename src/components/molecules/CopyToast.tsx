import { ClipboardCheck } from 'lucide-react';

type CopyToastProps = {
  copiedHex: string;
};

export const CopyToast = ({ copiedHex }: CopyToastProps) => {
  return (
    <div className="animate-in slide-in-from-bottom-4 fixed bottom-8 left-1/2 z-50 flex -translate-x-1/2 items-center gap-3 rounded-full bg-slate-900 px-6 py-3 text-white shadow-2xl fade-in">
      <ClipboardCheck className="h-5 w-5 text-green-400" />
      <span className="font-medium">{copiedHex} copied to clipboard!</span>
    </div>
  );
};
