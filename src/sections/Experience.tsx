import { ExperienceCard } from '../components/ExperienceCard';
import content from '../data/content.json';
import tiktokLogo from '../assets/companies/tiktok.svg';
import govtechLogo from '../assets/companies/govtech.png';
import indeedLogo from '../assets/companies/indeed.png';
import shopeeLogo from '../assets/companies/shopee.png';
import travelokaLogo from '../assets/companies/traveloka.png';

const logoMap = {
  tiktokLogo,
  govtechLogo,
  indeedLogo,
  shopeeLogo,
  travelokaLogo
};

export const Experience = () => {
  return (
    <section id="experience" className="flex items-center">
      <div className="max-w-3xl mx-auto px-8 w-full">
        <div className="relative">
          {content.experience.positions.map((exp, index) => (
            <ExperienceCard 
              key={index} 
              {...exp} 
              logo={logoMap[exp.logo as keyof typeof logoMap]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}; 