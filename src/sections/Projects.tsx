import { Project } from '../components/Project';
import content from '../data/content.json';

export const Projects = () => {
  return (
    <section id="projects" className="flex items-center">
      <div className="max-w-6xl mx-auto px-4">
        <div className="space-y-6">
          {content.projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}; 