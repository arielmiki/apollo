interface ProjectProps {
  title: string;
  role: string;
  description: string[];
  stack: string[];
  link?: string;
  github?: string;
}

export const Project: React.FC<ProjectProps> = ({
  title,
  role,
  description,
  stack,
  link,
  github
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 mb-6 transition-all duration-300">
      <div className="mb-6 flex justify-between items-start">
        <div>
          <div className="inline-block px-4 py-2 bg-teal-50 text-teal-600 rounded-lg text-sm font-medium mb-4">
            {role}
          </div>
          <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
        </div>
        <div className="flex gap-2">
          {github && (
            <a 
              href={github}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-600"
              title="View GitHub"
            >
              <span className="text-sm font-medium">GitHub</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          )}
          {link && (
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-600"
              title="View Project"
            >
              <span className="text-sm font-medium">View</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          )}
        </div>
      </div>
      <ul className="list-none mb-6 space-y-3">
        {description.map((item, index) => (
          <li key={index} className="text-gray-700 pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-amber-700">
            {item}
          </li>
        ))}
      </ul>
      <div className="pt-4 border-t border-gray-100">
        <div className="flex flex-wrap gap-2">
          {stack.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}; 