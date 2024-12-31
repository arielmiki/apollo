import { FaMusic, FaUtensils, FaGithub, FaLinkedin, FaDice, FaFilePdf, FaServer, FaCode } from 'react-icons/fa';
import content from '../data/content.json';
import { InterestItem } from '../components/InterestItem';
import { SocialLink } from '../components/SocialLink';

const iconMap = {
  FaMusic,
  FaUtensils,
  FaDice,
  FaGithub,
  FaLinkedin,
  FaServer,
  FaCode,
  FaFilePdf
};

export const Home = () => {
  const { greeting, name, pronunciation, tagline, description, interests, socialLinks } = content.home;

  return (
    <div className="max-w-3xl mx-auto w-full">
      <div className="flex flex-col">
        <p className="text-amber-700 mb-2">{greeting}</p>
        
        <h1 className="flex items-baseline gap-3 mb-1">
          <span className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight">
            {name}
          </span>
          <span className="text-xl md:text-2xl font-light text-gray-400 tracking-wide">
            {pronunciation}
          </span>
        </h1>
        
        <p className="text-base text-gray-600 italic mb-4">
          {tagline}
        </p>

        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          {description}
        </p>

        <div className="space-y-6 mb-8">
          <div className="flex flex-col gap-4">
            {interests.map((interest, index) => {
              const Icon = iconMap[interest.icon as keyof typeof iconMap];
              return (
                <InterestItem
                  key={index}
                  Icon={Icon}
                  text={interest.text}
                />
              );
            })}
          </div>
        </div>

        <div className="flex gap-6">
          {socialLinks.map((link, index) => {
            const Icon = iconMap[link.icon as keyof typeof iconMap];
            return (
              <SocialLink
                key={index}
                Icon={Icon}
                url={link.url}
                color={link.color}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}; 