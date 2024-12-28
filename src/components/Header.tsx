import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
  const location = useLocation();

  const getLinkClass = (path: string) => {
    const baseClass = "transition-colors text-sm uppercase tracking-wider";
    return location.pathname === path
      ? `${baseClass} text-amber-700 font-medium`
      : `${baseClass} text-gray-600 hover:text-teal-400`;
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-white shadow-sm">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <nav className="flex items-center space-x-8">
            <Link to="/" className={getLinkClass('/')}>Home</Link>
            <Link to="/projects" className={getLinkClass('/projects')}>Projects</Link>
            <Link to="/experience" className={getLinkClass('/experience')}>Experience</Link>
            <Link to="/education" className={getLinkClass('/education')}>Education</Link>
          </nav>
          {/* <div className="flex space-x-4">
            <a 
              href="https://github.com/arielmiki" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-amber-700 transition-colors"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com/in/arielmiki" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-amber-700 transition-colors"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
          </div> */}
        </div>
      </div>
    </header>
  );
}; 