interface ExperienceCardProps {
  company: string;
  position: string;
  duration: string;
  stack: string[];
  logo?: string;
  team?: string;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  company,
  position,
  duration,
  stack,
  logo,
  team,
}) => {
  return (
    <div className="relative pl-8 pb-12 group">
      <div className="absolute left-0 top-2 w-3 h-3 rounded-full border-2 border-slate-300 dark:border-slate-600 group-hover:border-slate-400 dark:group-hover:border-slate-500 transition-colors" />
      <div className="absolute left-[5px] top-5 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 group-hover:bg-slate-300 dark:group-hover:bg-slate-700 transition-colors" />

      <div className="bg-white dark:bg-slate-900 rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md dark:shadow-slate-900/20 dark:hover:shadow-slate-900/40 transition-all duration-300 border border-slate-100 dark:border-slate-800">
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <div className="flex items-start gap-3 md:gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 bg-slate-50 dark:bg-slate-800 rounded-lg p-1.5">
              <img
                src={logo}
                alt={`${company} logo`}
                loading="lazy"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-slate-900 dark:text-slate-100 mb-1">{company}</h3>
              <p className="text-teal-600 dark:text-teal-400 text-sm md:text-base">{position}</p>
              {team && <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{team}</p>}
            </div>
          </div>
          <span className="text-slate-400 dark:text-slate-500 text-xs md:text-sm font-medium">{duration}</span>
        </div>

        <div className="mt-3 md:mt-4 flex flex-wrap gap-1.5 md:gap-2">
          {stack.map((tech, index) => (
            <span
              key={index}
              className="px-2 md:px-3 py-1 bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 rounded-full text-xs md:text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
