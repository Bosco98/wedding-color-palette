import type { ReactNode } from 'react';

type SectionHeaderProps = {
  icon: ReactNode;
  title: string;
  className?: string;
};

export const SectionHeader = ({ icon, title, className = '' }: SectionHeaderProps) => {
  return (
    <h3 className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest ${className}`.trim()}>
      {icon}
      {title}
    </h3>
  );
};
