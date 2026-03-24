import { IconType } from 'react-icons';

interface InterestItemProps {
  Icon: IconType;
  text: string;
}

export const InterestItem = ({ Icon, text }: InterestItemProps) => {
  return (
    <div className="flex items-center gap-4 group">
      <div className="w-10 h-10 rounded-full bg-amber-50 dark:bg-amber-500/10 flex items-center justify-center transition-colors group-hover:bg-amber-100 dark:group-hover:bg-amber-500/20">
        <Icon className="w-5 h-5 text-amber-600 dark:text-amber-400" />
      </div>
      <span className="text-slate-600 dark:text-slate-300 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
        {text}
      </span>
    </div>
  );
};
