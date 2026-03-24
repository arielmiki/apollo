interface InstitutionHeaderProps {
  logo: string;
  name: string;
  period: string;
  degree?: string;
}

export const InstitutionHeader = ({ logo, name, period, degree }: InstitutionHeaderProps) => {
  return (
    <>
      {degree && (
        <div className="inline-block px-4 py-2 bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 rounded-lg text-sm font-medium mb-4">
          {degree}
        </div>
      )}
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-slate-50 dark:bg-slate-800 rounded-lg p-1.5">
            <img
              src={logo}
              alt={`${name} Logo`}
              loading="lazy"
              className="w-full h-full object-contain"
            />
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">{name}</h3>
        </div>
        <p className="text-slate-500 dark:text-slate-400 text-sm">{period}</p>
      </div>
    </>
  );
};
