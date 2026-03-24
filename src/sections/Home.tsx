import { FaMusic, FaUtensils, FaGithub, FaLinkedin, FaDice, FaFilePdf, FaServer, FaCode } from 'react-icons/fa';
import content from '../data/content.json';
import { InterestItem } from '../components/InterestItem';
import { SocialLink } from '../components/SocialLink';
import { AnimatedSection } from '../components/AnimatedSection';

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
        <AnimatedSection>
          <p className="text-amber-600 dark:text-amber-400 mb-2 text-lg">{greeting}</p>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <h1 className="flex items-baseline gap-3 mb-1">
            <span className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
              {name}
            </span>
            <span className="text-xl md:text-2xl font-light text-slate-400 dark:text-slate-500 tracking-wide">
              {pronunciation}
            </span>
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <p className="text-base text-slate-500 dark:text-slate-400 italic mb-4">
            {tagline}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <p className="text-slate-600 dark:text-slate-300 text-lg mb-8 leading-relaxed">
            {description}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={400}>
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
        </AnimatedSection>

        <AnimatedSection delay={500}>
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
        </AnimatedSection>
      </div>
    </div>
  );
};
