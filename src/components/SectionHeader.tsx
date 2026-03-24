interface SectionHeaderProps {
  title: string;
}

export const SectionHeader = ({ title }: SectionHeaderProps) => {
  return (
    <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">{title}</h4>
  );
};
