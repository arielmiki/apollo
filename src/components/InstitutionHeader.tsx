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
        <div className="inline-block px-4 py-2 bg-amber-50 text-amber-700 rounded-lg text-sm font-medium mb-4">
          {degree}
        </div>
      )}
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
        <div className="flex items-center gap-3">
          <img 
            src={logo} 
            alt={`${name} Logo`} 
            className="w-12 h-12 object-contain"
          />
          <h3 className="text-xl font-bold text-gray-900">{name}</h3>
        </div>
        <p className="text-gray-600 text-sm">{period}</p>
      </div>
    </>
  );
}; 