interface ExperienceCardProps {
  company: string;
  position: string;
  duration: string;
  stack: string[];
  logo?: string;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  company,
  position,
  duration,
  stack,
  logo,
}) => {
  return (
    <div className="relative pl-8 pb-12 group">
      <div className="absolute left-0 top-2 w-3 h-3 rounded-full border-2 border-gray-400 group-hover:border-gray-600 transition-colors" />
      <div className="absolute left-[5px] top-5 bottom-0 w-0.5 bg-gray-200 group-hover:bg-gray-300 transition-colors" />
      
      <div className="bg-white rounded-lg p-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 flex-shrink-0">
              <img 
                src={logo} 
                alt={`${company} logo`} 
                className="w-full h-full object-contain" 
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{company}</h3>
              <p className="text-teal-600">{position}</p>
            </div>
          </div>
          <span className="text-gray-500 text-sm">{duration}</span>
        </div>
        
        <div className="mt-4 flex flex-wrap gap-2">
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