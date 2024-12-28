import { ReactNode } from 'react';

interface BulletListProps {
  items: ReactNode[];
}

export const BulletList = ({ items }: BulletListProps) => {
  return (
    <ul className="space-y-3 text-gray-600">
      {items.map((item, index) => (
        <li key={index} className="flex items-start">
          <span className="text-amber-600 mr-2">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}; 