import { ExperienceCard } from '../components/ExperienceCard';
import tiktokLogo from '../assets/companies/tiktok.svg';
import govtechLogo from '../assets/companies/govtech.png';
import indeedLogo from '../assets/companies/indeed.png';
import shopeeLogo from '../assets/companies/shopee.png';
import travelokaLogo from '../assets/companies/traveloka.png';

const experiences = [
  {
    company: 'Tiktok',
    position: 'Software Engineer II',
    duration: 'Feb. 2024 - Present',
    stack: ['Golang', 'Redis', 'ClickHouse', 'Python', 'SQLite', 'Abase'],
    logo: tiktokLogo,
    team: 'Live | Data Platform'
  },
  {
    company: 'GovTech',
    position: 'Software Engineer II',
    duration: 'Jul. 2023 - Jan. 2024',
    stack: ['Python', 'Golang', 'Elasticsearch', 'FastAPI', 'AWS', 'Kubernetes'],
    logo: govtechLogo,
    team: 'PIC | GASP'
  },
  {
    company: 'Indeed',
    position: 'Software Engineer II',
    duration: 'Sep. 2022 - May. 2023',
    stack: ['Java', 'React', 'Typescript', 'Spring', 'GraphQL', 'Presto', 'Python'],
    logo: indeedLogo,
    team: 'Job Seeker | ACME'
  },
  {
    company: 'Shopee',
    position: 'Software Engineer',
    duration: 'Jul. 2021 - Sep. 2022',
    stack: ['Golang', 'Python', 'Django', 'Java', 'SQL', 'Apache Flink', 'gRPC'],
    logo: shopeeLogo,
    team: 'Marketplace | Promotion'
  },
  {
    company: 'Traveloka',
    position: 'Software Engineer',
    duration: 'Dec. 2019 - Jun. 2021',
    stack: ['Java', 'AWS', 'Ansible', 'Terraform', 'SQL', 'MongoDB'],
    logo: travelokaLogo,
    team: 'Flight | PAC'
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="flex items-center">
      <div className="max-w-3xl mx-auto px-8 w-full">
        
        <div className="relative">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
}; 