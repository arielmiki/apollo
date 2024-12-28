interface SectionHeaderProps {
  title: string;
}

export const SectionHeader = ({ title }: SectionHeaderProps) => {
  return (
    <h4 className="text-lg font-semibold text-gray-900 mb-4">{title}</h4>
  );
}; 