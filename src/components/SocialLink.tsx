import { IconType } from 'react-icons';

interface SocialLinkProps {
  Icon: IconType;
  url: string;
  color: string;
}

export const SocialLink = ({ Icon, url, color }: SocialLinkProps) => {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      style={{ color }}
    >
      <Icon className="w-6 h-6" />
    </a>
  );
}; 