import { IconType } from 'react-icons';

interface InterestItemProps {
  Icon: IconType;
  text: string;
}

export const InterestItem = ({ Icon, text }: InterestItemProps) => {
  return (
    <div className="flex items-center gap-4 group">
      <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center">
        <Icon className="w-5 h-5 text-amber-700" />
      </div>
      <span className="text-gray-700 group-hover:text-amber-700 transition-colors">
        {text}
      </span>
    </div>
  );
}; 