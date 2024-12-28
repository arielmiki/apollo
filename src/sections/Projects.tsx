import { Project } from '../components/Project';

const projects = [
  {
    title: 'Eatbuddy',
    role: 'Personal Project',
    description: [
      'Developed a restaurant discovery platform using AI-powered recommendations',
      'Implemented vector embeddings to provide personalized food and restaurant suggestions based on user preferences',
      'Integrated LLM capabilities to generate intelligent summaries of restaurant reviews and curate dish recommendations',
      'Deployed scalable microservices architecture on a bare metal home server using Kubernetes and Docker'
    ],
    stack: ['LLM', 'FastAPI', 'Langchain', 'MongoDB', 'React', 'Vite', 'Kubernetes', 'Docker'],
    link: 'https://eatbuddy.app',
  },
  {
    title: 'txtlang',
    role: 'Personal Project',
    description: [
      'Created a revolutionary programming language that enables coding using natural human language',
      'Designed and implemented a compiler that translates natural language to multiple target languages including Go and Python',
      'Built extensible architecture to support adding new target languages in the future',
      'Developed comprehensive test suite and documentation to ensure reliability and ease of use'
    ],
    stack: ['Python', 'ANTLR4', 'LLM', 'Langchain', 'FastAPI', 'Docker'],
    github: 'https://github.com/arielmiki/txtlang',
    link: 'https://txtlang.dev'
  },
  {
    title: 'KLEMM',
    role: 'Lead Backend Developer',
    description: [
      'Led backend development in a startup incubated by University of Indonesia',
      'Architected and implemented complete backend system including RESTful APIs, microservices, and database design',
      'Established robust CI/CD pipeline and infrastructure using Kubernetes, Docker, and Terraform',
      'Optimized system performance and scalability through microservices architecture and caching strategies'
    ],
    stack: ['Golang', 'gRPC', 'MongoDB', 'MySQL', 'Kubernetes', 'Docker', 'Terraform']
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="flex items-center">
      <div className="max-w-6xl mx-auto px-4">
        <div className="space-y-6">
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}; 